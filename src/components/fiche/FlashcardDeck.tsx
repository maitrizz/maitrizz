"use client";

import { useState } from "react";
import { RichText } from "./richtext";
import type { RichText as RichTextValue } from "./types";

type FlashcardItem = {
  question: RichTextValue;
  answer: RichTextValue;
  astuce?: RichTextValue;
};

export function FlashcardDeck({ cards }: { cards: FlashcardItem[] }) {
  const total = cards.length;
  const [queue, setQueue] = useState<number[]>(() => cards.map((_, i) => i));
  const [nextQueue, setNextQueue] = useState<number[]>([]);
  const [pos, setPos] = useState(0);
  const [round, setRound] = useState(1);
  const [revealed, setRevealed] = useState(false);
  const [mastered, setMastered] = useState<Set<number>>(() => new Set());
  const [struggled, setStruggled] = useState<Set<number>>(() => new Set());

  const done = pos >= queue.length;

  function respond(knewIt: boolean) {
    const cardIndex = queue[pos];
    const isLast = pos + 1 >= queue.length;
    const updatedNextQueue = knewIt ? nextQueue : [...nextQueue, cardIndex];

    if (knewIt) {
      setMastered((prev) => new Set(prev).add(cardIndex));
    } else {
      setStruggled((prev) => new Set(prev).add(cardIndex));
    }

    if (isLast && updatedNextQueue.length > 0) {
      setQueue(updatedNextQueue);
      setNextQueue([]);
      setPos(0);
      setRound((r) => r + 1);
    } else {
      setNextQueue(updatedNextQueue);
      setPos((p) => p + 1);
    }
    setRevealed(false);
  }

  function restart() {
    setQueue(cards.map((_, i) => i));
    setNextQueue([]);
    setPos(0);
    setRound(1);
    setRevealed(false);
    setMastered(new Set());
    setStruggled(new Set());
  }

  if (done) {
    return (
      <div className="rounded-2xl border-2 border-secondary bg-secondary/5 px-6 py-8 flex flex-col items-center gap-2 text-center">
        <span className="text-3xl">🎉</span>
        <p className="font-bold text-secondary">Toutes les cartes maîtrisées !</p>
        <p className="text-sm text-base-content/60">
          {total - struggled.size} / {total} maîtrisées dès la première lecture.
          {struggled.size > 0 && ` ${struggled.size} carte(s) ont demandé une relecture, c'est normal, l'essentiel est de les revoir.`}
        </p>
        <button type="button" onClick={restart} className="btn btn-primary btn-sm mt-2">
          🔄 Recommencer le deck
        </button>
      </div>
    );
  }

  const card = cards[queue[pos]];
  const pct = Math.round((mastered.size / total) * 100);

  return (
    <div className="rounded-2xl border-2 border-primary overflow-hidden">
      <div className="bg-primary text-primary-content px-4 py-3">
        <div className="flex items-center justify-between text-xs font-semibold gap-3">
          <span>
            Carte {pos + 1} / {queue.length}
            {round > 1 && " · cartes à revoir"}
          </span>
          <span>
            {mastered.size} / {total} maîtrisées
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-white/20 overflow-hidden mt-2">
          <div className="h-full bg-white rounded-full transition-all duration-300" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="bg-base-100 px-5 py-6 flex flex-col gap-4">
        <p className="text-base sm:text-lg font-bold text-center leading-relaxed">
          <RichText text={card.question} />
        </p>

        {!revealed ? (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="btn btn-primary btn-sm self-center"
          >
            👁️ Afficher la réponse
          </button>
        ) : (
          <>
            <div className="border-t border-base-200 pt-4 text-sm leading-relaxed text-base-content/80">
              <RichText text={card.answer} />
              {card.astuce && (
                <div className="bg-accent/15 text-base-content/80 rounded-lg px-3 py-2 mt-3 text-xs leading-relaxed">
                  <RichText text={card.astuce} />
                </div>
              )}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => respond(false)}
                className="btn btn-outline btn-accent btn-sm flex-1"
              >
                🔁 À revoir
              </button>
              <button
                type="button"
                onClick={() => respond(true)}
                className="btn btn-outline btn-secondary btn-sm flex-1"
              >
                ✅ Je savais
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
