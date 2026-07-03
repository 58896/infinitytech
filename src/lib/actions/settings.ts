'use server'

import { revalidatePath } from 'next/cache'
import { adminFrom, isAdminConfigured } from '@/lib/supabase/admin'

type Result = { error?: string; success?: boolean }

export async function updateSettings(entries: Record<string, string>): Promise<Result> {
  if (!isAdminConfigured()) return { error: 'Supabase not configured' }
  const rows = Object.entries(entries).map(([key, value]) => ({
    key,
    value: JSON.stringify(value),
  }))
  const { error } = await adminFrom('site_settings').upsert(rows, { onConflict: 'key' })
  if (error) return { error: error.message }
  revalidatePath('/ar')
  revalidatePath('/en')
  return { success: true }
}
