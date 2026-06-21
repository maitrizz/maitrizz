const sources = ["Programmes officiels de l'Éducation nationale", "Rapports de jury du CRPE"];

export default function SourcesSection() {
  return (
    <section className="bg-surface-container/40 px-5 py-32 md:px-16">
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-balance text-4xl font-bold leading-tight text-primary">
            Des contenus construits à partir de références officielles
          </h2>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-on-surface-variant">
            Chaque fiche Maitrizz s&apos;appuie sur les programmes officiels et
            les rapports de jury du CRPE. Nous traduisons cette matière dense
            en parcours clairs, sans en trahir l&apos;exigence.
          </p>

          <div className="flex flex-wrap gap-3">
            {sources.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 rounded-full border border-outline-variant/40 bg-white px-4 py-2 font-ui text-xs font-bold text-primary"
              >
                <svg
                  className="h-4 w-4 text-secondary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
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
