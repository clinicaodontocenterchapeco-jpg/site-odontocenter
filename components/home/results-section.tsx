"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

type CaseStudy = {
  number: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  objectPosition?: string;
};

const cases: CaseStudy[] = [
  {
    number: "01",
    title: "Estética e reabilitação",
    description:
      "Planejamento personalizado para devolver harmonia, proporção e naturalidade ao sorriso.",
    src: "/caso-real-01.png",
    alt: "Resultado real de tratamento estético e reabilitador",
    objectPosition: "50% center",
  },
  {
    number: "02",
    title: "Implante e reabilitação",
    description:
      "Recuperação da função e da estética com um resultado integrado ao sorriso.",
    src: "/caso-real-02.png",
    alt: "Resultado real de implante e reabilitação dentária",
    objectPosition: "50% center",
  },
  {
    number: "03",
    title: "Reabilitação oral",
    description:
      "Devolução da função mastigatória, estética e qualidade de vida.",
    src: "/caso-real-03.png",
    alt: "Resultado real de reabilitação oral",
    objectPosition: "50% center",
  },
];

const treatments = [
  { label: "Implantes", href: "#caso-02" },
  { label: "Reabilitação oral", href: "#caso-03" },
  { label: "Facetas", href: "#caso-01" },
  { label: "Clareamento", href: "#caso-01" },
] as const;

function BeforeAfterImage({
  caseStudy,
  featured = false,
}: {
  caseStudy: CaseStudy;
  featured?: boolean;
}) {
  const sizes = featured
    ? "(min-width: 1440px) 450px, (min-width: 1024px) 42vw, 50vw"
    : "(min-width: 1440px) 330px, (min-width: 1024px) 25vw, 50vw";

  return (
    <div
      className={`results-motion-image-frame relative grid grid-cols-2 overflow-hidden bg-[#d8d3cd] ${
        featured ? "h-[19.5rem]" : "h-[12.75rem]"
      }`}
      aria-label={`${caseStudy.alt}: comparação antes e depois`}
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[200%]">
          <Image
            src={caseStudy.src}
            alt={`${caseStudy.alt}, antes`}
            fill
            unoptimized
            sizes={sizes}
            className="results-case-image object-cover"
            style={{ objectPosition: caseStudy.objectPosition }}
          />
        </div>
        <span className="results-motion-label results-motion-label-before absolute bottom-5 left-5 rounded-full bg-[#292529]/72 px-[1.15rem] py-[0.45rem] text-[0.78rem] font-medium text-white backdrop-blur-[2px]">
          Antes
        </span>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-[-100%] h-[200%]">
          <Image
            src={caseStudy.src}
            alt={`${caseStudy.alt}, depois`}
            fill
            unoptimized
            sizes={sizes}
            className="results-case-image object-cover"
            style={{ objectPosition: caseStudy.objectPosition }}
          />
        </div>
        <span className="results-motion-label results-motion-label-after absolute bottom-5 right-5 rounded-full bg-brand px-[1.15rem] py-[0.45rem] text-[0.78rem] font-medium text-white">
          Depois
        </span>
      </div>

      <span
        className="results-motion-divider pointer-events-none absolute left-1/2 top-0 z-10 h-full w-px -translate-x-1/2 bg-white/65"
        aria-hidden="true"
      />
    </div>
  );
}

function CaseLink({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <a
      href={caseStudy.src}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring group/link inline-flex min-h-10 items-center gap-3 whitespace-nowrap rounded-sm text-[0.78rem] font-medium text-brand"
      aria-label={`Ver imagem completa do caso ${caseStudy.number}`}
    >
      <span className="relative">
        Ver caso completo
        <span className="absolute inset-x-0 -bottom-1 h-px origin-left bg-brand/60 transition-transform duration-250 group-hover/link:scale-x-110" />
      </span>
      <ArrowUpRight className="size-3.5 transition-transform duration-250 group-hover/link:translate-x-[3px]" />
    </a>
  );
}

function FeaturedCase({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <article
      id={`caso-${caseStudy.number}`}
      className="results-case-card results-motion-featured group overflow-hidden rounded-[1.1rem] border border-border/40 bg-white shadow-[0_18px_55px_rgba(17,54,74,0.035)]"
    >
      <BeforeAfterImage caseStudy={caseStudy} featured />

      <div className="results-motion-case-bar grid min-h-[6.75rem] grid-cols-[minmax(14.5rem,0.9fr)_minmax(0,1.45fr)_auto] items-center gap-6 px-6 py-[1.1rem]">
        <div>
          <p className="text-[0.75rem] font-semibold text-brand">Caso {caseStudy.number}</p>
          <h3 className="mt-1 whitespace-nowrap text-[1.45rem] font-medium leading-[1.05] tracking-[-0.04em]">
            {caseStudy.title}
          </h3>
        </div>
        <p className="border-l border-border/60 pl-6 text-[0.88rem] leading-[1.45] text-muted">
          {caseStudy.description}
        </p>
        <div className="border-l border-border/60 pl-6">
          <CaseLink caseStudy={caseStudy} />
        </div>
      </div>
    </article>
  );
}

