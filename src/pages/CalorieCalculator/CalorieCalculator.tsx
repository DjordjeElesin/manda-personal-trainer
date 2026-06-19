import { Typography } from "@/components/ui/typography";
import { CalorieCalculatorForm } from "./CalorieCalculatorForm";
import { Separator } from "@/components/ui/separator";
import { useCalorieCalculator } from "./useCalorieCalculator";
import { CalorieResult } from "./CalorieResult/CalorieResult";

export const CalorieCalculator = () => {
  const { formData, errors, onChangeFormData, onSubmit, result, onResetForm } =
    useCalorieCalculator();

  return (
    <div className="flex flex-col gap-2 py-3 px-4">
      <Typography variant="h2" className="text-4xl">
        Kalkulator kalorija
      </Typography>
      <Typography className="text-muted-foreground text-sm">
        Izračunaj svoje kalorije za održavanje, ciljani deficit i raspored
        makrosa. Ne moraš više nagađati nego počni da ostvaruješ rezultate.
      </Typography>
      <Separator />
      <CalorieCalculatorForm
        formData={formData}
        errors={errors}
        onChangeFormData={onChangeFormData}
        onSubmit={onSubmit}
        isCalculated={!!result}
        onResetForm={onResetForm}
      />
      <CalorieResult result={result} />
    </div>
  );
};
