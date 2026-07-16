import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_NUMERATION_SYSTEMES_DE_BASES: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-01-exo-indice-base",
    notion: "ma-01",
    savoirFaire: ["positionnel", "hexadecimal"],
    difficulte: 1,
    question:
      "Pour chaque nombre, dire dans quelle base il est écrit et ce que ça signifie :\na) 101₂   b) 1F₁₆   c) 347   d) 25₈",
    reponseType:
      "a) **101₂** → indice 2 → base 2 (binaire). Ce nombre est fait uniquement de 0 et de 1.\nb) **1F₁₆** → indice 16 → base 16 (hexadécimal). F est le chiffre qui vaut 15.\nc) **347** → pas d'indice → base 10 par défaut. C'est trois cent quarante-sept.\nd) **25₈** → indice 8 → base 8 (octal). Les chiffres utilisés vont de 0 à 7 seulement.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-01-exo-valeur-positionnelle",
    notion: "ma-01",
    savoirFaire: ["positionnel"],
    difficulte: 1,
    question: "Dans le nombre **4 253**, quelle est la valeur du chiffre…\na) 4   b) 2   c) 5   d) 3",
    reponseType:
      "a) Le **4** est en position 3 → 4 × 10³ = 4 × 1000 = **4 000**\nb) Le **2** est en position 2 → 2 × 10² = 2 × 100 = **200**\nc) Le **5** est en position 1 → 5 × 10¹ = 5 × 10 = **50**\nd) Le **3** est en position 0 → 3 × 10⁰ = 3 × 1 = **3**",
    explication: [
      { type: "note", text: "Vérification : 4000 + 200 + 50 + 3 = 4 253 ✓, c'est exactement ce qu'on va faire en base 2." },
    ],
  },
  {
    // TODO refonte exo
    id: "ma-01-exo-premiers-pas-binaire",
    notion: "ma-01",
    savoirFaire: ["base-vers-decimal", "positionnel"],
    difficulte: 1,
    question: "Convertir en base 10 ces nombres binaires très simples :\na) 1₂   b) 10₂   c) 100₂   d) 11₂   e) 101₂",
    reponseType:
      "a) 1₂ = 1×2⁰ = 1×1 = **1**\nb) 10₂ = 1×2¹ + 0×2⁰ = 2+0 = **2**\nc) 100₂ = 1×2² + 0×2¹ + 0×2⁰ = 4+0+0 = **4**\nd) 11₂ = 1×2¹ + 1×2⁰ = 2+1 = **3**\ne) 101₂ = 1×2² + 0×2¹ + 1×2⁰ = 4+0+1 = **5**",
    explication: [
      {
        type: "note",
        text: "**Vous voyez le schéma ?** 1₂=1, 10₂=2, 100₂=4, en base 2, chaque fois qu'on ajoute un 0 à droite, on double la valeur. Comme en base 10 ajouter un 0 multiplie par 10.",
      },
    ],
  },
  {
    // TODO refonte exo
    id: "ma-01-exo-ecriture-lettres",
    notion: "ma-01",
    savoirFaire: ["ecriture-lettres"],
    difficulte: 1,
    question: "Écrire en lettres, en faisant attention aux accords :\na) 80   b) 81   c) 200   d) 205   e) 2 000",
    reponseType:
      "a) 80 → **quatre-vingts** (avec -s : quatre × vingt, rien après)\nb) 81 → **quatre-vingt-un** (sans -s : suivi de \"un\")\nc) 200 → **deux cents** (avec -s : 2 × cent, rien après)\nd) 205 → **deux cent cinq** (sans -s : suivi de \"cinq\")\ne) 2 000 → **deux mille** (mille toujours invariable)",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-01-exo-base-2-decimal",
    notion: "ma-01",
    savoirFaire: ["base-vers-decimal", "positionnel"],
    difficulte: 1,
    question: "Convertir en base 10, en explicitant les calculs :\na) 1010₂   b) 11111₂   c) 100001₂",
    reponseType:
      "a) 1010₂ = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = **10**\nb) 11111₂ = 16+8+4+2+1 = **31**\nc) 100001₂ = 32+1 = **33**",
    explication: [
      {
        type: "note",
        text: "**⚠️ c)** Les quatre zéros intermédiaires contribuent 0 à la somme, à noter explicitement pour ne pas les oublier.",
      },
    ],
  },
  {
    // TODO refonte exo
    id: "ma-01-exo-decimal-base-2",
    notion: "ma-01",
    savoirFaire: ["decimal-vers-base"],
    difficulte: 1,
    question: "Convertir en binaire par divisions successives :\na) 19   b) 42   c) 100",
    reponseType:
      "a) 19÷2=9 r1 · 9÷2=4 r1 · 4÷2=2 r0 · 2÷2=1 r0 · 1÷2=0 r1 → lire restes de bas en haut : **10011₂**\nb) 42÷2=21 r0 · 21÷2=10 r1 · 10÷2=5 r0 · 5÷2=2 r1 · 2÷2=1 r0 · 1÷2=0 r1 → **101010₂**\nc) 100 = 64+32+4 = 2⁶+2⁵+2² → positions 6,5,2 → **1100100₂**",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-01-exo-hexadecimal-decimal",
    notion: "ma-01",
    savoirFaire: ["hexadecimal", "base-vers-decimal", "decimal-vers-base"],
    difficulte: 1,
    question: "a) Convertir 1F₁₆ en décimal.   b) Convertir 255 en hexadécimal.",
    reponseType:
      "a) 1F₁₆ = 1×16¹ + F×16⁰ = 16 + 15 = **31** (F = 15 en hexa)\nb) 255÷16=15 r15 · 15÷16=0 r15 → restes = 15,15 = F,F → **FF₁₆**",
    explication: [
      {
        type: "note",
        text: "**Remarque :** FF₁₆ = 255₁₀ est la valeur maximale d'un octet (8 bits). Utile pour les questions sur le codage numérique.",
      },
    ],
  },
  {
    // TODO refonte exo
    id: "ma-01-exo-erreur-eleve-positionnelle",
    notion: "ma-01",
    savoirFaire: ["positionnel"],
    difficulte: 2,
    enonce:
      "En CE2, une enseignante demande à ses élèves d'écrire « quatre mille soixante-deux » en chiffres. Trois élèves rendent : Léa → 4062 · Paul → 4620 · Sami → 40062.",
    question:
      "a) Quelle réponse est correcte ? Justifier.\nb) Identifier l'obstacle de numération spécifique de chacun des deux élèves qui se trompent.\nc) Que représente le zéro dans la réponse correcte ?",
    reponseType:
      "a) **Léa (4062)** est correcte : 4 milliers + 0 centaines + 6 dizaines + 2 unités.\nb) **Paul (4620)** confond « soixante-deux » avec 620, obstacle de la numération orale française (60+2 est entendu comme « six-deux »). **Sami (40062)** ajoute un zéro superflu pour les centaines ET les dizaines, obstacle du zéro intercalaire : il écrit 0 à toutes les positions qu'il « n'entend pas ».\nc) Le zéro dans 4**0**62 est un **zéro occupant** (ou chiffre significatif de position) : il indique l'absence de centaines et maintient la valeur positionnelle des autres chiffres. Sans lui, 462 ≠ 4062.",
    explication: [
      {
        type: "note",
        text: "**Angle CRPE :** distinguer les deux obstacles (numération orale vs zéro intercalaire) montre une connaissance didactique qui valorise la copie.",
      },
    ],
  },
  {
    // TODO refonte exo
    id: "ma-01-exo-notation-scientifique-prefixes",
    notion: "ma-01",
    savoirFaire: ["notation-prefixes"],
    difficulte: 2,
    question:
      "a) Écrire 0,000 047 en notation scientifique.\nb) Une clé USB stocke 8 Go. Exprimer cette capacité en octets puis en bits.\nc) La distance Terre-Lune est de 3,84×10⁵ km. L'exprimer en mètres en notation scientifique.",
    reponseType:
      "a) 0,000047 = 4,7 × 10⁻⁵\nb) 8 Go = 8 × 10⁹ octets = 8 × 10⁹ × 8 bits = 6,4 × 10¹⁰ bits. (Attention : 1 Go = 10⁹ octets en SI ; 1 octet = 8 bits)\nc) 3,84×10⁵ km = 3,84×10⁵ × 10³ m = 3,84×10⁸ m",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-01-exo-bases-raisonnement",
    notion: "ma-01",
    savoirFaire: ["base-vers-decimal", "decimal-vers-base", "positionnel"],
    difficulte: 3,
    question:
      "a) Montrer que tout nombre entier naturel peut s'écrire sous la forme d'une somme de puissances distinctes de 2 (écriture binaire).\nb) En base b, combien de nombres distincts peut-on écrire avec exactement n chiffres ?\nc) Quel est le plus grand nombre entier qu'on peut écrire avec 8 chiffres en base 2 ? Qu'est-ce que cela représente en informatique ?",
    reponseType:
      "a) Par l'algorithme des divisions successives par 2, tout entier naturel N ≥ 0 se décompose en restes 0 ou 1 des divisions par 2, ce qui donne une écriture unique comme somme de puissances de 2 (avec chaque puissance présente 0 ou 1 fois). Unicité : résulte de l'unicité de la division euclidienne.\nb) Avec n chiffres en base b, le premier chiffre (à gauche) peut prendre b−1 valeurs (1 à b−1), les n−1 suivants b valeurs chacun → (b−1)×b^(n−1) nombres à exactement n chiffres. (Ou b^n − b^(n-1) en comptant)\nc) Max à 8 chiffres binaires = 11111111₂ = 2⁸−1 = **255**. Un groupe de 8 bits s'appelle un **octet** (byte). Il peut coder 256 valeurs (0 à 255). C'est la base du codage des couleurs RVB (255 pour chaque canal rouge, vert, bleu).",
    explication: [],
  },
];
