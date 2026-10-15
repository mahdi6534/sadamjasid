export const PHONE_DISPLAY = "0502076285";
export const PHONE_INTL = "+966502076285";
export const WHATSAPP_BASE = "https://wa.me/966502076285";
export const FRESHA_URL =
  "https://www.fresha.com/ar/a/dorh-spa-home-services-riyadh-home-business-dammam-rd-al-yarmuk-riyadh-13251-saudi-arabia-hbmh8w2q";

export interface ServiceItem {
  label: string;
  free?: boolean;
}

export interface SpaPackage {
  id: string;
  name: string;
  tagline: string;
  services: ServiceItem[];
  giftFeature: string;
  price: number;
  oldPrice: number;
  image: string;
  badge?: string;
  duration?: string;
}

export const waLink = (pkgName: string, recipient: "والدي" | "زوجي" | "أخوي") =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(
    `مرحباً درة سبا، أود إهداء «${pkgName}» لـ${recipient} مع خدمة الوصول الخاص بخصوصية تامة. ممكن تفاصيل الحجز؟`,
  )}`;

export const waGeneral = (who?: "father" | "husband" | "brother") => {
  const msg =
    who === "father"
      ? "مرحباً درة سبا، أود الاستفسار عن باقات إهداء الوالد وتفاصيل الخصوصية عند الوصول."
      : who === "husband"
        ? "مرحباً درة سبا، أود الاستفسار عن باقات إهداء الزوج وتفاصيل الخصوصية عند الوصول."
        : who === "brother"
          ? "مرحباً درة سبا، أود الاستفسار عن باقات إهداء الأخ (سندي وعضيدي) وتفاصيل الخصوصية عند الوصول."
          : "مرحباً درة سبا، أود الاستفسار عن باقات الإهداء وخدمة السبا المنزلي.";
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
};

/* ===== باقات الوالد (5 باقات) — صور ملائمة 100% للرجال والآباء السعوديين ===== */
export const fatherPackages: SpaPackage[] = [
  {
    id: "intiaash",
    name: "باقة انتعاش",
    tagline: "استرخاء متكامل يعيد له طاقته ويخفّف إجهاد السنين",
    image: "/gifts/images/moroccan.jpg",
    services: [
      { label: "مساج ريلاكس استرخائي بأيدي خبير إندونيسي" },
      { label: "حمام مغربي بالأعشاب الطبيعية (+10 آلاف عميل)" },
      { label: "جاكوزي أقدام عشبي", free: true },
      { label: "كمادات عيون مريحة", free: true },
    ],
    giftFeature:
      "مزيج الحمام المغربي العشبي مع المساج يمنحه أقصى درجات الاسترخاء وتنشيط الدورة الدموية لكبار السن.",
    price: 349,
    oldPrice: 557,
    badge: "الأكثر إهداءً للآباء",
  },
  {
    id: "lamsa",
    name: "باقة لمسة",
    tagline: "عناية فائقة تليق به.. من الرأس حتى أطراف القدمين",
    image: "/gifts/images/test.jpeg",
    services: [
      { label: "مساج سيجنتشر علاجي لفكّ عضلات الظهر" },
      { label: "بديكير علاجي خفيف لليدين والقدمين" },
      { label: "ماسك طبيعي للوجه", free: true },
      { label: "كمادات عيون مهدئة", free: true },
      { label: "جاكوزي أقدام عشبي", free: true },
    ],
    giftFeature:
      "العناية بالقدمين واليدين (البديكير) تمنحه شعوراً استثنائياً بالخفة والراحة التي يفتقدها.",
    price: 409,
    oldPrice: 593,
  },
  {
    id: "abhar",
    name: "باقة تعب الأبهر",
    tagline: "مصممة خصيصاً لتخفيف آلام الظهر والأكتاف المزعجة",
    image:
      "https://images.pexels.com/photos/8312866/pexels-photo-8312866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    services: [
      { label: "مساج تايلندي علاجي مركز للظهر" },
      { label: "كاسات هواء طبية متخصصة للأبهر" },
      { label: "جاكوزي أقدام مهدئ", free: true },
      { label: "ماسك وجه مرطب", free: true },
      { label: "كمادات عيون", free: true },
    ],
    giftFeature:
      "استهداف مباشر وعلاجي لمنطقة «الأبهر» المجهدة، ليعود لمنزله براحة جسدية تامة.",
    price: 209,
    oldPrice: 405,
    badge: "لآلام الظهر والكتفين",
  },
  {
    id: "hudoa",
    name: "باقة هدوء",
    tagline: "صفاء ذهني وعناية فاخرة بعيداً عن صخب الحياة",
    image: "/gifts/images/moroccan.jpg",
    services: [
      { label: "بديكير متكامل لليدين والقدمين" },
      { label: "حمام مغربي أصيل بالأعشاب" },
      { label: "جاكوزي أقدام عشبي", free: true },
      { label: "ماسك مغذٍ للوجه", free: true },
    ],
    giftFeature:
      "باقة متوازنة تجمع بين النظافة العميقة والتدليل الشخصي بعيداً عن صخب الحياة.",
    price: 398,
    oldPrice: 514,
  },
  {
    id: "aasab",
    name: "باقة تعب الأعصاب",
    tagline: "لمن يعاني من الإرهاق المستمر وتراكم التوتر",
    image: "/gifts/images/therapist-gloves.jpg",
    services: [
      { label: "مساج دقيق لليدين لتفريغ التوتر (25 دقيقة)" },
      { label: "مساج رفلكسولوجي للقدمين (25 دقيقة)" },
      { label: "مقشر طبيعي للوجه والرقبة" },
      { label: "جاكوزي أقدام دافئ" },
    ],
    giftFeature:
      "تركيز مكثف على مسارات الأعصاب في الأطراف لتفريغ التوتر العصبي المتراكم.",
    price: 199,
    oldPrice: 319,
  },
];

/* ===== باقات الزوج (6 باقات) — صور ملائمة 100% للرجال والأزواج السعوديين ===== */
export const husbandPackages: SpaPackage[] = [
  {
    id: "vip",
    name: "باقة درة سبا VIP",
    tagline:
      "الهدية الأسطورية لذكرى الزواج والمناسبات الكبرى — 3 ساعات دلال ملكي",
    image: "/gifts/images/vip.jpg",
    services: [
      { label: "مساج VIP فاخر وشامل (90 دقيقة)" },
      { label: "حمام ملكي فاخر بالأعشاب" },
      { label: "بديكير عناية لليدين والقدمين" },
      { label: "تنظيف بشرة رجالي عميق" },
      { label: "كاسات هواء لتنشيط الدورة الدموية" },
      { label: "جاكوزي أقدام مهدئ", free: true },
      { label: "كمادات عيون بالورد", free: true },
    ],
    giftFeature:
      "تجربة الملوك المتكاملة — ستكون الهدية التي لن يتوقف عن شكرك عليها أبداً.",
    price: 749,
    oldPrice: 1087,
    badge: "تجربة الملوك",
    duration: "3 ساعات كاملة",
  },
  {
    id: "daght",
    name: "باقة ضغط الحياة",
    tagline: "مثالية لإنهاء أسبوع عمل شاق وإذابة التوتر العضلي",
    image: "/gifts/images/husband.jpg",
    services: [
      { label: "مساج سيجنتشر علاجي للظهر والكتفين" },
      { label: "أحجار بركانية دافئة لإذابة الشد" },
      { label: "جاكوزي أقدام بالزيوت المهدئة", free: true },
      { label: "ماسك وجه مرطب", free: true },
      { label: "كمادات عيون مريحة", free: true },
    ],
    giftFeature:
      "الأحجار الدافئة تذيب التوتر العضلي العميق الناتج عن ضغوط العمل والتفكير.",
    price: 298,
    oldPrice: 348,
    badge: "الأكثر طلباً للأزواج",
  },
  {
    id: "safar",
    name: "باقة تعب السفر",
    tagline: "الاستقبال الأمثل له بعد رحلة طويلة وسفر شاق",
    image: "/gifts/images/hero.jpg",
    services: [
      { label: "مساج تايلندي لتمديد العضلات (30 دقيقة)" },
      { label: "رفلكسولوجي للقدمين المتعبتين (30 دقيقة)" },
      { label: "إضافات مجانية منعشة للوجه والأقدام", free: true },
    ],
    giftFeature:
      "تركيز فوري على أقدام متعبة وعضلات مشدودة من الجلوس الطويل في الطائرات أو السيارات.",
    price: 298,
    oldPrice: 395,
  },
  {
    id: "dawam",
    name: "باقة تعب الدوام",
    tagline: "جرعة نشاط سريعة بعد دوام مرهق — في أقل من ساعة",
    image: "/gifts/images/saudi-man-massage.jpg",
    services: [
      { label: "مساج سويدي انسيابي (50 دقيقة)" },
      { label: "مقشر سريع للوجه والرقبة" },
      { label: "مرفقات راحة مجانية وضيافة شاي أعشاب", free: true },
    ],
    giftFeature:
      "المساج السويدي الانسيابي يمسح إرهاق المكتب والاجتماعات في أقل من ساعة.",
    price: 199,
    oldPrice: 403,
  },
  {
    id: "nashat",
    name: "باقة النشاط والقوة",
    tagline: "تجديد حيوي شامل يطرد الخمول ويعيد له طاقته",
    image: "/gifts/images/thai-stretch-massage.jpg",
    services: [
      { label: "مساج تايلندي حيوي لإطالة العضلات" },
      { label: "كاسات هواء لتفريغ الركود العضلي" },
      { label: "جاكوزي أقدام بالأملاح الطبيعية", free: true },
      { label: "ماسك وجه منعش", free: true },
    ],
    giftFeature:
      "دمج كاسات الهواء مع المساج التايلندي يطرد الخمول ويعيد له نشاطه الرياضي المعتاد.",
    price: 239,
    oldPrice: 403,
  },
  {
    id: "noom",
    name: "باقة النوم الخفيف",
    tagline: "الحل الأمثل لمن يعاني من الأرق وقلة النوم",
    image: "/gifts/images/therapist-gloves.jpg",
    services: [
      { label: "مساج سويدي استرخائي بأيدي خبير إندونيسي" },
      { label: "تدليك دقيق لفروة الرأس والصدغين" },
      { label: "تنظيف بشرة خفيف ومهدئ" },
      { label: "مرفقات استرخاء مجانية لنوم عميق", free: true },
    ],
    giftFeature:
      "تدليك فروة الرأس يخفف الصداع ويهيئ الدماغ لنوم عميق ومتواصل بسلام.",
    price: 209,
    oldPrice: 413,
  },
];

/* ===== باقات الأخ (عزوة وسند) — مخصصة للإخوان والشباب ===== */
export const brotherPackages: SpaPackage[] = [
  {
    id: "brother-nashat",
    name: "باقة النشاط والقوة",
    tagline: "ريكفري متكامل للرياضيين والشباب — طرد الخمول وتجديد العضلات",
    image: "/gifts/images/thai-stretch-massage.jpg",
    services: [
      { label: "مساج تايلندي حيوي لإطالة ومرونة العضلات" },
      { label: "كاسات هواء لتفريغ الركود العضلي" },
      { label: "جاكوزي أقدام بالأملاح الطبيعية", free: true },
      { label: "ماسك وجه منعش", free: true },
      { label: "كمادات عيون مريحة", free: true },
    ],
    giftFeature:
      "دمج كاسات الهواء مع المساج التايلندي يطرد الإجهاد ويعيد له لياقته وطاقته الرياضية القصوى.",
    price: 239,
    oldPrice: 403,
    badge: "الأكثر طلباً للشباب والرياضيين",
  },
  {
    id: "brother-dawam",
    name: "باقة تعب الدوام والدراسة",
    tagline: "جرعة نشاط سريعة بعد دوام شاق أو ضغط امتحانات في أقل من ساعة",
    image: "/gifts/images/saudi-man-massage.jpg",
    services: [
      { label: "مساج سويدي انسيابي لتفريغ الإرهاق (50 دقيقة)" },
      { label: "مقشر سريع للوجه والرقبة" },
      { label: "جاكوزي أقدام دافئ", free: true },
      { label: "مرفقات راحة وضيافة شاي أعشاب", free: true },
    ],
    giftFeature:
      "المساج السويدي الانسيابي يمسح تعب المذاكرة والمكتب والاجتماعات في أقل من ساعة.",
    price: 199,
    oldPrice: 403,
    badge: "لضغط الدوام والدراسة",
  },
  {
    id: "brother-abhar",
    name: "باقة تعب الأبهر والكتفين",
    tagline:
      "حل جذري لآلام الأبهر الناتجة عن الجلوس الطويل والقيادة واستخدام الجوال",
    image:
      "https://images.pexels.com/photos/8312866/pexels-photo-8312866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    services: [
      { label: "مساج تايلندي علاجي مركز للظهر والأكتاف" },
      { label: "كاسات هواء طبية متخصصة لمنطقة الأبهر" },
      { label: "جاكوزي أقدام مهدئ", free: true },
      { label: "ماسك وجه مرطب", free: true },
      { label: "كمادات عيون", free: true },
    ],
    giftFeature:
      "استهداف مباشر وعلاجي لمنطقة «الأبهر» المجهدة، ليعود لنشاطه بدون أي آلام ظهر.",
    price: 209,
    oldPrice: 405,
    badge: "لآلام الظهر والشاشات",
  },
  {
    id: "brother-safar",
    name: "باقة تعب السفر والخطوط",
    tagline: "الاستقبال المثالي للأخ بعد عودته من سفر طويل أو خط سفر بري",
    image: "/gifts/images/hero.jpg",
    services: [
      { label: "مساج تايلندي لتمديد عضلات الظهر (30 دقيقة)" },
      { label: "رفلكسولوجي مكثف للقدمين (30 دقيقة)" },
      { label: "إضافات مجانية منعشة للوجه والأقدام", free: true },
      { label: "ضيافة شاي أعشاب", free: true },
    ],
    giftFeature:
      "تركيز فوري على أقدام متعبة وعضلات مشدودة من قيادة السيارة أو السفر الطويل.",
    price: 298,
    oldPrice: 395,
  },
  {
    id: "brother-vip",
    name: "باقة درة سبا VIP للشباب",
    tagline:
      "الهدية الأرقى بمناسبة التخرج، الترقية، أو تجهيز الأخ قبل زواجه ومناسباته",
    image: "/gifts/images/vip.jpg",
    services: [
      { label: "مساج VIP فاخر وشامل (90 دقيقة)" },
      { label: "حمام ملكي فاخر بالأعشاب" },
      { label: "بديكير عناية متكامل لليدين والقدمين" },
      { label: "تنظيف بشرة رجالي عميق" },
      { label: "كاسات هواء لتنشيط الدورة الدموية" },
      { label: "جاكوزي أقدام وكمادات عيون", free: true },
    ],
    giftFeature:
      "تجربة دلال ملكية متكاملة ستكون الهدية الأجمل التي تفاجئينه بها في أهم مناسباته.",
    price: 749,
    oldPrice: 1087,
    badge: "هدية التخرج والمناسبات",
    duration: "3 ساعات كاملة",
  },
];

export const discountPct = (p: SpaPackage) =>
  Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);

export const fmt = (n: number) => n.toLocaleString("en-US");
