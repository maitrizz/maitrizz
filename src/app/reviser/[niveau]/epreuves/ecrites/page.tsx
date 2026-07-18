import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Matiere } from "@/components/fiche/types";
import {
  MATIERES,
  MATIERE_LABELS,
  NIVEAUX,
  getFicheMetas,
  isValidNiveau,
} from "./[matiere]/data";
import {
  HUB_CARD,
  HubCardCtaOutline,
  HubHeader,
  HubLabel,
  LockIcon,
  Souligne,
} from "../../../_components/hub";

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
  const canonicalUrl = `/reviser/${niveau}/epreuves/ecrites`;
  const title = `Écrits du CRPE ${n} : français et maths | Maitrizz`;
  const description = `Révisez les épreuves écrites du CRPE ${n} : français et mathématiques. Fiches de cours, méthode pas-à-pas et exercices corrigés pour l'admissibilité.`;
  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: { title, description, url: canonicalUrl, type: "website" },
  };
}

/* Dessins main levée partagés (public/illustrations), un par matière. */
const MATIERE_ICONS: Record<Matiere, string> = {
  mathematiques: "/illustrations/regle-equerre.svg",
  francais: "/illustrations/livre-ouvert.svg",
  sciences: "/illustrations/fiole.svg",
};

const MATIERE_CTA: Record<Matiere, string> = {
  mathematiques: "Réviser les mathématiques",
  francais: "Réviser le français",
  sciences: "Réviser les sciences",
};

// Matières câblées dans le code mais pas encore validées : affichées « À venir »
// sur ce hub tant qu'elles ne sont pas prêtes à être montrées.
const MATIERES_NON_PUBLIEES: Matiere[] = ["sciences"];

// Matières du concours pas encore rédigées : simples cartes « À venir »,
// même liste que la section « Où en est la plateforme » de l'accueil.
const MATIERES_A_VENIR = [
  { label: "Histoire et géographie", icon: "/illustrations/globe-terrestre.svg" },
  { label: "Enseignements artistiques", icon: "/illustrations/palette-peinture.svg" },
];

export default async function EcritesPage({
  params,
}: {
  params: Promise<{ niveau: string }>;
}) {
  const { niveau } = await params;

  if (!isValidNiveau(niveau)) {
    notFound();
  }

  const n = niveau.toUpperCase();

  return (
    <div className="bg-seyes flex-1">
      <HubHeader
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Réviser", href: "/reviser" },
          { label: `CRPE ${n}`, href: `/reviser/${niveau}/epreuves` },
          { label: "Épreuves écrites" },
        ]}
        stamp="Admissibilité"
        title={
          <>
            Épreuves <Souligne>écrites</Souligne>
          </>
        }
        subtitle="Choisissez votre matière et avancez fiche par fiche."
        note={
          <>
            une matière
            <br />à la fois
          </>
        }
      />

      {/* Rythme vertical en multiples de 32px, le pas de la grille Seyès. */}
      <section className="px-5 pb-24 pt-16 md:px-12">
        <div className="mx-auto grid max-w-[1080px] gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MATIERES.map((matiere) => {
            const fiches = getFicheMetas(niveau, matiere);
            const label = MATIERE_LABELS[matiere];
            const icon = MATIERE_ICONS[matiere];

            if (fiches.length === 0 || MATIERES_NON_PUBLIEES.includes(matiere)) {
              return (
                <div
                  key={matiere}
                  className="flex flex-col rounded-xl border border-dashed border-outline-variant/60 bg-white/50 p-8"
                >
                  <div className="flex items-start justify-between border-b border-dashed border-outline-variant/50 pb-5">
                    <img
                      src={icon}
                      alt=""
                      aria-hidden
                      className="h-12 w-auto opacity-40"
                    />
                    <HubLabel>À venir</HubLabel>
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-on-surface-variant">
                    {label}
                  </h2>
                  <p className="mt-2 font-ui text-sm leading-relaxed text-on-surface-variant">
                    Fiches de cours, méthode et exercices corrigés.
                  </p>
                  <div className="mt-8 flex items-center gap-2 font-ui text-xs font-bold uppercase tracking-widest text-on-surface-variant/70">
                    <LockIcon />
                    Bientôt disponible
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={matiere}
                href={`/reviser/${niveau}/epreuves/ecrites/${matiere}`}
                className={`${HUB_CARD} p-8`}
              >
                <div className="flex items-start justify-between border-b border-dashed border-outline-variant/60 pb-5">
                  <img src={icon} alt="" aria-hidden className="h-12 w-auto" />
                  <HubLabel>
                    {fiches.length} fiche{fiches.length > 1 ? "s" : ""} en ligne
                  </HubLabel>
                </div>
                <div className="flex-1">
                  <h2 className="mt-6 text-2xl font-bold text-primary">
                    {label}
                  </h2>
                  <p className="mt-2 font-ui text-sm leading-relaxed text-on-surface-variant">
                    Fiches de cours, méthode et exercices corrigés.
                  </p>
                </div>
                <HubCardCtaOutline>{MATIERE_CTA[matiere]}</HubCardCtaOutline>
              </Link>
            );
          })}

          {MATIERES_A_VENIR.map(({ label, icon }) => (
            <div
              key={label}
              className="flex flex-col rounded-xl border border-dashed border-outline-variant/60 bg-white/50 p-8"
            >
              <div className="flex items-start justify-between border-b border-dashed border-outline-variant/50 pb-5">
                <img src={icon} alt="" aria-hidden className="h-12 w-auto opacity-40" />
                <HubLabel>À venir</HubLabel>
              </div>
              <h2 className="mt-6 text-2xl font-bold text-on-surface-variant">
                {label}
              </h2>
              <p className="mt-2 font-ui text-sm leading-relaxed text-on-surface-variant">
                Fiches de cours, méthode et exercices corrigés.
              </p>
              <div className="mt-8 flex items-center gap-2 font-ui text-xs font-bold uppercase tracking-widest text-on-surface-variant/70">
                <LockIcon />
                Bientôt disponible
              </div>
            </div>
          ))}
        </div>

        {/* Le vide du bas de page est habité par un dessin au trait :
            la copie en cours et la tasse fumante. */}
        <img
          src="/illustrations/copie-tasse.svg"
          alt=""
          aria-hidden
          className="mx-auto mt-16 w-56 md:w-64"
        />
      </section>
    </div>
  );
}
