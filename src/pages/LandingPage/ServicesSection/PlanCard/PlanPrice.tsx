import { cn } from "@/lib/utils";
import type { TPlanPrice } from "@/types";

type TPlanPriceProps = {
  price: TPlanPrice;
  altPrice?: TPlanPrice;
  onLight?: boolean;
};

export const PlanPrice = ({ price, altPrice, onLight }: TPlanPriceProps) => (
  <div className="flex flex-col gap-1">
    <div className="flex flex-wrap items-baseline gap-x-2">
      <span
        className={cn(
          "font-barlow text-4xl font-extrabold tracking-tight md:text-5xl",
          onLight ? "text-black" : "text-white",
        )}
      >
        {price.rsd} RSD
      </span>
      <span
        className={cn("text-base", onLight ? "text-black/50" : "text-white/50")}
      >
        / {price.eur}€ · {price.period}
      </span>
    </div>
    {altPrice && (
      <span
        className={cn("text-sm", onLight ? "text-black/50" : "text-white/50")}
      >
        ili {altPrice.rsd} RSD / {altPrice.eur}€ za {altPrice.period}
      </span>
    )}
  </div>
);
