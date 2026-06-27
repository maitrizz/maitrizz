import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "tp1", label: "Je distingue les 4 types de phrase (déclaratif, interrogatif, injonctif, exclamatif) et je sais qu'une phrase porte un seul type" },
  { id: "tp2", label: "Je distingue le type (obligatoire, unique) de la forme (facultative, cumulable) : une phrase a un type ET, éventuellement, une ou plusieurs formes" },
  { id: "tp3", label: "Je maîtrise l'interrogation : totale ou partielle, et ses trois registres (inversion, est-ce que, intonation)" },
  { id: "tp4", label: "Je reconnais la phrase injonctive même sans impératif (infinitif, subjonctif, phrase nominale)" },
  { id: "tp5", label: "Je manie la forme négative : négation totale ou partielle, et je ne confonds pas « ne… que » (restriction) avec une négation" },
  { id: "tp6", label: "Je repère les formes emphatique (c'est… qui/que, dislocation) et impersonnelle (il pleut, il manque…)" },
  { id: "tp7", label: "Je sais ce qu'en dit le programme (la phrase et sa ponctuation, cycles 2 et 3) et je repère les erreurs d'élèves typiques" },
];

export const ficheTypesEtFormesDePhrase: Fiche = {
  slug: "types-et-formes-de-phrase",
  matiere: "francais",
  numero: 6,
  partie: "Partie 1 : Grammaire de la phrase",
  title: "Types et formes de phrase",
  subtitle:
    "Ce que fait la phrase (déclarer, interroger, ordonner, s'exclamer) et comment elle le fait (négative, emphatique, impersonnelle)",
  badges: [
    { label: "★★☆ Fréquent", variant: "hot" },
    { label: "Cycle 2 et 3 + lycée", variant: "info" },
  ],
  metaTitle: "Types et formes de phrase (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur les types et formes de phrase : les 4 types (déclaratif, interrogatif, injonctif, exclamatif), l'interrogation totale ou partielle et ses registres, la phrase injonctive sans impératif, les formes négative, emphatique et impersonnelle. Méthode, pièges, quiz, exercices corrigés et auto-évaluation.",
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
              items: [
                {
                  number: "①",
                  title: "Type et forme : deux questions différentes",
                  text: "Le type dit ce que fait la phrase (un seul par phrase) ; la forme dit comment elle le fait (facultative, cumulable). On ne les range pas dans la même colonne.",
                },
                {
                  number: "②",
                  title: "Les 4 types de phrase",
                  text: "Déclaratif, interrogatif, injonctif, exclamatif : chacun a sa fonction de communication et sa ponctuation.",
                },
                {
                  number: "③",
                  title: "Deux zooms qui tombent : interrogation et injonction",
                  text: "L'interrogation (totale ou partielle, trois registres) et l'injonction (qui se passe souvent de l'impératif) sont les deux types les plus piégeux.",
                },
                {
                  number: "④",
                  title: "Les formes : négative, emphatique, impersonnelle",
                  text: "Elles se superposent au type sans le changer. La forme passive, elle, est traitée à part dans la notion 10.",
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
                  text: "Les formes se **superposent** au type sans le modifier. On en retient trois pour le concours (la forme **passive** est traitée à part dans la notion [formes passive et pronominale](fiche:formes-non-conjuguees-passive-pronominale)).",
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
                { type: "note", text: "Trouvé du premier coup ? Direction le Quiz éclair. Sinon, relisez la grille type / forme de l'étape ①." },
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
              text: "9 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
            },
            {
              type: "quizBlock",
              questions: [
                {
                  objectifId: "tp1",
                  question: "Combien de types une même phrase peut-elle avoir ?",
                  options: ["Autant que de propositions", "Un seul", "Deux au maximum", "Un par verbe conjugué"],
                  correctIndex: 1,
                  explanation:
                    "Une phrase a toujours un seul type (déclaratif, interrogatif, injonctif ou exclamatif). Ce sont les formes, elles, qui se cumulent.",
                },
                {
                  objectifId: "tp2",
                  question: "Dans « Il ne reste plus de pain. », quels sont le type et la forme ?",
                  options: [
                    "Type négatif, forme déclarative",
                    "Type déclaratif, forme négative",
                    "Type déclaratif, forme impersonnelle uniquement",
                    "Type exclamatif, forme négative",
                  ],
                  correctIndex: 1,
                  explanation:
                    "« négatif » n'est pas un type : c'est une forme. La phrase est de type déclaratif, à la forme négative (et accessoirement impersonnelle avec « il reste »).",
                },
                {
                  objectifId: "tp3",
                  question: "« Quand pars-tu ? » est une interrogation…",
                  options: ["totale, registre familier", "partielle, registre soutenu", "totale, registre soutenu", "partielle, registre courant"],
                  correctIndex: 1,
                  explanation:
                    "Le mot « quand » fait porter la question sur un seul élément (le moment) : interrogation partielle. L'inversion « pars-tu » marque le registre soutenu.",
                },
                {
                  objectifId: "tp3",
                  question: "Laquelle de ces phrases est une interrogation totale ?",
                  options: ["« Où vas-tu ? »", "« Pourquoi pleure-t-il ? »", "« Est-ce que tu viens ? »", "« Combien en veux-tu ? »"],
                  correctIndex: 2,
                  explanation:
                    "« Est-ce que tu viens ? » appelle une réponse oui/non et porte sur tout le propos : interrogation totale. Les trois autres portent sur un élément (lieu, cause, quantité).",
                },
                {
                  objectifId: "tp4",
                  question: "« Battre les œufs en neige. » (dans une recette) est une phrase…",
                  options: ["déclarative", "injonctive", "exclamative", "interrogative"],
                  correctIndex: 1,
                  explanation:
                    "C'est une consigne : phrase injonctive à l'infinitif. L'absence d'impératif ne change pas le type.",
                },
                {
                  objectifId: "tp5",
                  question: "« Je n'ai qu'une question. » est une phrase…",
                  options: [
                    "négative (négation totale)",
                    "affirmative restrictive (ne… que = seulement)",
                    "négative (négation partielle)",
                    "exclamative",
                  ],
                  correctIndex: 1,
                  explanation:
                    "« ne… que » exprime une restriction (= seulement), pas une négation : la phrase est affirmative. « Je n'ai qu'une question » signifie « j'ai seulement une question ».",
                },
                {
                  objectifId: "tp6",
                  question: "Dans « C'est la lecture qui le passionne. », quelle est la forme ?",
                  options: ["Impersonnelle", "Négative", "Emphatique", "Aucune forme particulière"],
                  correctIndex: 2,
                  explanation:
                    "Le présentatif « c'est… qui » met « la lecture » en relief : forme emphatique. La phrase reste de type déclaratif.",
                },
                {
                  objectifId: "tp6",
                  question: "Quelle phrase est à la forme impersonnelle ?",
                  options: [
                    "« Paul dort encore. »",
                    "« Il a fermé la porte. »",
                    "« Il faut partir tôt. »",
                    "« Elle pleut de joie. »",
                  ],
                  correctIndex: 2,
                  explanation:
                    "Dans « Il faut partir tôt », « il » ne désigne personne : c'est un sujet grammatical impersonnel. Dans « Il a fermé la porte », « il » reprend une personne : forme personnelle.",
                },
                {
                  objectifId: "tp7",
                  question: "Un élève écrit « Tu viens. » à la place de « Tu viens ? ». Que travaille-t-il en priorité ?",
                  options: [
                    "L'accord du verbe",
                    "La ponctuation de fin, marque écrite du type de phrase",
                    "Le niveau de langue",
                    "La conjugaison",
                  ],
                  correctIndex: 1,
                  explanation:
                    "À l'oral, l'intonation suffit à poser la question ; à l'écrit, c'est le point d'interrogation qui marque le type interrogatif. C'est précisément ce que l'école construit du cycle 2 au cycle 3.",
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
              label: "Niveau 1 : Identifier le type",
              sub: "Phrases courtes, un seul critère",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Quel type ?",
              objectifTag: "Types",
              question:
                "Donnez le type de chaque phrase.\na) « Range ta chambre. »   b) « Quelle chance ! »   c) « As-tu compris ? »   d) « La pluie a cessé. »",
              correction: [
                { type: "line", label: "a)", text: "**Injonctif** (ordre, verbe à l'impératif)." },
                { type: "line", label: "b)", text: "**Exclamatif** (sentiment, mot exclamatif *quelle*, point d'exclamation)." },
                { type: "line", label: "c)", text: "**Interrogatif** (demande d'information, inversion *as-tu*, point d'interrogation)." },
                { type: "line", label: "d)", text: "**Déclaratif** (information, point final)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Type + forme",
              sub: "Cumuler les deux analyses, comme au concours",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              level: "n2",
              title: "Exercice 2 : Type et forme",
              objectifTag: "Type + forme",
              question:
                "Indiquez le type ET la ou les formes de chaque phrase.\na) « N'es-tu jamais content ? »   b) « Il manque deux chaises. »   c) « C'est ce livre que je cherchais. »",
              correction: [
                { type: "line", label: "a)", text: "Type **interrogatif** (interrogation totale, registre soutenu : inversion *es-tu*) + forme **négative** (négation **partielle** *ne… jamais*, qui porte sur le temps)." },
                { type: "line", label: "b)", text: "Type **déclaratif** + forme **impersonnelle** (« il » ne désigne personne ; le sujet réel *deux chaises* est rejeté après le verbe)." },
                { type: "line", label: "c)", text: "Type **déclaratif** + forme **emphatique** (présentatif *c'est… que* mettant *ce livre* en relief)." },
                { type: "formulationCrpe", text: "Modèle de rédaction (a) : « Phrase de type **interrogatif**, interrogation **totale** de registre soutenu (inversion *es-tu*, point d'interrogation), à la forme **négative** (négation **partielle** *ne… jamais*, portant sur le temps). »" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              level: "n2",
              title: "Exercice 3 : Caractériser une interrogation",
              objectifTag: "Interrogation",
              question:
                "Pour chaque question, dites si elle est totale ou partielle, et donnez son registre.\na) « Tu pars quand ? »   b) « Est-ce qu'il a téléphoné ? »   c) « Pourquoi ris-tu ? »",
              correction: [
                { type: "line", label: "a)", text: "Interrogation **partielle** (porte sur le moment, *quand*), registre **familier** (mot interrogatif rejeté en fin, pas d'inversion)." },
                { type: "line", label: "b)", text: "Interrogation **totale** (réponse oui/non), registre **courant** (*est-ce que*)." },
                { type: "line", label: "c)", text: "Interrogation **partielle** (porte sur la cause, *pourquoi*), registre **soutenu** (inversion *ris-tu*)." },
                { type: "note", text: "Deux axes indépendants : totale/partielle d'un côté, registre de l'autre. On donne toujours les deux." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Pièges et manipulation",
              sub: "Justifier, transformer, déjouer les confusions",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              level: "n3",
              title: "Exercice 4 : Restriction ou négation ?",
              objectifTag: "Négative",
              question:
                "Ces phrases sont-elles négatives ? Justifiez.\na) « Je ne bois que de l'eau. »   b) « Je ne bois pas d'alcool. »",
              correction: [
                { type: "line", label: "a)", text: "**Non, affirmative restrictive.** « ne… que » = seulement : « Je bois seulement de l'eau. » Le fait (boire) est bien posé, il est seulement restreint." },
                { type: "line", label: "b)", text: "**Oui, négative** (négation totale *ne… pas*). Le fait est supprimé : « Je bois de l'alcool » devient faux." },
                { type: "formulationCrpe", text: "Test à citer dans la copie : on remplace par « seulement ». En (a), le sens tient (« seulement de l'eau ») : c'est une restriction. En (b), le remplacement est impossible : c'est une vraie négation." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              level: "n3",
              title: "Exercice 5 : Transformer",
              objectifTag: "Type + forme",
              question:
                "Transformez « Tu fermes la fenêtre. » a) en phrase interrogative (registre soutenu), b) en phrase injonctive, c) en phrase de forme négative.",
              correction: [
                { type: "line", label: "a)", text: "« **Fermes-tu** la fenêtre ? » (inversion du sujet, point d'interrogation)." },
                { type: "line", label: "b)", text: "« **Ferme** la fenêtre. » (impératif présent, 2e personne)." },
                { type: "line", label: "c)", text: "« Tu **ne** fermes **pas** la fenêtre. » (négation totale *ne… pas*)." },
                { type: "note", text: "La transformation est l'exercice CRPE par excellence : elle prouve qu'on a compris la marque de chaque type et de chaque forme." },
              ],
            },
          ],
        },
        {
          id: "flashcards",
          label: "Flashcards",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "info",
              text: "Cachez la réponse, formulez la vôtre à voix haute, puis vérifiez. Idéal en révision rapide.",
            },
            {
              type: "flashcardDeck",
              cards: [
                {
                  question: "Quelle est la différence entre type et forme de phrase ?",
                  answer:
                    "**Type** : ce que fait la phrase (déclaratif, interrogatif, injonctif, exclamatif). Obligatoire et **unique**.\n**Forme** : comment elle le fait (négative, emphatique, impersonnelle…). Facultative et **cumulable**.",
                  astuce: "💡 Une phrase = un type + zéro, une ou plusieurs formes.",
                },
                {
                  question: "Interrogation totale ou partielle : comment trancher ?",
                  answer:
                    "**Totale** : porte sur tout le propos, réponse oui/non, pas de mot interrogatif (« Viens-tu ? »).\n**Partielle** : porte sur un élément, mot interrogatif (qui, où, quand, comment, pourquoi, combien, quel) (« Quand viens-tu ? »).",
                  astuce: "💡 Un mot interrogatif portant sur un élément → partielle.",
                },
                {
                  question: "Quels sont les trois registres de l'interrogation directe ?",
                  answer:
                    "**Soutenu** : inversion (« Viens-tu ? »).\n**Courant** : est-ce que (« Est-ce que tu viens ? »).\n**Familier** : intonation seule (« Tu viens ? »).",
                },
                {
                  question: "Une phrase injonctive a-t-elle toujours un verbe à l'impératif ?",
                  answer:
                    "Non. Elle peut être à l'**infinitif** (« Battre les œufs »), au **subjonctif** (« Qu'il sorte ! »), au **futur** (« Vous prendrez… ») ou **nominale** (« Silence ! »). Le critère est l'intention de faire agir.",
                  astuce: "💡 Pas d'impératif ≠ pas d'injonction.",
                },
                {
                  question: "« ne… que » est-il une négation ?",
                  answer:
                    "Non, c'est une **restriction** (= seulement). « Je n'ai qu'un euro » = « j'ai seulement un euro » : phrase **affirmative** restrictive.",
                  astuce: "💡 Remplacez par « seulement » : si le sens tient, c'est une restriction.",
                },
                {
                  question: "Comment reconnaître la forme impersonnelle ?",
                  answer:
                    "Le sujet « il » ne désigne **personne** ni rien : il pleut, il faut, il y a, il manque… On ne peut pas le remplacer par un nom.",
                  astuce: "💡 Test : « il » remplaçable par un nom → personnel ; sinon → impersonnel.",
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
                  lines: ["Passive → notion 10", "Interro. indirecte → notion 5", "Ponctuation → notion 5", "Modalisation → notion 15"],
                  variant: "purple",
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
