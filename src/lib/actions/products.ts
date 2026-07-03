'use server'

import { revalidatePath } from 'next/cache'
import { adminFrom, isAdminConfigured } from '@/lib/supabase/admin'

type Result = { error?: string; success?: boolean }

export async function updateProductMeta(
  slug: string,
  data: {
    title_ar?: string; title_en?: string
    description_ar?: string; description_en?: string
    seo_title_ar?: string; seo_title_en?: string
    seo_description_ar?: string; seo_description_en?: string
    is_published?: boolean
  }
): Promise<Result> {
  if (!isAdminConfigured()) return { error: 'Supabase not configured' }
  const { error } = await adminFrom('products').update(data).eq('slug', slug)
  if (error) return { error: error.message }
  revalidatePath(`/ar/products/${slug}`)
  revalidatePath(`/en/products/${slug}`)
  revalidatePath('/ar/admin/products')
  return { success: true }
}

export async function toggleProductPublished(slug: string, published: boolean): Promise<Result> {
  return updateProductMeta(slug, { is_published: published })
}
