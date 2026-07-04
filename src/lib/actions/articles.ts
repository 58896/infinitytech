'use server'

import { revalidatePath } from 'next/cache'
import { adminFrom, isAdminConfigured } from '@/lib/supabase/admin'
import { requireAdminSession } from '@/lib/supabase/assert-admin'

type Result = { error?: string; success?: boolean }

export async function updateArticleMeta(
  slug: string,
  data: {
    title_ar?: string; title_en?: string
    excerpt_ar?: string; excerpt_en?: string
    seo_title_ar?: string; seo_title_en?: string
    seo_description_ar?: string; seo_description_en?: string
    is_published?: boolean
    published_at?: string | null
  }
): Promise<Result> {
  const authError = await requireAdminSession()
  if (authError) return { error: authError }
  if (!isAdminConfigured()) return { error: 'Supabase not configured' }
  const { error } = await adminFrom('articles').update(data).eq('slug', slug)
  if (error) return { error: error.message }
  revalidatePath(`/ar/articles/${slug}`)
  revalidatePath(`/en/articles/${slug}`)
  revalidatePath('/ar/admin/articles')
  return { success: true }
}

export async function toggleArticlePublished(slug: string, published: boolean): Promise<Result> {
  return updateArticleMeta(slug, {
    is_published: published,
    published_at: published ? new Date().toISOString() : null,
  })
}
