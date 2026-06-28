// Banque d'exercices OUVERTS, notion 15 « L'énonciation et le discours rapporté ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_ENONCIATION_DISCOURS_RAPPORTE: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-15-exo-01",
    notion: "fr-15",
    savoirFaire: ["indices-enonciation","discours-direct","discours-indirect","discours-indirect-libre"],
    difficulte: 1,
    question: "Identifiez la forme (DD, DI, DIL, récit de paroles) et justifiez par un indice :\na) « Marie murmura : “Je ne comprends rien.” »   b) « Elle pensait que cet exercice était trop difficile. »   c) « Elle relut l'énoncé. Non, elle ne comprenait rien ! »   d) « Il lui annonça son départ. »   e) « “Quel beau paysage !”, s'écria-t-elle. »",
    reponseType: "a) **Discours direct** : guillemets, deux-points, verbe introducteur « murmura », pronom « je ».\n\nb) **Discours indirect** : verbe introducteur « pensait » + « que », imparfait, pas de guillemets.\n\nc) **Discours indirect libre** : ni verbe introducteur ni guillemets, imparfait + exclamation, point de vue du personnage.\n\nd) **Récit de paroles** : la prise de parole est mentionnée, aucun contenu reproduit.\n\ne) **Discours direct avec incise** : guillemets, incise à sujet inversé, ponctuation expressive conservée.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-15-exo-02",
    notion: "fr-15",
    savoirFaire: ["indices-enonciation","discours-indirect","transpositions"],
    difficulte: 1,
    question: "Transposez au discours indirect (verbe introducteur au passé) :\na) Il déclara : « Je pars demain. »   b) Elle demanda : « Est-ce que tu viens ? »   c) Il cria : « Taisez-vous ! »   d) Il murmura : « J'avais peur. »",
    reponseType: "a) Il déclara **qu'il partait le lendemain** (présent → imparfait, demain → le lendemain, je → il).\n\nb) Elle demanda **s'il venait** (est-ce que → si, présent → imparfait).\n\nc) Il cria **de se taire** (impératif → de + infinitif).\n\nd) Il murmura **qu'il avait peur** (imparfait → inchangé).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-15-exo-03",
    notion: "fr-15",
    savoirFaire: ["indices-enonciation","discours-indirect"],
    difficulte: 1,
    question: "Relevez les embrayeurs et précisez ce qu'ils désignent :\na) « Je vous parle ici, aujourd'hui. »   b) « Nous partirons demain matin. »   c) « Ce livre que tu tiens est le mien. »",
    reponseType: "a) « je » = le locuteur ; « vous » = le destinataire ; « ici » = le lieu du locuteur ; « aujourd'hui » = le jour de l'énonciation.\n\nb) « Nous » = le locuteur et d'autres ; « demain » = le jour suivant le moment d'énonciation.\n\nc) « Ce » = démonstratif de proximité (objet désigné) ; « tu » = le destinataire ; « le mien » renvoie au locuteur.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-15-exo-04",
    notion: "fr-15",
    savoirFaire: ["discours-indirect","modalisation"],
    difficulte: 1,
    question: "Relevez les marques de subjectivité et dites ce qu'elles révèlent :\na) « Ce projet est, hélas, une véritable catastrophe. »   b) « Le coupable serait, paraît-il, déjà en fuite. »   c) « Vous devriez vraiment relire cet admirable roman. »",
    reponseType: "a) « hélas » (modalisateur, regret) et « véritable catastrophe » (lexique péjoratif) : le locuteur porte un jugement négatif tranché.\n\nb) « serait » (conditionnel d'information non confirmée) et « paraît-il » (modalisateur de doute) : le locuteur prend ses distances avec une information qu'il ne garantit pas.\n\nc) « devriez » (verbe de modalité, conseil), « vraiment » (insistance) et « admirable » (lexique mélioratif) : le locuteur conseille et valorise l'œuvre.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-15-exo-05",
    notion: "fr-15",
    savoirFaire: ["indices-enonciation","discours-direct","discours-indirect","transpositions"],
    difficulte: 2,
    enonce: "« Le soir tombait. Paul referma son cahier. “Je reviendrai demain”, murmura-t-il. Puis il sortit sans se retourner. »",
    question: "a) Quel est le système d'énonciation dominant ? Donnez deux indices. b) Quelle rupture introduit la réplique entre guillemets ?",
    reponseType: "a) **Récit coupé de l'énonciation** : 3e personne (« Paul », « il »), imparfait (« tombait ») et passé simple (« referma », « sortit »). Le passage est organisé comme une narration.\n\nb) La réplique entre guillemets est au **discours direct** : elle crée une rupture locale ancrée dans la situation du personnage, avec « je » et « demain » qui valent pour Paul au moment où il parle.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-15-exo-06",
    notion: "fr-15",
    savoirFaire: ["discours-direct","discours-indirect","discours-indirect-libre","transpositions"],
    difficulte: 2,
    enonce: "« Elle regarda la lettre une dernière fois. Vraiment, il était impossible de rester. Elle partirait dès l'aube, sans prévenir personne. Qu'ils se débrouillent ! »",
    question: "a) Identifiez la forme de discours rapporté (trois indices). b) Réécrivez les deux dernières phrases en discours indirect (introducteur : « elle pensa »).",
    reponseType: "a) **Discours indirect libre** : 1) ni guillemets ni verbe introducteur ; 2) conditionnel « partirait » (futur dans le passé, point de vue du personnage) ; 3) exclamation « Qu'ils se débrouillent ! » qui trahit la voix du personnage.\n\nb) « Elle pensa qu'elle partirait dès l'aube, sans prévenir personne, et qu'ils n'avaient qu'à se débrouiller. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-15-exo-07",
    notion: "fr-15",
    savoirFaire: ["discours-direct","discours-indirect","transpositions"],
    difficulte: 3,
    enonce: "« Court à son compagnon, lui dit que c'est merveille / Qu'il n'ait eu seulement que la peur pour tout mal. » (La Fontaine, L'Ours et les Deux Compagnons)",
    question: "a) Identifiez la forme de discours rapporté (indices grammaticaux). b) Quel effet ce choix produit-il dans une fable ?",
    reponseType: "a) **Discours indirect** : verbe introducteur « dit » + subordonnée en « que » (« lui dit que c'est merveille / qu'il n'ait eu… »), pas de guillemets. Cette subordonnée est une **complétive, COD de « dit »**. Le verbe introducteur est au présent de narration : les temps des paroles rapportées ne sont pas transposés vers l'imparfait ou le plus-que-parfait.\n\nb) Le discours indirect intègre les paroles au rythme narratif : il accélère le récit et maintient la voix du narrateur au premier plan, ce qui préserve la distance ironique propre à La Fontaine.",
    explication: [],
  },
];
