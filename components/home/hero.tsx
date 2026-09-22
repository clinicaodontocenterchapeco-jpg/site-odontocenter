import { AnimatedSmileCounter } from "@/components/home/animated-smile-counter";
import { ToothMark } from "@/components/icons/tooth-mark";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/ui/tracked-link";
import { whatsappUrl } from "@/lib/site";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  MapPin,
  UsersRound,
} from "lucide-react";
import Image from "next/image";

const heroBenefits = [
  {
    title: "Tecnologia de ponta",
    description: "Equipamentos modernos e tratamentos avançados",
    Icon: ToothMark,
  },
  {
    title: "Equipe especializada",
    description: "Profissionais qualificados e em constante atualização",
    Icon: UsersRound,
  },
  {
    title: "Atendimento humanizado",
    description: "Você em primeiro lugar, sempre",
    Icon: Heart,
  },
] as const;

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Referência em transformar sorrisos"
      className="border-b border-border/80 pt-[5.25rem] lg:pt-[6.25rem]"
    >
      <div className="site-container grid grid-cols-1 gap-8 py-8 lg:hidden">
        <div className="flex flex-col">
          <div>
            <p className="editorial-label">Chapecó · Santa Catarina</p>

            <h1 className="mt-7 text-[clamp(3.2rem,3.95vw,4.05rem)] font-medium leading-[0.98] tracking-[-0.06em]">
              <span className="block">Odontologia</span>
              <span className="block">contemporânea.</span>
              <span className="mt-[0.08em] block">Cuidado</span>
              <span className="block">verdadeiramente</span>
              <span className="block text-brand">humano.</span>
            </h1>

            <p className="mt-4 max-w-[22rem] text-[clamp(1.08rem,1.35vw,1.28rem)] leading-[1.48] text-muted">
              Tecnologia, precisão e atendimento personalizado em Chapecó.
            </p>

            <div className="mt-7 flex flex-col items-start gap-4">
              <Button
                asChild
                className="group h-[3.25rem] min-w-[12.5rem] rounded-full bg-brand px-8 text-[0.88rem] text-white shadow-none transition-transform duration-300 hover:-translate-y-px hover:bg-brand-deep"
              >
                <TrackedLink
                  href={whatsappUrl}
                  eventName="hero_whatsapp_click"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar avaliação
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </TrackedLink>
              </Button>

              <a
                href="#tratamentos"
                className="focus-ring group inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap rounded-sm text-[0.73rem] font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                <span className="relative">
                  Conheça nossos tratamentos
                  <span className="absolute inset-x-0 -bottom-2 h-px origin-left bg-brand/55 transition-transform duration-300 group-hover:scale-x-[0.84]" />
                </span>
                <ArrowUpRight className="size-3 text-brand transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="mt-10">
            <span className="mb-3 block h-px w-7 bg-foreground/28" aria-hidden="true" />
            <p className="text-[0.62rem] font-medium uppercase leading-[1.5] tracking-[0.28em] text-foreground/42">
              Sorrisos reais.
              <br />
              Histórias únicas.
            </p>
          </div>
        </div>

        <div className="group relative aspect-[1.55] overflow-hidden rounded-[1.25rem] bg-[#dfe4e6]">
          <Image
            src="/fachada-odonto-center.png"
            alt="Fachada da Odonto Center em Chapecó"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="site-container grid grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] items-start gap-[clamp(2.25rem,3.2vw,3rem)] pb-[2.15rem] pt-[1.65rem]">
          <div className="flex min-h-[clamp(31.5rem,38vw,34.5rem)] flex-col pt-[1.8rem]">
            <div>
              <p className="editorial-label hero-motion-eyebrow tracking-[0.27em]">
                Dentista em Chapecó
              </p>

              <h1 id="hero-title" className="mt-[2rem] leading-[0.98] tracking-[-0.06em]">
                <span className="hero-motion-title-primary block text-[clamp(3rem,4vw,3.85rem)] font-light text-foreground">
                  Referência em
                </span>
                <span className="hero-motion-title-accent mt-[0.08em] block whitespace-nowrap text-[clamp(2.65rem,3.55vw,3.2rem)] font-medium text-brand">
                  transformar sorrisos
                </span>
              </h1>

              <p className="hero-motion-copy mt-[1.6rem] max-w-[30rem] text-[clamp(1rem,1.2vw,1.15rem)] leading-[1.55] text-muted">
                Cuidado, tecnologia, precisão e atendimento
                <br />
                personalizado em Chapecó. Tudo para o seu sorriso,
                <br />
                em um só lugar.
              </p>

              <AnimatedSmileCounter />
            </div>

            <div className="mt-auto max-w-[29.5rem]">
              <div className="hero-motion-ctas grid grid-cols-[1.36fr_1fr] gap-3.5">
                <TrackedLink
                  href={whatsappUrl}
                  eventName="hero_whatsapp_click"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring group inline-flex h-[3.5rem] items-center justify-center gap-3 rounded-full bg-brand px-5 text-[0.9rem] font-medium text-white transition-[background-color,transform] duration-250 hover:-translate-y-0.5 hover:bg-brand-deep"
                >
                  <WhatsAppIcon className="size-7 shrink-0" />
                  <span className="whitespace-nowrap">Chamar no WhatsApp</span>
                </TrackedLink>

                <TrackedLink
                  href="#tratamentos"
                  eventName="hero_treatments_click"
                  className="focus-ring inline-flex h-[3.5rem] items-center justify-center rounded-full border border-brand/75 bg-white/25 px-5 text-[0.88rem] font-medium text-brand transition-[background-color,border-color,transform] duration-250 hover:-translate-y-0.5 hover:border-brand hover:bg-white/75"
                >
                  Ver tratamentos
                </TrackedLink>
              </div>

              <p className="hero-motion-microcopy mt-[1.5rem] text-center text-[0.59rem] font-medium uppercase tracking-[0.34em] text-foreground/42">
                Sorrisos reais. Histórias únicas.
              </p>
            </div>
          </div>

          <div className="hero-motion-image relative h-[clamp(31.5rem,38vw,34.5rem)] overflow-hidden rounded-[1.25rem] bg-[#dfe4e6]">
            <Image
              src="/fachada-odonto-center.png"
              alt="Fachada real da Odonto Center em Chapecó"
              fill
              priority
              unoptimized
              sizes="(min-width: 1440px) 800px, (min-width: 1024px) 62vw, 100vw"
              className="object-cover object-center"
            />

            <span className="absolute bottom-5 right-5 inline-flex h-[3rem] items-center gap-2.5 rounded-full border border-white/80 bg-[#263343]/82 px-5 text-[0.61rem] font-semibold uppercase tracking-[0.15em] text-white shadow-[0_8px_22px_rgba(0,0,0,0.16)] backdrop-blur-[5px]">
              <MapPin className="size-[1.05rem] fill-white text-white" strokeWidth={1.2} aria-hidden="true" />
              Chapecó · Santa Catarina
            </span>
          </div>
        </div>

        <div className="site-container">
          <div className="grid grid-cols-3 border-t border-border/85 py-[1.45rem]">
            {heroBenefits.map(({ title, description, Icon }, index) => (
              <article
                key={title}
                className={`flex min-w-0 items-center gap-5 px-[clamp(1rem,2.5vw,2.4rem)] ${
                  index > 0 ? "border-l border-border/75" : ""
                }`}
              >
                <span className="grid size-[3.55rem] shrink-0 place-items-center rounded-full bg-[#e8f1f5] text-brand">
                  <Icon className="size-[1.45rem]" strokeWidth={1.55} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <strong className="block text-[0.88rem] font-medium leading-[1.2] tracking-[-0.02em] text-foreground/88">
                    {title}
                  </strong>
                  <span className="mt-1.5 block text-[0.7rem] leading-[1.35] text-muted">
                    {description}
                  </span>
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
