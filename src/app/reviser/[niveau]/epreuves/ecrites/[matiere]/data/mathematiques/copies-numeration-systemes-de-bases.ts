type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_NUMERATION_SYSTEMES_DE_BASES: CopieACorriger[] = [
  {
    id: "ma-01-copie-indice-base",
    copie: "Pour « 1101₂ », un candidat écrit : « c'est le nombre mille cent un ».",
    correcte: false,
    verdict: "À corriger : le ₂ indique la base 2, ce nombre vaut **13** en décimal, pas 1101.",
    coteProf: "Erreur typique : ne pas repérer l'indice avant de calculer. Sans indice → base 10.",
  },
  {
    id: "ma-01-copie-lecture-binaire",
    copie: "Pour « 1101₂ », un candidat écrit : « 1101₂ = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8+4+0+1 = 13 ».",
    correcte: true,
    verdict: "C'est juste : les positions sont bien numérotées de droite à gauche, et le calcul donne **13**.",
  },
  {
    id: "ma-01-copie-restes-haut-bas",
    copie: "Pour convertir 13 en base 2, un candidat obtient les restes 1,0,1,1 et conclut : « Résultat : **1011₂** ».",
    correcte: false,
    verdict: "À corriger : on lit les restes de BAS en HAUT → **1101₂**. Vérification : 8+4+0+1 = 13 ✓",
    coteProf: "Les divisions sont correctes, mais le sens de lecture est inversé.",
  },
  {
    id: "ma-01-copie-restes-bas-haut",
    copie: "Pour convertir 13 en base 2, un candidat écrit : « restes lus de bas en haut : 1,1,0,1 → **1101₂** ».",
    correcte: true,
    verdict: "C'est juste : le premier reste est en position 0, donc il va à droite ; le dernier reste va à gauche.",
  },
  {
    id: "ma-01-copie-zero-intercalaire",
    copie: "Pour convertir 45 en binaire, un candidat écrit : « 45 = 32+8+4+1 → **10111₂** ».",
    correcte: false,
    verdict: "À corriger : positions occupées : 5,3,2,0 → positions vides : 4 et 1 → **101101₂**.",
    coteProf: "Le candidat oublie les zéros intercalaires : il faut lister toutes les positions de la plus haute à 0.",
  },
  {
    id: "ma-01-copie-position-vide",
    copie: "Pour 45 en binaire, un candidat écrit : « 45 = 32+8+4+1 = 2⁵+2³+2²+2⁰, donc **101101₂** ».",
    correcte: true,
    verdict: "C'est juste : les positions 5,3,2,0 portent un 1, et les positions 4 et 1 portent un 0.",
  },
];
