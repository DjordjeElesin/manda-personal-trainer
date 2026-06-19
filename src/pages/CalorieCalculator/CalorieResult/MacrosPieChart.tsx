import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import type { TMacro } from "@/types";
import { LabelList, Pie, PieChart } from "recharts";

const colors = { protein: "#3b82f6", carbs: "#f59e0b", fat: "#8b5cf6" };
const chartConfig = {
  grams: {
    label: "Grama",
  },
  protein: {
    label: "Proteini",
  },
  carbs: {
    label: "Ugljeni hidrati",
  },
  fat: {
    label: "Masti",
  },
} satisfies ChartConfig;

export const MacrosPieChart = ({ macros }: { macros: TMacro[] }) => {
  const data = macros?.map(({ grams, type }) => ({
    macro: type,
    grams: Math.round(grams),
    fill: colors[type],
  }));

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square  w-full min-h-70 max-h-80 -mt-10"
    >
      <PieChart>
        <ChartTooltip
          content={
            <ChartTooltipContent
              nameKey="macro"
              hideLabel
              className="min-w-35"
            />
          }
        />
        <Pie data={data} dataKey="grams">
          <LabelList
            dataKey="macro"
            className="fill-white font-barlow font-bold text-base"
            stroke="none"
            fontSize={12}
            formatter={(value) =>
              chartConfig[value as keyof typeof chartConfig]?.label
            }
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};
