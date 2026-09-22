"use client";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(event: string, properties: Record<string, unknown> = {}) {
  const detail = { ...properties, event };

  window.dataLayer?.push(detail);
  window.dispatchEvent(new CustomEvent("odonto:analytics", { detail }));
}
