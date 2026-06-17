import { notFound } from "next/navigation";
import { isValidNiveau } from "@/lib/niveau";
import { modules } from "../../data";
import QCMInterface from "@/components/QCMInterface";

export default async function QCMGlobalPage({
  params,
}: {
  params: Promise<{ niveau: string; module: string }>;
}) {
  const { niveau, module } = await params;

  if (!isValidNiveau(niveau)) notFound();

  const moduleData = modules[module];

  if (!moduleData) notFound();

  const BASE = `/reviser/${niveau}/epreuves/orales/entretien/connaissance-systeme-educatif`;

  // Toutes les questions des 4 fiches
  const questions = moduleData.ficheQuestions.flat();

  return (
    <section className="py-10 px-6 bg-base-100 min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-base-content">
            {moduleData.label} - QCM Global
          </h1>
          <p className="text-sm text-base-content/50 mt-1">
            {questions.length} questions · toutes les fiches
          </p>
        </div>
        <QCMInterface
          questions={questions}
          backHref={`${BASE}/${module}`}
          backLabel={`← ${moduleData.label}`}
        />
      </div>
    </section>
  );
}
