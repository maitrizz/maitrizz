import type { Fiche } from "@/components/fiche/types";

/**
 * Notion 20 : Références culturelles et littéraires mobilisables
 * (Partie 3 : développement rédigé).
 *
 * Recueil de références, pour donner aux candidats de la matière à mobiliser
 * en Partie 3 (voir reference_crpe_partie3_nature en mémoire). La méthode
 * (citer / intégrer / relier une référence) est dans la notion 20.
 *
 * Le recueil inclut aussi des références non écrites (cinéma, peinture,
 * chanson, théâtre) : recevables au titre de « votre culture » (surtout au
 * M2), elles viennent en complément des références littéraires, prioritaires.
 *
 * Chaque œuvre est une carte `referenceGrid` en trois temps :
 *   - title           : Œuvre · Auteur · date
 *   - enBref          : un vrai résumé concret (de quoi parle l'œuvre)
 *   - commentUtiliser : liste d'IDÉES À DÉFENDRE (chaque item = une idée
 *                       directrice prête à servir, l'œuvre venant à l'appui)
 *   - formulationType : une phrase de concours prête à adapter (encart)
 *
 * Contenu COMMUN L3/M2 (une œuvre reste une œuvre) : une fiche, deux exports.
 * Exactitude : œuvres/auteurs établis, attributions et dates sûres, niveau
 * accessible (cycle 4 + lycée). Citations limitées à des formules très sûres.
 */

// Objectifs de mémorisation (alimentent le quiz et l'auto-évaluation de
// l'onglet « Mémoriser »). Ici, il ne s'agit pas de maîtriser une règle mais
// de constituer et de savoir mobiliser un petit stock de références.
const OBJECTIFS = [
  { id: "cult1", label: "Je connais au moins deux références sûres pour chaque grand thème" },
  { id: "cult2", label: "Je sais associer une œuvre à l'idée qu'elle permet de défendre" },
  { id: "cult3", label: "Je situe une référence sans me tromper (auteur, date, genre)" },
  { id: "cult4", label: "Je sais relier une référence, écrite ou non, à une question de Partie 3" },
];

