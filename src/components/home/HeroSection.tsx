'use client'

import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('hero')

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: 'var(--dark)' }}
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(17,24,39,0.6) 0%, rgba(17,24,39,0.85) 100%)' }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,114,255,0.2) 0%, rgba(123,47,247,0.2) 50%, rgba(255,77,166,0.15) 100%)' }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="particle absolute" style={{ width: 300, height: 300, top: -80, right: -60, background: 'radial-gradient(circle,rgba(0,198,255,0.08) 0%,transparent 70%)', animationDelay: '0s', animationDuration: '10s' }} />
        <div className="particle absolute" style={{ width: 250, height: 250, bottom: '5%', left: '5%', background: 'radial-gradient(circle,rgba(123,47,247,0.08) 0%,transparent 70%)', animationDelay: '3s', animationDuration: '12s' }} />
        <div className="particle absolute" style={{ width: 200, height: 200, top: '40%', left: '40%', background: 'radial-gradient(circle,rgba(255,77,166,0.05) 0%,transparent 70%)', animationDelay: '6s', animationDuration: '9s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto px-6 py-16 text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold mb-6"
          style={{ background: 'rgba(0,198,255,0.12)', borderColor: 'rgba(0,198,255,0.3)', color: 'var(--primary)' }}>
          <span>✦</span> {t('badge')}
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold leading-[1.15] mb-6 tracking-tight">
          {t('title')}<br />
          <span className="gradient-text-primary">{t('brand')}</span>
        </h1>

        {/* Description */}
        <p className="text-[1.15rem] text-white/80 max-w-[680px] mx-auto mb-10 leading-[1.75] font-light">
          {t('description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#contact"
            className="font-bold py-3.5 px-9 rounded-xl text-base transition-all hover:-translate-y-0.5 text-[#111]"
            style={{ background: 'linear-gradient(90deg, var(--primary), var(--secondary))', boxShadow: '0 4px 20px rgba(0,198,255,0.25)' }}
          >
            {t('ctaPrimary')}
          </a>
          <a
            href="#services"
            className="font-semibold py-3.5 px-9 rounded-xl text-base border border-white/30 transition-all hover:border-primary hover:text-primary hover:bg-primary/5"
          >
            {t('ctaSecondary')}
          </a>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 mt-16 flex-wrap">
          {[
            { number: '+500', label: t('stats.clients') },
            { number: '+15',  label: t('stats.experience') },
            { number: '+2000',label: t('stats.devices') },
            { number: '1',    label: t('stats.country') },
          ].map(({ number, label }) => (
            <div key={label} className="text-center">
              <span
                className="text-[2.2rem] font-extrabold block"
                style={{ background: 'linear-gradient(90deg, var(--primary), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                {number}
              </span>
              <span className="text-[0.85rem] text-white/60 mt-1 block font-normal">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
