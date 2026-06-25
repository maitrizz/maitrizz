"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { RichText } from "./richtext";
import type { Block } from "./types";

type ExamRunnerData = Extract<Block, { type: "examRunner" }>;
type Part = ExamRunnerData["parts"][number];
type Question = Part["questions"][number];

type Mode = "examen" | "entrainement";
type Phase = "intro" | "compose" | "done";
type QEval = { revealed?: boolean; got?: boolean[] };

type RunnerState = {
  phase: Phase;
  mode: Mode;
  since: number | null; // début du segment de chrono en cours (null = en pause)
  accumulatedMs: number; // temps total accumulé hors segment en cours
  activePart: string; // partId actif (ou "bilan" en phase corrigé)
  partTime: Record<string, number>; // temps accumulé par partie
  answers: Record<string, string>;
  evals: Record<string, QEval>;
};
type Attempt = { date: string; note: number };

const DEFAULT: RunnerState = {
  phase: "intro",
  mode: "examen",
  since: null,
  accumulatedMs: 0,
  activePart: "",
  partTime: {},
  answers: {},
  evals: {},
};

// Clé versionnée : « v2 » après la refonte « une partie à la fois ». Bumper la
// version invalide proprement les anciennes sauvegardes (forme/état différents)
// au lieu de les restaurer dans un état incohérent (ex. corrigé déjà dévoilé).
function key(s: string) {
  return `maitrizz:runner:v2:${s}`;
}
function historyKey(s: string) {
  return `maitrizz:runner-history:${s}`;
}
function loadState(slug: string): RunnerState {
  try {
    const raw = localStorage.getItem(key(slug));
    if (raw) {
      const p = JSON.parse(raw) as Record<string, unknown>;
      if (p && typeof p === "object" && typeof p.phase === "string") {
        return {
          ...DEFAULT,
          ...(p as Partial<RunnerState>),
          // Au chargement, le chrono est toujours EN PAUSE : il ne compte pas le
          // temps où la page était fermée. On le relance en reprenant la tentative.
          since: null,
          partTime: (p.partTime as Record<string, number>) ?? {},
          activePart: (p.activePart as string) ?? "",
          answers: (p.answers as Record<string, string>) ?? {},
          evals: (p.evals as Record<string, QEval>) ?? {},
        };
      }
    }
  } catch {
    /* localStorage indisponible ou illisible */
  }
  return DEFAULT;
}
function loadHistory(slug: string): Attempt[] {
  try {
    const raw = localStorage.getItem(historyKey(slug));
    if (raw) return JSON.parse(raw) as Attempt[];
  } catch {
    /* ignore */
  }
  return [];
}

// Temps « live » = base accumulée + segment en cours (si le chrono tourne).
// Isolé au niveau module pour que l'appel à Date.now() reste hors du rendu.
function live(base: number, since: number | null): number {
  return base + (since ? Date.now() - since : 0);
}

// Solde le temps du segment en cours dans le total ET dans la partie active.
function accrue(s: RunnerState): RunnerState {
  if (s.since == null) return s;
  const now = Date.now();
  const delta = now - s.since;
  return {
    ...s,
    accumulatedMs: s.accumulatedMs + delta,
    partTime: { ...s.partTime, [s.activePart]: (s.partTime[s.activePart] ?? 0) + delta },
    since: now,
  };
}

function qMax(q: Question): number {
  return q.elements.reduce((a, e) => a + e.points, 0);
}
function qAwarded(q: Question, e: QEval | undefined): number | null {
  if (!e?.revealed) return null;
  const got = e.got ?? [];
  return q.elements.reduce((a, el, i) => a + (got[i] ? el.points : 0), 0);
}
function fmt(n: number): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(1).replace(".", ",");
}
function clock(ms: number): string {
  const t = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}
