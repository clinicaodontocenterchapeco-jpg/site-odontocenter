"use client";

import { ToothMark } from "@/components/icons/tooth-mark";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { GoogleMark } from "@/components/reviews/google-brand";
import { StarRating } from "@/components/reviews/star-rating";
import { TrackedLink } from "@/components/ui/tracked-link";
import { clinicLocation } from "@/data/location";
import { reviewsDemo } from "@/data/reviews-demo";
import { treatments } from "@/data/treatments";
import { GOOGLE_REVIEWS_URL } from "@/lib/google-reviews/config";
import { createWhatsAppUrl, whatsappUrl } from "@/lib/site";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Clock,
  ExternalLink,
  Heart,
  HeartHandshake,
  MapPin,
  Phone,
  ScanLine,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const mobileCases = [
  {
    number: "01",
    title: "Estética e reabilitação",
    description: "Planejamento personalizado para devolver harmonia, proporção e naturalidade ao sorriso.",
    src: "/caso-real-01.png",
  },
  {
    number: "02",
    title: "Implante e reabilitação",
    description: "Recuperação da função e da estética com um resultado integrado ao sorriso.",
    src: "/caso-real-02.png",
  },
  {
    number: "03",
    title: "Reabilitação oral",
    description: "Devolução da função mastigatória, estética e qualidade de vida.",
    src: "/caso-real-03.png",
  },
] as const;

const mobileBenefits = [
  { title: "Tecnologia de ponta", copy: "Precisão em cada etapa", Icon: ToothMark },
  { title: "Equipe especializada", copy: "Cuidado em evolução", Icon: Users },
  { title: "Atendimento humano", copy: "Você em primeiro lugar", Icon: Heart },
] as const;

const carePhotos = [
  {
    src: "/care-experience/care-main.webp",
    alt: "Paciente e profissional da clínica sorrindo juntas após o atendimento",
  },
  {
    src: "/care-experience/care-gift.webp",
    alt: "Profissional e paciente sorrindo durante um momento de cuidado na clínica",
  },
  {
    src: "/care-experience/care-orchid.webp",
    alt: "Paciente e profissional celebrando juntas na clínica",
  },
  {
    src: "/care-experience/care-pink-orchid.webp",
    alt: "Profissional e paciente sorrindo em um encontro de acompanhamento",
  },
] as const;

function MobileEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mobile-reveal inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-deep">
      <span className="h-px w-7 bg-brand/70" aria-hidden="true" />
      {children}
    </p>
  );
}

