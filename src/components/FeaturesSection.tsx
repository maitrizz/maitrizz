import Link from "next/link";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    bgColor: "bg-primary/10",
    title: "Révise sans te perdre",
    description:
      "Des fiches claires, organisées par thème, pour couvrir tout le programme du CRPE sans effort superflu.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bgColor: "bg-accent/15",
    title: "QCM & Entraînements",
    description:
      "Évalue tes connaissances avec des questions ciblées sur chaque notion et mesure tes progrès.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    bgColor: "bg-secondary/40",
    title: "Mise en situation d'oral",
    description:
      "Entraîne-toi à l'oral avec des simulations d'entretien et des mises en situation professionnelles.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    bgColor: "bg-primary/10",
    title: "Progression personnalisée",
    description:
      "Suis ton avancement en temps réel, identifie tes points faibles et concentre tes efforts là où ça compte.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-base-100 py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-base-content mb-4 leading-tight">
            Tout ce qu&apos;il te faut
            <br />
            <span className="text-primary">pour réussir</span>
          </h2>
          <p className="text-lg text-base-content/55 max-w-xl mx-auto leading-relaxed">
            Maitrizz t&apos;accompagne dans ta préparation avec des outils
            pensés pour un apprentissage efficace et motivant.
          </p>
        </div>

        {/* Grille de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-base-100 grid-paper border-2 border-base-300 rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-200"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${f.bgColor}`}
              >
                {f.icon}
              </div>
              <h3 className="font-bold text-base-content text-lg mb-2 leading-snug">
                {f.title}
              </h3>
              <p className="text-base-content/55 text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/reviser"
            className="btn btn-primary btn-lg rounded-full px-10 shadow-md"
          >
            Découvrir les révisions →
          </Link>
        </div>
      </div>
    </section>
  );
}