function mins(ms: number): number {
  return Math.round(ms / 60000);
}
function shortTitle(t: string): string {
  return t.replace(/—.*/, "").trim();
}
function fmtDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  } catch {
    return iso;
  }
}
function appreciation(note: number): { label: string; tone: "success" | "warning" | "danger" } {
  if (note >= 14) return { label: "Très bon niveau", tone: "success" };
  if (note >= 10) return { label: "Au-dessus de la barre", tone: "success" };
  if (note >= 7) return { label: "À consolider", tone: "warning" };
  if (note >= 5) return { label: "Fragile : à retravailler", tone: "warning" };
  return { label: "À retravailler en priorité", tone: "danger" };
}
const TONE: Record<"success" | "warning" | "danger", string> = {
  success: "border-secondary bg-secondary/10 text-secondary",
  warning: "border-accent bg-accent/10 text-accent",
  danger: "border-error bg-error/10 text-error",
};
const BAR: Record<"success" | "warning" | "danger", string> = {
  success: "bg-secondary",
  warning: "bg-accent",
  danger: "bg-error",
};

/**
 * Épreuve blanche « tout-en-un », pensée pour le confort : on choisit son mode
 * (examen / entraînement) puis on compose une PARTIE À LA FOIS (texte à gauche,
 * questions à droite), en circulant par des onglets de partie. Le temps par
 * partie se mesure automatiquement. À la fin : correction (réponse vs attendu,
 * auto-évaluation cochable), note estimée /20, bilan par partie, récap du temps,
 * plan de révision et historique. État persisté en localStorage par fiche.
 */
