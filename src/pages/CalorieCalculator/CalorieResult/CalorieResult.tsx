import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Typography } from "@/components/ui/typography";
import type { TCalorieTarget } from "@/types";
import { useState } from "react";
import { MacrosCards } from "./MacrosCards";
import { MacrosPieChart } from "./MacrosPieChart";
import { Separator } from "@/components/ui/separator";
import { BmrInfo } from "./BmrInfo";

type TCalorieResultProps = {
  result: {
    bmr: number;
    targets: TCalorieTarget[];
  };
};

const getWeeklyChange = (value: number) => {
  const rounded = Number(value.toFixed(2));
  if (rounded === 0) return "Nema nedeljne promene";
  if (rounded > 0) return `+${rounded}`;
  return rounded;
};

export const CalorieResult = ({ result }: TCalorieResultProps) => {
  const { bmr, targets } = result;
  const [sliderValue, setSliderValue] = useState([2]);

  const activeTarget = targets[sliderValue[0]];

  return (
    <Card className="mt-8">
      <CardContent className="flex flex-col gap-3">
        <div className="flex flex-col w-full gap-2">
          <div className="w-full flex items-center justify-between gap-3">
            {targets.map(({ adjustment }, i) => (
              <Label className="text-xs text-muted-foreground" key={i}>
                {adjustment === 0
                  ? "Održavanje"
                  : `
              ${adjustment > 0 ? "+" : ""}  
              ${adjustment * 100}%
                `}
              </Label>
            ))}
          </div>
          <Slider
            min={0}
            max={targets.length - 1}
            step={1}
            value={sliderValue}
            onValueChange={(value) => setSliderValue(value)}
            trackClassName="bg-[linear-gradient(90deg,_var(--color-red-500)_0%,_var(--color-yellow-500)_50%,_var(--color-green-500)_100%)]"
            rangeClassName="bg-transparent"
          />
        </div>
        {/* label calories and description */}
        <div className="flex flex-col mt-10">
          <Typography variant="h4" className="text-muted-foreground">
            {activeTarget.label}
          </Typography>
          <Typography variant="h2" className="text-5xl">
            {Math.round(activeTarget.calories).toLocaleString()}{" "}
            <span className="text-lg">kcal / dan</span>
          </Typography>
          <Typography variant="caption" className="text-muted-foreground mb-5">
            {getWeeklyChange(activeTarget.weeklyChangeKg)} kg/nedeljno
          </Typography>
          <Typography variant="body" className="text-muted-foreground">
            {activeTarget.description}
          </Typography>
        </div>
        <Separator />
        <MacrosCards macros={activeTarget.macros} />
        <MacrosPieChart macros={activeTarget.macros} />
        <Separator />
        <BmrInfo bmr={bmr} />
      </CardContent>
    </Card>
  );
};
