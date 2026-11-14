import React from "react";
import {
  Award,
  Camera,
  Check,
  Clock,
  Flame,
  Gift,
  Phone,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";
import {
  HYGIENE_KIT_LINE,
  INDONESIAN_SPECIALISTS_LINE,
  PHONE_HREF,
  REAL_HOME_PHOTO_BADGE,
  SpaPackage,
  UNIFIED_WINTER_OIL,
  buildWhatsAppPackageUrl,
} from "../data/packages";
import { TabbyTamaraBadges, WhatsAppIcon } from "./BrandIcons";
import { trackBookingIntentClick } from "../utils/tracking";

interface PackageCardProps {
  pkg: SpaPackage;
  index: number;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, index }) => {
  const isAlternated = index % 2 === 1;
  const whatsappHref = buildWhatsAppPackageUrl(pkg.whatsappMessage);

  const handleWhatsAppClick = () => {
    trackBookingIntentClick({
      packageId: pkg.id,
      packageName: pkg.name,
      packagePrice: pkg.priceNumeric,
      buttonType: "WhatsApp",
      placement: "package_card",
    });
  };

  const handlePhoneClick = () => {
    trackBookingIntentClick({
      packageId: pkg.id,
      packageName: pkg.name,
      packagePrice: pkg.priceNumeric,
      buttonType: "Phone",
      placement: "package_card",
    });
  };

  return (
    <article
      id={`pkg-${pkg.id}`}
      className={`relative rounded-[26px] overflow-hidden bg-white border transition-shadow duration-300 ${
        pkg.isVip
          ? "border-[#c9a227]/75 card-shadow-vip"
          : pkg.highlightWarmStonesCard
            ? "border-[#b87333]/45 card-shadow"
            : "border-[#0f2340]/10 card-shadow"
      }`}
    >
      {/* Subtle Top Accent Line for VIP or Warm Stones Package */}
      {pkg.isVip && (
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-l from-[#8a6a24] via-[#f3e6c3] to-[#8a6a24] z-10" />
      )}
      {pkg.highlightWarmStonesCard && !pkg.isVip && (
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-l from-[#9c5a25] via-[#d99b52] to-[#9c5a25] z-10" />
      )}

      {/* Top Meta Bar: Category Badge + Duration & Services Count */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-5 sm:px-7 pt-5">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-extrabold ${
            pkg.isVip
              ? "bg-gradient-to-l from-[#0f2340] to-[#274a7d] text-[#f3e6c3] border border-[#c9a227]/50"
              : pkg.highlightWarmStonesCard
                ? "bg-[#fdf3e7] text-[#7c4215] border border-[#b87333]/35"
                : "bg-[#0f2340]/[0.05] text-[#0f2340] border border-[#0f2340]/10"
          }`}
        >
          {pkg.isVip ? (
            <Award className="w-3.5 h-3.5 text-[#d9b64a] shrink-0" />
          ) : pkg.highlightWarmStonesCard ? (
            <Flame className="w-3.5 h-3.5 text-[#b85d19] shrink-0" />
          ) : (
            <Sparkles className="w-3.5 h-3.5 text-[#a97e3f] shrink-0" />
          )}
          <span>{pkg.categoryBadge}</span>
        </span>

        <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#5b6b82]">
          <Clock className="w-3.5 h-3.5 text-[#a97e3f] shrink-0" />
          <span>{pkg.durationAndCount}</span>
        </span>
      </div>

      {/* Main Card Body — Exact Landing Page Image Proportions & Structure (lg:grid-cols-[1fr_1.05fr]) */}
      <div
        className={`grid lg:grid-cols-[1fr_1.05fr] gap-0 mt-4 ${
          isAlternated ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Full-Height Package Image Column Matching durtalmsaj.sa/home */}
        <div className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[490px] bg-[#efe9dc] overflow-hidden">
          <img
            src={pkg.imageSrc}
            alt={pkg.imageAlt}
            loading={index === 0 ? "eager" : "lazy"}
            decoding={index === 0 ? "sync" : "async"}
            fetchPriority={index === 0 ? "high" : "auto"}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          {/* Soft bottom gradient for crisp readability of badge & price card */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1a30]/75 via-[#0b1a30]/10 to-transparent" />

          {/* Discount Starburst Badge in Top-Right Corner (Preserved Exactly) */}
          <div className="absolute top-4 right-4 z-10 select-none">
            <div className="relative w-[86px] h-[86px] sm:w-[98px] sm:h-[98px] flex flex-col items-center justify-center text-center rotate-[-6deg]">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full drop-shadow-xl"
                aria-hidden="true"
              >
                <path
                  d="M50 2 L58 12 L70 8 L73 20 L85 22 L83 34 L94 40 L88 50 L94 60 L83 66 L85 78 L73 80 L70 92 L58 88 L50 98 L42 88 L30 92 L27 80 L15 78 L17 66 L6 60 L12 50 L6 40 L17 34 L15 22 L27 20 L30 8 L42 12 Z"
                  fill="#0b1a30"
                  stroke="#d9b64a"
                  strokeWidth="2.5"
                />
              </svg>
              <span
                className="relative font-display-black text-[22px] sm:text-[26px] text-[#f3e6c3] leading-none"
                dir="ltr"
              >
                -{pkg.discountPercent}
              </span>
              <span className="relative text-[10px] font-bold text-[#d9b64a] mt-0.5">
                خصم شتوي
              </span>
            </div>
          </div>

          {/* Special Warm Stones Pill on Package 4 (Top-Left) */}
          {pkg.highlightWarmStonesCard && (
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3b2313]/92 backdrop-blur-xs text-[#fce7c8] border border-[#d99b52]/60 px-3 py-1.5 text-[11px] font-extrabold shadow-md">
                <Flame className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
                <span>الأحجار الدافئة + الزيت الدافئ</span>
              </span>
            </div>
          )}

          {/* Bottom Image Overlay: Real Client Home Badge + Price & Tabby/Tamara Card */}
          <div className="absolute bottom-4 right-4 left-4 z-10 flex flex-col gap-2">
            {/* Required Badge: صور واقعية من داخل منازل العملاء */}
            <span className="self-start rounded-full bg-white/96 backdrop-blur-xs px-3.5 py-1.5 text-[11.5px] sm:text-[12px] font-extrabold text-[#0f2340] border border-[#c9a227]/60 shadow-md flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-[#a97e3f] shrink-0" />
              <span>{REAL_HOME_PHOTO_BADGE}</span>
            </span>

            {/* Price & Tabby/Tamara Card (Exact Landing Page Overlay Style) */}
            <div className="rounded-2xl bg-white/97 backdrop-blur-md border border-[#0f2340]/10 p-3.5 flex items-center justify-between gap-3 shadow-lg">
              <div>
                <div className="text-[11.5px] text-[#5b6b82] font-bold">
                  السعر قبل:{" "}
                  <span className="line-through text-red-500 font-extrabold">
                    {pkg.oldPriceDisplay}
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="font-display-black text-[34px] sm:text-[40px] leading-none text-[#0f2340] tabular-nums">
                    {pkg.priceDisplay}
                  </span>
                  <span className="font-extrabold text-[13.5px] text-[#a97e3f]">
                    {pkg.priceUnit}
                  </span>
                </div>
                <div className="text-[10.5px] text-emerald-700 font-extrabold mt-0.5">
                  شامل الضريبة والتوصيل والتجهيز
                </div>
              </div>

              <div className="text-left shrink-0">
                <div className="text-[11px] font-extrabold text-[#0f2340]">
                  قسّطها على 4 دفعات
                </div>
                <TabbyTamaraBadges />
              </div>
            </div>
          </div>
        </div>

        {/* Content & Conversion Column */}
        <div className="p-5 sm:p-7 flex flex-col justify-between">
          <div>
            {/* 1. Package Name in Large Dark Navy */}
            <h2 className="font-display-black text-[26px] sm:text-[32px] leading-tight text-[#0f2340]">
              {pkg.name}
            </h2>

            {/* 2. Winter Hook Subtitle Directly Below Package Name (Description Removed as Requested) */}
            <p className="mt-1.5 font-extrabold text-[14px] sm:text-[15px] leading-relaxed text-[#a97e3f]">
              {pkg.marketingTitle}
            </p>

            {/* 3. Beige Services Box + Copper Warm-Oil Strip + Light Green Freebies */}
            <div className="mt-4 rounded-2xl bg-[#f6f1e5] border border-[#c9a227]/25 p-4">
              <div className="text-[12.5px] font-extrabold text-[#0f2340] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#a97e3f] shrink-0" />
                <span>وش تشمل الجلسة؟</span>
              </div>

              <ul className="space-y-2">
                {pkg.includes.map((item) => (
                  <li
                    key={item.title}
                    className={`flex items-start gap-2 text-[13.5px] leading-7 text-[#1b2a44] ${
                      item.highlightWarmStones
                        ? "rounded-xl bg-gradient-to-l from-[#fff5e6] to-[#fae7cd] border border-[#c67d38]/45 px-3 py-2 shadow-2xs"
                        : ""
                    }`}
                  >
                    <span
                      className={`mt-1.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center ${
                        item.highlightWarmStones
                          ? "bg-[#9c5a25] text-[#fff4e4]"
                          : "bg-[#0f2340] text-[#f3e6c3]"
                      }`}
                    >
                      {item.highlightWarmStones ? (
                        <Flame className="w-3 h-3" />
                      ) : (
                        <Check className="w-3 h-3" strokeWidth={3} />
                      )}
                    </span>
                    <div>
                      <span className="font-extrabold text-[#0f2340]">
                        {item.title}{" "}
                      </span>
                      <span className="font-bold text-[#2b3c56]">
                        {item.detail}
                      </span>
                      {item.highlightWarmStones && (
                        <span className="mr-1.5 inline-block rounded-full bg-[#9c5a25]/15 text-[#7c4215] border border-[#9c5a25]/25 px-2 py-0.5 text-[10.5px] font-extrabold">
                          مفضلة لأجواء الشتاء
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Copper/Light-Gold Warm Oil Strip (Integrated within the Massage Session) */}
              <div className="mt-3 rounded-xl copper-warm-strip border border-[#b87333]/35 px-3.5 py-2.5">
                <div className="flex items-center justify-between flex-wrap gap-1">
                  <span className="text-[12.5px] sm:text-[13px] font-extrabold text-[#6e3910]">
                    {UNIFIED_WINTER_OIL.headline}
                  </span>
                  <span className="text-[10.5px] font-extrabold text-[#8a5122] bg-white/75 border border-[#b87333]/25 rounded-full px-2 py-0.5">
                    ضمن جلسة المساج • بدرجة دفء آمنة
                  </span>
                </div>
                <p className="mt-1 text-[12.5px] leading-6 text-[#4d2f16] font-bold">
                  {pkg.winterFeatureText}
                </p>
              </div>

              {/* Free Gifts in Light Green Badges */}
              <div className="mt-3 pt-3 border-t border-dashed border-[#a97e3f]/30">
                <div className="text-[12.5px] font-extrabold text-[#0f7b4d] mb-2 flex items-center gap-1.5">
                  <Gift className="w-4 h-4 shrink-0" />
                  <span>هداياك المجانية</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {pkg.freebies.map((gift) => (
                    <span
                      key={gift}
                      className="inline-flex items-center gap-1 rounded-full bg-emerald-600/10 border border-emerald-600/25 text-emerald-800 text-[12px] font-extrabold px-3 py-1"
                    >
                      <span>+ {gift} مجاناً</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Concise "من تناسب؟" */}
            <div className="mt-3 rounded-2xl bg-[#eef3f0] border border-[#3f7d6b]/25 px-3.5 py-2.5">
              <p className="text-[12.5px] sm:text-[13px] leading-6 text-[#23403a] font-bold">
                <span className="font-extrabold text-[#0f2340]">
                  من تناسب؟{" "}
                </span>
                {pkg.suitableFor}
              </p>
            </div>
          </div>

          <div className="mt-4">
            {/* Side-by-Side Booking Buttons on Desktop, Comfortable Touch Targets on Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-[1.35fr_1fr] gap-2.5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="min-h-[52px] px-4 py-3 rounded-2xl bg-[#22c15e] hover:bg-[#1aa851] active:scale-[0.99] transition text-white font-extrabold text-[14.5px] sm:text-[15px] shadow-md flex items-center justify-center gap-2 text-center"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>{pkg.whatsappButtonLabel}</span>
              </a>

              <a
                href={PHONE_HREF}
                onClick={handlePhoneClick}
                className="min-h-[52px] px-4 py-3 rounded-2xl bg-[#0f2340] hover:bg-[#17345f] active:scale-[0.99] transition text-white font-extrabold text-[14px] sm:text-[14.5px] shadow-sm flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4 text-[#d9b64a] shrink-0" />
                <span>{pkg.phoneButtonLabel}</span>
              </a>
            </div>

            {/* Indonesian Specialists Line + Equipment, Hygiene & Tabby/Tamara Note */}
            <div className="mt-3 space-y-2 pt-3 border-t border-[#0f2340]/[0.08]">
              <div className="flex items-start gap-2 rounded-xl bg-[#0f2340]/[0.04] border border-[#0f2340]/10 px-3 py-2">
                <UserCheck className="w-4 h-4 text-[#a97e3f] shrink-0 mt-0.5" />
                <p className="text-[12px] leading-6 font-extrabold text-[#0f2340]">
                  {INDONESIAN_SPECIALISTS_LINE}
                </p>
              </div>

              <div className="flex items-start gap-2 px-1">
                <ShieldCheck className="w-4 h-4 text-[#3f7d6b] shrink-0 mt-0.5" />
                <p className="text-[11.5px] leading-6 font-bold text-[#4e5f76]">
                  {HYGIENE_KIT_LINE} • قسّطها عبر تابي وتمارا بدون فوائد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
