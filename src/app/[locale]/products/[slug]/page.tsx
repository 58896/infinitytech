import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { products, getProduct } from '@/data/products'
import ProductPageShell from '@/components/products/ProductPageShell'

export async function generateStaticParams() {
  const locales = ['ar', 'en']
  return locales.flatMap((locale) =>
    products.map((p) => ({ locale, slug: p.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const product = getProduct(slug)
  if (!product) return {}
  const isAr = locale === 'ar'
  return {
    title: isAr ? `${product.badge_ar} | InfinityTech` : `${product.badge_en} | InfinityTech`,
    description: isAr ? product.desc_ar : product.desc_en,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()
  return <ProductPageShell product={product} />
}
