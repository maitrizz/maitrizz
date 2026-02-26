import Link from "next/link";

export default function MotivationPage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-base-100 flex flex-col items-center justify-center py-16 px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-base-content mb-4">
          Motivation
        </h1>
        <p className="text-base-content/60 mb-8">
          Contenu en cours de préparation…
        </p>
        <Link
          href="/reviser/epreuves/orales"
          className="btn btn-outline btn-sm"
        >
          ← Retour
        </Link>
      </div>
    </section>
  );
}
