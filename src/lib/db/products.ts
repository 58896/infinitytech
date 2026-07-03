import { products as staticProducts, type Product } from '@/data/products'
import { createAnonClient, isSupabaseConfigured } from '@/lib/supabase/anon'

// Shape of a DB row after migration 002
interface ProductRow {
  slug: string
  accent_color: string
  accent_grad: string
  badge_icon: string
  hero_badge_ar: string
  hero_badge_en: string
  title_grad_ar: string
  title_grad_en: string
  title_plain_ar: string
  title_plain_en: string
  grad_first: boolean
  description_ar: string
  description_en: string
  stats_ar: unknown        // [{number, label_ar, label_en}]
  overview_image_url: string | null
  overview_content_first: boolean
  overview_label_ar: string
  overview_label_en: string
  overview_title_ar: string
  overview_title_en: string
  overview_desc_ar: string
  overview_desc_en: string
  overview_special_right: string | null
  features_ar: unknown     // [{ar, en}]
  sections_data: unknown   // Section[]
  cta_title_ar: string
  cta_title_en: string
  cta_desc_ar: string
  cta_desc_en: string
  is_published: boolean
}

function mapRow(row: ProductRow): Product {
  const stats = (row.stats_ar as { number: string; label_ar: string; label_en: string }[] | null) ?? []
  const features = (row.features_ar as { ar: string; en: string }[] | null) ?? []

  return {
    slug: row.slug,
    accent: row.accent_color,
    accentGrad: row.accent_grad,
    badge_ar: row.hero_badge_ar,
    badge_en: row.hero_badge_en,
    badgeIcon: row.badge_icon,
    titleGrad_ar: row.title_grad_ar,
    titleGrad_en: row.title_grad_en,
    titlePlain_ar: row.title_plain_ar,
    titlePlain_en: row.title_plain_en,
    gradFirst: row.grad_first,
    desc_ar: row.description_ar,
    desc_en: row.description_en,
    stats: stats.map((s) => ({
      number: s.number,
      label_ar: s.label_ar,
      label_en: s.label_en,
    })),
    overviewImage: row.overview_image_url ?? undefined,
    overviewContentFirst: row.overview_content_first,
    overview: {
      label_ar: row.overview_label_ar,
      label_en: row.overview_label_en,
      title_ar: row.overview_title_ar,
      title_en: row.overview_title_en,
      desc_ar: row.overview_desc_ar,
      desc_en: row.overview_desc_en,
      features: features.map((f) => ({ ar: f.ar, en: f.en })),
      specialRight: (row.overview_special_right as 'leaderboard-demo') ?? undefined,
    },
    sections: (row.sections_data as Product['sections']) ?? [],
    cta: {
      title_ar: row.cta_title_ar,
      title_en: row.cta_title_en,
      desc_ar: row.cta_desc_ar,
      desc_en: row.cta_desc_en,
    },
  }
}

export async function getProducts(): Promise<Product[]> {
  if (!isSupabaseConfigured()) return staticProducts

  const supabase = createAnonClient()
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_published', true)
    .order('sort_order')

  if (error || !data?.length) return staticProducts
  return data.map((row) => mapRow(row as unknown as ProductRow))
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  if (!isSupabaseConfigured()) return staticProducts.find((p) => p.slug === slug)

  const supabase = createAnonClient()
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single()

  if (error || !data) return staticProducts.find((p) => p.slug === slug)
  return mapRow(data as unknown as ProductRow)
}

export async function getProductSlugs(): Promise<string[]> {
  if (!isSupabaseConfigured()) return staticProducts.map((p) => p.slug)

  const supabase = createAnonClient()
  const { data, error } = await supabase
    .from('products')
    .select('slug')
    .eq('is_published', true)

  if (error || !data?.length) return staticProducts.map((p) => p.slug)
  return (data as { slug: string }[]).map((row) => row.slug)
}
