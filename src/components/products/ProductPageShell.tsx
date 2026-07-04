'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import RevealWrapper from '@/components/ui/RevealWrapper'
import type { Product, Section } from '@/data/products'

function t(ar: string, en: string, locale: string) {
  return locale === 'ar' ? ar : en
}

function SectionHeader({ eyebrow_ar, eyebrow_en, title_ar, title_en, accent, locale }: {
  eyebrow_ar: string; eyebrow_en: string; title_ar: string; title_en: string; accent: string; locale: string
}) {
  return (
    <div className="reveal text-center mb-8">
      <span className="text-[0.78rem] font-bold uppercase tracking-[3px] mb-2 block" style={{ color: accent }}>
        {t(eyebrow_ar, eyebrow_en, locale)}
      </span>
      <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold leading-tight">
        {t(title_ar, title_en, locale)}
      </h2>
    </div>
  )
}

function CardsSection({ s, accent, locale }: { s: Extract<Section, { type: 'cards' }> | Extract<Section, { type: 'gamification' }>; accent: string; locale: string }) {
  const cols = s.type === 'gamification' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  const items = s.type === 'gamification' ? s.items : s.cards
  const isAr = locale === 'ar'
  return (
    <section style={{ background: s.bg === 'dark' ? 'var(--dark)' : 'var(--dark2)', padding: '5rem 0' }}>
      <div className="max-w-content mx-auto px-6">
        <SectionHeader {...s} accent={accent} locale={locale} />
        <div className={`grid ${cols} gap-6 mt-8`}>
          {items.map((card, i) => (
            <RevealWrapper key={i} delay={i * 60}>
              <div className="rounded-[18px] p-8 transition-all duration-300 relative overflow-hidden group"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
              >
                <div className={`absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${isAr ? 'origin-right' : 'origin-left'}`}
                  style={{ background: `linear-gradient(90deg,${accent},var(--accent2,#ff4da6))` }} />
                <div className="w-14 h-14 rounded-[14px] flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${accent}1a` }}>
                  {card.icon}
                </div>
                <h3 className="text-[1.05rem] font-bold mb-2">{t(card.title_ar, card.title_en, locale)}</h3>
                <p className="text-white/60 text-[0.9rem] leading-relaxed">{t(card.desc_ar, card.desc_en, locale)}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

function StepsSection({ s, accent, locale }: { s: Extract<Section, { type: 'steps' }>; accent: string; locale: string }) {
  return (
    <section style={{ background: s.bg === 'dark' ? 'var(--dark)' : 'var(--dark2)', padding: '5rem 0' }}>
      <div className="max-w-content mx-auto px-6">
        <SectionHeader {...s} accent={accent} locale={locale} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {s.steps.map((step, i) => (
            <RevealWrapper key={i} delay={i * 80}>
              <div className="rounded-[18px] p-8 text-center" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                <div className="w-13 h-13 rounded-full flex items-center justify-center text-xl font-extrabold text-[#111] mx-auto mb-4"
                  style={{ width: 52, height: 52, background: `linear-gradient(135deg,${accent},var(--secondary,#0072ff))` }}>
                  {step.num}
                </div>
                <h4 className="font-bold mb-2">{t(step.title_ar, step.title_en, locale)}</h4>
                <p className="text-white/60 text-[0.88rem] leading-relaxed">{t(step.desc_ar, step.desc_en, locale)}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

function TypeCardsSection({ s, accent, locale }: { s: Extract<Section, { type: 'typecards' }>; accent: string; locale: string }) {
  return (
    <section style={{ background: s.bg === 'dark' ? 'var(--dark)' : 'var(--dark2)', padding: '5rem 0' }}>
      <div className="max-w-content mx-auto px-6">
        <SectionHeader {...s} accent={accent} locale={locale} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {s.cards.map((card, i) => (
            <RevealWrapper key={i} delay={i * 80}>
              <div className="rounded-[20px] p-10 flex gap-6 items-start transition-all duration-300 group"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                <div className="text-[2rem] font-extrabold leading-none mt-1 flex-shrink-0"
                  style={{ background: `linear-gradient(135deg,${accent},var(--accent,#7b2ff7))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {card.num}
                </div>
                <div>
                  <h3 className="text-[1.1rem] font-bold mb-2">{t(card.title_ar, card.title_en, locale)}</h3>
                  <p className="text-white/60 text-[0.92rem] leading-relaxed">{t(card.desc_ar, card.desc_en, locale)}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

function SpecsSection({ s, accent, locale }: { s: Extract<Section, { type: 'specs' }>; accent: string; locale: string }) {
  return (
    <section style={{ background: s.bg === 'dark' ? 'var(--dark)' : 'var(--dark2)', padding: '5rem 0' }}>
      <div className="max-w-content mx-auto px-6">
        <SectionHeader {...s} accent={accent} locale={locale} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {s.groups.map((group, i) => (
            <RevealWrapper key={i} delay={i * 80}>
              <div className="rounded-[16px] p-7" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                <h4 className="text-[0.9rem] font-bold uppercase tracking-wide mb-4" style={{ color: accent }}>
                  {t(group.title_ar, group.title_en, locale)}
                </h4>
                <div className="flex flex-col gap-3">
                  {group.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-3 text-[0.92rem] text-white/75">
                      <span className="font-bold flex-shrink-0" style={{ color: accent }}>✓</span>
                      {t(item.ar, item.en, locale)}
                    </div>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

function MetricsSection({ s, accent, locale }: { s: Extract<Section, { type: 'metrics' }>; accent: string; locale: string }) {
  return (
    <section style={{ background: s.bg === 'dark' ? 'var(--dark)' : 'var(--dark2)', padding: '5rem 0' }}>
      <div className="max-w-content mx-auto px-6">
        <SectionHeader {...s} accent={accent} locale={locale} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {s.metrics.map((m, i) => (
            <RevealWrapper key={i} delay={i * 80}>
              <div className="rounded-[18px] p-9 text-center transition-all duration-300"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                <div className="text-[2.2rem] font-extrabold mb-2"
                  style={{ background: `linear-gradient(90deg,${accent},var(--accent2,#ff4da6))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {m.letter}
                </div>
                <h3 className="text-[1.05rem] font-bold mb-3">{t(m.title_ar, m.title_en, locale)}</h3>
                <p className="text-white/60 text-[0.9rem] leading-relaxed">{t(m.desc_ar, m.desc_en, locale)}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

function ChannelsSection({ s, accent, locale }: { s: Extract<Section, { type: 'channels' }>; accent: string; locale: string }) {
  return (
    <section style={{ background: s.bg === 'dark' ? 'var(--dark)' : 'var(--dark2)', padding: '5rem 0' }}>
      <div className="max-w-content mx-auto px-6">
        <SectionHeader {...s} accent={accent} locale={locale} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {s.channels.map((ch, i) => (
            <RevealWrapper key={i} delay={i * 80}>
              <div className="rounded-[16px] p-7 text-center transition-all duration-300"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                <div className="text-[2.2rem] mb-3">{ch.icon}</div>
                <h4 className="text-[0.95rem] font-bold mb-2">{t(ch.title_ar, ch.title_en, locale)}</h4>
                <p className="text-white/55 text-[0.82rem] leading-relaxed">{t(ch.desc_ar, ch.desc_en, locale)}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

function CheckpointsSection({ s, accent, locale }: { s: Extract<Section, { type: 'checkpoints' }>; accent: string; locale: string }) {
  return (
    <section style={{ background: s.bg === 'dark' ? 'var(--dark)' : 'var(--dark2)', padding: '5rem 0' }}>
      <div className="max-w-content mx-auto px-6">
        <SectionHeader {...s} accent={accent} locale={locale} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
          {s.checkpoints.map((cp, i) => (
            <RevealWrapper key={i} delay={i * 80}>
              <div className="rounded-[16px] p-6 text-center transition-all duration-300"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-base font-extrabold text-[#111] mx-auto mb-4"
                  style={{ background: `linear-gradient(135deg,${accent},var(--primary,#00c6ff))` }}>
                  {cp.num}
                </div>
                <h4 className="text-[0.92rem] font-bold mb-2">{t(cp.title_ar, cp.title_en, locale)}</h4>
                <p className="text-white/55 text-[0.8rem] leading-relaxed">{t(cp.desc_ar, cp.desc_en, locale)}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

function DashboardSection({ s, accent, locale }: { s: Extract<Section, { type: 'dashboard' }>; accent: string; locale: string }) {
  return (
    <section style={{ background: s.bg === 'dark' ? 'var(--dark)' : 'var(--dark2)', padding: '5rem 0' }}>
      <div className="max-w-content mx-auto px-6">
        <RevealWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[0.78rem] font-bold uppercase tracking-[3px] mb-2 block" style={{ color: accent }}>
                {t(s.eyebrow_ar, s.eyebrow_en, locale)}
              </span>
              <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold leading-tight mb-4">
                {t(s.title_ar, s.title_en, locale)}
              </h2>
              <p className="text-white/65 leading-relaxed mb-6">{t(s.desc_ar, s.desc_en, locale)}</p>
              <div className="flex flex-col gap-5">
                {s.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-[14px] p-5"
                    style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                    <div className="text-2xl flex-shrink-0">{f.icon}</div>
                    <div>
                      <h4 className="text-[0.98rem] font-bold mb-1">{t(f.title_ar, f.title_en, locale)}</h4>
                      <p className="text-white/60 text-[0.88rem] leading-relaxed">{t(f.desc_ar, f.desc_en, locale)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[20px] p-10 flex flex-col gap-6" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
              <div className="rounded-[12px] p-6" style={{ background: `${accent}14`, border: `1px solid ${accent}33` }}>
                <div className="text-[0.8rem] font-bold mb-3" style={{ color: accent }}>
                  {locale === 'ar' ? '📍 إشغال الطاولات – الوقت الحالي' : '📍 Table Occupancy – Now'}
                </div>
                <div className="text-[2.2rem] font-extrabold"
                  style={{ background: `linear-gradient(90deg,${accent},var(--secondary,#0072ff))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  78%
                </div>
                <div className="text-[0.85rem] text-white/50 mt-1">
                  {locale === 'ar' ? '23 طاولة مشغولة من 30' : '23 of 30 tables occupied'}
                </div>
              </div>
              <div className="rounded-[12px] p-6" style={{ background: 'rgba(0,200,100,0.08)', border: '1px solid rgba(0,200,100,0.2)' }}>
                <div className="text-[0.8rem] font-bold mb-3 text-[#00c864]">
                  {locale === 'ar' ? '⏱ متوسط وقت الانتظار' : '⏱ Average Wait Time'}
                </div>
                <div className="text-[2.2rem] font-extrabold text-[#00c864]">4:20</div>
                <div className="text-[0.85rem] text-white/50 mt-1">
                  {locale === 'ar' ? 'دقيقة – أقل من المعدل المستهدف (5 دقائق)' : 'min – below target (5 min)'}
                </div>
              </div>
              <div className="rounded-[12px] p-6" style={{ background: 'rgba(255,160,0,0.08)', border: '1px solid rgba(255,160,0,0.2)' }}>
                <div className="text-[0.8rem] font-bold mb-3 text-[#ffa000]">
                  {locale === 'ar' ? '⚠️ تنبيه نشط' : '⚠️ Active Alert'}
                </div>
                <div className="text-[0.95rem] font-semibold">
                  {locale === 'ar' ? 'طابور طويل في كاشير رقم 2' : 'Long queue at cashier #2'}
                </div>
                <div className="text-[0.82rem] text-white/45 mt-1">
                  {locale === 'ar' ? 'منذ 3 دقائق – يُنصح بفتح كاشير إضافي' : '3 min ago – open additional cashier'}
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

function LeaderboardDemoPanel({ locale }: { locale: string }) {
  const rows = [
    { rank: '🥇', name_ar: 'أحمد العتيبي', name_en: 'Ahmed Al-Otaibi', time_ar: 'متوسط وقت الخدمة: 2:45 دقيقة', time_en: 'Avg. service time: 2:45 min', score: '98%', gold: true },
    { rank: '🥈', name_ar: 'سارة المطيري', name_en: 'Sara Al-Mutairi', time_ar: 'متوسط وقت الخدمة: 3:10 دقيقة', time_en: 'Avg. service time: 3:10 min', score: '94%', gold: false },
    { rank: '🥉', name_ar: 'فهد الدوسري', name_en: 'Fahad Al-Dosari', time_ar: 'متوسط وقت الخدمة: 3:25 دقيقة', time_en: 'Avg. service time: 3:25 min', score: '91%', gold: false },
    { rank: '4', name_ar: 'نورة القحطاني', name_en: 'Noura Al-Qahtani', time_ar: 'متوسط وقت الخدمة: 3:40 دقيقة', time_en: 'Avg. service time: 3:40 min', score: '87%', gold: false },
  ]
  return (
    <div className="rounded-[20px] p-8" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
      <div className="text-center mb-6 font-bold text-[0.95rem] uppercase tracking-wide text-[#ffa000]">
        {locale === 'ar' ? '🏆 لوحة المتصدرين - فرع الرياض' : '🏆 Leaderboard - Riyadh Branch'}
      </div>
      {rows.map((row, i) => (
        <div key={i} className={`flex items-center gap-4 rounded-[12px] p-4 mb-3 ${row.gold ? 'border' : ''}`}
          style={row.gold ? { background: 'rgba(255,160,0,0.1)', borderColor: 'rgba(255,160,0,0.3)' } : { background: 'rgba(255,255,255,0.04)' }}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0 ${row.gold ? 'text-[#111]' : ''}`}
            style={row.gold ? { background: 'linear-gradient(135deg,#ffa000,#ff7a00)' } : { background: 'rgba(255,255,255,0.08)' }}>
            {row.rank}
          </div>
          <div className="flex-1">
            <div className="font-bold text-[0.92rem]">{locale === 'ar' ? row.name_ar : row.name_en}</div>
            <div className="text-[0.78rem] text-white/50 mt-0.5">{locale === 'ar' ? row.time_ar : row.time_en}</div>
          </div>
          <div className="font-extrabold text-[0.95rem] text-[#00c864]">{row.score}</div>
        </div>
      ))}
    </div>
  )
}

export default function ProductPageShell({ product }: { product: Product }) {
  const locale = useLocale()
  const isAr = locale === 'ar'
  const accent = product.accent
  const grad = product.accentGrad

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden px-6"
          style={{ background: 'linear-gradient(135deg, #0a0f18 0%, #111827 40%, #0d1520 100%)', paddingTop: '5rem', paddingBottom: '4rem' }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% -40%, rgba(0,114,255,0.12) 0%, rgba(123,47,247,0.08) 40%, transparent 70%)' }} />
          <div className="relative z-10 text-center max-w-[800px] mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full px-5 py-1.5 text-[0.85rem] font-semibold mb-6"
              style={{ background: `${accent}1f`, border: `1px solid ${accent}4d`, color: accent }}>
              <span>{product.badgeIcon}</span>
              {t(product.badge_ar, product.badge_en, locale)}
            </div>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.15] mb-5">
              {product.gradFirst ? (
                <>
                  <span style={{ background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {t(product.titleGrad_ar, product.titleGrad_en, locale)}
                  </span>
                  <br />
                  {t(product.titlePlain_ar, product.titlePlain_en, locale)}
                </>
              ) : (
                <>
                  {t(product.titlePlain_ar, product.titlePlain_en, locale)}
                  <br />
                  <span style={{ background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {t(product.titleGrad_ar, product.titleGrad_en, locale)}
                  </span>
                </>
              )}
            </h1>
            <p className="text-[1.1rem] text-white/75 max-w-[640px] mx-auto mb-10 leading-[1.8]">
              {t(product.desc_ar, product.desc_en, locale)}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href={`/${locale}#contact`}>
                <button className="font-bold px-9 py-[0.9rem] rounded-[12px] text-base cursor-pointer transition-all hover:-translate-y-0.5"
                  style={{ background: grad, color: '#111', boxShadow: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 8px 30px ${accent}66`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
                  {isAr ? 'احصل على عرض مجاني' : 'Get a Free Demo'}
                </button>
              </Link>
              <a href="#overview">
                <button className="font-semibold px-9 py-[0.9rem] rounded-[12px] text-base cursor-pointer transition-all"
                  style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff' }}>
                  {isAr ? 'تعرف على التفاصيل' : 'Learn More'}
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Stats Row */}
        <div style={{ background: '#0d1520', padding: '3rem 1.5rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-[1100px] mx-auto flex justify-center gap-16 flex-wrap">
            {product.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <span className="text-[2.4rem] font-extrabold block"
                  style={{ background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {stat.number}
                </span>
                <div className="text-[0.85rem] text-white/55 mt-1">{t(stat.label_ar, stat.label_en, locale)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Overview */}
        <section id="overview" style={{ background: 'var(--dark2)', padding: '5rem 0' }}>
          <div className="max-w-content mx-auto px-6">
            <RevealWrapper>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${product.overviewContentFirst && !isAr ? 'lg:[direction:ltr]' : ''}`}>
                {!product.overviewContentFirst && product.overviewImage && (
                  <div className="rounded-[20px] overflow-hidden">
                    <img src={product.overviewImage} alt="" className="w-full object-cover rounded-[20px]" style={{ height: 420 }}
                      onError={e => {
                        const el = e.currentTarget.parentElement!
                        el.innerHTML = `<div style="background:linear-gradient(135deg,rgba(0,198,255,0.05),rgba(123,47,247,0.1));border:1px dashed rgba(255,255,255,0.15);border-radius:20px;height:420px;display:flex;align-items:center;justify-content:center;font-size:4rem;opacity:0.3">🖼️</div>`
                      }} />
                  </div>
                )}
                {product.overviewContentFirst && product.overview.specialRight === 'leaderboard-demo' && (
                  <LeaderboardDemoPanel locale={locale} />
                )}
                <div className={product.overviewContentFirst ? 'order-first' : ''}>
                  <span className="text-[0.78rem] font-bold uppercase tracking-[3px] block mb-2" style={{ color: accent }}>
                    {t(product.overview.label_ar, product.overview.label_en, locale)}
                  </span>
                  <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold leading-tight mb-4">
                    {t(product.overview.title_ar, product.overview.title_en, locale)}
                  </h2>
                  <p className="text-white/65 leading-relaxed mb-6 max-w-[680px]">
                    {t(product.overview.desc_ar, product.overview.desc_en, locale)}
                  </p>
                  <div className="flex flex-col gap-4">
                    {product.overview.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: accent }} />
                        <span className="text-white/80 text-[0.95rem] leading-relaxed">{t(f.ar, f.en, locale)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {product.overviewContentFirst && !product.overview.specialRight && product.overviewImage && (
                  <div className="rounded-[20px] overflow-hidden">
                    <img src={product.overviewImage} alt="" className="w-full object-cover rounded-[20px]" style={{ height: 420 }}
                      onError={e => {
                        const el = e.currentTarget.parentElement!
                        el.innerHTML = `<div style="background:linear-gradient(135deg,rgba(0,198,255,0.05),rgba(123,47,247,0.1));border:1px dashed rgba(255,255,255,0.15);border-radius:20px;height:420px;display:flex;align-items:center;justify-content:center;font-size:4rem;opacity:0.3">🖼️</div>`
                      }} />
                  </div>
                )}
                {!product.overviewContentFirst && !product.overviewImage && (
                  <div className="rounded-[20px] flex items-center justify-center text-[4rem] opacity-30" style={{ height: 420, background: 'linear-gradient(135deg,rgba(0,198,255,0.05),rgba(123,47,247,0.1))', border: '1px dashed rgba(255,255,255,0.15)' }}>
                    🖼️
                  </div>
                )}
              </div>
            </RevealWrapper>
          </div>
        </section>

        {/* Middle Sections */}
        {product.sections.map((section, i) => {
          if (section.type === 'cards' || section.type === 'gamification') {
            return <CardsSection key={i} s={section as Extract<Section, { type: 'cards' }>} accent={accent} locale={locale} />
          }
          if (section.type === 'steps') return <StepsSection key={i} s={section} accent={accent} locale={locale} />
          if (section.type === 'typecards') return <TypeCardsSection key={i} s={section} accent={accent} locale={locale} />
          if (section.type === 'specs') return <SpecsSection key={i} s={section} accent={accent} locale={locale} />
          if (section.type === 'metrics') return <MetricsSection key={i} s={section} accent={accent} locale={locale} />
          if (section.type === 'channels') return <ChannelsSection key={i} s={section} accent={accent} locale={locale} />
          if (section.type === 'checkpoints') return <CheckpointsSection key={i} s={section} accent={accent} locale={locale} />
          if (section.type === 'dashboard') return <DashboardSection key={i} s={section} accent={accent} locale={locale} />
          return null
        })}

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg, #0a0f18 0%, #111827 100%)', padding: '5rem 1.5rem', textAlign: 'center' }}>
          <RevealWrapper className="max-w-[700px] mx-auto">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-extrabold mb-4">
              {t(product.cta.title_ar, product.cta.title_en, locale)}
            </h2>
            <p className="text-white/65 leading-relaxed mb-10">{t(product.cta.desc_ar, product.cta.desc_en, locale)}</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href={`/${locale}#contact`}>
                <button className="font-bold px-8 py-[0.9rem] rounded-[12px] text-base cursor-pointer transition-all hover:-translate-y-0.5"
                  style={{ background: grad, color: '#111' }}>
                  {isAr ? 'تواصل معنا الآن' : 'Contact Us Now'}
                </button>
              </Link>
              <Link href={`/${locale}`}>
                <button className="font-semibold px-8 py-[0.9rem] rounded-[12px] text-base cursor-pointer transition-all"
                  style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff' }}>
                  {isAr ? 'العودة للرئيسية' : 'Back to Home'}
                </button>
              </Link>
            </div>
          </RevealWrapper>
        </section>
      </main>
      <Footer />
    </>
  )
}
