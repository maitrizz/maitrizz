import { Fragment } from "react";
import { RichText } from "../richtext";
import { ExerciceCard } from "../ExerciceCard";
import { FlashcardDeck } from "../FlashcardDeck";
import { AutoEvalChecklist } from "../AutoEvalChecklist";
import { MindmapLite } from "../MindmapLite";
import { QuizBlock } from "../QuizBlock";
import type { Block, Step } from "../types";

// Pictogrammes thématiques sobres (au trait, dessinés main, sans emoji) servant
// d'ancre visuelle aux thèmes du recueil de références (notion 20). L'icône hérite
// de la couleur du conteneur via currentColor, pour rester cohérente avec la charte.
const PICTOGRAMS: Record<string, React.ReactNode> = {
  // Plume (écriture de soi : journal, mémoires, autobiographie)
  plume: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden>
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <path d="M16 8 2 22" />
      <path d="M17.5 15H9" />
    </svg>
  ),
};

type RenderBlockProps = {
  block: Block;
  ficheSlug: string;
  onNavigateTab?: (tabId: string) => void;
};

const CALLOUT_STYLES: Record<
  Extract<Block, { type: "callout" }>["variant"],
  { border: string; bg: string; text: string }
> = {
  info: { border: "border-primary", bg: "bg-primary/5", text: "text-primary" },
  success: { border: "border-secondary", bg: "bg-secondary/5", text: "text-secondary" },
  warning: { border: "border-accent", bg: "bg-accent/10", text: "text-accent" },
  danger: { border: "border-error", bg: "bg-error/10", text: "text-error" },
};

const CARDGRID_VARIANTS: Record<NonNullable<Extract<Block, { type: "cardGrid" }>["variant"]>, string> = {
  info: "bg-primary/5 border-primary/20",
  success: "bg-secondary/5 border-secondary/20",
  warning: "bg-accent/10 border-accent/20",
  neutral: "bg-base-200 border-base-300",
};

const CARDGRID_COLUMNS: Record<Extract<Block, { type: "cardGrid" }>["columns"], string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

const NOTIONCARD_COLUMNS: Record<Extract<Block, { type: "notionCardGrid" }>["columns"], string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
};

const HIGHLIGHT_HEADER: Record<Extract<Block, { type: "highlightBox" }>["variant"], string> = {
  marine: "bg-primary text-primary-content",
  neutral: "bg-neutral text-neutral-content",
};

const PIEGE_STYLES: Record<
  Extract<Block, { type: "piegeCard" }>["variant"],
  { border: string; header: string }
> = {
  rouge: { border: "border-error", header: "bg-error text-error-content" },
  orange: { border: "border-accent", header: "bg-accent text-accent-content" },
  bleu: { border: "border-primary", header: "bg-primary text-primary-content" },
};

const NIVEAU_STYLES: Record<Extract<Block, { type: "niveauBanner" }>["level"], string> = {
  echauffement: "bg-secondary/10 border-secondary",
  n1: "bg-secondary/10 border-secondary",
  n2: "bg-accent/10 border-accent",
  n3: "bg-error/10 border-error",
};

function StepRow({
  step,
  ficheSlug,
  onNavigateTab,
  isLast,
}: {
  step: Step;
  ficheSlug: string;
  onNavigateTab?: (tabId: string) => void;
  isLast: boolean;
}) {
  return (
    <div className={`flex gap-3 items-start py-3 ${isLast ? "" : "border-b border-base-200"}`}>
      <div className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold text-xs mt-0.5">
        {step.number}
      </div>
      <div className="flex-1 flex flex-col gap-2 text-sm leading-relaxed min-w-0">
        <div className="text-base-content/80">
          <RichText text={step.text} />
        </div>
        {step.example && (
          <div className="bg-neutral text-neutral-content rounded-lg px-4 py-3 text-xs sm:text-sm font-mono leading-loose overflow-x-auto">
            {step.example.lines.map((line, i) => (
              <div key={i} className="whitespace-pre">
                <RichText text={line} />
              </div>
            ))}
          </div>
        )}
        {step.exampleNote && (
          <p className="text-xs text-base-content/50">
            <RichText text={step.exampleNote} />
          </p>
        )}
        {step.warn && (
          <div className="bg-accent/10 border-l-[3px] border-accent rounded-r-lg px-3 py-2 text-xs text-base-content/80">
            <RichText text={step.warn} />
          </div>
        )}
        {step.extra?.map((b, i) => (
          <RenderBlock key={i} block={b} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} />
        ))}
      </div>
    </div>
  );
}

