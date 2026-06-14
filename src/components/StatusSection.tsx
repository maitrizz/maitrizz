const teamMembers = [
  {
    role: "Professeurs des écoles",
    description: "En poste, avec des années de pratique de classe et une connaissance fine des attendus du terrain.",
    color: "#1e3a6e",
  },
  {
    role: "Conseillers pédagogiques",
    description: "Formateurs et accompagnateurs de stagiaires, ils maîtrisent les exigences institutionnelles sur le bout des doigts.",
    color: "#3a6b50",
  },
  {
    role: "Jeunes titulaires",
    description: "Admis brillamment au CRPE il y a peu, ils savent exactement ce que le jury attend, et ce qui fait la différence.",
    color: "#b89a2f",
  },
];

export default function StatusSection() {
  return (
    <>
      {/* Section plateforme */}
      <section className="bg-base-200 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded mb-4"
              style={{ backgroundColor: "rgba(58,107,80,0.10)", color: "#3a6b50", fontFamily: "var(--font-inter)" }}
            >
              Plateforme en cours de construction
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-base-content leading-tight mb-4">
              Maitrizz est tout juste lancé
            </h2>
            <p className="text-lg text-base-content/55 max-w-2xl mx-auto leading-relaxed">
              C&apos;est un projet ambitieux, construit avec soin. Nous travaillons d&apos;arrache-pied
              pour couvrir l&apos;intégralité du concours, mais tout prend du temps si l&apos;on veut
              bien faire les choses. Voici où nous en sommes.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 items-start">

            {/* ── Épreuves écrites d'admissibilité ── */}
            <div className="bg-white rounded-lg overflow-hidden opacity-45" style={{ border: "1px dashed #e8e2d9" }}>
              <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "1px solid #f2ede6" }}>
                <p className="font-black text-base-content" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>
                  Épreuves écrites d&apos;admissibilité
                </p>
                <span className="text-xs font-semibold text-base-content/40 uppercase tracking-wide" style={{ fontFamily: "var(--font-inter)" }}>
                  Bientôt
                </span>
              </div>
              <div className="p-5 space-y-2">
                {["Français", "Mathématiques", "Histoire-Géo / Sciences & technologies / Arts", "LVE"].map((tag) => (
                  <div key={tag} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-base-300" />
                    <span className="text-sm text-base-content/35 font-medium" style={{ fontFamily: "var(--font-inter)" }}>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Épreuves orales d'admission ── */}
            <div className="bg-white rounded-lg overflow-hidden" style={{ border: "1px solid rgba(58,107,80,0.35)" }}>
              <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "1px solid rgba(58,107,80,0.12)" }}>
                <p className="font-black text-base-content" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>
                  Épreuves orales d&apos;admission
                </p>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded whitespace-nowrap"
                  style={{ backgroundColor: "rgba(58,107,80,0.10)", color: "#3a6b50", fontFamily: "var(--font-inter)" }}
                >
                  En cours
                </span>
              </div>
              <div className="p-5 space-y-4">
                {/* Leçon */}
                <div className="opacity-40">
                  <p className="text-xs font-bold text-base-content/50 uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-inter)" }}>
                    Leçon
                  </p>
                  <div className="space-y-1.5">
                    {["Français", "Mathématiques"].map((tag) => (
                      <div key={tag} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-base-300" />
                        <span className="text-sm font-medium text-base-content" style={{ fontFamily: "var(--font-inter)" }}>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Entretien */}
                <div>
                  <p className="text-xs font-bold text-base-content/50 uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-inter)" }}>
                    Entretien avec le jury
                  </p>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#3a6b50" }} />
                      <span className="text-sm font-medium text-base-content" style={{ fontFamily: "var(--font-inter)" }}>
                        Connaissance du système éducatif / MSP
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 opacity-40">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-base-300" />
                      <span className="text-sm font-medium text-base-content" style={{ fontFamily: "var(--font-inter)" }}>EPS</span>
                    </div>
                    <div className="flex items-center gap-2.5 opacity-40">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-base-300" />
                      <span className="text-sm font-medium text-base-content" style={{ fontFamily: "var(--font-inter)" }}>Motivation</span>
                    </div>
                  </div>
                </div>
                {/* LVE */}
                <div className="opacity-40">
                  <p className="text-xs font-bold text-base-content/50 uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-inter)" }}>
                    LVE
                  </p>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-base-300" />
                    <span className="text-sm font-medium text-base-content" style={{ fontFamily: "var(--font-inter)" }}>Langue vivante étrangère</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Fonctionnalités ── */}
            <div className="bg-white rounded-lg overflow-hidden opacity-45" style={{ border: "1px dashed #e8e2d9" }}>
              <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: "1px solid #f2ede6" }}>
                <p className="font-black text-base-content" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>
                  Fonctionnalités
                </p>
                <span className="text-xs font-semibold text-base-content/40 uppercase tracking-wide" style={{ fontFamily: "var(--font-inter)" }}>
                  Bientôt
                </span>
              </div>
              <div className="p-5 space-y-2">
                {["Suivi de progression", "Statistiques détaillées", "Historique des entraînements", "Simulateur de notes", "Défis entre candidats"].map((tag) => (
                  <div key={tag} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-base-300" />
                    <span className="text-sm text-base-content/35 font-medium" style={{ fontFamily: "var(--font-inter)" }}>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section équipe — fond sombre */}
      <section className="bg-neutral grid-paper-light py-24 relative overflow-hidden">
        <div
          className="absolute top-12 right-[16%] w-20 h-20 rounded-full pointer-events-none hidden lg:block"
          style={{ border: "1px solid rgba(250,248,244,0.08)" }}
        />
        <div
          className="absolute bottom-12 left-[8%] w-3 h-3 rounded-full pointer-events-none hidden lg:block"
          style={{ backgroundColor: "#b89a2f", opacity: 0.3 }}
        />

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-content leading-tight mb-4">
              Qui sommes-nous ?
            </h2>
            <p className="text-lg text-neutral-content/50 max-w-2xl mx-auto leading-relaxed">
              Maitrizz est construit par des gens qui ont vécu le CRPE de l&apos;intérieur,
              comme candidats, comme formateurs, comme jurys. Pas de contenu générique :
              chaque ressource est pensée avec l&apos;exigence du concours en tête.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.role}
                className="rounded-lg p-7 hover:bg-white/5 transition-all duration-200"
                style={{ border: "1px solid rgba(250,248,244,0.10)" }}
              >
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${member.color}20` }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" style={{ color: member.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="font-bold text-neutral-content mb-2">{member.role}</p>
                <p className="text-sm text-neutral-content/45 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
