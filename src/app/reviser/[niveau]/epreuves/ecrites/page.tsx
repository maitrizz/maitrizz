import Link from "next/link";
import { notFound } from "next/navigation";
import type { Matiere } from "@/components/fiche/types";
import {
  MATIERES,
  MATIERE_LABELS,
  NIVEAUX,
  getFicheMetas,
  isValidNiveau,
} from "./[matiere]/data";

export async function generateStaticParams() {
  return NIVEAUX.map((niveau) => ({ niveau }));
}

function LockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function MathsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m-6 5h6m-6 5h3M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
    </svg>
  );
}

function FrancaisIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function SciencesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3v5.25L4.5 17.25A2.25 2.25 0 006.44 21h11.12a2.25 2.25 0 001.94-3.75L14.25 8.25V3m-4.5 0h4.5m-4.5 0H9m5.25 0H15m-6 9h6" />
    </svg>
  );
}

const MATIERE_ICONS: Record<Matiere, () => React.JSX.Element> = {
  mathematiques: MathsIcon,
  francais: FrancaisIcon,
  sciences: SciencesIcon,
};

export default async function EcritesPage({
  params,
}: {
  params: Promise<{ niveau: string }>;
}) {
  const { niveau } = await params;

  if (!isValidNiveau(niveau)) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-primary grid-paper-light py-16 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>›</span>
            <Link href="/reviser" className="hover:text-white transition-colors">Réviser</Link>
            <span>›</span>
            <Link href={`/reviser/${niveau}/epreuves`} className="hover:text-white transition-colors">Épreuves</Link>
            <span>›</span>
            <span className="text-white/90 font-medium">Écrites</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
            Épreuves écrites
          </h1>
          <p className="text-white/70 text-lg">
            Choisissez la matière à réviser : fiches complètes, méthode pas-à-pas et exercices corrigés.
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div className="bg-base-100 max-w-5xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {MATIERES.map((matiere) => {
            const fiches = getFicheMetas(niveau, matiere);
            const label = MATIERE_LABELS[matiere];
            const Icon = MATIERE_ICONS[matiere];

            if (fiches.length === 0) {
              return (
                <div
                  key={matiere}
                  className="bg-base-100 border-2 border-base-300 rounded-2xl p-8 flex flex-col gap-5 opacity-50 cursor-not-allowed"
                >
                  <div className="w-12 h-12 bg-base-200 rounded-xl flex items-center justify-center text-base-content/40">
                    <Icon />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-base-content mb-1">{label}</h2>
                    <p className="text-sm text-base-content/55 leading-relaxed">
                      Fiches de révision pour l&apos;épreuve écrite de {label.toLowerCase()}.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-auto">
                    <LockIcon />
                    <span className="text-xs font-medium text-base-content/40">Bientôt disponible</span>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={matiere}
                href={`/reviser/${niveau}/epreuves/ecrites/${matiere}`}
                className="bg-base-100 grid-paper border-2 border-base-300 rounded-2xl p-8 flex flex-col gap-5 hover:border-primary/40 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Icon />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-base-content group-hover:text-primary transition-colors mb-1">
                    {label}
                  </h2>
                  <p className="text-sm text-base-content/55 leading-relaxed">
                    {fiches.length} fiche{fiches.length > 1 ? "s" : ""} de révision disponible
                    {fiches.length > 1 ? "s" : ""}.
                  </p>
                </div>
                <span className="text-sm font-semibold text-primary mt-auto">
                  Accéder →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
