import type { Treatment } from "@/data/treatments";
import { createWhatsAppUrl } from "@/lib/site";
import { TrackedLink } from "@/components/ui/tracked-link";
import { ArrowRight } from "lucide-react";

type TreatmentItemProps = {
  treatment: Treatment;
  active: boolean;
  onActivate: () => void;
};

export function TreatmentItem({ treatment, active, onActivate }: TreatmentItemProps) {
  return (
    <li className="treatments-motion-item">
      <TrackedLink
        href={createWhatsAppUrl(treatment.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Falar no WhatsApp sobre ${treatment.title}`}
        eventName="treatment_whatsapp_click"
        eventProperties={{ treatmentId: treatment.id, treatmentName: treatment.title }}
        onFocus={onActivate}
        onMouseEnter={onActivate}
        className={`focus-ring group grid min-h-[4.55rem] w-full cursor-pointer grid-cols-[4.25rem_minmax(0,1fr)_1.5rem] items-center gap-5 rounded-[1.25rem] border-b px-6 text-left transition-[background-color,border-color] duration-300 ease-out ${
          active
            ? "border-transparent bg-[#e5f0f5]"
            : "border-brand/12 bg-transparent hover:border-transparent"
        }`}
      >
        <span
          className={`border-r border-brand/16 pr-5 text-[2.15rem] font-light leading-none tracking-[-0.055em] transition-colors duration-300 ${
            active ? "text-brand" : "text-brand/58"
          }`}
          aria-hidden="true"
        >
          {treatment.index}
        </span>

        <span className="min-w-0 py-3.5">
          <span
            className={`block text-[1.06rem] font-semibold leading-[1.2] tracking-[-0.025em] transition-[color,transform] duration-300 ${
              active ? "translate-x-1 text-foreground" : "text-foreground/92"
            }`}
          >
            {treatment.title}
          </span>
          <span
            className={`mt-1 block text-[0.79rem] leading-[1.35] transition-colors duration-300 ${
              active ? "text-muted" : "text-muted/80"
            }`}
          >
            {treatment.description}
          </span>
        </span>

        <ArrowRight
          className={`size-[1.15rem] justify-self-end text-brand transition-[opacity,transform] duration-300 ${
            active ? "translate-x-1 opacity-100" : "opacity-70"
          }`}
          strokeWidth={1.7}
          aria-hidden="true"
        />
      </TrackedLink>
    </li>
  );
}
