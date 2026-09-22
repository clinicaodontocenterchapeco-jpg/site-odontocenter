import { reviewsDemo } from "@/data/reviews-demo";
import {
  OFFICIAL_FALLBACK_RATING,
  OFFICIAL_FALLBACK_REVIEW_COUNT,
} from "@/lib/google-reviews/config";
import type { GoogleReviewsResult } from "@/lib/google-reviews/types";

export function getGoogleReviews(): GoogleReviewsResult {
  return {
    rating: OFFICIAL_FALLBACK_RATING,
    totalReviewCount: OFFICIAL_FALLBACK_REVIEW_COUNT,
    source: "demo",
    reviews: reviewsDemo.map((review) => ({
      id: review.id,
      authorName: review.name,
      authorPhotoUrl: review.avatar,
      rating: review.rating,
      comment: review.text,
      relativeTime: review.relativeTime,
    })),
  };
}
