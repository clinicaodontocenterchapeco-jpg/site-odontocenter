"use client";

import { useLayoutEffect, useRef } from "react";

type RevealOnceOptions = {
  classPrefix: string;
  rootMargin?: string;
  settleAfter?: number;
  threshold?: number;
};

export function useRevealOnce<T extends HTMLElement>({
  classPrefix,
  rootMargin = "0px 0px -8%",
  settleAfter = 1800,
  threshold = 0.25,
}: RevealOnceOptions) {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const readyClass = `${classPrefix}-ready`;
    const visibleClass = `${classPrefix}-visible`;
    const settledClass = `${classPrefix}-settled`;
    let settleTimer: number | undefined;
    let firstFrame = 0;
    let secondFrame = 0;

    node.classList.add(readyClass);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        node.classList.add(visibleClass);
        observer.disconnect();
        settleTimer = window.setTimeout(() => node.classList.add(settledClass), settleAfter);
      },
      { rootMargin, threshold },
    );

    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => observer.observe(node));
    });

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      if (settleTimer) window.clearTimeout(settleTimer);
      node.classList.remove(readyClass, visibleClass, settledClass);
    };
  }, [classPrefix, rootMargin, settleAfter, threshold]);

  return ref;
}
