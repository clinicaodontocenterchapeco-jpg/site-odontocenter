"use client";

import { TrackedLink } from "@/components/ui/tracked-link";
import { useRevealOnce } from "@/hooks/use-reveal-once";
import { whatsappUrl } from "@/lib/site";
import { ArrowRight, Heart, Sparkles, UsersRound } from "lucide-react";
import Image from "next/image";

const careDifferentials = [
  { label: "Acolhimento real", icon: Heart },
  { label: "Experiência humanizada", icon: UsersRound },
  { label: "Cuidado em cada detalhe", icon: Sparkles },
] as const;

const carePhotos = {
  main: {
    src: "/care-experience/care-main.webp",
    alt: "Paciente e profissional da clínica sorrindo juntas após o atendimento",
  },
  gift: {
    src: "/care-experience/care-gift.webp",
    alt: "Profissional e paciente sorrindo durante um momento de cuidado na clínica",
  },
  orchid: {
    src: "/care-experience/care-orchid.webp",
    alt: "Paciente e profissional celebrando juntas na clínica",
  },
  pinkOrchid: {
    src: "/care-experience/care-pink-orchid.webp",
    alt: "Profissional e paciente sorrindo em um encontro de acompanhamento",
  },
} as const;

export function CareExperienceSection() {
  const sectionRef = useRevealOnce<HTMLElement>({ classPrefix: "care-motion", settleAfter: 1750 });

  return (
    <section
      ref={sectionRef}
      id="atendimento"
      aria-labelledby="care-experience-title"
      className="relative hidden overflow-hidden border-t border-brand/10 bg-[#f7f8f8] py-[clamp(4.75rem,6vw,6.25rem)] lg:block"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-[28rem] left-[13%] size-[42rem] rounded-full border border-brand/[0.08]" />
        <div className="absolute -bottom-[33rem] left-[20%] size-[56rem] rounded-full bg-white/65" />
        <div className="absolute -right-[23rem] -top-[25rem] size-[53rem] rounded-full bg-[#e9f0f3]/75" />
      </div>

      <div className="site-container relative z-10 grid grid-cols-[minmax(0,0.91fr)_minmax(0,1.09fr)] items-center gap-[clamp(3rem,5vw,5.25rem)]">
        <div className="flex min-h-[clamp(35rem,45vw,40.5rem)] flex-col justify-center py-3">
          <p className="editorial-label care-motion-eyebrow">Atendimento</p>

          <h2
            id="care-experience-title"
            className="care-motion-heading mt-8 text-[clamp(3.05rem,4.05vw,4rem)] font-medium leading-[0.99] tracking-[-0.06em] [text-wrap:balance]"
          >
            <span className="block whitespace-nowrap">
              Cuidado que <span className="text-brand">acolhe</span>
            </span>
            <span className="mt-1 block whitespace-nowrap">
              {" "}em <span className="text-brand">cada etapa.</span>
            </span>
          </h2>

          <p className="care-motion-copy mt-8 max-w-[37rem] text-[clamp(1rem,1.25vw,1.13rem)] leading-[1.58] text-foreground/68 [text-wrap:pretty]">
            Na Odonto Center Chapecó, cada atendimento é pensado para oferecer acolhimento, atenção e uma
            experiência mais humana do primeiro contato ao acompanhamento final.
          </p>

          <div className="mt-8 grid max-w-[38rem] grid-cols-3 gap-[clamp(1.25rem,2.1vw,2.4rem)]">
            {careDifferentials.map(({ label, icon: Icon }) => (
              <div key={label} className="care-motion-differential min-w-0">
                <span className="grid size-[3.65rem] place-items-center rounded-full bg-[#e8f1f5] text-brand">
                  <Icon className="size-[1.5rem]" strokeWidth={1.65} aria-hidden="true" />
                </span>
                <p className="mt-3 max-w-[8.8rem] text-[0.92rem] font-medium leading-[1.22] text-brand-deep">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <TrackedLink
            href={whatsappUrl}
            eventName="care_experience_whatsapp_click"
            target="_blank"
            rel="noopener noreferrer"
            className="care-motion-cta focus-ring group mt-9 inline-flex h-[3.85rem] w-[min(100%,22.5rem)] items-center justify-between rounded-full bg-brand px-9 text-[0.98rem] font-medium text-white transition-[background-color,transform] duration-[250ms] hover:bg-brand-deep"
          >
            Agendar uma avaliação
            <ArrowRight className="size-[1.1rem] transition-transform duration-[250ms] group-hover:translate-x-[3px]" aria-hidden="true" />
          </TrackedLink>

          <div className="care-motion-editorial mt-auto flex items-center gap-4 pt-10 text-brand-deep/68">
            <span className="h-px w-[3.4rem] bg-brand/30" aria-hidden="true" />
            <p className="whitespace-nowrap text-[0.59rem] font-semibold uppercase tracking-[0.28em]">
              Pessoas reais · momentos reais · cuidado verdadeiro
            </p>
            <span className="h-px min-w-8 flex-1 bg-brand/25" aria-hidden="true" />
          </div>
        </div>

        <div className="relative pb-12">
          <div className="grid h-[clamp(35rem,45vw,40.5rem)] grid-cols-[1.12fr_0.59fr_0.59fr] grid-rows-2 gap-2.5">
            <figure className="care-motion-photo care-motion-photo-main relative col-start-1 row-span-2 overflow-hidden rounded-[1.15rem] bg-[#e8edef]">
              <Image
                src={carePhotos.main.src}
                alt={carePhotos.main.alt}
                fill
                sizes="(min-width: 1600px) 350px, 24vw"
                className="care-motion-photo-image object-cover object-center [filter:brightness(1.01)_contrast(0.98)_saturate(0.96)]"
              />
            </figure>

            <figure className="care-motion-photo care-motion-photo-small-1 relative col-span-2 col-start-2 row-start-1 overflow-hidden rounded-[1.15rem] bg-[#e8edef]">
              <Image
                src={carePhotos.gift.src}
                alt={carePhotos.gift.alt}
                fill
                sizes="(min-width: 1600px) 370px, 27vw"
                className="care-motion-photo-image object-cover object-[center_44%] [filter:brightness(1.01)_contrast(0.98)_saturate(0.96)]"
              />
            </figure>

            <figure className="care-motion-photo care-motion-photo-small-2 relative col-start-2 row-start-2 overflow-hidden rounded-[1.15rem] bg-[#e8edef]">
              <Image
                src={carePhotos.orchid.src}
                alt={carePhotos.orchid.alt}
                fill
                sizes="(min-width: 1600px) 185px, 13.5vw"
                className="care-motion-photo-image object-cover object-center [filter:brightness(1.01)_contrast(0.98)_saturate(0.96)]"
              />
            </figure>

            <figure className="care-motion-photo care-motion-photo-small-3 relative col-start-3 row-start-2 overflow-hidden rounded-[1.15rem] bg-[#e8edef]">
              <Image
                src={carePhotos.pinkOrchid.src}
                alt={carePhotos.pinkOrchid.alt}
                fill
                sizes="(min-width: 1600px) 185px, 13.5vw"
                className="care-motion-photo-image object-cover object-center [filter:brightness(1.01)_contrast(0.98)_saturate(0.96)]"
              />
            </figure>
          </div>

          <div className="care-motion-handwritten absolute bottom-0 right-0 flex items-center gap-4 text-brand/72" aria-hidden="true">
            <span className="text-[clamp(1.1rem,1.7vw,1.5rem)] font-light italic tracking-[-0.03em]">
              Sorrisos que nos inspiram
            </span>
            <span className="h-px w-[clamp(3rem,6vw,6rem)] bg-brand/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
