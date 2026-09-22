import { TrackedLink } from "@/components/ui/tracked-link";
import { clinic, googleMapsUrl } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export function GoogleReviewCard() {
  return (
    <aside
      id="avaliacoes-resumo"
      aria-label={`Avaliação da clínica: ${clinic.rating} de 5 no Google`}
      className="absolute right-6 top-6 z-10 w-[13.25rem] rounded-2xl border border-white/80 bg-white/[0.94] p-[0.95rem] shadow-[0_14px_40px_rgba(16,54,75,0.09)] backdrop-blur-[6px] transition-transform duration-300 hover:-translate-y-0.5"
    >
      <p className="text-base tracking-[0.1em] text-brand" aria-hidden="true">
        ★★★★★
      </p>
      <span className="sr-only">5 de 5 estrelas</span>
      <p className="mt-1.5 text-[1.08rem] font-medium tracking-[-0.035em] text-foreground">
        {clinic.rating} no Google
      </p>
      <p className="mt-0.5 text-[0.77rem] text-muted">
        {clinic.reviewCount} avaliações de pacientes
      </p>
      <div className="mt-3 border-t border-border/90 pt-3">
        <TrackedLink
          href={googleMapsUrl}
          eventName="review_google_click"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring group inline-flex min-h-7 items-center gap-2 rounded-sm text-[0.79rem] font-medium text-brand"
        >
          Ver avaliações
          <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </TrackedLink>
      </div>
    </aside>
  );
}
