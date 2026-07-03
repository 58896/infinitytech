import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getArticleBySlug, getArticleSlugs } from '@/lib/db/articles'
import ArticlePageShell from '@/components/articles/ArticlePageShell'

export const revalidate = 3600

export async function generateStaticParams() {
  const locales = ['ar', 'en']
  const slugs = await getArticleSlugs()
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) return {}
  const isAr = locale === 'ar'
  return {
    title: isAr
      ? `${article.title_ar} | InfinityTech`
      : `${article.title_en} | InfinityTech`,
    description: isAr ? article.badge_ar : article.badge_en,
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) notFound()
  return <ArticlePageShell article={article} />
}
