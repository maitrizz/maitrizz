import type { DemoOverlays } from "@/components/fiche/blocks/demoOverlays";

/* ⚠️ DÉMO À VALIDER (contenu grammatical) — surcouches affichées UNIQUEMENT
   dans les pages /proto/notion, via DemoOverlaysProvider. Les vraies pages
   /reviser ne les affichent pas. À faire relire avant toute reprise en
   données de fiche. */

/* Listes de mots exhaustives pour les classes FERMÉES, affichées en tête de
   ligne. Clé = « Titre de carte::Sous-classe ». Si une sous-classe n'y figure
   pas (classes ouvertes : nom, adjectif, verbe, adverbe), le rendu retombe
   sur les mots surlignés dans l'exemple. */
export const MOTS_DEMO: DemoOverlays["mots"] = {
  // Déterminants
  "Déterminant::Article défini": "le · la · les · l’",
  "Déterminant::Article indéfini": "un · une · des",
  "Déterminant::Article partitif": "du · de la · de l’ · des",
  "Déterminant::Possessif": "mon · ton · son · ma · ta · sa · mes · tes · ses · notre · votre · leur · nos · vos · leurs",
  "Déterminant::Démonstratif": "ce · cet · cette · ces",
  "Déterminant::Indéfini": "chaque · aucun · nul · quelque(s) · plusieurs · certains · tout · même · tel",
  "Déterminant::Numéral cardinal": "un · deux · trois · quatre… (série ouverte)",
  "Déterminant::Exclamatif ou interrogatif": "quel · quelle · quels · quelles",
  // Pronoms
  "Pronom::Personnel": "je · tu · il · elle · nous · vous · ils · elles · me · te · se · le · la · lui · leur · en · y · moi · toi · soi · eux",
  "Pronom::Possessif": "le mien · le tien · le sien · le nôtre · le vôtre · le leur (+ féminin / pluriel)",
  "Pronom::Démonstratif": "celui · celle · ceux · celles · celui-ci · celle-là · ce · ceci · cela · ça",
  "Pronom::Relatif": "qui · que · quoi · dont · où · lequel · duquel · auquel",
  "Pronom::Interrogatif": "qui · que · quoi · lequel · laquelle · lesquels · lesquelles",
  "Pronom::Indéfini": "on · personne · rien · tout · chacun · quelqu’un · certains · plusieurs · aucun · nul · l’un · l’autre",
  // Conjonctions
  "Conjonction::Coordination": "mais · ou · et · donc · or · ni · car",
  "Conjonction::Subordination": "que · si · quand · comme · lorsque · puisque · quoique · bien que · afin que · parce que",
};

/* Micro-rappel actif en fin de sous-section : relire ne suffit pas, c'est se
   tester qui ancre. Clé = « slug de fiche::numéro de sous-section ». */
export const RAPPELS_DEMO: DemoOverlays["rappels"] = {
  "classes-grammaticales::①": {
    question: "De mémoire : qu'est-ce qui distingue la nature d'un mot de sa fonction ?",
    reponse:
      "La nature est la carte d'identité du mot : elle ne change pas d'une phrase à l'autre. La fonction est le rôle que le mot joue dans une phrase donnée : elle change selon la phrase.",
  },
  "classes-grammaticales::②": {
    question: "De mémoire : citez les 5 classes variables.",
    reponse: "Nom, déterminant, adjectif qualificatif, pronom, verbe.",
  },
  "classes-grammaticales::③": {
    question: "De mémoire : citez les 4 classes invariables.",
    reponse: "Adverbe, préposition, conjonction, interjection (l'onomatopée se rattache à l'interjection).",
  },
  "classes-grammaticales::④": {
    question: "De mémoire : citez au moins 4 des 7 mots-caméléons de la fiche.",
    reponse: "Tout, comme, que, si, leur, même, des.",
  },
};

export const DEMO_OVERLAYS: DemoOverlays = { mots: MOTS_DEMO, rappels: RAPPELS_DEMO };
