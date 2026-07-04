'use server'

import { headers } from 'next/headers'
import { checkRateLimit } from '@/lib/rate-limit'
import { JobApplicationSchema } from '@/lib/schemas/job-application'
import { adminFrom, createAdminClient, isAdminConfigured } from '@/lib/supabase/admin'

type JobResult = {
  success?: boolean
  error?: string
  fieldErrors?: Partial<Record<string, string[]>>
}

export async function submitJobApplication(formData: FormData): Promise<JobResult> {
  const raw = {
    job_listing_id: formData.get('job_listing_id'),
    applicant_name: formData.get('applicant_name'),
    email: formData.get('email'),
    phone: formData.get('phone') || undefined,
    cover_letter: formData.get('cover_letter') || undefined,
  }

  const parsed = JobApplicationSchema.safeParse(raw)
  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors }
  }

  const ip = headers().get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (!checkRateLimit(`jobs:${ip}`, 3, 60 * 60 * 1000)) {
    return { error: 'rate_limited' }
  }

  if (!isAdminConfigured()) return { success: true }

  // Verify the job listing exists and is published
  const { data: job } = await adminFrom('job_listings')
    .select('id')
    .eq('id', parsed.data.job_listing_id)
    .eq('is_published', true)
    .maybeSingle()
  if (!job) return { error: 'Job listing not found or not accepting applications' }

  let resume_url: string | null = null
  const resumeFile = formData.get('resume') as File | null

  if (resumeFile && resumeFile.size > 0) {
    if (resumeFile.size > 5 * 1024 * 1024) {
      return { error: 'file_too_large' }
    }
    const allowed = ['application/pdf', 'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowed.includes(resumeFile.type)) {
      return { error: 'invalid_file_type' }
    }

    const ext = resumeFile.name.split('.').pop()
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
    const buffer = Buffer.from(await resumeFile.arrayBuffer())

    const adminClient = createAdminClient()
    const { error: uploadError } = await adminClient.storage
      .from('resumes')
      .upload(filename, buffer, { contentType: resumeFile.type, upsert: false })

    if (uploadError) return { error: uploadError.message }
    resume_url = filename
  }

  const { error } = await adminFrom('job_applications').insert([{
    ...parsed.data,
    resume_url,
    status: 'new',
  }])

  if (error) return { error: error.message }
  return { success: true }
}
