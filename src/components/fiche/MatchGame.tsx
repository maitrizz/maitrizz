"use client";

import { useEffect, useMemo, useState } from "react";
import { RichText } from "./richtext";
import { recordQuizAnswer } from "./progress";
import type { Block } from "./types";

type MatchGameData = Extract<Block, { type: "matchGame" }>;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

/**
 * Jeu d'appariement au clic, en **entraînement continu** : à la fin d'un cycle
 * (toutes les paires vues), le pool est re-mélangé et l'on enchaîne, sans fin.
 * Les paires ratées reviennent en priorité au cycle suivant (révision espacée
 * légère). On s'arrête via « Terminer » pour voir son bilan.
 */
export function MatchGame({ block, ficheSlug }: { block: MatchGameData; ficheSlug: string }) {
  const roundSize = block.roundSize ?? 6;
  const leftLabel = block.leftLabel ?? "Œuvre";
  const rightLabel = block.rightLabel ?? "Réponse";

  // Le mélange utilise Math.random : on le réserve au client (après montage) pour
  // que le premier rendu corresponde au HTML serveur (pas de désync d'hydratation).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // `seed` change à chaque « Recommencer » ; `cycle` s'incrémente à chaque tour
  // complet du pool. Les deux pilotent la (re)génération des manches.
  const [seed, setSeed] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [roundIndex, setRoundIndex] = useState(0);

  // Paires encore mal sues : remontées en tête du cycle suivant, retirées dès
  // qu'elles sont retrouvées.
  const [missed, setMissed] = useState<Set<number>>(() => new Set());

  // Manches du cycle courant. On lit `missed` au moment de (re)construire le
  // cycle : les paires ratées passent devant. Recalculé quand le cycle change,
  // pas à chaque bonne réponse (sinon les manches se réorganiseraient en plein jeu).
  const rounds = useMemo(() => {
    const all = block.pairs.map((_, i) => i);
    if (!mounted) return chunk(all, roundSize);
    const weak = all.filter((i) => missed.has(i));
    const rest = all.filter((i) => !missed.has(i));
    return chunk([...shuffle(weak), ...shuffle(rest)], roundSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, seed, cycle, roundSize]);

  const pairIndices = rounds[roundIndex] ?? [];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const leftOrder = useMemo(() => (mounted ? shuffle(pairIndices) : pairIndices), [mounted, seed, cycle, roundIndex]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const rightOrder = useMemo(() => (mounted ? shuffle(pairIndices) : pairIndices), [mounted, seed, cycle, roundIndex]);

  const [selected, setSelected] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(() => new Set());
  const [wrong, setWrong] = useState<{ left: number; right: number } | null>(null);
  const [correct, setCorrect] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [stopped, setStopped] = useState(false);

  const roundDone = pairIndices.length > 0 && pairIndices.every((pi) => matched.has(pi));

  function record(ok: boolean) {
    if (block.objectifId) recordQuizAnswer(ficheSlug, block.objectifId, ok);
  }

  function clickLeft(pi: number) {
    if (matched.has(pi)) return;
    setSelected((s) => (s === pi ? null : pi));
  }

  function clickRight(pi: number) {
    if (matched.has(pi) || selected === null) return;
    setAttempts((a) => a + 1);
    if (pi === selected) {
      setMatched((prev) => new Set(prev).add(pi));
      setMissed((prev) => {
        if (!prev.has(pi)) return prev;
        const next = new Set(prev);
        next.delete(pi);
        return next;
      });
      setCorrect((c) => c + 1);
      setStreak((s) => {
        const ns = s + 1;
        setBestStreak((b) => (ns > b ? ns : b));
        return ns;
      });
      record(true);
      setSelected(null);
    } else {
      record(false);
      setMissed((prev) => new Set(prev).add(selected));
      setStreak(0);
      setWrong({ left: selected, right: pi });
      setSelected(null);
      setTimeout(() => setWrong(null), 650);
    }
  }

  // Avance vers la manche suivante ou, si le cycle est fini, en ouvre un nouveau.
  function advance() {
    setRoundsPlayed((n) => n + 1);
    setMatched(new Set());
    setSelected(null);
    setWrong(null);
    if (roundIndex + 1 >= rounds.length) {
      setCycle((c) => c + 1);
      setRoundIndex(0);
    } else {
      setRoundIndex((r) => r + 1);
    }
  }

  function restart() {
    setSeed((s) => s + 1);
    setCycle(0);
    setRoundIndex(0);
    setMissed(new Set());
    setMatched(new Set());
    setSelected(null);
    setWrong(null);
    setCorrect(0);
    setAttempts(0);
    setStreak(0);
    setBestStreak(0);
    setRoundsPlayed(0);
    setStopped(false);
  }

  if (stopped) {
    const pct = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;
    return (
      <div className="rounded-xl border-2 border-primary bg-primary/5 px-6 py-8 flex flex-col items-center gap-2 text-center">
        <span className="text-3xl">{pct >= 70 ? "🎉" : "💪"}</span>
        <p className="font-bold text-primary">
          {correct} bonnes associations sur {attempts} essais ({pct} %)
        </p>
        <p className="text-sm text-base-content/60">
          {roundsPlayed} manche{roundsPlayed > 1 ? "s" : ""} jouée{roundsPlayed > 1 ? "s" : ""} · meilleure série : {bestStreak}
        </p>
        <button type="button" onClick={restart} className="btn btn-primary btn-sm mt-2">
          🔄 Nouvel entraînement
        </button>
      </div>
    );
  }

  const cellClass = (state: "matched" | "wrong" | "selected" | "idle") =>
    `text-left text-sm rounded-lg border-2 px-3 py-2 leading-snug transition ${
      state === "matched"
        ? "border-secondary bg-secondary/10 text-secondary/70 cursor-default"
        : state === "wrong"
        ? "border-error bg-error/10"
        : state === "selected"
        ? "border-primary bg-primary/10 ring-2 ring-primary/30"
        : "border-base-300 hover:border-primary/50"
    }`;

  return (
    <div className="rounded-xl border-2 border-base-300 p-4 flex flex-col gap-4">
      {block.instructions && (
        <p className="text-sm text-base-content/70">
          <RichText text={block.instructions} />
        </p>
      )}
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs font-semibold text-base-content/60">
        <span>Manche {roundsPlayed + 1}</span>
        <span>Série : {streak}{bestStreak > 0 ? ` (record ${bestStreak})` : ""}</span>
        <span>Bonnes réponses : {correct}/{attempts}</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wide text-secondary">{leftLabel}</span>
          {leftOrder.map((pi) => {
            const state = matched.has(pi)
              ? "matched"
              : wrong?.left === pi
              ? "wrong"
              : selected === pi
              ? "selected"
              : "idle";
            return (
              <button key={pi} type="button" disabled={matched.has(pi)} onClick={() => clickLeft(pi)} className={cellClass(state)}>
                <RichText text={block.pairs[pi].left} />
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wide text-secondary">{rightLabel}</span>
          {rightOrder.map((pi) => {
            const state = matched.has(pi) ? "matched" : wrong?.right === pi ? "wrong" : "idle";
            return (
              <button key={pi} type="button" disabled={matched.has(pi)} onClick={() => clickRight(pi)} className={cellClass(state)}>
                <RichText text={block.pairs[pi].right} />
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <button type="button" onClick={() => setStopped(true)} className="btn btn-ghost btn-sm text-base-content/60">
          Terminer
        </button>
        {roundDone && (
          <button type="button" onClick={advance} className="btn btn-primary btn-sm">
            Manche suivante →
          </button>
        )}
      </div>
    </div>
  );
}
