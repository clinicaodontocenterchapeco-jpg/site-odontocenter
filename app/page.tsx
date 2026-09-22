import { CareExperienceSection } from "@/components/home/care-experience-section";
import { Hero } from "@/components/home/hero";
import { LocationSection } from "@/components/home/location-section";
import { ResultsSection } from "@/components/home/results-section";
import { ReviewsSection } from "@/components/home/reviews-section";
import { TreatmentsSection } from "@/components/home/treatments-section";
import { Header } from "@/components/layout/header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <ResultsSection />
        <ReviewsSection />
        <TreatmentsSection />
        <CareExperienceSection />
        <LocationSection />
      </main>
      <SiteFooter />
    </>
  );
}
