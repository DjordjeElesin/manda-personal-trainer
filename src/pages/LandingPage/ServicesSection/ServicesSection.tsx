import { SectionHeading } from "../SectionHeading";
import { PLANS } from "../landingContent";
import { PlanCard, PremiumPlanCard } from "./PlanCard";

export const ServicesSection = () => {
  const standardPlans = PLANS.filter((plan) => !plan.highlighted);
  const premiumPlan = PLANS.find((plan) => plan.highlighted);

  return (
    <section id="usluge" className="bg-black py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Paketi"
          title="Izaberi svoj paket"
          subtitle="Online coaching paketi - od samostalnog starta do potpune posvećenosti. Izaberi ono što najbolje odgovara tvom cilju i budžetu."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {standardPlans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} delay={index * 100} />
          ))}
          {premiumPlan && <PremiumPlanCard plan={premiumPlan} delay={200} />}
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          Nisi siguran/na koji paket je pravi za tebe? Piši mi i zajedno biramo.
        </p>
      </div>
    </section>
  );
};
