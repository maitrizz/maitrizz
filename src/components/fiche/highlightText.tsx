"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { RichText } from "./richtext";
import type { RichText as RichTextValue } from "./types";

/**
 * Texte support « surlignable » des sujets blancs (bloc examRunner).
 *
 * Le candidat sélectionne un passage à la souris (ou au doigt) : une petite barre
 * propose trois couleurs de surligneur et un bouton « Annoter ». Cliquer un
 * passage déjà surligné rouvre la note pour l'éditer ou le supprimer. Le
 * surlignage se fait AU MOT (la sélection est arrondie aux limites de mots) : pas
 * de décalage de caractères fragile, et le rendu reste simple et robuste.
 *
 * L'état (le tableau de surlignages) est détenu par le parent (ExamRunner) qui le
 * persiste en localStorage ; ce composant ne fait que l'afficher et le modifier
 * via `onChange`. Comme ExamRunner monte ce composant en permanence (colonne
 * collante), les surlignages restent visibles d'une partie à l'autre.
 */

export type HlColor = "jaune" | "vert" | "rose";
export type Hl = {
  id: string;
  p: number; // index du paragraphe
  start: number; // index de mot (inclus)
  end: number; // index de mot (inclus)
  color: HlColor;
  note?: string;
};

// Classes de fond par couleur (opacité douce pour rester lisible sur le texte).
const BG: Record<HlColor, string> = {
  jaune: "bg-yellow-300/55",
  vert: "bg-green-300/50",
  rose: "bg-pink-300/45",
};
// Pastilles de la barre de sélection / de la popover.
const DOT: Record<HlColor, string> = {
  jaune: "bg-yellow-400",
  vert: "bg-green-400",
  rose: "bg-pink-400",
};
const COLORS: HlColor[] = ["jaune", "vert", "rose"];

// ── Tokenisation : un « jeton » = un mot + ses espaces qui suivent ───────────
// Englober l'espace dans le mot garantit que toute extrémité de sélection tombe
// dans un jeton (pas de « trou » entre deux mots) et que les surlignages
// contigus s'affichent sans rupture visible.
type Style = { b?: boolean; i?: boolean; u?: boolean; s?: boolean };
type Unit = { w: number; text: string; style: Style };

const INLINE =
  /(<u>.+?<\/u>|\*\*.+?\*\*|~~.+?~~|\*.+?\*|\[[^\]]+\]\((?:https?:\/\/|fiche:)[^)\s]+\))/g;

// Découpe une chaîne RichText en « runs » (texte + style), en suivant les mêmes
// balises légères que richtext.tsx. Les liens sont réduits à leur libellé : le
// texte support à analyser n'est pas censé contenir de liens cliquables.
function runs(text: string, style: Style, out: { text: string; style: Style }[]) {
  for (const part of text.split(INLINE)) {
    if (!part) continue;
    if (part.startsWith("**") && part.endsWith("**")) runs(part.slice(2, -2), { ...style, b: true }, out);
    else if (part.startsWith("<u>") && part.endsWith("</u>")) runs(part.slice(3, -4), { ...style, u: true }, out);
    else if (part.startsWith("~~") && part.endsWith("~~")) runs(part.slice(2, -2), { ...style, s: true }, out);
    else if (part.startsWith("*") && part.endsWith("*")) runs(part.slice(1, -1), { ...style, i: true }, out);
    else {
      const link = part.match(/^\[([^\]]+)\]\((?:https?:\/\/|fiche:)[^)\s]+\)$/);
      out.push({ text: link ? link[1] : part, style });
    }
  }
}

function tokenize(text: string): Unit[] {
  const acc: { text: string; style: Style }[] = [];
  runs(text, {}, acc);
  const units: Unit[] = [];
  let w = 0;
  for (const run of acc) {
    // Chaque unité commence à un caractère non-espace et emporte les espaces qui
    // le suivent. Les espaces de tête (rares, en début de run) sont rattachés au
    // mot précédent s'il existe.
    const matches = run.text.match(/\s*\S+\s*|\s+/g);
    if (!matches) continue;
    for (const m of matches) {
      if (/^\s+$/.test(m)) {
        if (units.length) units[units.length - 1].text += m;
      } else {
        units.push({ w: w++, text: m, style: run.style });
      }
    }
  }
  return units;
}

function styleClass(s: Style): string {
  return [s.b && "font-semibold", s.i && "italic", s.u && "underline", s.s && "line-through"]
    .filter(Boolean)
    .join(" ");
}

