'use server'

import { revalidatePath } from 'next/cache'
import { adminFrom, isAdminConfigured } from '@/lib/supabase/admin'
import { requireAdminSession } from '@/lib/supabase/assert-admin'

type Result = { error?: string; success?: boolean }

const ALLOWED_SETTINGS_KEYS = new Set([
  'logo_url',
  'phone',
  'email',
  'address_ar',
  'address_en',
  'social_linkedin',
  'social_twitter',
  'social_instagram',
  'social_youtube',
  'footer_tagline_ar',
  'footer_tagline_en',
])

export async function updateSettings(entries: Record<string, string>): Promise<Result> {
  const authError = await requireAdminSession()
  if (authError) return { error: authError }
  if (!isAdminConfigured()) return { error: 'Supabase not configured' }

  const rows = Object.entries(entries)
    .filter(([key]) => ALLOWED_SETTINGS_KEYS.has(key))
    .map(([key, value]) => ({ key, value: JSON.stringify(value) }))

  if (rows.length === 0) return { success: true }

  const { error } = await adminFrom('site_settings').upsert(rows, { onConflict: 'key' })
  if (error) return { error: error.message }
  revalidatePath('/ar')
  revalidatePath('/en')
  return { success: true }
}
