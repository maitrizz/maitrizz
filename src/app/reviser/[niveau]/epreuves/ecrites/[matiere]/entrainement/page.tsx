import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HubEntrainement } from "@/components/fiche/HubEntrainement";
import { HubHeader, Souligne } from "../../../../../_components/hub";
import { MATIERE_LABELS, NIVEAUX, isValidMatiere, isValidNiveau } from "../data";

// Le hub d'entraînement espacé n'existe (pilote) que pour le français écrit.
export async function generateStaticParams() {
  return NIVEAUX.map((niveau) => ({ niveau, matiere: "francais" }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niveau: string; matiere: string }>;
}): Promise<Metadata> {
  const { niveau, matiere } = await params;
  if (!isValidNiveau(niveau) || !isValidMatiere(matiere)) return {};
  return {
    title: `Entraînement espacé · ${MATIERE_LABELS[matiere]}`,
    description: "Entretenir le geste dans la durée : récupération espacée entrelacée sur plusieurs notions.",
    alternates: { canonical: `/reviser/${niveau}/epreuves/ecrites/${matiere}/entrainement` },
  };
}

export default async function HubPage({
  params,
}: {
  params: Promise<{ niveau: string; matiere: string }>;
}) {
  const { niveau, matiere } = await params;

  if (!isValidNiveau(niveau) || !isValidMatiere(matiere)) {
    notFound();
  }
  // Pilote : hub réservé au français pour l'instant.
  if (matiere !== "francais") {
    notFound();
  }

  const label = MATIERE_LABELS[matiere];

  return (
    <div className="bg-seyes min-h-screen">
      <HubHeader
        maxWidth="max-w-3xl"
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Réviser", href: "/reviser" },
          { label, href: `/reviser/${niveau}/epreuves/ecrites/${matiere}` },
          { label: "Entraînement" },
        ]}
        title={
          <>
            Entraînement <Souligne>espacé</Souligne>
          </>
        }
        subtitle="Entretenir le geste dans la durée, toutes notions mêlées. La fiche construit le geste ; ici, on l'entretient."
      />

      <div className="mx-auto max-w-3xl px-5 pb-20 pt-12 md:px-12">
        <HubEntrainement />
      </div>
    </div>
  );
}
