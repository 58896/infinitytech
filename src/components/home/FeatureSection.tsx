import Image from 'next/image'
import { useLocale } from 'next-intl'
import RevealWrapper from '@/components/ui/RevealWrapper'

interface Bullet {
  text_ar: string
  text_en: string
}

interface FeatureSectionProps {
  id?: string
  eyebrow_ar: string
  eyebrow_en: string
  title_ar: string
  title_en: string
  titleHighlight_ar?: string
  titleHighlight_en?: string
  description_ar: string
  description_en: string
  bullets: Bullet[]
  imageSrc: string
  imageAlt: string
  href: string
  cta_ar: string
  cta_en: string
  reversed?: boolean       // image on right (in RTL context: physically left)
  accentColor?: string
  alt?: boolean            // dark2 background
}

export default function FeatureSection({
  id,
  eyebrow_ar, eyebrow_en,
  title_ar, title_en,
  titleHighlight_ar, titleHighlight_en,
  description_ar, description_en,
  bullets,
  imageSrc, imageAlt,
  href,
  cta_ar, cta_en,
  reversed = false,
  accentColor = 'var(--primary)',
  alt = false,
}: FeatureSectionProps) {
  const locale = useLocale()
  const isRTL = locale === 'ar'

  const eyebrow = isRTL ? eyebrow_ar : eyebrow_en
  const title = isRTL ? title_ar : title_en
  const highlight = isRTL ? titleHighlight_ar : titleHighlight_en
  const description = isRTL ? description_ar : description_en
  const cta = isRTL ? cta_ar : cta_en

  const isGradientAccent = accentColor === 'var(--accent)' || accentColor === '#7b2ff7'

  return (
    <section
      id={id}
      className="py-20"
      style={{ background: alt ? 'var(--dark2)' : 'var(--dark)' }}
    >
      <div className="max-w-content mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-20 items-center ${reversed ? (isRTL ? 'md:[direction:ltr]' : 'md:[direction:rtl]') : ''}`}>
          {/* Image */}
          <RevealWrapper direction={reversed ? 'left' : 'right'}>
            <div className="rounded-[20px] overflow-hidden" style={{ direction: 'ltr' }}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={420}
                className="w-full object-cover rounded-[20px] transition-transform duration-500 hover:scale-[1.03]"
                style={{ height: 420 }}
              />
            </div>
          </RevealWrapper>

          {/* Content */}
          <RevealWrapper direction={reversed ? 'right' : 'left'}>
            <div style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
              <span className="block text-[0.78rem] font-bold uppercase tracking-[3px] mb-3" style={{ color: accentColor }}>
                {eyebrow}
              </span>
              <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.2] mb-5">
                {highlight ? (
                  <>
                    <span
                      style={{
                        background: `linear-gradient(90deg, ${accentColor}, ${isGradientAccent ? 'var(--accent2)' : 'var(--secondary)'})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {highlight}{' '}
                    </span>
                    {title}
                  </>
                ) : title}
              </h2>
              <p className="text-white/65 leading-[1.8] text-[1rem] mb-7">{description}</p>

              {/* Bullets */}
              <div className="flex flex-col gap-3 mb-8">
                {bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 text-white/80 text-[0.95rem]">
                    <div className="w-2 h-2 rounded-full flex-shrink-0 mt-[0.45rem]" style={{ background: accentColor }} />
                    <span>{isRTL ? b.text_ar : b.text_en}</span>
                  </div>
                ))}
              </div>

              <a
                href={href}
                className="inline-block font-bold py-3.5 px-8 rounded-xl text-[0.97rem] transition-all hover:opacity-90 hover:-translate-y-px"
                style={{
                  background: isGradientAccent
                    ? 'linear-gradient(90deg, var(--accent), var(--accent2))'
                    : 'linear-gradient(90deg, var(--primary), var(--secondary))',
                  color: isGradientAccent ? '#fff' : '#111',
                }}
              >
                {cta}
              </a>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
