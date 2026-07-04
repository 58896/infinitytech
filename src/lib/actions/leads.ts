'use server'

import { revalidatePath } from 'next/cache'
import { adminFrom, isAdminConfigured } from '@/lib/supabase/admin'
import { requireAdminSession } from '@/lib/supabase/assert-admin'

type Result = { error?: string; success?: boolean }

export async function updateLeadStatus(
  id: string,
  status: 'new' | 'read' | 'responded'
): Promise<Result> {
  const authError = await requireAdminSession()
  if (authError) return { error: authError }
  if (!isAdminConfigured()) return { error: 'Supabase not configured' }
  const { error } = await adminFrom('leads').update({ status }).eq('id', id)
  if (error) return { error: error.message }
  revalidatePath('/ar/admin/leads')
  return { success: true }
}

export async function deleteLead(id: string): Promise<Result> {
  const authError = await requireAdminSession()
  if (authError) return { error: authError }
  if (!isAdminConfigured()) return { error: 'Supabase not configured' }
  const { error } = await adminFrom('leads').delete().eq('id', id)
  if (error) return { error: error.message }
  revalidatePath('/ar/admin/leads')
  return { success: true }
}
