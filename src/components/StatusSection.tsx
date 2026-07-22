import Link from "next/link";

/* L'état du chantier, sans preuve sociale invérifiable : on montre ce qui est
   en ligne (comptes calculés depuis les données réelles) et on dit ce qui
   manque. C'est cette transparence qui donne confiance. */

type Statut = "enLigne" | "enPreparation" | "aVenir";

type Module = {
  icon: string;
  label: string;
  detail?: string;
  statut: Statut;
  etat: string;
};

function StatutBadge({ statut, etat }: { statut: Statut; etat: string }) {
  if (statut === "enLigne") {
    return (
      <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary/[0.08] px-3 py-1.5 font-ui text-[11px] font-bold uppercase tracking-[0.1em] text-primary">
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 12.5 10 17.5 19 7"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {etat}
      </span>
    );
  }
  if (statut === "enPreparation") {
    return (
      <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-secondary/[0.09] px-3 py-1.5 font-ui text-[11px] font-bold uppercase tracking-[0.1em] text-secondary">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-secondary" />
        {etat}
      </span>
    );
  }
  return (
    <span className="inline-flex shrink-0 items-center rounded-full border border-dashed border-outline-variant/70 px-3 py-1.5 font-ui text-[11px] font-bold uppercase tracking-[0.1em] text-on-surface-variant/70">
      {etat}
    </span>
  );
}

function GroupeModules({ titre, modules }: { titre: string; modules: Module[] }) {
  return (
    <div>
      <p className="mb-2 border-b border-outline-variant/40 pb-2 font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
        {titre}
      </p>
      <ul className="flex flex-col">
        {modules.map((m, i) => (
          <li
            key={m.label}
            className={`flex items-center gap-3 py-3 ${
              i > 0 ? "border-t border-dashed border-outline-variant/40" : ""
            } ${m.statut === "aVenir" ? "opacity-60" : ""}`}
          >
            <img src={m.icon} alt="" aria-hidden className="h-8 w-auto shrink-0" />
            <span className="flex-1">
              <span className="block font-ui text-sm font-semibold leading-snug text-on-surface">
                {m.label}
              </span>
              {m.detail && (
                <span className="block font-ui text-xs text-on-surface-variant">
                  {m.detail}
                </span>
              )}
            </span>
            <StatutBadge statut={m.statut} etat={m.etat} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function StatusSection() {
  const ecrits: Module[] = [
    {
      icon: "/illustrations/croquis/livre-ouvert.svg",
      label: "Français",
      statut: "enLigne",
      etat: "En ligne",
    },
    {
      icon: "/illustrations/croquis/regle-equerre.svg",
      label: "Mathématiques",
      statut: "enLigne",
      etat: "En ligne",
    },
    {
      icon: "/illustrations/croquis/fiole.svg",
      label: "Sciences et technologie",
      statut: "aVenir",
      etat: "À venir",
    },
    {
      icon: "/illustrations/croquis/globe-terrestre.svg",
      label: "Histoire et géographie",
      statut: "aVenir",
      etat: "À venir",
    },
    {
      icon: "/illustrations/croquis/palette-peinture.svg",
      label: "Enseignements artistiques",
      statut: "aVenir",
      etat: "À venir",
    },
  ];

  const oraux: Module[] = [
    {
      icon: "/illustrations/croquis/tableau-chevalet.svg",
      label: "Leçon",
      detail: "Français et mathématiques",
      statut: "aVenir",
      etat: "À venir",
    },
    {
      icon: "/illustrations/croquis/bulles-oral.svg",
      label: "Entretien avec le jury",
      detail: "EPS, motivation et système éducatif",
      statut: "aVenir",
      etat: "À venir",
    },
  ];

  return (
    <section className="bg-surface-container/40 px-5 py-16 md:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="mb-5 inline-block -rotate-1 rounded-sm border-2 border-secondary/50 px-3 py-1.5 font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-secondary/90">
            Plateforme en construction
          </span>
          <h2 className="mb-5 text-balance text-3xl font-bold leading-tight text-primary lg:text-4xl">
            Où en est la plateforme
          </h2>
          <p className="max-w-xl font-ui text-base leading-relaxed text-on-surface-variant lg:text-lg">
            À ce jour, l&apos;intégralité de l&apos;écrit de français et de
            mathématiques est en ligne, pour les deux niveaux. Les matières et
            épreuves suivantes s&apos;ajoutent au fil de leur rédaction. Cette
            rigueur est volontaire&nbsp;: elle vous assure des fiches exactes,
            à jour et prêtes pour l&apos;épreuve.
          </p>
          <Link
            href="/reviser"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-primary/30 px-7 py-3 font-ui text-sm font-bold text-primary transition-all hover:border-primary/60 hover:bg-primary/[0.04]"
          >
            Parcourir ce qui est en ligne <span aria-hidden>→</span>
          </Link>
        </div>

        {/* La feuille d'état, dans le style « feuille de copie » du parcours */}
        <div className="flex flex-col gap-7 rounded-xl bg-white p-6 ring-1 ring-primary/10 shadow-copy md:p-8">
          <GroupeModules titre="Épreuves écrites" modules={ecrits} />
          <GroupeModules titre="Épreuves orales" modules={oraux} />
        </div>
      </div>
    </section>
  );
}
