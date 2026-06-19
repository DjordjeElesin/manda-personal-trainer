export const INSTAGRAM_LINK =
  "https://www.instagram.com/2manda3?igsh=b2U1bHFsYmxwcHg3";

export const EMAIL = "manda3831@gmail.com";

export const ACTIVITY_LEVELS = {
  sedentary: "sedentary",
  lightly_active: "lightly_active",
  moderately_active: "moderately_active",
  very_active: "very_active",
  extremely_active: "extremely_active",
} as const;

export const KCAL_PER_KG_FAT = 7700;

export const MACRO_CONFIG = {
  protein: { ratio: 0.3, calPerGram: 4 },
  carbs: { ratio: 0.4, calPerGram: 4 },
  fat: { ratio: 0.3, calPerGram: 9 },
};

export const ADJUSTMENT_CONFIG = [
  {
    label: "20% Deficit",
    adjustment: -0.2,
    description:
      "Zlatna sredina za većinu ljudi. Stabilan gubitak masti bez žrtvovanja mišića ili energije.",
  },
  {
    label: "10% Deficit",
    adjustment: -0.1,
    description:
      "Blag, jedva primetan deficit. Najbolji izbor ako si blizu cilja ili želiš da održavaš deficit na baš dug period, bez uticaja na performanse ili glad.",
  },
  {
    adjustment: 0,
    label: "Održavanje (TDEE)",
    description:
      "Ako jedeš ovoliko, tvoja težina ostaje potpuno ista. Sve ostalo se računa u odnosu na ovaj broj.",
  },
  {
    adjustment: 0.1,
    label: "10% Suficit",
    description:
      "Spor, čist bulk. Favorizuje rast mišića uz minimalno prikpljanje masti, najbolji za dug i kontrolisan period izgradnje. (npr. winter arc)",
  },
  {
    adjustment: 0.2,
    label: "20% Suficit",
    description:
      "Brži bulk za bržu izgradnju snage i mišićne mase, međutim očekuj da će veći deo dobijene težine biti mast, uz mišiće.",
  },
];
