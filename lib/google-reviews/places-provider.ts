import {
  GOOGLE_PLACE_ID,
  GOOGLE_REVIEWS_URL,
  OFFICIAL_FALLBACK_RATING,
} from "@/lib/google-reviews/config";
import type { GoogleReview, GoogleReviewsResult } from "@/lib/google-reviews/types";

type PlacesReview = {
  name?: string;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  rating?: number;
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
  };
  publishTime?: string;
  googleMapsUri?: string;
};

type PlacesResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesReview[];
};

export function hasPlacesConfig() {
  return Boolean(process.env.GOOGLE_PLACES_API_KEY);
}

export async function fetchPlacesReviews(): Promise<GoogleReviewsResult> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) throw new Error("Google Places não configurado.");

  const response = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(GOOGLE_PLACE_ID)}?languageCode=pt-BR`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews,googleMapsUri",
      },
    },
  );

  if (!response.ok) throw new Error(`Google Places respondeu com ${response.status}.`);

  const payload = (await response.json()) as PlacesResponse;
  const reviews: GoogleReview[] = (payload.reviews ?? []).flatMap((review, index) => {
    if (!review.rating || review.rating < 1 || review.rating > 5) return [];

    return [
      {
        id: review.name ?? `${review.publishTime ?? "review"}-${index}`,
        authorName: review.authorAttribution?.displayName || "Usuário do Google",
        authorPhotoUrl: review.authorAttribution?.photoUri,
        rating: review.rating,
        comment: review.text?.text,
        createTime: review.publishTime,
        relativeTime: review.relativePublishTimeDescription,
        reviewUrl: review.googleMapsUri ?? payload.googleMapsUri ?? GOOGLE_REVIEWS_URL,
      },
    ];
  });

  return {
    rating: payload.rating ?? OFFICIAL_FALLBACK_RATING,
    totalReviewCount: payload.userRatingCount ?? reviews.length,
    reviews,
    source: "places",
  };
}
