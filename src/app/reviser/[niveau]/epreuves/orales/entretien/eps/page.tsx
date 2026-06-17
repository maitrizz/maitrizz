import Link from "next/link";
import { notFound } from "next/navigation";
import { NIVEAUX, isValidNiveau } from "@/lib/niveau";

export async function generateStaticParams() {
  return NIVEAUX.map((niveau) => ({ niveau }));
}

export default async function EPSPage({
  params,
}: {
  params: Promise<{ niveau: string }>;
}) {
  const { niveau } = await params;

  if (!isValidNiveau(niveau)) {
    notFound();
  }

  return (
    <section className="min-h-[calc(100vh-4rem)] bg-base-100 flex flex-col items-center justify-center py-16 px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-base-content mb-4">EPS</h1>
        <p className="text-base-content/60 mb-8">
          Contenu en cours de préparation…
        </p>
        <Link
          href={`/reviser/${niveau}/epreuves/orales`}
          className="btn btn-outline btn-sm"
        >
          ← Retour
        </Link>
      </div>
    </section>
  );
}
