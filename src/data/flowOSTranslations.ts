type Lang = "en" | "ar";

const fl: Record<string, Record<Lang, string>> = {
  // ─── Hero ───
  "hero.badge": {
    en: "iisal — AI CRM & Automation Platform",
    ar: "إيصال — منصة الذكاء الاصطناعي للـ CRM والأتمتة",
  },
  "hero.line1": { en: "Your business is bleeding", ar: "شركتك تخسر عملاء محتملين،" },
  "hero.line2": { en: "leads, time, and money.", ar: "وقتاً، وأموالاً." },
  "hero.line3": { en: "iisal stops it — automatically.", ar: "إيصال تُوقف ذلك — تلقائياً." },
  "hero.subtitle": {
    en: "One AI-powered platform that captures every lead, runs your CRM, automates your follow-ups, and gives you a live dashboard to see everything — built for any company with an active sales and marketing team in Egypt & Gulf.",
    ar: "منصة واحدة مدعومة بالذكاء الاصطناعي تستقطب كل العملاء المحتملين وتُدير نظام CRM وتُؤتمت المتابعة وتمنحك لوحة تحكم مباشرة لمشاهدة كل شيء — مصممة لأي شركة لديها فريق مبيعات وتسويق نشط في مصر والخليج.",
  },
  "hero.cta1": { en: "See Pricing & Demo →", ar: "اطّلع على الأسعار والعرض ←" },
  "hero.cta2": { en: "Who Built This? →", ar: "من بنى هذا؟ ←" },
  "hero.urgency": {
    en: "⚡ Referral deal: bring a company → get 20% off your plan",
    ar: "⚡ عرض الإحالة: أحضر شركة ← احصل على خصم ٢٠٪ على اشتراكك",
  },
  "hero.pipe1": { en: "New Lead", ar: "عميل محتمل جديد" },
  "hero.pipe2": { en: "AI Score", ar: "تقييم الذكاء الاصطناعي" },
  "hero.pipe3": { en: "Assign", ar: "توزيع" },
  "hero.pipe4": { en: "Follow Up", ar: "متابعة" },
  "hero.pipe5": { en: "Meeting", ar: "اجتماع" },
  "hero.pipe6": { en: "Deal Closed", ar: "صفقة مُغلقة" },
  "hero.stat1v": { en: "3", ar: "٣" },
  "hero.stat1l": { en: "Industries Served", ar: "صناعات" },
  "hero.stat2v": { en: "50+", ar: "+٥٠" },
  "hero.stat2l": { en: "Companies Live", ar: "شركة نشطة" },
  "hero.stat3v": { en: "12,000+", ar: "+١٢,٠٠٠" },
  "hero.stat3l": { en: "Monthly Leads Processed", ar: "عميل محتمل شهرياً" },
  "hero.stat4v": { en: "<3 min", ar: "<٣ دقائق" },
  "hero.stat4l": { en: "Avg Lead Response", ar: "متوسط وقت الاستجابة" },

  // ─── Problem ───
  "problem.label": { en: "// The Problem", ar: "// المشكلة" },
  "problem.title": { en: "Every business has the same problem.", ar: "كل شركة تواجه المشكلة ذاتها." },
  "problem.subtitle": {
    en: "Leads come in from 10 different places. Nobody follows up fast enough. Management can't see what's happening. Money burns with no results.",
    ar: "يأتي العملاء المحتملون من ١٠ أماكن مختلفة. لا أحد يرد بسرعة كافية. الإدارة لا ترى ما يحدث. الأموال تُهدَر دون نتائج.",
  },
  "problem.1.title": { en: "Leads scattered everywhere", ar: "العملاء المحتملون مبعثرون في كل مكان" },
  "problem.1.desc": {
    en: "Facebook. Google. WhatsApp. OLX. Phone. Walk-in. Each lead in a different place. Your sales team can't keep up — and the ones they reach, they forget the rest.",
    ar: "فيسبوك. جوجل. واتساب. أوليكس. هاتف. كل عميل محتمل في مكان مختلف. فريق المبيعات لا يستطيع المواكبة — ومن يتواصلون معه، ينسون الباقي.",
  },
  "problem.2.title": { en: "Leads go cold in minutes", ar: "العملاء المحتملون يبردون في دقائق" },
  "problem.2.desc": {
    en: "A lead you contact in the first 3 minutes is 10x more likely to convert. Without automation, your team simply can't move that fast.",
    ar: "العميل المحتمل الذي تتواصل معه في أول ٣ دقائق يُرجَّح أن يتحول للشراء بمقدار ١٠ أضعاف. دون أتمتة، لن يستطيع فريقك التحرك بهذه السرعة.",
  },
  "problem.3.title": { en: "Budget burning with no visibility", ar: "الميزانية تُهدَر دون رؤية" },
  "problem.3.desc": {
    en: "You spend 50K on ads. How many leads came? Did they convert? Which campaign worked? Nobody knows. Decisions are guesswork.",
    ar: "تُنفق ٥٠ ألفاً على الإعلانات. كم عميلاً محتملاً جاء؟ هل تحولوا؟ أي حملة نجحت؟ لا أحد يعرف. القرارات تُبنى على التخمين.",
  },
  "problem.4.title": { en: "Can't tell buyers from browsers", ar: "لا تستطيع التمييز بين المشترين والمتصفحين" },
  "problem.4.desc": {
    en: "Your team treats a serious buyer the same as someone just browsing. No scoring, no priorities. Time wasted on the wrong people.",
    ar: "يتعامل فريقك مع المشتري الجاد كما يتعامل مع المتصفح العادي. لا تقييم ولا أولويات. وقت مهدور مع الأشخاص غير المناسبين.",
  },
  "problem.5.title": { en: "Management flying blind", ar: "الإدارة تعمل بشكل أعمى" },
  "problem.5.desc": {
    en: "The owner asks 'how many deals this month?' and the answer takes two days. No dashboard, no real-time numbers, no visibility.",
    ar: "يسأل صاحب الشركة 'كم صفقة هذا الشهر؟' والإجابة تستغرق يومين. لا لوحة تحكم ولا أرقام فورية ولا رؤية.",
  },

  // ─── Solution ───
  "solution.label": { en: "// The Solution", ar: "// الحل" },
  "solution.title": { en: "One platform. Everything connected.", ar: "منصة واحدة. كل شيء متصل." },
  "solution.hub": { en: "iisal", ar: "إيصال" },
  "solution.hubSub": { en: "AI Core", ar: "AI Core" },
  "solution.pill1": { en: "🏢 Real Estate", ar: "🏢 العقارات" },
  "solution.pill2": { en: "🚗 Car Dealerships", ar: "🚗 معارض السيارات" },
  "solution.pill3": { en: "📢 Marketing Agencies", ar: "📢 وكالات التسويق" },

  // ─── Automation ───
  "auto.label": { en: "// Automation — How It Works", ar: "// الأتمتة — كيف تعمل" },
  "auto.title": {
    en: "From Facebook click to sales call — in under 3 minutes.",
    ar: "من النقر على فيسبوك إلى مكالمة المبيعات — في أقل من ٣ دقائق.",
  },
  "auto.1.title": { en: "Lead clicks your Facebook ad", ar: "يضغط العميل المحتمل على إعلانك في فيسبوك" },
  "auto.1.desc": {
    en: "Whether it's a Lead Form ad, Messenger ad, or website form — the moment they submit, iisal captures it automatically. No manual copy-paste. No delays. The lead lands in the system in seconds.",
    ar: "سواء أكان إعلان Lead Form أو Messenger أو نموذجاً على الموقع — في اللحظة التي يُرسل فيها، تلتقطه iisal تلقائياً. لا نسخ يدوي. لا تأخير. يدخل العميل المحتمل إلى النظام في ثوانٍ.",
  },
  "auto.1.proof": { en: "✓ Captured automatically by iisal", ar: "✓ تم الاستقطاب تلقائياً بواسطة iisal" },
  "auto.2.title": { en: "AI scores and classifies the lead instantly", ar: "يُقيّم الذكاء الاصطناعي ويُصنّف العميل المحتمل فوراً" },
  "auto.2.desc": {
    en: "iisal AI analyzes every new lead in real-time: Where did they come from? What did they click on? What's their likely budget? Have they inquired before? In seconds, they're classified as Hot, Warm, or Cold — with a score from 1-100.",
    ar: "يُحلل ذكاء iisal كل عميل محتمل جديد في الحال: من أين جاء؟ ما الذي نقر عليه؟ ما الميزانية المحتملة؟ هل استفسر من قبل؟ في ثوانٍ، يُصنَّف كـ ساخن أو فاتر أو بارد — بدرجة من ١ إلى ١٠٠.",
  },
  "auto.2.proof": { en: "✓ AI Classified in 1.2s", ar: "✓ صنّفه الذكاء الاصطناعي في ١.٢ ثانية" },
  "auto.3.title": { en: "Auto-assigned to the right salesperson", ar: "يُوزَّع تلقائياً على المندوب المناسب" },
  "auto.3.desc": {
    en: "Based on score, area, product interest, and current workload — iisal assigns the lead to the best available salesperson automatically. No manager intervention needed. The salesperson gets an instant WhatsApp notification.",
    ar: "بناءً على الدرجة والمنطقة والمنتج وعبء العمل الحالي — تُوزّع iisal العميل المحتمل على أفضل مندوب متاح تلقائياً. دون تدخل المدير. يتلقى المندوب إشعاراً فورياً عبر واتساب.",
  },
  "auto.4.title": { en: "Instant WhatsApp notification + follow-up sequence", ar: "إشعار واتساب فوري + سلسلة متابعة" },
  "auto.4.desc": {
    en: "The moment a lead is assigned, two things happen: 1. The salesperson gets a WhatsApp message with the lead's full details. 2. An automated follow-up sequence starts — SMS, WhatsApp, email — timed perfectly over 7 days if no response.",
    ar: "في اللحظة التي يُوزَّع فيها العميل المحتمل، يحدث أمران: ١. يتلقى المندوب رسالة واتساب بكامل تفاصيل العميل. ٢. تبدأ سلسلة متابعة آلية — SMS وواتساب وبريد إلكتروني — مُوقّتة بدقة على مدار ٧ أيام في حال عدم الرد.",
  },
  "auto.5.title": { en: "Every interaction logged automatically", ar: "يُسجَّل كل تفاعل تلقائياً" },
  "auto.5.desc": {
    en: "Called but no answer? Logged. Sent WhatsApp? Logged. Had a meeting? Logged. All activity automatically tracked — no manual data entry. The CRM updates itself.",
    ar: "اتصلت ولم يردّ؟ مُسجَّل. أرسلت واتساب؟ مُسجَّل. أجريت اجتماعاً؟ مُسجَّل. يُتتبَّع كل نشاط تلقائياً — دون إدخال يدوي للبيانات. يُحدّث نظام CRM نفسه.",
  },

  // ─── Dashboard ───
  "dash.label": { en: "// The Dashboard", ar: "// لوحة التحكم" },
  "dash.title": { en: "Everything you need to know — in one screen.", ar: "كل ما تحتاج معرفته — في شاشة واحدة." },
  "dash.subtitle": {
    en: "No more asking your team for updates. Open iisal and see every number, live.",
    ar: "لا حاجة بعد الآن لسؤال فريقك عن المستجدات. افتح iisal وشاهد كل رقم، مباشرةً.",
  },
  "dash.feat1.title": { en: "Live campaign ROI", ar: "عائد الحملات الإعلانية مباشرةً" },
  "dash.feat1.desc": { en: "See which ad EGP goes to real deals — not just clicks", ar: "انظر إلى أي جنيه إعلاني يذهب إلى صفقات حقيقية — لا مجرد نقرات" },
  "dash.feat2.title": { en: "Team performance", ar: "أداء الفريق" },
  "dash.feat2.desc": { en: "Who closes most, who needs training, who's overloaded", ar: "من يُغلق أكثر الصفقات، ومن يحتاج تدريباً، ومن يعاني من زيادة العبء" },
  "dash.feat3.title": { en: "Lead funnel health", ar: "صحة مسار العملاء المحتملين" },
  "dash.feat3.desc": { en: "See exactly where leads drop off and why", ar: "انظر بدقة أين يتسرب العملاء المحتملون ولماذا" },
  "dash.feat4.title": { en: "Automated alerts", ar: "تنبيهات آلية" },
  "dash.feat4.desc": { en: "Get notified when a KPI drops below threshold", ar: "استلم تنبيهاً عندما ينخفض أي مؤشر أداء عن الحد المقرر" },

  // ─── CRM ───
  "crm.label": { en: "// The CRM", ar: "// نظام CRM" },
  "crm.title": { en: "Not just a contacts list. A sales brain.", ar: "ليس مجرد قائمة جهات اتصال. إنه عقل المبيعات." },
  "crm.f1": { en: "Full lead history — every call, message, meeting logged", ar: "سجل كامل للعميل المحتمل — كل مكالمة ورسالة واجتماع مُسجَّل" },
  "crm.f2": { en: "One-click WhatsApp to any lead", ar: "مراسلة أي عميل محتمل عبر واتساب بنقرة واحدة" },
  "crm.f3": { en: "Stage drag-and-drop pipeline", ar: "خط أعمال بتقنية السحب والإفلات" },
  "crm.f4": { en: "Duplicate lead detection", ar: "اكتشاف العملاء المحتملين المكررين" },
  "crm.f5": { en: "Works on mobile — sell from anywhere", ar: "يعمل على الهاتف المحمول — بيع من أي مكان" },

  // ─── AI Scoring ───
  "score.label": { en: "// AI Lead Scoring", ar: "// تقييم العملاء المحتملين بالذكاء الاصطناعي" },
  "score.title1": { en: "iisal AI scores every lead — so your team", ar: "يُقيّم ذكاء iisal كل عميل محتمل — حتى يتمكن فريقك من" },
  "score.title2": { en: "calls the right person first.", ar: "التواصل مع الشخص المناسب أولاً." },
  "score.factor1": { en: "Source Quality", ar: "جودة المصدر" },
  "score.factor1.desc": { en: "Facebook Lead Form > Google Form > OLX > Walk-in", ar: "Facebook Lead Form > Google Form > OLX > Walk-in" },
  "score.factor2": { en: "Engagement Level", ar: "مستوى التفاعل" },
  "score.factor2.desc": { en: "Clicked multiple ads, visited website 3 times", ar: "نقر على أكثر من إعلان وزار الموقع ٣ مرات" },
  "score.factor3": { en: "Budget Signal", ar: "مؤشر الميزانية" },
  "score.factor3.desc": { en: "Filled budget field, mortgage inquiry", ar: "ملأ حقل الميزانية واستفسر عن التمويل" },
  "score.factor4": { en: "Response Speed", ar: "سرعة الاستجابة" },
  "score.factor4.desc": { en: "Responded to first message quickly", ar: "ردّ على أول رسالة بسرعة" },
  "score.factor5": { en: "Previous Interaction", ar: "تفاعل سابق" },
  "score.factor5.desc": { en: "First time inquiry", ar: "استفساره الأول" },
  "score.hot": { en: "Ready to buy. Call within 3 minutes. Top priority.", ar: "مستعد للشراء. اتصل خلال ٣ دقائق. أولوية قصوى." },
  "score.warm": { en: "Interested. Needs nurturing. Schedule a follow-up.", ar: "مهتم. يحتاج إلى رعاية. حدد موعداً للمتابعة." },
  "score.cold": { en: "Browsing. Add to automated sequence. Don't waste sales time.", ar: "يستعرض فقط. أضفه إلى سلسلة آلية. لا تُهدر وقت فريق المبيعات." },

  // ─── FlowMind ───
  "mind.label": { en: "// FlowMind — AI Assistant", ar: "// FlowMind — المساعد الذكي" },
  "mind.title": { en: "Your AI business consultant — available 24/7.", ar: "مستشارك التجاري بالذكاء الاصطناعي — متاح على مدار الساعة." },
  "mind.subtitle": {
    en: "Ask FlowMind anything about your business. It knows your data, your leads, your campaigns — and gives you real answers, not generic advice.",
    ar: "اسأل FlowMind أي سؤال عن عملك. يعرف بياناتك وعملاءك المحتملين وحملاتك — ويمنحك إجابات حقيقية، لا نصائح عامة.",
  },
  "mind.cap1": { en: "Ask in Arabic or English", ar: "اسأله بالعربية أو الإنجليزية" },
  "mind.cap2": { en: "Knows your actual business data", ar: "يعرف بياناتك الفعلية" },
  "mind.cap3": { en: "Spots trends before you do", ar: "يرصد الاتجاهات قبلك" },
  "mind.cap4": { en: "Actionable recommendations — not generic advice", ar: "توصيات قابلة للتنفيذ — لا نصائح عامة" },

  // ─── Reports ───
  "report.label": { en: "// Reports", ar: "// التقارير" },
  "report.title": { en: "Every report you need — automated.", ar: "كل تقرير تحتاجه — آلياً." },
  "report.1.title": { en: "Campaign ROI Report", ar: "تقرير عائد الحملات الإعلانية" },
  "report.1.desc": { en: "Cost per lead per campaign, conversion rate, actual revenue per ad pound", ar: "تكلفة العميل المحتمل لكل حملة ومعدل التحويل والإيراد الفعلي لكل جنيه إعلاني" },
  "report.1.freq": { en: "Daily auto-send", ar: "يومي آلي" },
  "report.2.title": { en: "Sales Team Performance", ar: "أداء فريق المبيعات" },
  "report.2.desc": { en: "Each rep's response time, conversion rate, deals closed, pipeline value", ar: "وقت رد كل مندوب ومعدل تحويله والصفقات المُغلقة وقيمة خط الأعمال" },
  "report.2.freq": { en: "Weekly", ar: "أسبوعي" },
  "report.3.title": { en: "Lead Source Analysis", ar: "تحليل مصادر العملاء المحتملين" },
  "report.3.desc": { en: "Which source brings the most valuable leads, not just the most leads", ar: "أي مصدر يجلب العملاء المحتملين الأعلى جودة، لا الأكثر عدداً فحسب" },
  "report.3.freq": { en: "Monthly", ar: "شهري" },
  "report.4.title": { en: "Response Time Report", ar: "تقرير وقت الاستجابة" },
  "report.4.desc": { en: "How fast each lead was contacted, impact on conversion", ar: "عدد الثواني حتى التواصل مع كل عميل محتمل وتأثيره على معدل التحويل" },
  "report.4.freq": { en: "Real-time", ar: "لحظي" },
  "report.5.title": { en: "Revenue & Pipeline Report", ar: "تقرير الإيراد وخط الأعمال" },
  "report.5.desc": { en: "Total pipeline value, expected closings, actual revenue this month", ar: "إجمالي قيمة خط الأعمال والإغلاقات المتوقعة والإيراد الفعلي هذا الشهر" },
  "report.5.freq": { en: "Live", ar: "مباشر" },
  "report.6.title": { en: "AI Insights Report", ar: "تقرير رؤى الذكاء الاصطناعي" },
  "report.6.desc": { en: "AI-generated weekly analysis: what changed, why, and what to do next week", ar: "تحليل أسبوعي من الذكاء الاصطناعي: ما الذي تغيّر ولماذا وما ينبغي فعله الأسبوع القادم" },
  "report.6.freq": { en: "Weekly AI-generated", ar: "أسبوعي من الذكاء الاصطناعي" },

  // ─── Industries ───
  "ind.label": { en: "// Examples", ar: "// أمثلة" },
  "ind.title": { en: "Works for any industry. Here's where we've proven it.", ar: "تعمل مع أي صناعة. وهذا ما أثبتناه." },
  "ind.subtitle": {
    en: "These are examples of industries where iisal is already running — but the platform adapts to any business that has leads, a sales team, and needs visibility.",
    ar: "هذه أمثلة على صناعات تعمل فيها iisal فعلاً — لكن المنصة تتكيف مع أي شركة لديها عملاء محتملون وفريق مبيعات وتحتاج إلى رؤية.",
  },
  "ind.re.title": { en: "Real Estate", ar: "العقارات" },
  "ind.re.sub": { en: "Built and proven in the Egyptian real estate market", ar: "مبنية ومُثبَتة في السوق العقاري المصري" },
  "ind.re.f1": { en: "Facebook & Google lead auto-capture", ar: "استقطاب عملاء فيسبوك وجوجل المحتملين تلقائياً" },
  "ind.re.f2": { en: "12 CRM pipeline stages", ar: "١٢ مرحلة في خط أعمال CRM" },
  "ind.re.f3": { en: "Auto-reassignment in 24h", ar: "إعادة توزيع تلقائية في ٢٤ ساعة" },
  "ind.re.f4": { en: "Project & unit tracking", ar: "تتبع المشاريع والوحدات" },
  "ind.re.f5": { en: "Developer & broker dashboards", ar: "لوحات تحكم للمطور والوسيط" },
  "ind.re.proof": { en: "3 active companies • <3min response time", ar: "٣ شركات نشطة • متوسط وقت الاستجابة أقل من ٣ دقائق" },
  "ind.re.cta": { en: "See Real Estate System →", ar: "اطّلع على نظام العقارات ←" },

  "ind.car.title": { en: "Car Dealerships", ar: "معارض السيارات" },
  "ind.car.sub": { en: "50+ dealerships. 12,000+ monthly inquiries", ar: "أكثر من ٥٠ معرضاً. أكثر من ١٢,٠٠٠ استفسار شهري" },
  "ind.car.f1": { en: "OLX, Hatla2ee, ContactCars integration", ar: "تكامل مع OLX وحتلاقي وContactCars" },
  "ind.car.f2": { en: "Inventory management", ar: "إدارة المخزون" },
  "ind.car.f3": { en: "Trade-in system", ar: "نظام الاستبدال" },
  "ind.car.f4": { en: "Financing & mortgage tracking", ar: "تتبع التمويل والقروض" },
  "ind.car.f5": { en: "Multi-branch support", ar: "دعم الفروع المتعددة" },
  "ind.car.proof": { en: "50+ dealerships • 40% lower CPL", ar: "أكثر من ٥٠ معرضاً • انخفاض ٤٠٪ في تكلفة العميل المحتمل" },
  "ind.car.cta": { en: "See Dealership System →", ar: "اطّلع على نظام المعارض ←" },

  "ind.agency.title": { en: "Marketing Agencies", ar: "وكالات التسويق" },
  "ind.agency.sub": { en: "Run all your clients from one platform", ar: "أدِر جميع عملاءك من منصة واحدة" },
  "ind.agency.f1": { en: "Multi-client dashboard", ar: "لوحة تحكم متعددة العملاء" },
  "ind.agency.f2": { en: "Automated client reports", ar: "تقارير عملاء آلية" },
  "ind.agency.f3": { en: "Campaign performance tracking", ar: "تتبع أداء الحملات" },
  "ind.agency.f4": { en: "White-label option", ar: "خيار White-label" },
  "ind.agency.f5": { en: "Team performance by client", ar: "أداء الفريق لكل عميل" },
  "ind.agency.proof": { en: "85% less manual reporting time", ar: "٨٥٪ توفير في وقت إعداد التقارير اليدوية" },

  // ─── Pricing ───
  "price.label": { en: "// Pricing & Offer", ar: "// الأسعار والعرض" },
  "price.title": { en: "Simple pricing. Serious results.", ar: "سعر بسيط. نتائج حقيقية." },
  "price.urgency.title": {
    en: "Limited Launch Offer — 10 spots left this month",
    ar: "عرض الإطلاق المحدود — ١٠ أماكن متبقية هذا الشهر",
  },
  "price.urgency.sub": {
    en: "First 10 companies get 30% off first 3 months",
    ar: "تحصل أول ١٠ شركات على خصم ٣٠٪ للأشهر الثلاثة الأولى",
  },
  "price.spotsLeft": { en: "spots left", ar: "مكان متبقٍ" },

  "price.starter.name": { en: "Starter", ar: "ابدأ" },
  "price.starter.price": { en: "Contact Us", ar: "تواصل معنا" },
  "price.starter.desc": { en: "For small teams starting out", ar: "للفرق الصغيرة في مرحلة البداية" },
  "price.starter.f1": { en: "Up to 200 leads/month", ar: "حتى ٢٠٠ عميل محتمل/شهر" },
  "price.starter.f2": { en: "1-3 users", ar: "١-٣ مستخدمين" },
  "price.starter.f3": { en: "Smart CRM", ar: "CRM ذكي" },
  "price.starter.f4": { en: "Basic dashboard", ar: "لوحة تحكم أساسية" },
  "price.starter.f5": { en: "WhatsApp integration", ar: "تكامل واتساب" },
  "price.starter.cta": { en: "Book a Call", ar: "احجز مكالمة" },

  "price.pro.name": { en: "Professional", ar: "احترافي" },
  "price.pro.price": { en: "Contact Us", ar: "تواصل معنا" },
  "price.pro.desc": { en: "For growing companies with 3-15 salespeople", ar: "للشركات النامية بفرق من ٣ إلى ١٥ مندوباً" },
  "price.pro.f1": { en: "Unlimited leads", ar: "عملاء محتملون غير محدودين" },
  "price.pro.f2": { en: "Up to 15 users", ar: "حتى ١٥ مستخدماً" },
  "price.pro.f3": { en: "All CRM features", ar: "جميع ميزات نظام CRM" },
  "price.pro.f4": { en: "Live dashboard", ar: "لوحة تحكم مباشرة" },
  "price.pro.f5": { en: "AI lead scoring", ar: "تقييم العملاء المحتملين بالذكاء الاصطناعي" },
  "price.pro.f6": { en: "Auto follow-up", ar: "متابعة آلية" },
  "price.pro.f7": { en: "Campaign analytics", ar: "تحليلات الحملات" },
  "price.pro.f8": { en: "FlowMind AI", ar: "FlowMind AI" },
  "price.pro.f9": { en: "Dedicated account manager", ar: "مدير حساب مخصص" },
  "price.pro.cta": { en: "Book a Call + See Demo", ar: "احجز مكالمة + اطّلع على العرض" },
  "price.popular": { en: "Most Popular", ar: "الأكثر طلباً" },

  "price.ent.name": { en: "Enterprise", ar: "المؤسسات" },
  "price.ent.price": { en: "Custom", ar: "مخصص" },
  "price.ent.desc": { en: "Multi-branch, large teams, custom dev", ar: "فروع متعددة، فرق كبيرة، تطوير مخصص" },
  "price.ent.f1": { en: "Everything in Professional", ar: "جميع ميزات الباقة الاحترافية" },
  "price.ent.f2": { en: "Unlimited users", ar: "مستخدمون غير محدودين" },
  "price.ent.f3": { en: "Multi-branch support", ar: "دعم الفروع المتعددة" },
  "price.ent.f4": { en: "Custom development", ar: "تطوير مخصص" },
  "price.ent.f5": { en: "Priority support", ar: "أولوية في الدعم الفني" },
  "price.ent.f6": { en: "White-label option", ar: "خيار White-label" },
  "price.ent.cta": { en: "Let's Talk", ar: "تواصل معنا" },

  "price.referral.title": { en: "Refer a Company → Get 20% Off", ar: "أحضر شركة ← احصل على خصم ٢٠٪" },
  "price.referral.desc": {
    en: "Know a business that would benefit from iisal? Refer them and get 20% off your next month. They get 10% off their first month too.",
    ar: "هل تعرف شركة ستستفيد من iisal؟ قدّمها وستحصل على خصم ٢٠٪ على شهرك القادم. وستحصل هي على خصم ١٠٪ على شهرها الأول.",
  },
  "price.referral.cta": { en: "Send a Referral →", ar: "أرسل إحالة ←" },

  // ─── Final CTA ───
  "cta.title": { en: "Your competitors are already using AI.", ar: "منافسوك يستخدمون الذكاء الاصطناعي الآن." },
  "cta.subtitle": {
    en: "Whether you're in real estate, automotive, services, or any field — every day without a system is leads lost, budget burned, and deals missed.",
    ar: "سواء في العقارات أو السيارات أو الخدمات أو أي مجال — كل يوم بلا نظام يعني عملاء محتملون ضائعون وميزانية مُهدَرة وصفقات فائتة.",
  },
  "cta.btn1": { en: "See Pricing & Book a Demo →", ar: "اطّلع على الأسعار واحجز عرضاً ←" },
  "cta.btn2": { en: "About iisal & Our Services →", ar: "تعرّف على إيصال وخدماتنا ←" },
  "cta.trust1": { en: "No commitment", ar: "دون التزام" },
  "cta.trust2": { en: "30-min free call", ar: "مكالمة مجانية مدتها ٣٠ دقيقة" },
  "cta.trust3": { en: "Results in 30 days", ar: "نتائج خلال ٣٠ يوماً" },

  // ─── New CTA Section (replaces pricing) ───
  "newcta.urgency": {
    en: "Limited spots — 10 companies this month",
    ar: "أماكن محدودة — ١٠ شركات هذا الشهر",
  },
  "newcta.headline1": { en: "Stop guessing.", ar: "توقف عن التخمين." },
  "newcta.headline2": { en: "Start closing deals.", ar: "ابدأ في إتمام الصفقات." },
  "newcta.sub": {
    en: "Book a free 30-minute call. We'll analyze your current situation and show you exactly how iisal will change your results.",
    ar: "احجز مكالمة مجانية لمدة ٣٠ دقيقة. سنحلل وضعك الحالي ونوضح لك بدقة كيف ستُغيّر iisal نتائجك.",
  },
  "newcta.referral": {
    en: "🤝 Refer a company → You get 20% off, they get 10% off",
    ar: "🤝 أحضر شركة ← تحصل على خصم ٢٠٪ وتحصل هي على ١٠٪",
  },
  "newcta.btn1": { en: "See Pricing & Book a Demo →", ar: "اطّلع على الأسعار واحجز عرضاً ←" },
  "newcta.btn2": { en: "About iisal & Our Services →", ar: "تعرّف على إيصال وخدماتنا ←" },
  "newcta.trust1": { en: "No commitment", ar: "دون أي التزام" },
  "newcta.trust2": { en: "30 min free call", ar: "مكالمة مجانية ٣٠ دقيقة" },
  "newcta.trust3": { en: "Results in 30 days", ar: "نتائج خلال ٣٠ يوماً" },

  // ─── More Capabilities (Task Intelligence + Competitor Intelligence) ───
  "feat2.label": { en: "// More Capabilities", ar: "// قدرات إضافية" },
  "feat2.headline1": { en: "iisal doesn't stop at leads.", ar: "iisal لا تقف عند العملاء المحتملين." },
  "feat2.headline2": { en: "It runs your entire operation.", ar: "تُدير عمليات شركتك بالكامل." },
  "feat2.subtitle": {
    en: "Two modules that change how your team works and how you see your competition — every single day.",
    ar: "وحدتان تُغيّران طريقة عمل فريقك ورؤيتك للمنافسين — كل يوم.",
  },

  // Card 1 — Task Intelligence
  "feat2.task.tag": { en: "Team Operating System", ar: "نظام تشغيل الفريق" },
  "feat2.task.h1": { en: "Your team. Fully visible.", ar: "فريقك. واضح بالكامل." },
  "feat2.task.h2": { en: "Every day. No meetings needed.", ar: "كل يوم. دون اجتماعات." },
  "feat2.task.desc": {
    en: "Every morning, each team member opens iisal and logs their tasks for the day. n8n automation receives the input, enters it into the system, and the AI assigns priorities and distributes overloaded tasks automatically.\n\nEvery evening, they log what they actually did. The AI analyzes the gap, scores their productivity, and surfaces insights — who needs support, who's overloaded, what's blocking progress.\n\nThe manager wakes up to a full team intelligence report. No chasing. No guessing.",
    ar: "كل صباح، يفتح كل عضو في الفريق iisal ويُسجّل مهامه لذلك اليوم. تستلم أتمتة n8n المدخلات وتُدخلها في النظام، ويُحدد الذكاء الاصطناعي الأولويات ويُعيد توزيع المهام الزائدة تلقائياً.\n\nكل مساء، يُسجّلون ما أنجزوه فعلاً. يُحلل الذكاء الاصطناعي الفجوة ويمنح كل عضو تقييماً للأداء ويستخرج رؤى — من يحتاج دعماً، ومن يعاني من زيادة العبء، وما الذي يُعيق التقدم.\n\nيستيقظ المدير على تقرير استخباراتي كامل عن الفريق. دون متابعة. دون تخمين.",
  },
  "feat2.task.b1": { en: "Morning task log via n8n automation", ar: "تسجيل مهام الصباح عبر أتمتة n8n" },
  "feat2.task.b2": { en: "AI auto-assigns & redistributes overloaded tasks", ar: "الذكاء الاصطناعي يُوزّع ويُعيد توزيع المهام الزائدة تلقائياً" },
  "feat2.task.b3": { en: "Evening AI performance scoring per member", ar: "تقييم أداء مسائي بالذكاء الاصطناعي لكل عضو" },
  "feat2.task.b4": { en: "Manager dashboard: full team visibility daily", ar: "لوحة تحكم المدير: رؤية كاملة للفريق يومياً" },

  // Card 2 — Competitor Intelligence
  "feat2.comp.tag": { en: "Competitor Intelligence", ar: "استخبارات المنافسين" },
  "feat2.comp.h1": { en: "Know your competition", ar: "اعرف منافسيك" },
  "feat2.comp.h2": { en: "before they make their move.", ar: "قبل أن يتحركوا." },
  "feat2.comp.desc": {
    en: "iisal automation runs 24/7 collecting competitor data — their ads, content, offers, pricing, and market positioning. The AI analyzes every change, maps the competitive landscape visually, and delivers a weekly intelligence report with one clear answer: where is your opportunity to win?\n\nNo manual research. No guessing. Pure data-driven competitive advantage.",
    ar: "تعمل أتمتة iisal على مدار الساعة لجمع بيانات المنافسين — إعلاناتهم ومحتواهم وعروضهم وأسعارهم وتموضعهم في السوق. يُحلل الذكاء الاصطناعي كل تغيير ويرسم خريطة بصرية للمشهد التنافسي ويُقدّم تقريراً استخباراتياً أسبوعياً بإجابة واحدة واضحة: أين تكمن فرصتك للفوز؟\n\nلا بحث يدوي. لا تخمين. ميزة تنافسية مبنية على بيانات حقيقية.",
  },
  "feat2.comp.b1": { en: "Automated daily competitor data collection", ar: "جمع بيانات المنافسين يومياً بالأتمتة" },
  "feat2.comp.b2": { en: "AI-powered competitive landscape mapping", ar: "رسم خريطة المشهد التنافسي بالذكاء الاصطناعي" },
  "feat2.comp.b3": { en: "Weekly intelligence report with attack opportunities", ar: "تقرير استخباراتي أسبوعي بفرص الهجوم التنافسي" },
  "feat2.comp.b4": { en: "Real-time alerts when competitors change strategy", ar: "تنبيهات فورية عند تغيير المنافس لاستراتيجيته" },
};

export default fl;

export function useFlowOST(lang: "en" | "ar") {
  return (key: string): string => {
    const entry = fl[key];
    if (!entry) return key;
    return entry[lang] || entry.en || key;
  };
}