function ficheReferentielCulturel(): Fiche {
  return {
    slug: "culture-litteraire",
    matiere: "francais",
    numero: 21,
    partie: "Partie 3 : Développement rédigé",
    title: "Références culturelles et littéraires",
    subtitle:
      "Un recueil d'œuvres classées par thème pour nourrir la Partie 3 : pour chacune, un résumé, des idées à défendre et une formulation type prête à adapter",
    badges: [
      { label: "★★☆ Recueil pour la Partie 3", variant: "hot" },
      { label: "Références à mobiliser", variant: "info" },
    ],
    metaTitle:
      "Références culturelles et littéraires mobilisables : Partie 3 du CRPE · Fiche de révision | Maitrizz",
    metaDescription:
      "Références culturelles et littéraires pour la Partie 3 du CRPE : un recueil d'œuvres classées par thèmes, avec résumé, idées à défendre et formulation type.",
    tabGroups: [
      {
        id: "mode-emploi",
        label: "Mode d'emploi",
        icon: "",
        tabs: [
          {
            id: "comment-utiliser",
            label: "Comment l'utiliser",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "info",
                icon: "",
                title: "À quoi sert ce recueil",
                text:
                  "En Partie 3, la consigne attend que vous appuyiez votre réflexion sur vos lectures. La vraie difficulté n'est pas de connaître des œuvres : c'est de retrouver vite, le jour de l'épreuve, celle qui éclaire la question posée, et de savoir l'employer. " +
                  "Ce recueil sert à cela. Les œuvres sont **classées par grands thèmes** du concours ; pour chacune, une carte donne un résumé, des idées à défendre et une formulation prête à adapter. " +
                  "Le jour J, reliez votre référence à votre idée selon la méthode de la [notion 20](fiche:produire-le-developpement).",
              },
              {
                type: "subsection",
                number: "1",
                title: "Lire une carte",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Chaque référence est présentée sous forme de carte. Un badge indique son **genre** (essai, roman, fable, poème, mais aussi film, tableau, chanson…), puis la carte tient en trois temps :",
                  },
                  {
                    type: "bullets",
                    items: [
                      "**En bref** : un résumé concret de l'œuvre, pour comprendre de quoi elle parle même sans l'avoir lue.",
                      "**Comment l'utiliser** : une liste d'idées à défendre ; chaque ligne est une idée directrice toute prête, que l'œuvre vient appuyer.",
                      "**Formulation type** : une phrase de concours prête à adapter, qui montre comment glisser la référence dans la copie.",
                    ],
                  },
                  {
                    type: "callout",
                    variant: "info",
                    icon: "",
                    title: "Au-delà des livres",
                    text: "Le recueil ne se limite pas aux textes : un film, un tableau, une chanson ou un spectacle peuvent aussi nourrir la réflexion, surtout au M2 où la consigne parle de « votre culture ». Ces références viennent toutefois en complément : pour une épreuve de français appuyée sur un texte littéraire, les références littéraires restent prioritaires.",
                  },
                ],
              },
              {
                type: "subsection",
                number: "2",
                title: "Situer le texte : les 4 genres",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Reconnaître le genre du texte support oriente la lecture et aide à trouver des références du même genre. Quatre grands genres reviennent au concours.",
                  },
                  {
                    type: "notionCardGrid",
                    columns: 2,
                    cards: [
                      { title: "Le récit", definition: "Raconte une histoire : narrateur, personnages, actions.", exemples: ["Roman, nouvelle, conte, récit autobiographique."], test: "Repères : qui raconte (point de vue), à quel temps, dans quel ordre." },
                      { title: "Le théâtre", definition: "Texte destiné à être joué : dialogue, didascalies, double énonciation.", exemples: ["Tragédie, comédie, drame."], test: "Repères : répliques, didascalies, ce que sait le spectateur." },
                      { title: "La poésie", definition: "Travaille la forme et les images : rythme, sonorités, figures.", exemples: ["Poème en vers, poème en prose."], test: "Repères : disposition, rythme, sonorités, figures (notion 19)." },
                      { title: "Le texte d'idées", definition: "Défend un point de vue : essai, article, lettre, discours.", exemples: ["Essai, tribune, discours, lettre ouverte."], test: "Repères : thèse, arguments, exemples, marques de l'énonciateur (notion 15)." },
                    ],
                  },
                  {
                    type: "callout",
                    variant: "info",
                    icon: "💡",
                    title: "Genre n'est pas registre",
                    text: "Le **genre** est la catégorie (récit, théâtre, poésie, texte d'idées) ; le **registre** est le ton (lyrique, épique, pathétique, comique, ironique). Les registres et figures relèvent de la [notion 19](fiche:figures-de-style-registres).",
                  },
                ],
              },
              {
                type: "subsection",
                number: "3",
                title: "Mobiliser une référence dans le développement",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Une référence ne se place pas n'importe où : elle vient **renforcer une idée**, le plus souvent à l'intérieur d'un paragraphe (juste après l'appui sur le texte support), parfois en **ouverture de conclusion** pour élargir. Le texte support reste la base ; la référence ajoute du poids et de la culture.",
                  },
                  {
                    type: "formulaBlock",
                    title: "Le mouvement, en quatre temps",
                    lines: [
                      "1. Idée directrice : la thèse du paragraphe (souvent une ligne de « Comment l'utiliser »).",
                      "2. Appui sur le texte support : une citation courte ou un renvoi précis.",
                      "3. Référence culturelle : la « formulation type », adaptée à la question.",
                      "4. Analyse : une phrase qui relie le tout à la question posée.",
                    ],
                    note: "La référence vient en renfort de l'idée, jamais à la place du texte support.",
                  },
                  {
                    type: "callout",
                    variant: "success",
                    icon: "",
                    title: "Exemple : un paragraphe avec référence",
                    text:
                      "Question : « Quel est l'intérêt de mettre par écrit ses expériences vécues ? »\n\n" +
                      "« Écrire ce qu'on a vécu, c'est d'abord lutter contre l'oubli *(idée directrice)*. Dans le texte, le narrateur continue de tenir son journal malgré tout, comme pour fixer l'instant avant qu'il ne disparaisse *(appui sur le texte support)*. Cette fonction de l'écriture traverse bien des œuvres : dans son Journal, Anne Frank consigne jour après jour une expérience que la guerre menaçait d'effacer *(référence du recueil)*. Mettre par écrit, c'est ainsi arracher un peu de soi au temps *(analyse qui répond à la question)*. »",
                  },
                  {
                    type: "callout",
                    variant: "warning",
                    icon: "⚠️",
                    title: "Relier, jamais plaquer",
                    text: "Citer une œuvre sans la relier (« Cela me fait penser à 1984 d'Orwell. ») ne démontre rien. C'est l'**analyse qui relie** la référence à l'idée et à la question qui fait l'apport, pas le nom cité. On adapte toujours la « formulation type » au sujet, on ne la recopie pas. La méthode complète est à la [notion 20](fiche:produire-le-developpement).",
                  },
                ],
              },
              {
                type: "subsection",
                number: "4",
                title: "Mémoriser et adapter à son concours",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Ne cherchez pas à tout apprendre : retenez **deux ou trois œuvres par thème** que vous connaissez vraiment, à l'aide de la zone « En bref ». Une même œuvre sert souvent plusieurs thèmes (*Candide* nourrit le bonheur, la guerre, le progrès ou le rire) : un petit stock solide est plus utile qu'une longue liste mal maîtrisée.",
                  },
                  {
                    type: "bullets",
                    items: [
                      "**M2** : la culture est **centrale** (la consigne demande « vos lectures et votre culture ») ; visez un appui par grand axe.",
                      "**L3** : le développement est plus court et **ancré sur le texte** ; une référence en **appoint** suffit, et vos lectures du **lycée** (2de, 1re) sont bienvenues.",
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "referentiel",
        label: "Le référentiel",
        icon: "",
        tabs: [
          {
            id: "soi-et-les-autres",
            label: "Soi et les autres",
            icon: "",
            blocks: [
              { type: "callout", variant: "info", icon: "", text: "Thèmes : l'écriture de soi · l'enfance et le souvenir · autrui et la rencontre." },
              {
                type: "subsection",
                number: "①",
                title: "L'écriture de soi (journal, mémoires, autobiographie)",
                blocks: [
                  {
                    type: "referenceGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "Les Essais · Montaigne · 1580",
                        genre: "Essai",
                        enBref: "Au XVIe siècle, Montaigne se retire pour écrire un livre d'un genre nouveau, l'essai : il s'y observe lui-même, note ses pensées, ses lectures et ses contradictions, et fait de sa propre vie la matière de sa réflexion. C'est un des premiers grands textes d'introspection.",
                        commentUtiliser: [
                          "Se raconter, c'est d'abord apprendre à se connaître",
                          "Sa propre vie peut être une matière de réflexion à part entière",
                          "Écrire aide à mettre de l'ordre dans ses pensées",
                        ],
                        formulationType: "On peut rappeler que Montaigne, dans ses Essais, se prend lui-même pour sujet (« je suis moi-même la matière de mon livre ») : écrire devient pour lui un moyen de se connaître.",
                      },
                      {
                        title: "Les Confessions · Rousseau · 1782",
                        genre: "Autobiographie",
                        enBref: "Rousseau entreprend de raconter toute sa vie, depuis l'enfance, en se promettant de ne rien cacher, pas même ses fautes (comme le vol d'un ruban dont il accuse une servante). Il fonde l'autobiographie moderne sur un pacte de sincérité totale.",
                        commentUtiliser: [
                          "L'écriture de soi naît d'un besoin de sincérité totale",
                          "Avouer ses fautes, c'est chercher la vérité sur soi",
                          "Se raconter, c'est aussi se justifier devant les autres",
                        ],
                        formulationType: "On peut souligner que, dans Les Confessions, Rousseau va jusqu'à avouer ses fautes pour se montrer tel qu'il fut : l'écriture de soi devient une quête de vérité.",
                      },
                      {
                        title: "Journal · Anne Frank · 1947",
                        genre: "Journal intime",
                        enBref: "Cachée avec sa famille dans un appartement secret d'Amsterdam pendant l'occupation nazie, une adolescente tient son journal pendant deux ans, jusqu'à son arrestation et sa mort en camp. Son texte, retrouvé après la guerre, est devenu un témoignage majeur.",
                        commentUtiliser: [
                          "Écrire, c'est laisser une trace de soi contre l'oubli",
                          "Le journal intime devient un confident et un refuge",
                          "Témoigner par l'écriture, c'est résister à l'effacement",
                        ],
                        formulationType: "Le Journal d'Anne Frank montre qu'écrire permet de garder trace d'une existence : ses pages ont survécu là où la guerre voulait tout effacer.",
                      },
                      {
                        title: "La Promesse de l'aube · Romain Gary · 1960",
                        genre: "Récit autobiographique",
                        enBref: "Gary raconte son enfance pauvre et l'amour démesuré de sa mère, qui l'imaginait déjà héros et grand écrivain et a tout sacrifié pour sa réussite. Le récit mêle l'humour, la tendresse et la mémoire d'une figure maternelle écrasante.",
                        commentUtiliser: [
                          "On se raconte souvent à travers ceux qui nous ont façonnés",
                          "La mémoire idéalise les êtres que l'on a aimés",
                          "L'enfance détermine l'adulte que l'on devient",
                        ],
                        formulationType: "On peut citer La Promesse de l'aube, où Gary se raconte à travers la figure de sa mère : écrire sa vie, c'est aussi rendre hommage à ceux qui l'ont façonnée.",
                      },
                      {
                        title: "La Place · Annie Ernaux · 1983",
                        genre: "Récit autobiographique",
                        enBref: "Après la mort de son père, ancien ouvrier devenu petit commerçant, Ernaux retrace sa vie dans une langue volontairement sobre. Elle dit la distance qui s'est creusée entre eux à mesure qu'elle accédait, par les études, à un autre monde social. Prix Nobel 2022.",
                        commentUtiliser: [
                          "Écrire, c'est interroger ses origines et sa place sociale",
                          "L'école peut éloigner d'un milieu autant qu'elle élève",
                          "Dire le monde de ses parents est un acte de fidélité",
                        ],
                        formulationType: "Comme Annie Ernaux dans La Place, qui écrit pour dire le monde de son père, l'écriture de soi peut servir à interroger ses origines et sa place dans la société.",
                      },
                      {
                        title: "Autoportraits · Frida Kahlo · 1926-1954",
                        genre: "Peinture (autoportrait)",
                        enBref: "Toute sa vie, après un grave accident qui la laisse handicapée, l'artiste mexicaine se peint elle-même, encore et encore : son corps souffrant, ses douleurs, ses amours. Ses autoportraits forment une sorte de journal peint, où elle dit sans détour ce qu'elle vit.",
                        commentUtiliser: [
                          "Se représenter, c'est une autre façon de se raconter",
                          "L'art peut dire la douleur intime que les mots taisent",
                          "On peut faire de sa propre vie la matière de son œuvre",
                        ],
                        formulationType: "Comme Frida Kahlo, qui ne cesse de se peindre elle-même, on peut montrer que l'écriture de soi n'est pas que littéraire : l'artiste fait de sa propre vie la matière de son œuvre.",
                      },
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                number: "②",
                title: "L'enfance et le souvenir",
                blocks: [
                  {
                    type: "referenceGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "Du côté de chez Swann · Proust · 1913",
                        genre: "Roman",
                        enBref: "Premier tome d'À la recherche du temps perdu. Le narrateur goûte une madeleine trempée dans du thé et, par cette simple sensation, voit resurgir intacte toute son enfance à Combray. Le roman explore la façon dont le passé revit en nous.",
                        commentUtiliser: [
                          "Une simple sensation peut ressusciter tout le passé",
                          "Le souvenir resurgit souvent malgré nous",
                          "Le passé ne disparaît pas vraiment, il dort en nous",
                        ],
                        formulationType: "L'épisode de la madeleine, chez Proust, illustre la mémoire involontaire : une simple sensation suffit à ressusciter un pan entier du passé.",
                      },
                      {
                        title: "Enfance · Nathalie Sarraute · 1983",
                        genre: "Récit autobiographique",
                        enBref: "Sarraute fait remonter des souvenirs d'enfance, mais une seconde voix, dans le texte, l'interroge sans cesse pour vérifier qu'elle n'embellit pas, qu'elle reste fidèle à ce qu'elle a vraiment ressenti.",
                        commentUtiliser: [
                          "Le souvenir d'enfance est reconstruit autant que retrouvé",
                          "Se souvenir avec sincérité demande de se méfier de soi",
                          "Le regard adulte transforme l'enfance qu'il raconte",
                        ],
                        formulationType: "Dans Enfance, Sarraute interroge sans cesse ses propres souvenirs : preuve que la mémoire de l'enfance est reconstruite autant que retrouvée.",
                      },
                      {
                        title: "L'Enfant · Jules Vallès · 1879",
                        genre: "Roman autobiographique",
                        enBref: "Premier volet d'une trilogie. Le jeune Jacques Vingtras grandit entre une mère dure et une école brutale ; le roman raconte une enfance de souffrances et d'humiliations, à rebours de l'enfance idéalisée.",
                        commentUtiliser: [
                          "L'enfance n'est pas toujours un paradis",
                          "Le souvenir d'enfance peut être douloureux",
                          "Une éducation rude marque toute une vie",
                        ],
                        formulationType: "À l'inverse de l'enfance heureuse, L'Enfant de Vallès rappelle que ce premier âge peut être un temps de souffrance, ce qui nuance toute idéalisation.",
                      },
                      {
                        title: "Les Contemplations · Victor Hugo · 1856",
                        genre: "Recueil poétique",
                        enBref: "Recueil de poèmes partagé entre « Autrefois » (le bonheur, l'amour, la jeunesse) et « Aujourd'hui », marqué par la mort de sa fille Léopoldine. Le célèbre « Demain, dès l'aube » dit la marche silencieuse du père vers la tombe de son enfant.",
                        commentUtiliser: [
                          "Écrire prolonge le souvenir des êtres aimés",
                          "La poésie donne une forme au deuil",
                          "Se souvenir, c'est rester fidèle aux disparus",
                        ],
                        formulationType: "On peut citer « Demain, dès l'aube » des Contemplations, où Hugo marche en pensée vers la tombe de sa fille : le souvenir y devient une fidélité à l'absent.",
                      },
                      {
                        title: "W ou le souvenir d'enfance · Perec · 1975",
                        genre: "Récit autobiographique",
                        enBref: "Perec alterne deux récits : une fiction (une île régie par le sport et la contrainte) et des fragments autobiographiques sur son enfance d'orphelin, marquée par la disparition de ses parents pendant la guerre. L'écriture cerne un vide qu'elle ne peut combler.",
                        commentUtiliser: [
                          "On peut écrire pour cerner ce que la mémoire a perdu",
                          "Le souvenir intime se mêle à la grande Histoire",
                          "Dire l'absence est parfois le seul souvenir possible",
                        ],
                        formulationType: "Dans W ou le souvenir d'enfance, Perec écrit autour d'un vide : on peut chercher, par l'écriture, à dire ce que la mémoire a perdu.",
                      },
                      {
                        title: "Les 400 coups · François Truffaut · 1959",
                        genre: "Film",
                        enBref: "Antoine Doinel, un garçon de douze ans incompris de ses parents comme de l'école, multiplie les bêtises et finit par fuguer. Truffaut filme une enfance blessée et la soif de liberté d'un enfant que personne n'écoute. Le film s'achève sur son visage, face à la mer.",
                        commentUtiliser: [
                          "L'enfance n'est pas toujours un âge protégé",
                          "Un enfant cherche d'abord à être entendu",
                          "Le regard des adultes façonne l'enfant qu'ils jugent",
                        ],
                        formulationType: "Avec Les 400 coups de Truffaut, où un enfant fugue faute d'être écouté, on peut rappeler que l'enfance est aussi un âge de solitude et de révolte.",
                      },
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                number: "③",
                title: "Autrui et la rencontre",
                blocks: [
                  {
                    type: "referenceGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "Le Petit Prince · Saint-Exupéry · 1943",
                        genre: "Conte",
                        enBref: "Un aviateur tombé en panne dans le désert rencontre un petit prince venu d'une autre planète. Au fil de leurs échanges, un renard lui enseigne que l'on ne crée des liens qu'en prenant le temps d'« apprivoiser » l'autre, et que l'essentiel est invisible.",
                        commentUtiliser: [
                          "Le lien à l'autre se construit dans le temps",
                          "On ne connaît vraiment que ce qu'on a pris le temps d'aimer",
                          "L'essentiel d'une relation reste invisible",
                        ],
                        formulationType: "Comme le renard du Petit Prince, qui demande à être « apprivoisé », on peut montrer que le lien à autrui se construit dans le temps et la patience.",
                      },
                      {
                        title: "Les Essais, « De l'amitié » · Montaigne · 1580",
                        genre: "Essai",
                        enBref: "Dans ce chapitre, Montaigne évoque son amitié avec Étienne de La Boétie, mort jeune, comme une fusion rare et parfaite de deux êtres, qu'il ne sait expliquer autrement que par leur seule rencontre.",
                        commentUtiliser: [
                          "L'amitié vraie est une rencontre rare et choisie",
                          "L'ami est comme un autre soi-même",
                          "Certains liens échappent à toute explication",
                        ],
                        formulationType: "Pour dire la force d'une amitié choisie, on peut rappeler le « parce que c'était lui, parce que c'était moi » par lequel Montaigne résume son lien à La Boétie.",
                      },
                      {
                        title: "Le Racisme expliqué à ma fille · Ben Jelloun · 1998",
                        genre: "Essai (dialogue)",
                        enBref: "Sous la forme d'un dialogue avec sa fille de dix ans, l'auteur répond simplement à ses questions sur le racisme : d'où il vient, pourquoi on a peur de ce qui est différent, et comment la connaissance de l'autre fait reculer les préjugés.",
                        commentUtiliser: [
                          "C'est l'ignorance qui nourrit le rejet de l'autre",
                          "Connaître la différence, c'est déjà la respecter",
                          "La tolérance s'apprend et s'explique",
                        ],
                        formulationType: "Comme le rappelle Ben Jelloun dans Le Racisme expliqué à ma fille, c'est souvent l'ignorance qui nourrit le rejet : connaître l'autre, c'est déjà le respecter.",
                      },
                      {
                        title: "Candide · Voltaire · 1759",
                        genre: "Conte philosophique",
                        enBref: "Chassé de son château, le naïf Candide parcourt le monde et accumule les malheurs (guerres, catastrophes, injustices). Au fil des rencontres, il abandonne l'idée que « tout est pour le mieux » et conclut qu'il faut « cultiver son jardin ».",
                        commentUtiliser: [
                          "On se forme au contact des autres et du monde",
                          "La rencontre de l'autre défait nos préjugés",
                          "Découvrir le monde, c'est perdre ses illusions",
                        ],
                        formulationType: "Le parcours de Candide montre que c'est par la rencontre des autres et du monde qu'un être se forme et révise ses illusions.",
                      },
                      {
                        title: "Intouchables · Olivier Nakache et Éric Toledano · 2011",
                        genre: "Film",
                        enBref: "Un homme riche devenu tétraplégique engage comme aide à domicile un jeune homme de banlieue sans diplôme. Tout les sépare, mais une amitié naît, faite d'humour et de respect. Le film montre que la rencontre de deux mondes opposés peut transformer chacun.",
                        commentUtiliser: [
                          "La rencontre rapproche des mondes que tout sépare",
                          "On grandit au contact de qui ne nous ressemble pas",
                          "Le lien vrai ignore les différences sociales",
                        ],
                        formulationType: "Avec Intouchables, où deux hommes que tout oppose se lient d'amitié, on peut montrer que la rencontre de l'autre, si différent soit-il, transforme chacun.",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "arts-mots-pensee",
            label: "Arts, mots, pensée",
            icon: "",
            blocks: [
              { type: "callout", variant: "info", icon: "", text: "Thèmes : l'art et le réel · le pouvoir des mots et la lecture · le progrès et la technique." },
              {
                type: "subsection",
                number: "①",
                title: "L'art et le réel",
                blocks: [
                  {
                    type: "referenceGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "Comment Wang-Fô fut sauvé · Yourcenar · 1938",
                        genre: "Nouvelle",
                        enBref: "Un vieux peintre chinois est condamné à mort par l'empereur, qui lui reproche d'avoir peint un monde plus beau que le vrai. Sommé d'achever un tableau, le peintre s'embarque sur la barque qu'il vient d'y représenter et disparaît dans son œuvre : l'art l'emporte sur le réel.",
                        commentUtiliser: [
                          "L'art ne copie pas le réel, il en crée un autre",
                          "L'œuvre peut être plus puissante que le monde réel",
                          "L'artiste s'oppose parfois au pouvoir",
                        ],
                        formulationType: "Comme le peintre de Comment Wang-Fô fut sauvé, qui s'évade dans sa propre toile, on peut soutenir que l'art ne copie pas le réel : il en crée un autre, parfois plus fort.",
                      },
                      {
                        title: "Les Fleurs du mal · Baudelaire · 1857",
                        genre: "Recueil poétique",
                        enBref: "Dans ce recueil, Baudelaire cherche à tirer la beauté de sujets réputés laids ou douloureux (la ville, la misère, le mal). Son art transforme la matière la plus banale ou la plus sombre : il veut, selon son projet, faire « de la boue » de « l'or ».",
                        commentUtiliser: [
                          "L'art transforme le réel plutôt qu'il ne le copie",
                          "On peut tirer la beauté de ce qui semble laid",
                          "Le poète donne sens et forme au monde",
                        ],
                        formulationType: "Avec Baudelaire, qui voulait faire de « la boue » de « l'or », on peut montrer que l'art transforme le réel plutôt qu'il ne le reproduit.",
                      },
                      {
                        title: "Le Portrait de Dorian Gray · Wilde · 1890",
                        genre: "Roman",
                        enBref: "Un jeune homme d'une grande beauté garde un visage intact tandis que son portrait, caché, vieillit et se déforme à chacune de ses fautes. L'œuvre interroge les liens troubles entre l'art, l'apparence et la vérité morale.",
                        commentUtiliser: [
                          "L'apparence peut masquer la vérité",
                          "L'art révèle ce que le visage cache",
                          "La beauté n'est pas la garantie du bien",
                        ],
                        formulationType: "Le Portrait de Dorian Gray, où le tableau porte les vices que le visage dissimule, interroge le lien trouble entre l'image, la beauté et la vérité.",
                      },
                      {
                        title: "L'Assommoir · Émile Zola · 1877",
                        genre: "Roman naturaliste",
                        enBref: "Zola suit la lente déchéance de Gervaise, blanchisseuse à Paris, peu à peu détruite par la misère et l'alcool. Fidèle au naturalisme, il veut montrer la réalité sociale telle qu'elle est, sans l'embellir.",
                        commentUtiliser: [
                          "La littérature peut montrer le réel sans l'embellir",
                          "Le roman peut servir de document sur la société",
                          "Décrire la misère, c'est déjà la dénoncer",
                        ],
                        formulationType: "Avec L'Assommoir, Zola montre que la littérature peut servir à représenter le réel le plus dur, comme un document sur la condition ouvrière.",
                      },
                      {
                        title: "La Trahison des images · René Magritte · 1929",
                        genre: "Peinture",
                        enBref: "Magritte peint une pipe très réaliste, sous laquelle il écrit : « Ceci n'est pas une pipe. » Et il a raison : ce n'est pas une pipe, mais l'image d'une pipe. Le tableau rappelle, avec malice, qu'une représentation n'est jamais la chose réelle.",
                        commentUtiliser: [
                          "Une image n'est pas le réel, mais sa représentation",
                          "L'art joue avec notre façon de voir le monde",
                          "Représenter, ce n'est pas reproduire",
                        ],
                        formulationType: "Avec « Ceci n'est pas une pipe » de Magritte, on peut rappeler qu'une œuvre ne se confond jamais avec le réel : elle en propose une image, pas un double.",
                      },
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                number: "②",
                title: "Le pouvoir des mots et la lecture",
                blocks: [
                  {
                    type: "referenceGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "Fables · La Fontaine · 1668",
                        genre: "Recueil de fables",
                        enBref: "Recueil de courts récits, souvent mettant en scène des animaux, qui se concluent par une morale. Sous des histoires plaisantes, La Fontaine critique la société de son temps et fait réfléchir : c'est l'art de l'apologue, instruire en amusant.",
                        commentUtiliser: [
                          "Un récit plaisant convainc mieux qu'un long discours",
                          "On peut critiquer la société en racontant une histoire",
                          "La fiction est un détour efficace pour dire le vrai",
                        ],
                        formulationType: "Comme les Fables de La Fontaine, qui font passer une leçon par une petite histoire, on peut montrer qu'un récit plaisant convainc parfois mieux qu'un long discours.",
                      },
                      {
                        title: "Les Misérables · Victor Hugo · 1862",
                        genre: "Roman",
                        enBref: "Vaste roman qui suit l'ancien forçat Jean Valjean, poursuivi toute sa vie alors qu'il cherche à se racheter. À travers son destin et celui d'autres personnages (Fantine, Cosette, Gavroche), Hugo dénonce la misère et l'injustice du XIXe siècle.",
                        commentUtiliser: [
                          "La littérature peut éveiller les consciences",
                          "Les mots peuvent se mettre au service d'une cause",
                          "Raconter une injustice, c'est la combattre",
                        ],
                        formulationType: "Avec Les Misérables, Hugo met l'art du roman au service d'une cause : les mots peuvent éveiller les consciences sur la misère et l'injustice.",
                      },
                      {
                        title: "Cyrano de Bergerac · Rostand · 1897",
                        genre: "Théâtre",
                        enBref: "Cyrano, fin lettré et bretteur, s'estime trop laid (son grand nez) pour être aimé de Roxane. Il prête alors ses mots et ses lettres au beau mais maladroit Christian pour la séduire : c'est le verbe, et non le visage, qui touche le cœur.",
                        commentUtiliser: [
                          "Les mots peuvent séduire à eux seuls",
                          "L'éloquence l'emporte parfois sur l'apparence",
                          "Le langage donne un véritable pouvoir",
                        ],
                        formulationType: "Cyrano de Bergerac, qui conquiert Roxane par les mots d'un autre, illustre la puissance de l'éloquence, capable de séduire à elle seule.",
                      },
                      {
                        title: "Fahrenheit 451 · Ray Bradbury · 1953",
                        genre: "Roman dystopique",
                        enBref: "Dans une société future, les pompiers ne combattent plus le feu : ils brûlent les livres, devenus interdits parce qu'ils font penser. Un pompier, Montag, se met à les lire en secret et entre en rébellion. La lecture y devient un acte de résistance.",
                        commentUtiliser: [
                          "Les livres sont liés à la liberté de penser",
                          "Interdire la lecture, c'est museler les esprits",
                          "Lire peut devenir un acte de résistance",
                        ],
                        formulationType: "Fahrenheit 451, où l'on brûle les livres pour empêcher de penser, montre a contrario combien la lecture est liée à la liberté de l'esprit.",
                      },
                      {
                        title: "Comme un roman · Daniel Pennac · 1992",
                        genre: "Essai",
                        enBref: "Essai sur la lecture où Pennac s'interroge sur le dégoût que l'école peut créer pour les livres et propose de redonner le goût de lire. Il y formule des « droits du lecteur » : sauter des pages, relire, ou ne pas finir un livre.",
                        commentUtiliser: [
                          "On lit mieux quand on lit par plaisir",
                          "Imposer la lecture peut en dégoûter",
                          "Le goût de lire se transmet, il ne se force pas",
                        ],
                        formulationType: "Comme le rappelle Pennac dans Comme un roman avec ses « droits du lecteur », on lit d'autant mieux qu'on lit librement, par plaisir.",
                      },
                      {
                        title: "Le Discours d'un roi · Tom Hooper · 2010",
                        genre: "Film",
                        enBref: "Le futur roi George VI souffre d'un bégaiement qui l'empêche de parler en public. Aidé d'un orthophoniste, il apprend à maîtriser sa parole, jusqu'au discours capital qu'il doit prononcer à la radio à l'entrée en guerre. Trouver sa voix devient un combat.",
                        commentUtiliser: [
                          "Savoir parler, c'est conquérir une forme de pouvoir",
                          "La parole se travaille, elle ne va pas de soi",
                          "Un mot juste, au bon moment, peut porter tout un peuple",
                        ],
                        formulationType: "Avec Le Discours d'un roi, où un souverain doit vaincre son bégaiement pour s'adresser à son peuple, on peut illustrer combien la maîtrise de la parole est une forme de pouvoir.",
                      },
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                number: "③",
                title: "Le progrès et la technique",
                blocks: [
                  {
                    type: "referenceGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "Vingt mille lieues sous les mers · Jules Verne · 1870",
                        genre: "Roman d'aventures",
                        enBref: "À bord du Nautilus, un sous-marin extraordinaire commandé par l'énigmatique capitaine Nemo, des passagers explorent les fonds marins. Le roman célèbre l'audace de la science et le rêve de tout découvrir.",
                        commentUtiliser: [
                          "La science fait rêver et ouvre le monde",
                          "Le progrès nourrit l'imaginaire",
                          "L'exploration repousse les limites du connu",
                        ],
                        formulationType: "Avec le Nautilus de Jules Verne, on peut illustrer l'enthousiasme pour le progrès : la science y apparaît comme une promesse de découvertes.",
                      },
                      {
                        title: "Frankenstein · Mary Shelley · 1818",
                        genre: "Roman fantastique",
                        enBref: "Le savant Victor Frankenstein parvient à donner la vie à une créature assemblée de morceaux de cadavres. Horrifié, il l'abandonne ; rejetée de tous, la créature devient malheureuse puis vengeresse. La science y crée un monstre faute de conscience.",
                        commentUtiliser: [
                          "Une science sans conscience peut devenir un danger",
                          "Le créateur est responsable de ce qu'il crée",
                          "Un progrès incontrôlé peut se retourner contre l'homme",
                        ],
                        formulationType: "À l'inverse, Frankenstein met en garde : la créature abandonnée par son créateur montre les dangers d'un progrès qui oublie la responsabilité.",
                      },
                      {
                        title: "Le Meilleur des mondes · Aldous Huxley · 1932",
                        genre: "Roman dystopique",
                        enBref: "Dans une société future, les humains sont fabriqués en série, classés par catégories et maintenus heureux par une drogue, le soma. Toute souffrance a disparu, mais aussi la liberté, l'art et l'amour véritable.",
                        commentUtiliser: [
                          "Le confort peut s'acheter au prix de la liberté",
                          "Un progrès poussé à l'extrême peut déshumaniser",
                          "Un bonheur imposé n'est pas le vrai bonheur",
                        ],
                        formulationType: "Le Meilleur des mondes montre un progrès qui se retourne contre l'homme : la société y achète le bonheur au prix de la liberté.",
                      },
                      {
                        title: "Pantagruel (lettre de Gargantua) · Rabelais · 1532",
                        genre: "Roman",
                        enBref: "Dans une lettre célèbre, le géant Gargantua encourage son fils Pantagruel à profiter des savoirs nouveaux de la Renaissance et à tout apprendre, mais lui rappelle que le savoir doit s'accompagner de morale.",
                        commentUtiliser: [
                          "Le savoir doit s'accompagner de conscience morale",
                          "S'instruire est une chance à saisir",
                          "Le progrès vaut par l'usage que l'on en fait",
                        ],
                        formulationType: "Avec la formule de Rabelais, « science sans conscience n'est que ruine de l'âme », on peut rappeler que le progrès du savoir doit aller de pair avec la morale.",
                      },
                      {
                        title: "Les Temps modernes · Charlie Chaplin · 1936",
                        genre: "Film",
                        enBref: "Ouvrier à la chaîne, Charlot répète le même geste jusqu'à en devenir fou, avant d'être avalé par les rouages d'une machine géante. Chaplin tourne en dérision le travail industriel qui réduit l'homme à un automate. Le rire y dénonce un progrès qui broie l'ouvrier.",
                        commentUtiliser: [
                          "Le progrès technique peut déshumaniser le travail",
                          "La machine censée servir l'homme finit par l'asservir",
                          "Le rire peut dénoncer une réalité sociale",
                        ],
                        formulationType: "Avec Les Temps modernes, où Charlot est happé par les rouages de la machine, on peut montrer qu'un progrès mal maîtrisé risque de réduire l'homme à un simple outil.",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "individu-et-monde",
            label: "L'individu et le monde",
            icon: "",
            blocks: [
              { type: "callout", variant: "info", icon: "", text: "Thèmes : le voyage et l'ailleurs · la nature et l'environnement · la liberté · le bonheur." },
              {
                type: "subsection",
                number: "①",
                title: "Le voyage et l'ailleurs",
                blocks: [
                  {
                    type: "referenceGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "L'Odyssée · Homère · Antiquité",
                        genre: "Épopée",
                        enBref: "Après la guerre de Troie, le héros Ulysse met dix ans à rentrer chez lui, à Ithaque, retardé par mille épreuves (le cyclope Polyphème, les sirènes, les tempêtes). Le voyage est une longue suite d'obstacles qui éprouvent sa ruse et son courage.",
                        commentUtiliser: [
                          "Voyager, c'est s'éprouver et grandir",
                          "L'obstacle révèle le caractère",
                          "Tout grand voyage est une forme de quête",
                        ],
                        formulationType: "Le voyage d'Ulysse dans L'Odyssée montre que partir, c'est s'éprouver : chaque obstacle franchi fait grandir le voyageur.",
                      },
                      {
                        title: "Les Essais, « Des cannibales » · Montaigne · 1580",
                        genre: "Essai",
                        enBref: "À partir de récits de voyageurs sur les peuples du Nouveau Monde, Montaigne renverse les préjugés : ce que nous appelons « sauvage » ou « barbare » n'est souvent que ce qui diffère de nos habitudes.",
                        commentUtiliser: [
                          "Découvrir l'ailleurs invite à se remettre en question",
                          "Juger l'autre, c'est souvent juger ce qu'on ne connaît pas",
                          "Aucune culture n'a le monopole de la civilisation",
                        ],
                        formulationType: "Comme Montaigne dans « Des cannibales », on peut montrer que découvrir l'ailleurs invite à relativiser ses propres habitudes plutôt qu'à juger l'autre.",
                      },
                      {
                        title: "« L'Invitation au voyage » · Baudelaire · 1857",
                        genre: "Poème",
                        enBref: "Dans ce poème des Fleurs du mal, Baudelaire rêve, pour la femme aimée, un pays idéal où tout ne serait qu'« ordre et beauté, luxe, calme et volupté ». Le voyage y est moins un déplacement réel qu'une évasion par l'imagination.",
                        commentUtiliser: [
                          "Le plus beau voyage est parfois celui qu'on rêve",
                          "L'imagination ouvre un ailleurs idéal",
                          "Le désir d'évasion révèle un manque du présent",
                        ],
                        formulationType: "Avec « L'Invitation au voyage » de Baudelaire, on peut évoquer un voyage qui se fait dans l'imagination : l'ailleurs rêvé vaut parfois mieux que le réel.",
                      },
                      {
                        title: "Le Tour du monde en 80 jours · Jules Verne · 1873",
                        genre: "Roman d'aventures",
                        enBref: "Le flegmatique Phileas Fogg parie une fortune qu'il fera le tour du monde en quatre-vingts jours. Commence alors une course contre la montre, semée de péripéties et de découvertes, à travers tous les continents.",
                        commentUtiliser: [
                          "L'aventure naît du défi qu'on se lance",
                          "Le progrès a rapproché et rétréci le monde",
                          "Partir, c'est aussi se découvrir soi-même",
                        ],
                        formulationType: "Le pari de Phileas Fogg illustre le goût de l'aventure autant que la fierté d'une époque qui croit le monde à sa portée.",
                      },
                      {
                        title: "Le Voyage dans la Lune · Georges Méliès · 1902",
                        genre: "Film",
                        enBref: "Aux tout débuts du cinéma, Méliès imagine des savants qui partent sur la Lune dans un obus. Avec des décors peints et des trucages ingénieux, il invente un voyage extraordinaire et purement imaginaire. C'est l'un des premiers films à faire rêver d'ailleurs.",
                        commentUtiliser: [
                          "Le voyage le plus beau est parfois celui qu'on invente",
                          "L'imagination repousse les frontières du possible",
                          "Rêver d'ailleurs nourrit l'envie de découvrir",
                        ],
                        formulationType: "Avec Le Voyage dans la Lune de Méliès, on peut évoquer un ailleurs entièrement rêvé : l'imagination ouvre des horizons que le réel ne permet pas encore.",
                      },
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                number: "②",
                title: "La nature et l'environnement",
                blocks: [
                  {
                    type: "referenceGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "Les Rêveries du promeneur solitaire · Rousseau · 1782",
                        genre: "Récit autobiographique",
                        enBref: "Dans ce dernier livre, Rousseau, retiré et solitaire, raconte ses promenades et la paix qu'il trouve dans la nature, loin des hommes qui l'ont déçu. Il y goûte un bonheur fait de contemplation et de sentiment d'exister.",
                        commentUtiliser: [
                          "La nature est un refuge contre la dureté des hommes",
                          "Le contact de la nature apaise et console",
                          "On peut être heureux loin de la société",
                        ],
                        formulationType: "Comme Rousseau dans ses Rêveries, on peut présenter la nature comme un refuge où l'on se ressource, loin de l'agitation des hommes.",
                      },
                      {
                        title: "« Le Lac » · Lamartine · 1820",
                        genre: "Poème",
                        enBref: "Revenu seul au bord d'un lac où il avait été heureux avec la femme qu'il aimait (aujourd'hui mourante), le poète supplie la nature de garder le souvenir de ces heures, face au temps qui emporte tout.",
                        commentUtiliser: [
                          "La nature garde la trace de nos émotions",
                          "Devant la nature, on mesure la fuite du temps",
                          "Le paysage peut prolonger un souvenir",
                        ],
                        formulationType: "Dans « Le Lac », Lamartine confie à la nature le soin de garder son souvenir : elle devient la confidente du sentiment et le témoin du temps qui fuit.",
                      },
                      {
                        title: "« Correspondances » · Baudelaire · 1857",
                        genre: "Poème (sonnet)",
                        enBref: "Dans ce sonnet des Fleurs du mal, Baudelaire présente la nature comme un « temple » où les parfums, les couleurs et les sons « se répondent ». Le monde est plein de signes que le poète sait déchiffrer.",
                        commentUtiliser: [
                          "La nature est pleine de signes à déchiffrer",
                          "Le monde sensible relie l'homme à plus grand que lui",
                          "Le poète révèle le sens caché des choses",
                        ],
                        formulationType: "Avec « Correspondances », où « la Nature est un temple », on peut montrer que la nature n'est pas qu'un décor : elle parle à qui sait la lire.",
                      },
                      {
                        title: "L'Homme qui plantait des arbres · Giono · 1953",
                        genre: "Nouvelle",
                        enBref: "Un berger solitaire, Elzéard Bouffier, plante patiemment, jour après jour, des milliers de glands dans une région aride et abandonnée. En quelques décennies, une forêt renaît et la vie revient : un seul homme a transformé un paysage.",
                        commentUtiliser: [
                          "Une action patiente peut réparer la nature",
                          "Un seul individu peut changer un paysage",
                          "Prendre soin du vivant est un acte d'espérance",
                        ],
                        formulationType: "L'exemple d'Elzéard Bouffier, dans L'Homme qui plantait des arbres, montre qu'une action patiente et désintéressée peut réparer la nature.",
                      },
                      {
                        title: "Le Voyageur contemplant une mer de nuages · Caspar David Friedrich · 1818",
                        genre: "Peinture",
                        enBref: "De dos, un homme se tient au sommet d'une montagne et contemple une mer de nuages qui s'étend à l'infini. Le tableau, emblème du romantisme, place l'individu face à une nature immense et mystérieuse, à la fois minuscule devant elle et bouleversé par sa beauté.",
                        commentUtiliser: [
                          "Face à la nature, l'homme mesure sa petitesse",
                          "L'immensité de la nature inspire un sentiment de grandeur",
                          "Contempler le paysage élève et apaise",
                        ],
                        formulationType: "Avec Le Voyageur de Friedrich, seul face à une mer de nuages, on peut montrer combien la nature, par son immensité, ramène l'homme à sa juste place.",
                      },
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                number: "③",
                title: "La liberté",
                blocks: [
                  {
                    type: "referenceGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "« Le Loup et le Chien » (Fables) · La Fontaine · 1668",
                        genre: "Fable",
                        enBref: "Un loup affamé envie d'abord le chien gras et bien nourri, et songe à le suivre chez son maître. Mais en apercevant la marque que le collier a laissée sur son cou, il comprend le prix de ce confort et s'enfuit pour rester libre.",
                        commentUtiliser: [
                          "La liberté vaut mieux que le confort",
                          "L'indépendance a un prix que l'on accepte",
                          "Mieux vaut être libre et pauvre que dépendant",
                        ],
                        formulationType: "Comme le loup de la fable, qui refuse le collier malgré la faim, on peut défendre que la liberté vaut souvent plus que la sécurité.",
                      },
                      {
                        title: "Traité sur la tolérance · Voltaire · 1763",
                        genre: "Essai (texte d'idées)",
                        enBref: "Voltaire écrit ce texte après l'exécution de Jean Calas, un protestant condamné à tort par fanatisme. Il y plaide pour la tolérance, la justice et la liberté de conscience contre l'intolérance religieuse.",
                        commentUtiliser: [
                          "La liberté de conscience se défend contre le fanatisme",
                          "Lutter contre l'injustice est un devoir",
                          "La raison doit l'emporter sur les préjugés",
                        ],
                        formulationType: "Avec le Traité sur la tolérance, écrit pour réhabiliter Calas, on peut rappeler que la liberté de conscience se défend contre les fanatismes.",
                      },
                      {
                        title: "« Liberté » · Paul Éluard · 1942",
                        genre: "Poème",
                        enBref: "Écrit pendant l'Occupation, ce poème énumère, strophe après strophe, tous les lieux et objets sur lesquels le poète écrit un mot, révélé seulement au dernier vers : « Liberté ». Le poème fut diffusé comme un appel à la résistance.",
                        commentUtiliser: [
                          "La poésie peut devenir un acte de résistance",
                          "L'espoir de liberté survit à l'oppression",
                          "Les mots arment ceux qui résistent",
                        ],
                        formulationType: "Le poème « Liberté » d'Éluard, qui répète « j'écris ton nom », montre que la poésie peut devenir un cri d'espérance et un acte de résistance.",
                      },
                      {
                        title: "1984 · George Orwell · 1949",
                        genre: "Roman dystopique",
                        enBref: "Dans un État totalitaire dirigé par « Big Brother », tout est surveillé, le passé est sans cesse réécrit et même la langue est appauvrie pour empêcher de penser. Winston tente de garder sa liberté intérieure, avant d'être brisé par le régime.",
                        commentUtiliser: [
                          "Sans liberté, la pensée elle-même est menacée",
                          "Tout surveiller, c'est déjà soumettre",
                          "Contrôler la langue, c'est contrôler les esprits",
                        ],
                        formulationType: "Avec 1984 et son « Big Brother », on peut montrer ce que devient une société qui supprime toute liberté : la surveillance y détruit jusqu'à la pensée.",
                      },
                      {
                        title: "Cahier d'un retour au pays natal · Césaire · 1939",
                        genre: "Poème",
                        enBref: "Long poème où Césaire, de retour vers sa Martinique natale, dit la souffrance et la dignité des peuples noirs et colonisés. Il y revendique fièrement une identité, la « négritude », contre le mépris colonial.",
                        commentUtiliser: [
                          "La liberté passe par la reconquête de la dignité",
                          "S'affirmer, c'est résister à l'oppression",
                          "La parole rend leur fierté aux opprimés",
                        ],
                        formulationType: "Avec le Cahier d'un retour au pays natal de Césaire, on peut évoquer la liberté comme reconquête de la dignité face à l'oppression.",
                      },
                      {
                        title: "La Liberté guidant le peuple · Eugène Delacroix · 1830",
                        genre: "Peinture",
                        enBref: "Au milieu des combats de la révolution de 1830, une femme en marche, drapeau tricolore à la main, entraîne le peuple par-dessus les barricades. Delacroix transforme la liberté en une figure vivante et héroïque, qui guide une foule prête à tout pour la conquérir.",
                        commentUtiliser: [
                          "La liberté se conquiert, parfois au prix du combat",
                          "Une image peut incarner un idéal collectif",
                          "Un peuple peut se lever pour défendre ses droits",
                        ],
                        formulationType: "Avec La Liberté guidant le peuple de Delacroix, on peut montrer comment un idéal abstrait devient une figure incarnée, capable d'entraîner tout un peuple.",
                      },
                      {
                        title: "1789 · Ariane Mnouchkine et le Théâtre du Soleil · 1970",
                        genre: "Théâtre (mise en scène)",
                        enBref: "Dans ce spectacle célèbre, la troupe du Théâtre du Soleil raconte la Révolution française du point de vue du peuple, joué au milieu des spectateurs sur plusieurs tréteaux à la fois. Le théâtre devient une fête populaire qui fait revivre la conquête de la liberté.",
                        commentUtiliser: [
                          "Le théâtre peut faire revivre l'histoire collective",
                          "La liberté se raconte aussi du côté du peuple",
                          "Le spectacle vivant rassemble et fait réfléchir",
                        ],
                        formulationType: "Avec le spectacle 1789 du Théâtre du Soleil, qui rejoue la Révolution au milieu du public, on peut montrer que le théâtre vivant ravive la mémoire des combats pour la liberté.",
                      },
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                number: "④",
                title: "Le bonheur",
                blocks: [
                  {
                    type: "referenceGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "Candide · Voltaire · 1759",
                        genre: "Conte philosophique",
                        enBref: "Après avoir cru, comme son maître Pangloss, que « tout est pour le mieux », Candide traverse tant de malheurs qu'il renonce aux belles théories. Il finit par s'installer dans une petite ferme et conclut qu'« il faut cultiver notre jardin ».",
                        commentUtiliser: [
                          "Le bonheur tient à l'action utile plus qu'aux grandes idées",
                          "Mieux vaut agir que rêver d'un monde parfait",
                          "La sagesse est de cultiver son jardin",
                        ],
                        formulationType: "La leçon finale de Candide, « il faut cultiver notre jardin », suggère que le bonheur tient moins aux grandes idées qu'à l'action utile et mesurée.",
                      },
                      {
                        title: "« Le Savetier et le Financier » (Fables) · La Fontaine · 1678",
                        genre: "Fable",
                        enBref: "Un savetier pauvre chante toute la journée, au grand dam de son riche voisin financier qui, lui, ne dort pas. Le financier lui offre de l'argent ; aussitôt, le savetier perd le sommeil à force d'inquiétude, et finit par rendre la somme pour retrouver sa joie.",
                        commentUtiliser: [
                          "La richesse n'achète pas le bonheur",
                          "L'argent peut surtout apporter le souci",
                          "Le bonheur simple vaut mieux que les biens",
                        ],
                        formulationType: "La fable du Savetier et du Financier illustre que la richesse n'achète pas le bonheur : le pauvre chante, le riche s'inquiète.",
                      },
                      {
                        title: "Les Rêveries du promeneur solitaire · Rousseau · 1782",
                        genre: "Récit autobiographique",
                        enBref: "Rousseau y décrit des moments de bonheur parfait, sans désir ni inquiétude, où, au bord d'un lac ou en se promenant, il lui suffit de sentir qu'il existe pour être pleinement heureux.",
                        commentUtiliser: [
                          "Le bonheur tient parfois au seul sentiment d'exister",
                          "Les instants simples suffisent au bonheur",
                          "La paix intérieure vaut mieux que l'agitation",
                        ],
                        formulationType: "Comme Rousseau dans ses Rêveries, on peut défendre un bonheur fait d'instants simples, où il suffit de se sentir exister.",
                      },
                      {
                        title: "Le Fabuleux Destin d'Amélie Poulain · Jean-Pierre Jeunet · 2001",
                        genre: "Film",
                        enBref: "Amélie, jeune serveuse parisienne un peu rêveuse, décide de semer le bonheur autour d'elle par de petites attentions discrètes. En rendant les autres heureux, elle apprend peu à peu à saisir sa propre chance. Le film célèbre la beauté des petits riens du quotidien.",
                        commentUtiliser: [
                          "Le bonheur tient souvent à de petites choses",
                          "Rendre les autres heureux peut combler à son tour",
                          "Savoir voir la beauté du quotidien",
                        ],
                        formulationType: "Avec Le Fabuleux Destin d'Amélie Poulain, qui sème le bonheur par de petits gestes, on peut défendre l'idée que la joie se loge dans les petits riens du quotidien.",
                      },
                      {
                        title: "What a Wonderful World · Louis Armstrong · 1967",
                        genre: "Chanson",
                        enBref: "D'une voix douce, Louis Armstrong énumère les choses simples qui font la beauté du monde : le vert des arbres, le rouge des roses, le sourire des passants, les enfants qui grandissent. La chanson invite à s'émerveiller de ce qui nous entoure chaque jour.",
                        commentUtiliser: [
                          "Le bonheur naît de l'émerveillement devant le simple",
                          "Apprendre à voir la beauté ordinaire du monde",
                          "La gratitude rend heureux",
                        ],
                        formulationType: "Avec What a Wonderful World de Louis Armstrong, qui s'émerveille des choses les plus simples, on peut rappeler que le bonheur tient souvent à savoir regarder le monde.",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "societe-et-histoire",
            label: "Société et histoire",
            icon: "",
            blocks: [
              { type: "callout", variant: "info", icon: "", text: "Thèmes : la condition féminine et l'égalité · la guerre et le témoignage." },
              {
                type: "subsection",
                number: "①",
                title: "La condition féminine et l'égalité",
                blocks: [
                  {
                    type: "referenceGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "La Barbe bleue (Contes) · Charles Perrault · 1697",
                        genre: "Conte",
                        enBref: "Un seigneur, déjà veuf de plusieurs femmes, épouse une jeune fille et lui interdit d'ouvrir une porte. Elle désobéit, découvre les corps des précédentes épouses, et n'échappe à la mort, décidée par son mari, que grâce à l'arrivée de ses frères.",
                        commentUtiliser: [
                          "Un texte ancien peut encore éclairer nos questions",
                          "La littérature met en scène la domination subie",
                          "La solidarité peut sauver de l'oppression",
                        ],
                        formulationType: "La scène de La Barbe bleue, où l'épouse implore « plus pâle que la mort » un mari tout-puissant, donne à voir un rapport de domination dont la portée reste actuelle.",
                      },
                      {
                        title: "L'École des femmes · Molière · 1662",
                        genre: "Théâtre (comédie)",
                        enBref: "Arnolphe a élevé la jeune Agnès dans l'ignorance complète, pour en faire une épouse soumise qui ne saurait le tromper. Mais Agnès tombe amoureuse d'un jeune homme et déjoue tous ses plans : la nature et l'amour l'emportent sur le contrôle.",
                        commentUtiliser: [
                          "Refuser l'éducation aux femmes, c'est les vouloir soumises",
                          "L'aspiration à la liberté déjoue le contrôle",
                          "L'égalité passe par l'accès au savoir",
                        ],
                        formulationType: "Avec L'École des femmes, où Arnolphe veut une épouse « ignorante », on peut montrer comment on a longtemps refusé aux femmes l'éducation qui les rendrait libres.",
                      },
                      {
                        title: "Déclaration des droits de la femme · Olympe de Gouges · 1791",
                        genre: "Texte d'idées",
                        enBref: "Constatant que la Déclaration des droits de l'homme de 1789 oublie les femmes, Olympe de Gouges en rédige une version pour elles, réclamant l'égalité des droits. Elle paiera son engagement de sa vie, guillotinée en 1793.",
                        commentUtiliser: [
                          "Le combat pour l'égalité des sexes est ancien",
                          "Les grands principes oublient parfois la moitié de l'humanité",
                          "Réclamer l'égalité peut demander du courage",
                        ],
                        formulationType: "Dès 1791, Olympe de Gouges réclamait dans sa Déclaration les mêmes droits pour les femmes : un appui solide pour montrer l'ancienneté du combat pour l'égalité.",
                      },
                      {
                        title: "Le Deuxième Sexe · Simone de Beauvoir · 1949",
                        genre: "Essai",
                        enBref: "Essai majeur où Beauvoir analyse la condition des femmes à travers l'histoire et montre que leur place « inférieure » n'a rien de naturel : elle résulte d'une construction sociale. D'où sa formule célèbre : « on ne naît pas femme, on le devient ».",
                        commentUtiliser: [
                          "Les inégalités entre les sexes sont construites, donc on peut les défaire",
                          "Ce qu'on croit naturel est souvent social",
                          "L'égalité est une conquête, pas un acquis",
                        ],
                        formulationType: "Avec la formule de Beauvoir, « on ne naît pas femme, on le devient », on peut soutenir que les inégalités entre les sexes sont construites, donc qu'on peut les défaire.",
                      },
                      {
                        title: "Les Suffragettes · Sarah Gavron · 2015",
                        genre: "Film",
                        enBref: "Au début du XXe siècle en Angleterre, des femmes se battent pour obtenir le droit de vote. Une jeune ouvrière rejoint le mouvement et découvre la répression et la prison, mais aussi la solidarité. Le film retrace un combat long et difficile pour l'égalité des droits.",
                        commentUtiliser: [
                          "L'égalité des droits a dû être arrachée de haute lutte",
                          "Des anonymes ont risqué gros pour les générations suivantes",
                          "Le droit de vote des femmes est une conquête récente",
                        ],
                        formulationType: "Avec le film Les Suffragettes, qui retrace le combat pour le droit de vote, on peut rappeler que l'égalité entre les sexes est une conquête récente et difficile.",
                      },
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                number: "②",
                title: "La guerre et le témoignage",
                blocks: [
                  {
                    type: "referenceGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "Candide · Voltaire · 1759",
                        genre: "Conte philosophique",
                        enBref: "Dans un épisode du conte, Candide assiste à une bataille que Voltaire décrit comme une « boucherie héroïque » réglée « à merveille ». L'ironie féroce démasque l'horreur réelle derrière le vocabulaire glorieux de la guerre.",
                        commentUtiliser: [
                          "L'ironie dénonce la guerre mieux qu'un discours indigné",
                          "Le vocabulaire glorieux masque l'horreur réelle",
                          "La guerre n'a rien d'héroïque",
                        ],
                        formulationType: "La « boucherie héroïque » de Candide montre comment l'ironie peut dénoncer la guerre plus efficacement qu'un discours indigné.",
                      },
                      {
                        title: "Boule de suif · Maupassant · 1880",
                        genre: "Nouvelle",
                        enBref: "Pendant la guerre de 1870, des bourgeois fuyant en diligence poussent une prostituée, surnommée Boule de suif, à céder à un officier prussien pour qu'on les laisse passer. Une fois leur but atteint, ils la méprisent. La guerre révèle les lâchetés et l'hypocrisie.",
                        commentUtiliser: [
                          "La guerre révèle les lâchetés cachées",
                          "Les humbles sont parfois les plus dignes",
                          "Les apparences sociales sont trompeuses",
                        ],
                        formulationType: "Dans Boule de suif, Maupassant montre que la guerre révèle les caractères : la plus méprisée se révèle la plus digne, et les « honnêtes gens » les plus lâches.",
                      },
                      {
                        title: "Le Feu · Henri Barbusse · 1916",
                        genre: "Roman",
                        enBref: "Écrit par un combattant en pleine Première Guerre mondiale, le roman suit une escouade de soldats et décrit sans fard la boue, la peur, l'attente et la mort dans les tranchées. Un témoignage direct, loin des images héroïques. Prix Goncourt 1916.",
                        commentUtiliser: [
                          "Seul le témoignage direct dit la vérité de la guerre",
                          "La réalité des tranchées dément les images héroïques",
                          "Écrire la guerre, c'est la dénoncer",
                        ],
                        formulationType: "Avec Le Feu, écrit par un soldat, on peut appuyer l'idée que seul le témoignage direct fait sentir la réalité des tranchées, loin des images héroïques.",
                      },
                      {
                        title: "Si c'est un homme · Primo Levi · 1947",
                        genre: "Récit-témoignage",
                        enBref: "Rescapé du camp d'Auschwitz, Primo Levi raconte avec lucidité l'horreur quotidienne et la tentative du système de détruire l'humanité des prisonniers. Il écrit pour témoigner et pour que cela ne se reproduise pas.",
                        commentUtiliser: [
                          "Témoigner est un devoir de mémoire",
                          "Écrire empêche l'oubli des crimes",
                          "Préserver la dignité, c'est résister à la barbarie",
                        ],
                        formulationType: "Comme Primo Levi écrivant Si c'est un homme « pour que cela ne se reproduise pas », on peut montrer que témoigner par l'écriture est un devoir de mémoire.",
                      },
                      {
                        title: "Guernica · Pablo Picasso · 1937",
                        genre: "Peinture",
                        enBref: "Après le bombardement de la ville basque de Guernica pendant la guerre d'Espagne, Picasso peint une immense toile en noir et blanc : corps disloqués, cris, animaux affolés. Sans représenter une bataille précise, il donne à voir l'horreur de la guerre et la souffrance des civils.",
                        commentUtiliser: [
                          "L'art peut dénoncer l'horreur de la guerre",
                          "Une image peut marquer plus qu'un long discours",
                          "La guerre frappe d'abord les civils innocents",
                        ],
                        formulationType: "Avec Guernica de Picasso, peint après le bombardement d'une ville, on peut montrer que l'art donne un visage à l'horreur de la guerre et la dénonce mieux qu'un discours.",
                      },
                      {
                        title: "Le Déserteur · Boris Vian · 1954",
                        genre: "Chanson",
                        enBref: "Sous la forme d'une lettre au président, un homme explique qu'il refuse de partir à la guerre et de tuer. Écrite pendant la guerre d'Indochine, la chanson fut longtemps censurée. Elle est devenue un hymne pacifiste connu, qui oppose la conscience de l'individu à l'ordre de tuer.",
                        commentUtiliser: [
                          "On peut refuser la guerre au nom de sa conscience",
                          "Une chanson peut porter un message pacifiste",
                          "Désobéir peut être un acte moral",
                        ],
                        formulationType: "Avec Le Déserteur de Boris Vian, où un homme refuse de partir tuer, on peut illustrer l'objection de conscience et le pouvoir d'une chanson à dire non à la guerre.",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "grandes-questions",
            label: "Grandes questions",
            icon: "",
            blocks: [
              { type: "callout", variant: "info", icon: "", text: "Thèmes : le temps qui passe · le héros et le courage · le rire et la satire · la justice." },
              {
                type: "subsection",
                number: "①",
                title: "Le temps qui passe",
                blocks: [
                  {
                    type: "referenceGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "« Mignonne, allons voir si la rose » · Ronsard · 1550",
                        genre: "Poème (ode)",
                        enBref: "Ronsard invite une jeune femme à constater qu'une rose, éclose le matin, a déjà perdu ses pétales le soir. Il en tire une leçon : la beauté et la jeunesse passent vite, il faut donc en profiter sans attendre (le carpe diem).",
                        commentUtiliser: [
                          "La beauté et la jeunesse sont éphémères",
                          "Il faut profiter de l'instant présent",
                          "La fuite du temps crée l'urgence de vivre",
                        ],
                        formulationType: "Avec la rose de Ronsard, fanée en un jour, on peut illustrer la fuite du temps et l'invitation à profiter de l'instant.",
                      },
                      {
                        title: "« Le Pont Mirabeau » (Alcools) · Apollinaire · 1913",
                        genre: "Poème",
                        enBref: "Accoudé au pont Mirabeau, le poète regarde la Seine couler et compare l'écoulement de l'eau à celui de l'amour et des jours. Tout passe et s'en va ; seul le poète, lui, demeure pour le dire.",
                        commentUtiliser: [
                          "Tout passe, même l'amour",
                          "Le temps emporte ce qui nous est cher",
                          "Face au temps, il reste à dire ce qui fut",
                        ],
                        formulationType: "Le « Pont Mirabeau » d'Apollinaire, où « les jours s'en vont je demeure », dit la mélancolie d'un temps qui emporte tout, même l'amour.",
                      },
                      {
                        title: "« L'Horloge » (Les Fleurs du mal) · Baudelaire · 1857",
                        genre: "Poème",
                        enBref: "Baudelaire fait de l'horloge un « dieu sinistre » qui rappelle, seconde après seconde, que le temps nous dévore et nous rapproche de la mort. Le poème exprime l'angoisse devant le temps qui fuit irrémédiablement.",
                        commentUtiliser: [
                          "Le temps nous rapproche sans cesse de la mort",
                          "Chaque instant perdu l'est pour toujours",
                          "La conscience du temps engendre l'angoisse",
                        ],
                        formulationType: "Dans « L'Horloge », Baudelaire fait du temps un « joueur avide » qui gagne toujours : une image forte de l'angoisse face à la fuite des heures.",
                      },
                      {
                        title: "La Persistance de la mémoire · Salvador Dalí · 1931",
                        genre: "Peinture",
                        enBref: "Dans un paysage désertique, Dalí peint des montres molles qui semblent fondre et s'affaisser. Ces horloges déformées donnent une image étrange du temps : il n'est plus mesuré ni fixe, il se distend et nous échappe. Le tableau est l'une des œuvres phares du surréalisme.",
                        commentUtiliser: [
                          "Le temps n'est pas vécu comme l'horloge le mesure",
                          "Notre perception du temps se déforme sans cesse",
                          "L'art peut rendre visible une idée abstraite",
                        ],
                        formulationType: "Avec les montres molles de Dalí dans La Persistance de la mémoire, on peut évoquer un temps qui se distend et nous échappe, bien loin de celui que mesure l'horloge.",
                      },
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                number: "②",
                title: "Le héros et le courage",
                blocks: [
                  {
                    type: "referenceGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "L'Iliade · Homère · Antiquité",
                        genre: "Épopée",
                        enBref: "Au cours de la guerre de Troie, le plus grand guerrier grec, Achille, se retire du combat par colère, puis y revient pour venger son ami Patrocle. Sa force et sa fureur en font la figure même du héros, mais son destin est de mourir jeune.",
                        commentUtiliser: [
                          "Le héros se révèle dans l'épreuve",
                          "La gloire se paie parfois de la vie",
                          "Le courage au combat définit le héros antique",
                        ],
                        formulationType: "Avec Achille dans L'Iliade, on peut évoquer la figure du héros antique, dont la valeur au combat se paie d'une vie brève mais glorieuse.",
                      },
                      {
                        title: "Le Cid · Corneille · 1637",
                        genre: "Théâtre",
                        enBref: "Rodrigue aime Chimène, mais son père est insulté par le père de celle-ci. Pour laver l'honneur familial, il doit tuer en duel le père de la femme qu'il aime. Le héros est déchiré entre son amour et son devoir.",
                        commentUtiliser: [
                          "L'héroïsme, c'est choisir le devoir contre son bonheur",
                          "Le vrai courage affronte les dilemmes",
                          "L'honneur peut s'opposer à l'amour",
                        ],
                        formulationType: "Le dilemme de Rodrigue, dans Le Cid, montre que l'héroïsme n'est pas seulement la bravoure, mais le courage de choisir le devoir contre son bonheur.",
                      },
                      {
                        title: "Antigone · Jean Anouilh · 1944",
                        genre: "Théâtre (tragédie)",
                        enBref: "Le roi Créon interdit d'enterrer le frère d'Antigone, traité en traître. Antigone passe outre, par fidélité et par conscience, sachant qu'elle le paiera de sa vie. Elle préfère mourir plutôt que de renoncer à ce qu'elle croit juste.",
                        commentUtiliser: [
                          "Désobéir au nom du juste est un acte de courage",
                          "La conscience peut l'emporter sur la loi",
                          "Résister au pouvoir demande du courage",
                        ],
                        formulationType: "Avec Antigone, qui dit « non » à Créon au péril de sa vie, on peut illustrer un héroïsme de la conscience : le courage de désobéir au nom du juste.",
                      },
                      {
                        title: "Bonaparte franchissant le Grand-Saint-Bernard · Jacques-Louis David · 1801",
                        genre: "Peinture",
                        enBref: "David peint le jeune Bonaparte sur un cheval cabré, le bras tendu vers les sommets, franchissant les Alpes. En réalité, Bonaparte avait passé le col à dos de mule ; le peintre a tout idéalisé pour construire une image de chef héroïque. Le tableau montre comment se fabrique une figure de héros.",
                        commentUtiliser: [
                          "L'image du héros est souvent construite, voire mise en scène",
                          "La représentation peut embellir la réalité",
                          "Le pouvoir se sert de l'art pour se grandir",
                        ],
                        formulationType: "Avec le Bonaparte de David, idéalisé sur son cheval cabré, on peut montrer que la figure du héros est souvent une construction, pensée pour impressionner.",
                      },
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                number: "③",
                title: "Le rire et la satire",
                blocks: [
                  {
                    type: "referenceGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "Tartuffe · Molière · 1664",
                        genre: "Théâtre (comédie)",
                        enBref: "Tartuffe, un faux dévot, s'introduit dans une famille en feignant la piété, manipule le père et tente de s'emparer de ses biens et de sa femme. En le rendant ridicule, Molière dénonce l'hypocrisie : la comédie corrige les vices en les exposant.",
                        commentUtiliser: [
                          "Le rire est une arme contre les vices",
                          "On corrige les mœurs en les ridiculisant",
                          "La comédie démasque l'hypocrisie",
                        ],
                        formulationType: "Avec Tartuffe, où l'hypocrite est confondu en public, on peut montrer que le rire de la comédie est une arme : il dénonce les vices en les exposant.",
                      },
                      {
                        title: "Le Mariage de Figaro · Beaumarchais · 1784",
                        genre: "Théâtre (comédie)",
                        enBref: "Le valet Figaro veut épouser Suzanne, mais son maître le comte cherche à séduire la jeune femme. Par sa ruse et son intelligence, Figaro déjoue les manœuvres du seigneur. La comédie raille les privilèges des puissants, peu avant la Révolution.",
                        commentUtiliser: [
                          "Le rire peut contester l'ordre établi",
                          "La satire dénonce les privilèges",
                          "Le faible peut l'emporter par l'esprit",
                        ],
                        formulationType: "Avec Le Mariage de Figaro, où le valet l'emporte sur le seigneur, on peut illustrer une satire sociale qui, sous le rire, conteste les privilèges.",
                      },
                      {
                        title: "Gargantua · Rabelais · 1534",
                        genre: "Roman",
                        enBref: "Le roman raconte la vie démesurée du géant Gargantua, dans un déluge d'épisodes comiques et grossiers. Mais sous le rire et l'exagération, Rabelais critique l'éducation rigide de son temps et défend un savoir vivant et joyeux.",
                        commentUtiliser: [
                          "On peut critiquer en faisant rire",
                          "Le comique peut servir la réflexion",
                          "Le rire est le propre de l'homme",
                        ],
                        formulationType: "Comme Rabelais dans Gargantua, qui glisse ses idées sous le rire, on peut montrer que le comique permet de critiquer tout en faisant réfléchir.",
                      },
                      {
                        title: "Le Dictateur · Charlie Chaplin · 1940",
                        genre: "Film",
                        enBref: "Chaplin joue à la fois un dictateur ridicule, qui ressemble à Hitler, et un humble barbier qu'on prend pour lui. En tournant la tyrannie en dérision, en plein essor du nazisme, il s'en sert pour la combattre. Le film s'achève sur un appel vibrant à l'humanité et à la paix.",
                        commentUtiliser: [
                          "Le rire peut être une arme contre la tyrannie",
                          "Tourner un puissant en ridicule, c'est le désarmer",
                          "La satire engage le courage de celui qui la pratique",
                        ],
                        formulationType: "Avec Le Dictateur de Chaplin, qui ridiculise un tyran en pleine montée du nazisme, on peut montrer que le rire peut devenir une arme courageuse contre l'oppression.",
                      },
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                number: "④",
                title: "La justice",
                blocks: [
                  {
                    type: "referenceGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "Le Dernier Jour d'un condamné · Victor Hugo · 1829",
                        genre: "Récit",
                        enBref: "Le récit suit, heure par heure, les pensées d'un homme condamné à mort dont on ne connaît ni le nom ni le crime. En faisant entendre cette voix angoissée, Hugo livre un plaidoyer contre la peine capitale.",
                        commentUtiliser: [
                          "La littérature peut combattre une injustice",
                          "Donner la mort interroge l'idée même de justice",
                          "L'écrivain peut plaider une cause",
                        ],
                        formulationType: "Avec Le Dernier Jour d'un condamné, où Hugo fait entendre la voix d'un homme qu'on va exécuter, on peut interroger une justice qui donne la mort.",
                      },
                      {
                        title: "« Les Animaux malades de la peste » (Fables) · La Fontaine · 1678",
                        genre: "Fable",
                        enBref: "Pour faire cesser une épidémie, les animaux décident de sacrifier le plus coupable. Le lion et les puissants confessent de grands crimes mais sont absous ; l'âne, qui n'a fait que brouter un peu d'herbe, est condamné. La justice frappe le faible et épargne le fort.",
                        commentUtiliser: [
                          "La justice frappe parfois le faible et épargne le fort",
                          "Le pouvoir s'arrange souvent avec la justice",
                          "Le bouc émissaire est souvent le plus démuni",
                        ],
                        formulationType: "Avec « Les Animaux malades de la peste » (« selon que vous serez puissant ou misérable... »), on peut dénoncer une justice qui frappe les faibles et épargne les forts.",
                      },
                      {
                        title: "« J'accuse… ! » · Émile Zola · 1898",
                        genre: "Article (lettre ouverte)",
                        enBref: "Dans une lettre ouverte publiée en une de journal, Zola accuse l'armée et l'État d'avoir condamné l'innocent capitaine Dreyfus et d'étouffer la vérité. Il risque la prison pour défendre la justice : c'est l'écrivain engagé par excellence.",
                        commentUtiliser: [
                          "L'écrivain peut s'engager pour la vérité",
                          "Défendre un innocent peut exiger du courage",
                          "La parole publique peut faire reculer l'injustice",
                        ],
                        formulationType: "Avec « J'accuse… ! », où Zola risque sa liberté pour défendre Dreyfus, on peut montrer le rôle de l'écrivain engagé au service de la justice.",
                      },
                      {
                        title: "12 hommes en colère · Sidney Lumet · 1957",
                        genre: "Film",
                        enBref: "Douze jurés doivent décider du sort d'un jeune homme accusé de meurtre. Onze le croient coupable et veulent en finir vite ; un seul ose douter et, peu à peu, par le raisonnement, amène les autres à réexaminer les preuves. Le film montre la justice à l'épreuve des préjugés.",
                        commentUtiliser: [
                          "Juger exige de résister à ses préjugés",
                          "Le doute peut être un devoir avant de condamner",
                          "Une seule voix peut faire triompher la raison",
                        ],
                        formulationType: "Avec 12 hommes en colère, où un juré seul fait douter tous les autres, on peut montrer que rendre la justice impose de se défier des préjugés et de la précipitation.",
                      },
                    ],
                  },
                ],
              },
              {
                type: "callout",
                variant: "info",
                icon: "💡",
                title: "Comment s'en servir le jour J",
                text: "Repérez la notion clé de la question, ouvrez le thème correspondant, choisissez UNE œuvre que vous connaissez vraiment, adaptez sa **formulation type** à la question posée et reliez-la à votre idée selon la méthode de la [notion 20](fiche:produire-le-developpement). Une référence sûre et bien reliée vaut mieux qu'une longue liste.",
              },
            ],
          },
        ],
      },
      {
        id: "memoriser",
        label: "Mémoriser",
        icon: "",
        tabs: [
          {
            id: "flash",
            label: "Flashcards",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "success",
                icon: "",
                title: "Entraînez votre mémoire",
                text: "Lisez le thème, citez à voix haute une ou deux références avant de retourner la carte. L'objectif n'est pas de réciter, mais d'avoir le **réflexe** : à tel thème, telle œuvre.",
              },
              {
                type: "flashcardDeck",
                cards: [
                  { question: "Les références du recueil pour **l'écriture de soi** ?", answer: "**Les Essais**, Montaigne (1580) : se prendre soi-même pour sujet, écrire pour se connaître.\n**Les Confessions**, Rousseau (1782) : l'autobiographie fondée sur un pacte de sincérité totale, jusqu'à l'aveu des fautes.\n**Journal**, Anne Frank (1947) : écrire pour laisser une trace de soi contre l'oubli.\n**La Promesse de l'aube**, Romain Gary (1960) : se raconter à travers la figure de la mère qui vous a façonné.\n**La Place**, Annie Ernaux (1983) : écrire pour interroger ses origines et sa place sociale.\n**Autoportraits**, Frida Kahlo (1926-1954) : se peindre sans cesse, preuve que l'écriture de soi n'est pas que littéraire." },
                  { question: "Les références du recueil sur **l'enfance et le souvenir** ?", answer: "**Du côté de chez Swann**, Proust (1913) : la madeleine, quand une sensation ressuscite tout le passé (mémoire involontaire).\n**Enfance**, Nathalie Sarraute (1983) : la mémoire d'enfance est reconstruite autant que retrouvée.\n**L'Enfant**, Jules Vallès (1879) : une enfance de souffrances, à rebours de l'enfance idéalisée.\n**Les Contemplations**, Victor Hugo (1856) : « Demain, dès l'aube », le souvenir comme fidélité à l'enfant disparu.\n**W ou le souvenir d'enfance**, Perec (1975) : écrire autour d'un vide pour dire ce que la mémoire a perdu.\n**Les 400 coups**, Truffaut (1959) : une enfance blessée, en quête d'être entendue." },
                  { question: "Les références du recueil sur **autrui et la rencontre** ?", answer: "**Le Petit Prince**, Saint-Exupéry (1943) : « apprivoiser », le lien se construit dans le temps.\n**Les Essais, « De l'amitié »**, Montaigne (1580) : l'amitié vraie, rencontre rare (« parce que c'était lui »).\n**Le Racisme expliqué à ma fille**, Ben Jelloun (1998) : c'est l'ignorance qui nourrit le rejet de l'autre.\n**Candide**, Voltaire (1759) : on se forme au contact des autres et du monde.\n**Intouchables**, Nakache et Toledano (2011) : la rencontre rapproche des mondes que tout sépare." },
                  { question: "Les références du recueil sur **l'art et le réel** ?", answer: "**Comment Wang-Fô fut sauvé**, Yourcenar (1938) : l'art ne copie pas le réel, il en crée un autre, parfois plus fort.\n**Les Fleurs du mal**, Baudelaire (1857) : tirer la beauté du laid, faire « de la boue » de « l'or ».\n**Le Portrait de Dorian Gray**, Wilde (1890) : l'art révèle ce que l'apparence dissimule.\n**L'Assommoir**, Zola (1877) : montrer le réel social le plus dur, sans l'embellir.\n**La Trahison des images**, Magritte (1929) : « Ceci n'est pas une pipe », l'image n'est pas la chose." },
                  { question: "Les références du recueil sur **le pouvoir des mots et la lecture** ?", answer: "**Fables**, La Fontaine (1668) : instruire en amusant, un récit plaisant convainc mieux.\n**Les Misérables**, Victor Hugo (1862) : le roman au service d'une cause, pour éveiller les consciences.\n**Cyrano de Bergerac**, Rostand (1897) : la puissance de l'éloquence, qui séduit à elle seule.\n**Fahrenheit 451**, Ray Bradbury (1953) : brûler les livres pour empêcher de penser, donc lire, c'est rester libre.\n**Comme un roman**, Pennac (1992) : les « droits du lecteur », on lit mieux par plaisir.\n**Le Discours d'un roi**, Tom Hooper (2010) : vaincre son bégaiement, car maîtriser la parole est un pouvoir." },
                  { question: "Les références du recueil sur **le progrès et la technique** ?", answer: "**Vingt mille lieues sous les mers**, Jules Verne (1870) : le progrès fait rêver et ouvre le monde.\n**Frankenstein**, Mary Shelley (1818) : une science sans conscience peut devenir un danger.\n**Le Meilleur des mondes**, Aldous Huxley (1932) : le confort acheté au prix de la liberté.\n**Pantagruel** (lettre de Gargantua), Rabelais (1532) : « science sans conscience n'est que ruine de l'âme ».\n**Les Temps modernes**, Chaplin (1936) : la machine qui broie l'ouvrier, le rire qui dénonce." },
                  { question: "Les références du recueil sur **le voyage et l'ailleurs** ?", answer: "**L'Odyssée**, Homère (Antiquité) : voyager, c'est s'éprouver et grandir.\n**Les Essais, « Des cannibales »**, Montaigne (1580) : l'ailleurs invite à relativiser ses propres habitudes.\n**« L'Invitation au voyage »**, Baudelaire (1857) : le plus beau voyage est parfois celui qu'on rêve.\n**Le Tour du monde en 80 jours**, Jules Verne (1873) : le goût de l'aventure et un monde à sa portée.\n**Le Voyage dans la Lune**, Méliès (1902) : un ailleurs entièrement imaginé." },
                  { question: "Les références du recueil sur **la nature et l'environnement** ?", answer: "**Les Rêveries du promeneur solitaire**, Rousseau (1782) : la nature comme refuge qui apaise et console.\n**« Le Lac »**, Lamartine (1820) : la nature, confidente du sentiment et témoin du temps qui fuit.\n**« Correspondances »**, Baudelaire (1857) : « la Nature est un temple », pleine de signes à déchiffrer.\n**L'Homme qui plantait des arbres**, Giono (1953) : une action patiente peut réparer la nature.\n**Le Voyageur contemplant une mer de nuages**, Caspar David Friedrich (1818) : l'homme face à l'immensité de la nature." },
                  { question: "Les références du recueil sur **la liberté** ?", answer: "**« Le Loup et le Chien »** (Fables), La Fontaine (1668) : refuser le collier, car la liberté vaut mieux que le confort.\n**Traité sur la tolérance**, Voltaire (1763) : la liberté de conscience se défend contre le fanatisme.\n**« Liberté »**, Paul Éluard (1942) : la poésie comme cri d'espérance et acte de résistance.\n**1984**, Orwell (1949) : une société qui supprime toute liberté détruit jusqu'à la pensée.\n**Cahier d'un retour au pays natal**, Césaire (1939) : la liberté comme reconquête de la dignité.\n**La Liberté guidant le peuple**, Delacroix (1830) : un idéal incarné qui entraîne tout un peuple.\n**1789**, Théâtre du Soleil (1970) : le théâtre vivant ravive les combats pour la liberté." },
                  { question: "Les références du recueil sur **le bonheur** ?", answer: "**Candide**, Voltaire (1759) : « il faut cultiver notre jardin », le bonheur par l'action utile.\n**« Le Savetier et le Financier »** (Fables), La Fontaine (1678) : la richesse n'achète pas le bonheur.\n**Les Rêveries du promeneur solitaire**, Rousseau (1782) : un bonheur fait du seul sentiment d'exister.\n**Le Fabuleux Destin d'Amélie Poulain**, Jeunet (2001) : le bonheur dans les petits riens du quotidien.\n**What a Wonderful World**, Louis Armstrong (1967) : s'émerveiller des choses les plus simples." },
                  { question: "Les références du recueil sur **la condition féminine et l'égalité** ?", answer: "**La Barbe bleue** (Contes), Perrault (1697) : un rapport de domination dont la portée reste actuelle.\n**L'École des femmes**, Molière (1662) : refuser l'éducation aux femmes, c'est les vouloir soumises.\n**Déclaration des droits de la femme**, Olympe de Gouges (1791) : réclamer l'égalité des droits dès 1791.\n**Le Deuxième Sexe**, Simone de Beauvoir (1949) : « on ne naît pas femme, on le devient », les inégalités sont construites.\n**Les Suffragettes**, Sarah Gavron (2015) : le combat pour le droit de vote, une conquête récente." },
                  { question: "Les références du recueil sur **la guerre et le témoignage** ?", answer: "**Candide**, Voltaire (1759) : la « boucherie héroïque », quand l'ironie démasque la guerre.\n**Boule de suif**, Maupassant (1880) : la guerre révèle les lâchetés et l'hypocrisie.\n**Le Feu**, Henri Barbusse (1916) : le témoignage direct dit la réalité des tranchées.\n**Si c'est un homme**, Primo Levi (1947) : témoigner « pour que cela ne se reproduise pas ».\n**Guernica**, Picasso (1937) : l'art donne un visage à l'horreur de la guerre.\n**Le Déserteur**, Boris Vian (1954) : refuser de tuer au nom de sa conscience." },
                  { question: "Les références du recueil sur **le temps qui passe** ?", answer: "**« Mignonne, allons voir si la rose »**, Ronsard (1550) : la rose fanée en un jour, donc profiter de l'instant (carpe diem).\n**« Le Pont Mirabeau »** (Alcools), Apollinaire (1913) : « les jours s'en vont je demeure », tout passe.\n**« L'Horloge »** (Les Fleurs du mal), Baudelaire (1857) : le temps, « joueur avide » qui gagne toujours.\n**La Persistance de la mémoire**, Dalí (1931) : les montres molles, un temps qui se distend et nous échappe." },
                  { question: "Les références du recueil sur **le héros et le courage** ?", answer: "**L'Iliade**, Homère (Antiquité) : Achille, le héros dont la gloire se paie d'une vie brève.\n**Le Cid**, Corneille (1637) : l'héroïsme, c'est choisir le devoir contre son bonheur.\n**Antigone**, Jean Anouilh (1944) : désobéir au nom du juste, au péril de sa vie.\n**Bonaparte franchissant le Grand-Saint-Bernard**, Jacques-Louis David (1801) : l'image du héros est souvent une construction." },
                  { question: "Les références du recueil sur **la justice** ?", answer: "**Le Dernier Jour d'un condamné**, Hugo (1829) : un plaidoyer contre la peine de mort.\n**« Les Animaux malades de la peste »** (Fables), La Fontaine (1678) : « selon que vous serez puissant ou misérable... », la justice frappe le faible.\n**« J'accuse… ! »**, Zola (1898) : l'écrivain engagé qui risque tout pour la vérité.\n**12 hommes en colère**, Sidney Lumet (1957) : juger en résistant aux préjugés et à la précipitation." },
                  { question: "Les références du recueil sur **le rire et la satire** ?", answer: "**Tartuffe**, Molière (1664) : le rire qui dénonce l'hypocrisie.\n**Le Mariage de Figaro**, Beaumarchais (1784) : sous le rire, contester les privilèges.\n**Gargantua**, Rabelais (1534) : critiquer tout en faisant rire.\n**Le Dictateur**, Chaplin (1940) : ridiculiser le tyran pour mieux le combattre." },
                ],
              },
            ],
          },
          {
            id: "quiz",
            label: "Quiz éclair",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "info",
                icon: "",
                title: "Testez vos repères",
                text: "Quelques questions pour vérifier que vos références sont sûres. Mieux vaut quelques œuvres bien connues qu'une longue liste approximative.",
              },
              {
                type: "quizBlock",
                questions: [
                  {
                    objectifId: "cult3",
                    question: "Qui a peint **Guernica**, toile qui dénonce l'horreur de la guerre ?",
                    options: ["Pablo Picasso", "Salvador Dalí", "Eugène Delacroix", "Claude Monet"],
                    correctIndex: 0,
                    explanation: "Picasso peint Guernica en 1937, après le bombardement de la ville basque pendant la guerre d'Espagne.",
                  },
                  {
                    objectifId: "cult2",
                    question: "Quelle œuvre illustre le mieux l'idée que **la richesse n'achète pas le bonheur** ?",
                    options: ["« Le Savetier et le Financier » de La Fontaine", "1984 d'Orwell", "L'Odyssée d'Homère", "Frankenstein de Mary Shelley"],
                    correctIndex: 0,
                    explanation: "Dans cette fable, le pauvre savetier chante tant qu'il n'a rien, et perd le sommeil dès qu'on lui donne de l'argent.",
                  },
                  {
                    objectifId: "cult1",
                    question: "Pour le thème de **la guerre et du témoignage**, quelle référence est la plus adaptée ?",
                    options: ["Si c'est un homme de Primo Levi", "Du côté de chez Swann de Proust", "Le Petit Prince de Saint-Exupéry", "« L'Invitation au voyage » de Baudelaire"],
                    correctIndex: 0,
                    explanation: "Rescapé d'Auschwitz, Primo Levi témoigne « pour que cela ne se reproduise pas » : un appui solide pour le devoir de mémoire.",
                  },
                  {
                    objectifId: "cult4",
                    question: "Quel **film de Chaplin** tourne la tyrannie en dérision pour mieux la combattre ?",
                    options: ["Le Dictateur", "Les Temps modernes", "Intouchables", "12 hommes en colère"],
                    correctIndex: 0,
                    explanation: "Le Dictateur (1940) ridiculise un tyran inspiré d'Hitler et s'achève sur un appel à l'humanité et à la paix.",
                  },
                  {
                    objectifId: "cult2",
                    question: "Quelle référence défend l'idée que **la liberté vaut mieux que le confort** ?",
                    options: ["« Le Loup et le Chien » de La Fontaine", "La Place d'Annie Ernaux", "Le Cid de Corneille", "Le Petit Prince de Saint-Exupéry"],
                    correctIndex: 0,
                    explanation: "Le loup refuse le collier du chien, malgré la faim : mieux vaut être libre et affamé que nourri et soumis.",
                  },
                  {
                    objectifId: "cult4",
                    question: "Pour montrer qu'**une image n'est pas le réel**, mais sa représentation, quelle œuvre citer ?",
                    options: ["La Trahison des images de Magritte (« Ceci n'est pas une pipe »)", "La Liberté guidant le peuple de Delacroix", "Guernica de Picasso", "Le Radeau de la Méduse de Géricault"],
                    correctIndex: 0,
                    explanation: "Magritte peint une pipe et écrit dessous qu'« elle n'en est pas une » : ce n'est, en effet, que l'image d'une pipe.",
                  },
                  {
                    objectifId: "cult3",
                    question: "Qui a écrit **Le Deuxième Sexe**, essai majeur sur la condition féminine ?",
                    options: ["Simone de Beauvoir", "Olympe de Gouges", "Annie Ernaux", "Nathalie Sarraute"],
                    correctIndex: 0,
                    explanation: "Beauvoir (1949) y soutient qu'« on ne naît pas femme, on le devient » : les inégalités sont construites, donc on peut les défaire.",
                  },
                  {
                    objectifId: "cult2",
                    question: "Quelle œuvre illustre le mieux **le pouvoir des mots pour séduire** ?",
                    options: ["Cyrano de Bergerac de Rostand", "L'Assommoir de Zola", "L'Odyssée d'Homère", "Boule de suif de Maupassant"],
                    correctIndex: 0,
                    explanation: "Cyrano conquiert Roxane par les mots qu'il prête à un autre : c'est l'éloquence, et non le visage, qui touche.",
                  },
                ],
              },
            ],
          },
          {
            id: "jeu",
            label: "Jeu : œuvre & idée",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "success",
                icon: "",
                title: "Reliez chaque œuvre à son idée",
                text: "Tapez une œuvre à gauche, puis l'idée qu'elle permet de défendre à droite. C'est cette association qui compte le jour de l'épreuve : une référence ne vaut que par l'idée qu'elle sert.",
              },
              {
                type: "matchGame",
                objectifId: "cult2",
                leftLabel: "Œuvre",
                rightLabel: "Idée à défendre",
                roundSize: 6,
                instructions: "Reliez chaque œuvre à l'idée qu'elle permet de défendre : une œuvre, puis son idée.",
                pairs: [
                  { left: "**Candide**, Voltaire", right: "Le bonheur tient à l'action utile : « cultiver son jardin »" },
                  { left: "**1984**, Orwell", right: "Tout surveiller, c'est déjà soumettre" },
                  { left: "**Guernica**, Picasso", right: "L'art donne un visage à l'horreur de la guerre" },
                  { left: "**Les Confessions**, Rousseau", right: "L'écriture de soi naît d'un besoin de sincérité totale" },
                  { left: "**Le Petit Prince**, Saint-Exupéry", right: "Le lien à l'autre se construit dans le temps" },
                  { left: "**Frankenstein**, Mary Shelley", right: "Une science sans conscience peut devenir un danger" },
                  { left: "**Cyrano de Bergerac**, Rostand", right: "L'éloquence peut séduire à elle seule" },
                  { left: "**Les Misérables**, Victor Hugo", right: "Le roman peut éveiller les consciences" },
                  { left: "**Si c'est un homme**, Primo Levi", right: "Témoigner est un devoir de mémoire" },
                  { left: "**Le Deuxième Sexe**, Beauvoir", right: "Les inégalités entre les sexes sont construites" },
                  { left: "**Antigone**, Anouilh", right: "Désobéir au nom du juste est un acte de courage" },
                  { left: "**La Persistance de la mémoire**, Dalí", right: "Une image d'un temps qui se distend et nous échappe" },
                  { left: "**L'Assommoir**, Zola", right: "Montrer le réel social sans l'embellir" },
                  { left: "**Tartuffe**, Molière", right: "Le rire est une arme contre l'hypocrisie" },
                  { left: "**La Liberté guidant le peuple**, Delacroix", right: "Un idéal incarné qui entraîne tout un peuple" },
                  { left: "**Les Temps modernes**, Chaplin", right: "Le progrès peut déshumaniser le travail" },
                  { left: "**L'Odyssée**, Homère", right: "Voyager, c'est s'éprouver et grandir" },
                  { left: "**Du côté de chez Swann**, Proust", right: "Une simple sensation peut ressusciter le passé" },
                  { left: "**« J'accuse… ! »**, Zola", right: "L'écrivain peut s'engager pour la vérité" },
                  { left: "**L'Homme qui plantait des arbres**, Giono", right: "Une action patiente peut réparer la nature" },
                  { left: "**Intouchables**, Nakache et Toledano", right: "La rencontre rapproche des mondes opposés" },
                  { left: "**Le Déserteur**, Boris Vian", right: "Refuser la guerre au nom de sa conscience" },
                  { left: "**12 hommes en colère**, Sidney Lumet", right: "Juger exige de résister à ses préjugés" },
                  { left: "**Comme un roman**, Pennac", right: "On lit mieux quand on lit par plaisir" },
                  { left: "**Les Essais**, Montaigne", right: "Se raconter, c'est d'abord apprendre à se connaître" },
                  { left: "**La Place**, Annie Ernaux", right: "Écrire, c'est interroger ses origines et sa place sociale" },
                  { left: "**Journal**, Anne Frank", right: "Écrire pour laisser une trace de soi contre l'oubli" },
                  { left: "**Les Contemplations**, Victor Hugo", right: "La poésie peut donner une forme au deuil" },
                  { left: "**Fahrenheit 451**, Bradbury", right: "Interdire la lecture, c'est museler les esprits" },
                  { left: "**Le Meilleur des mondes**, Huxley", right: "Le confort peut s'acheter au prix de la liberté" },
                  { left: "**Vingt mille lieues sous les mers**, Jules Verne", right: "La science fait rêver et ouvre le monde" },
                  { left: "**Le Portrait de Dorian Gray**, Wilde", right: "L'apparence peut masquer la vérité" },
                  { left: "**Boule de suif**, Maupassant", right: "La guerre révèle les lâchetés cachées" },
                  { left: "**Le Feu**, Henri Barbusse", right: "Seul le témoignage direct dit la vérité de la guerre" },
                  { left: "**Traité sur la tolérance**, Voltaire", right: "La liberté de conscience se défend contre le fanatisme" },
                  { left: "**« Liberté »**, Paul Éluard", right: "La poésie peut devenir un acte de résistance" },
                  { left: "**Le Cid**, Corneille", right: "L'héroïsme, c'est choisir le devoir contre son bonheur" },
                  { left: "**Le Mariage de Figaro**, Beaumarchais", right: "Le rire peut contester l'ordre établi" },
                  { left: "**« Le Lac »**, Lamartine", right: "La nature garde la trace de nos émotions" },
                  { left: "**Le Dernier Jour d'un condamné**, Hugo", right: "La littérature peut combattre une injustice" },
                ],
              },
            ],
          },
          {
            id: "jeu-auteur",
            label: "Jeu : titre & auteur",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "success",
                icon: "",
                title: "Reliez chaque œuvre à son auteur",
                text: "Le b.a.-ba : savoir qui a écrit quoi, pour citer sans se tromper. Tapez une œuvre à gauche, puis son auteur à droite.",
              },
              {
                type: "matchGame",
                objectifId: "cult3",
                leftLabel: "Œuvre",
                rightLabel: "Auteur",
                roundSize: 6,
                instructions: "Reliez chaque œuvre à son auteur : une œuvre, puis son auteur.",
                pairs: [
                  { left: "**Les Essais**", right: "Montaigne" },
                  { left: "**Candide**", right: "Voltaire" },
                  { left: "**Les Misérables**", right: "Victor Hugo" },
                  { left: "**Fables**", right: "La Fontaine" },
                  { left: "**Les Fleurs du mal**", right: "Baudelaire" },
                  { left: "**L'Assommoir**", right: "Émile Zola" },
                  { left: "**Tartuffe**", right: "Molière" },
                  { left: "**Du côté de chez Swann**", right: "Marcel Proust" },
                  { left: "**La Place**", right: "Annie Ernaux" },
                  { left: "**Le Petit Prince**", right: "Saint-Exupéry" },
                  { left: "**Cyrano de Bergerac**", right: "Edmond Rostand" },
                  { left: "**1984**", right: "George Orwell" },
                  { left: "**Le Deuxième Sexe**", right: "Simone de Beauvoir" },
                  { left: "**Si c'est un homme**", right: "Primo Levi" },
                  { left: "**Frankenstein**", right: "Mary Shelley" },
                  { left: "**L'Odyssée**", right: "Homère" },
                  { left: "**Antigone**", right: "Jean Anouilh" },
                  { left: "**Guernica**", right: "Pablo Picasso" },
                  { left: "**La Persistance de la mémoire**", right: "Salvador Dalí" },
                  { left: "**Les 400 coups**", right: "François Truffaut" },
                  { left: "**Intouchables**", right: "Nakache et Toledano" },
                  { left: "**La Trahison des images**", right: "René Magritte" },
                  { left: "**Le Voyage dans la Lune**", right: "Georges Méliès" },
                  { left: "**What a Wonderful World**", right: "Louis Armstrong" },
                  { left: "**Les Confessions**", right: "Jean-Jacques Rousseau" },
                  { left: "**Gargantua**", right: "Rabelais" },
                  { left: "**Le Portrait de Dorian Gray**", right: "Oscar Wilde" },
                  { left: "**Fahrenheit 451**", right: "Ray Bradbury" },
                  { left: "**Vingt mille lieues sous les mers**", right: "Jules Verne" },
                  { left: "**Le Racisme expliqué à ma fille**", right: "Tahar Ben Jelloun" },
                  { left: "**Boule de suif**", right: "Maupassant" },
                  { left: "**Le Cid**", right: "Corneille" },
                  { left: "**Le Mariage de Figaro**", right: "Beaumarchais" },
                  { left: "**« Le Pont Mirabeau »**", right: "Apollinaire" },
                  { left: "**Cahier d'un retour au pays natal**", right: "Aimé Césaire" },
                  { left: "**La Barbe bleue**", right: "Charles Perrault" },
                  { left: "**Les Temps modernes**", right: "Charlie Chaplin" },
                  { left: "**Le Fabuleux Destin d'Amélie Poulain**", right: "Jean-Pierre Jeunet" },
                  { left: "**Le Voyageur contemplant une mer de nuages**", right: "Caspar David Friedrich" },
                  { left: "**Comme un roman**", right: "Daniel Pennac" },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
}

const ficheReferentiel = ficheReferentielCulturel();

export const ficheCultureLitteraireL3 = ficheReferentiel;
export const ficheCultureLitteraireM2 = ficheReferentiel;
