export const INSTAGRAM_LINK =
  "https://www.instagram.com/2manda3?igsh=b2U1bHFsYmxwcHg3";
export const EMAIL = "ajemmanda@gmail.com";
export const YOUTUBE_CHANNEL = "https://www.youtube.com/@2manda3";

export const WHATSAPP_NUMBER = "38169648719";

const WHATSAPP_PREFILLED_MESSAGE =
  "Zdravo Mando! Zainteresovan/a sam za saradnju i tvoje treninge.";

// Builds a wa.me link with an optional custom prefilled message (e.g. per
// pricing plan). Defaults to the generic message above.
export const getWhatsappLink = (message: string = WHATSAPP_PREFILLED_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_LINK = getWhatsappLink();

export const ACTIVITY_LEVELS = {
  sedentary: "sedentary",
  lightly_active: "lightly_active",
  moderately_active: "moderately_active",
  very_active: "very_active",
  extremely_active: "extremely_active",
} as const;

export const KCAL_PER_KG_FAT = 7700;

export const DESKTOP_MEDIA_QUERY = "(min-width: 64rem)";

export const CAL_PER_GRAM = {
  protein: 4,
  carbs: 4,
  fat: 9,
} as const;

// Protein is anchored to bodyweight, never to a share of calories: the amount
// needed to hold on to lean mass does not shrink when the calorie target does.
// It is set highest in a deficit, where muscle loss is the actual risk.
export const PROTEIN_G_PER_KG = {
  deficit: 2.2,
  maintenance: 2,
  surplus: 1.8,
} as const;

// Fat is bodyweight-anchored too, so a deep deficit cannot push it under the
// floor needed for hormonal health.
export const FAT_G_PER_KG = 0.9;

// Carbs absorb whatever calories are left over, but never drop below this share.
export const MIN_CARBS_SHARE_OF_CALORIES = 0.15;

export const ADJUSTMENT_CONFIG = [
  {
    id: "deficit_20",
    label: "20% Deficit",
    adjustment: -0.2,
    description:
      "Zlatna sredina za većinu ljudi. Stabilan gubitak masti bez žrtvovanja mišića ili energije.",
  },
  {
    id: "deficit_10",
    label: "10% Deficit",
    adjustment: -0.1,
    description:
      "Blag, jedva primetan deficit. Najbolji izbor ako si blizu cilja ili želiš da održavaš deficit na baš dug period, bez uticaja na performanse ili glad.",
  },
  {
    id: "maintenance",
    adjustment: 0,
    label: "Održavanje (TDEE)",
    description:
      "Ako jedeš ovoliko, tvoja težina ostaje potpuno ista. Sve ostalo se računa u odnosu na ovaj broj.",
  },
  {
    id: "surplus_10",
    adjustment: 0.1,
    label: "10% Suficit",
    description:
      "Spor, čist bulk. Favorizuje rast mišića uz minimalno prikpljanje masti, najbolji za dug i kontrolisan period izgradnje. (npr. winter arc)",
  },
  {
    id: "surplus_20",
    adjustment: 0.2,
    label: "20% Suficit",
    description:
      "Brži bulk za bržu izgradnju snage i mišićne mase, međutim očekuj da će veći deo dobijene težine biti mast, uz mišiće.",
  },
];
