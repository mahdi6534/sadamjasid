export const CONTACT = {
  branches: "966502076285",
  branchesDisplay: "0502076285",
  home: "966502076285",
  homeDisplay: "0502076285",
} as const;

export type Category = "massage" | "hammam" | "special" | "pedicure";

export interface Service {
  id: string;
  category: Category;
  name: string;
  description: string;
  image: string;
  duration?: string;
  vip?: boolean;
  popular?: boolean;
  ribbon?: string;
  includes: string[];
}

export const categories: { id: Category; name: string }[] = [
  { id: "massage", name: "جلسات المساج" },
  { id: "hammam", name: "الحمام المغربي" },
  { id: "special", name: "الباقات المميزة" },
  { id: "pedicure", name: "البديكير والجاكوزي" },
];

export const services: Service[] = [
  {
    id: "royal-60",
    category: "massage",
    name: "المساج الملكي الشامل",
    duration: "ساعة",
    vip: true,
    popular: true,
    ribbon: "120 ألف طلب خلال عام",
    description: "افصل عن زحمة يومك بساعة من الراحة الشاملة.",
    image: "/images/المساج الملكي الشامل ساعه.webp",
    includes: [
      "جلسة مساج ملكي شامل لمدة ساعة",
      "تدليك كامل الجسم للمساعدة على تخفيف الشد والاسترخاء",
    ],
  },
  {
    id: "royal-120",
    category: "massage",
    name: "المساج الملكي الشامل",
    duration: "ساعتين",
    vip: true,
    description: "ساعتان من الاسترخاء لتخفيف الشد وإراحة جسمك.",
    image: "/images/المساج الملكي الشامل 2 ساعه.webp",
    includes: [
      "جلسة مساج ملكي شامل لمدة ساعتين",
      "تدليك الجسم والتركيز على مناطق الشد حسب احتياجك",
    ],
  },
  {
    id: "royal-90",
    category: "massage",
    name: "المساج الملكي الشامل",
    duration: "ساعة ونصف",
    description: "وقت أطول لعضلات مرتاحة وذهن أصفى.",
    image: "/images/المساج الملكي الشامل ساعه ونصف.webp",
    includes: [
      "جلسة مساج ملكي شامل لمدة ساعة ونصف",
      "تدليك الجسم للمساعدة على الاسترخاء وتخفيف التوتر العضلي",
    ],
  },
  {
    id: "thai",
    category: "massage",
    name: "المساج التايلندي",
    description: "تمدد وضغط مدروس لمرونة أفضل وعضلات أخف.",
    image: "/images/مساج تايلندي.webp",
    includes: [
      "تقنيات تدليك تايلندي تجمع الضغط والتمدد",
      "تكييف شدة الجلسة مع راحتك، بالتنسيق مع الأخصائي",
    ],
  },
  {
    id: "hot-stone",
    category: "massage",
    name: "مساج الأحجار الساخنة",
    description: "دفء الأحجار يساعد على إرخاء العضلات المشدودة.",
    image: "/images/مساج الاحجار الساخنه.webp",
    includes: [
      "تدليك باستخدام أحجار ملساء دافئة",
      "دفء وضغط لطيف للمساعدة على استرخاء العضلات",
    ],
  },
  {
    id: "reflexology",
    category: "massage",
    name: "مساج رفلكسلوجي",
    description: "عناية بنقاط القدمين لراحة بعد طول الوقوف.",
    image: "/images/مساج رفلكسولجي.webp",
    includes: [
      "ضغط مدروس على نقاط القدمين",
      "جلسة تركز على الراحة والاسترخاء بعد إجهاد اليوم",
    ],
  },
  {
    id: "shiatsu",
    category: "massage",
    name: "مساج الشياتسو",
    description: "ضغط إيقاعي بالأصابع يهدئ التوتر وشد الجسم.",
    image: "/images/مساج الشياتسو.webp",
    includes: [
      "تدليك بتقنيات الضغط الإيقاعي بالأصابع",
      "التركيز على الاسترخاء وتخفيف التوتر العضلي",
    ],
  },
  {
    id: "royal-hammam",
    category: "hammam",
    name: "الحمام المغربي الملكي الشامل",
    vip: true,
    description: "تنظيف وتقشير شامل، مع عناية بالوجه والشعر.",
    image: "/images/الحمام المغربي الملكي الشامل.webp",
    includes: [
      "الصابون البلدي والأعشاب المغربية الطبيعية",
      "طين البحر الميت المعدني وصنفرة الجسم",
      "صنفرة الوجه والقناع وتنظيف البشرة",
      "حمام زيت الشعر وتقشير الجلد الميت",
      "كريمات وزيوت الحمام المغربي مع حركات مساجية",
    ],
  },
  {
    id: "body-scrub",
    category: "hammam",
    name: "حمام صنفرة الجسم",
    description: "صابون بلدي وتقشير كامل لبشرة أنعم وأنظف.",
    image: "/images/حمام صنفرة الجسم.webp",
    includes: [
      "تنظيف الجسم بالصابون البلدي المغربي",
      "صنفرة كاملة لإزالة الجلد الميت وتنعيم البشرة",
    ],
  },
  {
    id: "dead-sea",
    category: "hammam",
    name: "حمام طين البحر الميت",
    description: "صابون مغربي وطين معدني لنظافة وانتعاش البشرة.",
    image: "/images/حمام طين البحر الميت.webp",
    includes: [
      "تنظيف الجسم بالصابون البلدي المغربي",
      "طين البحر الميت المعدني على كامل الجسم",
    ],
  },
  {
    id: "herbal-hammam",
    category: "hammam",
    name: "حمام الأعشاب المغربية",
    description: "أعشاب طبيعية وصابون بلدي لانتعاش معطر.",
    image: "/images/حمام الأعشاب المغربية.webp",
    includes: [
      "تنظيف بالصابون المغربي الطبيعي",
      "خليط أعشاب مغربية مثل الورد والخزامى والريحان مع الغسول",
    ],
  },
  {
    id: "beldi-hammam",
    category: "hammam",
    name: "الحمام المغربي بالصابون البلدي",
    description: "بخار وصابون بلدي لتنظيف البشرة وإزالة الجلد الميت.",
    image: "/images/الحمام المغربي بالصابون البلدي.webp",
    includes: [
      "تهيئة الجسم في غرفة البخار",
      "تنظيف كامل الجسم بالصابون البلدي المغربي",
    ],
  },
  {
    id: "groom-vip",
    category: "special",
    name: "الباقة الملكية الخاصة للعرسان",
    vip: true,
    description: "مساج وبودي كير وحمام مغربي وجاكوزي ليومك الكبير.",
    image: "/images/الباقة الملكية الخاصة للعرسان.webp",
    includes: [
      "مساج ملكي شامل",
      "بودي كير للعناية بالجسم",
      "حمام مغربي",
      "جاكوزي",
    ],
  },
  {
    id: "royal-duo",
    category: "special",
    name: "المساج الملكي + الحمام الملكي",
    vip: true,
    description: "راحة لعضلاتك ونظافة لبشرتك في تجربة واحدة.",
    image: "/images/المساج الملكي والحمام الملكي.webp",
    includes: ["المساج الملكي VIP", "الحمام المغربي الملكي VIP"],
  },
  {
    id: "royal-pedicure",
    category: "special",
    name: "المساج الملكي + البديكير",
    vip: true,
    description: "مساج شامل مع عناية مرتبة لليدين والقدمين.",
    image: "/images/المساج الملكي والبديكير.webp",
    includes: ["المساج الملكي VIP", "بديكير اليدين والقدمين"],
  },
  {
    id: "thai-hammam",
    category: "special",
    name: "المساج التايلندي + الحمام المغربي",
    description: "مرونة واسترخاء، مع حمام أعشاب أو طين معدني.",
    image: "/images/المساج التايلندي والحمام المغربي.webp",
    includes: [
      "جلسة مساج تايلندي",
      "اختيارك من حمام الأعشاب المغربية أو حمام طين البحر الميت",
    ],
  },
  {
    id: "pedicure-classic",
    category: "pedicure",
    name: "بدكير اليدين والقدمين",
    popular: true,
    description:
      "دلل نفسك بأظافر صحية وجميلة، في درة المساج أفضل مركز مساج في الرياض.",
    image: "/images/بدكير اليدين والقدمين.webp",
    includes: [
      "تقديم خدمة تقليم الأظافر بأعلى جودة",
      "باستخدام أفضل الأدوات والتقنيات في جميع فروع درة المساج",
      "إزالة التشققات",
    ],
  },
  {
    id: "pedicure-feet",
    category: "pedicure",
    name: "بدكير القدمين",
    description: "قص اظافر وسنفرة وتقشير الجلد الميت.",
    image: "/images/بدكير القدمين.webp",
    includes: [
      "قص أظافر القدمين",
      "سنفرة وتقشير الجلد الميت",
      "إزالة التشققات",
    ],
  },
  {
    id: "pedicure-hands",
    category: "pedicure",
    name: "بدكير اليدين",
    description: "تقليم اظافر الايدي وسنفرتها وتنظيفه.",
    image: "/images/بدكير اليدين.webp",
    includes: ["تقليم أظافر اليدين", "سنفرة وتنظيف الأظافر", "إزالة التشققات"],
  },
  {
    id: "jacuzzi",
    category: "pedicure",
    name: "جاكوزي",
    description:
      "استمتع بتجربة استرخاء لا مثيل لها مع أفضل جاكوزي في الرياض. دلل نفسك بتجربة استرخاء مميزة في جميع فروع درة المساج في الرياض مع خدمة الجاكوزي الفاخرة.",
    image: "/images/جاكوزي.webp",
    includes: [
      "تجربة استرخاء مميزة في جميع فروع درة المساج في الرياض",
      "خدمة الجاكوزي الفاخرة",
    ],
  },
];

