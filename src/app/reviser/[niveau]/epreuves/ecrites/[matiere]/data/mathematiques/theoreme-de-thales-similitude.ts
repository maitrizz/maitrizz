import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "J'énonce le théorème de Thalès avec ses hypothèses (ordre des points, droites parallèles, égalité des rapports)" },
  { id: "e2", label: "Je reconnais la configuration triangle et la configuration papillon dans une figure" },
  { id: "e3", label: "J'écris les rapports correctement : dans chaque rapport, les deux segments sont sur la même sécante" },
  { id: "e4", label: "Je calcule une longueur inconnue en posant l'égalité des rapports (théorème direct)" },
  { id: "e5", label: "J'énonce la réciproque et je l'utilise pour prouver que deux droites sont parallèles" },
  { id: "e6", label: "Je connais les trois critères de similitude des triangles (AA, CCC, CAC) et je sais lequel utiliser" },
  { id: "e7", label: "Je calcule le coefficient de similitude k et je l'applique aux longueurs (×k), aires (×k²) et volumes (×k³)" },
  { id: "e8", label: "Je sais ce qu'est une homothétie (centre O, OM' = k × OM) et je fais le lien avec Thalès" },
  { id: "e9", label: "Je rédige rigoureusement en nommant la version du théorème utilisée (Thalès ou sa réciproque)" },
];

