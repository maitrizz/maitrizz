// Banque d'exercices OUVERTS, notion 17 « La formation des mots ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux · Concours (la cible) · Expert (au-delà : faux amis
// morphologiques, composés hybrides grec/latin, -able actif/passif, radical
// populaire vs savant, néologie productive).
// 6 savoir-faire : radical/famille · préfixation · suffixation · composition
// · dérivation · étymologie.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_FORMATION_DES_MOTS: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-17-exo-f1",
    notion: "fr-17",
    savoirFaire: ["derivation"],
    difficulte: 1,
    question:
      "Mot simple ou mot construit ?\na) « chat »\nb) « inclassable »\nc) « table »",
    reponseType:
      "a) **simple** (un seul radical, aucun affixe).\nb) **construit** (in- + class- + -able : préfixe + radical + suffixe).\nc) **simple**.",
    explication: [],
  },
  {
    id: "fr-17-exo-f2",
    notion: "fr-17",
    savoirFaire: ["derivation", "prefixation", "suffixation"],
    difficulte: 1,
    question:
      "Décomposez en préfixe / radical / suffixe :\na) « refaire »\nb) « dénaturé »",
    reponseType:
      "a) « refaire » = **re-** (préfixe) + **faire** (radical).\nb) « dénaturé » = **dé-** (préfixe) + **natur-** (radical) + **-é** (suffixe).",
    explication: [],
  },
  {
    id: "fr-17-exo-f3",
    notion: "fr-17",
    savoirFaire: ["radical-famille"],
    difficulte: 1,
    question:
      "Quel est le radical commun ?\n« terre, terrien, atterrir, enterrer »",
    reponseType:
      "Radical **terr-** (de « terre »). Ces mots forment une **famille** : même radical, sens apparentés.",
    explication: [],
  },
  {
    id: "fr-17-exo-f4",
    notion: "fr-17",
    savoirFaire: ["prefixation"],
    difficulte: 1,
    question:
      "Donnez le sens du préfixe :\na) « relire » (re-)\nb) « impossible » (im-)\nc) « antivol » (anti-)",
    reponseType:
      "a) **re-** = répétition.\nb) **im-** = négation (allomorphe de in-).\nc) **anti-** = opposition / contre.",
    explication: [],
  },
  {
    id: "fr-17-exo-f5",
    notion: "fr-17",
    savoirFaire: ["suffixation"],
    difficulte: 1,
    question:
      "Quelle classe le suffixe produit-il ?\na) « lentement » (-ment)\nb) « rougir » (-ir)\nc) « beauté » (-té)",
    reponseType:
      "a) -ment forme un **adverbe**.\nb) -ir forme un **verbe**.\nc) -té forme un **nom** (abstrait).\nLe suffixe peut changer la classe grammaticale du mot.",
    explication: [],
  },
  {
    id: "fr-17-exo-f6",
    notion: "fr-17",
    savoirFaire: ["composition"],
    difficulte: 1,
    question:
      "Ces mots sont-ils composés ? Comment ?\na) « porte-manteau »\nb) « pomme de terre »",
    reponseType:
      "a) oui : **composition** (porte + manteau, reliés par un trait d'union).\nb) oui : composition (groupe figé « pomme de terre »).\nPlusieurs mots autonomes forment une seule unité de sens.",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-17-exo-c1",
    notion: "fr-17",
    savoirFaire: ["derivation", "prefixation", "suffixation"],
    difficulte: 2,
    question:
      "Analysez la formation de « inclassable ».",
    reponseType:
      "« inclassable » = **in-** (préfixe, négation) + **class-** (radical de « classer ») + **-able** (suffixe, « qui peut être »). Mot construit par **dérivation** (préfixe + suffixe sur un radical), de sens « qui ne peut pas être classé ».",
    explication: [],
  },
  {
    id: "fr-17-exo-c2",
    notion: "fr-17",
    savoirFaire: ["derivation", "composition"],
    difficulte: 2,
    question:
      "**Dérivation ou composition** ? Justifiez :\na) « inacceptable »\nb) « lave-vaisselle »\nc) « décollage »",
    reponseType:
      "a) **dérivation** (in- + accept- + -able : des affixes sur un radical).\nb) **composition** (lave + vaisselle : deux mots autonomes assemblés).\nc) **dérivation** (dé- + coll- + -age).\nLa dérivation ajoute des affixes à un radical ; la composition assemble des mots (ou des racines) autonomes.",
    explication: [],
  },
  {
    id: "fr-17-exo-c3",
    notion: "fr-17",
    savoirFaire: ["composition", "etymologie"],
    difficulte: 2,
    question:
      "Décomposez et donnez le sens (racines savantes) :\na) « thermomètre »\nb) « démocratie »",
    reponseType:
      "a) **thermo-** (grec « chaleur ») + **-mètre** (grec « mesure ») = appareil qui mesure la chaleur.\nb) **démo-** (grec « peuple ») + **-cratie** (grec « pouvoir ») = pouvoir du peuple.\nC'est de la **composition savante** (racines grecques).",
    explication: [],
  },
  {
    id: "fr-17-exo-c4",
    notion: "fr-17",
    savoirFaire: ["prefixation"],
    difficulte: 2,
    question:
      "Justifiez la forme du préfixe de négation in- :\na) « impossible »\nb) « illégal »\nc) « irréel »\nd) « inactif »",
    reponseType:
      "Le préfixe in- s'assimile à la consonne suivante :\n- **im-** devant p, b, m (impossible) ;\n- **il-** devant l (illégal) ;\n- **ir-** devant r (irréel) ;\n- **in-** ailleurs (inactif).\nCe sont des **allomorphes** d'un même préfixe.",
    explication: [],
  },
  {
    id: "fr-17-exo-c5",
    notion: "fr-17",
    savoirFaire: ["suffixation"],
    difficulte: 2,
    question:
      "« -ment » : suffixe d'adverbe ou de nom ?\na) « rapidement »\nb) « aboiement »",
    reponseType:
      "a) « rapidement » : suffixe **adverbial** (formé sur l'adjectif « rapide »).\nb) « aboiement » : suffixe **nominal** (forme un nom d'action sur le verbe « aboyer »).\nLe même suffixe -ment a donc deux valeurs distinctes : c'est un piège classique.",
    explication: [],
  },
  {
    id: "fr-17-exo-c6",
    notion: "fr-17",
    savoirFaire: ["radical-famille"],
    difficulte: 2,
    question:
      "Pour « mer », distinguez sa famille de mots et un champ lexical.",
    reponseType:
      "- **Famille de mots** (même radical mer- / mar-) : marin, maritime, marée, amerrir, outre-mer.\n- **Champ lexical** de la mer (mots liés par le sens, radicaux différents) : vague, océan, plage, bateau, écume.\nLa famille relève de la morphologie (le radical) ; le champ lexical, de la sémantique (le thème).",
    explication: [],
  },
  {
    id: "fr-17-exo-c7",
    notion: "fr-17",
    savoirFaire: ["composition"],
    difficulte: 2,
    question:
      "Nommez le procédé de formation :\na) « vélo »\nb) « SNCF »\nc) « franglais »\nd) « resto »",
    reponseType:
      "a) « vélo » : **abrègement / troncation** (de « vélocipède »).\nb) « SNCF » : **siglaison**.\nc) « franglais » : **mot-valise** (français + anglais).\nd) « resto » : **troncation** (de « restaurant »).\nCe sont des procédés modernes de formation, à côté de la dérivation et de la composition.",
    explication: [],
  },
  {
    id: "fr-17-exo-c8",
    notion: "fr-17",
    savoirFaire: ["etymologie"],
    difficulte: 2,
    question:
      "Ces deux mots viennent du même étymon latin. Lequel, et pourquoi diffèrent-ils ?\n« frêle » et « fragile »",
    reponseType:
      "Tous deux viennent du latin *fragilis*. « frêle » est issu de la voie **populaire** (évolution orale, transformation progressive) ; « fragile » de la voie **savante** (emprunt direct au latin écrit). Ce sont des **doublets** (mêmes que hôtel / hôpital, écouter / ausculter).",
    explication: [],
  },
  {
    id: "fr-17-exo-c9",
    notion: "fr-17",
    savoirFaire: ["derivation", "suffixation"],
    difficulte: 2,
    question:
      "À partir du radical « port- » (porter), formez quatre dérivés de classes différentes et nommez la classe.",
    reponseType:
      "Par exemple : **porteur** (nom, -eur), **portable** (adjectif, -able), **portage** (nom, -age), **transporter** (verbe, préfixe trans-). La dérivation permet d'enrichir une famille en variant les classes grammaticales.",
    explication: [],
  },
  {
    id: "fr-17-exo-c10",
    notion: "fr-17",
    savoirFaire: ["derivation", "prefixation"],
    difficulte: 2,
    question:
      "Le préfixe « dé- » a-t-il le même sens partout ?\na) « défaire »\nb) « déborder »\nc) « déguster »",
    reponseType:
      "a) « défaire » : dé- = **action inverse** (sens négatif).\nb) « déborder » : dé- = **hors de** (sortir du bord).\nc) « déguster » : dé- est ici **intensif**, non négatif (déguster ≠ « ne pas goûter »).\nLe sens d'un préfixe dépend du mot : il faut le vérifier dans le contexte, pas le plaquer.",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-17-exo-e1",
    notion: "fr-17",
    savoirFaire: ["etymologie", "radical-famille"],
    difficulte: 3,
    question:
      "Ces mots se ressemblent, mais sont-ils de la même famille ?\na) « dent » et « dentier »\nb) « dent » et « accident »",
    reponseType:
      "a) **oui** : même famille (radical dent-, sens lié : dentier, dentaire, édenté).\nb) **non** : « accident » vient du latin *cadere* (« tomber ») et n'a aucun lien avec « dent » malgré la ressemblance graphique. C'est un **faux ami morphologique** : la ressemblance de forme ne prouve pas la parenté étymologique.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : pour prouver une famille, le critère est double : radical commun ET sens apparenté. La seule ressemblance de lettres ne suffit pas.",
      },
    ],
  },
  {
    id: "fr-17-exo-e2",
    notion: "fr-17",
    savoirFaire: ["composition", "etymologie"],
    difficulte: 3,
    question:
      "Analysez la formation et signalez l'anomalie :\na) « télévision »\nb) « automobile »",
    reponseType:
      "a) « télévision » = télé- (grec « loin ») + vision (latin « vue ») : composé **hybride** (grec + latin).\nb) « automobile » = auto- (grec « soi-même ») + mobile (latin « qui se meut ») : hybride également.\nCes formations savantes mêlent les deux origines, ce que les puristes ont longtemps critiqué.",
    explication: [],
  },
  {
    id: "fr-17-exo-e3",
    notion: "fr-17",
    savoirFaire: ["suffixation"],
    difficulte: 3,
    question:
      "Le suffixe « -able » a-t-il le même sens ?\na) « lavable »\nb) « secourable »\nc) « périssable »",
    reponseType:
      "a) « lavable » : sens **passif** (« qui peut être lavé »).\nb) « secourable » : sens **actif** (« qui porte secours »).\nc) « périssable » : sens **actif / moyen** (« qui peut périr »).\nLe suffixe -able, le plus souvent passif, prend parfois une valeur active selon le verbe support.",
    explication: [],
  },
  {
    id: "fr-17-exo-e4",
    notion: "fr-17",
    savoirFaire: ["radical-famille"],
    difficulte: 3,
    question:
      "Le radical varie dans cette famille. Relevez ses formes :\n« main, manuel, manier, manuscrit, manœuvre »",
    reponseType:
      "Le radical apparaît sous deux formes : **main** (forme populaire) et **man(u)-** (forme savante, du latin *manus*) dans manuel, manier, manuscrit, manœuvre. Une même famille peut donc avoir un radical **populaire** et un radical **savant** (allomorphes du radical).",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : signaler la double forme (populaire / savante) d'un radical (main ~ man-, eau ~ aqua-, œil ~ ocul-) est un raffinement valorisé.",
      },
    ],
  },
  {
    id: "fr-17-exo-e5",
    notion: "fr-17",
    savoirFaire: ["composition", "suffixation"],
    difficulte: 3,
    question:
      "Quel procédé crée ces mots récents, et est-il encore productif ?\n« covoiturage », « télétravail », « ubériser »",
    reponseType:
      "- « covoiturage » : **dérivation** (co- + voiture + -age).\n- « télétravail » : **composition savante** (télé- + travail).\n- « ubériser » : **dérivation** sur un nom propre (Uber + -iser, verbe).\nCes créations montrent que les procédés (préfixation, suffixation, composition) restent **productifs** : la langue continue de fabriquer des mots par les mêmes mécanismes.",
    explication: [],
  },
];
