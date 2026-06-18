import type { Block, Fiche } from "@/components/fiche/types";
import type { Niveau } from "@/lib/niveau";

/**
 * Module source 1 (renuméroté 01) : Unité et diversité du vivant.
 * Partie 1 : Sciences de la vie et de la Terre (SVT).
 *
 * Le contenu disciplinaire (onglets Découvrir et « En classe ») et le Quiz sont
 * communs aux deux concours. Ce qui diffère par niveau (voir CHARTE_SCIENCES.md
 * §0) est injecté par la fabrique : l'onglet « Préparer l'épreuve » et la
 * question didactique de la simulation. Pour le L3, l'accent est mis sur les
 * savoirs disciplinaires et la mise en œuvre (niveau de réflexion C3) ; pour le
 * M2, sur l'analyse critique de séquences et la mobilisation des cadres
 * didactiques (Bachelard, Brousseau, Astolfi).
 *
 * Voir ficheUniteDiversiteVivantL3 / ...M2 en bas de fichier.
 */

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "v1", label: "Je distingue cellule procaryote et eucaryote et je connais les principaux organites" },
  { id: "v2", label: "Je sais nommer les trois caractères communs à toutes les cellules qui fondent l'unité du vivant" },
  { id: "v3", label: "Je distingue les trois niveaux de biodiversité (spécifique, génétique, des écosystèmes)" },
  { id: "v4", label: "Je sais ce qui distingue la classification phylogénétique de la classification linnéenne et je raisonne par groupes emboîtés" },
  { id: "v5", label: "Je ne confonds pas analogie (même fonction) et homologie (même origine, ancêtre commun)" },
  { id: "v6", label: "Je définis gène, allèle et mutation et je relie variabilité génétique, sélection et évolution" },
  { id: "v7", label: "Je situe la progression des apprentissages de la maternelle à la 3e et je repère les obstacles des élèves" },
];

const PARTIE = "Partie 1 : Sciences de la vie et de la Terre (SVT)";

/* ────────────────────────────────────────────────────────────
   Onglet Vue d'ensemble (commun)
──────────────────────────────────────────────────────────── */
const vueDEnsembleBlocks: Block[] = [
  {
    type: "sommaireApercu",
    title: "La notion en 4 temps",
    intro:
      "Une même idée traverse toute la fiche : le vivant est à la fois un (mêmes briques, même fonctionnement) et divers (une infinité de formes). Tout le programme de l'école et du collège s'organise autour de cette tension.",
    items: [
      {
        number: "①",
        title: "L'unité du vivant : la cellule",
        text: "La brique commune à tous les êtres vivants, et les trois caractères que partagent toutes les cellules.",
      },
      {
        number: "②",
        title: "La diversité : la biodiversité",
        text: "Les trois niveaux de biodiversité et les grands enjeux liés à son érosion.",
      },
      {
        number: "③",
        title: "Classer le vivant : la phylogénie",
        text: "Pourquoi on classe par parenté et non par ressemblance, et la logique des groupes emboîtés.",
      },
      {
        number: "④",
        title: "Génétique et évolution",
        text: "ADN, gène, allèle, mutation : les bases moléculaires qui expliquent l'unité ET la diversité.",
      },
    ],
  },
];

