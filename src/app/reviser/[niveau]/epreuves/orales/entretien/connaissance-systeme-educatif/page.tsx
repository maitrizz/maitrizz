import Link from "next/link";
import { notFound } from "next/navigation";
import MasteryBadge from "@/components/MasteryBadge";
import { NIVEAUX, isValidNiveau } from "@/lib/niveau";
import { HUB_CARD, HubHeader, HubLabel } from "../../../../../_components/hub";
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

  const n = niveau.toUpperCase();
  const BASE = `/reviser/${niveau}/epreuves/orales/entretien/connaissance-systeme-educatif`;

  return (
    <div className="bg-seyes min-h-screen">
      <HubHeader
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Réviser", href: "/reviser" },
          { label: `CRPE ${n}`, href: `/reviser/${niveau}/epreuves` },
          { label: "Épreuves orales", href: `/reviser/${niveau}/epreuves/orales` },
          { label: "Système éducatif" },
        ]}
        stamp="Entretien · Admission"
        title="Connaissance du système éducatif"
        subtitle="Sept modules pour l'entretien : cours, QCM et mises en situation professionnelle."
      />

      <section className="px-5 pb-20 pt-12 md:px-12 lg:pt-14">
        <div className="mx-auto flex max-w-[1080px] flex-col gap-12">
          {/* Modules */}
          <div>
            <h2 className="mb-5 border-b border-dashed border-outline-variant/60 pb-3 text-xl font-bold text-primary">
              Modules
            </h2>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => {
                const moduleData = modules[`module-${num}`];
                const subtitle = moduleData.label.includes(" - ")
                  ? moduleData.label.split(" - ").slice(1).join(" - ")
                  : null;
                const isAvailable = num === 1;

                if (!isAvailable) {
                  return (
                    <div
                      key={num}
                      className="flex min-h-44 flex-col rounded-xl border border-dashed border-outline-variant/60 bg-white/50 p-5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-serif text-3xl font-bold leading-none text-on-surface-variant/40">
                          {num}
                        </span>
                        <HubLabel>Module</HubLabel>
                      </div>
                      <div className="flex-1" />
                      <span className="font-ui text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70">
                        À venir
                      </span>
                    </div>
                  );
                }

                return (
                  <Link
                    key={num}
                    href={`${BASE}/module-${num}`}
                    className={`${HUB_CARD} min-h-44 p-5`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-serif text-3xl font-bold leading-none text-secondary">
                        {num}
                      </span>
                      <HubLabel>Module</HubLabel>
                    </div>
                    <p className="mt-3 flex-1 font-ui text-sm font-semibold leading-snug text-primary">
                      {subtitle ?? `Module ${num}`}
                    </p>
                    <div className="mt-3 flex items-end">
                      <MasteryBadge value={0} size="sm" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Trainer */}
          <div className="flex flex-col items-start justify-between gap-8 rounded-xl bg-primary bg-seyes-dark p-8 shadow-md md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="text-2xl font-bold text-white">Trainer</h2>
              <p className="mt-2 max-w-sm font-ui text-sm leading-relaxed text-white/75">
                Questions et mises en situation aléatoires, tous modules
                confondus.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`${BASE}/trainer/qcm-aleatoire`}
                className="rounded-xl bg-secondary px-7 py-3.5 font-ui text-xs font-bold uppercase tracking-widest text-white shadow-md shadow-secondary/20 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
              >
                QCM aléatoire
              </Link>
              <Link
                href={`${BASE}/trainer/msp-aleatoire`}
                className="rounded-xl border border-white/30 px-7 py-3.5 font-ui text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10 active:scale-95"
              >
                MSP aléatoire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