export function RenderBlock({ block, ficheSlug, onNavigateTab }: RenderBlockProps) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-base-content/80 leading-relaxed text-[15px]">
          <RichText text={block.text} />
        </p>
      );

    case "callout": {
      const style = CALLOUT_STYLES[block.variant];
      return (
        <div className={`border-l-4 ${style.border} ${style.bg} rounded-r-xl px-4 py-3.5`}>
          {block.title && (
            <p className={`text-sm font-bold mb-1.5 ${style.text}`}>
              {block.icon && <span className="mr-1.5">{block.icon}</span>}
              {block.title}
            </p>
          )}
          <div className="text-sm leading-relaxed text-base-content/80">
            {!block.title && block.icon && <span className="mr-1.5">{block.icon}</span>}
            <RichText text={block.text} />
          </div>
        </div>
      );
    }

    case "subsection":
      return (
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-bold text-primary pb-2 border-b-2 border-primary/10">
            {block.number} {block.title}
          </h3>
          <div className="flex flex-col gap-3">
            {block.blocks.map((b, i) => (
              <RenderBlock key={i} block={b} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} />
            ))}
          </div>
        </div>
      );

    case "bullets":
      return (
        <ul className="list-disc list-inside flex flex-col gap-1.5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="text-base-content/80 leading-relaxed text-[15px]">
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div className="flex flex-col gap-2">
          {block.title && (
            <p className="text-xs font-bold uppercase tracking-wide text-base-content/50">{block.title}</p>
          )}
          <div className="overflow-x-auto rounded-xl border border-base-300">
            <table className="table table-sm w-full">
              <thead>
                <tr>
                  {block.headers.map((h, i) => (
                    <th key={i} className="bg-primary text-primary-content text-xs font-semibold uppercase tracking-wide">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} className="border-t border-base-200">
                    {row.map((cell, j) => (
                      <td key={j} className="text-sm align-top py-2.5 text-base-content/80">
                        <RichText text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "cardGrid":
      return (
        <div className={`grid grid-cols-1 ${CARDGRID_COLUMNS[block.columns]} gap-3`}>
          {block.cards.map((card, i) => (
            <div
              key={i}
              className={`rounded-lg border p-3.5 ${CARDGRID_VARIANTS[card.variant ?? block.variant ?? "neutral"]}`}
            >
              {card.value && <div className="text-2xl font-black text-primary mb-1">{card.value}</div>}
              {card.title && <div className="font-bold text-sm text-base-content mb-1">{card.title}</div>}
              <div className="flex flex-col gap-0.5">
                {card.lines.map((line, j) => (
                  <div key={j} className="text-xs text-base-content/70 leading-relaxed">
                    <RichText text={line} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );

    case "notionCardGrid":
      return (
        <div className={`grid ${NOTIONCARD_COLUMNS[block.columns]} gap-3`}>
          {block.cards.map((card, i) => (
            <div key={i} className="self-start rounded-xl border-2 border-base-300 overflow-hidden flex flex-col">
              <div className="bg-primary text-primary-content px-3.5 py-2 text-sm font-bold">{card.title}</div>
              <div className="p-3.5 flex flex-col gap-2.5">
                <div className="text-sm text-base-content/80 leading-relaxed">
                  <RichText text={card.definition} />
                </div>
                {card.sousClasses && (
                  <div className="text-xs text-base-content/50 leading-relaxed">
                    <RichText text={card.sousClasses} />
                  </div>
                )}
                <div className="bg-secondary/5 border border-secondary/15 rounded-lg px-3 py-2.5 flex flex-col gap-1.5">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-secondary">
                    {card.exemples.length > 1 ? "Exemples" : "Exemple"}
                  </p>
                  <div
                    className={`flex flex-col gap-1.5 ${
                      card.exemples.length > 4 ? "sm:grid sm:grid-cols-2 sm:gap-x-4" : ""
                    }`}
                  >
                    {card.exemples.map((ex, j) => (
                      <p key={j} className="text-xs text-base-content/80 leading-relaxed">
                        <RichText text={ex} />
                      </p>
                    ))}
                  </div>
                </div>
                {card.astuce && (
                  <p className="text-xs text-accent leading-relaxed">
                    🔑 <RichText text={card.astuce} />
                  </p>
                )}
                {card.piege && (
                  <p className="text-xs text-error leading-relaxed">
                    ⚠️ <RichText text={card.piege} />
                  </p>
                )}
                {card.test && (
                  <p className="text-xs text-primary leading-relaxed">
                    💡 <RichText text={card.test} />
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      );

    case "referenceGrid":
      return (
        <div className="flex flex-col gap-3">
          {block.pictogram && PICTOGRAMS[block.pictogram] && (
            <div className="flex justify-center">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 text-secondary">
                {PICTOGRAMS[block.pictogram]}
              </span>
            </div>
          )}
          <div className={`grid ${NOTIONCARD_COLUMNS[block.columns]} gap-3`}>
          {block.cards.map((card, i) => (
            <div key={i} className="self-start rounded-xl border-2 border-base-300 overflow-hidden flex flex-col">
              <div className="bg-primary text-primary-content px-3.5 py-2 text-sm font-bold">{card.title}</div>
              <div className="p-3.5 flex flex-col gap-3">
                {card.genre && (
                  <span className="self-start rounded-full bg-secondary/10 text-secondary text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5">
                    {card.genre}
                  </span>
                )}
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wide text-secondary">En bref</span>
                  <div className="text-sm text-base-content/80 leading-relaxed">
                    <RichText text={card.enBref} />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wide text-secondary">Comment l&apos;utiliser</span>
                  <ul className="flex flex-col gap-1">
                    {card.commentUtiliser.map((u, j) => (
                      <li key={j} className="text-sm text-base-content/80 leading-relaxed flex gap-1.5">
                        <span className="text-secondary shrink-0">›</span>
                        <span><RichText text={u} /></span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-primary/5 border border-primary/15 rounded-lg px-3 py-2 flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wide text-primary">Formulation type</span>
                  <div className="text-sm italic text-base-content/80 leading-relaxed">
                    <RichText text={card.formulationType} />
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      );

    case "highlightBox":
      return (
        <div className="rounded-xl border-2 border-base-300 overflow-hidden">
          <div className={`px-4 py-2.5 text-sm font-bold flex items-center gap-2 ${HIGHLIGHT_HEADER[block.variant]}`}>
            {block.icon && <span>{block.icon}</span>}
            <span>{block.title}</span>
          </div>
          <div className="p-4 bg-base-100 flex flex-col gap-3">
            {block.blocks.map((b, i) => (
              <RenderBlock key={i} block={b} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} />
            ))}
          </div>
        </div>
      );

    case "comparisonGrid":
      return (
        <div className="rounded-xl border border-base-300 overflow-hidden grid grid-cols-[auto_1fr_1fr]">
          {block.rows.map((row, i) => (
            <Fragment key={i}>
              <div
                className={`px-3 py-3 bg-base-200 font-extrabold text-error flex items-center text-sm ${
                  i > 0 ? "border-t border-base-200" : ""
                }`}
              >
                {row.label}
              </div>
              <div
                className={`px-3 py-3 bg-secondary/10 text-sm leading-relaxed text-secondary ${
                  i > 0 ? "border-t border-base-200" : ""
                } ${!row.bad ? "col-span-2" : ""}`}
              >
                <RichText text={row.good} />
              </div>
              {row.bad && (
                <div
                  className={`px-3 py-3 bg-error/10 text-sm leading-relaxed text-error border-l border-base-200 ${
                    i > 0 ? "border-t border-base-200" : ""
                  }`}
                >
                  <RichText text={row.bad} />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      );

    case "formulaBlock":
      return (
        <div className="rounded-lg bg-base-200 p-4 flex flex-col gap-1.5">
          {block.title && (
            <p className="text-sm font-bold text-primary mb-1">
              <RichText text={block.title} />
            </p>
          )}
          {block.lines.map((line, i) => (
            <div key={i} className="font-mono text-sm leading-relaxed text-base-content/80">
              <RichText text={line} />
            </div>
          ))}
          {block.note && (
            <p className="text-xs text-base-content/50 italic mt-1.5">
              <RichText text={block.note} />
            </p>
          )}
        </div>
      );

    case "rappelExpress":
      return (
        <div className="rounded-xl border-2 border-accent overflow-hidden">
          <div className="bg-accent text-accent-content px-4 py-2.5 text-sm font-bold">{block.title}</div>
          <div className="p-4 bg-base-100 flex flex-col gap-3">
            {block.blocks.map((b, i) => (
              <RenderBlock key={i} block={b} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} />
            ))}
          </div>
        </div>
      );

    case "methodeGroup":
      return (
        <div className="rounded-xl border-2 border-primary overflow-hidden flex flex-col">
          <div className="bg-primary text-primary-content px-4 py-2.5 text-sm font-bold flex items-center gap-2">
            <span>{block.number}</span>
            <span>{block.title}</span>
          </div>
          <div className="p-4 bg-base-100 flex flex-col gap-3">
            {block.intro && (
              <div className="bg-primary/5 rounded-lg px-4 py-3 text-sm text-primary leading-relaxed">
                <RichText text={block.intro} />
              </div>
            )}
            {block.preBlocks?.map((b, i) => (
              <RenderBlock key={i} block={b} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} />
            ))}
            <div className="flex flex-col">
              {block.steps.map((step, i) => (
                <StepRow
                  key={i}
                  step={step}
                  ficheSlug={ficheSlug}
                  onNavigateTab={onNavigateTab}
                  isLast={i === block.steps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      );

    case "piegeCard": {
      const style = PIEGE_STYLES[block.variant];
      return (
        <div className={`rounded-xl border-2 ${style.border} overflow-hidden`}>
          <div className={`px-4 py-2.5 text-sm font-bold flex items-center justify-between gap-3 ${style.header}`}>
            <span>{block.title}</span>
            {block.badge && (
              <span className="bg-white/20 rounded px-2 py-0.5 text-xs font-semibold shrink-0">{block.badge}</span>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="bg-error/5 p-4 flex flex-col gap-2 border-b sm:border-b-0 sm:border-r border-base-200">
              <p className="text-[10px] font-black uppercase tracking-widest text-error">✗ Erreur fréquente</p>
              <p className="text-sm text-base-content/80 leading-relaxed">
                <RichText text={block.faux} />
              </p>
            </div>
            <div className="bg-secondary/5 p-4 flex flex-col gap-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-secondary">✓ À retenir</p>
              <p className="text-sm text-base-content/80 leading-relaxed">
                <RichText text={block.vrai} />
              </p>
            </div>
          </div>
          {block.methode && (
            <div className="bg-primary/5 border-t border-base-200 px-4 py-3 flex gap-2.5 items-start">
              <span className="text-base shrink-0">💡</span>
              <p className="text-xs text-base-content/70 leading-relaxed">
                <RichText text={block.methode} />
              </p>
            </div>
          )}
        </div>
      );
    }

    case "primaireBox":
      return (
        <div className="rounded-xl border-2 border-secondary bg-secondary/5 p-4 flex flex-col gap-2">
          <p className="font-bold text-secondary text-sm">{block.title}</p>
          <div className="text-sm text-base-content/80 leading-relaxed flex flex-col gap-2">
            {block.text.split("\n\n").map((para, i) => (
              <p key={i}>
                <RichText text={para} />
              </p>
            ))}
          </div>
        </div>
      );

    case "niveauBanner":
      return (
        <div className={`rounded-xl border-2 px-4 py-2.5 flex items-center gap-3 flex-wrap ${NIVEAU_STYLES[block.level]}`}>
          {block.stars && <span className="text-sm tracking-wider">{block.stars}</span>}
          <span className="text-sm font-semibold text-base-content">{block.label}</span>
          {block.sub && <span className="text-xs text-base-content/50 sm:ml-auto">{block.sub}</span>}
        </div>
      );

    case "exerciceCard":
      return <ExerciceCard block={block} />;

    case "flashcardDeck":
      return <FlashcardDeck cards={block.cards} />;

    case "nextFicheCallout":
      return (
        <div className="rounded-xl border-2 border-secondary bg-secondary/5 px-5 py-4 flex flex-col gap-1">
          <span className="font-bold text-secondary text-sm">
            ➜ <RichText text={block.title} />
          </span>
          <span className="text-sm text-base-content/70 leading-relaxed">
            <RichText text={block.text} />
          </span>
        </div>
      );

    case "bilanCounters":
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {block.counters.map((c, i) => (
            <div
              key={i}
              className={`rounded-xl border-2 p-4 text-center ${
                c.highlight ? "bg-secondary/10 border-secondary" : "bg-base-100 border-base-300"
              }`}
            >
              <div className={`text-2xl font-black ${c.highlight ? "text-secondary" : "text-primary"}`}>
                {c.value}
              </div>
              <div className="text-xs text-base-content/50 mt-1 leading-relaxed">{c.label}</div>
            </div>
          ))}
        </div>
      );

    case "autoEvalChecklist":
      return <AutoEvalChecklist ficheSlug={ficheSlug} items={block.items} />;

    case "quizBlock":
      return <QuizBlock block={block} ficheSlug={ficheSlug} />;

    case "sommaireApercu":
      return (
        <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-4 flex flex-col gap-3">
          <div>
            <p className="font-bold text-primary text-sm">
              <RichText text={block.title} />
            </p>
            {block.intro && (
              <p className="text-xs text-base-content/60 leading-relaxed mt-1">
                <RichText text={block.intro} />
              </p>
            )}
          </div>
          <ul className="flex flex-col gap-3">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="shrink-0 text-primary font-black text-lg leading-none">{item.number}</span>
                <div className="flex flex-col gap-0.5 pt-0.5">
                  <span className="text-sm font-semibold text-base-content">{item.title}</span>
                  <span className="text-xs text-base-content/60 leading-relaxed">
                    <RichText text={item.text} />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );

    case "mindmapLite":
      return <MindmapLite block={block} />;

    case "ctaBox":
      return (
        <div className="rounded-xl border-2 border-secondary bg-secondary/5 px-4 py-3 flex items-center justify-between gap-3 flex-wrap">
          <span className="text-sm font-semibold text-secondary">
            <RichText text={block.text} />
          </span>
          <button
            type="button"
            onClick={() => onNavigateTab?.(block.targetTab)}
            className="btn btn-secondary btn-sm"
          >
            {block.buttonLabel}
          </button>
        </div>
      );

    case "schema":
      return (
        <figure className="flex flex-col items-center gap-2 my-1">
          <div
            className="w-full rounded-xl border-2 border-base-300 bg-base-100 p-3 sm:p-4"
            style={block.maxWidth ? { maxWidth: block.maxWidth, marginInline: "auto" } : undefined}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={block.src} alt={block.alt} className="w-full h-auto" loading="lazy" />
          </div>
          {block.caption && (
            <figcaption className="text-xs text-base-content/60 leading-relaxed text-center max-w-2xl">
              <RichText text={block.caption} />
            </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
}
