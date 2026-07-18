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
    <section className="px-5 py-16 md:px-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] text-center">
        <h2 className="mb-4 text-balance text-3xl font-bold text-primary lg:text-4xl">
          Un accès simple et honnête
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-on-surface-variant lg:text-lg">
          Pas de formules compliquées ni de packs à tiroirs. Un seul tarif
          pour tout, sans engagement.
        </p>

        <div className="relative mx-auto max-w-lg rounded-xl bg-white p-8 ring-1 ring-primary/10 shadow-copy md:p-10">
          <span className="mb-5 block font-ui text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
            Abonnement mensuel
          </span>

          <div className="mb-7 flex items-baseline justify-center gap-2">
            <span className="text-5xl font-bold text-primary">6&nbsp;€</span>
            <span className="font-ui text-lg text-on-surface-variant">/ mois</span>
          </div>

          <ul className="mb-8 space-y-4 text-left">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-secondary" />
                <span className="font-ui text-sm text-on-surface md:text-base">{perk}</span>
              </li>
            ))}
          </ul>

          <Link
            href="#newsletter"
            className="mb-4 block w-full rounded-xl bg-primary py-3.5 font-ui text-base font-bold text-white transition-all hover:bg-primary-container active:scale-[0.98]"
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
