import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NIVEAUX, isValidNiveau } from "../ecrites/[matiere]/data";
import {
  HUB_CARD,
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
  const canonicalUrl = `/reviser/${niveau}/epreuves/orales`;
  const title = `Oraux du CRPE ${n} : entretien et leçon | Maitrizz`;
  const description = `Préparez les épreuves orales du CRPE ${n} : entretien avec le jury (système éducatif, EPS, motivation) et leçon. Fiches et méthode pour l'admission.`;
  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: { title, description, url: canonicalUrl, type: "website" },
  };
}

function LockedRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-dashed border-outline-variant/60 px-4 py-3.5 font-ui text-sm text-on-surface-variant/70">
      {children}
      <LockIcon />
    </div>
  );
}

export default async function OralesPage({
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

  return (
    <div className="bg-seyes flex-1">
      <HubHeader
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Réviser", href: "/reviser" },
          { label: `CRPE ${n}`, href: `${base}/epreuves` },
          { label: "Épreuves orales" },
        ]}
        stamp="Admission"
        title={
          <>
            Épreuves <Souligne>orales</Souligne>
          </>
        }
        subtitle="Ce qui vous attend face au jury, et comment vous y préparer."
        note={
          <>
            l&apos;oral aussi
            <br />
            se prépare
          </>
        }
      />

      {/* Rythme vertical en multiples de 32px, le pas de la grille Seyès. */}
      <section className="px-5 pb-24 pt-16 md:px-12">
        <div className="mx-auto grid max-w-[1080px] gap-8 md:grid-cols-2">
          {/* Entretien — à venir */}
          <div className="flex flex-col rounded-xl border border-dashed border-outline-variant/60 bg-white/50 p-8 md:p-10">
            <div className="flex items-start justify-between border-b border-dashed border-outline-variant/50 pb-5">
              <img
                src="/illustrations/bulles-oral.svg"
                alt=""
                aria-hidden
                className="h-12 w-auto opacity-40"
              />
              <HubLabel>À venir</HubLabel>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-on-surface-variant lg:text-3xl">
              Entretien
            </h2>
            <p className="mt-2 font-ui text-sm leading-relaxed text-on-surface-variant">
              Trois composantes, à travailler séparément.
            </p>
            <div className="mt-5 flex flex-col gap-2.5">
              <LockedRow>Connaissance du système éducatif</LockedRow>
              <LockedRow>EPS</LockedRow>
              <LockedRow>Motivation</LockedRow>
            </div>
            <div className="mt-8 flex items-center gap-2 font-ui text-xs font-bold uppercase tracking-widest text-on-surface-variant/70">
              <LockIcon />
              Bientôt disponible
            </div>
          </div>

          {/* Leçon — à venir */}
          <div className="flex flex-col rounded-xl border border-dashed border-outline-variant/60 bg-white/50 p-8 md:p-10">
            <div className="flex items-start justify-between border-b border-dashed border-outline-variant/50 pb-5">
              <img
                src="/illustrations/tableau-chevalet.svg"
                alt=""
                aria-hidden
                className="h-12 w-auto opacity-40"
              />
              <HubLabel>À venir</HubLabel>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-on-surface-variant lg:text-3xl">
              Leçon
            </h2>
            <p className="mt-2 font-ui text-sm leading-relaxed text-on-surface-variant">
              Concevoir une séance d&apos;enseignement, puis la présenter et la
              défendre.
            </p>
            <div className="mt-5 flex flex-col gap-2.5">
              <LockedRow>Français</LockedRow>
              <LockedRow>Mathématiques</LockedRow>
            </div>
            <div className="mt-8 flex items-center gap-2 font-ui text-xs font-bold uppercase tracking-widest text-on-surface-variant/70">
              <LockIcon />
              Bientôt disponible
            </div>
          </div>
        </div>

        {/* Le vide du bas de page est habité par un dessin au trait :
            le micro et les ondes de la voix. */}
        <img
          src="/illustrations/micro-oral.svg"
          alt=""
          aria-hidden
          className="mx-auto mt-16 w-56 md:w-64"
        />
      </section>
    </div>
  );
}
