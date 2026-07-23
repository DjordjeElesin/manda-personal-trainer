import { HeroSection } from "./HeroSection";
import { StatsBar } from "./StatsBar";
import { ValuesMarquee } from "./ValuesMarquee";
import { TransformationsSection } from "./TransformationsSection";
import { AboutSection } from "./AboutSection";
import { ServicesSection } from "./ServicesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { CalculatorTeaser } from "./CalculatorTeaser";
import { FinalCta } from "./FinalCta";
import { FreeGuidesSection } from "./FreeGuidesSection";

export const LandingPage = () => {
  return (
    <div className="w-full bg-black text-white">
      <main>
        <HeroSection />
        <StatsBar />
        <TransformationsSection />
        <ValuesMarquee />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <CalculatorTeaser />
        <FreeGuidesSection />
        <FinalCta />
      </main>
    </div>
  );
};
