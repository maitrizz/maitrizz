import Link from "next/link";

function LockIcon({ size = "md" }: { size?: "sm" | "md" }) {
  const cls = size === "sm" ? "w-4 h-4" : "w-5 h-5";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`${cls} text-base-content/40`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

export default function OralesPage() {
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
            <Link href="/reviser/epreuves" className="hover:text-white transition-colors">Épreuves</Link>
            <span>›</span>
            <span className="text-white/90 font-medium">Orales</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
            Épreuves orales
          </h1>
          <p className="text-white/70 text-lg">
            Prépare chaque composante de l&apos;oral d&apos;admission.
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div className="bg-base-100 max-w-5xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* Leçon — verrouillé */}
          <div className="bg-base-100 border-2 border-base-300 rounded-2xl p-6 flex flex-col gap-4 opacity-50 cursor-not-allowed">
            <h2 className="text-xl font-black text-base-content">Leçon</h2>
            <div className="flex flex-col gap-2 flex-1">
              <div className="border-2 border-dashed border-base-300 rounded-xl px-4 py-3 text-sm text-base-content/50 text-center">
                Français
              </div>
              <div className="border-2 border-dashed border-base-300 rounded-xl px-4 py-3 text-sm text-base-content/50 text-center">
                Mathématiques
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-base-300">
              <LockIcon />
              <span className="text-xs font-medium text-base-content/40">Bientôt disponible</span>
            </div>
          </div>

          {/* Entretien — actif */}
          <div className="bg-base-100 grid-paper border-2 border-primary/30 rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-base-content">Entretien</h2>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                Disponible
              </span>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              {/* EPS — verrouillé */}
              <div className="border-2 border-dashed border-base-300 rounded-xl px-4 py-3 flex items-center justify-between opacity-50 cursor-not-allowed">
                <span className="text-sm text-base-content/50">EPS</span>
                <LockIcon size="sm" />
              </div>
              {/* Motivation — verrouillé */}
              <div className="border-2 border-dashed border-base-300 rounded-xl px-4 py-3 flex items-center justify-between opacity-50 cursor-not-allowed">
                <span className="text-sm text-base-content/50">Motivation</span>
                <LockIcon size="sm" />
              </div>
              {/* CSE — actif */}
              <Link
                href="/reviser/epreuves/orales/entretien/connaissance-systeme-educatif"
                className="border-2 border-primary/30 bg-primary/5 rounded-xl px-4 py-3 text-sm font-semibold text-primary hover:bg-primary/10 hover:border-primary/60 transition-all text-center"
              >
                Connaissance du système éducatif →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
