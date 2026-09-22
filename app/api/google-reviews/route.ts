import { getGoogleReviews } from "@/lib/google-reviews/provider";

export const dynamic = "force-dynamic";

export async function GET() {
  const result = getGoogleReviews();

  return Response.json(result, {
    headers: {
      "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
    },
  });
}
