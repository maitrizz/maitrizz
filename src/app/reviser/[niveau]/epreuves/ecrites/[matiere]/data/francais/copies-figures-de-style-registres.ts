// Banque de copies à corriger, notion 19 « Les figures de style et les registres ».
//
// Copies dérivées des pièges du cours v1 et/ou du matériel de détection d'erreur existant.
// Mélange volontaire de réponses justes et fausses.

type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_FIGURES_DE_STYLE_REGISTRES: CopieACorriger[] = [
  {
    id: "fr-19-cop-01",
    copie: "Un candidat affirme : « comme un habit trop lâche » est une métaphore.",
    correcte: false,
    verdict: "La présence de l'outil « comme » en fait une **comparaison**. La métaphore assimile sans outil.",
    coteProf: "Chercher un outil (comme, tel, semblable à) : s'il y en a un, c'est une comparaison.",
  },
  {
    id: "fr-19-cop-02",
    copie: "Un candidat affirme : « ma route est une impasse » est une métaphore filée.",
    correcte: false,
    verdict: "C'est une métaphore **simple** (un seul terme). La métaphore filée, c'est l'ensemble du passage : route, impasse, chemin sans destination, terres inconnues, à tâtons.",
    coteProf: "Après avoir repéré une métaphore, relire tout le passage pour chercher d'autres termes du même domaine.",
  },
  {
    id: "fr-19-cop-03",
    copie: "Un candidat affirme : « il nous a quittés » est une litote.",
    correcte: false,
    verdict: "C'est un **euphémisme** : on atténue par pudeur. La litote, elle, dit moins pour suggérer davantage (intention d'amplification).",
    coteProf: "Y a-t-il une amplification cachée (litote) ou seulement une volonté d'adoucir (euphémisme) ?",
  },
  {
    id: "fr-19-cop-04",
    copie: "Un candidat affirme : « “un habit trop lâche” est une comparaison car il y a “comme”. » (et on s'arrête là)",
    correcte: false,
    verdict: "Il faut **analyser l'effet** : cette image du vêtement mal taillé exprime l'inadéquation de la vie sans écriture à l'autrice, qui s'y perd, s'y empêtre.",
    coteProf: "Après avoir nommé la figure, toujours expliquer ce qu'elle produit dans le texte (la paraphrase ne suffit pas).",
  },
  {
    id: "fr-19-cop-05",
    copie: "Réponse d'un candidat : « “comme un habit trop lâche” est une métaphore. »",
    correcte: false,
    verdict: "À corriger : La présence de l'outil « comme » indique une comparaison, pas une métaphore\n- La métaphore assimile sans outil visible\n- Réponse attendue : c'est une **comparaison** ; pour une métaphore, il faudrait « Vivre sans l'écriture, c'est un habit trop lâche »",
  },
  {
    id: "fr-19-cop-06",
    copie: "Un candidat affirme : La présence de l'outil « comme » en fait une **comparaison**. La métaphore assimile sans outil.",
    correcte: true,
    verdict: "C'est juste : La présence de l'outil « comme » en fait une **comparaison**. La métaphore assimile sans outil.",
    coteProf: "Chercher un outil (comme, tel, semblable à) : s'il y en a un, c'est une comparaison.",
  },
  {
    id: "fr-19-cop-07",
    copie: "Un candidat affirme : C'est une métaphore **simple** (un seul terme). La métaphore filée, c'est l'ensemble du passage : route, impasse, chemin sans destination, terres inconnues, à tâtons.",
    correcte: true,
    verdict: "C'est juste : C'est une métaphore **simple** (un seul terme). La métaphore filée, c'est l'ensemble du passage : route, impasse, chemin sans destination, terres inconnues, à tâtons.",
    coteProf: "Après avoir repéré une métaphore, relire tout le passage pour chercher d'autres termes du même domaine.",
  },
  {
    id: "fr-19-cop-08",
    copie: "Un candidat affirme : C'est un **euphémisme** : on atténue par pudeur. La litote, elle, dit moins pour suggérer davantage (intention d'amplification).",
    correcte: true,
    verdict: "C'est juste : C'est un **euphémisme** : on atténue par pudeur. La litote, elle, dit moins pour suggérer davantage (intention d'amplification).",
    coteProf: "Y a-t-il une amplification cachée (litote) ou seulement une volonté d'adoucir (euphémisme) ?",
  },
];
