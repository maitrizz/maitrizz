import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "en1", label: "Je distingue un énoncé ancré dans la situation d'énonciation d'un récit coupé de cette situation (pronoms, temps, repères)" },
  { id: "en2", label: "J'identifie les embrayeurs (déictiques) et je précise ce qu'ils désignent dans le contexte" },
  { id: "en3", label: "Je reconnais le discours direct et je sais commenter sa ponctuation (guillemets, tirets, incise)" },
  { id: "en4", label: "Je reconnais le discours indirect et la construction utilisée : que, si, mot interrogatif ou de + infinitif" },
  { id: "en5", label: "Je reconnais le discours indirect libre sans le confondre avec le discours indirect" },
  { id: "en6", label: "Je connais le récit de paroles (la prise de parole est mentionnée sans en reproduire le contenu)" },
  { id: "en7", label: "Je transpose au discours indirect en adaptant pronoms, temps, repères de lieu et repères de temps" },
];

export const ficheEnonciationDiscoursRapporte: Fiche = {
  slug: "enonciation-discours-rapporte",
  matiere: "francais",
  numero: 14,
  partie: "Partie 1 : Grammaire du texte et du discours",
  title: "L'énonciation et le discours rapporté",
  subtitle:
    "Discours ancré / récit coupé, embrayeurs, discours direct, indirect, indirect libre, récit de paroles et concordance des temps",
  badges: [
    { label: "★★☆ Fréquent", variant: "hot" },
    { label: "Cycle 3-4 · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "L'énonciation et le discours rapporté (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur l'énonciation (discours ancré / récit coupé, embrayeurs) et le discours rapporté (direct, indirect, indirect libre, récit de paroles), avec la concordance des temps et la transposition des embrayeurs. Méthode pas-à-pas, formules d'analyse, exercices corrigés, flashcards et auto-évaluation.",
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
                "Deux questions reviennent souvent dans les sujets : qui prend en charge l'énoncé, depuis quelle situation ? et comment les paroles ou les pensées sont-elles rapportées ?",
              items: [
                {
                  number: "①",
                  title: "L'énonciation",
                  text: "Énoncé ancré ou récit coupé : on le repère aux personnes, aux temps verbaux et aux repères de lieu ou de temps.",
                },
                {
                  number: "②",
                  title: "Les embrayeurs",
                  text: "Les mots (je, ici, demain…) dont le sens dépend de qui parle, où et quand.",
                },
                {
                  number: "③",
                  title: "Les formes du discours rapporté",
                  text: "Discours direct, indirect, indirect libre, récit de paroles : reconnaître la forme, justifier par des indices et commenter l'effet.",
                },
                {
                  number: "④",
                  title: "La concordance des temps",
                  text: "Au discours indirect, les temps, les pronoms et les repères se transforment selon le verbe introducteur et la situation.",
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
                      definition: "On reformule les paroles dans une subordonnée, sans guillemets.",
                      exemples: [
                        "Paul dit **qu'il partait le lendemain**.",
                        "Déclaration → que ; question totale → si ; question partielle → mot interrogatif ; ordre → de + infinitif.",
                      ],
                      test: "Verbe introducteur + que / si / mot interrogatif / de + infinitif ; embrayeurs transposés ; concordance des temps si l'introducteur est au passé. Effet : distance, intégration au récit.",
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
              number: "④",
              title: "La concordance des temps",
              blocks: [
                {
                  type: "paragraph",
                  text: "Au discours indirect, on adapte les paroles à la nouvelle phrase : les pronoms changent selon le locuteur, les repères de temps et de lieu deviennent relatifs au récit, et les temps verbaux suivent le temps du **verbe introducteur** (dit, déclara, avait répondu…).",
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
              vrai: "« est-ce que » appartient à l'interrogation directe : il disparaît toujours au discours indirect, remplacé par **si** (question totale) : « Il demanda **si** elle viendrait. »",
              methode: "Pour une question oui/non rapportée, employer « si » ; pour une question partielle, le mot interrogatif (où, quand, pourquoi…).",
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
                "**Question typique :** « Ce texte est-il ancré dans l'énonciation ou coupé d'elle ? »\n**Exemples supports :** « Je vous écris depuis Rome, où je resterai jusqu'à demain. » / « Le facteur distribuait le courrier. Il passa devant la boulangerie. »\nOn relève les indices.",
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
                "**Question typique :** « Quelle est la forme de discours rapporté, et quel effet produit-elle ? »\n**Exemples supports :** « Il dit : “Je pars.” » / « Il dit qu'il partait. » / « Il partirait, c'était sûr ! »",
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
                "**Question typique :** « Transposez ce passage au discours indirect (verbe introducteur au passé). »\n**Exemples supports :** « Est-ce que tu viens ? » / « Je partirai demain. » / « Taisez-vous ! »",
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
                  objectifId: "en1",
                  question: "« Le facteur distribuait le courrier. Il passa devant la boulangerie. » Ce texte relève :",
                  options: ["du discours ancré", "du récit coupé de l'énonciation", "du discours direct", "d'une lettre"],
                  correctIndex: 1,
                  explanation:
                    "Pronom de 3e personne (« il »), imparfait et passé simple : les repères sont internes au récit, c'est un récit coupé de l'énonciation.",
                },
                {
                  objectifId: "en2",
                  question: "Dans « Je te parle ici, aujourd'hui », combien d'embrayeurs ?",
                  options: ["Aucun", "Deux", "Quatre", "Un seul"],
                  correctIndex: 2,
                  explanation:
                    "« je », « te », « ici », « aujourd'hui » sont quatre embrayeurs : leur sens dépend de la situation d'énonciation.",
                },
                {
                  objectifId: "en3",
                  question: "« “Quel beau paysage !”, s'écria-t-elle. » est :",
                  options: ["du discours indirect", "du discours indirect libre", "du discours direct avec incise", "un récit de paroles"],
                  correctIndex: 2,
                  explanation:
                    "Guillemets, ponctuation expressive conservée et verbe introducteur en incise à sujet inversé : discours direct avec incise.",
                },
                {
                  objectifId: "en4",
                  question: "« Il demanda ___ elle venait. » (question oui/non rapportée)",
                  options: ["est-ce qu'", "si", "que", "qu'est-ce qu'"],
                  correctIndex: 1,
                  explanation:
                    "Une question totale au discours indirect se transpose par « si » : « Il demanda si elle venait. »",
                },
                {
                  objectifId: "en5",
                  question: "« Il était furieux. Il partirait dès l'aube ! » Cette dernière phrase est :",
                  options: ["du discours direct", "du discours indirect", "du discours indirect libre", "un récit de paroles"],
                  correctIndex: 2,
                  explanation:
                    "Pas de guillemets ni de verbe introducteur, conditionnel et exclamation : discours indirect libre (test : « pensa-t-il » fonctionne).",
                },
                {
                  objectifId: "en6",
                  question: "« Il lui annonça son départ pour Paris. » est :",
                  options: ["un discours direct", "un récit de paroles", "un discours indirect libre", "une incise"],
                  correctIndex: 1,
                  explanation:
                    "La prise de parole est mentionnée mais aucun contenu n'est reproduit : c'est un récit de paroles (discours narrativisé).",
                },
                {
                  objectifId: "en7",
                  question: "« Je partirai. » au discours indirect avec « il déclara » donne :",
                  options: ["qu'il partira", "qu'il partirait", "qu'il était parti", "qu'il partait"],
                  correctIndex: 1,
                  explanation:
                    "Verbe introducteur au passé : le futur devient conditionnel → « il déclara qu'il partirait ».",
                },
                {
                  objectifId: "en7",
                  question: "Au discours indirect (verbe introducteur au passé), « demain » devient :",
                  options: ["aujourd'hui", "le lendemain", "la veille", "demain (inchangé)"],
                  correctIndex: 1,
                  explanation:
                    "Les embrayeurs se transposent : demain → le lendemain, hier → la veille, aujourd'hui → ce jour-là.",
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
              sub: "Forme du discours, embrayeurs, transposition",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Identifier la forme",
              objectifTag: "Formes du discours",
              question:
                "Identifiez la forme (DD, DI, DIL, récit de paroles) et justifiez par un indice :\na) « Marie murmura : “Je ne comprends rien.” »   b) « Elle pensait que cet exercice était trop difficile. »   c) « Elle relut l'énoncé. Non, elle ne comprenait rien ! »   d) « Il lui annonça son départ. »   e) « “Quel beau paysage !”, s'écria-t-elle. »",
              correction: [
                { type: "line", label: "a)", text: "**Discours direct** : guillemets, deux-points, verbe introducteur « murmura », pronom « je »." },
                { type: "line", label: "b)", text: "**Discours indirect** : verbe introducteur « pensait » + « que », imparfait, pas de guillemets." },
                { type: "line", label: "c)", text: "**Discours indirect libre** : ni verbe introducteur ni guillemets, imparfait + exclamation, point de vue du personnage." },
                { type: "line", label: "d)", text: "**Récit de paroles** : la prise de parole est mentionnée, aucun contenu reproduit." },
                { type: "line", label: "e)", text: "**Discours direct avec incise** : guillemets, incise à sujet inversé, ponctuation expressive conservée." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Transposer au discours indirect",
              objectifTag: "Concordance",
              question:
                "Transposez au discours indirect (verbe introducteur au passé) :\na) Il déclara : « Je pars demain. »   b) Elle demanda : « Est-ce que tu viens ? »   c) Il cria : « Taisez-vous ! »   d) Il murmura : « J'avais peur. »",
              correction: [
                { type: "line", label: "a)", text: "Il déclara **qu'il partait le lendemain** (présent → imparfait, demain → le lendemain, je → il)." },
                { type: "line", label: "b)", text: "Elle demanda **s'il venait** (est-ce que → si, présent → imparfait)." },
                { type: "line", label: "c)", text: "Il cria **de se taire** (impératif → de + infinitif)." },
                { type: "line", label: "d)", text: "Il murmura **qu'il avait peur** (imparfait → inchangé)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Repérer les embrayeurs",
              question:
                "Relevez les embrayeurs et précisez ce qu'ils désignent :\na) « Je vous parle ici, aujourd'hui. »   b) « Nous partirons demain matin. »   c) « Ce livre que tu tiens est le mien. »",
              correction: [
                { type: "line", label: "a)", text: "« je » = le locuteur ; « vous » = le destinataire ; « ici » = le lieu du locuteur ; « aujourd'hui » = le jour de l'énonciation." },
                { type: "line", label: "b)", text: "« Nous » = le locuteur et d'autres ; « demain » = le jour suivant le moment d'énonciation." },
                { type: "line", label: "c)", text: "« Ce » = démonstratif de proximité (objet désigné) ; « tu » = le destinataire ; « le mien » renvoie au locuteur." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser",
              sub: "Justifier, effet stylistique, cas complexes",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : Système dominant et rupture",
              enonce: "« Le soir tombait. Paul referma son cahier. “Je reviendrai demain”, murmura-t-il. Puis il sortit sans se retourner. »",
              question: "a) Quel est le système d'énonciation dominant ? Donnez deux indices. b) Quelle rupture introduit la réplique entre guillemets ?",
              correction: [
                { type: "line", label: "a)", text: "**Récit coupé de l'énonciation** : 3e personne (« Paul », « il »), imparfait (« tombait ») et passé simple (« referma », « sortit »). Le passage est organisé comme une narration." },
                { type: "line", label: "b)", text: "La réplique entre guillemets est au **discours direct** : elle crée une rupture locale ancrée dans la situation du personnage, avec « je » et « demain » qui valent pour Paul au moment où il parle." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : Le discours indirect libre",
              enonce: "« Elle regarda la lettre une dernière fois. Vraiment, il était impossible de rester. Elle partirait dès l'aube, sans prévenir personne. Qu'ils se débrouillent ! »",
              question: "a) Identifiez la forme de discours rapporté (trois indices). b) Réécrivez les deux dernières phrases en discours indirect (introducteur : « elle pensa »).",
              correction: [
                { type: "line", label: "a)", text: "**Discours indirect libre** : 1) ni guillemets ni verbe introducteur ; 2) conditionnel « partirait » (futur dans le passé, point de vue du personnage) ; 3) exclamation « Qu'ils se débrouillent ! » qui trahit la voix du personnage." },
                { type: "line", label: "b)", text: "« Elle pensa qu'elle partirait dès l'aube, sans prévenir personne, et qu'ils n'avaient qu'à se débrouiller. »" },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Maîtriser",
              sub: "Analyse complète, formule rédigée",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 6 : Analyse d'un vers de La Fontaine",
              enonce: "« Court à son compagnon, lui dit que c'est merveille / Qu'il n'ait eu seulement que la peur pour tout mal. » (La Fontaine, L'Ours et les Deux Compagnons)",
              question: "a) Identifiez la forme de discours rapporté (indices grammaticaux). b) Quel effet ce choix produit-il dans une fable ?",
              correction: [
                { type: "line", label: "a)", text: "**Discours indirect** : verbe introducteur « dit » + subordonnée en « que » (« lui dit que c'est merveille / qu'il n'ait eu… »), pas de guillemets. Le verbe introducteur est au présent de narration : les temps des paroles rapportées ne sont pas transposés vers l'imparfait ou le plus-que-parfait." },
                { type: "line", label: "b)", text: "Le discours indirect intègre les paroles au rythme narratif : il accélère le récit et maintient la voix du narrateur au premier plan, ce qui préserve la distance ironique propre à La Fontaine." },
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
              text: "Ces exercices reproduisent le format de la Partie 1 (analyse de l'énonciation et du discours rapporté) et les exercices de transposition. Les exercices calqués sur des sujets récents portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format identique au concours",
              title: "Exercice 1 : analyse complète d'un texte",
              enonce:
                "« Elle posa la lettre sur la table. C'était fini, elle le savait. Jamais elle ne reviendrait dans cette maison.\n\nIl avait dit, la veille, qu'il ne comprenait pas. Comment pouvait-elle partir ainsi ?\n\nElle haussa les épaules. Il ne comprendrait jamais, de toute façon. Autant partir vite, sans se retourner. »",
              question: "1) Le premier paragraphe est-il ancré ou coupé de l'énonciation (deux indices) ? 2) Quelles formes de discours rapporté trouve-t-on au deuxième paragraphe ? 3) Forme au troisième paragraphe (trois indices + effet) ? 4) Expliquez « la veille » (et non « hier »).",
              correction: [
                { type: "line", text: "**1)** Récit coupé de l'énonciation : 3e personne (« elle »), passé simple (« posa »), imparfait (« savait ») et conditionnel à valeur de futur dans le passé (« reviendrait »). La phrase « C'était fini, elle le savait » fait déjà entendre la pensée du personnage sous forme de DIL." },
                { type: "line", text: "**2)** Deux formes coexistent : « Il avait dit [...] qu'il ne comprenait pas » relève du discours indirect (verbe introducteur + que) ; « Comment pouvait-elle partir ainsi ? » relève du discours indirect libre, car la question exprime la pensée du personnage sans guillemets ni introducteur." },
                { type: "line", text: "**3)** Discours indirect libre : ni verbe introducteur ni guillemets ; conditionnel « ne comprendrait » ; modalisation (« jamais », « de toute façon », « autant ») qui rend la pensée du personnage. Effet : accès direct à l'intériorité et fusion des voix narrateur / personnage." },
                { type: "line", text: "**4)** « la veille » est la transposition de « hier » : au discours indirect, les embrayeurs deviennent des indicateurs relatifs au récit (hier → la veille, demain → le lendemain, aujourd'hui → ce jour-là)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 2 : transposition d'un dialogue",
              enonce:
                "Transposez au discours indirect (verbe introducteur au passé composé) :\n« Nous partirons demain matin, dit-il. Est-ce que tu as préparé tes bagages ? »\n« Non, répondit-elle. Fais-le sans moi ! »",
              question: "Appliquez toutes les transformations (pronoms, embrayeurs, concordance, introducteurs).",
              correction: [
                { type: "line", text: "Il a dit **qu'ils partiraient le lendemain matin** et a demandé **si elle avait préparé ses bagages**." },
                { type: "line", text: "Elle a répondu **que non** et lui a dit **de le faire sans elle**." },
                { type: "line", text: "Transformations : nous → ils, tu → elle, je → elle, moi → elle ; demain → le lendemain ; futur → conditionnel ; passé composé → plus-que-parfait ; est-ce que → si ; impératif → de + infinitif." },
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
              text: "Ces exercices reproduisent des **erreurs fréquentes** sur l'énonciation et le discours rapporté. Repérer ce qui cloche et corriger rigoureusement est une compétence directement valorisée au concours.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 1 · Réponse à corriger : système dominant",
              enonce: "Passage : « La pluie tombait depuis l'aube. L'enfant ouvrit la fenêtre. “Je n'ai pas peur”, dit-il. Puis il descendit l'escalier. »\nRéponse d'un candidat : « Le passage relève du discours ancré, puisqu'il contient une réplique entre guillemets. »",
              question: "Identifiez l'erreur et proposez une réponse plus précise.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "La présence d'une réplique ne suffit pas à qualifier tout le passage", bad: true },
                    { text: "Il faut distinguer le cadre narratif dominant et la rupture locale créée par le dialogue" },
                    { text: "Réponse attendue : « Le passage relève majoritairement du récit coupé de l'énonciation ; la réplique au discours direct constitue une rupture ancrée dans la situation du personnage. »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « est-ce que » au DI",
              enonce: "Copie d'un candidat : « Il lui demanda est-ce qu'elle viendrait avec eux. »",
              question: "Identifiez l'erreur et corrigez.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« est-ce que » appartient à l'interrogation directe et ne peut pas figurer dans une subordonnée interrogative indirecte", bad: true },
                    { text: "Une question totale se transpose par « si »" },
                    { text: "Réponse attendue : « Il lui demanda **si** elle viendrait avec eux. »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : concordance",
              enonce: "Transposition d'un candidat : « Elle déclara : “Je viendrai demain.” » → « Elle déclara qu'elle viendra demain. »",
              question: "Identifiez les deux erreurs et corrigez.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« viendra » : le futur doit passer au conditionnel (verbe introducteur « déclara » au passé)", bad: true },
                    { text: "« demain » : l'embrayeur doit devenir « le lendemain »", bad: true },
                    { text: "Réponse attendue : « Elle déclara **qu'elle viendrait le lendemain**. »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 4 · Réponse à corriger : transposition incomplète",
              enonce: "Transposition d'un candidat : « Elle déclara : “Je prendrai mon train ici demain.” » → « Elle déclara qu'elle prendrait mon train ici demain. »",
              question: "Identifiez les éléments non transposés et corrigez.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« mon » n'a pas été transposé : il faut « son » si le train est celui du personnage", bad: true },
                    { text: "« ici » et « demain » sont des embrayeurs : ils doivent devenir « là » et « le lendemain »", bad: true },
                    { text: "Réponse attendue : « Elle déclara **qu'elle prendrait son train là le lendemain**. »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 5 · Réponse à corriger : DI ou DIL ?",
              enonce: "Passage : « Il regarda une dernière fois la maison. Il partirait dès l'aube ! »\nRéponse d'un candidat : « “Il partirait dès l'aube !” est du discours indirect car il n'y a pas de guillemets. »",
              question: "Identifiez l'erreur sur la distinction DI / DIL et corrigez.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "L'absence de guillemets ne suffit pas : le DI exige un verbe introducteur + une subordonnée", bad: true },
                    { text: "Ici, phrase autonome, sans verbe introducteur ni subordination" },
                    { text: "Réponse attendue : c'est du **discours indirect libre** (conditionnel + exclamation, pensée intégrée au récit)" },
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
                  question: "Les 4 formes du discours rapporté ?",
                  answer:
                    "**Direct** : guillemets, verbe introducteur, embrayeurs du personnage.\n**Indirect** : verbe introducteur + que / si / de, concordance, pas de guillemets.\n**Indirect libre** : ni verbe introducteur ni guillemets, phrases autonomes, temps du récit + ponctuation expressive.\n**Récit de paroles** : prise de parole mentionnée, aucun contenu reproduit.",
                },
                {
                  question: "Concordance des temps (verbe introducteur au passé) ?",
                  answer:
                    "Présent → **imparfait**.\nFutur → **conditionnel présent**.\nPassé composé → **plus-que-parfait**.\nImparfait → **inchangé**. Conditionnel → **inchangé**.",
                  astuce: "💡 Verbe introducteur au présent → aucun changement de temps.",
                },
                {
                  question: "Embrayeurs transposés au discours indirect ?",
                  answer:
                    "demain → **le lendemain** ; hier → **la veille** ; aujourd'hui → **ce jour-là** ; maintenant → **alors** ; ici → **là**.\nPronoms : je / tu → il / elle ; nous → ils / elles.",
                },
                {
                  question: "Les 4 introducteurs du discours indirect ?",
                  answer:
                    "**Déclaration** : verbe + que. **Question totale** : verbe + si (est-ce que disparaît). **Question partielle** : mot interrogatif (où, quand…). **Ordre** : de + infinitif.",
                  astuce: "⚠️ « est-ce que » ne survit jamais au discours indirect.",
                },
                {
                  question: "Discours ancré ou récit coupé : les indices ?",
                  answer:
                    "**Ancré** : je / tu, présent / futur, ici / maintenant / aujourd'hui. Essai, lettre, discours.\n**Récit coupé** : il / elle, passé simple / imparfait, ce jour-là / la veille. Roman, conte, fable.",
                  astuce: "⚠️ Présent d'énonciation (le locuteur parle de maintenant) ≠ présent de narration (récit au passé, voir notion 7).",
                },
                {
                  question: "Le DIL : comment le reconnaître à coup sûr ?",
                  answer:
                    "**Test :** peut-on ajouter « pensa-t-il » sans changer le sens ? Si oui, c'est du discours indirect libre.\nIndices cumulés : conditionnel ou imparfait, ponctuation expressive, phrases autonomes, sans guillemets ni verbe introducteur.",
                  astuce: "💡 Très présent chez Zola, Flaubert, Maupassant.",
                },
                {
                  question: "Qu'est-ce qu'un embrayeur (déictique) ?",
                  answer:
                    "Un mot dont le sens dépend de la situation d'énonciation : je, tu, ici, maintenant, demain, ce…\nContrairement à « la table » ou « Paris », qui désignent toujours la même chose.",
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
              center: { title: "Énonciation", subtitle: "et discours rapporté" },
              branches: [
                {
                  title: "Énonciation",
                  lines: ["Discours ancré : je, présent, ici", "Récit coupé : il, passé simple", "Embrayeurs (déictiques)"],
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
                  lines: ["Valeurs des temps → notion 7", "Cohérence textuelle → notion 13", "Phonologie → notion 15"],
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
