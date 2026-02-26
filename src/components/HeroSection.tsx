import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-primary grid-paper-light min-h-[88vh] flex items-center relative overflow-hidden">
      {/* Blobs décoratifs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-white/5 rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/5 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Colonne gauche — texte */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Réussis ton
              <br />
              <span className="text-accent">CRPE</span>
            </h1>

            <p className="text-xl font-semibold text-white/90 max-w-md mb-3 leading-snug">
              Prépare chaque épreuve du concours avec exigence et méthode.
            </p>
            <p className="text-base text-white/60 max-w-md mb-10 leading-relaxed">
              Des cours structurés, des QCM ciblés, des entraînements
              à l&apos;oral et un suivi précis de tes progrès : un environnement
              d&apos;apprentissage pensé pour couvrir tous les attendus et
              t&apos;accompagner jusqu&apos;à l&apos;admission.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/reviser"
                className="btn btn-accent btn-lg rounded-full shadow-lg font-semibold"
              >
                Commencer à réviser →
              </Link>
              <Link
                href="/blog"
                className="btn btn-lg rounded-full font-medium"
                style={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  color: "white",
                  borderColor: "rgba(255,255,255,0.25)",
                }}
              >
                Lire le blog
              </Link>
            </div>
          </div>

          {/* Colonne droite — card quadrillée flottante */}
          <div className="hidden lg:flex justify-center">
            <div className="bg-base-100 rounded-3xl shadow-2xl p-8 w-[320px] rotate-1 hover:rotate-0 transition-transform duration-500">
              <p className="text-xs font-bold text-base-content/40 uppercase tracking-widest mb-5">
                Ton espace de révision
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-primary/12 rounded-xl flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-base-content text-sm">
                      Fiches de cours
                    </p>
                    <p className="text-base-content/40 text-xs">
                      Structurées module par module
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-accent/15 rounded-xl flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-base-content text-sm">
                      QCM ciblés ou aléatoire
                    </p>
                    <p className="text-base-content/40 text-xs">
                      Notion par notion ou en mode aléatoire
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-secondary/40 rounded-xl flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-base-content text-sm">
                      Mises en situation
                    </p>
                    <p className="text-base-content/40 text-xs">
                      Entraînement à l&apos;entretien oral
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-base-300 pt-5 mt-5">
                <p className="text-xs font-semibold text-base-content/40 mb-3 uppercase tracking-widest">
                  Ta progression
                </p>
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-base-content/60">
                      Connaissance du système éducatif
                    </span>
                    <span className="text-primary font-bold">1 / 8</span>
                  </div>
                  <div className="w-full bg-base-300 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[12%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
