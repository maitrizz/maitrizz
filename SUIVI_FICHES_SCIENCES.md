# Suivi des fiches Sciences et technologie écrites (L3 & M2)

État d'avancement. Légende : ✅ fait · 🔄 en cours · ⬜ à faire.

Deux étapes par fiche : **MEF** (mise en forme → format du site) et **Audit** (passe éditoriale charte §9, voir `CHARTE_SCIENCES.md`). Objectif : **écrire juste du premier coup** (MEF + audit en une seule passe), pour éviter le rattrapage connu en français.

> Périmètre : 18 modules source (dossier `Desktop/contenu ecrits maitrizz/Sciences/`), **déjà différenciés L3/M2**. Cours disciplinaire et séances communs ; seules la rubrique « Préparer l'épreuve » et la question didactique de la simulation diffèrent par niveau. Une fabrique unique par module produit les deux fiches (`ficheXxxL3` / `ficheXxxM2`), sur le modèle de `francais/construire-un-plan.ts`.
>
> Numérotation : **renumérotée en continu** pour que les parties restent groupées à l'affichage (la liste trie par `numero`). L'ID du module source est rappelé entre parenthèses.

## Méthodologie (numéro 0, en tête de parcours)

| #  | Notion | MEF | Audit §9 |
|----|--------|-----|----------|
| 00 | Méthodologie de l'épreuve écrite de sciences (L3/M2) (module 18) | ⬜ | ⬜ |

## Partie 1 — Sciences de la vie et de la Terre (SVT)

| #  | Notion | MEF | Audit §9 |
|----|--------|-----|----------|
| 01 | Unité et diversité du vivant (module 1) **PILOTE** | ✅ | ✅ (1re passe : sans cadratins, jury générique, format d'épreuve non chiffré, exactitude vérifiée ; à confirmer après relecture utilisatrice) |
| 02 | Fonctions de nutrition (module 2) | ⬜ | ⬜ |
| 03 | Fonctions de relation et locomotion (module 3) | ⬜ | ⬜ |
| 04 | Reproduction, développement, hérédité (module 4) | ⬜ | ⬜ |
| 05 | Écosystèmes, environnement et EDD (module 5) | ⬜ | ⬜ |
| 06 | La Terre, la géologie et l'évolution (module 6) | ⬜ | ⬜ |
| 07 | Santé, corps humain et hygiène (module 13) | ⬜ | ⬜ |

## Partie 2 — Physique-Chimie

| #  | Notion | MEF | Audit §9 |
|----|--------|-----|----------|
| 08 | La matière : états, mélanges, constituants (module 7) | ⬜ | ⬜ |
| 09 | L'eau et l'air (module 8) | ⬜ | ⬜ |
| 10 | L'énergie (module 9) | ⬜ | ⬜ |
| 11 | Lumière, optique et phénomènes lumineux (module 10) | ⬜ | ⬜ |
| 12 | Mouvement, forces et interactions (module 11) | ⬜ | ⬜ |
| 13 | Électricité et circuits électriques (module 12) | ⬜ | ⬜ |

## Partie 3 — Technologie

| #  | Notion | MEF | Audit §9 |
|----|--------|-----|----------|
| 14 | Les objets techniques (module 14) | ⬜ | ⬜ |
| 15 | Transmission et transformation du mouvement (module 15) | ⬜ | ⬜ |
| 16 | Programmation et pensée computationnelle (module 16) | ⬜ | ⬜ |

## Partie 4 — Didactique

| #  | Notion | MEF | Audit §9 |
|----|--------|-----|----------|
| 17 | Enseigner les sciences et la technologie (module 17) | ⬜ | ⬜ |

---

## Décisions de structure

- **Câblage technique fait** : `Matiere` accueille `"sciences"` ; `MATIERES`, `MATIERE_LABELS` (« Sciences et technologie »), `isValidMatiere`, listes `SCIENCES_L3`/`SCIENCES_M2` et `FICHES` mises à jour dans `data/index.ts`. Icône dédiée par matière sur la page « écrites » (`ecrites/page.tsx`).
- **Mapping des 4 rubriques source** → onglets du site : Cours → Cours ; En pratique → En classe ; Préparer l'épreuve → Préparer l'épreuve (différencié L3/M2) ; Je m'évalue → S'entraîner (exercices guidés + simulation) + Quiz éclair + Auto-évaluation.
- **Format d'épreuve non chiffré** dans les fiches publiées tant que la source officielle n'est pas vérifiée (cf. `CHARTE_SCIENCES.md` §0). À trancher avant d'ajouter durée/barème.

## Visuels (schémas)

- **Bloc `schema` ajouté au moteur** (`types.ts` + `RenderBlock.tsx`) : image SVG/PNG servie depuis `/public/fiches/<matiere>/`, avec `alt` obligatoire et `caption`. Réutilisable par toutes les matières. Schémas dessinés à la main en SVG (sobres, palette teal, sans emoji), validés visuellement via `qlmanage` avant insertion.
- **Fiche 01 : 3 schémas** (validés par l'utilisatrice) : groupes emboîtés (classification), cellule procaryote vs eucaryote, organes homologues (membre antérieur Homme/chauve-souris/baleine).
- **À faire** : illustrer les fiches au fil de l'eau (viser 2-4 schémas par fiche sciences ; idem pour enrichir les maths : Thalès, solides, optique, circuits…).

## Reste-à-faire

1. **Validation du pilote** (fiche 01) par l'utilisatrice : rendu des trois onglets, différenciation L3 vs M2 visible sur « Préparer l'épreuve » et la simulation. Visuels validés.
2. Vérifier la source officielle du **format d'épreuve sciences** (durée, barème, place des questions disciplinaires/didactiques) pour L3 et M2.
3. Dérouler les modules restants partie par partie sur le même patron (fabrique L3/M2), en cochant MEF/Audit ici.
4. Audit mécanique global (charte §8) sur l'ensemble des fiches à la fin du chantier.
