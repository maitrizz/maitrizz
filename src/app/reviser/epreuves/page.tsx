import Link from "next/link";

function LockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-base-content/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  );
}

export default function EpreuvesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-primary grid-paper-light py-16 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>›</span>
            <Link href="/reviser" className="hover:text-white transition-colors">Réviser</Link>
            <span>›</span>
            <span className="text-white/90 font-medium">Épreuves</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
            Type d&apos;épreuves
          </h1>
          <p className="text-white/70 text-lg">
            Choisissez l&apos;épreuve que vous souhaitez préparer.
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div className="bg-base-100 max-w-5xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Épreuves écrites — verrouillé */}
          <div className="bg-base-100 border-2 border-base-300 rounded-2xl p-8 flex flex-col gap-5 opacity-50 cursor-not-allowed">
            <div className="w-12 h-12 bg-base-200 rounded-xl flex items-center justify-center">
              <PenIcon />
            </div>
            <div>
              <h2 className="text-2xl font-black text-base-content mb-1">
                Épreuves écrites
              </h2>
              <p className="text-sm text-base-content/55 leading-relaxed">
                Français, Mathématiques — préparation aux écrits d&apos;admissibilité.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-auto">
              <LockIcon />
              <span className="text-xs font-medium text-base-content/40">Bientôt disponible</span>
            </div>
          </div>

          {/* Épreuves orales — actif */}
          <Link
            href="/reviser/epreuves/orales"
            className="bg-base-100 grid-paper border-2 border-base-300 rounded-2xl p-8 flex flex-col gap-5 hover:border-primary/40 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <MicIcon />
            </div>
            <div>
              <h2 className="text-2xl font-black text-base-content group-hover:text-primary transition-colors mb-1">
                Épreuves orales
              </h2>
              <p className="text-sm text-base-content/55 leading-relaxed">
                Leçon, entretien avec le jury, connaissance du système éducatif.
              </p>
            </div>
            <span className="text-sm font-semibold text-primary mt-auto">
              Accéder →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
