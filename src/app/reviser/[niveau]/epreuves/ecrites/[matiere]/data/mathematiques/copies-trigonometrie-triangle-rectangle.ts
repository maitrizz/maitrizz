type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_TRIGONOMETRIE_TRIANGLE_RECTANGLE: CopieACorriger[] = [
  {
    id: "ma-23-copie-opp-adj",
    copie: "Triangle ABC rectangle en C, angle en A = 30°, on cherche AC (adjacent). Un candidat écrit : « sin 30° = AC/AB, donc AC = AB × sin 30° ».",
    correcte: false,
    verdict: "À corriger : AC est le côté adjacent à l'angle en A, pas l'opposé. AC/AB est un cosinus : cos 30° = AC/AB → AC = AB × √3/2.",
    coteProf: "Annoter Hyp, Opp, Adj sur le schéma par rapport à l'angle de référence avant de choisir la formule.",
  },
  {
    id: "ma-23-copie-radians",
    copie: "Un candidat écrit : « sin 30° = −0,988 » (lu sur la calculatrice).",
    correcte: false,
    verdict: "À corriger : la calculatrice est en mode radians (RAD). En mode DEG, sin 30° = 0,5.",
    coteProf: "Un résultat aberrant (> 1 ou négatif pour un angle aigu) trahit le mode RAD.",
  },
  {
    id: "ma-23-copie-sin-longueur",
    copie: "Un candidat écrit : « sin 50° = AC, donc AC ≈ 0,766 cm ».",
    correcte: false,
    verdict: "À corriger : sin α est un rapport sans unité (entre 0 et 1 pour un angle aigu), pas une longueur. On écrit sin 50° = AC/hyp.",
    coteProf: "On écrit toujours sin α = rapport, jamais sin α = longueur.",
  },
  {
    id: "ma-23-copie-arcsin",
    copie: "sin α = 0,6, on cherche α. Un candidat écrit : « α = 1/sin(0,6) ≈ 1,76 ».",
    correcte: false,
    verdict: "À corriger : arcsin (sin⁻¹) est la fonction réciproque, pas 1/sin. α = arcsin(0,6) ≈ 36,87°.",
    coteProf: "Sur la calculatrice : touche 2nd ou SHIFT, puis sin.",
  },
  {
    id: "ma-23-copie-longueur-correct",
    copie: "Hypoténuse 12, angle aigu 60°. Pour le côté opposé, un candidat écrit : « opposé = 12 × sin 60° = 12 × √3/2 = 6√3 ».",
    correcte: true,
    verdict: "C'est juste : côté opposé et hypoténuse connue, on utilise le sinus, soit 6√3 ≈ 10,39 cm.",
  },
  {
    id: "ma-23-copie-identite-correct",
    copie: "α aigu et cos α = 4/5. Un candidat écrit : « sin²α = 1 − 16/25 = 9/25 → sin α = 3/5 ».",
    correcte: true,
    verdict: "C'est juste : par sin²α + cos²α = 1, sin α = 3/5 (racine positive car α est aigu ; triplet 3-4-5).",
  },
];
