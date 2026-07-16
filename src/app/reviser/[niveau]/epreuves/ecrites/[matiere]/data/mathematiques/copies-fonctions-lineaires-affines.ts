type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_FONCTIONS_LINEAIRES_AFFINES: CopieACorriger[] = [
  {
    id: "ma-14-copie-image-antecedent",
    copie: "Soit f(x) = 2x + 1. Pour « trouver l'antécédent de 9 », un candidat écrit : « f(9) = 2 × 9 + 1 = 19 ».",
    correcte: false,
    verdict: "À corriger : f(9) = 19 est l'image de 9. L'antécédent de 9 se trouve en résolvant f(x) = 9 : 2x + 1 = 9 → x = 4.",
    coteProf: "Antécédent : on part de la sortie, on résout une équation.",
  },
  {
    id: "ma-14-copie-a-b",
    copie: "Un candidat écrit : « Dans f(x) = 3x + 5, le coefficient directeur est 5 et l'ordonnée à l'origine est 3 ».",
    correcte: false,
    verdict: "À corriger : a = 3 (coefficient de x, la pente) et b = 5 (terme constant, ordonnée à l'origine). Vérif : f(0) = 5 = b.",
    coteProf: "a est toujours devant le x ; b est le terme seul.",
  },
  {
    id: "ma-14-copie-proportionnel",
    copie: "Un candidat écrit : « f(x) = 2x + 3 modélise une proportionnalité car la droite monte régulièrement ».",
    correcte: false,
    verdict: "À corriger : f(0) = 3 ≠ 0, la droite ne passe pas par l'origine. Une proportionnalité impose une fonction linéaire f(x) = ax (b = 0).",
    coteProf: "Le test : f(0) = 0 ? Si oui, linéaire et proportionnel ; sinon, affine.",
  },
  {
    id: "ma-14-copie-pente",
    copie: "Points (2 ; 5) et (4 ; 9). Pour le coefficient directeur, un candidat écrit : « a = 9 ÷ 4 = 2,25 ».",
    correcte: false,
    verdict: "À corriger : a mesure une variation, pas une coordonnée. a = (9 − 5) ÷ (4 − 2) = 4 ÷ 2 = 2.",
    coteProf: "Toujours a = (y₂ − y₁) ÷ (x₂ − x₁).",
  },
  {
    id: "ma-14-copie-antecedent-correct",
    copie: "Soit f(x) = 2x + 1. Pour l'antécédent de 7, un candidat écrit : « 2x + 1 = 7 → 2x = 6 → x = 3 ».",
    correcte: true,
    verdict: "C'est juste : chercher l'antécédent de 7, c'est résoudre f(x) = 7, ce qui donne x = 3 (vérif : f(3) = 7).",
  },
  {
    id: "ma-14-copie-lineaire-correct",
    copie: "Un candidat écrit : « f(x) = 3x est linéaire : b = 0, sa droite passe par l'origine, c'est une proportionnalité de coefficient 3 ».",
    correcte: true,
    verdict: "C'est juste : f(x) = ax avec b = 0 est une fonction linéaire, dont la droite passe par (0 ; 0).",
  },
];
