import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Logo } from "./shared";
import { PHONE_DISPLAY, PHONE_INTL } from "../data/packages";
import { cn } from "../utils/cn";

const links = [
  { href: "#father", label: "باقات الوالد" },
  { href: "#husband", label: "باقات الزوج" },
  { href: "#brother", label: "باقات الأخ" },
  { href: "#therapists", label: "الأخصائيون" },
  { href: "#reviews", label: "آراء عميلاتنا" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/95 shadow-[0_10px_35px_-15px_rgba(78,92,52,0.3)] backdrop-blur-xl"
          : "bg-gradient-to-b from-cream via-cream/80 to-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        {/* RIGHT SIDE in RTL: Navigation + Call Button */}
        <div className="flex items-center gap-2 sm:gap-5">
          <nav className="hidden items-center gap-5 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-[15px] font-bold text-cocoa transition-colors hover:text-rosedeep"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={`tel:${PHONE_INTL}`}
            className="group flex items-center gap-2 rounded-full bg-ink px-3.5 py-2 text-sm font-black text-cream shadow-md shadow-ink/20 transition-all hover:bg-olivedeep sm:px-4"
          >
            <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
            <span className="hidden sm:inline">اتصلي بنا</span>
            <span dir="ltr" className="font-bold tracking-wide">
              {PHONE_DISPLAY}
            </span>
          </a>
        </div>

        {/* LEFT SIDE in RTL (أعلى يسار الصفحة): Brand Logo + DORH SPA */}
        <Logo />
      </div>
    </header>
  );
}
