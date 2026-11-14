export const WA_INTERNATIONAL = "966502076285";
export const HERO_WHATSAPP_URL = `https://wa.me/${WA_INTERNATIONAL}`;
export const PHONE_LOCAL = "0502076285";
export const PHONE_HREF = `tel:${PHONE_LOCAL}`;

export function buildWhatsAppPackageUrl(message: string): string {
  return `https://wa.me/${WA_INTERNATIONAL}?text=${encodeURIComponent(message)}`;
}

export const REAL_HOME_PHOTO_BADGE = "صور واقعية من داخل منازل العملاء";

export const UNIFIED_WINTER_OIL = {
  headline: "🔥 زيت مساج دافئ يُجهّز بجهاز تسخين مخصص",
  description:
    "دفء لطيف على الجلد يرافق المساج ويساعد على الاسترخاء وتخفيف الشد العضلي، لتستمتع بجلسة مريحة تناسب أجواء الشتاء.",
};

export const INDONESIAN_SPECIALISTS_LINE =
  "مختصون إندونيسيون رجال محترفون بالزي الرسمي لدرّة سبا — خبرة واحترافية وخصوصية تامة في بيتك";

export const HYGIENE_KIT_LINE =
  "علبة نظافة خاصة فيك (استخدام مرة واحدة): شامبو + شاور جل + شورت + فوطة مغلفة تفتح أمامك";

export interface SessionItem {
  title: string;
  detail: string;
  highlightWarmStones?: boolean;
}

export interface SpaPackage {
  id: string;
  name: string;
  categoryBadge: string;
  durationAndCount: string;
  winterAngleLabel: string;
  priceNumeric: number;
  priceDisplay: string;
  priceUnit: string;
  oldPriceDisplay: string;
  discountPercent: string;
  marketingTitle: string;
  includes: SessionItem[];
  winterFeatureText: string;
  freebies: string[];
  suitableFor: string;
  whatsappButtonLabel: string;
  phoneButtonLabel: string;
  whatsappMessage: string;
  imageSrc: string;
  imageAlt: string;
  isVip?: boolean;
  highlightWarmStonesCard?: boolean;
}

