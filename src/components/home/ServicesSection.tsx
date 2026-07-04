'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'

interface SliderCard {
  tag: string
  title: string
  desc: string
  href: string
  images: { src: string; alt: string }[]
  wide?: boolean
}

function ImageSlider({ images }: { images: { src: string; alt: string }[] }) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length)
    }, 3000)
    return () => clearInterval(timerRef.current)
  }, [images.length])

  return (
    <div className="relative w-full max-w-[320px] h-[240px] mx-auto">
      <div className="relative w-full h-[calc(100%-30px)]">
        {images.map(({ src, alt }, i) => (
          <Image
            key={src}
            src={src}
            alt={alt}
            fill
            className={`object-contain transition-all duration-500 drop-shadow-2xl ${i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ position: 'absolute' }}
          />
        ))}
      </div>
      {/* Dots */}
      <div className="flex justify-center items-center gap-2 h-[30px] mt-2.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { clearInterval(timerRef.current); setCurrent(i) }}
            className={`w-[9px] h-[9px] rounded-full transition-all ${i === current ? 'bg-primary scale-125 shadow-[0_0_8px_rgba(0,198,255,0.6)]' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function ServicesSection() {
  const t = useTranslations('services')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  const cards: SliderCard[] = [
    {
      tag:   isRTL ? 'السرعة والكفاءة' : 'Speed & Efficiency',
      title: isRTL ? 'تقنية خدمة الدرايف ثرو (النظام الصوتي)' : 'Drive-Thru Technology (Voice System)',
      desc:  isRTL
        ? 'إحداث ثورة في خدمات البيع من خلال أنظمة صوتية ورقمية متكاملة لتسريع الطلبات وتحسين الكفاءة التشغيلية وتقليل وقت الانتظار.'
        : 'Revolutionizing sales services through integrated audio and digital systems to speed up orders, optimize operational efficiency, and reduce wait times.',
      href: '/products/drive-thru',
      wide: true,
      images: [
        { src: '/images/23.png',              alt: 'Drive Thru System' },
        { src: '/images/nexeo-system.png',    alt: 'NEXEO System' },
        { src: '/images/nexeo-core-tile.jpg', alt: 'NEXEO Core' },
        { src: '/images/nexeo-tile.jpg',      alt: 'NEXEO Tile' },
        { src: '/images/card-nexeo-pro.jpg',  alt: 'NEXEO Pro' },
      ],
    },
    {
      tag:   isRTL ? 'مراقبة الأداء' : 'Performance Monitoring',
      title: isRTL ? 'نظام زووم نيترو لقياس ومتابعة أوقات الخدمة' : 'ZOOM Nitro Timer System',
      desc:  isRTL
        ? 'نظام ذكي لقياس ومراقبة أوقات الخدمة في مسار السيارات بشكل لحظي، يساعد على تحديد نقاط التأخير ومتابعة أداء الفرق التشغيلية.'
        : 'An intelligent real-time Drive-Thru timer system that monitors service times, identifies bottlenecks, and tracks team performance.',
      href: '/products/zoom-nitro',
      images: [
        { src: '/images/zoom-nitro-timer-integrated-alerts.jpg', alt: 'ZOOM Nitro Timer' },
        { src: '/images/nitro-timer-img-2.jpg',                  alt: 'Nitro Timer 2' },
        { src: '/images/NitroVisionAI_Monitor_Mockup.jpg',       alt: 'Nitro Monitor' },
      ],
    },
    {
      tag:   isRTL ? 'تحفيز الأداء' : 'Performance Motivation',
      title: isRTL ? 'لوحة المتصدرين' : 'Leaderboard',
      desc:  isRTL
        ? 'لوحة تفاعلية تعرض أداء الموظفين والفرق بشكل لحظي، مما يعزز روح المنافسة الإيجابية ويرفع مستويات الإنتاجية وسرعة الخدمة.'
        : 'An interactive leaderboard that displays employee and team performance in real time, encouraging healthy competition and improving service speed.',
      href: '/products/leaderboard',
      images: [
        { src: '/images/nitro-leaderboard-tile.jpg',             alt: 'Leaderboard' },
        { src: '/images/zoom-nitro-leaderboard.jpg',             alt: 'ZOOM Nitro Leaderboard' },
        { src: '/images/Gemini_Generated_Image_q3go91q3go91q3go.png', alt: 'Leaderboard Preview' },
      ],
    },
  ]

  return (
    <section
      id="services"
      className="relative w-full py-24 my-0"
      style={{
        background: '#111622',
        borderTop: '1px solid rgba(255,255,255,0.03)',
        borderBottom: '1px solid rgba(255,255,255,0.03)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-[30px] text-[0.85rem] font-semibold mb-4"
            style={{ background: 'rgba(67,97,238,0.1)', border: '1px solid rgba(67,97,238,0.25)', color: '#4361ee' }}>
            {t('badge')}
          </span>
          <h2 className="text-[2.5rem] font-extrabold text-white">{t('title')}</h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`
                rounded-[24px] p-10 flex transition-all duration-300 hover:-translate-y-2
                ${card.wide ? `md:col-span-2 ${isRTL ? 'flex-row' : 'flex-row-reverse'} items-center gap-12` : 'flex-col gap-8'}
              `}
              style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {/* Text */}
              <div className="flex flex-col items-start flex-1">
                <span className="text-[0.8rem] font-bold mb-2.5" style={{ color: '#4361ee' }}>{card.tag}</span>
                <h3 className="text-[1.6rem] font-bold mb-2 text-white">{card.title}</h3>
                <p className="text-[0.98rem] leading-[1.6] mb-6" style={{ color: '#94a3b8' }}>{card.desc}</p>
                <a
                  href={card.href}
                  className="px-6 py-3 rounded-xl text-[0.92rem] font-bold transition-colors"
                  style={{ background: '#ffffff', color: '#0a0f18' }}
                >
                  {isRTL ? 'اكتشف المزيد ←' : 'Explore More →'}
                </a>
              </div>

              {/* Slider */}
              <div className={card.wide ? 'w-full max-w-[400px]' : 'w-full'}>
                <ImageSlider images={card.images} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