// Surlignage couvrant un mot donné d'un paragraphe (les chevauchements sont
// retirés à la création, donc au plus un résultat).
function coverAt(hls: Hl[], p: number, w: number): Hl | undefined {
  return hls.find((h) => h.p === p && w >= h.start && w <= h.end);
}

function uid(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

type Tip = { top: number; left: number; start: { p: number; w: number }; end: { p: number; w: number } };
type Editing = { id: string; top: number; left: number };

export function HighlightableText({
  title,
  paragraphs,
  note,
  hls,
  onChange,
}: {
  title: string;
  paragraphs: RichTextValue[];
  note?: RichTextValue;
  hls: Hl[];
  onChange: (next: Hl[]) => void;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const tipRef = useRef<HTMLDivElement | null>(null);
  const popRef = useRef<HTMLDivElement | null>(null);
  const [tip, setTip] = useState<Tip | null>(null);
  const [editing, setEditing] = useState<Editing | null>(null);

  // Fermer la barre de sélection et la fenêtre de note « naturellement » : clic
  // (ou tap) en dehors, ou touche Échap. La note est déjà enregistrée à chaque
  // frappe, fermer ne fait que masquer.
  useEffect(() => {
    if (!tip && !editing) return;
    function onDown(e: MouseEvent | TouchEvent) {
      const t = e.target as Node | null;
      if (t && (tipRef.current?.contains(t) || popRef.current?.contains(t))) return;
      setTip(null);
      setEditing(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setTip(null);
        setEditing(null);
      }
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [tip, editing]);

  // Jetons par paragraphe (stables tant que le texte ne change pas) + nombre de
  // mots par paragraphe, utile pour borner une sélection multi-paragraphes.
  const tokens = useMemo(() => paragraphs.map(tokenize), [paragraphs]);
  const counts = useMemo(() => tokens.map((u) => u.length), [tokens]);

  // Position (top/left) d'un rectangle viewport rapportée au repère interne du
  // conteneur : l'offset reste juste même quand la colonne défile, car les deux
  // rectangles bougent ensemble.
  function localPos(rect: DOMRect): { top: number; left: number } {
    const root = rootRef.current;
    if (!root) return { top: 0, left: 0 };
    const r = root.getBoundingClientRect();
    return { top: rect.top - r.top, left: rect.left - r.left };
  }

  function unitFromNode(node: Node | null): { p: number; w: number } | null {
    const root = rootRef.current;
    if (!root || !node) return null;
    const el = node instanceof HTMLElement ? node : node.parentElement;
    const span = el?.closest<HTMLElement>("[data-w]");
    if (!span || !root.contains(span)) return null;
    return { p: Number(span.dataset.p), w: Number(span.dataset.w) };
  }

  function handleSelect() {
    const sel = typeof window !== "undefined" ? window.getSelection() : null;
    if (!sel || sel.isCollapsed || sel.rangeCount === 0) {
      setTip(null);
      return;
    }
    const a = unitFromNode(sel.anchorNode);
    const b = unitFromNode(sel.focusNode);
    if (!a || !b) {
      setTip(null);
      return;
    }
    // Remettre dans l'ordre du document (paragraphe puis mot).
    const [start, end] = a.p < b.p || (a.p === b.p && a.w <= b.w) ? [a, b] : [b, a];
    const rect = sel.getRangeAt(0).getBoundingClientRect();
    setEditing(null);
    setTip({ ...localPos(rect), start, end });
  }

  // Crée un (ou plusieurs) surlignage(s) à partir de la sélection courante : un
  // par paragraphe couvert. Retire d'abord tout surlignage qui croise la
  // nouvelle plage (« la dernière sélection gagne »), pour ne jamais empiler des
  // couleurs sur un même mot.
  function create(color: HlColor): Hl[] {
    if (!tip) return [];
    const { start, end } = tip;
    const made: Hl[] = [];
    for (let p = start.p; p <= end.p; p++) {
      const s = p === start.p ? start.w : 0;
      const e = p === end.p ? end.w : counts[p] - 1;
      made.push({ id: uid(), p, start: s, end: e, color });
    }
    const kept = hls.filter(
      (h) => !made.some((m) => m.p === h.p && m.start <= h.end && h.start <= m.end),
    );
    onChange([...kept, ...made]);
    return made;
  }

  function applyColor(color: HlColor) {
    create(color);
    setTip(null);
    window.getSelection()?.removeAllRanges();
  }

  function annotate() {
    const made = create("jaune");
    setTip(null);
    window.getSelection()?.removeAllRanges();
    if (made[0]) setEditing({ id: made[0].id, top: tip!.top, left: tip!.left });
  }

  function openEdit(h: Hl, rect: DOMRect) {
    setTip(null);
    setEditing({ id: h.id, ...localPos(rect) });
  }

  function updateHl(id: string, patch: Partial<Hl>) {
    onChange(hls.map((h) => (h.id === id ? { ...h, ...patch } : h)));
  }
  function removeHl(id: string) {
    onChange(hls.filter((h) => h.id !== id));
    setEditing(null);
  }

  const editingHl = editing ? hls.find((h) => h.id === editing.id) : null;

  return (
    <div ref={rootRef} className="relative flex flex-col gap-2" onMouseUp={handleSelect} onTouchEnd={handleSelect}>
      <p className="text-sm font-bold text-base-content">{title}</p>

      {paragraphs.map((_, p) => (
        <p key={p} className="text-sm text-base-content/85 leading-relaxed">
          {tokens[p].map((u) => {
            const cov = coverAt(hls, p, u.w);
            const noted = cov?.note ? "underline decoration-dotted decoration-2 underline-offset-2 decoration-base-content/40" : "";
            const cls = [
              styleClass(u.style),
              cov ? `${BG[cov.color]} cursor-pointer rounded-[2px] ${noted}` : "",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <span
                key={u.w}
                data-p={p}
                data-w={u.w}
                className={cls || undefined}
                title={cov?.note || undefined}
                onClick={(e) => {
                  // Ne pas confondre « fin de sélection » et « clic » : si une
                  // sélection est active, on laisse handleSelect ouvrir la barre.
                  const sel = window.getSelection();
                  if (sel && !sel.isCollapsed) return;
                  if (cov) openEdit(cov, (e.currentTarget as HTMLElement).getBoundingClientRect());
                }}
              >
                {u.text}
              </span>
            );
          })}
        </p>
      ))}

      {note && (
        <p className="text-xs text-base-content/55 italic leading-relaxed">
          <RichText text={note} />
        </p>
      )}

      {/* Barre flottante : choisir une couleur ou annoter la sélection */}
      {tip && (
        <div
          ref={tipRef}
          className="absolute z-30 flex items-center gap-1 rounded-full border-2 border-base-300 bg-base-100 px-2 py-1 shadow-lg"
          style={{ top: tip.top, left: tip.left, transform: "translateY(-115%)" }}
          onMouseDown={(e) => e.preventDefault()}
        >
          {COLORS.map((c) => (
            <button
              key={c}
              type="button"
              aria-label={`Surligner en ${c}`}
              onClick={() => applyColor(c)}
              className={`h-5 w-5 rounded-full ${DOT[c]} border border-black/10 hover:scale-110 transition-transform`}
            />
          ))}
          <span className="mx-0.5 h-4 w-px bg-base-300" />
          <button type="button" onClick={annotate} className="text-xs font-semibold text-primary px-1">
            Annoter
          </button>
        </div>
      )}

      {/* Popover d'annotation : couleur, note, suppression */}
      {editing && editingHl && (
        <div
          ref={popRef}
          className="absolute z-30 w-64 rounded-xl border-2 border-base-300 bg-base-100 p-3 shadow-xl flex flex-col gap-2"
          style={{ top: editing.top, left: Math.max(0, editing.left), transform: "translateY(8px)" }}
        >
          <div className="flex items-center gap-1.5">
            {COLORS.map((c) => (
              <button
                key={c}
                type="button"
                aria-label={`Couleur ${c}`}
                onClick={() => updateHl(editing.id, { color: c })}
                className={`h-5 w-5 rounded-full ${DOT[c]} border ${editingHl.color === c ? "border-base-content" : "border-black/10"} hover:scale-110 transition-transform`}
              />
            ))}
            <span className="ml-auto text-[0.7rem] text-base-content/40">Échap ou clic ailleurs pour fermer</span>
          </div>
          <textarea
            autoFocus
            value={editingHl.note ?? ""}
            onChange={(e) => updateHl(editing.id, { note: e.target.value })}
            placeholder="Votre note sur ce passage…"
            rows={3}
            className="textarea textarea-bordered textarea-sm w-full text-sm leading-relaxed"
          />
          <button type="button" onClick={() => removeHl(editing.id)} className="self-start text-xs font-semibold text-error">
            Supprimer le surlignage
          </button>
        </div>
      )}
    </div>
  );
}
