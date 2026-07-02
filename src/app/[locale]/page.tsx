import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('hero')

  return (
    <main className="min-h-screen bg-dark flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          {t('title')}{' '}
          <span className="gradient-text">{t('brand')}</span>
        </h1>
        <p className="text-white/60 text-lg">
          🚀 Scaffold ready — Stage 3 (static port) next
        </p>
      </div>
    </main>
  )
}
