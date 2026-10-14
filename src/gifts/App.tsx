import Header from "./components/Header";
import Hero from "./components/Hero";
import {
  BrotherSection,
  FatherSection,
  FinalCta,
  HowItWorks,
  HusbandSection,
  Testimonials,
  Therapists,
} from "./components/Sections";
import { Footer, StickyBar } from "./components/Footer";
import GiftWhatsAppPopup from "./components/GiftWhatsAppPopup";

export default function App() {
  return (
    <div className="min-h-screen pb-[68px] lg:pb-0">
      <Header />
      <main>
        {/* 1) Hero with Instant Choice buttons (لتاج راسي أبوي / لرفيق دربي زوجي) */}
        <Hero />

        {/* 2) Direct into Father Packages */}
        <FatherSection />

        {/* 3) Direct into Husband Packages */}
        <HusbandSection />

        {/* 4) Direct into Brother Packages */}
        <BrotherSection />

        {/* 5) Indonesian Therapists & Privacy Reassurance */}
        <Therapists />

        {/* 5) Real Testimonials */}
        <Testimonials />

        {/* 6) How It Works (اختاري الباقة / احجزي في ثوانٍ / نصل لباب البيت) — moved to end of page */}
        <HowItWorks />

        {/* 7) Final Call to Action */}
        <FinalCta />
      </main>

      <Footer />
      <StickyBar />

      {/* 2-Minute Romantic & Emotional WhatsApp Gift Popup */}
      <GiftWhatsAppPopup />
    </div>
  );
}
