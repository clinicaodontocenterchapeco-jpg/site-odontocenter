import { ToothMark } from "@/components/icons/tooth-mark";
import { Gem, UserRound } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const benefits: Array<{
  title: string;
  description: string;
  Icon: IconComponent;
}> = [
  {
    title: "Atendimento personalizado",
    description: "Escuta, acolhimento e um plano de tratamento feito para você.",
    Icon: UserRound,
  },
  {
    title: "Equipe especializada",
    description: "Profissionais experientes em constante evolução.",
    Icon: ToothMark,
  },
  {
    title: "Tecnologia de ponta",
    description: "Mais precisão, conforto e melhores resultados.",
    Icon: Gem,
  },
];

export function ApproachSection() {
  return (
    <section
      id="a-clinica"
      aria-labelledby="approach-title"
      className="bg-surface py-10 lg:py-8"
    >
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-8">
          <div className="lg:pr-5">
            <p className="editorial-label">Nossa abordagem</p>
            <h2
              id="approach-title"
              className="mt-7 text-[clamp(2.1rem,2.55vw,2.65rem)] font-medium leading-[1.01] tracking-[-0.055em]"
            >
              <span className="block">Uma nova experiência</span>
              <span className="block">em cuidar do seu sorriso.</span>
            </h2>
            <p className="mt-7 max-w-[28rem] text-[1rem] leading-[1.55] text-muted">
              Cada sorriso tem uma história. Por isso, unimos cuidado, tecnologia e planejamento individualizado.
            </p>
          </div>

          <div className="grid sm:grid-cols-3">
            {benefits.map(({ title, description, Icon }, index) => (
              <article
                key={title}
                className={`py-1 sm:px-5 ${index > 0 ? "border-t border-border/55 pt-8 sm:border-l sm:border-t-0 sm:pt-1" : ""}`}
              >
                <span className="grid size-16 place-items-center rounded-full bg-background text-brand">
                  <Icon className="size-6.5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 max-w-[10rem] text-[1.05rem] font-medium leading-[1.14] tracking-[-0.025em]">
                  {title}
                </h3>
                <p className="mt-3 max-w-[12.5rem] text-[0.84rem] leading-[1.45] text-muted">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center gap-8 text-brand/60">
          <span className="h-px flex-1 bg-brand/24" aria-hidden="true" />
          <p className="text-center text-[0.61rem] font-medium uppercase tracking-[0.3em]">
            Odontologia para todas as fases da sua história
          </p>
          <span className="h-px flex-1 bg-brand/24" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
