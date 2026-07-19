type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_TRIANGLES_QUADRILATERES_POLYGONES: CopieACorriger[] = [
  {
    id: "ma-19-copie-inegalite",
    copie: "Un candidat écrit : « 3, 4 et 7 forment un triangle car 7 = 3 + 4 ».",
    correcte: false,
    verdict: "À corriger : l'inégalité triangulaire est stricte. 7 < 3 + 4 est faux (7 = 7) : les points sont alignés, pas de triangle.",
    coteProf: "Comparer le plus grand côté à la somme des deux autres, avec une inégalité STRICTE.",
  },
  {
    id: "ma-19-copie-cca",
    copie: "Un candidat écrit : « Deux triangles ont deux côtés égaux et un angle égal, donc ils sont égaux ».",
    correcte: false,
    verdict: "À corriger : si l'angle n'est pas compris entre les deux côtés (CCA), on ne peut pas conclure. Les cas valides sont CCC, CAC (angle compris) et ACA.",
    coteProf: "Vérifier la position de l'angle (compris ou non) avant de conclure.",
  },
  {
    id: "ma-19-copie-hierarchie",
    copie: "Un candidat écrit : « Un rectangle est un carré aux angles droits, donc tout rectangle est un carré ».",
    correcte: false,
    verdict: "À corriger : c'est l'inverse. Tout carré est un rectangle (et un losange), mais un rectangle n'est pas forcément un carré.",
    coteProf: "Le carré est un cas particulier, jamais le cas général.",
  },
  {
    id: "ma-19-copie-caracteristique",
    copie: "Un candidat écrit : « Les côtés opposés d'ABCD sont égaux, donc ABCD est un rectangle ».",
    correcte: false,
    verdict: "À corriger : côtés opposés égaux caractérise le parallélogramme, pas le rectangle. Pour un rectangle : un angle droit, ou des diagonales égales.",
    coteProf: "Pour conclure à une figure précise, utiliser sa propriété caractéristique.",
  },
  {
    id: "ma-19-copie-inegalite-correct",
    copie: "Un candidat écrit : « 3, 5, 7 forment un triangle car 7 < 3 + 5 = 8 ; il est scalène ».",
    correcte: true,
    verdict: "C'est juste : le plus grand côté (7) est strictement inférieur à la somme des deux autres (8), et les trois côtés sont différents.",
  },
  {
    id: "ma-19-copie-parallelogramme-correct",
    copie: "Un candidat écrit : « Les diagonales d'ABCD se coupent en leur milieu, donc ABCD est un parallélogramme ».",
    correcte: true,
    verdict: "C'est juste : des diagonales de même milieu constituent une propriété caractéristique du parallélogramme.",
  },
];
