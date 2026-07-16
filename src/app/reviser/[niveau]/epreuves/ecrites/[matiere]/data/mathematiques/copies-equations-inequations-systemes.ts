type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_EQUATIONS_INEQUATIONS_SYSTEMES: CopieACorriger[] = [
  {
    id: "ma-09-copie-inequation-sens",
    copie: "Pour résoudre −2x > 6, un candidat écrit : « −2x > 6 → x > −3 ».",
    correcte: false,
    verdict: "À corriger : diviser par −2 (négatif) inverse le sens de l'inégalité. −2x > 6 → x < −3.",
    coteProf: "L'inversion ne concerne que la multiplication et la division par un négatif, pas l'addition.",
  },
  {
    id: "ma-09-copie-produit-nul",
    copie: "Pour résoudre (x − 2)(x + 3) = 6, un candidat écrit : « x − 2 = 6 ou x + 3 = 6 ».",
    correcte: false,
    verdict: "À corriger : la règle A × B = 0 exige un membre de droite nul, or il vaut 6. Il faut développer, réduire, puis ramener à = 0 avant de factoriser.",
    coteProf: "Vérifier d'abord : le membre de droite est-il 0 ?",
  },
  {
    id: "ma-09-copie-coherence",
    copie: "Un problème sur un nombre d'élèves conduit à x = −4. Un candidat écrit : « x = −4, il y a donc −4 élèves ».",
    correcte: false,
    verdict: "À corriger : un effectif est un entier positif. x = −4 vérifie l'équation mais n'a pas de sens : il faut le signaler et conclure que le problème n'a pas de solution acceptable.",
    coteProf: "Relire toujours la valeur trouvée à la lumière du contexte (positif ? entier ? dans les bornes ?).",
  },
  {
    id: "ma-09-copie-crochet",
    copie: "Pour écrire x ≥ 3 en intervalle, un candidat écrit : « ]3 ; +∞[ ».",
    correcte: false,
    verdict: "À corriger : ≥ signifie que 3 est inclus, donc crochet fermé : [3 ; +∞[.",
    coteProf: "≤ ou ≥ → crochet fermé ; < ou > → crochet ouvert. L'infini garde toujours un crochet ouvert.",
  },
  {
    id: "ma-09-copie-conclusion-francais",
    copie: "Un problème demande le nombre d'élèves de chaque groupe. Le candidat trouve x = 15 et répond : « x = 15 ».",
    correcte: false,
    verdict: "À corriger : x = 15 est la valeur de l'inconnue, pas la réponse au problème. Il faut interpréter en français (« il y a 15 élèves dans le premier groupe ») et déduire l'effectif du second.",
    coteProf: "Un problème posé en français se conclut par une phrase en français.",
  },
  {
    id: "ma-09-copie-equation-correct",
    copie: "Pour résoudre 2x + 5 = x − 3, un candidat écrit : « 2x − x = −3 − 5 → x = −8 » et vérifie : 2 × (−8) + 5 = −11 = (−8) − 3.",
    correcte: true,
    verdict: "C'est juste : les x d'un côté, les nombres de l'autre, x = −8, et la vérification confirme.",
  },
  {
    id: "ma-09-copie-produit-nul-correct",
    copie: "Pour résoudre (x − 3)(2x + 5) = 0, un candidat écrit : « x − 3 = 0 ou 2x + 5 = 0, donc x = 3 ou x = −5/2 ».",
    correcte: true,
    verdict: "C'est juste : le membre de droite est 0, la règle du produit nul s'applique.",
  },
];
