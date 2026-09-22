"use client";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { TrackedLink } from "@/components/ui/tracked-link";
import { clinicLocation } from "@/data/location";
import { whatsappUrl } from "@/lib/site";
import { useRevealOnce } from "@/hooks/use-reveal-once";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Clock3,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const footerNavigation = [
  { label: "A Clínica", href: "#inicio" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
] as const;

const instagramUrl = "https://www.instagram.com/odontocenter.chapeco/?hl=pt";

const instagramIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.65"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-[1.15rem]"
    aria-hidden="true"
  >
    <rect width="18" height="18" x="3" y="3" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.4" cy="6.6" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

function ContactIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid size-[2.35rem] shrink-0 place-items-center rounded-full border border-white/25 text-white/82">
      {children}
    </span>
  );
}

export function SiteFooter() {
  const { address } = clinicLocation;
  const footerRef = useRevealOnce<HTMLElement>({ classPrefix: "footer-motion", settleAfter: 1850 });

  return (
    <footer ref={footerRef} className="relative hidden overflow-hidden border-t border-white/15 bg-brand text-white lg:block">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 720"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full text-white"
          aria-hidden="true"
        >
          <path d="M-80 36C135 2 322 92 548-10" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.08" />
          <path d="M906 720C1116 647 1287 545 1470 335" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.07" />
        </svg>
      </div>

      <div className="site-container relative z-10">
        <div className="grid min-h-[31.5rem] grid-cols-[1.38fr_0.88fr_0.62fr_1.08fr] items-start gap-[clamp(2rem,3vw,3.4rem)] pb-[3.15rem] pt-[4.1rem]">
          <div className="min-w-0">
            <a
              href="#inicio"
              aria-label="Odonto Center Chapecó — voltar ao início"
              className="footer-motion-logo focus-ring inline-flex min-h-11 items-center rounded-md"
            >
              <Image
                src="/odonto-center.webp"
                width={340}
                height={71}
                alt="Odonto Center Clínica Odontológica"
                sizes="245px"
                className="h-auto w-[clamp(13.25rem,16vw,15.25rem)] brightness-0 invert"
              />
            </a>

            <span className="mt-5 block h-px w-8 bg-white/55" aria-hidden="true" />

            <p className="footer-motion-headline mt-5 max-w-[26rem] text-[clamp(1.65rem,2vw,2rem)] font-medium leading-[1.1] tracking-[-0.04em] text-white/95 [text-wrap:balance]">
              Pronto para cuidar do seu sorriso <span className="text-[#bde8fb]">com confiança.</span>
            </p>

            <p className="footer-motion-brand-copy mt-3.5 max-w-[26rem] text-[clamp(0.8rem,0.95vw,0.88rem)] leading-[1.5] text-white/72 [text-wrap:pretty]">
              Odontologia pensada para você, com tecnologia, acolhimento e excelência em Chapecó.
            </p>

            <p className="footer-motion-brand-copy mt-5 text-[0.52rem] font-medium uppercase tracking-[0.3em] text-white/68">
              Cuidado · confiança · tecnologia · pessoas
            </p>

            <TrackedLink
              href={clinicLocation.googleMapsUrl}
              eventName="footer_google_summary_click"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver as avaliações da Odonto Center no Google"
              className="footer-motion-brand-copy focus-ring mt-5 flex h-[3.2rem] max-w-[27rem] items-center rounded-[0.7rem] border border-white/22 bg-white/[0.035] px-4 text-[0.71rem] text-white/82 transition-colors hover:border-white/38 hover:bg-white/[0.07] max-[1365px]:px-3.5 max-[1365px]:text-[0.66rem]"
            >
              <Image src="/google-g.png" alt="Google" width={32} height={32} className="size-[1.3rem] max-[1365px]:size-[1.15rem]" />
              <span className="ml-2.5 whitespace-nowrap max-[1365px]:ml-2">{clinicLocation.rating} no Google</span>
              <span className="mx-3.5 h-4 w-px bg-white/22 max-[1365px]:mx-2.5" aria-hidden="true" />
              <span className="whitespace-nowrap">{clinicLocation.reviewCount} avaliações</span>
              <span className="mx-3.5 h-4 w-px bg-white/22 max-[1365px]:mx-2.5" aria-hidden="true" />
              <span className="whitespace-nowrap">Chapecó — SC</span>
            </TrackedLink>

            <p className="footer-motion-brand-copy mt-3 text-[0.69rem] text-white/55">
              Sorrisos reais. Histórias que nos motivam todos os dias.
            </p>
          </div>

          <div className="min-w-0 pt-1">
            <h2 className="footer-motion-contact-heading text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-white/82">Contato</h2>

            <div className="mt-5 space-y-4">
              <TrackedLink
                href={instagramUrl}
                eventName="footer_instagram_click"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Odonto Center"
                className="footer-motion-contact-item focus-ring group flex items-start gap-3 rounded-md text-white/68 transition-colors hover:text-white"
              >
                <ContactIcon>{instagramIcon}</ContactIcon>
                <span className="min-w-0 pt-0.5">
                  <span className="block text-[0.52rem] uppercase tracking-[0.22em] text-white/50">Instagram</span>
                  <span className="mt-1 block text-[0.76rem] leading-[1.35]">@odontocenter.chapeco</span>
                </span>
              </TrackedLink>

              <TrackedLink
                href={whatsappUrl}
                eventName="footer_whatsapp_click"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a Odonto Center pelo WhatsApp"
                className="footer-motion-contact-item focus-ring group flex items-start gap-3 rounded-md text-white/68 transition-colors hover:text-white"
              >
                <ContactIcon>
                  <WhatsAppIcon className="size-[1.12rem]" />
                </ContactIcon>
                <span className="pt-0.5">
                  <span className="block text-[0.52rem] uppercase tracking-[0.22em] text-white/50">WhatsApp</span>
                  <span className="mt-1 block text-[0.76rem]">{clinicLocation.phone}</span>
                </span>
              </TrackedLink>

              <TrackedLink
                href={clinicLocation.googleMapsUrl}
                eventName="footer_location_click"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Localização da Odonto Center no Google Maps"
                className="footer-motion-contact-item focus-ring group flex items-start gap-3 rounded-md text-white/68 transition-colors hover:text-white"
              >
                <ContactIcon>
                  <MapPin className="size-[1.15rem]" strokeWidth={1.7} aria-hidden="true" />
                </ContactIcon>
                <span className="min-w-0 pt-0.5 text-[0.73rem] leading-[1.45]">
                  <span className="block text-[0.52rem] uppercase tracking-[0.22em] text-white/50">Endereço</span>
                  <span className="mt-1 block text-white/78">{address.street}</span>
                  <span className="block">
                    {address.neighborhood} — {address.city}/{address.state}
                  </span>
                  <span className="block">{address.postalCode}</span>
                </span>
              </TrackedLink>
            </div>

            <div className="footer-motion-contact-item mt-5 border-t border-white/18 pt-4">
              <div className="flex items-start gap-3">
                <ContactIcon>
                  <Clock3 className="size-[1.12rem]" strokeWidth={1.7} aria-hidden="true" />
                </ContactIcon>
                <div className="pt-0.5">
                  <p className="text-[0.52rem] uppercase tracking-[0.22em] text-white/50">Atendimento</p>
                  <p className="mt-1 text-[0.73rem] leading-[1.5] text-white/68">
                    Seg. a Sex. — 08h às 19h
                    <br />
                    Sáb. — 08h às 11h30
                  </p>
                </div>
              </div>
            </div>
          </div>

          <nav aria-label="Navegação do rodapé" className="footer-motion-nav min-w-0 pt-1">
            <h2 className="text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-white/82">Navegação</h2>

            <ul className="mt-5 space-y-2.5">
              {footerNavigation.map((item) => (
                <li key={item.label}>
                  <TrackedLink
                    href={item.href}
                    eventName="footer_navigation_click"
                    className="focus-ring group inline-flex min-h-7 items-center gap-2 rounded-sm text-[0.76rem] text-white/67 transition-colors duration-300 hover:text-white"
                  >
                    <ChevronRight className="size-3.5 text-white/55 transition-transform duration-[250ms] group-hover:translate-x-[3px]" strokeWidth={1.5} aria-hidden="true" />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </TrackedLink>
                </li>
              ))}
              <li>
                <TrackedLink
                  href={whatsappUrl}
                  eventName="footer_schedule_click"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring group inline-flex min-h-7 items-center gap-2 rounded-sm text-[0.76rem] text-white/67 transition-colors duration-300 hover:text-white"
                >
                  <ChevronRight className="size-3.5 text-white/55 transition-transform duration-[250ms] group-hover:translate-x-[3px]" strokeWidth={1.5} aria-hidden="true" />
                  <span className="whitespace-nowrap">Agendar avaliação</span>
                </TrackedLink>
              </li>
            </ul>
          </nav>

          <div className="relative min-w-0">
            <div className="footer-motion-cta-card rounded-[1.35rem] border border-white/28 bg-brand-deep/32 p-[clamp(1.35rem,1.9vw,1.75rem)]">
              <p className="text-[0.52rem] font-semibold uppercase tracking-[0.28em] text-white/66">
                Agende sua avaliação
              </p>

              <p className="mt-4 text-[clamp(1.42rem,1.72vw,1.72rem)] font-medium leading-[1.1] tracking-[-0.035em] text-white/95">
                Seu próximo sorriso pode <span className="text-[#bde8fb]">começar aqui.</span>
              </p>

              <p className="mt-3.5 max-w-[18rem] text-[0.77rem] leading-[1.48] text-white/68">
                Fale com nossa equipe e agende sua avaliação.
              </p>

              <TrackedLink
                href={whatsappUrl}
                eventName="footer_schedule_click"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a equipe da Odonto Center pelo WhatsApp"
                className="focus-ring group mt-5 inline-flex h-[3rem] w-full items-center justify-between rounded-full bg-white px-5 text-[0.8rem] font-semibold text-brand-deep transition-[background-color,transform] duration-[250ms] hover:-translate-y-0.5 hover:bg-white/90"
              >
                Falar com a equipe
                <ArrowRight className="size-4 transition-transform duration-[250ms] group-hover:translate-x-[3px]" aria-hidden="true" />
              </TrackedLink>

              <TrackedLink
                href={whatsappUrl}
                eventName="footer_whatsapp_click"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir conversa com a Odonto Center no WhatsApp"
                className="focus-ring group mt-3.5 inline-flex items-center gap-2 rounded-sm text-[0.72rem] font-medium text-white/72 transition-colors hover:text-white"
              >
                <WhatsAppIcon className="size-3.5" />
                <span className="border-b border-white/32 pb-0.5">Abrir no WhatsApp</span>
                <ArrowUpRight className="size-3 transition-transform duration-[250ms] group-hover:translate-x-[3px]" aria-hidden="true" />
              </TrackedLink>
            </div>

            <div className="footer-motion-editorial mt-5 flex items-end justify-end gap-3 pr-1 text-right text-[0.48rem] font-medium uppercase leading-[1.65] tracking-[0.3em] text-white/45" aria-hidden="true">
              <span>
                Mais
                <br />
                sorrisos
                <br />
                para amanhã
              </span>
              <span className="mb-1.5 h-px w-7 bg-white/42" />
            </div>
          </div>
        </div>

        <div className="footer-motion-bottom relative flex min-h-[4rem] items-center justify-between gap-8 text-[0.67rem] text-white/56">
          <span className="footer-motion-bottom-line absolute inset-x-0 top-0 h-px origin-left bg-white/16" aria-hidden="true" />
          <p className="footer-motion-bottom-content">© 2026 Odonto Center. Todos os direitos reservados.</p>

          <div className="footer-motion-bottom-content flex items-center gap-4">
            <span>Desenvolvido por</span>
            <TrackedLink
              href="https://www.jpclab.com.br"
              eventName="footer_jpclab_click"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Site da JPC LAB"
              className="focus-ring group inline-flex h-[2.3rem] items-center gap-2.5 rounded-full border border-white/42 px-4 text-[0.64rem] font-semibold tracking-[0.11em] text-white/80 transition-[background-color,border-color,color] duration-300 hover:border-white/68 hover:bg-white/[0.07] hover:text-white"
            >
              JPC LAB
              <ArrowUpRight className="size-3.5 transition-transform duration-[250ms] group-hover:translate-x-[3px]" aria-hidden="true" />
            </TrackedLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
