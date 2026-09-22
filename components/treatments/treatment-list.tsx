"use client";

import { TreatmentItem } from "@/components/treatments/treatment-item";
import type { Treatment } from "@/data/treatments";
import { useState } from "react";

export function TreatmentList({ treatments }: { treatments: Treatment[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ol
      aria-label="Tratamentos oferecidos"
      onMouseLeave={() => setActiveIndex(0)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setActiveIndex(0);
      }}
      className="treatments-motion-list space-y-0.5"
    >
      {treatments.map((treatment, index) => (
        <TreatmentItem
          key={treatment.id}
          treatment={treatment}
          active={activeIndex === index}
          onActivate={() => setActiveIndex(index)}
        />
      ))}
    </ol>
  );
}
