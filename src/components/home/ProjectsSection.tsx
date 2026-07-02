'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import RevealWrapper from '@/components/ui/RevealWrapper'

interface Project {
  title_ar: string
  title_en: string
  desc_ar: string
  desc_en: string
  badge_ar: string
  badge_en: string
  badgeColor: string
  images: string[]
}

const PROJECTS: Project[] = [
  {
    title_ar: 'البيك – تركيب نظام درايف ثرو و الشاشات الديجيتال',
    title_en: 'AlBaik – Drive-Thru & Digital Screens Installation',
    desc_ar: 'تركيب شاشات القوائم التقليدية بشاشات 4K رقمية مع منظومة إدارة المحتوى السحابية لتحديث الأسعار والعروض لحظياً في جميع الفروع.',
    desc_en: 'Replacing legacy menu boards with 4K digital screens and cloud CMS for real-time updates across all branches.',
    badge_ar: 'درايف ثرو', badge_en: 'Drive Thru',
    badgeColor: 'rgba(123,47,247,0.9)',
    images: ['/images/Al-Baik-1.jpeg', '/images/Al-Baik-2.jpeg', '/images/Al-Baik-3.jpeg'],
  },
  {
    title_ar: 'هارديز – كشكات الطلب الذاتي',
    title_en: "Hardee's – Self-Order Kiosks",
    desc_ar: 'تصميم وتوريد وتركيب كشكات الطلب الذاتي بالذكاء الاصطناعي لاقتراح الإضافات وتحسين متوسط الطلب بنسبة 35%.',
    desc_en: 'Design, supply, and installation of AI-powered kiosks for upselling, improving average order value by 35%.',
    badge_ar: 'كشكات ذاتية', badge_en: 'Self-Order Kiosks',
    badgeColor: 'rgba(255,77,166,0.9)',
    images: ['/images/Hardees-SOK-1.jpeg', '/images/Hardees-SOK.jpeg'],
  },
  {
    title_ar: 'برغر كينغ – شاشات رقمية',
    title_en: 'Burger King – Digital Signage',
    desc_ar: 'توريد وتشغيل شاشات رقمية داخلية متكاملة مع نظام إدارة المحتوى المركزي في 55 فرع.',
    desc_en: 'Supply and operation of indoor digital signage integrated with centralized CMS across 55 branches.',
    badge_ar: 'شاشات رقمية', badge_en: 'Digital Signage',
    badgeColor: 'rgba(123,47,247,0.9)',
    images: ['/images/Burger-King---Digital-Signages-2.jpeg', '/images/Burger-King---Digital-Signages-1.jpeg'],
  },
  {
    title_ar: 'ماكدونالدز – منظومة Drive-Thru',
    title_en: "McDonald's – Drive-Thru System",
    desc_ar: 'ترقية شاملة لأنظمة Drive-Thru بتقنية الصوت الرقمي وربط مراكز الطلبات بالمطبخ تلقائياً.',
    desc_en: 'Full Drive-Thru upgrade with digital voice tech and kitchen auto-routing to cut service time.',
    badge_ar: 'درايف ثرو', badge_en: 'Drive-Thru',
    badgeColor: 'rgba(0,198,255,0.9)',
    images: ['/images/MCD---Drive-Thru-1.jpeg', '/images/MCD---Drive-Thru-2.jpeg'],
  },
  {
    title_ar: 'ستاربكس – منظومة Drive-Thru',
    title_en: 'Starbucks – Drive-Thru System',
    desc_ar: 'تركيب نظام Drive-Thru مدمج مع شاشات عرض خارجية وداخلية وقياس أوقات الخدمة عبر 70 موقع.',
    desc_en: 'Integrated Drive-Thru system with indoor/outdoor screens and service-time analytics across 70 KSA locations.',
    badge_ar: 'درايف ثرو', badge_en: 'Drive-Thru',
    badgeColor: 'rgba(0,200,100,0.9)',
    images: ['/images/Starbucks---Drive-Thru-1.jpeg'],
  },
  {
    title_ar: 'BRGR – منظومة Drive-Thru الكاملة',
    title_en: 'BRGR – Complete Drive-Thru System',
    desc_ar: 'تركيب وتشغيل منظومة Drive-Thru متكاملة تشمل الأنظمة الصوتية وشاشات العرض الخارجية وقياس أوقات الخدمة.',
    desc_en: 'Full Drive-Thru system including voice units, outdoor displays, and service-time performance monitoring.',
    badge_ar: 'درايف ثرو', badge_en: 'Drive-Thru',
    badgeColor: 'rgba(0,198,255,0.9)',
    images: ['/images/BRGR---Drive-Thru-2.jpeg', '/images/BRGR---Drive-Thru-1.jpeg', '/images/BRGR---Drive-Thru-3.jpeg', '/images/BRGR---Drive-Thru-4.jpeg'],
  },
  {
    title_ar: 'Gloria Jean\'s – Drive-Thru وشاشات',
    title_en: "Gloria Jean's – Drive-Thru & Signage",
    desc_ar: 'تصميم وتنفيذ منظومة متكاملة تجمع Drive-Thru وشاشات داخلية وخارجية.',
    desc_en: 'Full integrated system combining Drive-Thru and indoor/outdoor signage.',
    badge_ar: 'درايف ثرو + شاشات', badge_en: 'Drive-Thru + Signage',
    badgeColor: 'rgba(255,160,0,0.9)',
    images: ['/images/GJ-Cafe-1.jpeg', '/images/GJ-Cafe-here.jpeg', '/images/GJ-Cafe.jpeg', '/images/GJ-Cafe-lll.jpeg', '/images/GJ-Cafe-ll.jpeg'],
  },
  {
    title_ar: 'سينابون – منظومة Drive-Thru',
    title_en: 'Cinnabon – Drive-Thru System',
    desc_ar: 'تركيب نظام Drive-Thru مع شاشات عرض خارجية وأنظمة صوتية رقمية.',
    desc_en: 'Drive-Thru installation with outdoor display screens and digital voice systems.',
    badge_ar: 'درايف ثرو', badge_en: 'Drive-Thru',
    badgeColor: 'rgba(0,198,255,0.9)',
    images: ['/images/Cinnabon---Drive-Thru-1.jpeg', '/images/Cinnabon---Drive-Thru-2.jpeg'],
  },
  {
    title_ar: 'Maine – منظومة Drive-Thru',
    title_en: 'Maine – Drive-Thru System',
    desc_ar: 'تصميم وتنفيذ نظام Drive-Thru متكامل بشاشات خارجية عالية الجودة.',
    desc_en: 'Design and implementation of a complete Drive-Thru with high-quality outdoor screens.',
    badge_ar: 'درايف ثرو', badge_en: 'Drive-Thru',
    badgeColor: 'rgba(0,198,255,0.9)',
    images: ['/images/Maine---Drive-Thru-1.jpeg', '/images/Maine---Drive-Thru-2.jpeg', '/images/Maine---Drive-Thru-3.jpeg'],
  },
  {
    title_ar: 'Sign Burger – Drive-Thru وشاشات رقمية',
    title_en: 'Sign Burger – Drive-Thru & Digital Signage',
    desc_ar: 'تركيب منظومة متكاملة تشمل Drive-Thru وشاشات رقمية داخلية وخارجية.',
    desc_en: 'Complete system including Drive-Thru and indoor/outdoor digital signage.',
    badge_ar: 'درايف ثرو + شاشات', badge_en: 'Drive-Thru + Signage',
    badgeColor: 'rgba(255,77,166,0.9)',
    images: ['/images/Sign-Burger-1---Copy.jpeg', '/images/Sign-Burger-1.jpeg', '/images/Sign-Burger-2.jpeg', '/images/Sign-Burger-3.jpeg'],
  },
]

