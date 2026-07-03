import { createAdminClient, isAdminConfigured } from '@/lib/supabase/admin'
import { products as staticProducts } from '@/data/products'
import { articles as staticArticles } from '@/data/articles'
import Link from 'next/link'

async function getStats() {
  if (!isAdminConfigured()) {
    return {
      products: staticProducts.length,
      articles: staticArticles.length,
      projects: 10,
      leads: 0,
      testimonials: 5,
      newLeads: 0,
    }
  }

  const supabase = createAdminClient()
  const [products, articles, projects, leads, testimonials, newLeads] = await Promise.all([
    supabase.from('products').select('id', { count: 'exact', head: true }),
    supabase.from('articles').select('id', { count: 'exact', head: true }),
    supabase.from('projects').select('id', { count: 'exact', head: true }),
    supabase.from('leads').select('id', { count: 'exact', head: true }),
    supabase.from('testimonials').select('id', { count: 'exact', head: true }),
    supabase.from('leads').select('id', { count: 'exact', head: true }).eq('status', 'new'),
  ])

  return {
    products: products.count ?? 0,
    articles: articles.count ?? 0,
    projects: projects.count ?? 0,
    leads: leads.count ?? 0,
    testimonials: testimonials.count ?? 0,
    newLeads: newLeads.count ?? 0,
  }
}

const STAT_CARDS = [
  { key: 'products', label: 'Products', href: 'admin/products', color: '#00c6ff', icon: '📦' },
  { key: 'articles', label: 'Articles', href: 'admin/articles', color: '#7b2ff7', icon: '📝' },
  { key: 'projects', label: 'Projects', href: 'admin/projects', color: '#00b4b4', icon: '🖼️' },
  { key: 'leads', label: 'Total Leads', href: 'admin/leads', color: '#ffa000', icon: '📬' },
  { key: 'testimonials', label: 'Testimonials', href: 'admin/testimonials', color: '#ff4da6', icon: '⭐' },
  { key: 'newLeads', label: 'New Leads', href: 'admin/leads', color: '#0072ff', icon: '🔔' },
] as const

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const stats = await getStats()

  const quickLinks = [
    { label: 'View all leads', href: `/${locale}/admin/leads` },
    { label: 'Manage products', href: `/${locale}/admin/products` },
    { label: 'Manage projects', href: `/${locale}/admin/projects` },
    { label: 'Site settings', href: `/${locale}/admin/settings` },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-white/40 text-sm mt-1">Overview of your InfinityTech website</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {STAT_CARDS.map(({ key, label, href, color, icon }) => (
          <Link
            key={key}
            href={`/${locale}/${href}`}
            className="rounded-2xl p-5 flex items-start gap-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: '#1e2736', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: `${color}20` }}>
              {icon}
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stats[key]}</div>
              <div className="text-sm text-white/40 mt-0.5">{label}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick links */}
      <div className="rounded-2xl p-6" style={{ background: '#1e2736', border: '1px solid rgba(255,255,255,0.05)' }}>
        <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white transition-colors"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <svg className="w-4 h-4 text-[#00c6ff]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              {label}
            </Link>
          ))}
        </div>
      </div>

      {!isAdminConfigured() && (
        <div className="rounded-2xl px-5 py-4 text-sm" style={{ background: 'rgba(255,160,0,0.08)', border: '1px solid rgba(255,160,0,0.2)' }}>
          <span className="text-[#ffa000] font-medium">⚠ Supabase not connected —</span>
          <span className="text-white/50 ml-1">showing static data. Add env vars to .env.local to enable live data and CRUD operations.</span>
        </div>
      )}
    </div>
  )
}
