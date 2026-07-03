export type Stat = { number: string; label_ar: string; label_en: string }
export type Feature = { ar: string; en: string }
export type Card = { icon: string; title_ar: string; title_en: string; desc_ar: string; desc_en: string }
export type Step = { num: number | string; title_ar: string; title_en: string; desc_ar: string; desc_en: string }
export type TypeCard = { num: string; title_ar: string; title_en: string; desc_ar: string; desc_en: string }
export type SpecItem = { ar: string; en: string }
export type SpecGroup = { title_ar: string; title_en: string; items: SpecItem[] }
export type Metric = { letter: string; title_ar: string; title_en: string; desc_ar: string; desc_en: string }
export type Channel = { icon: string; title_ar: string; title_en: string; desc_ar: string; desc_en: string }
export type DashFeature = { icon: string; title_ar: string; title_en: string; desc_ar: string; desc_en: string }

export type Section =
  | { type: 'cards'; bg: 'dark' | 'dark2'; eyebrow_ar: string; eyebrow_en: string; title_ar: string; title_en: string; cards: Card[] }
  | { type: 'steps'; bg: 'dark' | 'dark2'; eyebrow_ar: string; eyebrow_en: string; title_ar: string; title_en: string; steps: Step[] }
  | { type: 'typecards'; bg: 'dark' | 'dark2'; eyebrow_ar: string; eyebrow_en: string; title_ar: string; title_en: string; cards: TypeCard[] }
  | { type: 'specs'; bg: 'dark' | 'dark2'; eyebrow_ar: string; eyebrow_en: string; title_ar: string; title_en: string; groups: SpecGroup[] }
  | { type: 'metrics'; bg: 'dark' | 'dark2'; eyebrow_ar: string; eyebrow_en: string; title_ar: string; title_en: string; metrics: Metric[] }
  | { type: 'channels'; bg: 'dark' | 'dark2'; eyebrow_ar: string; eyebrow_en: string; title_ar: string; title_en: string; channels: Channel[] }
  | { type: 'checkpoints'; bg: 'dark' | 'dark2'; eyebrow_ar: string; eyebrow_en: string; title_ar: string; title_en: string; checkpoints: Step[] }
  | { type: 'gamification'; bg: 'dark' | 'dark2'; eyebrow_ar: string; eyebrow_en: string; title_ar: string; title_en: string; items: Card[] }
  | { type: 'dashboard'; bg: 'dark' | 'dark2'; eyebrow_ar: string; eyebrow_en: string; title_ar: string; title_en: string; desc_ar: string; desc_en: string; features: DashFeature[] }

export type Product = {
  slug: string
  accent: string
  accentGrad: string
  badge_ar: string; badge_en: string; badgeIcon: string
  titleGrad_ar: string; titleGrad_en: string
  titlePlain_ar: string; titlePlain_en: string
  gradFirst: boolean
  desc_ar: string; desc_en: string
  stats: Stat[]
  overviewImage?: string
  overviewContentFirst?: boolean
  overview: {
    label_ar: string; label_en: string
    title_ar: string; title_en: string
    desc_ar: string; desc_en: string
    features: Feature[]
    specialRight?: 'leaderboard-demo'
  }
  sections: Section[]
  cta: { title_ar: string; title_en: string; desc_ar: string; desc_en: string }
}

