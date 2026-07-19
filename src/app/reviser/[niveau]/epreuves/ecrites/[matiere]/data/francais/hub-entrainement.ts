// Annuaire du HUB D'ENTRAÎNEMENT (français écrit).
//
// Le hub entretient le geste dans la durée (récupération espacée, Leitner), entrelacé
// sur PLUSIEURS notions, hors des fiches (cf. GABARIT_NOTION.md §2). Il a besoin, par
// notion, d'ITEMS FERMÉS tagués (savoir-faire + modalité) + de la liste des savoir-faire
// (pour le tableau de maîtrise).
//
// ÉTAT ACTUEL (pilote) : seule la notion 01 dispose d'une banque trainer (items fermés).
// Les autres notions n'auront leurs items qu'une fois la source de contenu tranchée
// (taguer les copies « Corriger des erreurs », et/ou écrire de vraies banques trainer).
// On enregistre donc ici, au fur et à mesure, les notions qui ont de quoi alimenter le hub.

import type { TrainerItem } from "@/components/fiche/types";
import { SAVOIR_FAIRE as SF_CLASSES } from "./classes-grammaticales";
import { SAVOIR_FAIRE as SF_FONCTIONS } from "./fonctions-syntaxiques";
import { SAVOIR_FAIRE as SF_GN } from "./groupe-nominal-expansions";
import { SAVOIR_FAIRE as SF_GV } from "./groupe-verbal";
import { SAVOIR_FAIRE as SF_PHRASE_CPX } from "./phrase-complexe";
import { SAVOIR_FAIRE as SF_TYPES } from "./types-et-formes-de-phrase";
import { SAVOIR_FAIRE as SF_MODES } from "./modes-et-temps";
import { SAVOIR_FAIRE as SF_PASSE } from "./temps-du-passe";
import { SAVOIR_FAIRE as SF_PFCS } from "./present-futur-conditionnel-subjonctif";
import { SAVOIR_FAIRE as SF_FORMESNC } from "./formes-non-conjuguees";
import { SAVOIR_FAIRE as SF_ACCORDS } from "./accords-gn-gv";
import { SAVOIR_FAIRE as SF_PP } from "./accord-participe-passe";
import { SAVOIR_FAIRE as SF_HOMOPHONES } from "./homophones-grammaticaux";
import { SAVOIR_FAIRE as SF_COHERENCE } from "./coherence-textuelle";
import { SAVOIR_FAIRE as SF_ENONCIATION } from "./enonciation-discours-rapporte";
import { SAVOIR_FAIRE as SF_PHONOLOGIE } from "./phonologie";
import { SAVOIR_FAIRE as SF_FORMATION } from "./formation-des-mots";
import { SAVOIR_FAIRE as SF_RELATIONS } from "./relations-semantiques";
import { SAVOIR_FAIRE as SF_FIGURES } from "./figures-de-style-registres";
// Banques NEUVES propres au hub (distinctes des fiches), avec les 4 types (QCM, détection
// d'erreur, flashcards, exercice type concours ouvert).
import { TRAINER_HUB_CLASSES_GRAMMATICALES } from "./trainer-hub-classes-grammaticales";
import { TRAINER_HUB_FONCTIONS_SYNTAXIQUES } from "./trainer-hub-fonctions-syntaxiques";
import { TRAINER_HUB_GROUPE_NOMINAL_EXPANSIONS } from "./trainer-hub-groupe-nominal-expansions";
import { TRAINER_HUB_GROUPE_VERBAL } from "./trainer-hub-groupe-verbal";
import { TRAINER_HUB_PHRASE_COMPLEXE } from "./trainer-hub-phrase-complexe";
import { TRAINER_HUB_TYPES_ET_FORMES_DE_PHRASE } from "./trainer-hub-types-et-formes-de-phrase";
import { TRAINER_HUB_MODES_ET_TEMPS } from "./trainer-hub-modes-et-temps";
import { TRAINER_HUB_TEMPS_DU_PASSE } from "./trainer-hub-temps-du-passe";
import { TRAINER_HUB_PRESENT_FUTUR_CONDITIONNEL_SUBJONCTIF } from "./trainer-hub-present-futur-conditionnel-subjonctif";
import { TRAINER_HUB_FORMES_NON_CONJUGUEES } from "./trainer-hub-formes-non-conjuguees";
import { TRAINER_HUB_ACCORDS_GN_GV } from "./trainer-hub-accords-gn-gv";
import { TRAINER_HUB_ACCORD_PARTICIPE_PASSE } from "./trainer-hub-accord-participe-passe";
import { TRAINER_HUB_HOMOPHONES_GRAMMATICAUX } from "./trainer-hub-homophones-grammaticaux";
import { TRAINER_HUB_COHERENCE_TEXTUELLE } from "./trainer-hub-coherence-textuelle";
import { TRAINER_HUB_ENONCIATION_DISCOURS_RAPPORTE } from "./trainer-hub-enonciation-discours-rapporte";
import { TRAINER_HUB_PHONOLOGIE } from "./trainer-hub-phonologie";
import { TRAINER_HUB_FORMATION_DES_MOTS } from "./trainer-hub-formation-des-mots";
import { TRAINER_HUB_RELATIONS_SEMANTIQUES } from "./trainer-hub-relations-semantiques";
import { TRAINER_HUB_FIGURES_DE_STYLE_REGISTRES } from "./trainer-hub-figures-de-style-registres";

