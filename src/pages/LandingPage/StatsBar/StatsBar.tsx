import { useCountUp, useInView } from "@/hooks";
import { STATS } from "../landingContent";

type TStatItemProps = {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
};

const StatItem = ({ value, suffix, label, active }: TStatItemProps) => {
  const current = useCountUp(value, active);

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <span className="font-barlow text-4xl font-extrabold tracking-tight text-white md:text-5xl">
        {current.toLocaleString("sr-RS")}
        {suffix}
      </span>
      <span className="text-xs tracking-wide text-white/50 uppercase md:text-sm">
        {label}
      </span>
    </div>
  );
};

// Numbers count up the first time the bar scrolls into view.
export const StatsBar = () => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section className="border-y border-white/10 bg-white/2">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4 md:px-6"
      >
        {STATS.map(({ value, suffix, label }) => (
          <StatItem
            key={label}
            value={value}
            suffix={suffix}
            label={label}
            active={isInView}
          />
        ))}
      </div>
    </section>
  );
};
