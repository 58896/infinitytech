/**
 * Seed script — run with: npx tsx scripts/seed.ts
 *
 * Prerequisites:
 *   1. Create your Supabase project at https://app.supabase.com
 *   2. Run supabase/migrations/001_initial_schema.sql in the SQL Editor
 *   3. Run supabase/migrations/002_rich_content_columns.sql in the SQL Editor
 *   4. Copy .env.local.example to .env.local and fill in your Supabase credentials
 */

import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'
import { products } from '../src/data/products'
import { articles } from '../src/data/articles'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!url || !key) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local')
  process.exit(1)
}

const supabase = createClient(url, key)

// ── PROJECTS ─────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    title_ar: 'البيك – تركيب نظام درايف ثرو و الشاشات الديجيتال',
    title_en: 'AlBaik – Drive-Thru & Digital Screens Installation',
    description_ar: 'تركيب شاشات القوائم التقليدية بشاشات 4K رقمية مع منظومة إدارة المحتوى السحابية لتحديث الأسعار والعروض لحظياً في جميع الفروع.',
    description_en: 'Replacing legacy menu boards with 4K digital screens and cloud CMS for real-time updates across all branches.',
    client_name: 'AlBaik',
    badge_ar: 'درايف ثرو', badge_en: 'Drive Thru',
    badge_color: 'rgba(123,47,247,0.9)',
    images: ['/images/Al-Baik-1.jpeg', '/images/Al-Baik-2.jpeg', '/images/Al-Baik-3.jpeg'],
    sort_order: 1,
  },
  {
    title_ar: 'هارديز – كشكات الطلب الذاتي',
    title_en: "Hardee's – Self-Order Kiosks",
    description_ar: 'تصميم وتوريد وتركيب كشكات الطلب الذاتي بالذكاء الاصطناعي لاقتراح الإضافات وتحسين متوسط الطلب بنسبة 35%.',
    description_en: 'Design, supply, and installation of AI-powered kiosks for upselling, improving average order value by 35%.',
    client_name: "Hardee's",
    badge_ar: 'كشكات ذاتية', badge_en: 'Self-Order Kiosks',
    badge_color: 'rgba(255,77,166,0.9)',
    images: ['/images/Hardees-SOK-1.jpeg', '/images/Hardees-SOK.jpeg'],
    sort_order: 2,
  },
  {
    title_ar: 'برغر كينغ – شاشات رقمية',
    title_en: 'Burger King – Digital Signage',
    description_ar: 'توريد وتشغيل شاشات رقمية داخلية متكاملة مع نظام إدارة المحتوى المركزي في 55 فرع.',
    description_en: 'Supply and operation of indoor digital signage integrated with centralized CMS across 55 branches.',
    client_name: 'Burger King',
    badge_ar: 'شاشات رقمية', badge_en: 'Digital Signage',
    badge_color: 'rgba(123,47,247,0.9)',
    images: ['/images/Burger-King---Digital-Signages-2.jpeg', '/images/Burger-King---Digital-Signages-1.jpeg'],
    sort_order: 3,
  },
  {
    title_ar: 'ماكدونالدز – منظومة Drive-Thru',
    title_en: "McDonald's – Drive-Thru System",
    description_ar: 'ترقية شاملة لأنظمة Drive-Thru بتقنية الصوت الرقمي وربط مراكز الطلبات بالمطبخ تلقائياً.',
    description_en: 'Full Drive-Thru upgrade with digital voice tech and kitchen auto-routing to cut service time.',
    client_name: "McDonald's",
    badge_ar: 'درايف ثرو', badge_en: 'Drive-Thru',
    badge_color: 'rgba(0,198,255,0.9)',
    images: ['/images/MCD---Drive-Thru-1.jpeg', '/images/MCD---Drive-Thru-2.jpeg'],
    sort_order: 4,
  },
  {
    title_ar: 'ستاربكس – منظومة Drive-Thru',
    title_en: 'Starbucks – Drive-Thru System',
    description_ar: 'تركيب نظام Drive-Thru مدمج مع شاشات عرض خارجية وداخلية وقياس أوقات الخدمة عبر 70 موقع.',
    description_en: 'Integrated Drive-Thru system with indoor/outdoor screens and service-time analytics across 70 KSA locations.',
    client_name: 'Starbucks',
    badge_ar: 'درايف ثرو', badge_en: 'Drive-Thru',
    badge_color: 'rgba(0,200,100,0.9)',
    images: ['/images/Starbucks---Drive-Thru-1.jpeg'],
    sort_order: 5,
  },
  {
    title_ar: 'BRGR – منظومة Drive-Thru الكاملة',
    title_en: 'BRGR – Complete Drive-Thru System',
    description_ar: 'تركيب وتشغيل منظومة Drive-Thru متكاملة تشمل الأنظمة الصوتية وشاشات العرض الخارجية وقياس أوقات الخدمة.',
    description_en: 'Full Drive-Thru system including voice units, outdoor displays, and service-time performance monitoring.',
    client_name: 'BRGR',
    badge_ar: 'درايف ثرو', badge_en: 'Drive-Thru',
    badge_color: 'rgba(0,198,255,0.9)',
    images: ['/images/BRGR---Drive-Thru-2.jpeg', '/images/BRGR---Drive-Thru-1.jpeg', '/images/BRGR---Drive-Thru-3.jpeg', '/images/BRGR---Drive-Thru-4.jpeg'],
    sort_order: 6,
  },
  {
    title_ar: "Gloria Jean's – Drive-Thru وشاشات",
    title_en: "Gloria Jean's – Drive-Thru & Signage",
    description_ar: 'تصميم وتنفيذ منظومة متكاملة تجمع Drive-Thru وشاشات داخلية وخارجية.',
    description_en: 'Full integrated system combining Drive-Thru and indoor/outdoor signage.',
    client_name: "Gloria Jean's",
    badge_ar: 'درايف ثرو + شاشات', badge_en: 'Drive-Thru + Signage',
    badge_color: 'rgba(255,160,0,0.9)',
    images: ['/images/GJ-Cafe-1.jpeg', '/images/GJ-Cafe-here.jpeg', '/images/GJ-Cafe.jpeg', '/images/GJ-Cafe-lll.jpeg', '/images/GJ-Cafe-ll.jpeg'],
    sort_order: 7,
  },
  {
    title_ar: 'سينابون – منظومة Drive-Thru',
    title_en: 'Cinnabon – Drive-Thru System',
    description_ar: 'تركيب نظام Drive-Thru مع شاشات عرض خارجية وأنظمة صوتية رقمية.',
    description_en: 'Drive-Thru installation with outdoor display screens and digital voice systems.',
    client_name: 'Cinnabon',
    badge_ar: 'درايف ثرو', badge_en: 'Drive-Thru',
    badge_color: 'rgba(0,198,255,0.9)',
    images: ['/images/Cinnabon---Drive-Thru-1.jpeg', '/images/Cinnabon---Drive-Thru-2.jpeg'],
    sort_order: 8,
  },
  {
    title_ar: 'Maine – منظومة Drive-Thru',
    title_en: 'Maine – Drive-Thru System',
    description_ar: 'تصميم وتنفيذ نظام Drive-Thru متكامل بشاشات خارجية عالية الجودة.',
    description_en: 'Design and implementation of a complete Drive-Thru with high-quality outdoor screens.',
    client_name: 'Maine',
    badge_ar: 'درايف ثرو', badge_en: 'Drive-Thru',
    badge_color: 'rgba(0,198,255,0.9)',
    images: ['/images/Maine---Drive-Thru-1.jpeg', '/images/Maine---Drive-Thru-2.jpeg', '/images/Maine---Drive-Thru-3.jpeg'],
    sort_order: 9,
  },
  {
    title_ar: 'Sign Burger – Drive-Thru وشاشات رقمية',
    title_en: 'Sign Burger – Drive-Thru & Digital Signage',
    description_ar: 'تركيب منظومة متكاملة تشمل Drive-Thru وشاشات رقمية داخلية وخارجية.',
    description_en: 'Complete system including Drive-Thru and indoor/outdoor digital signage.',
    client_name: 'Sign Burger',
    badge_ar: 'درايف ثرو + شاشات', badge_en: 'Drive-Thru + Signage',
    badge_color: 'rgba(255,77,166,0.9)',
    images: ['/images/Sign-Burger-1---Copy.jpeg', '/images/Sign-Burger-1.jpeg', '/images/Sign-Burger-2.jpeg', '/images/Sign-Burger-3.jpeg'],
    sort_order: 10,
  },
]

