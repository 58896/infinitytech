import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { articles, getArticle } from '@/data/articles'
import ArticlePageShell from '@/components/articles/ArticlePageShell'

export async function generateStaticParams() {
  const locales = ['ar', 'en']
  return locales.flatMap((locale) =>
    articles.map((a) => ({ locale, slug: a.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  const isAr = locale === 'ar'
  return {
    title: isAr ? `${article.title_ar} | InfinityTech` : `${article.title_en} | InfinityTech`,
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()
  return <ArticlePageShell article={article} />
}