function MobileBeforeAfter({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative grid aspect-[1.42] grid-cols-2 overflow-hidden bg-[#d9d2cb]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[200%]">
          <Image src={src} alt={`${title}, antes`} fill unoptimized sizes="50vw" className="object-cover object-center" />
        </div>
        <span className="absolute bottom-3 left-3 rounded-full bg-[#25272b]/72 px-3.5 py-1.5 text-[0.7rem] font-medium text-white backdrop-blur-sm">
          Antes
        </span>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-[-100%] h-[200%]">
          <Image src={src} alt={`${title}, depois`} fill unoptimized sizes="50vw" className="object-cover object-center" />
        </div>
        <span className="absolute bottom-3 right-3 rounded-full bg-brand px-3.5 py-1.5 text-[0.7rem] font-medium text-white">
          Depois
        </span>
      </div>
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/75" aria-hidden="true" />
    </div>
  );
}

export function MobileHero() {
  return (
    <div className="lg:hidden">
      <div className="mobile-shell pb-8 pt-7">
        <div className="mobile-hero-enter">
          <MobileEyebrow>Dentista em Chapecó</MobileEyebrow>

          <h1 className="mt-5 max-w-[22rem] text-[clamp(2.55rem,12vw,3.35rem)] font-light leading-[0.98] tracking-[-0.058em] text-foreground">
            Referência em
            <span className="mt-1 block font-medium text-brand">transformar sorrisos</span>
          </h1>

          <p className="mt-5 max-w-[22rem] text-[1rem] leading-[1.55] text-foreground/65">
            Cuidado, tecnologia, precisão e atendimento personalizado em Chapecó. Tudo para o seu sorriso, em um só lugar.
          </p>

          <div className="my-6 flex items-center gap-4" aria-label="Mais de 7.500 sorrisos transformados">
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
            <div className="text-center">
              <strong className="block text-[2.7rem] font-medium leading-none tracking-[-0.055em] text-brand">+ 7.500</strong>
              <span className="mt-2 block text-[0.58rem] font-semibold uppercase tracking-[0.27em] text-foreground/55">
                sorrisos transformados
              </span>
            </div>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>

          <div className="grid gap-2.5">
            <TrackedLink
              href={whatsappUrl}
              eventName="hero_whatsapp_click"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-brand px-6 text-[0.94rem] font-semibold text-white active:bg-brand-deep"
            >
              <WhatsAppIcon className="size-6" />
              Chamar no WhatsApp
            </TrackedLink>
            <TrackedLink
              href="#tratamentos"
              eventName="hero_treatments_click"
              className="focus-ring inline-flex min-h-14 items-center justify-center rounded-full border border-brand/60 px-6 text-[0.94rem] font-semibold text-brand active:bg-brand/[0.06]"
            >
              Ver tratamentos
            </TrackedLink>
          </div>
        </div>

        <figure className="mobile-hero-image relative mt-7 aspect-[1.22] overflow-hidden rounded-[1.25rem] bg-[#dfe4e6] shadow-[0_18px_45px_rgba(16,68,96,0.08)]">
          <Image
            src="/fachada-odonto-center.png"
            alt="Fachada real da Odonto Center em Chapecó"
            fill
            priority
            unoptimized
            sizes="(max-width: 1023px) 100vw, 0px"
            className="object-cover object-center"
          />
          <figcaption className="absolute bottom-3 right-3 inline-flex min-h-9 items-center gap-2 rounded-full border border-white/75 bg-[#263343]/82 px-3.5 text-[0.56rem] font-semibold uppercase tracking-[0.13em] text-white backdrop-blur-sm">
            <MapPin className="size-3.5 fill-white" strokeWidth={1.4} aria-hidden="true" />
            Chapecó · SC
          </figcaption>
        </figure>

        <p className="mt-5 text-center text-[0.59rem] font-semibold uppercase tracking-[0.3em] text-foreground/42">
          Sorrisos reais. Histórias únicas.
        </p>

        <div className="mt-6 divide-y divide-border/75 border-y border-border/75">
          {mobileBenefits.map(({ title, copy, Icon }) => (
            <div key={title} className="flex min-h-[4.8rem] items-center gap-4 py-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#e7f0f4] text-brand">
                <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span>
                <strong className="block text-[0.9rem] font-semibold tracking-[-0.02em]">{title}</strong>
                <span className="mt-0.5 block text-[0.76rem] text-muted">{copy}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MobileResults() {
  return (
    <div className="mobile-shell py-14 lg:hidden">
      <MobileEyebrow>Resultados reais</MobileEyebrow>
      <h2 className="mobile-reveal mobile-delay-1 mt-5 text-[clamp(2.35rem,10.7vw,3rem)] font-medium leading-[1.01] tracking-[-0.055em]">
        Transformações que refletem <span className="text-brand">planejamento.</span>
      </h2>
      <p className="mobile-reveal mobile-delay-2 mt-5 text-[1rem] leading-[1.55] text-muted">
        Cada sorriso tem uma história real. Nossos tratamentos unem cuidado, técnica e resultados naturais.
      </p>

      <div className="mt-8 space-y-5">
        {mobileCases.map((item, index) => (
          <article
            key={item.number}
            className={`mobile-reveal mobile-delay-${Math.min(index + 2, 4)} overflow-hidden rounded-[1.15rem] border border-brand/10 bg-white shadow-[0_14px_38px_rgba(17,54,74,0.05)]`}
          >
            <MobileBeforeAfter src={item.src} title={item.title} />
            <div className="p-5">
              <p className="text-[0.7rem] font-semibold text-brand">Caso {item.number}</p>
              <h3 className="mt-1 text-[1.24rem] font-semibold leading-tight tracking-[-0.035em]">{item.title}</h3>
              <p className="mt-3 text-[0.88rem] leading-[1.5] text-muted">{item.description}</p>
              <a
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-4 inline-flex min-h-11 items-center gap-2 text-[0.8rem] font-semibold text-brand"
              >
                Ver caso completo <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <a
        href="#tratamentos"
        className="mobile-reveal mobile-delay-4 focus-ring mt-7 inline-flex min-h-14 w-full items-center justify-between rounded-full bg-brand px-7 text-[0.94rem] font-semibold text-white"
      >
        Explorar tratamentos <ArrowRight className="size-4" aria-hidden="true" />
      </a>
    </div>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function MobileReviews() {
  const [index, setIndex] = useState(0);
  const dragStart = useRef<number | null>(null);
  const review = reviewsDemo[index];

  function previous() {
    setIndex((current) => Math.max(0, current - 1));
  }

  function next() {
    setIndex((current) => Math.min(reviewsDemo.length - 1, current + 1));
  }

  function finishDrag(clientX: number) {
    if (dragStart.current === null) return;
    const distance = clientX - dragStart.current;
    dragStart.current = null;
    if (distance > 48) previous();
    if (distance < -48) next();
  }

  return (
    <div className="mobile-shell py-14 lg:hidden">
      <MobileEyebrow>Avaliações Google</MobileEyebrow>
      <h2 className="mobile-reveal mobile-delay-1 mt-5 text-[clamp(2.35rem,10.5vw,3rem)] font-medium leading-[1.01] tracking-[-0.055em]">
        A confiança de quem já <span className="text-brand">passou por aqui.</span>
      </h2>
      <p className="mobile-reveal mobile-delay-2 mt-5 text-[1rem] leading-[1.55] text-muted">
        Experiências de pacientes e a confiança construída todos os dias com cuidado e respeito.
      </p>

      <aside className="mobile-reveal mobile-delay-2 mt-7 flex items-center justify-between gap-4 rounded-[1rem] border border-brand/14 bg-white p-4">
        <div className="flex min-w-0 items-center gap-3">
          <GoogleMark size={38} className="shrink-0" />
          <div>
            <p className="text-[1.35rem] font-semibold tracking-[-0.04em]">5,0 no Google</p>
            <p className="mt-0.5 text-[0.76rem] text-muted">179 avaliações de pacientes</p>
          </div>
        </div>
        <div className="hidden min-[370px]:block"><StarRating rating={5} size="sm" /></div>
      </aside>

      <div
        className="mobile-reveal mobile-delay-3 mt-5 touch-pan-y"
        role="region"
        aria-label="Avaliações de pacientes no Google"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") previous();
          if (event.key === "ArrowRight") next();
        }}
        onPointerDown={(event) => {
          dragStart.current = event.clientX;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerUp={(event) => finishDrag(event.clientX)}
        onPointerCancel={() => {
          dragStart.current = null;
        }}
      >
        <article key={review.id} className="min-h-[23.5rem] rounded-[1.15rem] border border-brand/14 bg-white p-5 shadow-[0_14px_35px_rgba(17,54,74,0.04)]">
          <div className="flex items-start gap-3.5">
            {review.avatar ? (
              <Image src={review.avatar} alt="" width={58} height={58} className="size-14 shrink-0 rounded-full object-cover" />
            ) : (
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-accent text-[0.78rem] font-semibold text-brand">
                {initials(review.name)}
              </span>
            )}
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="line-clamp-2 text-[1rem] font-semibold leading-[1.2]">{review.name}</h3>
                <span className="shrink-0 text-[0.7rem] text-muted/80">{review.relativeTime}</span>
              </div>
              <div className="mt-2"><StarRating rating={review.rating} size="sm" /></div>
            </div>
          </div>
          <p className="mt-6 text-[0.98rem] leading-[1.58] text-muted">{review.text}</p>
          <div className="mt-7 flex items-center gap-2.5 border-t border-border/70 pt-5 text-[0.78rem] text-muted">
            <GoogleMark size={24} /> No Google
          </div>
        </article>
      </div>

      <div className="mobile-reveal mobile-delay-4 mt-6 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={previous}
          disabled={index === 0}
          aria-label="Avaliação anterior"
          className="focus-ring grid size-12 place-items-center rounded-full border border-brand/25 text-brand disabled:opacity-30"
        >
          <ArrowLeft className="size-4" />
        </button>
        <p className="min-w-[4.5rem] text-center text-[0.8rem] font-semibold tabular-nums text-muted" aria-live="polite">
          {String(index + 1).padStart(2, "0")} / {String(reviewsDemo.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={next}
          disabled={index === reviewsDemo.length - 1}
          aria-label="Próxima avaliação"
          className="focus-ring grid size-12 place-items-center rounded-full border border-brand/25 text-brand disabled:opacity-30"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>

      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-brand/45 text-[0.86rem] font-semibold text-brand"
      >
        Ver todas no Google <ArrowUpRight className="size-4" aria-hidden="true" />
      </a>
    </div>
  );
}

export function MobileTreatments() {
  const differentials = [
    { label: "Tecnologia", Icon: ScanLine },
    { label: "Acolhimento", Icon: HeartHandshake },
    { label: "Planejamento", Icon: ToothMark },
  ] as const;

  return (
    <div className="mobile-shell py-14 lg:hidden">
      <MobileEyebrow>Tratamentos</MobileEyebrow>
      <h2 className="mobile-reveal mobile-delay-1 mt-5 text-[clamp(2.35rem,10.7vw,3rem)] font-medium leading-[1.01] tracking-[-0.055em]">
        Cuidado completo para diferentes <span className="text-brand">necessidades.</span>
      </h2>
      <p className="mobile-reveal mobile-delay-2 mt-5 text-[1rem] leading-[1.55] text-muted">
        Cada tratamento começa com uma avaliação individual e um planejamento pensado para você.
      </p>

      <div className="mobile-reveal mobile-delay-2 mt-7 grid grid-cols-3 gap-2">
        {differentials.map(({ label, Icon }) => (
          <div key={label} className="rounded-[0.9rem] bg-white/70 px-2 py-3 text-center">
            <span className="mx-auto grid size-10 place-items-center rounded-full bg-[#e3eef3] text-brand">
              <Icon className="size-[1.15rem]" strokeWidth={1.65} aria-hidden="true" />
            </span>
            <span className="mt-2 block text-[0.64rem] font-semibold text-foreground/70">{label}</span>
          </div>
        ))}
      </div>

      <ol className="mobile-reveal mobile-delay-3 mt-7 overflow-hidden rounded-[1rem] border border-brand/12 bg-white" aria-label="Tratamentos oferecidos">
        {treatments.map((treatment) => (
          <li key={treatment.id} className="border-b border-border/70 last:border-b-0">
            <TrackedLink
              href={createWhatsAppUrl(treatment.whatsappMessage)}
              eventName="treatment_whatsapp_click"
              eventProperties={{ treatmentId: treatment.id, treatmentName: treatment.title }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Falar no WhatsApp sobre ${treatment.title}`}
              className="focus-ring grid min-h-[4.6rem] grid-cols-[2.55rem_minmax(0,1fr)_1.25rem] items-center gap-3 px-4 py-3 active:bg-accent/70"
            >
              <span className="border-r border-brand/14 pr-3 text-[1.45rem] font-light tracking-[-0.05em] text-brand/68" aria-hidden="true">
                {treatment.index}
              </span>
              <span className="min-w-0">
                <strong className="block text-[0.95rem] font-semibold leading-tight tracking-[-0.02em]">{treatment.title}</strong>
                <span className="mt-1 block text-[0.73rem] leading-[1.38] text-muted">{treatment.description}</span>
              </span>
              <ArrowRight className="size-4 justify-self-end text-brand" strokeWidth={1.7} aria-hidden="true" />
            </TrackedLink>
          </li>
        ))}
      </ol>

      <TrackedLink
        href={whatsappUrl}
        eventName="treatments_whatsapp_click"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-reveal mobile-delay-4 focus-ring mt-7 inline-flex min-h-14 w-full items-center justify-between rounded-full bg-brand px-7 text-[0.94rem] font-semibold text-white"
      >
        Agendar uma avaliação <ArrowRight className="size-4" aria-hidden="true" />
      </TrackedLink>
    </div>
  );
}

export function MobileCare() {
  const benefits = [
    { label: "Acolhimento real", Icon: Heart },
    { label: "Experiência humana", Icon: Users },
    { label: "Cada detalhe", Icon: Star },
  ] as const;

  return (
    <div className="mobile-shell py-14 lg:hidden">
      <MobileEyebrow>Atendimento</MobileEyebrow>
      <h2 className="mobile-reveal mobile-delay-1 mt-5 text-[clamp(2.35rem,10.7vw,3rem)] font-medium leading-[1.01] tracking-[-0.055em]">
        Cuidado que <span className="text-brand">acolhe</span> em <span className="text-brand">cada etapa.</span>
      </h2>
      <p className="mobile-reveal mobile-delay-2 mt-5 text-[1rem] leading-[1.58] text-foreground/65">
        Cada atendimento é pensado para oferecer acolhimento, atenção e uma experiência mais humana do primeiro contato ao acompanhamento final.
      </p>

      <div className="mobile-reveal mobile-delay-2 mt-7 grid grid-cols-3 gap-2">
        {benefits.map(({ label, Icon }) => (
          <div key={label} className="text-center">
            <span className="mx-auto grid size-11 place-items-center rounded-full bg-[#e4eef3] text-brand">
              <Icon className="size-5" strokeWidth={1.65} aria-hidden="true" />
            </span>
            <p className="mt-2 text-[0.68rem] font-semibold leading-[1.25] text-brand-deep">{label}</p>
          </div>
        ))}
      </div>

      <div className="mobile-reveal mobile-delay-3 mt-8 grid h-[31rem] grid-cols-[1.08fr_0.92fr] grid-rows-[1fr_1fr_0.86fr] gap-2">
        <figure className="relative row-span-2 overflow-hidden rounded-[1rem] bg-[#e6ecef]">
          <Image src={carePhotos[0].src} alt={carePhotos[0].alt} fill sizes="56vw" className="object-cover object-center" />
        </figure>
        <figure className="relative overflow-hidden rounded-[1rem] bg-[#e6ecef]">
          <Image src={carePhotos[1].src} alt={carePhotos[1].alt} fill sizes="44vw" className="object-cover object-center" />
        </figure>
        <figure className="relative overflow-hidden rounded-[1rem] bg-[#e6ecef]">
          <Image src={carePhotos[2].src} alt={carePhotos[2].alt} fill sizes="44vw" className="object-cover object-center" />
        </figure>
        <figure className="relative col-span-2 overflow-hidden rounded-[1rem] bg-[#e6ecef]">
          <Image src={carePhotos[3].src} alt={carePhotos[3].alt} fill sizes="100vw" className="object-cover object-[center_42%]" />
        </figure>
      </div>

      <TrackedLink
        href={whatsappUrl}
        eventName="care_experience_whatsapp_click"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-reveal mobile-delay-4 focus-ring mt-7 inline-flex min-h-14 w-full items-center justify-between rounded-full bg-brand px-7 text-[0.94rem] font-semibold text-white"
      >
        Agendar uma avaliação <ArrowRight className="size-4" aria-hidden="true" />
      </TrackedLink>
    </div>
  );
}

export function MobileLocation() {
  const { address } = clinicLocation;

  return (
    <div className="mobile-shell py-14 lg:hidden">
      <MobileEyebrow>Localização</MobileEyebrow>
      <h2 className="mobile-reveal mobile-delay-1 mt-5 text-[clamp(2.35rem,10.7vw,3rem)] font-medium leading-[1.01] tracking-[-0.055em]">
        Estamos em Chapecó, <span className="text-brand">prontos para receber você.</span>
      </h2>
      <p className="mobile-reveal mobile-delay-2 mt-5 text-[1rem] leading-[1.58] text-foreground/65">
        Fácil acesso e um ambiente preparado para cuidar do seu sorriso.
      </p>

      <div className="mobile-reveal mobile-delay-2 mt-7 space-y-4 rounded-[1rem] bg-white p-5">
        <div className="flex items-start gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#e2eef4] text-brand">
            <MapPin className="size-5" strokeWidth={1.7} aria-hidden="true" />
          </span>
          <address className="not-italic">
            <p className="text-[0.95rem] font-semibold">{address.street}</p>
            <p className="mt-1 text-[0.8rem] leading-[1.45] text-muted">
              {address.neighborhood}<br />{address.city} — {address.state}, {address.postalCode}
            </p>
          </address>
        </div>
        <div className="flex items-center gap-4 border-t border-border/70 pt-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#e2eef4] text-brand">
            <Phone className="size-5" strokeWidth={1.7} aria-hidden="true" />
          </span>
          <div>
            <a href={`tel:${clinicLocation.phoneE164}`} className="focus-ring text-[0.95rem] font-semibold">{clinicLocation.phone}</a>
            <p className="mt-1 text-[0.76rem] text-muted">Atendimento via WhatsApp</p>
          </div>
        </div>
      </div>

      <div className="mobile-reveal mobile-delay-3 mt-5 grid gap-2.5">
        <TrackedLink
          href={whatsappUrl}
          eventName="location_whatsapp_click"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex min-h-14 items-center justify-between rounded-full bg-brand px-7 text-[0.92rem] font-semibold text-white"
        >
          <span className="inline-flex items-center gap-2.5"><WhatsAppIcon className="size-5" /> Falar com a equipe</span>
          <ArrowRight className="size-4" aria-hidden="true" />
        </TrackedLink>
        <TrackedLink
          href={clinicLocation.directionsUrl}
          eventName="maps_directions_click"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex min-h-14 items-center justify-between rounded-full border border-brand bg-white/60 px-7 text-[0.92rem] font-semibold text-brand"
        >
          <span className="inline-flex items-center gap-2.5"><MapPin className="size-5" /> Como chegar</span>
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </TrackedLink>
      </div>

      <div className="mobile-reveal mobile-delay-3 mt-7 overflow-hidden rounded-[1.2rem] border border-brand/14 bg-white shadow-[0_15px_40px_rgba(16,68,96,0.06)]">
        <div className="relative h-[19rem] bg-[#e7f0f4]">
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
        <div className="flex items-center gap-3 p-4">
          <div className="relative h-[4.5rem] w-[6rem] shrink-0 overflow-hidden rounded-[0.75rem] bg-[#dfe5e7]">
            <Image src="/location-facade.webp" alt="Fachada real da Odonto Center em Chapecó" fill sizes="96px" className="object-cover" />
          </div>
          <div className="min-w-0">
            <p className="text-[0.72rem] font-semibold text-brand-deep">Odonto Center Chapecó</p>
            <p className="mt-1 text-[0.74rem] leading-[1.4] text-muted">Um espaço preparado para receber você.</p>
          </div>
          <a href={clinicLocation.googleMapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir no Google Maps" className="focus-ring ml-auto grid size-11 shrink-0 place-items-center rounded-full border border-brand/35 text-brand">
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mobile-reveal mobile-delay-4 mt-7 border-t border-brand/18 pt-6">
        <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-deep">
          <Clock className="size-4" aria-hidden="true" /> Horário de atendimento
        </p>
        <div className="mt-4 space-y-2 text-[0.82rem] text-muted">
          {clinicLocation.hours.map((row) => (
            <div key={row.days} className="flex justify-between gap-4"><span>{row.days}</span><span className="font-medium text-foreground/75">{row.time}</span></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MobileFooter() {
  const navigation = [
    { label: "A Clínica", href: "#inicio" },
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Especialistas", href: "#especialistas" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Localização", href: "#localizacao" },
  ] as const;

  return (
    <div className="mobile-shell py-12 lg:hidden">
      <a href="#inicio" aria-label="Odonto Center Chapecó — voltar ao início" className="focus-ring inline-flex min-h-11 items-center">
        <Image src="/odonto-center.webp" width={340} height={71} alt="Odonto Center Clínica Odontológica" sizes="210px" className="h-auto w-[13rem] brightness-0 invert" />
      </a>
      <span className="mt-5 block h-px w-8 bg-white/55" aria-hidden="true" />

      <p className="mobile-reveal mt-5 max-w-[21rem] text-[2rem] font-medium leading-[1.08] tracking-[-0.045em] text-white/95">
        Pronto para cuidar do seu sorriso <span className="text-[#bde8fb]">com confiança.</span>
      </p>
      <p className="mobile-reveal mobile-delay-1 mt-4 max-w-[22rem] text-[0.93rem] leading-[1.55] text-white/68">
        Odontologia pensada para você, com tecnologia, acolhimento e excelência em Chapecó.
      </p>

      <TrackedLink
        href={whatsappUrl}
        eventName="footer_schedule_click"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-reveal mobile-delay-2 focus-ring mt-7 inline-flex min-h-14 w-full items-center justify-between rounded-full bg-white px-6 text-[0.92rem] font-semibold text-brand-deep"
      >
        Falar com a equipe <ArrowRight className="size-4" aria-hidden="true" />
      </TrackedLink>

      <div className="mobile-reveal mobile-delay-2 mt-9 border-y border-white/16 py-5">
        <a href={`tel:${clinicLocation.phoneE164}`} className="focus-ring flex min-h-11 items-center gap-3 text-[0.86rem] text-white/78">
          <Phone className="size-4 text-[#bde8fb]" aria-hidden="true" /> {clinicLocation.phone}
        </a>
        <a href={clinicLocation.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="focus-ring flex min-h-11 items-center gap-3 text-[0.86rem] text-white/78">
          <MapPin className="size-4 text-[#bde8fb]" aria-hidden="true" /> Av. São Pedro, E908 · Chapecó/SC
        </a>
        <div className="flex min-h-11 items-center gap-3 text-[0.86rem] text-white/78">
          <Clock className="size-4 text-[#bde8fb]" aria-hidden="true" /> Seg. a Sex. · 08h às 19h
        </div>
      </div>

      <nav aria-label="Navegação do rodapé" className="mobile-reveal mobile-delay-3 mt-7">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/55">Navegação</p>
        <ul className="mt-3 divide-y divide-white/12">
          {navigation.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="focus-ring flex min-h-12 items-center justify-between text-[0.88rem] text-white/76">
                {item.label} <ChevronRight className="size-4 text-white/50" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mobile-reveal mobile-delay-4 mt-9 border-t border-white/16 pt-6 text-[0.69rem] text-white/48">
        <p>© 2026 Odonto Center. Todos os direitos reservados.</p>
        <a href="https://www.jpclab.com.br" target="_blank" rel="noopener noreferrer" className="focus-ring mt-4 inline-flex min-h-11 items-center gap-2 text-white/68">
          Desenvolvido por <span className="font-semibold tracking-[0.08em] text-white">JPC LAB</span>
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
