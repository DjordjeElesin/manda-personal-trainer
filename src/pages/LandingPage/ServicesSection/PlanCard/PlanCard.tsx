import { WhatsappButton } from "../../WhatsappButton";
import { PlanFeature } from "../PlanFeature";
import type { TPlan } from "@/types";
import { Reveal } from "@/components/Reveal";
import { PlanPrice } from "./PlanPrice";
import { Star } from "lucide-react";

const planMessage = (name: string) => `Zdravo Mando! Zanima me ${name} paket.`;

const planCtaId = (name: string) =>
  `plan-${name.toLowerCase().replace(/\s+/g, "-")}-cta`;

type TPlanCardProps = {
  plan: TPlan;
  delay?: number;
};

export const PlanCard = ({ plan, delay }: TPlanCardProps) => (
  <Reveal
    delay={delay}
    className="relative flex flex-col rounded-2xl border border-white/10 bg-white/2 p-8 transition-colors hover:border-white/25"
  >
    {plan.badge && (
      <span className="absolute top-6 right-6 inline-flex items-center rounded-full border border-white/20 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-white/80 uppercase">
        {plan.badge}
      </span>
    )}
    <h3 className="font-barlow max-w-[75%] text-2xl font-bold tracking-tight text-white uppercase">
      {plan.name}
    </h3>
    <p className="mt-1 text-sm text-white/60">{plan.tagline}</p>
    <div className="mt-6">
      <PlanPrice price={plan.price} altPrice={plan.altPrice} />
    </div>
    <ul className="mt-6 flex flex-1 flex-col gap-3">
      {plan.features.map((feature) => (
        <PlanFeature key={feature} text={feature} />
      ))}
    </ul>
    <WhatsappButton
      id={planCtaId(plan.name)}
      label="Izaberi paket"
      message={planMessage(plan.name)}
      variant="outline"
      className="mt-8 w-full"
    />
  </Reveal>
);

export const PremiumPlanCard = ({ plan, delay }: TPlanCardProps) => (
  <Reveal
    delay={delay}
    className="relative overflow-hidden rounded-2xl bg-white p-8 text-black sm:col-span-2 md:p-10"
  >
    <div className="grid gap-8 md:grid-cols-2 md:items-center">
      <div className="flex flex-col gap-4">
        {plan.badge && (
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-black px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
            <Star className="size-3.5 fill-white" aria-hidden />
            {plan.badge}
          </span>
        )}
        <div>
          <h3 className="font-barlow text-3xl font-extrabold tracking-tight text-black uppercase md:text-4xl">
            {plan.name}
          </h3>
          <p className="mt-1 text-black/60">{plan.tagline}</p>
        </div>
        <PlanPrice price={plan.price} altPrice={plan.altPrice} onLight />
        <WhatsappButton
          id={planCtaId(plan.name)}
          label="Izaberi Premium"
          message={planMessage(plan.name)}
          className="mt-2 w-full bg-black text-white hover:bg-black/85 sm:w-fit"
        />
      </div>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:border-l md:border-black/10 md:pl-8">
        {plan.features.map((feature) => (
          <PlanFeature key={feature} text={feature} onLight />
        ))}
      </ul>
    </div>
  </Reveal>
);
