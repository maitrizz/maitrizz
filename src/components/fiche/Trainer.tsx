"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { RichText } from "./richtext";
import { CorrectionLine } from "./ExerciceCard";
import type { Block, TrainerItem, TrainerModalite } from "./types";
import {
  loadTrainerState,
  recordTrainerAnswer,
  buildSessionQueue,
  computeStats,
  formatNextDue,
  type TrainerState,
} from "./trainerProgress";

type TrainerData = Extract<Block, { type: "trainer" }>;
type Phase = "loading" | "setup" | "running" | "done";
type ModaliteFilter = "tout" | TrainerModalite;

const MODALITE_LABELS: Record<TrainerModalite, string> = {
  rappel: "Rappel express",
  application: "Application",
  "type-concours": "Type concours",
  "detection-erreur": "Détection d'erreur",
};
const MODALITE_ORDER: TrainerModalite[] = ["application", "type-concours", "detection-erreur", "rappel"];

export function Trainer({
  block,
  ficheSlug,
  autoStart,
}: {
  block: TrainerData;
  ficheSlug: string;
  // "due" : démarre tout de suite une séance sur les seuls items échus (séance du jour),
  // en sautant l'écran de réglages. Absent : comportement libre habituel (écran setup).
  autoStart?: "due";
}) {
  const items = block.items;
  const sessionSize = block.sessionSize ?? 12;

  const [phase, setPhase] = useState<Phase>(autoStart ? "loading" : "setup");
  const [state, setState] = useState<TrainerState>({});
  const [modaliteFilter, setModaliteFilter] = useState<ModaliteFilter>("tout");
  const [sfFilter, setSfFilter] = useState<string>("tous");

  const [queue, setQueue] = useState<TrainerItem[]>([]);
  const [pos, setPos] = useState(0);

  // Réponse à l'item courant
  const [answered, setAnswered] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [picked, setPicked] = useState<number | boolean | null>(null);
  const [assign, setAssign] = useState<number[]>([]);
  const [revealed, setRevealed] = useState(false); // format « flashcard »

  // Suivi de session
  const [results, setResults] = useState<{ correct: boolean }[]>([]);
  const firstAnswered = useRef(new Set<string>());
  const requeued = useRef(new Set<string>());

  useEffect(() => {
    setState(loadTrainerState(ficheSlug));
  }, [ficheSlug]);

  // Modalités et objectifs réellement présents dans la banque
  const modalitesDispo = useMemo(
    () => MODALITE_ORDER.filter((m) => items.some((it) => it.modalite === m)),
    [items],
  );
  const savoirFaireDispo = useMemo(() => {
    const present = new Set(items.flatMap((it) => it.savoirFaire));
    return (block.savoirFaire ?? []).filter((o) => present.has(o.id));
  }, [items, block.savoirFaire]);

  function resetItemAnswer() {
    setAnswered(false);
    setLastCorrect(false);
    setPicked(null);
    setAssign([]);
    setRevealed(false);
  }

  function start(mod: ModaliteFilter = modaliteFilter, sf: string = sfFilter, forceAll = true) {
    const fresh = loadTrainerState(ficheSlug);
    const pool = items.filter(
      (it) =>
        (mod === "tout" || it.modalite === mod) &&
        (sf === "tous" || it.savoirFaire.includes(sf)),
    );
    const q = buildSessionQueue(pool, fresh, { limit: sessionSize, forceAll });
    firstAnswered.current.clear();
    requeued.current.clear();
    setState(fresh);
    setResults([]);
    setPos(0);
    resetItemAnswer();
    setQueue(q);
    // Séance du jour vide (rien d'échu) : on montre le bilan « tout est à jour ».
    setPhase(q.length === 0 ? (forceAll ? "setup" : "done") : "running");
  }

  // Séance du jour : dès le montage, on lance une série sur les seuls items échus.
  useEffect(() => {
    if (autoStart === "due") start("tout", "tous", false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStart, ficheSlug]);

  const current = queue[pos];
  const stats = useMemo(() => computeStats(items, state), [items, state]);
  const focusedSf = sfFilter === "tous" ? null : savoirFaireDispo.find((o) => o.id === sfFilter)?.label ?? null;

  function commit(correct: boolean, item: TrainerItem) {
    setAnswered(true);
    setLastCorrect(correct);
    setState(recordTrainerAnswer(ficheSlug, item.id, correct));
    if (!firstAnswered.current.has(item.id)) {
      firstAnswered.current.add(item.id);
      setResults((r) => [...r, { correct }]);
    }
    if (!correct && !requeued.current.has(item.id)) {
      requeued.current.add(item.id);
      setQueue((q) => [...q, item]);
    }
  }

  function pick(value: number | boolean, correct: boolean) {
    if (answered) return;
    setPicked(value);
    commit(correct, current);
  }

  function validateClasser() {
    if (answered || current.format !== "classer") return;
    commit(
      current.mots.every((m, i) => assign[i] === m.categorie),
      current,
    );
  }

  function next() {
    if (pos + 1 >= queue.length) {
      setPhase("done");
      return;
    }
    setPos((p) => p + 1);
    resetItemAnswer();
  }

  // ── Écrans ────────────────────────────────────────────────────────────────
  if (phase === "loading") {
    return (
      <div className="rounded-xl border-2 border-primary/20 bg-base-100 px-6 py-10 text-center text-sm text-base-content/50">
        Préparation de votre séance…
      </div>
    );
  }

  if (phase === "setup") {
    const chip = (active: boolean) =>
      `rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
        active ? "border-primary bg-primary text-primary-content" : "border-base-300 hover:border-primary/50"
      }`;
    const cibleActif = modaliteFilter !== "tout" || sfFilter !== "tous";
    const filteredCount = items.filter(
      (it) =>
        (modaliteFilter === "tout" || it.modalite === modaliteFilter) &&
        (sfFilter === "tous" || it.savoirFaire.includes(sfFilter)),
    ).length;
    return (
      <div className="rounded-xl border-2 border-primary overflow-hidden">
        <div className="bg-primary text-primary-content px-4 py-3 text-sm font-semibold">
          🎯 {block.title ? <RichText text={block.title} /> : "Entraînement"} · Révision express
        </div>
        <div className="bg-base-100 px-5 py-5 flex flex-col gap-4">
          <p className="text-sm text-base-content/70 leading-relaxed">
            Des questions courtes, corrigées sur le coup, qui reviennent espacées dans le temps.
          </p>

          {/* Mode de référence : l'action principale, mise en avant */}
          <button
            type="button"
            onClick={() => {
              setModaliteFilter("tout");
              setSfFilter("tous");
              start("tout", "tous");
            }}
            className="btn btn-primary h-auto w-full flex-col gap-0.5 py-3 normal-case shadow-md"
          >
            <span className="text-base font-extrabold">✨ Tout mélangé</span>
            <span className="text-xs font-normal opacity-90">Le mode de référence — c&apos;est lui qui vous évalue vraiment</span>
          </button>

          <div className="divider my-0 text-[11px] uppercase tracking-wide text-base-content/40">ou</div>

          {/* Ciblage : secondaire, mais clairement présenté comme un choix de remédiation */}
          <div className="flex flex-col gap-3 rounded-lg border-l-4 border-accent bg-base-200 px-4 py-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-base-content/80 flex items-center gap-1.5">🎯 Cibler un point</span>
              <p className="text-xs text-base-content/70 leading-relaxed">
                Vous bloquez sur quelque chose ? Entraînez-vous <span className="font-semibold">dessus uniquement</span>. C&apos;est
                volontairement plus simple (le thème est connu) : c&apos;est de la <span className="font-semibold">remédiation</span>.
                Le « tout mélangé » au-dessus reste le mode qui vous évalue vraiment.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wide text-base-content/50">Type de question</span>
              <div className="flex flex-wrap gap-2">
                <button type="button" className={chip(modaliteFilter === "tout")} onClick={() => setModaliteFilter("tout")}>
                  Tout
                </button>
                {modalitesDispo.map((m) => (
                  <button key={m} type="button" className={chip(modaliteFilter === m)} onClick={() => setModaliteFilter(m)}>
                    {MODALITE_LABELS[m]}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wide text-base-content/50">Ce que je travaille</span>
              <div className="flex flex-wrap gap-2">
                <button type="button" className={chip(sfFilter === "tous")} onClick={() => setSfFilter("tous")}>
                  Tout
                </button>
                {savoirFaireDispo.map((o) => (
                  <button key={o.id} type="button" className={chip(sfFilter === o.id)} onClick={() => setSfFilter(o.id)}>
                    {o.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 flex-wrap">
              <span className="text-xs text-base-content/50">
                {filteredCount} question{filteredCount > 1 ? "s" : ""} · {stats.masteredCount}/{stats.total} maîtrisées
              </span>
              <button
                type="button"
                onClick={() => start()}
                disabled={filteredCount === 0 || !cibleActif}
                className="btn btn-outline btn-primary btn-sm disabled:opacity-40"
              >
                Lancer le ciblage →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "done") {
    const seen = results.length;
    const ok = results.filter((r) => r.correct).length;
    const pct = seen > 0 ? Math.round((ok / seen) * 100) : 0;

    // Séance du jour lancée alors que plus rien n'était échu.
    if (seen === 0) {
      return (
        <div className="rounded-xl border-2 border-primary bg-primary/5 px-6 py-8 flex flex-col items-center gap-2 text-center">
          <span className="text-3xl">✅</span>
          <p className="font-bold text-primary">Tout est à jour</p>
          <p className="text-sm text-base-content/60">
            Rien à revoir dans l&apos;immédiat.{" "}
            {stats.nextDue ? `Prochaine révision ${formatNextDue(stats.nextDue)}.` : ""}
          </p>
          <button type="button" onClick={() => setPhase("setup")} className="btn btn-outline btn-primary btn-sm mt-2">
            S&apos;entraîner quand même
          </button>
        </div>
      );
    }

    return (
      <div className="rounded-xl border-2 border-primary bg-primary/5 px-6 py-8 flex flex-col items-center gap-2 text-center">
        <span className="text-3xl">{pct >= 70 ? "🎉" : "💪"}</span>
        <p className="font-bold text-primary">
          Série terminée : {ok} / {seen}
        </p>
        <p className="text-sm text-base-content/60">
          {pct >= 70
            ? "Bien joué. Les items réussis reviendront plus tard, plus espacés."
            : "Les items ratés reviendront vite : c'est comme ça qu'ils s'ancrent."}
        </p>
        <p className="text-xs text-base-content/50">
          {stats.masteredCount} / {stats.total} bien maîtrisés ·{" "}
          {stats.dueCount > 0 ? `${stats.dueCount} encore à revoir` : `prochaine échéance ${formatNextDue(stats.nextDue)}`}
        </p>
        <div className="flex gap-2 mt-2">
          <button type="button" onClick={() => start()} className="btn btn-primary btn-sm">
            Continuer
          </button>
          <button type="button" onClick={() => setPhase("setup")} className="btn btn-ghost btn-sm">
            Changer de série
          </button>
        </div>
      </div>
    );
  }

  // ── Item en cours ───────────────────────────────────────────────────────
  return (
    <div className="rounded-xl border-2 border-primary overflow-hidden">
      <div className="bg-primary text-primary-content px-4 py-3">
        <div className="flex items-center justify-between text-xs font-semibold gap-3">
          <span>🎯 {MODALITE_LABELS[current.modalite]}</span>
          <span>
            {Math.min(pos + 1, queue.length)} / {queue.length}
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-white/20 overflow-hidden mt-2">
          <div
            className="h-full bg-white rounded-full transition-all duration-300"
            style={{ width: `${((pos + (answered ? 1 : 0)) / queue.length) * 100}%` }}
          />
        </div>
      </div>

      {focusedSf && (
        <div className="bg-base-200 px-4 py-1.5 text-xs text-base-content/60 border-b border-base-300">
          🎯 Remédiation · <span className="font-semibold">{focusedSf}</span> — c&apos;est plus simple (le thème est connu), c&apos;est voulu.
        </div>
      )}

      <div className="bg-base-100 px-5 py-5 flex flex-col gap-4">
        <ItemPrompt item={current} />

        <ItemInput
          item={current}
          answered={answered}
          picked={picked}
          assign={assign}
          setAssign={setAssign}
          revealed={revealed}
          onReveal={() => setRevealed(true)}
          onPick={pick}
          onValidateClasser={validateClasser}
        />

        {answered && (
          <div className="flex flex-col gap-2">
            <div
              className={`rounded-lg px-4 py-2.5 text-sm font-semibold ${
                lastCorrect ? "bg-success/10 text-success" : "bg-error/10 text-error"
              }`}
            >
              {lastCorrect ? "✅ Bonne réponse !" : "❌ Pas tout à fait."}
            </div>
            {/* La bonne réponse est déjà affichée (option en vert). Inutile de la
                répéter : on ne montre que le « pourquoi » (le test). */}
            <div className="bg-base-200 rounded-lg px-4 py-3 text-sm leading-relaxed text-base-content/70">
              <RichText text={current.feedback} />
            </div>
            <button type="button" onClick={next} className="btn btn-primary btn-sm self-end">
              {pos + 1 >= queue.length ? "Voir le bilan" : "Suivant →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Énoncé de l'item ────────────────────────────────────────────────────────
function ItemPrompt({ item }: { item: TrainerItem }) {
  const enonce =
    item.format === "qcm" || item.format === "vrai-faux" || item.format === "ouvert" ? item.enonce : undefined;

  const prompt =
    item.format === "qcm" || item.format === "flashcard" || item.format === "ouvert"
      ? item.question
      : item.format === "vrai-faux"
        ? item.affirmation
        : item.consigne;

  return (
    <div className="flex flex-col gap-2">
      {enonce && (
        <div className="bg-neutral text-neutral-content rounded-lg px-4 py-2.5 text-sm leading-relaxed">
          <RichText text={enonce} />
        </div>
      )}
      <p className="text-sm sm:text-base font-semibold leading-relaxed">
        <RichText text={prompt} />
      </p>
    </div>
  );
}

// ── Zone de réponse selon le format ─────────────────────────────────────────
function ItemInput({
  item,
  answered,
  picked,
  assign,
  setAssign,
  revealed,
  onReveal,
  onPick,
  onValidateClasser,
}: {
  item: TrainerItem;
  answered: boolean;
  picked: number | boolean | null;
  assign: number[];
  setAssign: (a: number[]) => void;
  revealed: boolean;
  onReveal: () => void;
  onPick: (value: number | boolean, correct: boolean) => void;
  onValidateClasser: () => void;
}) {
  if (item.format === "qcm" || item.format === "intrus") {
    const options = item.format === "qcm" ? item.options : item.mots;
    const correctIndex = item.format === "qcm" ? item.correct : item.intrus;
    return (
      <div className="flex flex-col gap-2">
        {options.map((option, i) => {
          let style = "border-base-300 hover:border-primary/40";
          if (answered) {
            if (i === correctIndex) style = "border-success bg-success/10 text-success";
            else if (i === picked) style = "border-error bg-error/10 text-error";
            else style = "border-base-300 opacity-50";
          }
          return (
            <button
              key={i}
              type="button"
              disabled={answered}
              onClick={() => onPick(i, i === correctIndex)}
              className={`text-left rounded-lg border-2 px-4 py-2.5 text-sm leading-relaxed transition-colors ${style}`}
            >
              <RichText text={option} />
              {answered && i === correctIndex && <span className="ml-2">✓</span>}
              {answered && i === picked && i !== correctIndex && <span className="ml-2">✗</span>}
            </button>
          );
        })}
      </div>
    );
  }

  if (item.format === "vrai-faux") {
    const choices: { label: string; value: boolean }[] = [
      { label: "Vrai", value: true },
      { label: "Faux", value: false },
    ];
    return (
      <div className="flex gap-2">
        {choices.map((c) => {
          let style = "border-base-300 hover:border-primary/40";
          if (answered) {
            if (c.value === item.correct) style = "border-success bg-success/10 text-success";
            else if (c.value === picked) style = "border-error bg-error/10 text-error";
            else style = "border-base-300 opacity-50";
          }
          return (
            <button
              key={c.label}
              type="button"
              disabled={answered}
              onClick={() => onPick(c.value, c.value === item.correct)}
              className={`flex-1 rounded-lg border-2 px-4 py-2.5 text-sm font-semibold transition-colors ${style}`}
            >
              {c.label}
              {answered && c.value === item.correct && <span className="ml-2">✓</span>}
            </button>
          );
        })}
      </div>
    );
  }

  if (item.format === "flashcard") {
    return <FlashcardInput item={item} answered={answered} revealed={revealed} onReveal={onReveal} onPick={onPick} />;
  }

  if (item.format === "ouvert") {
    return <OpenInput item={item} answered={answered} revealed={revealed} onReveal={onReveal} onPick={onPick} />;
  }

  // format « classer »
  const allAssigned = item.mots.length > 0 && item.mots.every((_, i) => assign[i] !== undefined && assign[i] >= 0);
  return (
    <div className="flex flex-col gap-3">
      {item.mots.map((m, i) => {
        const chosen = assign[i];
        const isCorrect = chosen === m.categorie;
        return (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="rounded bg-base-200 px-2 py-0.5">
                <RichText text={m.mot} />
              </span>
              {answered && <span>{isCorrect ? "✓" : "✗"}</span>}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {item.categories.map((cat, ci) => {
                let style = "border-base-300 hover:border-primary/40";
                if (answered) {
                  if (ci === m.categorie) style = "border-success bg-success/10 text-success";
                  else if (ci === chosen) style = "border-error bg-error/10 text-error";
                  else style = "border-base-300 opacity-40";
                } else if (ci === chosen) {
                  style = "border-primary bg-primary/10 text-primary";
                }
                return (
                  <button
                    key={ci}
                    type="button"
                    disabled={answered}
                    onClick={() => {
                      const nextAssign = [...assign];
                      nextAssign[i] = ci;
                      setAssign(nextAssign);
                    }}
                    className={`rounded-lg border-2 px-3 py-1.5 text-xs font-semibold transition-colors ${style}`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
      {!answered && (
        <button
          type="button"
          disabled={!allAssigned}
          onClick={onValidateClasser}
          className="btn btn-primary btn-sm self-end disabled:opacity-50"
        >
          Valider
        </button>
      )}
    </div>
  );
}

// ── Zone de réponse OUVERTE (type concours) ─────────────────────────────────
// On rédige dans un encart, on révèle la réponse-modèle + le détail, on s'auto-évalue
// (la note pilote la boîte de Leitner, comme une flashcard). Mireroir de la carte d'« Appliquer ».
function OpenInput({
  item,
  answered,
  revealed,
  onReveal,
  onPick,
}: {
  item: Extract<TrainerItem, { format: "ouvert" }>;
  answered: boolean;
  revealed: boolean;
  onReveal: () => void;
  onPick: (value: boolean, correct: boolean) => void;
}) {
  const [answer, setAnswer] = useState("");

  if (!revealed) {
    return (
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-base-content/60 flex items-center justify-between gap-2">
          <span>Votre réponse</span>
          <span className="font-normal text-base-content/40">Entrée : à la ligne · deux fois : valider</span>
        </label>
        <textarea
          className="textarea textarea-bordered w-full text-sm leading-relaxed min-h-[80px]"
          placeholder="Rédigez votre analyse : la nature, puis la justification (le test appliqué)…"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              const before = e.currentTarget.value.slice(0, e.currentTarget.selectionStart ?? 0);
              if (before.endsWith("\n") && answer.trim() !== "") {
                e.preventDefault();
                setAnswer(answer.replace(/\n+$/, ""));
                onReveal();
              }
            }
          }}
        />
        <button
          type="button"
          disabled={answer.trim() === ""}
          onClick={onReveal}
          className="btn btn-outline btn-primary btn-sm self-start mt-1 disabled:opacity-50"
        >
          Voir le corrigé
        </button>
        {answer.trim() === "" && (
          <span className="text-xs text-base-content/40">Rédigez d&apos;abord votre réponse, même imparfaite.</span>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 flex flex-col gap-2.5">
        {item.reponseType && (
          <div className="text-sm leading-relaxed">
            <span className="text-[11px] font-bold uppercase tracking-wide text-primary mr-1.5">Réponse type</span>
            <RichText text={item.reponseType} />
          </div>
        )}
        {item.explication && item.explication.length > 0 && (
          <div className="flex flex-col gap-2 text-sm border-t border-primary/15 pt-2.5 text-base-content/80">
            {item.explication.map((it, i) => (
              <CorrectionLine key={i} item={it} />
            ))}
          </div>
        )}
      </div>
      {!answered && (
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onPick(false, false)}
            className="flex-1 rounded-lg border-2 border-base-300 px-4 py-2.5 text-sm font-semibold hover:border-error/40"
          >
            À retravailler
          </button>
          <button
            type="button"
            onClick={() => onPick(true, true)}
            className="flex-1 rounded-lg border-2 border-base-300 px-4 py-2.5 text-sm font-semibold hover:border-success/40"
          >
            Réussi
          </button>
        </div>
      )}
    </div>
  );
}

// ── Carte de rappel (flashcard) ─────────────────────────────────────────────
// On tente de répondre dans un encart (rappel actif, plus efficace que la simple
// relecture mentale), on révèle la réponse, puis on s'auto-évalue. L'encart est
// FACULTATIF : le rappel purement mental reste valide (bouton toujours actif).
function FlashcardInput({
  item,
  answered,
  revealed,
  onReveal,
  onPick,
}: {
  item: Extract<TrainerItem, { format: "flashcard" }>;
  answered: boolean;
  revealed: boolean;
  onReveal: () => void;
  onPick: (value: boolean, correct: boolean) => void;
}) {
  const [answer, setAnswer] = useState("");

  if (!revealed) {
    return (
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-base-content/60 flex items-center justify-between gap-2">
          <span>Votre réponse (facultatif)</span>
          <span className="font-normal text-base-content/40">Entrée : à la ligne · deux fois : valider</span>
        </label>
        <textarea
          className="textarea textarea-bordered w-full text-sm leading-relaxed min-h-[64px]"
          placeholder="Tentez de répondre de mémoire, puis vérifiez…"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              const before = e.currentTarget.value.slice(0, e.currentTarget.selectionStart ?? 0);
              if (before.endsWith("\n") && answer.trim() !== "") {
                e.preventDefault();
                setAnswer(answer.replace(/\n+$/, ""));
                onReveal();
              }
            }
          }}
        />
        <button type="button" onClick={onReveal} className="btn btn-outline btn-primary btn-sm self-start mt-1">
          Voir la réponse
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-base-200 rounded-lg px-4 py-3 text-sm leading-relaxed">
        <RichText text={item.answer} />
      </div>
      {!answered && (
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onPick(false, false)}
            className="flex-1 rounded-lg border-2 border-base-300 px-4 py-2.5 text-sm font-semibold hover:border-error/40"
          >
            À revoir
          </button>
          <button
            type="button"
            onClick={() => onPick(true, true)}
            className="flex-1 rounded-lg border-2 border-base-300 px-4 py-2.5 text-sm font-semibold hover:border-success/40"
          >
            Je savais
          </button>
        </div>
      )}
    </div>
  );
}
