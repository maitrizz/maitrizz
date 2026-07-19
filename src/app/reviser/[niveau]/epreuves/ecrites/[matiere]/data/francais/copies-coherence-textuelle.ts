// Banque de copies à corriger, notion 14 « La cohérence textuelle ».
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

export const COPIES_COHERENCE_TEXTUELLE: CopieACorriger[] = [
  {
    id: "fr-14-cop-01",
    copie: "Un candidat affirme : « Pierre dit à Paul qu'il avait tort. » → on ne sait pas qui a tort : « il » peut renvoyer à Pierre ou à Paul.",
    correcte: false,
    verdict: "Reformuler pour lever le doute : « Pierre reconnut que Paul avait tort » ou « Pierre admit qu'il avait lui-même tort ».",
    coteProf: "Toute reprise doit renvoyer sans hésitation à un seul antécédent. En analyse comme en rédaction, vérifier qu'un pronom n'a pas deux antécédents possibles.",
  },
  {
    id: "fr-14-cop-02",
    copie: "Un candidat affirme : « Le champ lexical est l'école parce que le texte parle de l'école. »",
    correcte: false,
    verdict: "« Le texte a pour thème l'école, mais il mobilise le champ lexical de l'effort : “obstacle”, “progresser”, “réussite”, “persévérer”. »",
    coteProf: "Distinguer ce dont parle le texte (thème) et les mots qui construisent une atmosphère ou un point de vue (champ lexical).",
  },
  {
    id: "fr-14-cop-03",
    copie: "Un candidat affirme : « Le champ lexical est : nuit, ombre, obscur. »",
    correcte: false,
    verdict: "Ajouter l'effet : « Ce champ lexical de la nuit crée une atmosphère mystérieuse, légèrement inquiétante. »",
    coteProf: "Un relevé ne suffit jamais : il faut nommer le champ lexical, puis expliquer son effet dans le texte.",
  },
  {
    id: "fr-14-cop-04",
    copie: "Un candidat affirme : « Le texte suit une progression linéaire parce qu'il parle toujours de la lecture. »",
    correcte: false,
    verdict: "S'il parle toujours de la lecture en ajoutant plusieurs informations sur elle, c'est plutôt une **progression à thème constant**.",
    coteProf: "Repérer d'abord ce qui reste stable : même thème repris = thème constant ; information nouvelle reprise phrase après phrase = progression linéaire ; thème général décliné en sous-thèmes = thèmes dérivés.",
  },
  {
    id: "fr-14-cop-05",
    copie: "Copie d'un candidat : « L'école est importante. L'école forme les citoyens. L'école est un lieu de vie. Malgré que certains élèves n'aiment pas l'école, l'école reste essentielle. »",
    correcte: false,
    verdict: "À corriger : Répétition de « l'école » cinq fois, sans reprise pronominale ni variation\nÀ corriger : « malgré que » + verbe : construction à éviter dans une copie\n- Réponse attendue : « L'école est une institution fondamentale. **Elle** forme les citoyens et constitue un lieu de vie. **Bien que** certains élèves n'y adhèrent pas toujours, **cet espace éducatif** demeure indispensable. »",
  },
  {
    id: "fr-14-cop-06",
    copie: "Un candidat affirme : Reformuler pour lever le doute : « Pierre reconnut que Paul avait tort » ou « Pierre admit qu'il avait lui-même tort ».",
    correcte: true,
    verdict: "C'est juste : Reformuler pour lever le doute : « Pierre reconnut que Paul avait tort » ou « Pierre admit qu'il avait lui-même tort ».",
    coteProf: "Toute reprise doit renvoyer sans hésitation à un seul antécédent. En analyse comme en rédaction, vérifier qu'un pronom n'a pas deux antécédents possibles.",
  },
  {
    id: "fr-14-cop-07",
    copie: "Un candidat affirme : « Le texte a pour thème l'école, mais il mobilise le champ lexical de l'effort : “obstacle”, “progresser”, “réussite”, “persévérer”. »",
    correcte: true,
    verdict: "C'est juste : « Le texte a pour thème l'école, mais il mobilise le champ lexical de l'effort : “obstacle”, “progresser”, “réussite”, “persévérer”. »",
    coteProf: "Distinguer ce dont parle le texte (thème) et les mots qui construisent une atmosphère ou un point de vue (champ lexical).",
  },
  {
    id: "fr-14-cop-08",
    copie: "Un candidat affirme : Ajouter l'effet : « Ce champ lexical de la nuit crée une atmosphère mystérieuse, légèrement inquiétante. »",
    correcte: true,
    verdict: "C'est juste : Ajouter l'effet : « Ce champ lexical de la nuit crée une atmosphère mystérieuse, légèrement inquiétante. »",
    coteProf: "Un relevé ne suffit jamais : il faut nommer le champ lexical, puis expliquer son effet dans le texte.",
  },
];
