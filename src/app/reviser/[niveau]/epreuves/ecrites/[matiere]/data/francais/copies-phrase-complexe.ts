// Banque de copies à corriger, notion 05 « La phrase complexe et sa ponctuation ».
//
// Copies dérivées des pièges du cours v1 et/ou du matériel de détection d'erreur existant.
// Mélange volontaire de réponses justes et fausses.

type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_PHRASE_COMPLEXE: CopieACorriger[] = [
  {
    id: "fr-05-cop-01",
    copie: "Un candidat affirme : « Elle passa, tenant son enfant » analysé comme deux propositions.",
    correcte: false,
    verdict: "« tenant » est un participe présent non conjugué : il n'y a qu'**une seule proposition**. Seuls les verbes conjugués comptent.",
    coteProf: "Souligner uniquement les verbes conjugués. Infinitif, participe et gérondif ne comptent pas, sauf sujet propre distinct.",
  },
  {
    id: "fr-05-cop-02",
    copie: "Un candidat affirme : Analyser systématiquement « que » comme une conjonction de subordination.",
    correcte: false,
    verdict: "Chercher un antécédent : antécédent présent → **pronom relatif** (relative) ; pas d'antécédent → **conjonction** (complétive).",
    coteProf: "« le livre que je lis » (antécédent « livre » : relatif) ; « Je sais que… » (pas d'antécédent : conjonction).",
  },
  {
    id: "fr-05-cop-03",
    copie: "Un candidat affirme : « pour regarder les nuages » analysé comme une subordonnée infinitive.",
    correcte: false,
    verdict: "Il faut **deux conditions** : un verbe de perception ou factitif, et un sujet propre distinct. Ici, « monter » n'est pas un verbe de perception et le sujet est le même : c'est un groupe infinitif, CC de but.",
    coteProf: "Vérifier les deux critères avant de conclure : verbe introducteur de perception ou factitif, et sujet propre distinct.",
  },
  {
    id: "fr-05-cop-04",
    copie: "Un candidat affirme : « Elle passa, tenant son enfant » analysé comme une subordonnée participiale.",
    correcte: false,
    verdict: "Le sujet de « tenant » est « elle », le même que celui de « passa » : c'est une **épithète détachée**. La participiale exige un sujet propre distinct.",
    coteProf: "Comparer le sujet du participe et celui de la principale. Même sujet : épithète détachée. Sujet distinct : participiale.",
  },
  {
    id: "fr-05-cop-05",
    copie: "Réponse d'un candidat : « **Elle passa, tenant son enfant** » → deux propositions : principale + subordonnée participiale.",
    correcte: false,
    verdict: "À corriger : Erreur : subordonnée participiale annoncée sans sujet propre distinct\n- Le sujet de « tenant » est « elle », le même que celui de « passa »\n- Réponse attendue : une seule proposition ; « tenant son enfant » = groupe participial, épithète détachée du sujet « elle »",
  },
  {
    id: "fr-05-cop-06",
    copie: "Un candidat affirme : « tenant » est un participe présent non conjugué : il n'y a qu'**une seule proposition**. Seuls les verbes conjugués comptent.",
    correcte: true,
    verdict: "C'est juste : « tenant » est un participe présent non conjugué : il n'y a qu'**une seule proposition**. Seuls les verbes conjugués comptent.",
    coteProf: "Souligner uniquement les verbes conjugués. Infinitif, participe et gérondif ne comptent pas, sauf sujet propre distinct.",
  },
  {
    id: "fr-05-cop-07",
    copie: "Un candidat affirme : Chercher un antécédent : antécédent présent → **pronom relatif** (relative) ; pas d'antécédent → **conjonction** (complétive).",
    correcte: true,
    verdict: "C'est juste : Chercher un antécédent : antécédent présent → **pronom relatif** (relative) ; pas d'antécédent → **conjonction** (complétive).",
    coteProf: "« le livre que je lis » (antécédent « livre » : relatif) ; « Je sais que… » (pas d'antécédent : conjonction).",
  },
  {
    id: "fr-05-cop-08",
    copie: "Un candidat affirme : Il faut **deux conditions** : un verbe de perception ou factitif, et un sujet propre distinct. Ici, « monter » n'est pas un verbe de perception et le sujet est le même : c'est un groupe infinitif, CC de but.",
    correcte: true,
    verdict: "C'est juste : Il faut **deux conditions** : un verbe de perception ou factitif, et un sujet propre distinct. Ici, « monter » n'est pas un verbe de perception et le sujet est le même : c'est un groupe infinitif, CC de but.",
    coteProf: "Vérifier les deux critères avant de conclure : verbe introducteur de perception ou factitif, et sujet propre distinct.",
  },
];
