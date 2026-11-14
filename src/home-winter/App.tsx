import { useEffect, useState } from "react";
import { Flame, MapPin, Phone } from "lucide-react";
import {
  DorhLogo,
  TabbyTamaraBadges,
  WhatsAppIcon,
} from "./components/BrandIcons";
import { PackageCard } from "./components/PackageCard";
import { CustomerReviews } from "./components/CustomerReviews";
import { TeamAndEquipmentSection } from "./components/TeamAndEquipmentSection";
import { FaqSection } from "./components/FaqSection";
import {
  HERO_WHATSAPP_URL,
  PACKAGES,
  PHONE_HREF,
  PHONE_LOCAL,
  buildWhatsAppPackageUrl,
} from "./data/packages";
import {
  initAttributionTracking,
  trackBookingIntentClick,
} from "./utils/tracking";

export function App() {
  const [showFloatingWa, setShowFloatingWa] = useState(false);

  useEffect(() => {
    initAttributionTracking();

    const onScroll = () => {
      setShowFloatingWa(window.scrollY > 420);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHeroWhatsApp = () => {
    trackBookingIntentClick({
      packageId: "hero_general",
      packageName: "حجز عام — الهوك الشتوي",
      packagePrice: 199,
      buttonType: "WhatsApp",
      placement: "hero",
    });
  };

  const handleHeroPhone = () => {
    trackBookingIntentClick({
      packageId: "hero_general",
      packageName: "اتصال عام — الهوك الشتوي",
      packagePrice: 199,
      buttonType: "Phone",
      placement: "hero",
    });
  };

  const handleHeaderPhone = () => {
    trackBookingIntentClick({
      packageId: "header_phone",
      packageName: "اتصال سريع — الهيدر",
      packagePrice: null,
      buttonType: "Phone",
      placement: "header",
    });
  };

  const handleHeaderWhatsApp = () => {
    trackBookingIntentClick({
      packageId: "header_whatsapp",
      packageName: "واتساب سريع — الهيدر",
      packagePrice: null,
      buttonType: "WhatsApp",
      placement: "header",
    });
  };

  const handleFloatingWhatsApp = () => {
    trackBookingIntentClick({
      packageId: "floating_whatsapp",
      packageName: "واتساب عائم — الجوال",
      packagePrice: 199,
      buttonType: "WhatsApp",
      placement: "floating_mobile",
    });
  };

  const floatingWaHref = buildWhatsAppPackageUrl(
    "السلام عليكم، أرغب بالاستفسار عن باقات شتوية درّة سبا المنزلية في الرياض."
  );

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#faf7f1] sand-pattern text-[#1b2a44]"
    >
      {/* Slim Luxury Header */}
      <header className="sticky top-0 z-40 bg-[#faf7f1]/95 backdrop-blur-md border-b border-[#0f2340]/10">
        <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
          <DorhLogo dark />

          <div className="hidden md:flex items-center gap-2 text-[12.5px] font-extrabold text-[#3c4c64]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#0f2340]/10 px-3 py-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#a97e3f]" />
              <span>تغطية شاملة لأحياء الرياض • للرجال فقط</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PHONE_HREF}
              onClick={handleHeaderPhone}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#0f2340]/20 bg-white px-3.5 py-2 text-[13px] font-extrabold text-[#0f2340] hover:border-[#0f2340] transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#a97e3f]" />
              <span dir="ltr">{PHONE_LOCAL}</span>
            </a>

            <a
              href={HERO_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleHeaderWhatsApp}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#22c15e] hover:bg-[#1aa851] px-3.5 sm:px-4 py-2 text-[12.5px] sm:text-[13px] font-extrabold text-white shadow-xs transition"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>احجز واتساب</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* 1-4. Winter Hook + Short Description + Starting Price + Two Clear CTA Buttons */}
        <section
          aria-labelledby="winter-hero-heading"
          className="max-w-4xl mx-auto px-4 pt-5 pb-5 sm:pt-8 sm:pb-7 text-center"
        >
          {/* Small Eyebrow Above Hook */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0f2340] text-[#f7ebd2] border border-[#c9a227]/45 px-3.5 py-1.5 text-[12px] sm:text-[13px] font-extrabold shadow-xs">
            <Flame className="w-3.5 h-3.5 text-[#e69d45] shrink-0" />
            <span>شتوية درّة سبا | مساج منزلي رجالي بالرياض</span>
          </div>

          {/* Main Large Headline */}
          <h1
            id="winter-hero-heading"
            className="mt-3 font-display-black text-[26px] leading-[1.35] sm:text-[40px] sm:leading-[1.28] text-[#0f2340]"
          >
            برد الرياض؟ لا تطلع للمساج…{" "}
            <span className="text-[#9a6823]">خلّه يجيك لدفا بيتك!</span>
          </h1>

          {/* Starting Price Line + Tabby/Tamara Installment Support */}
          <div className="mt-3.5 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-white border border-[#c9a227]/40 px-4 py-2.5 card-shadow">
            <span className="text-[13.5px] sm:text-[15px] font-extrabold text-[#0f2340]">
              باقات شتوية تبدأ من{" "}
              <span className="text-[#9a6823] font-display-black text-[17px] sm:text-[19px]">
                199 ريال فقط
              </span>{" "}
              — شاملة الضريبة والتوصيل والتجهيز.
            </span>
            <TabbyTamaraBadges compact />
          </div>

          {/* Two Large Clear Buttons Directly Under Price Line */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl mx-auto">
            <a
              href={HERO_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleHeroWhatsApp}
              className="min-h-[54px] px-5 py-3.5 rounded-2xl bg-[#22c15e] hover:bg-[#1aa851] active:scale-[0.99] transition text-white font-extrabold text-[15.5px] sm:text-[16px] shadow-md flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>احجز عبر واتساب</span>
            </a>

            <a
              href={PHONE_HREF}
              onClick={handleHeroPhone}
              className="min-h-[54px] px-5 py-3.5 rounded-2xl bg-[#0f2340] hover:bg-[#17345f] active:scale-[0.99] transition text-white font-extrabold text-[15.5px] sm:text-[16px] shadow-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#d9b64a] shrink-0" />
              <span>اتصل الآن للحجز</span>
            </a>
          </div>
        </section>

        {/* 5. The Six Packages Immediately Without Any Intermediate Sections */}
        <section
          id="packages"
          aria-label="باقات شتوية درّة سبا المنزلية"
          className="max-w-6xl mx-auto px-4 pt-1 pb-6 space-y-5 sm:space-y-7"
        >
          {PACKAGES.map((pkg, idx) => (
            <PackageCard key={pkg.id} pkg={pkg} index={idx} />
          ))}
        </section>

        {/* 6. Real Customer Reviews Immediately Below the Six Packages */}
        <CustomerReviews />

        {/* 7. Meet Your Specialists & Official Equipment Section */}
        <TeamAndEquipmentSection />

        {/* 8. Frequently Asked Questions Section */}
        <FaqSection />
      </main>

      {/* Compact Luxury Footer (No Long Post-Review Sections) */}
      <footer className="bg-[#0b1a30] text-white border-t border-[#c9a227]/25 pb-16 sm:pb-0">
        <div className="max-w-6xl mx-auto px-4 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <DorhLogo dark={false} />

          <div className="text-[12.5px] text-white/75 font-bold leading-6">
            <div>
              مساج وسبا منزلي للرجال فقط بالرياض • مختصون إندونيسيون رجال
              محترفون
            </div>
            <div className="text-white/50 text-[11.5px] mt-0.5">
              © {new Date().getFullYear()} درّة سبا المنزلي — متاح التقسيط عبر
              تابي وتمارا
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={HERO_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleHeaderWhatsApp}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#22c15e] hover:bg-[#1aa851] px-3.5 py-2 text-[12.5px] font-extrabold text-white transition"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>واتساب</span>
            </a>
            <a
              href={PHONE_HREF}
              onClick={handleHeaderPhone}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 px-3.5 py-2 text-[12.5px] font-extrabold text-white transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#d9b64a]" />
              <span dir="ltr">{PHONE_LOCAL}</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Small Non-Intrusive Floating WhatsApp Button on Mobile Only */}
      {showFloatingWa && (
        <a
          href={floatingWaHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleFloatingWhatsApp}
          aria-label="تواصل عبر واتساب للحجز"
          className="sm:hidden fixed bottom-3.5 left-3.5 z-30 w-11 h-11 rounded-full bg-[#22c15e] text-white shadow-lg border-2 border-white flex items-center justify-center active:scale-95 transition"
        >
          <WhatsAppIcon className="w-5 h-5" />
        </a>
      )}
    </div>
  );
}

export default App;
