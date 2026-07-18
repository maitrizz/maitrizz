"use client";

import { Fragment, useState } from "react";
import { RenderBlock } from "./RenderBlock";
import type { Block, Step } from "@/components/fiche/types";
import { BTN_PRIMARY, FEUILLE, FeuilleHeader, Kicker, Label, RichTextSobre, sansEmoji, splitTitle } from "../ui";
import { useDemoOverlays } from "./demoOverlays";
import {
  ProtoCorrigerCopies,
  ProtoExerciceBank,
  ProtoExerciceCard,
  ProtoMindmap,
} from "./ProtoInteractive";

/* ──────────────────────────────────────────────────────────────────────────
   Rendu des blocs d'une fiche notion, réhabillé « copie corrigée » (sobre).
   Principe : feuilles blanches à bordure fine + ombre douce, filets fins,
   couleurs de la charte (teal / terracotta), pas d'aplats criards.
   Les blocs interactifs (banque d'exercices, corriger les copies, mindmap…)
   sont délégués tels quels au vrai RenderBlock — on ne prototype ici que la
   lecture, pas les widgets.
   ────────────────────────────────────────────────────────────────────────── */

type Props = {
  block: Block;
  ficheSlug: string;
  onNavigateTab?: (tabId: string) => void;
};

// Callout : deux niveaux d'importance. `info` = aparté de lecture (filet
// discret, sans fond). `success`/`warning`/`danger` = À RETENIR : panneau
// lavé + étiquette en capitales — LE repère quand on fait défiler la page.
const CALLOUT_RETENIR: Record<
  "success" | "warning" | "danger",
  { panel: string; label: string }
> = {
  success: { panel: "border-secondary/60 bg-secondary/[0.07]", label: "text-secondary" },
  warning: { panel: "border-secondary/60 bg-secondary/[0.07]", label: "text-secondary" },
  danger: { panel: "border-error/60 bg-error/[0.05]", label: "text-error" },
};

// Pièges : la couleur du bandeau porte le degré de gravité.
const PIEGE: Record<Extract<Block, { type: "piegeCard" }>["variant"], string> = {
  rouge: "text-error",
  orange: "text-secondary",
  bleu: "text-primary",
};

// Un exemple de carte notion s'écrit « **Sous-classe :** exemple… ». On isole le
// libellé (colonne de gauche du mini-tableau) du reste (colonne de droite). Sans
// libellé (ex. onomatopée), l'exemple occupe toute la largeur.
function splitExemple(s: string): { label: string | null; rest: string } {
  const m = s.match(/^\*\*(.+?)\s*:\*\*\s*([\s\S]*)$/);
  return m ? { label: m[1].trim(), rest: m[2].trim() } : { label: null, rest: s };
}

// La colonne de droite ne montre plus la phrase-exemple mais directement les mots
// concernés : ils sont déjà balisés en **gras** dans l'exemple. À défaut de gras,
// on retombe sur les segments entre guillemets. Renvoie null si rien à extraire.
function motsFromExemple(rest: string): string | null {
  const gras = [...rest.matchAll(/\*\*(.+?)\*\*/g)].map((m) => m[1].trim());
  if (gras.length) return gras.join(" · ");
  const cites = [...rest.matchAll(/«\s*(.+?)\s*»/g)].map((m) => m[1].trim());
  return cites.length ? cites.join(" · ") : null;
}

/* Les listes de mots des classes fermées (démo à valider) arrivent par le
   contexte DemoOverlays : fournies par les pages /proto/notion uniquement,
   vides sur les vraies pages. Voir demoOverlays.tsx et proto/notion/demoData.ts. */

/* Étiquettes-mots : chaque mot à mémoriser devient une petite étiquette de
   papier (façon étiquettes-mots découpées de l'école). L'œil photographie des
   objets, pas une ligne de texte. Les segments entre parenthèses (précisions
   du type « (série ouverte) ») restent en texte discret, pas en étiquette. */
function EtiquettesMots({ mots }: { mots: string }) {
  return (
    <span className="flex flex-wrap items-baseline gap-x-1 gap-y-1">
      {mots.split("·").map((m, k) => {
        const mot = m.trim();
        if (!mot) return null;
        if (mot.startsWith("(")) {
          return (
            <span key={k} className="px-0.5 text-[0.8em] text-on-surface-variant">
              {mot}
            </span>
          );
        }
        return (
          <span
            key={k}
            className="rounded-[3px] bg-primary/[0.06] px-1.5 py-px font-serif text-[0.95em] font-semibold leading-snug text-primary"
          >
            {mot}
          </span>
        );
      })}
    </span>
  );
}

