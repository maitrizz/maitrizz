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

          <div className="grid md:grid-cols-2 gap-6">

            {/* Disponible maintenant */}
            <div className="bg-white rounded-lg p-8" style={{ border: "1px solid rgba(58,107,80,0.35)" }}>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#3a6b50" }} />
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3a6b50", fontFamily: "var(--font-inter)" }}>
                  Disponible dès maintenant
                </p>
              </div>
              <p className="text-lg font-black text-base-content mb-5">
                Épreuve orale d&apos;admission : Entretien avec le jury
              </p>
              <div className="flex flex-wrap gap-2">
                {["Connaissance du système éducatif", "Mises en situation professionnelle"].map((tag) => (
                  <span
                    key={tag}
                    className="text-sm font-medium px-4 py-1.5 rounded"
                    style={{ backgroundColor: "rgba(58,107,80,0.10)", color: "#2d5a40", fontFamily: "var(--font-inter)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bientôt */}
            <div className="bg-white rounded-lg p-8 opacity-55" style={{ border: "1px dashed #e8e2d9" }}>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-base-300 rounded-full" />
                <p className="text-xs font-bold text-base-content/40 uppercase tracking-widest" style={{ fontFamily: "var(--font-inter)" }}>Bientôt</p>
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-semibold text-base-content/35 mb-2 uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>Épreuves écrites</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Français", "Mathématiques", "Histoire-Géo", "Sciences & techniques", "Arts", "LVE"].map((tag) => (
                      <span key={tag} className="bg-base-200 text-base-content/35 text-xs font-medium px-3 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-base-content/35 mb-2 uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>Épreuves orales</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Leçon Français", "Leçon Mathématiques", "EPS", "Motivation"].map((tag) => (
                      <span key={tag} className="bg-base-200 text-base-content/35 text-xs font-medium px-3 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-base-content/35 mb-2 uppercase tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>Espace personnel</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Suivi de progression", "Statistiques détaillées", "Historique des entraînements"].map((tag) => (
                      <span key={tag} className="bg-base-200 text-base-content/35 text-xs font-medium px-3 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section équipe — fond sombre */}
      <section className="bg-neutral grid-paper-light py-24 relative overflow-hidden">
        {/* Ornements discrets */}
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
