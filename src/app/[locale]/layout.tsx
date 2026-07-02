import type { Metadata } from 'next'
import { Cairo, Fira_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import '../globals.css'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-cairo',
  display: 'swap',
})

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-fira',
  display: 'swap',
})

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'hero' })

  return {
    title: {
      default: `InfinityTech – ${locale === 'ar' ? 'حلول التكنولوجيا الذكية للمطاعم' : 'Smart Restaurant Technology Solutions'}`,
      template: `%s | InfinityTech`,
    },
    description: t('description'),
    robots: { index: true, follow: true },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'ar' | 'en')) {
    notFound()
  }

  const messages = await getMessages()
  const isRTL = locale === 'ar'

  return (
    <html
      lang={locale}
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`${cairo.variable} ${firaSans.variable}`}
    >
      <body
        className={`
          ${isRTL ? 'font-cairo' : 'font-fira'}
          bg-[#1a1a1a] text-white overflow-x-hidden
          antialiased
        `}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
