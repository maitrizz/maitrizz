import type { Fiche } from "@/components/fiche/types";
import type { Niveau } from "@/lib/niveau";

/**
 * Méthodologie de l'épreuve écrite de français (numéro 0, en tête de parcours).
 *
 * Mise en forme des sources "M_methodologie_M2" et "M_methodologie_L3" du dossier
 * contenu. Les deux concours divergent fortement (M2 : épreuve autonome de 3 h ;
 * L3 : épreuve mixte français + maths de 4 h, cycle 4 et ouverture possible vers
 * l'étude de la langue au lycée) : la fabrique
 * ficheMethodologie(niveau) injecte donc des sections entières propres au niveau.
 *
 * Charte appliquée à la mise en forme : références d'annales précises et statistiques
 * non sourçables retirées ; citations de rapports de jury adoucies (sans année) ;
 * barèmes par partie présentés comme estimations (non officiels), conformément aux
 * sources ; cadres réglementaires conservés (Arrêté du 25 janvier 2021 pour le M2 ;
 * Arrêté du 17 avril 2025 et sujet zéro officiel pour le L3).
 *
 * REFONTE L3 (22/07/2026) : la méthodologie L3 est désormais produite par la fonction
 * dédiée `buildMethodologieL3()`, refondue avec le regard d'une candidate bien classée
 * (présentation de l'épreuve + conseils concrets, barème du sujet zéro vérifié :
 * 6 pts grammaire + 4 pts lexique + 10 pts développement, sur 20 ramené sur 10).
 * La fonction paramétrée `ficheMethodologie(niveau)` ci-dessous ne sert plus qu'au M2.
 */

const OBJECTIFS = [
  { id: "me1", label: "Je connais la structure de l'épreuve écrite de français" },
  { id: "me2", label: "Je connais le cadre de mon concours : durée, barème, note éliminatoire, programme" },
  { id: "me3", label: "Je sais ce qu'attend chacune des parties (grammaire, lexique, rédaction)" },
  { id: "me4", label: "Je lis le texte support efficacement avant de répondre" },
  { id: "me5", label: "Je choisis un ordre de traitement adapté à mon profil" },
  { id: "me6", label: "Je répartis mon temps et ne sacrifie jamais la rédaction" },
  { id: "me7", label: "Je soigne la langue sur toute la copie et je relis" },
];

