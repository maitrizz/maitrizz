"use client";

import { Fragment } from "react";
import { RichText } from "@/components/fiche/richtext";
import { RenderBlock } from "@/components/fiche/blocks/RenderBlock";
import type { Block, Step } from "@/components/fiche/types";
import { BTN_SECONDARY, FEUILLE, Kicker, Label } from "./ui";

/* ──────────────────────────────────────────────────────────────────────────
   Rendu des blocs d'une fiche notion, réhabillé « copie corrigée » (sobre).
   Principe : feuilles blanches à bordure fine + ombre douce, filets fins,
   couleurs de la charte (teal / terracotta), pas d'aplats criards.
   Les blocs interactifs (banque d'exercices, corriger les copies, mindmap…)
   sont délégués tels quels au vrai RenderBlock — on ne prototype ici que la
   lecture, pas les widgets.
   ────────────────────────────────────────────────────────────────────────── */

type Props = {
  block: Block;
  ficheSlug: string;
  onNavigateTab?: (tabId: string) => void;
};

// Callout : filet coloré à gauche + fond très légèrement teinté. Sobre.
const CALLOUT: Record<
  Extract<Block, { type: "callout" }>["variant"],
  { border: string; title: string; bg: string }
> = {
  info: { border: "border-primary/60", title: "text-primary", bg: "bg-primary/[0.035]" },
  success: { border: "border-secondary/60", title: "text-secondary", bg: "bg-secondary/[0.05]" },
  warning: { border: "border-secondary/60", title: "text-secondary", bg: "bg-secondary/[0.06]" },
  danger: { border: "border-error/60", title: "text-error", bg: "bg-error/[0.05]" },
};

// Pièges : la couleur du bandeau porte le degré de gravité.
const PIEGE: Record<Extract<Block, { type: "piegeCard" }>["variant"], string> = {
  rouge: "text-error",
  orange: "text-secondary",
  bleu: "text-primary",
};

// Un exemple de carte notion s'écrit « **Sous-classe :** exemple… ». On isole le
// libellé (colonne de gauche du mini-tableau) du reste (colonne de droite). Sans
// libellé (ex. onomatopée), l'exemple occupe toute la largeur.
function splitExemple(s: string): { label: string | null; rest: string } {
  const m = s.match(/^\*\*(.+?)\s*:\*\*\s*([\s\S]*)$/);
  return m ? { label: m[1].trim(), rest: m[2].trim() } : { label: null, rest: s };
}

// La colonne de droite ne montre plus la phrase-exemple mais directement les mots
// concernés : ils sont déjà balisés en **gras** dans l'exemple. À défaut de gras,
// on retombe sur les segments entre guillemets. Renvoie null si rien à extraire.
function motsFromExemple(rest: string): string | null {
  const gras = [...rest.matchAll(/\*\*(.+?)\*\*/g)].map((m) => m[1].trim());
  if (gras.length) return gras.join(" · ");
  const cites = [...rest.matchAll(/«\s*(.+?)\s*»/g)].map((m) => m[1].trim());
  return cites.length ? cites.join(" · ") : null;
}

/* ⚠️ DÉMO À VALIDER (contenu grammatical) — listes de mots exhaustives pour les
   classes FERMÉES, affichées en tête de ligne. Isolées ici dans le proto : la vraie
   fiche n'est pas touchée. Clé = « Titre de carte::Sous-classe ». Si une sous-classe
   n'y figure pas (classes ouvertes : nom, adjectif, verbe, adverbe), on retombe sur
   les mots surlignés dans l'exemple. À faire relire avant toute reprise en données. */