export const products: Product[] = [
  {
    slug: 'drive-thru',
    accent: '#00c6ff',
    accentGrad: 'linear-gradient(90deg,#00c6ff,#0072ff)',
    badgeIcon: '🚗', badge_ar: 'نظام Drive-Thru المتكامل', badge_en: 'Integrated Drive-Thru System',
    gradFirst: true,
    titleGrad_ar: 'منظومة Drive-Thru', titleGrad_en: 'Drive-Thru System',
    titlePlain_ar: 'الأسرع في المنطقة', titlePlain_en: 'The Fastest in the Region',
    desc_ar: 'أنظمة صوتية ورقمية متكاملة تُحدث ثورة في خدمة السيارات — تسريع الطلبات، تقليل وقت الانتظار، وتحسين الكفاءة التشغيلية لمطعمك.',
    desc_en: 'Integrated voice and digital systems that revolutionize drive-thru service — accelerating orders, reducing wait times, and optimizing operational efficiency for your restaurant.',
    stats: [
      { number: '40%', label_ar: 'تخفيض وقت الانتظار', label_en: 'Wait Time Reduction' },
      { number: '+30%', label_ar: 'زيادة الطلبات في الساعة', label_en: 'More Orders per Hour' },
      { number: '99%', label_ar: 'دقة استيعاب الطلبات الصوتية', label_en: 'Voice Order Accuracy' },
      { number: '500+', label_ar: 'فرع مُجهَّز في المنطقة', label_en: 'Equipped Branches in the Region' },
    ],
    overviewImage: '/images/23.png',
    overview: {
      label_ar: 'نظرة عامة', label_en: 'OVERVIEW',
      title_ar: 'حلول متكاملة لخدمة السيارات', title_en: 'Integrated Drive-Thru Solutions',
      desc_ar: 'تجمع منظومة InfinityTech للـ Drive-Thru بين الذكاء الاصطناعي والتقنيات الصوتية والشاشات الرقمية في منصة واحدة متكاملة، تُرقّي تجربة العميل وتضاعف طاقة مطعمك الاستيعابية.',
      desc_en: 'InfinityTech\'s Drive-Thru system combines AI, voice technology, and digital displays into one integrated platform that elevates customer experience and multiplies your restaurant\'s throughput capacity.',
      features: [
        { ar: 'نظام صوتي يستقبل الطلبات', en: 'Voice system that receives orders' },
        { ar: 'شاشات عرض خارجية عالية الوضوح مقاومة للعوامل الجوية', en: 'Outdoor high-definition displays resistant to weather conditions' },
        { ar: 'تكامل مع أنظمة نقاط البيع الرئيسية في المنطقة', en: 'Integration with major POS systems in the region' },
        { ar: 'لوحة تحكم مركزية لمتابعة أداء جميع الفروع', en: 'Central dashboard for monitoring all branch performance' },
      ],
    },
    sections: [
      {
        type: 'cards', bg: 'dark',
        eyebrow_ar: 'مكونات المنظومة', eyebrow_en: 'SYSTEM COMPONENTS',
        title_ar: 'كل ما تحتاجه في Drive-Thru واحد', title_en: 'Everything You Need in One Drive-Thru',
        cards: [
          { icon: '🎙️', title_ar: 'النظام الصوتي', title_en: 'Voice Ordering System', desc_ar: 'استقبال الطلبات صوتياً بدقة تتجاوز 99% بدعم كامل للغة العربية والإنجليزية، مع اقتراحات upsell ذكية.', desc_en: 'Voice ordering with 99%+ accuracy supporting Arabic and English, with smart upsell suggestions.' },
          { icon: '📺', title_ar: 'شاشات العرض الخارجية', title_en: 'Outdoor Display Screens', desc_ar: 'شاشات 4K مقاومة للشمس والمطر والحرارة العالية، تعرض القائمة والعروض بشكل ديناميكي وجذاب.', desc_en: '4K screens resistant to sun, rain, and high temperatures, displaying menus and promotions dynamically.' },
          { icon: '⏱️', title_ar: 'نظام ZOOM Nitro للتوقيت', title_en: 'ZOOM Nitro Timer System', desc_ar: 'قياس ومراقبة أوقات الخدمة لحظياً في كل نقطة من مسار السيارة، مع تقارير أداء تفصيلية.', desc_en: 'Real-time service time monitoring at every point in the drive-thru lane, with detailed performance reports.' },
          { icon: '🏆', title_ar: 'لوحة المتصدرين', title_en: 'Leaderboard', desc_ar: 'تحفيز الفرق بعرض أدائهم بشكل تنافسي لحظي، مما يعزز الإنتاجية وسرعة الخدمة تلقائياً.', desc_en: 'Motivate teams by showing real-time competitive performance, automatically boosting productivity and service speed.' },
          { icon: '📡', title_ar: 'سماعات الـ Headset المتطورة', title_en: 'Advanced Headset System', desc_ar: 'سماعات لاسلكية عالية الجودة مع إلغاء الضوضاء، تضمن تواصلاً واضحاً بين الكاشير والمطبخ.', desc_en: 'High-quality wireless headsets with noise cancellation, ensuring clear communication between cashier and kitchen.' },
          { icon: '📊', title_ar: 'لوحة التحكم والتحليلات', title_en: 'Analytics Dashboard', desc_ar: 'تحليلات متقدمة لأوقات الذروة، الطلبات الأكثر شيوعاً، وكفاءة الفريق — من أي مكان وأي وقت.', desc_en: 'Advanced analytics for peak hours, most popular orders, and team efficiency — from anywhere, anytime.' },
        ],
      },
      {
        type: 'steps', bg: 'dark2',
        eyebrow_ar: 'كيف يعمل النظام', eyebrow_en: 'HOW IT WORKS',
        title_ar: 'رحلة الطلب في 4 خطوات', title_en: 'The Order Journey in 4 Steps',
        steps: [
          { num: 1, title_ar: 'وصول السيارة', title_en: 'Car Arrival', desc_ar: 'تكتشف الكاميرات وصول السيارة تلقائياً وتبدأ مؤقت الخدمة فوراً.', desc_en: 'Cameras detect the car automatically and immediately start the service timer.' },
          { num: 2, title_ar: 'استقبال الطلب', title_en: 'Order Taking', desc_ar: 'النظام الصوتي يستقبل الطلب ويعرضه على شاشة التأكيد مع اقتراحات ذكية.', desc_en: 'Voice system receives the order, displays it on the confirmation screen with smart suggestions.' },
          { num: 3, title_ar: 'تحضير الطلب', title_en: 'Order Preparation', desc_ar: 'يُرسَل الطلب تلقائياً للمطبخ مع تتبع دقيق للوقت في كل مرحلة.', desc_en: 'Order is automatically sent to the kitchen with precise time tracking at each stage.' },
          { num: 4, title_ar: 'الدفع والتسليم', title_en: 'Payment & Delivery', desc_ar: 'دفع سلس ومتكامل وتسليم سريع مع قياس الوقت الإجمالي وعرضه على لوحة المتصدرين.', desc_en: 'Seamless payment and fast delivery with total time recorded and shown on the leaderboard.' },
        ],
      },
    ],
    cta: {
      title_ar: 'جاهز لتسريع خدمتك؟', title_en: 'Ready to Speed Up Your Service?',
      desc_ar: 'تواصل مع فريق InfinityTech اليوم واحصل على تقييم مجاني لمنظومة Drive-Thru المثالية لمطعمك.',
      desc_en: 'Contact the InfinityTech team today and get a free assessment for the ideal Drive-Thru system for your restaurant.',
    },
  },

  {
    slug: 'digital-signage',
    accent: '#00c6ff',
    accentGrad: 'linear-gradient(90deg,#00c6ff,#0072ff)',
    badgeIcon: '📺', badge_ar: 'الشاشات الرقمية', badge_en: 'Digital Signage',
    gradFirst: true,
    titleGrad_ar: 'حوّل قائمتك', titleGrad_en: 'Transform Your Menu',
    titlePlain_ar: 'إلى تجربة تفاعلية ذكية', titlePlain_en: 'Into a Smart Interactive Experience',
    desc_ar: 'شاشات InfinityTech الرقمية تتجاوز مفهوم عرض القائمة التقليدي — إنها منصة تواصل ذكية تتفاعل مع عملائك، تعزز مبيعاتك، وترقّي هوية علامتك التجارية.',
    desc_en: 'InfinityTech digital screens go beyond traditional menu display — they are a smart communication platform that interacts with your customers, boosts your sales, and elevates your brand identity.',
    stats: [
      { number: '35%', label_ar: 'زيادة في مبيعات الـ Upsell', label_en: 'Upsell Revenue Increase' },
      { number: '3 ثوانٍ', label_ar: 'للتحديث الفوري من السحابة', label_en: 'For Instant Cloud Update' },
      { number: '4K', label_ar: 'دقة عالية مقاومة للشمس', label_en: 'High-Res Sun-Resistant Display' },
      { number: '1000+', label_ar: 'شاشة مُركَّبة في المنطقة', label_en: 'Screens Installed in the Region' },
    ],
    overviewImage: '/images/triple-menu-board.PNG',
    overview: {
      label_ar: 'نظرة عامة', label_en: 'OVERVIEW',
      title_ar: 'أكثر من مجرد شاشة', title_en: 'More Than Just a Screen',
      desc_ar: 'تجمع شاشاتنا الرقمية بين التصميم المقاوم للبيئات القاسية وإدارة المحتوى الذكي من السحابة، مما يمنحك تحكماً كاملاً في رسالتك التسويقية في أي وقت ومن أي مكان.',
      desc_en: 'Our digital screens combine weather-resistant design with smart cloud content management, giving you full control over your marketing message anytime, anywhere.',
      features: [
        { ar: 'شاشات 4K مقاومة للأشعة فوق البنفسجية والمطر والحرارة', en: '4K screens resistant to UV rays, rain, and heat' },
        { ar: 'تحديثات فورية للأسعار والمنتجات والعروض من السحابة', en: 'Instant updates for prices, products, and promotions from the cloud' },
        { ar: 'عرض محتوى مخصص بحسب الوقت والطقس وأيام الأسبوع', en: 'Personalized content by time, weather, and day of the week' },
        { ar: 'دعم كامل للمحتوى العربي والإنجليزي وأي لغة أخرى', en: 'Full support for Arabic, English, and any other language content' },
        { ar: 'تشغيل صوتي ومرئي ومتحرك لزيادة تفاعل العملاء', en: 'Audio, visual, and animated playback to increase customer engagement' },
      ],
    },
    sections: [
      {
        type: 'cards', bg: 'dark',
        eyebrow_ar: 'حالات الاستخدام', eyebrow_en: 'USE CASES',
        title_ar: 'تناسب كل نوع من المطاعم', title_en: 'Fits Every Restaurant Type',
        cards: [
          { icon: '🍔', title_ar: 'المطاعم السريعة', title_en: 'Fast Food Restaurants', desc_ar: 'عرض القائمة الرقمي مع تسليط الضوء على العروض والوجبات المميزة تلقائياً بحسب وقت اليوم.', desc_en: 'Digital menu display with automatic spotlight on offers and featured meals based on time of day.' },
          { icon: '☕', title_ar: 'المقاهي', title_en: 'Cafes', desc_ar: 'عرض الأصناف الجديدة والموسمية بأسلوب بصري جذاب يعكس هوية المقهى وجو الترحيب.', desc_en: 'Showcasing new and seasonal items in a visually appealing style that reflects the café\'s identity.' },
          { icon: '🛒', title_ar: 'مراكز التسوق', title_en: 'Shopping Malls', desc_ar: 'لافتات ترويجية ديناميكية تعرض العروض والأحداث وتوجّه العملاء داخل المركز التجاري.', desc_en: 'Dynamic promotional signage displaying offers, events, and guiding customers inside the mall.' },
          { icon: '🚗', title_ar: 'نقاط خدمة السيارات', title_en: 'Drive-Thru Points', desc_ar: 'شاشات خارجية للـ Drive-Thru تعرض القائمة والعروض اللحظية مع تحديث فوري من لوحة التحكم.', desc_en: 'Outdoor Drive-Thru screens showing the menu and real-time offers with instant dashboard updates.' },
          { icon: '🏥', title_ar: 'المستشفيات والمرافق الحكومية', title_en: 'Hospitals & Government Facilities', desc_ar: 'شاشات إعلامية وتوجيهية تساعد الزوار على التنقل والحصول على المعلومات بسهولة.', desc_en: 'Informational and directional screens helping visitors navigate and access information easily.' },
          { icon: '🏪', title_ar: 'نقاط البيع بالتجزئة', title_en: 'Retail Outlets', desc_ar: 'عروض المنتجات التفاعلية وتسليط الضوء على التخفيضات وبناء تجربة تسوق استثنائية.', desc_en: 'Interactive product showcases, highlighting discounts and creating an exceptional shopping experience.' },
        ],
      },
      {
        type: 'typecards', bg: 'dark2',
        eyebrow_ar: 'أنواع الشاشات', eyebrow_en: 'SCREEN TYPES',
        title_ar: 'حل لكل بيئة وموقع', title_en: 'A Solution for Every Environment',
        cards: [
          { num: '01', title_ar: 'شاشات القائمة الداخلية (Indoor Menu Board)', title_en: 'Indoor Menu Board', desc_ar: 'شاشات عالية الدقة مثالية لداخل المطاعم، تعرض القائمة الكاملة مع الأسعار والصور والعروض الترويجية.', desc_en: 'High-resolution screens ideal for restaurant interiors, displaying the full menu with prices, images, and promotional offers.' },
          { num: '02', title_ar: 'شاشات الـ Drive-Thru الخارجية', title_en: 'Outdoor Drive-Thru Screens', desc_ar: 'شاشات مضادة للعوامل الجوية بإضاءة عالية السطوع تعمل في الشمس المباشرة بكفاءة عالية.', desc_en: 'Weather-resistant screens with high-brightness displays that operate efficiently in direct sunlight.' },
          { num: '03', title_ar: 'شاشات نقطة الانتظار (Queue Display)', title_en: 'Queue Display Screens', desc_ar: 'شاشات تُقصّر وقت الانتظار المُتصوَّر من خلال عرض محتوى ترفيهي وترويجي جذاب.', desc_en: 'Screens that reduce perceived wait time by displaying engaging entertainment and promotional content.' },
          { num: '04', title_ar: 'جدران الفيديو (Video Wall)', title_en: 'Video Wall', desc_ar: 'تركيبات متعددة الشاشات توفر تجربة بصرية استثنائية للمطاعم الكبرى ومراكز التسوق.', desc_en: 'Multi-screen installations providing exceptional visual experiences for large restaurants and shopping centers.' },
        ],
      },
    ],
    cta: {
      title_ar: 'جاهز لتحديث قائمتك؟', title_en: 'Ready to Upgrade Your Menu?',
      desc_ar: 'تواصل مع فريق InfinityTech واحصل على استشارة مجانية لاختيار الحل المثالي لمطعمك.',
      desc_en: 'Contact the InfinityTech team and get a free consultation to choose the ideal solution for your restaurant.',
    },
  },

  {
    slug: 'kiosk',
    accent: '#7b2ff7',
    accentGrad: 'linear-gradient(90deg,#7b2ff7,#ff4da6)',
    badgeIcon: '🖥️', badge_ar: 'كشكات الطلب الذاتي', badge_en: 'Self-Order Kiosks',
    gradFirst: false,
    titleGrad_ar: 'حرية الاختيار والسرعة', titleGrad_en: 'Freedom & Speed',
    titlePlain_ar: 'امنح عملاءك', titlePlain_en: 'Give Your Customers',
    desc_ar: 'كشكات InfinityTech تحوّل طريقة استقبال الطلبات — تجربة أسرع وأسهل للعميل، أقل ضغطاً على موظفيك، وإيرادات أعلى لمطعمك.',
    desc_en: 'InfinityTech kiosks transform order taking — a faster, easier experience for customers, less pressure on your staff, and higher revenue for your restaurant.',
    stats: [
      { number: '30%', label_ar: 'زيادة متوسط قيمة الطلب', label_en: 'Average Order Value Increase' },
      { number: '95%', label_ar: 'تقليل أخطاء الطلبات', label_en: 'Order Error Reduction' },
      { number: '2x', label_ar: 'سرعة الطلب مقارنة بالكاشير التقليدي', label_en: 'Faster vs Traditional Cashier' },
      { number: '300+', label_ar: 'كشك مُركَّب في المنطقة', label_en: 'Kiosks Installed in the Region' },
    ],
    overviewImage: '/images/77208d1db0f28ae077104502fc58163f.jpg',
    overview: {
      label_ar: 'نظرة عامة', label_en: 'OVERVIEW',
      title_ar: 'الطلب الذاتي: مستقبل المطاعم', title_en: 'Self-Ordering: The Future of Restaurants',
      desc_ar: 'تقدم InfinityTech كشكات طلب ذاتي بتصميم أنيق ومتانة عالية، مزوّدة بتقنيات الذكاء الاصطناعي لتحسين تجربة العميل وزيادة الإيرادات تلقائياً من خلال اقتراحات الوجبات الذكية.',
      desc_en: 'InfinityTech offers elegantly designed, highly durable self-order kiosks equipped with AI technology to enhance the customer experience and automatically increase revenue through smart meal suggestions.',
      features: [
        { ar: 'تكامل مع الدفع الإلكتروني ومحافظ الجوال (مدى، Apple Pay، STC Pay)', en: 'Integration with digital payment and mobile wallets (Mada, Apple Pay, STC Pay)' },
        { ar: 'ذكاء اصطناعي لاقتراح الوجبات المكملة (Upsell & Cross-sell)', en: 'AI for complementary meal suggestions (Upsell & Cross-sell)' },
        { ar: 'واجهة متعددة اللغات: العربية والإنجليزية وغيرهما', en: 'Multi-language interface: Arabic, English, and more' },
        { ar: 'تكامل مباشر مع أنظمة الكاشير ونظام المطبخ KDS', en: 'Direct integration with POS systems and Kitchen Display System (KDS)' },
        { ar: 'شاشة لمس عالية الاستجابة بمقاسات متعددة (21 – 32 بوصة)', en: 'High-response touch screen in multiple sizes (21–32 inch)' },
      ],
    },
    sections: [
      {
        type: 'cards', bg: 'dark',
        eyebrow_ar: 'الفوائد والمزايا', eyebrow_en: 'BENEFITS & ADVANTAGES',
        title_ar: 'لماذا الكشك الذاتي؟', title_en: 'Why Self-Order Kiosks?',
        cards: [
          { icon: '⚡', title_ar: 'سرعة الخدمة', title_en: 'Service Speed', desc_ar: 'تقليص وقت استقبال الطلب بنسبة تصل إلى 50% مقارنة بالكاشير التقليدي، مما يزيد طاقة الاستيعاب.', desc_en: 'Reduce order taking time by up to 50% compared to traditional cashiers, increasing throughput capacity.' },
          { icon: '💰', title_ar: 'زيادة الإيرادات', title_en: 'Revenue Increase', desc_ar: 'اقتراحات الـ Upsell الذكية ترفع متوسط قيمة الطلب بنسبة تصل إلى 30% بشكل تلقائي.', desc_en: 'Smart Upsell suggestions automatically increase average order value by up to 30%.' },
          { icon: '✅', title_ar: 'دقة الطلبات', title_en: 'Order Accuracy', desc_ar: 'القضاء شبه التام على أخطاء الطلبات الناتجة عن سوء التواصل، مما يوفر التكاليف ويرفع رضا العملاء.', desc_en: 'Near-total elimination of order errors from miscommunication, saving costs and raising customer satisfaction.' },
          { icon: '👥', title_ar: 'كفاءة الفريق', title_en: 'Team Efficiency', desc_ar: 'تحرير الموظفين من استقبال الطلبات ليتفرغوا لجودة الخدمة والتحضير، مما يرفع الإنتاجية الكلية.', desc_en: 'Free staff from order taking to focus on service quality and preparation, increasing overall productivity.' },
          { icon: '📊', title_ar: 'بيانات وتحليلات', title_en: 'Data & Analytics', desc_ar: 'رؤى تفصيلية عن سلوك العملاء والأصناف الأكثر طلباً لدعم قرارات الأعمال الاستراتيجية.', desc_en: 'Detailed insights into customer behavior and most ordered items to support strategic business decisions.' },
          { icon: '♿', title_ar: 'إمكانية الوصول', title_en: 'Accessibility', desc_ar: 'تصميم يراعي ذوي الاحتياجات الخاصة مع واجهة سهلة الاستخدام لجميع الفئات العمرية.', desc_en: 'Design considerate of people with special needs with an easy-to-use interface for all age groups.' },
        ],
      },
      {
        type: 'specs', bg: 'dark2',
        eyebrow_ar: 'المواصفات التقنية', eyebrow_en: 'TECHNICAL SPECIFICATIONS',
        title_ar: 'جاهز لبيئة المطعم الحقيقية', title_en: 'Built for Real Restaurant Environments',
        groups: [
          {
            title_ar: 'الشاشة والتصميم', title_en: 'Screen & Design',
            items: [
              { ar: 'شاشة لمس 21 أو 27 أو 32 بوصة', en: 'Touch screen 21, 27, or 32 inch' },
              { ar: 'دقة 4K أو Full HD', en: '4K or Full HD resolution' },
              { ar: 'هيكل معدني مقاوم للبقع والتلف', en: 'Metal chassis resistant to stains and damage' },
              { ar: 'تصميم أرضي أو للحائط أو لسطح الكاونتر', en: 'Floor, wall-mount, or counter-top design' },
            ],
          },
          {
            title_ar: 'الدفع والتكامل', title_en: 'Payment & Integration',
            items: [
              { ar: 'مدى، فيزا، ماستر كارد', en: 'Mada, Visa, Mastercard' },
              { ar: 'Apple Pay وSTC Pay', en: 'Apple Pay and STC Pay' },
              { ar: 'طباعة الإيصال أو إرساله عبر SMS', en: 'Receipt printing or SMS delivery' },
              { ar: 'تكامل مع POS وKDS وCMS', en: 'Integration with POS, KDS, and CMS' },
            ],
          },
          {
            title_ar: 'البرمجيات والذكاء', title_en: 'Software & Intelligence',
            items: [
              { ar: 'دعم كامل للعربية والإنجليزية', en: 'Full Arabic and English support' },
              { ar: 'محرك Upsell بالذكاء الاصطناعي', en: 'AI-powered Upsell engine' },
              { ar: 'إدارة القائمة من السحابة فورياً', en: 'Instant cloud-based menu management' },
              { ar: 'تقارير وتحليلات لحظية', en: 'Real-time reports and analytics' },
            ],
          },
          {
            title_ar: 'الموثوقية والدعم', title_en: 'Reliability & Support',
            items: [
              { ar: 'وضع عمل بدون إنترنت (Offline Mode)', en: 'Offline Mode support' },
              { ar: 'ضمان لمدة سنتين + دعم 24/7', en: '2-year warranty + 24/7 support' },
              { ar: 'تحديثات برمجية عن بُعد تلقائياً', en: 'Automatic remote software updates' },
              { ar: 'تركيب وتدريب احترافي من فريق InfinityTech', en: 'Professional installation and training by InfinityTech team' },
            ],
          },
        ],
      },
    ],
    cta: {
      title_ar: 'جاهز لتحويل تجربة عملائك؟', title_en: 'Ready to Transform Your Customer Experience?',
      desc_ar: 'تواصل مع فريق InfinityTech واحصل على استشارة مجانية واختر الكشك المناسب لمطعمك.',
      desc_en: 'Contact the InfinityTech team and get a free consultation to choose the right kiosk for your restaurant.',
    },
  },

  {
    slug: 'ai-camera',
    accent: '#00c6ff',
    accentGrad: 'linear-gradient(90deg,#00c6ff,#0072ff)',
    badgeIcon: '🎥', badge_ar: 'كاميرات الذكاء الاصطناعي', badge_en: 'AI Camera System',
    gradFirst: true,
    titleGrad_ar: 'حوّل كاميرات المراقبة', titleGrad_en: 'Transform Your Cameras',
    titlePlain_ar: 'إلى نظام ذكي لتحليل مطعمك', titlePlain_en: 'Into a Smart Restaurant Intelligence System',
    desc_ar: 'كاميرات InfinityTech المدعومة بالذكاء الاصطناعي تمنحك رؤية فورية شاملة لكل ما يحدث في مطعمك — من حركة العملاء إلى أداء الفريق وجودة الخدمة.',
    desc_en: 'InfinityTech AI-powered cameras give you real-time comprehensive visibility of everything happening in your restaurant — from customer flow to team performance and service quality.',
    stats: [
      { number: '25%', label_ar: 'تقليل الهدر في الطعام', label_en: 'Food Waste Reduction' },
      { number: '60%', label_ar: 'تخفيض أوقات الانتظار في الطوابير', label_en: 'Queue Wait Time Reduction' },
      { number: 'لحظي', label_ar: 'تنبيهات فورية عند أي مشكلة', label_en: 'Instant Alerts for Issues' },
      { number: '24/7', label_ar: 'مراقبة مستمرة لا تتوقف', label_en: 'Non-Stop Monitoring' },
    ],
    overviewImage: '/images/restaurant-computer-vision-1060x598.jpg',
    overview: {
      label_ar: 'نظرة عامة', label_en: 'OVERVIEW',
      title_ar: 'الرؤية الذكية لمطعمك', title_en: 'Smart Vision for Your Restaurant',
      desc_ar: 'يحوّل نظام InfinityTech بالذكاء الاصطناعي كاميرات المراقبة الاعتيادية إلى نظام تحليلي متقدم، يرصد كل تفاصيل العمليات ويحوّلها إلى رؤى عملية تساعدك في اتخاذ قرارات أسرع وأدق.',
      desc_en: 'InfinityTech\'s AI system transforms ordinary surveillance cameras into an advanced analytics system, monitoring every operational detail and converting it into actionable insights for faster, more accurate decision-making.',
      features: [
        { ar: 'تحليل حركة العملاء وإشغال الطاولات لحظياً', en: 'Real-time customer flow and table occupancy analytics' },
        { ar: 'إدارة الطوابير وتقليل أوقات الانتظار المُدرَكة', en: 'Queue management and reducing perceived waiting times' },
        { ar: 'مراقبة سلامة الموظفين والالتزام بمعايير الصحة', en: 'Monitoring staff safety and health standard compliance' },
        { ar: 'رصد جودة الخدمة وتقليل هدر الطعام', en: 'Monitoring service quality and reducing food waste' },
        { ar: 'تنبيهات فورية للإدارة عند اكتشاف أي خلل', en: 'Instant alerts to management when any issue is detected' },
      ],
    },
    sections: [
      {
        type: 'cards', bg: 'dark',
        eyebrow_ar: 'القدرات التحليلية', eyebrow_en: 'ANALYTICS CAPABILITIES',
        title_ar: 'ماذا يرى النظام؟', title_en: 'What Does the System See?',
        cards: [
          { icon: '👥', title_ar: 'حركة العملاء', title_en: 'Customer Flow', desc_ar: 'رسم خرائط حركة العملاء داخل المطعم، تحديد المناطق الأكثر ازدحاماً، وتحليل أنماط السلوك الشرائي.', desc_en: 'Mapping customer movement inside the restaurant, identifying busiest zones, and analyzing purchasing behavior patterns.' },
          { icon: '🪑', title_ar: 'إشغال الطاولات', title_en: 'Table Occupancy', desc_ar: 'مراقبة الطاولات المشغولة والفارغة لحظياً، توجيه العملاء، وتحسين كفاءة الخدمة في أوقات الذروة.', desc_en: 'Real-time monitoring of occupied and empty tables, guiding customers, and improving service efficiency during peak hours.' },
          { icon: '🚶', title_ar: 'إدارة الطوابير', title_en: 'Queue Management', desc_ar: 'رصد طول الطابير ووقت الانتظار تلقائياً مع تنبيهات فورية لاتخاذ إجراءات سريعة لتحسين التدفق.', desc_en: 'Automatically monitoring queue length and wait times with instant alerts to take quick action and improve flow.' },
          { icon: '👨‍🍳', title_ar: 'أداء الموظفين', title_en: 'Staff Performance', desc_ar: 'متابعة الالتزام بالإجراءات، معدل إنجاز المهام، والتعرف على أفضل الممارسات لنقلها للفريق كله.', desc_en: 'Tracking procedure compliance, task completion rates, and identifying best practices to share across the team.' },
          { icon: '🛡️', title_ar: 'الأمن والسلامة', title_en: 'Security & Safety', desc_ar: 'كشف مخالفات السلامة الغذائية، الإجراءات الصحية غير الملتزمة بها، وأي تصرفات غير معتادة فورياً.', desc_en: 'Detecting food safety violations, non-compliant hygiene procedures, and any unusual behaviors instantly.' },
          { icon: '📈', title_ar: 'تحليل ساعات الذروة', title_en: 'Peak Hour Analytics', desc_ar: 'فهم أنماط حركة العملاء في مختلف الأيام والساعات لتحسين جداول العمل وتوزيع الموارد البشرية.', desc_en: 'Understanding customer traffic patterns across different days and hours to optimize work schedules and resource allocation.' },
        ],
      },
      {
        type: 'dashboard', bg: 'dark2',
        eyebrow_ar: 'لوحة التحكم الذكية', eyebrow_en: 'SMART DASHBOARD',
        title_ar: 'كل شيء في مكان واحد', title_en: 'Everything in One Place',
        desc_ar: 'لوحة تحكم شاملة تجمع تقارير جميع الكاميرات والفروع في منصة واحدة سهلة الاستخدام، يمكن الوصول إليها من أي جهاز.',
        desc_en: 'A comprehensive dashboard that aggregates reports from all cameras and branches in one easy-to-use platform, accessible from any device.',
        features: [
          { icon: '📊', title_ar: 'تقارير لحظية', title_en: 'Real-Time Reports', desc_ar: 'متابعة الأرقام والمؤشرات الحية من أي مكان على جهازك المحمول أو الحاسوب.', desc_en: 'Monitor live figures and indicators from anywhere on your mobile or computer.' },
          { icon: '🔔', title_ar: 'تنبيهات فورية', title_en: 'Instant Alerts', desc_ar: 'إشعارات على الجوال عند اكتشاف أي خلل في الخدمة أو مشكلة سلامة أو ازدحام استثنائي.', desc_en: 'Mobile notifications when any service issue, safety problem, or unusual congestion is detected.' },
          { icon: '🏢', title_ar: 'إدارة متعددة الفروع', title_en: 'Multi-Branch Management', desc_ar: 'مقارنة أداء الفروع ومتابعة جميع المواقع من شاشة واحدة مركزية.', desc_en: 'Compare branch performance and monitor all locations from one central screen.' },
        ],
      },
    ],
    cta: {
      title_ar: 'جاهز لرؤية مطعمك بعيون الذكاء الاصطناعي؟', title_en: 'Ready to See Your Restaurant Through AI Eyes?',
      desc_ar: 'تواصل مع فريق InfinityTech واحصل على تجربة مجانية لنظام الكاميرات الذكية في مطعمك.',
      desc_en: 'Contact InfinityTech and get a free trial of the smart camera system at your restaurant.',
    },
  },

  {
    slug: 'customer-feedback',
    accent: '#ff4da6',
    accentGrad: 'linear-gradient(90deg,#7b2ff7,#ff4da6)',
    badgeIcon: '⭐', badge_ar: 'نظام تقييم العملاء', badge_en: 'Customer Feedback System',
    gradFirst: false,
    titleGrad_ar: 'واتخذ قرارات أفضل', titleGrad_en: 'Make Better Decisions',
    titlePlain_ar: 'استمع إلى عملائك', titlePlain_en: 'Listen to Your Customers',
    desc_ar: 'يجمع نظام InfinityTech آراء العملاء من جميع نقاط التواصل في منصة مركزية واحدة، مع تحليلات فورية تساعدك على تحسين جودة الخدمة وزيادة رضا العملاء.',
    desc_en: 'InfinityTech\'s Customer Feedback System collects customer opinions from all touchpoints into one centralized platform with real-time analytics to improve service quality and customer satisfaction.',
    stats: [
      { number: '+45%', label_ar: 'زيادة معدل الاستجابة', label_en: 'Response Rate Increase' },
      { number: 'فوري', label_ar: 'تنبيه عند تقييم سلبي', label_en: 'Alert on Negative Feedback' },
      { number: '4 قنوات', label_ar: 'لجمع آراء العملاء', label_en: 'Channels for Feedback Collection' },
      { number: '+20%', label_ar: 'ارتفاع في رضا العملاء', label_en: 'Increase in Customer Satisfaction' },
    ],
    overviewImage: '/images/customer-feedback-banner.webp',
    overview: {
      label_ar: 'نظرة عامة', label_en: 'OVERVIEW',
      title_ar: 'صوت عميلك في كل قرار', title_en: 'Your Customer\'s Voice in Every Decision',
      desc_ar: 'نظام InfinityTech لتقييم العملاء يجمع الآراء من أجهزة التقييم، رمز QR، الموقع الإلكتروني، والتطبيقات في منصة واحدة، مع تحليلات لحظية تساعدك على فهم عملائك بعمق.',
      desc_en: 'InfinityTech\'s Customer Feedback System collects opinions from feedback terminals, QR codes, websites, and apps into one platform, with real-time analytics that help you deeply understand your customers.',
      features: [
        { ar: 'قياس مؤشرات NPS وCSAT وCES في الوقت الفعلي', en: 'Real-time NPS, CSAT, and CES tracking' },
        { ar: 'تنبيهات فورية عند التقييمات السلبية لمعالجة المشكلة بسرعة', en: 'Instant alerts for negative feedback to enable rapid response' },
        { ar: 'لوحة تحكم ذكية وتقارير تفصيلية لتحسين تجربة العملاء', en: 'Smart dashboards and detailed reports to enhance customer experience' },
        { ar: 'دعم كامل للعربية والإنجليزية في جميع قنوات الجمع', en: 'Full Arabic and English support across all collection channels' },
      ],
    },
    sections: [
      {
        type: 'metrics', bg: 'dark',
        eyebrow_ar: 'المؤشرات الذكية', eyebrow_en: 'SMART METRICS',
        title_ar: 'نقيس ما يهمك بالفعل', title_en: 'We Measure What Truly Matters',
        metrics: [
          { letter: 'NPS', title_ar: 'صافي نقاط الترويج', title_en: 'Net Promoter Score', desc_ar: 'يقيس احتمالية أن يوصي عملاؤك بمطعمك للآخرين، وهو مؤشر رئيسي لولاء العملاء على المدى الطويل.', desc_en: 'Measures the likelihood your customers will recommend your restaurant to others — a key indicator of long-term loyalty.' },
          { letter: 'CSAT', title_ar: 'مؤشر رضا العملاء', title_en: 'Customer Satisfaction Score', desc_ar: 'يقيس مدى رضا العميل عن تجربته الفورية بعد الزيارة أو الطلب، ويساعدك على رصد المشاكل بسرعة.', desc_en: 'Measures customer satisfaction with their immediate experience after a visit or order, helping you spot issues quickly.' },
          { letter: 'CES', title_ar: 'مؤشر سهولة الجهد', title_en: 'Customer Effort Score', desc_ar: 'يقيس مدى سهولة حصول العميل على ما يحتاجه، من الطلب حتى الاستلام، بأقل جهد ممكن.', desc_en: 'Measures how easy it was for the customer to get what they needed, from ordering to delivery, with minimal effort.' },
        ],
      },
      {
        type: 'channels', bg: 'dark2',
        eyebrow_ar: 'قنوات الجمع', eyebrow_en: 'COLLECTION CHANNELS',
        title_ar: 'اسمع عملاءك من كل نقطة تواصل', title_en: 'Hear Your Customers from Every Touchpoint',
        channels: [
          { icon: '📟', title_ar: 'أجهزة التقييم', title_en: 'Feedback Terminals', desc_ar: 'أجهزة لمسية في موقع الخدمة لتقييم فوري وسريع.', desc_en: 'Touch devices at the point of service for instant, quick feedback.' },
          { icon: '📱', title_ar: 'رمز QR', title_en: 'QR Code', desc_ar: 'مسح سريع من الجوال للوصول لاستبيان مخصص بعد الزيارة.', desc_en: 'Quick mobile scan to access a customized survey after the visit.' },
          { icon: '🌐', title_ar: 'الموقع الإلكتروني', title_en: 'Website', desc_ar: 'نموذج تقييم مدمج في موقعك يجمع آراء الزوار أونلاين.', desc_en: 'An embedded feedback form on your website collecting online visitor opinions.' },
          { icon: '📲', title_ar: 'التطبيقات', title_en: 'Mobile Apps', desc_ar: 'تكامل مع تطبيق مطعمك لجمع التقييمات بعد كل طلب مباشرة.', desc_en: 'Integration with your restaurant app to collect ratings right after each order.' },
        ],
      },
    ],
    cta: {
      title_ar: 'جاهز لسماع صوت عملائك بوضوح؟', title_en: 'Ready to Hear Your Customers Loud and Clear?',
      desc_ar: 'تواصل مع فريق InfinityTech واحصل على استشارة مجانية لاختيار نظام التقييم المثالي لمطعمك.',
      desc_en: 'Contact the InfinityTech team and get a free consultation to choose the ideal feedback system for your restaurant.',
    },
  },

  {
    slug: 'zoom-nitro',
    accent: '#00b4b4',
    accentGrad: 'linear-gradient(90deg,#00b4b4,#00c6ff)',
    badgeIcon: '⏱️', badge_ar: 'مراقبة الأداء', badge_en: 'Performance Monitoring',
    gradFirst: true,
    titleGrad_ar: 'نظام زووم نيترو', titleGrad_en: 'ZOOM Nitro System',
    titlePlain_ar: 'لقياس ومتابعة أوقات الخدمة', titlePlain_en: 'For Service Time Tracking',
    desc_ar: 'نظام ذكي لقياس ومراقبة أوقات الخدمة في مسار السيارات بشكل لحظي، يساعدك على تحديد نقاط التأخير، متابعة أداء الفرق، وتحسين سرعة تنفيذ الطلبات.',
    desc_en: 'An intelligent real-time system that monitors service times in the drive-thru lane, helping you identify bottlenecks, track team performance, and improve order fulfillment speed.',
    stats: [
      { number: 'لحظي', label_ar: 'قياس دقيق في كل نقطة', label_en: 'Precise Measurement at Every Point' },
      { number: '35%', label_ar: 'تحسن في سرعة تنفيذ الطلبات', label_en: 'Improvement in Order Fulfillment Speed' },
      { number: '5+', label_ar: 'نقاط قياس على مسار الخدمة', label_en: 'Measurement Checkpoints on the Lane' },
      { number: '100%', label_ar: 'شفافية في تقييم أداء الفرق', label_en: 'Transparency in Team Performance' },
    ],
    overview: {
      label_ar: 'نظرة عامة', label_en: 'OVERVIEW',
      title_ar: 'كل ثانية تُحسب', title_en: 'Every Second Counts',
      desc_ar: 'نظام ZOOM Nitro يتتبع رحلة السيارة من لحظة الوصول حتى الاستلام، ويقيس الوقت في كل نقطة على المسار، مما يمنحك رؤية واضحة لمكان حدوث التأخير ولماذا.',
      desc_en: 'The ZOOM Nitro system tracks the car\'s journey from arrival to delivery, measuring time at every checkpoint along the lane, giving you clear visibility into where and why delays happen.',
      features: [
        { ar: 'قياس وقت كل مرحلة من الطلب حتى التسليم', en: 'Measuring time at every stage from order to delivery' },
        { ar: 'تحديد نقاط التأخير بدقة لاتخاذ إجراءات تصحيحية', en: 'Precisely identifying bottlenecks to take corrective action' },
        { ar: 'متابعة أداء الفرق التشغيلية ومقارنتها بالمعايير', en: 'Tracking team performance and comparing it to benchmarks' },
        { ar: 'تقارير تفصيلية يومية وأسبوعية وشهرية', en: 'Detailed daily, weekly, and monthly reports' },
      ],
    },
    sections: [
      {
        type: 'checkpoints', bg: 'dark',
        eyebrow_ar: 'نقاط القياس', eyebrow_en: 'MEASUREMENT CHECKPOINTS',
        title_ar: 'رحلة السيارة محسوبة بالثانية', title_en: 'The Car\'s Journey Timed by the Second',
        checkpoints: [
          { num: 1, title_ar: 'نقطة الوصول', title_en: 'Arrival Point', desc_ar: 'بدء المؤقت عند دخول السيارة المسار', desc_en: 'Timer starts when the car enters the lane' },
          { num: 2, title_ar: 'نقطة الطلب', title_en: 'Order Point', desc_ar: 'قياس وقت استقبال الطلب صوتياً', desc_en: 'Measuring voice order taking time' },
          { num: 3, title_ar: 'نقطة التحضير', title_en: 'Preparation Point', desc_ar: 'تتبع وقت تحضير الطلب في المطبخ', desc_en: 'Tracking order preparation time in the kitchen' },
          { num: 4, title_ar: 'نقطة الدفع', title_en: 'Payment Point', desc_ar: 'قياس وقت إتمام عملية الدفع', desc_en: 'Measuring payment completion time' },
          { num: 5, title_ar: 'نقطة التسليم', title_en: 'Delivery Point', desc_ar: 'إيقاف المؤقت عند تسليم الطلب للعميل', desc_en: 'Timer stops upon delivery to the customer' },
        ],
      },
      {
        type: 'cards', bg: 'dark2',
        eyebrow_ar: 'الفوائد', eyebrow_en: 'BENEFITS',
        title_ar: 'لماذا تحتاج لقياس الأداء؟', title_en: 'Why You Need Performance Tracking',
        cards: [
          { icon: '🎯', title_ar: 'تحديد التأخير بدقة', title_en: 'Pinpointing Delays', desc_ar: 'معرفة بالضبط أين تحدث الاختناقات في عملية الخدمة، بدلاً من التخمين.', desc_en: 'Know exactly where bottlenecks occur in the service process, instead of guessing.' },
          { icon: '📈', title_ar: 'رفع الإنتاجية', title_en: 'Boosting Productivity', desc_ar: 'استخدام البيانات لتحسين العمليات وتدريب الفريق على نقاط الضعف المحددة.', desc_en: 'Using data to improve operations and train the team on specific weak points.' },
          { icon: '🏆', title_ar: 'معايير قابلة للقياس', title_en: 'Measurable Benchmarks', desc_ar: 'وضع أهداف زمنية واضحة لكل فرع ومقارنة الأداء بينها بشكل عادل.', desc_en: 'Setting clear time targets for each branch and fairly comparing performance between them.' },
          { icon: '⚡', title_ar: 'استجابة سريعة', title_en: 'Rapid Response', desc_ar: 'تنبيهات فورية عند تجاوز الوقت المستهدف لاتخاذ إجراء تصحيحي فوري.', desc_en: 'Instant alerts when target time is exceeded, enabling immediate corrective action.' },
          { icon: '📊', title_ar: 'تقارير شاملة', title_en: 'Comprehensive Reports', desc_ar: 'تحليل اتجاهات الأداء عبر الزمن لاتخاذ قرارات استراتيجية مدروسة.', desc_en: 'Analyzing performance trends over time to make informed strategic decisions.' },
          { icon: '🔗', title_ar: 'تكامل سلس', title_en: 'Seamless Integration', desc_ar: 'يعمل مع نظام Drive-Thru ولوحة المتصدرين كمنظومة واحدة متكاملة.', desc_en: 'Works with the Drive-Thru system and Leaderboard as one integrated ecosystem.' },
        ],
      },
    ],
    cta: {
      title_ar: 'جاهز لقياس أداء خدمتك بدقة؟', title_en: 'Ready to Precisely Measure Your Service Performance?',
      desc_ar: 'تواصل مع فريق InfinityTech واحصل على تجربة مجانية لنظام ZOOM Nitro في مطعمك.',
      desc_en: 'Contact InfinityTech and get a free trial of the ZOOM Nitro system at your restaurant.',
    },
  },

  {
    slug: 'leaderboard',
    accent: '#ffa000',
    accentGrad: 'linear-gradient(90deg,#ffa000,#ff7a00)',
    badgeIcon: '🏆', badge_ar: 'تحفيز الأداء', badge_en: 'Performance Motivation',
    gradFirst: false,
    titleGrad_ar: 'إلى أداء استثنائي', titleGrad_en: 'Into Exceptional Performance',
    titlePlain_ar: 'حوّل المنافسة', titlePlain_en: 'Turn Competition',
    desc_ar: 'لوحة المتصدرين من InfinityTech تعرض أداء الموظفين والفرق بشكل لحظي، مما يعزز روح المنافسة الإيجابية ويرفع مستويات الإنتاجية وسرعة الخدمة.',
    desc_en: 'InfinityTech\'s Leaderboard displays employee and team performance in real time, encouraging healthy competition and boosting productivity and service speed.',
    stats: [
      { number: '+22%', label_ar: 'زيادة في إنتاجية الفريق', label_en: 'Increase in Team Productivity' },
      { number: 'لحظي', label_ar: 'تحديث الترتيب أوتوماتيكياً', label_en: 'Automatic Live Ranking' },
      { number: '+18%', label_ar: 'تحسن في سرعة الخدمة', label_en: 'Improvement in Service Speed' },
      { number: '100%', label_ar: 'شفافية لجميع الموظفين', label_en: 'Transparency for All Employees' },
    ],
    overviewContentFirst: true,
    overview: {
      label_ar: 'نظرة عامة', label_en: 'OVERVIEW',
      title_ar: 'المنافسة الإيجابية تصنع الفرق', title_en: 'Positive Competition Makes the Difference',
      desc_ar: 'تستخدم لوحة المتصدرين من InfinityTech عناصر الألعاب (Gamification) لتحويل بيانات الأداء التشغيلي إلى تحدٍّ مشوّق بين الموظفين والفروع، مما يرفع الحماس ويحفّز التميز.',
      desc_en: 'InfinityTech\'s Leaderboard uses gamification to turn operational performance data into an exciting challenge among employees and branches, boosting enthusiasm and motivating excellence.',
      features: [
        { ar: 'عرض ترتيب الموظفين والفرق لحظياً على الشاشات', en: 'Real-time display of employee and team rankings on screens' },
        { ar: 'ربط مباشر مع نظام ZOOM Nitro لقياس أوقات الخدمة', en: 'Direct integration with the ZOOM Nitro timing system' },
        { ar: 'تتبع الإنجازات والنتائج في الوقت الفعلي', en: 'Tracking achievements and results in real time' },
        { ar: 'مقارنة الأداء بين الفروع المختلفة بشكل عادل وشفاف', en: 'Fair and transparent performance comparison between different branches' },
      ],
      specialRight: 'leaderboard-demo',
    },
    sections: [
      {
        type: 'cards', bg: 'dark',
        eyebrow_ar: 'الفوائد', eyebrow_en: 'BENEFITS',
        title_ar: 'لماذا تحفز فريقك هكذا؟', title_en: 'Why Motivate Your Team This Way?',
        cards: [
          { icon: '🔥', title_ar: 'روح المنافسة', title_en: 'Competitive Spirit', desc_ar: 'تحويل العمل اليومي إلى تحدٍّ ممتع يحفز الموظفين على تحسين أدائهم باستمرار.', desc_en: 'Turning daily work into a fun challenge that motivates employees to continuously improve.' },
          { icon: '🏅', title_ar: 'تقدير الموظف المتميز', title_en: 'Recognizing Top Performers', desc_ar: 'إبراز أصحاب الأداء الأفضل بشكل علني يحفّز الجميع على الوصول لمستواهم.', desc_en: 'Publicly recognizing top performers motivates everyone to reach their level.' },
          { icon: '📈', title_ar: 'رفع الإنتاجية الكلية', title_en: 'Boosting Overall Productivity', desc_ar: 'عندما يرى الموظفون أداءهم مقارنة بزملائهم، يميلون لرفع كفاءتهم بشكل طبيعي.', desc_en: 'When employees see their performance compared to colleagues, they naturally improve their efficiency.' },
          { icon: '🤝', title_ar: 'تحسين العمل الجماعي', title_en: 'Improving Teamwork', desc_ar: 'منافسة الفروع ببعضها بدلاً من الأفراد فقط يبني روح الفريق الواحد.', desc_en: 'Branch-vs-branch competition instead of only individuals builds a stronger team spirit.' },
          { icon: '🎮', title_ar: 'تجربة ممتعة في العمل', title_en: 'A Fun Work Experience', desc_ar: 'عناصر الألعاب (Gamification) تقلل من الرتابة وترفع الحماس اليومي للعمل.', desc_en: 'Gamification elements reduce monotony and increase daily enthusiasm for work.' },
          { icon: '📊', title_ar: 'بيانات موثوقة لاتخاذ القرار', title_en: 'Reliable Data for Decision-Making', desc_ar: 'استخدام نتائج لوحة المتصدرين في تقييمات الموظفين والحوافز بشكل موضوعي.', desc_en: 'Using leaderboard results in employee evaluations and incentives objectively.' },
        ],
      },
      {
        type: 'gamification', bg: 'dark2',
        eyebrow_ar: 'عناصر الألعاب', eyebrow_en: 'GAMIFICATION ELEMENTS',
        title_ar: 'أدوات تحفيز ذكية', title_en: 'Smart Motivation Tools',
        items: [
          { icon: '🥇', title_ar: 'ميداليات الترتيب', title_en: 'Ranking Medals', desc_ar: 'رموز ذهبية وفضية وبرونزية للمراكز الثلاثة الأولى', desc_en: 'Gold, silver, and bronze icons for the top 3 ranks' },
          { icon: '📅', title_ar: 'تقارير دورية', title_en: 'Periodic Reports', desc_ar: 'ملخصات يومية وأسبوعية وشهرية للأداء', desc_en: 'Daily, weekly, and monthly performance summaries' },
          { icon: '🎯', title_ar: 'أهداف قابلة للتخصيص', title_en: 'Customizable Goals', desc_ar: 'تحديد أهداف خاصة لكل فرع أو موظف', desc_en: 'Setting custom goals for each branch or employee' },
          { icon: '🔔', title_ar: 'إشعارات التحديث', title_en: 'Update Notifications', desc_ar: 'تنبيهات فورية عند تغير الترتيب أو تحقيق إنجاز', desc_en: 'Instant alerts on rank changes or achievements' },
        ],
      },
    ],
    cta: {
      title_ar: 'جاهز لتحفيز فريقك للتميز؟', title_en: 'Ready to Motivate Your Team for Excellence?',
      desc_ar: 'تواصل مع فريق InfinityTech واحصل على تجربة مجانية لنظام لوحة المتصدرين في مطعمك.',
      desc_en: 'Contact InfinityTech and get a free trial of the Leaderboard system at your restaurant.',
    },
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
