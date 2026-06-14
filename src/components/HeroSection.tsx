import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-base-100 grid-paper min-h-[88vh] flex items-center relative overflow-hidden">


      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Colonne gauche — texte */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-base-content leading-[1.05] mb-6">
              Réussis ton
              <br />
              <span style={{ color: "#1e3a6e" }}>CRPE</span>
            </h1>

            <p className="text-xl font-semibold text-base-content/90 max-w-md mb-3 leading-snug">
              Prépare chaque épreuve du concours avec exigence et méthode.
            </p>
            <p className="text-base text-base-content/55 max-w-md mb-10 leading-relaxed">
              Des cours structurés, des QCM ciblés, des entraînements
              à l&apos;oral et un suivi précis de tes progrès : un environnement
              d&apos;apprentissage pensé pour couvrir tous les attendus et
              t&apos;accompagner jusqu&apos;à l&apos;admission.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/reviser"
                className="btn btn-primary btn-lg shadow-sm font-bold"
              >
                Commencer à réviser →
              </Link>
              <Link
                href="/blog"
                className="btn btn-lg font-medium"
                style={{
                  backgroundColor: "transparent",
                  color: "#1c1814",
                  borderColor: "rgba(28,24,20,0.2)",
                }}
              >
                Lire le blog
              </Link>
            </div>
          </div>

          {/* Colonne droite — card flottante */}
          <div className="hidden lg:flex justify-center">
            <div
              className="bg-white rounded-lg shadow-md p-8 w-[320px] rotate-1 hover:rotate-0 transition-transform duration-500"
              style={{ border: "1px solid #e8e2d9" }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-5"
                style={{ color: "rgba(28,24,20,0.4)", fontFamily: "var(--font-inter)" }}
              >
                Ton espace de révision
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-md flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(30,58,110,0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" style={{ color: "#1e3a6e" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#1c1814" }}>Fiches de cours</p>
                    <p className="text-xs" style={{ color: "rgba(28,24,20,0.4)" }}>Structurées module par module</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-md flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(58,107,80,0.08)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" style={{ color: "#3a6b50" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#1c1814" }}>QCM ciblés ou aléatoire</p>
                    <p className="text-xs" style={{ color: "rgba(28,24,20,0.4)" }}>Notion par notion ou en mode aléatoire</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-md flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(184,154,47,0.10)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" style={{ color: "#b89a2f" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#1c1814" }}>Mises en situation</p>
                    <p className="text-xs" style={{ color: "rgba(28,24,20,0.4)" }}>Entraînement à l&apos;entretien oral</p>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5" style={{ borderTop: "1px solid #e8e2d9" }}>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "rgba(28,24,20,0.4)", fontFamily: "var(--font-inter)" }}
                >
                  Ta progression
                </p>
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span style={{ color: "rgba(28,24,20,0.6)" }}>Connaissance du système éducatif</span>
                    <span className="font-bold" style={{ color: "#1e3a6e" }}>1 / 8</span>
                  </div>
                  <div className="w-full rounded-sm h-1.5" style={{ backgroundColor: "#e8e2d9" }}>
                    <div className="h-1.5 rounded-sm w-[12%]" style={{ backgroundColor: "#1e3a6e" }} />
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
