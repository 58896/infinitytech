'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { submitDemo } from '@/lib/actions/demo'

type FieldErrors = Partial<Record<string, string[]>>

const PRODUCTS = ['drive-thru', 'digital-signage', 'kiosk', 'ai-camera', 'customer-feedback', 'zoom-nitro', 'leaderboard']

export default function DemoRequestForm() {
  const t = useTranslations('demo')
  const tCommon = useTranslations('common')

  const [form, setForm] = useState({
    full_name: '', email: '', phone: '', brand_name: '',
    num_locations: '', country: '', product_interest: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'rate_limited'>('idle')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setFieldErrors({})

    const result = await submitDemo({ ...form, wants_demo: true as const })

    if (result.success) {
      setStatus('success')
      setForm({ full_name: '', email: '', phone: '', brand_name: '', num_locations: '', country: '', product_interest: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } else if (result.fieldErrors) {
      setFieldErrors(result.fieldErrors)
      setStatus('idle')
    } else if (result.error === 'rate_limited') {
      setStatus('rate_limited')
      setTimeout(() => setStatus('idle'), 5000)
    } else {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const fieldErr = (name: string) => (fieldErrors as Record<string, string[] | undefined>)[name]?.[0]

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[20px] p-10 max-w-2xl mx-auto"
      style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <input required value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })}
            placeholder={t('form.name')} className={`form-input w-full${fieldErr('full_name') ? ' border-accent2' : ''}`} />
          {fieldErr('full_name') && <p className="text-accent2 text-[0.78rem] mt-1">{fieldErr('full_name')}</p>}
        </div>
        <div>
          <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder={t('form.email')} className={`form-input w-full${fieldErr('email') ? ' border-accent2' : ''}`} />
          {fieldErr('email') && <p className="text-accent2 text-[0.78rem] mt-1">{fieldErr('email')}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder={t('form.phone')} className="form-input" />
        <input value={form.brand_name} onChange={(e) => setForm({ ...form, brand_name: e.target.value })}
          placeholder={t('form.brand')} className="form-input" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input value={form.num_locations} onChange={(e) => setForm({ ...form, num_locations: e.target.value })}
          placeholder={t('form.locations')} className="form-input" />
        <input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })}
          placeholder={t('form.country')} className="form-input" />
      </div>
      <div className="mb-6">
        <select value={form.product_interest} onChange={(e) => setForm({ ...form, product_interest: e.target.value })}
          className="form-input w-full">
          <option value="">{t('form.productInterest')}</option>
          {PRODUCTS.map((p) => (
            <option key={p} value={p}>{t(`form.products.${p}`)}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full font-bold py-4 rounded-xl text-[1rem] text-[#111] transition-all hover:opacity-90 hover:-translate-y-px disabled:opacity-70"
        style={{ background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}
      >
        {status === 'loading' ? tCommon('loading') : t('form.submit')}
      </button>

      {status === 'success' && (
        <p className="text-center mt-4 font-semibold" style={{ color: '#00c864' }}>{t('form.success')}</p>
      )}
      {status === 'error' && (
        <p className="text-center mt-4 font-semibold text-accent2">{t('form.error')}</p>
      )}
      {status === 'rate_limited' && (
        <p className="text-center mt-4 font-semibold text-accent2">{t('form.rateLimited')}</p>
      )}

      <style jsx>{`
        .form-input {
          width: 100%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 10px;
          padding: 0.85rem 1.1rem;
          color: #fff;
          font-family: inherit;
          font-size: 0.93rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus { border-color: var(--primary); }
        .form-input::placeholder { color: rgba(255,255,255,0.4); }
        .form-input option { background: var(--dark2); color: #fff; }
        .border-accent2 { border-color: var(--accent2) !important; }
      `}</style>
    </form>
  )
}
