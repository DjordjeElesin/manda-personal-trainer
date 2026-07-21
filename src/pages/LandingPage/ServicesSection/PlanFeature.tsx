import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type TPlanFeatureProps = {
  text: string;
  onLight?: boolean;
};

export const PlanFeature = ({ text, onLight }: TPlanFeatureProps) => (
  <li
    className={cn(
      "flex items-start gap-2.5 text-sm",
      onLight ? "text-black/70" : "text-white/70",
    )}
  >
    <Check
      className={cn(
        "mt-0.5 size-4 shrink-0",
        onLight ? "text-black" : "text-white",
      )}
    />
    <span>{text}</span>
  </li>
);
