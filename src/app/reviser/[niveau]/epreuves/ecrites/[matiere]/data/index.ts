import type { Fiche, FicheBadge, Matiere } from "@/components/fiche/types";
import type { Niveau } from "@/lib/niveau";
import { NIVEAUX, NIVEAU_LABELS, isValidNiveau } from "@/lib/niveau";
import { ficheNumerationSystemesDeBases } from "./mathematiques/numeration-systemes-de-bases";
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

export const MATIERES: Matiere[] = ["mathematiques", "francais"];

export const MATIERE_LABELS: Record<Matiere, string> = {
  mathematiques: "Mathématiques",
  francais: "Français",
};

// Mathématiques : identique pour les deux concours (L3 et M2).
const MATHEMATIQUES: Fiche[] = [ficheNumerationSystemesDeBases];

// Français : notions 01-18 communes L3/M2. La divergence commence à la
// notion 19 (Partie 3) — les fiches propres à chaque niveau sont ajoutées
// aux listes FRANCAIS_L3 / FRANCAIS_M2 ci-dessous.
const FRANCAIS_COMMUN: Fiche[] = [ficheClassesGrammaticales, ficheFonctionsSyntaxiques, ficheGroupeNominalExpansions, ficheGroupeVerbal, fichePhraseComplexe, ficheModesEtTemps, ficheTempsDuPasse, fichePresentFuturConditionnelSubjonctif, ficheFormesNonConjugueesPassivePronominale, ficheAccordsGnGv, ficheAccordParticipePasse, ficheHomophonesPonctuation, ficheCoherenceTextuelle, ficheEnonciationDiscoursRapporte, fichePhonologie, ficheFormationDesMots, ficheRelationsSemantiques, ficheFiguresRegistres];

const FRANCAIS_L3: Fiche[] = [
  ...FRANCAIS_COMMUN,
  ficheConstruirePlanL3,
  ficheRedigerDeveloppementL3,
  ficheCultureLitteraireL3,
];
const FRANCAIS_M2: Fiche[] = [
  ...FRANCAIS_COMMUN,
  ficheConstruirePlanM2,
  ficheRedigerDeveloppementM2,
  ficheCultureLitteraireM2,
];

const FICHES: Record<Niveau, Record<Matiere, Fiche[]>> = {
  l3: { mathematiques: MATHEMATIQUES, francais: FRANCAIS_L3 },
  m2: { mathematiques: MATHEMATIQUES, francais: FRANCAIS_M2 },
};

export function isValidMatiere(value: string): value is Matiere {
  return value === "mathematiques" || value === "francais";
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
