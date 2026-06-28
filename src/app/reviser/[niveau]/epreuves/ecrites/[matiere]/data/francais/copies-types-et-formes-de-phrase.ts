// Banque de copies à corriger, notion 06 « Types et formes de phrase ».
//
// On se met dans le siège du CORRECTEUR : on lit l'analyse d'un candidat, on tranche
// (juste / à corriger), puis on dévoile. Mélange volontaire de copies justes ET fausses.
// Curé à la main (terminologie 2020).

type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_TYPES_ET_FORMES_DE_PHRASE: CopieACorriger[] = [
  {
    id: "fr-06-cop-quel-exclam",
    copie: "Pour « Quel courage il a montré ! », un candidat écrit : « phrase de type **interrogatif** (présence de *quel*) ».",
    correcte: false,
    verdict: "À corriger : la phrase est de type **exclamatif** (point d'exclamation, mot exclamatif *quel*). Elle n'attend aucune réponse.",
    coteProf: "*quel* est ici exclamatif, pas interrogatif : c'est la ponctuation finale qui tranche.",
  },
  {
    id: "fr-06-cop-sors-injonctif",
    copie: "Pour « Sors immédiatement ! », un candidat écrit : « type **exclamatif**, à cause du point d'exclamation ».",
    correcte: false,
    verdict: "À corriger : la phrase donne un ordre, elle est de type **injonctif**. Un simple point d'exclamation ne suffit pas à rendre une phrase exclamative.",
    coteProf: "Le type se lit sur ce que **fait** la phrase (ici : ordonner), pas seulement sur la ponctuation.",
  },
  {
    id: "fr-06-cop-jamais-totale",
    copie: "Pour « Il ne vient jamais. », un candidat écrit : « forme négative, négation **totale** ».",
    correcte: false,
    verdict: "À corriger : c'est une négation **partielle** : *ne… jamais* porte sur le temps, pas sur tout le propos. Seule *ne… pas / point* est une négation totale.",
  },
  {
    id: "fr-06-cop-ne-que-restriction",
    copie: "Pour « Je n'ai qu'un euro. », un candidat écrit : « forme négative (négation partielle) ».",
    correcte: false,
    verdict: "À corriger : *ne… que* n'est **pas** une négation, c'est une **restriction** (= seulement). La phrase est **affirmative restrictive** : « j'ai seulement un euro ».",
    coteProf: "Test : remplacer par *seulement*. Si le sens tient, c'est une restriction, pas une négation.",
  },
  {
    id: "fr-06-cop-viendras-totale",
    copie: "Pour « Viendras-tu demain ? », un candidat écrit : « interrogation **partielle** ».",
    correcte: false,
    verdict: "À corriger : c'est une interrogation **totale** (réponse oui / non). Aucun mot interrogatif ne porte sur un élément précis : *demain* n'en est pas un.",
    coteProf: "Registre soutenu (inversion *viendras-tu*) : l'axe totale/partielle et l'axe du registre sont indépendants, on donne les deux.",
  },
  {
    id: "fr-06-cop-comme-exclam",
    copie: "Pour « Comme cette histoire est triste ! », un candidat écrit : « type **exclamatif** (mot exclamatif *comme*, point d'exclamation) ».",
    correcte: true,
    verdict: "C'est juste : type **exclamatif**, marqué par *comme* et le point d'exclamation. La phrase exprime un sentiment, sans attendre de réponse.",
  },
  {
    id: "fr-06-cop-ou-partielle",
    copie: "Pour « Où as-tu rangé les clés ? », un candidat écrit : « interrogation **partielle** (porte sur le lieu), registre **soutenu** (inversion *as-tu*) ».",
    correcte: true,
    verdict: "C'est juste : interrogation **partielle** (le mot interrogatif *où* porte sur le lieu) et registre **soutenu** (inversion du sujet). Les deux axes sont bien donnés.",
  },
  {
    id: "fr-06-cop-cest-paul-emphase",
    copie: "Pour « C'est Paul qui a tout organisé. », un candidat écrit : « forme **emphatique** (présentatif *c'est… qui* mettant *Paul* en relief) ».",
    correcte: true,
    verdict: "C'est juste : forme **emphatique** ; le présentatif *c'est… qui* détache et met en relief *Paul* (phrase neutre : « Paul a tout organisé »).",
  },
];
