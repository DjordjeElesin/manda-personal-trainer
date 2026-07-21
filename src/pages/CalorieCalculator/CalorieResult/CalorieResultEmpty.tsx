import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { Calculator } from "lucide-react";

type TCalorieResultEmptyProps = {
  className?: string;
};

export const CalorieResultEmpty = ({ className }: TCalorieResultEmptyProps) => {
  return (
    <Card className={cn("mt-8 lg:mt-4", className)}>
      <CardContent className="flex min-h-100 flex-col items-center justify-center gap-3 text-center">
        <Calculator className="text-muted-foreground" size={40} />
        <Typography variant="h4" className="text-muted-foreground">
          Tvoji rezultati će se pojaviti ovde
        </Typography>
        <Typography variant="caption" className="text-muted-foreground max-w-xs">
          Popuni podatke sa leve strane i klikni „Izračunaj“ da vidiš svoje
          kalorije i raspored makrosa.
        </Typography>
      </CardContent>
    </Card>
  );
};
