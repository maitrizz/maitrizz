/* Petits helpers typographiques du prototype « copie corrigée », partagés par
   la coquille de fiche et le rendu des blocs. Repris de /proto (page.tsx) :
   une grammaire typo stricte — serif pour les titres, Work Sans pour les
   labels, capitales espacées RÉSERVÉES aux petites étiquettes. */

/* Hiérarchie de boutons constante : plein / contour / lien. */
export const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-6 py-3 font-ui text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-95";
export const BTN_SECONDARY =
  "inline-flex items-center justify-center gap-2 rounded-md border border-primary/30 px-6 py-3 font-ui text-sm font-bold text-primary transition-all hover:border-primary/60 hover:bg-primary/[0.04] active:scale-95";

/* Feuille : carte blanche, bordure fine, ombre douce et diffuse.
   L'unité de base de toute la fiche. */
export const FEUILLE =
  "rounded-xl bg-white ring-1 ring-primary/[0.07] shadow-[0_18px_50px_-32px_rgba(12,67,78,0.25)]";

/* Petit label : capitales espacées, pour les étiquettes courtes. */
export function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-ui text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
      {children}
    </span>
  );
}

/* Intertitre : terracotta, peu espacé. */
export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-ui text-xs font-bold uppercase tracking-[0.1em] text-secondary">
      {children}
    </span>
  );
}

/* Étiquette de partie : plate, un simple filet terracotta en tête (remplace
   l'ancien tampon encadré/incliné). */
export function PartieLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-ui text-[11px] font-bold uppercase tracking-[0.16em] text-secondary">
      <span className="h-3.5 w-[3px] rounded-full bg-secondary" />
      {children}
    </span>
  );
}

/* Touche manuscrite terracotta : annotation de marge « copie corrigée ». */
export function Hand({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`font-hand text-secondary ${className}`}>{children}</span>;
}

/* Soulignement tracé à la main (terracotta), à glisser sous un titre.
   S'étire à la largeur donnée (preserveAspectRatio none). */
export function HandUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 12"
      preserveAspectRatio="none"
      aria-hidden
      className={`text-secondary/70 ${className}`}
    >
      <path
        d="M3 8 C 45 3, 80 11, 118 6 S 198 2, 237 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
