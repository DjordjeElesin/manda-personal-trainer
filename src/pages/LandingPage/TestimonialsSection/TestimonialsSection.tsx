import { Quote } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "../SectionHeading";
import { TESTIMONIALS } from "../landingContent";
import { StarRating } from "@/components/StarRating";

export const TestimonialsSection = () => {
  return (
    <section
      id="utisci"
      className="texture-claws border-t border-white/10 bg-black py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Utisci klijenata"
          title="Šta kažu klijenti"
          subtitle="Iskrene poruke ljudi koji su prošli kroz proces - i njihovih najbližih."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map(({ name, role, rating, quote }, index) => (
            <Reveal
              key={name}
              delay={index * 120}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/3 p-6 transition-colors hover:border-white/25"
            >
              <Quote className="size-8 text-white/20" aria-hidden />
              <p className="flex-1 text-sm leading-relaxed text-white/80">
                „{quote}“
              </p>
              <StarRating rating={rating} />
              <div className="flex flex-col border-t border-white/10 pt-4">
                <span className="font-barlow text-lg font-semibold tracking-tight text-white uppercase">
                  {name}
                </span>
                <span className="text-xs text-white/40">{role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
