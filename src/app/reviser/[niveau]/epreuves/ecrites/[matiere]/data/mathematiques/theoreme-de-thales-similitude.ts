import type { Fiche } from "@/components/fiche/types";
import { COPIES_THEOREME_DE_THALES_SIMILITUDE } from "./copies-theoreme-de-thales-similitude";
import { EXERCICES_THEOREME_DE_THALES_SIMILITUDE } from "./exercices-theoreme-de-thales-similitude";

export const SAVOIR_FAIRE = [
  { id: "calculer-longueur", label: "Calculer une longueur (Thalès)" },
  { id: "reciproque", label: "Prouver un parallélisme (réciproque)" },
  { id: "similitude", label: "Triangles semblables (critères)" },
  { id: "coefficient", label: "Coefficient de similitude (k, k², k³)" },
  { id: "homothetie", label: "Homothétie" },
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
                  text: "Deux photos semblables, l'une 10 × 15 cm et l'autre 20 × 30 cm : le coefficient est k = 2. La grande photo a une aire 4 fois plus grande (k² = 4), pas 2 fois. L'effet du coefficient sur les aires et volumes est détaillé dans la [fiche N°15](fiche:perimetres-aires-volumes), et le lien avec les échelles dans la [fiche N°13](fiche:proportionnalite-pourcentages).",
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
                  text: "Deux droites passant par O qui coupent deux parallèles découpent des segments dans le rapport k : c'est exactement la configuration de Thalès. C'est pourquoi homothétie, similitude et Thalès apparaissent souvent dans le même exercice de concours. L'homothétie comme transformation, avec les autres transformations du plan, est développée dans la [fiche N°24](fiche:transformations-du-plan).",
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
                  number: "3",
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
              text: "Méthode bien en tête ? Entraînez-vous.",
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
              title: "Théorème de Thalès et similitude",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_THEOREME_DE_THALES_SIMILITUDE,
            },
          ],
        },
        {
          id: "corriger",
          label: "Corriger des erreurs",
          icon: "",
          blocks: [
            {
              type: "corrigerCopies",
              title: "Théorème de Thalès et similitude",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_THEOREME_DE_THALES_SIMILITUDE,
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
      ],
    },
  ],
};
