import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "../utils/cn";

/* ----- Official Saudi Riyal symbol (SAMA) ----- */
export function Riyal({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1124.14 1256.39"
      className={cn("inline-block h-[0.82em] w-auto shrink-0", className)}
      fill="currentColor"
      aria-label="ريال سعودي"
      role="img"
    >
      <path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
      <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z" />
    </svg>
  );
}

/* ----- The Official Brand Zen Stones Logo Mark (from user image #3) ----- */
export function DorhZenStones({
  className,
  stoneColor = "#BA8D6D",
}: {
  className?: string;
  stoneColor?: string;
}) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={cn("h-full w-full", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="درة سبا"
    >
      {/* Stone 1 (Top Pebble / Egg) */}
      <path
        d="M250 115 C222 115 210 152 212 176 C214 196 228 206 250 206 C272 206 286 196 288 176 C290 152 278 115 250 115 Z"
        fill={stoneColor}
      />
      {/* Stone 2 (Upper Middle Oval Pebble) */}
      <path
        d="M165 258 C150 236 180 214 246 211 C318 208 350 228 345 254 C340 279 280 293 212 289 C177 287 167 269 165 258 Z"
        fill={stoneColor}
      />
      {/* Stone 3 (Lower Middle Tilted Pebble) */}
      <path
        d="M198 328 C184 311 207 294 264 296 C314 298 334 313 330 334 C324 356 284 366 240 363 C208 361 200 340 198 328 Z"
        fill={stoneColor}
      />
      {/* Stone 4 (Base Broad Pebble) */}
      <path
        d="M128 408 C115 384 144 364 198 362 C226 361 250 370 284 372 C328 375 366 365 382 384 C402 404 375 428 322 433 C258 438 206 435 154 430 C132 428 123 418 128 408 Z"
        fill={stoneColor}
      />
    </svg>
  );
}

/* ----- Main Brand Logo with Zen Stones icon matching image #3 ----- */
export function Logo({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <a
      href="#top"
      className={cn("group flex items-center gap-2.5 sm:gap-3", className)}
      aria-label="درة سبا المنزلي - DORH SPA"
    >
      {/* Zen Stones icon in dark rounded square badge (exact matching image 3) */}
      <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl bg-black p-1.5 shadow-md shadow-black/25 ring-1 ring-gold/30 transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
        <DorhZenStones />
      </span>

      {/* Brand text */}
      <span className="leading-tight">
        <span
          className={cn(
            "block text-[17px] font-black tracking-tight sm:text-[19px]",
            dark ? "text-cream" : "text-ink"
          )}
        >
          درّة سبا <span className="text-rose">المنزلي</span>
        </span>
        <span
          className={cn(
            "block text-[10.5px] font-black tracking-[0.32em]",
            dark ? "text-goldsoft/90" : "text-golddeep"
          )}
          dir="ltr"
        >
          DORH SPA
        </span>
      </span>
    </a>
  );
}

/* ----- Tabby / Tamara badges ----- */
export function PayBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-[11px] font-bold text-cocoa">قسّطيها على 4 دفعات بدون فوائد عبر</span>
      <span
        className="flex items-center gap-1 rounded-lg bg-white px-2 py-0.5 shadow-sm ring-1 ring-black/5"
        dir="ltr"
      >
        <span className="h-2 w-2 rounded-full bg-[#00D6B5]" />
        <span className="text-[12.5px] font-black lowercase tracking-tight text-[#0B3B36]">tabby</span>
      </span>
      <span
        className="flex items-center rounded-lg bg-[#3E2A4F] px-2 py-0.5 shadow-sm ring-1 ring-black/5"
        dir="ltr"
      >
        <span className="text-[12.5px] font-black lowercase italic tracking-tight text-white">
          tamara
        </span>
      </span>
    </div>
  );
}

/* ----- Scroll reveal wrapper ----- */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
