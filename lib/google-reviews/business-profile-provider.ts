import {
  GOOGLE_REVIEWS_URL,
  OFFICIAL_FALLBACK_RATING,
} from "@/lib/google-reviews/config";
import type { GoogleReview, GoogleReviewsPageOptions, GoogleReviewsResult } from "@/lib/google-reviews/types";

type BusinessProfileReview = {
  reviewId?: string;
  reviewer?: {
    displayName?: string;
    profilePhotoUrl?: string;
  };
  starRating?: string | number;
  comment?: string;
  createTime?: string;
};

type BusinessProfileResponse = {
  reviews?: BusinessProfileReview[];
  averageRating?: number;
  totalReviewCount?: number;
  nextPageToken?: string;
};

const starValues: Record<string, number> = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

function normalizeStarRating(value: string | number | undefined) {
  if (typeof value === "number" && Number.isFinite(value) && value >= 1 && value <= 5) return value;
  return typeof value === "string" ? starValues[value] : undefined;
}

function stripResourcePrefix(value: string, prefix: string) {
  return value.startsWith(prefix) ? value.slice(prefix.length) : value;
}

export function hasBusinessProfileConfig() {
  return Boolean(
    process.env.GOOGLE_BUSINESS_ACCOUNT_ID &&
      process.env.GOOGLE_BUSINESS_LOCATION_ID &&
      process.env.GOOGLE_BUSINESS_ACCESS_TOKEN,
  );
}

export async function fetchBusinessProfileReviews(
  options: GoogleReviewsPageOptions = {},
): Promise<GoogleReviewsResult> {
  const accountId = process.env.GOOGLE_BUSINESS_ACCOUNT_ID;
  const locationId = process.env.GOOGLE_BUSINESS_LOCATION_ID;
  const accessToken = process.env.GOOGLE_BUSINESS_ACCESS_TOKEN;

  if (!accountId || !locationId || !accessToken) {
    throw new Error("Google Business Profile não configurado.");
  }

  const account = stripResourcePrefix(accountId, "accounts/");
  const location = stripResourcePrefix(locationId, "locations/");
  const params = new URLSearchParams({ pageSize: "12" });
  if (options.pageToken) params.set("pageToken", options.pageToken);

  const response = await fetch(
    `https://mybusiness.googleapis.com/v4/accounts/${encodeURIComponent(account)}/locations/${encodeURIComponent(location)}/reviews?${params}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );

  if (!response.ok) {
    throw new Error(`Google Business Profile respondeu com ${response.status}.`);
  }

  const payload = (await response.json()) as BusinessProfileResponse;
  const reviews: GoogleReview[] = (payload.reviews ?? []).flatMap((review, index) => {
    const rating = normalizeStarRating(review.starRating);
    if (!rating) return [];

    return [
      {
        id: review.reviewId ?? `${review.createTime ?? "review"}-${index}`,
        authorName: review.reviewer?.displayName || "Usuário do Google",
        authorPhotoUrl: review.reviewer?.profilePhotoUrl,
        rating,
        comment: review.comment,
        createTime: review.createTime,
        reviewUrl: GOOGLE_REVIEWS_URL,
      },
    ];
  });

  const averageFromReviews = reviews.length
    ? reviews.reduce((total, review) => total + review.rating, 0) / reviews.length
    : OFFICIAL_FALLBACK_RATING;

  return {
    rating: payload.averageRating ?? averageFromReviews,
    totalReviewCount: payload.totalReviewCount ?? reviews.length,
    reviews,
    source: "business-profile",
    nextPageToken: payload.nextPageToken,
  };
}
