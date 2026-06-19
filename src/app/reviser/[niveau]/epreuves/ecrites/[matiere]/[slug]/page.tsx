import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FicheHeader } from "@/components/fiche/FicheHeader";
import { FicheTabs } from "@/components/fiche/FicheTabs";
import {
  MATIERES,
  MATIERE_LABELS,
  NIVEAUX,
  getFiche,
  getFicheMetas,
  getAdjacentFiches,
  isValidMatiere,
  isValidNiveau,
} from "../data";

export async function generateStaticParams() {
  return NIVEAUX.flatMap((niveau) =>
    MATIERES.flatMap((matiere) =>
      getFicheMetas(niveau, matiere).map((fiche) => ({
        niveau,
        matiere,
        slug: fiche.slug,
      }))
    )
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niveau: string; matiere: string; slug: string }>;
}): Promise<Metadata> {
  const { niveau, matiere, slug } = await params;
  if (!isValidNiveau(niveau) || !isValidMatiere(matiere)) return {};

  const fiche = getFiche(niveau, matiere, slug);
  if (!fiche) return {};

  const url = `/reviser/${niveau}/epreuves/ecrites/${matiere}/${slug}`;
  return {
    title: fiche.metaTitle,
    description: fiche.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: fiche.metaTitle,
      description: fiche.metaDescription,
      url,
      type: "article",
    },
  };
}

export default async function FichePage({
  params,
}: {
  params: Promise<{ niveau: string; matiere: string; slug: string }>;
}) {
  const { niveau, matiere, slug } = await params;

  if (!isValidNiveau(niveau) || !isValidMatiere(matiere)) {
    notFound();
  }

  const fiche = getFiche(niveau, matiere, slug);
  if (!fiche) {
    notFound();
  }

  const label = MATIERE_LABELS[matiere];
  const { prev, next } = getAdjacentFiches(niveau, matiere, slug);
  const base = `/reviser/${niveau}/epreuves/ecrites/${matiere}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: fiche.numero > 0 ? `Notion ${fiche.numero} : ${fiche.title}` : fiche.title,
    description: fiche.metaDescription,
    inLanguage: "fr",
    isAccessibleForFree: true,
    learningResourceType: "Fiche de révision",
    educationalLevel: "CRPE",
    about: fiche.partie,
    teaches: fiche.subtitle,
    url: `https://www.maitrizz.fr${base}/${slug}`,
  };

  return (
    <div className="min-h-screen bg-base-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-8 flex flex-col gap-6">
        {/* Fil d'Ariane */}
        <div className="flex items-center gap-2 text-base-content/50 text-sm flex-wrap">
          <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
          <span>›</span>
          <Link href="/reviser" className="hover:text-primary transition-colors">Réviser</Link>
          <span>›</span>
          <Link href={`/reviser/${niveau}/epreuves`} className="hover:text-primary transition-colors">Épreuves</Link>
          <span>›</span>
          <Link href={`/reviser/${niveau}/epreuves/ecrites`} className="hover:text-primary transition-colors">Écrites</Link>
          <span>›</span>
          <Link href={base} className="hover:text-primary transition-colors">{label}</Link>
        </div>

        <FicheHeader fiche={fiche} />

        <FicheTabs tabGroups={fiche.tabGroups} ficheSlug={fiche.slug} niveau={niveau} matiere={matiere} />

        {/* Navigation précédent / suivant */}
        {(prev || next) && (
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-base-300">
            {prev ? (
              <Link href={`${base}/${prev.slug}`} className="btn btn-ghost btn-sm">
                ← {prev.numero > 0 ? `Notion ${prev.numero} : ${prev.title}` : prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`${base}/${next.slug}`} className="btn btn-ghost btn-sm">
                {next.numero > 0 ? `Notion ${next.numero} : ${next.title}` : next.title} →
              </Link>
            ) : (
              <span />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
