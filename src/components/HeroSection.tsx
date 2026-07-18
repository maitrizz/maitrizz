import Link from "next/link";

/* Aperçu produit : une vraie fiche en couleur */
function FichePreview() {
  return (
    <div className="relative">
      {/* Feuille derrière : effet pile de copies */}
      <div
        aria-hidden
        className="absolute inset-0 -rotate-[3deg] rounded-xl bg-surface-container/70 ring-1 ring-primary/10 shadow-copy"
      />
      {/* Feuille de copie principale, légèrement inclinée comme posée sur le cahier */}
      <div className="relative rotate-[1.5deg] rounded-xl bg-white py-6 pl-12 pr-6 ring-1 ring-primary/10 shadow-copy-lg transition-transform duration-500 hover:rotate-0 md:py-8 md:pl-14 md:pr-8">
        {/* Filet de marge, comme sur une feuille de copie */}
        <div aria-hidden className="absolute inset-y-0 left-8 w-px bg-secondary/25 md:left-9" />
        {/* En-tête de la fiche */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-secondary/10 px-2.5 py-1 font-ui text-[11px] font-bold uppercase tracking-wider text-secondary">
              Français
            </span>
            <span className="font-ui text-xs font-semibold text-on-surface-variant">
              Orthographe grammaticale
            </span>
          </div>
          <svg className="h-5 w-5 text-primary/40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 3H7a2 2 0 00-2 2v16l7-3 7 3V5a2 2 0 00-2-2z" />
          </svg>
        </div>

        {/* Titre de la fiche (une vraie fiche du site) */}
        <h3 className="mb-3 text-xl font-bold leading-snug text-primary">
          Les accords dans le GN et le GV
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
          <span className="font-ui text-xs text-on-surface-variant">Notion 11 / 21</span>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-24 overflow-hidden rounded-full bg-surface-container">
              <div className="h-full w-[78%] rounded-full bg-primary" />
            </div>
            <span className="font-ui text-xs font-bold text-primary">78%</span>
          </div>
        </div>
      </div>

      {/* Une seule annotation manuscrite, pointée sur le suivi de progression */}
      <div className="absolute -bottom-9 right-6 flex -rotate-2 items-end gap-1.5">
        <span className="font-hand text-2xl text-secondary">
          déjà 11 notions revues !
        </span>
        <svg
          aria-hidden
          className="h-8 w-6 -translate-y-5 text-secondary"
          viewBox="0 0 24 40"
          fill="none"
        >
          <path
            d="M6 38 C 16 30 20 18 16 4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M16 4 L 10 10 M16 4 L 21 11"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-seyes overflow-hidden px-5 py-14 md:px-16 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2">
        {/* Colonne texte */}
        <div className="text-center lg:text-left">
          {/* Tampon légèrement incliné, même langage que les pages du parcours. */}
          <div className="mb-6">
            <span className="inline-block -rotate-1 rounded-sm border-2 border-secondary/50 px-4 py-2 font-ui text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/90 lg:text-xs">
              Préparation au CRPE · écrit et oral
            </span>
          </div>

          <h1 className="text-balance -translate-y-[11px] text-3xl font-black leading-8 tracking-tight text-primary lg:-translate-y-1 lg:text-5xl lg:leading-[3.5rem]">
            Préparez le CRPE <br className="hidden lg:block" />
            <span
              className="italic text-secondary lg:whitespace-nowrap"
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

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-on-surface-variant lg:mx-0 lg:text-lg">
            Fiches de cours, méthode, exercices corrigés et sujets blancs,
            construits à partir des programmes officiels et des rapports de
            jury. Votre progression se construit sous vos yeux, notion après
            notion.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-base italic leading-relaxed text-on-surface-variant lg:mx-0">
            Conçu par une professeure des écoles en poste, classée deuxième au
            concours.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
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
