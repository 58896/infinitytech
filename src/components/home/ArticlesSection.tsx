import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import RevealWrapper from '@/components/ui/RevealWrapper'

const ARTICLES = [
  {
    slug: 'digital-signage',
    title_ar: 'كيف تزيد الشاشات الرقمية مبيعات مطعمك بنسبة 30%؟',
    title_en: 'How Digital Signage Increases Your Restaurant Sales by 30%?',
    excerpt_ar: 'اكتشف كيف تؤثر الشاشات الرقمية على قرارات العملاء وتزيد متوسط قيمة الطلب.',
    excerpt_en: 'Discover how digital signage influences customer decisions and increases average order value.',
    category_ar: 'الشاشات الرقمية', category_en: 'Digital Signage',
    categoryColor: 'rgba(0,198,255,0.85)',
    date_ar: '15 مايو 2025', date_en: 'May 15, 2025',
    image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=700&q=80',
  },
  {
    slug: 'drive-thru',
    title_ar: '5 أسباب تجعل نظام Drive-Thru ضرورة وليس رفاهية',
    title_en: '5 Reasons Drive-Thru Systems Are a Necessity, Not a Luxury',
    excerpt_ar: 'في ظل المنافسة المتصاعدة بين سلاسل المطاعم، باتت أنظمة Drive-Thru المتكاملة ركيزةً أساسية للنمو.',
    excerpt_en: 'Integrated Drive-Thru systems have become a key pillar for growth, not just an add-on feature.',
    category_ar: 'درايف ثرو', category_en: 'Drive-Thru',
    categoryColor: 'rgba(123,47,247,0.85)',
    date_ar: '2 أبريل 2025', date_en: 'April 2, 2025',
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=700&q=80',
  },
  {
    slug: 'ai-camera',
    title_ar: 'مستقبل الذكاء الاصطناعي في المطاعم السعودية',
    title_en: 'The Future of AI in Saudi Restaurants',
    excerpt_ar: 'كيف يُعيد الذكاء الاصطناعي تشكيل تجربة الطعام في المملكة.',
    excerpt_en: 'How AI is reshaping the dining experience in Saudi Arabia through smart recommendations and data analytics.',
    category_ar: 'الذكاء الاصطناعي', category_en: 'Artificial Intelligence',
    categoryColor: 'rgba(255,77,166,0.85)',
    date_ar: '18 مارس 2025', date_en: 'March 18, 2025',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&q=80',
  },
  {
    slug: 'kiosk',
    title_ar: 'كيف تقلل كشكات الطلب الذاتي أخطاء الطلبات بنسبة 95%؟',
    title_en: 'How Self-Order Kiosks Cut Order Errors by 95%?',
    excerpt_ar: 'نظرة معمقة على كيفية تحويل الكشكات الذاتية تجربة الطلب.',
    excerpt_en: 'An in-depth look at how self-order kiosks transform the ordering experience through AI.',
    category_ar: 'الكشكات الذاتية', category_en: 'Self-Order Kiosks',
    categoryColor: 'rgba(0,200,100,0.85)',
    date_ar: '28 مايو 2025', date_en: 'May 28, 2025',
    image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=700&q=80',
  },
  {
    slug: 'customer-feedback',
    title_ar: 'لماذا يجب أن تستمع لعملائك لحظياً وليس شهرياً؟',
    title_en: 'Why You Should Listen to Customers in Real-Time, Not Monthly?',
    excerpt_ar: 'كيف تساعدك مؤشرات NPS وCSAT اللحظية على اكتشاف المشاكل قبل أن تتفاقم.',
    excerpt_en: 'How real-time NPS and CSAT indicators help you catch problems before they become a crisis.',
    category_ar: 'تقييم العملاء', category_en: 'Customer Feedback',
    categoryColor: 'rgba(255,77,166,0.85)',
    date_ar: '10 يونيو 2025', date_en: 'June 10, 2025',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80',
  },
  {
    slug: 'zoom-nitro',
    title_ar: 'ما لا يُقاس لا يُدار: قصة نظام ZOOM Nitro',
    title_en: "What Isn't Measured Can't Be Managed: The ZOOM Nitro Story",
    excerpt_ar: 'كيف يساعد قياس أوقات الخدمة بدقة على كشف نقاط الضعف التشغيلية.',
    excerpt_en: 'How precise service-time measurement uncovers hidden operational bottlenecks in the Drive-Thru lane.',
    category_ar: 'مراقبة الأداء', category_en: 'Performance Monitoring',
    categoryColor: 'rgba(0,180,180,0.85)',
    date_ar: '22 يونيو 2025', date_en: 'June 22, 2025',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&q=80',
  },
  {
    slug: 'leaderboard',
    title_ar: 'علم النفس وراء لوحات المتصدرين: لماذا تنجح المنافسة؟',
    title_en: 'The Psychology Behind Leaderboards: Why Competition Works',
    excerpt_ar: 'استكشف كيف تستخدم عناصر الألعاب لرفع إنتاجية فريقك.',
    excerpt_en: "Explore how gamification elements boost your team's productivity without additional payroll cost.",
    category_ar: 'تحفيز الفرق', category_en: 'Team Motivation',
    categoryColor: 'rgba(255,160,0,0.85)',
    date_ar: '5 يوليو 2025', date_en: 'July 5, 2025',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=700&q=80',
  },
]

export default function ArticlesSection() {
  const t = useTranslations('articles')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  return (
    <section id="articles" className="py-[100px]" style={{ background: 'var(--dark2)' }}>
      <div className="max-w-content mx-auto px-6">
        <RevealWrapper className="text-center mb-12">
          <span className="block text-[0.8rem] font-bold uppercase tracking-[3px] text-primary mb-3">{t('eyebrow')}</span>
          <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold mb-4">
            {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
          </h2>
          <p className="text-white/65 max-w-[620px] mx-auto leading-[1.7]">{t('description')}</p>
        </RevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {ARTICLES.map((article, i) => (
            <RevealWrapper key={article.slug} delay={(i % 3) * 90}>
              <Link
                href={`/articles/${article.slug}`}
                className="block rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,198,255,0.1)]"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
              >
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={isRTL ? article.title_ar : article.title_en}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.85) 0%, transparent 60%)' }} />
                  <span
                    className="absolute top-3.5 end-3.5 px-3.5 py-1 rounded-full text-[0.75rem] font-bold text-white"
                    style={{ background: article.categoryColor }}
                  >
                    {isRTL ? article.category_ar : article.category_en}
                  </span>
                  <div className="absolute bottom-3 end-3.5 text-[0.78rem] text-white/70">
                    {isRTL ? article.date_ar : article.date_en}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-[1.1rem] font-bold text-white mb-3 leading-[1.5]">
                    {isRTL ? article.title_ar : article.title_en}
                  </h3>
                  <p className="text-[0.9rem] leading-[1.7]" style={{ color: '#94a3b8' }}>
                    {isRTL ? article.excerpt_ar : article.excerpt_en}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-5 text-[0.9rem] font-semibold text-primary">
                    {t('readMore')}
                  </span>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
