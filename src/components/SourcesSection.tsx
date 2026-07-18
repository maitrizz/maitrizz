const sources = [
  "Programmes officiels de l'Éducation nationale",
  "Guides et ressources Éduscol",
  "Rapports de jury du CRPE",
];

export default function SourcesSection() {
  return (
    <section className="bg-seyes px-5 py-16 md:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="mb-5 inline-block -rotate-1 rounded-sm border-2 border-secondary/50 px-3 py-1.5 font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-secondary/90">
            Qui est derrière Maitrizz&nbsp;?
          </span>
          <h2 className="mb-5 text-balance text-3xl font-bold leading-tight text-primary lg:text-4xl">
            Des contenus sourcés, rédigés par une enseignante en poste
          </h2>
          <p className="mb-5 max-w-xl text-base leading-relaxed text-on-surface-variant lg:text-lg">
            Chaque fiche Maitrizz s&apos;appuie sur les programmes officiels et
            les rapports de jury du CRPE, et cite ses sources. Cette matière
            dense est traduite en parcours clairs, sans en trahir
            l&apos;exigence.
          </p>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-on-surface-variant lg:text-lg">
            Derrière chaque fiche, une seule plume : celle d&apos;une
            professeure des écoles depuis trois ans, classée deuxième au CRPE,
            passée à mi-temps pour construire l&apos;outil qu&apos;elle aurait
            voulu avoir en préparant le concours.
          </p>

          <div className="flex flex-wrap gap-3">
            {sources.map((s) => (
              <span
                key={s}
                className="inline-flex items-center rounded-md border border-dashed border-outline-variant/70 bg-white/70 px-4 py-2 font-ui text-xs font-bold uppercase tracking-wider text-primary"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Mini fiche illustrant la citation de source */}
        <div className="mx-auto w-full max-w-sm">
          <div className="rotate-[1.5deg] rounded-2xl border border-outline-variant/40 bg-white p-6 shadow-xl transition-transform duration-500 hover:rotate-0">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-md bg-secondary/10 px-2.5 py-1 font-ui text-[11px] font-bold uppercase tracking-wider text-secondary">
                Français
              </span>
              <span className="font-ui text-xs font-semibold text-on-surface-variant">
                Grammaire
              </span>
            </div>
            <h3 className="mb-3 text-lg font-bold leading-snug text-primary">
              L&apos;accord du participe passé
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-on-surface-variant">
              Avec l&apos;auxiliaire avoir, le participe passé s&apos;accorde
              avec le COD seulement s&apos;il est placé avant le verbe.
            </p>
            <div className="flex items-center gap-2 border-t border-outline-variant/40 pt-4 font-ui text-xs font-bold text-secondary">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.9 12a5 5 0 015-5h3v2h-3a3 3 0 100 6h3v2h-3a5 5 0 01-5-5zm7-1h6v2h-6v-2zm3-6h3a5 5 0 010 10h-3v-2h3a3 3 0 000-6h-3V5z" />
              </svg>
              Source officielle citée sur chaque fiche
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
