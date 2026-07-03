import type { MetadataRoute } from 'next'
import { getProductSlugs } from '@/lib/db/products'
import { getArticleSlugs } from '@/lib/db/articles'

const BASE_URL = 'https://infinitytechsa.com'
const LOCALES = ['ar', 'en']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [productSlugs, articleSlugs] = await Promise.all([
    getProductSlugs(),
    getArticleSlugs(),
  ])

  const staticRoutes = ['', '/products', '/articles'].flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    }))
  )

  const productRoutes = productSlugs.flatMap((slug) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}/products/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  const articleRoutes = articleSlugs.flatMap((slug) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}/articles/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  return [...staticRoutes, ...productRoutes, ...articleRoutes]
}
