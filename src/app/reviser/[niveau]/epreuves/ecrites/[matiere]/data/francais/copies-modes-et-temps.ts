// Banque de copies à corriger, notion 07 « Modes et temps ».
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

export const COPIES_MODES_ET_TEMPS: CopieACorriger[] = [
  {
    id: "fr-07-cop-01",
    copie: "Un candidat affirme : « serait » analysé comme un imparfait.",
    correcte: false,
    verdict: "« serait » contient un « r » avant la terminaison : c'est un **conditionnel présent** (un temps de l'indicatif).",
    coteProf: "Test « nous » : « nous serions » donne -rions (avec « r ») → conditionnel ; « nous étions » donne -ions (sans « r ») → imparfait.",
  },
  {
    id: "fr-07-cop-02",
    copie: "Un candidat affirme : « avait vu » analysé comme un passé composé.",
    correcte: false,
    verdict: "L'auxiliaire « avait » est à l'imparfait : c'est un **plus-que-parfait**. Le passé composé a son auxiliaire au présent (« a vu »).",
    coteProf: "Toujours repérer le temps de l'auxiliaire d'abord : présent → passé composé ; imparfait → plus-que-parfait.",
  },
  {
    id: "fr-07-cop-03",
    copie: "Un candidat affirme : « fut » analysé comme un futur de « être ».",
    correcte: false,
    verdict: "« fut » est le **passé simple** de « être » (3e personne du singulier). Le futur est « sera ».",
    coteProf: "Mémoriser les passés simples irréguliers (fut, eut, fit, vit, vint, put, sut, dit) et les distinguer du futur (sera, aura, fera…).",
  },
  {
    id: "fr-07-cop-04",
    copie: "Un candidat affirme : « regardait → imparfait de l'indicatif » et s'arrêter là.",
    correcte: false,
    verdict: "Le jury attend **trois éléments** : mode, temps et valeur. Donner aussi la valeur (description, habitude, action en cours…).",
    coteProf: "Après le mode et le temps, préciser la valeur dans le contexte. L'analyse détaillée des valeurs est traitée dans les notions 7 et 8.",
  },
  {
    id: "fr-07-cop-05",
    copie: "Réponse d'un candidat : « **serait** : indicatif imparfait », pour *« Selon la rumeur, il serait parti. »*",
    correcte: false,
    verdict: "À corriger : Erreur : le temps. « -ait » a été pris pour un imparfait\n- Test « nous » : « nous serions » → -rions (avec « r ») → conditionnel présent\n- Réponse attendue : indicatif, conditionnel présent (le mode indicatif était correct ; c'est le temps qui était faux)",
    coteProf: "💡 La valeur (information rapportée non confirmée) s'analyse aux notions 7 et 8.",
  },
  {
    id: "fr-07-cop-06",
    copie: "Un candidat affirme : « serait » contient un « r » avant la terminaison : c'est un **conditionnel présent** (un temps de l'indicatif).",
    correcte: true,
    verdict: "C'est juste : « serait » contient un « r » avant la terminaison : c'est un **conditionnel présent** (un temps de l'indicatif).",
    coteProf: "Test « nous » : « nous serions » donne -rions (avec « r ») → conditionnel ; « nous étions » donne -ions (sans « r ») → imparfait.",
  },
  {
    id: "fr-07-cop-07",
    copie: "Un candidat affirme : L'auxiliaire « avait » est à l'imparfait : c'est un **plus-que-parfait**. Le passé composé a son auxiliaire au présent (« a vu »).",
    correcte: true,
    verdict: "C'est juste : L'auxiliaire « avait » est à l'imparfait : c'est un **plus-que-parfait**. Le passé composé a son auxiliaire au présent (« a vu »).",
    coteProf: "Toujours repérer le temps de l'auxiliaire d'abord : présent → passé composé ; imparfait → plus-que-parfait.",
  },
  {
    id: "fr-07-cop-08",
    copie: "Un candidat affirme : « fut » est le **passé simple** de « être » (3e personne du singulier). Le futur est « sera ».",
    correcte: true,
    verdict: "C'est juste : « fut » est le **passé simple** de « être » (3e personne du singulier). Le futur est « sera ».",
    coteProf: "Mémoriser les passés simples irréguliers (fut, eut, fit, vit, vint, put, sut, dit) et les distinguer du futur (sera, aura, fera…).",
  },
];
