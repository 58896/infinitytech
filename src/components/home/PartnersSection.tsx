import Image from 'next/image'
import { useTranslations } from 'next-intl'
import RevealWrapper from '@/components/ui/RevealWrapper'

const LOGOS = [
  { src: '/images/imgi_72_Americana-1.png',          alt: 'Americana' },
  { src: '/images/imgi_85_Dominos.png',              alt: 'Dominos' },
  { src: '/images/imgi_86_Burger-King.png',          alt: 'Burger King' },
  { src: '/images/imgi_73_Hardees.png',              alt: 'Hardees' },
  { src: '/images/imgi_74_Arbys.png',                alt: "Arby's" },
  { src: '/images/imgi_152_Address-Cafe-500x500-1.png', alt: 'Address Cafe' },
  { src: '/images/imgi_155_burgerizzr-1-500x500-1.png', alt: 'Burgerizzr' },
  { src: '/images/imgi_87_Gloria-Jeans.png',         alt: "Gloria Jean's" },
  { src: '/images/imgi_84_Tim-Hortons.png',          alt: 'Tim Hortons' },
  { src: '/images/imgi_140_Albaik-500x500-1.png',    alt: 'Al Baik' },
  { src: '/images/imgi_143_Cinnabon-1-500x500-1.png',alt: 'Cinnabon' },
  { src: '/images/imgi_149_Starbucks-500x500-1.png', alt: 'Starbucks' },
]

export default function PartnersSection() {
  const t = useTranslations('partners')

  return (
    <section className="py-12" style={{ background: 'var(--dark2)' }}>
      <div className="max-w-content mx-auto px-6">
        <RevealWrapper className="text-center mb-8">
          <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold mb-4">
            <span className="gradient-text">{t('title')}</span>
          </h2>
          <p className="text-white/65 max-w-[620px] mx-auto leading-[1.7] text-[1.02rem]">
            {t('description')}
          </p>
        </RevealWrapper>
      </div>

      {/* Infinite scroll strip — pure CSS, identical to original */}
      <div className="partners-slider">
        <div className="partners-track">
          {/* Doubled for seamless loop */}
          {[...LOGOS, ...LOGOS].map(({ src, alt }, i) => (
            <div key={`${alt}-${i}`} className="partners-slide">
              <Image src={src} alt={alt} width={160} height={80} className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