const MOTS_DEMO: Record<string, string> = {
  // Déterminants
  "Déterminant::Article défini": "le · la · les · l’",
  "Déterminant::Article indéfini": "un · une · des",
  "Déterminant::Article partitif": "du · de la · de l’ · des",
  "Déterminant::Possessif": "mon · ton · son · ma · ta · sa · mes · tes · ses · notre · votre · leur · nos · vos · leurs",
  "Déterminant::Démonstratif": "ce · cet · cette · ces",
  "Déterminant::Indéfini": "chaque · aucun · nul · quelque(s) · plusieurs · certains · tout · même · tel",
  "Déterminant::Numéral cardinal": "un · deux · trois · quatre… (série ouverte)",
  "Déterminant::Exclamatif ou interrogatif": "quel · quelle · quels · quelles",
  // Pronoms
  "Pronom::Personnel": "je · tu · il · elle · nous · vous · ils · elles · me · te · se · le · la · lui · leur · en · y · moi · toi · soi · eux",
  "Pronom::Possessif": "le mien · le tien · le sien · le nôtre · le vôtre · le leur (+ féminin / pluriel)",
  "Pronom::Démonstratif": "celui · celle · ceux · celles · celui-ci · celle-là · ce · ceci · cela · ça",
  "Pronom::Relatif": "qui · que · quoi · dont · où · lequel · duquel · auquel",
  "Pronom::Interrogatif": "qui · que · quoi · lequel · laquelle · lesquels · lesquelles",
  "Pronom::Indéfini": "on · personne · rien · tout · chacun · quelqu’un · certains · plusieurs · aucun · nul · l’un · l’autre",
  // Conjonctions
  "Conjonction::Coordination": "mais · ou · et · donc · or · ni · car",
  "Conjonction::Subordination": "que · si · quand · comme · lorsque · puisque · quoique · bien que · afin que · parce que",
};

// Note de bas de carte (astuce / piège / test) : libellé court coloré + texte.
function CardNote({ label, color, text }: { label: string; color: string; text: string }) {
  return (
    <p className="text-[0.84em] leading-relaxed text-on-surface/80">
      <span className={`mr-1.5 font-ui text-[10px] font-bold uppercase tracking-[0.1em] ${color}`}>{label}</span>
      <RichText text={text} />
    </p>
  );
}

function StepRow({ step, ficheSlug, onNavigateTab, isLast }: {
  step: Step;
  ficheSlug: string;
  onNavigateTab?: (tabId: string) => void;
  isLast: boolean;
}) {
  return (
    <div className={`flex items-start gap-4 py-4 ${isLast ? "" : "border-b border-outline-variant/40"}`}>
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-ui text-sm font-bold text-white">
        {step.number}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2.5 text-[0.97em] leading-relaxed text-on-surface/90">
        <div><RichText text={step.text} /></div>
        {step.example && (
          <div className="overflow-x-auto rounded-lg bg-primary px-4 py-3 font-mono text-[13px] leading-loose text-primary-content">
            {step.example.lines.map((line, i) => (
              <div key={i} className="whitespace-pre-wrap"><RichText text={line} /></div>
            ))}
          </div>
        )}
        {step.exampleNote && (
          <p className="font-ui text-xs text-on-surface-variant"><RichText text={step.exampleNote} /></p>
        )}
        {step.warn && (
          <div className="rounded-r-lg border-l-[3px] border-secondary/60 bg-secondary/[0.06] px-3 py-2 text-sm text-on-surface/80">
            <RichText text={step.warn} />
          </div>
        )}
        {step.extra?.map((b, i) => (
          <ProtoBlock key={i} block={b} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} />
        ))}
      </div>
    </div>
  );
}

