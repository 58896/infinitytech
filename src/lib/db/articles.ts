import { articles as staticArticles, type Article, type BodyBlock, type RelatedArticle } from '@/data/articles'
import { createAnonClient, isSupabaseConfigured } from '@/lib/supabase/anon'

interface ArticleRow {
  slug: string
  accent_color: string
  accent_grad: string
  badge_icon: string
  category_ar: string
  category_en: string
  title_ar: string
  title_en: string
  date_ar: string
  date_en: string
  read_time_minutes: number
  hero_image_url: string | null
  body_blocks: unknown      // BodyBlock[]
  related_articles: unknown // RelatedArticle[]
  article_cta: unknown      // Article['cta']
  is_published: boolean
}

function mapRow(row: ArticleRow): Article {
  const cta = row.article_cta as Article['cta'] | null

  return {
    slug: row.slug,
    accent: row.accent_color,
    accentGrad: row.accent_grad,
    badgeIcon: row.badge_icon,
    badge_ar: row.category_ar,
    badge_en: row.category_en,
    title_ar: row.title_ar,
    title_en: row.title_en,
    date_ar: row.date_ar,
    date_en: row.date_en,
    readTime_ar: `⏱ ${row.read_time_minutes} دقائق قراءة`,
    readTime_en: `⏱ ${row.read_time_minutes} min read`,
    heroImage: row.hero_image_url ?? '',
    body: (row.body_blocks as BodyBlock[]) ?? [],
    related: (row.related_articles as RelatedArticle[]) ?? [],
    cta: cta ?? {
      title_ar: '',
      title_en: '',
      desc_ar: '',
      desc_en: '',
      productSlug: row.slug,
    },
  }
}

export async function getArticles(): Promise<Article[]> {
  if (!isSupabaseConfigured()) return staticArticles

  const supabase = createAnonClient()
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false })

  if (error || !data?.length) return staticArticles
  return data.map((row) => mapRow(row as unknown as ArticleRow))
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  if (!isSupabaseConfigured()) return staticArticles.find((a) => a.slug === slug)

  const supabase = createAnonClient()
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single()

  if (error || !data) return staticArticles.find((a) => a.slug === slug)
  return mapRow(data as unknown as ArticleRow)
}

export async function getArticleSlugs(): Promise<string[]> {
  if (!isSupabaseConfigured()) return staticArticles.map((a) => a.slug)

  const supabase = createAnonClient()
  const { data, error } = await supabase
    .from('articles')
    .select('slug')
    .eq('is_published', true)

  if (error || !data?.length) return staticArticles.map((a) => a.slug)
  return (data as { slug: string }[]).map((row) => row.slug)
}
