import { useEffect, useState } from "react";
import {
  Crown,
  Heart,
  Lock,
  MessageCircle,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { PHONE_DISPLAY, PHONE_INTL, WHATSAPP_BASE } from "../data/packages";

const WA_HUSBAND = `${WHATSAPP_BASE}?text=${encodeURIComponent(
  "مرحباً درة سبا، أود تنسيق هدية ومفاجأة سبا رومانسية خاصة لزوجي، ممكن ترشيح الباقة الأنسب وطريقة التنسيق الهادئة وبخصوصية تامة؟"
)}`;

const WA_FATHER = `${WHATSAPP_BASE}?text=${encodeURIComponent(
  "مرحباً درة سبا، أود إهداء والدي جلسة استرخاء وبرّ ترد له الروح وتريّح بدنه، ممكن ترشيح الباقة المناسبة لعمره وصحته وبخصوصية تامة؟"
)}`;

const WA_BROTHER = `${WHATSAPP_BASE}?text=${encodeURIComponent(
  "مرحباً درة سبا، أود إهداء أخوي (سندي وعضيدي) جلسة مساج وريكفري مميزة، ممكن ترشيح الباقة المناسبة وبخصوصية تامة؟"
)}`;

export default function GiftWhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"husband" | "father" | "brother">("husband");

  useEffect(() => {
    // Check if previously dismissed in this session
    const dismissed = sessionStorage.getItem("dorh_popup_dismissed");

    // Check if query param ?popup=true or hash #popup is present (for instant testing/preview)
    const urlParams = new URLSearchParams(window.location.search);
    const forceShow =
      urlParams.get("popup") === "true" || window.location.hash === "#popup";

    if (forceShow) {
      setIsOpen(true);
      return;
    }

    if (dismissed) return;

    // Trigger after exactly 2 minutes (120,000 milliseconds)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 120000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("dorh_popup_dismissed", "true");
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      className="fixed inset-0 z-[100] flex items-end justify-center p-3 sm:items-center sm:p-4"
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-ink/65 backdrop-blur-md transition-opacity duration-300"
        aria-hidden
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-[2.2rem] bg-gradient-to-b from-white via-cream to-white p-5 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5)] ring-1 ring-gold/30 transition-all duration-300 sm:p-7">
        {/* Soft decorative background glows */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-rose/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-olive/15 blur-2xl" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          type="button"
          aria-label="إغلاق النافذة"
          className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-sand/80 text-ink/70 transition-all hover:bg-sand hover:text-ink active:scale-95"
        >
          <X className="h-4.5 w-4.5" />
        </button>

        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-l from-rose/15 via-gold/15 to-olive/15 px-3.5 py-1 text-xs font-black text-ink ring-1 ring-gold/30">
            <Sparkles className="h-3.5 w-3.5 text-golddeep" />
            تنسيق خاص عبر واتساب — رد فوري
          </span>
          <h3
            id="popup-title"
            className="mt-2.5 text-2xl font-black leading-snug text-ink sm:text-[1.7rem]"
          >
            محتارة في اختيار الهدية؟
          </h3>
          <p className="mx-auto mt-1 max-w-sm text-xs font-bold leading-5 text-cocoa sm:text-[13px]">
            دعينا نساعدك في تنسيق أرقى لحظة استرخاء لمن تحبين، مع كارت إهداء مخصص باسمه
            وبأقصى درجات الخصوصية
          </p>
        </div>

        {/* Interactive Emotional Tab Switcher (Husband / Father / Brother) */}
        <div className="mt-4 grid grid-cols-3 gap-1 rounded-2xl bg-sand/70 p-1.5 ring-1 ring-linen">
          <button
            type="button"
            onClick={() => setActiveTab("husband")}
            className={`flex items-center justify-center gap-1.5 rounded-xl py-2 px-1 text-[11.5px] font-black transition-all ${
              activeTab === "husband"
                ? "bg-gradient-to-l from-rosedeep to-rose text-white shadow-md shadow-rose/30 scale-[1.02]"
                : "text-cocoa hover:text-ink"
            }`}
          >
            <Heart className="h-3.5 w-3.5 fill-current" />
            <span>لزوجي (رومانسية)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("father")}
            className={`flex items-center justify-center gap-1.5 rounded-xl py-2 px-1 text-[11.5px] font-black transition-all ${
              activeTab === "father"
                ? "bg-gradient-to-l from-olivedeep to-olive text-white shadow-md shadow-olive/30 scale-[1.02]"
                : "text-cocoa hover:text-ink"
            }`}
          >
            <Crown className="h-3.5 w-3.5" />
            <span>لأبوي (برّ وعاطفة)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("brother")}
            className={`flex items-center justify-center gap-1.5 rounded-xl py-2 px-1 text-[11.5px] font-black transition-all ${
              activeTab === "brother"
                ? "bg-gradient-to-l from-[#714413] to-[#a36826] text-white shadow-md shadow-amber-900/30 scale-[1.02]"
                : "text-cocoa hover:text-ink"
            }`}
          >
            <Shield className="h-3.5 w-3.5" />
            <span>لأخوي (عزوة وسند)</span>
          </button>
        </div>

        {/* Tab 1: Husband (Romantic) */}
        {activeTab === "husband" && (
          <div className="mt-4 space-y-3 animate-in fade-in zoom-in-95 duration-200">
            <div className="rounded-2xl border border-rose/25 bg-gradient-to-l from-rosesoft/50 via-white to-rosesoft/30 p-3.5 text-right">
              <div className="flex items-center gap-2 text-rosedeep">
                <Heart className="h-4 w-4 fill-rose text-rose" />
                <span className="text-xs font-black">
                  «لأنك شريك العمر وتستحق أرقى دلال»
                </span>
              </div>
              <p className="mt-1 text-[12px] font-bold leading-5 text-ink/85">
                نساعدك في ترتيب مفاجأة استثنائية لزوجك: باقات مساج بالأحجار الدافئة أو باقة VIP
                الملكية، مع كارت إهداء رقمي رومانسي باسمك يصله بهدوء وخصوصية تامة عند الوصول.
              </p>
            </div>

            <a
              href={WA_HUSBAND}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#22c55e] px-4 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-500/30 transition-all hover:bg-[#1eb655] hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              <span>تنسيق هدية الزوج الرومانسية — واتساب</span>
            </a>
          </div>
        )}

        {/* Tab 2: Father (Emotional & Loving) */}
        {activeTab === "father" && (
          <div className="mt-4 space-y-3 animate-in fade-in zoom-in-95 duration-200">
            <div className="rounded-2xl border border-olive/25 bg-gradient-to-l from-olivesoft/50 via-white to-olivesoft/30 p-3.5 text-right">
              <div className="flex items-center gap-2 text-olivedeep">
                <Crown className="h-4 w-4 text-golddeep" />
                <span className="text-xs font-black">
                  «يا تاج راسي.. عسى الراحة ما تفارق بدنك»
                </span>
              </div>
              <p className="mt-1 text-[12px] font-bold leading-5 text-ink/85">
                أخبرينا عن عمر والدك وحالته الصحية، وسنرشح لكِ جلسة المساج والحمام المغربي
                المثالية لتنشيط دورته الدموية، مع أخصائي إندونيسي يرتدي القفازات المعقمة،
                بوصول هادئ بدون أي إزعاج.
              </p>
            </div>

            <a
              href={WA_FATHER}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#22c55e] px-4 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-500/30 transition-all hover:bg-[#1eb655] hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              <span>تنسيق هدية الوالد من القلب — واتساب</span>
            </a>
          </div>
        )}

        {/* Tab 3: Brother (Loyal & Supportive) */}
        {activeTab === "brother" && (
          <div className="mt-4 space-y-3 animate-in fade-in zoom-in-95 duration-200">
            <div className="rounded-2xl border border-amber-900/25 bg-gradient-to-l from-[#faedd8]/60 via-white to-[#faedd8]/30 p-3.5 text-right">
              <div className="flex items-center gap-2 text-[#8c581e]">
                <Shield className="h-4 w-4 text-[#8c581e]" />
                <span className="text-xs font-black">
                  «يا سندي وعضيدي.. تستاهل وقفة راحة ترد نشاطك»
                </span>
              </div>
              <p className="mt-1 text-[12px] font-bold leading-5 text-ink/85">
                أخبرينا عن نشاط أخوك (تمارين ونادي، دوام مكتبي شاق، دراسة، أو خط سفر طويل)،
                وسنرشح لكِ الباقة المثالية مع كاسات هواء ومساج تايلندي أو سويدي لفك الشد العضلي.
              </p>
            </div>

            <a
              href={WA_BROTHER}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#22c55e] px-4 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-500/30 transition-all hover:bg-[#1eb655] hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              <span>تنسيق هدية الأخ (عزوة وسند) — واتساب</span>
            </a>
          </div>
        )}

        {/* Trust & Privacy Pill */}
        <div className="mt-3.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 border-t border-dashed border-linen pt-3 text-[11px] font-black text-cocoa">
          <span className="flex items-center gap-1 text-olivedeep">
            <Lock className="h-3.5 w-3.5" />
            خصوصية تامة عند الوصول
          </span>
          <span className="flex items-center gap-1 text-rosedeep">
            <ShieldCheck className="h-3.5 w-3.5" />
            أخصائيون إندونيسيون بالقفازات
          </span>
          <span className="flex items-center gap-1 text-golddeep">
            <Sparkles className="h-3.5 w-3.5" />
            شاي أعشاب مجاناً
          </span>
        </div>

        {/* Direct Call alternative */}
        <div className="mt-2.5 text-center">
          <a
            href={`tel:${PHONE_INTL}`}
            className="inline-flex items-center gap-1.5 text-[11.5px] font-black text-cocoa transition-colors hover:text-ink"
          >
            <Phone className="h-3.5 w-3.5 text-golddeep" />
            <span>تفضلين الاتصال المباشر؟</span>
            <span dir="ltr" className="font-bold underline decoration-sand">
              {PHONE_DISPLAY}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
