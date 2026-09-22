"use client";

import { LocationMap } from "@/components/location/location-map";
import { OpeningHours } from "@/components/location/opening-hours";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { TrackedLink } from "@/components/ui/tracked-link";
import { clinicLocation } from "@/data/location";
import { whatsappUrl } from "@/lib/site";
import { useRevealOnce } from "@/hooks/use-reveal-once";
import { ArrowRight, MapPin, Phone } from "lucide-react";

export function LocationSection() {
  const { address } = clinicLocation;
  const sectionRef = useRevealOnce<HTMLElement>({ classPrefix: "location-motion", settleAfter: 1800 });

  return (
    <section
      ref={sectionRef}
      id="localizacao"
      aria-labelledby="location-title"
      className="relative hidden overflow-hidden border-t border-brand/10 bg-[#f3f7f9] py-[clamp(4.25rem,4.75vw,4.75rem)] lg:block"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -bottom-[38rem] right-[-8rem] size-[58rem] rounded-full border border-brand/[0.09]" />
        <div className="absolute -bottom-[31rem] right-[-3rem] size-[46rem] rounded-full border border-brand/[0.06]" />
      </div>

      <div className="site-container relative z-10 grid grid-cols-[minmax(24rem,0.72fr)_minmax(0,1.28fr)] items-start gap-[clamp(3.25rem,5vw,5.5rem)]">
        <div className="flex min-h-[48.5rem] flex-col pt-1">
          <p className="editorial-label location-motion-eyebrow">Localização</p>

          <h2
            id="location-title"
            className="location-motion-heading mt-7 text-[clamp(3.2rem,4.15vw,4.15rem)] font-medium leading-[0.97] tracking-[-0.062em] [hyphens:none] [text-wrap:balance] [word-break:normal]"
          >
            <span className="block">Estamos em</span>
            <span className="block">Chapecó,</span>
            <span className="mt-1 block text-brand">prontos para</span>
            <span className="block text-brand">receber você.</span>
          </h2>

          <p className="location-motion-copy mt-6 max-w-[25.5rem] text-[1rem] leading-[1.56] text-foreground/66 [text-wrap:pretty]">
            Com fácil acesso e um ambiente pensado para o seu conforto, a Odonto Center Chapecó está de portas
            abertas para cuidar do seu sorriso.
          </p>

          <div className="mt-7 space-y-4">
            <div className="location-motion-contact grid grid-cols-[3.35rem_minmax(0,1fr)] items-start gap-4">
              <span className="grid size-[3.35rem] place-items-center rounded-full bg-[#e2eef4] text-brand">
                <MapPin className="size-[1.42rem]" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <address className="pt-1 not-italic">
                <p className="text-[0.95rem] font-semibold text-foreground/88">{address.street}</p>
                <p className="mt-0.5 text-[0.82rem] leading-[1.45] text-foreground/62">{address.neighborhood}</p>
                <p className="text-[0.82rem] leading-[1.45] text-foreground/62">
                  {address.city} — {address.state}, {address.postalCode}
                </p>
              </address>
            </div>

            <div className="location-motion-contact grid grid-cols-[3.35rem_minmax(0,1fr)] items-center gap-4">
              <span className="grid size-[3.35rem] place-items-center rounded-full bg-[#e2eef4] text-brand">
                <Phone className="size-[1.38rem]" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <div>
                <a
                  href={`tel:${clinicLocation.phoneE164}`}
                  className="focus-ring rounded-sm text-[0.95rem] font-semibold text-foreground/88 hover:text-brand"
                >
                  {clinicLocation.phone}
                </a>
                <p className="mt-0.5 text-[0.82rem] text-foreground/62">Atendimento via WhatsApp</p>
              </div>
            </div>
          </div>

          <div className="location-motion-ctas mt-6 grid max-w-[22.5rem] gap-2.5">
            <TrackedLink
              href={whatsappUrl}
              eventName="location_whatsapp_click"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group inline-flex h-[3.45rem] items-center justify-between rounded-full bg-brand px-7 text-[0.88rem] font-semibold text-white transition-[background-color,transform] duration-[250ms] hover:-translate-y-0.5 hover:bg-brand-deep"
            >
              <span className="inline-flex items-center gap-3">
                <WhatsAppIcon className="size-[1.1rem]" />
                Falar com a equipe
              </span>
              <ArrowRight className="size-4 transition-transform duration-[250ms] group-hover:translate-x-[3px]" aria-hidden="true" />
            </TrackedLink>

            <TrackedLink
              href={clinicLocation.directionsUrl}
              eventName="maps_directions_click"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group inline-flex h-[3.45rem] items-center justify-between rounded-full border border-brand bg-white/35 px-7 text-[0.88rem] font-semibold text-brand transition-[background-color,transform] duration-[250ms] hover:-translate-y-0.5 hover:bg-white/70"
            >
              <span className="inline-flex items-center gap-3">
                <MapPin className="size-[1.1rem]" strokeWidth={1.8} aria-hidden="true" />
                Como chegar no Maps
              </span>
              <ArrowRight className="size-4 transition-transform duration-[250ms] group-hover:translate-x-[3px]" aria-hidden="true" />
            </TrackedLink>
          </div>

          <div className="location-motion-hours mt-7">
            <OpeningHours />
          </div>

          <div className="location-motion-editorial mt-auto flex items-center gap-3 pt-7 text-brand-deep/56">
            <span className="h-px w-8 bg-brand/25" aria-hidden="true" />
            <p className="whitespace-nowrap text-[0.52rem] font-semibold uppercase tracking-[0.25em]">
              Acesso fácil · atendimento humanizado · sempre com você
            </p>
            <span className="h-px min-w-5 flex-1 bg-brand/20" aria-hidden="true" />
          </div>
        </div>

        <LocationMap />
      </div>
    </section>
  );
}
