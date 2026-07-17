import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  MATIERES,
  MATIERE_LABELS,
  NIVEAUX,
  getFiche,
  getFicheMetas,
  isValidMatiere,
  isValidNiveau,
} from "../data";

// Vignette de partage (Open Graph / Twitter) générée par fiche, dans la charte du
// site : fond teal, quadrillage Seyès, titres en Source Serif, accent terracotta.
// Aucun contenu de cours n'est touché : on n'affiche que titre, sous-titre, partie.
export const alt = "Fiche de révision CRPE · Maitrizz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TEAL = "#0c434e";
const TERRACOTTA = "#c36648";
const PAPER = "#faf6ec"; // crème clair (fond de la vignette)
const MUTED = "#40484a";

const FONT_DIR = join(process.cwd(), "src/assets/fonts");
const serifSemiBold = readFileSync(join(FONT_DIR, "SourceSerif4-SemiBold.ttf"));
const serifExtraBold = readFileSync(join(FONT_DIR, "SourceSerif4-800.ttf"));
const serifBlack = readFileSync(join(FONT_DIR, "SourceSerif4-900.ttf"));
const sansMedium = readFileSync(join(FONT_DIR, "WorkSans-Medium.ttf"));

// Logo de marque = le favicon du site (l'icône de l'onglet), embarqué en data URI.
const logoSvg = readFileSync(join(process.cwd(), "src/app/icon.svg"), "utf8").replace(
  "<svg ",
  '<svg width="76" height="76" '
);
const LOGO_DATA_URI = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;

// Quelques symboles maths (ensembles ℚ ℝ ℤ ℕ ℂ ℙ, application ↦) ne figurent dans
// AUCUNE des polices embarquées : satori les rendrait en case vide dans la vignette.
// On les translittère POUR L'IMAGE UNIQUEMENT (ℚ→Q, ↦→→…). Les données de fiche
// (title/subtitle affichés en HTML, dans des polices système complètes) restent
// intactes. Les symboles présents dans au moins une police (√ ≤ ≥ → × ÷ π α…) sont
// gérés automatiquement par le repli multi-polices de satori et ne sont pas listés.
const OG_GLYPH_FALLBACK: Record<string, string> = {
  "ℚ": "Q",
  "ℝ": "R",
  "ℤ": "Z",
  "ℕ": "N",
  "ℂ": "C",
  "ℙ": "P",
  "↦": "→",
  "⟼": "→",
};
function ogSafe(s: string): string {
  return s.replace(/[ℚℝℤℕℂℙ↦⟼]/g, (c) => OG_GLYPH_FALLBACK[c] ?? c);
}