export function serviceTitle(service: Service) {
  return `${service.name}${service.vip ? " VIP" : ""}${service.duration ? ` لمدة ${service.duration}` : ""}`;
}

export function whatsappMessage(kind: "branches" | "home", service?: Service) {
  const title = service ? serviceTitle(service) : "";
  return kind === "home"
    ? `السلام عليكم، أريد حجز مساج منزلي${service ? `، والاستفسار عن توفر باقة ${title} ضمن باقات وعروض المنزلي` : " ومعرفة باقات وعروض الخدمة المنزلية"}. ما الأسعار والمواعيد المتاحة؟`
    : `السلام عليكم، أريد حجز ${service ? `باقة ${title} بخصم 50%` : "جلسة مساج"} في أحد فروع درة المساج. ما الأسعار والمواعيد المتاحة؟`;
}

export function whatsappLink(kind: "branches" | "home", service?: Service) {
  // The official click-to-chat link handles both the app and WhatsApp Web.
  const digits = CONTACT[kind].replace(/\D/g, "");
  const international = digits.startsWith("0")
    ? `966${digits.slice(1)}`
    : digits;
  return `https://wa.me/${international}?text=${encodeURIComponent(whatsappMessage(kind, service))}`;
}

export function branchWhatsappLink(phone: string, service?: Service) {
  const digits = phone.replace(/\D/g, "");
  const international = digits.startsWith("0")
    ? `966${digits.slice(1)}`
    : digits;
  return `https://wa.me/${international}?text=${encodeURIComponent(whatsappMessage("branches", service))}`;
}