export function ExamRunner({ block, ficheSlug }: { block: ExamRunnerData; ficheSlug: string }) {
  const [state, setState] = useState<RunnerState>(DEFAULT);
  const [history, setHistory] = useState<Attempt[]>([]);
  const [, setNow] = useState(0);
  const [textOverlay, setTextOverlay] = useState(false);
  const [justSaved, setJustSaved] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  // `entered` n'est PAS persisté : on arrive donc toujours sur l'écran de départ.
  // La progression reste sauvegardée et se reprend via le bouton « Reprendre ».
  const [entered, setEntered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setState(loadState(ficheSlug));
    setHistory(loadHistory(ficheSlug));
  }, [ficheSlug]);

  useEffect(() => {
    if (entered && state.phase === "compose" && state.since) {
      intervalRef.current = setInterval(() => setNow(Date.now()), 1000);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [entered, state.phase, state.since]);

  const allQ = useMemo(() => block.parts.flatMap((p) => p.questions), [block.parts]);
  const maxNote = useMemo(() => allQ.reduce((a, q) => a + qMax(q), 0), [allQ]);

  function persist(next: RunnerState) {
    setState(next);
    try {
      localStorage.setItem(key(ficheSlug), JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }
  function setAnswer(id: string, v: string) {
    persist({ ...state, answers: { ...state.answers, [id]: v } });
  }
  function reveal(id: string) {
    persist({ ...state, evals: { ...state.evals, [id]: { ...state.evals[id], revealed: true } } });
  }
  function toggle(q: Question, i: number) {
    const cur = state.evals[q.id]?.got ?? q.elements.map(() => false);
    const next = cur.slice();
    next[i] = !next[i];
    persist({ ...state, evals: { ...state.evals, [q.id]: { revealed: true, got: next } } });
  }
  function start(mode: Mode) {
    persist({ ...DEFAULT, mode, phase: "compose", since: Date.now(), activePart: block.parts[0]?.id ?? "" });
    setConfirmReset(false);
    setEntered(true);
  }
  function resume() {
    setEntered(true);
    // on relance le chrono pour une compo en cours (il était en pause au chargement)
    if (state.phase === "compose" && !state.since) persist({ ...state, since: Date.now() });
  }
  function goToPart(id: string) {
    persist({ ...accrue(state), activePart: id });
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function pauseResume() {
    if (state.since) persist({ ...accrue(state), since: null });
    else persist({ ...state, since: Date.now() });
  }
  function finish() {
    // On bascule en correction sur la PREMIÈRE partie (et non le bilan) : le
    // candidat passe en revue chaque réponse pour s'auto-évaluer ; le bilan
    // (onglet dédié) se consulte ensuite, une fois les questions cochées.
    persist({ ...accrue(state), since: null, phase: "done", activePart: block.parts[0]?.id ?? "bilan" });
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function restart() {
    persist(DEFAULT);
    setJustSaved(false);
    setConfirmReset(false);
    setEntered(false); // retour à l'écran de départ
  }
  function saveAttempt() {
    const next = [{ date: new Date().toISOString(), note: note20 }, ...history].slice(0, 12);
    setHistory(next);
    try {
      localStorage.setItem(historyKey(ficheSlug), JSON.stringify(next));
    } catch {
      /* ignore */
    }
    setJustSaved(true);
  }

  const elapsed = live(state.accumulatedMs, state.since);
  const totalMs = block.totalMinutes * 60_000;
  const remaining = totalMs - elapsed;
  const overtime = remaining <= 0;
  const done = state.phase === "done";

  function partTimeLive(partId: string): number {
    return live(state.partTime[partId] ?? 0, state.activePart === partId ? state.since : null);
  }

  const score = allQ.reduce((a, q) => a + (qAwarded(q, state.evals[q.id]) ?? 0), 0);
  const note20 = maxNote > 0 ? Math.round((score / maxNote) * 20 * 10) / 10 : 0;
  const app = appreciation(note20);
  const faibles = allQ.filter((q) => {
    const a = qAwarded(q, state.evals[q.id]);
    return a !== null && a < qMax(q) && q.revise;
  });

  function correctionShown(q: Question): boolean {
    return done || (state.mode === "entrainement" && Boolean(state.evals[q.id]?.revealed));
  }
  function answeredCount(part: Part): number {
    return part.questions.filter((q) => (state.answers[q.id] ?? "").trim().length > 0).length;
  }

  function textContent() {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-base-content">{block.text.title}</p>
        {block.text.paragraphs.map((p, i) => (
          <p key={i} className="text-sm text-base-content/85 leading-relaxed">
            <RichText text={p} />
          </p>
        ))}
        {block.text.note && (
          <p className="text-xs text-base-content/55 italic leading-relaxed">
            <RichText text={block.text.note} />
          </p>
        )}
      </div>
    );
  }

  // ════════════════════════════ ÉCRAN DE DÉPART ════════════════════════════
  // On arrive TOUJOURS ici (entered = false au montage), quel que soit l'état
  // sauvegardé : entrée cohérente. La tentative en cours se reprend explicitement.
  const resumable = state.phase === "compose" || state.phase === "done";
  if (!entered) {
    return (
      <div className="flex flex-col gap-4">
        {block.intro && (
          <p className="text-sm text-base-content/70 leading-relaxed">
            <RichText text={block.intro} />
          </p>
        )}
        {/* Reprendre une tentative existante */}
        {resumable && (
          <div className="rounded-2xl border-2 border-secondary/40 bg-secondary/5 p-5 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex flex-col gap-0.5 flex-1">
              <span className="font-bold text-base-content">
                {state.phase === "done" ? "Vous avez une tentative terminée" : "Vous avez une tentative en cours"}
              </span>
              <span className="text-xs text-base-content/65">
                {state.phase === "done"
                  ? `Note estimée : ${fmt(note20)} / 20. Vous pouvez revoir votre correction.`
                  : `Mode ${state.mode}. Reprenez là où vous en étiez.`}
              </span>
            </div>
            <button type="button" onClick={resume} className="btn btn-secondary btn-sm">
              {state.phase === "done" ? "Revoir la correction" : "Reprendre"}
            </button>
          </div>
        )}
        {/* Comment ça marche */}
        <div className="rounded-2xl border-2 border-base-300 bg-base-100 p-5 flex flex-col gap-3">
          <p className="font-black text-base-content">Comment ça marche</p>
          <ol className="flex flex-col sm:flex-row gap-3">
            {(
              [
                ["1", "Composez", "Les trois parties, une à la fois, le texte toujours sous les yeux."],
                ["2", "Gérez le temps", `${block.totalMinutes} min au total ; le chronomètre suit chaque partie.`],
                ["3", "Corrigez-vous", "Note estimée /20, bilan par partie et plan de révision."],
              ] as const
            ).map(([n, t, d]) => (
              <li key={n} className="flex-1 flex gap-2">
                <span className="shrink-0 w-6 h-6 rounded-full bg-primary text-primary-content text-xs font-black flex items-center justify-center">
                  {n}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-bold text-base-content">{t}</span>
                  <span className="text-xs text-base-content/60 leading-relaxed">{d}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Choix du mode */}
        <div className="rounded-2xl border-2 border-primary/25 bg-primary/5 p-5 sm:p-6 flex flex-col gap-4">
          <p className="font-black text-base-content text-lg">Choisissez votre mode pour commencer</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => start("examen")}
              className="rounded-xl border-2 border-primary bg-base-100 p-4 text-left hover:shadow-md transition-all flex flex-col gap-1"
            >
              <span className="font-bold text-primary">Mode examen</span>
              <span className="text-xs text-base-content/65 leading-relaxed">
                La correction n&apos;apparaît qu&apos;à la fin, une fois vos réponses verrouillées. Conditions réelles.
              </span>
              <span className="text-xs font-bold text-primary mt-1">Commencer · le chronomètre démarre →</span>
            </button>
            <button
              type="button"
              onClick={() => start("entrainement")}
              className="rounded-xl border-2 border-base-300 bg-base-100 p-4 text-left hover:border-secondary hover:shadow-md transition-all flex flex-col gap-1"
            >
              <span className="font-bold text-secondary">Mode entraînement</span>
              <span className="text-xs text-base-content/65 leading-relaxed">
                Vous pouvez révéler la correction question par question, au fur et à mesure. Pour réviser.
              </span>
              <span className="text-xs font-bold text-secondary mt-1">Commencer · le chronomètre démarre →</span>
            </button>
          </div>
          {history.length > 0 && (
            <p className="text-xs text-base-content/55">
              Dernière tentative : {fmt(history[0].note)} / 20 ({fmtDate(history[0].date)}).
            </p>
          )}
        </div>
      </div>
    );
  }

  // ═══════════════════════════ COMPOSER / CORRIGÉ ═══════════════════════════
  const activeKey = done ? state.activePart || "bilan" : state.activePart || block.parts[0]?.id || "";
  const activePart = block.parts.find((p) => p.id === activeKey) ?? null;
  const activeIndex = block.parts.findIndex((p) => p.id === activeKey);
  const nextPart = activeIndex >= 0 && activeIndex < block.parts.length - 1 ? block.parts[activeIndex + 1] : null;

  return (
    <div className="flex flex-col gap-4">
      {/* Barre supérieure : chrono (ou note) + actions */}
      <div className="sticky top-2 z-20 rounded-xl border-2 border-primary/30 bg-base-100/95 backdrop-blur px-4 py-3 flex items-center justify-between gap-3 shadow-sm flex-wrap">
        {done ? (
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wide text-base-content/55 font-semibold">Note estimée</span>
            <span className="text-2xl font-black tabular-nums leading-none text-primary">
              {fmt(note20)} <span className="text-base text-base-content/50">/ 20</span>
            </span>
          </div>
        ) : (
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wide text-base-content/55 font-semibold">
              {overtime ? "Temps dépassé" : "Temps restant"}
            </span>
            <span className={`text-2xl font-black tabular-nums leading-none ${overtime ? "text-error" : "text-base-content"}`}>
              {clock(remaining)}
            </span>
          </div>
        )}
        <div className="flex items-center gap-2 flex-wrap">
          {!done && (
            <button type="button" onClick={pauseResume} className="btn btn-ghost btn-sm">
              {state.since ? "Pause" : "Reprendre"}
            </button>
          )}
          {confirmReset ? (
            <span className="flex items-center gap-1 text-xs text-base-content/70">
              Effacer vos réponses ?
              <button type="button" onClick={restart} className="btn btn-error btn-xs">
                Oui
              </button>
              <button type="button" onClick={() => setConfirmReset(false)} className="btn btn-ghost btn-xs">
                Annuler
              </button>
            </span>
          ) : (
            <button type="button" onClick={() => setConfirmReset(true)} className="btn btn-ghost btn-sm">
              Recommencer
            </button>
          )}
          {!done && (
            <button type="button" onClick={finish} className="btn btn-primary btn-sm">
              Terminer
            </button>
          )}
        </div>
      </div>

      {/* Repère « quoi faire » */}
      <p className="text-xs text-base-content/60 leading-relaxed">
        {done
          ? "Évaluez chaque réponse : cochez ce que vous aviez. Votre note s'affiche en haut et dans l'onglet Bilan."
          : state.mode === "entrainement"
            ? "Répondez aux questions, partie par partie. Vous pouvez révéler la correction quand vous voulez. Terminez pour le bilan."
            : "Répondez aux questions de chaque partie. La correction n'apparaîtra qu'après « Terminer »."}
      </p>

      {/* Onglets de partie */}
      <div className="flex flex-wrap gap-2">
        {block.parts.map((part) => {
          const active = activeKey === part.id;
          const ans = answeredCount(part);
          const pa = part.questions.reduce((a, q) => a + (qAwarded(q, state.evals[q.id]) ?? 0), 0);
          return (
            <button
              key={part.id}
              type="button"
              onClick={() => goToPart(part.id)}
              className={`rounded-full border-2 px-3 py-1.5 text-xs font-semibold transition-colors ${
                active ? "border-primary bg-primary text-primary-content" : "border-base-300 text-base-content/70 hover:border-primary/40"
              }`}
            >
              {shortTitle(part.title)}
              <span className={active ? "opacity-80" : "opacity-50"}>
                {" "}
                · {done ? `${fmt(pa)}/${fmt(part.points)}` : `${ans}/${part.questions.length}`}
              </span>
            </button>
          );
        })}
        {done && (
          <button
            type="button"
            onClick={() => goToPart("bilan")}
            className={`rounded-full border-2 px-3 py-1.5 text-xs font-semibold transition-colors ${
              activeKey === "bilan" ? "border-primary bg-primary text-primary-content" : "border-base-300 text-base-content/70 hover:border-primary/40"
            }`}
          >
            Bilan · {fmt(note20)}/20
          </button>
        )}
      </div>

      {/* Espace de travail : texte (gauche) + contenu actif (droite) */}
      <div className="lg:grid lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-6 lg:items-start">
        {/* Texte : colonne collante (desktop) */}
        <aside className="hidden lg:block lg:sticky lg:top-24 rounded-xl border-2 border-base-300 bg-base-100 p-4 lg:max-h-[78vh] overflow-auto">
          {textContent()}
        </aside>
        {/* Texte : repliable (mobile) */}
        <details className="lg:hidden rounded-xl border-2 border-base-300 bg-base-100 p-4 mb-4">
          <summary className="cursor-pointer text-sm font-bold text-base-content">Le texte support</summary>
          <div className="mt-3">{textContent()}</div>
        </details>

        <div className="flex flex-col gap-4">
          {/* ─────────── Vue : une partie ─────────── */}
          {activePart && (
            <section className="flex flex-col gap-3">
              <div className="flex items-baseline justify-between gap-2 pb-1 border-b-2 border-base-300">
                <h3 className="text-sm font-black text-base-content">{activePart.title}</h3>
                <span className="text-xs font-semibold text-base-content/55 tabular-nums whitespace-nowrap">
                  {activePart.points} pts · conseillé {activePart.recommendedMinutes} min
                  {!done && state.partTime[activePart.id] != null && ` · ${mins(partTimeLive(activePart.id))} min`}
                </span>
              </div>
              {activePart.intro && (
                <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-3 text-sm text-base-content/80 leading-relaxed">
                  <RichText text={activePart.intro} />
                </div>
              )}

              {activePart.questions.map((q) => {
                const ev = state.evals[q.id];
                const a = qAwarded(q, ev);
                const max = qMax(q);
                const shown = correctionShown(q);
                return (
                  <div key={q.id} className="rounded-xl border-2 border-base-300 bg-base-100 p-4 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-sm font-bold text-base-content">
                        <RichText text={q.label} />
                      </span>
                      <span className="shrink-0 text-xs font-semibold text-base-content/55 whitespace-nowrap tabular-nums">
                        {a !== null ? `${fmt(a)} / ${fmt(max)}` : `${fmt(max)} pt`}
                      </span>
                    </div>
                    <p className="text-sm text-base-content/80 leading-relaxed">
                      <RichText text={q.enonce} />
                    </p>

                    <label className="flex flex-col gap-1">
                      <span className="text-xs font-semibold text-base-content/55">Votre réponse</span>
                      <textarea
                        value={state.answers[q.id] ?? ""}
                        onChange={(e) => setAnswer(q.id, e.target.value)}
                        readOnly={done}
                        placeholder={q.answerPrompt ?? "Rédigez votre réponse ici."}
                        rows={q.answerRows ?? 2}
                        className={`textarea textarea-bordered textarea-sm w-full text-sm leading-relaxed ${done ? "bg-base-200 text-base-content/80" : ""}`}
                      />
                    </label>

                    {!shown ? (
                      state.mode === "entrainement" && (
                        <button type="button" onClick={() => reveal(q.id)} className="btn btn-outline btn-sm self-start">
                          Voir la réponse attendue
                        </button>
                      )
                    ) : (
                      <>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-xs font-semibold text-base-content/70">
                            Réponse attendue : cochez ce que vous aviez
                          </span>
                          <ul className="flex flex-col gap-1.5">
                            {q.elements.map((el, i) => {
                              const checked = ev?.got?.[i] ?? false;
                              return (
                                <li key={i}>
                                  <label className="flex items-start gap-2 cursor-pointer text-sm">
                                    <input
                                      type="checkbox"
                                      checked={checked}
                                      onChange={() => toggle(q, i)}
                                      className="checkbox checkbox-sm checkbox-primary mt-0.5"
                                    />
                                    <span className="text-base-content/85 leading-relaxed">
                                      <RichText text={el.label} />{" "}
                                      <span className="text-base-content/40">({fmt(el.points)} pt)</span>
                                    </span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        {q.note && (
                          <div className="rounded-lg bg-primary/5 border border-primary/15 p-3">
                            <p className="text-sm text-base-content/85 leading-relaxed">
                              <RichText text={q.note} />
                            </p>
                          </div>
                        )}
                        {a !== null && a < max && q.revise && (
                          <p className="text-xs text-base-content/65">
                            À revoir : <RichText text={`[${q.revise.label}](fiche:${q.revise.slug})`} />
                          </p>
                        )}
                      </>
                    )}
                  </div>
                );
              })}

              {/* Navigation bas de partie */}
              <div className="flex items-center justify-between gap-2 pt-1">
                {activeIndex > 0 ? (
                  <button type="button" onClick={() => goToPart(block.parts[activeIndex - 1].id)} className="btn btn-ghost btn-sm">
                    ← {shortTitle(block.parts[activeIndex - 1].title)}
                  </button>
                ) : (
                  <span />
                )}
                {nextPart ? (
                  <button type="button" onClick={() => goToPart(nextPart.id)} className="btn btn-outline btn-sm">
                    {shortTitle(nextPart.title)} →
                  </button>
                ) : !done ? (
                  <button type="button" onClick={finish} className="btn btn-primary btn-sm">
                    Terminer et me corriger
                  </button>
                ) : (
                  <button type="button" onClick={() => goToPart("bilan")} className="btn btn-primary btn-sm">
                    Voir le bilan →
                  </button>
                )}
              </div>
            </section>
          )}

          {/* ─────────── Vue : bilan ─────────── */}
          {done && activeKey === "bilan" && (
            <div className={`rounded-2xl border-2 p-5 flex flex-col gap-4 ${TONE[app.tone]}`}>
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <span className="text-lg font-black">Votre bilan</span>
                <span className="text-2xl font-black tabular-nums">{fmt(note20)} / 20</span>
              </div>
              <p className="text-sm font-semibold">{app.label}</p>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold">Par partie</span>
                {block.parts.map((part) => {
                  const pa = part.questions.reduce((a, q) => a + (qAwarded(q, state.evals[q.id]) ?? 0), 0);
                  const pct = part.points > 0 ? (pa / part.points) * 100 : 0;
                  const tone = pct >= 60 ? "success" : pct >= 40 ? "warning" : "danger";
                  return (
                    <div key={part.id} className="flex flex-col gap-1">
                      <div className="flex justify-between text-xs">
                        <span className="opacity-80">{part.title}</span>
                        <span className="tabular-nums font-semibold">
                          {fmt(pa)} / {fmt(part.points)}
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-base-300/60 overflow-hidden">
                        <div className={`h-full ${BAR[tone]} transition-all duration-500`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">Gestion du temps</span>
                <p className="text-sm opacity-80">Total : {mins(elapsed)} min sur {block.totalMinutes} conseillées.</p>
                <ul className="flex flex-col gap-0.5">
                  {block.parts.map((part) => {
                    const t = state.partTime[part.id] ?? 0;
                    return (
                      <li key={part.id} className="text-sm tabular-nums">
                        <span className="opacity-80">{part.title} : </span>
                        {t > 0 ? (
                          <>
                            <span className="font-semibold">{mins(t)} min</span>
                            <span className="opacity-70"> (conseillé {part.recommendedMinutes})</span>
                            {mins(t) > part.recommendedMinutes + 3 && <span className="text-xs"> ▲ dépassé</span>}
                          </>
                        ) : (
                          <span className="opacity-60">non visitée</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {faibles.length > 0 ? (
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold">Votre plan de révision :</span>
                  <ul className="flex flex-col gap-1">
                    {faibles.map((q) => (
                      <li key={q.id} className="text-sm">
                        <span className="opacity-80">{q.label} — </span>
                        <RichText text={`[${q.revise!.label}](fiche:${q.revise!.slug})`} />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-sm opacity-80">Aucun point faible majeur. Refaites le sujet dans une semaine pour confirmer.</p>
              )}

              <div className="flex flex-wrap items-center gap-2">
                <button type="button" onClick={saveAttempt} className="btn btn-sm btn-primary">
                  Enregistrer cette tentative
                </button>
                {justSaved && <span className="text-xs opacity-80">Tentative enregistrée.</span>}
              </div>
              {history.length > 0 && (
                <div className="flex flex-col gap-1.5 border-t border-current/15 pt-3">
                  <span className="text-sm font-semibold">Vos tentatives</span>
                  <ul className="flex flex-col gap-1">
                    {history.map((att, i) => {
                      const prev = history[i + 1];
                      const delta = prev ? att.note - prev.note : null;
                      return (
                        <li key={att.date} className="text-sm flex items-center gap-2 tabular-nums">
                          <span className="opacity-70">{fmtDate(att.date)}</span>
                          <span className="font-semibold">{fmt(att.note)} / 20</span>
                          {delta !== null && delta !== 0 && (
                            <span className="text-xs opacity-80">
                              {delta > 0 ? "▲ +" : "▼ "}
                              {fmt(Math.abs(delta))}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              {block.tips && block.tips.length > 0 && (
                <div className="flex flex-col gap-1 border-t border-current/15 pt-3">
                  <span className="text-sm font-semibold">Pour progresser</span>
                  <ul className="flex flex-col gap-1 list-disc pl-4">
                    {block.tips.map((t, i) => (
                      <li key={i} className="text-sm opacity-90 leading-relaxed">
                        <RichText text={t} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bouton flottant « Revoir le texte » (mobile) */}
      <button
        type="button"
        onClick={() => setTextOverlay(true)}
        className="lg:hidden fixed bottom-5 right-5 z-30 btn btn-primary btn-sm shadow-lg"
      >
        Revoir le texte
      </button>
      {textOverlay && (
        <div className="lg:hidden fixed inset-0 z-40 bg-base-100 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b-2 border-base-300">
            <span className="font-bold text-base-content">Le texte support</span>
            <button type="button" onClick={() => setTextOverlay(false)} className="btn btn-ghost btn-sm">
              Fermer
            </button>
          </div>
          <div className="p-4 overflow-auto">{textContent()}</div>
        </div>
      )}
    </div>
  );
}
