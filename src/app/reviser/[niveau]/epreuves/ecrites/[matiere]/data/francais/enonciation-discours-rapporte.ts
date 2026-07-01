import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_ENONCIATION_DISCOURS_RAPPORTE } from "./exercices-enonciation-discours-rapporte";
import { COPIES_ENONCIATION_DISCOURS_RAPPORTE } from "./copies-enonciation-discours-rapporte";

const SAVOIR_FAIRE = [
  { id: "indices-enonciation", label: "Indices d’énonciation" },
  { id: "discours-direct", label: "Discours direct" },
  { id: "discours-indirect", label: "Discours indirect" },
  { id: "discours-indirect-libre", label: "Discours indirect libre" },
  { id: "transpositions", label: "Transpositions" },
  { id: "modalisation", label: "Modalisation" },
];

export const ficheEnonciationDiscoursRapporte: Fiche = {
  slug: "enonciation-discours-rapporte",
  matiere: "francais",
  numero: 15,
  partie: "Partie 1 : Grammaire du texte et du discours",
  title: "L'énonciation et le discours rapporté",
  subtitle: "Discours ancré / récit coupé, embrayeurs, discours direct, indirect, indirect libre, récit de paroles et concordance des temps",
  badges: [
      {
          "label": "★★☆ Fréquent",
          "variant": "hot"
      },
      {
          "label": "Cycle 3-4 · BOEN n°1 du 22 janvier 2019",
          "variant": "info"
      }
  ],
  metaTitle: "Énonciation et discours rapporté · Fiche de révision CRPE",
  metaDescription:
    "L'énonciation et le discours rapporté au CRPE : embrayeurs, discours direct, indirect et indirect libre, concordance des temps. Méthode et exercices corrigés.",
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
              text: "Cette notion répond à deux questions liées : **qui prend en charge l'énoncé, et depuis quelle situation ?** (l'énonciation) et **comment les paroles ou les pensées sont-elles rapportées ?** (le discours rapporté). Au concours, il ne suffit pas de nommer une forme : il faut relever des indices précis (personnes, temps, ponctuation, verbe introducteur) et expliquer l'effet produit.",
            },
            {
              type: "subsection",
              number: "①",
              title: "L'énonciation : discours ancré ou récit coupé ?",
              blocks: [
                {
                  type: "paragraph",
                  text: "Avant d'analyser un texte, posez quatre questions : **qui parle ? à qui ? quand ? où ?** Selon les réponses, l'énoncé est soit **ancré** dans une situation identifiable, soit **coupé** de cette situation et organisé comme un récit autonome.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Énoncé ancré dans la situation d'énonciation",
                      definition: "L'énoncé dépend d'une situation identifiable : un locuteur s'adresse à un destinataire, dans un lieu et à un moment repérables.",
                      exemples: [
                        "« **Je** crois que lire est l'un des actes les plus libres. » (je, présent d'énonciation)",
                      ],
                      test: "Indices fréquents : je, tu, nous, ici, maintenant, aujourd'hui ; présent, futur, passé composé. Textes fréquents : lettre, discours, article, essai, dialogue.",
                    },
                    {
                      title: "Récit coupé de l'énonciation",
                      definition: "Le récit ne dépend pas directement du moment où quelqu'un parle : les repères sont internes à l'histoire racontée.",
                      exemples: [
                        "« Le facteur **distribuait** le courrier. **Il passa** devant la boulangerie. » (il, imparfait, passé simple)",
                      ],
                      test: "Indices fréquents : il, elle, ils, ce jour-là, la veille, alors ; passé simple, imparfait, plus-que-parfait. Textes fréquents : roman, conte, fable.",
                    },
                  ],
                },
                {
                  type: "table",
                  title: "La phrase attendue au concours",
                  headers: ["À faire", "Formulation efficace"],
                  rows: [
                    ["Identifier", "« Le passage relève majoritairement du récit coupé de l'énonciation. »"],
                    ["Justifier", "« On le voit aux pronoms de 3e personne, aux temps du récit et aux repères internes comme “la veille”. »"],
                    ["Nuancer", "« Le dialogue inséré crée toutefois une rupture : les paroles du personnage sont ancrées dans sa propre situation d'énonciation. »"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  text: "Un texte mêle souvent les deux systèmes : un roman relève du récit, mais ses dialogues sont ancrés dans la situation des personnages. On identifie le système **dominant** et on signale les ruptures utiles.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les embrayeurs (déictiques)",
              blocks: [
                {
                  type: "paragraph",
                  text: "On appelle **embrayeurs** (ou déictiques) les mots dont le référent dépend de la situation d'énonciation. « je », « ici » ou « demain » ne désignent pas la même personne, le même lieu ou le même jour selon qui parle, où et quand. Au concours, il faut donc les relever et préciser leur référent dans le passage.",
                },
                {
                  type: "table",
                  title: "Les catégories d'embrayeurs",
                  headers: ["Catégorie", "Mots", "Ce qu'ils désignent"],
                  rows: [
                    ["Personnes", "je, tu, nous, vous, me, te, mon, votre", "Le locuteur, le destinataire ou leur groupe"],
                    ["Indicateurs de temps", "maintenant, aujourd'hui, hier, demain", "Le moment par rapport au moment où l'on parle"],
                    ["Indicateurs de lieu", "ici, là, ce lieu", "L'espace par rapport à la position du locuteur"],
                    ["Démonstratifs", "ce, cette, ceci, cela", "Ce que le locuteur montre ou désigne dans la situation"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Déictique ou anaphorique ?",
                  text: "Un même mot peut fonctionner différemment selon le contexte. Dans « **Ce** livre que tu tiens », « ce » est déictique : il désigne un objet présent dans la situation. Dans « Un livre était posé sur la table. **Ce** livre était ancien », « ce » est anaphorique : il reprend un élément déjà nommé. Cette distinction évite beaucoup d'analyses trop rapides.",
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  text: "En passant du discours ancré au récit, les embrayeurs se transforment : je → il, aujourd'hui → ce jour-là, ici → là, demain → le lendemain.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Les marques de subjectivité (la modalisation)",
              blocks: [
                {
                  type: "paragraph",
                  text: "Quand un énoncé est ancré dans la situation d'énonciation (lettre, essai, discours, article), le locuteur ne se contente pas d'informer : il **laisse paraître son point de vue**. Repérer ces traces, c'est analyser la **modalisation**. La question revient souvent sur les textes argumentatifs : « Relevez les marques de subjectivité » ou « Comment l'auteur s'implique-t-il dans son propos ? ».",
                },
                {
                  type: "table",
                  title: "Les quatre grandes marques de subjectivité",
                  headers: ["Marque", "Exemples", "Ce qu'elle révèle"],
                  rows: [
                    ["Lexique évaluatif (mélioratif ou péjoratif)", "« un chef-d'œuvre », « ce torchon », « hélas »", "Un jugement de valeur, positif ou négatif"],
                    ["Modalisateurs (adverbes et locutions)", "peut-être, sans doute, certes, heureusement, à mon avis", "Le degré de certitude ou l'appréciation du locuteur"],
                    ["Verbes et tournures de modalité", "devoir, pouvoir, il faut, je crois que, il semble que", "L'obligation, la possibilité, le doute"],
                    ["Temps, modes et ponctuation", "conditionnel d'information non confirmée (« le bilan serait lourd »), exclamation, question rhétorique", "La prudence, l'émotion, l'implication"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "Le pronom « on » : un cas d'énonciation",
                  text: "« on » est un pronom personnel indéfini, mais c'est surtout un **outil d'effacement énonciatif** : il peut masquer le locuteur derrière une vérité générale (« on sait que… »), l'inclure familièrement à la place de « nous » (« on part demain »), ou viser un destinataire (« alors, on ne dit plus bonjour ? »). Préciser sa valeur dans le contexte est souvent attendu.",
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  text: "Le repérage des temps verbaux est utile ici aussi : un conditionnel peut marquer l'atténuation ou l'information non vérifiée plutôt qu'une condition (voir [le conditionnel et ses valeurs](fiche:present-futur-conditionnel-subjonctif)).",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Les formes du discours rapporté",
              blocks: [
                {
                  type: "paragraph",
                  text: "Soit Paul a dit : « Je pars demain. » On peut rapporter ces paroles de quatre façons. Une bonne réponse de concours nomme la forme, cite deux indices grammaticaux ou typographiques, puis commente l'effet produit.",
                },
                {
                  type: "notionCardGrid",
                  columns: 1,
                  cards: [
                    {
                      title: "Discours direct (DD)",
                      definition: "On reproduit les paroles mot pour mot.",
                      exemples: [
                        "Paul dit : « Je pars demain. »",
                        "Incise : « Je pars demain, **dit-il**. » (verbe introducteur intercalé, sujet inversé, sans majuscule)",
                      ],
                      test: "Guillemets ou tirets de dialogue, deux-points possibles, verbe introducteur ou incise, embrayeurs du personnage. Effet : authenticité, vivacité, théâtralisation.",
                    },
                    {
                      title: "Discours indirect (DI)",
                      definition: "On reformule les paroles dans une proposition subordonnée, sans guillemets. Au concours, on la nomme : **subordonnée complétive, COD du verbe introducteur** (« qu'il partait ») ou **subordonnée interrogative indirecte, COD** (« s'il venait », « ce qu'il faisait »).",
                      exemples: [
                        "Paul dit **qu'il partait le lendemain**. (« qu'il partait… » = complétive, COD de « dit »)",
                        "Déclaration → que ; question totale → si ; question partielle → mot interrogatif ; ordre → de + infinitif.",
                      ],
                      test: "Verbe introducteur + que / si / mot interrogatif / de + infinitif ; embrayeurs transposés ; concordance des temps si l'introducteur est au passé. Effet : distance, intégration au récit. Renvoi : voir [la phrase complexe](fiche:phrase-complexe).",
                    },
                    {
                      title: "Discours indirect libre (DIL)",
                      definition: "Les paroles ou pensées sont glissées dans le récit sans guillemets ni verbe introducteur.",
                      exemples: [
                        "« Il était furieux. **Il partirait dès l'aube, il n'en pouvait plus !** »",
                        "Test utile : peut-on ajouter « pensa-t-il » ou « se disait-il » sans changer le sens ?",
                      ],
                      test: "Ni guillemets ni verbe introducteur ; phrase autonome ; temps du récit (souvent imparfait ou conditionnel) ; marques expressives ou subjectives. Effet : accès aux pensées, fusion des voix narrateur / personnage.",
                    },
                    {
                      title: "Récit de paroles (discours narrativisé)",
                      definition: "La prise de parole est résumée comme un événement du récit, sans reproduire précisément le contenu des mots prononcés.",
                      exemples: [
                        "« Il lui **annonça son départ** pour Paris. » ; « Elle lui **dit au revoir**. »",
                      ],
                      test: "Un verbe de parole, mais aucun contenu reproduit. Effet : résumé, accélération du rythme.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "💡 **Îlot textuel** (rare) : un fragment au discours direct, entre guillemets, peut s'enchâsser dans une phrase au discours indirect. « Il a répondu qu'il en avait « **assez de ces histoires** ». » On garde ainsi les mots exacts du locuteur au cœur d'un récit rapporté.",
                },
                {
                  type: "table",
                  title: "Tableau récapitulatif des 4 formes",
                  headers: ["Forme", "Guillemets", "Verbe introducteur", "Effet"],
                  rows: [
                    ["Discours direct", "Oui", "Oui", "Authenticité, vivacité"],
                    ["Discours indirect", "Non", "Oui (+ que / si / de)", "Distance, intégration au récit"],
                    ["Discours indirect libre", "Non", "Non", "Intimité, ambiguïté des voix"],
                    ["Récit de paroles", "Non", "Oui (sans contenu)", "Résumé, accélération"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "Formule d'analyse",
                  text: "« Il s'agit de [forme] : on relève [indice 1] et [indice 2]. Ce choix produit un effet de [vivacité / distance / intériorité / accélération], car [explication liée au passage]. »",
                },
              ],
            },
            {
              type: "subsection",
              number: "⑤",
              title: "La concordance des temps",
              blocks: [
                {
                  type: "paragraph",
                  text: "Au discours indirect, on adapte les paroles à la nouvelle phrase : les pronoms changent selon le locuteur, les repères de temps et de lieu deviennent relatifs au récit, et les temps verbaux suivent le temps du **verbe introducteur** (dit, déclara, avait répondu…). Sur les valeurs et l'emploi des temps, voir [les temps du passé](fiche:temps-du-passe).",
                },
                {
                  type: "schema",
                  src: "/fiches/francais/discours-indirect-transformations.svg",
                  alt: "Passage de « Je partirai demain », déclara-t-il à Il déclara qu'il partirait le lendemain. Trois transformations s'appliquent en même temps : les pronoms (je devient il), les temps verbaux (futur partirai devient conditionnel partirait, le verbe introducteur étant au passé) et les repères (demain devient le lendemain, repère relatif au récit et non à l'énonciation).",
                  caption: "Trois transformations en même temps, pas seulement la concordance des temps : on vérifie systématiquement les pronoms, les temps et les repères.",
                  maxWidth: 600,
                },
                {
                  type: "formulaBlock",
                  title: "La règle en deux cas",
                  lines: [
                    "Verbe introducteur au PRÉSENT (il dit que…) : le verbe des paroles ne change pas.",
                    "Verbe introducteur au PASSÉ (il déclara que…, il a dit que…, il avait répondu que…) : présent → imparfait ; futur → conditionnel ; passé composé → plus-que-parfait.",
                    "Imparfait et conditionnel restent inchangés.",
                  ],
                  note: "Les embrayeurs se transposent aussi : demain → le lendemain, hier → la veille, aujourd'hui → ce jour-là.",
                },
                {
                  type: "table",
                  title: "Choisir la bonne construction indirecte",
                  headers: ["Paroles directes", "Construction indirecte", "Exemple"],
                  rows: [
                    ["Déclaration", "que + proposition subordonnée", "« Je pars » → il dit **qu'il part**"],
                    ["Question oui / non", "si + proposition subordonnée", "« Viens-tu ? » → il demande **si elle vient**"],
                    ["Question avec mot interrogatif", "mot interrogatif conservé", "« Où vas-tu ? » → il demande **où elle va**"],
                    ["Question en « qu'est-ce que »", "ce que", "« Qu'est-ce que tu fais ? » → il demande **ce qu'elle fait**"],
                    ["Question en « qu'est-ce qui »", "ce qui", "« Qu'est-ce qui se passe ? » → il demande **ce qui se passe**"],
                    ["Ordre ou conseil", "de + infinitif", "« Pars ! » → il lui dit **de partir**"],
                  ],
                },
                {
                  type: "table",
                  title: "Verbe introducteur au passé : les transformations",
                  headers: ["Paroles (DD)", "Discours indirect (il déclara que…)", "Transformation"],
                  rows: [
                    ["« Je pars. »", "qu'il partait", "présent → imparfait"],
                    ["« Je partirai. »", "qu'il partirait", "futur → conditionnel"],
                    ["« Je suis parti. »", "qu'il était parti", "passé composé → plus-que-parfait"],
                    ["« Je partais. »", "qu'il partait", "imparfait → inchangé"],
                    ["« Je partirais. »", "qu'il partirait", "conditionnel → inchangé"],
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · un dialogue ne rend pas tout le texte ancré",
              badge: "Analyse trop rapide",
              faux: "Dire qu'un extrait de récit est entièrement ancré dans l'énonciation parce qu'il contient une réplique au discours direct.",
              vrai: "Un récit peut être **majoritairement coupé de l'énonciation** tout en contenant une rupture locale : le dialogue est ancré dans la situation du personnage, mais le cadre narratif reste au système du récit.",
              methode: "Distinguer le **système dominant** du passage et les **ruptures locales** : narration, dialogue, pensée rapportée.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · « est-ce que » au discours indirect",
              badge: "Erreur très fréquente",
              faux: "« Il demanda est-ce qu'elle viendrait. »",
              vrai: "« est-ce que » appartient à l'interrogation directe : il disparaît toujours au discours indirect, remplacé par **si** (question totale) : « Il demanda **si** elle viendrait. » De même, « qu'est-ce que » devient **ce que** et « qu'est-ce qui » devient **ce qui** : « Il demanda **ce qu'**elle voulait », « Il demanda **ce qui** la retenait ».",
              methode: "Pour une question oui/non rapportée, employer « si » ; pour une question partielle, le mot interrogatif (où, quand, pourquoi…) ; pour « qu'est-ce que / qu'est-ce qui », « ce que / ce qui ».",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · discours indirect ou indirect libre ?",
              badge: "Cas difficile",
              faux: "« Il partirait dès l'aube ! » analysé comme discours indirect parce qu'il n'y a pas de guillemets.",
              vrai: "L'absence de guillemets ne suffit pas. Le DI exige un verbe introducteur + une subordonnée. Ici, phrase autonome, conditionnel et exclamation : c'est du **discours indirect libre**.",
              methode: "Chercher le verbe introducteur et la subordination : s'ils manquent et que la phrase est autonome, c'est du DIL.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · transposer seulement les temps",
              badge: "Transposition incomplète",
              faux: "« Elle déclara : “Je prendrai mon train ici demain.” » → « Elle déclara qu'elle prendrait mon train ici demain. »",
              vrai: "La concordance des temps ne suffit pas : il faut aussi transposer les **pronoms**, les **déterminants possessifs** et les **repères**. Correction : « Elle déclara **qu'elle prendrait son train là le lendemain**. »",
              methode: "Faire trois vérifications : personne (je → elle), possession (mon → son), repères (ici → là ; demain → le lendemain).",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 3 :** les élèves apprennent à reconnaître et à ponctuer le dialogue (discours direct), puis à transposer au discours indirect.\n\n**Cycle 4 :** la distinction des systèmes d'énonciation et le discours indirect libre relèvent surtout de l'expertise du professeur.\n\n**Ce que vous devez savoir dire :** « On enseigne d'abord le discours direct par la ponctuation du dialogue, avant la transposition au discours indirect, qui demande de manipuler pronoms, temps et indicateurs. »",
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
              text: "Identifier le système d'énonciation, reconnaître la forme de discours rapporté, et transposer du discours direct au discours indirect. Chacune se termine par un checkpoint.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : ce qu'une réponse doit contenir",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "Pour l'énonciation : nommer le système dominant, citer deux indices, puis signaler une rupture si elle existe.",
                    "Pour le discours rapporté : nommer la forme, citer deux indices précis, puis commenter l'effet produit.",
                    "Pour la transposition : vérifier la construction, les pronoms, les déterminants, les repères et les temps.",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Réponse trop courte = réponse fragile. « C'est du discours indirect libre » ne suffit pas : il faut prouver par les indices du passage.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Identifier le système d'énonciation",
              intro:
                "*Question typique : « Ce texte est-il ancré dans l'énonciation ou coupé d'elle ? » Exemples supports : « Je vous écris depuis Rome, où je resterai jusqu'à demain. » / « Le facteur distribuait le courrier. Il passa devant la boulangerie. »*",
              steps: [
                {
                  number: "1",
                  text: "**Repérer les personnes dominantes** : 1re / 2e personne dans un échange ou une prise de parole ; 3e personne dans un récit.",
                  example: { lines: ["« Je vous écris… » → je / vous → énoncé ancré", "« Le facteur distribuait… Il passa… » → 3e personne + récit"] },
                },
                {
                  number: "2",
                  text: "**Repérer les temps et les repères** : présent + aujourd'hui (ancré) ou passé simple / imparfait + ce jour-là (récit coupé).",
                  example: { lines: ["« distribuait, passa, ce jour-là » → système du récit"] },
                },
                {
                  number: "3",
                  text: "**Conclure avec une phrase complète** et signaler les ruptures utiles (un dialogue inséré dans un récit, par exemple).",
                  warn: "⚠️ Identifier le système dominant, pas seulement une phrase isolée.",
                },
                {
                  number: "✓",
                  text: "**Réponse attendue :** le premier énoncé est ancré dans la situation d'énonciation (je / vous, présent, futur, demain) ; le second relève du récit coupé de l'énonciation (3e personne, imparfait, passé simple).",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« Ce matin-là, Louise referma la porte. Elle savait qu'elle ne reviendrait pas avant longtemps. » Ancré ou récit ? Deux indices.",
              correction: [
                { type: "line", text: "**Récit coupé de l'énonciation** : 3e personne (« Louise », « elle »), passé simple (« referma »), imparfait (« savait ») et repère interne au récit (« ce matin-là »)." },
                { type: "note", text: "Le bon réflexe : ne pas chercher seulement un pronom, mais croiser personnes, temps et repères." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Reconnaître la forme de discours rapporté",
              intro:
                "*Question typique : « Quelle est la forme de discours rapporté, et quel effet produit-elle ? » Exemples supports : « Il dit : “Je pars.” » / « Il dit qu'il partait. » / « Il partirait, c'était sûr ! »*",
              steps: [
                {
                  number: "1",
                  text: "**Y a-t-il des guillemets ou des tirets de dialogue ?** S'ils encadrent les paroles mêmes, c'est du discours direct.",
                  example: { lines: ["« Il dit : “Je pars.” » → discours direct"] },
                },
                {
                  number: "2",
                  text: "**Un verbe introducteur + une subordonnée (que / si / mot interrogatif) ou de + infinitif ?** C'est du discours indirect. **Aucun introducteur, phrase autonome, mais point de vue du personnage ?** C'est souvent du discours indirect libre.",
                  example: { lines: ["« Il dit qu'il partait » → DI ; « Il partirait, c'était sûr ! » → DIL"] },
                },
                {
                  number: "3",
                  text: "**Nommer l'effet en lien avec le passage** : authenticité (DD), distance (DI), intériorité (DIL), accélération (récit de paroles).",
                  warn: "⚠️ Pour le DIL, appliquer le test du « pensa-t-il ».",
                },
                {
                  number: "✓",
                  text: "**Réponse attendue :** le premier exemple est au discours direct (paroles citées entre guillemets) ; le deuxième est au discours indirect (verbe introducteur + que) ; le troisième relève du discours indirect libre (pas de guillemets ni d'introducteur, phrase autonome au conditionnel).",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« Elle relut l'énoncé. Non, décidément, elle ne comprenait rien ! » Quelle forme, et pourquoi ?",
              correction: [
                { type: "line", text: "**Discours indirect libre** : ni guillemets ni verbe introducteur, imparfait (« comprenait ») et ponctuation expressive (« ! ») trahissent la pensée du personnage intégrée au récit." },
                { type: "note", text: "Le test du « pensa-t-elle » fonctionne ? Direction le dernier checkpoint." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Transposer du discours direct au discours indirect",
              intro:
                "*Question typique : « Transposez ce passage au discours indirect (verbe introducteur au passé). » Exemples supports : « Est-ce que tu viens ? » / « Je partirai demain. » / « Taisez-vous ! »*",
              steps: [
                {
                  number: "1",
                  text: "**Choisir la construction** : que (déclaration), si (question totale), mot interrogatif (question partielle), de + infinitif (ordre).",
                  example: { lines: ["« Est-ce que tu viens ? » → … demanda s'il venait"] },
                },
                {
                  number: "2",
                  text: "**Transposer les pronoms et les repères**, puis **appliquer la concordance des temps** si le verbe introducteur est au passé.",
                  example: { lines: ["« Je partirai demain » → qu'il partirait le lendemain"] },
                },
                {
                  number: "3",
                  text: "**Vérifier** : « est-ce que » a disparu, le futur est devenu conditionnel, « demain » est devenu « le lendemain ».",
                  warn: "⚠️ Imparfait et conditionnel ne changent pas, même avec un introducteur au passé.",
                },
                {
                  number: "✓",
                  text: "**Réponse attendue :** il demanda **si elle venait** ; il déclara **qu'il partirait le lendemain** ; il leur ordonna **de se taire**.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Transposez : Il déclara : « Je suis parti hier. » (verbe introducteur au passé)",
              correction: [
                { type: "line", text: "« Il déclara **qu'il était parti la veille**. » : passé composé → plus-que-parfait (était parti), « hier » → « la veille », « je » → « il »." },
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
              title: "L'énonciation et le discours rapporté",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_ENONCIATION_DISCOURS_RAPPORTE,
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
              title: "L'énonciation et le discours rapporté",
              copies: COPIES_ENONCIATION_DISCOURS_RAPPORTE,
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
              center: { title: "Énonciation", subtitle: "et discours rapporté" },
              branches: [
                {
                  title: "Énonciation",
                  lines: ["Discours ancré : je, présent, ici", "Récit coupé : il, passé simple", "Embrayeurs (déictiques)"],
                  variant: "blue",
                },
                {
                  title: "Modalisation",
                  lines: ["Lexique évaluatif (méli/péjo)", "Modalisateurs : peut-être, sans doute", "Verbes : devoir, pouvoir, il faut", "Conditionnel d'atténuation"],
                  variant: "blue",
                },
                {
                  title: "Formes du discours",
                  lines: ["Direct : guillemets + introducteur", "Indirect : que / si / de", "Indirect libre : ni l'un ni l'autre", "Récit de paroles : sans contenu"],
                  variant: "green",
                },
                {
                  title: "Concordance des temps",
                  lines: ["Présent → imparfait", "Futur → conditionnel", "PC → plus-que-parfait"],
                  variant: "green",
                },
                {
                  title: "Pièges classiques",
                  lines: ["Présent d'énonciation ≠ narration", "« est-ce que » disparaît au DI", "« on » = personnel indéfini"],
                  variant: "yellow",
                },
                {
                  title: "Renvois",
                  lines: ["Valeurs des temps → notion 8", "Cohérence textuelle → notion 14", "Phonologie → notion 16"],
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
