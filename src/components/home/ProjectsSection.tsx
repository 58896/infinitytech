'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import RevealWrapper from '@/components/ui/RevealWrapper'
import type { ProjectItem } from '@/lib/db/projects'

function ProjectCard({ project }: { project: ProjectItem }) {
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

export default function ProjectsSection({ projects }: { projects: ProjectItem[] }) {
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
          {projects.map((project) => (
            <RevealWrapper key={project.title_en}>
              <ProjectCard project={project} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
