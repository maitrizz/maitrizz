type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_DROITES_ANGLES_PARALLELISME: CopieACorriger[] = [
  {
    id: "ma-18-copie-alternes",
    copie: "Sur deux parallèles coupées par une sécante, un candidat désigne comme alternes-internes deux angles situés du même côté de la sécante.",
    correcte: false,
    verdict: "À corriger : les angles du même côté sont correspondants (en F). Les alternes-internes sont de part et d'autre de la sécante, entre les droites (en Z).",
    coteProf: "Les deux sont égaux si les droites sont parallèles, mais leur position diffère.",
  },
  {
    id: "ma-18-copie-quadrilatere",
    copie: "Un quadrilatère a trois angles de 80°, 95°, 110°. Un candidat écrit : « 4e angle = 180° − 80° − 95° − 110° = −105° ».",
    correcte: false,
    verdict: "À corriger : la somme d'un quadrilatère est (4 − 2) × 180° = 360°. 4e angle = 360° − 285° = 75°. (Un angle négatif signale l'erreur.)",
    coteProf: "Toujours calculer (n − 2) × 180° avant de soustraire.",
  },
  {
    id: "ma-18-copie-opposes",
    copie: "Deux droites se coupent, un angle vaut 70°. Un candidat écrit : « l'angle opposé par le sommet vaut 180° − 70° = 110° ».",
    correcte: false,
    verdict: "À corriger : les angles opposés par le sommet sont égaux, donc 70°. Ce sont les angles adjacents qui valent 110°.",
    coteProf: "Autour d'une intersection : deux paires d'angles égaux, somme totale 360°.",
  },
  {
    id: "ma-18-copie-mediatrice",
    copie: "Un candidat trace une perpendiculaire à [AB], mais pas en son milieu, et l'appelle « médiatrice de [AB] ».",
    correcte: false,
    verdict: "À corriger : la médiatrice est perpendiculaire à [AB] ET passe par son milieu. Les deux conditions sont nécessaires.",
    coteProf: "La construction au compas (arcs de même rayon depuis A et B) donne automatiquement les deux.",
  },
  {
    id: "ma-18-copie-triangle-correct",
    copie: "Un triangle a deux angles de 47° et 83°. Un candidat écrit : « le troisième vaut 180° − 47° − 83° = 50° ».",
    correcte: true,
    verdict: "C'est juste : la somme des angles d'un triangle vaut 180°, donc le troisième est 50°.",
  },
  {
    id: "ma-18-copie-alternes-correct",
    copie: "Deux droites parallèles coupées par une sécante ; un angle vaut 65°. Un candidat écrit : « son alterne-interne vaut aussi 65° ».",
    correcte: true,
    verdict: "C'est juste : les angles alternes-internes sont égaux quand les droites sont parallèles.",
  },
];
