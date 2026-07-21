import type { TCalorieCalculatorData } from "./CalorieCalculatorForm/calorieCalculatorSchema";
import {
  ADJUSTMENT_CONFIG,
  CAL_PER_GRAM,
  FAT_G_PER_KG,
  KCAL_PER_KG_FAT,
  MIN_CARBS_SHARE_OF_CALORIES,
  PROTEIN_G_PER_KG,
} from "@/constants";
import type { TCalorieTarget, TMacro } from "@/types";

type TGetCalorieTargetsArgs = Omit<TCalorieCalculatorData, "activityLevel"> & {
  activityMultiplier: number;
};

type TGetMacrosArgs = {
  calories: number;
  weight: number;
  adjustment: number;
};

const getProteinPerKg = (adjustment: number) => {
  if (adjustment < 0) return PROTEIN_G_PER_KG.deficit;
  if (adjustment > 0) return PROTEIN_G_PER_KG.surplus;
  return PROTEIN_G_PER_KG.maintenance;
};

const getMacros = ({ calories, weight, adjustment }: TGetMacrosArgs) => {
  const proteinGrams = weight * getProteinPerKg(adjustment);
  const fatGrams = weight * FAT_G_PER_KG;

  const anchoredCalories =
    proteinGrams * CAL_PER_GRAM.protein + fatGrams * CAL_PER_GRAM.fat;
  const maxAnchoredCalories = calories * (1 - MIN_CARBS_SHARE_OF_CALORIES);

  // A very heavy client on a steep deficit can need more protein + fat than the
  // whole calorie budget allows. Scale both down together so carbs stay positive
  // and the three macros always add back up to the calorie target.
  const scale =
    anchoredCalories > maxAnchoredCalories
      ? maxAnchoredCalories / anchoredCalories
      : 1;

  const macroGrams: Pick<TMacro, "type" | "grams">[] = [
    { type: "protein", grams: proteinGrams * scale },
    {
      type: "carbs",
      grams: (calories - anchoredCalories * scale) / CAL_PER_GRAM.carbs,
    },
    { type: "fat", grams: fatGrams * scale },
  ];

  return macroGrams.map(({ type, grams }) => ({
    type,
    grams,
    percentageOfCalories: ((grams * CAL_PER_GRAM[type]) / calories) * 100,
  }));
};

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

  const targets: TCalorieTarget[] = ADJUSTMENT_CONFIG.map(
    ({ id, adjustment, label, description }) => {
      const calories = tdee * (1 + adjustment);
      const caloriesDeltaFromMaintenance = calories - tdee;

      return {
        id,
        adjustment,
        label,
        description,
        calories,
        caloriesDeltaFromMaintenance,
        weeklyChangeKg: (caloriesDeltaFromMaintenance * 7) / KCAL_PER_KG_FAT,
        macros: getMacros({ calories, weight, adjustment }),
      };
    },
  );

  return {
    bmr,
    targets,
  };
};
