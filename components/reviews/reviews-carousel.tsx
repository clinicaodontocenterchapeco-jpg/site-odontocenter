"use client";

import { ReviewCard } from "@/components/reviews/review-card";
import type { GoogleReview, GoogleReviewsResult } from "@/lib/google-reviews/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo, useRef, useState } from "react";

const reviewsPerPage = 3;

function pagesOf(reviews: GoogleReview[]) {
  return Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }, (_, index) =>
    reviews.slice(index * reviewsPerPage, index * reviewsPerPage + reviewsPerPage),
  );
}

export function ReviewsCarousel({ initialResult }: { initialResult: GoogleReviewsResult }) {
  const [reviews, setReviews] = useState(initialResult.reviews);
  const [nextPageToken, setNextPageToken] = useState(initialResult.nextPageToken);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const dragStart = useRef<number | null>(null);
  const pages = useMemo(() => pagesOf(reviews), [reviews]);
  const totalPages =
    initialResult.source === "business-profile"
      ? Math.ceil(initialResult.totalReviewCount / reviewsPerPage)
      : pages.length;

  async function ensurePageLoaded(targetPage: number) {
    if (targetPage < pages.length) return true;
    if (!nextPageToken || loading) return false;

    setLoading(true);
    try {
      const response = await fetch(`/api/google-reviews?pageToken=${encodeURIComponent(nextPageToken)}`);
      if (!response.ok) return false;
      const nextResult = (await response.json()) as GoogleReviewsResult;
      const known = new Set(reviews.map((review) => review.id));
      const merged = [...reviews, ...nextResult.reviews.filter((review) => !known.has(review.id))];
      setReviews(merged);
      setNextPageToken(nextResult.nextPageToken);
      return targetPage < Math.ceil(merged.length / reviewsPerPage);
    } finally {
      setLoading(false);
    }
  }

  async function next() {
    const target = page + 1;
    if (target >= totalPages) return;
    if (await ensurePageLoaded(target)) setPage(target);
  }

  function previous() {
    setPage((current) => Math.max(0, current - 1));
  }

  function finishDrag(clientX: number) {
    if (dragStart.current === null) return;
    const distance = clientX - dragStart.current;
    dragStart.current = null;
    if (distance > 60) previous();
    if (distance < -60) void next();
  }

  return (
    <div
      className="reviews-motion-carousel mt-11"
      role="region"
      aria-label="Avaliações de pacientes no Google"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") previous();
        if (event.key === "ArrowRight") void next();
      }}
    >
      <div
        className="overflow-hidden touch-pan-y"
        onPointerDown={(event) => {
          dragStart.current = event.clientX;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerUp={(event) => finishDrag(event.clientX)}
        onPointerCancel={() => {
          dragStart.current = null;
        }}
      >
        <div
          className="flex transition-transform duration-[400ms] ease-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((reviewPage, pageIndex) => (
            <div key={pageIndex} className="grid min-w-full grid-cols-3 gap-5" aria-hidden={pageIndex !== page}>
              {reviewPage.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="reviews-motion-controls mt-9 flex items-center justify-center gap-7">
        <button
          type="button"
          onClick={previous}
          disabled={page === 0}
          aria-label="Avaliações anteriores"
          className="focus-ring grid size-12 place-items-center rounded-full border border-brand/20 text-brand transition-colors hover:border-brand/45 disabled:text-muted/35"
        >
          <ArrowLeft className="size-4" />
        </button>
        <p className="min-w-[4.5rem] text-center text-[0.82rem] font-medium tabular-nums text-muted" aria-live="polite">
          {String(page + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={() => void next()}
          disabled={page >= totalPages - 1 || loading}
          aria-label="Próximas avaliações"
          className="focus-ring grid size-12 place-items-center rounded-full border border-brand/20 text-brand transition-colors hover:border-brand/45 disabled:text-muted/35"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
