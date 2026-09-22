"use client";

import { trackEvent } from "@/lib/analytics";
import type { ComponentProps } from "react";

type TrackedLinkProps = ComponentProps<"a"> & {
  eventName: string;
  eventProperties?: Record<string, unknown>;
};

export function TrackedLink({ eventName, eventProperties, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackEvent(eventName, eventProperties);
        onClick?.(event);
      }}
    />
  );
}
