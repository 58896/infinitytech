import { useTranslations, useLocale } from 'next-intl'
import type { TestimonialItem } from '@/lib/db/testimonials'

function TCard({ testimonial, locale }: { testimonial: TestimonialItem; locale: string }) {
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

export default function TestimonialsSection({ testimonials }: { testimonials: TestimonialItem[] }) {
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
          {[...testimonials, ...testimonials].map((item, i) => (
            <TCard key={i} testimonial={item} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  )
}
