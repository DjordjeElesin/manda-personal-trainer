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
  id: string;
  adjustment: number;
  label: string;
  description: string;
  calories: number;
  caloriesDeltaFromMaintenance: number;
  weeklyChangeKg: number;
  macros: TMacro[];
};

export type TNavLink = {
  label: string;
  link: string;
};

export type TStat = {
  value: number;
  suffix: string;
  label: string;
};

export type TPlanPrice = {
  // Amounts only (units added on render): rsd "10.000", eur "90".
  rsd: string;
  eur: string;
  // e.g. "mesečno" or "3 meseca".
  period: string;
};

export type TPlan = {
  name: string;
  // Placeholder amounts - edit in landingContent PLANS.
  price: TPlanPrice;
  // Optional alternative pricing (e.g. Premium's 3-month package).
  altPrice?: TPlanPrice;
  tagline: string;
  features: string[];
  // The premium tier - rendered full-width and visually emphasized.
  highlighted: boolean;
  badge?: string;
};