export const PACKAGES: SpaPackage[] = [
  {
    id: "dawam",
    name: "باقة تعب الدوام",
    categoryBadge: "الأكثر طلبًا للموظفين",
    durationAndCount: "50 دقيقة مساج • 5 خدمات",
    winterAngleLabel: "دفء وراحة بعد مشاوير العمل",
    priceNumeric: 199,
    priceDisplay: "199",
    priceUnit: "ريال",
    oldPriceDisplay: "382 ريال",
    discountPercent: "48%",
    marketingTitle:
      "دوام طويل وبرد الرياض ما يشجّعك تطلع؟ خلّ الراحة تجيك لين بيتك!",
    includes: [
      {
        title: "مساج سويدي احترافي — 50 دقيقة:",
        detail: "جلسة استرخاء للعضلات والظهر والكتفين.",
      },
      {
        title: "كاسات الهواء:",
        detail: "عناية إضافية لمناطق الشد في الظهر والأكتاف.",
      },
    ],
    winterFeatureText:
      "مساج بزيت دافئ يُجهّز بجهاز تسخين مخصص، ليمنح جسمك إحساسًا مريحًا بالدفء والاسترخاء.",
    freebies: ["جاكوزي أقدام", "ماسك للوجه", "كمادات عيون دافئة"],
    suitableFor:
      "للموظف اللي يرجع من الدوام مجهد ويبي ساعة راحة في دفا بيته.",
    whatsappButtonLabel: "احجز عبر واتساب — 199 ريال",
    phoneButtonLabel: "اتصل لحجز الباقة",
    whatsappMessage:
      "السلام عليكم، أرغب بحجز باقة تعب الدوام بسعر 199 ريال، وأريد معرفة المواعيد المتاحة في الرياض.",
    imageSrc: "/home-winter/images/pkg-dawam.jpg",
    imageAlt:
      "صورة واقعية من داخل منزل أحد العملاء في الرياض لتجهيز سرير درّة سبا وعلبة الاستخدام الواحد والشموع لباقة تعب الدوام",
  },
  {
    id: "aasab",
    name: "باقة تعب الأعصاب",
    categoryBadge: "لراحة اليدين والقدمين",
    durationAndCount: "50 دقيقة مساج • 4 خدمات",
    winterAngleLabel: "عناية دافئة لليدين والقدمين",
    priceNumeric: 199,
    priceDisplay: "199",
    priceUnit: "ريال",
    oldPriceDisplay: "319 ريال",
    discountPercent: "38%",
    marketingTitle:
      "من برد المشاوير وطول الجلسة… يديك ورجليك تستاهل هالراحة!",
    includes: [
      {
        title: "مساج القدمين الاحترافي — 25 دقيقة:",
        detail: "عناية مريحة للقدمين.",
      },
      {
        title: "مساج اليدين — 25 دقيقة:",
        detail: "تدليك يساعد على الاسترخاء وتخفيف الشعور بالشد.",
      },
    ],
    winterFeatureText:
      "زيت مساج دافئ يُجهّز بجهاز تسخين مخصص، ليضيف إحساسًا لطيفًا بالدفء أثناء تدليك اليدين والقدمين.",
    freebies: ["جاكوزي أقدام", "مقشر للوجه والرقبة"],
    suitableFor:
      "للي يكثر من الوقوف أو المشي أو الجلسات الطويلة، ويبي عناية مريحة لليدين والقدمين.",
    whatsappButtonLabel: "احجز عبر واتساب — 199 ريال",
    phoneButtonLabel: "اتصل لحجز الباقة",
    whatsappMessage:
      "السلام عليكم، أرغب بحجز باقة تعب الأعصاب بسعر 199 ريال، وأريد معرفة المواعيد المتاحة.",
    imageSrc: "/home-winter/images/pkg-aasab.jpg",
    imageAlt:
      "صورة واقعية من داخل منزل أحد العملاء في الرياض لتجهيز جاكوزي الأقدام والمناشف وأدوات العناية لباقة تعب الأعصاب",
  },
  {
    id: "abhar",
    name: "باقة تعب الأبهر",
    categoryBadge: "عناية مركزة بالظهر والكتفين",
    durationAndCount: "50 دقيقة مساج • 5 خدمات",
    winterAngleLabel: "راحة الظهر والكتفين بعد السواقة والجلسات الطويلة",
    priceNumeric: 209,
    priceDisplay: "209",
    priceUnit: "ريالات",
    oldPriceDisplay: "403 ريالات",
    discountPercent: "48%",
    marketingTitle:
      "طول السواقة وجلسات الشتاء خلت ظهرك مشدود؟ عطِ كتوفك حقها من الراحة!",
    includes: [
      {
        title: "مساج تايلندي احترافي — 50 دقيقة:",
        detail: "تمديدات وتدليك يركز على الظهر والكتفين.",
      },
      {
        title: "كاسات الهواء:",
        detail: "عناية إضافية لمناطق الشد في أعلى الظهر.",
      },
    ],
    winterFeatureText:
      "زيت مساج دافئ يُجهّز بجهاز تسخين مخصص، يضيف إحساسًا بالدفء والراحة أثناء الجلسة.",
    freebies: [
      "جاكوزي أقدام",
      "ماسك للوجه",
      "كمادات عيون دافئة",
      "شاي أعشاب ضيافة",
    ],
    suitableFor:
      "للي يقضي وقتًا طويلًا في السواقة أو الجلسات، ويبحث عن راحة عضلات الظهر والكتفين.",
    whatsappButtonLabel: "احجز عبر واتساب — 209 ريالات",
    phoneButtonLabel: "اتصل لحجز الباقة",
    whatsappMessage:
      "السلام عليكم، أرغب بحجز باقة تعب الأبهر بسعر 209 ريالات، وأريد معرفة المواعيد المتاحة.",
    imageSrc: "/home-winter/images/pkg-abhar.jpg",
    imageAlt:
      "صورة واقعية من داخل مجلس أحد العملاء في الرياض لتجهيز سرير درّة سبا المنزلي لباقة تعب الأبهر",
  },
  {
    id: "daght",
    name: "باقة ضغط الحياة",
    categoryBadge: "ريلاكس عميق",
    durationAndCount: "50 دقيقة مساج • 5 خدمات",
    winterAngleLabel: "الجمع بين الزيت الدافئ والأحجار الدافئة",
    priceNumeric: 289,
    priceDisplay: "289",
    priceUnit: "ريالًا",
    oldPriceDisplay: "603 ريالات",
    discountPercent: "52%",
    marketingTitle:
      "في برد الرياض… وش أحلى من مساج بزيت دافئ مع دفء الأحجار؟",
    includes: [
      {
        title: "مساج احترافي — 25 دقيقة:",
        detail: "تدليك للمساعدة على الاسترخاء وتخفيف الشد العضلي.",
      },
      {
        title: "الأحجار الدافئة — 25 دقيقة:",
        detail: "تجربة تجمع بين دفء الأحجار والتدليك المريح.",
        highlightWarmStones: true,
      },
    ],
    winterFeatureText:
      "زيت مساج دافئ باستخدام جهاز تسخين مخصص، مع تجربة الأحجار الدافئة لتكمل أجواء الراحة الشتوية.",
    freebies: ["جهاز كمادات العيون الدافئة", "ماسك للوجه", "جاكوزي أقدام"],
    suitableFor:
      "للي يبي يفصل عن ضغوط الأسبوع ويعيش تجربة استرخاء مميزة بدفء الأحجار في بيته.",
    whatsappButtonLabel: "احجز عبر واتساب — 289 ريالًا",
    phoneButtonLabel: "اتصل لحجز الباقة",
    whatsappMessage:
      "السلام عليكم، أرغب بحجز باقة ضغط الحياة بسعر 289 ريالًا، وأريد معرفة المواعيد المتاحة.",
    imageSrc: "/home-winter/images/pkg-daght.jpg",
    imageAlt:
      "صورة واقعية من داخل منزل أحد العملاء لتجهيز سرير المساج والزيوت والشموع الدافئة لباقة ضغط الحياة",
    highlightWarmStonesCard: true,
  },
  {
    id: "lamsa",
    name: "باقة لمسة",
    categoryBadge: "دلع وأناقة متكاملة",
    durationAndCount: "50 دقيقة مساج • 5 خدمات",
    winterAngleLabel: "دفء المساج مع العناية الشخصية",
    priceNumeric: 409,
    priceDisplay: "409",
    priceUnit: "ريالات",
    oldPriceDisplay: "593 ريالًا",
    discountPercent: "31%",
    marketingTitle: "شتوية هادئة… ومساج وعناية من كتوفك إلى أطراف قدميك!",
    includes: [
      {
        title: "مساج سيجنتشر احترافي — 50 دقيقة:",
        detail: "تجربة تدليك للاسترخاء والعناية بعضلات الجسم.",
      },
      {
        title: "بديكير اليدين والقدمين:",
        detail: "عناية متكاملة بالأظافر واليدين والقدمين.",
      },
    ],
    winterFeatureText:
      "زيت مساج دافئ يُجهّز بجهاز تسخين مخصص لزيادة الإحساس بالدفء والراحة خلال جلسة السيجنتشر.",
    freebies: [
      "جاكوزي أقدام",
      "ماسك للوجه",
      "كمادات عيون دافئة",
      "شاي أعشاب ضيافة",
    ],
    suitableFor:
      "للي يبي يجمع بين الاسترخاء والعناية الشخصية في جلسة منزلية واحدة.",
    whatsappButtonLabel: "احجز عبر واتساب — 409 ريالات",
    phoneButtonLabel: "اتصل لحجز الباقة",
    whatsappMessage:
      "السلام عليكم، أرغب بحجز باقة لمسة بسعر 409 ريالات، وأريد معرفة المواعيد المتاحة.",
    imageSrc: "/home-winter/images/pkg-lamsa.jpg",
    imageAlt:
      "صورة واقعية من داخل منزل أحد العملاء لتجهيز سرير درّة سبا وعلبة النظافة والزهور لباقة لمسة",
  },
  {
    id: "vip",
    name: "باقة درّة سبا VIP",
    categoryBadge: "باقة العرسان والنخبة — 7 خدمات",
    durationAndCount: "90 دقيقة مساج • 7 خدمات",
    winterAngleLabel: "تجربة شتوية ملكية متكاملة داخل المنزل",
    priceNumeric: 749,
    priceDisplay: "749",
    priceUnit: "ريالًا",
    oldPriceDisplay: "1,087 ريالًا",
    discountPercent: "31%",
    marketingTitle:
      "برا برد الرياض… وداخل بيتك تجربة سبا ملكية تستاهلها!",
    includes: [
      {
        title: "مساج درّة سبا VIP الاحترافي — 90 دقيقة + كاسات هواء:",
        detail: "جلسة تدليك مطولة للعناية بالعضلات والاسترخاء.",
      },
      {
        title: "حمام مغربي فاخر + بديكير:",
        detail: "عناية متكاملة للجسم واليدين والقدمين.",
      },
    ],
    winterFeatureText:
      "زيت مساج دافئ يُجهّز بجهاز تسخين مخصص، يمنح إحساسًا بالدفء والراحة ضمن تجربة المساج الملكية.",
    freebies: ["تنظيف بشرة", "كمادات عيون دافئة", "جاكوزي أقدام"],
    suitableFor:
      "للي يبي تجربة سبا منزلية فاخرة ومتكاملة، أو يبي يهدي رجلًا غاليًا عليه تجربة شتوية مميزة.",
    whatsappButtonLabel: "احجز عبر واتساب — 749 ريالًا",
    phoneButtonLabel: "اتصل لحجز الباقة",
    whatsappMessage:
      "السلام عليكم، أرغب بحجز باقة درّة سبا VIP بسعر 749 ريالًا، وأريد معرفة المواعيد المتاحة.",
    imageSrc: "/home-winter/images/pkg-vip.jpg",
    imageAlt:
      "صورة واقعية من داخل منزل أحد العملاء للتجهيز الملكي الكامل وشنط درّة سبا لباقة درّة سبا VIP",
    isVip: true,
  },
];

