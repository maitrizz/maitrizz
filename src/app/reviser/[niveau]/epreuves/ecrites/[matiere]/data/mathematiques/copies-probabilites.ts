type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_PROBABILITES: CopieACorriger[] = [
  {
    id: "ma-12-copie-reunion",
    copie: "Dé équilibré, A = « pair », B = « multiple de 3 ». Un candidat écrit : « P(A ou B) = 1/2 + 1/3 = 5/6 ».",
    correcte: false,
    verdict: "À corriger : 6 est à la fois pair et multiple de 3 (A ∩ B = {6}), compté deux fois. P(A ∪ B) = 3/6 + 2/6 − 1/6 = 4/6 = 2/3.",
    coteProf: "Toujours vérifier si A ∩ B = ∅ avant d'additionner.",
  },
  {
    id: "ma-12-copie-chemins",
    copie: "Urne 3 rouges, 5 bleues, 2 tirages avec remise. Pour P(exactement 1 rouge), un candidat écrit : « 3/8 × 5/8 = 15/64 ».",
    correcte: false,
    verdict: "À corriger : deux chemins mènent à « 1 rouge et 1 bleue » (RB et BR). P = 15/64 + 15/64 = 30/64 = 15/32.",
    coteProf: "Lister TOUS les chemins menant à l'événement avant de calculer.",
  },
  {
    id: "ma-12-copie-remise",
    copie: "Urne 3 rouges, 2 bleues, 2 tirages sans remise. Pour P(rouge puis bleue), un candidat écrit : « 3/5 × 2/5 = 6/25 ».",
    correcte: false,
    verdict: "À corriger : après une rouge, il reste 2R et 2B (4 billes), donc P(B|R) = 2/4. P(RB) = 3/5 × 1/2 = 3/10.",
    coteProf: "Sans remise : recompter le contenu de l'urne avant chaque branche.",
  },
  {
    id: "ma-12-copie-frequence-proba",
    copie: "On lance 20 fois un dé, le 6 sort 5 fois. Un candidat écrit : « P(6) = 5/20 = 0,25, le dé est truqué ».",
    correcte: false,
    verdict: "À corriger : 5/20 est une fréquence observée, pas la probabilité. Pour un dé équilibré P(6) = 1/6 ≈ 0,167 ; un écart sur 20 lancers est normal, on ne peut rien conclure.",
    coteProf: "La fréquence estime la probabilité ; la fiabilité augmente avec le nombre d'essais.",
  },
  {
    id: "ma-12-copie-contraire-correct",
    copie: "3 lancers d'une pièce équilibrée. Pour P(au moins un Pile), un candidat écrit : « 1 − P(FFF) = 1 − (1/2)³ = 7/8 ».",
    correcte: true,
    verdict: "C'est juste : « au moins un » = 1 − P(aucun), et P(FFF) = 1/8, donc P(au moins un Pile) = 7/8.",
  },
  {
    id: "ma-12-copie-arbre-correct",
    copie: "Urne 3 rouges, 2 bleues, 2 tirages sans remise. Pour P(rouge puis bleue), un candidat écrit : « 3/5 × 2/4 = 3/10 ».",
    correcte: true,
    verdict: "C'est juste : après une rouge il reste 2R et 2B (4 billes), P(B|R) = 2/4, et 3/5 × 2/4 = 3/10.",
  },
];
