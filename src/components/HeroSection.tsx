import Link from "next/link";

/* Aperçu produit : une vraie fiche en couleur */
function FichePreview() {
  return (
    <div className="relative">
      {/* Feuille derrière : effet pile de fiches */}
      <div
        aria-hidden
        className="absolute inset-0 -rotate-[4deg] rounded-2xl border border-outline-variant/40 bg-surface-container/70 shadow-lg"
      />
      {/* Carte principale, légèrement inclinée comme posée sur un bureau */}
      <div className="relative rotate-[1.5deg] rounded-2xl border border-outline-variant/40 bg-white p-6 shadow-2xl transition-transform duration-500 hover:rotate-0 md:p-8">
        {/* En-tête de la fiche */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-secondary/10 px-2.5 py-1 font-ui text-[11px] font-bold uppercase tracking-wider text-secondary">
              Français
            </span>
            <span className="font-ui text-xs font-semibold text-on-surface-variant">
              Grammaire
            </span>
          </div>
          <svg className="h-5 w-5 text-primary/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 3H7a2 2 0 00-2 2v16l7-3 7 3V5a2 2 0 00-2-2z" />
          </svg>
        </div>

        {/* Titre de la fiche */}
        <h3 className="mb-3 text-xl font-bold leading-snug text-primary">
          Les accords dans le groupe nominal
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-on-surface-variant">
          Le déterminant et l&apos;adjectif épithète s&apos;accordent en genre et
          en nombre avec le nom noyau du groupe nominal.
        </p>

        {/* Encadré exemple */}
        <div className="mb-6 rounded-xl border-l-2 border-secondary bg-surface px-4 py-3">
          <p className="mb-1 font-ui text-[11px] font-bold uppercase tracking-wider text-secondary">
            Exemple
          </p>
          <p className="text-sm text-on-surface">
            les <span className="font-semibold text-primary">grandes</span> écoles
            maternelles
          </p>
        </div>

        {/* Pied : progression */}
        <div className="flex items-center justify-between border-t border-outline-variant/40 pt-4">
          <span className="font-ui text-xs text-on-surface-variant">Notion 3 / 8</span>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-24 overflow-hidden rounded-full bg-surface-container">
              <div className="h-full w-[78%] rounded-full bg-primary" />
            </div>
            <span className="font-ui text-xs font-bold text-primary">78%</span>
          </div>
        </div>
      </div>

      {/* Étiquettes flottantes */}
      <div className="absolute -right-4 -top-5 rotate-3 rounded-xl border border-outline-variant/30 bg-white p-3 shadow-xl">
        <div className="flex items-center gap-2.5">
          <svg className="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.2 14.4l-4-4L8.2 11l2.6 2.6 5-5 1.4 1.4-6.4 6.4z" />
          </svg>
          <span className="font-ui text-xs font-bold text-primary">QCM réussi : 18/20</span>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-4 -rotate-3 rounded-xl border border-outline-variant/30 bg-white p-3 shadow-xl">
        <div className="flex items-center gap-2.5">
          <svg className="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V8h14v11z" />
          </svg>
          <span className="font-ui text-xs font-bold text-primary">Révisions du jour</span>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-seyes overflow-hidden px-5 py-20 md:px-16 lg:py-28">
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-2">
        {/* Colonne texte */}
        <div className="text-center lg:text-left">
          <div className="mb-8 inline-flex max-w-full items-center gap-3 whitespace-nowrap rounded-full border border-secondary/20 bg-white/80 px-5 py-2 shadow-sm">
            <svg className="h-4 w-4 text-secondary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1l3 2.5 3.9-.3.8 3.8 3 2.5-1.7 3.5 1.7 3.5-3 2.5-.8 3.8-3.9-.3L12 23l-3-2.5-3.9.3-.8-3.8-3-2.5L3 11 1.3 7.5l3-2.5.8-3.8 3.9.3L12 1zm-1.2 13.4l5-5-1.4-1.4-3.6 3.6-1.8-1.8L7.6 11l3.2 3.4z" />
            </svg>
            <span className="font-ui text-[10px] font-bold uppercase tracking-[0.2em] text-primary lg:text-xs">
              Une préparation claire, complète et structurée
            </span>
          </div>

          <h1 className="text-balance -translate-y-[11px] text-3xl font-black leading-8 tracking-tight text-primary lg:-translate-y-1 lg:text-6xl lg:leading-[4rem]">
            Préparez le CRPE <br className="hidden lg:block" />
            <span
              className="italic text-secondary"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 12' preserveAspectRatio='none'%3E%3Cpath d='M2 8 C 70 2 130 10 180 6 S 260 4 298 7' fill='none' stroke='%23c36648' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left bottom",
                backgroundSize: "100% 0.32em",
                paddingBottom: "0.12em",
              }}
            >
              sans vous perdre.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-on-surface-variant lg:mx-0 lg:text-xl">
            Des fiches fiables, des quiz, des cas pratiques et un parcours clair
            pour progresser jour après jour avec sérénité.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/reviser"
              className="rounded-xl bg-secondary px-8 py-3.5 font-ui text-base font-bold text-white shadow-md shadow-secondary/20 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
            >
              Commencer à réviser
            </Link>
            <Link
              href="#piliers"
              className="rounded-xl border border-primary/20 bg-white/60 px-8 py-3.5 font-ui text-base font-bold text-primary transition-all hover:bg-white active:scale-95"
            >
              Voir le programme
            </Link>
          </div>
        </div>

        {/* Colonne aperçu */}
        <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <FichePreview />
        </div>
      </div>
    </section>
  );
}