function ProjectCard({ project }: { project: Project }) {
  const locale = useLocale()
  const isRTL = locale === 'ar'
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (project.images.length <= 1) return
    const t = setInterval(() => setCurrent((c) => (c + 1) % project.images.length), 3000)
    return () => clearInterval(t)
  }, [project.images.length])

  return (
    <div
      className="rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
      style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
    >
      {/* Image slider */}
      <div className="relative h-[220px] overflow-hidden">
        {project.images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={isRTL ? project.title_ar : project.title_en}
            fill
            className={`object-cover transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        {/* Badge */}
        <span
          className="absolute top-3.5 end-3.5 px-3 py-1 rounded-full text-[0.75rem] font-bold text-white z-10 backdrop-blur-md"
          style={{ background: project.badgeColor }}
        >
          {isRTL ? project.badge_ar : project.badge_en}
        </span>
        {/* Dots */}
        {project.images.length > 1 && (
          <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5 z-10">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-[7px] h-[7px] rounded-full border-none transition-all ${i === current ? 'bg-white scale-125' : 'bg-white/40'}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="text-[1.2rem] font-bold mb-2 text-white">
          {isRTL ? project.title_ar : project.title_en}
        </h3>
        <p className="text-[0.92rem] leading-[1.7]" style={{ color: '#94a3b8' }}>
          {isRTL ? project.desc_ar : project.desc_en}
        </p>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const t = useTranslations('projects')

  return (
    <section id="projects" className="py-[100px]" style={{ background: 'var(--dark)' }}>
      <div className="max-w-content mx-auto px-6">
        <RevealWrapper className="text-center mb-12">
          <span className="block text-[0.8rem] font-bold uppercase tracking-[3px] text-primary mb-3">{t('eyebrow')}</span>
          <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold mb-4">
            {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
          </h2>
          <p className="text-white/65 max-w-[620px] mx-auto leading-[1.7]">{t('description')}</p>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {PROJECTS.map((project) => (
            <RevealWrapper key={project.title_en}>
              <ProjectCard project={project} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
