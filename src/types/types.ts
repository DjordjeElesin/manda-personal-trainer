import { ACTIVITY_LEVELS } from "@/constants";

export type TActivityLevelKeys = keyof typeof ACTIVITY_LEVELS;

export type TActivityLevel = {
  id: TActivityLevelKeys;
  label: string;
  summary: string;
  description: string;
  multiplier: number;
};

export type TMacro = {
  type: "protein" | "carbs" | "fat";
  grams: number;
  percentageOfCalories: number;
};

export type TCalorieTarget = {
  id: string
  adjustment: number;
  label: string;
  description: string;
  calories: number;
  caloriesDeltaFromMaintenance: number;
  weeklyChangeKg: number;
  macros: TMacro[];
};
