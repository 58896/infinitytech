import { createAnonClient, isSupabaseConfigured } from '@/lib/supabase/anon'

export type JobListing = {
  id: string
  title_ar: string
  title_en: string
  department_ar: string
  department_en: string
  location_ar: string
  location_en: string
  type_ar: string
  type_en: string
  description_ar: string
  description_en: string
  requirements_ar: string[]
  requirements_en: string[]
}

const STATIC_JOBS: JobListing[] = []

export async function getJobListings(): Promise<JobListing[]> {
  if (!isSupabaseConfigured()) return STATIC_JOBS
  try {
    const { data, error } = await createAnonClient()
      .from('job_listings')
      .select('id,title_ar,title_en,department_ar,department_en,location_ar,location_en,type_ar,type_en,description_ar,description_en,requirements_ar,requirements_en')
      .eq('is_published', true)
      .order('created_at', { ascending: false })
    if (error || !data) return STATIC_JOBS
    return data as JobListing[]
  } catch {
    return STATIC_JOBS
  }
}
