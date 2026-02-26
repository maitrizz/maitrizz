import { notFound } from "next/navigation";
import { modules } from "../../data";
import QCMInterface from "@/components/QCMInterface";

const BASE =
  "/reviser/epreuves/orales/entretien/connaissance-systeme-educatif";

export default async function QCMAleaPage({
  params,
}: {
  params: Promise<{ module: string }>;
}) {
  const { module } = await params;
  const moduleData = modules[module];

  if (!moduleData) notFound();

  // Questions mélangées aléatoirement (côté serveur au moment du rendu)
  const all = moduleData.ficheQuestions.flat();
  const shuffled = [...all].sort(() => Math.random() - 0.5);

  return (
    <section className="py-10 px-6 bg-base-100 min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-base-content">
            {moduleData.label} - QCM aléatoire
          </h1>
          <p className="text-sm text-base-content/50 mt-1">
            {shuffled.length} questions dans un ordre aléatoire
          </p>
        </div>
        <QCMInterface
          questions={shuffled}
          backHref={`${BASE}/${module}`}
          backLabel={`← ${moduleData.label}`}
        />
      </div>
    </section>
  );
}
