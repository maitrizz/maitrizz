type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_PERIMETRES_AIRES_VOLUMES: CopieACorriger[] = [
  {
    id: "ma-15-copie-conversion-aire",
    copie: "Pour convertir 5 m² en dm², un candidat écrit : « 5 m² = 5 × 10 = 50 dm² ».",
    correcte: false,
    verdict: "À corriger : une aire se convertit par ×100 entre unités consécutives. 1 m = 10 dm → 1 m² = 100 dm², donc 5 m² = 500 dm².",
    coteProf: "Longueur : ×10 ; aire : ×100 ; volume : ×1 000.",
  },
  {
    id: "ma-15-copie-perimetre-aire",
    copie: "Pour le périmètre d'un carré de côté 5 cm, un candidat écrit : « 25 cm² ».",
    correcte: false,
    verdict: "À corriger : le périmètre est une longueur, P = 4 × 5 = 20 cm. 25 cm² est l'aire (5²).",
    coteProf: "Périmètre : le tour, en cm. Aire : la surface, en cm².",
  },
  {
    id: "ma-15-copie-hauteur",
    copie: "Pour l'aire d'un triangle de côtés 5, 6 et 7 cm, un candidat écrit : « A = ½ × 6 × 7 = 21 cm² ».",
    correcte: false,
    verdict: "À corriger : h est la hauteur perpendiculaire à la base, pas un côté (sauf angle droit). Le calcul ½ × 6 × 7 utilise deux côtés, ce qui est faux ici.",
    coteProf: "Utiliser la hauteur donnée ; sans elle, l'énoncé propose un autre chemin.",
  },
  {
    id: "ma-15-copie-pi",
    copie: "Pour l'aire d'un disque de rayon 4 cm, un candidat écrit : « A = 4² = 16 cm² ».",
    correcte: false,
    verdict: "À corriger : l'aire du disque est π × r². A = π × 4² = 16π ≈ 50,3 cm².",
    coteProf: "Toujours écrire π : valeur exacte (16π) puis valeur approchée (≈ 50,3).",
  },
  {
    id: "ma-15-copie-agrandissement-correct",
    copie: "On double les dimensions d'un cube. Un candidat écrit : « le volume est multiplié par 2³ = 8 ».",
    correcte: true,
    verdict: "C'est juste : quand les longueurs sont ×k, les volumes sont ×k³, soit ×8 pour k = 2.",
  },
  {
    id: "ma-15-copie-volume-correct",
    copie: "Pour le volume d'un pavé de 20 cm × 10 cm × 5 cm en litres, un candidat écrit : « 20 × 10 × 5 = 1 000 cm³ = 1 L ».",
    correcte: true,
    verdict: "C'est juste : 1 000 cm³ = 1 000 mL = 1 L (1 cm³ = 1 mL).",
  },
];
