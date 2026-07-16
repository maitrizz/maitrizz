type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_STATISTIQUES_DESCRIPTIVES: CopieACorriger[] = [
  {
    id: "ma-11-copie-moyenne-non-ponderee",
    copie: "Notes 8, 10, 12, 14 d'effectifs 3, 5, 8, 4. Un candidat écrit : « moyenne = (8 + 10 + 12 + 14) ÷ 4 = 11 ».",
    correcte: false,
    verdict: "À corriger : il faut pondérer par les effectifs. x̄ = (3 × 8 + 5 × 10 + 8 × 12 + 4 × 14) ÷ 20 = 226 ÷ 20 = 11,3.",
    coteProf: "La formule est Σ nᵢ × xᵢ ÷ N : diviser par l'effectif total, jamais par le nombre de valeurs distinctes.",
  },
  {
    id: "ma-11-copie-rang-valeur",
    copie: "Série triée 4, 7, 9, 12, 15. Un candidat écrit : « rang médian = 3, donc médiane = 3 ».",
    correcte: false,
    verdict: "À corriger : le rang médian est bien 3, mais la médiane est la VALEUR au rang 3, soit 9.",
    coteProf: "Le rang est la position ; la valeur est le nombre écrit à cette position.",
  },
  {
    id: "ma-11-copie-non-trie",
    copie: "Série brute 12, 4, 18, 7, 9. Un candidat écrit : « valeur centrale = 18, donc médiane = 18 ».",
    correcte: false,
    verdict: "À corriger : il faut trier d'abord. Série triée : 4, 7, 9, 12, 18. La valeur centrale (rang 3) est 9.",
    coteProf: "Toujours trier avant de chercher la médiane.",
  },
  {
    id: "ma-11-copie-histogramme",
    copie: "Histogramme à classes inégales [0 ; 5[ et [5 ; 15[ de même hauteur 4. Un candidat écrit : « même hauteur, donc même effectif ».",
    correcte: false,
    verdict: "À corriger : avec des classes inégales, l'effectif est proportionnel à la SURFACE. 4 × 5 = 20 contre 4 × 10 = 40 : la seconde classe a deux fois plus d'individus.",
    coteProf: "Classes inégales : utiliser la densité (hauteur = fréquence ÷ largeur de classe).",
  },
  {
    id: "ma-11-copie-mediane-correct",
    copie: "Série brute 12, 4, 18, 7, 9. Un candidat écrit : « triée : 4, 7, 9, 12, 18 ; N = 5 impair, rang 3, médiane = 9 ».",
    correcte: true,
    verdict: "C'est juste : la série est triée, le rang médian est (5 + 1) ÷ 2 = 3, et la valeur au rang 3 est 9.",
  },
  {
    id: "ma-11-copie-moyenne-correct",
    copie: "Notes 10 (×3) et 14 (×5). Un candidat écrit : « x̄ = (3 × 10 + 5 × 14) ÷ 8 = 100 ÷ 8 = 12,5 ».",
    correcte: true,
    verdict: "C'est juste : les produits nᵢ × xᵢ sont bien pondérés et la division se fait par l'effectif total 8.",
  },
];
