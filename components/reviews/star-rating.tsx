import { Star } from "lucide-react";

export function StarRating({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const iconClass = size === "lg" ? "size-8" : size === "sm" ? "size-4" : "size-5";
  const roundedRating = Math.round(rating);

  return (
    <div className="flex items-center gap-1" aria-label={`${rating.toFixed(1)} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`${iconClass} ${size === "lg" ? "reviews-motion-rating-star" : ""} ${index < roundedRating ? "fill-[#FABB05] text-[#FABB05]" : "fill-border text-border"}`}
          strokeWidth={1.2}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
