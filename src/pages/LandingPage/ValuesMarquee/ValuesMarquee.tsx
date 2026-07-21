const VALUES = [
  "Snaga",
  "Disciplina",
  "Rezultati",
  "Doslednost",
  "Fokus",
  "Napredak",
];

// Duplicated once so the -50% translate loops seamlessly. Pauses on hover.
const MARQUEE_ITEMS = [...VALUES, ...VALUES];

export const ValuesMarquee = () => {
  return (
    <div className="marquee-pause overflow-hidden border-y border-white/10 bg-black py-5 select-none">
      <div className="animate-marquee flex w-max items-center gap-6 whitespace-nowrap md:gap-10">
        {MARQUEE_ITEMS.map((value, index) => (
          <div key={`${value}-${index}`} className="flex items-center gap-6 md:gap-10">
            <span
              className={
                index % 2 === 0
                  ? "font-barlow text-3xl font-extrabold tracking-tight text-white uppercase md:text-5xl"
                  : "font-barlow text-3xl font-extrabold tracking-tight text-transparent uppercase md:text-5xl [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]"
              }
            >
              {value}
            </span>
            <span className="text-xl text-white/30 md:text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
