"use client";

import { GoogleRatingPanel } from "@/components/reviews/google-rating-panel";
import { ReviewsCarousel } from "@/components/reviews/reviews-carousel";
import { useRevealOnce } from "@/hooks/use-reveal-once";
import { getGoogleReviews } from "@/lib/google-reviews/provider";

export function ReviewsSection() {
  const result = getGoogleReviews();
  const sectionRef = useRevealOnce<HTMLElement>({ classPrefix: "reviews-motion", settleAfter: 1750 });

  return (
    <section
      ref={sectionRef}
      id="avaliacoes"
      aria-labelledby="reviews-title"
      className="hidden border-t border-border/65 bg-surface py-[4.5rem] lg:block"
    >
      <div className="site-container">
        <div className="grid grid-cols-[minmax(29rem,0.82fr)_minmax(0,1fr)] items-start gap-14">
          <div className="pt-1">
            <p className="editorial-label reviews-motion-eyebrow">Avaliações Google</p>
            <h2
              id="reviews-title"
              className="reviews-motion-heading mt-10 text-[clamp(3.15rem,4.25vw,3.85rem)] font-medium leading-[0.98] tracking-[-0.06em] [hyphens:none] [text-wrap:balance]"
            >
              <span className="block whitespace-nowrap">A confiança de quem</span>
              <span className="block whitespace-nowrap">
                já <span className="text-brand">passou por aqui.</span>
              </span>
            </h2>
            <p className="reviews-motion-copy mt-7 max-w-[34rem] text-[1.05rem] leading-[1.52] text-muted [text-wrap:pretty]">
              Nossas avaliações no Google refletem experiências reais de pacientes e a confiança construída todos os
              dias com cuidado, respeito e resultados.
            </p>
          </div>

          <GoogleRatingPanel result={result} />
        </div>

        <ReviewsCarousel initialResult={result} />

        <div className="reviews-motion-footer mt-20 flex items-center gap-10 text-brand/50">
          <span className="h-px flex-1 bg-brand/26" aria-hidden="true" />
          <p className="text-center text-[0.62rem] font-medium uppercase tracking-[0.32em]">
            Experiências reais. Confiança construída.
          </p>
          <span className="h-px flex-1 bg-brand/26" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