function SecondaryCase({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <article
      id={`caso-${caseStudy.number}`}
      className={`results-case-card results-motion-secondary results-motion-secondary-${caseStudy.number} group overflow-hidden rounded-[1rem] border border-border/40 bg-white shadow-[0_16px_44px_rgba(17,54,74,0.03)]`}
    >
      <BeforeAfterImage caseStudy={caseStudy} />

      <div className="results-motion-case-bar grid min-h-[6.7rem] grid-cols-[minmax(9.5rem,0.72fr)_minmax(0,1fr)_auto] items-start gap-5 px-5 py-4">
        <div>
          <p className="text-[0.73rem] font-semibold text-brand">Caso {caseStudy.number}</p>
          <h3 className="mt-1 text-[1.18rem] font-medium leading-[1.08] tracking-[-0.035em]">
            {caseStudy.title}
          </h3>
        </div>
        <p className="border-l border-border/60 pl-5 pt-0.5 text-[0.79rem] leading-[1.45] text-muted [text-wrap:pretty]">
          {caseStudy.description}
        </p>
        <div className="border-l border-border/60 pl-5 pt-0.5">
          <CaseLink caseStudy={caseStudy} />
        </div>
      </div>
    </article>
  );
}

export function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    section.classList.add("results-motion-preparing", "results-motion-ready");

    let hasStarted = false;
    let settleTimer: ReturnType<typeof setTimeout> | null = null;
    let firstFrame: number | null = null;
    let secondFrame: number | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted) return;

        hasStarted = true;
        section.classList.add("results-motion-visible");
        settleTimer = setTimeout(() => {
          section.classList.add("results-motion-settled");
        }, 1950);
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    firstFrame = requestAnimationFrame(() => {
      section.classList.remove("results-motion-preparing");
      secondFrame = requestAnimationFrame(() => observer.observe(section));
    });

    return () => {
      observer.disconnect();
      if (settleTimer !== null) clearTimeout(settleTimer);
      if (firstFrame !== null) cancelAnimationFrame(firstFrame);
      if (secondFrame !== null) cancelAnimationFrame(secondFrame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="resultados"
      aria-labelledby="results-title"
      className="hidden border-t border-border/65 bg-background pb-[3.25rem] pt-8 lg:block"
    >
      <div className="site-container">
        <div className="grid grid-cols-[minmax(20rem,0.46fr)_minmax(0,1fr)] items-start gap-14">
          <div className="pt-1">
            <p className="editorial-label results-motion-eyebrow">Resultados reais</p>
            <h2
              id="results-title"
              className="results-motion-headline mt-9 text-[clamp(3rem,3.85vw,3.6rem)] font-medium leading-[0.98] tracking-[-0.06em] [hyphens:none] [overflow-wrap:normal] [text-wrap:balance] [word-break:normal]"
            >
              <span className="block">Transformações</span>
              <span className="block">que refletem</span>
              <span className="block whitespace-nowrap">cuidado, técnica</span>
              <span className="block whitespace-nowrap">
                e <span className="text-brand">planejamento.</span>
              </span>
            </h2>
            <p className="results-motion-copy mt-7 max-w-[23rem] text-[1rem] leading-[1.52] text-muted [text-wrap:pretty]">
              Aqui na Odonto Center Chapecó, cada sorriso tem uma história real. Nossos tratamentos são
              personalizados, com planejamento detalhado e foco em resultados naturais e duradouros.
            </p>
            <a
              href="#caso-01"
              className="focus-ring results-motion-cta group/cta mt-7 inline-flex h-[3.45rem] min-w-[16.5rem] items-center justify-between rounded-full bg-brand px-8 text-[0.9rem] font-medium text-white transition-[background-color,transform] duration-250 hover:-translate-y-0.5 hover:bg-brand-deep"
            >
              Explorar tratamentos
              <ArrowRight className="size-4 transition-transform duration-250 group-hover/cta:translate-x-[3px]" />
            </a>
          </div>

          <div className="mt-12">
            <FeaturedCase caseStudy={cases[0]} />
          </div>
        </div>

        <div className="mt-9 flex items-end justify-between border-b border-brand/26">
          <nav
            aria-label="Categorias de tratamentos"
            className="results-motion-tabs flex items-end gap-[clamp(2.8rem,5.2vw,5rem)]"
          >
            {treatments.map((treatment, index) => (
              <a
                key={treatment.label}
                href={treatment.href}
                className={`focus-ring results-motion-tab relative rounded-sm pb-3 text-[0.91rem] font-medium transition-colors duration-200 ${
                  index === 0 ? "text-brand" : "text-brand/70 hover:text-brand/90"
                }`}
              >
                {treatment.label}
                {index === 0 ? (
                  <span
                    className="results-motion-tab-underline absolute inset-x-0 bottom-[-1px] h-0.5 origin-left bg-brand"
                    aria-hidden="true"
                  />
                ) : null}
              </a>
            ))}
          </nav>

          <p className="editorial-label results-motion-editorial mb-3 text-[0.58rem] font-medium text-brand/42">
            Odontologia que transforma vidas
          </p>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-7">
          <SecondaryCase caseStudy={cases[1]} />
          <SecondaryCase caseStudy={cases[2]} />
        </div>

        <div className="results-motion-footer mt-16 flex items-center gap-10 text-brand/55">
          <span className="results-motion-footer-line h-px flex-1 bg-brand/28" aria-hidden="true" />
          <p className="text-center text-[0.62rem] font-medium uppercase tracking-[0.32em]">
            Sorrisos reais. Histórias únicas.
          </p>
          <span className="results-motion-footer-line h-px flex-1 bg-brand/28" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
