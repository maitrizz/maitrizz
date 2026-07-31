import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_ACCORDS_GN_GV } from "./exercices-accords-gn-gv";
import { COPIES_ACCORDS_GN_GV } from "./copies-accords-gn-gv";

export const SAVOIR_FAIRE = [
  { id: "accords-gn", label: "Accords dans le GN" },
  { id: "sujet-verbe", label: "Sujet-verbe" },
  { id: "sujet-inverse-eloigne", label: "Sujet inversé/éloigné" },
  { id: "collectifs-coordination", label: "Collectifs/coordination" },
  { id: "accords-complexes", label: "Accords complexes" },
];

export const ficheAccordsGnGv: Fiche = {
  slug: "accords-gn-gv",
  matiere: "francais",
  numero: 11,
  partie: "Partie 1 : Orthographe grammaticale",
  title: "Les accords dans le GN et le GV",
  subtitle: "Accord du nom et de l'adjectif, accord sujet-verbe, chaîne d'accord et cas difficiles.",
  badges: [
      {
          "label": "★★ Fréquent",
          "variant": "hot"
      },
      {
          "label": "Cycle 3-4 · BOEN n°1 du 22 janvier 2019",
          "variant": "info"
      }
  ],
  metaTitle: "Accords dans le GN et le GV · Fiche de révision CRPE",
  metaDescription:
    "Les accords au CRPE : dans le groupe nominal (épithète, attribut) et l'accord sujet-verbe, sujets collectifs ou coordonnés. Méthode et exercices corrigés.",
  maitriseNotionSlug: "accords-gn-gv",
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
              text: "L'accord est un mécanisme par lequel un mot (le **receveur**) reçoit le genre et le nombre d'un autre (le **donneur**). Dans le GN, le donneur est le nom noyau ; dans le GV, c'est le groupe sujet. Ces accords sont une source d'erreurs très fréquente dans les copies, y compris dans la Partie 3. L'accord du participe passé (avec être, avec avoir, pronominaux) fait l'objet d'une notion à part : la notion 12.",
            },
            {
              type: "subsection",
              number: "①",
              title: "L'accord dans le GN : le nom noyau, donneur d'accord",
              blocks: [
                {
                  type: "paragraph",
                  text: "Dans un groupe nominal, le **nom noyau** donne son genre et son nombre à tous les éléments qui s'y rapportent : déterminant, adjectifs épithètes et attributs.\n\n« de petites fleurs sauvages » → noyau « fleurs » (féminin pluriel) → « petites » et « sauvages » au féminin pluriel.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Adjectif épithète",
                      definition: "Liée (accolée au nom) ou détachée (séparée par une virgule). Elle s'accorde avec son nom noyau.",
                      exemples: [
                        "« une longue rue **étroite** » : « étroite » au féminin singulier (accord avec « rue »)",
                        "« **Épuisée**, elle s'endormit » : « Épuisée » au féminin singulier (accord avec « elle »)",
                      ],
                      test: "L'adjectif fait partie du GN (ou se rapporte au nom détaché), sans verbe d'état.",
                    },
                    {
                      title: "Adjectif attribut du sujet",
                      definition: "Relié au sujet par un verbe d'état (être, paraître, sembler, devenir, rester…). Il s'accorde avec le groupe sujet.",
                      exemples: [
                        "« Les enfants semblaient **fatigués** » : « fatigués » au masculin pluriel (accord avec « enfants »)",
                      ],
                      test: "Un verbe d'état relie le sujet et l'adjectif (voir la notion 4 pour les verbes attributifs).",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Comment accorder après « avoir l'air » ?",
                  text: "Tout dépend du sens. Si « avoir l'air » signifie **sembler**, l'adjectif est attribut du sujet et s'accorde avec lui : « Elle a l'air **heureuse** » signifie « Elle semble heureuse ». Si « air » signifie **mine, allure**, l'adjectif qualifie le nom masculin « air » et s'accorde avec lui : « Elle a l'air **sérieux** » signifie « Elle a un air sérieux ». Dans la plupart des emplois, « avoir l'air » signifie « sembler » : on accorde alors avec le sujet.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les cas difficiles du GN",
              blocks: [
                {
                  type: "paragraph",
                  text: "Trois familles de cas méritent une vigilance particulière : les noms coordonnés, les adjectifs de couleur, et quelques préfixes invariables.",
                },
                {
                  type: "table",
                  title: "Accord avec plusieurs noms coordonnés",
                  headers: ["Situation", "Règle", "Exemple"],
                  rows: [
                    ["Noms masculin + féminin", "Masculin pluriel (le masculin l'emporte)", "« un livre et une revue illustrés »"],
                    ["Noms tous masculins", "Masculin pluriel", "« un stylo et un crayon noirs »"],
                    ["Noms tous féminins", "Féminin pluriel", "« une robe et une veste neuves »"],
                    ["Dernier nom seul qualifié", "Accord avec le dernier nom", "« avec soin et minutie particulière »"],
                  ],
                },
                {
                  type: "table",
                  title: "Adjectifs de couleur et préfixes",
                  headers: ["Cas", "Règle", "Exemples"],
                  rows: [
                    ["Couleur simple", "S'accorde", "« des robes rouges », « des yeux bleus »"],
                    ["Couleur composée", "Invariable", "« des yeux bleu-vert », « des robes bleu marine »"],
                    ["Nom employé comme couleur", "Certains noms servent aussi à désigner une couleur : un marron → marron ; une orange → orange ; la crème → crème. Lorsqu'ils indiquent une couleur, ils ne s'accordent pas.", "« des pulls marron », « des chaussures crème », « des robes orange »"],
                    ["mi-, demi-, semi- (devant le nom)", "Invariables", "« une demi-heure », « à mi-chemin »"],
                    ["nu-, grand- (avant le nom)", "Invariables", "« nu-pieds », « grand-mère » (mais « les grands-parents »)"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  text: "Exception pour les couleurs : rose, mauve, écarlate, pourpre, fauve sont devenus de vrais adjectifs et s'accordent (« des robes roses »).",
                },
                {
                  type: "table",
                  title: "Accord de « tel », « tel que », « tel quel »",
                  headers: ["Forme", "Règle", "Exemple"],
                  rows: [
                    ["**tel** (sans « que »)", "S'accorde avec le nom qui **suit**", "« de **tels** efforts », « une **telle** ardeur »"],
                    ["**tel que**", "S'accorde avec le nom qui **précède** (l'antécédent)", "« des qualités **telles que** la patience » (telles = avec « qualités »)"],
                    ["**tel quel**", "S'accorde avec le nom auquel il se rapporte", "« j'ai laissé les choses **telles quelles** »"],
                  ],
                },
                {
                  type: "table",
                  title: "Les numéraux : vingt, cent, mille",
                  headers: ["Numéral", "Règle", "Exemple"],
                  rows: [
                    ["**vingt** et **cent**", "Prennent un **s** quand ils sont multipliés ET terminent le nombre ; invariables s'ils sont suivis d'un autre numéral", "« quatre-**vingts** » mais « quatre-**vingt**-deux » ; « deux **cents** » mais « deux **cent** trois »"],
                    ["**mille** (adjectif numéral)", "**Toujours invariable**", "« trois **mille** euros », « des **mille** et des **cents** »"],
                    ["**million**, **milliard**", "Ce sont des **noms** : ils prennent un **s** au pluriel", "« trois **millions** d'habitants »"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  text: "« ci-joint », « ci-annexé », « ci-inclus » : **invariables** en tête de phrase ou devant un nom sans déterminant (« **Ci-joint** la facture », « veuillez trouver **ci-joint** copie du dossier ») ; **variables** quand ils suivent un nom déterminé (« la facture **ci-jointe** »).",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "L'accord sujet-verbe",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le verbe conjugué reçoit la **personne** et le **nombre** du **groupe sujet**. L'outil de vérification est le test d'encadrement **« c'est / ce sont… qui »** : le groupe encadré est le sujet.\n\n« Les enfants jouent » → « Ce sont les enfants qui jouent » → groupe sujet « les enfants » (3e personne du pluriel) → « jouent ».",
                },
                {
                  type: "table",
                  title: "Sujets coordonnés et collectifs",
                  headers: ["Sujet", "Accord", "Exemple"],
                  rows: [
                    ["Noms unis par « et »", "Pluriel", "« Le chien et le chat dorment. »"],
                    ["Noms unis par « ou » / « ni »", "Pluriel le plus souvent (singulier si exclusion totale)", "« Ni lui ni elle ne sont venus. »"],
                    ["La plupart (de + nom pluriel)", "Toujours pluriel", "« La plupart des élèves ont réussi. »"],
                    ["Beaucoup de, peu de, trop de + nom", "Accord avec le nom complément", "« Beaucoup d'enfants jouent. »"],
                    ["Un grand nombre de", "Généralement pluriel : l'expression signifie « beaucoup de » et met l'accent sur les éléments comptés", "« Un grand nombre de candidats ont échoué. »"],
                    ["Le nombre de", "Singulier : on parle du nombre, c'est-à-dire du chiffre ou de la quantité considérée comme un tout", "« Le nombre de candidats a augmenté. »"],
                    ["Un des… qui", "Généralement pluriel si l'on désigne un élément parmi plusieurs qui accomplissent l'action ; singulier si la relative distingue un élément unique", "« C'est un des livres qui m'ont marqué. » ; « C'est le seul des livres qui m'a marqué. »"],
                  ],
                },
                {
                  type: "table",
                  title: "Sujets particuliers",
                  headers: ["Sujet", "Accord", "Exemple"],
                  rows: [
                    ["On", "Le verbe est toujours à la 3e personne du singulier. L'adjectif ou le participe reste au masculin singulier si « on » désigne une personne indéterminée ; il peut s'accorder en genre et en nombre si « on » remplace « nous ».", "« On travaille. » ; règle générale : « On est prudent. » ; plusieurs femmes parlant d'elles-mêmes : « On est prêtes. »"],
                    ["Qui (pronom relatif)", "Avec l'antécédent", "« C'est moi qui suis venu. » ; « C'est toi qui es venu. »"],
                    ["Ce qui / Tout ce qui", "3e personne du singulier", "« Tout ce qui brille n'est pas or. »"],
                    ["Titre d'œuvre", "Singulier (l'œuvre)", "« Les Misérables est un roman de Victor Hugo. »"],
                    ["Plus d'un", "Verbe au **singulier** (malgré le sens pluriel)", "« **Plus d'un** candidat **a** échoué. »"],
                    ["Moins de deux", "Verbe au **pluriel**", "« **Moins de deux** ans **se sont** écoulés. »"],
                    ["Le peu de", "Selon le sens : insuffisance → singulier ; une certaine quantité → accord avec le complément", "« **Le peu** d'efforts **l'a** découragé. » (insuffisance) ; « **Le peu** d'efforts qu'il a **faits** » (quantité)"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Le sujet éloigné ou intercalé",
                  text: "Quand un complément s'intercale dans le groupe sujet, l'accord se fait avec le **nom noyau**, pas avec le nom le plus proche : dans « La liste des candidats **est** longue », le groupe sujet est « La liste des candidats » et son noyau « liste » est singulier. Accorder avec « candidats » serait une erreur d'**attraction**.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "La chaîne d'accord : schéma de relecture",
              blocks: [
                {
                  type: "paragraph",
                  text: "Pour relire efficacement, on identifie d'abord les **donneurs** (nom noyau du GN, groupe sujet du GV), puis on vérifie que chaque **receveur** (déterminant, adjectif, verbe) porte les bonnes marques.",
                },
                {
                  type: "formulaBlock",
                  title: "Relecture en 3 étapes",
                  lines: [
                    "① Repérer chaque GN → trouver le nom noyau → vérifier genre et nombre de chaque déterminant et adjectif.",
                    "② Repérer chaque GV → isoler le groupe sujet (test « c'est / ce sont… qui ») → vérifier personne et nombre du verbe.",
                    "③ Traiter les cas particuliers : sujets collectifs, coordonnés, inversés ; adjectifs de couleur.",
                  ],
                  note: "Compter 3 à 5 minutes de relecture ciblée sur les accords en fin d'épreuve.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · L'attraction (accord par proximité)",
              badge: "Très fréquent",
              faux: "« La liste des candidats **contiennent** plusieurs erreurs. » Le verbe a été accordé avec le nom pluriel le plus proche, « candidats ».",
              vrai: "Le groupe sujet est « la liste des candidats ». Son nom noyau est « liste », au singulier : le verbe doit donc être au singulier. On écrit : « La liste des candidats **contient** plusieurs erreurs. »",
              methode: "Repérer le groupe sujet, puis retirer mentalement son complément : « La liste contient plusieurs erreurs. » L'accord devient évident.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · Accord avec plusieurs noms coordonnés",
              badge: "Source d'erreurs",
              faux: "« un livre et une revue illustrée » (accord avec le seul dernier nom).",
              vrai: "Deux noms coordonnés par « et » → pluriel ; masculin + féminin → masculin pluriel : « un livre et une revue **illustrés** ».",
              methode: "Repérer tous les noms coordonnés que l'adjectif qualifie, puis accorder au pluriel (masculin si genres mêlés).",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · Adjectifs de couleur",
              badge: "Cas difficile",
              faux: "« des pulls marrons », « des chaussures crèmes ».",
              vrai: "Les **noms employés comme couleurs** (marron, crème, kaki, saumon…) et les **couleurs composées** (bleu marine) sont **invariables** : « des pulls **marron** ».",
              methode: "Se demander si le mot est un vrai adjectif (rouge, bleu : accord) ou un nom employé comme couleur (marron, crème : invariable).",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · L'accord avec « la plupart »",
              badge: "À mémoriser",
              faux: "« La plupart des élèves **a réussi**. » Le verbe a été mis au singulier à cause du nom « plupart ».",
              vrai: "Avec « la plupart de » suivi d'un nom pluriel, le verbe se met au **pluriel** : « La plupart des élèves **ont réussi**. »",
              methode: "Repérer le nom placé après « la plupart de » : s'il est au pluriel, le verbe est au pluriel.",
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
              type: "rappelExpress",
              title: "Deux réflexes",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "Pour accorder un adjectif : chercher le nom qu'il qualifie.",
                    "Pour accorder un verbe : chercher son groupe sujet.",
                  ],
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Vérifier l'accord dans le GN",
              intro:
                "*Question typique : Dans le GN « de <u>longues</u> heures <u>silencieuses</u> », justifiez l'accord des adjectifs soulignés.*",
              steps: [
                {
                  number: "1",
                  text: "**À quel nom les adjectifs se rapportent-ils ?**",
                  example: { lines: ["« longues » et « silencieuses » qualifient le nom « heures »."] },
                },
                {
                  number: "2",
                  text: "**Quel est le genre et le nombre de ce nom ?** Reporter ces marques sur les adjectifs.",
                  example: { lines: ["« heures » est féminin pluriel → « longues », « silencieuses »."] },
                },
                {
                  number: "💡",
                  text: "**Réponse attendue :** Les adjectifs « longues » et « silencieuses » se rapportent au nom « heures », féminin pluriel. Ils s'accordent donc avec ce nom au féminin pluriel.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Justifiez l'accord de l'adjectif dans « un manteau et une veste <u>neufs</u> ».",
              correction: [
                { type: "line", text: "**Réponse attendue :** L'adjectif qualificatif « neufs » se rapporte aux deux noms coordonnés « manteau », masculin singulier, et « veste », féminin singulier. Comme il qualifie plusieurs éléments, il se met au pluriel. Les noms étant de genres différents, l'accord se fait au masculin pluriel : « neufs »." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Vérifier l'accord sujet-verbe",
              intro:
                "*Question typique : Dans « <u>Arrivent</u> alors les rescapés », justifiez l'accord du verbe souligné.*",
              steps: [
                {
                  number: "1",
                  text: "**Quel groupe commande le verbe ?** Poser la question « qui est-ce qui ? » ou utiliser « c'est / ce sont… qui ».",
                  example: { lines: ["Qui est-ce qui arrive ? → « les rescapés »."] },
                },
                {
                  number: "2",
                  text: "**Par quel pronom peut-on remplacer ce groupe sujet ?** Conjuguer le verbe avec ce pronom.",
                  example: { lines: ["« les rescapés » → « ils » → « ils arrivent »."] },
                },
                {
                  number: "💡",
                  text: "**Réponse attendue :** Le groupe sujet de « arrivent » est « les rescapés », placé après le verbe. Il peut être remplacé par « ils », pronom de la troisième personne du pluriel. Le verbe « arriver » est donc conjugué au présent de l'indicatif à la troisième personne du pluriel : « arrivent ».",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Conjuguez le verbe et justifiez son accord : « Au fond du jardin (pousser) de grands arbres. »",
              correction: [
                { type: "line", text: "**Réponse attendue :** On écrit « Au fond du jardin **poussent** de grands arbres ». Le groupe sujet « de grands arbres » est placé après le verbe et correspond à la troisième personne du pluriel. « Au fond du jardin » est un complément circonstanciel de lieu : le nom singulier « jardin » ne commande pas l'accord du verbe." },
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
              title: "Les accords dans le GN et le GV",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_ACCORDS_GN_GV,
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
              title: "Les accords dans le GN et le GV",
              copies: COPIES_ACCORDS_GN_GV,
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
              center: { title: "Les accords", subtitle: "GN et GV" },
              branches: [
                {
                  title: "Accord dans le GN",
                  lines: ["Donneur : le nom noyau", "Receveurs : déterminant, adjectifs", "Épithète / attribut du sujet"],
                  variant: "blue",
                },
                {
                  title: "Cas difficiles du GN",
                  lines: ["Plusieurs noms : masculin l'emporte", "Couleurs : nom-couleur invariable", "mi-, demi-, nu-, grand- : invariables"],
                  variant: "blue",
                },
                {
                  title: "Accord sujet-verbe",
                  lines: ["Donneur : le groupe sujet", "Test « c'est / ce sont… qui »", "Sujet inversé ou éloigné"],
                  variant: "green",
                },
                {
                  title: "Sujets particuliers",
                  lines: ["La plupart de + pluriel → pluriel", "On → 3e sing.", "Qui → accord avec l'antécédent"],
                  variant: "green",
                },
                {
                  title: "Pièges classiques",
                  lines: ["Attraction (nom le plus proche)", "Couleurs invariables", "Coordination : masculin l'emporte"],
                  variant: "yellow",
                },
                {
                  title: "Renvoi",
                  lines: ["Accord du participe passé", "(être, avoir, pronominaux)", "→ notion 12"],
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
