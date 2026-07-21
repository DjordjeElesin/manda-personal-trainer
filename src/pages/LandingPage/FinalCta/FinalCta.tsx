import { Reveal } from "@/components/Reveal";
import { WhatsappButton } from "../WhatsappButton";
import { Socials } from "@/components/Socials";

export const FinalCta = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-24 md:py-32">
      <span
        aria-hidden
        className="font-barlow pointer-events-none absolute inset-0 flex items-center justify-center text-[28vw] leading-none font-black text-white/3 italic select-none"
      >
        MANDA
      </span>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-6">
        <Reveal className="flex flex-col items-center gap-6">
          <span className="text-xs font-semibold tracking-[0.3em] text-white/50 uppercase">
            Spreman/na si?
          </span>
          <h2 className="font-barlow text-5xl leading-[0.9] font-extrabold tracking-tight text-white uppercase md:text-7xl">
            Tvoja transformacija
            <br />
            počinje danas
          </h2>
          <p className="max-w-xl text-white/60">
            Zakaži besplatne konsultacije i zajedno pravimo plan treninga i
            ishrane koji radi za tebe. Bez obaveze, samo prvi korak.
          </p>

          <WhatsappButton id="final-whatsapp-cta" className="mt-2" />

          <Socials includeLabels className="mt-4" />
        </Reveal>
      </div>
    </section>
  );
};
