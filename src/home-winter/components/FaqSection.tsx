import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../data/packages";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-section-heading"
      className="max-w-4xl mx-auto px-4 py-10 sm:py-14"
    >
      <h2
        id="faq-section-heading"
        className="font-display-black text-[24px] sm:text-[32px] text-center text-[#0f2340]"
      >
        عندك سؤال؟ <span className="gold-text">عندنا الجواب</span>
      </h2>

      <div className="mt-6 space-y-2.5">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.q}
              className={`rounded-2xl border overflow-hidden transition bg-white ${
                isOpen
                  ? "border-[#c9a227]/65 card-shadow"
                  : "border-[#0f2340]/10"
              }`}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between gap-3 p-4 sm:px-5 sm:py-4 text-right font-extrabold text-[14px] sm:text-[15.5px] text-[#0f2340] cursor-pointer"
              >
                <span>{item.q}</span>
                <span
                  className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center border transition-transform duration-200 ${
                    isOpen
                      ? "bg-[#0f2340] text-[#f3e6c3] border-[#0f2340] rotate-180"
                      : "border-[#0f2340]/15 text-[#a97e3f]"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-0.5 border-t border-[#0f2340]/[0.06]">
                  <p className="text-[13.5px] sm:text-[14px] leading-8 text-[#3c4c64] font-bold">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
