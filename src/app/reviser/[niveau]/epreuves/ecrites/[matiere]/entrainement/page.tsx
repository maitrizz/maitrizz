import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HubEntrainement } from "@/components/fiche/HubEntrainement";
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
    <div className="min-h-screen">
      <div className="bg-primary grid-paper-light py-16 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>›</span>
            <Link href="/reviser" className="hover:text-white transition-colors">Réviser</Link>
            <span>›</span>
            <Link href={`/reviser/${niveau}/epreuves/ecrites/${matiere}`} className="hover:text-white transition-colors">
              {label}
            </Link>
            <span>›</span>
            <span className="text-white/90 font-medium">Entraînement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2">Entraînement espacé</h1>
          <p className="text-white/70 text-lg">
            Entretenir le geste dans la durée, toutes notions mêlées. La fiche construit le geste ; ici, on l&apos;entretient.
          </p>
        </div>
      </div>

      <div className="bg-base-100 max-w-3xl mx-auto px-6 lg:px-8 py-14">
        <HubEntrainement />
      </div>
    </div>
  );
}
