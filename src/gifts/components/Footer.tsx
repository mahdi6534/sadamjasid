import {
  CalendarCheck2,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Logo } from "./shared";
import {
  FRESHA_URL,
  PHONE_DISPLAY,
  PHONE_INTL,
  waGeneral,
} from "../data/packages";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute -top-20 right-1/4 h-60 w-60 rounded-full bg-olive/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr_1fr]">
          {/* Logo & Description */}
          <div>
            <Logo dark />
            <p className="mt-3.5 max-w-sm text-xs font-bold leading-6 text-cream/70 sm:text-sm">
              وجهتكِ الأولى لإهداء الراحة لمن يستحقها — باقات سبا منزلية فاخرة للرجال على أيدي
              أمهر الخبراء الإندونيسيين، بخصوصية تامة واحترافية تليق ببيتكم.
            </p>
          </div>

          {/* Quick links */}
          <nav>
            <h3 className="text-sm font-black text-goldsoft">أقسام الهدايا</h3>
            <ul className="mt-3 space-y-2 text-xs font-bold text-cream/75 sm:text-sm">
              <li>
                <a href="#father" className="transition-colors hover:text-white">
                  باقات الوالد — لتاج الراس
                </a>
              </li>
              <li>
                <a href="#husband" className="transition-colors hover:text-white">
                  باقات الزوج — تجديد وحب
                </a>
              </li>
              <li>
                <a href="#brother" className="transition-colors hover:text-white">
                  باقات الأخ — عزوة وسند
                </a>
              </li>
              <li>
                <a href="#therapists" className="transition-colors hover:text-white">
                  أخصائيونا وخبراؤنا
                </a>
              </li>
              <li>
                <a href="#reviews" className="transition-colors hover:text-white">
                  آراء عميلاتنا
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-black text-goldsoft">تواصلي معنا</h3>
            <ul className="mt-3 space-y-2.5 text-xs font-bold text-cream/75 sm:text-sm">
              <li>
                <a
                  href={`tel:${PHONE_INTL}`}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  <span dir="ltr" className="font-bold">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={waGeneral()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-gold" />
                  <span>واتساب — ردّنا فوري</span>
                </a>
              </li>
              <li>
                <a
                  href={FRESHA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <CalendarCheck2 className="h-4 w-4 text-gold" />
                  <span>الحجز الفوري عبر Fresha</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                <span>الرياض — حي اليرموك، طريق الدمام</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 shrink-0 text-gold" />
                <span>متاحون يومياً لخدمتكم</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs font-bold text-cream/55 sm:flex-row">
          <p>© {new Date().getFullYear()} درة سبا المنزلي — DORH SPA. جميع الحقوق محفوظة.</p>
          <p className="flex items-center gap-1">
            صُنع بحُب لمن يستحق الراحة
            <span className="text-rose">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ----- Sticky Mobile Bottom Booking Bar matching user layout ----- */
export function StickyBar() {
  return (
    <>
      {/* Floating WhatsApp pill (Desktop) */}
      <a
        href={waGeneral()}
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل واتساب"
        className="animate-pulse-ring fixed bottom-6 left-6 z-50 hidden h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-wa to-wadeep text-white shadow-2xl shadow-wa/40 transition-transform hover:scale-110 lg:grid"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* Mobile Sticky Bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-linen bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_30px_-15px_rgba(56,50,42,0.4)] backdrop-blur-xl lg:hidden">
        <div className="grid grid-cols-3 gap-2 px-3 py-2.5">
          <a
            href={waGeneral()}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-xl bg-[#22c55e] py-2.5 text-xs font-black text-white shadow-sm active:scale-[0.97]"
          >
            <MessageCircle className="h-4 w-4" />
            <span>واتساب</span>
          </a>
          <a
            href={`tel:${PHONE_INTL}`}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-[#2a2521] py-2.5 text-xs font-black text-cream shadow-sm active:scale-[0.97]"
          >
            <Phone className="h-4 w-4" />
            <span>اتصال</span>
          </a>
          <a
            href={FRESHA_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-l from-[#8e4956] to-[#ab5a68] py-2.5 text-xs font-black text-white shadow-sm shadow-rose/20 active:scale-[0.97]"
          >
            <CalendarCheck2 className="h-4 w-4" />
            <span>Fresha</span>
          </a>
        </div>
      </div>
    </>
  );
}
