import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { getJobListings } from '@/lib/db/jobs'
import JobListings from '@/components/careers/JobListings'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'careers' })
  return { title: t('meta.title'), description: t('meta.description') }
}

export const revalidate = 3600

export default async function CareersPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'careers' })
  const jobs = await getJobListings()

  return (
    <main className="min-h-screen pt-24 pb-20" style={{ background: 'var(--dark)' }}>
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-14">
          <span className="block text-[0.8rem] font-bold uppercase tracking-[3px] text-primary mb-3">{t('eyebrow')}</span>
          <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold mb-4">
            {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
          </h1>
          <p className="text-white/65 max-w-[620px] mx-auto leading-[1.7]">{t('description')}</p>
        </div>
        <JobListings jobs={jobs} />
      </div>
    </main>
  )
}
