// Banque de copies à corriger, notion 09 « Présent, futur, conditionnel et subjonctif ».
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

export const COPIES_PRESENT_FUTUR_CONDITIONNEL_SUBJONCTIF: CopieACorriger[] = [
  {
    id: "fr-09-cop-01",
    copie: "Un candidat affirme : « serait » analysé comme un imparfait de l'indicatif.",
    correcte: false,
    verdict: "Test « nous » : « nous serions » donne -rions (avec « r ») : c'est un **conditionnel présent**.",
    coteProf: "Mettre à « nous » : -rions (avec « r ») → conditionnel présent ; -ions (sans « r ») → imparfait. Les deux sont des temps de l'indicatif.",
  },
  {
    id: "fr-09-cop-02",
    copie: "Un candidat affirme : « serait » → « mode conditionnel ».",
    correcte: false,
    verdict: "Dans la [Terminologie grammaticale publiée par Éduscol en 2020](https://eduscol.education.gouv.fr/media/67998/download?attachment=), le conditionnel est un **temps de l'indicatif**. Réponse : « conditionnel présent (temps de l'indicatif) ».",
    coteProf: "Donner le temps (conditionnel présent ou passé) et le rattacher à l'indicatif. L'appellation traditionnelle « mode conditionnel » existe encore, mais ce n'est pas la formulation retenue.",
  },
  {
    id: "fr-09-cop-03",
    copie: "Un candidat affirme : « bien qu'il vient ».",
    correcte: false,
    verdict: "« bien que » impose toujours le subjonctif : « bien qu'il **vienne** ».",
    coteProf: "Mémoriser les conjonctions à subjonctif : bien que, quoique, pour que, avant que, à moins que, pourvu que.",
  },
  {
    id: "fr-09-cop-04",
    copie: "Un candidat affirme : « Depuis toujours, on écrit pour transmettre des histoires et conserver la mémoire du passé » analysé comme un présent d'habitude.",
    correcte: false,
    verdict: "Le sujet générique « on » et le repère « depuis toujours » donnent à l'énoncé une portée générale : le présent exprime ici une **vérité générale**, et non le comportement répété d'une personne précise.",
    coteProf: "Observer la portée de l'énoncé. Sujet précis + marqueur de répétition : habitude. Sujet générique + affirmation valable au-delà d'une situation particulière : vérité générale. Le test « d'habitude » peut confirmer l'analyse.",
  },
  {
    id: "fr-09-cop-05",
    copie: "Réponse d'un candidat : « **serait** : indicatif imparfait, valeur : état dans le passé », pour *« Selon plusieurs sources, le président serait en déplacement. »*",
    correcte: false,
    verdict: "À corriger : Le mode indicatif est correct, mais le temps est faux : « nous serions » (-rions, avec « r ») → conditionnel présent, pas imparfait\nÀ corriger : La valeur « état dans le passé » est fausse : préciser selon le contexte\n- Réponse attendue : conditionnel présent (temps de l'indicatif), valeur de fait non confirmé (information présentée avec prudence)",
  },
  {
    id: "fr-09-cop-06",
    copie: "Un candidat affirme : Test « nous » : « nous serions » donne -rions (avec « r ») : c'est un **conditionnel présent**.",
    correcte: true,
    verdict: "C'est juste : Test « nous » : « nous serions » donne -rions (avec « r ») : c'est un **conditionnel présent**.",
    coteProf: "Mettre à « nous » : -rions (avec « r ») → conditionnel présent ; -ions (sans « r ») → imparfait. Les deux sont des temps de l'indicatif.",
  },
  {
    id: "fr-09-cop-07",
    copie: "Un candidat affirme : Dans la [Terminologie grammaticale publiée par Éduscol en 2020](https://eduscol.education.gouv.fr/media/67998/download?attachment=), le conditionnel est un **temps de l'indicatif**. Réponse : « conditionnel présent (temps de l'indicatif) ».",
    correcte: true,
    verdict: "C'est juste : Dans la [Terminologie grammaticale publiée par Éduscol en 2020](https://eduscol.education.gouv.fr/media/67998/download?attachment=), le conditionnel est un **temps de l'indicatif**. Réponse : « conditionnel présent (temps de l'indicatif) ».",
    coteProf: "Donner le temps (conditionnel présent ou passé) et le rattacher à l'indicatif. L'appellation traditionnelle « mode conditionnel » existe encore, mais ce n'est pas la formulation retenue.",
  },
  {
    id: "fr-09-cop-08",
    copie: "Un candidat affirme : « bien que » impose toujours le subjonctif : « bien qu'il **vienne** ».",
    correcte: true,
    verdict: "C'est juste : « bien que » impose toujours le subjonctif : « bien qu'il **vienne** ».",
    coteProf: "Mémoriser les conjonctions à subjonctif : bien que, quoique, pour que, avant que, à moins que, pourvu que.",
  },
];
