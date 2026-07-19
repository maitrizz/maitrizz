// Banque de copies à corriger, notion 08 « Les temps du passé ».
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

export const COPIES_TEMPS_DU_PASSE: CopieACorriger[] = [
  {
    id: "fr-08-cop-01",
    copie: "Un candidat affirme : Attribuer une valeur à « regardait » sans lire le reste de la phrase.",
    correcte: false,
    verdict: "Dans « Ce soir-là, elle regardait les enfants », le repère temporel inscrit l'action dans une scène unique : la valeur est **descriptive**.",
    coteProf: "Justifier la valeur par un indice précis du contexte.",
  },
  {
    id: "fr-08-cop-02",
    copie: "Un candidat affirme : Analyser « se hâtait » sans contexte comme un imparfait d'habitude.",
    correcte: false,
    verdict: "« Ce soir-là, elle se hâtait » décrit une scène unique ; « Chaque soir, elle se hâtait » exprime une habitude.",
    coteProf: "Chercher un cadre précis ou un marqueur de répétition.",
  },
  {
    id: "fr-08-cop-03",
    copie: "Un candidat affirme : « avait relu » analysé comme un passé composé.",
    correcte: false,
    verdict: "L'auxiliaire « avait » est à l'imparfait : c'est un **plus-que-parfait** (le passé composé aurait l'auxiliaire au présent, « a relu »).",
    coteProf: "Repérer d'abord le temps de l'auxiliaire (voir notion 7), puis nommer la valeur d'antériorité.",
  },
  {
    id: "fr-08-cop-04",
    copie: "Un candidat affirme : Analyser chaque verbe isolément quand les deux temps coexistent.",
    correcte: false,
    verdict: "Mentionner l'opposition montre une vraie maîtrise : « imparfait de description qui forme le décor, en opposition au passé simple qui marque l'événement ».",
    coteProf: "Dès qu'imparfait et passé simple cohabitent dans l'extrait, commenter leur rôle respectif (arrière-plan / premier plan).",
  },
  {
    id: "fr-08-cop-05",
    copie: "Réponse d'un candidat : « **regardait** : imparfait de l'indicatif, valeur d'habitude », pour *« Ce soir-là, ma mère regardait les enfants jouer. »*",
    correcte: false,
    verdict: "À corriger : « ce soir-là » situe une scène unique : la valeur d'habitude n'est pas justifiée\n- Réponse attendue : valeur descriptive, action en cours dans le passé qui forme le décor affectif de la scène",
  },
  {
    id: "fr-08-cop-06",
    copie: "Un candidat affirme : Dans « Ce soir-là, elle regardait les enfants », le repère temporel inscrit l'action dans une scène unique : la valeur est **descriptive**.",
    correcte: true,
    verdict: "C'est juste : Dans « Ce soir-là, elle regardait les enfants », le repère temporel inscrit l'action dans une scène unique : la valeur est **descriptive**.",
    coteProf: "Justifier la valeur par un indice précis du contexte.",
  },
  {
    id: "fr-08-cop-07",
    copie: "Un candidat affirme : « Ce soir-là, elle se hâtait » décrit une scène unique ; « Chaque soir, elle se hâtait » exprime une habitude.",
    correcte: true,
    verdict: "C'est juste : « Ce soir-là, elle se hâtait » décrit une scène unique ; « Chaque soir, elle se hâtait » exprime une habitude.",
    coteProf: "Chercher un cadre précis ou un marqueur de répétition.",
  },
  {
    id: "fr-08-cop-08",
    copie: "Un candidat affirme : L'auxiliaire « avait » est à l'imparfait : c'est un **plus-que-parfait** (le passé composé aurait l'auxiliaire au présent, « a relu »).",
    correcte: true,
    verdict: "C'est juste : L'auxiliaire « avait » est à l'imparfait : c'est un **plus-que-parfait** (le passé composé aurait l'auxiliaire au présent, « a relu »).",
    coteProf: "Repérer d'abord le temps de l'auxiliaire (voir notion 7), puis nommer la valeur d'antériorité.",
  },
];
