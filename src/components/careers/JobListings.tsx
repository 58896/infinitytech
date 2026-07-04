'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import type { JobListing } from '@/lib/db/jobs'
import ApplicationModal from './ApplicationModal'

export default function JobListings({ jobs }: { jobs: JobListing[] }) {
  const t = useTranslations('careers')
  const locale = useLocale()
  const isAr = locale === 'ar'
  const [applyJob, setApplyJob] = useState<JobListing | null>(null)

  if (jobs.length === 0) {
    return (
      <div className="text-center py-20 text-white/50">
        <p className="text-5xl mb-4">💼</p>
        <p className="text-lg">{t('noJobs')}</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => {
          const title = isAr ? job.title_ar : job.title_en
          const dept = isAr ? job.department_ar : job.department_en
          const loc = isAr ? job.location_ar : job.location_en
          const type = isAr ? job.type_ar : job.type_en
          const desc = isAr ? job.description_ar : job.description_en
          const reqs = isAr ? job.requirements_ar : job.requirements_en

          return (
            <div
              key={job.id}
              className="rounded-[18px] p-7 flex flex-col gap-4 transition-all hover:-translate-y-1"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold mb-1">{title}</h3>
                  <p className="text-primary text-[0.85rem] font-medium">{dept}</p>
                </div>
                <span
                  className="text-[0.75rem] font-bold px-3 py-1 rounded-full flex-shrink-0"
                  style={{ background: 'rgba(0,198,255,0.12)', color: 'var(--primary)', border: '1px solid rgba(0,198,255,0.25)' }}
                >
                  {type}
                </span>
              </div>

              <div className="flex gap-4 text-white/55 text-[0.83rem]">
                <span>📍 {loc}</span>
              </div>

              {desc && <p className="text-white/65 text-[0.88rem] leading-[1.7] line-clamp-3">{desc}</p>}

              {reqs.length > 0 && (
                <ul className="flex flex-col gap-1.5">
                  {reqs.slice(0, 3).map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/65 text-[0.83rem]">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              )}

              <button
                onClick={() => setApplyJob(job)}
                className="mt-auto w-full py-3 rounded-xl font-bold text-[0.9rem] text-[#111] transition-all hover:opacity-90 hover:-translate-y-px"
                style={{ background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}
              >
                {t('applyNow')}
              </button>
            </div>
          )
        })}
      </div>

      {applyJob && (
        <ApplicationModal
          jobId={applyJob.id}
          jobTitle={isAr ? applyJob.title_ar : applyJob.title_en}
          onClose={() => setApplyJob(null)}
        />
      )}
    </>
  )
}
