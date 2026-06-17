import Link from "next/link";
import { notFound } from "next/navigation";
import MasteryBadge from "@/components/MasteryBadge";
import { NIVEAUX, isValidNiveau } from "@/lib/niveau";
import { modules } from "./data";

export async function generateStaticParams() {
  return NIVEAUX.map((niveau) => ({ niveau }));
}

export default async function CSEPage({
  params,
}: {
  params: Promise<{ niveau: string }>;
}) {
  const { niveau } = await params;

  if (!isValidNiveau(niveau)) {
    notFound();
  }

  const BASE = `/reviser/${niveau}/epreuves/orales/entretien/connaissance-systeme-educatif`;

  return (
    <div className="min-h-screen">

      {/* Header */}
      <div className="bg-primary grid-paper-light py-16 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>›</span>
            <Link href="/reviser" className="hover:text-white transition-colors">Réviser</Link>
            <span>›</span>
            <Link href={`/reviser/${niveau}/epreuves/orales`} className="hover:text-white transition-colors">Orales</Link>
            <span>›</span>
            <span className="text-white/90 font-medium">Système éducatif</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
            Connaissance du système éducatif
          </h1>
          <p className="text-white/70 text-lg">7 modules</p>
        </div>
      </div>

      {/* Contenu */}
      <div className="bg-base-100 max-w-5xl mx-auto px-6 lg:px-8 py-14 flex flex-col gap-12">

        {/* Modules grid */}
        <div>
          <h2 className="text-xl font-black text-base-content mb-6">Modules</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7].map((n) => {
              const moduleData = modules[`module-${n}`];
              const subtitle = moduleData.label.includes(" - ")
                ? moduleData.label.split(" - ").slice(1).join(" - ")
                : null;
              const isAvailable = n === 1;

              if (!isAvailable) {
                return (
                  <div
                    key={n}
                    className="border-2 border-dashed border-base-300 rounded-2xl p-5 flex flex-col gap-2 min-h-44 opacity-50 cursor-not-allowed"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-base-content/40 uppercase tracking-widest">
                        Module
                      </span>
                      <span className="w-6 h-6 rounded-full bg-base-300 flex items-center justify-center text-xs font-black text-base-content/40">
                        {n}
                      </span>
                    </div>
                    <div className="flex-1" />
                    <span className="text-xs text-base-content/40 font-medium">
                      À venir
                    </span>
                  </div>
                );
              }

              return (
                <Link
                  key={n}
                  href={`${BASE}/module-${n}`}
                  className="bg-base-100 grid-paper border-2 border-base-300 rounded-2xl p-5 flex flex-col gap-3 min-h-44 hover:border-primary/40 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs font-semibold text-base-content/60 leading-snug flex-1">
                      {subtitle ?? `Module ${n}`}
                    </p>
                    <span className="w-6 h-6 rounded-full bg-base-300 flex items-center justify-center text-xs font-black text-base-content/60 shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      {n}
                    </span>
                  </div>
                  <div className="flex-1 flex items-end">
                    <MasteryBadge value={0} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Trainer */}
        <div className="bg-primary grid-paper-light rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-2xl font-black text-white mb-1">Trainer</h2>
            <p className="text-white/70 text-sm max-w-sm">
              Questions et mises en situation aléatoires - tous modules confondus.
            </p>
          </div>
          <div className="flex gap-3 relative z-10">
            <Link
              href={`${BASE}/trainer/qcm-aleatoire`}
              className="btn bg-white text-primary border-none rounded-full font-semibold hover:bg-white/90 shadow"
            >
              QCM aléatoire
            </Link>
            <Link
              href={`${BASE}/trainer/msp-aleatoire`}
              className="btn rounded-full font-medium"
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                color: "white",
                borderColor: "rgba(255,255,255,0.25)",
              }}
            >
              MSP aléatoire
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
