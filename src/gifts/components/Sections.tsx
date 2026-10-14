import {
  Award,
  CalendarCheck2,
  Crown,
  CupSoda,
  Gift,
  Heart,
  Home,
  Lock,
  MessageCircle,
  MousePointerClick,
  Quote,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import PackageCard from "./PackageCard";
import { Reveal } from "./shared";
import {
  brotherPackages,
  fatherPackages,
  husbandPackages,
  waGeneral,
} from "../data/packages";
import { cn } from "../utils/cn";

/* ================= Section Header Component ================= */
function SectionHeader({
  chip,
  chipClass,
  title,
  highlight,
  highlightClass,
  sub,
}: {
  chip: string;
  chipClass: string;
  title: string;
  highlight: string;
  highlightClass: string;
  sub: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-black ring-1",
            chipClass
          )}
        >
          <Sparkles className="h-3.5 w-3.5" />
          {chip}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-2.5 text-2xl font-black leading-snug text-ink sm:text-3xl sm:leading-snug">
          {title} <span className={highlightClass}>{highlight}</span>
        </h2>
      </Reveal>
      <Reveal delay={140}>
        <p className="mt-1.5 text-sm font-medium leading-6 text-cocoa sm:text-[15px]">
          {sub}
        </p>
      </Reveal>
    </div>
  );
}

/* ================= How It Works ================= */
const steps = [
  {
    num: 1,
    icon: MousePointerClick,
    title: "اختاري الباقة",
    text: "قارني الباقات واختاري ما يناسب ميزانيتك ومن تحبين",
  },
  {
    num: 2,
    icon: CalendarCheck2,
    title: "احجزي في ثوانٍ",
    text: "عبر واتساب أو الاتصال أو الحجز الفوري في Fresha",
  },
  {
    num: 3,
    icon: Truck,
    title: "نصل لباب البيت",
    text: "أخصائيونا يصلون بكل التجهيزات.. وضيافة شاي الأعشاب علينا",
  },
];

