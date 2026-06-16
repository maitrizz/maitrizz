"use client";

import { useState } from "react";
import { RichText } from "./richtext";
import type { Block, CorrectionItem } from "./types";

type ExerciceCardBlock = Extract<Block, { type: "exerciceCard" }>;

const VARIANT_STYLES: Record<ExerciceCardBlock["variant"], { border: string; header: string }> = {
  standard: { border: "border-secondary", header: "bg-secondary text-secondary-content" },
  crpe: { border: "border-primary", header: "bg-primary text-primary-content" },
  annale: { border: "border-primary border-[3px]", header: "bg-primary text-primary-content" },
  "err-type": { border: "border-error", header: "bg-error text-error-content" },
};

const LEVEL_STYLES: Record<NonNullable<ExerciceCardBlock["level"]>, { border: string; header: string }> = {
  echauffement: { border: "border-secondary", header: "bg-secondary text-secondary-content" },
  n1: { border: "border-secondary", header: "bg-secondary text-secondary-content" },
  n2: { border: "border-accent", header: "bg-accent text-accent-content" },
  n3: { border: "border-error", header: "bg-error text-error-content" },
};

function CorrectionLine({ item }: { item: CorrectionItem }) {
  switch (item.type) {
    case "line":
      return (
        <div className="flex gap-2 items-baseline text-sm leading-relaxed">
          {item.label && <span className="font-bold text-primary shrink-0">{item.label}</span>}
          <span className="text-base-content/80">
            <RichText text={item.text} />
          </span>
        </div>
      );

    case "paragraph":
      return (
        <p className="text-sm leading-relaxed text-base-content/80">
          <RichText text={item.text} />
        </p>
      );

    case "table":
      return (
        <div className="overflow-x-auto rounded-lg border border-base-300">
          <table className="table table-sm w-full">
            <thead>
              <tr>
                {item.headers.map((h, i) => (
                  <th key={i} className="bg-primary text-primary-content text-xs font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {item.rows.map((row, i) => (
                <tr key={i} className="border-t border-base-200">
                  {row.map((cell, j) => (
                    <td key={j} className="text-sm align-top py-2 text-base-content/80">
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "checklist":
      return (
        <ul className="flex flex-col gap-1">
          {item.items.map((entry, i) => (
            <li key={i} className="flex gap-2 items-baseline text-sm leading-relaxed">
              <span className={entry.bad ? "text-error font-bold shrink-0" : "text-secondary font-bold shrink-0"}>
                {entry.bad ? "✗" : "✓"}
              </span>
              <span className="text-base-content/80">
                <RichText text={entry.text} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "note":
      return (
        <div className="bg-accent/10 border border-accent/30 rounded-lg px-3 py-2 text-sm text-base-content/80">
          <RichText text={item.text} />
        </div>
      );

    default:
      return null;
  }
}

export function ExerciceCard({ block }: { block: ExerciceCardBlock }) {
  const [open, setOpen] = useState(false);
  const style = block.level ? LEVEL_STYLES[block.level] : VARIANT_STYLES[block.variant];

  return (
    <div className={`rounded-xl border-2 ${style.border} overflow-hidden`}>
      <div className={`px-4 py-2.5 text-sm font-bold flex items-center justify-between gap-3 ${style.header}`}>
        <span>{block.title}</span>
        {block.badge && (
          <span className="bg-white/20 rounded px-2 py-0.5 text-xs font-semibold shrink-0">{block.badge}</span>
        )}
      </div>

      {block.objectifTag && (
        <div className="px-4 py-1.5 bg-primary/5 border-b border-base-300 text-xs font-semibold text-primary flex items-center gap-1.5">
          <span>🎯</span>
          <span>{block.objectifTag}</span>
        </div>
      )}

      {block.enonce && (
        <div className="bg-base-200 px-4 py-3 text-sm text-base-content/80 border-b border-base-300 leading-relaxed">
          <RichText text={block.enonce} />
        </div>
      )}

      {block.enonceCode && (
        <div className="bg-neutral text-neutral-content px-4 py-3 font-mono text-sm leading-loose whitespace-pre-wrap border-b border-base-300">
          {block.enonceCode.map((line, i) => (
            <div key={i}>
              <RichText text={line} />
            </div>
          ))}
        </div>
      )}

      <div className="px-4 py-3 font-semibold text-sm bg-base-100 border-b border-base-300 leading-relaxed">
        <RichText text={block.question} />
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-4 py-2.5 bg-base-200 hover:bg-base-300 font-semibold text-sm flex items-center justify-between gap-2 transition-colors"
      >
        <span>✅ Corrigé</span>
        <span className={`transition-transform inline-block ${open ? "rotate-180" : ""}`}>▼</span>
      </button>

      {open && (
        <div className="px-4 py-3 bg-base-100 border-t border-base-300 flex flex-col gap-2.5">
          {block.correction.map((item, i) => (
            <CorrectionLine key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
