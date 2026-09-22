import { GOOGLE_G_ASSET } from "@/lib/google-reviews/config";
import Image from "next/image";

export function GoogleMark({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src={GOOGLE_G_ASSET}
      alt="Google"
      width={size}
      height={size}
      unoptimized
      className={className}
    />
  );
}
