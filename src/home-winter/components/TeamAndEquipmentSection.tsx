import React from "react";
import { BadgeCheck } from "lucide-react";
import {
  TEAM_EQUIPMENT_CARDS,
  buildWhatsAppPackageUrl,
} from "../data/packages";
import { trackBookingIntentClick } from "../utils/tracking";

export const TeamAndEquipmentSection: React.FC = () => {
  const confirmAppointmentHref = buildWhatsAppPackageUrl(
    "السلام عليكم، أرغب بالتأكد من موعد وصول الأخصائي لخدمة درّة سبا المنزلية في الرياض."
  );

  const handleConfirmClick = () => {
    trackBookingIntentClick({
      packageId: "team_confirm_appointment",
      packageName: "تأكيد موعد وصول الأخصائي — قسم الفريق",
      packagePrice: null,
      buttonType: "WhatsApp",
      placement: "package_card",
    });
  };

  return (
    <section
      id="team"
      aria-labelledby="team-section-heading"
      className="bg-[#f1e9d9]/65 border-y border-[#0f2340]/10"
    >
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0f2340] text-white px-4 py-2 text-[12.5px] font-bold shadow-xs">
            <BadgeCheck className="w-4 h-4 text-[#d9b64a] shrink-0" />
            <span>فريق محترف.. وتجهيز يشرّف</span>
          </div>

          <h2
            id="team-section-heading"
            className="font-display-black text-[26px] sm:text-[36px] leading-tight mt-3 text-[#0f2340]"
          >
            تعرف على <span className="gold-text">أخصائييك وتجهيزك</span> قبل ما
            نطرق بابك
          </h2>

          <p className="text-[#5b6b82] text-[13.5px] sm:text-[14px] leading-7 mt-2 font-bold">
            نفس الزي البني الرسمي بشعار DORH SPA اللي شفته بصور فريقنا — ونفس
            الشنط والأدوات المعقمة — هي اللي توصلك لحد بيتك
          </p>
        </div>

        {/* Main Grid: Right Specialist Uniform Card + Left 6 Equipment Cards (RTL) */}
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-4 items-stretch">
          {/* Official Brown Uniform Specialist Card */}
          <div className="relative rounded-[26px] overflow-hidden bg-white border border-[#c9a227]/40 card-shadow-lg min-h-[400px] sm:min-h-[440px]">
            <img
              src="/home-winter/images/team-uniform.jpg"
              alt="أخصائي إندونيسي رجالي محترف من درّة سبا بالزي البني الرسمي بشعار DORH SPA على الصدر"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1a30]/85 via-transparent to-transparent" />

            {/* Top Badges */}
            <div className="absolute top-4 right-4 left-4 flex flex-col items-start gap-2 z-10">
              <span className="rounded-full bg-white/95 backdrop-blur-xs px-3 py-1.5 text-[11px] sm:text-[11.5px] font-extrabold text-[#0f2340] border border-[#c9a227]/40 shadow-xs">
                🦺 الزي الرسمي: أوفرول بني + تيشيرت أبيض + شعار DORH SPA على
                الصدر
              </span>
              <span className="rounded-full bg-[#22c15e] px-3 py-1.5 text-[11.5px] font-extrabold text-white shadow-xs">
                أخصائيون إندونيسيون رجال محترفون فقط
              </span>
            </div>

            {/* Bottom Info & Confirm Appointment CTA */}
            <div className="absolute bottom-4 right-4 left-4 z-10 rounded-2xl bg-white/96 backdrop-blur-md border border-[#0f2340]/10 p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
              <div className="text-[12px] font-bold text-[#0f2340] leading-6">
                تعرفه من أول نظرة: نفس اللبس البني، شعار DORH SPA،
                <br className="hidden sm:inline" /> وبطاقة تعريفية + تأكيد
                واتساب قبل الوصول
              </div>
              <a
                href={confirmAppointmentHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleConfirmClick}
                className="shrink-0 rounded-xl bg-[#0f2340] hover:bg-[#1a3a68] transition text-white text-[12px] font-extrabold px-4 py-2.5 shadow-xs"
              >
                تأكيد موعدي
              </a>
            </div>
          </div>

          {/* 6 Equipment & Hygiene Cards */}
          <div className="grid sm:grid-cols-2 gap-3">
            {TEAM_EQUIPMENT_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl bg-white border border-[#0f2340]/10 p-4 card-shadow hover:border-[#c9a227]/50 transition flex flex-col justify-center"
              >
                <div className="text-2xl leading-none" aria-hidden="true">
                  {card.emoji}
                </div>
                <h3 className="mt-2.5 font-display text-[14.5px] text-[#0f2340]">
                  {card.title}
                </h3>
                <p className="mt-1 text-[12px] leading-6 text-[#5b6b82] font-bold">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Authentic Verification Caption */}
        <p className="mt-4 text-center text-[12px] text-[#5b6b82] font-bold">
          📸 صور فريقنا وأدواتنا الحقيقية أرسلها العميل — والمعروض أعلاه توثيق
          مطابق لزيّنا وتجهيزنا الرسمي
        </p>
      </div>
    </section>
  );
};
