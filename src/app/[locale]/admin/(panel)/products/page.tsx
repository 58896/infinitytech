import { getProducts } from '@/lib/db/products'
import Link from 'next/link'

export default async function AdminProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const products = await getProducts()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Products</h1>
          <p className="text-white/40 text-sm mt-1">{products.length} product pages</p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden" style={{ background: '#1e2736', border: '1px solid rgba(255,255,255,0.05)' }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: '#111827', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white/40">Product</th>
              <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white/40">Slug</th>
              <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white/40">Accent</th>
              <th className="text-right px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white/40">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {products.map((p) => (
              <tr key={p.slug} className="hover:bg-white/2 transition-colors">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{p.badgeIcon}</span>
                    <div>
                      <div className="font-medium text-white">{p.badge_en}</div>
                      <div className="text-white/40 text-xs mt-0.5">{p.badge_ar}</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <code className="text-xs px-2 py-1 rounded text-white/60" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    {p.slug}
                  </code>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full flex-shrink-0" style={{ background: p.accent }} />
                    <span className="text-white/40 text-xs">{p.accent}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <Link
                      href={`/${locale}/products/${p.slug}`}
                      target="_blank"
                      className="text-white/40 hover:text-white/70 transition-colors text-xs"
                    >
                      Preview ↗
                    </Link>
                    <Link
                      href={`/${locale}/admin/products/${p.slug}`}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-colors"
                      style={{ background: 'rgba(0,114,255,0.15)', border: '1px solid rgba(0,114,255,0.25)' }}
                    >
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-white/30 px-1">
        Product page content (sections, hero) is managed via the seed script. Here you can edit metadata and SEO fields.
      </p>
    </div>
  )
}
