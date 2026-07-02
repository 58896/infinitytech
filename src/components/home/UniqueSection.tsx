import { useTranslations } from 'next-intl'
import RevealWrapper from '@/components/ui/RevealWrapper'

export default function UniqueSection() {
  const t = useTranslations('unique')

  const features = [
    { key: 'integrated' as const },
    { key: 'support' as const },
    { key: 'customizable' as const },
  ]

  return (
    <section id="unique" className="py-20" style={{ background: 'var(--dark)' }}>
      <div className="max-w-content mx-auto px-6">
        <RevealWrapper className="text-center mb-14">
          <span className="block text-[0.8rem] font-bold uppercase tracking-[3px] text-primary mb-3">{t('eyebrow')}</span>
          <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold mb-4">
            {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
          </h2>
          <p className="text-white/65 max-w-[620px] mx-auto leading-[1.7]">{t('description')}</p>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ key }, i) => (
            <RevealWrapper key={key} delay={i * 90}>
              <div
                className="card-hover-border rounded-[18px] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
              >
                <div
                  className="text-2xl font-extrabold mb-3"
                  style={{ background: 'linear-gradient(90deg, var(--primary), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {t(`features.${key}.number`)}
                </div>
                <h4 className="text-[1.1rem] font-bold mb-3">{t(`features.${key}.title`)}</h4>
                <p className="text-white/60 text-[0.92rem] leading-[1.65]">{t(`features.${key}.description`)}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
