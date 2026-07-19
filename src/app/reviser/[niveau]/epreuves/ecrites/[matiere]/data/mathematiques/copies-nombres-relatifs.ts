type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_NOMBRES_RELATIFS: CopieACorriger[] = [
  {
    id: "ma-02-copie-soustraire-negatif",
    copie: "Pour calculer 5 − (−3), un candidat écrit : « 5 − (−3) = 5 − 3 = 2 ».",
    correcte: false,
    verdict: "À corriger : soustraire un négatif, c'est ajouter son opposé : 5 − (−3) = 5 + 3 = **8**.",
    coteProf: "Erreur typique : confondre le signe du nombre et le signe de l'opération.",
  },
  {
    id: "ma-02-copie-deux-moins",
    copie: "Pour calculer (−4) − (−7), un candidat écrit : « (−4) − (−7) = (−4) + (+7) = +3 ».",
    correcte: true,
    verdict: "C'est juste : deux signes − qui se suivent deviennent un +, donc (−4) − (−7) = +3.",
  },
  {
    id: "ma-02-copie-ordre-negatifs",
    copie: "Pour comparer −8 et −3, un candidat écrit : « 8 > 3 donc −8 > −3 ».",
    correcte: false,
    verdict: "À corriger : sur la droite graduée, −8 est à gauche de −3, donc **−8 < −3**.",
    coteProf: "Le candidat transfère l'ordre dans ℕ à ℤ sans tenir compte du signe.",
  },
  {
    id: "ma-02-copie-droite-graduee",
    copie: "Pour ranger −100, −5 et −1, un candidat écrit : « −100 < −5 < −1 ».",
    correcte: true,
    verdict: "C'est juste : plus un négatif a une grande valeur absolue, plus il est petit.",
  },
  {
    id: "ma-02-copie-priorites",
    copie: "Pour calculer 3 + 2 × 4, un candidat écrit : « 3 + 2 × 4 = 5 × 4 = 20 ».",
    correcte: false,
    verdict: "À corriger : 3 + 2 × 4 = 3 + 8 = **11** : on multiplie d'abord.",
    coteProf: "× et ÷ sont prioritaires sur + et −, sauf indication des parenthèses.",
  },
  {
    id: "ma-02-copie-valeur-absolue",
    copie: "Pour « |−5| », un candidat écrit : « |−5| = −5 ».",
    correcte: false,
    verdict: "À corriger : |−5| = **5**. La valeur absolue est une distance à 0, toujours positive ou nulle.",
    coteProf: "Confusion entre le nombre négatif et sa distance à 0.",
  },
  {
    id: "ma-02-copie-oppose",
    copie: "Pour « −(−3) », un candidat écrit : « −(−3) = +3 ».",
    correcte: true,
    verdict: "C'est juste : −(−3) est l'opposé de −3, donc **+3**.",
  },
];
