import Link from "next/link";
import { notFound } from "next/navigation";
import { modules } from "../../data";

const BASE =
  "/reviser/epreuves/orales/entretien/connaissance-systeme-educatif";

export default async function MSPPage({
  params,
}: {
  params: Promise<{ module: string }>;
}) {
  const { module } = await params;
  const moduleData = modules[module];

  if (!moduleData) notFound();

  const { scenario, questions } = moduleData.msp;

  return (
    <section className="py-10 px-6 bg-base-100 min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto max-w-2xl">

        {/* En-tête */}
        <div className="flex items-center gap-3 mb-8">
          <Link href={`${BASE}/${module}`} className="btn btn-ghost btn-sm">
            ←
          </Link>
          <div>
            <h1 className="text-xl font-bold text-base-content">
              {moduleData.label} - Mise en Situation Professionnelle
            </h1>
            <p className="text-sm text-base-content/50">
              Entraîne-toi à analyser une situation professionnelle
            </p>
          </div>
        </div>

        {/* Scénario */}
        <div className="card bg-base-200 border border-base-300 p-6 mb-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">
            Situation
          </p>
          <p className="text-base-content leading-relaxed">{scenario}</p>
        </div>

        {/* Questions de réflexion */}
        <div className="flex flex-col gap-3 mb-10">
          <p className="text-sm font-semibold text-base-content/60 uppercase tracking-wide">
            Questions de réflexion
          </p>
          {questions.map((q, i) => (
            <div
              key={i}
              className="flex gap-3 border border-base-300 rounded-lg p-4 bg-base-100"
            >
              <span className="text-primary font-bold shrink-0">{i + 1}.</span>
              <p className="text-base-content">{q}</p>
            </div>
          ))}
        </div>

        {/* Retour */}
        <Link
          href={`${BASE}/${module}`}
          className="btn btn-outline w-full"
        >
          ← Retour au module
        </Link>

      </div>
    </section>
  );
}
