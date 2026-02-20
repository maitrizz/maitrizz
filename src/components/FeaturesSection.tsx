import Link from "next/link";

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: "Fiches de révision",
    description:
      "Des fiches claires et synthétiques couvrant tout le programme du CRPE, rédigées par des enseignants.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Quiz interactifs",
    description:
      "Teste tes connaissances avec des quiz adaptés à chaque matière et suis ta progression.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: "Suivi de progression",
    description:
      "Visualise tes progrès et identifie les domaines à renforcer pour optimiser tes révisions.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-base-100 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
            Tout ce qu&apos;il te faut pour réussir
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Maitrizz t&apos;accompagne dans ta préparation au concours avec des
            outils pensés pour un apprentissage efficace et motivant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="card-body items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="card-title text-xl">{feature.title}</h3>
                <p className="text-base-content/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/reviser" className="btn btn-primary btn-lg">
            Découvrir les révisions
          </Link>
        </div>
      </div>
    </section>
  );
}
