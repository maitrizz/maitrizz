// Banque d'exercices OUVERTS, notion 19 « Les figures de style et les registres ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux · Concours (la cible) · Expert (au-delà : métaphore /
// métonymie / synecdoque, litote canonique, oxymore et sens, registres mêlés,
// analyse complète d'une figure).
// Cap : nommer NE SUFFIT PAS, on interprète l'effet (les quatre temps de l'analyse).
// Citations canoniques vérifiées.
// 6 savoir-faire : images · opposition · insistance · atténuation · sonorités
// · registres.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_FIGURES_DE_STYLE_REGISTRES: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-19-exo-f1",
    notion: "fr-19",
    savoirFaire: ["images"],
    difficulte: 1,
    question:
      "Comparaison ou métaphore ?\na) « Il est fort comme un lion. »\nb) « Cet homme est un lion. »",
    reponseType:
      "a) **comparaison** (outil « comme » : comparé « il », comparant « lion », outil « comme »).\nb) **métaphore** (aucun outil : identification directe).\nLa présence ou l'absence d'outil de comparaison tranche.",
    explication: [],
  },
  {
    id: "fr-19-exo-f2",
    notion: "fr-19",
    savoirFaire: ["images"],
    difficulte: 1,
    question:
      "Quelle figure ?\n« Le vent hurlait dans la nuit. »",
    reponseType:
      "**personnification** : on attribue à une chose (« le vent ») un comportement humain (« hurler »).",
    explication: [],
  },
  {
    id: "fr-19-exo-f3",
    notion: "fr-19",
    savoirFaire: ["insistance", "attenuation"],
    difficulte: 1,
    question:
      "Exagération (hyperbole) ou atténuation (litote) ?\na) « Je meurs de faim. »\nb) « Ce n'est pas mauvais. »",
    reponseType:
      "a) **hyperbole** (exagération : « mourir » pour « avoir très faim »).\nb) **litote** (on dit moins pour suggérer plus : « pas mauvais » = très bon).",
    explication: [],
  },
  {
    id: "fr-19-exo-f4",
    notion: "fr-19",
    savoirFaire: ["opposition"],
    difficulte: 1,
    question:
      "Antithèse ou oxymore ?\na) « La vie et la mort se côtoient. »\nb) « un silence assourdissant »",
    reponseType:
      "a) **antithèse** (opposition de deux termes ou idées dans la phrase).\nb) **oxymore** (deux mots contradictoires accolés : silence + assourdissant).\nL'oxymore réunit l'inconciliable en un même groupe de mots.",
    explication: [],
  },
  {
    id: "fr-19-exo-f5",
    notion: "fr-19",
    savoirFaire: ["registres"],
    difficulte: 1,
    question:
      "Donnez le registre de langue :\na) « Je suis fort marri de votre absence. »\nb) « Je suis triste que tu ne sois pas là. »\nc) « Chui dég que tu sois pas v'nu. »",
    reponseType:
      "a) **soutenu**.\nb) **courant**.\nc) **familier**.\nLe registre de langue se repère au lexique et à la syntaxe.",
    explication: [],
  },
  {
    id: "fr-19-exo-f6",
    notion: "fr-19",
    savoirFaire: ["sonorites"],
    difficulte: 1,
    question:
      "Quelle figure de sonorité, et quel effet ?\n« Pour qui sont ces serpents qui sifflent sur vos têtes ? » (Racine, *Andromaque*)",
    reponseType:
      "**allitération** en /s/ : la répétition de la consonne sifflante imite le sifflement des serpents (harmonie imitative). Le son épouse le sens.",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-19-exo-c1",
    notion: "fr-19",
    savoirFaire: ["images"],
    difficulte: 2,
    question:
      "Métonymie ou synecdoque ?\na) « boire un verre »\nb) « voici une voile à l'horizon »",
    reponseType:
      "a) **métonymie** : le contenant (« verre ») pour le contenu (la boisson).\nb) **synecdoque** : la partie (« voile ») pour le tout (le bateau).\nLa synecdoque est un cas particulier (partie / tout) ; la métonymie joue sur d'autres liens (contenant/contenu, cause/effet…).",
    explication: [],
  },
  {
    id: "fr-19-exo-c2",
    notion: "fr-19",
    savoirFaire: ["images"],
    difficulte: 2,
    question:
      "Analysez la figure (nommez puis interprétez l'effet) :\n« Cette femme était une rose fanée. »",
    reponseType:
      "**métaphore** : « rose fanée » identifie la femme à une fleur passée (sans outil de comparaison). Effet : elle suggère la beauté qui se flétrit, la fragilité, le passage du temps, avec une connotation mélancolique. Nommer ne suffit pas : on interprète l'effet.",
    explication: [],
  },
  {
    id: "fr-19-exo-c3",
    notion: "fr-19",
    savoirFaire: ["images"],
    difficulte: 2,
    question:
      "Métaphore simple ou filée ?\n« Sa vie était un long fleuve : elle serpentait, charriait des regrets et se jetait enfin dans l'oubli. »",
    reponseType:
      "**métaphore filée** : l'image du fleuve (« vie = fleuve ») est **prolongée** par plusieurs mots du même réseau (serpentait, charriait, se jetait). Une métaphore filée se développe sur plusieurs termes ; une métaphore simple tient en une seule expression.",
    explication: [],
  },
  {
    id: "fr-19-exo-c4",
    notion: "fr-19",
    savoirFaire: ["attenuation"],
    difficulte: 2,
    question:
      "Litote ou euphémisme ?\na) « Il n'est plus tout jeune. »\nb) « Il nous a quittés. » (pour : il est mort)",
    reponseType:
      "a) **litote** : on dit moins (« plus tout jeune ») pour faire entendre plus (il est vieux) ; l'atténuation **renforce**.\nb) **euphémisme** : on adoucit une réalité pénible (la mort) par une expression voilée ; l'atténuation **ménage**.\nLa litote sous-entend plus fort ; l'euphémisme adoucit.",
    explication: [],
  },
  {
    id: "fr-19-exo-c5",
    notion: "fr-19",
    savoirFaire: ["insistance"],
    difficulte: 2,
    question:
      "Nommez la figure d'insistance :\na) « Paris ! Paris outragé ! Paris brisé ! Paris martyrisé ! » (de Gaulle)\nb) « Va, cours, vole et nous venge ! » (Corneille, *Le Cid*)",
    reponseType:
      "a) **anaphore** (« Paris » répété en tête) + **gradation** (outragé < brisé < martyrisé).\nb) **gradation** (va < cours < vole : verbes d'intensité croissante).\nCes figures martèlent et amplifient le propos.",
    explication: [],
  },
  {
    id: "fr-19-exo-c6",
    notion: "fr-19",
    savoirFaire: ["registres"],
    difficulte: 2,
    question:
      "Distinguez le registre de langue et le registre littéraire :\n« Hélas ! tout est perdu, je suis anéanti ! »",
    reponseType:
      "**Registre de langue** : soutenu (« Hélas », « anéanti »).\n**Registre littéraire** : **pathétique / tragique** (l'expression d'une douleur extrême, qui cherche à émouvoir).\nLe registre de langue concerne le niveau de langue ; le registre littéraire, le ton et l'émotion visée.",
    explication: [],
  },
  {
    id: "fr-19-exo-c7",
    notion: "fr-19",
    savoirFaire: ["registres"],
    difficulte: 2,
    question:
      "Donnez le registre littéraire :\na) « Ô rage ! ô désespoir ! » (Corneille, *Le Cid*)\nb) « Ô temps, suspends ton vol ! » (Lamartine, *Le Lac*)\nc) une scène de quiproquo où chacun se trompe de porte",
    reponseType:
      "a) **tragique / pathétique** (douleur, désespoir).\nb) **lyrique** (expression du sentiment personnel, ici la fuite du temps).\nc) **comique** (le quiproquo provoque le rire).",
    explication: [],
  },
  {
    id: "fr-19-exo-c8",
    notion: "fr-19",
    savoirFaire: ["images"],
    difficulte: 2,
    question:
      "Nommez la figure et analysez l'effet :\n« La nature pleurait la mort du poète. »",
    reponseType:
      "**personnification** : la nature reçoit un sentiment humain (« pleurer »). Effet : elle associe l'univers entier au deuil, amplifie l'émotion et donne une dimension cosmique à la perte. On interprète l'effet, on ne se contente pas de nommer.",
    explication: [],
  },
  {
    id: "fr-19-exo-c9",
    notion: "fr-19",
    savoirFaire: ["opposition"],
    difficulte: 2,
    question:
      "Nommez la figure d'opposition :\na) « Je vis, je meurs ; je me brûle et me noie. » (Louise Labé)\nb) « cette obscure clarté » (Corneille, *Le Cid*)",
    reponseType:
      "a) **antithèses** (vivre / mourir, brûler / noyer) : des oppositions réparties dans le vers.\nb) **oxymore** (« obscure » + « clarté » : deux mots contradictoires soudés).\nAntithèse = opposition à distance dans la phrase ; oxymore = contradiction réunie en un même groupe.",
    explication: [],
  },
  {
    id: "fr-19-exo-c10",
    notion: "fr-19",
    savoirFaire: ["sonorites"],
    difficulte: 2,
    question:
      "Quelle figure de sonorité, et quel effet ?\na) « Les souffles de la nuit flottaient sur Galgala. » (Hugo, *Booz endormi*)\nb) « Tout m'afflige et me nuit, et conspire à me nuire. » (Racine, *Phèdre*)",
    reponseType:
      "a) **allitération** en /f/ et /l/ : des consonnes douces qui miment le souffle léger de la nuit.\nb) **assonance** en /i/ : la voyelle aiguë, répétée, traduit la plainte et l'oppression.\nLes sonorités créent une harmonie imitative au service du sens.",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-19-exo-e1",
    notion: "fr-19",
    savoirFaire: ["images"],
    difficulte: 3,
    question:
      "Nommez précisément la figure :\na) « Il a lu tout Zola. »\nb) « Une mer de têtes. »\nc) « Cinquante voiles entrèrent au port. »",
    reponseType:
      "a) **métonymie** : l'auteur (« Zola ») pour son œuvre.\nb) **métaphore** : la foule assimilée à une « mer » (par ressemblance).\nc) **synecdoque** : « voiles » (la partie) pour les navires (le tout).\nTrois mécanismes : substitution par contiguïté (métonymie), par ressemblance (métaphore), par inclusion partie/tout (synecdoque).",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : distinguer métonymie, synecdoque et métaphore (au lieu de dire vaguement « image ») est exactement ce que le jury attend.",
      },
    ],
  },
  {
    id: "fr-19-exo-e2",
    notion: "fr-19",
    savoirFaire: ["attenuation"],
    difficulte: 3,
    question:
      "Analysez finement l'atténuation :\n« Va, je ne te hais point. » (Corneille, *Le Cid*)",
    reponseType:
      "**litote** (l'exemple canonique) : « je ne te hais point » dit le minimum (l'absence de haine) pour faire entendre le maximum (Chimène aime toujours Rodrigue). Par la double négation, l'atténuation **renforce** l'aveu au lieu de l'affaiblir : dire moins pour signifier beaucoup plus.",
    explication: [],
  },
  {
    id: "fr-19-exo-e3",
    notion: "fr-19",
    savoirFaire: ["opposition"],
    difficulte: 3,
    question:
      "Analysez l'oxymore et son sens :\n« Cette obscure clarté qui tombe des étoiles. » (Corneille, *Le Cid*)",
    reponseType:
      "**oxymore** : « obscure clarté » réunit deux termes contradictoires (l'obscurité et la lumière). Sens : il rend la **lueur faible** des étoiles dans la nuit, une clarté qui n'éclaire pas vraiment. L'alliance des contraires traduit une réalité paradoxale (on devine sans bien voir, pendant la bataille nocturne).",
    explication: [],
  },
  {
    id: "fr-19-exo-e4",
    notion: "fr-19",
    savoirFaire: ["registres"],
    difficulte: 3,
    question:
      "Quel effet produit le mélange des registres ?\n« Le héros, terrassé, glorieux, expira… puis se cassa la figure dans l'escalier. »",
    reponseType:
      "Mélange du registre **épique / tragique** (héros, terrassé, glorieux, expira) et du registre **familier** (« se cassa la figure »). Le décalage produit un effet **comique / parodique** (burlesque) : le trivial rabaisse brutalement le sublime. Le contraste de registres est lui-même une ressource expressive.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : repérer un changement de registre et nommer l'effet (ici le burlesque) vaut mieux que d'attribuer au texte un registre unique.",
      },
    ],
  },
  {
    id: "fr-19-exo-e5",
    notion: "fr-19",
    savoirFaire: ["opposition", "registres"],
    difficulte: 3,
    question:
      "Faites l'analyse complète (repérer, nommer, expliquer, interpréter) :\n« Le soleil noir de la Mélancolie. » (Nerval, *El Desdichado*)",
    reponseType:
      "1. **Repérer** : « soleil noir ».\n2. **Nommer** : **oxymore** (soleil = lumière, noir = absence de lumière).\n3. **Expliquer** : il associe l'astre lumineux à l'obscurité.\n4. **Interpréter** : il dit une lumière qui n'éclaire pas, le paradoxe d'une mélancolie à la fois éclatante et ténébreuse ; registre **lyrique** et pathétique.\nL'analyse vaut par l'interprétation, jamais par la seule étiquette.",
    explication: [],
  },
];
