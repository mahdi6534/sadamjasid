import {
  CalendarCheck2,
  Check,
  Clock3,
  Gift,
  Lock,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import {
  discountPct,
  fmt,
  FRESHA_URL,
  PHONE_INTL,
  waLink,
  type SpaPackage,
} from "../data/packages";
import { PayBadges, Reveal, Riyal } from "./shared";
import { cn } from "../utils/cn";

type Accent = "olive" | "rose" | "gold" | "amber";

const accentStyles: Record<
  Accent,
  {
    chip: string;
    giftBox: string;
    giftIcon: string;
    price: string;
    badge: string;
    ring: string;
  }
> = {
  olive: {
    chip: "bg-olivesoft text-olivedeep",
    giftBox: "bg-gradient-to-l from-olivesoft/90 to-sand/60 ring-olive/20",
    giftIcon: "bg-olive text-white shadow-olive/30",
    price: "text-olivedeep",
    badge: "from-olivedeep to-olive",
    ring: "hover:ring-olive/40",
  },
  rose: {
    chip: "bg-rosesoft text-rosedeep",
    giftBox: "bg-gradient-to-l from-rosesoft/90 to-sand/60 ring-rose/20",
    giftIcon: "bg-rose text-white shadow-rose/30",
    price: "text-rosedeep",
    badge: "from-rosedeep to-rose",
    ring: "hover:ring-rose/40",
  },
  gold: {
    chip: "bg-goldsoft text-golddeep",
    giftBox: "bg-gradient-to-l from-goldsoft/90 to-sand/60 ring-gold/25",
    giftIcon: "bg-gradient-to-br from-golddeep to-gold text-white shadow-gold/40",
    price: "text-golddeep",
    badge: "from-golddeep to-gold",
    ring: "hover:ring-gold/50",
  },
  amber: {
    chip: "bg-[#faedd8] text-[#8c581e]",
    giftBox: "bg-gradient-to-l from-[#faedd8]/90 to-sand/60 ring-[#8c581e]/20",
    giftIcon: "bg-[#8c581e] text-white shadow-[#8c581e]/30",
    price: "text-[#8c581e]",
    badge: "from-[#714413] to-[#a36826]",
    ring: "hover:ring-[#a36826]/40",
  },
};

export default function PackageCard({
  pkg,
  accent,
  recipient,
  delay = 0,
  featured = false,
}: {
  pkg: SpaPackage;
  accent: Accent;
  recipient: "والدي" | "زوجي" | "أخوي";
  delay?: number;
  featured?: boolean;
}) {
  const a = accentStyles[accent];
  const pct = discountPct(pkg);

  return (
    <Reveal
      as="article"
      delay={delay}
      className={cn(
        "card-sheen group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-22px_rgba(111,91,69,0.35)] ring-1 ring-linen transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-20px_rgba(111,91,69,0.45)]",
        featured && "ring-2 ring-gold/70 shadow-[0_24px_55px_-20px_rgba(191,154,78,0.45)]",
        a.ring
      )}
    >
      {/* 1) Clean, culturally authentic image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand/50 sm:aspect-[16/9.5]">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

        {/* Discount badge top-left */}
        <div className="absolute left-3.5 top-3.5 flex flex-col items-start gap-1.5">
          <span className="rounded-full bg-gradient-to-l from-golddeep to-gold px-3 py-1 text-xs font-black text-white shadow-md shadow-gold/40">
            وفّري {pct}٪
          </span>
          {pkg.duration && (
            <span className="flex items-center gap-1 rounded-full bg-ink/85 px-2.5 py-1 text-[11px] font-black text-cream backdrop-blur">
              <Clock3 className="h-3 w-3 text-gold" />
              {pkg.duration}
            </span>
          )}
        </div>

        {/* Badge top-right */}
        {pkg.badge && (
          <div className="absolute right-3.5 top-3.5">
            <span
              className={cn(
                "inline-block rounded-full bg-gradient-to-l px-3 py-1 text-[11px] font-black text-white shadow-md",
                a.badge
              )}
            >
              {pkg.badge}
            </span>
          </div>
        )}

        {/* Title over image */}
        <div className="absolute bottom-3 right-4 left-4 text-white">
          <h3 className="text-xl font-black drop-shadow-sm sm:text-2xl">{pkg.name}</h3>
        </div>
      </div>

      {/* 2) Card Content Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[13.5px] font-bold leading-6 text-cocoa">{pkg.tagline}</p>

        {/* Highlight: 100% Complete Privacy Upon Arrival (User's specific requirement) */}
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-sand/60 px-3 py-2 text-[12px] font-black text-olivedeep ring-1 ring-olive/20">
          <Lock className="h-4 w-4 shrink-0 text-golddeep" />
          <span>خصوصية تامة في الوصول من مختصينا بدون أي إزعاج للمنزل</span>
        </div>

        {/* Professional therapist reassurance: Indonesian male expert wearing hygiene gloves */}
        <div className="mt-2 flex items-center gap-2 text-[11.5px] font-bold text-cocoa/90">
          <ShieldCheck className="h-3.5 w-3.5 text-wa" />
          <span>خبير إندونيسي يرتدي القفازات المعقمة والزي الرسمي الكامل</span>
        </div>

        {/* Services List with FREE badges */}
        <ul className="mt-3.5 space-y-2 border-t border-dashed border-linen pt-3.5">
          {pkg.services.map((s) => (
            <li
              key={s.label}
              className="flex items-center gap-2 text-[13.5px] font-bold text-ink/90"
            >
              <span
                className={cn("grid h-5 w-5 shrink-0 place-items-center rounded-full", a.chip)}
              >
                <Check className="h-3.5 w-3.5" strokeWidth={3.5} />
              </span>
              <span className="flex-1">{s.label}</span>
              {s.free && (
                <span className="shrink-0 rounded-md bg-wa px-1.5 py-0.5 text-[10px] font-black text-white shadow-sm shadow-wa/30">
                  مجاناً
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* Gift Feature Highlight Box */}
        <div className={cn("mt-3.5 flex gap-2.5 rounded-2xl p-3 ring-1", a.giftBox)}>
          <span
            className={cn(
              "grid h-8 w-8 shrink-0 place-items-center rounded-xl shadow-md",
              a.giftIcon
            )}
          >
            <Gift className="h-4 w-4" />
          </span>
          <p className="text-[12.5px] font-bold leading-5 text-ink/85">
            <span className="font-black text-ink">ميزة الهدية: </span>
            {pkg.giftFeature}
          </p>
        </div>

        {/* Price & Currency */}
        <div className="mt-4 flex items-end justify-between gap-2">
          <div className="flex items-end gap-2">
            <span
              className={cn(
                "flex items-center gap-1.5 text-[1.95rem] font-black leading-none",
                a.price
              )}
            >
              {fmt(pkg.price)}
              <Riyal />
            </span>
            <span className="flex items-center gap-1 pb-0.5 text-[15px] font-bold text-cocoa/60 line-through decoration-rose/60 decoration-2">
              {fmt(pkg.oldPrice)}
              <Riyal className="h-[0.7em]" />
            </span>
          </div>
          <span className="pb-1 text-[11px] font-bold text-cocoa/70">
            شامل الإضافات المجانية
          </span>
        </div>

        {/* Tabby & Tamara installment badges */}
        <PayBadges className="mt-2.5 flex-wrap" />

        {/* 3) The 3 CTA Buttons Layout (Exactly matching User's Image #2) */}
        <div className="mt-auto space-y-2 pt-5">
          {/* Top Full-Width Button: WhatsApp */}
          <a
            href={waLink(pkg.name, recipient)}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#22c55e] px-4 py-3 text-[14.5px] font-black text-white shadow-md shadow-emerald-500/25 transition-all duration-200 hover:bg-[#1eb655] hover:shadow-lg hover:shadow-emerald-500/35 active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5" />
            <span>احجزي هديتك الآن – واتساب</span>
          </a>

          {/* Bottom Row (2 Columns side-by-side: Fresha & Call) */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${PHONE_INTL}`}
              className="flex items-center justify-center gap-1.5 rounded-2xl bg-[#2a2521] px-3 py-2.5 text-xs font-black text-cream shadow-sm transition-all duration-200 hover:bg-black active:scale-[0.98]"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>حجز بالاتصال</span>
            </a>
            <a
              href={FRESHA_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-2xl bg-gradient-to-l from-[#8e4956] to-[#ab5a68] px-3 py-2.5 text-xs font-black text-white shadow-sm shadow-rose/20 transition-all duration-200 hover:brightness-105 active:scale-[0.98]"
            >
              <CalendarCheck2 className="h-3.5 w-3.5" />
              <span>حجز فوري Fresha</span>
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
