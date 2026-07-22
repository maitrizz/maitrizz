import type { Fiche } from "@/components/fiche/types";

/**
 * Problèmes transversaux (M2) : brique d'entraînement qui croise plusieurs
 * notions dans un même problème, comme le fait l'épreuve réelle. Les fiches
 * notion travaillent chaque outil isolément ; ici on entraîne le réflexe de
 * combiner (décoder, identifier les notions en jeu, enchaîner les étapes,
 * vérifier la cohérence finale).
 *
 * Placée en fin de parcours M2 (numéro 28, Partie 7). Chaque problème renvoie,
 * via des liens internes, aux fiches notion correspondantes. Calculs vérifiés.
 * M2 uniquement pour l'instant : la dérivation L3 (tous les problèmes sont déjà
 * en programme cycle 4) sera ajoutée à la liste L3 dans un second temps.
 */

const OBJECTIFS = [
  { id: "t1", label: "Je décode un énoncé en contexte et je repère les notions à mobiliser" },
  { id: "t2", label: "J'organise une résolution en plusieurs étapes liées" },
  { id: "t3", label: "Je sais combiner proportionnalité, pourcentages, fonctions et grandeurs dans un même problème" },
  { id: "t4", label: "Je sais combiner les outils de géométrie (Pythagore, Thalès, trigonométrie, aires) dans un même problème" },
  { id: "t5", label: "Je rédige chaque étape et je vérifie la cohérence du résultat final (unité, ordre de grandeur)" },
];

