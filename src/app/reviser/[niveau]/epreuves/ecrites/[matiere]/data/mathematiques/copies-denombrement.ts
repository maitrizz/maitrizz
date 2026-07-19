type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_DENOMBREMENT: CopieACorriger[] = [
  {
    id: "ma-07-copie-additionner",
    copie: "Pour compter les menus possibles avec 3 entrées, 4 plats et 2 desserts, un candidat écrit : « 3 + 4 + 2 = 9 menus ».",
    correcte: false,
    verdict: "À corriger : on choisit une entrée ET un plat ET un dessert (choix cumulatifs). Par le principe multiplicatif, 3 × 4 × 2 = 24 menus.",
    coteProf: "« Je prends X ET Y » → multiplication ; « X OU Y, pas les deux » → addition.",
  },
  {
    id: "ma-07-copie-remise",
    copie: "Pour compter les podiums or/argent/bronze parmi 5 élèves, un candidat écrit : « 5 × 5 × 5 = 125 podiums ».",
    correcte: false,
    verdict: "À corriger : un élève déjà médaillé n'est plus disponible (sans remise), donc A(5, 3) = 5 × 4 × 3 = 60 podiums.",
    coteProf: "Question clé : le même élément peut-il apparaître deux fois ? Si non, sans remise.",
  },
  {
    id: "ma-07-copie-arrangement-permutation",
    copie: "Pour distribuer 3 rôles distincts parmi 5 élèves, un candidat écrit : « 5! = 120 façons ».",
    correcte: false,
    verdict: "À corriger : on ne prend que p = 3 parmi n = 5, pas tous. A(5, 3) = 5 × 4 × 3 = 60 façons.",
    coteProf: "Permutation (n!) : on ordonne TOUS les éléments. Arrangement : on en prend p parmi n.",
  },
  {
    id: "ma-07-copie-double-comptage",
    copie: "Pour compter les élèves concernés (16 font du latin, 14 du théâtre, 5 les deux), un candidat écrit : « 16 + 14 = 30 élèves ».",
    correcte: false,
    verdict: "À corriger : les 5 qui font les deux sont comptés deux fois. 16 + 14 − 5 = 25 élèves.",
    coteProf: "Le principe additif simple ne vaut que si les ensembles sont disjoints.",
  },
  {
    id: "ma-07-copie-groupe-classement",
    copie: "Pour compter les binômes de 2 élèves (sans rôle distinct) parmi 5, un candidat écrit : « A(5, 2) = 5 × 4 = 20 binômes ».",
    correcte: false,
    verdict: "À corriger : sans rôle distinct, {X, Y} = {Y, X} sont comptés deux fois. 20 ÷ 2 = 10 binômes.",
    coteProf: "Rôles distincts → arrangement ; groupe sans hiérarchie → diviser par les permutations des éléments choisis.",
  },
  {
    id: "ma-07-copie-multiplicatif-correct",
    copie: "Pour compter les tenues avec 3 hauts et 4 pantalons, un candidat écrit : « 3 × 4 = 12 tenues ».",
    correcte: true,
    verdict: "C'est juste : on choisit un haut ET un pantalon, choix indépendants et cumulatifs, donc principe multiplicatif.",
  },
  {
    id: "ma-07-copie-arrangement-correct",
    copie: "Pour un podium de 3 places parmi 5 élèves, un candidat écrit : « A(5, 3) = 5 × 4 × 3 = 60 podiums ».",
    correcte: true,
    verdict: "C'est juste : l'ordre compte (places distinctes), sans remise, p = 3 parmi n = 5.",
  },
];