export interface CustomerReview {
  id: string;
  reviewerLabel: string;
  badgeSubtext: string;
  initial: string;
  rating: 5 | 4;
  text: string;
  dir?: "rtl" | "ltr";
  avatarBg: string;
}

/**
 * The 4 authentic verified customer reviews provided by the client.
 */
export const REAL_CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    reviewerLabel: "أصيل",
    badgeSubtext: "عميل خدمة منزلية موثّق",
    initial: "أ",
    rating: 5,
    text: "الصراحة المساج ممتاز ورائع اول تجربة وراح تتكرر من كثر ما المساج ممتاز كان ودي يكمل ما يوقف المره الجاية راح أزود وقت",
    dir: "rtl",
    avatarBg: "from-[#7c4a12] to-[#3d250a]",
  },
  {
    id: "rev-2",
    reviewerLabel: "عميل موثّق",
    badgeSubtext: "تجربة منزلية بالرياض",
    initial: "★",
    rating: 5,
    text: "شخص كويس وارتحت راحة واعاملهم 5 نجوووم استرخاء تام راحه نفسيه والله يستاهل شخص خلوق وطيب ❤️❤️❤️❤️❤️👍🏻",
    dir: "rtl",
    avatarBg: "from-[#3f7d6b] to-[#1e4a3f]",
  },
  {
    id: "rev-3",
    reviewerLabel: "Verified Client",
    badgeSubtext: "Home Spa • Riyadh",
    initial: "R",
    rating: 5,
    text: "The massage is very good still i want to repet again and again thanks you so much for the therapists Rahmat you are the best therapist thank you so much i feel better now",
    dir: "ltr",
    avatarBg: "from-[#0f2340] to-[#1e3d6b]",
  },
  {
    id: "rev-4",
    reviewerLabel: "عميل موثّق",
    badgeSubtext: "تجربة منزلية بالرياض",
    initial: "م",
    rating: 5,
    text: "رحمات كان مختصاً خبيراً ومحترفاً جداً \nلقد سررت بمقابلته ، حيث انه يعرف ما يقوم به بشكل احترافي. \nلم اكن اريد ان تنتهي الجلسة من كثر الراحة.\nشكراً جزيلاً للمركز وللمختص على هذه الخدمة المتميزة ، وبالتاكيد لن يكون هذا هو آخر طلب. \nتحياتي وتقديري.",
    dir: "rtl",
    avatarBg: "from-[#8a6a24] to-[#4a3a12]",
  },
];

