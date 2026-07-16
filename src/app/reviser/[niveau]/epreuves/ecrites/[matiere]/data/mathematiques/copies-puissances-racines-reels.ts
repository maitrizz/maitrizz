type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_PUISSANCES_RACINES_REELS: CopieACorriger[] = [
  {
    id: "ma-04-copie-distribuer-puissance",
    copie: "Pour calculer (3 + 4)², un candidat écrit : « (3 + 4)² = 3² + 4² = 25 ».",
    correcte: false,
    verdict:
      "À corriger : (3 + 4)² = 7² = **49**. La puissance ne se distribue pas sur l'addition : (a + b)² = a² + 2ab + b².",
    coteProf: "Erreur la plus coûteuse : distribuer le carré sur une somme.",
  },
  {
    id: "ma-04-copie-additionner-racines",
    copie: "Pour calculer √9 + √16, un candidat écrit : « √9 + √16 = √(9+16) = √25 = 5 ».",
    correcte: false,
    verdict: "À corriger : √9 + √16 = 3 + 4 = **7**. La racine d'une somme n'est pas la somme des racines : √(a+b) ≠ √a + √b.",
    coteProf: "En revanche √(a×b) = √a × √b : c'est la règle du produit qui s'applique, pas celle de la somme.",
  },
  {
    id: "ma-04-copie-racine-carre",
    copie: "Pour calculer √((−3)²), un candidat écrit : « √((−3)²) = −3 ».",
    correcte: false,
    verdict: "À corriger : √((−3)²) = √9 = **3**. Par définition √(a²) = |a|, toujours positif.",
    coteProf: "La racine carrée désigne toujours le résultat positif.",
  },
  {
    id: "ma-04-copie-bases-differentes",
    copie: "Pour calculer 2³ × 3², un candidat écrit : « 2³ × 3² = 6⁵ ».",
    correcte: false,
    verdict: "À corriger : 2³ × 3² = 8 × 9 = **72**. On ne regroupe les bases que si les exposants sont identiques (2³ × 5³ = 10³).",
    coteProf: "Bases différentes et exposants différents : on calcule séparément.",
  },
  {
    id: "ma-04-copie-encadrement-sans-verif",
    copie: "Pour encadrer √3 à 0,1 près, un candidat écrit : « √3 ≈ 1,7 à 0,1 près », sans autre justification.",
    correcte: false,
    verdict:
      "À corriger : l'encadrement doit être prouvé par les carrés. 1,7² = 2,89 < 3 et 1,8² = 3,24 > 3 → **1,7 < √3 < 1,8**.",
    coteProf: "Un encadrement non vérifié par le carré ne vaut aucun point au CRPE.",
  },
  {
    id: "ma-04-copie-simplifier-correct",
    copie: "Pour simplifier √72, un candidat écrit : « √72 = √(36 × 2) = 6√2 ».",
    correcte: true,
    verdict: "C'est juste : 36 est le plus grand carré parfait qui divise 72, donc √72 = √36 × √2 = 6√2.",
  },
  {
    id: "ma-04-copie-carre-racine-correct",
    copie: "Pour calculer (√5)², un candidat écrit : « (√5)² = 5 ».",
    correcte: true,
    verdict: "C'est juste : (√a)² = a pour tout a ≥ 0, donc (√5)² = 5.",
  },
];
