'use server'

import { revalidatePath } from 'next/cache'
import { adminFrom, isAdminConfigured } from '@/lib/supabase/admin'

type Result = { error?: string; success?: boolean; id?: string }

function testimonialPayload(formData: FormData) {
  return {
    name_ar: formData.get('name_ar') as string,
    name_en: formData.get('name_en') as string,
    role_ar: formData.get('role_ar') as string,
    role_en: formData.get('role_en') as string,
    content_ar: formData.get('content_ar') as string,
    content_en: formData.get('content_en') as string,
    initials: formData.get('initials') as string,
    is_published: formData.get('is_published') === 'true',
    sort_order: parseInt((formData.get('sort_order') as string) || '0', 10),
  }
}

export async function createTestimonial(formData: FormData): Promise<Result> {
  if (!isAdminConfigured()) return { error: 'Supabase not configured' }
  const { data, error } = await adminFrom('testimonials').insert(testimonialPayload(formData)).select('id').single()
  if (error) return { error: error.message }
  revalidatePath('/ar/admin/testimonials')
  revalidatePath('/ar'); revalidatePath('/en')
  return { success: true, id: data?.id }
}

export async function updateTestimonial(id: string, formData: FormData): Promise<Result> {
  if (!isAdminConfigured()) return { error: 'Supabase not configured' }
  const { error } = await adminFrom('testimonials').update(testimonialPayload(formData)).eq('id', id)
  if (error) return { error: error.message }
  revalidatePath('/ar/admin/testimonials')
  revalidatePath('/ar'); revalidatePath('/en')
  return { success: true }
}

export async function deleteTestimonial(id: string): Promise<Result> {
  if (!isAdminConfigured()) return { error: 'Supabase not configured' }
  const { error } = await adminFrom('testimonials').delete().eq('id', id)
  if (error) return { error: error.message }
  revalidatePath('/ar/admin/testimonials')
  revalidatePath('/ar'); revalidatePath('/en')
  return { success: true }
}