const embedPrefix = "https://www.google.com/maps/embed?pb=";

// The last two supplied embeds pointed to Arqa. These IDs and coordinates are
// from the separate branch links published at linktr.ee/dorrat_almasaj.
function correctedEmbed(
  feature: string,
  latitude: number,
  longitude: number,
  name: string,
) {
  return `${embedPrefix}!1m18!1m12!1m3!1d3200!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${encodeURIComponent(feature)}!2s${encodeURIComponent(`درة المساج والتدليك الرياضي - ${name}`)}!5e0!3m2!1sar!2ssa!4v1789596800351!5m2!1sar!2ssa`;
}

export const branches = [
  {
    name: "الشفا",
    phone: "0531842740",
    mapUrl: "https://maps.app.goo.gl/tohjTnF6HHcWbhZG8",
    embed: `${embedPrefix}!1m18!1m12!1m3!1d116153.33571097738!2d46.68020153896423!3d24.527287699789206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0f11bb03305b%3A0x4650b0d6b8051a19!2z2K_YsdipINin2YTZhdiz2KfYrCDZiNin2YTYqtiv2YTZitmDINin2YTYsdmK2KfYttmKIC0g2KfZhNi02YHYpw!5e0!3m2!1sar!2ssa!4v1789596731987!5m2!1sar!2ssa`,
  },
  {
    name: "ظهرة لبن",
    phone: "0502693984",
    mapUrl: "https://maps.app.goo.gl/SDa7yutd13r68zft6",
    embed: `${embedPrefix}!1m18!1m12!1m3!1d116153.33571097738!2d46.68020153896423!3d24.527287699789206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1f4422002d2d%3A0xcbc60fec520a0737!2z2K_YsdipINin2YTZhdiz2KfYrCDZiNin2YTYqtiv2YTZitmDINin2YTYsdmK2KfYttmKIC0g2LjZh9ix2Kkg2YTYqNmG!5e0!3m2!1sar!2ssa!4v1789596781639!5m2!1sar!2ssa`,
  },
  {
    name: "عرقة",
    phone: "0558617897",
    mapUrl: "https://maps.app.goo.gl/GMZAxoaU5kS7Zf5Y9",
    embed: `${embedPrefix}!1m18!1m12!1m3!1d116153.33571097738!2d46.68020153896423!3d24.527287699789206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1da6f416b2a3%3A0x9f3cfd8527f4c483!2z2K_YsdipINin2YTZhdiz2KfYrCDZiNin2YTYqtiv2YTZitmDINin2YTYsdmK2KfYttmKIC0g2LnYsdmC2Kk!5e0!3m2!1sar!2ssa!4v1789596800351!5m2!1sar!2ssa`,
  },
  {
    name: "اليرموك",
    phone: "0502754658",
    mapUrl: "https://maps.app.goo.gl/V3UWi5xSVwg9qpWa9",
    embed: correctedEmbed(
      "0x3e2effc44921357d:0x7b552dbcff5b5907",
      24.8181855,
      46.7843628,
      "اليرموك",
    ),
  },
  {
    name: "الياسمين",
    phone: "0536107510",
    mapUrl: "https://maps.app.goo.gl/EGYjqn1ysgv4sqLP9",
    embed: correctedEmbed(
      "0x3e2ee5944375a161:0xc8625f498542876f",
      24.8176606,
      46.6411094,
      "الياسمين",
    ),
  },
];

export const googleReviewsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("درة المساج والتدليك الرياضي الرياض")}`;
