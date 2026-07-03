'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import RevealWrapper from '@/components/ui/RevealWrapper'
import type { Article, BodyBlock } from '@/data/articles'

function tx(ar: string, en: string, locale: string) {
  return locale === 'ar' ? ar : en
}

function BodyRenderer({ blocks, locale, accent, accentGrad }: { blocks: BodyBlock[]; locale: string; accent: string; accentGrad: string }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === 'p') {
          return (
            <p key={i} className="text-white/80 leading-[2] text-[1.05rem] mb-6">
              {tx(block.ar, block.en, locale)}
            </p>
          )
        }
        if (block.type === 'stats') {
          return (
            <div key={i} className="grid grid-cols-3 gap-4 my-8" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
              {block.items.map((s, j) => (
                <div key={j} className="rounded-[14px] p-6 text-center" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                  <span className="text-[1.8rem] font-extrabold block mb-1"
                    style={{ background: accentGrad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {s.num}
                  </span>
                  <span className="text-[0.8rem] text-white/55">{tx(s.label_ar, s.label_en, locale)}</span>
                </div>
              ))}
            </div>
          )
        }
        if (block.type === 'h2') {
          const isRtl = locale === 'ar'
          return (
            <h2 key={i} className="text-[1.5rem] font-extrabold mt-10 mb-5 relative" style={{ paddingRight: isRtl ? '1rem' : 0, paddingLeft: isRtl ? 0 : '1rem' }}>
              <span className="absolute top-[0.2rem] h-[1.4rem] w-1 rounded"
                style={{ right: isRtl ? 0 : 'auto', left: isRtl ? 'auto' : 0, background: accentGrad }} />
              {tx(block.ar, block.en, locale)}
            </h2>
          )
        }
        if (block.type === 'h3') {
          return (
            <h3 key={i} className="text-[1.15rem] font-bold mt-7 mb-3 text-white/95">
              {tx(block.ar, block.en, locale)}
            </h3>
          )
        }
        if (block.type === 'list') {
          return (
            <ul key={i} className="flex flex-col gap-3 my-5 mb-7">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-white/78 leading-[1.75]">
                  <div className="w-[7px] h-[7px] rounded-full flex-shrink-0 mt-[0.6rem]" style={{ background: accent }} />
                  {tx(item.ar, item.en, locale)}
                </li>
              ))}
            </ul>
          )
        }
        if (block.type === 'quote') {
          const isRtl = locale === 'ar'
          return (
            <blockquote key={i} className="my-8 p-7 text-[1.1rem] font-semibold leading-[1.7]"
              style={{
                borderRight: isRtl ? `3px solid ${accent}` : 'none',
                borderLeft: isRtl ? 'none' : `3px solid ${accent}`,
                borderRadius: isRtl ? '0 14px 14px 0' : '14px 0 0 14px',
                background: 'var(--card-bg)',
              }}>
              {tx(block.ar, block.en, locale)}
            </blockquote>
          )
        }
        return null
      })}
    </>
  )
}

