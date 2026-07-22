/* Bloc QUI : l'autorité. On parle uniquement de l'enseignante, sans preuve
   sociale invérifiable ni mention des sources (celles-ci vivent dans le bloc
   COMMENT, juste en dessous). Même gabarit deux colonnes que COMMENT et OÙ EN
   EST : texte à gauche, carte « profil » sobre à droite, pour une page
   visuellement régulière. */

const reperes = [
  {
    icon: "/illustrations/croquis/tableau-chevalet.svg",
    label: "Professeure des écoles",
    detail: "En poste depuis deux ans",
  },
  {
    icon: "/illustrations/croquis/copie-stylo.svg",
    label: "Classée deuxième au CRPE",
    detail: "L'expérience du concours, de l'intérieur",
  },
  {
    icon: "/illustrations/croquis/chronometre.svg",
    label: "À mi-temps sur Maitrizz",
    detail: "Du temps dédié à la plateforme",
  },
];

export default function AuthorSection() {
  return (
    <section className="bg-surface-container/40 px-5 py-16 md:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="mb-5 inline-block -rotate-1 rounded-sm border-2 border-secondary/50 px-3 py-1.5 font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-secondary/90">
            Qui est derrière Maitrizz&nbsp;?
          </span>
          <h2 className="mb-5 text-balance text-3xl font-bold leading-tight text-primary lg:text-4xl">
            Une enseignante en poste
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-on-surface-variant lg:text-lg">
            Professeure des écoles depuis deux ans, classée deuxième au CRPE, je
            suis passée à mi-temps pour construire l&apos;outil que j&apos;aurais
            voulu avoir en préparant le concours. Chaque notion s&apos;appuie sur
            cette expérience&nbsp;: ce qui m&apos;a vraiment fait progresser, et
            ce qui fait la différence le jour de l&apos;épreuve.
          </p>
        </div>

        {/* Carte « profil » : les repères clés, dans le style feuille de copie */}
        <div className="mx-auto w-full max-w-md rounded-xl bg-white p-6 ring-1 ring-primary/10 shadow-copy md:p-8">
          <p className="mb-2 border-b border-outline-variant/40 pb-3 font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
            En bref
          </p>
          <ul className="flex flex-col">
            {reperes.map((r, i) => (
              <li
                key={r.label}
                className={`flex items-center gap-4 py-4 ${
                  i > 0 ? "border-t border-dashed border-outline-variant/40" : ""
                }`}
              >
                <img
                  src={r.icon}
                  alt=""
                  aria-hidden
                  className="h-9 w-auto shrink-0"
                />
                <span>
                  <span className="block font-ui text-sm font-bold leading-snug text-on-surface">
                    {r.label}
                  </span>
                  <span className="block font-ui text-xs text-on-surface-variant">
                    {r.detail}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
