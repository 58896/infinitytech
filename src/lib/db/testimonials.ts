import { createAnonClient, isSupabaseConfigured } from '@/lib/supabase/anon'

export interface TestimonialItem {
  initials: string
  name_ar: string
  name_en: string
  role_ar: string
  role_en: string
  content_ar: string
  content_en: string
}

const STATIC_TESTIMONIALS: TestimonialItem[] = [
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
    role_en: "Head of Operational Excellence - McDonald's KSA",
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
    content_en: "InfinityTech's ability to customize systems based on local consumer behavior in Saudi Arabia is highly impressive.",
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

export async function getTestimonials(): Promise<TestimonialItem[]> {
  if (!isSupabaseConfigured()) return STATIC_TESTIMONIALS

  const supabase = createAnonClient()
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('is_published', true)
    .order('sort_order')

  if (error || !data?.length) return STATIC_TESTIMONIALS
  return (data as unknown as TestimonialItem[])
}
