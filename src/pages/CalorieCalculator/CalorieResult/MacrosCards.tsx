import { Typography } from "@/components/ui/typography";
import type { TMacro } from "@/types";
import { Beef, Droplet, Wheat } from "lucide-react";

const macrosConfig = {
  protein: {
    label: "Proteini",
    icon: <Beef size={18} />,
    color: "text-blue-500",
  },
  carbs: {
    label: "Ugljeni hidrati",
    icon: <Wheat size={18} />,
    color: "text-amber-500",
  },
  fat: {
    label: "Masti",
    icon: <Droplet size={18} />,
    color: "text-violet-500",
  },
};

export const MacrosCards = ({ macros }: { macros: TMacro[] }) => {
  return (
    <div className="flex gap-2 mt-5">
      {macros.map(({ type, grams }) => {
        const { label, icon, color } = macrosConfig[type];
        return (
          <div
            key={type}
            className="flex flex-col flex-1 items-center justify-between"
          >
            <div className="flex items-start gap-1">
              <div className={color}>{icon}</div>
              <Typography className="text-muted-foreground">{label}</Typography>
            </div>
            <Typography variant="h2" className="text-2xl pb-0">
              {Math.round(grams)}g
            </Typography>
          </div>
        );
      })}
    </div>
  );
};
