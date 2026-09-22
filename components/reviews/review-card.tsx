"use client";

import { GoogleMark } from "@/components/reviews/google-brand";
import { StarRating } from "@/components/reviews/star-rating";
import type { GoogleReview } from "@/lib/google-reviews/types";
import { useState } from "react";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function reviewDate(review: GoogleReview) {
  if (review.relativeTime) return review.relativeTime;
  if (!review.createTime) return "No Google";

  const date = new Date(review.createTime);
  if (Number.isNaN(date.getTime())) return "No Google";

  return new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function ReviewCard({ review }: { review: GoogleReview }) {
  const [expanded, setExpanded] = useState(false);
  const hasLongComment = Boolean(review.comment && review.comment.length > 300);

  return (
    <article className="reviews-motion-card flex min-h-[25rem] flex-col rounded-[1rem] border border-brand/15 bg-white p-7">
      <div className="flex items-start gap-4">
        {review.authorPhotoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.authorPhotoUrl}
            alt=""
            width={58}
            height={58}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="reviews-motion-avatar size-[4.5rem] shrink-0 rounded-full object-cover"
          />
        ) : (
          <span className="reviews-motion-avatar grid size-[4.5rem] shrink-0 place-items-center rounded-full bg-accent text-[0.84rem] font-semibold text-brand">
            {initials(review.authorName)}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
            <h3 className="line-clamp-2 min-h-[2.4em] text-[1.02rem] font-medium leading-[1.2] tracking-[-0.02em]">
              {review.authorName}
            </h3>
            <p className="shrink-0 text-[0.78rem] text-muted/80">{reviewDate(review)}</p>
          </div>
          <div className="mt-2">
            <StarRating rating={review.rating} size="sm" />
          </div>
        </div>
      </div>

      <div className="mt-7 flex-1">
        <p className={`text-[0.97rem] leading-[1.55] text-muted ${expanded ? "" : "line-clamp-6"}`}>
          {review.comment || "Avaliação publicada no Google"}
        </p>
        {hasLongComment ? (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="focus-ring mt-3 rounded-sm text-[0.78rem] font-medium text-brand"
            aria-expanded={expanded}
          >
            {expanded ? "Mostrar menos" : "Continuar lendo"}
          </button>
        ) : null}
      </div>

      <div className="mt-7 flex items-center border-t border-border/65 pt-5">
        <span className="flex items-center gap-3 text-[0.8rem] text-muted">
          <GoogleMark size={28} />
          No Google
        </span>
      </div>
    </article>
  );
}
