import {
  ArrowDown,
  Crown,
  Heart,
  MapPin,
  Shield,
  Sparkles,
  Star,
} from "lucide-react";
import { Reveal } from "./shared";

export default function Hero() {
  return (
    <section id="top" className="hero-pattern relative overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-12">
      {/* Ambient glow backgrounds */}
      <div className="pointer-events-none absolute -left-20 top-36 h-72 w-72 rounded-full bg-olive/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-16 h-80 w-80 rounded-full bg-rose/15 blur-3xl" />
      <div className="dots-pattern pointer-events-none absolute left-[6%] top-24 hidden h-36 w-36 opacity-50 lg:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Text and Primary Decision CTAs */}
          <div className="text-center lg:text-right">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-1.5 text-xs font-black text-olivedeep shadow-sm ring-1 ring-olive/25 backdrop-blur">
                <MapPin className="h-4 w-4 text-rose" />
                سبا منزلي فاخر للرجال — نصل إليكم أينما كنتم بالرياض
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-4 text-[1.95rem] font-black leading-[1.35] text-ink sm:text-5xl sm:leading-[1.28] lg:text-[3.25rem]">
                لأنّ عطاءه لا يتوقّف..
                <span className="mt-1 block">
                  أهديه{" "}
                  <span className="relative inline-block text-transparent">
                    <span className="bg-gradient-to-l from-rosedeep via-rose to-gold bg-clip-text">
                      استرخاءً
                    </span>
                    <svg
                      className="absolute -bottom-1.5 right-0 w-full text-gold"
                      viewBox="0 0 120 12"
                      fill="none"
                      preserveAspectRatio="none"
                      aria-hidden
                    >
                      <path
                        d="M3 9C30 3 70 2 117 7"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        opacity="0.65"
                      />
                    </svg>
                  </span>{" "}
                  يُنسيه تعب الأيام
                </span>
                <span className="block">ويردّ له روحه</span>
              </h1>
            </Reveal>

            {/* Quick Decision Buttons (Mobile-First Instant Navigation: Father / Husband / Brother) */}
            <Reveal delay={180}>
              <div className="mt-6 rounded-3xl bg-white/75 p-4 shadow-lg shadow-black/5 ring-1 ring-linen/80 backdrop-blur sm:p-5">
                <p className="text-base font-black text-ink sm:text-lg">
                  لمن تودّين إهداء الراحة اليوم؟
                </p>
                <div className="mt-3.5 grid gap-2.5 sm:grid-cols-3">
                  {/* Father Button */}
                  <a
                    href="#father"
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-bl from-olivedeep via-olive to-[#87976a] p-[1.5px] shadow-md shadow-olive/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
                  >
                    <span className="relative flex items-center gap-2.5 rounded-[calc(1rem-1.5px)] bg-gradient-to-bl from-olivedeep via-olive to-[#87976a] px-3.5 py-3 text-right text-white">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/20 ring-1 ring-white/40 backdrop-blur transition-transform duration-300 group-hover:scale-110">
                        <Crown className="h-5 w-5" />
                      </span>
                      <span className="flex-1 leading-tight">
                        <span className="block text-[15.5px] font-black">
                          لتاج راسي «أبوي»
                        </span>
                        <span className="mt-0.5 block text-[11px] font-bold text-white/85">
                          باقات الوالد
                        </span>
                      </span>
                      <ArrowDown className="h-4 w-4 shrink-0 animate-bounce" />
                    </span>
                  </a>

                  {/* Husband Button */}
                  <a
                    href="#husband"
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-bl from-rosedeep via-rose to-[#cf8f96] p-[1.5px] shadow-md shadow-rose/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
                  >
                    <span className="relative flex items-center gap-2.5 rounded-[calc(1rem-1.5px)] bg-gradient-to-bl from-rosedeep via-rose to-[#cf8f96] px-3.5 py-3 text-right text-white">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/20 ring-1 ring-white/40 backdrop-blur transition-transform duration-300 group-hover:scale-110">
                        <Heart className="h-5 w-5 fill-current" />
                      </span>
                      <span className="flex-1 leading-tight">
                        <span className="block text-[15.5px] font-black">
                          لرفيق دربي «زوجي»
                        </span>
                        <span className="mt-0.5 block text-[11px] font-bold text-white/85">
                          باقات الزوج
                        </span>
                      </span>
                      <ArrowDown className="h-4 w-4 shrink-0 animate-bounce" />
                    </span>
                  </a>

                  {/* Brother Button */}
                  <a
                    href="#brother"
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-bl from-[#714413] via-[#8c581e] to-[#a36826] p-[1.5px] shadow-md shadow-amber-900/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
                  >
                    <span className="relative flex items-center gap-2.5 rounded-[calc(1rem-1.5px)] bg-gradient-to-bl from-[#714413] via-[#8c581e] to-[#a36826] px-3.5 py-3 text-right text-white">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/20 ring-1 ring-white/40 backdrop-blur transition-transform duration-300 group-hover:scale-110">
                        <Shield className="h-5 w-5 fill-current" />
                      </span>
                      <span className="flex-1 leading-tight">
                        <span className="block text-[15.5px] font-black">
                          لعضيدي وسندي «أخوي»
                        </span>
                        <span className="mt-0.5 block text-[11px] font-bold text-white/85">
                          باقات الأخ
                        </span>
                      </span>
                      <ArrowDown className="h-4 w-4 shrink-0 animate-bounce" />
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Hero Visual */}
          <Reveal delay={200} className="relative mx-auto w-full max-w-[480px]">
            <div
              className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-bl from-gold/35 via-rose/25 to-olive/30 blur-lg"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[2.2rem] shadow-2xl shadow-cocoa/30 ring-1 ring-white/60">
              <img
                src="/gifts/images/hero.jpg"
                alt="أخصائي إندونيسي بزي رسمي يقدم جلسة مساج استرخائية لرجل سعودي في منزله"
                className="aspect-[4/3.3] w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

              {/* Rating badge */}
              <div className="animate-floaty-soft absolute right-3.5 top-3.5 rounded-2xl bg-white/92 px-3.5 py-2.5 shadow-xl backdrop-blur">
                <div className="flex items-center gap-1" dir="ltr">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-0.5 text-xs font-black text-ink">
                  4.9 من تقييمات عميلاتنا
                </p>
              </div>

              {/* Free Gifts Callout */}
              <div className="animate-floaty absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between gap-3 rounded-2xl bg-white/92 px-4 py-3 shadow-xl backdrop-blur sm:left-auto sm:min-w-[260px]">
                <div>
                  <p className="text-sm font-black text-ink">مع كل باقة هدية</p>
                  <p className="mt-0.5 text-xs font-bold text-cocoa">
                    جاكوزي أقدام + ضيافة شاي أعشاب
                    <span className="mr-1.5 rounded-md bg-wa px-1.5 py-0.5 text-[10px] font-black text-white">
                      مجاناً
                    </span>
                  </p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-rose to-rosedeep text-white shadow-md shadow-rose/40">
                  <Sparkles className="h-5 w-5" />
                </span>
              </div>
            </div>

            {/* Discount Ribbon */}
            <div className="absolute -left-2 top-8 -rotate-6 rounded-xl bg-gradient-to-l from-golddeep to-gold px-3.5 py-1.5 text-xs font-black text-white shadow-lg shadow-gold/40 sm:-left-3">
              خصومات حصرية حتى 51%
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
