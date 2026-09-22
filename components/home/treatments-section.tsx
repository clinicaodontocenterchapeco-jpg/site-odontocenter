"use client";

import { TreatmentList } from "@/components/treatments/treatment-list";
import { TrackedLink } from "@/components/ui/tracked-link";
import { treatments } from "@/data/treatments";
import { useRevealOnce } from "@/hooks/use-reveal-once";
import { whatsappUrl } from "@/lib/site";
import {
  ArrowRight,
  CalendarDays,
  ClipboardCheck,
  HeartHandshake,
  ScanLine,
} from "lucide-react";
import Image from "next/image";

const differentials = [
  { label: "Tecnologia aplicada ao cuidado", icon: ScanLine },
  { label: "Atendimento humanizado", icon: HeartHandshake },
  { label: "Planejamento individualizado", icon: ClipboardCheck },
] as const;

export function TreatmentsSection() {
  const sectionRef = useRevealOnce<HTMLElement>({ classPrefix: "treatments-motion", settleAfter: 1750 });

  return (
    <section
      ref={sectionRef}
      id="tratamentos"
      aria-labelledby="treatments-title"
      className="relative hidden overflow-hidden border-t border-brand/10 bg-[#f3f6f7] py-[4.75rem] lg:block"
    >
      <div
        className="treatments-motion-image pointer-events-none absolute bottom-0 left-0 z-0 h-[clamp(18.5rem,24vw,23.5rem)] w-[min(46vw,46rem)] overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-[6.5rem] bottom-0 -left-4 -right-6 opacity-[0.88] [filter:brightness(1.035)_contrast(0.94)_saturate(0.82)]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,.25) 7%, black 19%, black 94%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,.25) 7%, black 19%, black 94%, transparent 100%)",
          }}
        >
          <Image
            src="/dental-instruments.webp"
            alt=""
            fill
            sizes="(min-width: 1600px) 736px, 46vw"
            className="object-cover object-top"
          />
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #f3f6f7 0%, transparent 9%, transparent 86%, #f3f6f7 100%)",
          }}
        />
        <div className="absolute -bottom-[13rem] -left-[10rem] size-[38rem] rounded-full border border-brand/16" />
        <div className="absolute bottom-[4.4rem] -left-[8%] h-[15rem] w-[108%] rotate-[5deg] rounded-[50%] border-t border-brand/12" />
      </div>

      <div className="site-container relative z-10 grid grid-cols-[minmax(29rem,0.88fr)_minmax(37rem,1.12fr)] items-start gap-[clamp(3rem,5vw,4.75rem)]">
        <div className="relative min-h-[49rem] pt-1">
          <p className="editorial-label treatments-motion-eyebrow">Tratamentos</p>

          <h2
            id="treatments-title"
            className="treatments-motion-heading mt-8 text-[clamp(3.45rem,4.35vw,4.35rem)] font-medium leading-[0.96] tracking-[-0.062em] [hyphens:none] [text-wrap:balance] [word-break:normal]"
          >
            <span className="block whitespace-nowrap">Cuidado completo</span>
            <span className="block whitespace-nowrap">para diferentes</span>
            <span className="block whitespace-nowrap text-brand">necessidades.</span>
          </h2>

          <p className="treatments-motion-copy mt-7 max-w-[31rem] text-[1.03rem] leading-[1.55] text-muted [text-wrap:pretty]">
            Cada tratamento começa com uma avaliação individual e um planejamento pensado para você. Aqui,
            tecnologia, experiência e cuidado caminham sempre juntos.
          </p>

          <div className="mt-8 grid max-w-[34rem] grid-cols-3 gap-5">
            {differentials.map(({ label, icon: Icon }) => (
              <div key={label} className="treatments-motion-differential flex min-w-0 items-center gap-3">
                <span className="grid size-[3.4rem] shrink-0 place-items-center rounded-full bg-[#e5f0f5] text-brand">
                  <Icon className="size-[1.42rem]" strokeWidth={1.65} aria-hidden="true" />
                </span>
                <span className="text-[0.75rem] leading-[1.35] text-foreground/72">{label}</span>
              </div>
            ))}
          </div>

          <TrackedLink
            href={whatsappUrl}
            eventName="treatments_whatsapp_click"
            target="_blank"
            rel="noopener noreferrer"
            className="treatments-motion-cta focus-ring group mt-9 inline-flex h-[3.7rem] min-w-[19.6rem] items-center justify-between rounded-full bg-brand px-9 text-[0.94rem] font-medium text-white transition-[background-color,transform] duration-300 hover:bg-brand-deep"
          >
            Agendar uma avaliação
            <ArrowRight className="size-4 transition-transform duration-[250ms] group-hover:translate-x-[3px]" />
          </TrackedLink>

        </div>

        <div>
          <TreatmentList treatments={treatments} />

          <div className="treatments-motion-final mt-6 grid min-h-[6.55rem] grid-cols-[3.6rem_minmax(0,1fr)_auto] items-center gap-5 rounded-[1.3rem] bg-[#e5f0f5] px-5 py-4">
            <span className="grid size-[3.6rem] place-items-center rounded-full bg-white/60 text-brand">
              <CalendarDays className="size-[1.35rem]" strokeWidth={1.7} aria-hidden="true" />
            </span>

            <div className="min-w-0">
              <p className="text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-foreground/52">
                Não sabe qual tratamento é indicado para você?
              </p>
              <p className="mt-2 text-[0.88rem] leading-[1.35] text-foreground/78">
                Agende uma avaliação e receba uma orientação personalizada.
              </p>
            </div>

            <TrackedLink
              href={whatsappUrl}
              eventName="treatments_final_whatsapp_click"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group inline-flex h-[3.1rem] min-w-[10.8rem] items-center justify-between rounded-full border border-brand bg-white/22 px-6 text-[0.79rem] font-semibold text-brand transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-white/60"
            >
              Agendar agora
              <ArrowRight className="size-4 transition-transform duration-[250ms] group-hover:translate-x-[3px]" />
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
