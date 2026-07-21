import transformation01 from "@/assets/transformations/transformation-01.jpg";
import transformation02 from "@/assets/transformations/transformation-02.jpg";
import transformation03 from "@/assets/transformations/transformation-03.png";
import transformation04 from "@/assets/transformations/transformation-04.jpg";
import transformation05 from "@/assets/transformations/transformation-05.jpg";
import transformation06 from "@/assets/transformations/transformation-06.jpg";
import transformation07 from "@/assets/transformations/transformation-07.jpg";
import transformation08 from "@/assets/transformations/transformation-08.jpg";
import transformation09 from "@/assets/transformations/transformation-09.png";
import type { TNavLink, TPlan, TStat } from "@/types";

export const NAV_LINKS: TNavLink[] = [
  { label: "Rezultati", href: "#rezultati" },
  { label: "O meni", href: "#o-meni" },
  { label: "Usluge", href: "#usluge" },
  { label: "Utisci", href: "#utisci" },
  { label: "Kalkulator", href: "/kalkulator" },
];

export const STATS: TStat[] = [
  { value: 70, suffix: "+", label: "Zadovoljnih klijenata" },
  { value: 1000, suffix: "+", label: "Odrađenih treninga" },
  { value: 4, suffix: "", label: "Godine iskustva" },
  { value: 100, suffix: "%", label: "Posvećenost tebi" },
];

export const PLANS: TPlan[] = [
  {
    name: "Essentials",
    price: { rsd: "4.000", eur: "35", period: "mesečno" },
    tagline: "Najjeftiniji početak - samostalni sistem",
    highlighted: false,
    features: [
      "Individualni trening program na osnovu cilja",
      "E-book o treningu i ishrani",
      "Kalorijske i proteinske smernice, bez nagađanja",
      "Knjiga recepata i primeri obroka",
      "Sistem navika koji te vodi korak po korak",
      "Grupna WhatsApp / Telegram podrška",
      "Mogućnost mesečne korekcije plana (uz doplatu)",
    ],
  },
  {
    name: "Standard",
    price: { rsd: "7.000", eur: "60", period: "mesečno" },
    altPrice: { rsd: "16.000", eur: "140", period: "3 meseca" },
    tagline: "Najbolji odnos cene i vrednosti",
    highlighted: false,
    badge: "Najbolja vrednost",
    features: [
      "Sve iz Essentials paketa",
      "Trening program u aplikaciji",
      "Nedeljno praćenje napretka i korekcije plana",
      "Individualni check-in poziv na svake 2 nedelje",
      "Direktna WhatsApp podrška i glasovne poruke",
      "Odgovori na poruke u roku od 24h (radnim danima)",
      "Mesečna tehnička provera forme",
    ],
  },
  {
    name: "Premium",
    price: { rsd: "10.000", eur: "90", period: "mesečno" },
    altPrice: { rsd: "23.000", eur: "200", period: "3 meseca" },
    tagline: "Najbolji mogući rezultati bez treninga uživo.",
    highlighted: true,
    badge: "Najbolji rezultati",
    features: [
      "Sve iz Standard paketa",
      "Detaljan nutritivni sistem i konkretni obroci",
      "Analiza tehnike i korekcija snimaka",
      "Prioritetni odgovori u toku dana (radnim danima)",
      "Više personalizacije i brže izmene plana",
      "Mesečni deep-dive poziv: progres, prepreke, sledeći korak",
      "Strategija za vikende, putovanja, restorane i emotional eating",
      "Garancija: ako se držiš plana a ne ostvariš cilj - nastavljamo bez naknade",
    ],
  },
];

type TTransformation = {
  image: string;
  alt: string;
};

export const TRANSFORMATIONS: TTransformation[] = [
  {
    image: transformation01,
    alt: "Luka, 23 - transformacija uz Mandu, -26 kg za 6 meseci",
  },
  {
    image: transformation02,
    alt: "Marko, 24 - transformacija uz Mandu, +10 kg mišića za 16 meseci",
  },
  {
    image: transformation03,
    alt: "Maja, 38 - transformacija uz Mandu, -10 kg za 5 meseci",
  },
  {
    image: transformation04,
    alt: "Vlada, 25 - transformacija uz Mandu, +8 kg mišića za 8 meseci",
  },
  {
    image: transformation05,
    alt: "Đorđe, 23 - transformacija uz Mandu, +7 kg mišića za 8 meseci",
  },
  {
    image: transformation06,
    alt: "Jovica, 37 - transformacija uz Mandu, -6 kg za 2 meseca",
  },
  {
    image: transformation07,
    alt: "Nikola, 36 - transformacija uz Mandu, -5 kg za 2 meseca",
  },
  {
    image: transformation08,
    alt: "Jovana, 27 - transformacija uz Mandu, +3 kg mišića za 6 meseci",
  },
  {
    image: transformation09,
    alt: "Miloš, 20 - rekompozicija tela uz Mandu za 2 meseca",
  },
];

type TTestimonial = {
  name: string;
  role: string;
  rating: number;
  quote: string;
};

export const TESTIMONIALS: TTestimonial[] = [
  {
    name: "Ognjen",
    role: "Klijent",
    rating: 5,
    quote:
      "Gotov prvi trening, konačno da mi neko sastavi trening koji ne smara. E i inače, brutalna nedelja - baš sam zadovoljan treninzima i programom.",
  },
  {
    name: "Majka klijenta",
    role: "Roditelj klijenta",
    rating: 5,
    quote:
      "Odmah sam videla razliku u držanju - popravio je držanje i baš se primeti. On je inače predan i kad nešto želi bude uporan dok to ne ostvari. Jedva čekam da vidimo šta kažu brojke.",
  },
  {
    name: "Jovana",
    role: "Baka rekla može bolje",
    rating: 4,
    quote:
      "Hvala ti na odličnim treninzima! Glavni cilj smo postigli - baka je prezadovoljna mojim izgledom. Kaže da još može bolje, pa nastavljamo misiju. Tvoja motivacija stvarno čini razliku!",
  },
];
