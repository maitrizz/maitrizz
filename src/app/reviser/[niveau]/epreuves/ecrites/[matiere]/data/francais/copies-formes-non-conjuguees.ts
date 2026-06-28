// Banque de copies à corriger, notion 10 « Infinitif, participes et gérondif ».
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

export const COPIES_FORMES_NON_CONJUGUEES: CopieACorriger[] = [
  {
    id: "fr-10-cop-01",
    copie: "Réponse d'un candidat : « **marchant rapidement** : proposition subordonnée participiale », pour *« Le facteur, marchant rapidement, acheva sa tournée. »*",
    correcte: false,
    verdict: "À corriger : Le sujet de « marchant » est le même que celui du verbe principal : « le facteur »\n- Une subordonnée participiale exige un sujet propre distinct (voir notion 5)\n- Réponse attendue : « marchant » est un participe présent ; « marchant rapidement » est épithète détachée du nom « facteur »",
  },
  {
    id: "fr-10-cop-02",
    copie: "Réponse d'un candidat : « **en persévérant** : participe présent, épithète », pour *« Elle réussit en persévérant. »*",
    correcte: false,
    verdict: "À corriger : « en » + -ant = gérondif, pas participe présent\n- Le gérondif se construit avec « en » suivi du participe présent\n- Réponse attendue : « en persévérant » est un gérondif, complément circonstanciel de moyen",
  },
  {
    id: "fr-10-cop-03",
    copie: "Réponse d'un candidat : « **émouvante** : participe présent », pour *« Cette histoire est émouvante. »*",
    correcte: false,
    verdict: "À corriger : « émouvante » s'accorde au féminin singulier avec « histoire » : ce n'est pas un participe présent, qui serait invariable\n- La forme exprime ici une propriété du nom et occupe une fonction adjectivale\n- Réponse attendue : « émouvante » est un adjectif verbal, attribut du sujet « histoire »",
  },
  {
    id: "fr-10-cop-residant",
    copie: "Réponse d'un candidat : « *résidant* est un participe présent, **épithète liée** du nom *candidats* », pour « Les candidats **résidant à Paris** recevront une convocation. »",
    correcte: true,
    verdict: "C'est juste : *résidant* est un **participe présent** (invariable, terminaison en -ant), épithète liée de *candidats*, sans virgule de détachement.",
  },
  {
    id: "fr-10-cop-enfants-chanter",
    copie: "Réponse d'un candidat : « dans *J'entends les enfants chanter*, *chanter* forme une **subordonnée infinitive** dont le sujet propre est *les enfants* ».",
    correcte: true,
    verdict: "C'est juste : *les enfants* est le sujet propre de l'infinitif *chanter* ; l'ensemble *les enfants chanter* est une **subordonnée infinitive**, COD de *entends*.",
    coteProf: "Le critère décisif est le sujet propre distinct (voir [phrase complexe](fiche:phrase-complexe)).",
  },
  {
    id: "fr-10-cop-lire-sujet",
    copie: "Réponse d'un candidat : « dans *Lire instruit*, *lire* est un infinitif par nature et **sujet** de *instruit* par fonction ».",
    correcte: true,
    verdict: "C'est juste : la nature (infinitif) et la fonction (sujet) sont deux questions distinctes, et le candidat donne bien les deux. *lire* garde sa nature verbale même employé comme sujet.",
  },
  {
    id: "fr-10-cop-porte-fermee",
    copie: "Réponse d'un candidat : « dans *une porte fermée*, *fermée* est un verbe au **passé composé** ».",
    correcte: false,
    verdict: "À corriger : sans auxiliaire *être* ou *avoir*, le participe passé *fermée* est ici **employé seul**, comme un adjectif : il est **épithète liée** du nom *porte*.",
    coteProf: "Pas d'auxiliaire = pas de temps composé. Le test : *fermée* s'accorde avec *porte*, comme un adjectif.",
  },
  {
    id: "fr-10-cop-reussir-infinitif",
    copie: "Réponse d'un candidat : « dans *Il espère réussir*, *réussir* est un **nom**, COD de *espère* ».",
    correcte: false,
    verdict: "À corriger : *réussir* est un **infinitif** (nature verbale), même s'il occupe la fonction de COD de *espère*. Ne jamais écrire « nom verbal ».",
  },
];