/* Micro-rappel actif en fin de sous-section (démo à valider) : même principe,
   le contenu arrive par le contexte DemoOverlays (proto uniquement). */

function RappelActif({ question, reponse }: { question: string; reponse: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2 rounded-sm border border-dashed border-secondary/40 px-4 py-3.5">
      <Kicker>De mémoire</Kicker>
      <p className="font-serif text-[1em] font-semibold leading-relaxed text-on-surface">{question}</p>
      {open ? (
        <p className="text-[0.95em] leading-relaxed text-on-surface/85"><RichTextSobre text={reponse} /></p>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="self-start font-ui text-xs font-bold text-secondary transition-colors hover:text-secondary/75"
        >
          Vérifier ma réponse →
        </button>
      )}
    </div>
  );
}

// Note de bas de carte (astuce / piège / test) : libellé court + texte, même
// taille, sans capitales — la note doit rester en sourdine sous la carte.
function CardNote({ label, color, text }: { label: string; color: string; text: string }) {
  return (
    <p className="text-[0.85em] leading-relaxed text-on-surface/75">
      <span className={`font-ui font-semibold ${color}`}>{label} — </span>
      <RichTextSobre text={text} />
    </p>
  );
}

// Carte d'une classe grammaticale (notionCardGrid). Extraite en fonction pour
// être répartie en deux colonnes indépendantes plutôt qu'en grille (voir le
// case "notionCardGrid" plus bas : la grille laissait un grand vide sous les
// cartes courtes, alignées sur la hauteur de leur voisine la plus longue).
type NotionCardData = Extract<Block, { type: "notionCardGrid" }>["cards"][number];

