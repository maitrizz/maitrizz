import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_FORMATION_DES_MOTS } from "./exercices-formation-des-mots";
import { COPIES_FORMATION_DES_MOTS } from "./copies-formation-des-mots";

const SAVOIR_FAIRE = [
  { id: "radical-famille", label: "Radical/famille" },
  { id: "prefixation", label: "Préfixation" },
  { id: "suffixation", label: "Suffixation" },
  { id: "composition", label: "Composition" },
  { id: "derivation", label: "Dérivation" },
  { id: "etymologie", label: "Étymologie" },
];

export const ficheFormationDesMots: Fiche = {
  slug: "formation-des-mots",
  matiere: "francais",
  numero: 17,
  partie: "Partie 2 : Lexique",
  title: "La formation des mots",
  subtitle: "Mots simples et construits, dérivation, composition, familles de mots, préfixes, suffixes et radicaux",
  badges: [
      {
          "label": "★★★ Tombe à chaque session",
          "variant": "hot"
      },
      {
          "label": "Cycle 2-3-4 · Étude de la langue",
          "variant": "info"
      }
  ],
  metaTitle: "La formation des mots (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur la formation des mots : mots simples et construits, dérivation (radical, préfixe, suffixe, allomorphes de in-, double valeur de -ment), composition populaire et savante, doublets, faux amis morphologiques, familles de mots et champ lexical. Méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
  tabGroups: [
    {
      id: "apprendre",
      label: "Apprendre",
      icon: "",
      tabs: [
        {
          id: "comprendre",
          label: "Comprendre",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "info",
              icon: "",
              title: "Avant de commencer",
              text: "Le français forme ses mots par deux procédés : la **dérivation** (on ajoute des affixes à un radical) et la **composition** (on assemble deux bases autonomes). Connaître la valeur des préfixes, suffixes et radicaux permet d'**inférer le sens d'un mot inconnu** en le décomposant : c'est une compétence attendue au concours et un levier d'apprentissage du lexique à l'école (voir les [ressources Lexique et culture d'Éduscol](https://eduscol.education.fr/255/lexique-et-culture)). Avant la typologie, posons le **vocabulaire de base** : morphème, radical, base, affixe.",
            },
            {
              type: "callout",
              variant: "success",
              icon: "🔍",
              title: "Partons d'un exemple : « inclassable »",
              text: "Prenez un mot que vous n'auriez jamais appris par cœur : « **inclassable** ». On le découpe en trois morceaux : **in-** + **class-** + **-able**. Chacun porte un sens : **in-** dit « ne pas », **class-** renvoie au verbe « classer », **-able** dit « que l'on peut ». Bout à bout : « que l'on ne peut pas classer ». Vous venez d'analyser la formation d'un mot sans le connaître. Chacun de ces morceaux de sens s'appelle un **morphème** ; reste à poser les bons noms dessus.",
            },
            {
              type: "table",
              title: "Les briques d'un mot",
              headers: ["Terme", "Définition", "Exemple"],
              rows: [
                ["Morphème", "La plus petite unité de **sens** d'un mot : on ne peut pas la couper davantage sans perdre du sens.", "« in- », « class- », « -able » dans inclassable"],
                ["Radical", "Le morphème qui porte le **sens de base** ; il reste reconnaissable dans toute la famille du mot.", "**class-** (classer, classement, classeur, classification)"],
                ["Base", "L'élément sur lequel on construit, qu'il soit **simple ou déjà construit** : la base est donc parfois plus large que le radical.", "« class**able** » est la base de « **in**classable »"],
                ["Affixe", "Un morphème **non autonome** ajouté à la base : **préfixe** avant, **suffixe** après.", "**in-** (préfixe), **-able** (suffixe)"],
              ],
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
                  text: "Le **radical** porte le sens de base et reste reconnaissable dans toute la famille du mot. Il prend parfois plusieurs formes : ce sont ses **allomorphes**. Un **allomorphe** est l'une des variantes d'un même morphème selon son entourage : le radical de « écrire » apparaît sous les formes « écri- » (écrire), « écriv- » (écrivain), « écrit- » (écriture), et c'est toujours le même morphème. Un **affixe**, lui, est un morphème non autonome ajouté à la base : **préfixe** (avant le radical) ou **suffixe** (après le radical).",
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
                  title: "Préfixes à connaître (un sens par ligne)",
                  headers: ["Préfixe", "Sens", "Exemples"],
                  rows: [
                    ["dé-, dés-", "privation, action inverse", "défaire, désordre, déraison"],
                    ["re-, ré-, r-", "répétition, retour", "relire, réécrire, rouvrir"],
                    ["in-, im-, il-, ir-", "négation", "inactif, impossible, illisible, irréel"],
                    ["mé-, més-", "négation, sens péjoratif", "méconnaître, mésentente"],
                    ["pré-", "antériorité (avant)", "prévoir, préhistoire, prénatal"],
                    ["anti-", "opposition (contre)", "antivol, antibrouillard"],
                    ["sur-, super-", "au-dessus, excès", "surnaturel, supermarché"],
                    ["sous-, sub-", "en dessous, infériorité", "sous-sol, submerger"],
                    ["trans-", "à travers, au-delà", "transporter, transatlantique"],
                    ["inter-", "entre", "interligne, international"],
                    ["co-, com-, con-", "avec, association", "coéquipier, compatriote"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Les allomorphes de in-",
                  text: "Le préfixe négatif **in-** change de forme selon la consonne qui suit, mais il reste le même morphème (ce sont ses **allomorphes**) : **im-** devant b, m, p (impossible) ; **ir-** devant r (irréel) ; **il-** devant l (illégal) ; **in-** partout ailleurs (indécis). Cette adaptation au son qui suit est une **assimilation** (voir la [phonologie](fiche:phonologie)). Préciser le bon allomorphe est valorisé : on écrit « **ir**réel », pas « in-réel ».",
                },
                {
                  type: "table",
                  title: "Suffixes à connaître (classés par ce qu'ils produisent)",
                  headers: ["Suffixe", "Classe produite", "Valeur et exemples"],
                  rows: [
                    ["-tion, -sion, -ation", "nom", "action ou résultat : formation, décision"],
                    ["-ment", "nom", "résultat d'une action, sur un verbe : raisonnement, classement"],
                    ["-age", "nom", "action ou résultat : lavage, démarrage"],
                    ["-eur/-euse, -ateur/-atrice", "nom", "agent, métier ou outil : lecteur, perceuse, ordinateur"],
                    ["-té, -ité, -esse", "nom", "qualité abstraite : bonté, liberté, richesse"],
                    ["-et/-ette, -on", "nom", "diminutif, plus petit : maisonnette, ourson"],
                    ["-able, -ible", "adjectif", "possibilité : remplaçable, lisible"],
                    ["-eux/-euse", "adjectif", "qui a la qualité de : courageux, peureux"],
                    ["-al/-el, -ique", "adjectif", "relation, appartenance : national, culturel, poétique"],
                    ["-iser, -ifier", "verbe", "rendre, transformer : moderniser, clarifier"],
                    ["-ment", "adverbe", "manière, sur un adjectif féminin : lentement, doucement"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "Suffixe lexical ou morphogramme ?",
                  text: "Un **morphogramme** est une lettre (souvent muette) qui marque une information grammaticale ou orthographique **sans créer de mot nouveau** : le **-s** du pluriel, le **-e** du féminin, le **-er** de l'infinitif, le **-d** muet de « grand » (qui se justifie par « grande », « grandeur »). Un **suffixe lexical**, à l'opposé, **crée un mot nouveau**, souvent d'une autre classe (« classer » → « classeur »). Dans « dégoûter », le **-er** est donc un morphogramme (marque de l'infinitif), pas un suffixe.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  icon: "🌳",
                  title: "À ne pas confondre : famille de mots et champ lexical",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "C'est la distinction la plus piégeuse de la notion, et elle revient souvent. Une **famille de mots** se définit par la **forme** (un radical commun) ; un **champ lexical** par le **sens** (un thème commun). Le critère de tri n'est pas le même.",
                    },
                    {
                      type: "comparisonGrid",
                      rows: [
                        { label: "Famille de mots → critère : le radical", good: "Même radical, on les reconnaît à l'œil : **terre, terrain, terrestre, atterrir, souterrain**." },
                        { label: "Champ lexical → critère : le thème", good: "Formes différentes réunies par le sens : **terre, champ, labour, paysan, récolte**." },
                      ],
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      text: "⚠️ « Donnez des mots de la même **famille** » attend le **radical** (morphologie) ; « relevez le **champ lexical** » attend le **thème** (sens), travaillé dans la notion [relations sémantiques](fiche:relations-semantiques). Un même mot peut relever des deux : « terre » est dans sa famille et dans le champ lexical de la campagne.",
                    },
                  ],
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
                  title: "Racines latines fréquentes",
                  headers: ["Racine", "Sens", "Exemples"],
                  rows: [
                    ["aqua-", "eau", "aquatique, aquarium, aqueduc"],
                    ["terr-", "terre", "terrestre, territoire, atterrir"],
                    ["man(u)-", "main", "manuel, manuscrit, manipuler"],
                    ["scrib-, script-", "écrire", "manuscrit, inscription, scribe"],
                    ["vid-, vis-", "voir", "visible, vision, téléviseur"],
                    ["aud(i)-", "entendre", "audition, auditeur, audible"],
                    ["voc-, voca-", "voix, appeler", "vocal, convoquer, vocabulaire"],
                    ["port-", "porter", "porter, transporter, exporter"],
                    ["multi-", "nombreux", "multiple, multicolore"],
                    ["omni-", "tout", "omnivore, omniprésent"],
                    ["-vore", "qui mange", "carnivore, herbivore"],
                  ],
                },
                {
                  type: "table",
                  title: "Racines grecques fréquentes",
                  headers: ["Racine", "Sens", "Exemples"],
                  rows: [
                    ["bio-", "vie", "biologie, biographie"],
                    ["géo-", "terre", "géographie, géologie"],
                    ["chrono-", "temps", "chronologie, chronomètre"],
                    ["anthropo-", "homme, être humain", "anthropologie, philanthrope"],
                    ["phil(o)-", "aimer", "philosophie, bibliophile"],
                    ["poly-", "plusieurs", "polyglotte, polygone"],
                    ["micro-", "petit", "microbe, microscope"],
                    ["télé-", "loin", "téléphone, télévision"],
                    ["hydro-", "eau", "hydratation, hydravion"],
                    ["-logie", "science, étude", "biologie, géologie"],
                    ["-graphie", "écriture, tracé", "géographie, orthographe"],
                    ["-phone", "voix, son", "téléphone, francophone"],
                    ["-phage", "qui mange", "anthropophage, chronophage"],
                    ["-scope", "observer", "microscope, télescope"],
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Étymons, doublets et faux amis",
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
              ],
            },
            {
              type: "subsection",
              number: "⑤",
              title: "Les autres procédés de formation",
              blocks: [
                {
                  type: "paragraph",
                  text: "La dérivation et la composition ne sont pas les seules façons de fabriquer des mots. Quatre autres procédés, plus brefs ou venus d'ailleurs, sont à connaître.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Abrègement (troncation)",
                      definition: "Raccourcir un mot long ; la forme courte devient autonome.",
                      exemples: ["**télé** (télévision), **prof** (professeur), **resto** (restaurant), **vélo** (vélocipède)"],
                    },
                    {
                      title: "Siglaison",
                      definition: "Former un mot avec les initiales d'un groupe de mots. **Sigle** : on épelle les lettres ; **acronyme** : on le prononce comme un mot.",
                      exemples: ["Sigle : **SNCF**, **TGV**, **CRPE** · Acronyme : **OVNI**, **radar**, **sida**"],
                    },
                    {
                      title: "Mot-valise",
                      definition: "Fusionner deux mots en gardant une partie de chacun.",
                      exemples: ["**franglais** (français + anglais), **alicament** (aliment + médicament), **courriel** (courrier + électronique)"],
                    },
                    {
                      title: "Emprunt",
                      definition: "Adopter un mot d'une autre langue, parfois adapté à l'orthographe française.",
                      exemples: ["**week-end**, **football** (anglais) · **pizza** (italien) · **bazar** (persan)"],
                    },
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · confondre dérivation et composition",
              badge: "Erreur très fréquente",
              faux: "« déraison » est un mot composé, formé de « dé » et de « raison ».",
              vrai: "Le test est simple : **chaque morceau peut-il s'employer seul comme mot ?** « raison » oui, mais « **dé-** » non : c'est un préfixe, jamais un mot autonome. Dès qu'un morceau ne tient pas seul (dé-, in-, -able, -tion…), on est dans la **dérivation**, pas la composition. « déraison » = préfixe dé- + radical raison → **dérivation préfixale**. La composition, elle, n'assemble que des mots qui existent seuls : porte + feuille → portefeuille.",
              methode: "Passez les morceaux un par un : « ce morceau existe-t-il seul comme mot ? ». Un seul « non » suffit à écarter la composition.",
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
              text: "**Cycle 1 (maternelle) :** pas encore d'analyse morphologique, mais un travail oral du vocabulaire et des jeux sur les mots d'une même famille (jardin, jardinier, jardiner).\n\n**Cycle 2 :** les familles de mots aident à orthographier (le « d » muet de « grand » se justifie par « grande », « grandeur »).\n\n**Cycle 3 :** la dérivation devient un outil pour comprendre et enrichir le vocabulaire (former des mots à partir d'un radical, repérer préfixes et suffixes, deviner le sens d'un mot construit).\n\n**Ce que vous devez savoir dire :** « Comprendre la morphologie d'un mot aide à l'écrire (familles de mots) et à en deviner le sens (préfixes, suffixes, radicaux). C'est un levier pour le vocabulaire et l'orthographe, amorcé à l'oral dès la maternelle puis analysé aux cycles 2 et 3. » (voir [Éduscol, étude de la langue cycles 2 et 3](https://eduscol.education.fr/248/francais-cycles-2-et-3-etude-de-la-langue))",
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
                "**Question de concours :** « *Ce savoir-faire est irremplaçable.* Analysez la formation du mot « irremplaçable » et expliquez son sens. »\nQuatre étapes, déroulées ci-dessous sur ce mot.",
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
                {
                  number: "📌",
                  text: "**Réponse attendue (formulation modèle) :** « *Irremplaçable* est formé par **dérivation** : préfixe **ir-** (allomorphe de in-, négation) + radical **remplac-** (verbe remplacer) + suffixe **-able** (possibilité). La classe est conservée (adjectif). Le mot signifie *qu'on ne peut pas remplacer*, ce que le contexte confirme. »",
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
                "**Question de concours :** « Le mot « portefeuille » est-il formé par dérivation ou par composition ? Justifiez votre réponse. »\nDéroulons la démarche sur ce mot.",
              steps: [
                {
                  number: "1",
                  text: "**Tester l'autonomie des éléments** : chaque partie peut-elle s'employer seule comme mot ? Dans « portefeuille », *porte* et *feuille* existent seuls : ce sont deux mots assemblés, donc une **composition**.",
                  example: { lines: ["porte + feuille → deux mots autonomes → composition"] },
                },
                {
                  number: "2",
                  text: "**Préciser populaire ou savante** : deux mots français → composition populaire ; deux éléments grecs ou latins → composition savante.",
                  example: { lines: ["porte et feuille sont français → composition populaire"] },
                },
                {
                  number: "💡",
                  text: "**Vérifier l'inséparabilité** et donner le sens global.",
                  warn: "⚠️ Si un élément n'existe pas seul (dé-, in-, -able), ce n'est pas une composition mais une dérivation : « déraison » = dé- (non autonome) + raison.",
                },
                {
                  number: "📌",
                  text: "**Réponse attendue (formulation modèle) :** « *Portefeuille* est formé par **composition populaire** : il assemble deux mots français autonomes, *porte* (du verbe porter) et *feuille*. Les deux existent seuls et sont inséparables dans le mot composé, qui désigne l'étui où l'on range billets et papiers. »",
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
                "**Question de concours :** « *Camille travaille le bois avec une dégauchisseuse.* Ce mot n'est pas courant : montrez comment l'analyse morphologique et le contexte permettent d'en deviner le sens. »\nDéroulons la démarche sur « dégauchisseuse ».",
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
                {
                  number: "📌",
                  text: "**Réponse attendue (formulation modèle) :** « En décomposant **dé-** (action corrective) + **gauch-** (gauchir, être tordu) + **-euse** (nom d'outil), j'infère que la *dégauchisseuse* est un outil qui redresse le bois tordu ; le contexte, où le bois est *sinueux*, le confirme. »",
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
                { type: "note", text: "@nav Méthode en tête ? Direction S’entraîner." },
              ],
            },
            {
              type: "ctaBox",
              text: "Méthode bien en tête ? Passez à l’application.",
              buttonLabel: "Aller à Appliquer",
              targetTab: "appliquer",
            },
          ],
        },
      ],
    },
    {
      id: "entrainer",
      label: "S'entraîner",
      icon: "",
      tabs: [
        {
          id: "appliquer",
          label: "Appliquer",
          icon: "",
          blocks: [
            {
              type: "exerciceBank",
              title: "La formation des mots",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_FORMATION_DES_MOTS,
            },
          ],
        },
        {
          id: "corriger",
          label: "Corriger des erreurs",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "info",
              icon: "",
              text: "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
            },
            {
              type: "corrigerCopies",
              title: "La formation des mots",
              copies: COPIES_FORMATION_DES_MOTS,
            },
          ],
        },
      ],
    },
    {
      id: "memo",
      label: "Mémo",
      icon: "",
      tabs: [
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
                  lines: ["Phonologie → notion 16", "Champ lexical → notion 18", "Relations sémantiques → notion 18"],
                  variant: "purple",
                  dashed: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
