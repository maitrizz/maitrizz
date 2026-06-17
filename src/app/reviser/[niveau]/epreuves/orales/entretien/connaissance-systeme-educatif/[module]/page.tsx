import Link from "next/link";
import { notFound } from "next/navigation";
import MasteryBadge from "@/components/MasteryBadge";
import { isValidNiveau } from "@/lib/niveau";
import { modules } from "../data";

function IconQCM() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="4" height="4" rx="1" />
      <rect x="3" y="13" width="4" height="4" rx="1" />
      <line x1="11" y1="7" x2="21" y2="7" />
      <line x1="11" y1="15" x2="21" y2="15" />
      <line x1="11" y1="19" x2="17" y2="19" />
      <line x1="11" y1="11" x2="19" y2="11" />
    </svg>
  );
}

function IconMSP() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ niveau: string; module: string }>;
}) {
  const { niveau, module } = await params;

  if (!isValidNiveau(niveau)) notFound();

  const moduleData = modules[module];

  if (!moduleData) notFound();

  const BASE = `/reviser/${niveau}/epreuves/orales/entretien/connaissance-systeme-educatif`;
  const moduleNumber = module.replace("module-", "");

  return (
    <div className="min-h-screen">

      {/* Header */}
      <div className="bg-base-200 border-b border-base-300 py-10 px-6">
        <div className="max-w-2xl mx-auto">
          <Link
            href={BASE}
            className="text-sm text-base-content/40 hover:text-base-content transition-colors mb-4 inline-block"
          >
            ← Système éducatif
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Module {moduleNumber}
              </span>
              <h1 className="text-2xl font-black text-base-content mt-1 leading-snug">
                {moduleData.label.includes(" - ")
                  ? moduleData.label.split(" - ").slice(1).join(" - ")
                  : moduleData.label}
              </h1>
              {moduleData.objectif && (
                <p className="text-sm text-base-content/50 mt-2 leading-relaxed max-w-lg">
                  {moduleData.objectif}
                </p>
              )}
            </div>
            <MasteryBadge value={0} size="sm" />
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-2xl mx-auto px-6 py-10 flex flex-col gap-10">

        {/* Fiches */}
        <div>
          <p className="text-xs font-bold text-base-content/40 uppercase tracking-widest mb-4">
            Fiches
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((n) => {
              const ficheData = moduleData.fiches[n - 1];
              const rawTitle = ficheData.title;
              const ficheTitle = rawTitle.includes(" - ")
                ? rawTitle.split(" - ").slice(1).join(" - ")
                : rawTitle;
              const ficheHref = `${BASE}/${module}/fiche-${n}`;
              const qcmHref = `${BASE}/${module}/fiche-${n}/qcm`;
              const mastery = 0;

              return (
                <div
                  key={n}
                  className="relative bg-base-100 grid-paper border-2 border-base-300 rounded-2xl p-5 flex flex-col gap-4 hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  {/* Lien principal sur toute la carte */}
                  <Link
                    href={ficheHref}
                    className="absolute inset-0 rounded-2xl"
                    aria-label={ficheTitle}
                  />

                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">
                      Fiche {n}
                    </span>
                    <h3 className="font-semibold text-base-content mt-1 leading-snug text-sm">
                      {ficheTitle}
                    </h3>
                  </div>

                  <div className="flex-1" />

                  {/* Barre de maîtrise + bouton QCM */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 flex-1">
                      <div className="flex-1 h-1.5 bg-base-300 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all"
                          style={{ width: `${mastery}%` }}
                        />
                      </div>
                      <span className="text-xs text-base-content/40 font-semibold tabular-nums w-6 text-right">
                        {mastery}%
                      </span>
                    </div>
                    <Link
                      href={qcmHref}
                      className="relative z-10 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors rounded-full px-4 py-1.5 text-sm font-bold"
                    >
                      QCM
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Entraînement */}
        <div>
          <p className="text-xs font-bold text-base-content/40 uppercase tracking-widest mb-4">
            Entraînement
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href={`${BASE}/${module}/qcm-global`}
              className="flex items-center gap-4 bg-primary text-primary-content rounded-2xl p-4 hover:opacity-90 transition-opacity"
            >
              <span className="opacity-80">
                <IconQCM />
              </span>
              <div className="flex-1">
                <h3 className="font-bold">QCM Global</h3>
                <p className="text-sm text-primary-content/70 mt-0.5">
                  16 questions · toutes les fiches du module
                </p>
              </div>
              <span className="text-primary-content/40 text-xl">›</span>
            </Link>
            <Link
              href={`${BASE}/${module}/msp`}
              className="flex items-center gap-4 bg-base-200 border border-base-300 rounded-2xl p-4 hover:bg-base-300 transition-colors"
            >
              <span className="text-base-content/40">
                <IconMSP />
              </span>
              <div className="flex-1">
                <h3 className="font-bold text-base-content">MSP</h3>
                <p className="text-sm text-base-content/50 mt-0.5">
                  Mise en situation professionnelle
                </p>
              </div>
              <span className="text-base-content/30 text-xl">›</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
