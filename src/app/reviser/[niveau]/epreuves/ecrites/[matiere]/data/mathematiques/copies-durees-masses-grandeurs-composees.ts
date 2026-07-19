type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_DUREES_MASSES_GRANDEURS_COMPOSEES: CopieACorriger[] = [
  {
    id: "ma-16-copie-heure-decimale",
    copie: "Pour la vitesse sur 210 km en 2h 30min, un candidat écrit : « v = 210 ÷ 2,3 ≈ 91,3 km/h ».",
    correcte: false,
    verdict: "À corriger : 2h 30min = 2 + 30/60 = 2,5 h (pas 2,3). v = 210 ÷ 2,5 = 84 km/h.",
    coteProf: "Repères : 30min = 0,5 h ; 15min = 0,25 h ; 20min = 0,333 h.",
  },
  {
    id: "ma-16-copie-addition-durees",
    copie: "Pour 3h 45min + 1h 30min, un candidat écrit : « 3,45 + 1,30 = 4,75 h = 4h 75min ».",
    correcte: false,
    verdict: "À corriger : on travaille en base 60. 3h 45min + 1h 30min = 4h 75min, et 75 min = 1h 15min, donc 5h 15min.",
    coteProf: "Quand les minutes dépassent 60, retirer 60 et ajouter 1 h.",
  },
  {
    id: "ma-16-copie-ms-kmh",
    copie: "Pour convertir 15 m/s en km/h, un candidat écrit : « 15 × 100 = 1 500 km/h ».",
    correcte: false,
    verdict: "À corriger : m/s → km/h se fait par × 3,6. 15 × 3,6 = 54 km/h (1 m/s = 3 600 m/h = 3,6 km/h).",
    coteProf: "m/s → km/h : × 3,6 ; km/h → m/s : ÷ 3,6.",
  },
  {
    id: "ma-16-copie-unite-debit",
    copie: "Débit 3 L/min, cuve de 540 L. Un candidat écrit : « t = 540 ÷ 3 = 180 heures ».",
    correcte: false,
    verdict: "À corriger : le débit est en L/min, donc t = 180 minutes (soit 3 h), pas 180 heures. L ÷ (L/min) = min.",
    coteProf: "Toujours vérifier l'unité du résultat avant de conclure.",
  },
  {
    id: "ma-16-copie-vitesse-correct",
    copie: "Pour un train de 240 km en 1h 36min, un candidat écrit : « 1h 36min = 1,6 h → v = 240 ÷ 1,6 = 150 km/h ».",
    correcte: true,
    verdict: "C'est juste : 36 ÷ 60 = 0,6, donc 1,6 h, et v = 240 ÷ 1,6 = 150 km/h.",
  },
  {
    id: "ma-16-copie-masse-volumique-correct",
    copie: "Pour un bloc de volume 100 cm³ et de masse 270 g, un candidat écrit : « ρ = 270 ÷ 100 = 2,7 g/cm³ ».",
    correcte: true,
    verdict: "C'est juste : ρ = m ÷ V = 270 ÷ 100 = 2,7 g/cm³ (proche de l'aluminium).",
  },
];
