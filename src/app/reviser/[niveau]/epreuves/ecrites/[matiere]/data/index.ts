import type { Fiche, FicheBadge, Matiere } from "@/components/fiche/types";
import type { Niveau } from "@/lib/niveau";
import { NIVEAUX, NIVEAU_LABELS, isValidNiveau } from "@/lib/niveau";
import { ficheNumerationSystemesDeBases } from "./mathematiques/numeration-systemes-de-bases";
import { ficheNombresRelatifs } from "./mathematiques/nombres-relatifs";
import { ficheFractionsDecimaux } from "./mathematiques/fractions-decimaux";
import { fichePuissancesRacinesReels } from "./mathematiques/puissances-racines-reels";
import { ficheCalculNumeriquePriorites } from "./mathematiques/calcul-numerique-priorites";
import { ficheDivisibilitePgcdPpcm } from "./mathematiques/divisibilite-pgcd-ppcm";
import { ficheDenombrement } from "./mathematiques/denombrement";
import { ficheCalculLitteral } from "./mathematiques/calcul-litteral";
import { ficheEquationsInequationsSystemes } from "./mathematiques/equations-inequations-systemes";
import { ficheSuitesNumeriques } from "./mathematiques/suites-numeriques";
import { ficheStatistiquesDescriptives } from "./mathematiques/statistiques-descriptives";
import { ficheProbabilites } from "./mathematiques/probabilites";
import { ficheProportionnalitePourcentages } from "./mathematiques/proportionnalite-pourcentages";
import { ficheFonctionsLineairesAffines } from "./mathematiques/fonctions-lineaires-affines";
import { fichePerimetresAiresVolumes } from "./mathematiques/perimetres-aires-volumes";
import { ficheDureesMassesGrandeursComposees } from "./mathematiques/durees-masses-grandeurs-composees";
import { ficheReperageCoordonnees } from "./mathematiques/reperage-coordonnees";
import { ficheDroitesAnglesParallelisme } from "./mathematiques/droites-angles-parallelisme";
import { ficheClassesGrammaticales } from "./francais/classes-grammaticales";
import { ficheFonctionsSyntaxiques } from "./francais/fonctions-syntaxiques";
import { ficheGroupeNominalExpansions } from "./francais/groupe-nominal-expansions";
import { ficheGroupeVerbal } from "./francais/groupe-verbal";
import { fichePhraseComplexe } from "./francais/phrase-complexe";
import { ficheModesEtTemps } from "./francais/modes-et-temps";
import { ficheTempsDuPasse } from "./francais/temps-du-passe";
import { fichePresentFuturConditionnelSubjonctif } from "./francais/present-futur-conditionnel-subjonctif";
import { ficheFormesNonConjugueesPassivePronominale } from "./francais/formes-non-conjuguees-passive-pronominale";
import { ficheAccordsGnGv } from "./francais/accords-gn-gv";
import { ficheAccordParticipePasse } from "./francais/accord-participe-passe";
import { ficheHomophonesPonctuation } from "./francais/homophones-grammaticaux-ponctuation";
import { ficheCoherenceTextuelle } from "./francais/coherence-textuelle";
import { ficheEnonciationDiscoursRapporte } from "./francais/enonciation-discours-rapporte";
import { fichePhonologie } from "./francais/phonologie";
import { ficheFormationDesMots } from "./francais/formation-des-mots";
import { ficheRelationsSemantiques } from "./francais/relations-semantiques";
import { ficheFiguresRegistres } from "./francais/figures-de-style-registres";
import {
  ficheConstruirePlanL3,
  ficheConstruirePlanM2,
} from "./francais/construire-un-plan";
import {
  ficheRedigerDeveloppementL3,
  ficheRedigerDeveloppementM2,
} from "./francais/rediger-le-developpement";
import {
  ficheCultureLitteraireL3,
  ficheCultureLitteraireM2,
} from "./francais/culture-litteraire";
import {
  ficheMethodologieL3,
  ficheMethodologieM2,
} from "./francais/methodologie-de-l-epreuve";
import {
  ficheUniteDiversiteVivantL3,
  ficheUniteDiversiteVivantM2,
} from "./sciences/unite-et-diversite-du-vivant";

export type { Matiere, Niveau };
export { NIVEAUX, NIVEAU_LABELS, isValidNiveau };

export type FicheMeta = {
  slug: string;
  numero: number;
  partie: string;
  title: string;
  subtitle: string;
  badges: FicheBadge[];
};

export type PartieGroup = {
  partie: string;
  fiches: FicheMeta[];
};

export const MATIERES: Matiere[] = ["mathematiques", "francais", "sciences"];

export const MATIERE_LABELS: Record<Matiere, string> = {
  mathematiques: "Mathématiques",
  francais: "Français",
  sciences: "Sciences et technologie",
};

