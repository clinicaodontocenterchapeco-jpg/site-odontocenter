import { GoogleMark } from "@/components/reviews/google-brand";
import { StarRating } from "@/components/reviews/star-rating";
import {
  GOOGLE_REVIEWS_URL,
  OFFICIAL_FALLBACK_RATING,
  OFFICIAL_FALLBACK_REVIEW_COUNT,
} from "@/lib/google-reviews/config";
import { ArrowUpRight } from "lucide-react";

export function ReviewsFallback() {
  return (
    <div className="mt-11" aria-label="Resumo das avaliações públicas no Google">
      <div className="grid grid-cols-3 gap-5">
        <article className="flex min-h-[18.5rem] flex-col justify-between rounded-[1rem] border border-brand/14 bg-white p-8">
          <p className="editorial-label text-[0.65rem]">Média atual</p>
          <div>
            <p className="text-[4rem] font-medium leading-none tracking-[-0.07em]">
              {OFFICIAL_FALLBACK_RATING.toFixed(1).replace(".", ",")}
            </p>
            <div className="mt-5">
              <StarRating rating={OFFICIAL_FALLBACK_RATING} />
            </div>
            <p className="mt-4 text-[0.95rem] text-muted">Avaliação pública no Google</p>
          </div>
        </article>

        <article className="flex min-h-[18.5rem] flex-col justify-between rounded-[1rem] border border-brand/14 bg-white p-8">
          <p className="editorial-label text-[0.65rem]">Confiança construída</p>
          <div>
            <p className="text-[4rem] font-medium leading-none tracking-[-0.07em]">
              {OFFICIAL_FALLBACK_REVIEW_COUNT}
            </p>
            <p className="mt-5 max-w-[15rem] text-[0.95rem] leading-[1.5] text-muted">
              avaliações públicas de pacientes da Odonto Center Chapecó.
            </p>
          </div>
        </article>

        <article className="flex min-h-[18.5rem] flex-col justify-between rounded-[1rem] border border-brand/14 bg-white p-8">
          <GoogleMark size={42} />
          <div>
            <h3 className="text-[1.25rem] font-medium tracking-[-0.03em]">Avaliações individuais</h3>
            <p className="mt-3 max-w-[17rem] text-[0.9rem] leading-[1.5] text-muted">
              Consulte os depoimentos reais diretamente no perfil público da clínica.
            </p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group mt-6 inline-flex items-center gap-3 rounded-sm text-[0.82rem] font-medium text-brand"
            >
              <span className="border-b border-brand/60 pb-1">Ver todas no Google</span>
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </article>
      </div>

      <p className="mt-5 text-center text-[0.75rem] text-muted/75">
        Os depoimentos individuais serão exibidos aqui somente pela integração oficial do Google.
      </p>
    </div>
  );
}
