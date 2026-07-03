import { getArticles } from '@/lib/db/articles'
import Link from 'next/link'

export default async function AdminArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const articles = await getArticles()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Articles</h1>
        <p className="text-white/40 text-sm mt-1">{articles.length} articles</p>
      </div>

      <div className="rounded-2xl overflow-hidden" style={{ background: '#1e2736', border: '1px solid rgba(255,255,255,0.05)' }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: '#111827', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white/40">Article</th>
              <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white/40">Category</th>
              <th className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white/40">Read time</th>
              <th className="text-right px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white/40">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {articles.map((a) => (
              <tr key={a.slug} className="hover:bg-white/2 transition-colors">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{a.badgeIcon}</span>
                    <div>
                      <div className="font-medium text-white leading-snug">{a.title_en}</div>
                      <div className="text-white/40 text-xs mt-0.5 leading-snug">{a.title_ar}</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: `${a.accent}20`, color: a.accent }}>
                    {a.badge_en}
                  </span>
                </td>
                <td className="px-5 py-4 text-white/40 text-xs">{a.readTime_en}</td>
                <td className="px-5 py-4 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <Link
                      href={`/${locale}/articles/${a.slug}`}
                      target="_blank"
                      className="text-white/40 hover:text-white/70 transition-colors text-xs"
                    >
                      Preview ↗
                    </Link>
                    <Link
                      href={`/${locale}/admin/articles/${a.slug}`}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-white"
                      style={{ background: 'rgba(123,47,247,0.15)', border: '1px solid rgba(123,47,247,0.25)' }}
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
    </div>
  )
}
