import Link from "next/link";

const BASE =
  "/reviser/epreuves/orales/entretien/connaissance-systeme-educatif";

export default function TrainerPage() {
  return (
    <section className="py-10 px-6 bg-base-100 min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto max-w-lg flex flex-col gap-8">

        <div className="flex items-center gap-3">
          <Link href={BASE} className="btn btn-ghost btn-sm">←</Link>
          <h1 className="text-xl font-bold text-base-content">Trainer</h1>
        </div>

        <p className="text-base-content/50 text-sm -mt-4">
          Questions et mises en situation aléatoires, tous modules confondus.
        </p>

        <div className="flex flex-col gap-4">
          <Link
            href={`${BASE}/trainer/qcm-aleatoire`}
            className="card bg-base-200 border border-base-300 p-8 hover:bg-base-300 transition-colors"
          >
            <h2 className="text-lg font-bold text-base-content mb-1">QCM aléatoire</h2>
            <p className="text-sm text-base-content/50">
              Questions piochées aléatoirement dans tous les modules.
            </p>
          </Link>
          <Link
            href={`${BASE}/trainer/msp-aleatoire`}
            className="card bg-base-200 border border-base-300 p-8 hover:bg-base-300 transition-colors"
          >
            <h2 className="text-lg font-bold text-base-content mb-1">MSP aléatoire</h2>
            <p className="text-sm text-base-content/50">
              Une mise en situation professionnelle tirée au sort.
            </p>
          </Link>
        </div>

      </div>
    </section>
  );
}