function ficheMethodologie(niveau: Niveau): Fiche {
  const l3 = niveau === "l3";

  return {
    slug: "methodologie-de-l-epreuve",
    matiere: "francais",
    kind: "methodo",
    numero: 0,
    partie: "Méthodologie",
    title: "Méthodologie de l'épreuve écrite",
    subtitle: l3
      ? "Comprendre l'épreuve commune français et mathématiques, gérer ses 4 heures et aborder les trois sous-parties de français avec méthode."
      : "Comprendre l'épreuve, gérer ses 3 heures et aborder les trois parties avec méthode.",
    badges: [
      { label: "Point de départ du parcours", variant: "hot" },
      {
        label: l3 ? "Épreuve commune français + maths · 4 h" : "Épreuve écrite de français · 3 h",
        variant: "info",
      },
    ],
    metaTitle: "Méthodologie de l'écrit de français · Fiche de révision CRPE",
    metaDescription: l3
      ? "Méthodologie du CRPE L3 : épreuve commune français et maths (4 h), barème, note éliminatoire, les trois sous-parties de français, stratégie et gestion du temps."
      : "Méthodologie de l'épreuve écrite de français du CRPE M2 (3 h) : format, barème, les trois parties (langue, lexique, réflexion rédigée) et gestion du temps.",
    tabGroups: [
      {
        id: "decouvrir",
        label: "Découvrir",
        icon: "",
        tabs: [
          {
            id: "cours",
            label: "Cadre de l'épreuve",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "info",
                icon: "",
                title: "Avant de commencer",
                text: l3
                  ? "Au CRPE L3, le français fait partie d'une épreuve commune avec les mathématiques, d'une durée totale de 4 heures. La partie français vérifie votre maîtrise de la langue : grammaire, lexique, compréhension et expression écrite. Les questions s'appuient surtout sur le programme du cycle 4, mais certaines notions de lycée peuvent aider à affiner l'analyse. Il ne s'agit pas d'une épreuve pédagogique : on ne vous demande ni didactique, ni séquence de classe."
                  : "L'épreuve écrite de français est une épreuve d'admissibilité du CRPE M2. Elle teste votre maîtrise disciplinaire de la langue (grammaire, lexique, réflexion littéraire). Ce n'est pas une épreuve pédagogique : ni didactique, ni séquences d'enseignement. Comprendre ce qu'on demande dans chaque partie, c'est déjà gagner des points.",
              },
              {
                type: "subsection",
                number: "①",
                title: "Le format de l'épreuve",
                blocks: l3
                  ? [
                      {
                        type: "cardGrid",
                        columns: 2,
                        cards: [
                          {
                            title: "Partie Français",
                            value: "10 pts",
                            lines: [
                              "3 sous-parties : grammaire, lexique, rédaction",
                              "Texte support de 500 mots maximum",
                              "Note inférieure ou égale à 2,5/10 : éliminatoire",
                            ],
                            variant: "info",
                          },
                          {
                            title: "Partie Mathématiques",
                            value: "10 pts",
                            lines: [
                              "Exercices et problèmes",
                              "Programme de cycle 4",
                              "Note inférieure ou égale à 2,5/10 : éliminatoire",
                            ],
                            variant: "neutral",
                          },
                        ],
                      },
                      {
                        type: "table",
                        title: "Format général",
                        headers: ["Caractéristique", "Détail"],
                        rows: [
                          ["Durée totale", "4 heures (français et mathématiques ensemble)"],
                          ["Coefficient", "5 (la plus forte pondération des écrits)"],
                          ["Notation", "20 points au total : 10 points français + 10 points maths, chaque partie ramenée sur 10"],
                          ["Note éliminatoire", "Inférieure ou égale à 2,5/10 sur la partie français ou sur la partie maths : élimine du concours"],
                          ["Texte support (français)", "Extrait de roman, de nouvelle ou d'essai, de 500 mots maximum"],
                          ["Programme de référence", "Programme de français du cycle 4, avec ouverture possible vers l'étude de la langue au lycée (2de et 1re)"],
                          [
                            "Cadre réglementaire",
                            "[Arrêté du 17 avril 2025](https://www.legifrance.gouv.fr/search/all?query=Arr%C3%AAt%C3%A9%20du%2017%20avril%202025%20CRPE%20externe%20bac%2B3) (CRPE externe bac+3, sessions 2026 et suivantes)",
                          ],
                        ],
                      },
                      {
                        type: "callout",
                        variant: "warning",
                        icon: "⚠️",
                        title: "Une double note éliminatoire",
                        text: "La note éliminatoire de 2,5/10 est absolue et indépendante pour chaque discipline : une excellente note en maths ne compense pas un français trop faible, et inversement. Les deux parties doivent être traitées sérieusement.",
                      },
                      {
                        type: "table",
                        title: "Ce qui change par rapport au CRPE M2 (pour situer)",
                        headers: ["Critère", "CRPE L3 (vous)", "CRPE M2 (pour information)"],
                        rows: [
                          ["Durée français", "Environ 2 h, dans une épreuve de 4 h", "3 h (épreuve autonome)"],
                          ["Coefficient", "5 (partagé avec les maths)", "1"],
                          ["Points français", "10 points", "20 points"],
                          ["Note éliminatoire", "Inférieure ou égale à 2,5/10", "Inférieure ou égale à 5/20"],
                          ["Programme", "Cycle 4, avec ouverture possible vers l'étude de la langue au lycée", "Cycle 4 et étude de la langue au lycée"],
                          ["Rédaction", "Environ 30 lignes (réponse argumentée sur le texte)", "Réflexion structurée, longueur fixée par la consigne"],
                        ],
                      },
                    ]
                  : [
                      {
                        type: "table",
                        title: "Format général",
                        headers: ["Caractéristique", "Détail"],
                        rows: [
                          ["Durée", "3 heures"],
                          ["Notation", "20 points, coefficient 1"],
                          ["Note éliminatoire", "Inférieure ou égale à 5/20 : élimine du concours, quelle que soit la note globale"],
                          ["Texte support", "Extrait littéraire ou d'essai de 400 à 600 mots, inédit, d'une œuvre contemporaine ou patrimoniale"],
                          ["Programme de référence", "Programme de français du cycle 4 et étude de la langue au lycée"],
                          [
                            "Cadre réglementaire",
                            "[Arrêté du 25 janvier 2021](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043075701) (CRPE rénové, sessions 2022 et suivantes)",
                          ],
                        ],
                      },
                      {
                        type: "callout",
                        variant: "danger",
                        icon: "⚠️",
                        title: "La note éliminatoire est absolue",
                        text: "Une note inférieure ou égale à 5/20 élimine du concours, quelle que soit la moyenne. Finir l'épreuve est donc une priorité non négociable : mieux vaut une copie complète qu'une partie parfaite et une autre laissée vide.",
                      },
                    ],
              },
              {
                type: "subsection",
                number: "②",
                title: l3 ? "Les trois sous-parties de français" : "Les trois parties",
                blocks: [
                  {
                    type: "cardGrid",
                    columns: 3,
                    cards: l3
                      ? [
                          { title: "1 · Grammaire", value: "~6 pts", lines: ["Nature, fonction", "Modes et temps", "Orthographe grammaticale, accords"], variant: "info" },
                          { title: "2 · Lexique", value: "~4 pts", lines: ["Formation des mots", "Sens contextuel", "Famille de mots, relations sémantiques"], variant: "info" },
                          { title: "3 · Rédaction", value: "~10 pts", lines: ["Développement argumenté", "Environ 30 lignes", "Réponse à une question sur le texte"], variant: "success" },
                        ]
                      : [
                          { title: "1 · Étude de la langue", value: "~7 pts", lines: ["Grammaire, syntaxe", "Orthographe", "Questions précises sur le texte"], variant: "info" },
                          { title: "2 · Lexique", value: "~4 pts", lines: ["Formation des mots", "Sens contextuel", "Figures, registres, relations sémantiques"], variant: "info" },
                          { title: "3 · Réflexion rédigée", value: "9 pts", lines: ["Développement structuré, argumenté", "Références personnelles", "Culture littéraire"], variant: "success" },
                        ],
                  },
                  {
                    type: "callout",
                    variant: "warning",
                    icon: "⚠️",
                    title: "Un barème estimé, non officiel",
                    text: l3
                      ? "Le barème exact par sous-partie n'est pas communiqué officiellement. D'après le sujet zéro officiel et le sujet de la session 2026, on est généralement autour de 6 points en grammaire, 4 en lexique et 10 en rédaction. La répartition peut bouger un peu selon les sujets, mais ces ordres de grandeur restent utiles pour gérer son temps."
                      : "Le barème par partie n'est pas fixé une fois pour toutes. À la session 2025, l'étude de la langue et le lexique comptaient ensemble pour 11 points, et la réflexion rédigée pour 9 points. La répartition entre les parties 1 et 2 peut varier selon les sujets et les groupements : retenez surtout que la réflexion pèse près de la moitié de la note.",
                  },
                  ...(l3
                    ? [
                        {
                          type: "callout" as const,
                          variant: "info" as const,
                          icon: "💡",
                          title: "Le bon réflexe",
                          text: "À chaque question, demandez-vous : « Qu'est-ce que le jury veut vérifier ici ? » Une réponse juste ne suffit pas toujours : il faut montrer que vous savez nommer, justifier et vous appuyer sur le texte.",
                        },
                      ]
                    : []),
                  {
                    type: "table",
                    title: l3 ? "Comprendre ce que le jury cherche vraiment" : "Partie 1, Étude de la langue : ce qu'on teste",
                    headers: l3
                      ? ["Sous-partie", "Ce que le jury vérifie", "Ce qui fait gagner des points", "Ce qui fait perdre des points"]
                      : ["Type de question", "Ce qu'on attend"],
                    rows: l3
                      ? [
                          [
                            "1 · Grammaire",
                            "Est-ce que vous maîtrisez vraiment les outils de la langue : nature, fonction, temps, proposition, accord, ponctuation ?",
                            "Une réponse courte mais complète : le bon terme grammatical, une justification, un appui précis dans la phrase.",
                            "Une réponse non justifiée, une terminologie approximative, une confusion sur la notion demandée, ou une règle récitée sans l'appliquer à l'extrait.",
                          ],
                          [
                            "2 · Lexique",
                            "Est-ce que vous comprenez les mots dans le texte : sens en contexte, formation, famille, nuance, champ lexical ?",
                            "Une réponse ajustée au passage : on relit la phrase, on explique la nuance, on choisit un synonyme qui fonctionnerait vraiment.",
                            "Une réponse déconnectée du contexte, un synonyme trop large, ou un relevé de mots sans expliquer leur effet dans le passage.",
                          ],
                          [
                            "3 · Rédaction",
                            "Est-ce que vous avez compris la question et le texte, puis construit une réponse organisée et lisible ?",
                            "Une copie qui répond vraiment au sujet : mini-plan, idées nettes, citations courtes expliquées, apports culturels utiles, conclusion claire.",
                            "Un résumé, une paraphrase du texte, une réflexion générale plaquée, des citations accumulées, ou une copie correcte mais qui ne répond pas précisément à la question.",
                          ],
                        ]
                      : [
                          ["Identifier nature et fonction", "Nommer la classe grammaticale et la fonction dans la phrase, avec justification (voir notions 01 et 02)."],
                          ["Analyser mode et temps d'un verbe", "Nommer le mode et le temps, justifier la valeur en contexte : « est à l'imparfait de l'indicatif, valeur de... »."],
                          ["Analyser une proposition subordonnée", "Nommer la nature (relative, conjonctive...) et la fonction (voir notion 05)."],
                          ["Justifier un accord, une terminaison", "Donner la règle appliquée et les éléments qui commandent l'accord (notions 10-11)."],
                          ["Questions d'orthographe", "Appliquer la règle, distinguer les homophones par un critère de substitution (notion 13)."],
                        ],
                  },
                  ...(!l3
                    ? [
                        {
                          type: "table" as const,
                          title: "Partie 2, Lexique : ce qu'on teste",
                          headers: ["Type de question", "Ce qu'on attend"],
                          rows: [
                            ["Formation des mots", "Identifier préfixe, suffixe, radical, étymologie, et expliquer le sens apporté (notion 17)."],
                            ["Sens contextuel d'un mot", "Expliquer le sens précis dans le contexte, distinguer sens propre et figuré (notion 18)."],
                            ["Relations sémantiques", "Synonyme, antonyme, hyperonyme, champ lexical, avec justification (notion 18)."],
                            ["Figures de style", "Identifier, nommer et expliquer l'effet produit dans le texte (notion 19)."],
                            ["Registres", "Identifier le registre et le justifier par des indices textuels (notion 19)."],
                          ],
                        },
                        {
                          type: "table" as const,
                          title: "Partie 3, Réflexion rédigée : ce qu'on teste",
                          headers: ["Élément", "Détail"],
                          rows: [
                            ["Poids dans l'épreuve", "9 points sur 20 à la session 2025, soit près de la moitié de la note : c'est la partie qui fait la différence."],
                            ["Nature de l'exercice", "Une réflexion organisée à partir d'une question liée au texte. On ne vous demande pas un commentaire composé : il faut répondre au sujet, construire deux ou trois idées, les appuyer sur le texte et sur quelques références personnelles."],
                            ["Format attendu", "Introduction, développement en parties, conclusion. La longueur attendue dépend de la consigne du sujet."],
                            ["Les trois appuis", "1) le texte support (cité et analysé), 2) des lectures personnelles (titre et auteur), 3) une culture générale (arts, histoire, cinéma...)."],
                            ["Ce que le jury évalue", "Qualité du raisonnement, développement des références, maîtrise de la langue, structuration du propos."],
                          ],
                        },
                      ]
                    : []),
                  {
                    type: "callout",
                    variant: "info",
                    icon: "💡",
                    title: "La Partie 3 n'est pas un commentaire",
                    text: l3
                      ? "En L3 comme en M2, la Partie 3 est une réflexion suscitée par le texte : on répond à une question en s'appuyant sur le texte, sa culture et ses lectures (y compris celles du lycée), pas en commentant les procédés de l'auteur. Ici, on pose le cadre ; la méthode détaillée est vue plus loin, aux notions 19 et 20."
                      : "La Partie 3 est une réflexion suscitée par le texte, pas un résumé de ce que dit l'auteur ni un commentaire de ses procédés. Le texte est un appui parmi d'autres, aux côtés de votre culture et de vos lectures. Détail aux notions 19 et 20.",
                  },
                ],
              },
              {
                type: "highlightBox",
                variant: "marine",
                icon: "📄",
                title: "À quoi ressemble un vrai sujet",
                blocks: [
                  {
                    type: "paragraph",
                    text: l3
                      ? "Pour vous projeter concrètement, voici le profil du sujet zéro officiel, le seul exemple cadré publié par le ministère pour la session 2026."
                      : "Pour vous projeter concrètement, voici le profil d'une épreuve récente (sessions 2025 et 2026).",
                  },
                  {
                    type: "table",
                    headers: ["Élément du sujet", l3 ? "Ce que contenait le sujet zéro" : "Ce que demandait l'épreuve"],
                    rows: l3
                      ? [
                          ["Texte support", "Un extrait du conte « La Barbe bleue » de Charles Perrault (XVIIe siècle)."],
                          ["Partie 1, grammaire (6 pts)", "Des questions d'analyse de la langue portant sur des phrases précises du texte."],
                          ["Partie 2, lexique (4 pts)", "Le sens en contexte et la formation de mots tirés du texte."],
                          ["Partie 3, expression écrite (10 pts)", "« Un développement structuré et argumenté d'une trentaine de lignes », répondant à une question sur l'actualité du conte (ici, le rapport entre les femmes et les hommes)."],
                        ]
                      : [
                          ["Texte support", "Un extrait d'une œuvre contemporaine ou patrimoniale, de 400 à 600 mots. En 2026, un texte d'Amin Maalouf."],
                          ["Parties 1 et 2 (≈ 11 pts)", "L'étude de la langue et le lexique : des questions précises sur le texte, auxquelles on répond en phrases rédigées."],
                          ["Partie 3 (9 pts)", "Une question de réflexion, par exemple « Quel est, selon vous, l'intérêt pour une personne de mettre par écrit ses expériences vécues ? », traitée par « un développement présentant un raisonnement rédigé et structuré »."],
                        ],
                  },
                  {
                    type: "paragraph",
                    text: l3
                      ? "La méthode pour ce développement est détaillée à la [notion 20](fiche:produire-le-developpement). Source : [sujets zéro du CRPE bac+3](https://www.devenirenseignant.gouv.fr/exemples-de-sujets-des-concours-externes-bac3-de-recrutement-d-enseignants-1405)."
                      : "La méthode pour ce développement est détaillée à la [notion 20](fiche:produire-le-developpement). Source : [sujets et rapports des jurys du CRPE](https://www.devenirenseignant.gouv.fr/les-sujets-des-epreuves-ecrites-et-rapports-des-jurys-des-crpe-1163).",
                  },
                ],
              },
              {
                type: "highlightBox",
                variant: "marine",
                icon: "📋",
                title: "Ce que rappellent les rapports de jury",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Les rapports de jury, publiés après chaque session, disent assez clairement ce qui est attendu. Quelques constantes reviennent, quel que soit le sujet.",
                  },
                  {
                    type: "bullets",
                    items: [
                      "Une réflexion organisée en paragraphes, introduite et conclue brièvement, appuyée sur des exemples variés : c'est ce qui répond aux attentes.",
                      "La correction de la langue est prise au sérieux sur toute la copie, orthographe, syntaxe et ponctuation comprises. De futurs enseignants doivent montrer une expression aussi soignée que possible.",
                      "Les réponses se rédigent en phrases complètes, y compris en lexique. Dans le développement, on n'écrit pas les titres des parties : on les fond dans la rédaction.",
                      "Une copie lisible et aérée facilite le travail du correcteur et joue en votre faveur.",
                    ],
                  },
                  {
                    type: "paragraph",
                    text: "Les rapports, publiés par académie, sont publics et valent la lecture : [sujets et rapports des jurys du CRPE](https://www.devenirenseignant.gouv.fr/les-sujets-des-epreuves-ecrites-et-rapports-des-jurys-des-crpe-1163).",
                  },
                ],
              },
              {
                type: "subsection",
                number: "③",
                title: "Le programme de référence",
                blocks: l3
                  ? [
                      {
                        type: "paragraph",
                        text: "Pour le concours L3, le socle reste le programme de français du cycle 4 (5e, 4e, 3e). Les notions d'étude de la langue vues au lycée (2de et 1re) peuvent aussi être utiles, surtout pour affiner une analyse grammaticale ou stylistique.",
                      },
                      {
                        type: "table",
                        title: "Programme de français à l'écrit",
                        headers: ["Domaine", "Notions concernées"],
                        rows: [
                          ["Grammaire", "Classes et fonctions, phrase simple et complexe, modes et temps, accords (notions 01-11)."],
                          ["Orthographe", "Orthographe grammaticale, participe passé, homophones, accords dans le GN et le GV (notions 10-12)."],
                          ["Lexique", "Formation des mots, familles, sens contextuel, synonymie, antonymie, champs lexicaux (notions 16-17)."],
                          ["Lecture", "Compréhension d'un texte littéraire, repérage d'indices, interprétation."],
                          ["Expression écrite", "Rédaction argumentée, cohérence, structuration, correction de la langue."],
                        ],
                      },
                    ]
                  : [
                      {
                        type: "paragraph",
                        text: "Pour le M2, les questions peuvent venir de deux ensembles de notions : le programme de français du cycle 4 et l'étude de la langue au lycée.",
                      },
                      {
                        type: "table",
                        title: "Deux sources, deux périmètres",
                        headers: ["Source", "Ce qu'elle couvre", "Parties concernées"],
                        rows: [
                          ["Programme de français du cycle 4", "Étude de la langue, lexique, lecture, questionnements littéraires.", "Parties 1, 2 et 3"],
                          ["Étude de la langue au lycée (2de, 1re)", "Grammaire approfondie, phrase complexe, valeurs des modes et temps, cohérence textuelle, énonciation.", "Partie 1 surtout"],
                        ],
                      },
                      {
                        type: "callout",
                        variant: "warning",
                        icon: "⚠️",
                        title: "Le lycée ajoute des notions",
                        text: "Le programme de lycée ajoute des notions peu abordées au collège : énonciation, cohérence textuelle, étude des registres, système des temps dans le récit. Elles reviennent régulièrement en Partie 1 (voir notions 13-15).",
                      },
                    ],
              },
              {
                type: "subsection",
                number: "④",
                title: "La gestion du temps",
                blocks: l3
                  ? [
                      {
                        type: "paragraph",
                        text: "Le concours L3 se caractérise par une épreuve combinée français-mathématiques : la difficulté n'est pas seulement de réussir chaque partie, mais de gérer les 4 heures sans se laisser absorber par l'une d'elles. C'est déterminant. Quand le temps que vous vous étiez fixé est écoulé, passez à la suite, même si vous n'avez pas terminé : cela évite les parties vides par perfectionnisme et optimise votre note.",
                      },
                      {
                        type: "table",
                        title: "Conseils concrets le jour de l'épreuve",
                        headers: ["Situation", "Ce qu'il faut faire", "Si vous bloquez"],
                        rows: [
                          ["Début d'épreuve", "Écrire vos horaires limites au brouillon : fin de grammaire/lexique, début de rédaction, passage aux maths.", "Ne commencez pas à rédiger sans avoir lu toutes les questions : vous risqueriez de perdre le fil du sujet."],
                          ["Question de grammaire difficile", "Répondre avec ce que vous savez : terme grammatical, justification, appui dans la phrase.", "Laissez un blanc propre ou une réponse courte, puis passez à la suite. Une question ne doit pas manger la rédaction."],
                          ["Rédaction", "Garder un vrai temps pour un mini-plan, deux ou trois paragraphes, une conclusion et une relecture.", "Si le temps manque, faites plus simple : une idée par paragraphe, citation courte, explication nette."],
                          ["Passage aux maths", "Changer de discipline à l'heure prévue, même si le français pourrait encore être amélioré.", "Mieux vaut un français imparfait et des maths traitées qu'un français peaufiné et une partie maths trop vide."],
                        ],
                      },
                      {
                        type: "callout",
                        variant: "warning",
                        icon: "⚠️",
                        title: "La règle à retenir",
                        text: "Une copie équilibrée vaut mieux qu'une sous-partie brillante et une autre presque vide. Le détail de la répartition horaire est donné dans l'onglet Conseils pratiques.",
                      },
                    ]
                  : [
                      {
                        type: "paragraph",
                        text: "L'épreuve M2 dure 3 heures : il faut avancer assez vite dans l'étude de la langue et le lexique pour garder un vrai temps de rédaction.",
                      },
                      {
                        type: "callout",
                        variant: "warning",
                        icon: "⚠️",
                        title: "La règle à retenir",
                        text: "Une copie complète vaut mieux qu'une Partie 1 très travaillée et une Partie 3 presque vide. Le détail de la répartition horaire est donné dans l'onglet Conseils pratiques.",
                      },
                    ],
              },
              {
                type: "piegeCard",
                variant: "rouge",
                title: l3 ? "Piège n°1 · sacrifier la rédaction" : "Piège n°1 · ne pas finir la Partie 3",
                badge: "Erreur la plus coûteuse",
                faux: l3
                  ? "Passer plus d'une heure et demie sur la grammaire et le lexique, et n'avoir que vingt minutes pour la rédaction."
                  : "Passer trop de temps sur les Parties 1 et 2 et ne rédiger que quelques lignes en Partie 3.",
                vrai: l3
                  ? "La rédaction vaut environ la moitié de la note de français. Une rédaction correcte avec des questions un peu incomplètes vaut mieux qu'une grammaire parfaite et une rédaction de cinq lignes."
                  : "La Partie 3 vaut 9 points sur 20, près de la moitié de la note. Une copie qui finit la Partie 3 vaut souvent mieux qu'une Partie 1 parfaite et une Partie 3 vierge.",
                methode: "Bloquer dès le départ le temps de la rédaction et s'y tenir.",
              },
              ...(l3
                ? [
                    {
                      type: "piegeCard" as const,
                      variant: "rouge" as const,
                      title: "Piège n°2 · oublier les maths",
                      badge: "Note éliminatoire symétrique",
                      faux: "Se concentrer sur le français et arriver sur les maths en fin de temps.",
                      vrai: "La note inférieure ou égale à 2,5/10 est éliminatoire pour chaque discipline. Même en aimant le français, il faut traiter les maths sérieusement.",
                      methode: "Réserver un bloc de temps suffisant aux maths et ne jamais les laisser de côté.",
                    },
                  ]
                : []),
              {
                type: "piegeCard",
                variant: "orange",
                title: l3 ? "Piège n°3 · appliquer la méthode M2 à la rédaction L3" : "Piège n°2 · traiter la Partie 3 comme un résumé",
                badge: "À corriger",
                faux: l3
                  ? "Rédiger une réflexion personnelle large comme en M2, en oubliant de répondre à la question posée sur le texte."
                  : "Résumer ce que dit l'auteur sans développer de réflexion personnelle.",
                vrai: l3
                  ? "En L3, la question porte sur le texte : la rédaction doit y répondre directement, avec des références précises au texte."
                  : "La Partie 3 est une réflexion sur une thématique suscitée par le texte : le texte est un appui, pas l'objet.",
                methode: "Relire la question de rédaction et vérifier que chaque paragraphe y répond.",
              },
              {
                type: "piegeCard",
                variant: "bleu",
                title: l3 ? "Piège n°4 · répondre sans lire la consigne" : "Piège n°3 · répondre sans relire la question",
                badge: "Perte de points évitable",
                faux: "Identifier la nature d'un mot quand on demandait sa fonction, ou analyser une figure quand on demandait le sens contextuel.",
                vrai: "Chaque question a un verbe de consigne précis (identifier, analyser, justifier, expliquer) : on y répond exactement.",
                methode: "Souligner le verbe de consigne de chaque question avant de répondre.",
              },
              {
                type: "ctaBox",
                text: "Cadre bien en tête ? Passez aux conseils pratiques.",
                buttonLabel: "Voir les conseils pratiques",
                targetTab: "methode",
              },
            ],
          },
          {
            id: "methode",
            label: "Conseils pratiques",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "success",
                icon: "",
                title: "Le jour de l'épreuve",
                text: l3
                  ? "Voici les gestes à appliquer concrètement : lire sans se disperser, commencer par son point fort, fixer des limites de temps et préserver un vrai bloc pour le français comme pour les maths."
                  : "Voici les gestes à appliquer concrètement : lire sans se disperser, commencer par son point fort, fixer des limites de temps et préserver un vrai temps de rédaction.",
              },
              {
                type: "rappelExpress",
                title: "Rappel express : les priorités de l'épreuve",
                blocks: [
                  {
                    type: "formulaBlock",
                    lines: l3
                      ? [
                          "Ne jamais laisser une partie vide : la note de 2,5/10 par discipline est éliminatoire.",
                          "La rédaction vaut environ la moitié de la note de français : ne pas la sacrifier.",
                          "La langue est évaluée sur toute la copie : on garde du temps pour relire.",
                        ]
                      : [
                          "Ne jamais laisser une partie vide : la note de 5/20 est éliminatoire.",
                          "La réflexion rédigée vaut 9 points sur 20 : on ne la sacrifie jamais.",
                          "La langue est évaluée sur toute la copie : on garde du temps pour relire.",
                        ],
                  },
                  {
                    type: "callout",
                    variant: "warning",
                    text: "⚠️ Les réponses se rédigent en phrases complètes, même en grammaire et en lexique : un mot seul, sans justification, ne rapporte pas tous les points.",
                  },
                ],
              },
              {
                type: "highlightBox",
                variant: "neutral",
                icon: "✍️",
                title: "Des formulations qui rapportent des points",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Une réponse juste se reconnaît à sa forme : le bon terme, une justification, un appui dans le texte. Voici des trames à réutiliser pour les réponses courtes.",
                  },
                  {
                    type: "table",
                    headers: ["Type de question", "Formulation type"],
                    rows: [
                      ["Nature (classe grammaticale)", "« Ce mot est un nom commun (un adjectif qualificatif, une conjonction de subordination...). » On nomme la classe et on l'appuie d'un indice. Voir [les classes grammaticales](fiche:classes-grammaticales)."],
                      ["Fonction", "« Il est complément d'objet direct du verbe (ou sujet, ou épithète du nom...). » On nomme la fonction et le mot dont elle dépend. Voir [les fonctions syntaxiques](fiche:fonctions-syntaxiques)."],
                      ["Mode et temps d'un verbe", "« Ce verbe est au passé simple de l'indicatif ; il exprime ici une action brève de premier plan. » On nomme, puis on donne la valeur en contexte. Voir [les modes et les temps](fiche:modes-et-temps)."],
                      ["Sens d'un mot en contexte", "« Dans ce passage, ce terme signifie..., et non son sens courant de... » On s'appuie sur la phrase. Voir [les relations sémantiques](fiche:relations-semantiques)."],
                      ["Figure de style", "« Il s'agit d'une métaphore ; en citant le passage, on montre l'effet produit sur le lecteur. » On nomme, on cite, on explique l'effet. Voir [les figures de style](fiche:figures-de-style-registres)."],
                    ],
                  },
                  {
                    type: "paragraph",
                    text: "Pour le développement de la Partie 3 (introduction, transitions, conclusion), les formulations sont détaillées à la [notion 20](fiche:produire-le-developpement).",
                  },
                ],
              },
              {
                type: "methodeGroup",
                number: "①",
                title: "Lire le texte efficacement",
                intro: "**Les premières minutes comptent :** une lecture active fait gagner du temps sur toute la copie.",
                steps: [
                  {
                    number: "1",
                    text: "**Première lecture globale** : comprendre le sens, identifier le genre et le registre, repérer la structure.",
                    example: { lines: ["3 à 5 minutes, sans tout annoter"] },
                  },
                  {
                    number: "2",
                    text: "**Lire toutes les questions avant de relire** : savoir ce qu'on cherche, souligner le verbe de consigne de chacune.",
                    example: { lines: ["identifier, analyser, justifier, expliquer..."] },
                  },
                  {
                    number: "💡",
                    text: l3
                      ? "**Repérer tout de suite la question de rédaction** : elle mûrit pendant qu'on traite la grammaire et le lexique."
                      : "**Identifier dès le départ la thématique de la Partie 3** : elle active la mémoire culturelle en parallèle.",
                    warn: "⚠️ Annoter seulement ce qui est demandé, pas tout le texte.",
                  },
                ],
              },
              {
                type: "methodeGroup",
                number: "②",
                title: l3 ? "Choisir l'ordre des deux disciplines" : "Choisir l'ordre des parties",
                intro: l3
                  ? "**Il n'y a pas d'ordre imposé.** Le bon ordre, c'est souvent celui qui commence par votre point fort, à condition d'être très strict sur le temps."
                  : "**Il n'y a pas d'ordre imposé.** Le bon ordre, c'est souvent celui qui commence par votre point fort, à condition de respecter les durées prévues.",
                steps: [
                  {
                    number: "1",
                    text: l3
                      ? "**Commencer par votre point fort** : choisissez le français si vous entrez facilement dans le texte et la rédaction ; choisissez les maths si vous y gagnez plus vite des points sûrs."
                      : "**Commencer par son point fort** : Parties 1-2 d'abord si vous êtes solide en langue ; Partie 3 d'abord si vous rédigez mieux l'esprit frais.",
                    example: { lines: [l3 ? "Français puis maths, ou maths puis français : les deux se défendent." : "Parties 1-2 puis 3, ou Partie 3 puis 1-2."] },
                  },
                  {
                    number: "2",
                    text: l3
                      ? "**Écrire une heure limite avant de commencer** : par exemple, « à 2 h 05, je passe aux maths » ou « à 1 h 50, je passe au français ». Cette limite n'est pas décorative : elle vous protège."
                      : "**Écrire une heure limite avant de commencer** : par exemple, « à 1 h 40, je passe à la Partie 3 ». Notée noir sur blanc, on s'y tient ; gardée seulement en tête, on l'oublie dès qu'une question nous accroche.",
                    example: { lines: [l3 ? "Quand l'heure limite arrive, on change de discipline." : "Quand l'heure limite arrive, on change de partie."] },
                  },
                  {
                    number: "💡",
                    text: "**Le piège du point fort**, c'est d'y rester trop longtemps pour viser la copie parfaite. On cherche la meilleure note globale, pas une sous-partie impeccable.",
                    warn: "⚠️ Quand le temps prévu est écoulé, passez à la suite, même si ce n'est pas parfait.",
                  },
                ],
              },
              {
                type: "methodeGroup",
                number: "③",
                title: l3 ? "Répartir ses 4 heures" : "Répartir ses 3 heures",
                intro: "**Repères indicatifs**, à ajuster selon votre profil. L'essentiel : ne jamais sacrifier la rédaction.",
                preBlocks: [
                  {
                    type: "formulaBlock",
                    title: l3 ? "Répartition recommandée pour le français" : "Répartition recommandée sur 3 heures",
                    lines: l3
                      ? [
                          "10 min : lecture active du texte et de toutes les questions.",
                          "40 à 45 min : sous-partie 1, grammaire.",
                          "20 à 25 min : sous-partie 2, lexique.",
                          "50 à 55 min : sous-partie 3, rédaction (plan rapide, rédaction, relecture).",
                          "Soit environ 2 h pour le français. Les mathématiques se placent avant ou après, selon votre stratégie, mais avec leur propre bloc de temps protégé.",
                        ]
                      : [
                          "0 h 00 à 0 h 10 (10 min) : lecture active du texte et survol des questions.",
                          "0 h 10 à 1 h 10 (60 min) : Partie 1, étude de la langue.",
                          "1 h 10 à 1 h 40 (30 min) : Partie 2, lexique.",
                          "1 h 40 à 2 h 45 (65 min) : Partie 3, réflexion rédigée (5 min de plan, 50 min de rédaction, 10 min de relecture).",
                          "2 h 45 à 3 h 00 (15 min) : relecture globale.",
                        ],
                    note: l3
                      ? "Ces repères ne disent pas dans quel ordre commencer : ils donnent seulement le temps à réserver au français. Si vous commencez par les maths, gardez ce bloc français intact ensuite."
                      : "Ces repères supposent un traitement dans l'ordre proposé. Si vous changez l'ordre, conservez les mêmes durées totales par partie.",
                  },
                ],
                steps: [
                  {
                    number: "💡",
                    text: "**Si vous êtes en retard** : arrêter la partie en cours, passer à la rédaction, viser une introduction, une ou deux parties et une conclusion courte.",
                    warn: "⚠️ Même quelques lignes rédigées valent mieux qu'une partie blanche : elles vous évitent la note éliminatoire.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
}

/**
 * Méthodologie L3 (bac+3) — réécriture du 22/07/2026.
 *
 * Rédigée avec le regard d'une personne qui connaît le concours de l'intérieur :
 * on explique précisément l'épreuve, puis on donne des conseils concrets pour la
 * réussir. Tons humains, pas de fausse preuve sociale, vouvoiement partout.
 *
 * Faits vérifiés sur sources officielles (juillet 2026) :
 *  - Épreuve écrite d'admissibilité « Français et Mathématiques » : 4 h, coef 5,
 *    notée sur 20 (français /10 + maths /10) ; note ≤ 2,5/10 à une partie = éliminatoire.
 *  - Partie Français : appui sur un texte ≤ 500 mots, en 3 phases (étude de la langue ;
 *    étude du lexique et compréhension lexicale ; réflexion suscitée par le texte, sous
 *    forme d'un court développement rédigé et structuré).
 *  - Barème du sujet zéro « La Barbe bleue » : 6 (langue) + 4 (lexique) + 10 (développement,
 *    ~30 lignes), soit /20 ramené sur 10.
 *  - « Le jury tient compte dans la notation de la maîtrise écrite de la langue française »
 *    (vocabulaire, grammaire, conjugaison, ponctuation, orthographe), dans toutes les épreuves.
 *  - Première session en avril 2026 : aucun rapport de jury bac+3 encore publié.
 * Sources : arrêté du 17 avril 2025 ; devenirenseignant.gouv.fr (pages 1380, 1382, 1405, 1163).
 */
const SRC_EPREUVES = "https://www.devenirenseignant.gouv.fr/les-epreuves-des-concours-externes-bac3-de-recrutement-de-professeurs-des-ecoles-1380";
const SRC_SUJETS_ZERO = "https://www.devenirenseignant.gouv.fr/exemples-de-sujets-des-concours-externes-bac3-de-recrutement-d-enseignants-1405";
const SRC_RAPPORTS = "https://www.devenirenseignant.gouv.fr/les-sujets-des-epreuves-ecrites-et-rapports-des-jurys-des-crpe-1163";
const SRC_PROGRAMME = "https://www.devenirenseignant.gouv.fr/le-programme-des-epreuves-des-concours-externes-bac3-de-recrutement-de-professeurs-des-ecoles-1382";
const SRC_ARRETE = "https://www.legifrance.gouv.fr/search/all?query=Arr%C3%AAt%C3%A9%20du%2017%20avril%202025%20CRPE%20externe%20bac%2B3";

function buildMethodologieL3(): Fiche {
  return {
    slug: "methodologie-de-l-epreuve",
    matiere: "francais",
    kind: "methodo",
    numero: 0,
    partie: "Méthodologie",
    title: "Méthodologie de l'épreuve écrite",
    subtitle:
      "Bien comprendre l'épreuve commune de français et de mathématiques, et savoir exactement quoi faire, dans quel ordre, le jour du concours.",
    badges: [
      { label: "À lire en premier", variant: "hot" },
      { label: "Épreuve commune français + maths · 4 h", variant: "info" },
    ],
    metaTitle: "Méthodologie de l'écrit de français · Fiche de révision CRPE",
    metaDescription:
      "Méthodologie du CRPE bac+3 : l'épreuve commune français et maths (4 h), le barème du sujet zéro, la note éliminatoire, les trois phases du français, un plan des 4 heures et la méthode du développement rédigé. Sources officielles citées.",
    tabGroups: [
      {
        id: "decouvrir",
        label: "Découvrir",
        icon: "",
        tabs: [
          {
            id: "cours",
            label: "Comprendre l'épreuve",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "info",
                icon: "",
                title: "En deux mots",
                text: "Au concours bac+3, le français ne se passe pas tout seul : il partage une épreuve de 4 heures avec les mathématiques. On y évalue votre maîtrise de la langue, pas votre façon de l'enseigner : ni séquence, ni didactique à produire, seulement de la grammaire, du lexique, et un développement écrit à partir d'un texte. Savoir précisément ce qu'on attend de vous, c'est déjà la moitié du chemin.",
              },
              {
                type: "mindmapLite",
                center: { title: "Français + Maths", subtitle: "une seule épreuve · 4 h · notée sur 20" },
                branches: [
                  {
                    title: "Français · 10 pts",
                    lines: ["Phase 1 — étude de la langue", "Phase 2 — lexique", "Phase 3 — développement rédigé"],
                    variant: "blue",
                  },
                  {
                    title: "Maths · 10 pts",
                    lines: ["Exercices et problèmes", "Programme du cycle 4"],
                    variant: "green",
                  },
                  {
                    title: "Le couperet",
                    lines: ["Une note ≤ 2,5 / 10", "à une seule des deux parties", "et vous êtes éliminé"],
                    variant: "yellow",
                    dashed: true,
                  },
                ],
              },
              {
                type: "subsection",
                number: "①",
                title: "Ce que vous passez, précisément",
                blocks: [
                  {
                    type: "cardGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "Partie Français",
                        value: "/10",
                        lines: [
                          "Un seul texte, de 500 mots maximum",
                          "Trois phases : langue, lexique, développement",
                          "Une note ≤ 2,5/10 est éliminatoire",
                        ],
                        variant: "info",
                      },
                      {
                        title: "Partie Mathématiques",
                        value: "/10",
                        lines: [
                          "Plusieurs exercices ou problèmes",
                          "Programme du cycle 4",
                          "Une note ≤ 2,5/10 est éliminatoire",
                        ],
                        variant: "neutral",
                      },
                    ],
                  },
                  {
                    type: "table",
                    title: "La carte d'identité de l'épreuve",
                    headers: ["Caractéristique", "Détail"],
                    rows: [
                      ["Durée", "4 heures, français et mathématiques ensemble"],
                      ["Coefficient", "5, le plus lourd des épreuves écrites"],
                      ["Notation", "20 points : 10 pour le français, 10 pour les maths"],
                      ["Note éliminatoire", "Une note inférieure ou égale à 2,5/10 à l'une des deux parties élimine, quelle que soit la moyenne"],
                      ["Texte support", "Un extrait de roman, de nouvelle, de littérature d'idées ou d'essai, de 500 mots maximum"],
                      ["Programme", "Le programme de français du cycle 4 (5e, 4e, 3e)"],
                      ["Cadre officiel", `[Arrêté du 17 avril 2025](${SRC_ARRETE}), première session en avril 2026`],
                    ],
                  },
                  {
                    type: "callout",
                    variant: "danger",
                    icon: "⚠️",
                    title: "La première chose à comprendre",
                    text: "La barre de 2,5/10 tombe séparément sur le français et sur les maths. Un 9/10 en maths ne rattrape pas un 2/10 en français : les deux notes doivent passer la barre. Une partie bâclée, ou laissée à moitié vide faute de temps, peut donc à elle seule vous sortir du concours. Cette règle doit guider chacune de vos décisions le jour J.",
                  },
                ],
              },
              {
                type: "subsection",
                number: "②",
                title: "Les trois phases du français",
                blocks: [
                  {
                    type: "paragraph",
                    text: "L'épreuve découpe le français en trois phases, toujours dans le même ordre, toutes appuyées sur le même texte.",
                  },
                  {
                    type: "cardGrid",
                    columns: 3,
                    cards: [
                      {
                        title: "Phase 1 · Langue",
                        value: "6 pts",
                        lines: ["Grammaire, syntaxe, orthographe", "Nature, fonction, temps, accords", "Sur des phrases précises du texte"],
                        variant: "info",
                      },
                      {
                        title: "Phase 2 · Lexique",
                        value: "4 pts",
                        lines: ["Le sens des mots en contexte", "Formation, familles, nuances"],
                        variant: "info",
                      },
                      {
                        title: "Phase 3 · Développement",
                        value: "10 pts",
                        lines: ["Une réflexion écrite et argumentée", "Environ 30 lignes", "À partir d'une question sur le texte"],
                        variant: "success",
                      },
                    ],
                  },
                  {
                    type: "callout",
                    variant: "info",
                    icon: "💡",
                    title: "Lisez bien ce barème",
                    text: `Sur le [sujet zéro officiel](${SRC_SUJETS_ZERO}), ces trois phases valent 6, 4 et 10 points, soit 20 points ramenés ensuite sur 10. Retenez surtout la proportion : le développement pèse à lui seul la moitié du français. C'est lui qui creuse les écarts entre les copies, et c'est aussi celui qu'on sacrifie le plus souvent, par manque de temps.`,
                  },
                ],
              },
              {
                type: "highlightBox",
                variant: "marine",
                icon: "📄",
                title: "Le sujet zéro, décortiqué",
                blocks: [
                  {
                    type: "paragraph",
                    text: `Le seul [exemple officiellement cadré](${SRC_SUJETS_ZERO}) par le ministère prend appui sur un extrait de « La Barbe bleue » de Charles Perrault. Le voici phase par phase. Vous verrez que rien ne dépasse le programme du collège.`,
                  },
                  {
                    type: "table",
                    headers: ["Phase", "Ce qui était demandé"],
                    rows: [
                      [
                        "1 · Langue (6 pts)",
                        "Réécrire un passage en mettant les sujets au pluriel (conjugaison, accords) ; donner la nature de six mots soulignés en justifiant, dont des « le / la / les » à trancher entre article et pronom ; analyser des compléments circonstanciels ; donner la nature et la fonction de deux propositions introduites par « si ».",
                      ],
                      [
                        "2 · Lexique (4 pts)",
                        "Expliquer la formation d'un verbe (le préfixe « re- » et ses variantes) ; commenter le choix du vocabulaire qui peint un personnage, sur quelques lignes précises du texte.",
                      ],
                      [
                        "3 · Développement (10 pts)",
                        "« Qu'est-ce qui rend cette page d'un conte du XVIIe siècle toujours significative dans une réflexion sur l'égalité entre les hommes et les femmes ? » La réponse : un développement structuré et argumenté d'une trentaine de lignes.",
                      ],
                    ],
                  },
                  {
                    type: "paragraph",
                    text: "Ce sont exactement les notions du parcours : classes et fonctions, propositions, homophones, formation des mots.",
                  },
                ],
              },
              {
                type: "subsection",
                number: "③",
                title: "La phase 3 n'est pas un commentaire",
                blocks: [
                  {
                    type: "paragraph",
                    text: "C'est la phase que l'on comprend le plus souvent de travers. L'épreuve la définit comme « une réflexion suscitée par le texte à partir d'une question posée sur celui-ci », dont la réponse « prend la forme d'un court développement présentant un raisonnement rédigé et structuré ».",
                  },
                  {
                    type: "cardGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "Ce que ce n'est pas",
                        lines: [
                          "Un résumé du texte",
                          "Un commentaire des procédés de l'auteur",
                          "Un avis personnel jeté sans argument",
                        ],
                        variant: "neutral",
                      },
                      {
                        title: "Ce que c'est",
                        lines: [
                          "Une réponse argumentée à une question précise",
                          "Appuyée sur le texte, vos lectures et votre culture",
                          "Organisée : introduction, parties, conclusion",
                        ],
                        variant: "success",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    text: "C'est une petite dissertation, pas une explication de texte. Le texte est un point de départ et un appui parmi d'autres, pas l'objet de l'analyse. La méthode complète est détaillée aux notions [20](fiche:produire-le-developpement) et [21](fiche:culture-litteraire).",
                  },
                ],
              },
              {
                type: "highlightBox",
                variant: "marine",
                icon: "📋",
                title: "Ce que le jury regarde sur toute la copie",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Un principe officiel, valable dans toutes les épreuves du concours, français comme maths :",
                  },
                  {
                    type: "callout",
                    variant: "info",
                    text: "« Le jury tient compte dans la notation des épreuves de la maîtrise écrite et orale de la langue française : vocabulaire, grammaire, conjugaison, ponctuation, orthographe. »",
                  },
                  {
                    type: "paragraph",
                    text: "Autrement dit, vos fautes d'orthographe pèsent aussi dans votre copie de maths. Pour un futur professeur des écoles, c'est logique : la langue est votre premier outil de travail. On la soigne partout, et on garde du temps pour se relire.",
                  },
                  {
                    type: "paragraph",
                    text: `La session 2026 étant la première du concours bac+3, aucun rapport de jury propre à cette épreuve n'est encore paru : les attendus ci-dessus viennent des [textes officiels](${SRC_EPREUVES}) et du [sujet zéro](${SRC_SUJETS_ZERO}).`,
                  },
                ],
              },
              {
                type: "highlightBox",
                variant: "neutral",
                icon: "🔗",
                title: "Les sources officielles",
                blocks: [
                  {
                    type: "bullets",
                    items: [
                      `[Les épreuves du concours externe bac+3](${SRC_EPREUVES}) — structure, durée, barème, note éliminatoire.`,
                      `[Les sujets zéro (dont le français « La Barbe bleue »)](${SRC_SUJETS_ZERO}) — l'exemple cadré par le ministère.`,
                      `[Le programme des épreuves bac+3](${SRC_PROGRAMME}) — le périmètre exact des notions.`,
                      `[Sujets des écrits et rapports des jurys du CRPE](${SRC_RAPPORTS}) — à consulter à mesure qu'ils paraissent.`,
                    ],
                  },
                ],
              },
              {
                type: "ctaBox",
                text: "Vous voyez ce qu'on attend. Passons à comment le réussir.",
                buttonLabel: "Voir les conseils pratiques",
                targetTab: "methode",
              },
            ],
          },
          {
            id: "methode",
            label: "Réussir le jour J",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "success",
                icon: "",
                title: "L'état d'esprit",
                text: "Le niveau demandé est celui du collège. La vraie difficulté est ailleurs : tenir 4 heures sur deux matières, sans se laisser dévorer par l'une, sans sacrifier le développement. Les meilleures copies ne sont pas les plus savantes. Ce sont les plus complètes et les mieux gérées.",
              },
              {
                type: "rappelExpress",
                title: "À garder devant les yeux",
                blocks: [
                  {
                    type: "formulaBlock",
                    lines: [
                      "Aucune partie vide : 2,5/10 par matière, et c'est éliminé.",
                      "Le développement vaut la moitié du français : il passe avant le reste.",
                      "La langue compte sur toute la copie, maths comprises : on se relit.",
                    ],
                  },
                  {
                    type: "callout",
                    variant: "warning",
                    text: "⚠️ On répond en phrases complètes, même en grammaire et en lexique. Un mot jeté sans justification ni appui dans le texte ne rapporte pas tous les points.",
                  },
                ],
              },
              {
                type: "methodeGroup",
                number: "①",
                title: "Les cinq premières minutes",
                intro: "**Avant d'écrire, on regarde tout.** Ces cinq minutes-là décident du reste de la journée.",
                steps: [
                  {
                    number: "1",
                    text: "**Parcourir le sujet en entier, maths et français** : repérer ce qui a l'air simple, ce qui risque de coincer. On ne répond pas, on prend la mesure du travail.",
                    example: { lines: ["2 à 3 minutes, le sujet entier sous les yeux"] },
                  },
                  {
                    number: "2",
                    text: "**Choisir par quelle matière commencer** : on en traite une entièrement, puis l'autre. Commencez par celle qui vous met en confiance, souvent votre point fort : quelques bonnes réponses d'entrée, et on avance plus détendu. Aucun ordre n'est imposé.",
                    example: { lines: ["Français puis maths, ou l'inverse : les deux se défendent."] },
                  },
                  {
                    number: "3",
                    text: "**Noter ses heures de bascule au brouillon** : « 2 h 05, je passe aux maths », « 3 h 10, je rédige ». Écrites, on les respecte ; gardées dans la tête, on les oublie dès qu'une question nous retient.",
                    warn: "⚠️ On s'attarde toujours sur sa matière préférée : c'est justement là le danger. Quand l'heure arrive, on passe à la suite, même au milieu d'un bel élan.",
                  },
                ],
              },
              {
                type: "methodeGroup",
                number: "②",
                title: "Un plan de 4 heures qui tient",
                intro: "**Des repères, à ajuster à votre rythme.** L'idée : deux vraies moitiés, et un développement qu'on ne rogne jamais.",
                preBlocks: [
                  {
                    type: "formulaBlock",
                    title: "Comment découper les 4 heures",
                    lines: [
                      "≈ 2 h pour les maths, à placer avant ou après le français.",
                      "≈ 2 h pour le français :",
                      "  10 min — lire le texte et toutes les questions.",
                      "  40 à 45 min — phase 1, la langue.",
                      "  20 à 25 min — phase 2, le lexique.",
                      "  45 à 50 min — phase 3, le développement (plan, rédaction, relecture).",
                    ],
                    note: "Ces durées disent le temps à réserver, pas l'ordre dans lequel commencer. Si vous attaquez par les maths, gardez ensuite tout le temps prévu pour le français. Et laissez 5 minutes à la toute fin pour relire la langue.",
                  },
                ],
                steps: [
                  {
                    number: "💡",
                    text: "**En retard ?** Arrêtez la phase en cours et passez au développement : une introduction, une ou deux idées, une courte conclusion valent bien mieux que rien.",
                    warn: "⚠️ Quelques lignes rédigées vous évitent la note éliminatoire ; une phase 3 restée blanche, non.",
                  },
                ],
              },
              {
                type: "methodeGroup",
                number: "③",
                title: "Dans le français : lire, puis répondre",
                intro: "**Une fois installé dans le français**, quelques minutes de lecture bien menée font gagner du temps sur toutes les questions.",
                steps: [
                  {
                    number: "1",
                    text: "**Une première lecture pour comprendre** : le sens, le genre, le ton, qui parle. On ne surligne pas encore.",
                    example: { lines: ["3 à 5 minutes, crayon posé"] },
                  },
                  {
                    number: "2",
                    text: "**Lire toutes les questions avant de répondre** : on sait alors quoi chercher dans le texte. Soulignez le verbe de chaque consigne, il dit ce qu'on attend.",
                    example: { lines: ["donner, analyser, justifier, expliquer, réécrire..."] },
                  },
                  {
                    number: "3",
                    text: "**Choisir l'ordre des phases** : la langue et le lexique d'abord si vous êtes à l'aise en grammaire ; le développement d'abord si vous rédigez mieux l'esprit frais. Le développement garde son créneau, quoi qu'il arrive.",
                    example: { lines: ["Langue + lexique puis développement, ou l'inverse."] },
                  },
                  {
                    number: "💡",
                    text: "**Repérer la question du développement dès le début** : elle travaille dans un coin de la tête pendant que vous faites la grammaire. Notez au brouillon les idées et les exemples qui vous viennent.",
                    warn: "⚠️ On n'annote que ce qui sert une question, pas tout le texte.",
                  },
                ],
              },
              {
                type: "highlightBox",
                variant: "neutral",
                icon: "✍️",
                title: "Répondre pour marquer les points",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Une bonne réponse courte tient en trois gestes : on nomme avec le mot juste, on justifie, on s'appuie sur le texte. Voici des tournures à reprendre presque telles quelles.",
                  },
                  {
                    type: "table",
                    headers: ["Type de question", "Une réponse qui marque"],
                    rows: [
                      [
                        "Nature (classe grammaticale)",
                        "« Ce mot est un nom commun (un adjectif qualificatif, une conjonction de subordination...). » On nomme la classe et on l'appuie d'un indice. Voir [les classes grammaticales](fiche:classes-grammaticales).",
                      ],
                      [
                        "Fonction",
                        "« Il est complément d'objet direct du verbe (ou sujet, ou épithète du nom...). » On nomme la fonction et le mot dont elle dépend. Voir [les fonctions syntaxiques](fiche:fonctions-syntaxiques).",
                      ],
                      [
                        "Mode et temps d'un verbe",
                        "« Ce verbe est au passé simple de l'indicatif ; il exprime ici une action brève de premier plan. » On nomme, puis on donne la valeur en contexte. Voir [les modes et les temps](fiche:modes-et-temps).",
                      ],
                      [
                        "Sens d'un mot en contexte",
                        "« Dans ce passage, ce terme signifie..., et non son sens courant de... » On s'appuie sur la phrase. Voir [les relations sémantiques](fiche:relations-semantiques).",
                      ],
                      [
                        "Effet d'un choix de vocabulaire",
                        "« En employant ce terme, l'auteur donne au personnage une image de... ; la citation le montre. » On nomme, on cite, on explique l'effet. Voir [les figures et registres](fiche:figures-de-style-registres).",
                      ],
                    ],
                  },
                ],
              },
              {
                type: "highlightBox",
                variant: "marine",
                icon: "🧱",
                title: "Réussir le développement (la phase qui fait la note)",
                blocks: [
                  {
                    type: "paragraph",
                    text: "C'est la moitié de la note du français, et c'est très cadré une fois le squelette en tête. On ne cherche pas à écrire long : on répond clairement à la question, avec des exemples.",
                  },
                  {
                    type: "table",
                    headers: ["Moment", "Ce qu'on y met"],
                    rows: [
                      [
                        "Introduction (≈ 5 lignes)",
                        "Une amorce liée au thème, la question reformulée en problématique, puis l'annonce des deux ou trois idées que vous allez défendre.",
                      ],
                      [
                        "Développement (2 à 3 paragraphes)",
                        "Une idée par paragraphe, expliquée et illustrée par un exemple. Trois réservoirs d'exemples : le texte, vos lectures (titre et auteur), votre culture (histoire, arts, cinéma...). Un alinéa à chaque paragraphe.",
                      ],
                      [
                        "Conclusion (≈ 3 lignes)",
                        "Une réponse nette à la question, et une ouverture si elle vient naturellement. On n'ajoute pas d'idée nouvelle.",
                      ],
                    ],
                  },
                  {
                    type: "callout",
                    variant: "warning",
                    icon: "⚠️",
                    title: "Deux détails qui se voient tout de suite",
                    text: "On n'écrit jamais « I. », « II. » ni les titres des parties dans la copie : on relie par des connecteurs (d'abord, ensuite, enfin). Et on prépare ses exemples à l'avance : c'est la [notion 21](fiche:culture-litteraire) qui vous évite la panne sèche le jour J. Méthode complète : [notion 20](fiche:produire-le-developpement).",
                  },
                ],
              },
              {
                type: "highlightBox",
                variant: "neutral",
                icon: "✅",
                title: "Vos cinq dernières minutes",
                blocks: [
                  {
                    type: "paragraph",
                    text: "La langue compte partout. Cette relecture-là rapporte des points sans réviser : on ne cherche pas le beau style, on traque les fautes qui coûtent cher.",
                  },
                  {
                    type: "bullets",
                    items: [
                      "Les accords : sujet-verbe, participes passés, accords à l'intérieur des groupes nominaux.",
                      "Les homophones : a / à, et / est, ses / ces, on / ont, se / ce, ou / où.",
                      "La ponctuation et les majuscules (début de phrase, noms propres).",
                      "Chaque réponse courte : une phrase complète, le bon terme, une justification ?",
                      "Le développement : chaque paragraphe répond-il vraiment à la question posée ?",
                    ],
                  },
                ],
              },
              {
                type: "highlightBox",
                variant: "marine",
                icon: "🎯",
                title: "Si vous ne retenez que trois choses",
                blocks: [
                  {
                    type: "formulaBlock",
                    lines: [
                      "Une copie finie partout bat une copie brillante à moitié.",
                      "Le développement se prépare pendant la grammaire : notez vos idées au fil de l'eau.",
                      "Cinq minutes de relecture rapportent plus qu'une dernière question grattée.",
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
}

export const ficheMethodologieL3 = buildMethodologieL3();
export const ficheMethodologieM2 = ficheMethodologie("m2");
