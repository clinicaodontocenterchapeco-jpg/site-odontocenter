"use client";

import { useLayoutEffect, useRef, useState } from "react";

const finalCount = 7500;
const duration = 3900;
const entranceDelay = 550;
const formatter = new Intl.NumberFormat("pt-BR");

function easeOutQuart(progress: number) {
  return 1 - Math.pow(1 - progress, 4);
}

export function AnimatedSmileCounter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const startDelayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStartedRef.current) return;

        hasStartedRef.current = true;
        observer.disconnect();

        startDelayRef.current = setTimeout(() => {
          setIsActive(true);

          let startedAt: number | null = null;

          const updateCount = (timestamp: number) => {
            if (startedAt === null) startedAt = timestamp;

            const progress = Math.min((timestamp - startedAt) / duration, 1);
            const nextCount = Math.min(
              finalCount,
              Math.round(finalCount * easeOutQuart(progress)),
            );

            setCount(nextCount);

            if (progress < 1) {
              animationFrameRef.current = requestAnimationFrame(updateCount);
            } else {
              setCount(finalCount);
            }
          };

          animationFrameRef.current = requestAnimationFrame(updateCount);
        }, entranceDelay);
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (startDelayRef.current !== null) clearTimeout(startDelayRef.current);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="mt-[1.55rem] max-w-[28.5rem] text-center">
      <span className="sr-only">Mais de 7.500 sorrisos transformados</span>

      <div aria-hidden="true" className="flex items-center gap-5">
        <span
          className={`hero-counter-line hero-counter-line-left h-px flex-1 bg-border ${
            isActive ? "is-active" : ""
          }`}
        />
        <p className="flex whitespace-nowrap text-[clamp(2.75rem,3.45vw,3.35rem)] font-medium leading-none tracking-[-0.045em] text-brand">
          <span>+&nbsp;</span>
          <span className="hero-counter-animated inline-block w-[4ch] text-right tabular-nums">
            {formatter.format(count)}
          </span>
          <span className="hero-counter-reduced w-[4ch] text-right tabular-nums">
            7.500
          </span>
        </p>
        <span
          className={`hero-counter-line hero-counter-line-right h-px flex-1 bg-border ${
            isActive ? "is-active" : ""
          }`}
        />
      </div>

      <p
        aria-hidden="true"
        className={`hero-counter-label mt-3 text-[0.63rem] font-semibold uppercase tracking-[0.35em] text-foreground/62 ${
          isActive ? "is-active" : ""
        }`}
      >
        Sorrisos transformados
      </p>
    </div>
  );
}