const TESTIMONIALS = [
  {
    initials: 'م.ع',
    name_ar: 'م. عمر الغامدي', name_en: 'Eng. Omar Al-Ghamdi',
    role_ar: 'مدير قطاع تقنية المعلومات الإقليمي - شركة البيك للأنظمة الغذائية',
    role_en: 'Regional IT Director - Albaik Corporate',
    content_ar: 'أثبتت شركة انفنتي تك أنها ليست مجرد مزود أجهزة، بل شريك تقني استراتيجي. سرعة الاستجابة والانتشار في فروعنا بالمملكة والدعم الفني الميداني على مدار الساعة ساعدنا في الحفاظ على معاييرنا الصارمة في سرعة الخدمة.',
    content_en: 'InfinityTech proved that they are not just a vendor, but a strategic tech partner. Their speed of deployment across our KSA branches and 24/7 localized support helped us maintain our strict service speed standards.',
    sort_order: 1,
  },
  {
    initials: 'أ.ش',
    name_ar: 'أ. عبد الرحمن الشهراني', name_en: 'Abdulrahman Al-Shahrani',
    role_ar: 'رئيس إدارة التميز التشغيلي - ماكدونالدز السعودية',
    role_en: "Head of Operational Excellence - McDonald's KSA",
    content_ar: 'البنية التحتية والحلول الرقمية المتكاملة التي تقدمها انفنتي تك أسهمت بشكل مباشر في مرونة تدفق الطلبات وفك الاختناقات التشغيلية.',
    content_en: 'The infrastructure provided by InfinityTech completely streamlined our order flow. Their hardware resilience under the harsh Saudi weather conditions is outstanding.',
    sort_order: 2,
  },
  {
    initials: 'م.ب',
    name_ar: 'أ. منصور بن جلوي', name_en: 'Mansour Bin Jalawi',
    role_ar: 'مدير قطاع التشغيل - برجر كينج المنطقة الوسطى',
    role_en: 'Operations Director - Burger King Central Region',
    content_ar: 'نعتمد على حلول انفنتي تك لتعزيز كفاءة نقاط البيع الرقمية لدينا. التكامل البرمجي السلس الذي توفره الشركة مع الأنظمة العالمية وفر علينا أشهراً من التطوير وخفض مخاطر التشغيل.',
    content_en: 'We rely on InfinityTech solutions to drive efficiency across our digital touchpoints. Their seamless integration with global point-of-sale systems saved us months of development.',
    sort_order: 3,
  },
  {
    initials: 'خ.م',
    name_ar: 'أ. خالد الميموني', name_en: 'Khaled Al-Maimouni',
    role_ar: 'مدير الإمداد والتطوير التقني الإقليمي - كنتاكي KFC',
    role_en: 'Regional Supply Chain & Tech Manager - KFC',
    content_ar: 'قدرة شركة انفنتي تك على تخصيص الأنظمة ومرونتها بما يتناسب مع سلوك المستهلك المحلي في السعودية مبهرة للغاية.',
    content_en: "InfinityTech's ability to customize systems based on local consumer behavior in Saudi Arabia is highly impressive.",
    sort_order: 4,
  },
  {
    initials: 'س.ق',
    name_ar: 'أ. سلطان القحطاني', name_en: 'Sultan Al-Qahtani',
    role_ar: 'نائب رئيس قطاع التحول الرقمي - شركة هيرفي للخدمات الغذائية',
    role_en: 'VP of Digital Transformation - Herfy',
    content_ar: 'بصفتنا علامة تجارية محلية كبرى، كنا بحاجة إلى حلول تكنولوجية ضخمة تدعمها استجابة فورية وحقيقية على الأرض.',
    content_en: 'As a major local chain, we required an enterprise-grade solution backed by real, instant support. InfinityTech team delivered on every promise.',
    sort_order: 5,
  },
]

