// Banque de copies à corriger, notion 13 « Les homophones grammaticaux ».
//
// Copies dérivées des pièges du cours v1 et/ou du matériel de détection d'erreur existant.
// Mélange volontaire de réponses justes et fausses.

type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_HOMOPHONES_GRAMMATICAUX: CopieACorriger[] = [
  {
    id: "fr-13-cop-01",
    copie: "Un candidat affirme : « Il pense a son travail et a sa famille. »",
    correcte: false,
    verdict: "« à » est ici la préposition : le test de l'imparfait échoue (« il pense avait son travail » est impossible). On écrit « **à** » dans les deux cas.",
    coteProf: "Devant tout « a/à », tester « avait » : si l'imparfait passe, c'est le verbe « a » ; sinon, la préposition « à ».",
  },
  {
    id: "fr-13-cop-02",
    copie: "Un candidat affirme : « Je leurs ai dit la vérité. »",
    correcte: false,
    verdict: "Le pronom personnel COI « leur » (= lui) est **invariable** : « Je **leur** ai dit la vérité. » Le -s est réservé au déterminant possessif (« leurs enfants »).",
    coteProf: "Remplacer par « lui » : si ça marche, c'est le pronom « leur », jamais de -s.",
  },
  {
    id: "fr-13-cop-03",
    copie: "Un candidat affirme : « Ses résultats montrent que la méthode est efficace. » (alors que les résultats sont déjà évoqués, sans possesseur).",
    correcte: false,
    verdict: "Sans possesseur identifié, le sens est démonstratif : « **Ces** résultats… » Test : « ce résultat » au singulier.",
    coteProf: "Se demander s'il y a un possesseur (ses, son/sa) ou si l'on désigne des éléments déjà connus (ces, ce/cette).",
  },
  {
    id: "fr-13-cop-04",
    copie: "Copie d'un candidat (Partie 3) : « Il pense *a son travail et *a sa famille. »",
    correcte: false,
    verdict: "À corriger : Deux prépositions « à » écrites sans accent\n- Test : « il pense avait son travail » est impossible → ce n'est pas le verbe « a »\n- Réponse attendue : « Il pense **à** son travail et **à** sa famille. »",
  },
  {
    id: "fr-13-cop-05",
    copie: "Copie d'un candidat : « Je *leurs ai dit la vérité. »",
    correcte: false,
    verdict: "À corriger : Ajout d'un -s erroné sur le pronom personnel COI\n- Le pronom « leur » (= lui) est invariable ; le -s est réservé au déterminant possessif\n- Réponse attendue : « Je **leur** ai dit la vérité. » (test : « je lui ai dit » ✓)",
  },
  {
    id: "fr-13-cop-06",
    copie: "Un candidat affirme : « à » est ici la préposition : le test de l'imparfait échoue (« il pense avait son travail » est impossible). On écrit « **à** » dans les deux cas.",
    correcte: true,
    verdict: "C'est juste : « à » est ici la préposition : le test de l'imparfait échoue (« il pense avait son travail » est impossible). On écrit « **à** » dans les deux cas.",
    coteProf: "Devant tout « a/à », tester « avait » : si l'imparfait passe, c'est le verbe « a » ; sinon, la préposition « à ».",
  },
  {
    id: "fr-13-cop-07",
    copie: "Un candidat affirme : Le pronom personnel COI « leur » (= lui) est **invariable** : « Je **leur** ai dit la vérité. » Le -s est réservé au déterminant possessif (« leurs enfants »).",
    correcte: true,
    verdict: "C'est juste : Le pronom personnel COI « leur » (= lui) est **invariable** : « Je **leur** ai dit la vérité. » Le -s est réservé au déterminant possessif (« leurs enfants »).",
    coteProf: "Remplacer par « lui » : si ça marche, c'est le pronom « leur », jamais de -s.",
  },
  {
    id: "fr-13-cop-08",
    copie: "Un candidat affirme : Sans possesseur identifié, le sens est démonstratif : « **Ces** résultats… » Test : « ce résultat » au singulier.",
    correcte: true,
    verdict: "C'est juste : Sans possesseur identifié, le sens est démonstratif : « **Ces** résultats… » Test : « ce résultat » au singulier.",
    coteProf: "Se demander s'il y a un possesseur (ses, son/sa) ou si l'on désigne des éléments déjà connus (ces, ce/cette).",
  },
];
