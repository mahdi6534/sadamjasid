import React from "react";
import { BadgeCheck, Star } from "lucide-react";
import { CustomerReview, REAL_CUSTOMER_REVIEWS } from "../data/packages";

declare global {
  interface Window {
    DORH_LIVE_REVIEWS?: CustomerReview[];
  }
}

interface CustomerReviewsProps {
  reviews?: CustomerReview[];
}

export const CustomerReviews: React.FC<CustomerReviewsProps> = ({
  reviews,
}) => {
  const activeReviews =
    reviews ??
    (typeof window !== "undefined" && Array.isArray(window.DORH_LIVE_REVIEWS)
      ? window.DORH_LIVE_REVIEWS
      : REAL_CUSTOMER_REVIEWS);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="max-w-6xl mx-auto px-4 pt-6 pb-10 sm:pt-8 sm:pb-12"
    >
      <div className="gold-divider mb-8 max-w-md mx-auto" />

      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
        <h2
          id="reviews-heading"
          className="font-display-black text-[24px] sm:text-[32px] leading-tight text-[#0f2340]"
        >
          وش يقولون عملاؤنا عن درّة سبا؟
        </h2>
        <p className="mt-2 text-[14px] sm:text-[15px] leading-7 text-[#4c5c74] font-bold">
          تجارب عملائنا في الرياض هي أفضل دليل على جودة خدمتنا المنزلية.
        </p>
      </div>

      {activeReviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeReviews.map((review) => (
            <article
              key={review.id}
              className="rounded-2xl bg-white border border-[#0f2340]/10 p-5 sm:p-6 card-shadow hover:border-[#c9a227]/45 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.avatarBg} flex items-center justify-center font-display text-white text-[15px] shrink-0 shadow-xs`}
                      aria-hidden="true"
                    >
                      {review.initial}
                    </span>
                    <div className="min-w-0">
                      <div
                        className="font-extrabold text-[14px] sm:text-[14.5px] text-[#0f2340] flex items-center gap-1.5"
                        dir="auto"
                      >
                        <span className="truncate">{review.reviewerLabel}</span>
                        <BadgeCheck
                          className="w-4 h-4 text-emerald-600 shrink-0"
                          aria-label="عميل موثق"
                        />
                      </div>
                      <div
                        className="text-[11.5px] text-[#64748b] font-bold"
                        dir="auto"
                      >
                        {review.badgeSubtext}
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-0.5 text-[#fbbc05] shrink-0"
                    aria-label={`تقييم ${review.rating} من 5 نجوم`}
                  >
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                <blockquote
                  dir={review.dir || "auto"}
                  className={`text-[13.5px] sm:text-[14px] leading-7 text-[#2b3c56] font-bold whitespace-pre-line ${
                    review.dir === "ltr" ? "text-left" : "text-right"
                  }`}
                >
                  “{review.text}”
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl bg-white border border-[#0f2340]/10 p-6 text-center text-[13.5px] text-[#5b6b82] font-bold">
          سيتم عرض تقييمات العملاء الموثقة تلقائياً فور ربط مصدر التقييمات.
        </div>
      )}
    </section>
  );
};
