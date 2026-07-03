'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { updateProductMeta, toggleProductPublished } from '@/lib/actions/products'
import { getProducts } from '@/lib/db/products'
import { useEffect } from 'react'
import type { Product } from '@/data/products'
import Link from 'next/link'

function SaveButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white disabled:opacity-50 transition-opacity"
      style={{ background: 'linear-gradient(90deg,#0072ff,#00c6ff)' }}
    >
      {pending ? 'Saving…' : 'Save changes'}
    </button>
  )
}

export default function EditProductPage({
  params,
}: {
  params: { locale: string; slug: string }
}) {
  const { locale, slug } = params
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    getProducts().then((products) => {
      const p = products.find((x) => x.slug === slug)
      setProduct(p ?? null)
    })
  }, [slug])

  if (!product) {
    return (
      <div className="flex items-center justify-center h-64 text-white/30">
        {product === null ? 'Product not found.' : 'Loading…'}
      </div>
    )
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    setSaved(false)
    setError('')

    startTransition(async () => {
      const res = await updateProductMeta(slug, {
        title_ar: fd.get('title_ar') as string,
        title_en: fd.get('title_en') as string,
        description_ar: fd.get('description_ar') as string,
        description_en: fd.get('description_en') as string,
        seo_title_ar: fd.get('seo_title_ar') as string,
        seo_title_en: fd.get('seo_title_en') as string,
        seo_description_ar: fd.get('seo_description_ar') as string,
        seo_description_en: fd.get('seo_description_en') as string,
      })
      if (res.error) setError(res.error)
      else setSaved(true)
    })
  }

  function handleTogglePublished() {
    startTransition(async () => {
      await toggleProductPublished(slug, true)
      router.refresh()
    })
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-4">
        <Link href={`/${locale}/admin/products`} className="text-white/40 hover:text-white/70 transition-colors text-sm">← Products</Link>
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>{product.badgeIcon}</span> {product.badge_en}
          </h1>
          <code className="text-xs text-white/30">/products/{slug}</code>
        </div>
      </div>

      {saved && (
        <div className="px-4 py-3 rounded-xl text-sm text-green-300" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}>
          ✓ Changes saved successfully
        </div>
      )}
      {error && (
        <div className="px-4 py-3 rounded-xl text-sm text-red-300" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Basic info */}
        <fieldset className="rounded-2xl p-6 space-y-4" style={{ background: '#1e2736', border: '1px solid rgba(255,255,255,0.05)' }}>
          <legend className="text-sm font-semibold text-white/60 uppercase tracking-wider px-1">Basic Info</legend>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/40 mb-1.5">Title (EN)</label>
              <input name="title_en" defaultValue={product.badge_en} className="admin-input w-full" />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5">Title (AR)</label>
              <input name="title_ar" defaultValue={product.badge_ar} dir="rtl" className="admin-input w-full" />
            </div>
          </div>

          <div>
            <label className="block text-xs text-white/40 mb-1.5">Description (EN)</label>
            <textarea name="description_en" defaultValue={product.desc_en} rows={3} className="admin-input w-full resize-none" />
          </div>
          <div>
            <label className="block text-xs text-white/40 mb-1.5">Description (AR)</label>
            <textarea name="description_ar" defaultValue={product.desc_ar} rows={3} dir="rtl" className="admin-input w-full resize-none" />
          </div>
        </fieldset>

        {/* SEO */}
        <fieldset className="rounded-2xl p-6 space-y-4" style={{ background: '#1e2736', border: '1px solid rgba(255,255,255,0.05)' }}>
          <legend className="text-sm font-semibold text-white/60 uppercase tracking-wider px-1">SEO</legend>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/40 mb-1.5">SEO Title (EN)</label>
              <input name="seo_title_en" placeholder={`${product.badge_en} | InfinityTech`} className="admin-input w-full" />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5">SEO Title (AR)</label>
              <input name="seo_title_ar" dir="rtl" className="admin-input w-full" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/40 mb-1.5">Meta Description (EN)</label>
              <textarea name="seo_description_en" rows={2} className="admin-input w-full resize-none" />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5">Meta Description (AR)</label>
              <textarea name="seo_description_ar" rows={2} dir="rtl" className="admin-input w-full resize-none" />
            </div>
          </div>
        </fieldset>

        <div className="flex items-center gap-3">
          <SaveButton pending={isPending} />
          <Link
            href={`/${locale}/products/${slug}`}
            target="_blank"
            className="px-5 py-2.5 rounded-xl text-sm text-white/50 hover:text-white/80 transition-colors"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            Preview page ↗
          </Link>
          <button
            type="button"
            onClick={handleTogglePublished}
            className="ml-auto text-xs text-white/30 hover:text-white/60 transition-colors"
          >
            Revalidate cache
          </button>
        </div>
      </form>
    </div>
  )
}
