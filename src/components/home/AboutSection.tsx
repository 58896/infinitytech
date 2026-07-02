import Image from 'next/image'
import { useTranslations } from 'next-intl'
import RevealWrapper from '@/components/ui/RevealWrapper'

export default function AboutSection() {
  const t = useTranslations('about')

  return (
    <section id="about" className="py-20" style={{ background: 'var(--dark2)' }}>
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Text — rendered first in RTL (right side visually) */}
          <RevealWrapper direction="left">
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold leading-[1.2] mb-5">
                <span className="gradient-text">{t('title')}</span>
              </h2>
              <p className="text-white/65 leading-[1.8] text-[1rem]">{t('description')}</p>
            </div>
          </RevealWrapper>

          {/* Image */}
          <RevealWrapper direction="right">
            <div className="rounded-[20px] overflow-hidden">
              <Image
                src="/images/Drive-thru.jpg"
                alt="InfinityTech Drive-Thru"
                width={600}
                height={420}
                className="w-full object-cover rounded-[20px] transition-transform duration-500 hover:scale-[1.03]"
                style={{ height: 420 }}
              />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
