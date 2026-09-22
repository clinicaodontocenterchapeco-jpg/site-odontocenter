export type GoogleReviewsSource = "business-profile" | "places" | "manual" | "demo" | "fallback";

export type GoogleReview = {
  id: string;
  authorName: string;
  authorPhotoUrl?: string;
  rating: number;
  comment?: string;
  createTime?: string;
  relativeTime?: string;
  reviewUrl?: string;
};

export type GoogleReviewsResult = {
  rating: number;
  totalReviewCount: number;
  reviews: GoogleReview[];
  source: GoogleReviewsSource;
  nextPageToken?: string;
};

export type GoogleReviewsPageOptions = {
  pageToken?: string;
};