export function ProtoBlock({ block, ficheSlug, onNavigateTab }: Props) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-[1em] leading-[1.75] text-on-surface/90">
          <RichText text={block.text} />
        </p>
      );

    case "callout": {
      const s = CALLOUT[block.variant];
      return (
        <div className={`rounded-r-lg border-l-[3px] ${s.border} ${s.bg} px-4 py-3.5`}>
          {block.title && (
            <p className={`mb-1.5 font-ui text-sm font-bold ${s.title}`}>
              {block.icon && <span className="mr-1.5">{block.icon}</span>}
              {block.title}
            </p>
          )}
          <div className="text-[0.98em] leading-relaxed text-on-surface/85">
            {!block.title && block.icon && <span className="mr-1.5">{block.icon}</span>}
            <RichText text={block.text} />
          </div>
        </div>
      );
    }

    case "subsection":
      return (
        <section className="flex flex-col gap-4">
          <h2 className="flex items-baseline gap-3 border-b border-outline-variant/60 pb-2.5 font-serif text-xl font-bold text-primary">
            <span className="text-2xl leading-none text-secondary">{block.number}</span>
            <span>{block.title}</span>
          </h2>
          <div className="flex flex-col gap-4">
            {block.blocks.map((b, i) => (
              <ProtoBlock key={i} block={b} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} />
            ))}
          </div>
        </section>
      );

    case "bullets":
      return (
        <ul className="flex flex-col gap-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-[0.98em] leading-relaxed text-on-surface/90">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              <span><RichText text={item} /></span>
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <figure className="flex flex-col gap-2">
          {block.title && <Label>{block.title}</Label>}
          <div className={`overflow-x-auto ${FEUILLE} overflow-hidden`}>
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-outline-variant/70 bg-surface-container/70">
                  {block.headers.map((h, i) => (
                    <th key={i} className="px-4 py-2.5 font-ui text-[11px] font-bold uppercase tracking-[0.08em] text-primary">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} className="border-b border-outline-variant/30 last:border-0">
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-2.5 align-top text-sm leading-relaxed text-on-surface/85">
                        <RichText text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </figure>
      );

    case "notionCardGrid":
      return (
        <div className={`grid gap-4 ${block.columns === 2 ? "sm:grid-cols-2" : ""}`}>
          {block.cards.map((card, i) => (
            <div key={i} className={`flex flex-col self-start overflow-hidden ${FEUILLE}`}>
              <div className="border-b border-outline-variant/60 px-4 pb-2 pt-3.5">
                <span className="font-serif text-lg font-bold text-primary">{card.title}</span>
                <span className="mt-1.5 block h-0.5 w-8 rounded bg-secondary" />
              </div>
              <div className="flex flex-col gap-3 p-4">
                <div className="text-[0.92em] leading-relaxed text-on-surface/85"><RichText text={card.definition} /></div>

                {/* Mini-tableau des sous-classes : libellé | exemple. Le cœur du
                    « plus visuel » demandé. */}
                <div className="overflow-hidden rounded-lg ring-1 ring-outline-variant/50">
                  <table className="w-full border-collapse text-left">
                    <tbody>
                      {card.exemples.map((ex, j) => {
                        const { label, rest } = splitExemple(ex);
                        const mots = (label && MOTS_DEMO[`${card.title}::${label}`]) || motsFromExemple(rest);
                        const cell = (
                          <div className="flex flex-col gap-1">
                            {mots && <span className="font-serif text-[0.92em] font-semibold text-primary">{mots}</span>}
                            {/* exemple + explication, en sourdine, pour ne pas perdre en qualité */}
                            <span className="text-[0.78em] leading-relaxed text-on-surface-variant">
                              <RichText text={rest} />
                            </span>
                          </div>
                        );
                        return (
                          <tr key={j} className="border-b border-outline-variant/30 last:border-0">
                            {label ? (
                              <>
                                <th
                                  scope="row"
                                  className="w-[34%] bg-surface-container/50 px-3 py-2 align-top font-ui text-[0.72em] font-bold leading-snug text-secondary"
                                >
                                  {label}
                                </th>
                                <td className="px-3 py-2 align-top">{cell}</td>
                              </>
                            ) : (
                              <td colSpan={2} className="px-3 py-2 align-top">{cell}</td>
                            )}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {card.astuce && <CardNote label="Astuce" color="text-secondary" text={card.astuce} />}
                {card.test && <CardNote label="Test" color="text-primary" text={card.test} />}
                {card.piege && <CardNote label="Piège" color="text-error/90" text={card.piege} />}
              </div>
            </div>
          ))}
        </div>
      );

    case "cardGrid":
      return (
        <div className={`grid grid-cols-1 gap-3 ${block.columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
          {block.cards.map((card, i) => (
            <div key={i} className="rounded-lg bg-white/70 p-3.5 ring-1 ring-outline-variant/60">
              {card.value && <div className="mb-1 font-serif text-2xl font-bold text-primary">{card.value}</div>}
              {card.title && <div className="mb-1.5 font-ui text-sm font-bold text-secondary">{card.title}</div>}
              <div className="flex flex-col gap-1">
                {card.lines.map((line, j) => (
                  <div key={j} className="text-xs leading-relaxed text-on-surface/75"><RichText text={line} /></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );

    case "highlightBox":
      return (
        <div className={`overflow-hidden ${FEUILLE}`}>
          <div className="flex items-center gap-2 border-b border-outline-variant/60 bg-primary/[0.04] px-4 py-3">
            {block.icon && <span>{block.icon}</span>}
            <Kicker>{block.title}</Kicker>
          </div>
          <div className="flex flex-col gap-3 p-4">
            {block.blocks.map((b, i) => (
              <ProtoBlock key={i} block={b} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} />
            ))}
          </div>
        </div>
      );

    case "formulaBlock":
      return (
        <div className="flex flex-col gap-1.5 rounded-lg bg-surface-container/70 p-4">
          {block.title && (
            <p className="mb-1 font-ui text-sm font-bold text-primary"><RichText text={block.title} /></p>
          )}
          {block.lines.map((line, i) => (
            <div key={i} className="font-mono text-sm leading-relaxed text-on-surface/85"><RichText text={line} /></div>
          ))}
          {block.note && (
            <p className="mt-1.5 text-xs italic text-on-surface-variant"><RichText text={block.note} /></p>
          )}
        </div>
      );

    case "rappelExpress":
      return (
        <div className={`overflow-hidden ${FEUILLE}`}>
          <div className="border-b border-outline-variant/60 bg-secondary/[0.05] px-4 py-3">
            <Kicker>{block.title}</Kicker>
          </div>
          <div className="flex flex-col gap-3 p-4">
            {block.blocks.map((b, i) => (
              <ProtoBlock key={i} block={b} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} />
            ))}
          </div>
        </div>
      );

    case "methodeGroup":
      return (
        <div className={`overflow-hidden ${FEUILLE}`}>
          <div className="flex items-baseline gap-3 border-b border-outline-variant/60 px-5 py-3.5">
            <span className="font-serif text-xl font-bold text-secondary">{block.number}</span>
            <span className="font-serif text-lg font-bold text-primary">{block.title}</span>
          </div>
          <div className="flex flex-col gap-3 p-5">
            {block.intro && (
              <div className="rounded-lg bg-primary/[0.04] px-4 py-3 text-sm leading-relaxed text-primary">
                <RichText text={block.intro} />
              </div>
            )}
            {block.preBlocks?.map((b, i) => (
              <ProtoBlock key={i} block={b} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} />
            ))}
            <div className="flex flex-col">
              {block.steps.map((step, i) => (
                <StepRow key={i} step={step} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} isLast={i === block.steps.length - 1} />
              ))}
            </div>
          </div>
        </div>
      );

    case "piegeCard": {
      // « En sourdine » (1b) : plus de carte deux colonnes ✗/✓, juste un
      // intertitre discret + filet coloré à gauche, en fil de lecture.
      const accent = PIEGE[block.variant];
      return (
        <div className="flex flex-col gap-2.5 border-l-[3px] border-secondary/40 py-1 pl-5">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <Kicker>Le piège de la fiche</Kicker>
            {block.badge && <Label>{block.badge}</Label>}
          </div>
          <p className={`font-serif text-lg font-bold ${accent}`}>{block.title}</p>
          <p className="text-[0.97em] leading-relaxed text-on-surface/85">
            <span className="mr-1.5 font-ui text-xs font-semibold text-error/90">On croit :</span>
            <RichText text={block.faux} />
          </p>
          <p className="text-[0.97em] leading-relaxed text-on-surface/85">
            <span className="mr-1.5 font-ui text-xs font-semibold text-secondary">En réalité :</span>
            <RichText text={block.vrai} />
          </p>
          {block.methode && (
            <p className="text-[0.9em] italic leading-relaxed text-on-surface-variant">
              <RichText text={block.methode} />
            </p>
          )}
        </div>
      );
    }

    case "primaireBox":
      return (
        <div className="flex flex-col gap-2 rounded-xl bg-secondary/[0.05] p-5 ring-1 ring-secondary/20">
          <Kicker>{block.title}</Kicker>
          <div className="flex flex-col gap-2 text-[15px] leading-relaxed text-on-surface/85">
            {block.text.split("\n\n").map((para, i) => (
              <p key={i}><RichText text={para} /></p>
            ))}
          </div>
        </div>
      );

    case "ctaBox":
      return (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface-container/60 px-5 py-4 ring-1 ring-outline-variant/50">
          <span className="font-ui text-sm font-semibold text-primary"><RichText text={block.text} /></span>
          <button type="button" onClick={() => onNavigateTab?.(block.targetTab)} className={BTN_SECONDARY}>
            {block.buttonLabel} <span aria-hidden>→</span>
          </button>
        </div>
      );

    // Blocs interactifs / non prototypés : on délègue au rendu réel pour rester
    // fonctionnel (banque d'exercices, corriger les copies, mindmap, etc.).
    default:
      return (
        <Fragment>
          <RenderBlock block={block} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} />
        </Fragment>
      );
  }
}
