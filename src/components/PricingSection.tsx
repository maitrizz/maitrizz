import Link from "next/link";

const perks = [
  "Accès illimité à tous les modules",
  "Fiches de révision claires et structurées",
  "Quiz et entraînements illimités",
  "Sans engagement, résiliable en un clic",
  "Mises à jour incluses",
];

export default function PricingSection() {
  return (
    <section className="px-5 py-32 md:px-16">
      <div className="mx-auto max-w-[1280px] text-center">
        <h2 className="mb-6 text-balance text-4xl font-bold text-primary">
          Un accès simple et honnête
        </h2>
        <p className="mx-auto mb-16 max-w-xl text-lg leading-relaxed text-on-surface-variant">
          Pas de formules compliquées. Un seul tarif pour tout, sans engagement.
        </p>

        <div className="relative mx-auto max-w-lg overflow-hidden rounded-3xl border-2 border-outline-variant bg-surface p-12 shadow-sm transition-colors duration-500 hover:border-primary">
          <span className="mb-6 block font-ui text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Abonnement mensuel
          </span>

          <div className="mb-10 flex items-baseline justify-center gap-2">
            <span className="text-6xl font-black text-primary">6€</span>
            <span className="font-ui text-lg text-on-surface-variant">/ mois</span>
          </div>

          <ul className="mb-12 space-y-5 text-left">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-secondary" />
                <span className="font-ui text-on-surface">{perk}</span>
              </li>
            ))}
          </ul>

          <Link
            href="#newsletter"
            className="mb-6 block w-full rounded-2xl bg-primary py-4 font-ui text-base font-bold text-on-primary shadow-lg shadow-primary/20 transition-all hover:bg-primary-container active:scale-[0.98]"
          >
            Être prévenu·e du lancement
          </Link>
          <p className="font-ui text-xs text-on-surface-variant">
            Disponible à l&apos;ouverture de la plateforme.
          </p>
        </div>
      </div>
    </section>
  );
}
