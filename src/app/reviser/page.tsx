import Link from "next/link";

function GraduationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}

export default function ReviserPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-primary grid-paper-light py-16 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>›</span>
            <span className="text-white/90 font-medium">Réviser</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
            Choisissez votre concours
          </h1>
          <p className="text-white/70 text-lg">
            CRPE — Concours de Recrutement des Professeurs des Écoles
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div className="bg-base-100 max-w-5xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* L3 */}
          <Link
            href="/reviser/epreuves"
            className="bg-base-100 grid-paper border-2 border-base-300 rounded-2xl p-8 flex flex-col gap-5 hover:border-primary/40 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <GraduationIcon />
            </div>
            <div>
              <h2 className="text-2xl font-black text-base-content group-hover:text-primary transition-colors mb-1">
                Concours L3
              </h2>
              <p className="text-sm text-base-content/55 leading-relaxed">
                Accessible dès la licence (bac+3). Nouveau format depuis la réforme 2026.
              </p>
            </div>
            <span className="text-sm font-semibold text-primary mt-auto">
              Commencer →
            </span>
          </Link>

          {/* M2 */}
          <Link
            href="/reviser/epreuves"
            className="bg-base-100 grid-paper border-2 border-base-300 rounded-2xl p-8 flex flex-col gap-5 hover:border-primary/40 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="w-12 h-12 bg-secondary/40 rounded-xl flex items-center justify-center">
              <GraduationIcon />
            </div>
            <div>
              <h2 className="text-2xl font-black text-base-content group-hover:text-primary transition-colors mb-1">
                Concours M2
              </h2>
              <p className="text-sm text-base-content/55 leading-relaxed">
                Réservé aux candidats en fin de master 2. Maintenu jusqu'en 2027.
              </p>
            </div>
            <span className="text-sm font-semibold text-primary mt-auto">
              Commencer →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
