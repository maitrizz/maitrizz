import Link from "next/link";

/* ──────────────────────────────────────────────────────────────────────────
   Éléments partagés des pages « hub » du parcours de révision
   (/reviser → épreuves → écrites/orales). Langage « édition scolaire » du
   proto v3 : tout se passe sur le papier Seyès, pas de bande de couleur.
   L'en-tête est écrit dans la marge du cahier (filet terracotta), avec un
   tampon incliné et, au plus, une annotation manuscrite par page.
   ────────────────────────────────────────────────────────────────────────── */

export type Crumb = { label: string; href?: string };

/* Coque de carte « feuille de copie » : blanche, liseré d'encre très fin,
   ombre douce teintée teal. Les pages y ajoutent leur padding. */
export const HUB_CARD =
  "group flex flex-col rounded-xl bg-white ring-1 ring-primary/10 shadow-copy transition-all duration-200 hover:-translate-y-1 hover:ring-secondary/40 hover:shadow-copy-lg";

/* La main du correcteur : Caveat terracotta, légère inclinaison constante. */
export function Hand({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`font-hand -rotate-2 text-secondary ${className}`}>
      {children}
    </span>
  );
}

/* Flèche manuscrite qui accompagne l'annotation. */
export function Fleche({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 80 50"
      className={`overflow-visible text-secondary ${className}`}
    >
      <path
        d="M72 10 C 48 5 22 16 11 39"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M11 39 L 19 33 M11 39 L 10 29"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Tampon « officiel » : un seul style, légèrement incliné. */
export function Tampon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block -rotate-1 rounded-sm border-2 border-secondary/50 px-3 py-1.5 font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-secondary/90">
      {children}
    </span>
  );
}

/* Mot-clé du titre souligné d'un trait tracé main (même motif que le hero). */
export function Souligne({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 12' preserveAspectRatio='none'%3E%3Cpath d='M2 8 C 70 2 130 10 180 6 S 260 4 298 7' fill='none' stroke='%23c36648' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E\")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
        backgroundSize: "100% 0.3em",
        paddingBottom: "0.12em",
      }}
    >
      {children}
    </span>
  );
}

export function HubLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
      {children}
    </span>
  );
}

export function HubHeader({
  crumbs,
  title,
  subtitle,
  stamp,
  note,
  maxWidth = "max-w-[1080px]",
}: {
  crumbs: Crumb[];
  /* ReactNode pour pouvoir composer <Souligne> sur le mot-clé. */
  title: React.ReactNode;
  subtitle: string;
  stamp?: string;
  note?: React.ReactNode;
  maxWidth?: string;
}) {
  return (
    // Espacements verticaux en multiples de 32px (pas de la grille Seyès).
    <header className="px-5 pt-8 md:px-12 lg:pt-16">
      <div className={`mx-auto ${maxWidth}`}>
        <nav
          aria-label="Fil d'Ariane"
          className="flex flex-wrap items-center gap-2 font-ui text-[13px] text-on-surface-variant"
        >
          {crumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-primary"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-semibold text-primary">
                  {crumb.label}
                </span>
              )}
              {i < crumbs.length - 1 && (
                <span aria-hidden className="opacity-50">
                  ›
                </span>
              )}
            </span>
          ))}
        </nav>

        <div className="mt-8 flex items-end justify-between gap-10 lg:mt-10">
          {/* La marge du cahier : filet terracotta à gauche du titre. */}
          <div className="border-l-2 border-secondary/70 pl-6 md:pl-8">
            {stamp && (
              <div className="mb-4">
                <Tampon>{stamp}</Tampon>
              </div>
            )}
            <h1 className="text-balance text-4xl font-bold leading-tight text-primary lg:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl font-ui text-lg leading-relaxed text-on-surface-variant">
              {subtitle}
            </p>
          </div>

          {/* Une seule annotation manuscrite par page, en marge droite. */}
          {note && (
            <div className="pointer-events-none hidden w-56 shrink-0 pb-1 text-right lg:block">
              <Hand className="block text-[1.6rem] leading-tight">{note}</Hand>
              <Fleche className="ml-auto mt-1 h-12 w-20" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

/* Bouton plein terracotta. Depuis l'uniformisation du 18/07, les cartes des
   hubs utilisent toutes la variante contour ci-dessous : le terracotta est
   réservé à l'action prioritaire unique d'un écran (bandeau « S'entraîner »,
   bouton CSE), jamais aux boutons de cartes. */
export function HubCardCta({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-secondary px-7 py-3 font-ui text-sm font-bold text-white shadow-sm transition-all group-hover:gap-3 group-hover:-translate-y-0.5 group-hover:shadow-md">
      {children} <span aria-hidden>→</span>
    </span>
  );
}

/* Variante contour : le bouton standard de toutes les cartes de hub
   (la carte entière est cliquable, le bouton n'est qu'une affordance). */
export function HubCardCtaOutline({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-md border border-primary/30 px-7 py-3 font-ui text-sm font-bold text-primary transition-all group-hover:gap-3 group-hover:border-primary/60 group-hover:bg-primary/[0.04]">
      {children} <span aria-hidden>→</span>
    </span>
  );
}

export function LockIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}
