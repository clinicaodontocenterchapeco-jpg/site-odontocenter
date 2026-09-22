"use client";

import { Brand } from "@/components/layout/brand";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TrackedLink } from "@/components/ui/tracked-link";
import { navigation, whatsappUrl } from "@/lib/site";
import { ArrowRight, Menu, MoveUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color] duration-300 ${
        scrolled
          ? "border-border/80 bg-background/94 backdrop-blur-md"
          : "border-transparent bg-background"
      }`}
    >
      <div className="site-container flex h-[4.5rem] items-center justify-between gap-8 lg:h-[6.25rem]">
        <Brand priority />

        <nav aria-label="Navegação principal" className="hidden items-center gap-[clamp(2rem,3.45vw,3.2rem)] lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="focus-ring group relative rounded-sm py-3 text-[0.79rem] font-medium text-foreground/66 transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-1 h-px origin-right scale-x-0 bg-brand transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="group hidden h-[3.3rem] min-w-[13.7rem] rounded-full bg-brand px-8 text-[0.85rem] text-white shadow-none transition-transform duration-300 hover:-translate-y-px hover:bg-brand-deep lg:inline-flex"
          >
            <TrackedLink
              href={whatsappUrl}
              eventName="header_schedule_click"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar avaliação
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
            </TrackedLink>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-lg"
                aria-label="Abrir menu"
                className="size-[3.25rem] rounded-full border-brand/20 bg-white/70 text-brand shadow-none lg:hidden"
              >
                <Menu className="size-[1.15rem]" strokeWidth={1.6} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              style={{ width: "100%", maxWidth: "none" }}
              className="!w-full !max-w-none gap-0 overflow-hidden border-0 bg-[#f4f7f9] p-0 shadow-none sm:!max-w-none"
            >
              <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <span className="absolute -right-24 top-24 size-64 rounded-full border border-brand/[0.07]" />
                <span className="absolute -right-12 top-36 size-48 rounded-full border border-brand/[0.055]" />
                <span className="absolute -bottom-28 -left-28 size-72 rounded-full bg-brand/[0.035] blur-3xl" />
              </div>

              <SheetHeader className="site-container relative z-10 flex h-[4.5rem] shrink-0 flex-row items-center border-b border-brand/10 bg-[#f8fafb]/88 py-0 backdrop-blur-xl">
                <Brand />
                <SheetClose asChild>
                  <Button
                    variant="outline"
                    size="icon-lg"
                    aria-label="Fechar menu"
                    className="ml-auto size-11 rounded-full border-brand/15 bg-white/85 text-brand shadow-[0_8px_22px_rgba(12,91,133,0.08)] transition-transform duration-300 active:scale-95"
                  >
                    <X className="size-[1.1rem]" strokeWidth={1.6} />
                  </Button>
                </SheetClose>
                <SheetTitle className="sr-only">Menu principal</SheetTitle>
                <SheetDescription className="sr-only">
                  Navegue pelas seções do site da Odonto Center Chapecó.
                </SheetDescription>
              </SheetHeader>

              <div className="site-container relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-6">
                <div className="mb-4 flex items-center gap-3">
                  <p className="shrink-0 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-brand-deep">Menu principal</p>
                  <span className="h-px flex-1 bg-brand/15" aria-hidden="true" />
                  <span className="text-[0.58rem] font-medium tabular-nums tracking-[0.18em] text-muted">01 — 05</span>
                </div>

                <nav aria-label="Navegação mobile" className="grid gap-2.5">
                  {navigation.map((item, index) => (
                    <SheetClose asChild key={item.label}>
                      <a
                        href={item.href}
                        className="focus-ring group flex min-h-[4rem] items-center justify-between rounded-[1rem] border border-brand/10 bg-white/72 px-3.5 shadow-[0_10px_28px_rgba(17,70,98,0.045)] transition-[background-color,border-color,transform] duration-300 active:scale-[0.985] active:border-brand/20 active:bg-white"
                      >
                        <span className="flex min-w-0 items-center gap-3.5">
                          <small className="grid size-8 shrink-0 place-items-center rounded-full bg-brand/[0.075] text-[0.6rem] font-semibold tracking-[0.08em] text-brand-deep/68">
                            0{index + 1}
                          </small>
                          <span className="truncate text-[clamp(1.2rem,5.7vw,1.55rem)] font-medium leading-none tracking-[-0.035em] text-foreground/92">{item.label}</span>
                        </span>
                        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-brand/12 bg-accent/50 text-brand transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                          <MoveUpRight className="size-4" strokeWidth={1.7} aria-hidden="true" />
                        </span>
                      </a>
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-auto pt-6">
                  <p className="mb-3 text-center text-[0.68rem] font-medium tracking-[0.02em] text-muted">Seu próximo sorriso pode começar aqui.</p>
                  <Button asChild className="group h-14 w-full rounded-full bg-gradient-to-r from-brand-deep to-brand px-5 text-[0.92rem] font-semibold text-white shadow-[0_14px_32px_rgba(0,117,180,0.2)]">
                    <TrackedLink
                      href={whatsappUrl}
                      eventName="header_schedule_click"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="flex-1 text-center">Agendar avaliação</span>
                      <span className="grid size-9 place-items-center rounded-full bg-white/14">
                        <MoveUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      </span>
                    </TrackedLink>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
