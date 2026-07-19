# Brief Codex — Migration de structure des notions de français (chantier 1)

## Mission (et son périmètre EXACT)

Migrer les notions de français écrit existantes vers le **format figé** documenté dans
`GABARIT_NOTION.md`, en prenant la **notion 1 (`classes-grammaticales-v2.ts`)** comme modèle.

> 🚫 **CE QUE TU NE FAIS PAS.** Tu ne réécris **aucun** contenu pédagogique. Tu ne « améliores »
> pas les exercices, tu ne changes pas leur difficulté, tu n'appliques **PAS** `DOCTRINE_EXERCICES.md`
> (c'est un chantier 2, séparé et ultérieur). Ici tu **reconditionnes l'existant** dans la nouvelle
> coquille. Substance inchangée.

À lire avant de commencer, dans l'ordre :
1. `GABARIT_NOTION.md` (l'architecture et le pourquoi).
2. `SPEC_STRUCTURE_NOTION.md` (le contrat précis — **fais autorité en cas de doute**).
3. Le modèle vivant : `…/data/francais/classes-grammaticales-v2.ts` + `exercices-classes-grammaticales.ts` + `copies-classes-grammaticales.ts`.
4. Les types : `src/components/fiche/types.ts` (blocs `exerciceBank`, `corrigerCopies`, types `TrainerExercice`, `Fiche`).

Chemin du dossier de données (le `[niveau]` et `[matiere]` sont des vrais dossiers, à échapper dans le shell) :
`src/app/reviser/[niveau]/epreuves/ecrites/[matiere]/data/francais/`

---

## Périmètre : 18 notions (2 → 19)

La notion 1 est déjà faite (le modèle). Les notions **0, 20, 21** et le **sujet blanc** sont HORS
périmètre (formats spéciaux : méthodologie différenciée, « Produire » différenciée L3/M2, « Culture »
en recueil). Tu migres **uniquement** :

| # | slug | # | slug |
|---|------|---|------|
| 2 | `fonctions-syntaxiques` | 11 | `accords-gn-gv` |
| 3 | `groupe-nominal-expansions` | 12 | `accord-participe-passe` |
| 4 | `groupe-verbal` | 13 | `homophones-grammaticaux` |
| 5 | `phrase-complexe` | 14 | `coherence-textuelle` |
| 6 | `types-et-formes-de-phrase` | 15 | `enonciation-discours-rapporte` |
| 7 | `modes-et-temps` | 16 | `phonologie` |
| 8 | `temps-du-passe` | 17 | `formation-des-mots` |
| 9 | `present-futur-conditionnel-subjonctif` | 18 | `relations-semantiques` |
| 10 | `formes-non-conjuguees` | 19 | `figures-de-style-registres` |

Les 18 ont la **même structure v1** (vérifié) : onglets « Vue d'ensemble » + « Cours » + « Méthode »
(groupe Découvrir), « Quiz éclair » + « Application » (groupe Pratiquer), et une carte mentale.

---

## Le mapping v1 → nouveau format (la table de migration)

| Onglet cible (nouveau) | Source v1 | Traitement |
|---|---|---|
| **Comprendre** (Apprendre) | onglet **« Cours »** | **VERBATIM** (copier-coller le tableau de `blocks`) |
| **Méthode** (Apprendre) | onglet **« Méthode »** | **VERBATIM** |
| **Appliquer** (S'entraîner) | onglet **« Application »** | **Reconditionner** : même contenu, remis au format `exerciceBank` (voir §B) |
| **Corriger des erreurs** (S'entraîner) | les blocs **`piegeCard`** du cours | **Dériver** ~6-8 copies (voir §C) |
| **Mémo** | la **carte mentale** (`mindmapLite`/synthèse) v1 | **VERBATIM** |
| — | onglet **« Vue d'ensemble »** | ❌ **SUPPRIMÉ** (redondant) |
| — | onglet **« Quiz éclair »** | ❌ **SUPPRIMÉ de la notion** (relève du hub, non repris) |

---

## Procédure, notion par notion

### A. La fiche `<slug>.ts` (la coquille)

1. Repartir de l'objet `Fiche` du modèle (`classes-grammaticales-v2.ts`). Garder l'en-tête de la v1
   (`slug`, `numero`, `partie`, `title`, `subtitle`, `metaTitle`, `metaDescription`) — **sans le
   suffixe `-v2`** ni le badge « Prototype ».
2. `tabGroups` = exactement **3 maisons / 5 onglets** : Apprendre[`comprendre`,`methode`] ·
   S'entraîner[`appliquer`,`corriger`] · Mémo[`memo`]. **Aucun bloc `trainer` dans la fiche.**
3. **Comprendre** = copier **verbatim** les `blocks` de l'onglet « Cours » v1. **Méthode** = copier
   **verbatim** les `blocks` de l'onglet « Méthode » v1. **Mémo** = reprendre la carte mentale v1.
   - Seules modifications autorisées = **navigation** : le `ctaBox` de fin (cible + libellé) et, si
     une phrase de prose renvoyait à « Quiz éclair »/« Vue d'ensemble », la réécrire **en la
     préfixant `@nav `** (ex. `text: "@nav Méthode en tête ? Direction S'entraîner."`).
   - **Zéro** autre retouche de fond. (Vérifié par script, voir §D.)
4. **Appliquer** = un seul bloc `exerciceBank` (`title`, `savoirFaire`, `exercices`). **Corriger** =
   un `callout` d'intro (reprendre celui du modèle) + un seul bloc `corrigerCopies` (`copies`).

### B. La banque `exercices-<slug>.ts` (reconditionnement, PAS réécriture)

Reprendre les exercices de l'onglet « Application » v1 et les couler dans `TrainerExercice[]` :

```ts
{
  id: "fr-NN-exo-xxx",          // NN = numéro de notion sur 2 chiffres
  notion: "fr-NN",
  savoirFaire: ["…"],           // ids issus de SAVOIR_FAIRE (multi-tag possible)
  difficulte: 1 | 2 | 3,        // reprendre le niveau d'origine s'il existe (« Niveau 1/2/3 ») ; sinon, assigner au plus juste
  enonce: "…",                  // la phrase à analyser (souligner le mot via <u>…</u>)
  question: "…",                // la consigne
  reponseType: "…",             // LE corrigé d'origine, tel quel (nature + justification)
  explication: [],              // VIDE, sauf si la v1 portait un vrai extra distinct
}
```

- **Contenu d'origine conservé** (mêmes phrases, mêmes corrigés). Tu ne fais que **ranger + étiqueter**.
- Les deux **étiquettes nouvelles** à poser : `difficulte` (1/2/3) et `savoirFaire`. Pour le niveau,
  réutiliser les paliers de la v1 (« Niveau 1 : Identifier »…) quand ils existent.
- En tête de chaque exercice non encore travaillé au fond, mettre un commentaire `// TODO refonte exo`
  (repère pour le chantier 2).

### C. La banque `copies-<slug>.ts` (« Corriger des erreurs »)

Dériver ~6-8 copies à partir des **`piegeCard`** du cours v1 (et de tout matériel de détection
d'erreur de la notion). Chaque piège fournit naturellement une copie :

```ts
{ id, copie /* la phrase + l'analyse AFFIRMÉE par un candidat */,
  correcte /* true|false */, verdict /* la bonne analyse */, coteProf? /* l'erreur typique / le test */ }
```

- Le champ `faux` du piège → une copie **fausse** (`correcte: false`) ; le `vrai`/`methode` → `verdict` + `coteProf`.
- **Mélanger** : ~1/3 de copies **justes** (`correcte: true`), pour qu'on ne réponde pas « à corriger »
  machinalement.
- `coteProf` **seulement quand elle apporte**. Terminologie **2020**, vérifié.
- ⚠️ C'est la partie la plus « nouvelle » (texte dérivé). À **signaler pour relecture humaine**.

### Les savoir-faire (constante `SAVOIR_FAIRE` en tête de fiche)

4 à 6 entrées `{ id, label }`, libellés courts. Les dériver des **objectifs** de la v1 (les `e1…`,
`f1…`, `pc1…` en haut du fichier), en **ne gardant que ceux qui sont exerçables** (un geste concret,
avec des exercices derrière) ; les autres restent des points de cours (déjà dans Comprendre).
Listes **déjà imposées** (les reprendre telles quelles) :
- Notion 2 (fonctions) : *sujet · COD/COI · attribut · compléments circonstanciels · épithète/apposition*.
- Notion 5 (phrase complexe) : *juxtaposition/coordination/subordination · relative · conjonctive · circonstancielle*.
- Notion 12 (accord du PP) : *avec être · avec avoir (COD avant) · pronominaux · cas particuliers*.
Pour les autres notions, **proposer** une liste et la **soumettre à validation** (ne pas deviner en silence).

### Câblage `data/index.ts`

Remplacer l'enregistrement de la fiche v1 par la fiche migrée, dans le **même ensemble de niveau**
(`FRANCAIS_COMMUN` pour toutes ces notions, qui sont communes L3/M2). Conserver le **slug d'origine**.

---

## D. Vérification (obligatoire avant de déclarer une notion « faite »)

```bash
# 1. Garantie verbatim cours/méthode (doit afficher VERT). La fiche migrée est comparée
#    automatiquement à SA version d'origine dans git (HEAD) : ne rien committer avant ce contrôle.
node scripts/verifier-cours-methode.mjs \
  "src/app/reviser/[niveau]/epreuves/ecrites/[matiere]/data/francais/<slug>.ts"
#   → Tant que ce n'est pas vert (Cours = verbatim, Méthode = verbatim hors lignes @nav),
#     la notion n'est PAS finie.

# 2. Types + lint :
npx tsc --noEmit
npx eslint "src/app/reviser/[niveau]/epreuves/ecrites/[matiere]/data/francais/<slug>.ts"
```

Plus la **checklist du §7 de `SPEC_STRUCTURE_NOTION.md`** (10 points), dont :
- renvois cliquables **uniquement** en `[texte](fiche:slug)` (interne) ou `[texte](https://…)` (source) ;
  **jamais** `[texte](slug)` sans préfixe (sinon texte mort) ;
- **terminologie 2020**, **aucun tiret cadratin**, aucune annale non sourcée ;
- rendu vérifié **L3 ET M2**.

---

## Ordre d'exécution (IMPORTANT)

1. **Commencer par UNE seule notion pilote : la notion 2 (`fonctions-syntaxiques`).**
2. La livrer complète (script vert + tsc/eslint OK), puis **t'ARRÊTER** et la soumettre à validation
   humaine. Ne migre **pas** les 17 autres avant ce feu vert.
3. Après validation du pilote, enchaîner les notions **3 → 19** en suivant exactement la même
   procédure, une par une, chacune vérifiée avant de passer à la suivante.

## Rappel des interdits

- ❌ Réécrire/raccourcir/« améliorer » le cours, la méthode ou le fond des exercices.
- ❌ Appliquer la doctrine d'exercices (Grévisse) — c'est le chantier 2.
- ❌ Garder « Vue d'ensemble » ou « Quiz éclair ».
- ❌ Mettre un bloc `trainer` dans la notion.
- ❌ Inventer des savoir-faire non exerçables, ou deviner une liste sans la faire valider.
- ❌ Déclarer une notion finie sans script vert + tsc + eslint + rendu L3/M2.
