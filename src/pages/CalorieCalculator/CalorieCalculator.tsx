import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Typography } from "@/components/ui/typography";
import { CalorieCalculatorForm } from "./CalorieCalculatorForm";
import { Separator } from "@/components/ui/separator";
import { useCalorieCalculator } from "./useCalorieCalculator";
import { CalorieResult } from "./CalorieResult/CalorieResult";
import { CalorieResultEmpty } from "./CalorieResult/CalorieResultEmpty";

export const CalorieCalculator = () => {
  const { formData, errors, onChangeFormData, onSubmit, result, onResetForm } =
    useCalorieCalculator();

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-3 md:py-16 lg:max-w-6xl">
      <div className="flex flex-col gap-2">
        <Link
          to="/"
          className="text-muted-foreground hover:text-foreground mb-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="size-4" />
          Nazad na početnu
        </Link>
        <Typography variant="h2" className="text-4xl md:text-5xl">
          Kalkulator kalorija
        </Typography>
        <Typography className="text-muted-foreground text-sm md:text-base lg:max-w-2xl">
          Izračunaj svoje kalorije za održavanje, ciljani deficit i raspored
          makrosa. Ne moraš više nagađati nego počni da ostvaruješ rezultate.
        </Typography>
        <Separator />
      </div>
      {/* Stacked on phones; form and results sit side by side once there is room */}
      <div className="grid items-start gap-2 lg:grid-cols-2 lg:gap-12">
        <CalorieCalculatorForm
          formData={formData}
          errors={errors}
          onChangeFormData={onChangeFormData}
          onSubmit={onSubmit}
          isCalculated={!!result}
          onResetForm={onResetForm}
        />
        {result ? (
          <CalorieResult result={result} />
        ) : (
          <CalorieResultEmpty className="hidden lg:block" />
        )}
      </div>
    </div>
  );
};
