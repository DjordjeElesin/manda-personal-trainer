import { ChevronLeft, ChevronRight } from "lucide-react";

import { useCarousel } from "@/hooks";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "../SectionHeading";
import { TRANSFORMATIONS } from "../landingContent";
import { WhatsappButton } from "@/components/WhatsappButton";

type TCarouselButtonProps = {
  id: string;
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
};

const CarouselButton = ({
  id,
  direction,
  onClick,
  disabled,
}: TCarouselButtonProps) => {
  const isPrev = direction === "prev";

  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={
        isPrev ? "Prethodne transformacije" : "Sledeće transformacije"
      }
      className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:border-white/40 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-25"
    >
      {isPrev ? (
        <ChevronLeft className="size-5" />
      ) : (
        <ChevronRight className="size-5" />
      )}
    </button>
  );
};

export const TransformationsSection = () => {
  const {
    trackRef,
    canPrev,
    canNext,
    progress,
    visibleFraction,
    scrollPrev,
    scrollNext,
  } = useCarousel<HTMLDivElement>();

  return (
    <section id="rezultati" className="bg-black py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Rezultati"
          title="Transformacije klijenata"
          subtitle="Pravi ljudi, pravi rad, pravi rezultati. Prevuci ili koristi strelice da vidiš neke od transformacija ostvarenih uz zajednički trud i posvećenost."
        />

        {/* Native scroll-snap track - free touch/trackpad swipe, arrows drive it too. */}
        <div
          ref={trackRef}
          role="region"
          aria-label="Transformacije klijenata"
          tabIndex={0}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1"
        >
          {TRANSFORMATIONS.map(({ image, alt }) => (
            <div
              key={image}
              className="group relative w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-black transition-colors duration-300 hover:border-white/30 sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
            >
              <div className="aspect-4/5 overflow-hidden">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Prev · progress · next - one control cluster for every breakpoint. */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <CarouselButton
            id="transformations-prev"
            direction="prev"
            onClick={scrollPrev}
            disabled={!canPrev}
          />
          <div className="h-0.75 w-40 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-white"
              style={{
                width: `${Math.max(visibleFraction * 100, 8)}%`,
                marginLeft: `${progress * (1 - visibleFraction) * 100}%`,
                transition: "margin-left 120ms linear",
              }}
            />
          </div>
          <CarouselButton
            id="transformations-next"
            direction="next"
            onClick={scrollNext}
            disabled={!canNext}
          />
        </div>

        <Reveal className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="font-barlow text-2xl font-bold tracking-tight text-white uppercase md:text-3xl">
            Sledeća transformacija može biti tvoja
          </p>
          <WhatsappButton id="transformations-whatsapp-cta" />
        </Reveal>
      </div>
    </section>
  );
};
