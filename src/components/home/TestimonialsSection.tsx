import { useTranslations, useLocale } from 'next-intl'

const TESTIMONIALS = [
  {
    initials: 'م.ع',
    name_ar: 'م. عمر الغامدي', name_en: 'Eng. Omar Al-Ghamdi',
    role_ar: 'مدير قطاع تقنية المعلومات الإقليمي - شركة البيك للأنظمة الغذائية',
    role_en: 'Regional IT Director - Albaik Corporate',
    content_ar: 'أثبتت شركة انفنتي تك أنها ليست مجرد مزود أجهزة، بل شريك تقني استراتيجي. سرعة الاستجابة والانتشار في فروعنا بالمملكة والدعم الفني الميداني على مدار الساعة ساعدنا في الحفاظ على معاييرنا الصارمة في سرعة الخدمة.',
    content_en: 'InfinityTech proved that they are not just a vendor, but a strategic tech partner. Their speed of deployment across our KSA branches and 24/7 localized support helped us maintain our strict service speed standards.',
  },
  {
    initials: 'أ.ش',
    name_ar: 'أ. عبد الرحمن الشهراني', name_en: 'Abdulrahman Al-Shahrani',
    role_ar: 'رئيس إدارة التميز التشغيلي - ماكدونالدز السعودية',
    role_en: 'Head of Operational Excellence - McDonald\'s KSA',
    content_ar: 'البنية التحتية والحلول الرقمية المتكاملة التي تقدمها انفنتي تك أسهمت بشكل مباشر في مرونة تدفق الطلبات وفك الاختناقات التشغيلية.',
    content_en: 'The infrastructure provided by InfinityTech completely streamlined our order flow. Their hardware resilience under the harsh Saudi weather conditions is outstanding.',
  },
  {
    initials: 'م.ب',
    name_ar: 'أ. منصور بن جلوي', name_en: 'Mansour Bin Jalawi',
    role_ar: 'مدير قطاع التشغيل - برجر كينج المنطقة الوسطى',
    role_en: 'Operations Director - Burger King Central Region',
    content_ar: 'نعتمد على حلول انفنتي تك لتعزيز كفاءة نقاط البيع الرقمية لدينا. التكامل البرمجي السلس الذي توفره الشركة مع الأنظمة العالمية وفر علينا أشهراً من التطوير وخفض مخاطر التشغيل.',
    content_en: 'We rely on InfinityTech solutions to drive efficiency across our digital touchpoints. Their seamless integration with global point-of-sale systems saved us months of development.',
  },
  {
    initials: 'خ.م',
    name_ar: 'أ. خالد الميموني', name_en: 'Khaled Al-Maimouni',
    role_ar: 'مدير الإمداد والتطوير التقني الإقليمي - كنتاكي KFC',
    role_en: 'Regional Supply Chain & Tech Manager - KFC',
    content_ar: 'قدرة شركة انفنتي تك على تخصيص الأنظمة ومرونتها بما يتناسب مع سلوك المستهلك المحلي في السعودية مبهرة للغاية.',
    content_en: 'InfinityTech\'s ability to customize systems based on local consumer behavior in Saudi Arabia is highly impressive.',
  },
  {
    initials: 'س.ق',
    name_ar: 'أ. سلطان القحطاني', name_en: 'Sultan Al-Qahtani',
    role_ar: 'نائب رئيس قطاع التحول الرقمي - شركة هيرفي للخدمات الغذائية',
    role_en: 'VP of Digital Transformation - Herfy',
    content_ar: 'بصفتنا علامة تجارية محلية كبرى، كنا بحاجة إلى حلول تكنولوجية ضخمة تدعمها استجابة فورية وحقيقية على الأرض.',
    content_en: 'As a major local chain, we required an enterprise-grade solution backed by real, instant support. InfinityTech team delivered on every promise.',
  },
]

function TCard({ testimonial, locale }: { testimonial: typeof TESTIMONIALS[0]; locale: string }) {
  const isRTL = locale === 'ar'
  return (
    <div
      className="flex-shrink-0 w-[380px] min-h-[280px] rounded-[24px] p-[35px] flex flex-col justify-between"
      style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div>
        <div className="text-[20px] tracking-[2px]" style={{ color: '#D4AF37' }}>★★★★★</div>
        <p className="mt-5 leading-[1.8] text-[15px] text-[#e2e8f0] font-normal">
          {isRTL ? testimonial.content_ar : testimonial.content_en}
        </p>
      </div>
      <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/5">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm"
          style={{ background: 'linear-gradient(135deg, #00c6ff, #0072ff)' }}
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="font-bold text-white text-[15px]">
            {isRTL ? testimonial.name_ar : testimonial.name_en}
          </div>
          <div className="text-[13px] mt-0.5" style={{ color: '#94a3b8' }}>
            {isRTL ? testimonial.role_ar : testimonial.role_en}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const t = useTranslations('testimonials')
  const locale = useLocale()

  return (
    <section id="testimonials" className="w-full py-[100px] overflow-hidden" style={{ background: '#111827' }}>
      <div className="text-center max-w-[800px] mx-auto px-6 mb-12">
        <span className="block text-[0.8rem] font-bold uppercase tracking-[3px] text-primary mb-3">
          {t('eyebrow')}
        </span>
        <h2 className="text-[clamp(1.7rem,3.5vw,2.5rem)] font-extrabold mb-4">
          {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
        </h2>
        <p className="text-white/65 leading-[1.7]">{t('description')}</p>
      </div>

      {/* Infinite scroll — identical CSS animation to original */}
      <div className="w-full overflow-hidden">
        <div className="testimonials-track">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((item, i) => (
            <TCard key={i} testimonial={item} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  )
}