export const ficheTheoremeDeThalesSimilitude: Fiche = {
  slug: "theoreme-de-thales-similitude",
  matiere: "mathematiques",
  numero: 22,
  partie: "Partie 4 : Espace et géométrie plane",
  title: "Théorème de Thalès et similitude",
  subtitle:
    "Configurations triangle et papillon · réciproque · calculer une longueur · prouver des droites parallèles · triangles semblables · coefficient de similitude · homothétie",
  badges: [
    { label: "★★★ Quasiment chaque sujet", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème D", variant: "info" },
  ],
  metaTitle: "Théorème de Thalès et similitude (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur le théorème de Thalès : configurations triangle et papillon, réciproque, calcul de longueurs, preuve du parallélisme, triangles semblables, coefficient de similitude et homothétie. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                { number: "①", title: "Les deux configurations", text: "Triangle et papillon : reconnaître la figure et écrire les bons rapports." },
                { number: "②", title: "Calculer une longueur", text: "Le théorème direct : poser l'égalité des rapports et résoudre." },
                { number: "③", title: "La réciproque", text: "Prouver que deux droites sont parallèles à partir des rapports." },
                { number: "④", title: "Similitude et homothétie", text: "Triangles semblables, coefficient k, effets sur les aires et les volumes." },
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
              title: "La proportionnalité appliquée à la géométrie",
              text: "Thalès est l'outil de la proportionnalité en géométrie : deux droites parallèles qui coupent deux sécantes découpent des segments proportionnels. Il sert à calculer une longueur inconnue (théorème direct) et à démontrer que deux droites sont parallèles (réciproque). Le piège principal est de confondre les deux configurations (triangle et papillon) ou d'écrire les rapports dans le mauvais sens. Le jury attend une rédaction soignée : noms des points, configuration identifiée, égalité des rapports bien posée.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Énoncé et configuration triangle",
              blocks: [
                {
                  type: "paragraph",
                  text: "Deux sécantes se croisent en un point S. Deux droites parallèles coupent ces sécantes en créant un point sur chaque demi-droite. C'est la configuration de base de Thalès.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Théorème de Thalès (configuration triangle)",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Hypothèses : S sommet, A et B sur une sécante (dans cet ordre depuis S),",
                        "A' et B' sur l'autre sécante (dans cet ordre depuis S), et (AA') ∥ (BB').",
                        "Conclusion : **SA/SB = SA'/SB' = AA'/BB'**",
                        "Les trois rapports sont égaux entre eux.",
                      ],
                      note: "Lecture des rapports : les numérateurs sont les segments les plus proches de S, les dénominateurs les plus éloignés. On écrit toujours les rapports dans le même sens, de S vers l'extérieur.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Cas le plus courant : un triangle ABC avec (MN) ∥ (BC), M sur [AB] et N sur [AC]. Ici S = A (le sommet commun aux deux côtés), et Thalès donne AM/AB = AN/AC = MN/BC.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Configuration papillon",
              blocks: [
                {
                  type: "paragraph",
                  text: "Dans la configuration papillon, le point S est situé entre les points de chaque sécante : les deux droites parallèles se retrouvent de part et d'autre de S, et les segments se croisent en formant un papillon.",
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Même formule, autre disposition",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "S est entre A et B sur la première sécante, et entre A' et B' sur la deuxième.",
                        "Même conclusion : **SA/SB = SA'/SB' = AA'/BB'**",
                        "Les longueurs sont comptées en valeur absolue.",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Comment trancher entre les deux configurations",
                  text: "On cherche d'abord S, le point commun aux deux sécantes. Si S est à l'extérieur des deux parallèles, c'est la configuration triangle. Si S est entre les deux parallèles, c'est la configuration papillon. Dans les deux cas, la formule des rapports est la même.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "La réciproque : prouver que deux droites sont parallèles",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Réciproque du théorème de Thalès",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Si SA/SB = SA'/SB' (avec S, A, B alignés dans cet ordre",
                        "et S, A', B' alignés dans cet ordre),",
                        "alors les droites (AA') et (BB') sont **parallèles**.",
                      ],
                      note: "Condition à vérifier avant tout : les points doivent être dans le même ordre sur chaque sécante (S, puis le point le plus proche, puis le plus éloigné).",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Mode d'emploi",
                  text: "On veut montrer que deux droites sont parallèles. On calcule les deux rapports de longueurs. S'ils sont égaux, les droites sont parallèles par la réciproque. Exemple : SA = 3, SB = 9, SA' = 4, SB' = 12 donne 3/9 = 1/3 et 4/12 = 1/3, donc (AA') ∥ (BB').",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Triangles semblables et critères",
              blocks: [
                {
                  type: "paragraph",
                  text: "Deux triangles sont semblables s'ils ont les mêmes angles : même forme, mais pas forcément la même taille. La similitude est plus générale que l'isométrie, car elle n'exige pas l'égalité des côtés, seulement leur proportionnalité.",
                },
                {
                  type: "cardGrid",
                  columns: 3,
                  cards: [
                    { title: "AA · angle-angle", variant: "info", lines: ["Deux angles égaux suffisent.", "Le 3e l'est forcément (somme = 180°).", "Le critère le plus utilisé."] },
                    { title: "CCC · côtés proportionnels", variant: "info", lines: ["Les trois côtés dans le même rapport.", "ex. 3-4-5 et 6-8-10."] },
                    { title: "CAC · deux côtés + angle", variant: "info", lines: ["Deux côtés dans le même rapport,", "et l'angle compris entre eux égal."] },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Le lien avec Thalès",
                  text: "Quand Thalès s'applique (deux parallèles coupant deux sécantes depuis S), les triangles SAA' et SBB' sont semblables par le critère AA : l'angle en S est commun, et les angles correspondants sont égaux car les droites sont parallèles. Thalès et similitude décrivent donc la même réalité géométrique.",
                },
              ],
            },
            {
              type: "subsection",
              number: "⑤",
              title: "Coefficient de similitude et homothétie",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Le coefficient de similitude k",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Si △ABC ∼ △A'B'C' avec coefficient k :",
                        "**k = A'B'/AB = B'C'/BC = A'C'/AC**",
                        "k > 1 : agrandissement · 0 < k < 1 : réduction.",
                      ],
                    },
                  ],
                },
                {
                  type: "table",
                  headers: ["Grandeur", "Relation avec k", "Exemple k = 3"],
                  rows: [
                    ["Longueurs", "multipliées par k", "côté × 3"],
                    ["Aires", "multipliées par k²", "aire × 9"],
                    ["Volumes", "multipliés par k³", "volume × 27"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Deux photos semblables, l'une 10 × 15 cm et l'autre 20 × 30 cm : le coefficient est k = 2. La grande photo a une aire 4 fois plus grande (k² = 4), pas 2 fois.",
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "L'homothétie, la transformation derrière l'agrandissement",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "L'homothétie de centre O et de rapport k associe à tout point M le point M' tel que OM' = k × OM, sur la même demi-droite issue de O lorsque k > 0. C'est la formalisation géométrique de l'agrandissement et de la réduction.",
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "Propriétés : O, M, M' alignés · OM' = k × OM",
                        "Les angles sont conservés · la figure image est semblable",
                        "Toute droite et son image sont parallèles : (AB) ∥ (A'B')",
                      ],
                      note: "Construction : tracer la demi-droite [OM), puis placer M' tel que OM' = k × OM, et répéter pour chaque sommet.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Homothétie et Thalès, la même configuration",
                  text: "Deux droites passant par O qui coupent deux parallèles découpent des segments dans le rapport k : c'est exactement la configuration de Thalès. C'est pourquoi homothétie, similitude et Thalès apparaissent souvent dans le même exercice de concours.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : écrire les rapports à l'envers",
              badge: "Très fréquent",
              faux: "SA/SA' = SB/SB' (on mélange les deux sécantes dans un même rapport).",
              vrai: "SA/SB = SA'/SB' : dans chaque rapport, les deux segments sont sur la MÊME sécante.",
              methode: "Vérifier que numérateur et dénominateur appartiennent à la même droite avant de calculer.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : multiplier l'aire par k au lieu de k²",
              badge: "Classique",
              faux: "Deux triangles semblables, k = 3, aire de 10 cm² : aire image = 3 × 10 = 30 cm².",
              vrai: "Les aires sont multipliées par k² = 9 : aire image = 9 × 10 = 90 cm².",
              methode: "Longueurs ×k, aires ×k², volumes ×k³. La dimension de la grandeur donne la puissance de k.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : appliquer Thalès sans vérifier l'ordre des points",
              badge: "Conceptuel",
              faux: "Écrire SA/SB = SA'/SB' alors que l'ordre sur la sécante est S, B, A.",
              vrai: "Thalès exige l'ordre S, point proche, point éloigné. Si l'ordre change, les rapports changent.",
              methode: "Annoter la figure et noter l'ordre des points depuis S avant d'écrire le moindre rapport.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : ne pas nommer la réciproque dans la conclusion",
              badge: "Rédaction",
              faux: "« Les rapports sont égaux, donc les droites sont parallèles. »",
              vrai: "« D'après la réciproque du théorème de Thalès, les droites (AA') et (BB') sont parallèles. »",
              methode: "Nommer le théorème : « Thalès » pour calculer, « réciproque du théorème de Thalès » pour le parallélisme.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Au cycle 3 (CM1 à 6e), les élèves travaillent les agrandissements et réductions de figures : reproduire une figure sur quadrillage en doublant les dimensions, calculer les dimensions d'une maquette à l'échelle. C'est la base intuitive de la similitude et de la proportionnalité géométrique, qui prépare Thalès. Le théorème lui-même et l'homothétie sont introduits au cycle 4.\n\nCe qu'il faut maîtriser pour le CRPE : les deux configurations (triangle et papillon), énoncer la réciproque avec précision, rédiger correctement (nommer les points, justifier l'ordre), et utiliser le coefficient de similitude pour les aires et les volumes.\n\nUne idée fausse très répandue chez les élèves : doubler les côtés double l'aire. Savoir l'expliquer concrètement (quatre petits carrés tiennent dans un carré de côté double) est une compétence directement attendue du futur enseignant.",
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
              title: "La rédaction compte autant que le calcul",
              text: "Poser les hypothèses dans l'ordre, écrire les bons rapports, et nommer la version du théorème utilisée. Chaque savoir-faire se termine par une conclusion rédigée.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Calculer une longueur (théorème direct)",
              intro:
                "**Question type :** « Dans le triangle SAA', (BB') ∥ (AA'), SB = 6, SA = 4, SA' = 5. Calculer SB'. »",
              steps: [
                {
                  number: "1",
                  text: "**Identifier et nommer la configuration.**",
                  example: { lines: ["S est le sommet, (AA') ∥ (BB') → configuration triangle"] },
                },
                {
                  number: "2",
                  text: "**Écrire l'égalité des rapports (segments sur la même sécante).**",
                  example: { lines: ["SA/SB = SA'/SB' → 4/6 = 5/SB'"] },
                },
                {
                  number: "3",
                  text: "**Résoudre et conclure.**",
                  example: { lines: ["SB' = 5 × 6/4 = 30/4 = 7,5"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Dans un triangle SAA', (BB') ∥ (AA'), SA = 4, SB = 10, SA' = 6. Calculer SB'.",
              correction: [
                { type: "line", text: "SA/SB = SA'/SB' → 4/10 = 6/SB' → SB' = 6 × 10/4 = **15**." },
                { type: "note", text: "Numérateur et dénominateur de chaque rapport sont sur la même sécante." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Prouver que deux droites sont parallèles (réciproque)",
              intro:
                "**Question type :** « SA = 5, SB = 15, SA' = 6, SB' = 18. Montrer que (AA') ∥ (BB'). »",
              steps: [
                {
                  number: "1",
                  text: "**Vérifier l'ordre des points sur chaque sécante.**",
                  example: { lines: ["S, A, B dans cet ordre · S, A', B' dans cet ordre"] },
                },
                {
                  number: "2",
                  text: "**Calculer les deux rapports et les comparer.**",
                  example: { lines: ["SA/SB = 5/15 = 1/3 · SA'/SB' = 6/18 = 1/3 → égaux"] },
                },
                {
                  number: "3",
                  text: "**Conclure en nommant la réciproque.**",
                  example: { lines: ["D'après la réciproque du théorème de Thalès, (AA') ∥ (BB')."] },
                  warn: "⚠️ Toujours écrire « réciproque du théorème de Thalès », pas seulement « les rapports sont égaux ».",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "SM = 3, SN = 9, SM' = 5, SN' = 15 (points dans cet ordre). Les droites (MM') et (NN') sont-elles parallèles ?",
              correction: [
                { type: "line", text: "SM/SN = 3/9 = 1/3 et SM'/SN' = 5/15 = 1/3 : égaux, donc **(MM') ∥ (NN')** par la réciproque du théorème de Thalès." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Utiliser la similitude pour calculer une longueur ou une aire",
              intro:
                "**Question type :** « △ABC ∼ △DEF avec AB = 6, DE = 9, BC = 8. Calculer EF, puis l'effet sur l'aire. »",
              steps: [
                {
                  number: "1",
                  text: "**Calculer le coefficient de similitude.**",
                  example: { lines: ["k = DE/AB = 9/6 = 3/2 = 1,5"] },
                },
                {
                  number: "2",
                  text: "**Appliquer k aux côtés homologues.**",
                  example: { lines: ["EF = k × BC = 1,5 × 8 = 12"] },
                },
                {
                  number: "3",
                  text: "**Pour une aire, multiplier par k².**",
                  example: { lines: ["Aire(DEF) = k² × Aire(ABC) = 2,25 × Aire(ABC)"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "△ABC ∼ △DEF, AB = 5, DE = 8, Aire(ABC) = 25 cm². Calculer l'aire de △DEF.",
              correction: [
                { type: "line", text: "k = 8/5 = 1,6 ; Aire(DEF) = k² × 25 = 2,56 × 25 = **64 cm²**." },
                { type: "note", text: "On multiplie par k², pas par k." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Identifier des triangles semblables dans une figure",
              intro:
                "**Question type :** « Dans le triangle ABC rectangle en A, H est le pied de la hauteur issue de A. Montrer que △ABH ∼ △CAH. »",
              steps: [
                {
                  number: "1",
                  text: "**Repérer les angles égaux.**",
                  example: { lines: ["Angle AHB = angle AHC = 90° (H pied de la hauteur)", "angle ABH = angle HAC (tous deux complémentaires de BAH)"] },
                },
                {
                  number: "2",
                  text: "**Conclure par le critère AA.**",
                  example: { lines: ["Deux angles égaux → △ABH ∼ △CAH"] },
                },
                {
                  number: "💡",
                  text: "**Exploiter la proportionnalité des côtés.**",
                  example: { lines: ["AB/CA = BH/AH = AH/CH → on en déduit AH² = BH × CH"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Pourquoi deux triangles ayant deux angles égaux sont-ils semblables ?",
              correction: [
                { type: "line", text: "La somme des angles d'un triangle vaut 180°, donc si deux angles sont égaux, le troisième l'est aussi : les trois angles coïncident, c'est le critère **AA**." },
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
              title: "Avant de passer aux exercices",
              text: "9 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
            },
            {
              type: "quizBlock",
              questions: [
                {
                  objectifId: "e1",
                  question: "Dans la configuration triangle, que vaut SA/SB ?",
                  options: ["SB'/SA'", "SA'/SB'", "AB/A'B'", "SA/SA'"],
                  correctIndex: 1,
                  explanation: "Thalès : SA/SB = SA'/SB' = AA'/BB'. Dans chaque rapport, les deux segments sont sur la même sécante.",
                },
                {
                  objectifId: "e3",
                  question: "Quel rapport est correctement écrit pour Thalès ?",
                  options: ["SA/SA' = SB/SB'", "SA/SB = SA'/SB'", "SA/SB' = SB/SA'", "AA'/SA = BB'/SB"],
                  correctIndex: 1,
                  explanation: "Numérateur et dénominateur doivent être sur la même sécante. SA et SB sont sur la sécante 1, SA' et SB' sur la sécante 2.",
                },
                {
                  objectifId: "e4",
                  question: "(BB') ∥ (AA'), SA = 4, SB = 6, SA' = 5. Que vaut SB' ?",
                  options: ["7,5", "3,33", "30", "10"],
                  correctIndex: 0,
                  explanation: "SA/SB = SA'/SB' → 4/6 = 5/SB' → SB' = 5 × 6/4 = 7,5.",
                },
                {
                  objectifId: "e2",
                  question: "Comment reconnaître une configuration papillon ?",
                  options: ["S est à l'extérieur des parallèles", "S est entre les deux droites parallèles", "Il n'y a pas de point S", "Les droites ne sont pas parallèles"],
                  correctIndex: 1,
                  explanation: "En configuration papillon, le point S (commun aux deux sécantes) est situé entre les deux droites parallèles.",
                },
                {
                  objectifId: "e5",
                  question: "SA = 5, SB = 15, SA' = 6, SB' = 18 (points dans l'ordre). Que conclure ?",
                  options: ["Rien", "(AA') ∥ (BB') par la réciproque", "Le triangle est rectangle", "(AA') et (BB') sont sécantes"],
                  correctIndex: 1,
                  explanation: "5/15 = 1/3 et 6/18 = 1/3 : les rapports sont égaux, donc (AA') ∥ (BB') par la réciproque du théorème de Thalès.",
                },
                {
                  objectifId: "e6",
                  question: "Quel critère suffit à prouver que deux triangles sont semblables avec deux angles ?",
                  options: ["CCC", "CAC", "AA", "Aucun, il faut les trois côtés"],
                  correctIndex: 2,
                  explanation: "Critère AA : deux angles égaux suffisent, car le troisième l'est forcément (somme des angles = 180°).",
                },
                {
                  objectifId: "e7",
                  question: "Deux figures semblables avec k = 3. Comment varie l'aire ?",
                  options: ["× 3", "× 6", "× 9", "× 27"],
                  correctIndex: 2,
                  explanation: "Les aires sont multipliées par k² = 9. Les longueurs par k = 3, les volumes par k³ = 27.",
                },
                {
                  objectifId: "e8",
                  question: "Dans une homothétie de centre O et de rapport k, quelle relation lie O, M et son image M' ?",
                  options: ["OM' = OM + k", "OM' = k × OM", "OM' = OM / k", "OM' = M'M"],
                  correctIndex: 1,
                  explanation: "Homothétie : OM' = k × OM, avec O, M et M' alignés (M et M' du même côté de O si k > 0).",
                },
                {
                  objectifId: "e9",
                  question: "On a montré que SA/SB = SA'/SB'. Quelle conclusion est complète ?",
                  options: ["Les rapports sont égaux, donc c'est parallèle", "D'après la réciproque du théorème de Thalès, (AA') ∥ (BB')", "Donc le triangle est semblable", "Donc SA = SA'"],
                  correctIndex: 1,
                  explanation: "Le jury attend que l'on nomme le théorème : « d'après la réciproque du théorème de Thalès ».",
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
              text: "Identifiez la configuration, vérifiez l'ordre des points, écrivez les rapports dans le bon sens. N'appliquez jamais Thalès sans avoir justifié les parallèles. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Calculs directs et configurations",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : calculer des longueurs",
              objectifTag: "Théorème direct",
              enonce: "Dans un triangle, S est le sommet. Sur la sécante 1 : SA = 4, SB = 10. Sur la sécante 2 : SA' = 6. (AA') ∥ (BB').",
              question: "a) Calculer SB'.\nb) Calculer AA' sachant que BB' = 15.",
              correction: [
                { type: "line", label: "a)", text: "SA/SB = SA'/SB' → 4/10 = 6/SB' → SB' = 6 × 10/4 = 15." },
                { type: "line", label: "b)", text: "SA/SB = AA'/BB' → 4/10 = AA'/15 → AA' = 15 × 4/10 = 6." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : configuration papillon",
              objectifTag: "Reconnaître la configuration",
              enonce: "Deux droites se croisent en S. Sur la première : A à 3 cm de S, B à 9 cm de S de l'autre côté. Sur la deuxième : A' à 4 cm de S, B' à 12 cm de S de l'autre côté. (AA') ∥ (BB').",
              question: "Vérifier par le calcul que Thalès s'applique bien ici, et nommer la configuration.",
              correction: [
                { type: "line", text: "S est entre A et B, et entre A' et B' : c'est la configuration papillon." },
                { type: "line", text: "SA/SB = 3/9 = 1/3 et SA'/SB' = 4/12 = 1/3 : les rapports sont égaux, Thalès est bien vérifié." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : réciproque et similitude",
              sub: "Démontrer et calculer",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : montrer que des droites sont parallèles",
              objectifTag: "Réciproque",
              enonce: "Sur la sécante 1 : S, M, N avec SM = 3, SN = 9. Sur la sécante 2 : S, M', N' avec SM' = 5, SN' = 15.",
              question: "Montrer que (MM') ∥ (NN'). Préciser la configuration et la version du théorème utilisée.",
              correction: [
                { type: "line", text: "Configuration triangle (S, M, N dans cet ordre ; S, M', N' dans cet ordre)." },
                { type: "line", text: "SM/SN = 3/9 = 1/3 et SM'/SN' = 5/15 = 1/3 : les rapports sont égaux." },
                { type: "line", text: "D'après la réciproque du théorème de Thalès, (MM') ∥ (NN')." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : similitude et coefficient",
              objectifTag: "Coefficient de similitude",
              enonce: "△ABC et △DEF sont semblables, avec AB = 5, DE = 8 et Aire(ABC) = 25 cm².",
              question: "a) Calculer le coefficient de similitude k de △ABC vers △DEF.\nb) Calculer l'aire de △DEF.",
              correction: [
                { type: "line", label: "a)", text: "k = DE/AB = 8/5 = 1,6." },
                { type: "line", label: "b)", text: "Aire(DEF) = k² × Aire(ABC) = 1,6² × 25 = 2,56 × 25 = 64 cm²." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : homothétie et triangle rectangle",
              sub: "Transformer et raisonner",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : image par une homothétie",
              objectifTag: "Homothétie",
              enonce: "Sur une demi-droite issue de O, on place A tel que OA = 3 cm. On applique l'homothétie de centre O et de rapport k = 2,5.",
              question: "a) Où se trouve l'image A' de A ?\nb) Un segment [AB] mesure 4 cm. Quelle est la longueur de son image [A'B'] ? Que peut-on dire des directions de (AB) et (A'B') ?",
              correction: [
                { type: "line", label: "a)", text: "OA' = k × OA = 2,5 × 3 = 7,5 cm, sur la même demi-droite que A (car k > 0)." },
                { type: "line", label: "b)", text: "A'B' = k × AB = 2,5 × 4 = 10 cm. Une droite et son image par une homothétie sont parallèles : (AB) ∥ (A'B')." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : triangles semblables dans le triangle rectangle",
              objectifTag: "Critère AA",
              enonce: "△ABC est rectangle en C. H est le pied de la hauteur issue de C.",
              question: "a) Montrer que △ACH et △ABC sont semblables.\nb) En déduire une relation entre AC, AH et AB.",
              correction: [
                { type: "line", label: "a)", text: "Les deux triangles partagent l'angle en A, et ont chacun un angle droit (en H pour ACH, en C pour ABC). Par le critère AA, ils sont semblables." },
                { type: "line", label: "b)", text: "Côtés homologues proportionnels : AC/AB = AH/AC, d'où AC² = AH × AB." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : problème contextualisé",
              sub: "Combiner les outils",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 5 : la maquette de l'école",
              objectifTag: "Échelle, similitude, Thalès",
              enonce: "Un architecte réalise la maquette d'une école à l'échelle 1/50. Sur la maquette, une salle de classe mesure 12 cm × 9 cm, et une fenêtre a une surface de 4 cm².",
              question: "a) Calculer les dimensions réelles de la salle de classe.\nb) Calculer la surface réelle de la fenêtre.\nc) Sur le plan, une allée est tracée. Deux droites parallèles à cette allée coupent deux sécantes issues d'un point S. Sur la sécante 1 : SM = 6 cm, SN = 10 cm. Sur la sécante 2 : SM' = 9 cm. Calculer SN'.",
              correction: [
                { type: "line", label: "a)", text: "Le passage maquette → réalité multiplie les longueurs par 50 : 12 × 50 = 600 cm = 6 m et 9 × 50 = 450 cm = 4,5 m." },
                { type: "line", label: "b)", text: "Les aires sont multipliées par 50² = 2 500 : 4 × 2 500 = 10 000 cm² = 1 m²." },
                { type: "line", label: "c)", text: "Par Thalès : SM/SN = SM'/SN' → 6/10 = 9/SN' → SN' = 9 × 10/6 = 15 cm." },
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
              text: "Cet exercice reproduit le format d'un sujet de concours : il combine similitude, proportionnalité et théorème de Thalès, avec un volet « situation d'apprentissage ». Comptez environ 25 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 6 : l'ombre du mât",
              objectifTag: "Similitude, Thalès, didactique",
              enonce:
                "Pour illustrer la proportionnalité à ses élèves de CM2, un enseignant utilise l'ombre des objets. Par grand soleil, les rayons lumineux sont parallèles. Un mât vertical de hauteur h projette une ombre de 4 m. Au même moment, un élève de 1,50 m projette une ombre de 1,20 m.",
              question:
                "1.1 Expliquer pourquoi les deux triangles (mât + ombre) et (élève + ombre) sont semblables. Quelle propriété des rayons utilise-t-on ?\n1.2 Calculer la hauteur h du mât.\n1.3 Reformuler avec le théorème de Thalès : identifier les droites parallèles et écrire l'égalité des rapports.\n2.1 Quel coefficient de similitude relie le triangle de l'élève à celui du mât ?\n2.2 Quelle compétence du programme de cycle 3 ce problème mobilise-t-il ?",
              correction: [
                { type: "line", label: "1.1", text: "Les rayons étant parallèles, ils font le même angle avec le sol pour le mât et pour l'élève. Les deux triangles ont chacun un angle droit (au sol) et cet angle d'élévation égal : par le critère AA, ils sont semblables." },
                { type: "line", label: "1.2", text: "Proportionnalité : h/4 = 1,5/1,2 = 1,25, donc h = 4 × 1,25 = 5 m." },
                { type: "line", label: "1.3", text: "Les deux sols (au pied du mât et de l'élève) jouent le rôle des droites parallèles, les rayons celui des sécantes. On écrit hauteur/ombre identique pour les deux : h/4 = 1,5/1,2, d'où h = 5 m." },
                { type: "line", label: "2.1", text: "k = ombre du mât / ombre de l'élève = 4/1,2 = 10/3 ≈ 3,33. Vérification : 3,33 × 1,5 ≈ 5 m, cohérent avec la hauteur trouvée." },
                { type: "line", label: "2.2", text: "Proportionnalité, grandeurs et mesures, résolution de problèmes par des rapports de longueurs, et démarche scientifique (mesurer puis modéliser)." },
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
              text: "Ces erreurs reproduisent des fautes réelles de candidats. Identifier une erreur et la corriger rigoureusement est une compétence directement valorisée au CRPE.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 7 : rapports mélangés",
              objectifTag: "Écriture des rapports",
              enonce: "**Copie d'un candidat :** SA = 4, SB = 10, SA' = 6, (AA') ∥ (BB'). Calculer SB'.\n*Réponse produite :* « SA/SA' = SB/SB' → 4/6 = 10/SB' → SB' = 15 ».",
              question: "a) Identifier l'erreur de méthode.\nb) Rédiger correctement.",
              correction: [
                { type: "paragraph", text: "**Erreur : un même rapport mélange les deux sécantes.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "SA/SA' compare deux sécantes différentes : ce n'est pas la forme de Thalès." },
                    { text: "Forme correcte : SA/SB = SA'/SB' (chaque rapport sur une seule sécante)." },
                    { text: "4/10 = 6/SB' → SB' = 6 × 10/4 = 15. Le résultat est juste ici par coïncidence, mais la formule était fausse." },
                  ],
                },
                { type: "note", text: "Le jury sanctionne une formule mal posée même si le résultat tombe juste." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 8 : aire multipliée par k",
              objectifTag: "Coefficient de similitude",
              enonce: "**Copie d'un candidat :** deux triangles semblables, k = 3, le premier a une aire de 10 cm².\n*Réponse produite :* « Aire du second = 3 × 10 = 30 cm² ».",
              question: "a) Identifier l'erreur.\nb) Donner la bonne réponse.",
              correction: [
                { type: "paragraph", text: "**Erreur : le coefficient k a été appliqué à l'aire au lieu de k².**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "k = 3 concerne les longueurs, pas les aires." },
                    { text: "Les aires sont multipliées par k² = 9." },
                    { text: "Aire du second = 9 × 10 = 90 cm²." },
                  ],
                },
                { type: "note", text: "Longueurs ×k, aires ×k², volumes ×k³ : la dimension donne la puissance." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 9 : réciproque non nommée",
              objectifTag: "Rédaction",
              enonce: "**Copie d'un candidat :** après avoir montré que SA/SB = SA'/SB'.\n*Réponse produite :* « Donc (AA') et (BB') sont parallèles car les rapports sont égaux ».",
              question: "a) Pourquoi la justification est-elle incomplète ?\nb) Rédiger la bonne conclusion.",
              correction: [
                { type: "paragraph", text: "**Erreur : le théorème employé n'est pas nommé.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "« Car les rapports sont égaux » décrit le calcul, mais ne cite pas la propriété utilisée." },
                    { text: "Conclusion correcte : « D'après la réciproque du théorème de Thalès, les droites (AA') et (BB') sont parallèles. »" },
                  ],
                },
                { type: "note", text: "Nommer le théorème : « Thalès » pour calculer, « réciproque du théorème de Thalès » pour le parallélisme." },
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
              text: "Essayez de répondre dans votre tête avant de révéler la réponse, puis évaluez-vous. Formulées comme des questions de jury d'oral.",
            },
            {
              type: "flashcardDeck",
              cards: [
                {
                  question: "Énoncer le théorème de Thalès (configuration triangle).",
                  answer:
                    "Si (AA') ∥ (BB'), avec S sommet, A et B sur une sécante (dans cet ordre depuis S) et A' et B' sur l'autre sécante (dans cet ordre), alors SA/SB = SA'/SB' = AA'/BB'. Les trois rapports sont égaux.",
                  astuce: "Dans chaque rapport, les deux segments sont sur la MÊME sécante.",
                },
                {
                  question: "Quelle différence entre configuration triangle et configuration papillon ?",
                  answer:
                    "Triangle : S est à l'extérieur des deux parallèles (A et B du même côté de S). Papillon : S est entre les deux parallèles (A et B de part et d'autre de S). Dans les deux cas, SA/SB = SA'/SB' s'applique, en valeur absolue pour le papillon.",
                },
                {
                  question: "Énoncer la réciproque du théorème de Thalès.",
                  answer:
                    "Si SA/SB = SA'/SB' (avec S, A, B alignés dans cet ordre et S, A', B' alignés dans cet ordre), alors (AA') ∥ (BB'). On l'utilise pour prouver que deux droites sont parallèles.",
                  astuce: "Nommer « réciproque du théorème de Thalès » dans la conclusion, pas juste « Thalès ».",
                },
                {
                  question: "Quels sont les trois critères de similitude des triangles ?",
                  answer:
                    "AA : deux angles égaux (le 3e l'est forcément). CCC : les trois côtés proportionnels. CAC : deux côtés dans le même rapport et l'angle compris égal. Le critère AA est le plus utilisé.",
                },
                {
                  question: "Coefficient de similitude k : effet sur longueurs, aires et volumes ?",
                  answer:
                    "Longueurs ×k, aires ×k², volumes ×k³. Exemple avec k = 2 : longueurs doublées, aire 4 fois plus grande, volume 8 fois plus grand.",
                  astuce: "L'erreur classique : multiplier l'aire par k au lieu de k².",
                },
                {
                  question: "Qu'est-ce qu'une homothétie ? Ses propriétés essentielles ?",
                  answer:
                    "Homothétie de centre O et de rapport k : tout point M est associé à M' tel que OM' = k × OM, avec O, M, M' alignés. Elle conserve les angles, donne une figure semblable, et toute droite est parallèle à son image. Pour k > 0, M et M' sont du même côté de O.",
                },
                {
                  question: "Quel est le lien entre Thalès et l'homothétie ?",
                  answer:
                    "Deux droites passant par O qui coupent deux parallèles découpent des segments dans le rapport k : c'est la configuration de Thalès. L'homothétie de centre O et de rapport k est la transformation qui formalise cet agrandissement ou cette réduction.",
                },
                {
                  question: "Dans un triangle ABC, (MN) ∥ (BC) avec M sur [AB] et N sur [AC]. Quels rapports égaux ?",
                  answer:
                    "Le sommet S est ici A. Par Thalès : AM/AB = AN/AC = MN/BC. On peut aussi écrire AM/MB = AN/NC.",
                },
                {
                  question: "Comment prouver que deux triangles sont semblables par AA ?",
                  answer:
                    "Identifier deux angles égaux dans les deux triangles en justifiant pourquoi (angle commun, alternes-internes, complémentaires...), puis conclure : « deux angles égaux, donc semblables par le critère AA », et écrire les côtés proportionnels dans le bon ordre.",
                },
                {
                  question: "Lien entre similitude et échelle d'une carte ou maquette ?",
                  answer:
                    "Une carte à l'échelle 1/k est une réduction de coefficient 1/k. Longueur réelle = k × longueur sur la carte ; aire réelle = k² × aire sur la carte. Exemple 1/25 000 : 1 cm sur la carte = 250 m dans la réalité.",
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
              type: "callout",
              variant: "info",
              title: "Toute la notion en un coup d'œil",
              text: "La carte mentale de la fiche : un outil pour réviser rapidement avant le jour J, une fois chaque partie travaillée.",
            },
            {
              type: "mindmapLite",
              center: { title: "Thalès", subtitle: "SA/SB = SA'/SB'" },
              branches: [
                {
                  title: "Configuration triangle",
                  variant: "blue",
                  lines: ["S à l'extérieur des parallèles", "SA/SB = SA'/SB' = AA'/BB'"],
                },
                {
                  title: "Configuration papillon",
                  variant: "blue",
                  lines: ["S entre les deux parallèles", "même formule, en valeur absolue"],
                },
                {
                  title: "Réciproque",
                  variant: "green",
                  lines: ["rapports égaux → parallèles", "nommer la réciproque"],
                },
                {
                  title: "Similitude",
                  variant: "yellow",
                  lines: ["critères AA, CCC, CAC", "même forme, tailles différentes"],
                },
                {
                  title: "Coefficient k",
                  variant: "yellow",
                  lines: ["longueurs ×k", "aires ×k², volumes ×k³"],
                },
                {
                  title: "Homothétie",
                  variant: "purple",
                  dashed: true,
                  lines: ["centre O, OM' = k × OM", "droite ∥ à son image"],
                },
              ],
            },
          ],
        },
        {
          id: "autoeval",
          label: "Auto-évaluation",
          icon: "",
          blocks: [
            {
              type: "autoEvalChecklist",
              items: OBJECTIFS,
            },
          ],
        },
      ],
    },
  ],
};