export default function ArticlePageShell({ article }: { article: Article }) {
  const locale = useLocale()
  const isAr = locale === 'ar'
  const { accent, accentGrad } = article

  return (
    <>
      <Header />
      <main>
        {/* Article Hero */}
        <section className="min-h-[50vh] flex items-end relative overflow-hidden" style={{ padding: '7rem 1.5rem 3.5rem' }}>
          <div className="absolute inset-0"
            style={{ backgroundImage: `url('${article.heroImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, #111827 5%, rgba(17,24,39,0.75) 50%, rgba(17,24,39,0.4) 100%)' }} />
          <div className="relative z-10 max-w-[800px] mx-auto w-full text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-5 py-1.5 text-[0.82rem] font-semibold mb-5"
              style={{ background: `${accent}26`, border: `1px solid ${accent}59`, color: accent }}>
              <span>{article.badgeIcon}</span>
              {tx(article.badge_ar, article.badge_en, locale)}
            </div>
            <h1 className="text-[clamp(1.7rem,4.2vw,2.8rem)] font-extrabold leading-[1.3] mb-4">
              {tx(article.title_ar, article.title_en, locale)}
            </h1>
            <div className="flex justify-center gap-6 flex-wrap text-[0.85rem] text-white/65">
              <span>{tx(article.date_ar, article.date_en, locale)}</span>
              <span>{tx(article.readTime_ar, article.readTime_en, locale)}</span>
              <span>{isAr ? '✍️ فريق InfinityTech' : '✍️ InfinityTech Team'}</span>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-[780px] mx-auto px-6 py-14">
          <RevealWrapper>
            <BodyRenderer blocks={article.body} locale={locale} accent={accent} accentGrad={accentGrad} />

            {/* Author Box */}
            <div className="flex items-center gap-4 rounded-[16px] p-6 mt-10" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
              <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center font-extrabold text-xl flex-shrink-0"
                style={{ background: accentGrad }}>
                IT
              </div>
              <div>
                <div className="font-bold text-[0.95rem]">{isAr ? 'فريق InfinityTech' : 'InfinityTech Team'}</div>
                <div className="text-[0.82rem] text-white/55 mt-0.5">
                  {isAr ? 'خبراء حلول التكنولوجيا للمطاعم' : 'Restaurant Technology Solutions Experts'}
                </div>
              </div>
            </div>
          </RevealWrapper>
        </article>

        {/* Related Articles */}
        <section style={{ background: 'var(--dark2)', padding: '4rem 1.5rem' }}>
          <RevealWrapper className="max-w-[1100px] mx-auto">
            <h3 className="text-[1.4rem] font-extrabold mb-8 text-center">
              {isAr ? 'مقالات ذات صلة' : 'Related Articles'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {article.related.map((rel, i) => (
                <Link key={i} href={`/${locale}/articles/${rel.slug}`}>
                  <div className="rounded-[16px] p-6 transition-all duration-300 cursor-pointer"
                    style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = `${accent}4d` }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = 'var(--border)' }}>
                    <span className="text-[0.75rem] font-bold block mb-2" style={{ color: accent }}>
                      {tx(rel.tag_ar, rel.tag_en, locale)}
                    </span>
                    <h4 className="text-[0.98rem] font-bold leading-[1.5] mb-2">
                      {tx(rel.title_ar, rel.title_en, locale)}
                    </h4>
                    <span className="text-[0.85rem] text-white/50">{isAr ? 'اقرأ المقال ←' : 'Read Article →'}</span>
                  </div>
                </Link>
              ))}
            </div>
          </RevealWrapper>
        </section>

        {/* CTA */}
        <section style={{ background: 'linear-gradient(135deg,#0a0818 0%,#111827 100%)', padding: '4.5rem 1.5rem', textAlign: 'center' }}>
          <RevealWrapper className="max-w-[650px] mx-auto">
            <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold mb-4">
              {tx(article.cta.title_ar, article.cta.title_en, locale)}
            </h2>
            <p className="text-white/65 leading-relaxed mb-8">{tx(article.cta.desc_ar, article.cta.desc_en, locale)}</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href={`/${locale}/products/${article.cta.productSlug}`}>
                <button className="font-bold px-8 py-[0.85rem] rounded-[12px] text-[0.95rem] cursor-pointer transition-all hover:-translate-y-0.5"
                  style={{ background: accentGrad, color: '#fff' }}>
                  {isAr ? 'استكشف الحل' : 'Explore the Solution'}
                </button>
              </Link>
              <Link href={`/${locale}#contact`}>
                <button className="font-semibold px-8 py-[0.85rem] rounded-[12px] text-[0.95rem] cursor-pointer transition-all"
                  style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff' }}>
                  {isAr ? 'تواصل معنا' : 'Contact Us'}
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