export interface TeamEquipmentCard {
  emoji: string;
  title: string;
  description: string;
}

/**
 * Exact 6 equipment & uniform cards from durtalmsaj.sa/home ("تعرف على أخصائييك وتجهيزك قبل ما نطرق بابك")
 */
export const TEAM_EQUIPMENT_CARDS: TeamEquipmentCard[] = [
  {
    emoji: "🧳",
    title: "شنط DORH SPA الرسمية",
    description:
      "سرير متنقل + شنط قماشية بشعارنا فيها كل التجهيز — تدخل بيتك مرتبة وتطلع مرتبة",
  },
  {
    emoji: "🛏️",
    title: "سرير + مناشف مغلفة",
    description:
      "سرير مساج فندقي ومناشف بشعار درة سبا تُفرش أمامك وتُستبدل بعد كل عميل",
  },
  {
    emoji: "♨️",
    title: "جاكوزي + جهاز عيون",
    description:
      "جاكوزي أقدام متنقل وجهاز تدليك العيون — معقمة قبل وبعد كل جلسة",
  },
  {
    emoji: "🌿",
    title: "زيوت وأدوات خشبية",
    description:
      "زيوت طبيعية مغلقة + جهاز تسخين الزيت الدافئ + أدوات مساج خشبية + أحجار دافئة وكاسات هواء",
  },
  {
    emoji: "🍵",
    title: "شاي أعشاب وضيافة",
    description:
      "علبة شاي أعشاب فاخرة تُحضّر لك أثناء الجلسة — ضيافة تليق فيك",
  },
  {
    emoji: "🎁",
    title: "علبتك الخاصة",
    description:
      "شامبو + شاور جل + شورت + فوطة — استخدام مرة واحدة وتفتح أمامك",
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * Exact FAQ items from durtalmsaj.sa/home
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "كيف تتم الخدمة المنزلية؟ هل أحتاج أجهز شيء؟",
    a: "لا تجهز أي شيء. أخصائي رجالي محترف يجيك لحد باب بيتك — بيت، شقة أو استراحة — بسرير مساج متنقل وتجهيز احترافي كامل: زيوت طبيعية دافئة تُجهّز بجهاز تسخين مخصص، جهاز جاكوزي الأقدام وشاي الأعشاب. ولكل عميل علبة خاصة استخدام مرة واحدة (شامبو + شاور جل + شورت + فوطة مغلفة تفتح أمامك). نحتاج فقط مساحة 2×2 متر. نوصلك خلال 30-60 دقيقة من تأكيد الحجز، وبعد الجلسة نرتب المكان وكأننا ما كنا.",
  },
  {
    q: "هل الخدمة للرجال فقط؟ ومن هم الأخصائيون؟",
    a: "نعم، درّة سبا المنزلي مخصص للرجال فقط 100% — لا يوجد لدينا أخصائيات إطلاقاً. جميع الأخصائيين إندونيسيون رجال محترفون ومعتمدون من فروع درّة المساج بخبرة تتجاوز 5 سنوات، ويخضعون لتقييم مستمر من العملاء. الخدمة احترافية بالكامل بمعايير فندقية.",
  },
  {
    q: "كم مدة الوصول؟ وما مناطق التغطية؟",
    a: "نوصلك خلال 30-60 دقيقة فقط من تأكيد الحجز! نغطي كامل مدينة الرياض: الشمال (العليا، النرجس، الياسمين)، الشرق (اليرموك، الروضة، الحمراء)، الوسط والغرب والجنوب — بيتك، شقتك أو استراحتك وين ما كنت.",
  },
  {
    q: "هل يمكن التقسيط عبر تابي وتمارا؟",
    a: "نعم! جميع الباقات قابلة للتقسيط على 4 دفعات بدون فوائد عبر تابي وتمارا عند الحجز عبر الواتساب. اطلب الآن وقسّطها براحتك.",
  },
  {
    q: "ما سياسة الإلغاء وإعادة الجدولة؟",
    a: "يمكنك الإلغاء أو التأجيل مجاناً قبل 4 ساعات من الموعد. رضاك أولويتنا دائماً.",
  },
  {
    q: "هل الأدوات نظيفة ومعقمة؟ وش علبة الاستخدام الواحد؟",
    a: "بالتأكيد — خدمة احترافية ببروتوكول فنادق 5 نجوم: لكل عميل علبة مخصصة استخدام مرة واحدة فيها شامبو + شاور جل + شورت + فوطة مغلفة تفتح أمامك، إضافة لتعقيم كامل للسرير والأجهزة قبل وبعد كل عميل.",
  },
];
