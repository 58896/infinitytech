'use client'

import { useState, useTransition, useEffect } from 'react'
import { createAnonClient, isSupabaseConfigured } from '@/lib/supabase/anon'
import { updateSettings } from '@/lib/actions/settings'

const FIELDS = [
  { key: 'phone',           label: 'Phone Number',       placeholder: '+966 57 429 5925' },
  { key: 'email',           label: 'Email Address',       placeholder: 'info@infinitytechsa.com' },
  { key: 'address_en',      label: 'Address (EN)',        placeholder: 'Riyadh, Saudi Arabia' },
  { key: 'address_ar',      label: 'Address (AR)',        placeholder: 'الرياض، المملكة العربية السعودية', dir: 'rtl' },
  { key: 'social_linkedin', label: 'LinkedIn URL',        placeholder: 'https://linkedin.com/company/...' },
  { key: 'social_twitter',  label: 'X (Twitter) URL',    placeholder: 'https://x.com/...' },
  { key: 'social_instagram',label: 'Instagram URL',      placeholder: 'https://instagram.com/...' },
  { key: 'social_youtube',  label: 'YouTube URL',        placeholder: 'https://youtube.com/...' },
  { key: 'footer_tagline_en', label: 'Footer Tagline (EN)', placeholder: 'We are a company…' },
  { key: 'footer_tagline_ar', label: 'Footer Tagline (AR)', placeholder: 'نحن شركة…', dir: 'rtl' },
]

export default function AdminSettingsPage() {
  const [values, setValues] = useState<Record<string, string>>({})
  const [isPending, startTransition] = useTransition()
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!isSupabaseConfigured()) return
    const supabase = createAnonClient()
    supabase.from('site_settings').select('key, value').then(({ data }) => {
      if (!data) return
      const parsed: Record<string, string> = {}
      data.forEach(({ key, value }) => {
        try { parsed[key] = JSON.parse(value as string) }
        catch { parsed[key] = String(value) }
      })
      setValues(parsed)
    })
  }, [])

  function handleChange(key: string, val: string) {
    setValues((prev) => ({ ...prev, [key]: val }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaved(false); setError('')
    startTransition(async () => {
      const res = await updateSettings(values)
      if (res.error) setError(res.error)
      else setSaved(true)
    })
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-white">Site Settings</h1>
        <p className="text-white/40 text-sm mt-1">Contact info, social links, and site-wide text</p>
      </div>

      {!isSupabaseConfigured() && (
        <div className="px-5 py-4 rounded-2xl text-sm" style={{ background: 'rgba(255,160,0,0.08)', border: '1px solid rgba(255,160,0,0.2)' }}>
          <span className="text-[#ffa000] font-medium">⚠ Supabase not connected</span>
          <span className="text-white/50 ml-1">— changes will save once Supabase is configured.</span>
        </div>
      )}

      {saved && (
        <div className="px-4 py-3 rounded-xl text-sm text-green-300" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}>
          ✓ Settings saved
        </div>
      )}
      {error && (
        <div className="px-4 py-3 rounded-xl text-sm text-red-300" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="rounded-2xl p-6 space-y-4" style={{ background: '#1e2736', border: '1px solid rgba(255,255,255,0.05)' }}>
        {FIELDS.map(({ key, label, placeholder, dir }) => (
          <div key={key}>
            <label className="block text-xs text-white/40 mb-1.5">{label}</label>
            <input
              value={values[key] ?? ''}
              onChange={(e) => handleChange(key, e.target.value)}
              placeholder={placeholder}
              dir={dir}
              className="admin-input w-full"
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={isPending}
          className="mt-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white disabled:opacity-50"
          style={{ background: 'linear-gradient(90deg,#0072ff,#00c6ff)' }}
        >
          {isPending ? 'Saving…' : 'Save settings'}
        </button>
      </form>
    </div>
  )
}