export function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
      {/* 3 Step cards exactly as in user image 1 */}
      <div className="grid gap-3.5 sm:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <div className="relative flex h-full items-start gap-3.5 overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-linen sm:p-5">
              <span className="absolute -left-1 -top-3 text-[56px] font-black leading-none text-sand/80 select-none">
                {s.num}
              </span>
              <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#4c5a34] to-[#607141] text-white shadow-md">
                <s.icon className="h-5 w-5" />
              </span>
              <div className="relative">
                <h3 className="text-base font-black text-ink">{s.title}</h3>
                <p className="mt-1 text-xs font-bold leading-5 text-cocoa">{s.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Free herbal tea banner (matching image 1) */}
      <Reveal delay={120}>
        <div className="mt-3.5 flex flex-col items-center justify-center gap-2 rounded-2xl bg-[#4c5a34] px-5 py-3 text-center text-white shadow-md sm:flex-row sm:gap-3">
          <CupSoda className="h-5 w-5 shrink-0 text-goldsoft" />
          <p className="text-xs font-black sm:text-sm">
            مع كل باقة: ضيافة شاي أعشاب فاخرة
            <span className="mx-2 rounded-md bg-white px-2 py-0.5 text-[11px] font-black text-[#4c5a34]">
              مجاناً
            </span>
            لأن التفاصيل الصغيرة تصنع فرحة كبيرة
          </p>
        </div>
      </Reveal>

      {/* 4 Pillars of Trust (moved to end of page as requested) */}
      <Reveal delay={160}>
        <div className="mt-5 rounded-3xl border border-sand bg-gradient-to-l from-white via-sand/40 to-white p-5 shadow-sm sm:p-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-olivesoft px-3.5 py-1 text-xs font-black text-olivedeep">
              <Sparkles className="h-3.5 w-3.5 text-golddeep" />
              معايير خدمة درّة سبا المنزلي بالرياض
            </span>
            <h3 className="mt-2 text-lg font-black text-ink sm:text-xl">
              لماذا تثق بنا العائلات السعودية؟
            </h3>
          </div>

          <div className="mt-5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3 rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-linen">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-olivesoft text-olivedeep">
                <Star className="h-5 w-5 fill-current" />
              </span>
              <div>
                <p className="text-sm font-black text-ink">+10 آلاف عميل</p>
                <p className="mt-0.5 text-xs font-bold leading-5 text-cocoa">
                  ثقة ممتدة وتجارب استرخاء ناجحة في مختلف أحياء الرياض
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-linen">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-goldsoft text-golddeep">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-black text-ink">خبراء إندونيسيون رجال</p>
                <p className="mt-0.5 text-xs font-bold leading-5 text-cocoa">
                  محترفون بالقفازات المعقمة والزي الرسمي الموحد
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-linen">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sand text-ink">
                <Lock className="h-5 w-5 text-golddeep" />
              </span>
              <div>
                <p className="text-sm font-black text-ink">خصوصية تامة عند الوصول</p>
                <p className="mt-0.5 text-xs font-bold leading-5 text-cocoa">
                  دخول هادئ بدون أي إزعاج أو ربكة للمنزل
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-linen">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-rosesoft text-rosedeep">
                <CupSoda className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-black text-ink">ضيافة شاي أعشاب فاخرة</p>
                <p className="mt-0.5 text-xs font-bold leading-5 text-cocoa">
                  مرفقة مجاناً مع كل باقة لتكتمل لحظة الدلال
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ================= Father Section ================= */
export function FatherSection() {
  return (
    <section id="father" className="relative scroll-mt-20 overflow-hidden py-10 sm:py-14">
      <div className="pointer-events-none absolute right-0 top-16 h-80 w-80 rounded-full bg-olive/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Direct, concise heading - straight into packages */}
        <SectionHeader
          chip="قسم هدايا الوالد"
          chipClass="bg-olivesoft text-olivedeep ring-olive/30"
          title="باقات تاج الراس"
          highlight="«أبوي»"
          highlightClass="text-olivedeep"
          sub="استرخاء متكامل يُنسيه تعب السنين ويخفّف آلام الظهر والمفاصل — اختاري باقته فوراً:"
        />

        {/* 5 Father Packages immediately visible without scrolling past big hero image */}
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fatherPackages.map((p, i) => (
            <PackageCard
              key={p.id}
              pkg={p}
              accent="olive"
              recipient="والدي"
              delay={(i % 3) * 80}
            />
          ))}

          {/* Consultation Box */}
          <Reveal delay={200} className="h-full">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-bl from-olivedeep via-olive to-[#87976a] p-6 text-white shadow-lg">
              <div className="dots-pattern absolute inset-0 opacity-20" aria-hidden />
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20 ring-1 ring-white/40">
                  <Gift className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-black leading-snug">
                  محتارة أيّ باقة تناسب أبوك؟
                </h3>
                <p className="mt-2 text-xs font-bold leading-6 text-white/85">
                  أخبرينا عن حالته وما يفضّله، وسيرشّح لك فريقنا الباقة المثالية خلال دقيقة عبر
                  الواتساب.
                </p>
              </div>
              <a
                href={waGeneral("father")}
                target="_blank"
                rel="noreferrer"
                className="relative mt-5 flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-black text-olivedeep shadow-md transition-all hover:bg-cream active:scale-[0.98]"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                <span>استشيري فريقنا — واتساب</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Father Emotional Image Card — placed AFTER packages as requested for fast Saudi decision-making */}
        <Reveal delay={150} className="mt-8">
          <div className="relative overflow-hidden rounded-[2.2rem] bg-gradient-to-l from-white via-sand/40 to-white p-4 shadow-md ring-1 ring-linen sm:p-6">
            <div className="grid items-center gap-5 md:grid-cols-[380px_1fr]">
              <div className="relative overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/gifts/images/elderly-saudi-footbath.jpg"
                  alt="أب سعودي مسن بثوب أبيض أنيق يستمتع بجلسة عناية واسترخاء في منزله"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-2.5 right-2.5 rounded-xl bg-ink/80 px-3 py-1 text-xs font-black text-cream backdrop-blur">
                  لتاج راسي «أبوي»
                </span>
              </div>
              <div>
                <span className="rounded-full bg-olivesoft px-3 py-1 text-xs font-black text-olivedeep">
                  شهادات عميلاتنا
                </span>
                <h3 className="mt-2 text-xl font-black text-ink sm:text-2xl">
                  «أبوي من يومها وهو يدعي لي» — أكثر جملة نسمعها
                </h3>
                <p className="mt-2 text-sm font-medium leading-7 text-cocoa">
                  سنوات وهو يبذل ويعطي بدون مقابل.. جلسة مساج وحمام مغربي في هدوء منزله هي أرقى
                  طريقة لتقولي له: «أنا أقدّر كل تعبك يا تاج راسي». أخصائيونا يصلون بكامل
                  التجهيزات والقفازات المعقمة والضيافة، بخصوصية تامة بدون أي إزعاج.
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <a
                    href="#father"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-olivedeep px-4 py-2 text-xs font-black text-white hover:bg-olive"
                  >
                    <span>اختر باقة والدك بالأعلى</span>
                  </a>
                  <a
                    href={waGeneral("father")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-black text-ink ring-1 ring-linen hover:bg-sand/40"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-wa" />
                    <span>تنسيق خاص عبر واتساب</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= Husband Section ================= */
export function HusbandSection() {
  const vip = husbandPackages[0];
  const rest = husbandPackages.slice(1);

  return (
    <section
      id="husband"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-transparent via-rosesoft/30 to-transparent py-10 sm:py-14"
    >
      <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-rose/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Direct heading */}
        <SectionHeader
          chip="قسم هدايا الأزواج — تجديد وحب"
          chipClass="bg-rosesoft text-rosedeep ring-rose/30"
          title="باقات رفيق الدرب"
          highlight="«زوجي»"
          highlightClass="text-rosedeep"
          sub="دلال يُجدّد الحب ويُذيب تعب الدوام وضغوط العمل.. اختاري باقته فوراً:"
        />

        {/* 1) Featured VIP Package Card with matching 3-buttons */}
        <div className="mt-7">
          <PackageCard
            pkg={vip}
            accent="gold"
            recipient="زوجي"
            featured
          />
        </div>

        {/* 2) Remaining Husband Packages (5 packages) */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <PackageCard
              key={p.id}
              pkg={p}
              accent="rose"
              recipient="زوجي"
              delay={(i % 3) * 80}
            />
          ))}

          {/* Moroccan bath visual card */}
          <Reveal delay={200} className="h-full">
            <div className="group relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-[2rem] shadow-sm ring-1 ring-linen">
              <img
                src="/gifts/images/moroccan.jpg"
                alt="أجواء الحمام المغربي الفاخر"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
              <div className="relative p-5 text-white">
                <span className="rounded-md bg-wa px-2 py-0.5 text-[10.5px] font-black shadow">
                  سر الانتعاش
                </span>
                <h3 className="mt-2 text-lg font-black leading-snug">
                  حمام مغربي بالأعشاب الطبيعية
                </h3>
                <p className="mt-1 text-xs font-bold leading-5 text-white/85">
                  نظافة عميقة وتنشيط للدورة الدموية يعيد الحيوية ويزيل الإرهاق التراكمي.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Husband Emotional Image Card — placed AFTER packages */}
        <Reveal delay={150} className="mt-8">
          <div className="relative overflow-hidden rounded-[2.2rem] bg-gradient-to-l from-white via-rosesoft/30 to-white p-4 shadow-md ring-1 ring-linen sm:p-6">
            <div className="grid items-center gap-5 md:grid-cols-[380px_1fr]">
              <div className="relative overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/gifts/images/saudi-man-massage.jpg"
                  alt="زوج سعودي يسترخي أثناء جلسة مساج على أيدي خبير إندونيسي يرتدي قفازات"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-2.5 right-2.5 rounded-xl bg-ink/80 px-3 py-1 text-xs font-black text-cream backdrop-blur">
                  لرفيق دربي «زوجي»
                </span>
              </div>
              <div>
                <span className="rounded-full bg-rosesoft px-3 py-1 text-xs font-black text-rosedeep">
                  تجديد وحب
                </span>
                <h3 className="mt-2 text-xl font-black text-ink sm:text-2xl">
                  هدية يعيشها بكل حواسه.. ويشكرك عليها طويلاً
                </h3>
                <p className="mt-2 text-sm font-medium leading-7 text-cocoa">
                  بين ضغط الاجتماعات وزحام الطرق ومسؤوليات الحياة، أكثر ما يحتاجه زوجك هو ساعة من
                  الهدوء التام تُذيب الشد العضلي وترد له روحه. باقاتنا صُممت خصيصاً لتمنحه هذا
                  الإحساس الملكي في راحة بيته مع أخصائي إندونيسي محترف يرتدي القفازات المعقمة،
                  وبأقصى درجات الخصوصية ودون أي إزعاج للمنزل.
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <a
                    href="#husband"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-rosedeep px-4 py-2 text-xs font-black text-white hover:bg-rose"
                  >
                    <span>تصفحي باقات الزوج بالأعلى</span>
                  </a>
                  <a
                    href={waGeneral("husband")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-black text-ink ring-1 ring-linen hover:bg-sand/40"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-wa" />
                    <span>تنسيق مفاجأة خاصة عبر واتساب</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= Brother Section ================= */
export function BrotherSection() {
  return (
    <section
      id="brother"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-transparent via-[#faedd8]/35 to-transparent py-10 sm:py-14"
    >
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-[#a36826]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Direct heading */}
        <SectionHeader
          chip="قسم هدايا الإخوان — عزوة وسند"
          chipClass="bg-[#faedd8] text-[#8c581e] ring-[#8c581e]/30"
          title="باقات سندي وعضيدي"
          highlight="«أخوي»"
          highlightClass="text-[#8c581e]"
          sub="لأنه سندك في الشدائد.. فاجئيه بجرعة ريكفري وانتعاش تنسيه تعب الدوام والتمارين والخطوط الطويلة:"
        />

        {/* Brother Packages */}
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {brotherPackages.map((p, i) => (
            <PackageCard
              key={p.id}
              pkg={p}
              accent="amber"
              recipient="أخوي"
              delay={(i % 3) * 80}
            />
          ))}

          {/* Consultation Box for Brother */}
          <Reveal delay={200} className="h-full">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-bl from-[#714413] via-[#8c581e] to-[#a36826] p-6 text-white shadow-lg">
              <div className="dots-pattern absolute inset-0 opacity-20" aria-hidden />
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20 ring-1 ring-white/40">
                  <Shield className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-black leading-snug">
                  محتارة أيّ باقة تناسب أخوك؟
                </h3>
                <p className="mt-2 text-xs font-bold leading-6 text-white/85">
                  أخبرينا عن نشاطه (رياضي، موظف، مسافر، أو عنده مناسبة خاصة) وسيرشح لك فريقنا
                  الباقة المثالية خلال دقيقة عبر الواتساب.
                </p>
              </div>
              <a
                href={waGeneral("brother")}
                target="_blank"
                rel="noreferrer"
                className="relative mt-5 flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-black text-[#8c581e] shadow-md transition-all hover:bg-cream active:scale-[0.98]"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                <span>استشيري فريقنا لهدية الأخ — واتساب</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Brother Emotional Card — placed AFTER packages */}
        <Reveal delay={150} className="mt-8">
          <div className="relative overflow-hidden rounded-[2.2rem] bg-gradient-to-l from-white via-[#faedd8]/30 to-white p-4 shadow-md ring-1 ring-linen sm:p-6">
            <div className="grid items-center gap-5 md:grid-cols-[380px_1fr]">
              <div className="relative overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/gifts/images/thai-stretch-massage.jpg"
                  alt="شاب سعودي يستمتع بجلسة مساج وإطالة عضلية في منزله"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-2.5 right-2.5 rounded-xl bg-ink/80 px-3 py-1 text-xs font-black text-cream backdrop-blur">
                  لعضيدي وسندي «أخوي»
                </span>
              </div>
              <div>
                <span className="rounded-full bg-[#faedd8] px-3 py-1 text-xs font-black text-[#8c581e]">
                  عزوة وسند
                </span>
                <h3 className="mt-2 text-xl font-black text-ink sm:text-2xl">
                  «أخوي سندي اللي ما يميل.. يستاهل وقفة راحة تدلله»
                </h3>
                <p className="mt-2 text-sm font-medium leading-7 text-cocoa">
                  الأخ سند لأخته في كل مواقف الحياة، وكثير من الأخوات يحبون يردون الجميل بهدية
                  فخمة ومختلفة. باقاتنا المخصصة للشباب تجمع بين المساج التايلندي لفك الشد العضلي
                  وكاسات الهواء الطبية، مع أخصائي إندونيسي محترف يرتدي القفازات المعقمة،
                  وبأقصى درجات الخصوصية بدون أي إزعاج للمنزل.
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <a
                    href="#brother"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#8c581e] px-4 py-2 text-xs font-black text-white hover:bg-[#714413]"
                  >
                    <span>تصفحي باقات الأخ بالأعلى</span>
                  </a>
                  <a
                    href={waGeneral("brother")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-black text-ink ring-1 ring-linen hover:bg-sand/40"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-wa" />
                    <span>تنسيق مفاجأة خاصة للأخ عبر واتساب</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= Therapists Section ================= */
const therapistPoints = [
  {
    icon: ShieldCheck,
    title: "قفازات طبية معقمة وزيّ رسمي",
    text: "التزام صحي صارم بارتداء القفازات المعقمة والزي الرسمي الموحد في كل جلسة",
  },
  {
    icon: Lock,
    title: "خصوصية تامة بدون أي إزعاج",
    text: "مراعاة تامة لحرمة وخصوصية البيوت السعودية، وصول هادئ ومنظم",
  },
  {
    icon: Award,
    title: "خبراء إندونيسيون رجال محترفون",
    text: "أمهر الأخصائيين المعتمدين في فنون السبا والمساج العلاجي التايلندي والسويدي",
  },
  {
    icon: Home,
    title: "تجهيزات منزلية متكاملة",
    text: "نصل لباب البيت بكل التجهيزات والزيوت وشاي الأعشاب الفاخر",
  },
];

const stats = [
  { value: "+10,000", label: "عميل وثق بنا بالرياض" },
  { value: "4.9", label: "متوسط تقييم عميلاتنا" },
  { value: "100%", label: "خصوصية والتزام صحي" },
  { value: "7", label: "أيام في الأسبوع بخدمتكم" },
];

export function Therapists() {
  return (
    <section id="therapists" className="relative scroll-mt-20 overflow-hidden py-10 sm:py-16">
      <div className="pointer-events-none absolute right-10 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Therapists photo showing Indonesian therapist with gloves in Saudi home */}
          <Reveal className="relative mx-auto w-full max-w-[500px]">
            <div
              className="absolute -inset-2.5 rounded-[2.5rem] bg-gradient-to-bl from-olive/30 via-transparent to-rose/25 blur-lg"
              aria-hidden
            />
            <img
              src="/gifts/images/therapist-gloves.jpg"
              alt="أخصائي درة سبا الإندونيسي بالزي الرسمي الموحد ويرتدي القفازات المعقمة في منزل سعودي"
              className="relative aspect-[4/3.2] w-full rounded-[2.2rem] object-cover shadow-xl ring-1 ring-white/60"
              loading="lazy"
            />
            <div className="animate-floaty-soft absolute -bottom-3 right-4 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-xl ring-1 ring-linen">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-olivesoft text-olivedeep">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-black text-ink">قفازات معقمة وزي رسمي موحد</p>
                <p className="text-[11px] font-bold text-cocoa">خصوصية تامة بدون أي إزعاج</p>
              </div>
            </div>
          </Reveal>

          {/* Points */}
          <div>
            <SectionHeader
              chip="أخصائيو درّة سبا"
              chipClass="bg-goldsoft text-golddeep ring-gold/30"
              title="خبراء إندونيسيون رجال.."
              highlight="بأعلى معايير الخصوصية والتعقيم"
              highlightClass="text-golddeep"
              sub="لأن الهدية الحقيقية هي راحة بالك واطمئنانك.. نلتزم بخصوصية البيوت السعودية، ونرسل أمهر الأخصائيين الإندونيسيين الرجال بالقفازات المعقمة والزي الرسمي، وبوصول هادئ بدون أي إزعاج."
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {therapistPoints.map((pt, i) => (
                <Reveal key={pt.title} delay={i * 80}>
                  <div className="flex h-full gap-3 rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-linen">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold to-golddeep text-white shadow-md">
                      <pt.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-black text-ink">{pt.title}</h3>
                      <p className="mt-0.5 text-xs font-bold leading-5 text-cocoa">{pt.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Stats counter */}
        <Reveal delay={120}>
          <dl className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 rounded-[2rem] bg-ink px-4 py-5 text-center shadow-xl sm:grid-cols-4 sm:px-8">
            {stats.map((s) => (
              <div key={s.label} className="py-1">
                <dd className="text-shimmer-gold text-2xl font-black sm:text-3xl">{s.value}</dd>
                <dt className="mt-0.5 text-xs font-bold text-cream/75">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= Testimonials ================= */
const reviews = [
  {
    text: "حجزت «باقة انتعاش» لأبوي هدية.. وصولهم كان في قمة الهدوء والذوق بدون أي إزعاج في البيت. والأخصائي الإندونيسي بالقفازات ومعقم كل شيء. أبوي للحين يدعي لي.",
    name: "أم عبدالله",
    city: "الرياض",
  },
  {
    text: "زوجي رجع من جلسة VIP شخص ثاني تماماً.. الخصوصية كانت ممتازة والأخصائي محترف وهادئ جداً. صارت هديتي السنوية المعتمدة.",
    name: "نورة العتيبي",
    city: "الرياض",
  },
  {
    text: "أكثر شي عجبني احترامهم لحرمة البيت، وصلوا بهدوء تام وسووا كل التجهيزات بدون أي صوت أو ربكة. شغل إندونيسي احترافي ونظيف 100%.",
    name: "سارة القحطاني",
    city: "الرياض",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="relative scroll-mt-20 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          chip="قالوا عن هديتهم"
          chipClass="bg-rosesoft text-rosedeep ring-rose/30"
          title="عميلات أهدين.."
          highlight="فكسبن دعوة وابتسامة"
          highlightClass="text-rosedeep"
          sub="تجارب حقيقية من نساء اخترن أن يقلن «شكراً» بطريقة يعيشها بكل حواسه."
        />
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <figure className="relative flex h-full flex-col justify-between rounded-2xl bg-white p-5 shadow-sm ring-1 ring-linen">
                <div>
                  <Quote className="h-7 w-7 text-sand" fill="currentColor" />
                  <div className="mt-1 flex gap-0.5" dir="ltr">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="mt-2.5 text-xs font-bold leading-6 text-ink/85 sm:text-[13.5px]">
                    {r.text}
                  </blockquote>
                </div>
                <figcaption className="mt-4 flex items-center gap-2 border-t border-dashed border-linen pt-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-rose to-rosedeep text-xs font-black text-white">
                    {r.name.charAt(0)}
                  </span>
                  <span className="text-xs font-black text-ink">{r.name}</span>
                  <span className="text-[11px] font-bold text-cocoa/70">— {r.city}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Final CTA Section ================= */
export function FinalCta() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.2rem] bg-gradient-to-bl from-olivedeep via-[#3f4c2c] to-ink px-5 py-10 text-center text-white shadow-xl sm:px-10 sm:py-12">
          <div className="dots-pattern absolute inset-0 opacity-15" aria-hidden />
          <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-rose/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-gold/25 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-3.5 py-1 text-xs font-black ring-1 ring-white/25 backdrop-blur">
              <Heart className="h-3.5 w-3.5 fill-rose text-rose" />
              الهدية التي لا تُنسى.. تُعاش ولا تُوصف
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-black leading-snug sm:text-3xl sm:leading-snug">
              جاهزة تقولين «شكراً» بطريقتهم المفضلة؟
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs font-bold leading-6 text-white/80 sm:text-sm">
              خطوة واحدة تفصلك عن ابتسامته. اختاري وجهة هديتك، واحجزي في ثوانٍ — واتركي علينا
              صناعة لحظة استرخاء تليق به، بخصوصية تامة بدون أي إزعاج للمنزل.
            </p>

            <div className="mx-auto mt-6 grid max-w-xl gap-2.5 sm:grid-cols-3">
              <a
                href="#father"
                className="group flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3.5 text-sm font-black text-olivedeep shadow-lg transition-all hover:bg-cream active:scale-[0.98]"
              >
                <Crown className="h-5 w-5 transition-transform group-hover:-rotate-6" />
                <span>باقات «أبوي»</span>
              </a>
              <a
                href="#husband"
                className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-rose to-rosedeep px-4 py-3.5 text-sm font-black text-white shadow-lg shadow-rose/30 transition-all hover:brightness-105 active:scale-[0.98]"
              >
                <Heart className="h-5 w-5 fill-current transition-transform group-hover:scale-110" />
                <span>باقات «زوجي»</span>
              </a>
              <a
                href="#brother"
                className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-[#714413] to-[#a36826] px-4 py-3.5 text-sm font-black text-white shadow-lg shadow-amber-900/30 transition-all hover:brightness-105 active:scale-[0.98]"
              >
                <Shield className="h-5 w-5 fill-current transition-transform group-hover:scale-110" />
                <span>باقات «أخوي»</span>
              </a>
            </div>

            <a
              href={waGeneral()}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-black text-goldsoft underline decoration-gold/50 underline-offset-8 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              <span>أو تحدثي معنا مباشرة عبر واتساب — نردّ فوراً</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
