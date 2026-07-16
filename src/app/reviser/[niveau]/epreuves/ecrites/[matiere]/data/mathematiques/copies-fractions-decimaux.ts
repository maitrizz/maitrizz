type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_FRACTIONS_DECIMAUX: CopieACorriger[] = [
  {
    id: "ma-03-copie-addition-denominateurs",
    copie: "Pour calculer 1/3 + 1/4, un candidat écrit : « 1/3 + 1/4 = 2/7 ».",
    correcte: false,
    verdict: "À corriger : 1/3 + 1/4 = 4/12 + 3/12 = **7/12**.",
    coteProf: "Erreur n°1 : additionner directement les dénominateurs au lieu de passer par un dénominateur commun.",
  },
  {
    id: "ma-03-copie-denominateur-commun",
    copie: "Pour calculer 1/3 + 1/4, un candidat écrit : « 1/3 + 1/4 = 4/12 + 3/12 = 7/12 ».",
    correcte: true,
    verdict: "C'est juste : l'addition exige un dénominateur commun, ici 12.",
  },
  {
    id: "ma-03-copie-fraction-superieure-un",
    copie: "Pour 5/3, un candidat écrit : « ce n'est pas une fraction parce que c'est plus grand que 1 ».",
    correcte: false,
    verdict: "À corriger : 5/3 est une fraction valide, elle vaut 1,666…, simplement supérieure à 1.",
    coteProf: "Une fraction est supérieure à 1 quand le numérateur dépasse le dénominateur.",
  },
  {
    id: "ma-03-copie-fraction-impropre",
    copie: "Pour 7/4, un candidat écrit : « 7/4 > 1 car le numérateur dépasse le dénominateur ».",
    correcte: true,
    verdict: "C'est juste : 7/4 = 1,75, donc la fraction est supérieure à 1.",
  },
  {
    id: "ma-03-copie-decimal-periodique",
    copie: "Pour 0,333…, un candidat écrit : « c'est un nombre décimal ».",
    correcte: false,
    verdict: "À corriger : 0,333… est un rationnel à développement **périodique** ; ce n'est pas un décimal fini. C'est 1/3.",
    coteProf: "Décimal = développement fini. Rationnel non décimal = développement périodique infini.",
  },
  {
    id: "ma-03-copie-simplification-un-terme",
    copie: "Pour simplifier 14/21, un candidat écrit : « je divise 14 par 2, donc 14/21 = 7/21 ».",
    correcte: false,
    verdict: "À corriger : le diviseur doit être commun au numérateur ET au dénominateur. PGCD(14, 21) = 7, donc 14/21 = **2/3**.",
    coteProf: "On divise toujours les deux termes d'une fraction par le même entier non nul.",
  },
  {
    id: "ma-03-copie-simplification-pgcd",
    copie: "Pour simplifier 14/21, un candidat écrit : « PGCD(14, 21) = 7 ; 14 ÷ 7 = 2 et 21 ÷ 7 = 3, donc 14/21 = 2/3 ».",
    correcte: true,
    verdict: "C'est juste : les deux termes sont divisés par le même diviseur commun, et 2/3 est irréductible.",
  },
];
