import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_COHERENCE_TEXTUELLE } from "./exercices-coherence-textuelle";
import { COPIES_COHERENCE_TEXTUELLE } from "./copies-coherence-textuelle";

export const SAVOIR_FAIRE = [
  { id: "reprises-nominales", label: "Reprises nominales" },
  { id: "pronoms", label: "Pronoms" },
  { id: "connecteurs", label: "Connecteurs" },
  { id: "progression-thematique", label: "Progression thématique" },
  { id: "temps-verbaux", label: "Temps verbaux" },
  { id: "ponctuation", label: "Ponctuation" },
];

export const ficheCoherenceTextuelle: Fiche = {
  slug: "coherence-textuelle",
  matiere: "francais",
  numero: 14,
  partie: "Partie 1 : Grammaire du texte et du discours",
  title: "La cohérence textuelle",
  subtitle: "Reprises anaphoriques, chaîne référentielle, progression du texte, connecteurs logiques et champ lexical",
  badges: [
      {
          "label": "★★ Fréquent · utile aux Parties 1, 2 et 3",
          "variant": "hot"
      },
      {
          "label": "Cycle 3-4 · BOEN n°1 du 22 janvier 2019",
          "variant": "info"
      }
  ],
  metaTitle: "Cohérence textuelle · Fiche de révision CRPE",
  metaDescription:
    "La cohérence textuelle au CRPE : reprises anaphoriques, chaîne référentielle, progression thématique, connecteurs logiques. Méthode et exercices corrigés.",
  maitriseNotionSlug: "coherence-textuelle",
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
              text: "La **cohérence textuelle** désigne l'ensemble des mécanismes qui font qu'un texte est intelligible et unifié. Elle repose sur quatre piliers : la **continuité référentielle** (on parle des mêmes entités), la **progression** (chaque phrase apporte du nouveau), la **cohérence logique** (les relations entre propositions sont explicites) et l'**unité du champ lexical**. C'est une notion utile dans les trois parties de l'épreuve : pour **analyser** un texte (Partie 1), pour **expliquer le lexique** (Partie 2) et pour [**rédiger**](fiche:produire-le-developpement) (Partie 3).",
            },
            {
              type: "callout",
              variant: "info",
              icon: "🧩",
              title: "Cohésion et cohérence : deux mots à ne pas confondre",
              text: "La **cohésion** réunit les marques visibles à la surface du texte : reprises, connecteurs, temps verbaux. La **cohérence** est plus large : c'est l'impression d'unité et de logique d'ensemble, qui suppose aussi que le texte ne se **contredise pas** et reste pertinent. Un texte peut être cohésif (bien outillé) tout en étant incohérent (s'il se contredit). Au concours, on attend les deux : des outils corrects **et** un propos qui se tient.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Les reprises anaphoriques et la chaîne référentielle",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une **anaphore** est un terme qui reprend un élément déjà introduit dans le texte (l'**antécédent**). Plus rarement, la reprise précède son référent : on parle alors de **cataphore** (« **Il** était une fois **un roi**… » : « il » annonce « un roi »). L'ensemble des expressions qui désignent un même référent forme une **chaîne référentielle**. C'est elle qui assure la continuité du texte, sans répétition maladroite.",
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
                      definition: "Le référent est repris par un autre mot (synonyme, hyperonyme, périphrase…). Voir les [relations sémantiques](fiche:relations-semantiques) (notion 18).",
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
                {
                  type: "schema",
                  src: "/fiches/francais/chaine-referentielle.svg",
                  alt: "Une chaîne référentielle au fil du texte. L'antécédent « Un vieux professeur » est introduit en premier, puis repris deux fois : par « L'homme » (reprise nominale infidèle, hyperonyme), puis par le pronom « Il » (reprise pronominale). Toutes ces expressions désignent le même référent et se relient à lui par des flèches qui remontent vers l'antécédent.",
                  caption: "Reconstituer une chaîne référentielle, c'est relier chaque reprise à un même antécédent et nommer son type.",
                  maxWidth: 620,
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "💡 **Anaphore associative** (rare) : une reprise peut désigner un élément simplement **associé** à ce qui précède, sans le reprendre directement. « Nous entrâmes dans **le village**. **L'église** était fermée. » « L'église » n'a pas d'antécédent exact : on la rattache au village par association. C'est un autre fil de cohésion, à côté de la chaîne référentielle.",
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
                  text: "Un texte cohérent **avance** : chaque phrase apporte une information nouvelle. Pour le décrire, on observe deux composantes dans chaque phrase. Le **thème** est ce dont on parle, le point de départ déjà connu (souvent en début de phrase). Le **rhème** (ou propos) est ce qu'on en dit, l'information nouvelle. Les trois schémas de progression se définissent par le jeu de ces deux éléments d'une phrase à l'autre.",
                },
                {
                  type: "table",
                  title: "Les trois progressions, vues par le thème et le rhème",
                  headers: ["Schéma", "Mécanisme", "Effet dominant"],
                  rows: [
                    ["Linéaire (en cascade)", "Le rhème d'une phrase devient le thème de la suivante", "Mouvement, fréquent dans les récits"],
                    ["À thème constant", "Le même thème est repris, le rhème change à chaque phrase", "Unité, fréquent dans descriptions et portraits"],
                    ["À thèmes dérivés", "Un thème général (hyperthème) se divise en sous-thèmes", "Analyse, fréquent dans les textes explicatifs"],
                  ],
                },
                {
                  type: "schema",
                  src: "/fiches/francais/progression-theme-rheme.svg",
                  alt: "Les trois schémas de progression décrits avec le thème (T, information connue) et le rhème (R, information nouvelle). Progression linéaire : le rhème d'une phrase devient le thème de la suivante, en escalier (R1 devient T2, R2 devient T3). Progression à thème constant : le même thème T est repris à chaque phrase, avec un rhème différent (R1, R2, R3). Progression à thèmes dérivés : un hyperthème général se divise en plusieurs sous-thèmes, chacun avec son rhème (T1-R1, T2-R2, T3-R3).",
                  caption: "Les nommer en concours est un plus ; l'essentiel est de montrer qu'on comprend comment l'auteur fait circuler l'information.",
                  maxWidth: 640,
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
                  title: "« malgré que » est à éviter à l'écrit",
                  text: "La construction « malgré que » + verbe est déconseillée par l'usage soutenu et la norme scolaire : mieux vaut s'en abstenir dans une copie. Employer **« bien que »** ou **« quoique »** + subjonctif, ou **« malgré »** + groupe nominal : « **Bien qu'**il soit fatigué… » ou « **Malgré** sa fatigue… », plutôt que « malgré qu'il soit fatigué ».",
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
              title: "Piège n°1 · une reprise dont l'antécédent est ambigu",
              badge: "Rupture de continuité",
              faux: "« Pierre dit à Paul qu'il avait tort. » → on ne sait pas qui a tort : « il » peut renvoyer à Pierre ou à Paul.",
              vrai: "Reformuler pour lever le doute : « Pierre reconnut que Paul avait tort » ou « Pierre admit qu'il avait lui-même tort ».",
              methode: "Toute reprise doit renvoyer sans hésitation à un seul antécédent. En analyse comme en rédaction, vérifier qu'un pronom n'a pas deux antécédents possibles.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · confondre thème et champ lexical",
              badge: "Analyse trop vague",
              faux: "« Le champ lexical est l'école parce que le texte parle de l'école. »",
              vrai: "« Le texte a pour thème l'école, mais il mobilise le champ lexical de l'effort : “obstacle”, “progresser”, “réussite”, “persévérer”. »",
              methode: "Distinguer ce dont parle le texte (thème) et les mots qui construisent une atmosphère ou un point de vue (champ lexical).",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · lister sans interpréter",
              badge: "Réponse incomplète",
              faux: "« Le champ lexical est : nuit, ombre, obscur. »",
              vrai: "Ajouter l'effet : « Ce champ lexical de la nuit crée une atmosphère mystérieuse, légèrement inquiétante. »",
              methode: "Un relevé ne suffit jamais : il faut nommer le champ lexical, puis expliquer son effet dans le texte.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · mal nommer la progression",
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
                  text: "⚠️ Pour les reprises nominales infidèles, penser aux [relations sémantiques](fiche:relations-semantiques) (synonyme, hyperonyme) : voir la notion 18.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Reconstituer une chaîne référentielle",
              intro:
                "*Question typique : « Relevez les reprises du référent et précisez leur type, dans : “Une fillette traversait le marché. Elle s'arrêta net : la petite avait repéré un étal de fruits.” »*",
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
                "*Question typique : « Quelle relation logique exprime le connecteur souligné, et comment le texte progresse-t-il ? : “Il s'était entraîné des mois ; <u>par conséquent</u>, il remporta la médaille.” »*",
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
                "*Question typique : « Identifiez le champ lexical dominant et son effet, dans : “nuit, obscur, ombre, lune, silence”. »*",
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
              title: "La cohérence textuelle",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_COHERENCE_TEXTUELLE,
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
              title: "La cohérence textuelle",
              copies: COPIES_COHERENCE_TEXTUELLE,
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
                  lines: ["Relations sémantiques → notion 18", "Énonciation → notion 15"],
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
