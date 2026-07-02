import { useTranslations } from 'next-intl'
import RevealWrapper from '@/components/ui/RevealWrapper'

const STATS = [
  { number: '+35%', key: 'stat1' as const },
  { number: '2.3s', key: 'stat2' as const },
  { number: '99.7%', key: 'stat3' as const },
  { number: '+500', key: 'stat4' as const },
]

const STAT_DESCS = {
  ar: [
    'زيادة متوسطة في قيمة الطلب مع الكشكات الذاتية',
    'وقت موفَّر في كل طلب Drive-Thru بشاشاتنا',
    'نسبة تشغيل مضمونة لجميع أجهزتنا',
    'موقع تجاري يعمل بمنظومتنا اليوم',
  ],
  en: [
    'Average increase in order value with self-service kiosks',
    'Time saved per Drive-Thru order with our screens',
    'Guaranteed uptime for all our devices',
    'Commercial locations operating on our system today',
  ],
}

export default function StatsSection({ locale }: { locale: string }) {
  const t = useTranslations('stats')
  const descs = STAT_DESCS[locale as 'ar' | 'en'] ?? STAT_DESCS.ar

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, var(--dark2) 0%, #0d1520 100%)' }}
    >
      <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,198,255,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-content mx-auto px-6 relative">
        <RevealWrapper className="text-center mb-14">
          <span className="block text-[0.8rem] font-bold uppercase tracking-[3px] text-primary mb-3">
            {t('eyebrow')}
          </span>
          <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold">{t('title')}</h2>
        </RevealWrapper>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map(({ number }, i) => (
            <RevealWrapper key={number} direction="scale" delay={i * 90}>
              <div
                className="rounded-2xl p-8 text-center"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
              >
                <div
                  className="text-[2.8rem] font-extrabold leading-none mb-2"
                  style={{ background: 'linear-gradient(90deg, var(--primary), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {number}
                </div>
                <div className="text-white/65 text-[0.9rem] leading-[1.4]">{descs[i]}</div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
