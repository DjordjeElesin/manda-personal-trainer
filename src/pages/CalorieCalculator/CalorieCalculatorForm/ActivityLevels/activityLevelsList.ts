import type { TActivityLevel } from "@/types";

export const activityLevels: TActivityLevel[] = [
  {
    id: "sedentary",
    label: "Neaktivan",
    summary: "Bez treninga. Manje od 5.000 koraka dnevno",
    description:
      "Nemaš redovne treninge. Krećeš se vrlo malo. Većinu dana provodiš sedeći, npr. za računarom ili radnim stolom.",
    multiplier: 1.2,
  },
  {
    id: "lightly_active",
    label: "Blago aktivan",
    summary: "1–3 treninga nedeljno. 5.000–7.500 koraka dnevno",
    description:
      "Treniraš povremeno tokom nedelje. Ostatak dana provodiš uglavnom sedeći ili uz vrlo lagane fizičke aktivnosti.",
    multiplier: 1.375,
  },
  {
    id: "moderately_active",
    label: "Umereno aktivan",
    summary: "2–4 treninga nedeljno. 7.500–12.000 koraka dnevno",
    description:
      "Redovno treniraš i trudiš se da ostaneš aktivan/na i van teretane. Ovo je nivo za većinu ljudi koji balansiraju posao i sport.",
    multiplier: 1.55,
  },
  {
    id: "very_active",
    label: "Vrlo aktivan",
    summary: "3–5 treninga nedeljno. 12.000–15.000 koraka dnevno",
    description:
      "Tvoj stil života zahteva dosta kretanja uz struktuiran plan treninga. Veoma si fizički aktivan/na tokom celog dana.",
    multiplier: 1.725,
  },
  {
    id: "extremely_active",
    label: "Izuzetno aktivan",
    summary: "3–5 treninga nedeljno. Preko 15.000 koraka dnevno",
    description:
      "Baviš se intenzivnim fizičkim radom ili tvoj posao zahteva celodnevno stajanje i kretanje, uz redovne naporne treninge.",
    multiplier: 1.9,
  },
];
