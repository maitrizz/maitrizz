import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_ACCORD_PARTICIPE_PASSE } from "./exercices-accord-participe-passe";
import { COPIES_ACCORD_PARTICIPE_PASSE } from "./copies-accord-participe-passe";

export const SAVOIR_FAIRE = [
  { id: "etre", label: "Avec être" },
  { id: "avoir-cod-avant", label: "Avec avoir (COD avant)" },
  { id: "pronominaux", label: "Pronominaux" },
  { id: "cas-particuliers", label: "Cas particuliers" },
];

export const ficheAccordParticipePasse: Fiche = {
  slug: "accord-participe-passe",
  matiere: "francais",
  numero: 12,
  partie: "Partie 1 : Orthographe grammaticale",
  title: "L'accord du participe passé",
  subtitle: "PP seul, avec être, avec avoir (COD antéposé), verbes pronominaux et piège infinitif / participe passé",
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
  metaTitle: "Accord du participe passé · Fiche de révision CRPE",
  metaDescription: "L'accord du participe passé au CRPE : PP seul, avec être, avec avoir, COD antéposé, « en », verbes pronominaux. Méthode et exercices corrigés.",
  maitriseNotionSlug: "accord-participe-passe",
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
              text: "Le participe passé est une **forme non conjuguée** du verbe (voir la notion 10). Son accord dépend entièrement de son **emploi** : seul, avec être, ou avec avoir. La règle générale des accords (nom noyau donneur, groupe sujet) a été vue à la notion 11 ; ici, on l'applique au cas particulier du participe passé. La confusion entre infinitif et participe passé et les erreurs sur les pronominaux sont des fautes fréquentes et lourdement sanctionnées au concours.",
            },
            {
              type: "formulaBlock",
              title: "L'arbre de décision en 4 questions",
              lines: [
                "① Le PP est-il employé seul (sans auxiliaire) ? → OUI : accord avec le nom noyau ou le sujet (règle A).",
                "② Sinon, l'auxiliaire est-il ÊTRE ? → OUI : accord avec le groupe sujet (règle B).",
                "③ Sinon (auxiliaire AVOIR), y a-t-il un COD ? → NON : invariable (règle C).",
                "④ Le COD est-il placé AVANT le verbe ? → NON : invariable (règle C). OUI : accord avec le COD antéposé (règle D).",
              ],
              note: "Toujours identifier l'auxiliaire en premier, puis chercher le COD et sa position.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Règle A : le participe passé employé seul",
              blocks: [
                {
                  type: "paragraph",
                  text: "Sans auxiliaire, le participe passé fonctionne comme un **adjectif**. Il s'accorde en genre et en nombre avec le nom auquel il se rapporte : son nom noyau (épithète) ou le groupe sujet (attribut détaché).",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Épithète (liée ou détachée)",
                      definition: "Le PP se rapporte directement à un nom, sans verbe d'état.",
                      exemples: [
                        "« les yeux **baissés** » : épithète liée de « yeux » (masculin pluriel)",
                        "« **Épuisée**, elle s'endormit » : épithète détachée du sujet « elle » (féminin singulier)",
                      ],
                      test: "Accord avec le nom noyau, comme un adjectif qualificatif (voir la notion 11).",
                    },
                    {
                      title: "Attribut du sujet",
                      definition: "Le PP est relié au sujet par un verbe d'état (être, paraître, sembler, rester…).",
                      exemples: [
                        "« Les volets restaient **fermés** » : attribut du sujet « volets » (masculin pluriel)",
                      ],
                      test: "Accord avec le groupe sujet via le verbe d'état (voir la notion 4).",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Règle B : le participe passé avec l'auxiliaire être",
              blocks: [
                {
                  type: "paragraph",
                  text: "Avec l'auxiliaire **être**, le participe passé s'accorde avec le **groupe sujet**, en genre et en nombre. Cela concerne les temps composés conjugués avec être (passé composé, plus-que-parfait, futur antérieur…) et la voix passive (voir la notion 10).",
                },
                {
                  type: "table",
                  title: "Accord avec le groupe sujet",
                  headers: ["Phrase", "Groupe sujet", "Accord"],
                  rows: [
                    ["« Elle est partie tôt. »", "elle (féminin singulier)", "partie"],
                    ["« Les élèves sont arrivés en retard. »", "les élèves (masculin pluriel)", "arrivés"],
                    ["« Ces maisons ont été vendues. » (passif)", "ces maisons (féminin pluriel)", "vendues"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Verbes à double auxiliaire",
                  text: "**Monter, descendre, sortir, passer, rentrer, retourner** se conjuguent avec être quand ils sont intransitifs (« Elle est **montée** »), mais avec avoir quand ils ont un COD (« Elle a **monté** les valises » : COD « les valises » placé après, donc invariable). Avant d'accorder, vérifiez quel auxiliaire est employé.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Règles C et D : le participe passé avec l'auxiliaire avoir",
              blocks: [
                {
                  type: "paragraph",
                  text: "Avec l'auxiliaire **avoir**, le participe passé est **invariable par défaut**. Il ne s'accorde que dans un seul cas : quand le **COD est placé avant le verbe** (COD antéposé). C'est alors avec ce COD antéposé qu'il s'accorde.",
                },
                {
                  type: "table",
                  title: "Règle C : pas de COD, ou COD placé après → invariable",
                  headers: ["Phrase", "Pourquoi", "PP"],
                  rows: [
                    ["« Il a dormi longtemps. »", "verbe intransitif, pas de COD", "dormi (invariable)"],
                    ["« Elle a mangé les pommes. »", "COD « les pommes » placé après le verbe", "mangé (invariable)"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Règle D : le COD est placé avant le verbe",
                  text: "Après avoir vérifié qu'un COD existe, il faut regarder sa place. S'il est placé avant le verbe, le participe passé s'accorde avec lui. Le COD peut être antéposé de trois façons.",
                },
                {
                  type: "table",
                  title: "Les trois façons d'antéposer le COD",
                  headers: ["Mécanisme", "Exemple", "Question à poser", "Accord"],
                  rows: [
                    ["Pronom personnel (le, la, les, me, te, nous, vous)", "« La lettre ? Elle l'a **envoyée**. »", "Elle a envoyé quoi ? « la lettre », reprise par « l' » avant le verbe", "avec « la lettre » (féminin singulier)"],
                    ["Pronom relatif « que »", "« les livres **que** j'ai **lus** »", "J'ai lu quoi ? « les livres », repris par « que » avant le verbe", "avec « livres » (masculin pluriel)"],
                    ["Interrogatif / exclamatif", "« **Quelle** décision a-t-il **prise** ? »", "Il a pris quoi ? « quelle décision », placée avant le verbe", "avec « décision » (féminin singulier)"],
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Pour aller plus loin · mesure ou COD ? (hors attendus)",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "**Tout ce qui est placé avant le verbe n'est pas un COD.** Des verbes comme *coûter, valoir, peser, mesurer, vivre, durer, courir, marcher* sont souvent suivis d'un complément qui répond à *combien ?* (prix, poids, durée, distance) : c'est un **complément de mesure**, pas un COD, donc le participe reste **invariable**, même placé avant. Au sens figuré, en revanche, ces verbes peuvent avoir un **vrai COD**, et l'accord se fait normalement. Hors attendus du concours, mais classique sur un texte littéraire.",
                    },
                    {
                      type: "table",
                      headers: ["Phrase", "Accord", "Pourquoi"],
                      rows: [
                        ["« Les mille euros que ce vélo m'a **coûté**. »", "invariable", "coûté *combien ?* → complément de prix (mesure), pas un COD"],
                        ["« Les efforts que ce vélo m'a **coûtés**. »", "accord", "coûté *quoi ?* → les efforts = vrai COD antéposé (sens figuré)"],
                        ["« Les trois heures que j'ai **couru**. »", "invariable", "couru *combien de temps ?* → complément de durée"],
                        ["« Les dangers que j'ai **courus**. »", "accord", "courir *un danger* = COD (sens figuré)"],
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Le cas du pronom « en »",
                  text: "Avec le pronom **en**, le participe passé reste **invariable** : c'est un cas particulier qui échappe à la règle ordinaire du COD antéposé. On écrit : « Des livres ? J'en ai **lu**. » ; « Des erreurs ? Elle en a **commis**. » On n'accorde pas avec le nom repris par « en », même s'il est féminin pluriel.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Pour aller plus loin · le neutre « l' » (hors attendus)",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "**Un « l' » antéposé ne déclenche pas toujours l'accord.** Quand le COD antéposé est le pronom neutre *l'* (ou *le*) qui reprend **toute une proposition** (une idée, pas un nom précis), le participe reste **invariable**. Fréquent après *croire, penser, dire, savoir, espérer* dans une comparaison. Hors attendus, mais le piège est tentant.",
                    },
                    {
                      type: "table",
                      headers: ["Phrase", "Accord", "Pourquoi"],
                      rows: [
                        ["« Elle est moins fragile que je ne l'avais **cru**. »", "invariable", "*l'* = « qu'elle était fragile » (une idée), pas un nom"],
                        ["« La nouvelle, je l'avais **dite** à tout le monde. »", "accord", "ici *l'* = « la nouvelle » (nom féminin) → accord ordinaire"],
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "« fait » et « laissé » suivis d'un infinitif",
                  text: "Le participe passé **fait** suivi d'un infinitif est **toujours invariable** : on écrit « la maison qu'il a **fait** construire », et non « qu'il a faite construire ». Depuis les rectifications de 1990, **laissé** suivi d'un infinitif est lui aussi recommandé **invariable** : on écrit « les enfants qu'elle a **laissé** jouer », et non « qu'elle a laissés jouer ».",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Pour aller plus loin · perception + infinitif (hors attendus)",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "**Au-delà de *fait* et *laissé*.** Avec *vu, entendu, senti, regardé, aperçu* suivis d'un infinitif, le participe s'accorde avec le complément placé avant **seulement si ce complément fait l'action de l'infinitif** (s'il en est le sujet). S'il la subit, le participe reste **invariable**. Hors attendus du concours, mais c'est la nuance qui sépare *entendue* de *entendu*.",
                    },
                    {
                      type: "table",
                      headers: ["Phrase", "Accord", "Pourquoi"],
                      rows: [
                        ["« La cantatrice que j'ai entend**ue** chanter. »", "accord", "la cantatrice **chante** : elle fait l'action → accord"],
                        ["« L'air que j'ai entend**u** chanter. »", "invariable", "l'air **est chanté** : il subit l'action → invariable"],
                        ["« Les ouvriers que j'ai **vus** travailler. »", "accord", "ce sont eux qui travaillent"],
                      ],
                    },
                    {
                      type: "callout",
                      variant: "info",
                      text: "💡 Test : si l'on peut insérer « en train de » (*la cantatrice que j'ai entendue [en train de] chanter*), le complément fait l'action → accord.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Règle E : le participe passé des verbes pronominaux",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un **verbe pronominal** se construit avec un pronom réfléchi qui renvoie au sujet : me, te, se, nous ou vous. À l'infinitif, il est présenté avec « se » : se laver, se parler, s'enfuir. Pour accorder son participe passé, il faut déterminer le **rôle du pronom réfléchi**. La méthode consiste à reformuler avec l'auxiliaire avoir, puis à appliquer la règle du COD antéposé.",
                },
                {
                  type: "table",
                  title: "Accord selon le rôle du pronom « se »",
                  headers: ["Type et exemple", "Question à poser", "Rôle de « se »", "Accord"],
                  rows: [
                    ["Réfléchi : « Elle s'est **lavée**. »", "Elle a lavé qui ? elle-même, reprise par « se »", "COD antéposé", "avec le sujet : lavée"],
                    ["Réfléchi : « Elle s'est **lavé** les mains. »", "Elle a lavé quoi ? « les mains » ; à qui ? à elle-même, reprise par « se »", "COI ; COD placé après", "invariable : lavé"],
                    ["Réciproque : « Ils se sont **regardés**. »", "Ils ont regardé qui ? l'un l'autre, repris par « se »", "COD antéposé", "avec le sujet : regardés"],
                    ["Réciproque : « Ils se sont **parlé**. »", "Ils ont parlé à qui ? l'un à l'autre, repris par « se »", "COI", "invariable : parlé"],
                    ["Essentiellement pronominal : « Elle s'est **enfuie**. »", "Peut-on employer « enfuir » sans « se » ? Non.", "pronom non analysable", "avec le sujet : enfuie"],
                    ["Passif pronominal : « Ces livres se sont bien **vendus**. »", "Qu'est-ce qui s'est vendu ? « ces livres »", "valeur passive", "avec le sujet : vendus"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "Verbes dont « se » est toujours COI : PP invariable",
                  text: "Quelques verbes ont un pronom toujours COI, donc un PP toujours invariable : se parler, s'écrire, se sourire, se plaire, se déplaire, se nuire, se mentir, se ressembler, se succéder, se téléphoner, se suffire. « Ils se sont **souri**. » ; « Elles se sont **plu**. » ; « Les rois qui se sont **succédé**. »",
                },
              ],
            },
            {
              type: "subsection",
              number: "⑤",
              title: "Règle F : infinitif (-er) ou participe passé (-é) ?",
              blocks: [
                {
                  type: "paragraph",
                  text: "Les formes en **-er** (infinitif) et en **-é** (participe passé) du 1er groupe se prononcent de la même façon. Pour les distinguer, on remplace le verbe par un verbe du 2e groupe (en -ir) : si la phrase accepte **-ir**, c'est un **infinitif** (-er) ; si elle accepte **-i**, c'est un **participe passé** (-é).",
                },
                {
                  type: "table",
                  title: "Le test de remplacement par « choisir / choisi »",
                  headers: ["Phrase", "Remplacement", "Conclusion"],
                  rows: [
                    ["« Il faut manger équilibré. »", "« Il faut **choisir** » ✓", "infinitif : manger"],
                    ["« Il a bien mangé. »", "« Il a bien **choisi** » ✓", "participe passé : mangé"],
                    ["« Je l'ai entendu chanter. »", "« Je l'ai entendu **choisir** » ✓", "infinitif (subordonnée infinitive)"],
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · Accorder avec le sujet après « avoir »",
              badge: "Erreur très fréquente",
              faux: "« Elles ont **rangées** leurs affaires. » Le participe passé a été accordé à tort avec le sujet « elles ».",
              vrai: "Avec l'auxiliaire « avoir », le participe passé ne s'accorde pas avec le sujet. Le COD « leurs affaires » est placé après le verbe : on écrit « Elles ont **rangé** leurs affaires. »",
              methode: "Repérer l'auxiliaire, puis poser la question « elles ont rangé quoi ? ». Le COD est après le verbe : le participe passé reste invariable.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · Le pronom « en »",
              badge: "Source d'erreurs",
              faux: "« Des livres, j'en ai lus*. »",
              vrai: "Avec « en », le participe passé reste invariable : « Des livres, j'en ai **lu**. » C'est un cas particulier qui échappe à la règle ordinaire du COD antéposé.",
              methode: "Repérer « en » avant le verbe : il bloque l'accord, quel que soit le genre ou le nombre du nom de référence.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · Pronominaux dont « se » est COI",
              badge: "Cas difficile",
              faux: "« Elles se sont souries* en se retrouvant. »",
              vrai: "« sourire à quelqu'un » : « se » est COI, donc PP invariable : « Elles se sont **souri**. »",
              methode: "Se demander si le verbe se construit avec « à » (se parler, se sourire, se téléphoner…) : si oui, « se » est COI et le PP reste invariable.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · Verbes à double auxiliaire",
              badge: "À mémoriser",
              faux: "« Elle a montée* les valises. »",
              vrai: "Avec avoir, le COD « les valises » est placé après le verbe : PP invariable, « Elle a **monté** les valises. » Mais : « les valises qu'elle a **montées** » (COD antéposé).",
              methode: "Monter, descendre, sortir, passer, rentrer, retourner : vérifier d'abord l'auxiliaire, puis la position du COD.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 3 :** l'accord du participe passé employé avec être et l'accord de l'attribut sont introduits, en lien avec le repérage du sujet.\n\n**Cycle 4 :** l'accord avec avoir et la règle du COD antéposé sont étudiés progressivement ; les verbes pronominaux relèvent surtout du lycée et de l'expertise du professeur.\n\n**Ce que vous devez savoir dire :** « On enseigne d'abord le participe passé avec être, dont l'accord ressemble à celui de l'adjectif, avant la règle plus difficile du COD antéposé avec avoir. Le geste de relecture (repérer l'auxiliaire, puis chercher le COD) est à automatiser. »",
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
              title: "Les repères indispensables",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "PP employé seul → accord avec le nom auquel il se rapporte.",
                    "Auxiliaire être → accord avec le groupe sujet.",
                    "Auxiliaire avoir → accord seulement avec le COD placé avant le verbe.",
                    "Verbe pronominal → déterminer si « se » est COD, COI ou non analysable.",
                    "Forme en -er / -é → remplacer par « choisir / choisi ».",
                  ],
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Accorder un participe passé avec « avoir »",
              intro:
                "*Question typique : Dans « les lettres qu'il a <u>envoyées</u> », justifiez l'accord du participe passé souligné.*",
              steps: [
                {
                  number: "1",
                  text: "**Identifier l'auxiliaire.**",
                  example: { lines: ["« a envoyées » → auxiliaire « avoir »."] },
                },
                {
                  number: "2",
                  text: "**Chercher le COD et sa place.** Poser la question « il a envoyé quoi ? »",
                  example: { lines: ["Il a envoyé « les lettres », reprises par « que » avant le verbe → COD antéposé."] },
                },
                {
                  number: "3",
                  text: "**Donner le genre et le nombre du COD.**",
                  example: { lines: ["« lettres » est féminin pluriel → « envoyées »."] },
                },
                {
                  number: "💡",
                  text: "**Réponse attendue :** « envoyées » est employé avec l'auxiliaire « avoir ». Le pronom relatif « que », mis pour « les lettres », est COD du verbe « envoyer » et se trouve avant celui-ci. Le participe passé s'accorde donc avec ce COD féminin pluriel.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Justifiez l'accord dans « les photos qu'elle avait prises ».",
              correction: [
                { type: "line", text: "**Réponse attendue :** « prises » est employé avec l'auxiliaire « avoir ». Le pronom relatif « que », mis pour « les photos », est COD de « prendre » et se trouve avant le verbe. Le participe passé s'accorde donc au féminin pluriel avec ce COD." },
                { type: "note", text: "Trouvé du premier coup ? Vous tenez la règle du COD antéposé. Sinon, revoyez la règle D." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Accorder le PP d'un verbe pronominal",
              intro:
                "*Question typique : Dans « Elle s'est <u>lavé</u> les mains », justifiez l'invariabilité du participe passé souligné.*",
              steps: [
                {
                  number: "1",
                  text: "**Reformuler avec « avoir ».**",
                  example: { lines: ["« Elle a lavé les mains à elle-même. »"] },
                },
                {
                  number: "2",
                  text: "**Poser les questions « quoi ? » et « à qui ? ».**",
                  example: { lines: ["Elle a lavé quoi ? « les mains », COD placé après. À qui ? à elle-même, reprise par « se » → « se » est COI."] },
                },
                {
                  number: "💡",
                  text: "**Réponse attendue :** Dans « Elle s'est lavé les mains », le pronom « se » est COI et le COD « les mains » est placé après le verbe. Aucun COD ne précède le participe passé : « lavé » reste donc invariable.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« Elles se sont (écrire) des lettres. » Quelle forme du participe passé, et pourquoi ?",
              correction: [
                { type: "line", text: "**Réponse attendue :** « écrire à quelqu'un » se construit avec un COI : « se » est donc COI. Le COD « des lettres » est placé après le verbe. Aucun COD ne précède le participe passé, qui reste invariable : « Elles se sont **écrit** des lettres »." },
                { type: "note", text: "Le réflexe du « à » fonctionne ? Direction le test infinitif / participe passé." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Trancher entre infinitif (-er) et participe passé (-é)",
              intro:
                "*Question typique : Dans « Il a décidé d'<u>aller</u> voir ses parents », justifiez la terminaison de la forme soulignée.*",
              steps: [
                {
                  number: "1",
                  text: "**Remplacer la forme en -er / -é par un verbe du 2e groupe** (choisir).",
                  example: { lines: ["« Il a décidé de choisir » est correct."] },
                },
                {
                  number: "2",
                  text: "**Conclure** : si « -ir » passe, c'est un infinitif (écrire -er) ; si « -i » passe, c'est un participe passé (écrire -é).",
                  example: { lines: ["« choisir » est un infinitif → on écrit « aller » avec la terminaison -er."] },
                },
                {
                  number: "💡",
                  text: "**Réponse attendue :** La forme « aller » peut être remplacée par l'infinitif « choisir » : « Il a décidé de choisir ». Elle est donc à l'infinitif et s'écrit avec la terminaison -er. Devant une voyelle, « de » s'élide : on écrit « d'aller ».",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Infinitif ou participe passé : « Les erreurs (commettre) dans ce devoir sont nombreuses. »",
              correction: [
                { type: "line", text: "**Réponse attendue :** Le remplacement par « choisies » montre qu'il faut un participe passé. « commises » est employé seul et se rapporte au nom « erreurs », féminin pluriel : il s'accorde donc avec lui." },
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
              title: "L'accord du participe passé",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_ACCORD_PARTICIPE_PASSE,
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
              title: "L'accord du participe passé",
              copies: COPIES_ACCORD_PARTICIPE_PASSE,
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
              center: { title: "Accord du PP", subtitle: "4 emplois" },
              branches: [
                {
                  title: "PP employé seul",
                  lines: ["Comme un adjectif", "Épithète : accord avec le nom noyau", "Attribut : accord avec le sujet"],
                  variant: "blue",
                },
                {
                  title: "Avec être",
                  lines: ["Accord avec le groupe sujet", "Temps composés + voix passive", "Double auxiliaire : vérifier"],
                  variant: "green",
                },
                {
                  title: "Avec avoir",
                  lines: ["Invariable par défaut", "Accord si COD antéposé", "« en » → invariable"],
                  variant: "green",
                },
                {
                  title: "Pronominaux",
                  lines: ["Rôle de « se » : COD / COI", "se = COD → accord avec le sujet", "se = COI → invariable"],
                  variant: "blue",
                },
                {
                  title: "Pièges classiques",
                  lines: ["Infinitif (-er) / PP (-é) : test -ir", "« en » → invariable", "se parler, se sourire → invariables"],
                  variant: "yellow",
                },
                {
                  title: "Renvois",
                  lines: ["Formes non conjuguées → notion 10", "Accords GN / GV → notion 11", "Homophones → notion 13"],
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
