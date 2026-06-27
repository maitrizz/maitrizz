"use client";

import { useEffect, useState } from "react";
import { RichText } from "./richtext";
import type { Block } from "./types";

// « Corriger des erreurs » : on se met dans le siège du CORRECTEUR. On tranche d'abord
// (« c'est juste » / « à corriger »), puis on dévoile si on avait raison + la bonne
// analyse + une ligne « côté correcteur » (si elle apporte). Vue d'ensemble + statut
// par copie (persisté), comme « Appliquer ». Certaines copies sont justes, pour ne pas
// répondre « à corriger » machinalement.

type CorrigerCopiesData = Extract<Block, { type: "corrigerCopies" }>;
type Copie = CorrigerCopiesData["copies"][number];
type Result = "ok" | "ko";

function storageKey(slug: string) {
  return `maitrizz:copies:${slug}`;
}
function loadResults(slug: string): Record<string, Result> {
  try {
    const raw = localStorage.getItem(storageKey(slug));
    return raw ? (JSON.parse(raw) as Record<string, Result>) : {};
  } catch {
    return {};
  }
}
function saveResults(slug: string, results: Record<string, Result>) {
  try {
    localStorage.setItem(storageKey(slug), JSON.stringify(results));
  } catch {
    // localStorage indisponible : on ignore
  }
}

export function CorrigerCopies({ block, ficheSlug }: { block: CorrigerCopiesData; ficheSlug: string }) {
  const copies = block.copies;
  const [results, setResults] = useState<Record<string, Result>>({});

  useEffect(() => {
    setResults(loadResults(ficheSlug));
  }, [ficheSlug]);

  function judge(id: string, correct: boolean) {
    setResults((prev) => {
      const next = { ...prev, [id]: correct ? ("ok" as const) : ("ko" as const) };
      saveResults(ficheSlug, next);
      return next;
    });
  }

  const ok = copies.filter((c) => results[c.id] === "ok").length;
  const ko = copies.filter((c) => results[c.id] === "ko").length;
  const todo = copies.length - ok - ko;

  return (
    <div className="rounded-xl border-2 border-primary overflow-hidden">
      <div className="bg-primary text-primary-content px-4 py-3 text-sm font-semibold">
        📝 {block.title ? <RichText text={block.title} /> : "Corriger des erreurs"} · Corriger des erreurs
      </div>

      <div className="bg-base-100 px-5 py-5 flex flex-col gap-4">
        {block.intro && (
          <p className="text-sm text-base-content/70 leading-relaxed">
            <RichText text={block.intro} />
          </p>
        )}

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-lg bg-base-200 px-4 py-2.5 text-xs font-semibold">
          <span className="text-base-content/50 uppercase tracking-wide text-[11px]">Où j&apos;en suis</span>
          <span className="text-success">● {ok} réussies</span>
          <span className="text-warning">◐ {ko} à revoir</span>
          <span className="text-base-content/40">○ {todo} à voir</span>
        </div>

        <div className="flex flex-col gap-3">
          {copies.map((c, i) => (
            <CopieItem key={c.id} index={i} copie={c} result={results[c.id]} onJudge={judge} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CopieItem({
  copie,
  index,
  result,
  onJudge,
}: {
  copie: Copie;
  index: number;
  result: Result | undefined;
  onJudge: (id: string, correct: boolean) => void;
}) {
  // null = pas encore jugé ; true = « c'est juste » ; false = « à corriger »
  const [judged, setJudged] = useState<boolean | null>(null);
  const decided = judged !== null;
  const correct = decided && judged === copie.correcte;

  function judge(choice: boolean) {
    if (decided) return;
    setJudged(choice);
    onJudge(copie.id, choice === copie.correcte);
  }

  const statusBorder = result === "ok" ? "border-l-success" : result === "ko" ? "border-l-warning" : "border-l-base-300";
  const statusLabel =
    result === "ok"
      ? { txt: "réussie", cls: "text-success" }
      : result === "ko"
        ? { txt: "à revoir", cls: "text-warning" }
        : { txt: "à voir", cls: "text-base-content/40" };

  function judgeBtn(choice: boolean, label: string) {
    const chosen = judged === choice;
    let cls = "border-base-300 hover:border-primary/50";
    if (decided && chosen) cls = correct ? "border-success bg-success/10 text-success" : "border-error bg-error/10 text-error";
    else if (decided) cls = "opacity-40 border-base-300";
    return (
      <button
        type="button"
        disabled={decided}
        onClick={() => judge(choice)}
        className={`flex-1 rounded-lg border-2 px-4 py-2 text-sm font-semibold transition-colors ${cls}`}
      >
        {label}
      </button>
    );
  }

  return (
    <div className={`rounded-lg border border-base-300 border-l-4 ${statusBorder} px-4 py-4 flex flex-col gap-3`}>
      <div className="flex items-center">
        <span className="text-[11px] font-semibold text-base-content/50 uppercase tracking-wide">Copie de candidat nº {index + 1}</span>
        <span className={`ml-auto text-[11px] font-semibold ${statusLabel.cls}`}>{statusLabel.txt}</span>
      </div>

      <div className="bg-neutral text-neutral-content rounded-lg px-4 py-2.5 text-sm leading-relaxed">
        <RichText text={copie.copie} />
      </div>

      <p className="text-sm font-semibold">Cette analyse est-elle juste ?</p>
      <div className="flex gap-2">
        {judgeBtn(true, "C'est juste")}
        {judgeBtn(false, "À corriger")}
      </div>

      {decided && (
        <div className="flex flex-col gap-2.5">
          <div
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${
              correct ? "bg-success/10 text-success" : "bg-error/10 text-error"
            }`}
          >
            {correct ? "✅ Bien vu." : "❌ Raté."}
          </div>
          <div className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 flex flex-col gap-2 text-sm leading-relaxed">
            <RichText text={copie.verdict} />
            {copie.coteProf && (
              <div className="border-t border-primary/15 pt-2 text-base-content/80">
                <span className="font-semibold">🔎 Côté correcteur : </span>
                <RichText text={copie.coteProf} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
