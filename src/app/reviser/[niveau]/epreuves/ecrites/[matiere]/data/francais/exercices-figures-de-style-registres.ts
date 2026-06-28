// Banque d'exercices OUVERTS, notion 19 « Les figures de style et les registres ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_FIGURES_DE_STYLE_REGISTRES: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-19-exo-01",
    notion: "fr-19",
    savoirFaire: ["images","opposition","insistance","attenuation"],
    difficulte: 1,
    question: "Nommez la figure :\na) « Il pleut des cordes. » · b) « Ce devoir n'est pas mal. » · c) « La vie est un voyage. » · d) « Je meurs de soif. » · e) « Le temps dévore tout. » · f) « une obscure clarté »",
    reponseType: "**Explication (le réflexe) :** repérer l'écart, puis classer dans une famille. a) image sans outil → métaphore (la pluie est assimilée à des cordes) · b) atténuation qui en dit plus → litote (« pas mal » = très bien) · c) assimilation sans outil → métaphore · d) exagération → hyperbole · e) action humaine prêtée à une abstraction → personnification · f) deux contraires dans le même groupe → oxymore.\n\n**Réponse attendue (formulation modèle) :** « a) métaphore · b) litote · c) métaphore · d) hyperbole · e) personnification · f) oxymore. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-19-exo-02",
    notion: "fr-19",
    savoirFaire: ["images"],
    difficulte: 1,
    question: "Comparaison ou métaphore ? Indiquez l'outil s'il y en a un :\na) « fort comme un bœuf » · b) « c'est un bœuf, cet homme » · c) « ses yeux, deux étoiles » · d) « elle travaille telle une fourmi »",
    reponseType: "**Explication (le test) :** chercher un outil de comparaison. S'il y en a un, c'est une comparaison ; sinon, c'est une métaphore. a) outil « comme » · b) aucun outil, le verbe « est » assimile · c) aucun outil, apposition directe · d) outil « telle ».\n\n**Réponse attendue (formulation modèle) :** « a) comparaison (outil “comme”) · b) métaphore (pas d'outil) · c) métaphore (apposition directe) · d) comparaison (outil “telle”). »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-19-exo-03",
    notion: "fr-19",
    savoirFaire: ["registres"],
    difficulte: 1,
    question: "Indiquez le registre de langue, puis reformulez en registre courant :\na) « Je n'ai pu y consentir. » · b) « J'peux pas. » · c) « C'est nul. »",
    reponseType: "**Explication :** on lit le registre de langue dans le vocabulaire et la syntaxe. a) tournure soignée (« je n'ai pu », « consentir ») → soutenu · b) élision relâchée et omission du « ne » → familier · c) terme et construction relâchés → familier.\n\na) **Réponse attendue :** soutenu → reformulation courante : « Je n'ai pas pu accepter. »\n\nb) **Réponse attendue :** familier → reformulation courante : « Je ne peux pas. »\n\nc) **Réponse attendue :** familier → reformulation courante : « Ce n'est pas satisfaisant. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-19-exo-04",
    notion: "fr-19",
    savoirFaire: ["images","attenuation"],
    difficulte: 2,
    enonce: "« Vivre, sans l'écriture, me va mal, comme un habit trop lâche dans lequel je m'empêtre. » (Lola Lafon)",
    question: "Nommez la figure, expliquez son mécanisme et analysez son effet.",
    reponseType: "**Explication (mécanisme) :** l'outil « comme » signale une comparaison (la vie sans écriture, comparé ; un habit trop lâche, comparant). Elle se double d'une litote (« me va mal », qui en dit moins que la réalité).\n\n**Réponse attendue (formulation modèle) :** « “comme un habit trop lâche” est une comparaison : la vie sans écriture est rapprochée d'un vêtement mal taillé au moyen de l'outil “comme”. L'image corporalise une sensation abstraite, et le verbe “m'empêtre” prolonge l'idée d'entrave physique : sans écriture, l'autrice ne tient pas dans sa propre vie. La litote “me va mal” suggère, par retenue, une véritable nécessité vitale. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-19-exo-05",
    notion: "fr-19",
    savoirFaire: ["images"],
    difficulte: 2,
    enonce: "« ma route est une impasse / chemin sans destination / terres inconnues / à tâtons / trébucher » (Lola Lafon)",
    question: "Identifiez et analysez la métaphore filée : domaine comparant, termes, effet global.",
    reponseType: "**Explication (mécanisme) :** plusieurs termes appartiennent au même domaine comparant, le voyage (route, impasse, chemin sans destination, terres inconnues, à tâtons, trébucher) : l'image est développée sur tout le passage, c'est une métaphore filée. Le domaine comparé est l'acte d'écrire.\n\n**Réponse attendue (formulation modèle) :** « Le passage construit une métaphore filée du voyage désorienté : l'écriture est assimilée à un périple sans boussole (route, impasse, terres inconnues, à tâtons). La cohérence de l'image fait de l'écriture une errance volontaire et risquée ; l'accumulation des termes négatifs amplifie la désorientation tout en valorisant le courage de s'y engager. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-19-exo-06",
    notion: "fr-19",
    savoirFaire: ["registres"],
    difficulte: 2,
    enonce: "« Une femme passa, tenant par la main un petit garçon. Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison avant la nuit. » (passage de type récit réaliste)",
    question: "Quel registre littéraire domine ? Identifiez deux procédés qui le construisent.",
    reponseType: "**Explication :** la scène met en avant une figure féminine fragile et pressée ; elle est construite pour susciter la pitié, marque du registre pathétique. Deux procédés y concourent : l'accumulation de détails concrets (« tenant par la main », « yeux baissés », « pressée ») qui rendent la femme vulnérable et proche du lecteur, et la valeur symbolique de « la nuit », menace implicite vers laquelle se précipite la scène.\n\n**Réponse attendue (formulation modèle) :** « Le passage relève du registre pathétique : il suscite la pitié pour une figure féminine vulnérable. Cet effet repose sur l'accumulation de détails réalistes (“tenant par la main”, “yeux baissés”, “pressée”), qui humanisent le personnage, et sur la connotation menaçante de “la nuit”, qui fait peser une inquiétude sur la scène. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-19-exo-07",
    notion: "fr-19",
    savoirFaire: ["images"],
    difficulte: 3,
    enonce: "« la langue n'est pas un objet inerte dont on se saisit et qu'on plie à sa volonté. C'est elle qui nous transforme. » (Lola Lafon)",
    question: "Identifiez la personnification et l'antithèse, et analysez leur effet combiné.",
    reponseType: "**Explication (mécanismes) :** la langue « nous transforme » : une abstraction reçoit une action de sujet humain, c'est une personnification. Par ailleurs, « on se saisit / on plie à sa volonté » (domination de l'humain) s'oppose à « c'est elle qui nous transforme » (domination de la langue) : ces deux groupes contraires forment une antithèse.\n\n**Réponse attendue (formulation modèle) :** « La phrase combine une personnification (la langue “nous transforme”, elle devient un sujet agissant) et une antithèse opposant la maîtrise humaine (“on se saisit”, “on plie à sa volonté”) à la puissance de la langue (“c'est elle qui nous transforme”). Le renversement du rapport de force porte la thèse de l'autrice : écrire, ce n'est pas maîtriser les mots, c'est se laisser transformer par eux. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-19-exo-08",
    notion: "fr-19",
    savoirFaire: ["images"],
    difficulte: 3,
    enonce: "« Ces énormes vagues, mousseuses d'une écume verte, semblaient s'avancer vers le hameau. Le grondement d'océan du vent dans les montagnes. La cour : île protégée des tempêtes. » (passage de type récit contemporain)",
    question: "Identifiez la métaphore filée et analysez son effet d'ensemble.",
    reponseType: "**Explication (mécanisme) :** plusieurs termes relèvent du même domaine comparant, la mer (vagues, écume verte, grondement d'océan, île, tempêtes), alors que le comparé est le paysage de montagne et le hameau. L'image, développée sur tout le passage, est une métaphore filée maritime.\n\n**Réponse attendue (formulation modèle) :** « Le passage construit une métaphore filée maritime : les montagnes et le vent sont assimilés à une mer démontée (vagues, écume verte, grondement d'océan, tempêtes). La cour, désignée comme une “île protégée”, devient un refuge isolé au milieu de forces hostiles et gigantesques ; les “vagues” qui “s'avancent” donnent à la nature une dimension menaçante et annoncent les bouleversements à venir. »",
    explication: [],
  },
];