// Mathématiques : chantier M2 en cours (plan dans SUIVI_FICHES_MATHEMATIQUES.md).
// La version L3 sera dérivée du M2 plus tard ; en attendant la liste L3 reste vide
// (la page matière affiche « arrivent très bientôt » quand la liste est vide).
const MATHEMATIQUES_M2: Fiche[] = [ficheNumerationSystemesDeBases, ficheNombresRelatifs, ficheFractionsDecimaux, fichePuissancesRacinesReels, ficheCalculNumeriquePriorites, ficheDivisibilitePgcdPpcm, ficheDenombrement, ficheCalculLitteral, ficheEquationsInequationsSystemes, ficheSuitesNumeriques, ficheStatistiquesDescriptives, ficheProbabilites, ficheProportionnalitePourcentages, ficheFonctionsLineairesAffines, fichePerimetresAiresVolumes, ficheDureesMassesGrandeursComposees, ficheReperageCoordonnees, ficheDroitesAnglesParallelisme];
const MATHEMATIQUES_L3: Fiche[] = [];

// Français : notions 01-18 communes L3/M2. La divergence commence à la
// notion 19 (Partie 3) — les fiches propres à chaque niveau sont ajoutées
// aux listes FRANCAIS_L3 / FRANCAIS_M2 ci-dessous.
const FRANCAIS_COMMUN: Fiche[] = [ficheClassesGrammaticales, ficheFonctionsSyntaxiques, ficheGroupeNominalExpansions, ficheGroupeVerbal, fichePhraseComplexe, ficheModesEtTemps, ficheTempsDuPasse, fichePresentFuturConditionnelSubjonctif, ficheFormesNonConjugueesPassivePronominale, ficheAccordsGnGv, ficheAccordParticipePasse, ficheHomophonesPonctuation, ficheCoherenceTextuelle, ficheEnonciationDiscoursRapporte, fichePhonologie, ficheFormationDesMots, ficheRelationsSemantiques, ficheFiguresRegistres];

const FRANCAIS_L3: Fiche[] = [
  ficheMethodologieL3,
  ...FRANCAIS_COMMUN,
  ficheConstruirePlanL3,
  ficheRedigerDeveloppementL3,
  ficheCultureLitteraireL3,
];
const FRANCAIS_M2: Fiche[] = [
  ficheMethodologieM2,
  ...FRANCAIS_COMMUN,
  ficheConstruirePlanM2,
  ficheRedigerDeveloppementM2,
  ficheCultureLitteraireM2,
];

// Sciences et technologie : chantier en cours (plan dans SUIVI_FICHES_SCIENCES.md).
// Contenu source déjà différencié L3/M2 (18 modules). Le cours disciplinaire et
// les séances sont communs ; ce qui diffère par niveau (rubrique « Préparer
// l'épreuve », profondeur, auteurs) est injecté par la fabrique de chaque module.
// Module pilote en ligne : 01 Unité et diversité du vivant.
const SCIENCES_L3: Fiche[] = [ficheUniteDiversiteVivantL3];
const SCIENCES_M2: Fiche[] = [ficheUniteDiversiteVivantM2];

const FICHES: Record<Niveau, Record<Matiere, Fiche[]>> = {
  l3: { mathematiques: MATHEMATIQUES_L3, francais: FRANCAIS_L3, sciences: SCIENCES_L3 },
  m2: { mathematiques: MATHEMATIQUES_M2, francais: FRANCAIS_M2, sciences: SCIENCES_M2 },
};

export function isValidMatiere(value: string): value is Matiere {
  return value === "mathematiques" || value === "francais" || value === "sciences";
}

export function getFiches(niveau: Niveau, matiere: Matiere): Fiche[] {
  return FICHES[niveau]?.[matiere] ?? [];
}

export function getFiche(
  niveau: Niveau,
  matiere: Matiere,
  slug: string
): Fiche | undefined {
  return getFiches(niveau, matiere).find((f) => f.slug === slug);
}

function toMeta(fiche: Fiche): FicheMeta {
  return {
    slug: fiche.slug,
    numero: fiche.numero,
    partie: fiche.partie,
    title: fiche.title,
    subtitle: fiche.subtitle,
    badges: fiche.badges,
  };
}

export function getFicheMetas(niveau: Niveau, matiere: Matiere): FicheMeta[] {
  return getFiches(niveau, matiere)
    .slice()
    .sort((a, b) => a.numero - b.numero)
    .map(toMeta);
}

export function getPartieGroups(
  niveau: Niveau,
  matiere: Matiere
): PartieGroup[] {
  const groups: PartieGroup[] = [];
  for (const meta of getFicheMetas(niveau, matiere)) {
    let group = groups.find((g) => g.partie === meta.partie);
    if (!group) {
      group = { partie: meta.partie, fiches: [] };
      groups.push(group);
    }
    group.fiches.push(meta);
  }
  return groups;
}

export function getAdjacentFiches(
  niveau: Niveau,
  matiere: Matiere,
  slug: string
): { prev: FicheMeta | null; next: FicheMeta | null } {
  const metas = getFicheMetas(niveau, matiere);
  const index = metas.findIndex((f) => f.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? metas[index - 1] : null,
    next: index < metas.length - 1 ? metas[index + 1] : null,
  };
}
