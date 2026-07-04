'use server'

import { revalidatePath } from 'next/cache'
import { adminFrom, isAdminConfigured } from '@/lib/supabase/admin'
import { requireAdminSession } from '@/lib/supabase/assert-admin'

type Result = { error?: string; success?: boolean; id?: string }

function projectPayload(formData: FormData) {
  const imagesRaw = formData.get('images') as string
  return {
    title_ar: formData.get('title_ar') as string,
    title_en: formData.get('title_en') as string,
    description_ar: formData.get('description_ar') as string,
    description_en: formData.get('description_en') as string,
    client_name: (formData.get('client_name') as string) || '',
    badge_ar: formData.get('badge_ar') as string,
    badge_en: formData.get('badge_en') as string,
    badge_color: (formData.get('badge_color') as string) || 'rgba(123,47,247,0.9)',
    images: imagesRaw ? imagesRaw.split('\n').map((s) => s.trim()).filter(Boolean) : [],
    is_published: formData.get('is_published') === 'true',
    sort_order: parseInt((formData.get('sort_order') as string) || '0', 10),
  }
}

export async function createProject(formData: FormData): Promise<Result> {
  const authError = await requireAdminSession()
  if (authError) return { error: authError }
  if (!isAdminConfigured()) return { error: 'Supabase not configured' }
  const { data, error } = await adminFrom('projects').insert(projectPayload(formData)).select('id').single()
  if (error) return { error: error.message }
  revalidatePath('/ar/admin/projects')
  revalidatePath('/ar'); revalidatePath('/en')
  return { success: true, id: data?.id }
}

export async function updateProject(id: string, formData: FormData): Promise<Result> {
  const authError = await requireAdminSession()
  if (authError) return { error: authError }
  if (!isAdminConfigured()) return { error: 'Supabase not configured' }
  const { error } = await adminFrom('projects').update(projectPayload(formData)).eq('id', id)
  if (error) return { error: error.message }
  revalidatePath('/ar/admin/projects')
  revalidatePath('/ar'); revalidatePath('/en')
  return { success: true }
}

export async function deleteProject(id: string): Promise<Result> {
  const authError = await requireAdminSession()
  if (authError) return { error: authError }
  if (!isAdminConfigured()) return { error: 'Supabase not configured' }
  const { error } = await adminFrom('projects').delete().eq('id', id)
  if (error) return { error: error.message }
  revalidatePath('/ar/admin/projects')
  revalidatePath('/ar'); revalidatePath('/en')
  return { success: true }
}
