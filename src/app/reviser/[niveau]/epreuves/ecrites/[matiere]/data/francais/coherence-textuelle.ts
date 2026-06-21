import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "c1", label: "Je reconnais une reprise pronominale (un pronom qui reprend un antécédent déjà introduit)" },
  { id: "c2", label: "Je distingue la reprise nominale fidèle (même nom, déterminant différent) de la reprise nominale infidèle (synonyme, hyperonyme, périphrase…)" },
  { id: "c3", label: "Je sais reconstituer une chaîne référentielle (l'ensemble des reprises d'un même référent)" },
  { id: "c4", label: "Je nomme la progression d'un texte : progression linéaire, à thème constant ou à thèmes dérivés" },
  { id: "c5", label: "J'identifie la relation logique exprimée par un connecteur (addition, opposition, cause, conséquence, illustration, reformulation…)" },
  { id: "c6", label: "Je sais que « malgré que » est à proscrire : j'emploie « bien que / quoique » + subjonctif ou « malgré » + groupe nominal" },
  { id: "c7", label: "J'identifie un champ lexical dominant et j'interprète l'effet qu'il produit (sans me contenter de lister les mots)" },
];

export const ficheCoherenceTextuelle: Fiche = {
  slug: "coherence-textuelle",
  matiere: "francais",
  numero: 13,
  partie: "Partie 1 : Grammaire du texte et du discours",
  title: "La cohérence textuelle",
  subtitle:
    "Reprises anaphoriques, chaîne référentielle, progression du texte, connecteurs logiques et champ lexical",
  badges: [
    { label: "★★☆ Fréquent · utile aux Parties 1, 2 et 3", variant: "hot" },
    { label: "Cycle 3-4 · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "La cohérence textuelle (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur la cohérence textuelle : reprises anaphoriques (pronominales et nominales, fidèles et infidèles), chaîne référentielle, progression du texte (linéaire, à thème constant, à thèmes dérivés), connecteurs logiques et champ lexical. Méthode pas-à-pas, formules d'analyse, exercices corrigés, flashcards et auto-évaluation.",
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
                "Quatre mécanismes font qu'un texte forme un tout, et non une suite de phrases isolées. On apprend à les repérer et à les nommer.",
              items: [
                {
                  number: "①",
                  title: "Les reprises et la chaîne référentielle",
                  text: "Continuité : on parle des mêmes entités, reprises par des pronoms ou des groupes nominaux variés.",
                },
                {
                  number: "②",
                  title: "La progression du texte",
                  text: "Le texte avance : progression linéaire, à thème constant ou à thèmes dérivés.",
                },
                {
                  number: "③",
                  title: "Les connecteurs logiques",
                  text: "Ils explicitent la relation entre les idées : addition, opposition, cause, conséquence…",
                },
                {
                  number: "④",
                  title: "Le champ lexical dominant",
                  text: "Les mots créent un univers de sens cohérent : on le relève, on le nomme, on interprète son effet.",
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
              text: "La **cohérence textuelle** désigne l'ensemble des mécanismes qui font qu'un texte est intelligible et unifié. Elle repose sur quatre piliers : la **continuité référentielle** (on parle des mêmes entités), la **progression** (chaque phrase apporte du nouveau), la **cohérence logique** (les relations entre propositions sont explicites) et l'**unité du champ lexical**. C'est une notion utile dans les trois parties de l'épreuve : pour **analyser** un texte (Partie 1), pour **expliquer le lexique** (Partie 2) et pour **rédiger** (Partie 3).",
            },
            {
              type: "subsection",
              number: "①",
              title: "Les reprises anaphoriques et la chaîne référentielle",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une **anaphore** est un terme qui reprend un élément déjà introduit dans le texte (l'**antécédent**). L'ensemble des reprises d'un même référent forme une **chaîne référentielle**. C'est elle qui assure la continuité du texte, sans répétition maladroite.",
                },
                {
                  type: "notionCardGrid",
                  columns: 1,
                  cards: [
                    {
                      title: "Reprise pronominale",
                      definition: "Un pronom (personnel, démonstratif, possessif, relatif) reprend l'antécédent.",
                      exemples: [
                        "« Le jeune homme entra. **Il** posa son manteau. » → « il » reprend « le jeune homme »",
                        "« Elle aimait les vieilles maisons. **Celles-ci** lui rappelaient son enfance. » → pronom démonstratif",
                      ],
                      test: "Assure la continuité référentielle en évitant la répétition lexicale.",
                    },
                    {
                      title: "Reprise nominale fidèle",
                      definition: "Le même nom est repris, avec un déterminant différent (indéfini puis défini ou démonstratif).",
                      exemples: [
                        "« **Une** vieille femme traversait la rue. **La** vieille femme portait un panier. »",
                        "« **Un** enfant cria. **Cet** enfant avait peur. »",
                      ],
                    },
                    {
                      title: "Reprise nominale infidèle",
                      definition: "Le référent est repris par un autre mot (synonyme, hyperonyme, périphrase…). Voir la notion 17 pour les relations sémantiques.",
                      exemples: [
                        "« un chien… **l'animal**… » (hyperonyme) ; « Victor Hugo… **le poète du peuple**… » (périphrase)",
                      ],
                    },
                  ],
                },
                {
                  type: "table",
                  title: "Les types de reprise nominale infidèle",
                  headers: ["Type", "Principe", "Exemple"],
                  rows: [
                    ["Synonyme", "Mot de sens voisin", "« un chien… le clébard… »"],
                    ["Hyperonyme", "Terme générique englobant", "« un berger allemand… le chien… »"],
                    ["Hyponyme", "Terme plus spécifique", "« un animal… le labrador… »"],
                    ["Périphrase / métaphore", "Reformulation imagée", "« Victor Hugo… le poète du peuple… »"],
                    ["Nominalisation", "Un verbe ou un adjectif devient un nom", "« Il trembla. Ce tremblement… »"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "La formule d'analyse",
                  text: "« [terme] est une reprise [pronominale / nominale fidèle / nominale infidèle] de [antécédent] : elle assure la continuité référentielle, tout en [variant le registre / ajoutant une valeur évaluative]. »",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "La progression du texte",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un texte cohérent **avance** : chaque phrase apporte une information nouvelle. On décrit cette avancée selon trois schémas. Les nommer en concours est un plus ; l'essentiel est de montrer qu'on comprend comment l'auteur organise ses informations.",
                },
                {
                  type: "notionCardGrid",
                  columns: 1,
                  cards: [
                    {
                      title: "Progression linéaire (enchaînement en cascade)",
                      definition: "Chaque phrase repart d'un élément nouveau introduit par la précédente.",
                      exemples: [
                        "« Paul rencontra une vieille dame. Cette dame portait un bouquet. Ces fleurs embaumaient la rue. »",
                      ],
                      test: "Effet : mouvement narratif fluide, fréquent dans les récits.",
                    },
                    {
                      title: "Progression à thème constant (sujet central)",
                      definition: "Toutes les phrases parlent du même sujet, repris sous des formes variées.",
                      exemples: [
                        "« Paris est une ville lumineuse. Elle attire des millions de touristes. La capitale ne dort jamais. »",
                      ],
                      test: "Effet : unité thématique forte, fréquent dans les descriptions et les portraits.",
                    },
                    {
                      title: "Progression à thèmes dérivés (par aspects)",
                      definition: "Un sujet général est décliné en plusieurs sous-sujets.",
                      exemples: [
                        "« La forêt est un monde vivant. Les arbres y poussent. Les insectes y fourmillent. Les champignons colonisent le sol. »",
                      ],
                      test: "Effet : organisation analytique, fréquent dans les textes explicatifs.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Les connecteurs logiques",
              blocks: [
                {
                  type: "paragraph",
                  text: "Les **connecteurs** (ou articulateurs logiques) explicitent la **relation logique** entre deux propositions ou deux paragraphes. Leur absence est une faiblesse fréquente des copies : sans eux, le texte devient une suite de phrases sans lien.",
                },
                {
                  type: "table",
                  title: "Les principales relations logiques",
                  headers: ["Relation", "Connecteurs"],
                  rows: [
                    ["Addition", "de plus, par ailleurs, en outre, également, qui plus est"],
                    ["Opposition / concession", "mais, cependant, or, pourtant, néanmoins, en revanche, bien que"],
                    ["Cause", "car, parce que, puisque, en effet, étant donné que"],
                    ["Conséquence", "donc, ainsi, par conséquent, c'est pourquoi, de ce fait"],
                    ["Illustration", "par exemple, notamment, ainsi, comme en témoigne"],
                    ["Reformulation", "c'est-à-dire, autrement dit, en d'autres termes"],
                    ["Ordre / énumération", "d'abord, ensuite, puis, enfin, premièrement"],
                    ["Conclusion", "en conclusion, en définitive, bref, en somme, pour conclure"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "« malgré que » est à proscrire",
                  text: "La construction « malgré que » + verbe est critiquée et refusée au concours. Employer **« bien que »** ou **« quoique »** + subjonctif, ou **« malgré »** + groupe nominal : « **Bien qu'**il soit fatigué… » ou « **Malgré** sa fatigue… », jamais « malgré qu'il soit fatigué ».",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Le champ lexical dominant",
              blocks: [
                {
                  type: "paragraph",
                  text: "L'ensemble des mots d'un texte qui se rapportent à un même domaine de sens forme un **champ lexical**. Quand ce réseau de sens revient tout au long du texte et l'organise en profondeur, on parle aussi d'**isotopie**. L'identifier ne sert donc pas seulement à « trouver le thème » : cela permet de comprendre l'atmosphère du texte, le point de vue adopté et l'effet produit sur le lecteur.",
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Champ lexical ≠ thème du texte",
                  text: "Le **thème** répond à la question « de quoi parle le texte ? ». Le **champ lexical** répond à la question « quels mots construisent ce thème, et avec quelles nuances ? ». Un texte peut avoir pour thème l'école, mais mobiliser un champ lexical du combat : « lutte », « effort », « obstacle », « victoire ». L'effet n'est pas neutre : l'école est alors présentée comme une épreuve à traverser.",
                },
                {
                  type: "table",
                  title: "Ce qu'il faut savoir observer",
                  headers: ["Point d'observation", "Ce que l'on cherche", "Exemple d'analyse"],
                  rows: [
                    ["Répétitions lexicales", "Les mots qui reviennent ou appartiennent au même domaine", "« ombre », « nuit », « obscur », « silence » → champ lexical de l'obscurité"],
                    ["Mots de même famille", "Un même radical peut structurer le passage", "« lire », « lecteur », « lecture », « lisible » → champ lexical de la lecture"],
                    ["Synonymes et termes associés", "Le champ lexical ne se limite pas aux répétitions exactes", "« marcher », « route », « départ », « horizon » → champ lexical du voyage"],
                    ["Connotations", "La valeur positive ou négative des mots", "« refuge », « douceur », « lumière » créent une impression rassurante"],
                    ["Rupture lexicale", "Un mot inattendu qui tranche avec l'ensemble", "Un terme violent dans un texte paisible peut créer un effet de menace ou de surprise"],
                  ],
                },
                {
                  type: "notionCardGrid",
                  columns: 1,
                  cards: [
                    {
                      title: "Champ lexical dominant",
                      definition: "C'est le réseau de mots le plus présent ou le plus structurant dans le passage.",
                      exemples: [
                        "« mer », « vague », « écume », « rivage », « marée » : champ lexical de la mer.",
                      ],
                      test: "Il donne une unité de sens au texte et oriente l'interprétation.",
                    },
                    {
                      title: "Champ lexical secondaire",
                      definition: "Un autre réseau de mots peut accompagner le champ dominant et préciser l'effet.",
                      exemples: [
                        "Dans un texte sur la mer, « peur », « menace », « naufrage » ajoutent un champ lexical du danger.",
                      ],
                      test: "L'intérêt est souvent dans la rencontre de deux champs lexicaux : mer + danger, enfance + nostalgie, ville + oppression.",
                    },
                    {
                      title: "Connotation",
                      definition: "Un mot ne transmet pas seulement une information : il porte une nuance affective, culturelle ou évaluative.",
                      exemples: [
                        "« demeure » est plus noble que « maison » ; « baraque » est plus familier et dévalorisant.",
                      ],
                      test: "Au concours, on gagne en précision quand on explique la valeur des mots, pas seulement leur thème commun.",
                    },
                  ],
                },
                {
                  type: "formulaBlock",
                  title: "Méthode en 4 étapes",
                  lines: [
                    "① Relever au moins 4 ou 5 mots significatifs, pas seulement deux mots isolés.",
                    "② Regrouper ces mots par domaine de sens : nature, violence, école, voyage, lumière, enfermement…",
                    "③ Nommer le champ lexical avec précision : pas seulement « sentiments », mais « peur », « nostalgie », « admiration ».",
                    "④ Interpréter l'effet produit : atmosphère, regard de l'auteur, valorisation, dévalorisation, tension, rupture.",
                  ],
                  note: "L'étape ④ est décisive : le jury attend toujours une interprétation, pas une simple liste.",
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "Phrase modèle pour le concours",
                  text: "« Le passage mobilise le champ lexical de [domaine], comme le montrent les termes [mot 1], [mot 2], [mot 3]. Ce réseau lexical crée une atmosphère [effet] et présente [personnage / lieu / idée] comme [interprétation]. »",
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  text: "Un mot hors du champ lexical dominant peut être volontaire (effet d'humour, de surprise, de rupture) : toujours l'interpréter plutôt que le signaler comme une incohérence.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · confondre thème et champ lexical",
              badge: "Analyse trop vague",
              faux: "« Le champ lexical est l'école parce que le texte parle de l'école. »",
              vrai: "« Le texte a pour thème l'école, mais il mobilise le champ lexical de l'effort : “obstacle”, “progresser”, “réussite”, “persévérer”. »",
              methode: "Distinguer ce dont parle le texte (thème) et les mots qui construisent une atmosphère ou un point de vue (champ lexical).",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°2 · lister sans interpréter",
              badge: "Réponse incomplète",
              faux: "« Le champ lexical est : nuit, ombre, obscur. »",
              vrai: "Ajouter l'effet : « Ce champ lexical de la nuit crée une atmosphère mystérieuse, légèrement inquiétante. »",
              methode: "Un relevé ne suffit jamais : il faut nommer le champ lexical, puis expliquer son effet dans le texte.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°3 · mal nommer la progression",
              badge: "Erreur d'étiquette",
              faux: "« Le texte suit une progression linéaire parce qu'il parle toujours de la lecture. »",
              vrai: "S'il parle toujours de la lecture en ajoutant plusieurs informations sur elle, c'est plutôt une **progression à thème constant**.",
              methode: "Repérer d'abord ce qui reste stable : même thème repris = thème constant ; information nouvelle reprise phrase après phrase = progression linéaire ; thème général décliné en sous-thèmes = thèmes dérivés.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 3 :** les élèves apprennent à éviter les répétitions (reprises pronominales) et à relier leurs idées par des connecteurs simples (d'abord, ensuite, mais, donc).\n\n**Cycle 4 :** on travaille la progression et la cohérence d'un texte entier en production écrite.\n\n**Ce que vous devez savoir dire :** « La cohérence d'un texte s'enseigne par des outils concrets : substituts du nom pour éviter les répétitions, connecteurs pour expliciter les liens. C'est ce que j'attends aussi de ma propre rédaction en Partie 3. »",
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
              text: "Reconstituer une chaîne référentielle, analyser un connecteur et la progression, identifier et interpréter un champ lexical. Chacune se termine par un checkpoint.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : les mots qui reprennent",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "Antécédent = l'élément introduit en premier ; reprise = ce qui le redésigne ensuite.",
                    "Reprise pronominale (il, celle-ci…) ou nominale (le même nom, ou un synonyme / hyperonyme).",
                    "Connecteur = mot qui explicite la relation logique entre deux idées.",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Pour les reprises nominales infidèles, penser aux relations sémantiques (synonyme, hyperonyme) : voir la notion 17.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Reconstituer une chaîne référentielle",
              intro:
                "**Question typique :** « Relevez les reprises du référent X et précisez leur type. »\nOn part de la première mention.",
              steps: [
                {
                  number: "1",
                  text: "**Repérer l'antécédent** (la première mention du référent).",
                  example: { lines: ["« Une fillette traversait le marché. » → antécédent : « une fillette »"] },
                },
                {
                  number: "2",
                  text: "**Relever chaque reprise** dans l'ordre et **nommer son type** (pronominale, nominale fidèle, nominale infidèle).",
                  example: { lines: ["« Elle » (pronominale) → « la petite » (nominale infidèle)"] },
                },
                {
                  number: "💡",
                  text: "**Conclure sur l'effet** : la chaîne assure la continuité et évite la répétition.",
                  warn: "⚠️ Bien vérifier que toutes les reprises désignent le même référent.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« Un chien aboyait. L'animal semblait perdu. Il cherchait son maître. » Relevez les deux reprises de « un chien » et nommez leur type.",
              correction: [
                { type: "line", text: "« L'animal » : reprise nominale infidèle (hyperonyme). « Il » : reprise pronominale (pronom personnel sujet). Les deux assurent la continuité référentielle sans répéter « chien »." },
                { type: "note", text: "Trouvé du premier coup ? Vous savez lire une chaîne référentielle. Sinon, revoyez les types de reprise." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Analyser un connecteur et la progression",
              intro:
                "**Question typique :** « Quelle relation logique exprime ce connecteur ? Comment le texte progresse-t-il ? »",
              steps: [
                {
                  number: "1",
                  text: "**Nommer la relation du connecteur** (addition, opposition, cause, conséquence, illustration, reformulation…).",
                  example: { lines: ["« par conséquent » → conséquence"] },
                },
                {
                  number: "2",
                  text: "**Identifier le schéma de progression** : linéaire, à thème constant, ou à thèmes dérivés.",
                  example: { lines: ["« Paris… elle… la capitale… » → progression à thème constant"] },
                },
                {
                  number: "💡",
                  text: "**Justifier l'effet** : le connecteur balise le raisonnement ; la progression structure le propos.",
                  warn: "⚠️ Vérifier que le connecteur correspond bien à la relation réelle (ne pas confondre « par contre » et « par conséquent »).",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Quelle relation logique : « Il s'était entraîné des mois ; par conséquent, il remporta la médaille. » ?",
              correction: [
                { type: "line", text: "**Conséquence** : « par conséquent » indique que le résultat (la médaille) découle de la cause (l'entraînement)." },
                { type: "note", text: "Le bon nom de relation ? Direction le dernier checkpoint." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Identifier et interpréter un champ lexical",
              intro:
                "**Question typique :** « Identifiez le champ lexical dominant et son effet. »\nRelever, nommer, interpréter.",
              steps: [
                {
                  number: "1",
                  text: "**Relever les mots** qui évoquent un même domaine.",
                  example: { lines: ["« nuit, obscur, ombre, lune » → domaine de la nuit"] },
                },
                {
                  number: "2",
                  text: "**Nommer le champ lexical** (ou l'isotopie).",
                  example: { lines: ["champ lexical de la nuit / de l'obscurité"] },
                },
                {
                  number: "💡",
                  text: "**Interpréter l'effet** produit sur le lecteur (atmosphère, registre, intention).",
                  warn: "⚠️ Ne jamais s'arrêter à la liste : conclure sur l'effet est ce qui rapporte les points.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« ferrailler, armée, général, soldat » : nommez le champ lexical et son effet (texte sur l'écriture).",
              correction: [
                { type: "line", text: "Champ lexical du **combat / de la guerre**. Effet : l'écriture est présentée comme une lutte intérieure, une activité exigeante et conflictuelle." },
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
                  objectifId: "c1",
                  question: "« Le jeune homme entra. Il posa son manteau. » « Il » est :",
                  options: ["une reprise nominale fidèle", "une reprise pronominale", "un connecteur", "un antécédent"],
                  correctIndex: 1,
                  explanation:
                    "« Il » est un pronom personnel qui reprend l'antécédent « le jeune homme » : c'est une reprise pronominale.",
                },
                {
                  objectifId: "c2",
                  question: "« un berger allemand… le chien… » : « le chien » est une reprise nominale infidèle par :",
                  options: ["synonyme", "hyperonyme", "hyponyme", "périphrase"],
                  correctIndex: 1,
                  explanation:
                    "« chien » est un terme générique qui englobe « berger allemand » : c'est un hyperonyme.",
                },
                {
                  objectifId: "c3",
                  question: "Qu'est-ce qu'une chaîne référentielle ?",
                  options: [
                    "Une suite de connecteurs logiques",
                    "L'ensemble des reprises d'un même référent dans le texte",
                    "Le champ lexical dominant",
                    "La ponctuation d'un paragraphe",
                  ],
                  correctIndex: 1,
                  explanation:
                    "La chaîne référentielle réunit toutes les expressions (pronoms, groupes nominaux) qui désignent un même référent au fil du texte.",
                },
                {
                  objectifId: "c4",
                  question: "« Paris est lumineuse. Elle attire les touristes. La capitale ne dort jamais. » : la progression est :",
                  options: ["linéaire (en cascade)", "à thème constant", "à thèmes dérivés", "inexistante"],
                  correctIndex: 1,
                  explanation:
                    "Toutes les phrases parlent du même sujet (Paris), repris sous des formes variées : progression à thème constant.",
                },
                {
                  objectifId: "c5",
                  question: "« Il aimait les voyages ; cependant, il n'avait jamais pris l'avion. » « cependant » marque :",
                  options: ["une cause", "une conséquence", "une opposition / concession", "une addition"],
                  correctIndex: 2,
                  explanation:
                    "« cependant » oppose deux faits contradictoires : c'est un connecteur d'opposition / concession.",
                },
                {
                  objectifId: "c5",
                  question: "« En effet, les forêts produisent beaucoup d'oxygène. » « En effet » marque :",
                  options: ["une cause / explication", "une opposition", "une conclusion", "une illustration"],
                  correctIndex: 0,
                  explanation:
                    "« En effet » justifie ou appuie l'affirmation précédente : c'est un connecteur de cause / explication.",
                },
                {
                  objectifId: "c6",
                  question: "Quelle formulation est correcte ?",
                  options: [
                    "« Malgré qu'il soit fatigué… »",
                    "« Bien qu'il soit fatigué… »",
                    "« Malgré qu'il est fatigué… »",
                    "« Bien que il est fatigué… »",
                  ],
                  correctIndex: 1,
                  explanation:
                    "« malgré que » est à proscrire. On emploie « bien que » + subjonctif (« bien qu'il soit fatigué ») ou « malgré » + groupe nominal.",
                },
                {
                  objectifId: "c7",
                  question: "Pour analyser un champ lexical, le jury attend surtout :",
                  options: [
                    "la liste des mots, sans plus",
                    "le nombre de mots du champ",
                    "le nom du champ et l'interprétation de son effet",
                    "la nature grammaticale de chaque mot",
                  ],
                  correctIndex: 2,
                  explanation:
                    "Relever et nommer ne suffit pas : il faut interpréter l'effet produit (atmosphère, registre, intention).",
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
              label: "Niveau 1 : Identifier",
              sub: "Reprises, connecteurs, champ lexical, progression",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Reconstituer une chaîne référentielle",
              objectifTag: "Reprises",
              enonce: "« Une fillette traversait le marché. Elle portait un grand panier. La petite s'arrêta devant un étal de fleurs. Ces fleurs semblaient lui sourire. »",
              question: "Relevez les reprises du référent « fillette » et précisez le type de chacune.",
              correction: [
                { type: "line", text: "**Elle** : reprise pronominale (pronom personnel sujet)." },
                { type: "line", text: "**La petite** : reprise nominale infidèle (terme affectif / synonyme partiel)." },
                { type: "line", text: "**lui** : reprise pronominale (pronom personnel COI)." },
                { type: "note", text: "💡 « Ces fleurs » ne reprend pas « fillette » : l'expression renvoie aux fleurs de l'étal et appartient donc à une autre chaîne référentielle." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Nommer la relation des connecteurs",
              objectifTag: "Connecteurs",
              question:
                "Identifiez la relation logique de chaque connecteur souligné :\na) « Il s'était entraîné ; <u>par conséquent</u>, il gagna. »   b) « Elle aimait voyager ; <u>cependant</u>, elle craignait l'avion. »   c) « <u>En effet</u>, les forêts produisent de l'oxygène. »   d) « <u>Par exemple</u>, la lecture développe l'empathie. »   e) « <u>Autrement dit</u>, le texte doit progresser. »",
              correction: [
                { type: "line", label: "a)", text: "**Conséquence** : le résultat découle de l'entraînement." },
                { type: "line", label: "b)", text: "**Opposition / concession** : la peur contredit le goût du voyage." },
                { type: "line", label: "c)", text: "**Cause / explication** : appuie l'affirmation." },
                { type: "line", label: "d)", text: "**Illustration** : donne un exemple concret." },
                { type: "line", label: "e)", text: "**Reformulation** : reprend l'idée en d'autres termes." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Champ lexical",
              enonce: "« La nuit tombait sur la plaine. Les étoiles s'allumaient dans le ciel obscur. La lune éclairait faiblement le chemin. L'obscurité semblait vivante. »",
              question: "a) Nommez le champ lexical dominant et relevez ses termes. b) Quel effet produit-il ?",
              correction: [
                { type: "line", label: "a)", text: "Champ lexical de la **nuit / de l'obscurité** : « nuit, obscur, lune, éclairait faiblement, obscurité »." },
                { type: "line", label: "b)", text: "Il crée une atmosphère nocturne cohérente, aux tonalités mystérieuses et légèrement inquiétantes (renforcées par « semblait vivante »)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 4 : Identifier la progression",
              question:
                "Indiquez le schéma de progression (linéaire, à thème constant, à thèmes dérivés) :\na) « Paris est lumineuse. Elle attire les touristes. La capitale ne dort jamais. »   b) « Paul rencontra Marie. Cette femme changea sa vie. Ce changement fut radical. »   c) « La forêt est un écosystème. Les arbres produisent de l'oxygène. Les animaux y trouvent refuge. »",
              correction: [
                { type: "line", label: "a)", text: "**À thème constant** : toutes les phrases parlent de Paris (elle, la capitale)." },
                { type: "line", label: "b)", text: "**Linéaire (en cascade)** : Marie → cette femme → ce changement." },
                { type: "line", label: "c)", text: "**À thèmes dérivés** : la forêt, puis ses composantes (arbres, animaux)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser",
              sub: "Sur texte continu, choix de connecteurs",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : Analyse d'un texte continu",
              enonce: "« Un vieux professeur parcourait les rues chaque matin. L'homme s'arrêtait toujours devant la même boulangerie. Ce rituel lui semblait indispensable. Il achetait deux croissants et repartait sans un mot. »",
              question: "a) Reconstituez la chaîne référentielle du personnage. b) Quel est le schéma de progression ? c) Relevez le champ lexical de la routine.",
              correction: [
                { type: "line", label: "a)", text: "« Un vieux professeur » (antécédent) → « L'homme » (nominale infidèle, hyperonyme) → « lui » (pronominale, COI) → « Il » (pronominale, sujet)." },
                { type: "line", label: "b)", text: "Progression **à thème constant** : le professeur reste le sujet de bout en bout." },
                { type: "line", label: "c)", text: "Champ lexical de la routine : « chaque matin, toujours, même boulangerie, ce rituel, sans un mot »." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : Choisir le bon connecteur",
              question:
                "Complétez avec le connecteur le plus approprié (cependant · car · par exemple · en outre · par conséquent · autrement dit) et nommez la relation :\na) « La lecture développe le vocabulaire. ___, elle stimule l'imagination. »   b) « Il n'avait pas dormi. ___, il fit des erreurs. »   c) « Un texte sans reprises est lourd ; ___, il faut varier. »   d) « Il aimait la musique ; ___, il ne jouait d'aucun instrument. »   e) « Les élèves progressent ___ ils s'entraînent. »",
              correction: [
                { type: "line", label: "a)", text: "**En outre** (addition)." },
                { type: "line", label: "b)", text: "**Par conséquent** (conséquence)." },
                { type: "line", label: "c)", text: "**Autrement dit** (reformulation)." },
                { type: "line", label: "d)", text: "**Cependant** (opposition / concession)." },
                { type: "line", label: "e)", text: "**car** (cause)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Maîtriser",
              sub: "Analyse complète et réécriture",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 7 : Analyse littéraire complète",
              enonce: "« Écrire est un engagement à ferrailler. On s'engage dans l'écriture comme dans une armée imaginaire, où l'on serait à la fois général et aspirant soldat. »",
              question: "a) Nommez le champ lexical dominant et relevez ses termes. b) Relevez deux expressions qui relancent l'idée d'écrire et précisez leur rôle dans la cohérence du passage. c) Quel effet produit la métaphore filée ?",
              correction: [
                { type: "line", label: "a)", text: "Champ lexical du **combat / de la guerre** : « ferrailler, engagement, armée, général, aspirant soldat »." },
                { type: "line", label: "b)", text: "« un engagement » caractérise l'acte d'écrire ; « l'écriture » reprend nominalement le verbe « écrire ». Ces expressions maintiennent le même référent abstrait tout en le développant." },
                { type: "line", label: "c)", text: "La métaphore filée du combat présente l'écriture comme une lutte intérieure, exigeante : elle traduit l'engagement total de l'écrivain et donne une dimension épique à un acte intime." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 8 : Réécriture cohérente",
              enonce: "« L'école est importante. L'école permet d'apprendre. L'école est un lieu de socialisation. L'école développe l'esprit critique. »",
              question: "Réécrivez ce paragraphe en variant les reprises, en ajoutant des connecteurs et en assurant une progression lisible.",
              correction: [
                { type: "paragraph", text: "**Proposition :** « L'école occupe une place centrale dans la formation des individus. Elle permet **d'abord** l'acquisition des savoirs fondamentaux. **Mais** l'établissement scolaire est **aussi** un espace de socialisation : les élèves y apprennent à vivre ensemble. **Enfin**, cette institution développe leur esprit critique, condition d'une citoyenneté éclairée. »" },
                { type: "note", text: "Procédés : reprises variées (elle, l'établissement scolaire, cette institution), connecteurs (d'abord, mais, enfin), progression à thème constant." },
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
              text: "Ces exercices reproduisent le format de la Partie 1 (analyse de la cohérence d'un texte) et de la Partie 3 (cohérence en production écrite). Les exercices calqués sur des sujets récents portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format identique au concours",
              title: "Exercice 1 : analyse complète d'un texte",
              enonce:
                "« Lire, c'est voyager sans bouger. Le lecteur s'embarque pour des contrées inconnues, traverse des paysages imaginaires et revient transformé. Cette odyssée silencieuse forge l'âme. En effet, la littérature offre la rencontre avec des vies qui ne sont pas les nôtres. Par ailleurs, lire développe l'empathie. Bref, le livre est une fenêtre ouverte sur l'humanité. »",
              question: "1) Relevez trois reprises ou reformulations du référent « lire / lecture ». 2) Relevez trois connecteurs et leur relation logique. 3) Identifiez le champ lexical dominant (au moins cinq termes). 4) Comment le texte progresse-t-il ?",
              correction: [
                { type: "line", text: "**1)** « Le lecteur » désigne celui qui lit ; « Cette odyssée silencieuse » reformule l'activité de lire par métaphore ; « le livre » reprend l'activité par métonymie (l'objet pour la pratique)." },
                { type: "line", text: "**2)** « En effet » (explication / cause) ; « Par ailleurs » (addition) ; « Bref » (conclusion / synthèse)." },
                { type: "line", text: "**3)** Champ lexical du **voyage** : « voyager, s'embarque, contrées, traverse, paysages, odyssée, fenêtre ouverte »." },
                { type: "line", text: "**4)** Progression **à thème constant** : « lire / la lecture » reste le sujet, décliné sous plusieurs angles (voyage, transformation, empathie)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 2 : cohérence en production écrite",
              enonce:
                "Texte d'un candidat : « La lecture est importante. La lecture développe le vocabulaire. Les enfants lisent moins aujourd'hui. Malgré que les écrans sont partout. Il faut encourager la lecture. »",
              question: "Identifiez les défauts de cohérence, puis proposez une version améliorée.",
              correction: [
                { type: "line", text: "**Défauts :** répétition de « la lecture » sans reprise ; absence de connecteurs (juxtaposition) ; « malgré que » + indicatif (incorrect) ; pas de progression hiérarchisée." },
                { type: "paragraph", text: "**Version améliorée :** « La lecture occupe une place centrale dans le développement de l'enfant : elle enrichit son vocabulaire et ouvre des horizons nouveaux. **Pourtant**, cette pratique recule aujourd'hui, concurrencée par les écrans. **C'est pourquoi** il est essentiel de l'encourager dès le plus jeune âge. »" },
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
              text: "Ces exercices reproduisent des **défauts de cohérence fréquents** dans les copies de Partie 3. Repérer ce qui cloche et le corriger rigoureusement est une compétence directement valorisée au concours.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 1 · Réponse à corriger : reprises et concession",
              enonce: "Copie d'un candidat : « L'école est importante. L'école forme les citoyens. L'école est un lieu de vie. Malgré que certains élèves n'aiment pas l'école, l'école reste essentielle. »",
              question: "Identifiez le problème de reprises et le problème de formulation de la concession, puis corrigez.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Répétition de « l'école » cinq fois, sans reprise pronominale ni variation", bad: true },
                    { text: "« malgré que » + verbe : construction à proscrire", bad: true },
                    { text: "Réponse attendue : « L'école est une institution fondamentale. **Elle** forme les citoyens et constitue un lieu de vie. **Bien que** certains élèves n'y adhèrent pas toujours, **cet espace éducatif** demeure indispensable. »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : absence de connecteurs",
              enonce: "Copie d'un candidat : « La littérature est utile. Elle développe le vocabulaire. Elle aide à comprendre le monde. Elle forme l'esprit critique. Elle ouvre sur d'autres cultures. »",
              question: "Identifiez le défaut et réécrivez en intégrant des connecteurs.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Juxtaposition de propositions identiquement construites (Elle + verbe), sans connecteur : le texte semble une liste", bad: true },
                    { text: "La relation logique entre les idées reste implicite" },
                    { text: "Réponse attendue : « La littérature est utile à bien des égards. Elle enrichit **d'abord** le vocabulaire. **En outre**, elle aide à comprendre le monde. Elle développe **par là même** l'esprit critique et ouvre **enfin** sur d'autres cultures. »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : noms propres répétés",
              enonce: "Copie d'un candidat : « Victor Hugo est un grand écrivain. Victor Hugo a écrit Les Misérables. Les Misérables est un roman du XIXe siècle. Les Misérables raconte l'histoire de Jean Valjean. »",
              question: "Identifiez le problème et réécrivez avec des reprises variées.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Répétition systématique des noms propres, sans aucune reprise : rupture de fluidité", bad: true },
                    { text: "Aucune progression : paraphrase sans apport nouveau" },
                    { text: "Réponse attendue : « Victor Hugo, l'un des plus grands écrivains français, est l'auteur des **Misérables**. **Ce roman** du XIXe siècle retrace le destin de Jean Valjean, **un ancien forçat** en quête de rédemption. »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 4 · Réponse à corriger : « par contre » répété",
              enonce: "Copie d'un candidat : « La lecture est bénéfique. Par contre, les enfants lisent moins. Par contre, les enseignants doivent l'encourager. Par contre, les parents ont un rôle. »",
              question: "Identifiez le problème de cohérence logique et corrigez.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« par contre » (opposition) répété là où les propositions ne s'opposent pas", bad: true },
                    { text: "La relation réelle est une succession d'arguments, pas une opposition" },
                    { text: "Réponse attendue : « La lecture est bénéfique. **Pourtant**, les enfants lisent de moins en moins. **C'est pourquoi** les enseignants doivent l'encourager. **Par ailleurs**, les parents ont eux aussi un rôle à jouer. »" },
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
                  question: "Les 4 piliers de la cohérence textuelle ?",
                  answer:
                    "**1. Continuité référentielle** : les mêmes entités sont reprises (chaîne référentielle).\n**2. Progression** : chaque phrase apporte du nouveau.\n**3. Cohérence logique** : les relations sont explicitées par des connecteurs.\n**4. Champ lexical cohérent** : les mots créent un univers de sens unifié.",
                },
                {
                  question: "Les types de reprise anaphorique ?",
                  answer:
                    "**Pronominale** : un pronom reprend l'antécédent (« le chien… il… »).\n**Nominale fidèle** : même nom, déterminant différent (« un enfant… cet enfant… »).\n**Nominale infidèle** : synonyme, hyperonyme, hyponyme, périphrase, nominalisation (« Hugo… le poète du peuple… »).",
                  astuce: "💡 Les reprises infidèles s'appuient sur les relations sémantiques (notion 17).",
                },
                {
                  question: "Les 3 schémas de progression ?",
                  answer:
                    "**Linéaire (en cascade)** : chaque phrase repart d'un élément de la précédente.\n**À thème constant** : toutes les phrases parlent du même sujet.\n**À thèmes dérivés** : un sujet général décliné en sous-sujets.",
                  astuce: "Nommer le schéma, puis expliquer l'effet (dynamisme, unité, analyse).",
                },
                {
                  question: "Les 8 grandes relations des connecteurs ?",
                  answer:
                    "Addition (de plus, en outre), opposition (cependant, pourtant), cause (car, en effet), conséquence (donc, par conséquent), illustration (par exemple), reformulation (autrement dit), ordre (d'abord, ensuite), conclusion (bref, en somme).",
                },
                {
                  question: "Champ lexical : la méthode et la formule ?",
                  answer:
                    "**Méthode :** relever les mots d'un même domaine, nommer le champ, interpréter l'effet.\n**Formule :** « Le texte s'organise autour d'un champ lexical de [thème] : les termes [liste] créent une atmosphère de [registre / effet]. »",
                  astuce: "💡 Un mot hors champ peut être un effet voulu : l'interpréter, pas le signaler comme erreur.",
                },
                {
                  question: "« malgré que » : pourquoi l'éviter ?",
                  answer:
                    "« malgré que » + verbe est critiqué et refusé au concours.\nFormes correctes :\n« **Bien que** » / « **Quoique** » + subjonctif : « bien qu'il soit fatigué ».\n« **Malgré** » + groupe nominal : « malgré sa fatigue ».",
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
              center: { title: "Cohérence", subtitle: "textuelle" },
              branches: [
                {
                  title: "Reprises",
                  lines: ["Pronominale (il, celle-ci)", "Nominale fidèle (cet enfant)", "Nominale infidèle (l'animal)"],
                  variant: "blue",
                },
                {
                  title: "Progression",
                  lines: ["Linéaire (cascade)", "À thème constant", "À thèmes dérivés"],
                  variant: "green",
                },
                {
                  title: "Connecteurs",
                  lines: ["Addition, opposition", "Cause, conséquence", "Illustration, reformulation"],
                  variant: "green",
                },
                {
                  title: "Champ lexical",
                  lines: ["Relever les termes", "Nommer le champ", "Interpréter l'effet"],
                  variant: "blue",
                },
                {
                  title: "Renvois",
                  lines: ["Relations sémantiques → notion 17", "Énonciation → notion 14"],
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
