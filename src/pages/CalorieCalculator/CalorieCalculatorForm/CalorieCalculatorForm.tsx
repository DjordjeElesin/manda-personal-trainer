import { InputField } from "@/components/InputField";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Label } from "@/components/ui/label";
import { ActivityLevels } from "./ActivityLevels/ActivityLevels";
import { FieldError } from "@/components/ui/field";
import type { TCalorieCalculatorForm } from "./calorieCalculatorSchema";
import type { TActivityLevelKeys } from "@/types";
import { RotateCcw } from "lucide-react";

type TCalorieCalculatorFormProps = {
  formData: TCalorieCalculatorForm;
  errors: {
    sex: string;
    age: string;
    height: string;
    weight: string;
  };
  isCalculated: boolean;
  onChangeFormData: (
    value: string,
    field: keyof TCalorieCalculatorForm,
  ) => void;
  onSubmit: (e: React.SubmitEvent) => void;
  onResetForm: () => void;
};

export const CalorieCalculatorForm = ({
  formData,
  errors,
  isCalculated,
  onChangeFormData,
  onSubmit,
  onResetForm,
}: TCalorieCalculatorFormProps) => {
  const { sex, age, height, weight, activityLevel } = formData;

  return (
    <form className="flex flex-col gap-2 py-4" onSubmit={onSubmit}>
      <Label>Pol</Label>
      <ButtonGroup
        className={`w-full rounded-4xl ${errors.sex ? "ring-[3px] ring-destructive/40 border border-destructive/50" : ""}`}
      >
        <Button
          type="button"
          variant={sex === "male" ? "default" : "outline"}
          className="w-1/2"
          onClick={() => onChangeFormData("male", "sex")}
        >
          Muški
        </Button>
        <Button
          type="button"
          variant={sex === "female" ? "default" : "outline"}
          className="w-1/2"
          onClick={() => onChangeFormData("female", "sex")}
        >
          Ženski
        </Button>
      </ButtonGroup>
      {errors.sex && <FieldError>{errors.sex}</FieldError>}
      <InputField
        label="Godine"
        value={age}
        onChange={(value) => onChangeFormData(value, "age")}
        placeholder="30"
        type="number"
        errorMessage={errors.age}
      />
      <InputField
        label="Visina (cm)"
        value={height}
        onChange={(value) => onChangeFormData(value, "height")}
        placeholder="175"
        type="number"
        errorMessage={errors.height}
      />
      <InputField
        label="Težina (kg)"
        value={weight}
        onChange={(value) => onChangeFormData(value, "weight")}
        placeholder="80"
        type="number"
        errorMessage={errors.weight}
      />
      <ActivityLevels
        selectedLevel={activityLevel as TActivityLevelKeys}
        onChange={(value) => onChangeFormData(value, "activityLevel")}
      />
      <div className="flex items-center gap-2 w-full mt-10">
        <Button
          size="lg"
          className="flex-1 hover:cursor-pointer"
          type="submit"
          disabled={isCalculated}
        >
          Izračunaj
        </Button>
        {isCalculated && (
          <Button
            type="button"
            className="hover:cursor-pointer"
            onClick={onResetForm}
          >
            <RotateCcw />
          </Button>
        )}
      </div>
    </form>
  );
};
