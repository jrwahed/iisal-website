import { createContext, useContext, useState, useCallback, ReactNode } from "react";


type Lang = "en" | "ar";

interface LanguageContextType {
  lang: Lang;
  isAr: boolean;
  toggle: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

const translations: Record<string, Record<Lang, string>> = {
  // ─── Navbar ───
  "nav.about": { en: "About Us", ar: "من نحن" },
  "nav.services": { en: "Services", ar: "الخدمات" },
  "nav.caseStudies": { en: "Results", ar: "النتائج" },
  "nav.process": { en: "Process", ar: "المنهجية" },
  "nav.insights": { en: "Insights", ar: "رؤى" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },
  "nav.solutions": { en: "Solutions", ar: "الحلول" },
  "nav.bookCall": { en: "Book a Call", ar: "احجز مكالمة" },

  // ─── Hero ───
  "hero.badge": { en: "iisal — AI Automation Agency", ar: "إيصال — وكالة أتمتة الذكاء الاصطناعي" },
  "hero.line1": { en: "Your business is leaking", ar: "تخسر شركتك وقتاً،" },
  "hero.line2": { en: "time, leads, and revenue.", ar: "وعملاءً، وإيرادات." },
  "hero.line3": { en: "We build the system that stops it.", ar: "نبني النظام الذي يوقف ذلك." },
  "hero.subtitle": {
    en: "We diagnose inefficiencies across marketing, sales, and operations — then design and build AI-powered systems that eliminate waste and accelerate growth.",
    ar: "نشخّص القصور في التسويق والمبيعات والعمليات،\nونبني أنظمة مدعومة بالذكاء الاصطناعي تقضي على الهدر وتُسرّع النمو."
  },
  "hero.cta1": { en: "Book a 15-min Call", ar: "احجز مكالمة ١٥ دقيقة" },
  "hero.cta2": { en: "See How It Works", ar: "كيف تعمل منهجيتنا" },
  "hero.scroll": { en: "Scroll to Explore", ar: "استكشف المزيد" },

  // ─── About ───
  "about.label": { en: "01 // The Problem", ar: "01 // المشكلة" },
  "about.title1": { en: "COMPANIES", ar: "الشركات" },
  "about.title2": { en: "ARE BROKEN", ar: "تعمل بخلل" },
  "about.p1": {
    en: "Most companies don't have a strategy problem — they have an execution problem. Marketing runs ads, but leads die in spreadsheets. Sales exists, but spends half its time on data entry. Operations run, but no one sees the full picture. The result: wasted budget, missed revenue, and teams that burn out without knowing why.",
    ar: "معظم الشركات لا تعاني من مشكلة استراتيجية — بل من مشكلة تنفيذ. التسويق يُشغّل إعلانات، لكن العملاء المحتملين يضيعون في جداول البيانات. المبيعات موجودة، لكن نصف وقتها يذهب في إدخال بيانات. العمليات تسير، لكن لا أحد يرى الصورة الكاملة. النتيجة: ميزانيات مهدرة، وإيرادات ضائعة، وفرق تحترق دون معرفة السبب."
  },
  "about.p2": {
    en: "iisal is an AI automation agency. We find exactly where the leaks are — then build AI-powered systems that close them permanently.",
    ar: "إيصال وكالة متخصصة في أتمتة الذكاء الاصطناعي. نحدد بدقة مواطن الخلل، ثم نبني أنظمة مدعومة بالذكاء الاصطناعي تُغلقها نهائياً."
  },
  "about.pillar1": { en: "AI-Powered Lead Capture & Follow-up", ar: "استقطاب العملاء ومتابعتهم بالذكاء الاصطناعي" },
  "about.pillar2": { en: "Cross-Team Operations Alignment", ar: "مواءمة العمليات بين الأقسام" },
  "about.pillar3": { en: "Real-Time Decision Dashboards", ar: "لوحات قرارات لحظية" },
  "about.stat1v": { en: "3", ar: "٣" },
  "about.stat1l": { en: "Active Systems Live", ar: "أنظمة تعمل حالياً" },
  "about.stat2v": { en: "12", ar: "١٢" },
  "about.stat2l": { en: "CRM Pipelines Built", ar: "مسار CRM تم بناؤه" },
  "about.stat3v": { en: "<3min", ar: "<٣ دقائق" },
  "about.stat3l": { en: "Avg. Lead Response", ar: "متوسط وقت الاستجابة" },
  "about.stat4v": { en: "24h", ar: "٢٤ ساعة" },
  "about.stat4l": { en: "Auto-Reassignment", ar: "إعادة توزيع تلقائي" },
  "about.accepting": { en: "Accepting New Clients", ar: "نرحب بعملاء جدد" },
  "about.cta": { en: "Get Your System Blueprint", ar: "احصل على مخطط نظامك" },

  // ─── Philosophy ───
  "philosophy.label": { en: "// Our Approach", ar: "// منهجيتنا" },
  "philosophy.wrongTitle": { en: "What most companies do", ar: "ما تفعله معظم الشركات خطأً" },
  "philosophy.wrongSub": { en: "Looks good on paper — breaks everything in practice", ar: "حلول تبدو جيدة على الورق، لكنها تُعقّد الواقع أكثر" },
  "philosophy.w1": { en: "Hire more people instead of fixing the system", ar: "تزيد الموظفين بدلاً من إصلاح النظام" },
  "philosophy.w2": { en: "Stack tools on top of each other with no integration", ar: "تُكدّس الأدوات فوق بعضها دون تكامل" },
  "philosophy.w3": { en: "Automate random tasks with no strategy", ar: "تؤتمت مهاماً عشوائية دون استراتيجية" },
  "philosophy.w4": { en: "Buy dashboards nobody ever opens", ar: "تشتري لوحات بيانات لا يفتحها أحد" },
  "philosophy.wrongFooter": { en: "These are band-aids — not systems.", ar: "هذه حلول مؤقتة — وليست أنظمة." },
  "philosophy.rightTitle": { en: "We build systems that actually work", ar: "نحن نبني أنظمة تعمل فعلاً" },
  "philosophy.rightSub": { en: "Not temporary fixes — a system that grows with you", ar: "ليست حلولاً مؤقتة — نظام يكبر معك" },
  "philosophy.rightHighlight": { en: "systems", ar: "أنظمة" },
  "philosophy.r1": { en: "Identify the real problem", ar: "نحدد المشكلة الحقيقية" },
  "philosophy.r2": { en: "Redesign the flow from scratch", ar: "نُعيد تصميم مسار العمل من البداية" },
  "philosophy.r3": { en: "Automate with precision, not randomness", ar: "نؤتمت بدقة وليس عشوائية" },
  "philosophy.r4": { en: "Deliver a fully working system", ar: "نُسلّم نظاماً يعمل بالكامل" },
  "philosophy.result": { en: "The result: a complete operating system that runs without you", ar: "النتيجة: نظام تشغيل متكامل يعمل باستقلالية تامة" },

  // ─── Services ───
  "services.label": { en: "02 // Our Services", ar: "02 // خدماتنا" },
  "services.title1": { en: "Four systems.", ar: "أربعة أنظمة." },
  "services.title2": { en: "One mission: eliminate chaos.", ar: "مهمة واحدة: القضاء على الفوضى." },
  "services.subtitle": { en: "Each system solves a specific business failure", ar: "كل نظام يحل خللاً تجارياً محدداً" },
  "services.problem": { en: "The Problem", ar: "المشكلة" },
  "services.solution": { en: "The Solution", ar: "الحل" },
  "services.delivers": { en: "What you get", ar: "ما تحصل عليه" },
  "services.duration": { en: "Timeline", ar: "المدة" },
  "services.bookCall": { en: "Book a Call →", ar: "احجز مكالمة ←" },

  "services.s1.title": { en: "AI-Powered Lead Generation", ar: "نظام توليد ومتابعة العملاء" },
  "services.s1.titleEn": { en: "AI-Powered Lead Generation System", ar: "AI-Powered Lead Generation System" },
  "services.s1.problem": { en: "No system for new clients — random outreach, ads with no follow-up. Team wastes time on wrong people and loses ready buyers.", ar: "لا يوجد نظام لتوليد العملاء — تواصل عشوائي، وإعلانات دون متابعة. الفريق يضيع وقته مع غير المناسبين ويفوّت المستعدين للشراء." },
  "services.s1.solution": { en: "We identify your ideal client profile, build AI Agents that gather data, analyze companies, and write messages in your voice. We run the system first, then hand it over completely.", ar: "نحدد ملف عميلك المثالي، ونبني وكلاء ذكاء اصطناعي لجمع البيانات وتحليل الشركات وكتابة رسائل بأسلوبك. نشغّل النظام أولاً ثم نُسلّمه كاملاً." },
  "services.s1.d1": { en: "AI Agents for collecting and organizing target company data", ar: "وكلاء ذكاء اصطناعي لجمع بيانات الشركات المستهدفة وتنظيمها" },
  "services.s1.d2": { en: "AI Agent to analyze each company before outreach", ar: "وكيل ذكاء اصطناعي لتحليل كل شركة قبل التواصل" },
  "services.s1.d3": { en: "AI Agent writing personalized messages in your voice", ar: "وكيل ذكاء اصطناعي لكتابة رسائل مخصصة بأسلوبك" },
  "services.s1.d4": { en: "Smart follow-up system with timing and context", ar: "نظام متابعة ذكي بتوقيت ملائم وسياق دقيق" },
  "services.s1.d5": { en: "Team training + written operations guide", ar: "تدريب الفريق + دليل تشغيل مكتوب" },
  "services.s1.duration": { en: "2–4 weeks", ar: "٢–٤ أسابيع" },

  "services.s2.title": { en: "Marketing & Sales Automation", ar: "أتمتة التسويق والمبيعات" },
  "services.s2.titleEn": { en: "Marketing & Sales Automation", ar: "Marketing & Sales Automation" },
  "services.s2.problem": { en: "Team wastes time on repetitive tasks — emails, data entry, manual follow-ups, reports. Things fall through the cracks.", ar: "الفريق يضيع وقته في مهام متكررة — بريد إلكتروني، إدخال بيانات، متابعات يدوية، تقارير. والأمور تقع في الفراغ." },
  "services.s2.solution": { en: "We identify recurring tasks and build automated workflows from lead entry to conversion — so the team focuses on selling and creating.", ar: "نحدد المهام المتكررة ونبني سير عمل آلياً من أول دخول العميل المحتمل حتى التحويل — ليتفرغ الفريق للبيع والإبداع." },
  "services.s2.d1": { en: "Current process map + waste points identified", ar: "خريطة العمليات الحالية + تحديد نقاط الهدر" },
  "services.s2.d2": { en: "Workflows built on n8n or suitable tools", ar: "سير عمل آلي مبني على n8n أو أدوات مناسبة" },
  "services.s2.d3": { en: "CRM + Email + WhatsApp integration", ar: "تكامل CRM + البريد الإلكتروني + واتساب" },
  "services.s2.d4": { en: "Automated performance reports", ar: "تقارير أداء تلقائية" },
  "services.s2.d5": { en: "Team training + operations guide", ar: "تدريب الفريق + دليل التشغيل" },
  "services.s2.duration": { en: "3–6 weeks", ar: "٣–٦ أسابيع" },

  "services.s3.title": { en: "Operations & Team Alignment", ar: "تنظيم العمليات وربط الأقسام" },
  "services.s3.titleEn": { en: "Operations & Team Alignment", ar: "Operations & Team Alignment" },
  "services.s3.problem": { en: "Every department works in isolation, things fall between the chairs, manager keeps asking 'where is the work?' with no clear answer.", ar: "كل قسم يعمل بمعزل، والمهام تضيع بين الأقسام، والمدير يسأل دائماً 'أين سير العمل؟' دون إجابة واضحة." },
  "services.s3.solution": { en: "We design the full workflow end-to-end — who does what, when, and hands off to whom. We connect departments and clarify ownership and accountability.", ar: "نصمم مسار العمل الكامل من أوله لآخره — من يفعل ماذا، ومتى، ولمن يُسلّم. نربط الأقسام ببعضها ونُوضّح الملكية والمساءلة." },
  "services.s3.d1": { en: "Cross-department workflow map (Process Map)", ar: "خريطة تدفق العمل بين الأقسام (خريطة العمليات)" },
  "services.s3.d2": { en: "Clear role and ownership definitions", ar: "تعريف واضح للأدوار والمسؤوليات" },
  "services.s3.d3": { en: "Daily + Weekly Operating Rhythm", ar: "إيقاع تشغيلي يومي وأسبوعي" },
  "services.s3.d4": { en: "Connected task tracking system", ar: "نظام متابعة مهام مترابط" },
  "services.s3.d5": { en: "Management training + operations guide", ar: "تدريب الإدارة + دليل التشغيل" },
  "services.s3.duration": { en: "4–6 weeks", ar: "٤–٦ أسابيع" },

  "services.s4.title": { en: "Data & Decisions Dashboard", ar: "لوحة البيانات والقرارات" },
  "services.s4.titleEn": { en: "Data & Decisions Dashboard", ar: "Data & Decisions Dashboard" },
  "services.s4.problem": { en: "Data scattered across Excel, sheets, and different platforms. Manager makes decisions by guesswork, not numbers.", ar: "البيانات مبعثرة في Excel وجداول ومنصات متعددة، والمدير يتخذ قراراته بالتخمين لا بالأرقام." },
  "services.s4.solution": { en: "We consolidate all data into one Dashboard showing the full picture in real-time — what's working, what's not, where money goes, and where the opportunity is.", ar: "نجمع جميع البيانات في لوحة واحدة تعرض الصورة الكاملة لحظياً — ما يعمل وما لا يعمل، وأين تذهب الأموال، وأين تكمن الفرصة." },
  "services.s4.d1": { en: "Dashboard connected to real data sources", ar: "لوحة بيانات متصلة بمصادر البيانات الحقيقية" },
  "services.s4.d2": { en: "Clear agreed-upon KPIs", ar: "مؤشرات أداء رئيسية واضحة ومتفق عليها" },
  "services.s4.d3": { en: "Automated reports (daily / weekly)", ar: "تقارير تلقائية (يومية / أسبوعية)" },
  "services.s4.d4": { en: "Management training on reading and decision-making", ar: "تدريب الإدارة على قراءة البيانات واتخاذ القرار" },
  "services.s4.d5": { en: "Operations and maintenance guide", ar: "دليل التشغيل والصيانة" },
  "services.s4.duration": { en: "2–4 weeks", ar: "٢–٤ أسابيع" },

  // ─── Industries ───
  "industries.label": { en: "// Industries", ar: "// القطاعات" },
  "industries.title": { en: "Built for", ar: "مصمم لـ" },
  "industries.titleHighlight": { en: "your industry", ar: "قطاعك" },
  "industries.1": { en: "Real Estate", ar: "العقارات" },
  "industries.2": { en: "Trade & Manufacturing", ar: "التجارة والتصنيع" },
  "industries.3": { en: "Marketing Agencies", ar: "وكالات التسويق" },
  "industries.4": { en: "Law Firms", ar: "المكاتب القانونية" },
  "industries.5": { en: "Finance & Accounting", ar: "المالية والمحاسبة" },
  "industries.6": { en: "Healthcare", ar: "الرعاية الصحية" },
  "industries.7": { en: "E-Commerce", ar: "التجارة الإلكترونية" },
  "industries.8": { en: "SaaS & Technology", ar: "البرمجيات والتقنية" },

  // ─── Case Studies ───
  "cases.label": { en: "03 // Proven Results", ar: "03 // نتائج مثبتة" },
  "cases.title1": { en: "SYSTEMS", ar: "أنظمة" },
  "cases.title2": { en: "THAT DELIVER", ar: "تحقق نتائج" },
  "cases.subtitle": {
    en: "Real systems built for real companies — with measurable outcomes.",
    ar: "أنظمة حقيقية بُنيت لشركات حقيقية — بنتائج قابلة للقياس."
  },
  "cases.problemLabel": { en: "The Problem", ar: "المشكلة" },
  "cases.solutionLabel": { en: "The Solution", ar: "الحل" },
  "cases.c1.tag": { en: "AI Lead Management — Real Estate", ar: "إدارة العملاء بالذكاء الاصطناعي — عقارات" },
  "cases.c1.title": {
    en: "From dead spreadsheets to a 3-minute response system",
    ar: "من جداول بيانات جامدة إلى نظام استجابة في ٣ دقائق"
  },
  "cases.c1.problem": {
    en: "A real estate company spending EGP 50,000/month on ads. Leads landed in a spreadsheet — some waited 4 days without any contact. Budget burned, zero conversion.",
    ar: "شركة عقارية تنفق ٥٠,٠٠٠ جنيه شهرياً على الإعلانات. العملاء المحتملون يدخلون جدول بيانات — بعضهم ينتظر ٤ أيام دون أي تواصل. ميزانية تحترق، وتحويل يساوي الصفر."
  },
  "cases.c1.solution": {
    en: "Built Sky Leads — an AI system that captures leads instantly, classifies them by intent, assigns to the right salesperson, and auto-reassigns if no response within 24 hours.",
    ar: "بنينا نظام Sky Leads — نظام ذكاء اصطناعي يستقبل العملاء فوراً، يصنّفهم حسب نية الشراء، يوزعهم على مندوب المبيعات المناسب، ويُعيد التوزيع تلقائياً إن لم يحدث رد خلال ٢٤ ساعة."
  },
  "cases.c1.r1l": { en: "Response Time", ar: "وقت الاستجابة" },
  "cases.c1.r1v": { en: "<3 min", ar: "<٣ دقائق" },
  "cases.c1.r2l": { en: "CRM Pipelines", ar: "مسارات CRM" },
  "cases.c1.r2v": { en: "12", ar: "١٢" },
  "cases.c1.r3l": { en: "Active Companies", ar: "شركات نشطة" },
  "cases.c1.r3v": { en: "3", ar: "٣" },
  "cases.c1.r4l": { en: "Auto-Reassignment", ar: "إعادة توزيع تلقائي" },
  "cases.c1.r4v": { en: "24h", ar: "٢٤ ساعة" },

  "cases.c2.tag": { en: "AI Outreach — Business Development", ar: "التواصل بالذكاء الاصطناعي — تطوير الأعمال" },
  "cases.c2.title": {
    en: "20 personalized outreach messages per hour — zero team, zero budget",
    ar: "٢٠ رسالة تواصل مخصصة في الساعة — دون فريق ودون ميزانية"
  },
  "cases.c2.problem": {
    en: "No advertising budget. No sales team. Needed to reach decision-makers in a specific sector with limited resources.",
    ar: "لا ميزانية إعلانية. لا فريق مبيعات. الحاجة إلى الوصول لصانعي القرار في قطاع محدد بموارد محدودة."
  },
  "cases.c2.solution": {
    en: "Built an AI-powered workflow: define the sector, AI scrapes and enriches company data, analyzes fit, and drafts a personalized message in the client's voice. Every message reviewed before sending.",
    ar: "بنينا سير عمل مدعوم بالذكاء الاصطناعي: تحديد القطاع، جمع بيانات الشركات وإثرائها، تحليل الملاءمة، وصياغة رسالة مخصصة بأسلوب العميل. كل رسالة تُراجع قبل الإرسال."
  },
  "cases.c2.r1l": { en: "Messages/Hour", ar: "رسائل/ساعة" },
  "cases.c2.r1v": { en: "20", ar: "٢٠" },
  "cases.c2.r2l": { en: "Cost", ar: "التكلفة" },
  "cases.c2.r2v": { en: "$0", ar: "$0" },
  "cases.c2.r3l": { en: "Each Message", ar: "كل رسالة" },
  "cases.c2.r3v": { en: "Custom", ar: "مخصصة" },
  "cases.c2.r4l": { en: "Human Oversight", ar: "إشراف بشري" },
  "cases.c2.r4v": { en: "100%", ar: "١٠٠٪" },

  "cases.c3.tag": { en: "Content Operations — Marketing", ar: "عمليات المحتوى — التسويق" },
  "cases.c3.title": { en: "From reactive chaos to a 3x faster content machine", ar: "من فوضى رد الفعل إلى منظومة محتوى أسرع ثلاث مرات" },
  "cases.c3.problem": { en: "The team worked in full reactive mode — no unified vision, no stable production system, no consistency in voice or messaging. Every piece of content started from scratch.", ar: "كان الفريق يعمل في وضع رد الفعل الكامل — لا رؤية موحدة، ولا نظام إنتاج ثابت، ولا اتساق في الأسلوب أو الرسائل. كل قطعة محتوى كانت تبدأ من الصفر." },
  "cases.c3.solution": { en: "Rebuilt the entire content operation: designed a Brand Messaging System (voice, tone, templates), built a weekly Content Operating Cycle, and deployed 3 AI layers — AI Strategist, AI Content Creator, and an AI Design System.", ar: "أعدنا بناء منظومة المحتوى بالكامل: نظام رسائل الهوية (الأسلوب، النبرة، القوالب)، دورة تشغيل أسبوعية، وثلاث طبقات ذكاء اصطناعي — استراتيجي، ومنشئ محتوى، ونظام تصميم آلي." },
  "cases.c3.r1l": { en: "Production Speed", ar: "سرعة الإنتاج" },
  "cases.c3.r1v": { en: "3x", ar: "3x" },
  "cases.c3.r2l": { en: "Brand Consistency", ar: "اتساق الهوية" },
  "cases.c3.r2v": { en: "95%", ar: "95%" },
  "cases.c3.r3l": { en: "Manual Effort", ar: "تقليل الجهد اليدوي" },
  "cases.c3.r3v": { en: "-70%", ar: "70%-" },
  "cases.c3.r4l": { en: "System", ar: "النظام" },
  "cases.c3.r4v": { en: "Always On", ar: "يعمل دائماً" },

  "cases.c4.tag": { en: "Lead Generation — B2B Outreach", ar: "توليد العملاء — B2B" },
  "cases.c4.title": { en: "20 personalized outreach messages per hour — zero team, zero budget", ar: "٢٠ رسالة تواصل مخصصة في الساعة — دون فريق ودون ميزانية" },
  "cases.c4.problem": { en: "No advertising budget. No sales team. Needed to reach decision-makers in a specific sector with no resources.", ar: "لا ميزانية إعلانية. لا فريق مبيعات. الحاجة إلى الوصول لصانعي القرار في قطاع محدد دون موارد." },
  "cases.c4.solution": { en: "Built an AI-powered outreach workflow: define the sector, AI scrapes and enriches company data, analyzes fit, then drafts a fully personalized message in the client's voice. Every message reviewed before sending. Zero cost, full control.", ar: "بنينا سير عمل للتواصل مدعوم بالذكاء الاصطناعي: تحديد القطاع، جمع بيانات الشركات وإثرائها، تحليل الملاءمة، وصياغة رسالة مخصصة بالكامل. كل رسالة تُراجع قبل الإرسال. صفر تكلفة، سيطرة كاملة." },
  "cases.c4.r1l": { en: "Messages/Hour", ar: "رسائل/ساعة" },
  "cases.c4.r1v": { en: "20", ar: "٢٠" },
  "cases.c4.r2l": { en: "Cost", ar: "التكلفة" },
  "cases.c4.r2v": { en: "$0", ar: "$0" },
  "cases.c4.r3l": { en: "Personalization", ar: "التخصيص" },
  "cases.c4.r3v": { en: "100%", ar: "١٠٠٪" },
  "cases.c4.r4l": { en: "Human Oversight", ar: "الإشراف البشري" },
  "cases.c4.r4v": { en: "Full", ar: "كامل" },

  "cases.c5.tag": { en: "Team Operations — Internal OS", ar: "عمليات الفريق — نظام تشغيل داخلي" },
  "cases.c5.title": { en: "Full visibility into who is doing what — without a single extra hire", ar: "رؤية كاملة لمن يفعل ماذا — دون أي توظيف جديد" },
  "cases.c5.problem": { en: "Follow-up depended entirely on 'where is the work?' conversations. The manager had no visibility into the full picture. Ownership was unclear across all departments.", ar: "كانت المتابعة تعتمد كلياً على سؤال 'أين سير العمل؟'. لم يكن المدير يرى الصورة الكاملة. والملكية غير واضحة في جميع الأقسام." },
  "cases.c5.solution": { en: "Built an internal Operating System: clear task and follow-up rules, a Daily + Weekly Operating Rhythm, a real-time performance dashboard, and an AI Assistant that collects each team member's daily output automatically.", ar: "بنينا نظام تشغيل داخلياً متكاملاً: قواعد مهام وإجراءات متابعة واضحة، وإيقاع تشغيلي يومي وأسبوعي، ولوحة أداء لحظية، ومساعد ذكاء اصطناعي يجمع مخرجات كل عضو في الفريق يومياً تلقائياً." },
  "cases.c5.r1l": { en: "Decision Speed", ar: "سرعة القرار" },
  "cases.c5.r1v": { en: "+60%", ar: "+٦٠٪" },
  "cases.c5.r2l": { en: "Meeting Time", ar: "وقت الاجتماعات" },
  "cases.c5.r2v": { en: "-50%", ar: "-٥٠٪" },
  "cases.c5.r3l": { en: "Ownership Clarity", ar: "وضوح المسؤولية" },
  "cases.c5.r3v": { en: "100%", ar: "١٠٠٪" },
  "cases.c5.r4l": { en: "New Hires Needed", ar: "توظيف جديد" },
  "cases.c5.r4v": { en: "0", ar: "صفر" },

  "cases.c6.tag": { en: "Talent Acquisition — HR System", ar: "اكتساب الكفاءات — نظام الموارد البشرية" },
  "cases.c6.title": { en: "Hiring time cut from 7 days to 24 hours with a structured evaluation model", ar: "تقليص وقت التوظيف من ٧ أيام إلى ٢٤ ساعة بنموذج تقييم منهجي" },
  "cases.c6.problem": { en: "Candidate selection was based entirely on personal impressions. No consistent framework. Hiring took too long and quality was unpredictable.", ar: "كان اختيار المرشحين يعتمد كلياً على الانطباعات الشخصية. لا إطار ثابت. والتوظيف كان بطيئاً وغير متوقع الجودة." },
  "cases.c6.solution": { en: "Designed a full hiring system: built a Competency Matrix and Score Framework, created a standardized measurable interview template, and deployed AI Screening that reads CVs and scores them against the model — plus automatic interview scheduling.", ar: "صممنا نظام توظيف متكاملاً: مصفوفة الكفاءات وإطار التقييم، ونموذج مقابلة موحد وقابل للقياس، ونظام فرز ذكي يقرأ السير الذاتية ويقيّمها تلقائياً — مع جدولة المقابلات تلقائياً." },
  "cases.c6.r1l": { en: "Time to Hire", ar: "وقت التوظيف" },
  "cases.c6.r1v": { en: "24h", ar: "٢٤ ساعة" },
  "cases.c6.r2l": { en: "Previously", ar: "كان سابقاً" },
  "cases.c6.r2v": { en: "7 days", ar: "٧ أيام" },
  "cases.c6.r3l": { en: "Selection Quality", ar: "جودة الاختيار" },
  "cases.c6.r3v": { en: "+85%", ar: "+٨٥٪" },
  "cases.c6.r4l": { en: "Process", ar: "العملية" },
  "cases.c6.r4v": { en: "Automated", ar: "آلية" },

  "cases.c7.tag": { en: "Financial Intelligence — Operations", ar: "الذكاء المالي — العمليات" },
  "cases.c7.title": { en: "Real-time financial visibility — from manual entry to instant tactical decisions", ar: "رؤية مالية لحظية — من الإدخال اليدوي إلى قرارات تكتيكية فورية" },
  "cases.c7.problem": { en: "The goal was never faster data entry — it was real-time tactical financial visibility. The team had no live view of cash flow, invoices, or performance.", ar: "لم يكن الهدف سرعة إدخال البيانات، بل الرؤية المالية التكتيكية اللحظية. لم يكن لدى الفريق أي رؤية حية للتدفق النقدي أو الأداء." },
  "cases.c7.solution": { en: "Built an automated financial intelligence layer: AI extracts, classifies, and analyzes financial data automatically, feeding a live Executive Financial Dashboard that gives decision-makers instant visibility into every critical metric.", ar: "بنينا طبقة ذكاء مالي آلية: استخراج وتصنيف وتحليل تلقائي للبيانات المالية، تُغذّي لوحة مالية تنفيذية لحظية تمنح صانعي القرار رؤية فورية لكل مؤشر حيوي." },
  "cases.c7.r1l": { en: "Decision Speed", ar: "سرعة القرار" },
  "cases.c7.r1v": { en: "Real-time", ar: "لحظي" },
  "cases.c7.r2l": { en: "Team Time Saved", ar: "وقت الفريق الموفَّر" },
  "cases.c7.r2v": { en: "75%", ar: "٧٥٪" },
  "cases.c7.r3l": { en: "Data Accuracy", ar: "دقة البيانات" },
  "cases.c7.r3v": { en: "99%", ar: "٩٩٪" },
  "cases.c7.r4l": { en: "Manual Work", ar: "العمل اليدوي" },
  "cases.c7.r4v": { en: "Near Zero", ar: "شبه معدوم" },

  "cases.cta": { en: "Ready for results like these?", ar: "هل أنت مستعد لنتائج كهذه؟" },
  "cases.ctaBtn": { en: "Book a Strategy Call", ar: "احجز مكالمة استراتيجية" },

  // ─── Process ───
  "process.label": { en: "04 // Process", ar: "04 // المنهجية" },
  "process.title1": { en: "HOW WE", ar: "كيف" },
  "process.title2": { en: "BUILD SYSTEMS", ar: "نبني الأنظمة" },
  "process.subtitle": {
    en: "Five phases — from diagnosis to a fully operational system with trained team.",
    ar: "خمس مراحل — من التشخيص إلى نظام تشغيلي متكامل مع فريق مدرَّب."
  },
  "process.s1.label": { en: "Listen & Observe", ar: "الاستماع والمراقبة" },
  "process.s1.desc": { en: "We enter your business and understand how it actually operates. No assumptions — only observed reality.", ar: "ندخل بيئة عملك ونفهم كيف تعمل فعلياً. لا افتراضات — الواقع المُلاحظ فقط." },
  "process.s2.label": { en: "Find the Bottleneck", ar: "تحديد نقطة الاختناق" },
  "process.s2.desc": { en: "We map every workflow and identify exactly where time, money, and leads are being lost.", ar: "نرسم كل مسار عمل ونحدد بدقة أين يضيع الوقت والمال والعملاء." },
  "process.s3.label": { en: "Design the System", ar: "تصميم النظام" },
  "process.s3.desc": { en: "We architect a custom system — not a template. Every business gets a unique solution.", ar: "نُصمّم نظاماً مخصصاً — وليس قالباً جاهزاً. كل شركة تحصل على حل فريد." },
  "process.s4.label": { en: "Build & Test", ar: "البناء والاختبار" },
  "process.s4.desc": { en: "We build and test the system before deployment — ensuring it works in production.", ar: "نبني النظام ونختبره قبل النشر — لضمان عمله في البيئة الحقيقية." },
  "process.s5.label": { en: "Launch & Scale", ar: "الإطلاق والتوسّع" },
  "process.s5.desc": { en: "We hand over the complete system with team training, documentation, and ongoing support.", ar: "نُسلّم النظام كاملاً مع تدريب الفريق والتوثيق والدعم المستمر." },
  "process.cta": { en: "Start Your System Build", ar: "ابدأ بناء نظامك" },

  // ─── Blog ───
  "blog.label": { en: "05 // Insights", ar: "05 // رؤى" },
  "blog.title1": { en: "THINKING", ar: "أفكار حول" },
  "blog.title2": { en: "IN SYSTEMS", ar: "بناء الأنظمة" },
  "blog.subtitle": { en: "Strategy, AI, and operational thinking", ar: "استراتيجية، ذكاء اصطناعي، وتفكير تشغيلي" },
  "blog.readArticle": { en: "Read Article", ar: "اقرأ المقال" },
  "blog.p1.title": {
    en: "Why 70% of leads die before anyone contacts them",
    ar: "لماذا يضيع ٧٠٪ من العملاء المحتملين قبل أن يتواصل معهم أحد"
  },
  "blog.p1.excerpt": {
    en: "The problem isn't your ads. It's what happens after someone clicks. Most leads enter a spreadsheet and are never contacted again.",
    ar: "المشكلة ليست في إعلاناتك. إنها فيما يحدث بعد النقر. معظم العملاء يدخلون جدول بيانات ولا يُتواصل معهم مجدداً."
  },
  "blog.p2.title": {
    en: "AI is not magic — AI is a mirror",
    ar: "الذكاء الاصطناعي ليس سحراً — إنه مرآة"
  },
  "blog.p2.excerpt": {
    en: "If your operations are chaos, AI will scale the chaos. Fix the system first, then layer in intelligence.",
    ar: "إن كانت عملياتك فوضى، فالذكاء الاصطناعي سيُضاعف تلك الفوضى. أصلح النظام أولاً، ثم أضف طبقة الذكاء."
  },
  "blog.p3.title": {
    en: "Your company is running — but running wrong",
    ar: "شركتك تعمل — لكنها تعمل بشكل خاطئ"
  },
  "blog.p3.excerpt": {
    en: "Ads are live. Sales team exists. But leads leak, handoffs fail, and nobody knows what's working. Sound familiar?",
    ar: "الإعلانات تعمل. فريق المبيعات موجود. لكن العملاء يتسرّبون، وعمليات التسليم تفشل، ولا أحد يعرف ما الذي ينجح."
  },
  "blog.p4.title": {
    en: "One workflow that saves 4 hours every day",
    ar: "سير عمل واحد يوفّر ٤ ساعات يومياً"
  },
  "blog.p4.excerpt": {
    en: "How we built an AI-powered cold outreach system using Claude and n8n — and the real, measurable results it delivered.",
    ar: "كيف بنينا نظام تواصل بارد مدعوم بالذكاء الاصطناعي باستخدام Claude وn8n — والنتائج الحقيقية القابلة للقياس."
  },

  // ─── Contact ───
  "contact.label": { en: "06 // Get Started", ar: "06 // ابدأ الآن" },
  "contact.title1": { en: "READY TO", ar: "هل أنت مستعد" },
  "contact.title2": { en: "BUILD YOUR SYSTEM?", ar: "لبناء نظامك؟" },
  "contact.desc": {
    en: "Tell us about your business in 15 minutes. We'll identify your biggest operational leak and outline a system to fix it.",
    ar: "أخبرنا عن شركتك في ١٥ دقيقة. سنحدد أكبر تسريب تشغيلي لديك ونرسم مخطط النظام الكفيل بإصلاحه."
  },
  "contact.availability": { en: "Availability", ar: "التوفر" },
  "contact.availabilityValue": { en: "Accepting projects — Egypt & Gulf", ar: "نقبل مشاريع جديدة — مصر والخليج" },
  "contact.engagement": { en: "Typical Timeline", ar: "الجدول الزمني المعتاد" },
  "contact.engagementValue": { en: "2–10 week system build", ar: "بناء نظام خلال ٢–١٠ أسابيع" },
  "contact.whatsapp": { en: "Message us on WhatsApp", ar: "راسلنا على واتساب" },
  "contact.formTitle": { en: "Book a Strategy Call", ar: "احجز مكالمة استراتيجية" },
  "contact.name": { en: "Full Name", ar: "الاسم الكامل" },
  "contact.namePlaceholder": { en: "Your name", ar: "اسمك" },
  "contact.email": { en: "Email", ar: "البريد الإلكتروني" },
  "contact.emailPlaceholder": { en: "you@company.com", ar: "you@company.com" },
  "contact.company": { en: "Company", ar: "الشركة" },
  "contact.companyPlaceholder": { en: "Company name", ar: "اسم الشركة" },
  "contact.message": { en: "What's your biggest challenge?", ar: "ما أكبر تحدٍّ تواجهه؟" },
  "contact.messagePlaceholder": {
    en: "Describe your current situation — what's working and what's not.",
    ar: "صف وضعك الحالي — ما الذي يعمل وما الذي لا يعمل."
  },
  "contact.submit": { en: "BOOK YOUR CALL", ar: "احجز مكالمتك" },
  "contact.submitted": { en: "REQUEST SENT", ar: "تم الإرسال" },

  // ─── Solutions Page ───
  "sol.heroLabel": { en: "// Industry Solutions", ar: "// حلول القطاعات" },
  "sol.heroTitle1": { en: "Your business is bleeding", ar: "تخسر شركتك أموالاً" },
  "sol.heroTitle2": { en: "money right now.", ar: "الآن." },
  "sol.heroDesc": {
    en: "We build the exact dashboard and automation system that stops it — for your industry, your team, your numbers.",
    ar: "نبني النظام ولوحة البيانات بالضبط التي توقف هذا الاستنزاف — لقطاعك، ولفريقك، ولأرقامك."
  },
  "sol.selectIndustry": { en: "Select your industry", ar: "اختر قطاعك" },
  "sol.problem": { en: "The Problem", ar: "المشكلة" },
  "sol.solution": { en: "The Solution", ar: "الحل" },
  "sol.kpis": { en: "Dashboard KPIs", ar: "مؤشرات الأداء" },
  "sol.automations": { en: "Automations", ar: "الأتمتة" },
  "sol.automationsCount": { en: "automations", ar: "أتمتة" },
  "sol.results": { en: "Expected Results", ar: "النتائج المتوقعة" },
  "sol.cta": { en: "Get This System for My Company", ar: "أريد هذا النظام لشركتي" },
  "sol.viewCase": { en: "View Full Details", ar: "عرض التفاصيل الكاملة" },
  "sol.viewFullCase": { en: "View Full Case Study", ar: "عرض دراسة الحالة" },
  "sol.bottomTitle1": { en: "Don't see your industry?", ar: "لا ترى قطاعك؟" },
  "sol.bottomTitle2": { en: "We'll design a custom system.", ar: "سنصمم نظاماً مخصصاً لك." },
  "sol.bottomDesc": {
    en: "Every company has unique challenges. Let's discuss yours and find the right system.",
    ar: "لكل شركة تحديات فريدة. دعنا نناقش تحدياتك ونجد النظام الأنسب."
  },
  "sol.bottomCta": { en: "Book a Strategy Call", ar: "احجز مكالمة استراتيجية" },
  "sol.backHome": { en: "Back to Home", ar: "العودة للرئيسية" },
  "sol.priority.highest": { en: "Highest Impact", ar: "أعلى تأثير" },
  "sol.priority.high": { en: "High Impact", ar: "تأثير عالٍ" },
  "sol.priority.medium": { en: "Growing Demand", ar: "طلب متزايد" },

  // ─── Solutions Page NEW ───
  "sol.beforeTitle": { en: "Before", ar: "قبل" },
  "sol.afterTitle": { en: "After our system", ar: "بعد نظامنا" },
  "sol.weBuild": { en: "We build this →", ar: "← نحن نبني هذا" },
  "sol.roiTitle": { en: "Calculate what this is costing you right now", ar: "احسب ما يكلفك غياب هذا النظام الآن" },
  "sol.roiEmployees": { en: "Employees doing manual reports", ar: "عدد الموظفين الذين يعدّون تقارير يدوية" },
  "sol.roiSalary": { en: "Average monthly salary (EGP)", ar: "متوسط الراتب الشهري (بالجنيه المصري)" },
  "sol.roiWaste": { en: "You're losing {amount} EGP/month on work that can be automated", ar: "تخسر {amount} جنيه/شهر على عمل يمكن أتمتته" },
  "sol.roiDays": { en: "= {days} work days wasted every month", ar: "= {days} يوم عمل مهدر كل شهر" },
  "sol.roiTimeline": { en: "Our system fixes this in 2–4 weeks", ar: "نظامنا يحل هذا خلال ٢–٤ أسابيع" },
  "sol.roiCta": { en: "I want to save this time →", ar: "أريد توفير هذا الوقت ←" },
  "sol.stickyReady": { en: "Ready to build a system for", ar: "مستعد لبناء نظام لـ" },
  "sol.stickyQuestion": { en: "?", ar: "؟" },
  "sol.badge.mostPopular": { en: "Most Popular", ar: "الأكثر طلباً" },
  "sol.badge.highestRoi": { en: "Highest ROI", ar: "أعلى عائد على الاستثمار" },
  "sol.badge.fastestResults": { en: "Fastest Results", ar: "أسرع نتائج" },
  "sol.painTicker.1": { en: "Marketing agencies spend 8 hours/week on manual reports", ar: "وكالات التسويق تُهدر ٨ ساعات أسبوعياً في إعداد تقارير يدوية" },
  "sol.painTicker.2": { en: "Real estate leads wait 4 days without contact", ar: "عملاء العقارات ينتظرون ٤ أيام دون تواصل" },
  "sol.painTicker.3": { en: "E-commerce owners make decisions with 3-day-old data", ar: "أصحاب التجارة الإلكترونية يتخذون قرارات بناءً على بيانات عمرها ٣ أيام" },
  "sol.painTicker.4": { en: "SaaS founders spend 4 hours/week collecting numbers manually", ar: "مؤسسو SaaS يُمضون ٤ ساعات أسبوعياً في جمع الأرقام يدوياً" },
  "sol.painTicker.5": { en: "Restaurant owners don't know which branch is losing money", ar: "أصحاب المطاعم لا يعرفون أي فرع يخسر" },

  // ─── Footer ───
  "footer.seo": {
    en: "iisal — AI Automation Agency — AI Growth Systems — Lead Generation — Marketing Automation — Sales Automation — Operations — Business Intelligence Dashboards — AI Agents — Egypt — Gulf",
    ar: "إيصال — وكالة أتمتة الذكاء الاصطناعي — أنظمة نمو — توليد عملاء — أتمتة تسويق — أتمتة مبيعات — عمليات — لوحات ذكاء الأعمال — وكلاء ذكاء اصطناعي — مصر — الخليج"
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const t = useCallback(
    (key: string) => translations[key]?.[lang] ?? key,
    [lang]
  );

  const isAr = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, isAr, toggle, t }}>
      <div dir={isAr ? "rtl" : "ltr"} className={isAr ? "font-arabic" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
