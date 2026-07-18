import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NIVEAUX, isValidNiveau } from "./ecrites/[matiere]/data";
import {
  HUB_CARD,
  HubCardCtaOutline,
  HubHeader,
  HubLabel,
  Souligne,
} from "../../_components/hub";

export async function generateStaticParams() {
  return NIVEAUX.map((niveau) => ({ niveau }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niveau: string }>;
}): Promise<Metadata> {
  const { niveau } = await params;
  if (!isValidNiveau(niveau)) return {};
  const n = niveau.toUpperCase();
  const canonicalUrl = `/reviser/${niveau}/epreuves`;
  const title = `Préparer le CRPE ${n} : écrits et oraux | Maitrizz`;
  const description = `Préparez le CRPE ${n} : épreuves écrites (français, mathématiques) et orales (entretien, système éducatif). Fiches, méthode et exercices corrigés.`;
  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: { title, description, url: canonicalUrl, type: "website" },
  };
}

export default async function EpreuvesPage({
  params,
}: {
  params: Promise<{ niveau: string }>;
}) {
  const { niveau } = await params;

  if (!isValidNiveau(niveau)) {
    notFound();
  }

  const n = niveau.toUpperCase();
  const base = `/reviser/${niveau}`;

  const etapes = [
    {
      href: `${base}/epreuves/ecrites`,
      icon: "/illustrations/copie-stylo.svg",
      label: "Étape 1 · Admissibilité",
      titre: "Épreuves écrites",
      desc: "Français et mathématiques : fiches de cours, méthode et exercices corrigés.",
      cta: "Préparer les écrits",
    },
    {
      href: `${base}/epreuves/orales`,
      icon: "/illustrations/bulles-oral.svg",
      label: "Étape 2 · Admission",
      titre: "Épreuves orales",
      desc: "La leçon de français et de mathématiques, puis l'entretien avec le jury.",
      cta: "Préparer les oraux",
    },
  ];

  return (
    <div className="bg-seyes flex-1">
      <HubHeader
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Réviser", href: "/reviser" },
          { label: `CRPE ${n}` },
        ]}
        stamp={niveau === "l3" ? "Voie licence" : "Voie master"}
        title={
          <>
            Les <Souligne>épreuves</Souligne> du CRPE {n}
          </>
        }
        subtitle="Tout ce qu'il faut pour préparer chaque étape du concours."
        note={
          <>
            l&apos;écrit d&apos;abord,
            <br />
            l&apos;oral ensuite
          </>
        }
      />

      {/* Rythme vertical en multiples de 32px, le pas de la grille Seyès. */}
      <section className="px-5 pb-24 pt-16 md:px-12">
        <div className="mx-auto grid max-w-[1080px] gap-8 md:grid-cols-2">
          {etapes.map((etape) => (
            <Link
              key={etape.titre}
              href={etape.href}
              className={`${HUB_CARD} p-8 md:p-10`}
            >
              <div className="flex items-start justify-between border-b border-dashed border-outline-variant/60 pb-6">
                <img
                  src={etape.icon}
                  alt=""
                  aria-hidden
                  className="h-14 w-auto"
                />
                <HubLabel>{etape.label}</HubLabel>
              </div>

              <div className="flex-1">
                <h2 className="mt-6 text-2xl font-bold text-primary lg:text-3xl">
                  {etape.titre}
                </h2>
                <p className="mt-2 font-ui leading-relaxed text-on-surface-variant">
                  {etape.desc}
                </p>
              </div>

              <HubCardCtaOutline>{etape.cta}</HubCardCtaOutline>
            </Link>
          ))}
        </div>

        {/* Le vide du bas de page est habité par un dessin au trait :
            le chemin en deux étapes qui mène à l'école. */}
        <img
          src="/illustrations/parcours-ecole.svg"
          alt=""
          aria-hidden
          className="mx-auto mt-16 w-80 md:w-96"
        />
      </section>
    </div>
  );
}
