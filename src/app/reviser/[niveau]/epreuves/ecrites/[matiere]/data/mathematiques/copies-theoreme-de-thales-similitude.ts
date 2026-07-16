type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_THEOREME_DE_THALES_SIMILITUDE: CopieACorriger[] = [
  {
    id: "ma-22-copie-rapports-inverses",
    copie: "Pour Thalès (configuration triangle), un candidat écrit : « SA/SB = SB'/SA' ».",
    correcte: false,
    verdict: "À corriger : un rapport a été inversé. La bonne écriture est SA/SB = SA'/SB' (chaque rapport sur la même sécante, dans le même sens depuis S).",
    coteProf: "Vérifier que numérateur et dénominateur appartiennent à la même droite, dans le même sens.",
  },
  {
    id: "ma-22-copie-aire-k",
    copie: "Deux triangles semblables, k = 3, le premier a une aire de 10 cm². Un candidat écrit : « aire du second = 3 × 10 = 30 cm² ».",
    correcte: false,
    verdict: "À corriger : les aires sont multipliées par k² = 9, pas par k. Aire du second = 9 × 10 = 90 cm².",
    coteProf: "Longueurs ×k, aires ×k², volumes ×k³ : la dimension donne la puissance.",
  },
  {
    id: "ma-22-copie-ordre",
    copie: "Sur une sécante, l'ordre est S, B, A. Un candidat écrit tout de même : « SA/SB = SA'/SB' ».",
    correcte: false,
    verdict: "À corriger : Thalès exige l'ordre S, point proche, point éloigné. Si l'ordre réel est S, B, A, les rapports doivent être écrits en conséquence.",
    coteProf: "Annoter la figure et noter l'ordre des points depuis S avant d'écrire le moindre rapport.",
  },
  {
    id: "ma-22-copie-reciproque-nommee",
    copie: "Après avoir montré que SA/SB = SA'/SB', un candidat écrit : « Donc (AA') et (BB') sont parallèles car les rapports sont égaux ».",
    correcte: false,
    verdict: "À corriger (justification incomplète) : il faut nommer la propriété. « D'après la réciproque du théorème de Thalès, (AA') ∥ (BB'). »",
    coteProf: "Nommer le théorème : « Thalès » pour calculer, « réciproque du théorème de Thalès » pour le parallélisme.",
  },
  {
    id: "ma-22-copie-longueur-correct",
    copie: "(AA') ∥ (BB'), SA = 4, SB = 10, SA' = 6. Un candidat écrit : « 4/10 = 6/SB' → SB' = 6 × 10/4 = 15 ».",
    correcte: true,
    verdict: "C'est juste : chaque rapport est écrit sur une même sécante, et le produit en croix donne SB' = 15.",
  },
  {
    id: "ma-22-copie-reciproque-correct",
    copie: "SA = 5, SB = 15, SA' = 6, SB' = 18 (points dans l'ordre). Un candidat écrit : « 5/15 = 6/18 = 1/3, donc (AA') ∥ (BB') par la réciproque du théorème de Thalès ».",
    correcte: true,
    verdict: "C'est juste : les rapports sont égaux et la conclusion nomme correctement la réciproque du théorème de Thalès.",
  },
];
