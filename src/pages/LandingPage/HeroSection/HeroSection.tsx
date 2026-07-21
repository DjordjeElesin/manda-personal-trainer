import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import portrait from "@/assets/manda-portrait.jpg";
import { WhatsappButton } from "../WhatsappButton";
import { StarRating } from "../StarRating";

const revealDelay = (index: number) => ({ animationDelay: `${index * 120}ms` });

export const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-svh w-full items-center overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          src={portrait}
          alt="Aleksandar Mandić - personalni trener"
          className="absolute top-0 right-0 h-full w-full object-cover object-[72%_20%] opacity-60 md:w-[58%] md:opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/75 to-transparent md:via-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-r from-black to-transparent" />
      </div>

      {/* Soft drifting glow. */}
      <div className="animate-float pointer-events-none absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-28 md:px-6">
        <div className="max-w-2xl">
          <span
            className="animate-fade-up flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-white/60 uppercase"
            style={revealDelay(0)}
          >
            <span className="h-px w-8 bg-white/40" />
            Personalni trener · Online coaching
          </span>

          <h1
            className="animate-fade-up font-barlow mt-6 text-5xl leading-[0.9] font-extrabold tracking-tight text-white uppercase sm:text-6xl md:text-7xl"
            style={revealDelay(1)}
          >
            Izgradi telo
            <br />
            koje{" "}
            <span className="text-white/40 [-webkit-text-stroke:1px_rgba(255,255,255,0.6)]">
              zaslužuješ
            </span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-base text-white/70 md:text-lg"
            style={revealDelay(2)}
          >
            Personalizovani treninzi, plan ishrane i podrška na svakom koraku.
            Bez nagađanja i praznih obećanja, samo jasan plan i rezultati koji
            se vide.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
            style={revealDelay(3)}
          >
            <WhatsappButton id="hero-whatsapp-cta" />
            <Button
              id="hero-calculator-cta"
              asChild
              variant="outline"
              size="lg"
              className="font-semibold"
            >
              <Link to="/kalkulator">Izračunaj kalorije</Link>
            </Button>
          </div>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
            style={revealDelay(4)}
          >
            <StarRating rating={5} />
            <span className="text-sm text-white/60">
              Pridruži se onima koji su već ostvarili svoje rezultate
            </span>
          </div>
        </div>
      </div>

      {/* Scroll cue. */}
      <a
        href="#rezultati"
        aria-label="Skroluj do rezultata"
        className="animate-fade-up absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/50 transition-colors hover:text-white md:flex"
        style={revealDelay(5)}
      >
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">
          Skroluj
        </span>
        <ChevronDown className="size-5 animate-bounce" />
      </a>
    </section>
  );
};
