// Banque de copies à corriger, notion 15 « L'énonciation et le discours rapporté ».
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

export const COPIES_ENONCIATION_DISCOURS_RAPPORTE: CopieACorriger[] = [
  {
    id: "fr-15-cop-01",
    copie: "Un candidat affirme : Dire qu'un extrait de récit est entièrement ancré dans l'énonciation parce qu'il contient une réplique au discours direct.",
    correcte: false,
    verdict: "Un récit peut être **majoritairement coupé de l'énonciation** tout en contenant une rupture locale : le dialogue est ancré dans la situation du personnage, mais le cadre narratif reste au système du récit.",
    coteProf: "Distinguer le **système dominant** du passage et les **ruptures locales** : narration, dialogue, pensée rapportée.",
  },
  {
    id: "fr-15-cop-02",
    copie: "Un candidat affirme : « Il demanda est-ce qu'elle viendrait. »",
    correcte: false,
    verdict: "« est-ce que » appartient à l'interrogation directe : il disparaît toujours au discours indirect, remplacé par **si** (question totale) : « Il demanda **si** elle viendrait. » De même, « qu'est-ce que » devient **ce que** et « qu'est-ce qui » devient **ce qui** : « Il demanda **ce qu'**elle voulait », « Il demanda **ce qui** la retenait ».",
    coteProf: "Pour une question oui/non rapportée, employer « si » ; pour une question partielle, le mot interrogatif (où, quand, pourquoi…) ; pour « qu'est-ce que / qu'est-ce qui », « ce que / ce qui ».",
  },
  {
    id: "fr-15-cop-03",
    copie: "Un candidat affirme : « Il partirait dès l'aube ! » analysé comme discours indirect parce qu'il n'y a pas de guillemets.",
    correcte: false,
    verdict: "L'absence de guillemets ne suffit pas. Le DI exige un verbe introducteur + une subordonnée. Ici, phrase autonome, conditionnel et exclamation : c'est du **discours indirect libre**.",
    coteProf: "Chercher le verbe introducteur et la subordination : s'ils manquent et que la phrase est autonome, c'est du DIL.",
  },
  {
    id: "fr-15-cop-04",
    copie: "Un candidat affirme : « Elle déclara : “Je prendrai mon train ici demain.” » → « Elle déclara qu'elle prendrait mon train ici demain. »",
    correcte: false,
    verdict: "La concordance des temps ne suffit pas : il faut aussi transposer les **pronoms**, les **déterminants possessifs** et les **repères**. Correction : « Elle déclara **qu'elle prendrait son train là le lendemain**. »",
    coteProf: "Faire trois vérifications : personne (je → elle), possession (mon → son), repères (ici → là ; demain → le lendemain).",
  },
  {
    id: "fr-15-cop-05",
    copie: "Passage : « La pluie tombait depuis l'aube. L'enfant ouvrit la fenêtre. “Je n'ai pas peur”, dit-il. Puis il descendit l'escalier. »\nRéponse d'un candidat : « Le passage relève du discours ancré, puisqu'il contient une réplique entre guillemets. »",
    correcte: false,
    verdict: "À corriger : La présence d'une réplique ne suffit pas à qualifier tout le passage\n- Il faut distinguer le cadre narratif dominant et la rupture locale créée par le dialogue\n- Réponse attendue : « Le passage relève majoritairement du récit coupé de l'énonciation ; la réplique au discours direct constitue une rupture ancrée dans la situation du personnage. »",
  },
  {
    id: "fr-15-cop-06",
    copie: "Un candidat affirme : Un récit peut être **majoritairement coupé de l'énonciation** tout en contenant une rupture locale : le dialogue est ancré dans la situation du personnage, mais le cadre narratif reste au système du récit.",
    correcte: true,
    verdict: "C'est juste : Un récit peut être **majoritairement coupé de l'énonciation** tout en contenant une rupture locale : le dialogue est ancré dans la situation du personnage, mais le cadre narratif reste au système du récit.",
    coteProf: "Distinguer le **système dominant** du passage et les **ruptures locales** : narration, dialogue, pensée rapportée.",
  },
  {
    id: "fr-15-cop-07",
    copie: "Un candidat affirme : « est-ce que » appartient à l'interrogation directe : il disparaît toujours au discours indirect, remplacé par **si** (question totale) : « Il demanda **si** elle viendrait. » De même, « qu'est-ce que » devient **ce que** et « qu'est-ce qui » devient **ce qui** : « Il demanda **ce qu'**elle voulait », « Il demanda **ce qui** la retenait ».",
    correcte: true,
    verdict: "C'est juste : « est-ce que » appartient à l'interrogation directe : il disparaît toujours au discours indirect, remplacé par **si** (question totale) : « Il demanda **si** elle viendrait. » De même, « qu'est-ce que » devient **ce que** et « qu'est-ce qui » devient **ce qui** : « Il demanda **ce qu'**elle voulait », « Il demanda **ce qui** la retenait ».",
    coteProf: "Pour une question oui/non rapportée, employer « si » ; pour une question partielle, le mot interrogatif (où, quand, pourquoi…) ; pour « qu'est-ce que / qu'est-ce qui », « ce que / ce qui ».",
  },
  {
    id: "fr-15-cop-08",
    copie: "Un candidat affirme : L'absence de guillemets ne suffit pas. Le DI exige un verbe introducteur + une subordonnée. Ici, phrase autonome, conditionnel et exclamation : c'est du **discours indirect libre**.",
    correcte: true,
    verdict: "C'est juste : L'absence de guillemets ne suffit pas. Le DI exige un verbe introducteur + une subordonnée. Ici, phrase autonome, conditionnel et exclamation : c'est du **discours indirect libre**.",
    coteProf: "Chercher le verbe introducteur et la subordination : s'ils manquent et que la phrase est autonome, c'est du DIL.",
  },
];
