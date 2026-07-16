type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_SOLIDES_PATRONS_REPRESENTATION: CopieACorriger[] = [
  {
    id: "ma-25-copie-aire-totale",
    copie: "Pour l'aire totale d'un cube de côté 5 cm, un candidat écrit : « 5 × 5 = 25 cm² ».",
    correcte: false,
    verdict: "À corriger : 25 cm² est l'aire d'une seule face. Le cube en a 6 : aire totale = 6 × 5² = 150 cm².",
    coteProf: "Aire totale = aire latérale + aires des bases : toujours compter le nombre de faces.",
  },
  {
    id: "ma-25-copie-euler-cylindre",
    copie: "Un candidat vérifie la formule d'Euler pour un cylindre : « 0 sommet + 2 faces = 1 arête + 2 ? ».",
    correcte: false,
    verdict: "À corriger : la formule d'Euler ne s'applique pas au cylindre. Cylindre, cône et sphère ont des faces courbes : ce ne sont pas des polyèdres.",
    coteProf: "Euler : prismes et pyramides uniquement.",
  },
  {
    id: "ma-25-copie-hauteur-prisme",
    copie: "Pour une face latérale d'un prisme à base carrée de côté 4 et de hauteur 8, un candidat écrit : « 8 × 8 = 64 cm² ».",
    correcte: false,
    verdict: "À corriger : chaque face latérale est un rectangle de largeur = côté de base (4) et de hauteur = hauteur du prisme (8), soit 32 cm².",
    coteProf: "Aire latérale d'un prisme = périmètre de la base × hauteur du prisme.",
  },
  {
    id: "ma-25-copie-un-patron",
    copie: "Un candidat écrit : « Un solide n'a qu'un patron, donc entre ces deux patrons l'un est forcément faux ».",
    correcte: false,
    verdict: "À corriger : un solide peut avoir plusieurs patrons valides (un cube en admet 11). La question est « est-ce UN patron valide », pas « est-ce LE patron ».",
    coteProf: "Valider un patron : faces présentes une fois, dimensions cohérentes, arêtes partagées.",
  },
  {
    id: "ma-25-copie-euler-correct",
    copie: "Un polyèdre a 10 sommets et 7 faces. Un candidat écrit : « S + F = A + 2 → 10 + 7 = A + 2 → A = 15 ».",
    correcte: true,
    verdict: "C'est juste : la formule d'Euler donne A = 17 − 2 = 15 arêtes.",
  },
  {
    id: "ma-25-copie-aire-laterale-correct",
    copie: "Pour l'aire latérale d'un prisme à base carrée de côté 4 cm et de hauteur 10 cm, un candidat écrit : « (4 × 4) × 10 = 160 cm² ».",
    correcte: true,
    verdict: "C'est juste : aire latérale = périmètre de base (16 cm) × hauteur (10 cm) = 160 cm².",
  },
];
