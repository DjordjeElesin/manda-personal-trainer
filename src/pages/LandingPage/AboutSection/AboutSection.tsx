import { Check, Flame, Target } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "../SectionHeading";

const HIGHLIGHTS = [
  {
    icon: Target,
    title: "Individualni pristup",
    description:
      "Plan skrojen prema tvom telu, cilju i tempu života - ništa nije nasumično.",
  },
  {
    icon: Flame,
    title: "Fokus na navike",
    description:
      "Gradimo održive navike koje ostaju i dugo pošto program završi.",
  },
  {
    icon: Check,
    title: "Podrška na svakom koraku",
    description: "Uvek si na jednu poruku od odgovora, korekcije i motivacije.",
  },
];

export const AboutSection = () => {
  return (
    <section id="o-meni" className="bg-black py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow="O meni" title="Zdravo, ja sam Manda" />
          <Reveal delay={100} className="flex flex-col gap-4 text-white/70">
            <p>Svako može da uđe u formu kada ima pravi sistem i podršku.</p>
            <p>
              Zato moj pristup nije još jedan plan ishrane i treninga koji ćeš
              pratiti nekoliko nedelja. Cilj je da izgradiš navike i razumevanje
              svog tela kako bi znao da ostaneš u formi i kada naš zajednički
              rad završi.
            </p>
            <p>
              Kroz individualan pristup, trening, ishranu i kontinuiranu podršku
              pomažem ti da napraviš rezultate koji traju – ne samo nekoliko
              meseci, već doživotno.
            </p>
            <p className="font-barlow text-xl font-semibold text-white italic">
              Aleksandar „Manda“ Mandić
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4">
          {HIGHLIGHTS.map(({ icon: Icon, title, description }, index) => (
            <Reveal
              key={title}
              direction="left"
              delay={index * 120}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/2 p-5 transition-colors hover:border-white/25"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon className="size-5" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-barlow text-xl font-semibold tracking-tight text-white uppercase">
                  {title}
                </h3>
                <p className="text-sm text-white/60">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
