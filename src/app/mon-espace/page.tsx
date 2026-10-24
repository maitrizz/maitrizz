import type { Metadata } from "next";
import {
  MATIERES,
  MATIERE_LABELS,
  NIVEAUX,
  getFicheMetas,
  type Matiere,
  type Niveau,
} from "../reviser/[niveau]/epreuves/ecrites/[matiere]/data";
import { MonEspace, type Catalogue, type FicheIndex } from "@/components/compte/MonEspace";

export const metadata: Metadata = {
  title: "Mon espace | Maitrizz",
  description:
    "Votre plan de révision du CRPE : quoi faire aujourd'hui, ce qui revient bientôt, et où vous en êtes dans chaque matière.",
  robots: { index: false, follow: false },
};

/**
 * Index léger slug → titre, partie, matière, et comptage des fiches par
 * matière et par niveau.
 *
 * Construit ICI, côté serveur : la progression vit dans le navigateur, mais le
 * catalogue n'a aucune raison d'y descendre. L'importer depuis un composant
 * client tirerait les 110 fiches et tout leur contenu dans le bundle de cette
 * page, pour n'en afficher que des titres et des totaux.
 */
function construireCatalogue(): Catalogue {
  const fiches: FicheIndex = {};
  const totaux = {} as Catalogue["totaux"];

  for (const niveau of NIVEAUX) {
    totaux[niveau as Niveau] = {} as Record<Matiere, number>;
    for (const matiere of MATIERES) {
      const metas = getFicheMetas(niveau, matiere);
      // Les fiches de méthodologie ne sont pas des notions à maîtriser : on ne
      // les compte pas dans le dénominateur « x notions sur y ».
      totaux[niveau as Niveau][matiere] = metas.filter((m) => m.kind !== "methodo").length;
      for (const meta of metas) {
        // Fusion par slug : les fiches communes aux deux concours portent le
        // même titre, l'espace personnel n'a pas à savoir lequel est préparé.
        fiches[meta.slug] ??= {
          title: meta.title,
          partie: meta.partie,
          matiere,
          kind: meta.kind,
        };
      }
    }
  }

  return { fiches, totaux, labels: MATIERE_LABELS };
}

export default function MonEspacePage() {
  return <MonEspace catalogue={construireCatalogue()} />;
}
