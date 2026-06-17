import { notFound } from "next/navigation";
import { isValidNiveau } from "@/lib/niveau";
import { modules } from "../../../data";
import QCMInterface from "@/components/QCMInterface";

export default async function FicheQCMPage({
  params,
}: {
  params: Promise<{ niveau: string; module: string; fiche: string }>;
}) {
  const { niveau, module, fiche } = await params;

  if (!isValidNiveau(niveau)) notFound();

  const moduleData = modules[module];
  const ficheNumber = parseInt(fiche.replace("fiche-", ""), 10);

  if (!moduleData || isNaN(ficheNumber) || ficheNumber < 1 || ficheNumber > 4) {
    notFound();
  }

  const BASE = `/reviser/${niveau}/epreuves/orales/entretien/connaissance-systeme-educatif`;
  const questions = moduleData.ficheQuestions[ficheNumber - 1];
  const backHref = `${BASE}/${module}/${fiche}`;

  return (
    <section className="py-10 px-6 bg-base-100 min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-base-content">
            {moduleData.label} - Fiche {ficheNumber} · QCM
          </h1>
          <p className="text-sm text-base-content/50 mt-1">
            {questions.length} questions
          </p>
        </div>
        <QCMInterface
          questions={questions}
          backHref={backHref}
          backLabel={`← Fiche ${ficheNumber}`}
        />
      </div>
    </section>
  );
}
