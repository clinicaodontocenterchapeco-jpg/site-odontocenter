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
import { ArrowRight, Menu, MoveUpRight } from "lucide-react";
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
      <div className="site-container flex h-[5.25rem] items-center justify-between gap-8 lg:h-[6.25rem]">
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
                className="size-11 rounded-full border-foreground/15 bg-transparent shadow-none lg:hidden"
              >
                <Menu className="size-[1.15rem]" strokeWidth={1.6} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-none border-0 bg-background p-0 shadow-none sm:max-w-none"
            >
              <SheetHeader className="site-container flex h-[5.25rem] flex-row items-center border-b border-border/70 py-0">
                <Brand />
                <SheetTitle className="sr-only">Menu principal</SheetTitle>
                <SheetDescription className="sr-only">
                  Navegue pelas seções do site da Odonto Center Chapecó.
                </SheetDescription>
              </SheetHeader>

              <div className="site-container flex flex-1 flex-col justify-between py-10 sm:py-14">
                <nav aria-label="Navegação mobile" className="flex flex-col">
                  {navigation.map((item, index) => (
                    <SheetClose asChild key={item.label}>
                      <a
                        href={item.href}
                        className="focus-ring group flex min-h-14 items-center justify-between border-b border-border py-3 text-[clamp(1.55rem,7vw,2.5rem)] font-medium tracking-[-0.04em]"
                      >
                        <span>
                          <small className="mr-4 align-middle text-[0.68rem] font-medium tracking-widest text-muted">
                            0{index + 1}
                          </small>
                          {item.label}
                        </span>
                        <MoveUpRight className="size-5 text-brand" />
                      </a>
                    </SheetClose>
                  ))}
                </nav>

                <Button asChild className="mt-10 h-14 rounded-full bg-brand text-white">
                  <TrackedLink
                    href={whatsappUrl}
                    eventName="header_schedule_click"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar avaliação
                    <MoveUpRight />
                  </TrackedLink>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
