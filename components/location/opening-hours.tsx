import { clinicLocation } from "@/data/location";
import { Clock } from "lucide-react";

export function OpeningHours() {
  return (
    <div className="border-t border-brand/15 pt-5">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-brand-deep/82">
        Horário de atendimento
      </p>

      <div className="mt-3 grid grid-cols-[3.25rem_minmax(0,1fr)] gap-4">
        <span className="grid size-[3.25rem] place-items-center rounded-full bg-[#e2eef4] text-brand">
          <Clock className="size-[1.35rem]" strokeWidth={1.7} aria-hidden="true" />
        </span>

        <dl className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-7 gap-y-1 text-[0.82rem] leading-[1.45] text-foreground/68">
          {clinicLocation.hours.map(({ days, time }) => (
            <div key={days} className="contents">
              <dt>{days}</dt>
              <dd className="whitespace-nowrap text-foreground/62">{time}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
