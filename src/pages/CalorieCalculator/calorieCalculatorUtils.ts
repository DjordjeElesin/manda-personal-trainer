import type { TCalorieCalculatorData } from "./CalorieCalculatorForm/calorieCalculatorSchema";
import { ADJUSTMENT_CONFIG, KCAL_PER_KG_FAT, MACRO_CONFIG } from "@/constants";
import type { TCalorieTarget } from "@/types";

type TGetCalorieTargetsArgs = Omit<TCalorieCalculatorData, "activityLevel"> & {
  activityMultiplier: number;
};

const getMacrosByCalories = (calories: number) =>
  Object.entries(MACRO_CONFIG).map(([key, { ratio, calPerGram }]) => ({
    type: key,
    grams: (calories * ratio) / calPerGram,
    percentageOfCalories: ratio * 100,
  }));

export const getCalorieTargets = ({
  sex,
  age,
  height,
  weight,
  activityMultiplier,
}: TGetCalorieTargetsArgs) => {
  const offsetBySex = sex === "male" ? 5 : -161;
  const bmr = 10 * weight + 6.25 * height - 5 * age + offsetBySex;
  const tdee = bmr * activityMultiplier;

  const targets = ADJUSTMENT_CONFIG.map(
    ({ adjustment, label, description }) => {
      const calories = tdee * (1 + adjustment);
      const caloriesDeltaFromMaintenance = calories - tdee;
      const macros = getMacrosByCalories(calories);

      return {
        adjustment,
        label,
        description,
        calories,
        caloriesDeltaFromMaintenance,
        weeklyChangeKg: (caloriesDeltaFromMaintenance * 7) / KCAL_PER_KG_FAT,
        macros,
      };
    },
  ) as TCalorieTarget[];

  return {
    bmr,
    targets,
  };
};
