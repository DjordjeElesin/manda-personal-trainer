import { Link } from "react-router-dom";
import { ArrowRight, Calculator } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export const CalculatorTeaser = () => {
  return (
    <section className="bg-black pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-3">
              <span className="flex size-12 items-center justify-center rounded-xl bg-white text-black">
                <Calculator className="size-6" />
              </span>
              <h3 className="font-barlow text-3xl font-extrabold tracking-tight text-white uppercase md:text-4xl">
                Ne znaš odakle da počneš?
              </h3>
              <p className="max-w-xl text-sm text-white/60 md:text-base">
                Izračunaj svoje kalorije i raspored makronutrijenata za par
                klikova i saznaj tačno koliko ti treba za tvoj cilj - potpuno
                besplatno.
              </p>
            </div>
            <Button
              id="teaser-calculator-cta"
              asChild
              size="lg"
              className="gap-2 font-semibold"
            >
              <Link to="/kalkulator">
                Otvori kalkulator
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <span className="font-barlow pointer-events-none absolute -right-6 -bottom-10 text-[10rem] leading-none font-black text-white/[0.03] select-none">
            KCAL
          </span>
        </Reveal>
      </div>
    </section>
  );
};
