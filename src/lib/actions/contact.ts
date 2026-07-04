'use server'

import { headers } from 'next/headers'
import { checkRateLimit } from '@/lib/rate-limit'
import { ContactSchema } from '@/lib/schemas/contact'
import { createAnonClient, isSupabaseConfigured } from '@/lib/supabase/anon'

type ContactResult = {
  success?: boolean
  error?: string
  fieldErrors?: Partial<Record<string, string[]>>
}

export async function submitContact(data: unknown): Promise<ContactResult> {
  const parsed = ContactSchema.safeParse(data)
  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors }
  }

  const ip = headers().get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (!checkRateLimit(`contact:${ip}`, 5, 15 * 60 * 1000)) {
    return { error: 'rate_limited' }
  }

  if (!isSupabaseConfigured()) return { success: true }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await createAnonClient().from('leads').insert([parsed.data] as any)
  if (error) return { error: error.message }

  return { success: true }
}
