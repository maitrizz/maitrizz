// PROTOTYPE — Banque de « copies à corriger », notion 01 « Classes grammaticales ».
//
// On se met dans le siège du CORRECTEUR : on lit l'analyse d'un candidat, on tranche
// (juste / à corriger), puis on dévoile. IMPORTANT : certaines copies sont VOLONTAIREMENT
// JUSTES, pour qu'on ne réponde pas « à corriger » machinalement. La ligne « côté
// correcteur » n'est présente que quand elle apporte (l'erreur typique, le test attendu).
//
// Curé et vérifié à la main (banque grammaticale, terminologie 2020).

type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_CLASSES_GRAMMATICALES: CopieACorriger[] = [
  {
    id: "fr-01-cop-vite",
    copie: "Pour « Il court vite », un candidat écrit : « *vite* est un **adjectif** ».",
    correcte: false,
    verdict: "À corriger : « vite » est un **adverbe** (invariable, il modifie le verbe « court »).",
    coteProf: "Le candidat se fie au sens. Le test qui tranche : tenter l'accord (« elles courent vite », jamais « vites »).",
  },
  {
    id: "fr-01-cop-demain",
    copie: "Pour « Ils partiront demain », un candidat écrit : « *demain* est un **adverbe** ».",
    correcte: true,
    verdict: "C'est juste : « demain » est bien un **adverbe** (de temps), invariable, il modifie « partiront ».",
  },
  {
    id: "fr-01-cop-cette",
    copie: "Pour « cette idée », un candidat écrit : « *cette* est un **adjectif démonstratif** ».",
    correcte: false,
    verdict: "À corriger : « cette » est un **déterminant démonstratif** (terminologie 2020).",
    coteProf: "Erreur d'ancienne terminologie, lourdement sanctionnée : ce qui introduit un nom sans le qualifier est un déterminant.",
  },
  {
    id: "fr-01-cop-trois",
    copie: "Pour « trois enfants », un candidat écrit : « *trois* est un **déterminant numéral** ».",
    correcte: true,
    verdict: "C'est juste : depuis 2020, le numéral cardinal est un **déterminant** (et non un « adjectif numéral »).",
    coteProf: "Beaucoup voudraient le « corriger » en adjectif : ne tombez pas dans le piège, le candidat a raison.",
  },
  {
    id: "fr-01-cop-le",
    copie: "Pour « Je le vois », un candidat écrit : « *le* est un **article** ».",
    correcte: false,
    verdict: "À corriger : « le » est un **pronom personnel** (COD : il remplace un nom et précède le verbe).",
    coteProf: "Le test : un article précède un **nom** (« le chien ») ; ici « le » précède le **verbe** et tient lieu d'un nom.",
  },
  {
    id: "fr-01-cop-que",
    copie: "Pour « la maison que je vois », un candidat écrit : « *que* est un **pronom relatif** ».",
    correcte: true,
    verdict: "C'est juste : « que » a pour antécédent « la maison » qu'il remplace (COD de « vois »).",
  },
  {
    id: "fr-01-cop-ecrire",
    copie: "Pour « Écrire est difficile », un candidat écrit : « *Écrire* est un **nom**, puisqu'il est sujet ».",
    correcte: false,
    verdict: "À corriger : « Écrire » reste un **verbe à l'infinitif**, même employé comme sujet.",
    coteProf: "Le candidat déduit la nature de la fonction : l'erreur de raisonnement classique. Sans déterminant devant lui, un infinitif reste un verbe.",
  },
  {
    id: "fr-01-cop-mien",
    copie: "Pour « C'est le mien », un candidat écrit : « *mien* est un **déterminant possessif** ».",
    correcte: false,
    verdict: "À corriger : « mien » est un **pronom possessif** (« le mien » remplace un nom).",
    coteProf: "Le déterminant possessif (mon, ma, mes) précède un nom ; le pronom possessif le remplace.",
  },
];
