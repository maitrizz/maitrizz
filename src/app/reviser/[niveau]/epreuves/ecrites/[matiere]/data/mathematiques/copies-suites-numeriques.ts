type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_SUITES_NUMERIQUES: CopieACorriger[] = [
  {
    id: "ma-10-copie-d-q",
    copie: "Pour la suite 3, 6, 12, 24, un candidat écrit : « 6 − 3 = 3, donc arithmétique, d = 3 ».",
    correcte: false,
    verdict: "À corriger : 12 − 6 = 6 ≠ 3, la différence n'est pas constante. Le rapport l'est : 6 ÷ 3 = 12 ÷ 6 = 24 ÷ 12 = 2. La suite est géométrique, q = 2.",
    coteProf: "Toujours tester la différence ET le rapport, sur au moins 3 termes.",
  },
  {
    id: "ma-10-copie-indice",
    copie: "Pour une suite arithmétique u₁ et d, un candidat écrit : « u₅ = u₁ + 5 × d ».",
    correcte: false,
    verdict: "À corriger : de u₁ à u₅, il y a 4 sauts, pas 5. u₅ = u₁ + (5 − 1) × d = u₁ + 4 × d.",
    coteProf: "De u₁ à uₙ, il y a (n − 1) sauts.",
  },
  {
    id: "ma-10-copie-somme-geo",
    copie: "Pour la somme des 5 premiers termes d'une suite géométrique de raison q = 1 et u₁ = 5, un candidat applique « S₅ = u₁ × (1 − q⁵) ÷ (1 − q) ».",
    correcte: false,
    verdict: "À corriger : la formule suppose q ≠ 1 (ici division par 1 − 1 = 0). Si q = 1, tous les termes valent u₁, donc S₅ = 5 × u₁ = 25.",
    coteProf: "Vérifier que q ≠ 1 avant d'utiliser la formule de somme géométrique.",
  },
  {
    id: "ma-10-copie-taux-raison",
    copie: "Pour un capital qui augmente de 3 % par an, un candidat écrit : « la raison est q = 0,03 ».",
    correcte: false,
    verdict: "À corriger : augmenter de 3 %, c'est multiplier par 1 + 0,03 = 1,03. La raison est q = 1,03 (q = 0,03 serait une baisse de 97 %).",
    coteProf: "+t % → q = 1 + t/100 ; −t % → q = 1 − t/100.",
  },
  {
    id: "ma-10-copie-terme-correct",
    copie: "Pour une suite arithmétique u₁ = 7, d = 4, un candidat écrit : « u₁₀ = 7 + (10 − 1) × 4 = 43 ».",
    correcte: true,
    verdict: "C'est juste : on ajoute d exactement (n − 1) = 9 fois, donc u₁₀ = 7 + 36 = 43.",
  },
  {
    id: "ma-10-copie-type-correct",
    copie: "Pour la suite 2, 6, 18, 54, un candidat écrit : « 6 ÷ 2 = 3, 18 ÷ 6 = 3, 54 ÷ 18 = 3, donc géométrique, q = 3 ».",
    correcte: true,
    verdict: "C'est juste : le rapport est constant sur plusieurs termes, la suite est géométrique de raison 3.",
  },
];
