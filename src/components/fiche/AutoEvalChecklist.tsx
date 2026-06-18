"use client";

import { useEffect, useState } from "react";
import { loadFicheProgress, formatReviewDate, type FicheProgress } from "./progress";

export function AutoEvalChecklist({
  ficheSlug,
  items,
}: {
  ficheSlug: string;
  items: { id: string; label: string }[];
}) {
  const storageKey = `maitrizz:autoeval:${ficheSlug}`;
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [mastery, setMastery] = useState<FicheProgress>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate persisted checklist from localStorage after mount
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      // localStorage indisponible (navigation privée...) : on ignore
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate quiz mastery from localStorage after mount
    setMastery(loadFicheProgress(ficheSlug));
  }, [ficheSlug, storageKey]);

  function toggle(id: string) {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // localStorage indisponible : on ignore la persistance
      }
      return next;
    });
  }

  const total = items.length;
  const done = items.filter((item) => checked[item.id]).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="rounded-xl border-2 border-base-300 overflow-hidden">
      <div className="bg-primary text-primary-content px-4 py-3 font-bold text-sm">
        Auto-évaluation : Cochez ce que vous maîtrisez
      </div>
      <div className="flex flex-col">
        {items.map((item) => {
          const m = mastery[item.id];
          const isChecked = !!checked[item.id];
          const mismatch = isChecked && m?.lastResult === "fail";

          return (
            <div key={item.id} className="flex flex-col gap-1.5 px-4 py-3 border-b border-base-200 last:border-b-0 text-sm">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm mt-0.5"
                  checked={isChecked}
                  onChange={() => toggle(item.id)}
                />
                <span className={isChecked ? "line-through text-secondary" : "text-base-content/80"}>
                  {item.label}
                </span>
              </label>
              {m ? (
                <div className={`text-xs pl-8 ${m.lastResult === "success" ? "text-secondary" : "text-error"}`}>
                  {m.lastResult === "success" ? "🟢" : "🔴"} Quiz éclair : {m.lastResult === "success" ? "réussi" : "à retravailler"} · prochaine révision {formatReviewDate(m.nextReview)}
                </div>
              ) : (
                <div className="text-xs pl-8 text-base-content/40">⚪ Pas encore testé par le Quiz éclair</div>
              )}
              {mismatch && (
                <div className="text-xs pl-8 text-accent">
                  ⚠️ Vous cochez cet objectif comme acquis, mais le Quiz éclair indique qu&apos;il est encore fragile.
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="px-4 py-3 bg-base-100">
        <div className="h-2 rounded-full bg-base-300 overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="text-xs text-base-content/50 mt-1.5 text-right">
          {done} / {total} objectifs validés
        </div>
      </div>
    </div>
  );
}
