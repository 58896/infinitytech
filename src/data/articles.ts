export type StatBox = { num: string; label_ar: string; label_en: string }
export type ListItem = { ar: string; en: string }

export type BodyBlock =
  | { type: 'p'; ar: string; en: string }
  | { type: 'stats'; items: StatBox[] }
  | { type: 'h2'; ar: string; en: string }
  | { type: 'h3'; ar: string; en: string }
  | { type: 'list'; items: ListItem[] }
  | { type: 'quote'; ar: string; en: string }

export type RelatedArticle = {
  slug: string
  tag_ar: string; tag_en: string
  title_ar: string; title_en: string
}

export type Article = {
  slug: string
  accent: string
  accentGrad: string
  badgeIcon: string; badge_ar: string; badge_en: string
  title_ar: string; title_en: string
  date_ar: string; date_en: string
  readTime_ar: string; readTime_en: string
  heroImage: string
  body: BodyBlock[]
  related: RelatedArticle[]
  cta: { title_ar: string; title_en: string; desc_ar: string; desc_en: string; productSlug: string }
}

export const articles: Article[] = [
  {
    slug: 'drive-thru',
    accent: '#7b2ff7',
    accentGrad: 'linear-gradient(90deg,#7b2ff7,#ff4da6)',
    badgeIcon: '🚗', badge_ar: 'Drive-Thru', badge_en: 'Drive-Thru',
    title_ar: '5 أسباب تجعل نظام Drive-Thru ضرورة وليس رفاهية',
    title_en: '5 Reasons Drive-Thru Systems Are a Necessity, Not a Luxury',
    date_ar: '📅 2 أبريل 2025', date_en: '📅 April 2, 2025',
    readTime_ar: '⏱ 7 دقائق قراءة', readTime_en: '⏱ 7 min read',
    heroImage: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1400&q=80',
    body: [
      { type: 'p', ar: 'في ظل المنافسة المتصاعدة بين سلاسل المطاعم بالمملكة، لم يعد Drive-Thru مجرد مسار إضافي بجانب المطعم، بل أصبح القناة الأساسية للإيرادات في كثير من العلامات التجارية الكبرى. السؤال لم يعد "هل أحتاج Drive-Thru؟" بل "كيف أجعله أسرع منافسي؟"', en: 'Amid the rising competition among restaurant chains in the Kingdom, Drive-Thru is no longer just an extra lane beside the restaurant — it has become the primary revenue channel for many major brands. The question is no longer "Do I need a Drive-Thru?" but "How do I make it faster than my competitors?"' },
      { type: 'stats', items: [
        { num: '40%', label_ar: 'من إيرادات المطاعم السريعة', label_en: 'of Fast-Food Revenue' },
        { num: '+30%', label_ar: 'طلبات إضافية بالساعة', label_en: 'Extra Orders per Hour' },
        { num: '99%', label_ar: 'دقة الطلب الصوتي', label_en: 'Voice Order Accuracy' },
      ]},
      { type: 'h2', ar: 'السبب الأول: سلوك العميل تغيّر فعلياً', en: 'Reason 1: Customer Behavior Has Genuinely Changed' },
      { type: 'p', ar: 'أصبح العملاء، خاصة في المدن الكبرى، يفضّلون الحصول على وجباتهم دون مغادرة سياراتهم. هذا التحول السلوكي ليس مؤقتاً، بل أصبح جزءاً أساسياً من نمط الحياة الحضرية الحديثة.', en: 'Customers, especially in major cities, increasingly prefer getting their meals without leaving their cars. This behavioral shift isn\'t temporary — it has become a core part of modern urban lifestyle.' },
      { type: 'h2', ar: 'السبب الثاني: السرعة تساوي إيرادات', en: 'Reason 2: Speed Equals Revenue' },
      { type: 'p', ar: 'كل دقيقة إضافية في طابور الانتظار تعني عملاء محتملين يغادرون. الأنظمة الصوتية الذكية وشاشات العرض الخارجية تقلّص وقت استقبال الطلب وتزيد عدد السيارات التي يمكن خدمتها في الساعة.', en: 'Every extra minute in a waiting queue means potential customers leaving. Smart voice systems and outdoor displays reduce order-taking time and increase the number of cars served per hour.' },
      { type: 'quote', ar: '«تخفيض وقت الانتظار بمقدار دقيقة واحدة فقط يمكن أن يزيد عدد الطلبات المخدومة يومياً بشكل ملموس.»', en: '"Reducing wait time by just one minute can noticeably increase the number of orders served daily."' },
      { type: 'h2', ar: 'السبب الثالث: تجربة موحدة لكل الفروع', en: 'Reason 3: A Consistent Experience Across All Branches' },
      { type: 'p', ar: 'أنظمة Drive-Thru الذكية تضمن أن العميل يحصل على نفس تجربة الخدمة السريعة والدقيقة، سواء كان في الرياض أو جدة أو الدمام، مما يعزز هوية العلامة التجارية.', en: 'Smart Drive-Thru systems ensure customers get the same fast, accurate service experience whether in Riyadh, Jeddah, or Dammam — strengthening brand identity.' },
      { type: 'h2', ar: 'السبب الرابع: بيانات تشغيلية لا تقدّر بثمن', en: 'Reason 4: Invaluable Operational Data' },
      { type: 'p', ar: 'كل طلب يمر عبر نظام Drive-Thru الذكي يولّد بيانات: أوقات الذروة، الأصناف الأكثر طلباً، ومتوسط وقت الخدمة لكل موظف — رؤى تتحول لاحقاً لقرارات تشغيلية أفضل.', en: 'Every order through a smart Drive-Thru system generates data: peak hours, best-selling items, and average service time per employee — insights that later translate into better operational decisions.' },
      { type: 'h2', ar: 'السبب الخامس: المنافسة لا تنتظر', en: 'Reason 5: Competition Doesn\'t Wait' },
      { type: 'p', ar: 'العلامات التجارية الكبرى استثمرت بالفعل في أنظمة Drive-Thru متطورة. التأخر في مواكبة هذا التحول يعني خسارة العملاء لصالح المنافسين الأسرع.', en: 'Major brands have already invested in advanced Drive-Thru systems. Lagging behind this shift means losing customers to faster competitors.' },
      { type: 'h2', ar: 'الخلاصة', en: 'Conclusion' },
      { type: 'p', ar: 'نظام Drive-Thru المتكامل لم يعد خياراً ثانوياً، بل ركيزة أساسية لنمو أي سلسلة مطاعم تطمح للمنافسة في السوق السعودي اليوم.', en: 'An integrated Drive-Thru system is no longer a secondary option — it\'s a core pillar for the growth of any restaurant chain aspiring to compete in today\'s Saudi market.' },
    ],
    related: [
      { slug: 'zoom-nitro', tag_ar: 'مراقبة الأداء', tag_en: 'Performance Monitoring', title_ar: 'ما لا يُقاس لا يُدار: قصة نظام ZOOM Nitro', title_en: 'What Isn\'t Measured Can\'t Be Managed' },
      { slug: 'leaderboard', tag_ar: 'تحفيز الفرق', tag_en: 'Team Motivation', title_ar: 'علم النفس وراء لوحات المتصدرين', title_en: 'The Psychology Behind Leaderboards' },
      { slug: 'digital-signage', tag_ar: 'الشاشات الرقمية', tag_en: 'Digital Signage', title_ar: 'كيف تزيد الشاشات الرقمية مبيعات مطعمك بنسبة 30%؟', title_en: 'How Digital Signage Increases Sales by 30%?' },
    ],
    cta: {
      title_ar: 'جاهز لتسريع خدمتك؟', title_en: 'Ready to Speed Up Your Service?',
      desc_ar: 'تعرف على منظومة Drive-Thru من InfinityTech أو تواصل معنا مباشرة.',
      desc_en: 'Explore InfinityTech\'s Drive-Thru system or contact us directly.',
      productSlug: 'drive-thru',
    },
  },

  {
    slug: 'digital-signage',
    accent: '#7b2ff7',
    accentGrad: 'linear-gradient(90deg,#7b2ff7,#ff4da6)',
    badgeIcon: '📺', badge_ar: 'الشاشات الرقمية', badge_en: 'Digital Signage',
    title_ar: 'كيف تزيد الشاشات الرقمية مبيعات مطعمك بنسبة 30%؟',
    title_en: 'How Digital Signage Increases Your Restaurant Sales by 30%?',
    date_ar: '📅 15 مايو 2025', date_en: '📅 May 15, 2025',
    readTime_ar: '⏱ 6 دقائق قراءة', readTime_en: '⏱ 6 min read',
    heroImage: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=1400&q=80',
    body: [
      { type: 'p', ar: 'عندما يدخل العميل إلى مطعمك، فإن أول 7 ثوانٍ تحدد قراره الشرائي بشكل كبير. القائمة الورقية الثابتة تفقد فرصة هائلة في هذه اللحظة الحرجة، بينما تتحول الشاشة الرقمية الذكية إلى بائع صامت يعمل على مدار الساعة، يقترح، يُذكّر، ويُقنع.', en: 'When a customer walks into your restaurant, the first 7 seconds largely determine their purchasing decision. A static paper menu loses a huge opportunity in this critical moment, while a smart digital screen becomes a silent salesperson working around the clock — suggesting, reminding, and persuading.' },
      { type: 'stats', items: [
        { num: '30%', label_ar: 'زيادة في المبيعات', label_en: 'Sales Increase' },
        { num: '3 ثوانٍ', label_ar: 'للتحديث من السحابة', label_en: 'Cloud Update Time' },
        { num: 'x2', label_ar: 'معدل تذكر العروض', label_en: 'Offer Recall Rate' },
      ]},
      { type: 'h2', ar: 'لماذا تتفوق الشاشة على القائمة الورقية؟', en: 'Why Does a Screen Outperform a Paper Menu?' },
      { type: 'p', ar: 'القائمة الورقية تعرض نفس المحتوى لكل عميل في كل وقت، بينما تستطيع الشاشة الرقمية التكيف مع السياق: تعرض الفطور في الصباح، الوجبات السريعة وقت الذروة، والعروض الخاصة في المساء — كل ذلك تلقائياً دون تدخل بشري.', en: 'A paper menu shows the same content to every customer at all times, while a digital screen adapts to context: breakfast items in the morning, quick meals during rush hour, and special offers in the evening — all automatically, without human intervention.' },
      { type: 'quote', ar: '«المطاعم التي اعتمدت الشاشات الرقمية الذكية سجّلت ارتفاعاً ملحوظاً في متوسط قيمة الفاتورة خلال أول 3 أشهر من التشغيل.»', en: '"Restaurants that adopted smart digital signage recorded a noticeable rise in average ticket size within the first 3 months of operation."' },
      { type: 'h2', ar: 'ثلاث طرق تستخدمها الشاشات لزيادة المبيعات', en: 'Three Ways Screens Increase Sales' },
      { type: 'h3', ar: '1. التسليط الذكي على العروض ذات الهامش الأعلى', en: '1. Smart Highlighting of High-Margin Offers' },
      { type: 'p', ar: 'يمكن لمدير المطعم برمجة الشاشة لتسليط الضوء على الأصناف الأكثر ربحية في أوقات محددة، مما يوجه انتباه العميل دون أن يشعر بأنه مُجبر على الاختيار.', en: 'A restaurant manager can program the screen to highlight the most profitable items at specific times, guiding customer attention without making them feel pressured.' },
      { type: 'h3', ar: '2. عرض الـ Combo والباقات المُقترحة بصرياً', en: '2. Visually Suggested Combos and Bundles' },
      { type: 'p', ar: 'الصور الجذابة لباقات الوجبات تزيد احتمالية الشراء بشكل أكبر من النص وحده. الشاشات الرقمية تتيح عرض صور عالية الجودة مع تحديث الأسعار فورياً.', en: 'Attractive images of meal bundles increase purchase likelihood far more than text alone. Digital screens enable high-quality imagery with instant price updates.' },
      { type: 'h3', ar: '3. المحتوى المتغير حسب الوقت والطقس', en: '3. Content That Changes by Time and Weather' },
      { type: 'p', ar: 'في الأيام الحارة تعرض الشاشة المشروبات الباردة تلقائياً، وفي الأيام الماطرة تقترح الوجبات الدافئة — تخصيص لا يمكن لقائمة ورقية مجاراته.', en: 'On hot days, the screen automatically displays cold drinks, and on rainy days it suggests warm meals — a level of personalization no paper menu can match.' },
      { type: 'h2', ar: 'ما الذي تحتاجه لتبدأ؟', en: 'What Do You Need to Get Started?' },
      { type: 'list', items: [
        { ar: 'شاشة 4K مقاومة للعوامل الجوية إن كانت ستُركَّب خارجياً', en: 'A 4K weather-resistant screen if installed outdoors' },
        { ar: 'نظام إدارة محتوى سحابي (CMS) سهل الاستخدام', en: 'An easy-to-use cloud content management system (CMS)' },
        { ar: 'استراتيجية محتوى واضحة بحسب أوقات اليوم', en: 'A clear content strategy by time of day' },
        { ar: 'تكامل مع نظام نقاط البيع لتحديث الأسعار تلقائياً', en: 'Integration with your POS system for automatic price updates' },
      ]},
      { type: 'h2', ar: 'الخلاصة', en: 'Conclusion' },
      { type: 'p', ar: 'الشاشات الرقمية ليست رفاهية تصميمية، بل أداة تسويقية فعّالة تعمل على مدار الساعة لرفع مبيعاتك. مع InfinityTech، يمكنك تركيب نظام كامل خلال أيام والبدء في رؤية النتائج خلال أسابيع.', en: 'Digital screens are not a design luxury — they\'re an effective marketing tool working around the clock to increase your sales. With InfinityTech, you can install a complete system within days and start seeing results within weeks.' },
    ],
    related: [
      { slug: 'kiosk', tag_ar: 'الكشكات الذاتية', tag_en: 'Self-Order Kiosks', title_ar: 'كيف تقلل كشكات الطلب الذاتي أخطاء الطلبات بنسبة 95%؟', title_en: 'How Self-Order Kiosks Cut Order Errors by 95%?' },
      { slug: 'drive-thru', tag_ar: 'Drive-Thru', tag_en: 'Drive-Thru', title_ar: '5 أسباب تجعل نظام Drive-Thru ضرورة وليس رفاهية', title_en: '5 Reasons Drive-Thru Systems Are a Necessity' },
      { slug: 'ai-camera', tag_ar: 'الذكاء الاصطناعي', tag_en: 'Artificial Intelligence', title_ar: 'مستقبل الذكاء الاصطناعي في المطاعم السعودية', title_en: 'The Future of AI in Saudi Restaurants' },
    ],
    cta: {
      title_ar: 'جاهز لتحديث قائمتك؟', title_en: 'Ready to Upgrade Your Menu?',
      desc_ar: 'تعرف على حلول الشاشات الرقمية من InfinityTech أو تواصل معنا مباشرة.',
      desc_en: 'Explore InfinityTech\'s digital signage solutions or contact us directly.',
      productSlug: 'digital-signage',
    },
  },

  {
    slug: 'kiosk',
    accent: '#7b2ff7',
    accentGrad: 'linear-gradient(90deg,#7b2ff7,#ff4da6)',
    badgeIcon: '🖥️', badge_ar: 'الكشكات الذاتية', badge_en: 'Self-Order Kiosks',
    title_ar: 'كيف تقلل كشكات الطلب الذاتي أخطاء الطلبات بنسبة 95%؟',
    title_en: 'How Self-Order Kiosks Cut Order Errors by 95%?',
    date_ar: '📅 28 مايو 2025', date_en: '📅 May 28, 2025',
    readTime_ar: '⏱ 6 دقائق قراءة', readTime_en: '⏱ 6 min read',
    heroImage: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=1400&q=80',
    body: [
      { type: 'p', ar: 'تخيل عميلاً يطلب "برجر بدون مخلل، إضافي جبن، وبدون بصل" عبر الهاتف وسط ضجيج المطبخ. احتمالية الخطأ في هذه الحالة مرتفعة جداً. الآن تخيل نفس الطلب يُدخَل مباشرة عبر شاشة لمس بخطوات بصرية واضحة — هذا بالضبط ما تحققه كشكات الطلب الذاتي.', en: 'Imagine a customer ordering "a burger without pickles, extra cheese, no onions" over the phone amid kitchen noise. The chance of error here is high. Now imagine the same order entered directly via a touchscreen with clear visual steps — that\'s exactly what self-order kiosks achieve.' },
      { type: 'stats', items: [
        { num: '95%', label_ar: 'تقليل أخطاء الطلب', label_en: 'Order Error Reduction' },
        { num: '30%', label_ar: 'زيادة متوسط الفاتورة', label_en: 'Average Ticket Increase' },
        { num: 'x2', label_ar: 'سرعة الطلب', label_en: 'Order Speed' },
      ]},
      { type: 'h2', ar: 'مصدر الخطأ الحقيقي ليس الموظف', en: 'The Real Source of Error Isn\'t the Employee' },
      { type: 'p', ar: 'معظم أخطاء الطلبات لا تحدث بسبب إهمال الموظف، بل بسبب سوء التواصل: ضوضاء المكان، اختلاف اللهجات، أو ضغط أوقات الذروة. الكشك الذاتي يزيل هذه العوامل تماماً من المعادلة لأن العميل يكتب أو يلمس طلبه بنفسه.', en: 'Most order errors don\'t happen because of employee negligence, but due to miscommunication: ambient noise, dialect differences, or peak-hour pressure. A self-order kiosk removes these factors entirely because the customer types or taps their order themselves.' },
      { type: 'h2', ar: 'آلية تقليل الخطأ خطوة بخطوة', en: 'The Error-Reduction Mechanism Step by Step' },
      { type: 'h3', ar: '1. واجهة بصرية واضحة لكل تخصيص', en: '1. A Clear Visual Interface for Every Customization' },
      { type: 'p', ar: 'كل إضافة أو حذف يظهر فوراً على الشاشة بشكل مرئي، فلا مجال للالتباس بين ما طلبه العميل وما فهمه الموظف.', en: 'Every addition or removal is shown visually on screen instantly, leaving no room for confusion between what the customer ordered and what the employee understood.' },
      { type: 'h3', ar: '2. تأكيد نهائي قبل الإرسال', en: '2. Final Confirmation Before Submission' },
      { type: 'p', ar: 'يراجع العميل طلبه كاملاً على الشاشة قبل الدفع، مما يمنحه فرصة أخيرة لتصحيح أي خطأ بنفسه.', en: 'The customer reviews their entire order on screen before payment, giving them a final chance to self-correct any mistake.' },
      { type: 'h3', ar: '3. إرسال رقمي مباشر للمطبخ', en: '3. Direct Digital Send to the Kitchen' },
      { type: 'p', ar: 'الطلب يصل لشاشة المطبخ (KDS) كنص رقمي دقيق، بدلاً من تذكرة مكتوبة بخط اليد قد يساء فهمها.', en: 'The order reaches the Kitchen Display System (KDS) as precise digital text, instead of a handwritten ticket that might be misread.' },
      { type: 'quote', ar: '«كل خطأ في الطلب يكلّف المطعم أكثر من ثمن الوجبة — وقت إعادة التحضير، رضا العميل المفقود، والسمعة.»', en: '"Every order error costs the restaurant more than the price of the meal — re-preparation time, lost customer satisfaction, and reputation."' },
      { type: 'h2', ar: 'فائدة جانبية: ارتفاع متوسط قيمة الطلب', en: 'A Side Benefit: Higher Average Order Value' },
      { type: 'p', ar: 'الكشكات الذاتية لا تتردد في اقتراح إضافات، على عكس بعض الموظفين الذين يتجنبون ذلك خوفاً من الإلحاح. هذا يفسر جزئياً سبب ارتفاع متوسط الفاتورة بنسبة تصل إلى 30% عند استخدام الكشكات.', en: 'Self-order kiosks never hesitate to suggest add-ons, unlike some employees who avoid it out of fear of being pushy. This partly explains why average ticket size rises by up to 30% when using kiosks.' },
      { type: 'h2', ar: 'الخلاصة', en: 'Conclusion' },
      { type: 'p', ar: 'الاستثمار في كشكات الطلب الذاتي ليس فقط عن السرعة، بل عن الدقة. أقل أخطاء يعني فريقاً أسعد، عملاء أكثر رضا، وهامش ربح محمي من تكاليف إعادة التحضير غير الضرورية.', en: 'Investing in self-order kiosks isn\'t just about speed — it\'s about accuracy. Fewer errors mean a happier team, more satisfied customers, and a profit margin protected from unnecessary re-preparation costs.' },
    ],
    related: [
      { slug: 'digital-signage', tag_ar: 'الشاشات الرقمية', tag_en: 'Digital Signage', title_ar: 'كيف تزيد الشاشات الرقمية مبيعات مطعمك بنسبة 30%؟', title_en: 'How Digital Signage Increases Sales by 30%?' },
      { slug: 'ai-camera', tag_ar: 'الذكاء الاصطناعي', tag_en: 'Artificial Intelligence', title_ar: 'مستقبل الذكاء الاصطناعي في المطاعم السعودية', title_en: 'The Future of AI in Saudi Restaurants' },
      { slug: 'customer-feedback', tag_ar: 'تقييم العملاء', tag_en: 'Customer Feedback', title_ar: 'لماذا يجب أن تستمع لعملائك لحظياً؟', title_en: 'Why Listen to Customers in Real-Time?' },
    ],
    cta: {
      title_ar: 'جاهز لتحويل تجربة عملائك؟', title_en: 'Ready to Transform Your Customer Experience?',
      desc_ar: 'تعرف على كشكات الطلب الذاتي من InfinityTech أو تواصل معنا مباشرة.',
      desc_en: 'Explore InfinityTech\'s self-order kiosks or contact us directly.',
      productSlug: 'kiosk',
    },
  },

  {
    slug: 'ai-camera',
    accent: '#7b2ff7',
    accentGrad: 'linear-gradient(90deg,#7b2ff7,#ff4da6)',
    badgeIcon: '🤖', badge_ar: 'الذكاء الاصطناعي', badge_en: 'Artificial Intelligence',
    title_ar: 'مستقبل الذكاء الاصطناعي في المطاعم السعودية',
    title_en: 'The Future of AI in Saudi Restaurants',
    date_ar: '📅 18 مارس 2025', date_en: '📅 March 18, 2025',
    readTime_ar: '⏱ 8 دقائق قراءة', readTime_en: '⏱ 8 min read',
    heroImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1400&q=80',
    body: [
      { type: 'p', ar: 'رؤية المملكة 2030 وضعت التحول الرقمي في صميم استراتيجيتها، وقطاع المطاعم والضيافة ليس استثناءً. اليوم، تتحول كاميرات المراقبة العادية إلى عيون ذكية، وتتعلم الأنظمة من سلوك العملاء لتقترح القرار الصحيح في الوقت المناسب.', en: 'Saudi Vision 2030 places digital transformation at the heart of its strategy, and the restaurant and hospitality sector is no exception. Today, ordinary surveillance cameras are becoming smart eyes, and systems are learning from customer behavior to suggest the right decision at the right time.' },
      { type: 'stats', items: [
        { num: '25%', label_ar: 'تقليل هدر الطعام', label_en: 'Food Waste Reduction' },
        { num: '35%', label_ar: 'زيادة في Upsell', label_en: 'Upsell Increase' },
        { num: '24/7', label_ar: 'مراقبة ذكية مستمرة', label_en: 'Continuous Smart Monitoring' },
      ]},
      { type: 'h2', ar: 'من المراقبة إلى الاستبصار', en: 'From Surveillance to Insight' },
      { type: 'p', ar: 'الكاميرات لم تعد فقط لتسجيل الأحداث بعد وقوعها، بل أصبحت قادرة على تحليل حركة العملاء، إشغال الطاولات، وأوقات الانتظار بشكل لحظي، وتنبيه الإدارة فوراً عند حدوث أي خلل.', en: 'Cameras are no longer just for recording events after they happen — they can now analyze customer flow, table occupancy, and wait times in real time, alerting management instantly when an issue arises.' },
      { type: 'h2', ar: 'الذكاء الاصطناعي في خدمة Drive-Thru', en: 'AI in Drive-Thru Service' },
      { type: 'p', ar: 'أنظمة استقبال الطلبات الصوتية المدعومة بالذكاء الاصطناعي تفهم اللهجات المحلية بدقة تتجاوز 99%، وتقترح وجبات إضافية بناءً على الطلب الحالي، مما يرفع متوسط قيمة الفاتورة دون أي جهد بشري.', en: 'AI-powered voice ordering systems understand local dialects with over 99% accuracy and suggest additional items based on the current order, raising the average ticket value without any human effort.' },
      { type: 'quote', ar: '«الذكاء الاصطناعي لا يحل محل الموظف، بل يحرّره من المهام الروتينية ليتفرغ لما يهم فعلاً: تجربة العميل.»', en: '"AI doesn\'t replace the employee — it frees them from routine tasks to focus on what truly matters: the customer experience."' },
      { type: 'h2', ar: 'تحليل المشاعر من تقييمات العملاء', en: 'Sentiment Analysis from Customer Feedback' },
      { type: 'p', ar: 'بدلاً من قراءة آلاف التعليقات يدوياً، تستطيع نماذج معالجة اللغة الطبيعية تصنيف التقييمات تلقائياً، وكشف الأنماط المتكررة في الشكاوى، مما يسرّع اتخاذ القرار التصحيحي.', en: 'Instead of manually reading thousands of comments, natural language processing models can automatically classify feedback and detect recurring complaint patterns, speeding up corrective decision-making.' },
      { type: 'h2', ar: 'ما الذي يجب أن تستعد له المطاعم؟', en: 'What Should Restaurants Prepare For?' },
      { type: 'list', items: [
        { ar: 'بنية تحتية رقمية موحدة تربط الكاميرات والكشكات والشاشات معاً', en: 'A unified digital infrastructure connecting cameras, kiosks, and screens' },
        { ar: 'تدريب الفريق على التعامل مع لوحات التحكم الذكية', en: 'Training the team to work with smart dashboards' },
        { ar: 'استراتيجية بيانات واضحة لتحويل الأرقام لقرارات', en: 'A clear data strategy to turn numbers into decisions' },
        { ar: 'شريك تقني محلي يفهم خصوصية السوق السعودي', en: 'A local tech partner who understands the Saudi market' },
      ]},
      { type: 'h2', ar: 'الخلاصة', en: 'Conclusion' },
      { type: 'p', ar: 'المطاعم التي تتبنى الذكاء الاصطناعي اليوم لا تواكب المستقبل فحسب، بل تبني ميزة تنافسية يصعب على الآخرين اللحاق بها لاحقاً.', en: 'Restaurants adopting AI today aren\'t just keeping pace with the future — they\'re building a competitive edge that will be hard for others to catch up to later.' },
    ],
    related: [
      { slug: 'customer-feedback', tag_ar: 'تقييم العملاء', tag_en: 'Customer Feedback', title_ar: 'لماذا يجب أن تستمع لعملائك لحظياً؟', title_en: 'Why Listen to Customers in Real-Time?' },
      { slug: 'kiosk', tag_ar: 'الكشكات الذاتية', tag_en: 'Self-Order Kiosks', title_ar: 'كيف تقلل كشكات الطلب الذاتي أخطاء الطلبات؟', title_en: 'How Kiosks Cut Order Errors?' },
      { slug: 'drive-thru', tag_ar: 'Drive-Thru', tag_en: 'Drive-Thru', title_ar: '5 أسباب تجعل نظام Drive-Thru ضرورة', title_en: '5 Reasons Drive-Thru Is a Necessity' },
    ],
    cta: {
      title_ar: 'جاهز لرؤية مطعمك بعيون الذكاء الاصطناعي؟', title_en: 'Ready to See Your Restaurant Through AI Eyes?',
      desc_ar: 'تعرف على كاميرات الذكاء الاصطناعي من InfinityTech أو تواصل معنا مباشرة.',
      desc_en: 'Explore InfinityTech\'s AI camera solutions or contact us directly.',
      productSlug: 'ai-camera',
    },
  },

  {
    slug: 'customer-feedback',
    accent: '#7b2ff7',
    accentGrad: 'linear-gradient(90deg,#7b2ff7,#ff4da6)',
    badgeIcon: '⭐', badge_ar: 'تقييم العملاء', badge_en: 'Customer Feedback',
    title_ar: 'لماذا يجب أن تستمع لعملائك لحظياً وليس شهرياً؟',
    title_en: 'Why You Should Listen to Customers in Real-Time, Not Monthly?',
    date_ar: '📅 10 يونيو 2025', date_en: '📅 June 10, 2025',
    readTime_ar: '⏱ 6 دقائق قراءة', readTime_en: '⏱ 6 min read',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80',
    body: [
      { type: 'p', ar: 'كثير من المطاعم لا تزال تعتمد على استبيانات رضا العملاء الشهرية أو الربعية، وهي ممارسة كانت منطقية قبل عقد من الزمن، لكنها اليوم أشبه بقراءة جريدة الأمس لمعرفة حالة الطقس الآن. عندما تكتشف مشكلة بعد شهر، يكون قد فات الأوان لإنقاذ مئات العملاء الذين تأثروا بها.', en: 'Many restaurants still rely on monthly or quarterly customer satisfaction surveys — a practice that made sense a decade ago, but today is like reading yesterday\'s newspaper to know today\'s weather. By the time you discover a problem a month later, it\'s too late to save the hundreds of customers affected by it.' },
      { type: 'stats', items: [
        { num: '+45%', label_ar: 'زيادة معدل الاستجابة', label_en: 'Response Rate Increase' },
        { num: 'فوري', label_ar: 'تنبيه عند تقييم سلبي', label_en: 'Alert on Negative Feedback' },
        { num: '+20%', label_ar: 'ارتفاع في الرضا العام', label_en: 'Increase in Overall Satisfaction' },
      ]},
      { type: 'h2', ar: 'الفرق بين "معرفة المشكلة" و"حلّها في الوقت المناسب"', en: 'The Difference Between "Knowing the Problem" and "Solving It in Time"' },
      { type: 'p', ar: 'عميل غاضب من تأخير الخدمة اليوم سيخبر عشرة أصدقاء قبل أن تقرأ أنت تقريره الشهري. لكن إن وصلك تنبيه فوري بتقييمه السلبي، يمكنك التواصل معه خلال دقائق، حل المشكلة، وربما تحويله إلى عميل أكثر ولاءً من قبل.', en: 'A customer upset about service delays today will tell ten friends before you even read your monthly report. But if you get an instant alert about their negative rating, you can reach out within minutes, solve the issue, and possibly turn them into an even more loyal customer than before.' },
      { type: 'quote', ar: '«استعادة عميل غاضب فوراً تكلف أقل بكثير من اكتساب عميل جديد ليحل محل العميل الذي فقدته بصمت.»', en: '"Recovering an upset customer instantly costs far less than acquiring a new one to replace the customer you silently lost."' },
      { type: 'h2', ar: 'ثلاثة مؤشرات يجب قياسها لحظياً', en: 'Three Metrics You Must Measure in Real-Time' },
      { type: 'h3', ar: 'NPS – صافي نقاط الترويج', en: 'NPS – Net Promoter Score' },
      { type: 'p', ar: 'يكشف عن احتمالية أن يوصي عميلك بمطعمك للآخرين — مؤشر طويل الأمد على صحة علامتك التجارية.', en: 'Reveals how likely your customer is to recommend your restaurant to others — a long-term indicator of your brand\'s health.' },
      { type: 'h3', ar: 'CSAT – مؤشر الرضا الفوري', en: 'CSAT – Immediate Satisfaction Score' },
      { type: 'p', ar: 'يقيس رد فعل العميل مباشرة بعد التجربة، وهو الأنسب لاكتشاف المشاكل التشغيلية اليومية.', en: 'Measures customer reaction right after the experience, making it ideal for catching daily operational issues.' },
      { type: 'h3', ar: 'CES – سهولة الحصول على الخدمة', en: 'CES – Customer Effort Score' },
      { type: 'p', ar: 'يخبرك إن كانت رحلة العميل من الطلب للاستلام سلسة أم مليئة بالعقبات.', en: 'Tells you whether the customer\'s journey from order to delivery was smooth or full of friction.' },
      { type: 'h2', ar: 'كيف تجعل الاستماع جزءاً من العملية اليومية؟', en: 'How to Make Listening Part of Your Daily Process' },
      { type: 'list', items: [
        { ar: 'وضع أجهزة تقييم بسيطة عند نقاط الخروج أو الاستلام', en: 'Placing simple feedback devices at exit or pickup points' },
        { ar: 'إرسال رمز QR على الفاتورة لاستبيان سريع من الجوال', en: 'Sending a QR code on the receipt for a quick mobile survey' },
        { ar: 'تفعيل تنبيهات فورية لمدير الفرع عند أي تقييم سلبي', en: 'Enabling instant alerts to the branch manager on any negative rating' },
        { ar: 'مراجعة لوحة التحكم يومياً وليس شهرياً فقط', en: 'Reviewing the dashboard daily, not just monthly' },
      ]},
      { type: 'h2', ar: 'الخلاصة', en: 'Conclusion' },
      { type: 'p', ar: 'صوت عميلك موجود الآن، في كل لحظة. السؤال هو: هل تسمعه وأنت قادر على التصرف، أم تقرأه بعد فوات الأوان؟', en: 'Your customer\'s voice exists right now, in every moment. The question is: do you hear it while you can still act, or read it after it\'s too late?' },
    ],
    related: [
      { slug: 'ai-camera', tag_ar: 'الذكاء الاصطناعي', tag_en: 'Artificial Intelligence', title_ar: 'مستقبل الذكاء الاصطناعي في المطاعم السعودية', title_en: 'The Future of AI in Saudi Restaurants' },
      { slug: 'kiosk', tag_ar: 'الكشكات الذاتية', tag_en: 'Self-Order Kiosks', title_ar: 'كيف تقلل كشكات الطلب الذاتي أخطاء الطلبات؟', title_en: 'How Kiosks Cut Order Errors?' },
      { slug: 'leaderboard', tag_ar: 'تحفيز الفرق', tag_en: 'Team Motivation', title_ar: 'علم النفس وراء لوحات المتصدرين', title_en: 'The Psychology Behind Leaderboards' },
    ],
    cta: {
      title_ar: 'جاهز لسماع صوت عملائك بوضوح؟', title_en: 'Ready to Hear Your Customers Loud and Clear?',
      desc_ar: 'تعرف على نظام تقييم العملاء من InfinityTech أو تواصل معنا مباشرة.',
      desc_en: 'Explore InfinityTech\'s Customer Feedback System or contact us directly.',
      productSlug: 'customer-feedback',
    },
  },

  {
    slug: 'zoom-nitro',
    accent: '#7b2ff7',
    accentGrad: 'linear-gradient(90deg,#7b2ff7,#ff4da6)',
    badgeIcon: '⏱️', badge_ar: 'مراقبة الأداء', badge_en: 'Performance Monitoring',
    title_ar: 'ما لا يُقاس لا يُدار: قصة نظام ZOOM Nitro',
    title_en: 'What Isn\'t Measured Can\'t Be Managed: The ZOOM Nitro Story',
    date_ar: '📅 22 يونيو 2025', date_en: '📅 June 22, 2025',
    readTime_ar: '⏱ 7 دقائق قراءة', readTime_en: '⏱ 7 min read',
    heroImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1400&q=80',
    body: [
      { type: 'p', ar: 'مقولة إدارية قديمة تقول: "ما لا يمكن قياسه، لا يمكن تحسينه". في عالم Drive-Thru، حيث تُقاس الكفاءة بالثواني وليس الدقائق، هذه المقولة ليست شعاراً تحفيزياً، بل واقع تشغيلي صارم. مدير المطعم الذي يعتمد على انطباعه الشخصي عن سرعة الخدمة، يدير مطعمه بلا بوصلة.', en: 'An old management saying goes: "What can\'t be measured can\'t be improved." In the world of Drive-Thru, where efficiency is measured in seconds, not minutes, this isn\'t just a motivational slogan — it\'s a strict operational reality. A manager who relies on personal impressions of service speed is running their restaurant without a compass.' },
      { type: 'stats', items: [
        { num: '35%', label_ar: 'تحسن في سرعة التنفيذ', label_en: 'Improvement in Speed' },
        { num: '5+', label_ar: 'نقاط قياس على المسار', label_en: 'Checkpoints on the Lane' },
        { num: 'لحظي', label_ar: 'رصد كل ثانية تأخير', label_en: 'Tracking Every Second of Delay' },
      ]},
      { type: 'h2', ar: 'مشكلة "التخمين" في إدارة المطاعم', en: 'The Problem of "Guessing" in Restaurant Management' },
      { type: 'p', ar: 'بدون نظام قياس دقيق، يلجأ مدير الفرع إلى التخمين: "أشعر أن الذروة بطيئة اليوم" أو "يبدو أن نوبة المساء أسرع من الصباح". هذه الانطباعات قد تكون خاطئة تماماً، ودون بيانات دقيقة، تصبح القرارات التحسينية مبنية على حدس وليس حقائق.', en: 'Without a precise measurement system, branch managers resort to guessing: "I feel like the rush hour is slow today" or "the evening shift seems faster than mornings." These impressions can be completely wrong, and without accurate data, improvement decisions end up based on intuition rather than facts.' },
      { type: 'h2', ar: 'كيف يعمل ZOOM Nitro فعلياً؟', en: 'How Does ZOOM Nitro Actually Work?' },
      { type: 'p', ar: 'يقسّم النظام رحلة السيارة إلى خمس نقاط زمنية: الوصول، الطلب، التحضير، الدفع، والتسليم. كل نقطة تُسجَّل بدقة الثانية، مما يخلق خريطة كاملة لرحلة كل عميل عبر المسار.', en: 'The system divides the car\'s journey into five time checkpoints: arrival, ordering, preparation, payment, and delivery. Each point is recorded to the second, creating a complete map of every customer\'s journey through the lane.' },
      { type: 'quote', ar: '«عندما تعرف بالضبط أين يحدث التأخير، تتحول معالجته من مهمة شبه مستحيلة إلى إجراء بسيط ومباشر.»', en: '"Once you know exactly where the delay happens, fixing it goes from a near-impossible task to a simple, direct action."' },
      { type: 'h2', ar: 'مثال واقعي: أين يضيع الوقت فعلياً؟', en: 'A Real Example: Where Does Time Actually Get Lost?' },
      { type: 'p', ar: 'في كثير من الحالات، يكتشف المديرون أن نقطة "التحضير" وليس "الطلب" هي مصدر التأخير الحقيقي — وهي معلومة لا يمكن معرفتها بدون قياس منفصل لكل مرحلة. بهذه البيانات، يصبح التدريب والتحسين موجّهاً بدقة بدلاً من أن يكون عاماً وغير فعّال.', en: 'In many cases, managers discover that the "preparation" point, not the "ordering" point, is the real source of delay — information that\'s impossible to know without separately measuring each stage. With this data, training and improvement become precisely targeted instead of generic and ineffective.' },
      { type: 'h2', ar: 'من القياس إلى التحفيز', en: 'From Measurement to Motivation' },
      { type: 'p', ar: 'البيانات وحدها لا تكفي إن لم تتحول لفعل. لذلك يرتبط ZOOM Nitro مباشرة بلوحة المتصدرين، فتتحول الأرقام الباردة إلى تحدٍّ يومي يحفّز الفريق على تحسين أدائه بنفسه.', en: 'Data alone isn\'t enough unless it turns into action. That\'s why ZOOM Nitro connects directly to the Leaderboard, turning cold numbers into a daily challenge that motivates the team to improve their own performance.' },
      { type: 'h2', ar: 'الخلاصة', en: 'Conclusion' },
      { type: 'p', ar: 'القياس الدقيق ليس رفاهية تقنية، بل الأساس الذي تُبنى عليه كل قرارات التحسين الحقيقية. بدونه، أنت تخمّن. ومعه، أنت تُدير.', en: 'Precise measurement isn\'t a technical luxury — it\'s the foundation upon which every real improvement decision is built. Without it, you\'re guessing. With it, you\'re managing.' },
    ],
    related: [
      { slug: 'drive-thru', tag_ar: 'Drive-Thru', tag_en: 'Drive-Thru', title_ar: '5 أسباب تجعل نظام Drive-Thru ضرورة', title_en: '5 Reasons Drive-Thru Is a Necessity' },
      { slug: 'leaderboard', tag_ar: 'تحفيز الفرق', tag_en: 'Team Motivation', title_ar: 'علم النفس وراء لوحات المتصدرين', title_en: 'The Psychology Behind Leaderboards' },
      { slug: 'ai-camera', tag_ar: 'الذكاء الاصطناعي', tag_en: 'Artificial Intelligence', title_ar: 'مستقبل الذكاء الاصطناعي في المطاعم السعودية', title_en: 'The Future of AI in Saudi Restaurants' },
    ],
    cta: {
      title_ar: 'جاهز لقياس أداء خدمتك بدقة؟', title_en: 'Ready to Precisely Measure Your Service Performance?',
      desc_ar: 'تعرف على نظام ZOOM Nitro من InfinityTech أو تواصل معنا مباشرة.',
      desc_en: 'Explore InfinityTech\'s ZOOM Nitro system or contact us directly.',
      productSlug: 'zoom-nitro',
    },
  },

  {
    slug: 'leaderboard',
    accent: '#7b2ff7',
    accentGrad: 'linear-gradient(90deg,#7b2ff7,#ff4da6)',
    badgeIcon: '🏆', badge_ar: 'تحفيز الفرق', badge_en: 'Team Motivation',
    title_ar: 'علم النفس وراء لوحات المتصدرين: لماذا تنجح المنافسة؟',
    title_en: 'The Psychology Behind Leaderboards: Why Competition Works',
    date_ar: '📅 5 يوليو 2025', date_en: '📅 July 5, 2025',
    readTime_ar: '⏱ 6 دقائق قراءة', readTime_en: '⏱ 6 min read',
    heroImage: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=1400&q=80',
    body: [
      { type: 'p', ar: 'لماذا يركض الناس أسرع في سباق جماعي مقارنة بركضهم منفردين؟ هذا السؤال البسيط هو جوهر علم نفس المنافسة الاجتماعية، وهو نفس المبدأ الذي يجعل لوحة المتصدرين أداة تحفيزية قوية في بيئة المطعم. الإنسان مبرمج بطبيعته على المقارنة الاجتماعية — وهذا ليس عيباً، بل يمكن توجيهه ليصبح قوة دافعة للتميز.', en: 'Why do people run faster in a group race compared to running alone? This simple question lies at the heart of social competition psychology — the same principle that makes a leaderboard a powerful motivational tool in a restaurant environment. Humans are naturally wired for social comparison, and this isn\'t a flaw — it can be channeled into a driving force for excellence.' },
      { type: 'stats', items: [
        { num: '+22%', label_ar: 'زيادة في الإنتاجية', label_en: 'Productivity Increase' },
        { num: '+18%', label_ar: 'تحسن في سرعة الخدمة', label_en: 'Service Speed Improvement' },
        { num: '100%', label_ar: 'شفافية للجميع', label_en: 'Transparency for All' },
      ]},
      { type: 'h2', ar: 'نظرية المقارنة الاجتماعية في مكان العمل', en: 'Social Comparison Theory in the Workplace' },
      { type: 'p', ar: 'يميل الموظفون بشكل طبيعي لمقارنة أدائهم بزملائهم، سواء أعجبتنا هذه الحقيقة أم لا. المشكلة أن هذه المقارنة تحدث بشكل غير منظّم وغير دقيق في الأحاديث الجانبية. لوحة المتصدرين تحوّل هذه المقارنة الفوضوية إلى معلومة دقيقة وعادلة يراها الجميع.', en: 'Employees naturally tend to compare their performance to colleagues, whether we like this fact or not. The problem is this comparison happens informally and inaccurately in side conversations. A leaderboard turns this chaotic comparison into accurate, fair information everyone can see.' },
      { type: 'h2', ar: 'لماذا تنجح الألعاب التحفيزية (Gamification)؟', en: 'Why Does Gamification Work?' },
      { type: 'p', ar: 'عناصر مثل الميداليات، الترتيب اللحظي، والتقدم المرئي تُفعّل نفس الاستجابة النفسية التي تجعل الألعاب الإلكترونية مسببة للإدمان — لكن هنا نوظفها لخدمة هدف إيجابي: تحسين الأداء الفعلي وليس فقط قضاء الوقت.', en: 'Elements like medals, live ranking, and visible progress trigger the same psychological response that makes video games addictive — but here we channel it toward a positive goal: improving actual performance, not just passing time.' },
      { type: 'quote', ar: '«الموظف الذي يرى اسمه في القمة يريد البقاء هناك. والموظف الذي يرى نفسه في الأسفل يريد التقدم. كلا الدافعين يصبّان في صالح المطعم.»', en: '"An employee who sees their name at the top wants to stay there. An employee who sees themselves at the bottom wants to climb. Both motivations serve the restaurant."' },
      { type: 'h2', ar: 'متى تصبح المنافسة سلبية؟', en: 'When Does Competition Turn Negative?' },
      { type: 'p', ar: 'المنافسة الصحية تحتاج لقواعد واضحة وشفافية كاملة. إن شعر الموظفون أن البيانات غير دقيقة أو أن النظام غير عادل، ينقلب التحفيز إلى إحباط. لذلك يعتمد نظام InfinityTech على بيانات موضوعية مأخوذة مباشرة من أنظمة القياس الفعلية مثل ZOOM Nitro، وليس على تقييمات شخصية.', en: 'Healthy competition requires clear rules and full transparency. If employees feel the data is inaccurate or the system is unfair, motivation turns into frustration. That\'s why InfinityTech\'s system relies on objective data taken directly from actual measurement systems like ZOOM Nitro, not personal evaluations.' },
      { type: 'h2', ar: 'من الفرد إلى الفرع: المنافسة الجماعية', en: 'From Individual to Branch: Group Competition' },
      { type: 'list', items: [
        { ar: 'منافسة الفروع تبني روح الفريق بدلاً من المنافسة الفردية المُجهِدة', en: 'Branch competition builds team spirit instead of draining individual rivalry' },
        { ar: 'الموظف الأبطأ لا يشعر بالحرج الفردي، بل يشعر بمسؤولية جماعية', en: 'A slower employee doesn\'t feel individually embarrassed, but feels collective responsibility' },
        { ar: 'الفرق المتقدمة تتشارك أفضل ممارساتها لرفع مستوى الفروع الأخرى', en: 'Leading teams share best practices to raise other branches\' levels' },
      ]},
      { type: 'h2', ar: 'الخلاصة', en: 'Conclusion' },
      { type: 'p', ar: 'لوحة المتصدرين ليست مجرد شاشة أرقام. إنها أداة نفسية مدروسة تستثمر في غريزة إنسانية أصيلة، وتُحوّلها لمحرك حقيقي لتحسين الأداء، دون زيادة في الرواتب أو التكاليف التشغيلية.', en: 'A leaderboard isn\'t just a screen of numbers. It\'s a deliberate psychological tool that taps into a genuine human instinct and turns it into a real engine for performance improvement, without raising payroll or operational costs.' },
    ],
    related: [
      { slug: 'zoom-nitro', tag_ar: 'مراقبة الأداء', tag_en: 'Performance Monitoring', title_ar: 'ما لا يُقاس لا يُدار: قصة نظام ZOOM Nitro', title_en: 'What Isn\'t Measured Can\'t Be Managed' },
      { slug: 'drive-thru', tag_ar: 'Drive-Thru', tag_en: 'Drive-Thru', title_ar: '5 أسباب تجعل نظام Drive-Thru ضرورة', title_en: '5 Reasons Drive-Thru Is a Necessity' },
      { slug: 'customer-feedback', tag_ar: 'تقييم العملاء', tag_en: 'Customer Feedback', title_ar: 'لماذا يجب أن تستمع لعملائك لحظياً؟', title_en: 'Why Listen to Customers in Real-Time?' },
    ],
    cta: {
      title_ar: 'جاهز لتحفيز فريقك للتميز؟', title_en: 'Ready to Motivate Your Team for Excellence?',
      desc_ar: 'تعرف على نظام لوحة المتصدرين من InfinityTech أو تواصل معنا مباشرة.',
      desc_en: 'Explore InfinityTech\'s Leaderboard system or contact us directly.',
      productSlug: 'leaderboard',
    },
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