// ── HELPERS ───────────────────────────────────────────────────────────────────

function parseReadMinutes(str: string): number {
  const match = str.match(/(\d+)/)
  return match ? parseInt(match[1], 10) : 5
}

function firstParagraph(body: { type: string; ar?: string; en?: string }[]): { ar: string; en: string } {
  const p = body.find((b) => b.type === 'p' && b.ar && b.en)
  return { ar: p?.ar ?? '', en: p?.en ?? '' }
}

// ── SEED ──────────────────────────────────────────────────────────────────────

async function seedProducts() {
  console.log('Seeding products...')

  const rows = products.map((p, i) => ({
    slug: p.slug,
    title_ar: p.titlePlain_ar,
    title_en: p.titlePlain_en,
    description_ar: p.desc_ar,
    description_en: p.desc_en,
    hero_badge_ar: p.badge_ar,
    hero_badge_en: p.badge_en,
    accent_color: p.accent,
    accent_grad: p.accentGrad,
    badge_icon: p.badgeIcon,
    title_grad_ar: p.titleGrad_ar,
    title_grad_en: p.titleGrad_en,
    title_plain_ar: p.titlePlain_ar,
    title_plain_en: p.titlePlain_en,
    grad_first: p.gradFirst,
    overview_image_url: p.overviewImage ?? null,
    overview_content_first: p.overviewContentFirst ?? false,
    overview_label_ar: p.overview.label_ar,
    overview_label_en: p.overview.label_en,
    overview_title_ar: p.overview.title_ar,
    overview_title_en: p.overview.title_en,
    overview_desc_ar: p.overview.desc_ar,
    overview_desc_en: p.overview.desc_en,
    overview_special_right: p.overview.specialRight ?? null,
    features_ar: p.overview.features,
    features_en: [],
    stats_ar: p.stats,
    stats_en: [],
    sections_data: p.sections,
    cta_title_ar: p.cta.title_ar,
    cta_title_en: p.cta.title_en,
    cta_desc_ar: p.cta.desc_ar,
    cta_desc_en: p.cta.desc_en,
    is_published: true,
    sort_order: i + 1,
  }))

  const { error } = await supabase.from('products').upsert(rows, { onConflict: 'slug' })
  if (error) throw new Error(`Products: ${error.message}`)
  console.log(`  ✓ ${rows.length} products seeded`)
}

