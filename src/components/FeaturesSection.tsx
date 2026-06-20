const pillars = [
  {
    title: "Clarté",
    description:
      "Plus besoin de naviguer entre des dizaines de manuels. Maitrizz synthétise les concepts clés en fiches élégantes et actionnables, conçues pour être mémorisées rapidement.",
    tint: "primary",
    icon: (
      <path d="M9 21h6v-1H9v1zm3-19a7 7 0 00-4 12.7V17a1 1 0 001 1h6a1 1 0 001-1v-2.3A7 7 0 0012 2z" />
    ),
  },
  {
    title: "Fiabilité",
    description:
      "Contenu construit à partir des sources officielles. Chaque leçon est mise à jour selon les dernières réformes du CRPE.",
    tint: "secondary",
    icon: (
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1.2 14.4l-4-4L8.2 10l2.6 2.6 5-5 1.4 1.4-6.4 6.4z" />
    ),
  },
  {
    title: "Entraînement",
    description:
      "Validez vos acquis avec des quiz interactifs et des cas pratiques ciblés, pour aborder chaque épreuve avec confiance.",
    tint: "primary",
    icon: (
      <path d="M3 5h18v2H3V5zm0 4h12v2H3V9zm0 4h18v2H3v-2zm0 4h12v2H3v-2z" />
    ),
  },
  {
    title: "Progression",
    description:
      "Suivez vos points forts et vos lacunes en temps réel, et concentrez vos efforts là où vous en avez le plus besoin.",
    tint: "secondary",
    icon: (
      <path d="M3.5 18.5l6-6 4 4L22 6.92 20.59 5.5l-7.09 8-4-4L2 17l1.5 1.5z" />
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section id="piliers" className="mx-auto max-w-[1280px] px-5 py-32 md:px-16">
      <div className="mb-20 text-center">
        <h2 className="mb-6 text-balance text-4xl font-bold leading-tight text-primary">
          L&apos;essentiel pour réussir, enfin structuré
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant">
          Nous avons conçu un environnement qui élimine le superflu pour vous
          concentrer sur ce qui rapporte vraiment des points le jour J.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="glass-card space-y-6 rounded-2xl p-10 transition-all duration-300 hover:shadow-lg"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                p.tint === "primary" ? "bg-primary/5" : "bg-secondary/5"
              }`}
            >
              <svg
                className={`h-8 w-8 ${p.tint === "primary" ? "text-primary" : "text-secondary"}`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                {p.icon}
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary">{p.title}</h3>
            <p className="font-ui text-sm leading-relaxed text-on-surface-variant">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
