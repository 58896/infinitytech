'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { createClient } from '@/lib/supabase/client'

export default function ContactSection() {
  const t = useTranslations('contact')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  const [form, setForm] = useState({
    full_name: '', email: '', phone: '', brand_name: '',
    num_locations: '', country: '', message: '', wants_demo: false,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const supabase = createClient()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { error } = await supabase.from('leads').insert([form] as any)
      if (error) throw error
      setStatus('success')
      setForm({ full_name: '', email: '', phone: '', brand_name: '', num_locations: '', country: '', message: '', wants_demo: false })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-20" style={{ background: 'var(--dark2)' }}>
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-14">
          <span className="block text-[0.8rem] font-bold uppercase tracking-[3px] text-primary mb-3">{t('eyebrow')}</span>
          <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold mb-4">
            {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
          </h2>
          <p className="text-white/65 max-w-[620px] mx-auto leading-[1.7]">{t('description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-16 items-start">
          {/* Info */}
          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold mb-4">{t('infoTitle')}</h2>
            <p className="text-white/65 leading-[1.8] mb-8 text-[0.98rem]">{t('infoDescription')}</p>
            <div className="flex flex-col gap-4">
              {[
                { icon: '📧', text: 'info@infinitytechsa.com' },
                { icon: '📞', text: '+966 57 429 5925' },
                { icon: '📍', text: isRTL ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-4 text-white/75 text-[0.95rem]">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,198,255,0.1)', border: '1px solid rgba(0,198,255,0.2)', color: 'var(--primary)' }}>
                    {icon}
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[20px] p-10"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input required value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                placeholder={t('form.name')} className="form-input col-span-1" />
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder={t('form.email')} className="form-input col-span-1" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder={t('form.phone')} className="form-input" />
              <input value={form.brand_name} onChange={(e) => setForm({ ...form, brand_name: e.target.value })}
                placeholder={t('form.brand')} className="form-input" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input value={form.num_locations} onChange={(e) => setForm({ ...form, num_locations: e.target.value })}
                placeholder={t('form.locations')} className="form-input" />
              <input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })}
                placeholder={t('form.country')} className="form-input" />
            </div>
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t('form.message')} rows={4} className="form-input w-full mb-4 resize-none" />
            <label className="flex items-center gap-2.5 mb-5 text-white/70 text-[0.88rem] cursor-pointer">
              <input type="checkbox" checked={form.wants_demo} onChange={(e) => setForm({ ...form, wants_demo: e.target.checked })}
                className="w-[18px] h-[18px] accent-primary cursor-pointer" />
              {t('form.demo')}
            </label>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full font-bold py-4 rounded-xl text-[1rem] text-[#111] transition-all hover:opacity-90 hover:-translate-y-px disabled:opacity-70"
              style={{ background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}
            >
              {status === 'loading' ? '...' : t('form.submit')}
            </button>
            {status === 'success' && (
              <p className="text-center mt-4 font-semibold" style={{ color: '#00c864' }}>{t('form.success')}</p>
            )}
            {status === 'error' && (
              <p className="text-center mt-4 font-semibold text-accent2">{t('form.error')}</p>
            )}
          </form>
        </div>
      </div>

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
      `}</style>
    </section>
  )
}