/* ────────────────────────────────────────────────────────────
   Onglet Cours (commun)
──────────────────────────────────────────────────────────── */
const coursBlocks: Block[] = [
  {
    type: "callout",
    variant: "info",
    title: "Le fil rouge",
    text: "Tous les êtres vivants sont faits de cellules et portent leur information dans l'ADN : c'est l'unité du vivant. Pourtant, le nombre d'espèces est immense : c'est la diversité du vivant. La génétique et l'évolution expliquent comment ces deux faits coexistent. C'est exactement ce que les programmes demandent de construire, de la maternelle à la 3e.",
  },
  {
    type: "subsection",
    number: "①",
    title: "L'unité du vivant : la cellule",
    blocks: [
      {
        type: "paragraph",
        text: "La cellule est l'unité structurale et fonctionnelle de tout être vivant : c'est le plus petit niveau d'organisation qui présente les propriétés du vivant (se nourrir, se reproduire, réagir à son milieu). C'est la théorie cellulaire, formulée par Schleiden et Schwann en 1838-1839.",
      },
      {
        type: "table",
        headers: ["Notion", "Définition et repères"],
        rows: [
          ["Cellule procaryote", "Pas de noyau délimité par une membrane. L'ADN, circulaire, flotte dans le cytoplasme (nucléoïde). Exemple : les bactéries. Taille : 1 à 10 µm."],
          ["Cellule eucaryote", "Noyau délimité par une membrane nucléaire, organites compartimentés. Taille : 10 à 100 µm. Animaux, végétaux, champignons."],
          ["Organites clés (eucaryote)", "Membrane plasmique (échanges), noyau (ADN), cytoplasme, mitochondries (respiration). La cellule végétale a en plus : chloroplastes (photosynthèse), vacuole, paroi."],
          ["Niveaux d'organisation", "molécule, organite, cellule, tissu, organe, système, organisme."],
        ],
      },
      {
        type: "highlightBox",
        variant: "marine",
        title: "Les trois caractères communs à toutes les cellules",
        blocks: [
          {
            type: "bullets",
            items: [
              "**Une membrane plasmique** qui délimite la cellule et règle les échanges.",
              "**De l'ADN**, support universel de l'information génétique (double hélice, Watson et Crick, 1953).",
              "**Des ribosomes**, machinerie de fabrication des protéines, présents dans toutes les cellules.",
            ],
          },
          {
            type: "paragraph",
            text: "Ces trois points sont au cœur de l'**unité du vivant** : malgré l'immense diversité des formes de vie, toutes les cellules fonctionnent sur le même plan.",
          },
        ],
      },
    ],
  },
  {
    type: "subsection",
    number: "②",
    title: "La diversité du vivant : la biodiversité",
    blocks: [
      {
        type: "paragraph",
        text: "La biodiversité est la variété des formes du vivant, à tous les niveaux. C'est un fait scientifique et un enjeu majeur d'éducation au développement durable (EDD). On distingue trois niveaux, et c'est une erreur fréquente de réduire la biodiversité au seul nombre d'espèces.",
      },
      {
        type: "table",
        headers: ["Niveau de biodiversité", "Définition et exemple"],
        rows: [
          ["Diversité spécifique", "Nombre d'espèces dans un milieu donné. On estime à environ 8,7 millions le nombre d'espèces sur Terre, dont près de 1,5 million seulement sont décrites."],
          ["Diversité génétique", "Variabilité au sein d'une même espèce. Une forte diversité génétique rend une population plus résiliente. Exemple : les races de chiens, une seule espèce, une grande diversité."],
          ["Diversité des écosystèmes", "Variété des milieux de vie et des interactions. Forêt tropicale, toundra, récif corallien : des milieux très différents, des services écologiques différents."],
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Quelques repères chiffrés (utiles pour les dossiers EDD)",
        text: "Environ 8,7 millions d'espèces estimées, dont 1,5 million décrites (IPBES). Les principales causes d'érosion sont la destruction des habitats, la surexploitation, la pollution, les espèces invasives et le changement climatique. Ces données reviennent régulièrement dans les dossiers de concours : il s'agit d'ordres de grandeur, à présenter comme tels.",
      },
    ],
  },
  {
    type: "subsection",
    number: "③",
    title: "Classer le vivant : la classification phylogénétique",
    blocks: [
      {
        type: "paragraph",
        text: "La classification a profondément changé au XXe siècle. La classification linnéenne, fondée sur les ressemblances, a laissé place à la classification phylogénétique, fondée sur la parenté évolutive (les caractères hérités d'un ancêtre commun). C'est cette classification moderne qui est au programme du cycle 3.",
      },
      {
        type: "table",
        title: "Deux logiques de classification",
        headers: ["Classification linnéenne", "Classification phylogénétique"],
        rows: [
          ["Fondée sur les ressemblances (apparence, forme)", "Fondée sur la parenté : caractères partagés hérités d'un ancêtre commun"],
          ["Peut regrouper des espèces non apparentées qui se ressemblent", "Regroupe les espèces partageant un ancêtre commun"],
          ["Règne, embranchement, classe, ordre, famille, genre, espèce", "Groupes emboîtés (vertébrés, tétrapodes, amniotes, mammifères...)"],
          ["Dauphin et requin rangés ensemble (ils nagent)", "Dauphin rangé avec les mammifères (poils, ancêtre commun), pas avec le requin"],
        ],
      },
      {
        type: "highlightBox",
        variant: "neutral",
        title: "La logique des groupes emboîtés",
        blocks: [
          {
            type: "paragraph",
            text: "Un groupe emboîté (un clade) rassemble un ancêtre commun et tous ses descendants. Ce sont les **caractères partagés dérivés** (les synapomorphies) qui définissent un groupe : la présence d'un crâne, de quatre membres, de poils...",
          },
          {
            type: "table",
            headers: ["Groupe", "Caractère partagé dérivé"],
            rows: [
              ["Vertébrés", "Une colonne vertébrale. Comprend poissons, amphibiens, reptiles, oiseaux, mammifères."],
              ["Tétrapodes", "Quatre membres (parfois réduits par évolution, comme chez les serpents). Comprend amphibiens, reptiles, oiseaux, mammifères."],
              ["Amniotes", "Un œuf protégé par une membrane (l'amnios). Comprend reptiles, oiseaux, mammifères."],
              ["Mammifères", "Des poils, des glandes mammaires, une oreille moyenne à trois osselets. Comprend baleine, chauve-souris, chien, homme."],
            ],
          },
          {
            type: "callout",
            variant: "info",
            text: "**L'exemple à maîtriser : Homme, Dauphin, Requin.** L'Homme et le Dauphin partagent crâne, quatre membres, amnios et poils : tous deux sont des mammifères. Ils sont donc plus proches l'un de l'autre qu'ils ne le sont du Requin, qui est un vertébré mais pas un tétrapode.",
          },
        ],
      },
    ],
  },
  {
    type: "subsection",
    number: "④",
    title: "Génétique : les bases moléculaires de l'unité et de la diversité",
    blocks: [
      {
        type: "paragraph",
        text: "La génétique explique pourquoi tous les vivants partagent les mêmes mécanismes moléculaires (unité) tout en présentant une diversité infinie (diversité). C'est aussi elle qui confirme la classification phylogénétique : plus deux espèces partagent de séquences d'ADN, plus elles sont proches.",
      },
      {
        type: "table",
        headers: ["Notion", "Définition"],
        rows: [
          ["ADN", "Molécule en double hélice, formée de quatre bases (A, T, C, G). Support universel de l'information génétique : l'une des plus fortes preuves de l'unité du vivant."],
          ["Gène", "Séquence d'ADN qui code une protéine. Le génome humain compte environ 20 000 gènes."],
          ["Allèle", "Version différente d'un même gène. Exemple : pour la couleur des yeux, un allèle « yeux bruns » et un allèle « yeux bleus »."],
          ["Mutation", "Modification accidentelle de la séquence d'ADN. Neutre, défavorable ou favorable, elle est la source de la variabilité génétique."],
          ["Caryotype", "Ensemble des chromosomes d'une espèce. Chez l'humain : 46 chromosomes (23 paires)."],
        ],
      },
      {
        type: "callout",
        variant: "success",
        title: "Le fil rouge du cycle 4",
        text: "Une mutation crée un nouvel allèle (variabilité), la sélection naturelle agit sur cette variabilité, certains allèles se répandent ou disparaissent : c'est l'évolution. Ce fil **gène, mutation, sélection, évolution, classification** donne sa cohérence à tout le programme de SVT du collège.",
      },
    ],
  },
  {
    type: "subsection",
    number: "⑤",
    title: "Progression de la maternelle à la 3e",
    blocks: [
      {
        type: "table",
        headers: ["Cycle", "Attendus et exemples de situations"],
        rows: [
          ["Cycle 1 (maternelle)", "Distinguer le vivant du non-vivant par des critères simples (ça grandit, ça se nourrit, ça se reproduit). Observer animaux et plantes. Pas de classification formelle."],
          ["Cycle 2 (CP à CE2)", "Classer les êtres vivants selon des critères observables (avec ou sans pattes, plante ou animal). Premiers tris."],
          ["Cycle 3 (CM1 à 6e)", "Classification phylogénétique simplifiée : groupes emboîtés, caractères partagés, ancêtre commun. Diversité du vivant dans les milieux locaux, lien avec l'EDD."],
          ["Cycle 4 (5e à 3e)", "Génétique (ADN, gènes, allèles, mutations), classification moléculaire, évolution. C'est le niveau de maîtrise disciplinaire attendu du candidat."],
        ],
      },
    ],
  },
  {
    type: "piegeCard",
    variant: "rouge",
    title: "Piège n°1 : classer par le mode de vie ou l'habitat",
    badge: "Très fréquent",
    faux: "« Le dauphin est un poisson parce qu'il vit dans la mer. »",
    vrai: "Le dauphin est un mammifère : poils, allaitement, respiration aérienne, et même des vestiges de membres postérieurs. Vivre dans l'eau est une adaptation, pas un lien de parenté.",
    methode: "On classe par caractères hérités d'un ancêtre commun, jamais par le lieu de vie ni par ce que l'animal fait.",
  },
  {
    type: "piegeCard",
    variant: "rouge",
    title: "Piège n°2 : confondre analogie et homologie",
    badge: "Nœud conceptuel",
    faux: "« Les ailes de l'oiseau et de la chauve-souris se ressemblent, donc ces animaux sont proches. »",
    vrai: "Ce sont des organes analogues : même fonction (voler), mais structures et origines différentes. Deux organes homologues (même os, comme le bras humain et la nageoire du dauphin) révèlent au contraire une parenté.",
    methode: "Analogie = même fonction, origines différentes. Homologie = même origine, ancêtre commun. C'est l'homologie qui sert à classer.",
  },
  {
    type: "piegeCard",
    variant: "orange",
    title: "Piège n°3 : confondre gène et allèle",
    badge: "Vocabulaire",
    faux: "Employer « gène » et « allèle » l'un pour l'autre.",
    vrai: "Le gène est la séquence d'ADN qui code un caractère ; l'allèle est l'une de ses versions. Un même gène peut exister sous plusieurs allèles dans une population.",
    methode: "Gène = la « rubrique » ; allèle = la « valeur » de cette rubrique chez un individu.",
  },
  {
    type: "piegeCard",
    variant: "bleu",
    title: "Piège n°4 : croire que l'évolution est orientée",
    badge: "Conception finaliste",
    faux: "« Les animaux évoluent pour s'adapter à leur milieu. »",
    vrai: "L'évolution n'a pas de but. Les mutations sont aléatoires ; la sélection naturelle, elle, n'est pas aléatoire : elle trie les variations selon le milieu. Le résultat ressemble à une adaptation, mais aucune intention n'est en jeu.",
    methode: "Distinguer le hasard (mutations) du tri (sélection). Éviter les formulations finalistes (« pour », « afin de »).",
  },
  {
    type: "primaireBox",
    title: "Ce que ça donne à l'école : le regard du futur enseignant",
    text: "À l'école, on ne fait pas de génétique. On construit pas à pas l'idée que la ressemblance entre êtres vivants peut révéler une parenté. En maternelle, on trie vivant et non-vivant. Au cycle 2, on classe par critères observables. Au cycle 3, on découvre les groupes emboîtés et l'ancêtre commun. Le jury valorise un candidat qui sait situer une notion dans cette progression et nommer l'obstacle des élèves à chaque étape (le plus tenace étant la classification par l'habitat).",
  },
  {
    type: "callout",
    variant: "info",
    title: "Ressources institutionnelles à citer",
    text: "BO de SVT du cycle 4 et BO du cycle 3 (programmes de référence) ; ressources Éduscol pour les SVT (progressions, activités de classification) ; le logiciel de classification PHYLOGENE pour le cycle 3 ; les listes rouges de l'UICN pour les données de biodiversité.",
  },
  {
    type: "ctaBox",
    text: "Le cours est en place ? Voyez comment on l'enseigne en classe.",
    buttonLabel: "Voir « En classe »",
    targetTab: "en-classe",
  },
];

/* ────────────────────────────────────────────────────────────
   Onglet « En classe » (commun) : séances et différenciation
──────────────────────────────────────────────────────────── */
const enClasseBlocks: Block[] = [
  {
    type: "callout",
    variant: "success",
    title: "De la maternelle au cycle 3",
    text: "Trois dispositifs progressifs : distinguer le vivant en maternelle, classer par critères au cycle 2, construire la phylogénie au cycle 3. Le point commun : on part toujours des conceptions des élèves avant de formaliser.",
  },
  {
    type: "table",
    title: "Séance cycle 1 (maternelle, 30 min) : « Vivant ou pas vivant ? »",
    headers: ["Temps", "Activité", "Rôle de l'enseignant"],
    rows: [
      ["10 min", "Situation déclenchante : une collection mêlant objets et êtres vivants (caillou, plume, graines, plante en pot, jouet). « Qu'est-ce qui est vivant ? »", "Laisser manipuler librement, observer les stratégies, recueillir le vocabulaire sans valider ni corriger."],
      ["10 min", "Tri collectif : chaque élève justifie un choix. On note les critères au tableau (« ça grandit », « ça mange »). La flamme bouge : est-elle vivante ?", "Reformuler sans corriger. La flamme est un bon contre-exemple. Garder la question ouverte."],
      ["10 min", "Trace collective : deux colonnes vivant / non-vivant avec les dessins des élèves. Première formulation des critères.", "Préciser que la trace évoluera avec les observations de la classe (élevage, plantation)."],
    ],
  },
  {
    type: "table",
    title: "Séance cycle 2 (CE1, 45 min) : « Classer les animaux »",
    headers: ["Temps", "Activité", "Rôle de l'enseignant"],
    rows: [
      ["10 min", "20 cartes animaux. « Rangez-les en groupes, autant que vous voulez, et justifiez. »", "Observer les stratégies : le tri par habitat (mer / terre / air) est fréquent et devra être déconstruit."],
      ["15 min", "Présentation des groupes. Les classements diffèrent : « Comment savoir qui a raison ? »", "Introduire le critère observable (présence ou absence d'un caractère) face au critère subjectif (« beau »)."],
      ["15 min", "Reclassement guidé avec 2 ou 3 critères (squelette interne, poils, plumes). Les élèves découvrent que le dauphin va avec le chien.", "Ne pas nommer encore « vertébré » ou « mammifère » : le vocabulaire suivra la construction du concept."],
      ["5 min", "Trace écrite : « On classe avec des critères qu'on peut observer. »", "Conserver les classements initiaux pour comparer en fin de séquence."],
    ],
  },
  {
    type: "table",
    title: "Séquence cycle 3 (CM1, 5 séances) : « Classer le vivant »",
    headers: ["Séance", "Déroulé"],
    rows: [
      ["1", "« Ce que je sais déjà » : recueil des conceptions, dessin libre d'un arbre du vivant. Fait apparaître les conceptions naïves (par habitat, par taille)."],
      ["2", "« Quels critères choisir ? » : recherche de critères observables. On distingue ressemblance trompeuse (dauphin / requin) et parenté (dauphin / cheval, mêmes os)."],
      ["3", "« Construire un arbre » : par groupes, un arbre emboîté avec 10 animaux. On compare les arbres : pourquoi diffèrent-ils ?"],
      ["4", "« L'arbre de référence » : découverte des groupes vertébrés, tétrapodes, amniotes, mammifères (logiciel PHYLOGENE ou documents). Surprise : la baleine est plus proche du cheval que du requin."],
      ["5", "Synthèse et trace écrite : « Deux animaux sont proches s'ils partagent des caractères hérités d'un ancêtre commun. » Comparaison avec les conceptions de la séance 1."],
    ],
  },
  {
    type: "callout",
    variant: "info",
    title: "Sortie nature et biodiversité locale (cycle 2 à cycle 3)",
    text: "Avant : formuler une question (« Quelles espèces dans la cour ? »), préparer les fiches d'observation et les règles de sécurité. Sur le terrain : relevé par groupes sur une petite zone, dessins, photos, comptage, clé de détermination simplifiée. En classe : liste de biodiversité locale, puis comparaison avec un autre milieu (« Pourquoi plus d'espèces ici qu'ailleurs ? ») pour le lien EDD.",
  },
  {
    type: "table",
    title: "Différenciation",
    headers: ["Profil d'élève", "Adaptation"],
    rows: [
      ["Difficulté de lecture", "Clé de détermination illustrée (photos plutôt que texte), fiche avec cases à cocher, rôle de manipulateur dans le groupe."],
      ["Élève DYS", "Police adaptée, validation orale des critères, manipulation des cartes plutôt qu'écrit."],
      ["Élève avancé", "Chercher un contre-exemple pour chaque critère, construire une clé dichotomique personnelle, prolonger vers la phylogénie d'un animal au choix."],
      ["Élève allophone", "Noms des animaux en plusieurs langues, valoriser la connaissance d'espèces d'autres pays."],
    ],
  },
  {
    type: "ctaBox",
    text: "Prêt à vous confronter au format du concours ?",
    buttonLabel: "Préparer l'épreuve",
    targetTab: "preparer",
  },
];

/* ────────────────────────────────────────────────────────────
   Onglet « Préparer l'épreuve » (différencié L3 / M2)
──────────────────────────────────────────────────────────── */
function preparerEpreuveBlocks(niveau: Niveau): Block[] {
  if (niveau === "l3") {
    return [
      {
        type: "callout",
        variant: "info",
        title: "Version concours L3",
        text: "Au L3, les questions portent surtout sur la maîtrise des savoirs disciplinaires et sur leur mise en œuvre en classe (niveau de réflexion attendu : celui du cycle 3). On attend des réponses claires, exactes et appuyées sur des exemples, plutôt qu'une analyse théorique approfondie.",
      },
      {
        type: "exerciceCard",
        variant: "crpe",
        objectifTag: "Cellule procaryote / eucaryote",
        title: "Question disciplinaire : procaryote ou eucaryote ?",
        question: "Expliquez la différence entre une cellule procaryote et une cellule eucaryote. Donnez un exemple de chaque.",
        correction: [
          { type: "line", label: "Procaryote", text: "Pas de noyau délimité par une membrane : l'ADN flotte dans le cytoplasme (nucléoïde). Pas d'organites membranaires. Taille de 1 à 10 µm. Exemple : une bactérie." },
          { type: "line", label: "Eucaryote", text: "Noyau délimité par une membrane, organites compartimentés (mitochondries...). Taille de 10 à 100 µm. Exemple : une cellule animale ou végétale." },
          { type: "note", text: "À éviter : dire que les eucaryotes sont « plus évolués ». Ils sont différents, pas supérieurs. Les bactéries ont colonisé tous les milieux." },
        ],
      },
      {
        type: "exerciceCard",
        variant: "crpe",
        objectifTag: "Groupes emboîtés",
        title: "Question disciplinaire : un arbre à construire",
        question: "Représentez par un schéma légendé les relations de parenté entre Homme, Dauphin, Requin et Grenouille. Justifiez le placement de chacun.",
        correction: [
          { type: "line", label: "Vertébrés", text: "Requin, Grenouille, Dauphin, Homme (tous ont une colonne vertébrale)." },
          { type: "line", label: "Tétrapodes", text: "Grenouille, Dauphin, Homme (le Dauphin a des membres antérieurs transformés en nageoires et des vestiges de membres postérieurs)." },
          { type: "line", label: "Amniotes puis Mammifères", text: "Dauphin et Homme (amnios, puis poils et glandes mammaires)." },
          { type: "line", label: "Conclusion", text: "Homme et Dauphin sont les plus proches ; le Requin est le plus éloigné. La ressemblance Dauphin / Requin est une analogie (adaptation au milieu aquatique), pas une parenté." },
        ],
      },
      {
        type: "exerciceCard",
        variant: "crpe",
        objectifTag: "Gène, allèle, mutation",
        title: "Question disciplinaire : le vocabulaire de la génétique",
        question: "Définissez gène, allèle et mutation, puis montrez leurs liens.",
        correction: [
          { type: "line", label: "Gène", text: "Séquence d'ADN qui code une protéine, située à un endroit précis d'un chromosome." },
          { type: "line", label: "Allèle", text: "Version d'un gène, issue d'une mutation. Chaque individu possède deux allèles par gène (un par chromosome de la paire)." },
          { type: "line", label: "Mutation", text: "Modification accidentelle de la séquence d'ADN, le plus souvent neutre." },
          { type: "line", label: "Liens", text: "Une mutation crée un nouvel allèle ; les allèles font varier les caractères au sein de l'espèce (diversité génétique) ; cette diversité est le matériau de la sélection naturelle, donc de l'évolution." },
        ],
      },
      {
        type: "exerciceCard",
        variant: "crpe",
        objectifTag: "Obstacle des élèves",
        title: "Question didactique : faire évoluer une conception",
        enonce: "Un élève de CM1 affirme : « Le dauphin est un poisson parce qu'il vit dans la mer. »",
        question: "Identifiez la conception et proposez une situation pour la faire évoluer.",
        correction: [
          { type: "line", label: "Conception", text: "Classification par l'habitat (le lieu de vie) au lieu de la parenté. Valable dans le quotidien, mais inadaptée en science." },
          { type: "line", label: "Situation de rupture", text: "Comparer les squelettes du membre antérieur du dauphin, du cheval, de l'humain, de la chauve-souris : ce sont les mêmes os malgré des formes différentes (organes homologues). Conclusion : le dauphin est plus proche du cheval que du requin." },
        ],
      },
      {
        type: "exerciceCard",
        variant: "crpe",
        objectifTag: "Mise en œuvre",
        title: "Question didactique : concevoir une séance",
        question: "Proposez une séance de 45 min sur la biodiversité locale en CM2 : objectif, déroulé, matériel.",
        correction: [
          { type: "line", label: "Objectif", text: "L'élève identifie au moins cinq espèces locales et explique en quoi leur variété constitue de la biodiversité." },
          { type: "line", label: "Déroulé", text: "Situation déclenchante (photo de la cour, « combien d'espèces ? ») ; sortie d'observation par groupes (dessin ou photo) ; mise en commun et comptage ; trace écrite avec la définition de la biodiversité spécifique et un lien EDD." },
          { type: "line", label: "Matériel", text: "Carnets ou tablettes, fiches d'observation, clé de détermination simplifiée." },
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Erreurs fréquentes et formulations qui font la différence",
        text: "À éviter : confondre classification phylogénétique et linnéenne ; oublier de schématiser quand la question le demande ; confondre analogie et homologie ; proposer une séance de classification sans cibler l'obstacle (la classification par l'habitat).\n\nUne formulation utile : « La classification ne repose pas sur ce que les animaux font ni sur leur apparence, mais sur ce qu'ils ont hérité d'un ancêtre commun. »",
      },
    ];
  }

  // Version M2
  return [
    {
      type: "callout",
      variant: "info",
      title: "Version concours M2",
      text: "Au M2, on attend davantage qu'une réponse exacte : une analyse critique des situations d'enseignement, une articulation des cycles et la mobilisation des cadres didactiques (Bachelard, Brousseau, Astolfi). La structure attendue est souvent : analyser, évaluer au regard de critères, proposer une amélioration argumentée.",
    },
    {
      type: "exerciceCard",
      variant: "crpe",
      objectifTag: "Analyse de séquence",
      title: "Question didactique : est-ce une vraie démarche d'investigation ?",
      enonce: "On vous présente une séquence de classification où l'enseignant fournit lui-même les critères de tri aux élèves.",
      question: "Cette séquence relève-t-elle d'une démarche d'investigation ? Que manque-t-il ? Proposez une amélioration argumentée.",
      correction: [
        { type: "line", label: "Critères", text: "Une démarche d'investigation suppose : situation déclenchante, hypothèses des élèves, conception d'un protocole, résultats, interprétation, conclusion, trace écrite." },
        { type: "line", label: "Point faible", text: "Si l'enseignant fournit les critères, il n'y a pas de dévolution du problème (Brousseau) : les élèves appliquent une règle au lieu de chercher. L'obstacle (classer par habitat) n'est pas explicitement travaillé." },
        { type: "line", label: "Amélioration", text: "Prévoir une phase où les élèves proposent et testent leurs propres critères, puis confrontent leurs arbres entre groupes. Introduire un contre-exemple de rupture (dauphin / requin) avant de confronter à un arbre de référence." },
      ],
    },
    {
      type: "exerciceCard",
      variant: "crpe",
      objectifTag: "Articulation des cycles",
      title: "Question didactique : articuler cycle 2 et cycle 3",
      question: "Comment articuler les programmes des cycles 2 et 3 dans une progression sur la classification ? Quels obstacles anticipez-vous à chaque niveau ?",
      correction: [
        { type: "line", label: "Cycle 2", text: "Classer par critères observables simples (pattes, poils, plumes). Obstacle : le tri par habitat ou par ressemblance globale. Travail : apprendre à formuler un critère de présence ou d'absence." },
        { type: "line", label: "Cycle 3", text: "Identifier des caractères communs, notion d'ancêtre commun et de groupes emboîtés. Obstacle : confondre analogie et homologie. Travail : anatomie comparée des membres, contre-exemples systématiques." },
        { type: "line", label: "Lien", text: "Le cycle 2 installe l'habitude de classer par critères observables : c'est le prérequis pour comprendre, au cycle 3, que ces critères révèlent une parenté." },
        { type: "note", text: "Les rapports de jury valorisent les candidats qui articulent explicitement les deux cycles plutôt que de traiter une notion isolément." },
      ],
    },
    {
      type: "exerciceCard",
      variant: "crpe",
      objectifTag: "Posture professionnelle",
      title: "Question didactique : enseigner l'évolution",
      enonce: "En cycle 3, certains élèves ou familles expriment des convictions contraires à la théorie de l'évolution.",
      question: "Comment traitez-vous cette situation ? Mobilisez le cadre institutionnel et une stratégie pédagogique.",
      correction: [
        { type: "line", label: "Cadre", text: "L'évolution est un fait scientifique inscrit aux programmes : l'enseignant a l'obligation de l'enseigner. La liberté de conscience des élèves est respectée mais ne modifie pas les contenus." },
        { type: "line", label: "Posture", text: "Distinguer deux registres : le registre scientifique (preuves, mécanismes) et celui des croyances (qui relève du privé). L'école enseigne des savoirs construits et vérifiables." },
        { type: "line", label: "Stratégie", text: "Ancrer l'enseignement sur des preuves concrètes (fossiles, anatomie comparée). Distinguer évolution (processus documenté), origine de la vie et questions de finalité. Reformuler avec respect en cas de désaccord." },
        { type: "note", text: "La neutralité ne consiste pas à mettre science et croyance sur le même plan : elle consiste à enseigner la science avec rigueur tout en respectant la liberté de conscience." },
      ],
    },
    {
      type: "callout",
      variant: "warning",
      title: "Ce que les jurys attendent et trouvent trop rarement",
      text: "Citer un attendu de fin de cycle avec sa formulation ; nommer l'obstacle conceptuel précis avant de proposer la remédiation ; articuler la progression entre cycles ; citer des ressources (PHYLOGENE, Éduscol). À éviter : proposer une séquence sans mentionner les conceptions initiales, ou traiter l'évolution comme une simple opinion.",
    },
  ];
}

/* ────────────────────────────────────────────────────────────
   Onglet « S'entraîner » (exercices guidés + simulation)
   La question didactique de la simulation diffère selon le niveau.
──────────────────────────────────────────────────────────── */
function entrainerBlocks(niveau: Niveau): Block[] {
  const ex1Q3 =
    niveau === "m2"
      ? "3. Proposez une activité pour faire évoluer ce classement. En vous appuyant sur Bachelard, expliquez pourquoi l'obstacle persistera probablement après une seule séance."
      : "3. Proposez une activité pour faire évoluer ce classement vers une classification phylogénétique simplifiée.";

  const ex1Q3Correction =
    niveau === "m2"
      ? "Activité : anatomie comparée des membres antérieurs (dauphin, cheval, humain, chauve-souris, oiseau). Justification (Bachelard) : la classification par l'habitat est un obstacle de l'expérience première, ancré dans le vécu quotidien. Il ne disparaît pas après une seule confrontation : il faut multiplier les contre-exemples (loutre, manchot, hippopotame) sur plusieurs séances."
      : "Activité : observer les squelettes comparés du membre antérieur (dauphin, cheval, humain, chauve-souris, oiseau). Les os sont les mêmes (humérus, radius, ulna, métacarpes) malgré des formes différentes. Cette ressemblance profonde révèle une parenté : on reclasse avec ce nouveau critère.";

  const simQ2 =
    niveau === "m2"
      ? "Question 2 (didactique) : la séance de classification décrite respecte-t-elle les principes d'une démarche d'investigation ? Analysez en vous appuyant sur Brousseau et sur les ressources Éduscol, puis proposez deux améliorations argumentées."
      : "Question 2 (didactique) : à partir des documents, proposez une séance de 45 min qui articule biodiversité et classification pour des élèves de CM1.";

  const simQ2Correction =
    niveau === "m2"
      ? "Analyse des écarts avec la démarche d'investigation (dévolution, place des hypothèses) ; références à Brousseau et aux ressources Éduscol ; deux améliorations opérationnelles (faire chercher les critères, introduire un contre-exemple de rupture)."
      : "Objectif formulé côté élève ; documents exploités ; déroulé cohérent en quatre phases ; obstacle conceptuel identifié (classification par l'habitat) ; lien explicite avec le programme.";

  return [
    {
      type: "callout",
      variant: "success",
      text: "Deux exercices guidés puis une mini-simulation au format du concours. Cherchez votre réponse avant de consulter la correction.",
    },
    {
      type: "exerciceCard",
      variant: "annale",
      objectifTag: "Analyser une production d'élève",
      title: "Exercice guidé : analyser un classement d'élèves",
      enonce:
        "Un groupe de CE2 a classé des animaux ainsi :\n- Groupe 1 : thon, requin, dauphin (« animaux de la mer »)\n- Groupe 2 : cheval, chien, chat (« animaux de la maison »)\n- Groupe 3 : aigle, hirondelle, chauve-souris (« animaux qui volent »)",
      question:
        "1. Quel critère les élèves utilisent-ils ? Est-il scientifiquement pertinent ?\n2. Identifiez deux erreurs au regard de la classification phylogénétique.\n" +
        ex1Q3,
      correction: [
        { type: "line", label: "1.", text: "Critère : l'habitat ou le mode de vie. Non pertinent : une espèce peut vivre dans plusieurs milieux, et des espèces très éloignées peuvent partager le même milieu." },
        { type: "line", label: "2.", text: "(a) Le dauphin avec le requin : le dauphin est un mammifère (proche du cheval), le requin un poisson. (b) La chauve-souris avec les oiseaux : c'est un mammifère, ses ailes sont des membres antérieurs à doigts allongés." },
        { type: "line", label: "3.", text: ex1Q3Correction },
      ],
    },
    {
      type: "exerciceCard",
      variant: "crpe",
      objectifTag: "Simulation",
      title: "Mini-simulation : biodiversité et classification (25 min)",
      enonce:
        "Extrait de dossier :\n- Document 1 : article sur le déclin de la biodiversité (données IPBES).\n- Document 2 : un arbre phylogénétique simplifié des vertébrés, sans légende complète.\n- Document 3 : extrait du BO du cycle 3 sur la classification du vivant.",
      question:
        "Question 1 (disciplinaire) : complétez l'arbre du document 2 en ajoutant les groupes emboîtés manquants et, pour chacun, le caractère partagé dérivé correspondant.\n" +
        simQ2,
      correction: [
        { type: "line", label: "Q1", text: "Groupes attendus : vertébrés (colonne vertébrale), tétrapodes (quatre membres), amniotes (amnios), mammifères (poils). Schéma lisible et légendé." },
        { type: "line", label: "Q2", text: simQ2Correction },
      ],
    },
  ];
}

/* ────────────────────────────────────────────────────────────
   Onglet Quiz éclair (commun)
──────────────────────────────────────────────────────────── */
const quizBlocks: Block[] = [
  {
    type: "callout",
    variant: "info",
    title: "Six questions pour vérifier l'essentiel",
    text: "Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
  },
  {
    type: "quizBlock",
    questions: [
      {
        objectifId: "v1",
        question: "Qu'est-ce qui distingue une cellule procaryote d'une cellule eucaryote ?",
        options: [
          "La procaryote est toujours plus petite",
          "L'eucaryote possède un noyau délimité par une membrane, pas la procaryote",
          "La procaryote ne possède pas d'ADN",
          "Seule l'eucaryote peut se reproduire",
        ],
        correctIndex: 1,
        explanation: "Eucaryote = noyau délimité par une membrane (animaux, végétaux, champignons). Procaryote = ADN libre dans le cytoplasme (bactéries). La taille n'est pas un critère absolu.",
      },
      {
        objectifId: "v4",
        question: "Pourquoi le dauphin est-il classé avec les mammifères et non avec les poissons ?",
        options: [
          "Parce qu'il est plus intelligent",
          "Parce qu'il possède des caractères hérités d'un ancêtre commun aux mammifères (poils, glandes mammaires)",
          "Parce qu'il vit moins longtemps dans l'eau",
          "Parce qu'il se nourrit de poissons",
        ],
        correctIndex: 1,
        explanation: "On classe sur les caractères hérités d'un ancêtre commun, pas sur le mode de vie. Les nageoires du dauphin sont des membres antérieurs modifiés.",
      },
      {
        objectifId: "v4",
        question: "Qu'est-ce qu'une synapomorphie ?",
        options: [
          "Une ressemblance due à l'adaptation au même milieu",
          "Un caractère partagé hérité d'un ancêtre commun, qui définit un groupe",
          "Une mutation provoquant une maladie",
          "La fusion de deux cellules lors de la reproduction",
        ],
        correctIndex: 1,
        explanation: "Une synapomorphie est un caractère dérivé partagé : par exemple les poils définissent le groupe des mammifères.",
      },
      {
        objectifId: "v7",
        question: "Quelle est la conception la plus fréquente chez des élèves de cycle 3 sur la classification ?",
        options: [
          "Penser que les bactéries ne sont pas vivantes",
          "Classer les animaux par leur habitat plutôt que par leurs caractères",
          "Penser que les plantes ne sont pas vivantes",
          "Confondre gène et chromosome",
        ],
        correctIndex: 1,
        explanation: "La classification par l'habitat est l'obstacle le plus documenté : intuitif dans la vie courante, mais incompatible avec la phylogénie.",
      },
      {
        objectifId: "v5",
        question: "Laquelle de ces ressemblances est une analogie (et non une homologie) ?",
        options: [
          "Le bras humain et la nageoire du dauphin (mêmes os)",
          "Les ailes de la chauve-souris et celles de l'oiseau (même fonction, structures différentes)",
          "Le cœur des mammifères et celui des oiseaux",
          "Les yeux des primates et des autres mammifères",
        ],
        correctIndex: 1,
        explanation: "Analogie = même fonction, origines différentes (convergence). Chauve-souris et oiseau résolvent différemment le même problème : voler.",
      },
      {
        objectifId: "v3",
        question: "Lequel n'est PAS l'un des trois niveaux de biodiversité ?",
        options: [
          "Diversité spécifique",
          "Diversité génétique",
          "Diversité des écosystèmes",
          "Diversité morphologique",
        ],
        correctIndex: 3,
        explanation: "Les trois niveaux reconnus sont : spécifique, génétique, des écosystèmes. La diversité des formes est une conséquence de la diversité génétique, pas un niveau à part.",
      },
    ],
  },
  {
    type: "ctaBox",
    text: "Quiz réussi ? Fixez la notion avec les flashcards.",
    buttonLabel: "Voir les flashcards",
    targetTab: "flash",
  },
];

/* ────────────────────────────────────────────────────────────
   Onglet Flashcards (commun)
──────────────────────────────────────────────────────────── */
const flashBlocks: Block[] = [
  {
    type: "callout",
    variant: "info",
    text: "Répondez dans votre tête avant de révéler la réponse, puis évaluez-vous.",
  },
  {
    type: "flashcardDeck",
    cards: [
      {
        question: "Quels sont les trois caractères communs à toutes les cellules ?",
        answer: "Une membrane plasmique, de l'ADN, des ribosomes. Ces trois points fondent l'unité du vivant.",
      },
      {
        question: "Sur quoi repose la classification phylogénétique ?",
        answer: "Sur la parenté : les caractères partagés hérités d'un ancêtre commun (les synapomorphies), et non sur les ressemblances d'apparence ni sur le mode de vie.",
        astuce: "On classe sur ce qu'on a hérité, pas sur ce qu'on fait ni sur où l'on vit.",
      },
      {
        question: "Analogie ou homologie : quelle différence, et laquelle sert à classer ?",
        answer: "Analogie = même fonction, origines différentes (ailes oiseau / chauve-souris). Homologie = même origine, ancêtre commun (bras humain / nageoire du dauphin). C'est l'homologie qui sert à classer.",
      },
      {
        question: "Quelle est la différence entre un gène et un allèle ?",
        answer: "Le gène est une séquence d'ADN qui code un caractère. L'allèle est une version de ce gène. Un même gène peut avoir plusieurs allèles dans une population.",
      },
      {
        question: "Pourquoi dit-on que l'évolution n'est pas orientée ?",
        answer: "Parce que les mutations sont aléatoires : elles ne surviennent pas « pour » s'adapter. La sélection naturelle, elle, trie ces variations selon le milieu. Le résultat ressemble à une adaptation, sans aucune intention.",
      },
      {
        question: "Quels sont les trois niveaux de biodiversité ?",
        answer: "Diversité spécifique (nombre d'espèces), diversité génétique (variabilité dans une espèce), diversité des écosystèmes (variété des milieux).",
      },
      {
        question: "Quel est l'obstacle le plus fréquent des élèves quand on classe le vivant ?",
        answer: "Classer par l'habitat ou le mode de vie (« les animaux de la mer »). On le déconstruit avec des contre-exemples et l'anatomie comparée.",
      },
    ],
  },
];

/* ────────────────────────────────────────────────────────────
   Onglet Mémo (commun)
──────────────────────────────────────────────────────────── */
const memoBlocks: Block[] = [
  {
    type: "callout",
    variant: "info",
    title: "Toute la notion en un coup d'œil",
    text: "La carte mentale de la fiche, à parcourir avant le jour J une fois chaque partie travaillée.",
  },
  {
    type: "mindmapLite",
    center: { title: "Unité et diversité du vivant", subtitle: "SVT" },
    branches: [
      {
        title: "Unité : la cellule",
        variant: "green",
        lines: ["Membrane, ADN, ribosomes", "Procaryote / eucaryote"],
      },
      {
        title: "Diversité : biodiversité",
        variant: "green",
        lines: ["Spécifique, génétique, écosystèmes", "Enjeu EDD"],
      },
      {
        title: "Classer : phylogénie",
        variant: "blue",
        lines: ["Groupes emboîtés", "Caractère partagé dérivé"],
      },
      {
        title: "Analogie / homologie",
        variant: "yellow",
        lines: ["Fonction vs origine", "L'homologie classe"],
      },
      {
        title: "Génétique et évolution",
        variant: "purple",
        lines: ["Gène, allèle, mutation", "Mutation, sélection, évolution"],
      },
      {
        title: "Obstacle des élèves",
        variant: "blue",
        dashed: true,
        lines: ["Classer par l'habitat", "Évolution « orientée »"],
      },
    ],
  },
];

/* ────────────────────────────────────────────────────────────
   Fabrique
──────────────────────────────────────────────────────────── */
function ficheUniteDiversiteVivant(niveau: Niveau): Fiche {
  const niveauLabel = niveau === "m2" ? "Concours M2" : "Concours L3";

  return {
    slug: "unite-et-diversite-du-vivant",
    matiere: "sciences",
    numero: 1,
    partie: PARTIE,
    title: "Unité et diversité du vivant",
    subtitle:
      "Cellule, biodiversité, classification phylogénétique et génétique : ce qui rassemble les êtres vivants et ce qui les distingue, de la maternelle à la 3e",
    badges: [
      { label: "★★★ Notion clé du CRPE", variant: "hot" },
      { label: `${niveauLabel} · Cycles 1 à 4`, variant: "info" },
    ],
    metaTitle: "Unité et diversité du vivant (CRPE Sciences) · Fiche de révision | Maitrizz",
    metaDescription:
      "Fiche CRPE Sciences : cellule procaryote et eucaryote, biodiversité, classification phylogénétique, groupes emboîtés, analogie et homologie, génétique et évolution. Cours, séances par cycle, préparation de l'épreuve, quiz et flashcards.",
    tabGroups: [
      {
        id: "decouvrir",
        label: "Découvrir",
        icon: "",
        tabs: [
          { id: "vue-d-ensemble", label: "Vue d'ensemble", icon: "", blocks: vueDEnsembleBlocks },
          { id: "cours", label: "Cours", icon: "", blocks: coursBlocks },
        ],
      },
      {
        id: "pratiquer",
        label: "Pratiquer",
        icon: "",
        tabs: [
          { id: "en-classe", label: "En classe", icon: "", blocks: enClasseBlocks },
          { id: "preparer", label: "Préparer l'épreuve", icon: "", blocks: preparerEpreuveBlocks(niveau) },
          { id: "entrainer", label: "S'entraîner", icon: "", blocks: entrainerBlocks(niveau) },
        ],
      },
      {
        id: "reviser",
        label: "Réviser",
        icon: "",
        tabs: [
          { id: "quiz", label: "Quiz éclair", icon: "", blocks: quizBlocks },
          { id: "flash", label: "Flashcards", icon: "", blocks: flashBlocks },
          { id: "memo", label: "Mémo", icon: "", blocks: memoBlocks },
          { id: "autoeval", label: "Auto-évaluation", icon: "", blocks: [{ type: "autoEvalChecklist", items: OBJECTIFS }] },
        ],
      },
    ],
  };
}

export const ficheUniteDiversiteVivantL3 = ficheUniteDiversiteVivant("l3");
export const ficheUniteDiversiteVivantM2 = ficheUniteDiversiteVivant("m2");