export function generateStaticParams() {
  return NIVEAUX.flatMap((niveau) =>
    MATIERES.flatMap((matiere) =>
      getFicheMetas(niveau, matiere).map((fiche) => ({
        niveau,
        matiere,
        slug: fiche.slug,
      }))
    )
  );
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ niveau: string; matiere: string; slug: string }>;
}) {
  const { niveau, matiere, slug } = await params;

  const fiche =
    isValidNiveau(niveau) && isValidMatiere(matiere) ? getFiche(niveau, matiere, slug) : null;

  const matiereLabel = isValidMatiere(matiere) ? MATIERE_LABELS[matiere] : "CRPE";
  const title = ogSafe(
    fiche
      ? fiche.numero > 0 && fiche.kind !== "sujet"
        ? `Notion ${fiche.numero} : ${fiche.title}`
        : fiche.title
      : "Fiche de révision"
  );
  const partie = ogSafe(fiche?.partie ?? "");
  const subtitle = ogSafe(fiche?.subtitle ?? "");
  // Titre long : on réduit la taille pour garder une mise en page équilibrée.
  const titleSize = title.length > 46 ? 54 : title.length > 32 ? 62 : 70;

  // Quadrillage Seyès (lignes teal sur fond crème, comme .bg-seyes du site),
  // dessiné en éléments pour un rendu fiable dans satori. Deux trames : les
  // lignes principales tous les 32px + les fines lignes horizontales tous les
  // 8px, comme le vrai papier réglé.
  const STEP = 32;
  const SUB = 8;
  const GRID_MAIN = "rgba(12,67,78,0.10)";
  const GRID_SUB = "rgba(12,67,78,0.045)";
  const vLines = Array.from({ length: Math.ceil(size.width / STEP) + 1 }, (_, i) => i * STEP);
  const hLines = Array.from({ length: Math.ceil(size.height / STEP) + 1 }, (_, i) => i * STEP);
  const hSubLines = Array.from({ length: Math.ceil(size.height / SUB) + 1 }, (_, i) => i * SUB);

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "60px 72px",
          color: TEAL,
          fontFamily: "Work Sans",
        }}
      >
        {/* Quadrillage Seyès */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex" }}>
          {hSubLines.map((y) => (
            <div
              key={`hs${y}`}
              style={{ position: "absolute", left: 0, right: 0, top: y, height: 1, background: GRID_SUB }}
            />
          ))}
          {vLines.map((x) => (
            <div
              key={`v${x}`}
              style={{ position: "absolute", top: 0, bottom: 0, left: x, width: 1, background: GRID_MAIN }}
            />
          ))}
          {hLines.map((y) => (
            <div
              key={`h${y}`}
              style={{ position: "absolute", left: 0, right: 0, top: y, height: 1, background: GRID_MAIN }}
            />
          ))}
        </div>

        {/* Bandeau de marque */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_DATA_URI}
            width={76}
            height={76}
            alt="Maitrizz"
            style={{ borderRadius: 16, border: "1px solid rgba(12,67,78,0.12)" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div
              style={{
                fontFamily: "Source Serif",
                fontWeight: 800,
                fontSize: 40,
                lineHeight: 1.05,
                letterSpacing: -0.5,
                color: TEAL,
                borderBottom: `4px solid ${TERRACOTTA}`,
                paddingBottom: 4,
              }}
            >
              Maitrizz
            </div>
            <div style={{ fontSize: 19, letterSpacing: 3, textTransform: "uppercase", color: MUTED }}>
              Concours de professeur des écoles
            </div>
          </div>
        </div>

        {/* Bloc titre */}
        <div style={{ position: "relative", display: "flex", gap: 28 }}>
          <div style={{ width: 8, borderRadius: 4, background: TERRACOTTA }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {partie ? (
              <div style={{ fontSize: 25, letterSpacing: 2, textTransform: "uppercase", color: TERRACOTTA, fontWeight: 500 }}>
                {partie}
              </div>
            ) : null}
            <div
              style={{
                fontFamily: "Source Serif",
                fontWeight: 900,
                fontSize: titleSize,
                lineHeight: 1.04,
                letterSpacing: -1.5,
                color: TEAL,
                maxWidth: 980,
              }}
            >
              {title}
            </div>
            {subtitle ? (
              <div
                style={{
                  fontFamily: "Source Serif",
                  fontWeight: 600,
                  fontSize: 28,
                  lineHeight: 1.35,
                  color: MUTED,
                  maxWidth: 940,
                }}
              >
                {subtitle}
              </div>
            ) : null}
          </div>
        </div>

        {/* Pied */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(12,67,78,0.15)",
            fontSize: 24,
            color: MUTED,
          }}
        >
          <span>{matiereLabel} · Fiche de révision</span>
          <span style={{ color: TEAL, fontWeight: 500 }}>maitrizz.fr</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Source Serif", data: serifBlack, weight: 900, style: "normal" },
        { name: "Source Serif", data: serifExtraBold, weight: 800, style: "normal" },
        { name: "Source Serif", data: serifSemiBold, weight: 600, style: "normal" },
        { name: "Work Sans", data: sansMedium, weight: 500, style: "normal" },
      ],
    }
  );
}
