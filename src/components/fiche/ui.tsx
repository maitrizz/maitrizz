import { RichText } from "@/components/fiche/richtext";

/* Petits helpers typographiques du prototype « copie corrigée », partagés par
   la coquille de fiche et le rendu des blocs. Repris de /proto (page.tsx) :
   une grammaire typo stricte — serif pour les titres, Work Sans pour les
   labels, capitales espacées RÉSERVÉES aux petites étiquettes. */

/* Neutralise les emojis du contenu AU RENDU (proto seulement — la vraie fiche
   n'est pas touchée) : ⚠️ 💡 ✅ etc. font « IA générique » dans une page à
   l'esprit imprimé. Les glyphes typographiques voulus (✓ ✗ ★ →) sont gardés. */
const EMOJI_RX = /(?![✓✗★])[\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{1F000}-\u{1FAFF}\u{FE0F}]\s?/gu;
export function sansEmoji(s: string): string {
  return s.replace(EMOJI_RX, "").trim();
}

/* RichText du proto : même rendu que le vrai, contenu passé au filtre emoji. */
export function RichTextSobre({ text }: { text: string }) {
  return <RichText text={sansEmoji(text)} />;
}

/* Hiérarchie de boutons constante : plein / contour / lien. Retenue « imprimé » :
   l'état survolé change l'encre (assombrissement), jamais la position ni
   l'ombre — le bouton qui décolle est un tic de landing page SaaS. */
export const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-6 py-3 font-ui text-sm font-bold text-white transition-colors hover:bg-secondary/85";
export const BTN_SECONDARY =
  "inline-flex items-center justify-center gap-2 rounded-md border border-primary/30 px-6 py-3 font-ui text-sm font-bold text-primary transition-colors hover:border-primary/60 hover:bg-primary/[0.04]";

/* Feuille : encart papier ivoire chaud (pas de blanc clinique), coins juste
   adoucis, bordure fine, ombre courte. L'unité de base de toute la fiche. */
export const FEUILLE =
  "rounded-md bg-[#fffdf8] ring-1 ring-primary/[0.1] shadow-[0_10px_24px_-18px_rgba(12,67,78,0.3)]";

/* Petit label : capitales espacées, pour les étiquettes courtes. */
export function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-ui text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
      {children}
    </span>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   Système d'encarts unifié. RÈGLE : tout bloc « feuille » (méthode, rappel,
   encadré, exercice, tableau…) partage le MÊME en-tête = petite capitale
   (le « type ») + titre en serif teal. HIÉRARCHIE D'IMPORTANCE : les blocs
   « à retenir / action » (terracotta) gardent un bandeau lavé chaud pour
   RESSORTIR au défilement ; les blocs « savoir / structure » (teal) restent
   sur un simple filet, en sourdine. C'est la couleur qui dit « important ».
   ────────────────────────────────────────────────────────────────────────── */
export type Tone = "teal" | "terracotta";

const BAND: Record<Tone, string> = {
  teal: "border-outline-variant/50",
  terracotta: "border-secondary/20 bg-secondary/[0.06]",
};
const TAG_COLOR: Record<Tone, string> = {
  teal: "text-primary/80",
  terracotta: "text-secondary",
};

/* Sépare « Type : titre » → étiquette (petite capitale) + titre (serif).
   Sans deux-points exploitable, `tag` vaut null : au site d'appel de décider
   s'il met une étiquette par défaut (`tag ?? "…"`) ou aucune (`tag ?? undefined`).
   Évite de coller une étiquette générique identique à plusieurs encarts. */
export function splitTitle(raw: string): { tag: string | null; title: string } {
  const m = raw.match(/^(.{2,40}?)\s*:\s*(.+)$/);
  if (m) return { tag: m[1].trim(), title: m[2].trim() };
  return { tag: null, title: raw };
}

export function FeuilleHeader({
  tone = "teal",
  tag,
  title,
  number,
  badge,
}: {
  tone?: Tone;
  tag?: string;
  title?: string | null;
  number?: string;
  badge?: string;
}) {
  return (
    <div className={`flex items-center gap-3 border-b px-5 py-3 ${BAND[tone]}`}>
      {number && <span className="font-serif text-xl font-bold leading-none text-primary/70">{number}</span>}
      <div className="flex min-w-0 flex-col gap-0.5">
        {tag && (
          <span className={`font-ui text-[10px] font-bold uppercase tracking-[0.16em] ${TAG_COLOR[tone]}`}>{sansEmoji(tag)}</span>
        )}
        {title && <span className="font-serif text-[1.05rem] font-bold leading-snug text-primary">{sansEmoji(title)}</span>}
      </div>
      {badge && (
        <span className="ml-auto shrink-0">
          <Label>{badge}</Label>
        </span>
      )}
    </div>
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
