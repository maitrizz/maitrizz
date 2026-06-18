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
    numero: 0,
    partie: "Méthodologie",
    title: "Méthodologie de l'épreuve écrite",
    subtitle: l3
      ? "Comprendre l'épreuve commune français et mathématiques, gérer ses 4 heures et aborder les trois sous-parties de français avec méthode"
      : "Comprendre l'épreuve, gérer ses 3 heures et aborder les trois parties avec méthode",
    badges: [
      { label: "Point de départ du parcours", variant: "hot" },
      {
        label: l3 ? "Épreuve commune français + maths · 4 h" : "Épreuve écrite de français · 3 h",
        variant: "info",
      },
    ],
    metaTitle:
      "Méthodologie de l'épreuve écrite de français (CRPE) · Fiche de révision | Maitrizz",
    metaDescription: l3
      ? "Méthodologie du CRPE L3 : épreuve commune français et mathématiques (4 h), barème, note éliminatoire, trois sous-parties de français (grammaire, lexique, rédaction), programme de français, stratégie et gestion du temps. Conseils, exercices et auto-évaluation."
      : "Méthodologie de l'épreuve écrite de français du CRPE M2 (3 h) : format, barème, les trois parties (étude de la langue, lexique, réflexion rédigée), programme, stratégie et gestion du temps. Conseils, exercices et auto-évaluation.",
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
                  "Avant de commencer, il faut savoir précisément ce que l’on attend de vous. Cette fiche présente le cadre de l’épreuve, les attentes du jury, ainsi que des conseils pour aborder chaque partie, notamment en matière de gestion du temps.",
                items: [
                  {
                    number: "①",
                    title: l3
                      ? "L'épreuve commune et son cadre"
                      : "L'épreuve de français et son cadre",
                    text: l3
                      ? "Une épreuve commune français + maths de 4 h, son barème et sa note éliminatoire."
                      : "Une épreuve de français de 3 h, son barème et sa note éliminatoire.",
                  },
                  {
                    number: "②",
                    title: l3
                      ? "Les trois sous-parties de français"
                      : "Les trois parties de l'épreuve de français",
                    text: l3
                      ? "Étude de la langue, lexique, rédaction : les attendus de chaque sous-partie."
                      : "Étude de la langue, lexique, rédaction : les attendus de chaque partie.",
                  },
                  {
                    number: "③",
                    title: "La stratégie",
                    text: "Lire le texte avec méthode, repérer ce que chaque question demande, rédiger des réponses claires et justifiées.",
                  },
                  {
                    number: "④",
                    title: "La gestion du temps",
                    text: "Des conseils testés et approuvés pour garder le rythme et ne pas bâcler la rédaction.",
                  },
                ],
              },
            ],
          },
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
                        variant: "warning",
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
                          { title: "1 · Étude de la langue", value: "~8 pts", lines: ["Grammaire, syntaxe", "Orthographe", "Questions précises sur le texte"], variant: "info" },
                          { title: "2 · Lexique", value: "~4 pts", lines: ["Formation des mots", "Sens contextuel", "Figures, registres, relations sémantiques"], variant: "info" },
                          { title: "3 · Réflexion rédigée", value: "~8 pts", lines: ["Développement structuré, argumenté", "Références personnelles", "Culture littéraire"], variant: "success" },
                        ],
                  },
                  {
                    type: "callout",
                    variant: "warning",
                    icon: "⚠️",
                    title: "Un barème estimé, non officiel",
                    text: l3
                      ? "Le barème exact par sous-partie n'est pas communiqué officiellement. D'après le sujet zéro officiel et le sujet de la session 2026, on est généralement autour de 6 points en grammaire, 4 en lexique et 10 en rédaction. La répartition peut bouger un peu selon les sujets, mais ces ordres de grandeur restent utiles pour gérer son temps."
                      : "Le barème exact par partie n'est pas communiqué officiellement. Les points indiqués (environ 8, 4 et 8) sont une estimation d'après les sujets et les rapports de jury : ils peuvent varier selon les sessions et les groupements.",
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
                          ["Questions d'orthographe", "Appliquer la règle, distinguer les homophones par un critère de substitution (notion 12)."],
                        ],
                  },
                  ...(!l3
                    ? [
                        {
                          type: "table" as const,
                          title: "Partie 2, Lexique : ce qu'on teste",
                          headers: ["Type de question", "Ce qu'on attend"],
                          rows: [
                            ["Formation des mots", "Identifier préfixe, suffixe, radical, étymologie, et expliquer le sens apporté (notion 16)."],
                            ["Sens contextuel d'un mot", "Expliquer le sens précis dans le contexte, distinguer sens propre et figuré (notion 17)."],
                            ["Relations sémantiques", "Synonyme, antonyme, hyperonyme, champ lexical, avec justification (notion 17)."],
                            ["Figures de style", "Identifier, nommer et expliquer l'effet produit dans le texte (notion 18)."],
                            ["Registres", "Identifier le registre et le justifier par des indices textuels (notion 18)."],
                          ],
                        },
                        {
                          type: "table" as const,
                          title: "Partie 3, Réflexion rédigée : ce qu'on teste",
                          headers: ["Élément", "Détail"],
                          rows: [
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
                    title: l3 ? "La rédaction L3 répond à une question sur le texte" : "La Partie 3 n'est pas un commentaire",
                    text: l3
                      ? "En L3, la rédaction répond directement à une question portant sur le texte : votre analyse du texte est au centre. Ne transposez pas la méthode du M2, où la Partie 3 est une réflexion plus large. Ici, on pose le cadre ; la méthode détaillée de la Partie 3 sera vue plus loin, dans les notions 19 à 21."
                      : "La Partie 3 est une réflexion personnelle sur une thématique suscitée par le texte, pas un résumé de ce que dit l'auteur. Le texte est un appui parmi d'autres. Détail aux notions 19 à 21.",
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
                  : "La Partie 3 vaut environ un tiers des points. Une copie qui finit la Partie 3 vaut souvent mieux qu'une Partie 1 parfaite et une Partie 3 vierge.",
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
                          "Chaque partie vaut environ un tiers des points : on les équilibre.",
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
                      : "**Écrire une heure limite avant de commencer** : par exemple, « à 1 h 40, je passe à la Partie 3 ». Cette limite n'est pas décorative : elle vous protège.",
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
                    warn: "⚠️ Même quelques lignes rédigées valent mieux qu'une partie vierge : elles évitent la zone éliminatoire.",
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

export const ficheMethodologieL3 = ficheMethodologie("l3");
export const ficheMethodologieM2 = ficheMethodologie("m2");