export type HubNotion = {
  notionSlug: string; // slug de la fiche (clé des magasins localStorage)
  numero: number;
  title: string;
  savoirFaire: { id: string; label: string }[];
  items: TrainerItem[]; // items fermés, tagués notion + savoirFaire + modalité
};

export const HUB_NOTIONS: HubNotion[] = [
  {
    notionSlug: "classes-grammaticales",
    numero: 1,
    title: "Classes grammaticales · Nature des mots",
    savoirFaire: SF_CLASSES,
    items: TRAINER_HUB_CLASSES_GRAMMATICALES,
  },
  {
    notionSlug: "fonctions-syntaxiques",
    numero: 2,
    title: "Fonctions syntaxiques",
    savoirFaire: SF_FONCTIONS,
    items: TRAINER_HUB_FONCTIONS_SYNTAXIQUES,
  },
  {
    notionSlug: "groupe-nominal-expansions",
    numero: 3,
    title: "Le groupe nominal et ses expansions",
    savoirFaire: SF_GN,
    items: TRAINER_HUB_GROUPE_NOMINAL_EXPANSIONS,
  },
  {
    notionSlug: "groupe-verbal",
    numero: 4,
    title: "Le groupe verbal",
    savoirFaire: SF_GV,
    items: TRAINER_HUB_GROUPE_VERBAL,
  },
  {
    notionSlug: "phrase-complexe",
    numero: 5,
    title: "La phrase complexe et sa ponctuation",
    savoirFaire: SF_PHRASE_CPX,
    items: TRAINER_HUB_PHRASE_COMPLEXE,
  },
  {
    notionSlug: "types-et-formes-de-phrase",
    numero: 6,
    title: "Types et formes de phrase",
    savoirFaire: SF_TYPES,
    items: TRAINER_HUB_TYPES_ET_FORMES_DE_PHRASE,
  },
  {
    notionSlug: "modes-et-temps",
    numero: 7,
    title: "Les modes et les temps",
    savoirFaire: SF_MODES,
    items: TRAINER_HUB_MODES_ET_TEMPS,
  },
  {
    notionSlug: "temps-du-passe",
    numero: 8,
    title: "Les temps du passé",
    savoirFaire: SF_PASSE,
    items: TRAINER_HUB_TEMPS_DU_PASSE,
  },
  {
    notionSlug: "present-futur-conditionnel-subjonctif",
    numero: 9,
    title: "Présent, futur, conditionnel, subjonctif",
    savoirFaire: SF_PFCS,
    items: TRAINER_HUB_PRESENT_FUTUR_CONDITIONNEL_SUBJONCTIF,
  },
  {
    notionSlug: "formes-non-conjuguees",
    numero: 10,
    title: "Les formes non conjuguées du verbe",
    savoirFaire: SF_FORMESNC,
    items: TRAINER_HUB_FORMES_NON_CONJUGUEES,
  },
  {
    notionSlug: "accords-gn-gv",
    numero: 11,
    title: "Les accords dans le GN et le GV",
    savoirFaire: SF_ACCORDS,
    items: TRAINER_HUB_ACCORDS_GN_GV,
  },
  {
    notionSlug: "accord-participe-passe",
    numero: 12,
    title: "L'accord du participe passé",
    savoirFaire: SF_PP,
    items: TRAINER_HUB_ACCORD_PARTICIPE_PASSE,
  },
  {
    notionSlug: "homophones-grammaticaux",
    numero: 13,
    title: "Les homophones grammaticaux",
    savoirFaire: SF_HOMOPHONES,
    items: TRAINER_HUB_HOMOPHONES_GRAMMATICAUX,
  },
  {
    notionSlug: "coherence-textuelle",
    numero: 14,
    title: "La cohérence textuelle",
    savoirFaire: SF_COHERENCE,
    items: TRAINER_HUB_COHERENCE_TEXTUELLE,
  },
  {
    notionSlug: "enonciation-discours-rapporte",
    numero: 15,
    title: "Énonciation et discours rapporté",
    savoirFaire: SF_ENONCIATION,
    items: TRAINER_HUB_ENONCIATION_DISCOURS_RAPPORTE,
  },
  {
    notionSlug: "phonologie",
    numero: 16,
    title: "Phonologie",
    savoirFaire: SF_PHONOLOGIE,
    items: TRAINER_HUB_PHONOLOGIE,
  },
  {
    notionSlug: "formation-des-mots",
    numero: 17,
    title: "La formation des mots",
    savoirFaire: SF_FORMATION,
    items: TRAINER_HUB_FORMATION_DES_MOTS,
  },
  {
    notionSlug: "relations-semantiques",
    numero: 18,
    title: "Les relations sémantiques",
    savoirFaire: SF_RELATIONS,
    items: TRAINER_HUB_RELATIONS_SEMANTIQUES,
  },
  {
    notionSlug: "figures-de-style-registres",
    numero: 19,
    title: "Figures de style et registres",
    savoirFaire: SF_FIGURES,
    items: TRAINER_HUB_FIGURES_DE_STYLE_REGISTRES,
  },
];
