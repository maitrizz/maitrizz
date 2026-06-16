import type { Fiche, FicheBadge, Matiere } from "@/components/fiche/types";
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

export type { Matiere };

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

const FICHES: Record<Matiere, Fiche[]> = {
  mathematiques: [ficheNumerationSystemesDeBases],
  francais: [ficheClassesGrammaticales, ficheFonctionsSyntaxiques, ficheGroupeNominalExpansions, ficheGroupeVerbal, fichePhraseComplexe, ficheModesEtTemps, ficheTempsDuPasse, fichePresentFuturConditionnelSubjonctif, ficheFormesNonConjugueesPassivePronominale, ficheAccordsGnGv],
};

export function isValidMatiere(value: string): value is Matiere {
  return value === "mathematiques" || value === "francais";
}

export function getFiches(matiere: Matiere): Fiche[] {
  return FICHES[matiere] ?? [];
}

export function getFiche(matiere: Matiere, slug: string): Fiche | undefined {
  return getFiches(matiere).find((f) => f.slug === slug);
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

export function getFicheMetas(matiere: Matiere): FicheMeta[] {
  return getFiches(matiere)
    .slice()
    .sort((a, b) => a.numero - b.numero)
    .map(toMeta);
}

export function getPartieGroups(matiere: Matiere): PartieGroup[] {
  const groups: PartieGroup[] = [];
  for (const meta of getFicheMetas(matiere)) {
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
  matiere: Matiere,
  slug: string
): { prev: FicheMeta | null; next: FicheMeta | null } {
  const metas = getFicheMetas(matiere);
  const index = metas.findIndex((f) => f.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? metas[index - 1] : null,
    next: index < metas.length - 1 ? metas[index + 1] : null,
  };
}
