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
  getCanonicalNiveau,
  isValidMatiere,
  isValidNiveau,
} from "../data";
import { getMatiereLastModified } from "@/lib/seo-dates";

const SITE_URL = "https://www.maitrizz.fr";

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

  // Contenu identique en L3/M2 => canonical vers le niveau de référence, pour
  // éviter le contenu dupliqué. Sinon, la fiche est sa propre canonique.
  const canonicalNiveau = getCanonicalNiveau(niveau, matiere, slug);
  const canonicalUrl = `/reviser/${canonicalNiveau}/epreuves/ecrites/${matiere}/${slug}`;
  return {
    title: fiche.metaTitle,
    description: fiche.metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: fiche.metaTitle,
      description: fiche.metaDescription,
      url: canonicalUrl,
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
  const pageName =
    fiche.numero > 0 && fiche.kind !== "sujet" ? `Notion ${fiche.numero} : ${fiche.title}` : fiche.title;
  const lastModified = getMatiereLastModified(matiere);
  // URL canonique (cf. getCanonicalNiveau) : c'est elle que doit référencer le
  // JSON-LD quand le contenu est partagé entre L3 et M2.
  const canonicalNiveau = getCanonicalNiveau(niveau, matiere, slug);
  const canonicalUrl = `${SITE_URL}/reviser/${canonicalNiveau}/epreuves/ecrites/${matiere}/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: pageName,
    description: fiche.metaDescription,
    inLanguage: "fr",
    isAccessibleForFree: true,
    learningResourceType: "Fiche de révision",
    educationalLevel: "CRPE",
    about: fiche.partie,
    teaches: fiche.subtitle,
    keywords: [fiche.title, label, "CRPE", "fiche de révision", fiche.partie],
    ...(lastModified ? { dateModified: lastModified } : {}),
    publisher: {
      "@type": "Organization",
      name: "Maitrizz",
      url: SITE_URL,
    },
    url: canonicalUrl,
  };

  // Fil d'Ariane en données structurées : reflète exactement la navigation
  // visible ci-dessous, pour le rich result « breadcrumb » de Google.
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Accueil", item: `${SITE_URL}/` },
      { name: "Réviser", item: `${SITE_URL}/reviser` },
      { name: "Épreuves", item: `${SITE_URL}/reviser/${niveau}/epreuves` },
      { name: "Écrites", item: `${SITE_URL}/reviser/${niveau}/epreuves/ecrites` },
      { name: label, item: `${SITE_URL}${base}` },
      { name: pageName, item: `${SITE_URL}${base}/${slug}` },
    ].map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      item: entry.item,
    })),
  };

  return (
    <div className="min-h-screen bg-base-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
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