export const ficheProblemesTransversaux: Fiche = {
  slug: "problemes-transversaux",
  matiere: "mathematiques",
  numero: 28,
  partie: "Partie 7 : Entraînement transversal",
  title: "Problèmes transversaux",
  subtitle:
    "S'entraîner à combiner plusieurs notions dans un même problème, comme le fait l'épreuve réelle.",
  badges: [
    { label: "★★★ Le format de l'épreuve", variant: "hot" },
    { label: "Transversal · toutes parties", variant: "info" },
  ],
  metaTitle:
    "Problèmes transversaux de mathématiques · Fiche de révision CRPE",
  metaDescription:
    "Problèmes transversaux du CRPE : s'entraîner à combiner proportionnalité, pourcentages, géométrie, grandeurs et fonctions dans un même problème, comme à l'épreuve écrite. Méthode pour décoder un énoncé, problèmes progressifs corrigés et auto-évaluation.",
  tabGroups: [
    {
      id: "decouvrir",
      label: "Découvrir",
      icon: "",
      tabs: [
        {
          id: "vue-d-ensemble",
          label: "Pourquoi le transversal",
          icon: "",
          blocks: [
            {
              type: "sommaireApercu",
              title: "L'enjeu en 3 idées",
              intro:
                "Les fiches notion travaillent chaque outil séparément. Mais le jour de l'épreuve, un seul problème en combine souvent deux ou trois : une question de proportionnalité débouche sur une aire, une figure géométrique mêle Pythagore et trigonométrie. Cette fiche entraîne précisément ce réflexe de combinaison.",
              items: [
                { number: "①", title: "On révise en silos, on est évalué en transversal", text: "Savoir chaque notion ne suffit pas : il faut reconnaître, dans un énoncé en contexte, lesquelles mobiliser et dans quel ordre." },
                { number: "②", title: "Une méthode pour décoder", text: "Avant de calculer : lire, repérer les données, nommer les notions en jeu, planifier les étapes. C'est l'objet de l'onglet Méthode." },
                { number: "③", title: "Des problèmes progressifs", text: "Six problèmes croisés, du plus simple (deux notions) au problème ouvert (plusieurs notions et une part de raisonnement), tous corrigés et rédigés." },
              ],
            },
            {
              type: "callout",
              variant: "info",
              icon: "💡",
              title: "À faire après les fiches notion",
              text: "Cette fiche suppose que les notions de base sont déjà travaillées. Si un problème vous bloque sur un outil précis, suivez le lien vers la fiche correspondante, révisez, puis revenez.",
            },
            {
              type: "ctaBox",
              text: "Avant de vous lancer, voyez la méthode pour aborder un énoncé qui croise plusieurs notions.",
              buttonLabel: "Voir la méthode",
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
              title: "Le réflexe transversal",
              text: "Devant un problème en contexte, la difficulté n'est pas le calcul : c'est de voir quelles notions sont en jeu et comment les enchaîner. Voici la démarche en quatre temps.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : les notions le plus souvent croisées",
              blocks: [
                {
                  type: "paragraph",
                  text: "Les problèmes en contexte combinent presque toujours quelques notions clés. Gardez les liens sous la main : [proportionnalité et pourcentages](fiche:proportionnalite-pourcentages), [périmètres, aires et volumes](fiche:perimetres-aires-volumes), [grandeurs composées et conversions](fiche:durees-masses-grandeurs-composees), [fonctions linéaires et affines](fiche:fonctions-lineaires-affines), [théorème de Pythagore](fiche:theoreme-de-pythagore), [Thalès et similitude](fiche:theoreme-de-thales-similitude), [trigonométrie](fiche:trigonometrie-triangle-rectangle) et [probabilités](fiche:probabilites).",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Décoder l'énoncé avant de calculer",
              intro: "**On ne calcule rien tant qu'on n'a pas compris la situation.** Les premières minutes servent à lire, pas à poser des opérations.",
              steps: [
                {
                  number: "1",
                  text: "**Lire l'énoncé en entier**, puis chaque question : repérer ce qui est donné et ce qui est demandé.",
                  example: { lines: ["Surligner les nombres et leurs unités au passage"] },
                },
                {
                  number: "2",
                  text: "**Repérer les unités** : longueurs, aires, volumes, durées, prix. Un changement d'unité est souvent une étape cachée.",
                  warn: "⚠️ Une aire en m² et un rendement en m²/L : c'est le signe d'une proportionnalité à venir.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Identifier les notions en jeu",
              intro: "**Chaque donnée est un indice.** À chaque grandeur correspond un outil.",
              steps: [
                {
                  number: "1",
                  text: "**Associer chaque donnée à une notion** : un triangle rectangle appelle Pythagore ou la trigonométrie, deux grandeurs proportionnelles appellent un coefficient, une évolution en pourcentage appelle un coefficient multiplicateur.",
                  example: { lines: ["« angle » + « côté » → trigonométrie ; « échelle » → proportionnalité"] },
                },
                {
                  number: "2",
                  text: "**Lister les notions repérées** en marge : c'est la carte du problème.",
                  example: { lines: ["Problème 1 : aires + proportionnalité + arrondi"] },
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Planifier l'enchaînement des étapes",
              intro: "**Souvent, le résultat d'une question sert à la suivante.** On planifie l'ordre avant de se lancer.",
              steps: [
                {
                  number: "1",
                  text: "**Ordonner les étapes** : ce qui se calcule directement d'abord, ce qui dépend d'un résultat précédent ensuite.",
                  example: { lines: ["Aire → volume de peinture → nombre de pots → coût"] },
                },
                {
                  number: "2",
                  text: "**Si une question est bloquante**, on la laisse et on traite les suivantes : elles sont souvent indépendantes.",
                  warn: "⚠️ Ne pas abandonner tout un problème à cause d'une seule question.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Exécuter, rédiger, vérifier",
              intro: "**On rédige chaque étape et on conclut par une phrase.** Le résultat seul ne rapporte pas tous les points.",
              steps: [
                {
                  number: "1",
                  text: "**Annoncer l'outil utilisé**, poser le calcul, conclure avec l'unité.",
                  example: { lines: ["« D'après le théorème de Pythagore… donc la hauteur est 4,8 m. »"] },
                },
                {
                  number: "2",
                  text: "**Vérifier la cohérence finale** : ordre de grandeur, unité, plausibilité.",
                  example: { lines: ["Une probabilité est entre 0 et 1 ; un nombre de pots est un entier"] },
                },
              ],
            },
            {
              type: "ctaBox",
              text: "Méthode en tête ? Passez aux problèmes.",
              buttonLabel: "S'entraîner",
              targetTab: "appli",
            },
          ],
        },
      ],
    },
    {
      id: "pratiquer",
      label: "S'entraîner",
      icon: "",
      tabs: [
        {
          id: "appli",
          label: "Problèmes",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "success",
              text: "Six problèmes qui croisent plusieurs notions, du plus simple au problème ouvert. Cherchez avant de regarder la correction, et listez les notions en jeu avant de calculer. Chaque problème renvoie aux fiches notion utiles.",
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 · Deux notions à combiner",
              sub: "Un enchaînement court et direct",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              level: "n1",
              title: "Problème 1 · Repeindre un plafond",
              objectifTag: "Aires + proportionnalité",
              enonce:
                "On repeint le plafond d'une salle de classe, de forme rectangulaire, mesurant 8 m sur 6 m. On applique deux couches.\nLa peinture couvre 12 m² par litre. Elle se vend en pots de 2,5 L, à 18 € le pot.",
              question:
                "a) Quelle surface totale faut-il couvrir, en tenant compte des deux couches ?\nb) Quel volume de peinture faut-il ?\nc) Combien de pots faut-il acheter, et quel est le coût ? Combien de peinture restera-t-il ?",
              correction: [
                { type: "line", label: "a)", text: "Aire du plafond = 8 × 6 = 48 m². Pour deux couches : 48 × 2 = **96 m²** à couvrir." },
                { type: "line", label: "b)", text: "Le rendement (12 m²/L) relie surface et volume par proportionnalité : volume = 96 ÷ 12 = **8 L**." },
                { type: "line", label: "c)", text: "8 ÷ 2,5 = 3,2 : il faut **4 pots** (on arrondit à l'entier supérieur, on ne peut pas acheter un tiers de pot). Coût = 4 × 18 = **72 €**. Peinture achetée = 4 × 2,5 = 10 L, donc il reste 10 − 8 = **2 L**." },
                { type: "note", text: "Notions croisées : [aires](fiche:perimetres-aires-volumes) et [proportionnalité](fiche:proportionnalite-pourcentages). Piège classique : oublier les deux couches, ou arrondir le nombre de pots à l'inférieur." },
                { type: "formulationCrpe", text: "L'aire à peindre est de 96 m² (48 m² par couche, deux couches). À 12 m² par litre, il faut 8 L de peinture, soit 4 pots de 2,5 L (3,2 arrondi à l'entier supérieur). Le coût est de 72 € et il reste 2 L de peinture." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              level: "n1",
              title: "Problème 2 · L'échelle contre le mur",
              objectifTag: "Pythagore + trigonométrie",
              enonce:
                "Une échelle de 5 m est appuyée contre un mur vertical. Le pied de l'échelle est posé à 1,4 m du mur, sur un sol horizontal.",
              question:
                "a) À quelle hauteur l'échelle touche-t-elle le mur ?\nb) Quel angle l'échelle fait-elle avec le sol ? (arrondir au degré)",
              correction: [
                { type: "line", label: "a)", text: "Le mur, le sol et l'échelle forment un triangle rectangle dont l'échelle est l'hypoténuse. D'après le théorème de Pythagore : h² = 5² − 1,4² = 25 − 1,96 = 23,04, donc h = √23,04 = **4,8 m**." },
                { type: "line", label: "b)", text: "Dans ce triangle rectangle, le côté adjacent à l'angle au sol est 1,4 m et l'hypoténuse 5 m : cos(angle) = 1,4 ÷ 5 = 0,28, donc angle = arccos(0,28) ≈ **74°**." },
                { type: "note", text: "Notions croisées : [théorème de Pythagore](fiche:theoreme-de-pythagore) et [trigonométrie](fiche:trigonometrie-triangle-rectangle). Vérification : 4,8 m est inférieur à 5 m (l'hypoténuse est le plus grand côté) : cohérent." },
                { type: "formulationCrpe", text: "Le triangle formé est rectangle, d'hypoténuse 5 m. Par le théorème de Pythagore, la hauteur atteinte vaut √(5² − 1,4²) = 4,8 m. L'angle avec le sol vérifie cos(angle) = 1,4 / 5, soit un angle d'environ 74°." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★",
              label: "Niveau 2 · Trois notions et plusieurs étapes",
              sub: "Mise en contexte plus longue",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              level: "n2",
              title: "Problème 3 · Deux salles de sport",
              objectifTag: "Fonctions affines + inéquation + pourcentages",
              enonce:
                "Deux salles proposent un abonnement.\nOffre A : 30 € d'inscription, puis 25 € par mois.\nOffre B : pas d'inscription, 32 € par mois.",
              question:
                "a) Exprimer le coût total en fonction du nombre n de mois, pour chaque offre.\nb) À partir de combien de mois l'offre A devient-elle moins chère que l'offre B ?\nc) Pour la première année (12 mois), l'offre B accorde une remise de 15 % sur le tarif mensuel. Quel est le nouveau coût de B sur 12 mois ? Est-il alors plus avantageux que A sur 12 mois ?",
              correction: [
                { type: "line", label: "a)", text: "Ce sont deux fonctions affines du nombre de mois n : A(n) = 30 + 25n et B(n) = 32n." },
                { type: "line", label: "b)", text: "A moins chère que B : 30 + 25n < 32n, soit 30 < 7n, soit n > 30 ÷ 7 ≈ 4,29. Comme n est entier, l'offre A devient moins chère **à partir de 5 mois**." },
                { type: "line", label: "c)", text: "Remise de 15 % : coefficient multiplicateur 0,85, donc tarif mensuel = 32 × 0,85 = 27,20 €. Sur 12 mois : B = 27,20 × 12 = **326,40 €**. Or A sur 12 mois = 30 + 25 × 12 = **330 €**. Avec la remise, B (326,40 €) est légèrement plus avantageux que A (330 €)." },
                { type: "note", text: "Notions croisées : [fonctions affines](fiche:fonctions-lineaires-affines), [inéquations](fiche:equations-inequations-systemes) et [pourcentages](fiche:proportionnalite-pourcentages)." },
                { type: "formulationCrpe", text: "Les coûts sont A(n) = 30 + 25n et B(n) = 32n. A devient moins chère lorsque 30 + 25n < 32n, c'est-à-dire n > 30/7, donc à partir de 5 mois. Avec la remise de 15 %, le tarif de B passe à 27,20 €/mois, soit 326,40 € sur 12 mois, ce qui est inférieur aux 330 € de A : B redevient alors plus avantageuse." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              level: "n2",
              title: "Problème 4 · Le bassin",
              objectifTag: "Volumes + conversions + débit",
              enonce:
                "Un bassin a la forme d'un pavé droit : 5 m de long, 3 m de large, 1,5 m de profondeur. On le remplit avec un débit constant de 0,5 m³ par minute.",
              question:
                "a) Quel est le volume du bassin, en m³ puis en litres ?\nb) Combien de temps dure le remplissage ?\nc) Le fournisseur exprime le débit en litres par seconde. Quelle est cette valeur ? (arrondir au dixième)",
              correction: [
                { type: "line", label: "a)", text: "Volume du pavé droit = longueur × largeur × hauteur = 5 × 3 × 1,5 = **22,5 m³**. Comme 1 m³ = 1 000 L, cela fait 22,5 × 1 000 = **22 500 L**." },
                { type: "line", label: "b)", text: "Le débit relie volume et durée (grandeur composée) : durée = volume ÷ débit = 22,5 ÷ 0,5 = **45 min**." },
                { type: "line", label: "c)", text: "0,5 m³/min = 500 L/min. En une seconde : 500 ÷ 60 ≈ **8,3 L/s**." },
                { type: "note", text: "Notions croisées : [volumes](fiche:perimetres-aires-volumes), conversions et [débit (grandeur composée)](fiche:durees-masses-grandeurs-composees). Piège : confondre 1 m³ = 1 000 L et 1 L = 1 dm³." },
                { type: "formulationCrpe", text: "Le volume du bassin est 5 × 3 × 1,5 = 22,5 m³, soit 22 500 L. Au débit de 0,5 m³/min, le remplissage dure 22,5 / 0,5 = 45 minutes. Ce débit équivaut à 500 L/min, soit environ 8,3 L/s." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 · Problèmes ouverts",
              sub: "Plusieurs notions et une part de raisonnement",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              level: "n3",
              title: "Problème 5 · Du plan au terrain",
              objectifTag: "Échelle + aires + effet k²",
              enonce:
                "Sur un plan à l'échelle 1/200, un terrain rectangulaire est représenté par un rectangle de 12 cm sur 9 cm.",
              question:
                "a) Quelles sont les dimensions réelles du terrain, en mètres ?\nb) Quelle est l'aire réelle du terrain, en m² ?\nc) L'aire dessinée sur le plan est de 108 cm². Vérifier le rapport entre l'aire réelle et l'aire sur le plan, et expliquer son lien avec l'échelle.",
              correction: [
                { type: "line", label: "a)", text: "L'échelle 1/200 signifie 1 cm sur le plan pour 200 cm en réalité, soit 2 m. Donc 12 cm → 24 m et 9 cm → 18 m : le terrain mesure **24 m sur 18 m**." },
                { type: "line", label: "b)", text: "Aire réelle = 24 × 18 = **432 m²**." },
                { type: "line", label: "c)", text: "Aire sur le plan = 12 × 9 = 108 cm². Aire réelle = 432 m² = 432 × 10 000 = 4 320 000 cm². Rapport = 4 320 000 ÷ 108 = **40 000**. Or 40 000 = 200² : quand les longueurs sont multipliées par k = 200, les aires sont multipliées par k². C'est l'effet de l'agrandissement sur les aires." },
                { type: "note", text: "Notions croisées : [échelle et proportionnalité](fiche:proportionnalite-pourcentages), [aires](fiche:perimetres-aires-volumes) et l'effet k² des [agrandissements et de la similitude](fiche:theoreme-de-thales-similitude). Piège : croire que l'aire est divisée par 200 comme les longueurs." },
                { type: "formulationCrpe", text: "À l'échelle 1/200, 1 cm représente 2 m, donc le terrain mesure 24 m sur 18 m, d'aire 432 m². Le rapport entre l'aire réelle (4 320 000 cm²) et l'aire du plan (108 cm²) vaut 40 000, soit 200² : les longueurs étant multipliées par 200, les aires le sont par 200²." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              level: "n3",
              title: "Problème 6 · Le sac de billes",
              objectifTag: "Pourcentages + probabilités + équation",
              enonce:
                "Un sac contient des billes rouges et des billes bleues. 60 % des billes sont rouges. On compte 24 billes bleues.",
              question:
                "a) Combien y a-t-il de billes en tout ? Combien de rouges ?\nb) On tire une bille au hasard. Quelle est la probabilité qu'elle soit rouge ?\nc) On ajoute des billes rouges (sans toucher aux bleues) pour que la probabilité de tirer une rouge devienne 0,75. Combien de billes rouges faut-il ajouter ?",
              correction: [
                { type: "line", label: "a)", text: "Si 60 % sont rouges, alors 40 % sont bleues. Les 24 bleues représentent donc 40 % du total : total = 24 ÷ 0,40 = **60 billes**. Rouges = 60 − 24 = **36** (ou 60 % de 60 = 36)." },
                { type: "line", label: "b)", text: "Les tirages sont équiprobables : P(rouge) = 36 ÷ 60 = **0,6**, soit 60 %." },
                { type: "line", label: "c)", text: "On ajoute x billes rouges. Les bleues restent 24, les rouges deviennent 36 + x, le total 60 + x. On veut (36 + x) ÷ (60 + x) = 0,75 = 3/4. Donc 4(36 + x) = 3(60 + x), soit 144 + 4x = 180 + 3x, donc x = **36**. Vérification : 72 rouges sur 96 billes, et 72 ÷ 96 = 0,75." },
                { type: "note", text: "Notions croisées : [pourcentages](fiche:proportionnalite-pourcentages), [probabilités](fiche:probabilites) et [équation](fiche:equations-inequations-systemes). Astuce pour c) : seules les rouges et le total changent, le nombre de bleues sert d'ancrage." },
                { type: "formulationCrpe", text: "Les 24 bleues représentent 40 % du total, donc il y a 60 billes, dont 36 rouges, et P(rouge) = 36/60 = 0,6. En ajoutant x rouges, on résout (36 + x)/(60 + x) = 0,75, ce qui donne x = 36 : il faut ajouter 36 billes rouges." },
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
              icon: "🧪",
              title: "Le bon réflexe avant le bon calcul",
              text: "Ces questions ne testent pas le calcul, mais le réflexe transversal : reconnaître la notion à mobiliser et vérifier la cohérence. Chaque réponse alimente votre suivi de maîtrise (onglet Auto-évaluation).",
            },
            {
              type: "quizBlock",
              questions: [
                {
                  objectifId: "t1",
                  question: "Un problème donne une surface à peindre (en m²) et un rendement de peinture (en m²/L). Pour passer de la surface au volume de peinture, on mobilise surtout…",
                  options: ["la proportionnalité", "le théorème de Pythagore", "les probabilités", "les statistiques"],
                  correctIndex: 0,
                  explanation: "Le rendement est un coefficient de proportionnalité entre surface couverte et volume de peinture.",
                },
                {
                  objectifId: "t4",
                  question: "Une échelle est appuyée contre un mur. On connaît sa longueur et la distance de son pied au mur, et on cherche la hauteur atteinte. On utilise…",
                  options: ["le théorème de Pythagore", "la règle de trois", "un pourcentage", "une moyenne"],
                  correctIndex: 0,
                  explanation: "Le mur, le sol et l'échelle forment un triangle rectangle dont l'échelle est l'hypoténuse.",
                },
                {
                  objectifId: "t3",
                  question: "Après une baisse de 30 %, un article coûte 140 €. Pour retrouver le prix initial, on calcule…",
                  options: ["140 ÷ 0,70", "140 × 0,70", "140 + 30 % de 140", "140 × 1,30"],
                  correctIndex: 0,
                  explanation: "La baisse de 30 % correspond au coefficient 0,70 appliqué au prix initial. On remonte en divisant par 0,70.",
                },
                {
                  objectifId: "t5",
                  question: "En fin de calcul, on trouve une probabilité égale à 1,4. Cela signifie…",
                  options: ["qu'il y a forcément une erreur : une probabilité est comprise entre 0 et 1", "que l'événement est certain", "que l'événement est très probable", "que le résultat est correct"],
                  correctIndex: 0,
                  explanation: "Une probabilité est toujours comprise entre 0 et 1. Un résultat hors de cet intervalle révèle une erreur.",
                },
                {
                  objectifId: "t4",
                  question: "Sur un plan à l'échelle 1/200, par combien l'aire réelle est-elle multipliée par rapport à l'aire dessinée ?",
                  options: ["200² = 40 000", "200", "2 × 200 = 400", "√200"],
                  correctIndex: 0,
                  explanation: "Les longueurs sont multipliées par k = 200, donc les aires par k² = 40 000.",
                },
                {
                  objectifId: "t2",
                  question: "Dans un problème en plusieurs questions, vous bloquez sur la question b). La meilleure réaction est…",
                  options: ["passer à la question suivante : elle est souvent indépendante", "abandonner tout le problème", "recommencer le problème depuis le début", "deviner un résultat pour b) et l'utiliser partout"],
                  correctIndex: 0,
                  explanation: "Les questions d'un même problème sont souvent traitables séparément : on ne perd pas les points des autres.",
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
