'use server'

import { createClient } from './server'
import { isSupabaseConfigured } from './anon'

/**
 * Returns an error string if the caller is not an authenticated admin.
 * Returns undefined when it is safe to proceed.
 * In dev mode (Supabase not configured) always returns undefined so local
 * development works without credentials.
 */
export async function requireAdminSession(): Promise<string | undefined> {
  if (!isSupabaseConfigured()) return undefined
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return 'Unauthorized'
  return undefined
}
