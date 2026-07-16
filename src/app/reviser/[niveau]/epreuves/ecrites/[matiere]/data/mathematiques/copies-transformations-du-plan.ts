type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_TRANSFORMATIONS_DU_PLAN: CopieACorriger[] = [
  {
    id: "ma-24-copie-diagonales",
    copie: "Un candidat écrit : « Un rectangle a 4 axes de symétrie : les 2 diagonales et les 2 médianes ».",
    correcte: false,
    verdict: "À corriger : par réflexion autour d'une diagonale, un rectangle non carré ne se superpose pas à lui-même. Il a 2 axes (les médianes parallèles aux côtés).",
    coteProf: "Les diagonales sont axes de symétrie uniquement pour le losange et le carré.",
  },
  {
    id: "ma-24-copie-orientation",
    copie: "Un candidat écrit : « La symétrie axiale est une isométrie, donc elle conserve l'orientation comme la translation ».",
    correcte: false,
    verdict: "À corriger : la symétrie axiale inverse l'orientation (un triangle antihoraire devient horaire). C'est la seule isométrie inversante.",
    coteProf: "Penser au miroir : il retourne l'image. Translation, rotation et symétrie centrale conservent l'orientation.",
  },
  {
    id: "ma-24-copie-un-point",
    copie: "Voyant A(1, 3) → A'(1, −3), un candidat conclut : « C'est une symétrie d'axe y = 0 ».",
    correcte: false,
    verdict: "À corriger : un seul point ne suffit pas. Ici la symétrie d'axe y = 0 et la symétrie de centre (1, 0) coïncident. Il faut tester d'autres points avant de conclure.",
    coteProf: "Toujours vérifier la transformation sur plusieurs points.",
  },
  {
    id: "ma-24-copie-homothetie",
    copie: "Un candidat écrit : « Après une homothétie de rapport 3, les angles sont multipliés par 3 comme les longueurs ».",
    correcte: false,
    verdict: "À corriger : une homothétie conserve les angles. Seules les longueurs sont multipliées par |k| (×3) et les aires par k² (×9). La figure image est semblable.",
    coteProf: "Homothétie : longueurs ×k, aires ×k², angles inchangés.",
  },
  {
    id: "ma-24-copie-centrale-correct",
    copie: "O(3, 1), M(5, 4). Pour le symétrique de M par rapport à O, un candidat écrit : « M' = (2×3 − 5, 2×1 − 4) = (1, −2) ».",
    correcte: true,
    verdict: "C'est juste : la formule M' = (2a − x, 2b − y) donne (1, −2), et le milieu de [MM'] est bien O.",
  },
  {
    id: "ma-24-copie-translation-correct",
    copie: "Pour l'image de M(1, 4) par la translation de vecteur v⃗ = (3, −2), un candidat écrit : « M'(1 + 3, 4 − 2) = (4, 2) ».",
    correcte: true,
    verdict: "C'est juste : on ajoute les composantes du vecteur aux coordonnées de M, soit (4, 2).",
  },
];
