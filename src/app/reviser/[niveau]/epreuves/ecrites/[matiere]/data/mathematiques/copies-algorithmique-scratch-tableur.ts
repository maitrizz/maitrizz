type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_ALGORITHMIQUE_SCRATCH_TABLEUR: CopieACorriger[] = [
  {
    id: "ma-27-copie-angle",
    copie: "Un candidat écrit : « Pour tracer un triangle équilatéral, je répète 3 fois : avancer ; tourner de 60°, car ses angles valent 60° ».",
    correcte: false,
    verdict: "À corriger : le lutin tourne de l'angle extérieur, soit 360/3 = 120° (tourner de 60° ne fermerait pas le triangle).",
    coteProf: "Angle de rotation = 360 / nombre de côtés. Carré 90°, triangle 120°, hexagone 60°.",
  },
  {
    id: "ma-27-copie-reference",
    copie: "Le taux est en D1. Un candidat écrit en C2 : « =B2*D1 » et recopie vers le bas.",
    correcte: false,
    verdict: "À corriger : recopiée en C3, la formule devient =B3*D2, mais D2 est vide. Il faut figer le taux : =B2*$D$1.",
    coteProf: "Une cellule qui ne doit pas se décaler lors de la recopie se fige avec des $.",
  },
  {
    id: "ma-27-copie-boucle",
    copie: "Pour « mettre s à 0, puis répéter 5 fois : ajouter 3 à s », un candidat répond : « s = 3 ».",
    correcte: false,
    verdict: "À corriger : on ajoute 3 à chaque tour, cinq fois. s = 3 × 5 = 15.",
    coteProf: "Suivre la variable tour par tour, dans un tableau d'évolution.",
  },
  {
    id: "ma-27-copie-affectation",
    copie: "Un candidat écrit : « L'instruction « mettre x à x + 1 » est impossible, car x ne peut pas être égal à x + 1 ».",
    correcte: false,
    verdict: "À corriger : ce n'est pas une égalité mais une affectation. On calcule x + 1 et on range le résultat dans x (si x valait 5, il vaut 6).",
    coteProf: "L'affectation remplace l'ancienne valeur d'une variable par une nouvelle, calculée à partir de l'ancienne.",
  },
  {
    id: "ma-27-copie-carre-correct",
    copie: "Pour tracer un carré, un candidat écrit : « répéter 4 fois : avancer ; tourner de 90° ».",
    correcte: true,
    verdict: "C'est juste : l'angle de rotation est 360/4 = 90°, et 4 répétitions ferment le carré.",
  },
  {
    id: "ma-27-copie-si-correct",
    copie: "Pour afficher « Admis » si B2 ≥ 10 et « Refusé » sinon, un candidat écrit : « =SI(B2>=10 ; \"Admis\" ; \"Refusé\") ».",
    correcte: true,
    verdict: "C'est juste : la fonction SI teste la condition et renvoie l'une ou l'autre des deux valeurs.",
  },
];
