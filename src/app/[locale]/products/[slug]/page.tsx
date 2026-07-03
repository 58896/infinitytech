import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProductBySlug, getProductSlugs } from '@/lib/db/products'
import ProductPageShell from '@/components/products/ProductPageShell'

export const revalidate = 3600

export async function generateStaticParams() {
  const locales = ['ar', 'en']
  const slugs = await getProductSlugs()
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) return {}
  const isAr = locale === 'ar'
  return {
    title: isAr
      ? `${product.badge_ar} | InfinityTech`
      : `${product.badge_en} | InfinityTech`,
    description: isAr ? product.desc_ar : product.desc_en,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) notFound()
  return <ProductPageShell product={product} />
}
