"use client";

import { useState } from "react";
import { RichText } from "./richtext";
import { recordQuizAnswer } from "./progress";
import type { Block } from "./types";

type QuizBlockData = Extract<Block, { type: "quizBlock" }>;

export function QuizBlock({ block, ficheSlug }: { block: QuizBlockData; ficheSlug: string }) {
  const questions = block.questions;
  const total = questions.length;
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[index];
  const answered = selected !== null;
  const isCorrect = answered && selected === question.correctIndex;

  function choose(optionIndex: number) {
    if (answered) return;
    setSelected(optionIndex);
    const correct = optionIndex === question.correctIndex;
    if (correct) setScore((s) => s + 1);
    recordQuizAnswer(ficheSlug, question.objectifId, correct);
  }

  function next() {
    if (index + 1 >= total) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((score / total) * 100);
    return (
      <div className="rounded-xl border-2 border-primary bg-primary/5 px-6 py-8 flex flex-col items-center gap-2 text-center">
        <span className="text-3xl">{pct >= 70 ? "🎉" : "💪"}</span>
        <p className="font-bold text-primary">Score : {score} / {total}</p>
        <p className="text-sm text-base-content/60">
          {pct >= 70
            ? "Bien joué ! Continuez sur cette lancée."
            : "Pas de panique, c'est l'occasion de repérer ce qu'il reste à retravailler."}
        </p>
        <button type="button" onClick={restart} className="btn btn-primary btn-sm mt-2">
          🔄 Recommencer le quiz
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border-2 border-primary overflow-hidden">
      <div className="bg-primary text-primary-content px-4 py-3">
        <div className="flex items-center justify-between text-xs font-semibold gap-3">
          <span>⚡ Quiz éclair</span>
          <span>Question {index + 1} / {total}</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/20 overflow-hidden mt-2">
          <div
            className="h-full bg-white rounded-full transition-all duration-300"
            style={{ width: `${((index + (answered ? 1 : 0)) / total) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-base-100 px-5 py-5 flex flex-col gap-4">
        <p className="text-sm sm:text-base font-semibold leading-relaxed">
          <RichText text={question.question} />
        </p>

        <div className="flex flex-col gap-2">
          {question.options.map((option, i) => {
            let style = "border-base-300 hover:border-primary/40";
            if (answered) {
              if (i === question.correctIndex) {
                style = "border-secondary bg-secondary/10 text-secondary";
              } else if (i === selected) {
                style = "border-error bg-error/10 text-error";
              } else {
                style = "border-base-300 opacity-50";
              }
            }
            return (
              <button
                key={i}
                type="button"
                onClick={() => choose(i)}
                disabled={answered}
                className={`text-left rounded-lg border-2 px-4 py-2.5 text-sm leading-relaxed transition-colors ${style}`}
              >
                <RichText text={option} />
                {answered && i === question.correctIndex && <span className="ml-2">✓</span>}
                {answered && i === selected && i !== question.correctIndex && <span className="ml-2">✗</span>}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="flex flex-col gap-2">
            <div
              className={`rounded-lg px-4 py-2.5 text-sm font-semibold ${
                isCorrect ? "bg-secondary/10 text-secondary" : "bg-error/10 text-error"
              }`}
            >
              {isCorrect ? "✅ Bonne réponse !" : "❌ Pas tout à fait."}
            </div>
            {question.explanation && (
              <div className="bg-base-200 rounded-lg px-4 py-3 text-sm leading-relaxed text-base-content/70">
                <RichText text={question.explanation} />
              </div>
            )}
            <button type="button" onClick={next} className="btn btn-primary btn-sm self-end">
              {index + 1 >= total ? "Voir mon score" : "Question suivante →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
