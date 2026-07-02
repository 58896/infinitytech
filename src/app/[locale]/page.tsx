import { getLocale } from 'next-intl/server'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import PartnersSection from '@/components/home/PartnersSection'
import ServicesSection from '@/components/home/ServicesSection'
import FeatureSection from '@/components/home/FeatureSection'
import StatsSection from '@/components/home/StatsSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import ArticlesSection from '@/components/home/ArticlesSection'
import ContactSection from '@/components/home/ContactSection'
import UniqueSection from '@/components/home/UniqueSection'

export default async function HomePage() {
  const locale = await getLocale()

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PartnersSection />
        <ServicesSection />

        {/* Digital Signage */}
        <FeatureSection
          id="digital-signage"
          eyebrow_ar="الشاشات الرقمية" eyebrow_en="DIGITAL SIGNAGE"
          title_ar="إلى تجربة تفاعلية ذكية" title_en="Into a Smart Interactive Experience"
          titleHighlight_ar="حوّل قائمتك" titleHighlight_en="Transform Your Menu"
          description_ar="شاشات InfinityTech الرقمية تتجاوز مفهوم عرض القائمة التقليدي — إنها منصة تواصل ذكية تتفاعل مع عملائك وتعزز مبيعاتك تلقائياً."
          description_en="InfinityTech digital screens go beyond traditional menu display — they are a smart communication platform that interacts with your customers and automatically boosts your sales."
          bullets={[
            { text_ar: 'شاشات 4K مقاومة للأشعة فوق البنفسجية والمطر', text_en: '4K screens resistant to UV rays and rain' },
            { text_ar: 'تحديثات فورية للأسعار والمنتجات من السحابة', text_en: 'Instant price and product updates from the cloud' },
            { text_ar: 'عرض محتوى مخصص بحسب الوقت والطقس', text_en: 'Personalized content display based on time and weather' },
          ]}
          imageSrc="/images/triple-menu-board.PNG"
          imageAlt="Digital Signage"
          href="/products/digital-signage"
          cta_ar="اكتشف المزيد ←" cta_en="Explore More →"
        />

        {/* Kiosk */}
        <FeatureSection
          id="kiosk"
          eyebrow_ar="كشكات الطلب الذاتي" eyebrow_en="SELF-ORDER KIOSKS"
          title_ar="حرية الاختيار والسرعة" title_en="Freedom of Choice and Speed"
          titleHighlight_ar="امنح عملاءك" titleHighlight_en="Give Your Customers"
          description_ar="كشكات الطلب الذاتي من InfinityTech تحوّل طريقة تلقي الطلبات في مطعمك — تجربة أسرع للعميل، وأقل أخطاء، وأعلى إيرادات."
          description_en="InfinityTech self-service kiosks transform the way orders are received in your restaurant — faster customer experience, fewer errors, and higher revenue."
          bullets={[
            { text_ar: 'تكامل مع الدفع الإلكتروني ومحافظ الجوال', text_en: 'Integration with electronic payment and mobile wallets' },
            { text_ar: 'ذكاء اصطناعي لاقتراح الوجبات المكملة (Upsell)', text_en: 'AI for suggesting complementary meals (Upsell)' },
            { text_ar: 'واجهة متعددة اللغات تشمل العربية والإنجليزية', text_en: 'Multi-language interface including Arabic and English' },
          ]}
          imageSrc="/images/77208d1db0f28ae077104502fc58163f.jpg"
          imageAlt="Self-Order Kiosk"
          href="/products/kiosk"
          cta_ar="اكتشف المزيد ←" cta_en="Explore More →"
          reversed
          accentColor="var(--accent)"
          alt
        />

        {/* AI Camera */}
        <FeatureSection
          id="ai-camera"
          eyebrow_ar="كاميرات الذكاء الاصطناعي" eyebrow_en="AI CAMERA"
          title_ar="إلى نظام ذكي لتحليل المطاعم" title_en="Into an Intelligent Restaurant Analytics System"
          titleHighlight_ar="حوّل كاميرات المراقبة" titleHighlight_en="Transform Your Cameras"
          description_ar="كاميرات InfinityTech المدعومة بالذكاء الاصطناعي تمنحك رؤية فورية لحركة العملاء، إشغال الطاولات، الطوابير، سلامة الموظفين، وجودة الخدمة."
          description_en="InfinityTech AI-powered cameras provide real-time insights into customer flow, table occupancy, queue management, staff safety, and service quality."
          bullets={[
            { text_ar: 'تحليل حركة العملاء وإشغال الطاولات لحظياً', text_en: 'Real-time customer flow and table occupancy analytics' },
            { text_ar: 'إدارة الطوابير وتقليل أوقات الانتظار', text_en: 'Queue management to reduce customer waiting times' },
            { text_ar: 'مراقبة السلامة وجودة الخدمة وتقليل هدر الطعام', text_en: 'Monitor safety, service quality, and reduce food waste' },
          ]}
          imageSrc="/images/restaurant-computer-vision-1060x598.jpg"
          imageAlt="AI Camera"
          href="/products/ai-camera"
          cta_ar="اكتشف المزيد ←" cta_en="Explore More →"
        />

        {/* Customer Feedback */}
        <FeatureSection
          id="customer-feedback"
          eyebrow_ar="نظام تقييم العملاء" eyebrow_en="CUSTOMER FEEDBACK SYSTEM"
          title_ar="واتخذ قرارات أفضل" title_en="Make Better Decisions"
          titleHighlight_ar="استمع إلى عملائك" titleHighlight_en="Listen to Your Customers"
          description_ar="يجمع نظام InfinityTech آراء العملاء من أجهزة التقييم، رمز QR، الموقع الإلكتروني، والتطبيقات في منصة مركزية واحدة."
          description_en="InfinityTech Customer Feedback System collects customer opinions from feedback terminals, QR codes, websites, and mobile apps into one centralized platform."
          bullets={[
            { text_ar: 'قياس مؤشرات NPS و CSAT و CES في الوقت الفعلي', text_en: 'Real-time NPS, CSAT, and CES tracking' },
            { text_ar: 'تنبيهات فورية عند التقييمات السلبية لمعالجة المشكلة بسرعة', text_en: 'Instant alerts for negative feedback to enable rapid response' },
            { text_ar: 'لوحة تحكم ذكية وتقارير تفصيلية لتحسين تجربة العملاء', text_en: 'Smart dashboards and detailed reports to enhance customer experience' },
          ]}
          imageSrc="/images/customer-feedback-banner.webp"
          imageAlt="Customer Feedback"
          href="/products/customer-feedback"
          cta_ar="اكتشف المزيد ←" cta_en="Explore More →"
          reversed
          accentColor="var(--accent)"
          alt
        />

        <StatsSection locale={locale} />
        <UniqueSection />
        <TestimonialsSection />
        <ProjectsSection />
        <ArticlesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
