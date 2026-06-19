import { z } from "zod";

const requiredNumber = (opts: {
  required?: string;
  min?: [number, string];
  max?: [number, string];
}) =>
  z.preprocess(
    (val) => (val === "" || val == null ? undefined : Number(val)),
    z
      .number({
        error: (issue) =>
          issue.input === undefined
            ? (opts.required ?? "Ovo polje je obavezno")
            : "Unesite validan broj",
      })
      .min(...(opts.min ?? [0, ""]))
      .max(...(opts.max ?? [Infinity, ""])),
  );

export const calorieCalculatorSchema = z.object({
  sex: z.string().refine((val) => ["male", "female"].includes(val), {
    message: "Pol je obavezan",
  }),
  age: requiredNumber({
    required: "Godine su obavezne",
    min: [14, "Minimalni broj godina mora biti iznad 14 godina"],
    max: [80, "Maksimalni broj godina mora biti ispod 80 godina"],
  }),

  height: requiredNumber({
    required: "Visina je obavezna",
    min: [140, "Minimalna visina mora biti iznad 140cm"],
    max: [230, "Maksimalna visina mora biti ispod 230cm"],
  }),
  weight: requiredNumber({
    required: "Tezina je obavezna",
    min: [40, "Minimalna telesna tezina mora biti iznad 40kg"],
    max: [250, "Maksimalna telesna težina mora biti ispod 250kg"],
  }),
  activityLevel: z.string(),
});

export type TCalorieCalculatorData = z.infer<typeof calorieCalculatorSchema>;

export type TCalorieCalculatorForm = {
  sex: string;
  age: string;
  height: string;
  weight: string;
  activityLevel: string;
};