function NotionCard({ card }: { card: NotionCardData }) {
  const { mots: motsDemo } = useDemoOverlays();
  /* Repli de la référence (piste anti-découragement) : le détail des
     sous-classes est du contenu de CONSULTATION, pas de lecture — affiché en
     entier, il fait 80 % de la hauteur de page et donne l'impression qu'il
     faut tout ingérer d'un coup. Le fil de lecture (définition + astuce/test/
     piège) reste visible ; le tableau se déplie à la demande. Une carte à une
     seule ligne reste dépliée : replier une ligne n'apporte rien. */
  const repliable = card.exemples.length > 1;
  const [open, setOpen] = useState(!repliable);
  return (
    <div className={`flex flex-col self-start overflow-hidden ${FEUILLE}`}>
      {/* Le nombre de sous-classes en badge : un chiffre à retenir par carte. */}
      <FeuilleHeader
        tone="teal"
        title={card.title}
        badge={repliable ? `${card.exemples.length} sous-classes` : undefined}
      />
      <div className="flex flex-col gap-3.5 p-4 md:px-5">
        <div className="text-[0.95em] leading-relaxed text-on-surface/85"><RichTextSobre text={card.definition} /></div>

        {repliable && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 self-start rounded-sm py-0.5 text-left transition-colors hover:text-secondary"
          >
            <Kicker>{open ? "Masquer les sous-classes" : `Voir les ${card.exemples.length} sous-classes`}</Kicker>
            <span className={`text-secondary transition-transform ${open ? "rotate-180" : ""}`} aria-hidden>▾</span>
          </button>
        )}

        {/* Mini-tableau des sous-classes : libellé | mots. Apaisement :
            plus de fond teinté ni de capitales terracotta — le libellé
            recule (gris), les MOTS portent l'accent (sérif teal). */}
        {open && (
          <table className="w-full border-collapse border-y border-outline-variant/40 text-left">
            <tbody>
              {card.exemples.map((ex, j) => {
                const { label, rest } = splitExemple(ex);
                const mots = (label && motsDemo[`${card.title}::${label}`]) || motsFromExemple(rest);
                const cell = (
                  <div className="flex flex-col gap-1">
                    {mots && <EtiquettesMots mots={mots} />}
                    {/* exemple + explication, en sourdine : les mots sont déjà
                        dans l'étiquette au-dessus, pas besoin de les remarquer ici */}
                    <span className="text-[0.8em] leading-relaxed text-on-surface-variant/90">
                      <RichTextSobre text={rest} />
                    </span>
                  </div>
                );
                return (
                  <tr key={j} className="border-b border-outline-variant/30 last:border-0">
                    {label ? (
                      <>
                        <th
                          scope="row"
                          className="w-[30%] py-2.5 pr-3 align-top font-ui text-[0.8em] font-medium leading-snug text-on-surface-variant"
                        >
                          {label}
                        </th>
                        <td className="py-2.5 align-top">{cell}</td>
                      </>
                    ) : (
                      <td colSpan={2} className="py-2.5 align-top">{cell}</td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        {card.astuce && <CardNote label="Astuce" color="text-secondary" text={card.astuce} />}
        {card.test && <CardNote label="Test" color="text-primary/80" text={card.test} />}
        {card.piege && <CardNote label="Piège" color="text-error/80" text={card.piege} />}
      </div>
    </div>
  );
}

/* Les données de méthode utilisent des étapes « emoji » (💡 = vérification,
   ✅ = réponse attendue). Au rendu proto, elles deviennent des étiquettes
   texte en petites capitales — cohérent avec la grammaire typo, zéro emoji. */
const STEP_LABEL: Record<string, string> = { "💡": "Vérif", "✅": "Réponse" };

function StepRow({ step, ficheSlug, onNavigateTab, isLast }: {
  step: Step;
  ficheSlug: string;
  onNavigateTab?: (tabId: string) => void;
  isLast: boolean;
}) {
  const label = STEP_LABEL[step.number];
  return (
    <div className={`flex items-start gap-4 py-4 ${isLast ? "" : "border-b border-outline-variant/40"}`}>
      {label ? (
        <div className="mt-1.5 w-7 shrink-0 font-ui text-[10px] font-bold uppercase tracking-[0.1em] text-secondary">
          {label}
        </div>
      ) : (
        /* Numéro d'étape en creux : cercle filet, pas d'aplat sombre. */
        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ring-1 ring-primary/30 font-serif text-sm font-semibold text-primary">
          {step.number}
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-2.5 text-[1em] leading-[1.75] text-on-surface/85">
        <div><RichTextSobre text={step.text} /></div>
        {step.example && (
          <div className="overflow-x-auto rounded-sm bg-primary/[0.045] px-4 py-2.5 font-serif text-[0.95em] leading-loose text-on-surface/85">
            {step.example.lines.map((line, i) => (
              <div key={i} className="whitespace-pre-wrap"><RichTextSobre text={line} /></div>
            ))}
          </div>
        )}
        {step.exampleNote && (
          <p className="text-[0.85em] text-on-surface-variant"><RichTextSobre text={step.exampleNote} /></p>
        )}
        {step.warn && (
          <div className="border-l-2 border-secondary/50 pl-3 text-[0.9em] leading-relaxed text-on-surface/75">
            <RichTextSobre text={step.warn} />
          </div>
        )}
        {step.extra?.map((b, i) => (
          <ProtoBlock key={i} block={b} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} />
        ))}
      </div>
    </div>
  );
}

export function ProtoBlock({ block, ficheSlug, onNavigateTab }: Props) {
  const { rappels: rappelsDemo } = useDemoOverlays();
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-[1em] leading-[1.75] text-on-surface/85">
          <RichTextSobre text={block.text} />
        </p>
      );

    case "callout": {
      // Aparté de lecture : reste en sourdine.
      if (block.variant === "info") {
        return (
          <div className="flex flex-col gap-1 border-l-2 border-primary/70 py-0.5 pl-5">
            {block.title && <p className="font-serif text-[1em] font-semibold text-primary">{sansEmoji(block.title)}</p>}
            <div className="text-[1em] leading-[1.75] text-on-surface/80">
              <RichTextSobre text={block.text} />
            </div>
          </div>
        );
      }
      // À retenir : panneau chaud, étiquette en capitales — doit se voir de loin.
      const s = CALLOUT_RETENIR[block.variant];
      return (
        <div className={`flex flex-col gap-1.5 rounded-sm border-l-[3px] px-5 py-4 ${s.panel}`}>
          {block.title && (
            <p className={`font-ui text-[11px] font-bold uppercase tracking-[0.14em] ${s.label}`}>{sansEmoji(block.title)}</p>
          )}
          <div className="text-[1em] leading-[1.75] text-on-surface/90">
            <RichTextSobre text={block.text} />
          </div>
        </div>
      );
    }

    case "subsection": {
      // Le numéro de section est suspendu dans la marge de copie (md+),
      // comme une annotation de correcteur ; en mobile il rentre dans le titre.
      const rappel = rappelsDemo[`${ficheSlug}::${block.number}`];
      return (
        <section className="relative flex flex-col gap-5">
          <h2 className="flex items-baseline gap-3 border-b border-outline-variant/60 pb-2.5 font-serif text-xl font-bold text-primary">
            <span className="text-2xl leading-none text-primary/60 md:absolute md:-left-[3.6rem] md:top-0">
              {block.number}
            </span>
            <span>{sansEmoji(block.title)}</span>
          </h2>
          <div className="flex flex-col gap-5">
            {block.blocks.map((b, i) => (
              <ProtoBlock key={i} block={b} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} />
            ))}
            {rappel && <RappelActif question={rappel.question} reponse={rappel.reponse} />}
          </div>
        </section>
      );
    }

    case "bullets":
      return (
        <ul className="flex flex-col gap-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-[1em] leading-[1.75] text-on-surface/85">
              <span className="mt-[0.72em] h-1 w-1 shrink-0 rounded-full bg-primary/50" />
              <span><RichTextSobre text={item} /></span>
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <figure className="flex flex-col gap-2">
          {/* Légende de tableau façon imprimé : italique sérif, pas de capitales */}
          {block.title && (
            <figcaption className="font-serif text-[0.9em] italic text-on-surface-variant">{block.title}</figcaption>
          )}
          <div className={`overflow-x-auto ${FEUILLE} overflow-hidden`}>
            <table className="w-full border-collapse text-left">
              {/* Tête de tableau façon imprimé : filet appuyé, pas d'aplat */}
              <thead>
                <tr className="border-b-2 border-primary/50">
                  {block.headers.map((h, i) => (
                    <th key={i} className="px-4 py-2.5 font-ui text-[11px] font-bold uppercase tracking-[0.08em] text-primary">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} className="border-b border-outline-variant/30 last:border-0">
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-2.5 align-top text-[0.9em] leading-relaxed text-on-surface/85">
                        <RichTextSobre text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </figure>
      );

    case "notionCardGrid": {
      const cards = block.cards.map((card, i) => <NotionCard key={i} card={card} />);
      if (block.columns !== 2) {
        return <div className="flex flex-col gap-4">{cards}</div>;
      }
      // Deux colonnes INDÉPENDANTES (pas une grille) : les cartes de cette
      // section ont des longueurs très inégales (2 à 8 sous-classes). En grid,
      // la hauteur de ligne s'aligne sur la carte la plus haute et la carte
      // courte laisse un grand vide sous elle. Ici chaque colonne empile ses
      // propres cartes sans dépendre de la hauteur de l'autre.
      const colA = cards.filter((_, i) => i % 2 === 0);
      const colB = cards.filter((_, i) => i % 2 === 1);
      return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div className="flex flex-1 flex-col gap-4">{colA}</div>
          {colB.length > 0 && <div className="flex flex-1 flex-col gap-4">{colB}</div>}
        </div>
      );
    }

    case "cardGrid":
      return (
        <div className={`grid grid-cols-1 gap-3 ${block.columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
          {block.cards.map((card, i) => (
            <div key={i} className="rounded-sm p-3.5 ring-1 ring-outline-variant/50">
              {card.value && <div className="mb-1 font-serif text-2xl font-bold text-primary">{card.value}</div>}
              {card.title && <div className="mb-1.5 font-serif text-[0.95em] font-semibold text-primary">{card.title}</div>}
              <div className="flex flex-col gap-1">
                {card.lines.map((line, j) => (
                  <div key={j} className="text-[0.85em] leading-relaxed text-on-surface/75"><RichTextSobre text={line} /></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );

    case "highlightBox": {
      const { tag, title } = splitTitle(block.title);
      return (
        <div className={`overflow-hidden ${FEUILLE}`}>
          <FeuilleHeader tone="teal" tag={tag ?? undefined} title={title} />
          <div className="flex flex-col gap-4 p-5">
            {block.blocks.map((b, i) => (
              <ProtoBlock key={i} block={b} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} />
            ))}
          </div>
        </div>
      );
    }

    case "formulaBlock": {
      const lignes = (
        <>
          {block.lines.map((line, i) => (
            <div key={i} className="text-[1em] leading-[1.75] text-on-surface/85"><RichTextSobre text={line} /></div>
          ))}
          {block.note && (
            <p className="mt-1.5 text-[0.85em] italic text-on-surface-variant"><RichTextSobre text={block.note} /></p>
          )}
        </>
      );
      // Sans titre, le bloc s'appuie sur son parent (ex. dans une highlightBox) :
      // on rend juste les lignes, sans feuille ni bandeau (pas de « bandeau dans bandeau »).
      if (!block.title) {
        return <div className="flex flex-col gap-1.5">{lignes}</div>;
      }
      const { tag, title } = splitTitle(block.title);
      // Une formule s'apprend par cœur : côté « à retenir » (terracotta).
      return (
        <div className={`overflow-hidden ${FEUILLE}`}>
          <FeuilleHeader tone="terracotta" tag={tag ?? "Formule"} title={title} />
          <div className="flex flex-col gap-1.5 p-5">{lignes}</div>
        </div>
      );
    }

    case "rappelExpress": {
      const { tag, title } = splitTitle(block.title);
      return (
        <div className={`overflow-hidden ${FEUILLE}`}>
          <FeuilleHeader tone="terracotta" tag={tag ?? "Rappel"} title={title} />
          <div className="flex flex-col gap-4 p-5">
            {block.blocks.map((b, i) => (
              <ProtoBlock key={i} block={b} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} />
            ))}
          </div>
        </div>
      );
    }

    case "methodeGroup":
      return (
        <div className={`overflow-hidden ${FEUILLE}`}>
          <FeuilleHeader tone="teal" tag="Méthode" title={block.title} number={block.number} />
          <div className="flex flex-col gap-3 p-5">
            {block.intro && (
              <div className="text-[0.95em] italic leading-relaxed text-on-surface-variant">
                <RichTextSobre text={block.intro} />
              </div>
            )}
            {block.preBlocks?.map((b, i) => (
              <ProtoBlock key={i} block={b} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} />
            ))}
            <div className="flex flex-col">
              {block.steps.map((step, i) => (
                <StepRow key={i} step={step} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} isLast={i === block.steps.length - 1} />
              ))}
            </div>
          </div>
        </div>
      );

    case "piegeCard": {
      // « En sourdine » (1b) : plus de carte deux colonnes ✗/✓, juste un
      // intertitre discret + filet coloré à gauche, en fil de lecture.
      const accent = PIEGE[block.variant];
      return (
        <div className="flex flex-col gap-2.5 rounded-sm border-l-[3px] border-secondary/60 bg-secondary/[0.05] px-5 py-4">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <Kicker>Le piège de la fiche</Kicker>
            {block.badge && <Label>{block.badge}</Label>}
          </div>
          <p className={`font-serif text-[1.1em] font-bold ${accent}`}>{sansEmoji(block.title)}</p>
          <p className="text-[1em] leading-[1.75] text-on-surface/85">
            <span className="font-ui text-[0.85em] font-semibold text-error/80">On croit : </span>
            <RichTextSobre text={block.faux} />
          </p>
          <p className="text-[1em] leading-[1.75] text-on-surface/85">
            <span className="font-ui text-[0.85em] font-semibold text-secondary">En réalité : </span>
            <RichTextSobre text={block.vrai} />
          </p>
          {block.methode && (
            <p className="text-[0.9em] italic leading-relaxed text-on-surface-variant">
              <RichTextSobre text={block.methode} />
            </p>
          )}
        </div>
      );
    }

    case "primaireBox": {
      const { tag, title } = splitTitle(block.title);
      return (
        <div className={`overflow-hidden ${FEUILLE}`}>
          <FeuilleHeader tone="teal" tag={tag ?? "À l'école"} title={title} />
          <div className="flex flex-col gap-2 p-5 text-[1em] leading-[1.75] text-on-surface/85">
            {block.text.split("\n\n").map((para, i) => (
              <p key={i}><RichTextSobre text={para} /></p>
            ))}
          </div>
        </div>
      );
    }

    case "ctaBox":
      return (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-secondary/[0.06] px-5 py-4 ring-1 ring-secondary/20">
          <span className="font-ui text-sm font-semibold text-primary"><RichTextSobre text={block.text} /></span>
          <button type="button" onClick={() => onNavigateTab?.(block.targetTab)} className={`${BTN_PRIMARY} !py-2.5`}>
            {block.buttonLabel} <span aria-hidden>→</span>
          </button>
        </div>
      );

    // Blocs interactifs réhabillés « copie corrigée » (logique intacte, style local).
    case "mindmapLite":
      return <ProtoMindmap block={block} />;

    case "exerciceCard":
      return <ProtoExerciceCard block={block} />;

    case "exerciceBank":
      return <ProtoExerciceBank block={block} ficheSlug={ficheSlug} />;

    case "corrigerCopies":
      return <ProtoCorrigerCopies block={block} ficheSlug={ficheSlug} />;

    // Blocs interactifs encore non prototypés : on délègue au rendu réel pour rester
    // fonctionnel (quiz, jeu d'appariement, trainer, examRunner, etc.).
    default:
      return (
        <Fragment>
          <RenderBlock block={block} ficheSlug={ficheSlug} onNavigateTab={onNavigateTab} />
        </Fragment>
      );
  }
}
