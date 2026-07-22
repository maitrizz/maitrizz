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
            Comment c&apos;est construit
          </span>
          <h2 className="mb-5 text-balance text-3xl font-bold leading-tight text-primary lg:text-4xl">
            Des contenus fondés sur les textes officiels
          </h2>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-on-surface-variant lg:text-lg">
            Pour chaque notion, je m&apos;appuie sur les textes de
            référence&nbsp;: les
            programmes de l&apos;Éducation nationale, les ressources Éduscol et
            les rapports de jury. Ce sont eux qui fixent ce qu&apos;il faut
            savoir et la façon dont l&apos;épreuve est évaluée. Ces sources
            sont citées directement dans les fiches.
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

        {/* Extrait d'une fiche, centré sur la source citée : la preuve concrète du propos */}
        <div className="mx-auto w-full max-w-sm">
          <div className="rotate-[1.5deg] rounded-2xl border border-outline-variant/40 bg-white p-6 shadow-xl transition-transform duration-500 hover:rotate-0">
            <span className="mb-4 inline-block rounded-md bg-secondary/10 px-2.5 py-1 font-ui text-[11px] font-bold uppercase tracking-wider text-secondary">
              Extrait d&apos;une fiche
            </span>
            <h3 className="mb-4 text-lg font-bold leading-snug text-primary">
              Classes grammaticales · terminologie 2020
            </h3>

            <div className="rounded-xl border-l-2 border-secondary bg-surface px-4 py-3">
              <p className="mb-1 font-ui text-[11px] font-bold uppercase tracking-wider text-secondary">
                Nouvelle terminologie officielle
              </p>
              <p className="text-sm leading-relaxed text-on-surface">
                Depuis 2020, l&apos;onomatopée n&apos;est plus une classe à
                part : elle est devenue une <strong>interjection</strong>. Le
                conditionnel, lui, reste un temps de l&apos;indicatif, pas un
                mode.
              </p>
            </div>

            <div className="mt-5 flex items-center gap-2 border-t border-outline-variant/40 pt-4 font-ui text-xs font-bold text-secondary">
              <img
                src="/illustrations/croquis/dictionnaire.svg"
                alt=""
                aria-hidden
                className="h-8 w-auto"
              />
              Sources citées sur chaque fiche : programmes, Éduscol, rapports de jury
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
