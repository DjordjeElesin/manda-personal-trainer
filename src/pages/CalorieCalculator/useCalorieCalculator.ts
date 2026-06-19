import { useState } from "react";
import {
  calorieCalculatorSchema,
  type TCalorieCalculatorForm,
} from "./CalorieCalculatorForm/calorieCalculatorSchema";
import { ACTIVITY_LEVELS } from "@/constants";
import z from "zod";
import { getCalorieTargets } from "./calorieCalculatorUtils";
import { activityLevels } from "./CalorieCalculatorForm/ActivityLevels/activityLevelsList";
import type { TCalorieTarget } from "@/types";

const initialCalorieForm: TCalorieCalculatorForm = {
  sex: "",
  age: "",
  height: "",
  weight: "",
  activityLevel: ACTIVITY_LEVELS.moderately_active,
};

export const useCalorieCalculator = () => {
  const [formData, setFormData] = useState(initialCalorieForm);
  const [errors, setErrors] = useState(initialCalorieForm);
  const [result, setResult] = useState<{
    bmr: number;
    targets: TCalorieTarget[];
  } | null>(null);

  const onChangeFormData = (
    value: string,
    field: keyof TCalorieCalculatorForm,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const onSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    const result = calorieCalculatorSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = z.flattenError(result.error).fieldErrors;
      Object.entries(fieldErrors).forEach(([key, value]) =>
        setErrors((prev) => ({ ...prev, [key]: value.join(". ") })),
      );
      return;
    }
    const activityMultiplier = activityLevels.find(
      ({ id }) => id === formData.activityLevel,
    )?.multiplier;
    const data = getCalorieTargets({
      ...result.data,
      activityMultiplier: activityMultiplier ?? 0,
    });
    setResult(data);

    setTimeout(() => {
      const element = document.getElementById("calorie-results");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const onResetForm = () => {
    setFormData(initialCalorieForm);
    setResult(null);
  };

  return { formData, errors, onChangeFormData, onSubmit, result, onResetForm };
};
