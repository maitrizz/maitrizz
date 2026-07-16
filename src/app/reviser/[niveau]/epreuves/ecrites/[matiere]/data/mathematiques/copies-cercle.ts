type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_CERCLE: CopieACorriger[] = [
  {
    id: "ma-20-copie-rayon-diametre",
    copie: "Un cercle a un diamètre de 10 cm. Un candidat écrit : « périmètre = 2π × 10 = 20π ».",
    correcte: false,
    verdict: "À corriger : 2πr utilise le rayon. r = 10 ÷ 2 = 5, donc périmètre = 2π × 5 = 10π ≈ 31,4 cm.",
    coteProf: "Quand l'énoncé donne un diamètre, diviser par 2 avant tout calcul.",
  },
  {
    id: "ma-20-copie-arc",
    copie: "Angle au centre AOB = 80°, M sur l'arc mineur. Un candidat écrit : « angle AMB = 80° ÷ 2 = 40° ».",
    correcte: false,
    verdict: "À corriger : le théorème (moitié de l'angle au centre) vaut sur l'arc majeur. Sur l'arc mineur, AMB = 180° − 40° = 140°.",
    coteProf: "Faire un schéma pour situer M avant d'appliquer le théorème.",
  },
  {
    id: "ma-20-copie-inscrit-circonscrit",
    copie: "Un candidat écrit : « Pour le cercle inscrit, je trace les médiatrices ; leur intersection est le centre ».",
    correcte: false,
    verdict: "À corriger : les médiatrices donnent le cercle circonscrit (qui passe par les sommets). Le cercle inscrit a pour centre l'intersection des bissectrices (tangent aux côtés).",
    coteProf: "Mémo : inscrIT → bIssectrIces ; cIrconscrIt → médIatrIces.",
  },
  {
    id: "ma-20-copie-tangente",
    copie: "Un candidat écrit : « La tangente en T est perpendiculaire à la corde [TA] ».",
    correcte: false,
    verdict: "À corriger : la tangente est perpendiculaire au rayon OT, pas à une corde quelconque passant par T.",
    coteProf: "Tangente ⊥ rayon uniquement. Ne pas confondre rayon et corde.",
  },
  {
    id: "ma-20-copie-angle-correct",
    copie: "Angle au centre AOB = 110°, M sur l'arc majeur. Un candidat écrit : « angle inscrit AMB = 110° ÷ 2 = 55° ».",
    correcte: true,
    verdict: "C'est juste : sur l'arc majeur, l'angle inscrit vaut la moitié de l'angle au centre, soit 55°.",
  },
  {
    id: "ma-20-copie-tangente-correct",
    copie: "Cercle de rayon 5, tangente en T, A sur la tangente avec AT = 12. Un candidat écrit : « OTA rectangle en T, OA² = 25 + 144 = 169, OA = 13 ».",
    correcte: true,
    verdict: "C'est juste : la tangente est perpendiculaire au rayon, donc Pythagore donne OA = 13 (triplet 5-12-13).",
  },
];
