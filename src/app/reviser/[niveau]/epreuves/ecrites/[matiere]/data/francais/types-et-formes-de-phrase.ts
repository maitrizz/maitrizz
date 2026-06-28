import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_TYPES_ET_FORMES_DE_PHRASE } from "./exercices-types-et-formes-de-phrase";
import { COPIES_TYPES_ET_FORMES_DE_PHRASE } from "./copies-types-et-formes-de-phrase";

const SAVOIR_FAIRE = [
  { id: "types", label: "Types de phrase" },
  { id: "negation", label: "Négation" },
  { id: "interrogation", label: "Interrogation" },
  { id: "injonction", label: "Injonction" },
  { id: "emphase", label: "Emphase" },
  { id: "actif-passif", label: "Actif/passif" },
];

export const ficheTypesEtFormesDePhrase: Fiche = {
  slug: "types-et-formes-de-phrase",
  matiere: "francais",
  numero: 6,
  partie: "Partie 1 : Grammaire de la phrase",
  title: "Types et formes de phrase",
  subtitle: "Ce que fait la phrase (déclarer, interroger, ordonner, s'exclamer) et comment elle le fait (négative, emphatique, impersonnelle)",
  badges: [
      {
          "label": "★★☆ Fréquent",
          "variant": "hot"
      },
      {
          "label": "Cycle 2 et 3 + lycée",
          "variant": "info"
      }
  ],
  metaTitle: "Types et formes de phrase (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur les types et formes de phrase : les 4 types (déclaratif, interrogatif, injonctif, exclamatif), l'interrogation totale ou partielle et ses registres, la phrase injonctive sans impératif, les formes négative, emphatique et impersonnelle. Méthode, pièges, quiz, exercices corrigés et auto-évaluation.",
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
              text: "Analyser une phrase, ce n'est pas seulement repérer ses propositions (voir la [phrase complexe](fiche:phrase-complexe)). C'est aussi dire **ce qu'elle fait** (elle déclare, interroge, ordonne ou s'exclame) et **comment elle le fait** (négative, emphatique, impersonnelle). La règle d'or tient en une phrase : **une phrase a toujours un seul type, et zéro, une ou plusieurs formes**. Gardez cette distinction en tête, c'est elle qui sépare les bonnes copies des autres.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Type et forme : à ne pas mettre dans la même colonne",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le **type** répond à la question « **que fait la phrase ?** » : elle déclare, elle interroge, elle ordonne ou elle s'exclame. Il est **obligatoire et unique** : toute phrase relève d'un type, et d'un seul.\n\nLa **forme** répond à la question « **comment le fait-elle ?** » : la phrase est-elle affirmative ou **négative**, neutre ou **emphatique**, personnelle ou **impersonnelle** ? La forme est **facultative et cumulable** : une phrase peut n'avoir aucune forme particulière (on parle alors de forme neutre ou affirmative), ou en cumuler plusieurs.",
                },
                {
                  type: "table",
                  title: "Une phrase = un type + d'éventuelles formes",
                  headers: ["Phrase", "Type (1 seul)", "Forme(s) (0, 1 ou +)"],
                  rows: [
                    ["« Pierre vient demain. »", "Déclaratif", "Neutre (affirmative)"],
                    ["« Pierre ne vient pas. »", "Déclaratif", "Négative"],
                    ["« Ne viens-tu pas ? »", "Interrogatif", "Négative"],
                    ["« C'est Pierre qui viendra. »", "Déclaratif", "Emphatique"],
                    ["« Il manque trois élèves. »", "Déclaratif", "Impersonnelle"],
                    ["« Comme cette histoire est belle ! »", "Exclamatif", "Neutre"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "",
                  title: "Ne confondez pas « type de phrase » et « modalisation »",
                  text: "Le **type** est un fait de **structure** (la forme grammaticale de la phrase, marquée par la syntaxe et la ponctuation). La **modalisation** (verbes comme *devoir*, *pouvoir*, modalisateurs comme *peut-être*, *sans doute*, question rhétorique, exclamation comme trace d'affect) relève de l'**attitude du locuteur** : c'est un autre objet, traité dans la notion [énonciation](fiche:enonciation-discours-rapporte). Une « question rhétorique » est un **procédé d'énonciation** ; une phrase interrogative est un **type**. Le mot « modalité » sert pour les deux, d'où la confusion fréquente.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les 4 types de phrase",
              blocks: [
                {
                  type: "paragraph",
                  text: "Chaque type correspond à une **intention de communication** et se reconnaît à des **marques** (ponctuation, parfois construction ou mot spécifique). On en compte quatre. Attention : un point d'exclamation à la fin d'une phrase n'en fait pas automatiquement une phrase exclamative (voir les pièges en Méthode).",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Déclaratif",
                      definition: "La phrase donne une information, énonce un fait, une opinion. C'est le type le plus courant, celui du récit et de l'explication.",
                      sousClasses: "**Marque :** point final.",
                      exemples: [
                        "« La nuit tombait sur la ville. »",
                        "« Je crois qu'il a raison. »",
                      ],
                      test: "Si la phrase pose un fait sans rien demander ni ordonner, et se termine par un point, elle est déclarative.",
                    },
                    {
                      title: "Interrogatif",
                      definition: "La phrase demande une information à l'interlocuteur ; elle attend une réponse.",
                      sousClasses: "**Marque :** point d'interrogation, souvent un mot interrogatif ou l'inversion du sujet.",
                      exemples: [
                        "« Viendras-tu demain ? »",
                        "« Où as-tu rangé les clés ? »",
                      ],
                      piege: "L'interrogation peut être totale ou partielle, et se dire à trois registres : c'est le zoom ③.",
                      test: "La phrase appelle une réponse (oui/non ou une information) et se termine par un point d'interrogation.",
                    },
                    {
                      title: "Injonctif",
                      definition: "La phrase donne un ordre, un conseil, une consigne, une prière ou une défense. On l'appelle aussi phrase impérative, mais elle ne se construit pas toujours avec l'impératif.",
                      sousClasses: "**Marque :** point ou point d'exclamation ; verbe souvent à l'impératif, mais aussi à l'infinitif ou au subjonctif.",
                      exemples: [
                        "« Ferme la porte. »",
                        "« Ne pas se pencher au dehors. »",
                        "« Qu'il sorte immédiatement ! »",
                      ],
                      piege: "Très souvent sans impératif : c'est le zoom ④.",
                      test: "La phrase cherche à faire agir (ordre, conseil, consigne) : elle est injonctive, quel que soit le mode du verbe.",
                    },
                    {
                      title: "Exclamatif",
                      definition: "La phrase exprime un sentiment vif (joie, surprise, indignation, admiration). Elle ne demande rien et n'ordonne rien : elle réagit.",
                      sousClasses: "**Marque :** point d'exclamation, souvent un mot exclamatif (quel, que, comme, combien).",
                      exemples: [
                        "« Comme cette histoire est belle ! »",
                        "« Quel courage ! »",
                      ],
                      piege: "Un simple point d'exclamation ne suffit pas : « Sors ! » reste injonctif, pas exclamatif.",
                      test: "La phrase manifeste une émotion, souvent introduite par quel/que/comme/combien, et se termine par un point d'exclamation.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Zoom sur l'interrogation : totale ou partielle, et trois registres",
              blocks: [
                {
                  type: "paragraph",
                  text: "L'interrogation se décrit selon **ce sur quoi elle porte** et selon le **registre** (la langue plus ou moins soutenue). Ces deux axes sont indépendants et tombent régulièrement au concours.",
                },
                {
                  type: "table",
                  title: "Sur quoi porte la question ?",
                  headers: ["Type", "Porte sur", "Réponse attendue", "Exemple"],
                  rows: [
                    ["**Totale**", "toute la phrase", "oui / non", "« Viendras-tu ? » → oui ou non"],
                    ["**Partielle**", "un seul élément", "une information", "« **Quand** viendras-tu ? » → demain"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "L'interrogation **partielle** se reconnaît à son **mot interrogatif** : *qui, que, quoi, où, quand, comment, pourquoi, combien, quel, lequel*. L'interrogation **totale** n'en a pas : elle porte sur l'ensemble du propos.",
                },
                {
                  type: "table",
                  title: "Les trois registres de l'interrogation directe",
                  headers: ["Registre", "Construction", "Exemple"],
                  rows: [
                    ["Soutenu", "inversion du sujet", "« **Viens-tu** ? » · « **Où vas-tu** ? »"],
                    ["Courant", "« est-ce que »", "« **Est-ce que** tu viens ? » · « **Où est-ce que** tu vas ? »"],
                    ["Familier (oral)", "intonation seule", "« Tu viens ? » · « Tu vas **où** ? »"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "",
                  title: "Interrogation directe ou indirecte ?",
                  text: "Tout ce qui précède concerne l'interrogation **directe** (vraie question, point d'interrogation). Quand la question est **rapportée** dans une subordonnée (« Je me demande **s'il viendra**. »), il s'agit de l'**interrogation indirecte** : ce n'est plus un type de phrase, mais une **subordonnée interrogative indirecte**, traitée dans la [phrase complexe](fiche:phrase-complexe). La phrase qui la contient est alors **déclarative**.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Zoom sur l'injonction : bien plus que l'impératif",
              blocks: [
                {
                  type: "paragraph",
                  text: "La phrase injonctive se construit le plus souvent à l'**impératif**, mais l'erreur classique est de croire que « pas d'impératif = pas d'injonction ». Le critère est l'**intention** (faire agir), pas le mode du verbe.",
                },
                {
                  type: "table",
                  title: "Une intention, plusieurs constructions",
                  headers: ["Construction", "Exemple", "Emploi typique"],
                  rows: [
                    ["Impératif", "« **Ferme** la porte. »", "ordre direct"],
                    ["Infinitif", "« **Battre** les œufs en neige. »", "consignes, recettes, panneaux"],
                    ["Subjonctif", "« **Qu'il sorte** ! »", "ordre à la 3e personne"],
                    ["Futur", "« Vous **prendrez** deux comprimés par jour. »", "consigne, prescription"],
                    ["Phrase nominale", "« **Silence !** » · « **Défense de fumer.** »", "interdiction, consigne brève"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Valeurs possibles d'une même phrase injonctive : **ordre** (« Sortez. »), **défense** (« Ne pas courir. »), **conseil** (« Reposez-vous. »), **prière** (« Aide-moi, je t'en prie. »), **consigne** (« Souligner le verbe. »). C'est le contexte qui tranche.",
                },
              ],
            },
            {
              type: "subsection",
              number: "⑤",
              title: "Les formes : négative, emphatique, impersonnelle",
              blocks: [
                {
                  type: "paragraph",
                  text: "Les formes se **superposent** au type sans le modifier. On en retient trois pour le concours (la forme **passive** relève de la voix du verbe : voir la notion [groupe verbal](fiche:groupe-verbal)).",
                },
                {
                  type: "notionCardGrid",
                  columns: 1,
                  cards: [
                    {
                      title: "Forme négative",
                      definition: "La phrase nie tout ou partie du propos. La négation s'écrit en **deux éléments** : « ne » + un second mot. À l'oral, le « ne » disparaît souvent, mais il est **obligatoire à l'écrit**.",
                      sousClasses: "**Négation totale :** elle nie toute la phrase → *ne… pas* (et *ne… point*). **Négation partielle :** elle ne nie qu'un seul élément → *ne… personne* / *rien* (la personne, la chose), *ne… nulle part* (le lieu), *ne… jamais* / *plus* / *guère* (le temps, le degré).",
                      exemples: [
                        "« Il **ne** vient **pas**. » : négation totale (toute la phrase est niée).",
                        "« Il **ne** vient **jamais**. » : négation partielle (porte sur le temps).",
                        "« Je **n'**ai vu **personne**. » : négation partielle (porte sur le COD).",
                      ],
                      piege: "« ne… que » n'est **pas** une négation : c'est une **restriction** (= seulement). « Je **n'**ai **qu'**un euro » signifie « j'ai seulement un euro » : phrase affirmative restrictive.",
                      astuce: "🔑 Pour savoir si « ne » est une vraie négation, remplacez par « seulement » : si la phrase garde son sens, c'est « ne… que », donc une restriction, pas une négation.",
                    },
                    {
                      title: "Forme emphatique",
                      definition: "La phrase met un élément en relief, au lieu de l'énoncer de façon neutre. Deux procédés principaux : l'extraction par un présentatif, et la dislocation.",
                      sousClasses: "**Extraction :** c'est… qui / c'est… que. **Dislocation :** on détache un élément, repris par un pronom.",
                      exemples: [
                        "Neutre : « Pierre a gagné. » → Emphatique : « **C'est Pierre qui** a gagné. »",
                        "Dislocation : « **Moi, je** ne dis rien. » · « Le café, je **l'**adore. »",
                      ],
                      piege: "« C'est Pierre qui a gagné » reste une phrase **déclarative** : l'emphase est une **forme**, pas un type. Le présentatif sert ici à mettre en relief, pas à changer la nature de la phrase.",
                    },
                    {
                      title: "Forme impersonnelle",
                      definition: "Le sujet « il » ne représente personne ni rien : c'est un sujet purement grammatical, sans référent (on dit aussi « il » impersonnel ou explétif).",
                      sousClasses: "**Tournures fréquentes :** il pleut, il neige, il faut, il y a, il s'agit de, il manque…, il reste…, il arrive que…",
                      exemples: [
                        "« **Il** pleut depuis ce matin. » : « il » ne désigne personne.",
                        "« **Il** manque trois élèves. » : le sujet réel (trois élèves) est rejeté après le verbe.",
                      ],
                      piege: "Distinguez le « il » impersonnel (« Il faut partir ») du « il » personnel qui reprend un nom (« Paul est là, **il** sourit »). Test : peut-on remplacer « il » par un nom ? Si oui, il est personnel ; si non, il est impersonnel.",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Pour aller plus loin · la négation (hors attendus)",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "**Le « ne » explétif n'est pas une négation.** Après certains verbes (craindre, redouter, avoir peur que) et certaines conjonctions (avant que, à moins que, de peur que), un « ne » apparaît **sans valeur négative** : « Je crains qu'il **ne** vienne » signifie « j'ai peur qu'il vienne ». On peut le supprimer sans changer le sens. Hors attendus du concours, mais fréquent en langue soutenue et en littérature.",
                    },
                    {
                      type: "paragraph",
                      text: "**Deux négations ne s'annulent pas toujours.** Certaines se cumulent et restent négatives : « Il **n'**a **rien** dit à **personne** ». D'autres se neutralisent et deviennent **affirmatives** : « Il **n'**est **pas sans** savoir » (= il sait), « Ce **n'**est **pas rien** » (= c'est important) : c'est une forme de litote.",
                    },
                    {
                      type: "callout",
                      variant: "info",
                      text: "💡 Test du « ne » explétif : si l'on peut le supprimer sans changer le sens, il est explétif. « Je crains qu'il vienne » = « Je crains qu'il ne vienne ».",
                    },
                  ],
                },
              ],
            },
            {
              type: "primaireBox",
              title: "Le regard du futur enseignant",
              text: "**Au primaire, les types de phrase passent d'abord par la ponctuation.** Dès le **cycle 2** (CP-CE2), les élèves identifient la phrase et ses signes de fin (point, point d'interrogation, point d'exclamation) et produisent des phrases déclaratives, interrogatives et injonctives, à l'oral comme à l'écrit. Au **cycle 3** (CM1-6e), on observe et on nomme les types de phrase, et on travaille la phrase négative ainsi que le passage de la forme affirmative à la forme négative (voir les [programmes en vigueur](https://eduscol.education.fr/137/cycle-2-et-cycle-3)).\n\n**Erreurs d'élèves à savoir repérer :** oublier le point d'interrogation à l'écrit ; écrire la négation sans « ne » (« j'ai pas vu »), calquée sur l'oral ; terminer par « ! » une phrase injonctive et la prendre pour une exclamative. **Ce que vous devez savoir dire :** la marque écrite (ponctuation de fin, « ne » de négation) est justement ce que l'école construit, parce qu'elle ne va pas de soi à l'oral.",
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
              title: "Le réflexe : d'abord le type, ensuite la ou les formes",
              text: "Face à une phrase à analyser, on suit toujours le même chemin : **repérer** la ponctuation et le verbe, **nommer le type** (un seul), puis **repérer la ou les formes** (négative, emphatique, impersonnelle), enfin **justifier** par une marque (mot interrogatif, construction, présentatif…). Chaque démarche ci-dessous est déroulée jusqu'à la phrase à recopier le jour J.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Donner le type et la forme d'une phrase",
              intro:
                "*Question typique : « Indiquez le type et la forme de la phrase : Ne dis-tu jamais la vérité ? »*",
              steps: [
                {
                  number: "1",
                  text: "**Repérer la ponctuation finale et le verbe.** Le point d'interrogation et l'inversion du sujet (*dis-tu*) orientent vers le type interrogatif.",
                  example: { lines: ["*Ne* / *dis* / *tu* / *jamais* / *la vérité* **?** → ponctuation : point d'interrogation."] },
                },
                {
                  number: "2",
                  text: "**Nommer le type (un seul).** La phrase demande une information : elle est de type **interrogatif**. Elle est **partielle** ou **totale** ? Pas de mot interrogatif portant sur un élément précis : elle porte sur tout le propos, c'est une interrogation **totale** (réponse attendue : oui / non).",
                  example: { lines: ["Type : **interrogatif**, interrogation **totale**, registre soutenu (inversion *dis-tu*)."] },
                },
                {
                  number: "3",
                  text: "**Repérer la ou les formes.** On voit « ne… jamais » : la phrase est à la forme **négative**. La négation est ici **partielle** (elle porte sur le temps, pas sur tout le propos).",
                  example: { lines: ["*ne… jamais* → forme **négative**, négation **partielle** (le temps)."] },
                  warn: "⚠️ Attention au double emploi de *totale/partielle* : ici la **question** est totale (réponse oui/non), mais la **négation** est partielle (elle porte sur *jamais*). Les deux axes sont indépendants.",
                },
                {
                  number: "✅",
                  text: "**Réponse attendue (formulation modèle) :** « Cette phrase est de type **interrogatif** (interrogation **totale**, registre soutenu marqué par l'inversion *dis-tu* et le point d'interrogation) et de forme **négative** (négation **partielle** *ne… jamais*, portant sur le temps). »",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Caractériser une interrogation : totale ou partielle, et son registre",
              intro:
                "*Question typique : « Caractérisez l'interrogation : Où est-ce que tu as rangé les clés ? »*",
              steps: [
                {
                  number: "1",
                  text: "**Chercher un mot interrogatif portant sur un élément.** *Où* interroge sur le lieu : la question ne porte pas sur tout le propos mais sur un seul élément.",
                  example: { lines: ["*Où* → porte sur le lieu → interrogation **partielle**."] },
                },
                {
                  number: "2",
                  text: "**Identifier le registre par la construction.** Présence de « est-ce que » : c'est le registre **courant**. (Le soutenu donnerait *Où as-tu rangé les clés ?*, le familier *Tu as rangé les clés où ?*.)",
                  example: { lines: ["*est-ce que* → registre **courant**."] },
                },
                {
                  number: "✅",
                  text: "**Réponse attendue (formulation modèle) :** « Il s'agit d'une interrogation **partielle** (elle porte sur le lieu, marqué par *où*), de registre **courant** (tournure *est-ce que*). La phrase est donc de type **interrogatif**, sans autre forme particulière. »",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Exclamatif ou interrogatif : ne pas se fier au seul mot « quel »",
              badge: "Piège classique",
              faux: "« Quelle heure est-il ? » serait exclamative parce qu'elle commence par « quelle ».",
              vrai: "« Quelle heure est-il ? » est **interrogative** (partielle) : elle demande une information. « Quelle belle journée ! » est **exclamative** : elle exprime un sentiment. Le mot *quel* sert aux deux.",
              methode: "Regardez la ponctuation et l'intention : point d'interrogation + demande → interrogatif ; point d'exclamation + émotion → exclamatif.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Une phrase sans impératif peut être injonctive",
              badge: "Très fréquent",
              faux: "« Ne pas se pencher au dehors » serait déclarative, puisqu'il n'y a pas d'impératif.",
              vrai: "Elle est **injonctive** : elle donne une consigne (une défense), ici à l'**infinitif**. L'injonction se reconnaît à l'intention (faire agir), pas au mode du verbe.",
              methode: "Demandez-vous : la phrase cherche-t-elle à faire faire quelque chose ? Si oui, elle est injonctive, même à l'infinitif, au subjonctif ou en phrase nominale.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "« ne… que » n'est pas une négation",
              badge: "Restriction",
              faux: "« Je n'ai qu'un euro » serait une phrase négative à cause du « ne ».",
              vrai: "« ne… que » exprime une **restriction** (= seulement) : « Je n'ai qu'un euro » signifie « j'ai seulement un euro ». La phrase est **affirmative** (restrictive), pas négative.",
              methode: "Remplacez « ne… que » par « seulement » : si le sens tient, c'est une restriction. Une vraie négation, elle, supprime le fait (« Je n'ai pas d'euro »).",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "L'emphase est une forme, pas un type",
              badge: "À garder en tête",
              faux: "« C'est Pierre qui a gagné » serait un type particulier à cause du présentatif « c'est ».",
              vrai: "Le présentatif « c'est… qui » sert ici à **mettre en relief** : la phrase reste de type **déclaratif**, simplement à la **forme emphatique**. On distingue d'ailleurs cet emploi des phrases à présentatif pur (« Voici la mer »).",
              methode: "Reformulez sans l'emphase : « Pierre a gagné. » Le type ne bouge pas, seule la mise en relief disparaît : c'était donc bien une forme.",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Indiquez le type et la forme de la phrase : « Comme il n'a rien compris ! »",
              correction: [
                { type: "line", text: "**Explication :** le mot exclamatif *comme* et le point d'exclamation marquent le type **exclamatif** (la phrase exprime un sentiment, ici l'agacement ou la surprise). On relève aussi « n'… rien » : forme **négative** (négation partielle portant sur le COD)." },
                { type: "line", text: "**Réponse attendue (formulation jury) :** « Phrase de type **exclamatif** (mot exclamatif *comme*, point d'exclamation), à la forme **négative** (négation partielle *ne… rien*). »" },
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
              title: "Types et formes de phrase",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_TYPES_ET_FORMES_DE_PHRASE,
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
              title: "Types et formes de phrase",
              copies: COPIES_TYPES_ET_FORMES_DE_PHRASE,
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
              center: { title: "Types et formes de phrase", subtitle: "Ce que fait la phrase + comment" },
              branches: [
                {
                  title: "La règle d'or",
                  lines: ["1 type obligatoire et unique", "0, 1 ou + formes cumulables", "Type ≠ modalisation (notion 15)"],
                  variant: "blue",
                },
                {
                  title: "Les 4 types",
                  lines: ["Déclaratif (.)", "Interrogatif ( ? )", "Injonctif (ordre)", "Exclamatif ( ! ) sentiment"],
                  variant: "blue",
                },
                {
                  title: "Interrogation",
                  lines: ["Totale / partielle", "Soutenu : inversion", "Courant : est-ce que", "Familier : intonation"],
                  variant: "green",
                },
                {
                  title: "Injonction",
                  lines: ["Impératif", "mais aussi infinitif", "subjonctif, futur, nominale", "= intention de faire agir"],
                  variant: "green",
                },
                {
                  title: "Les formes",
                  lines: ["Négative (totale / partielle)", "ne… que = restriction (≠ négation)", "Emphatique (c'est… qui/que)", "Impersonnelle (il pleut, il faut)"],
                  variant: "yellow",
                },
                {
                  title: "Renvois",
                  lines: ["Passive (voix) → notion 4", "Interro. indirecte → notion 5", "Ponctuation → notion 5", "Modalisation → notion 15"],
                  variant: "purple",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
