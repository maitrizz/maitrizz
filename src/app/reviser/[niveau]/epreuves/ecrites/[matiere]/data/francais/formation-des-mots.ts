import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "mo1", label: "Je distingue le mot simple du mot construit, et la dérivation (affixe non autonome) de la composition (deux bases autonomes)" },
  { id: "mo2", label: "J'identifie radical, préfixe et suffixe, et je sais que le préfixe conserve la classe alors que le suffixe peut la changer" },
  { id: "mo3", label: "Je connais les allomorphes du préfixe négatif in- (in-, im-, ir-, il-) et les principaux préfixes" },
  { id: "mo4", label: "Je connais les principaux suffixes et la double valeur de -ment (adverbe ou nom selon la base)" },
  { id: "mo5", label: "Je reconnais la composition savante et j'infère le sens d'un mot inconnu à partir de ses racines" },
  { id: "mo6", label: "Je connais les doublets (mot populaire / mot savant) et je me méfie des faux amis morphologiques" },
  { id: "mo7", label: "Je distingue la famille de mots (même radical) du champ lexical (même thème) et je rédige une analyse de formation contextualisée" },
];

export const ficheFormationDesMots: Fiche = {
  slug: "formation-des-mots",
  matiere: "francais",
  numero: 16,
  partie: "Partie 2 : Lexique",
  title: "La formation des mots",
  subtitle:
    "Mots simples et construits, dérivation, composition, familles de mots, préfixes, suffixes et radicaux",
  badges: [
    { label: "★★★ Tombe à chaque session", variant: "hot" },
    { label: "Cycle 2-3-4 · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "La formation des mots (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur la formation des mots : mots simples et construits, dérivation (radical, préfixe, suffixe, allomorphes de in-, double valeur de -ment), composition populaire et savante, doublets, faux amis morphologiques, familles de mots et champ lexical. Méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
  tabGroups: [
    {
      id: "decouvrir",
      label: "Découvrir",
      icon: "",
      tabs: [
        {
          id: "vue-d-ensemble",
          label: "Vue d'ensemble",
          icon: "",
          blocks: [
            {
              type: "sommaireApercu",
              title: "Le programme en 4 étapes",
              intro:
                "Comprendre comment un mot est formé, c'est comprendre son sens : chaque morphème porte une information. C'est la question la plus prévisible de la Partie 2.",
              items: [
                {
                  number: "①",
                  title: "Mots simples et mots construits",
                  text: "Un seul morphème, ou plusieurs ? Deux procédés de construction : dérivation et composition.",
                },
                {
                  number: "②",
                  title: "La dérivation",
                  text: "Radical, préfixe, suffixe : le préfixe conserve la classe, le suffixe peut la changer.",
                },
                {
                  number: "③",
                  title: "La composition",
                  text: "Populaire (mots autonomes) ou savante (éléments grecs et latins) ; inférer le sens d'un mot inconnu.",
                },
                {
                  number: "④",
                  title: "Étymons, doublets, familles",
                  text: "Mot populaire / mot savant, faux amis morphologiques, famille de mots et champ lexical.",
                },
              ],
            },
          ],
        },
        {
          id: "cours",
          label: "Cours",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "info",
              icon: "",
              title: "Avant de commencer",
              text: "Le français forme ses mots par deux procédés : la **dérivation** (on ajoute des affixes à un radical) et la **composition** (on assemble deux bases autonomes). Connaître la valeur des préfixes, suffixes et radicaux permet d'**inférer le sens d'un mot inconnu** en le décomposant : c'est une compétence directement attendue au concours.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Mots simples et mots construits",
              blocks: [
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Mot simple",
                      definition: "Un seul morphème lexical, qu'on ne peut pas décomposer en radical + affixe.",
                      exemples: ["sol, mer, noir, lire, eau, bien"],
                      test: "Un mot court n'est pas forcément simple : « soleil » (sol- + -eil) est construit.",
                    },
                    {
                      title: "Mot construit",
                      definition: "Plusieurs morphèmes, par dérivation (affixe + radical) ou composition (deux bases autonomes).",
                      exemples: [
                        "« déraison » = dé- + raison (dérivation : dé- n'est pas autonome)",
                        "« portefeuille » = porte + feuille (composition : les deux mots existent seuls)",
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "La dérivation : radical, préfixe, suffixe",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le **radical** porte le sens de base (il peut avoir plusieurs formes, ou allomorphes : « écri- / écriv- / écrit- »). Un **affixe** est un morphème non autonome ajouté au radical : **préfixe** (avant) ou **suffixe** (après).",
                },
                {
                  type: "comparisonGrid",
                  rows: [
                    { label: "Préfixe (avant le radical)", good: "**Conserve** la classe grammaticale : dé- + raison → déraison (nom → nom)" },
                    { label: "Suffixe (après le radical)", good: "**Peut changer** la classe : lire → lect-eur (verbe → nom)" },
                  ],
                },
                {
                  type: "table",
                  title: "Principaux préfixes",
                  headers: ["Préfixe", "Sens", "Exemples"],
                  rows: [
                    ["dé-, dés-", "privation, action inverse", "déraison, désordre, dégoûter"],
                    ["re-, ré-", "répétition, retour", "relire, réécrire, rouvrir"],
                    ["in-, im-, ir-, il-", "négation", "indécis, impossible, irréel, illégal"],
                    ["pré-", "antériorité", "prévoir, prénatal"],
                    ["sur-, super-", "au-dessus, excès", "surnaturel, supermarché"],
                    ["trans-", "à travers, au-delà", "transporter, transformer"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Les allomorphes de in-",
                  text: "Le préfixe négatif **in-** s'adapte à la consonne initiale du radical : **im-** devant b, m, p (impossible) ; **ir-** devant r (irremplaçable) ; **il-** devant l (illégal) ; **in-** ailleurs (indécis). Préciser le bon allomorphe est valorisé : on écrit « **ir**remplaçable », pas « in-remplaçable ».",
                },
                {
                  type: "table",
                  title: "Principaux suffixes",
                  headers: ["Suffixe", "Classe produite", "Exemples"],
                  rows: [
                    ["-tion, -ation", "nom (action, résultat)", "formation, expression"],
                    ["-eur, -euse", "nom (agent, outil)", "lecteur, perceuse"],
                    ["-able, -ible", "adjectif (possibilité)", "remplaçable, lisible"],
                    ["-té, -ité", "nom (qualité abstraite)", "liberté, égalité"],
                    ["-iser, -ifier", "verbe (rendre, faire)", "moderniser, clarifier"],
                    ["-ment", "adverbe OU nom (voir piège)", "lentement / raisonnement"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "Le morphogramme grammatical",
                  text: "À distinguer du suffixe lexical : un **morphogramme grammatical** marque une information grammaticale sans créer de mot nouveau (-er marque l'infinitif, -s le pluriel, -e le féminin). Dans « dégoûter », le -er est un morphogramme, pas un suffixe créateur.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "La composition : populaire et savante",
              blocks: [
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Composition populaire",
                      definition: "Des mots français autonomes assemblés (avec ou sans trait d'union).",
                      exemples: ["portefeuille, pomme de terre, arc-en-ciel, tire-bouchon, vinaigre (vin + aigre)"],
                      test: "Les mots composés sont inséparables : on ne peut rien insérer entre leurs parties.",
                    },
                    {
                      title: "Composition savante",
                      definition: "Des éléments grecs ou latins non autonomes.",
                      exemples: ["bio- (vie), photo- (lumière), télé- (loin), -logie (science), -graphie (écrire)"],
                      test: "« biographie » = bios (vie) + graphein (écrire) : récit d'une vie.",
                    },
                  ],
                },
                {
                  type: "table",
                  title: "Quelques racines utiles pour inférer un sens",
                  headers: ["Racine", "Origine et sens", "Exemples"],
                  rows: [
                    ["aqua-", "latin, eau", "aquatique, aqueduc"],
                    ["man(u)-", "latin, main", "manuel, manuscrit"],
                    ["scrib-, script-", "latin, écrire", "écriture, manuscrit, inscription"],
                    ["vid-, vis-", "latin, voir", "visible, vision, téléviseur"],
                    ["anthropo-", "grec, homme", "anthropologie, philanthrope"],
                    ["chrono-", "grec, temps", "chronologie, anachronisme"],
                    ["phil(o)-", "grec, aimer", "philosophie, bibliophile"],
                    ["-phage", "grec, manger", "anthropophage, chronophage"],
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Étymons, doublets, familles de mots",
              blocks: [
                {
                  type: "paragraph",
                  text: "L'**étymon** est la forme d'origine d'un mot (souvent latine ou grecque). Un même étymon peut donner deux mots par deux voies : un **mot populaire** (évolution orale, très transformé) et un **mot savant** (emprunt au latin écrit, peu transformé). Ces paires sont des **doublets**.",
                },
                {
                  type: "table",
                  title: "Doublets (même étymon, deux voies)",
                  headers: ["Étymon latin", "Mot populaire", "Mot savant"],
                  rows: [
                    ["fragilem", "frêle", "fragile"],
                    ["hospitalem", "hôtel", "hôpital"],
                    ["auscultare", "écouter", "ausculter"],
                    ["liberare", "livrer", "libérer"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Faux amis morphologiques",
                  text: "Deux mots peuvent se ressembler sans partager le même étymon. « belladone » ressemble à bell- (guerre) mais vient de l'italien « bella donna » ; « acquérir » ressemble à aqua- (eau) mais vient de « acquirere » (obtenir). Toujours vérifier l'étymon avant de ranger un mot dans une famille (piège de l'exercice « intrus »).",
                },
                {
                  type: "comparisonGrid",
                  rows: [
                    { label: "Famille de mots (morphologie)", good: "Même **radical** : lire, lecteur, lecture, relire, lisible" },
                    { label: "Champ lexical (sémantique)", good: "Même **thème** : lire, page, roman, auteur, bibliothèque (voir la notion 13)" },
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · confondre dérivation et composition",
              badge: "Erreur très fréquente",
              faux: "« déraison » est formé par composition, de « dé » et « raison ».",
              vrai: "« dé- » n'est pas un mot autonome : c'est un préfixe. « déraison » est formé par **dérivation préfixale**. La composition assemble deux mots qui existent seuls (porte + feuille).",
              methode: "Se demander si chaque élément peut fonctionner seul : si non (dé-, -able), c'est de la dérivation.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · l'allomorphe du préfixe in-",
              badge: "Source d'erreurs",
              faux: "Le préfixe d'« irremplaçable » est « in- ».",
              vrai: "Devant un radical en r, in- devient **ir-** (assimilation) : le préfixe est **ir-**, d'où le doublement du r.",
              methode: "Regarder la première lettre du radical : b/m/p → im- ; r → ir- ; l → il- ; sinon in-.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · la double valeur de -ment",
              badge: "Cas difficile",
              faux: "« raisonnement » est un adverbe formé en -ment comme « lentement ».",
              vrai: "« raisonnement » est un **nom** (verbe raisonner + -ment). « lentement » est un **adverbe** (adjectif féminin lente + -ment). Même suffixe, deux valeurs selon la base.",
              methode: "Regarder la base : adjectif féminin → adverbe ; verbe → nom masculin.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · oublier le sens et le contexte",
              badge: "Perte de points",
              faux: "Segmenter le mot sans expliquer le sens de chaque morphème ni l'ancrer dans le texte.",
              vrai: "Le jury attend les deux : l'**analyse de la formation** ET l'**explication du sens**, confirmé par le contexte du texte.",
              methode: "Toujours conclure par le sens global et une vérification dans le passage étudié.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 2-3 :** les familles de mots servent à orthographier (le « d » muet de « grand » se justifie par « grandeur »).\n\n**Cycle 3-4 :** la dérivation enrichit le vocabulaire (former des mots à partir d'un radical, repérer préfixes et suffixes).\n\n**Ce que vous devez savoir dire :** « Comprendre la morphologie d'un mot aide à l'écrire (familles de mots) et à en deviner le sens (préfixes, suffixes, radicaux). C'est un levier pour le vocabulaire et l'orthographe. »",
            },
            {
              type: "ctaBox",
              text: "Cours bien en tête ? Passez à la méthode.",
              buttonLabel: "Voir la méthode pas-à-pas",
              targetTab: "methode",
            },
          ],
        },
        {
          id: "methode",
          label: "Méthode",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "success",
              icon: "",
              title: "Trois démarches",
              text: "Analyser la formation d'un mot, distinguer les procédés, et inférer le sens d'un mot inconnu. Chacune se termine par un checkpoint.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : les briques d'un mot",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "Radical = sens de base (présent dans toute la famille).",
                    "Préfixe = avant le radical, conserve la classe.",
                    "Suffixe = après le radical, peut changer la classe.",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Analyser la formation ne suffit pas : il faut toujours expliquer le sens et le contextualiser.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Analyser la formation d'un mot",
              intro:
                "**Question typique :** « Analysez la formation de ce mot pour en expliquer le sens. »\nQuatre étapes obligatoires.",
              steps: [
                {
                  number: "1",
                  text: "**Nommer le procédé** : dérivation (préfixation, suffixation, ou les deux) ou composition (populaire, savante).",
                  example: { lines: ["« irremplaçable » → dérivation (préfixe + suffixe)"] },
                },
                {
                  number: "2",
                  text: "**Segmenter** le mot et **expliquer le sens de chaque morphème**.",
                  example: { lines: ["ir- (négation) + remplac- (verbe remplacer) + -able (possibilité)"] },
                },
                {
                  number: "💡",
                  text: "**Déduire le sens global et le contextualiser** dans le texte.",
                  warn: "⚠️ Omettre l'explication du sens ou le contexte fait perdre des points.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Analysez la formation de « surnaturel » et donnez son sens.",
              correction: [
                { type: "line", text: "**Dérivation préfixale** : préfixe **sur-** (au-dessus, au-delà) + radical **naturel** (adjectif). Classe conservée (adjectif → adjectif). « Surnaturel » = ce qui dépasse les lois de la nature." },
                { type: "note", text: "Trouvé ? Vous tenez la méthode. Sinon, revoyez la dérivation préfixale." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Distinguer dérivation et composition",
              intro:
                "**Question typique :** « Ce mot est-il formé par dérivation ou composition ? »",
              steps: [
                {
                  number: "1",
                  text: "**Tester l'autonomie des éléments** : chaque partie existe-t-elle seule ?",
                  example: { lines: ["porte + feuille → deux mots → composition ; dé- + raison → dé- non autonome → dérivation"] },
                },
                {
                  number: "2",
                  text: "**Si composition, préciser populaire ou savante** (mots français ou éléments grecs/latins).",
                  example: { lines: ["« biographie » → éléments savants → composition savante"] },
                },
                {
                  number: "💡",
                  text: "**Vérifier l'inséparabilité** des mots composés.",
                  warn: "⚠️ Un préfixe (sur-, dé-, in-) n'est jamais un mot composé.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« téléphone » : dérivation ou composition ? Justifiez.",
              correction: [
                { type: "line", text: "**Composition savante** : télé- (grec, loin) + phône (grec, voix). Deux éléments savants non autonomes assemblés." },
                { type: "note", text: "Le bon procédé ? Direction le dernier checkpoint." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Inférer le sens d'un mot inconnu",
              intro:
                "**Question typique :** « Ce mot n'est pas courant : expliquez comment en deviner le sens. »",
              steps: [
                {
                  number: "1",
                  text: "**Décomposer en morphèmes connus** (préfixe, radical, suffixe).",
                  example: { lines: ["« dégauchisseuse » → dé- + gauch- (gauchir) + -euse (outil)"] },
                },
                {
                  number: "2",
                  text: "**Combiner les sens** pour proposer une hypothèse.",
                  example: { lines: ["un outil qui « dégauchit », qui redresse ce qui est tordu"] },
                },
                {
                  number: "💡",
                  text: "**Confirmer par le contexte** du texte.",
                  warn: "⚠️ Le contexte tranche : « dégauchisseuse » dans une liste d'outils de menuiserie confirme l'hypothèse.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Inférez le sens de « polyglotte » à partir des racines.",
              correction: [
                { type: "line", text: "poly- (grec, plusieurs) + glotte (grec, langue) → qui parle **plusieurs langues**." },
                { type: "note", text: "Méthode bien en tête ? Direction le Quiz éclair." },
              ],
            },
            {
              type: "ctaBox",
              text: "Méthode bien en tête ? Testez-vous.",
              buttonLabel: "Lancer le Quiz éclair",
              targetTab: "quiz",
            },
          ],
        },
      ],
    },
    {
      id: "pratiquer",
      label: "Pratiquer",
      icon: "",
      tabs: [
        {
          id: "quiz",
          label: "Quiz éclair",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "info",
              icon: "",
              title: "Avant de passer aux exercices",
              text: "8 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
            },
            {
              type: "quizBlock",
              questions: [
                {
                  objectifId: "mo1",
                  question: "« portefeuille » est formé par :",
                  options: ["dérivation préfixale", "composition populaire", "composition savante", "suffixation"],
                  correctIndex: 1,
                  explanation:
                    "« porte » et « feuille » sont deux mots autonomes assemblés : composition populaire.",
                },
                {
                  objectifId: "mo1",
                  question: "« déraison » est formé par :",
                  options: ["composition", "dérivation préfixale", "composition savante", "un mot simple"],
                  correctIndex: 1,
                  explanation:
                    "« dé- » n'est pas un mot autonome mais un préfixe : c'est une dérivation préfixale.",
                },
                {
                  objectifId: "mo2",
                  question: "Lequel change la classe grammaticale du mot ?",
                  options: ["Le préfixe", "Le suffixe", "Le radical", "Aucun des deux"],
                  correctIndex: 1,
                  explanation:
                    "Le suffixe peut changer la classe (lire → lecteur, verbe → nom) ; le préfixe la conserve.",
                },
                {
                  objectifId: "mo3",
                  question: "Le préfixe d'« irremplaçable » est :",
                  options: ["in-", "ir- (allomorphe de in- devant r)", "re-", "ir- (préfixe de répétition)"],
                  correctIndex: 1,
                  explanation:
                    "Devant un radical en r, in- devient ir- par assimilation : le préfixe négatif est ir-.",
                },
                {
                  objectifId: "mo4",
                  question: "« raisonnement » est :",
                  options: ["un adverbe en -ment", "un nom formé sur le verbe raisonner", "un mot composé", "un adjectif"],
                  correctIndex: 1,
                  explanation:
                    "Verbe raisonner + -ment → nom masculin. Le suffixe -ment forme un adverbe seulement sur une base adjectivale (lentement).",
                },
                {
                  objectifId: "mo5",
                  question: "« biographie » est formé par composition savante de :",
                  options: ["bio (vie) + graphie (écrire)", "deux mots français", "un préfixe + un radical", "bi- (deux) + ographie"],
                  correctIndex: 0,
                  explanation:
                    "bios (vie) + graphein (écrire) : récit d'une vie. Deux éléments grecs non autonomes.",
                },
                {
                  objectifId: "mo6",
                  question: "Le couple frêle / fragile (même étymon « fragilem ») est :",
                  options: ["des synonymes parfaits", "un doublet (mot populaire / mot savant)", "des faux amis", "des homonymes"],
                  correctIndex: 1,
                  explanation:
                    "Un doublet : « frêle » (populaire, très transformé) et « fragile » (savant, proche de l'étymon).",
                },
                {
                  objectifId: "mo7",
                  question: "« lire, lecteur, lecture, relire » forment :",
                  options: ["un champ lexical", "une famille de mots", "une composition", "des doublets"],
                  correctIndex: 1,
                  explanation:
                    "Ils partagent le même radical (lect-/li-) : c'est une famille de mots (critère morphologique).",
                },
              ],
            },
            {
              type: "ctaBox",
              text: "Quiz terminé ? Direction l'Application.",
              buttonLabel: "Voir l'Application",
              targetTab: "appli",
            },
          ],
        },
        {
          id: "appli",
          label: "Application",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "success",
              text: "Progression en 3 niveaux. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              stars: "★☆☆",
              label: "Niveau 1 : Identifier les morphèmes",
              sub: "Procédé, préfixe, suffixe, familles",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Simple ou construit ?",
              objectifTag: "Procédé",
              question: "Mot simple ou construit ? Si construit, nommez le procédé :\nrelire · sol · portefeuille · impossible · arc-en-ciel · surnaturel",
              correction: [
                { type: "line", text: "relire : construit, dérivation (re- + lire) · sol : simple · portefeuille : construit, composition populaire · impossible : construit, dérivation (im- + possible) · arc-en-ciel : construit, composition populaire · surnaturel : construit, dérivation (sur- + naturel)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Préfixe et suffixe",
              objectifTag: "Affixes",
              question:
                "a) Identifiez le préfixe et son sens : décomposer · surnaturel · prénatal · transporter.\nb) Identifiez le suffixe et la classe produite : formation · lentement · portable · liberté.",
              correction: [
                { type: "line", label: "a)", text: "dé- (action inverse) · sur- (au-delà) · pré- (antériorité) · trans- (à travers)." },
                { type: "line", label: "b)", text: "-tion → nom · -ment → adverbe · -able → adjectif · -té → nom." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Les allomorphes de in-",
              question: "Donnez l'allomorphe et la règle :\nindécis · impossible · illégal · irrégulier",
              correction: [
                { type: "line", text: "in- (indécis : consonne ordinaire) · im- (impossible : devant p) · il- (illégal : devant l) · ir- (irrégulier : devant r)." },
                { type: "line", text: "**Règle :** le préfixe s'assimile à la consonne initiale du radical (b/m/p → im-, l → il-, r → ir-)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser et expliquer",
              sub: "Formation, classe, sens en contexte",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : Formation et classe",
              question: "Analysez la formation et indiquez si la classe change :\nraisonnement · lentement · liberté · lecteur · portable",
              correction: [
                { type: "line", text: "raisonnement : raisonner + -ment → nom (verbe → nom) · lentement : lente + -ment → adverbe (adjectif → adverbe) · liberté : libre + -té → nom (adjectif → nom) · lecteur : lire + -eur → nom (verbe → nom) · portable : porter + -able → adjectif (verbe → adjectif)." },
                { type: "note", text: "💡 Le suffixe change ici toujours la classe ; le préfixe, lui, la conserve." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : Analyse en contexte",
              enonce: "« Vivre, sans l'écriture, me va mal. » (Lola Lafon, Quand tu écouteras cette chanson)",
              question: "Analysez la formation de « écriture » et expliquez son sens. Donnez trois mots de la même famille.",
              correction: [
                { type: "line", text: "**Suffixation** : radical **écrit-** (verbe écrire) + suffixe **-ure** (résultat, procédé). Classe : verbe → nom. « Écriture » désigne l'acte d'écrire et son résultat ; le contexte en fait un mode d'être indispensable." },
                { type: "line", text: "Famille : écrire, écrivain, écrit, réécriture." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : Famille ou champ lexical ?",
              question: "Pour le thème de l'écriture, donnez 4 mots de la même famille et 4 mots du champ lexical, puis expliquez la différence.",
              correction: [
                { type: "line", text: "**Famille** (même radical) : écrire, écriture, écrivain, réécriture." },
                { type: "line", text: "**Champ lexical** (même thème) : plume, encre, page, roman." },
                { type: "line", text: "La famille repose sur la morphologie (radical commun), le champ lexical sur le sens (thème). « écriture » appartient aux deux ; « plume » au champ lexical seulement." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Format jury complet",
              sub: "Mot inconnu, réponse rédigée, contexte",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 7 : Réponse jury complète",
              enonce: "« Il avait grandi dans la déraison des enfances paysannes. » (d'après Jean-Paul Sartre, Les Mots)",
              question: "Analysez la formation de « déraison » pour en expliquer le sens, et donnez quatre mots de la même famille.",
              correction: [
                { type: "line", text: "**Dérivation préfixale** à partir du nom « raison ». Le préfixe **dé-** a une valeur privative (absence, opposé). Classe conservée : nom → nom. « Déraison » = absence de raison, manque de discernement. Dans le texte, le terme désigne l'état de ceux privés d'accès à la culture lettrée." },
                { type: "line", text: "Famille : raison, raisonnement, raisonnable, déraisonnable." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 8 : Inférer un mot inconnu",
              enonce: "« Camille travaille le bois brut, trop sinueux, avec une dégauchisseuse. »",
              question: "« dégauchisseuse » n'est pas courant. Montrez comment l'analyse morphologique et le contexte permettent d'en inférer le sens.",
              correction: [
                { type: "line", text: "**Dérivation** : préfixe **dé-** (action corrective) + radical **gauch-** (gauchir : être tordu, sinueux) + suffixe **-euse** (nom d'outil, comme perceuse). L'analyse suggère un outil qui « dégauchit », qui redresse ce qui est tordu." },
                { type: "line", text: "Le contexte confirme : le bois est « sinueux » et l'outil sert à le travailler. La dégauchisseuse redresse le bois irrégulier." },
              ],
            },
          ],
        },
        {
          id: "crpe",
          label: "Type CRPE",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "success",
              icon: "",
              text: "Ces exercices reproduisent le format de la question sur la formation des mots en Partie 2. Les exercices calqués sur des sujets récents portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format identique au concours",
              title: "Exercice 1 : analyser pour expliquer le sens",
              enonce: "« Ce savoir-faire est irremplaçable dans le monde artisanal. »",
              question: "Analysez la formation de l'adjectif « irremplaçable » : procédé, segmentation, sens de chaque morphème, sens global.",
              correction: [
                { type: "line", text: "**Dérivation affixale.** Étape 1 : radical **remplac-** (verbe remplacer) + suffixe **-able** (possibilité) → remplaçable. Étape 2 : préfixe **ir-** (allomorphe de in- devant r, négation) → irremplaçable. Classe conservée : adjectif → adjectif. Sens : qu'on ne peut pas remplacer. Le doublement du r vient de l'assimilation du préfixe." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format identique au concours",
              title: "Exercice 2 : morphogramme et suffixe",
              enonce: "« Charles Baudelaire est tout aussi dégoûté du réel que l'Empereur de Yourcenar. »",
              question: "Analysez la formation du verbe « dégoûter ». Distinguez le morphogramme grammatical du suffixe lexical. Donnez trois mots de la même famille.",
              correction: [
                { type: "line", text: "**Dérivation verbale.** Le nom « goût » donne le verbe « goûter » par ajout de **-er**, qui est un **morphogramme grammatical** (marque de l'infinitif du 1er groupe), non un suffixe lexical. Puis le préfixe privatif **dé-** forme « dégoûter » (inspirer de la répulsion)." },
                { type: "line", text: "Famille : goût, dégoût, dégoûtant." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 3 : dérivation en chaîne",
              enonce: "« vraisemblablement » et « insupportable »",
              question: "Analysez la formation complète de chacun de ces deux mots. Pour « insupportable », nommez l'allomorphe du préfixe.",
              correction: [
                { type: "line", text: "**vraisemblablement** : vrai (adjectif) + sembler (verbe) → vraisemblable (adjectif) → vraisemblablement (adverbe, + -ment). Dérivation en chaîne, classe finale : adverbe." },
                { type: "line", text: "**insupportable** : préfixe **in-** (devant s : pas d'assimilation) + radical support- (verbe supporter) + suffixe -able (possibilité) → ce qu'on ne peut supporter." },
              ],
            },
          ],
        },
        {
          id: "cote-prof",
          label: "Côté prof",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "warning",
              icon: "",
              text: "Ces exercices reproduisent des **erreurs fréquentes** sur la formation des mots. Repérer ce qui cloche et corriger rigoureusement est une compétence directement valorisée au concours.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 1 · Réponse à corriger : déraison « composition »",
              enonce: "Copie d'un candidat : « “déraison” est formé par composition, de deux mots : “dé” et “raison”. »",
              question: "Identifiez et corrigez l'erreur.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Confusion dérivation / composition : « dé- » n'est pas un mot autonome", bad: true },
                    { text: "La composition assemble deux mots qui existent seuls (porte + feuille)" },
                    { text: "Réponse attendue : **dérivation préfixale** (préfixe dé- + radical raison)" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : -ment « ne change pas la classe »",
              enonce: "Copie d'un candidat : « “lentement” : lent + -ment ; le suffixe -ment ne change pas la classe grammaticale. »",
              question: "Identifiez et corrigez l'erreur.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« lent » est un adjectif, « lentement » un adverbe : la classe change", bad: true },
                    { text: "La base est la forme féminine « lente »" },
                    { text: "Réponse attendue : adjectif « lent » → « lente » + -ment → **adverbe** (changement de classe)" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : préfixe « in- »",
              enonce: "Copie d'un candidat : « le préfixe d'“irremplaçable” est in-, le préfixe négatif standard. »",
              question: "Identifiez et corrigez l'erreur.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "L'assimilation consonantique est ignorée", bad: true },
                    { text: "Devant un radical en r, in- prend la forme ir-" },
                    { text: "Réponse attendue : le préfixe est **ir-** (allomorphe de in- devant r), d'où le doublement du r" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 4 · Réponse à corriger : -ment « toujours adverbe »",
              enonce: "Copie d'un candidat : « “raisonnement” et “lentement” ont tous deux le suffixe -ment qui forme des adverbes. »",
              question: "Identifiez et corrigez l'erreur.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "-ment n'a pas une seule valeur", bad: true },
                    { text: "Sur un verbe, -ment forme un nom ; sur un adjectif féminin, un adverbe" },
                    { text: "Réponse attendue : « raisonnement » = **nom** (verbe + -ment) ; « lentement » = **adverbe** (adjectif féminin + -ment)" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "reviser",
      label: "Réviser",
      icon: "",
      tabs: [
        {
          id: "flash",
          label: "Flashcards",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "info",
              icon: "",
              text: "Cliquez sur chaque carte pour révéler la réponse. Essayez de répondre dans votre tête avant.",
            },
            {
              type: "flashcardDeck",
              cards: [
                {
                  question: "Dérivation ou composition ?",
                  answer:
                    "**Dérivation** : un affixe non autonome (préfixe ou suffixe) + un radical.\n**Composition** : deux bases qui existent seules.\nCritère : les éléments d'un composé peuvent fonctionner seuls ; les affixes, non.",
                  astuce: "⚠️ « dé- » n'est pas un mot → « déraison » = dérivation.",
                },
                {
                  question: "Préfixe ou suffixe : lequel change la classe ?",
                  answer:
                    "Le **préfixe conserve** la classe (in- + lisible = illisible, adjectif → adjectif).\nLe **suffixe peut la changer** (lire + -eur = lecteur, verbe → nom).",
                  astuce: "💡 Le suffixe SUFfit à changer la classe ; le préfixe PRÉserve.",
                },
                {
                  question: "Les 4 allomorphes du préfixe in- ?",
                  answer:
                    "**in-** (indécis) · **im-** devant b, m, p (impossible) · **il-** devant l (illégal) · **ir-** devant r (irremplaçable).\nRègle : assimilation à la consonne initiale du radical.",
                },
                {
                  question: "Le suffixe -ment : ses deux valeurs ?",
                  answer:
                    "Sur un **adjectif féminin** → **adverbe** (lente + -ment = lentement).\nSur un **verbe** → **nom masculin** (raisonner + -ment = raisonnement).",
                  astuce: "⚠️ Erreur fréquente : croire que « raisonnement » est un adverbe.",
                },
                {
                  question: "Composition savante : c'est quoi ?",
                  answer:
                    "L'assemblage d'éléments grecs ou latins non autonomes : bio- (vie), photo- (lumière), télé- (loin), -logie (science), -graphie (écrire).\n« biographie » = bios + graphein = récit d'une vie.",
                  astuce: "💡 Connaître les racines permet d'inférer le sens d'un mot inconnu.",
                },
                {
                  question: "Qu'est-ce qu'un doublet ?",
                  answer:
                    "Deux mots issus du même étymon par deux voies : **populaire** (oral, très transformé) et **savant** (emprunt au latin écrit, proche de l'étymon).\nfrêle/fragile, hôtel/hôpital, écouter/ausculter.",
                  astuce: "⚠️ Le mot savant est plus proche de l'étymon ; ce n'est pas une question de longueur.",
                },
                {
                  question: "Famille de mots ou champ lexical ?",
                  answer:
                    "**Famille** (morphologie) : même radical → lire, lecteur, lecture, relire.\n**Champ lexical** (sémantique) : même thème → lire, page, roman, auteur.",
                  astuce: "💡 « mots de la même famille » demande le radical, pas le thème.",
                },
                {
                  question: "La structure de réponse attendue par le jury ?",
                  answer:
                    "Quatre temps : 1) nommer le **procédé** ; 2) **segmenter** les morphèmes ; 3) expliquer le **sens** de chacun ; 4) **déduire et contextualiser** le sens global.",
                  astuce: "⚠️ Oublier le contexte (étape 4) est la principale perte de points.",
                },
              ],
            },
          ],
        },
        {
          id: "memo",
          label: "Mémo",
          icon: "",
          blocks: [
            {
              type: "mindmapLite",
              center: { title: "Formation", subtitle: "des mots" },
              branches: [
                {
                  title: "Deux procédés",
                  lines: ["Dérivation : affixe + radical", "Composition : deux bases", "Populaire ou savante"],
                  variant: "blue",
                },
                {
                  title: "La dérivation",
                  lines: ["Préfixe : conserve la classe", "Suffixe : peut la changer", "in- → im-, ir-, il-"],
                  variant: "green",
                },
                {
                  title: "Sens et racines",
                  lines: ["Racines grecques / latines", "Inférer un mot inconnu", "Composition savante"],
                  variant: "green",
                },
                {
                  title: "Étymons et familles",
                  lines: ["Doublets : populaire / savant", "Faux amis morphologiques", "Famille ≠ champ lexical"],
                  variant: "blue",
                },
                {
                  title: "Pièges classiques",
                  lines: ["Dérivation ≠ composition", "Allomorphe de in-", "-ment : adverbe ou nom"],
                  variant: "yellow",
                },
                {
                  title: "Renvois",
                  lines: ["Phonologie → notion 15", "Champ lexical → notion 13", "Relations sémantiques → notion 17"],
                  variant: "purple",
                  dashed: true,
                },
              ],
            },
          ],
        },
        {
          id: "autoeval",
          label: "Auto-évaluation",
          icon: "",
          blocks: [{ type: "autoEvalChecklist", items: OBJECTIFS }],
        },
      ],
    },
  ],
};