async function seedArticles() {
  console.log('Seeding articles...')

  const rows = articles.map((a) => {
    const excerpt = firstParagraph(a.body as { type: string; ar?: string; en?: string }[])
    return {
      slug: a.slug,
      title_ar: a.title_ar,
      title_en: a.title_en,
      excerpt_ar: excerpt.ar.slice(0, 300),
      excerpt_en: excerpt.en.slice(0, 300),
      body_ar: '',
      body_en: '',
      hero_image_url: a.heroImage || null,
      category_ar: a.badge_ar,
      category_en: a.badge_en,
      read_time_minutes: parseReadMinutes(a.readTime_en),
      published_at: new Date().toISOString(),
      is_published: true,
      related_product_slug: a.cta.productSlug || null,
      accent_color: a.accent,
      accent_grad: a.accentGrad,
      badge_icon: a.badgeIcon,
      date_ar: a.date_ar,
      date_en: a.date_en,
      body_blocks: a.body,
      related_articles: a.related,
      article_cta: a.cta,
    }
  })

  const { error } = await supabase.from('articles').upsert(rows, { onConflict: 'slug' })
  if (error) throw new Error(`Articles: ${error.message}`)
  console.log(`  ✓ ${rows.length} articles seeded`)
}

async function seedProjects() {
  console.log('Seeding projects...')
  const { error } = await supabase.from('projects').upsert(PROJECTS, { onConflict: 'id' })
  if (error) throw new Error(`Projects: ${error.message}`)
  console.log(`  ✓ ${PROJECTS.length} projects seeded`)
}

async function seedTestimonials() {
  console.log('Seeding testimonials...')
  const { error } = await supabase.from('testimonials').upsert(TESTIMONIALS, { onConflict: 'id' })
  if (error) throw new Error(`Testimonials: ${error.message}`)
  console.log(`  ✓ ${TESTIMONIALS.length} testimonials seeded`)
}

async function main() {
  console.log('🌱 Starting seed...\n')
  await seedProducts()
  await seedArticles()
  await seedProjects()
  await seedTestimonials()
  console.log('\n✅ Seed complete!')
}

main().catch((err) => {
  console.error('❌ Seed failed:', err.message)
  process.exit(1)
})
