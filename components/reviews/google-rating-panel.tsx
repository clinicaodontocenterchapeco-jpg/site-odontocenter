import { GoogleMark } from "@/components/reviews/google-brand";
import { StarRating } from "@/components/reviews/star-rating";
import { GOOGLE_REVIEWS_URL } from "@/lib/google-reviews/config";
import type { GoogleReviewsResult } from "@/lib/google-reviews/types";
import { ArrowUpRight } from "lucide-react";

export function GoogleRatingPanel({ result }: { result: GoogleReviewsResult }) {
  return (
    <aside className="reviews-motion-rating-panel grid min-h-[17rem] grid-cols-[1.2fr_0.9fr] items-center rounded-[1.1rem] border border-brand/16 bg-white px-9 py-8">
      <div className="pr-9">
        <div className="flex items-center gap-5">
          <GoogleMark size={56} className="shrink-0" />
          <p className="whitespace-nowrap text-[2.75rem] font-medium tracking-[-0.055em] text-foreground">
            {result.rating.toFixed(1).replace(".", ",")} <span className="text-[2rem] font-normal">no Google</span>
          </p>
        </div>
        <div className="mt-6">
          <StarRating rating={result.rating} size="lg" />
          <p className="mt-3 text-[1.18rem] text-muted">
            {result.totalReviewCount} avaliações de pacientes
          </p>
        </div>
      </div>

      <div className="flex min-h-[11.75rem] flex-col justify-between border-l border-border/75 pl-9">
        <p className="max-w-[14rem] text-[0.98rem] leading-[1.55] text-muted">
          Pessoas reais. Histórias reais. Isso é o que nos motiva a seguir transformando sorrisos todos os dias.
        </p>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring group inline-flex w-fit items-center gap-3 rounded-sm text-[0.9rem] font-medium text-brand"
        >
          <span className="border-b border-brand/70 pb-1">Ver todas no Google</span>
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </aside>
  );
}
