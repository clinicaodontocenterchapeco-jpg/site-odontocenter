import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { TrackedLink } from "@/components/ui/tracked-link";
import { clinicLocation } from "@/data/location";
import { whatsappUrl } from "@/lib/site";
import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";

export function LocationMap() {
  return (
    <div className="location-motion-map relative pb-12">
      <div className="overflow-hidden rounded-[2rem] border border-brand/15 bg-[#e7f0f4]">
        <div className="location-motion-map-overlay relative z-10 p-5 pb-4">
          <div className="grid min-h-[6.9rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-5 rounded-[1.35rem] border border-foreground/[0.07] bg-white px-6 py-4 shadow-[0_12px_30px_rgba(31,64,82,0.07)]">
            <div className="min-w-0">
              <Image
                src="/odonto-center.webp"
                alt="Odonto Center Clínica Odontológica"
                width={340}
                height={71}
                sizes="190px"
                className="h-auto w-[11.8rem]"
              />

              <div className="mt-3 flex items-center gap-3 text-[0.77rem] text-foreground/68">
                <span className="inline-flex items-center gap-1.5">
                  <Star className="size-[1.05rem] fill-[#ffb400] text-[#ffb400]" aria-hidden="true" />
                  <span>{clinicLocation.rating} no Google</span>
                </span>
                <span className="h-4 w-px bg-border" aria-hidden="true" />
                <span>{clinicLocation.reviewCount} avaliações</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <TrackedLink
                href={clinicLocation.googleMapsUrl}
                eventName="location_maps_open_click"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group inline-flex h-[3.15rem] min-w-[9.6rem] items-center justify-center gap-2 rounded-full border border-brand bg-white px-5 text-[0.78rem] font-semibold text-brand transition-[background-color,transform] duration-[250ms] hover:-translate-y-0.5 hover:bg-brand/[0.05]"
              >
                <ExternalLink className="size-4" strokeWidth={1.8} aria-hidden="true" />
                Abrir no Maps
              </TrackedLink>

              <TrackedLink
                href={whatsappUrl}
                eventName="location_map_whatsapp_click"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group inline-flex h-[3.15rem] min-w-[11.6rem] items-center justify-center gap-2 rounded-full bg-brand px-5 text-[0.78rem] font-semibold text-white transition-[background-color,transform] duration-[250ms] hover:-translate-y-0.5 hover:bg-brand-deep"
              >
                <WhatsAppIcon className="size-4" />
                Falar com a equipe
              </TrackedLink>
            </div>
          </div>
        </div>

        <div className="relative mx-5 h-[clamp(23.75rem,27vw,26.5rem)] overflow-hidden rounded-[1.35rem] border border-brand/10 bg-white">
          <iframe
            title="Mapa mostrando a localização da Odonto Center em Chapecó"
            aria-label="Mapa mostrando a localização da Odonto Center em Chapecó"
            src={clinicLocation.embedUrl}
            width="100%"
            height="100%"
            className="absolute inset-0 size-full border-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="location-motion-map-detail m-5 mt-4 flex min-h-[8rem] items-center gap-5 rounded-[1.35rem] border border-foreground/[0.07] bg-white/95 p-3.5">
          <div className="relative h-[6.35rem] w-[13.5rem] shrink-0 overflow-hidden rounded-[0.9rem] bg-[#dfe5e7]">
            <Image
              src="/location-facade.webp"
              alt="Fachada real da Odonto Center em Chapecó"
              fill
              sizes="216px"
              className="object-cover object-center"
            />
          </div>

          <div className="min-w-0">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-brand-deep/72">
              Odonto Center Chapecó
            </p>
            <p className="mt-2 max-w-[22rem] text-[0.86rem] leading-[1.45] text-foreground/66">
              Um espaço preparado para receber você com cuidado em Chapecó.
            </p>
          </div>

          <TrackedLink
            href={clinicLocation.googleMapsUrl}
            eventName="location_facade_maps_click"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver a Odonto Center no Google Maps"
            className="focus-ring ml-auto grid size-11 shrink-0 place-items-center rounded-full border border-brand/35 text-brand transition-colors hover:bg-brand hover:text-white"
          >
            <ExternalLink className="size-4" strokeWidth={1.8} aria-hidden="true" />
          </TrackedLink>
        </div>
      </div>

      <div className="location-motion-map-caption absolute bottom-0 right-4 flex items-center gap-4 text-brand/65" aria-hidden="true">
        <span className="text-[clamp(1.05rem,1.55vw,1.4rem)] font-light italic tracking-[-0.03em]">
          Sorrisos mais perto de você
        </span>
        <span className="h-px w-[clamp(3rem,6vw,6rem)] bg-brand/30" />
      </div>
    </div>
  );
}
