type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_DIVISIBILITE_PGCD_PPCM: CopieACorriger[] = [
  {
    id: "ma-06-copie-un-premier",
    copie: "Pour la question « 1 est-il premier ? », un candidat écrit : « Oui, 1 est premier car il n'est divisible que par 1 ».",
    correcte: false,
    verdict: "À corriger : 1 n'est pas premier. Un nombre premier a exactement deux diviseurs distincts (1 et lui-même), or 1 n'en a qu'un.",
    coteProf: "Cette convention garantit l'unicité de la décomposition en facteurs premiers.",
  },
  {
    id: "ma-06-copie-pgcd-ppcm",
    copie: "Pour additionner 1/12 + 1/8, un candidat prend le PGCD comme dénominateur commun : « dénominateur = PGCD(12, 8) = 4 ».",
    correcte: false,
    verdict: "À corriger : le dénominateur commun est le PPCM, pas le PGCD. PPCM(12, 8) = 24, donc 1/12 + 1/8 = 2/24 + 3/24 = 5/24.",
    coteProf: "PGCD → fraction irréductible ; PPCM → dénominateur commun.",
  },
  {
    id: "ma-06-copie-primalite-91",
    copie: "Pour « 91 est-il premier ? », un candidat écrit : « 91 n'est divisible ni par 2, ni par 3, ni par 5, donc 91 est premier ».",
    correcte: false,
    verdict: "À corriger : √91 ≈ 9,5, il faut aussi tester 7. Or 91 = 7 × 13 : 91 n'est pas premier.",
    coteProf: "Tester tous les premiers inférieurs ou égaux à √n, sans s'arrêter à 5.",
  },
  {
    id: "ma-06-copie-euclide-quotient",
    copie: "Pour PGCD(90, 54) : 90 = 54 × 1 + 36, 54 = 36 × 1 + 18, 36 = 18 × 2 + 0. Un candidat conclut : « PGCD = 2 ».",
    correcte: false,
    verdict: "À corriger : le PGCD est le dernier reste non nul, soit 18 (le diviseur de la dernière ligne), pas le quotient 2.",
    coteProf: "Chercher le dernier reste non nul dans la colonne des restes, jamais le quotient.",
  },
  {
    id: "ma-06-copie-decomposition-incomplete",
    copie: "Pour décomposer 420 en facteurs premiers, un candidat écrit : « 420 = 4 × 105 = 4 × 5 × 21 = 20 × 21 ».",
    correcte: false,
    verdict: "À corriger : la décomposition n'est pas terminée (20 et 21 ne sont pas premiers). 420 = 2² × 3 × 5 × 7.",
    coteProf: "La décomposition est finie quand chaque facteur est premier (2, 3, 5, 7, 11…).",
  },
  {
    id: "ma-06-copie-euclide-correct",
    copie: "Pour PGCD(48, 36) : 48 = 36 × 1 + 12, 36 = 12 × 3 + 0. Un candidat conclut : « PGCD = 12 ».",
    correcte: true,
    verdict: "C'est juste : le dernier reste non nul est 12 (le diviseur de la dernière ligne). PGCD(48, 36) = 12.",
  },
  {
    id: "ma-06-copie-premiers-entre-eux",
    copie: "Un candidat écrit : « 8 = 2³ et 15 = 3 × 5 n'ont aucun facteur commun, donc PGCD(8, 15) = 1 : ils sont premiers entre eux, même si aucun n'est premier ».",
    correcte: true,
    verdict: "C'est juste : « premiers entre eux » signifie PGCD = 1, ce qui n'exige pas que chaque nombre soit premier.",
  },
];
