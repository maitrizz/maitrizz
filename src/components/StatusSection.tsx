const team = [
  {
    role: "Professeurs des écoles",
    description:
      "En poste, avec des années de pratique de classe et une connaissance fine des attendus du terrain.",
    tint: "primary",
  },
  {
    role: "Conseillers pédagogiques",
    description:
      "Formateurs et accompagnateurs de stagiaires, ils maîtrisent les exigences institutionnelles sur le bout des doigts.",
    tint: "secondary",
  },
  {
    role: "Jeunes titulaires",
    description:
      "Admis récemment au CRPE, ils savent exactement ce que le jury attend et ce qui fait la différence.",
    tint: "primary",
  },
];

export default function StatusSection() {
  return (
    <section className="bg-surface-container/40 px-5 py-32 md:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-16 text-center">
          <span className="mb-6 inline-block rounded-full bg-secondary/10 px-4 py-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Plateforme en construction
          </span>
          <h2 className="mb-6 text-balance text-4xl font-bold leading-tight text-primary">
            Pensé par des professeurs, pour de futurs professeurs
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Maitrizz est construit par des gens qui ont vécu le CRPE de
            l&apos;intérieur : comme candidats, comme formateurs, comme jurys.
            Pas de contenu générique, chaque ressource est pensée avec
            l&apos;exigence du concours en tête.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {team.map((m) => (
            <div
              key={m.role}
              className="rounded-2xl border border-outline-variant/40 bg-white p-10 transition-all duration-300 hover:shadow-lg"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${
                  m.tint === "primary" ? "bg-primary/5" : "bg-secondary/5"
                }`}
              >
                <svg
                  className={`h-7 w-7 ${m.tint === "primary" ? "text-primary" : "text-secondary"}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.42 0-8 2.69-8 6v1h16v-1c0-3.31-3.58-6-8-6z" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary">{m.role}</h3>
              <p className="font-ui text-sm leading-relaxed text-on-surface-variant">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
