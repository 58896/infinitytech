import { createAnonClient, isSupabaseConfigured } from '@/lib/supabase/anon'

export interface ProjectItem {
  title_ar: string
  title_en: string
  desc_ar: string
  desc_en: string
  badge_ar: string
  badge_en: string
  badgeColor: string
  images: string[]
}

// Hardcoded fallback — mirrored from ProjectsSection so it stays DRY
const STATIC_PROJECTS: ProjectItem[] = [
  {
    title_ar: 'البيك – تركيب نظام درايف ثرو و الشاشات الديجيتال',
    title_en: 'AlBaik – Drive-Thru & Digital Screens Installation',
    desc_ar: 'تركيب شاشات القوائم التقليدية بشاشات 4K رقمية مع منظومة إدارة المحتوى السحابية لتحديث الأسعار والعروض لحظياً في جميع الفروع.',
    desc_en: 'Replacing legacy menu boards with 4K digital screens and cloud CMS for real-time updates across all branches.',
    badge_ar: 'درايف ثرو', badge_en: 'Drive Thru',
    badgeColor: 'rgba(123,47,247,0.9)',
    images: ['/images/Al-Baik-1.jpeg', '/images/Al-Baik-2.jpeg', '/images/Al-Baik-3.jpeg'],
  },
  {
    title_ar: 'هارديز – كشكات الطلب الذاتي',
    title_en: "Hardee's – Self-Order Kiosks",
    desc_ar: 'تصميم وتوريد وتركيب كشكات الطلب الذاتي بالذكاء الاصطناعي لاقتراح الإضافات وتحسين متوسط الطلب بنسبة 35%.',
    desc_en: 'Design, supply, and installation of AI-powered kiosks for upselling, improving average order value by 35%.',
    badge_ar: 'كشكات ذاتية', badge_en: 'Self-Order Kiosks',
    badgeColor: 'rgba(255,77,166,0.9)',
    images: ['/images/Hardees-SOK-1.jpeg', '/images/Hardees-SOK.jpeg'],
  },
  {
    title_ar: 'برغر كينغ – شاشات رقمية',
    title_en: 'Burger King – Digital Signage',
    desc_ar: 'توريد وتشغيل شاشات رقمية داخلية متكاملة مع نظام إدارة المحتوى المركزي في 55 فرع.',
    desc_en: 'Supply and operation of indoor digital signage integrated with centralized CMS across 55 branches.',
    badge_ar: 'شاشات رقمية', badge_en: 'Digital Signage',
    badgeColor: 'rgba(123,47,247,0.9)',
    images: ['/images/Burger-King---Digital-Signages-2.jpeg', '/images/Burger-King---Digital-Signages-1.jpeg'],
  },
  {
    title_ar: 'ماكدونالدز – منظومة Drive-Thru',
    title_en: "McDonald's – Drive-Thru System",
    desc_ar: 'ترقية شاملة لأنظمة Drive-Thru بتقنية الصوت الرقمي وربط مراكز الطلبات بالمطبخ تلقائياً.',
    desc_en: 'Full Drive-Thru upgrade with digital voice tech and kitchen auto-routing to cut service time.',
    badge_ar: 'درايف ثرو', badge_en: 'Drive-Thru',
    badgeColor: 'rgba(0,198,255,0.9)',
    images: ['/images/MCD---Drive-Thru-1.jpeg', '/images/MCD---Drive-Thru-2.jpeg'],
  },
  {
    title_ar: 'ستاربكس – منظومة Drive-Thru',
    title_en: 'Starbucks – Drive-Thru System',
    desc_ar: 'تركيب نظام Drive-Thru مدمج مع شاشات عرض خارجية وداخلية وقياس أوقات الخدمة عبر 70 موقع.',
    desc_en: 'Integrated Drive-Thru system with indoor/outdoor screens and service-time analytics across 70 KSA locations.',
    badge_ar: 'درايف ثرو', badge_en: 'Drive-Thru',
    badgeColor: 'rgba(0,200,100,0.9)',
    images: ['/images/Starbucks---Drive-Thru-1.jpeg'],
  },
  {
    title_ar: 'BRGR – منظومة Drive-Thru الكاملة',
    title_en: 'BRGR – Complete Drive-Thru System',
    desc_ar: 'تركيب وتشغيل منظومة Drive-Thru متكاملة تشمل الأنظمة الصوتية وشاشات العرض الخارجية وقياس أوقات الخدمة.',
    desc_en: 'Full Drive-Thru system including voice units, outdoor displays, and service-time performance monitoring.',
    badge_ar: 'درايف ثرو', badge_en: 'Drive-Thru',
    badgeColor: 'rgba(0,198,255,0.9)',
    images: ['/images/BRGR---Drive-Thru-2.jpeg', '/images/BRGR---Drive-Thru-1.jpeg', '/images/BRGR---Drive-Thru-3.jpeg', '/images/BRGR---Drive-Thru-4.jpeg'],
  },
  {
    title_ar: "Gloria Jean's – Drive-Thru وشاشات",
    title_en: "Gloria Jean's – Drive-Thru & Signage",
    desc_ar: 'تصميم وتنفيذ منظومة متكاملة تجمع Drive-Thru وشاشات داخلية وخارجية.',
    desc_en: 'Full integrated system combining Drive-Thru and indoor/outdoor signage.',
    badge_ar: 'درايف ثرو + شاشات', badge_en: 'Drive-Thru + Signage',
    badgeColor: 'rgba(255,160,0,0.9)',
    images: ['/images/GJ-Cafe-1.jpeg', '/images/GJ-Cafe-here.jpeg', '/images/GJ-Cafe.jpeg', '/images/GJ-Cafe-lll.jpeg', '/images/GJ-Cafe-ll.jpeg'],
  },
  {
    title_ar: 'سينابون – منظومة Drive-Thru',
    title_en: 'Cinnabon – Drive-Thru System',
    desc_ar: 'تركيب نظام Drive-Thru مع شاشات عرض خارجية وأنظمة صوتية رقمية.',
    desc_en: 'Drive-Thru installation with outdoor display screens and digital voice systems.',
    badge_ar: 'درايف ثرو', badge_en: 'Drive-Thru',
    badgeColor: 'rgba(0,198,255,0.9)',
    images: ['/images/Cinnabon---Drive-Thru-1.jpeg', '/images/Cinnabon---Drive-Thru-2.jpeg'],
  },
  {
    title_ar: 'Maine – منظومة Drive-Thru',
    title_en: 'Maine – Drive-Thru System',
    desc_ar: 'تصميم وتنفيذ نظام Drive-Thru متكامل بشاشات خارجية عالية الجودة.',
    desc_en: 'Design and implementation of a complete Drive-Thru with high-quality outdoor screens.',
    badge_ar: 'درايف ثرو', badge_en: 'Drive-Thru',
    badgeColor: 'rgba(0,198,255,0.9)',
    images: ['/images/Maine---Drive-Thru-1.jpeg', '/images/Maine---Drive-Thru-2.jpeg', '/images/Maine---Drive-Thru-3.jpeg'],
  },
  {
    title_ar: 'Sign Burger – Drive-Thru وشاشات رقمية',
    title_en: 'Sign Burger – Drive-Thru & Digital Signage',
    desc_ar: 'تركيب منظومة متكاملة تشمل Drive-Thru وشاشات رقمية داخلية وخارجية.',
    desc_en: 'Complete system including Drive-Thru and indoor/outdoor digital signage.',
    badge_ar: 'درايف ثرو + شاشات', badge_en: 'Drive-Thru + Signage',
    badgeColor: 'rgba(255,77,166,0.9)',
    images: ['/images/Sign-Burger-1---Copy.jpeg', '/images/Sign-Burger-1.jpeg', '/images/Sign-Burger-2.jpeg', '/images/Sign-Burger-3.jpeg'],
  },
]

export async function getProjects(): Promise<ProjectItem[]> {
  if (!isSupabaseConfigured()) return STATIC_PROJECTS

  const supabase = createAnonClient()
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('is_published', true)
    .order('sort_order')

  if (error || !data?.length) return STATIC_PROJECTS

  return (data as Array<{
    title_ar: string; title_en: string
    description_ar: string; description_en: string
    badge_ar: string; badge_en: string
    badge_color: string; images: string[]
  }>).map((row) => ({
    title_ar: row.title_ar,
    title_en: row.title_en,
    desc_ar: row.description_ar,
    desc_en: row.description_en,
    badge_ar: row.badge_ar,
    badge_en: row.badge_en,
    badgeColor: row.badge_color,
    images: row.images,
  }))
}
