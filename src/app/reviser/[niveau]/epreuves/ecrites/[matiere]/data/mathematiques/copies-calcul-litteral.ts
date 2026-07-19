type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_CALCUL_LITTERAL: CopieACorriger[] = [
  {
    id: "ma-08-copie-signe-moins",
    copie: "Pour développer −(3x − 2), un candidat écrit : « −(3x − 2) = −3x − 2 ».",
    correcte: false,
    verdict: "À corriger : le signe − change le signe de chaque terme. −(3x − 2) = −3x + 2.",
    coteProf: "Voir le − comme × (−1) appliqué à toute la parenthèse.",
  },
  {
    id: "ma-08-copie-identite-carre",
    copie: "Pour développer (x + 3)², un candidat écrit : « (x + 3)² = x² + 9 ».",
    correcte: false,
    verdict: "À corriger : (a + b)² = a² + 2ab + b². (x + 3)² = x² + 2 × x × 3 + 9 = x² + 6x + 9. Le terme du milieu 2ab ne disparaît jamais.",
    coteProf: "Réciter l'identité en entier détecte systématiquement cette erreur.",
  },
  {
    id: "ma-08-copie-factoriser-partiel",
    copie: "Pour factoriser 6x + 9, un candidat écrit : « 6x + 9 = 2(3x) + 9 ».",
    correcte: false,
    verdict: "À corriger : le facteur commun doit diviser TOUS les termes. 6x + 9 = 3(2x + 3).",
    coteProf: "Vérifier en redéveloppant : si on ne retombe pas sur le départ, la factorisation est fausse.",
  },
  {
    id: "ma-08-copie-preuve-exemples",
    copie: "Pour prouver une propriété sur les entiers, un candidat écrit : « Pour n = 1, 2, 3 ça marche, donc c'est vrai pour tous les entiers ».",
    correcte: false,
    verdict: "À corriger : des exemples illustrent mais ne prouvent pas. Il faut un raisonnement général avec une lettre (n, 2k, 2k + 1…).",
    coteProf: "Un contre-exemple suffit à réfuter ; aucun nombre d'exemples positifs ne prouve pour tous les entiers.",
  },
  {
    id: "ma-08-copie-variable-inconnue",
    copie: "On demande de factoriser 2x + 6. Un candidat écrit : « 2x + 6 = 0, donc x = −3 ».",
    correcte: false,
    verdict: "À corriger : on demandait de factoriser une expression, pas de résoudre une équation. 2x + 6 = 2(x + 3).",
    coteProf: "« Factoriser / développer » → x est une variable ; « résoudre / trouver x » → x est une inconnue.",
  },
  {
    id: "ma-08-copie-factoriser-correct",
    copie: "Pour factoriser au maximum 4x² − 16, un candidat écrit : « 4x² − 16 = 4(x² − 4) = 4(x + 2)(x − 2) ».",
    correcte: true,
    verdict: "C'est juste : facteur commun 4, puis x² − 4 = x² − 2² se factorise en (x + 2)(x − 2). La factorisation est bien poussée au maximum.",
  },
  {
    id: "ma-08-copie-identite-correct",
    copie: "Pour développer (x + 3)², un candidat écrit : « (x + 3)² = x² + 6x + 9 ».",
    correcte: true,
    verdict: "C'est juste : (x + 3)² = x² + 2 × x × 3 + 3² = x² + 6x + 9.",
  },
];
