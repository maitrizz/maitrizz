# Brief Codex — Migration de structure des notions de MATHS (chantier 1)

## Mission (et son périmètre EXACT)

Migrer les fiches de **maths écrites (M2)** existantes vers le **format figé** des 3 maisons /
5 onglets (Apprendre · S'entraîner · Mémo), déjà déployé et validé côté français.

> 🚫 **CE QUE TU NE FAIS PAS.** Tu ne réécris **aucun** contenu pédagogique (cours, méthode,
> énoncés, corrigés, calculs). Tu ne « améliores » pas les exercices, tu ne changes pas leur
> difficulté, tu n'appliques **PAS** de doctrine d'exercices (ce sera un chantier 2, séparé et
> ultérieur). Ici tu **reconditionnes l'existant** dans la nouvelle coquille. **Substance et
> calculs strictement inchangés.**

Bonne nouvelle : les fiches maths ont **la même structure v1** que le français l'avait
(onglets « Vue d'ensemble » + « Cours » + « Méthode » dans le groupe Découvrir, « Quiz éclair » +
« Application » dans Pratiquer, et une carte mentale `mindmapLite`). **Le mapping français
s'applique donc à l'identique.**

À lire avant de commencer, dans l'ordre :
1. `SPEC_STRUCTURE_NOTION.md` — le **contrat précis** de la coquille (fait autorité en cas de doute).
   Il est rédigé pour le français mais **la coquille, les 5 onglets et les règles verbatim sont
   identiques** ; seuls changent la matière et la charte (voir §« Spécificités maths » plus bas).
2. `BRIEF_CODEX_MIGRATION.md` — le brief français équivalent, dont ce fichier est la déclinaison.
3. Le **modèle vivant** (français, déjà migré) — c'est ta référence de forme :
   `…/data/francais/classes-grammaticales.ts`
   `…/data/francais/exercices-classes-grammaticales.ts`
   `…/data/francais/copies-classes-grammaticales.ts`
4. Les types : `src/components/fiche/types.ts` (blocs `exerciceBank`, `corrigerCopies`,
   types `TrainerExercice`, `Fiche`).
5. `CHARTE_MATHEMATIQUES.md` — la charte éditoriale maths (pour ne rien introduire d'interdit).

Chemin des données maths (le `[niveau]`/`[matiere]` sont de **vrais dossiers**, à échapper dans le shell) :
`src/app/reviser/[niveau]/epreuves/ecrites/[matiere]/data/mathematiques/`

---

## Le mapping v1 → nouveau format (identique au français)

| Onglet cible (nouveau) | Source v1 | Traitement |
|---|---|---|
| **Comprendre** (Apprendre) | onglet **« Cours »** | **VERBATIM** (copier-coller le tableau de `blocks`) |
| **Méthode** (Apprendre) | onglet **« Méthode »** | **VERBATIM** |
| **Appliquer** (S'entraîner) | onglet **« Application »** | **Reconditionner** au format `exerciceBank` (voir §B) |
| **Corriger des erreurs** (S'entraîner) | les blocs **`piegeCard`** du Cours | **Dériver** ~6-8 copies (voir §C) |
| **Mémo** | la carte mentale **`mindmapLite`** v1 | **VERBATIM** (elle existe déjà dans chaque fiche) |
| — | onglet **« Vue d'ensemble »** (`sommaireApercu`) | ❌ **SUPPRIMÉ** (redondant) |
| — | onglet **« Quiz éclair »** (`quizBlock`) | ❌ **SUPPRIMÉ de la notion** (relève du hub, non repris) |

`tabGroups` cible = exactement **3 maisons / 5 onglets** :
Apprendre[`comprendre`, `methode`] · S'entraîner[`appliquer`, `corriger`] · Mémo[`memo`].
**Aucun bloc `trainer` dans la fiche** (réservé au hub transversal).

Le cours/méthode migrés doivent passer **verbatim** : seules retouches autorisées = la navigation
(cible + libellé du `ctaBox` de fin d'onglet ; et si une phrase de prose renvoyait vers « Quiz éclair »
ou « Vue d'ensemble », on la réécrit **en la préfixant `@nav `**). Zéro autre retouche de fond.
`comprendre` finit par un `ctaBox` → `methode` ; `methode` finit par un `ctaBox` → `appliquer`.

---

## Spécificités MATHS (les seuls écarts par rapport au brief français)

1. **Calculs et notations = intouchables.** Comme tout passe en verbatim, ne modifie jamais un
   nombre, une formule (`formulaBlock`), un caractère mathématique (ℕ ℤ ℚ ℝ, ×, ÷, ², √, ≤…),
   ni un corrigé. En cas de doute sur un calcul manifestement faux : **ne corrige pas**, signale-le
   pour relecture humaine.
2. **Charte = `CHARTE_MATHEMATIQUES.md`**, pas la charte français. Concrètement, ne **réintroduis**
   rien d'interdit (pas de tiret cadratin, pas d'emoji décoratif, pas d'annale non sourcée). Comme
   tu reconditionnes de l'existant déjà audité, tu n'as en principe rien à retirer ; si tu croises
   un de ces éléments, **laisse-le tel quel** et signale-le (ce n'est pas ta passe).
3. **`SAVOIR_FAIRE` = gestes DISCIPLINAIRES exerçables uniquement.** L'écrit maths est purement
   disciplinaire (la didactique est passée à l'oral). Dérive les savoir-faire des objectifs `e1…eN`
   en tête de fiche, mais **écarte les objectifs didactiques** (ex. « analyser une erreur d'élève et
   proposer une remédiation », « connaître des situations concrètes pour introduire la notion en
   classe ») : ce ne sont pas des filtres d'entraînement écrit → ils restent des points de cours
   (déjà dans Comprendre) et **ne deviennent pas** des `SAVOIR_FAIRE`.
   ⚠️ Ne confonds pas : l'onglet « Corriger des erreurs » = **l'élève repère une erreur de calcul/
   raisonnement dans une copie** (auto-correction disciplinaire), ce n'est PAS de la remédiation
   didactique.
4. **Préfixe des id = `ma-NN`** (NN = numéro de notion sur 2 chiffres, cf. `SUIVI_FICHES_MATHEMATIQUES.md`).
   Ex. pour Nombres relatifs (notion 02) : `notion: "ma-02"`, ids `ma-02-exo-xxx`, `ma-02-copie-xxx`.

---

## Procédure, notion par notion

### A. La fiche `<slug>.ts` — édition EN PLACE
La fiche existe déjà avec sa structure v1 et son bon slug. Tu **restructures ses `tabGroups`** en
place (le fichier garde son nom et son slug ; git conserve la v1 pour le contrôle §D). Reprends
la coquille du modèle français `classes-grammaticales.ts`. Garde l'en-tête maths intact (`slug`,
`numero`, `partie`, `title`, `subtitle`, `metaTitle`, `metaDescription`, `badges`).

- **Comprendre** = les `blocks` de « Cours » v1, **verbatim**.
- **Méthode** = les `blocks` de « Méthode » v1, **verbatim**.
- **Mémo** = le `mindmapLite` v1, **verbatim**.
- **Appliquer** = un seul bloc `exerciceBank` (`title`, `savoirFaire`, `exercices`).
- **Corriger** = un `callout` d'intro (calqué sur le modèle) + un seul bloc `corrigerCopies` (`copies`).
- **Supprimer** les onglets « Vue d'ensemble » (`sommaireApercu`) et « Quiz éclair » (`quizBlock`).

### B. La banque `exercices-<slug>.ts` (reconditionnement, PAS réécriture)
Reprendre les exercices de l'onglet « Application » v1 (`exerciceCard`, paliers `niveauBanner`) et les
couler dans `TrainerExercice[]` :
```ts
{
  id: "ma-NN-exo-xxx",
  notion: "ma-NN",
  savoirFaire: ["…"],        // ids de SAVOIR_FAIRE (multi-tag possible)
  difficulte: 1 | 2 | 3,     // réutiliser les paliers v1 (« Niveau 1/2/3 », « Échauffement ») ; sinon assigner au plus juste
  enonce: "…",               // l'énoncé d'origine (mise en évidence via <u>…</u> si besoin)
  question: "…",             // la consigne d'origine
  reponseType: "…",          // LE corrigé d'origine, tel quel (résultat + justification/calcul)
  explication: [],           // VIDE, sauf vrai extra distinct déjà présent en v1
}
```
Contenu d'origine conservé (mêmes énoncés, mêmes calculs, mêmes corrigés). Tu ne fais que **ranger +
étiqueter** (`difficulte`, `savoirFaire`). Mets `// TODO refonte exo` sur chaque exercice non travaillé
au fond (repère du chantier 2).

### C. La banque `copies-<slug>.ts` (« Corriger des erreurs »)
Dériver ~6-8 copies à partir des **`piegeCard`** du Cours v1 (chaque piège = une erreur typique) :
```ts
{ id: "ma-NN-copie-xxx", copie /* l'énoncé + le calcul/l'analyse AFFIRMÉ par un candidat */,
  correcte /* true|false */, verdict /* la bonne analyse */, coteProf? /* l'erreur typique / le test */ }
```
- **Mélanger** ~1/3 de copies **justes** (`correcte: true`) pour qu'on ne réponde pas « à corriger »
  machinalement.
- `coteProf` **seulement quand elle apporte**.
- ⚠️ C'est la partie la plus « nouvelle » (texte dérivé). À **signaler pour relecture humaine.**

### `SAVOIR_FAIRE` (constante en tête de fiche)
4 à 6 entrées `{ id, label }`, libellés courts et parlants (chips). Les dériver des objectifs `e1…eN`,
**en ne gardant que les gestes disciplinaires exerçables** (voir Spécificités §3). Pour chaque notion,
**proposer** la liste et la **soumettre à validation** (ne pas deviner en silence).

### Câblage `data/index.ts` (le parent, PAS un index maths dédié)
Les fiches maths sont enregistrées dans **`…/data/index.ts`**, importées puis rangées dans
`MATHEMATIQUES_NOTIONS` (commun ; le L3 en est dérivé par filtre). Comme tu **édites la fiche en
place**, il n'y a en principe **rien à changer** dans `index.ts` (même import, même slug). Ne touche
pas à l'ordre ni aux variantes L3/M2 existantes.

---

## D. Vérification (obligatoire avant de déclarer une notion « faite »)
```bash
# 1. Garantie verbatim Cours/Méthode (doit être VERT). La fiche est comparée à SA version git (HEAD) :
#    ne rien committer avant ce contrôle.
node scripts/verifier-cours-methode.mjs \
  "src/app/reviser/[niveau]/epreuves/ecrites/[matiere]/data/mathematiques/<slug>.ts"
#   → Tant que ce n'est pas vert, la notion n'est PAS finie.

# 2. Types + lint :
npx tsc --noEmit
npx eslint "src/app/reviser/[niveau]/epreuves/ecrites/[matiere]/data/mathematiques/<slug>.ts"
```
Plus la **checklist du §7 de `SPEC_STRUCTURE_NOTION.md`** (10 points), dont : renvois cliquables
**uniquement** en `[texte](fiche:slug)` (interne) ou `[texte](https://…)` (source) ; aucun tiret
cadratin ni annale non sourcée réintroduits ; **rendu vérifié L3 ET M2** ; calculs inchangés.

---

## Périmètre et ordre d'exécution (IMPORTANT)

**Hors périmètre (formats spéciaux, à NE PAS migrer) :**
- `methodologie-de-l-epreuve.ts` (méthodologie, gabarit différent) ;
- `problemes-transversaux.ts` (transversal / futur trainer, hors coquille notion) ;
- `vecteurs.ts` (variante **L3 uniquement** greffée sur « Transformations », cas différencié).

**Notions à migrer :** toutes les autres fiches de `…/data/mathematiques/` (les ~27 notions du plan
`SUIVI_FICHES_MATHEMATIQUES.md`, parties 1 à 6).

**Ordre :**
1. **Commencer par UNE seule notion pilote : `numeration-systemes-de-bases` (notion 01).**
2. La livrer complète (script vert + tsc/eslint OK), puis **t'ARRÊTER** et la soumettre à validation
   humaine. Ne migre **aucune** autre notion avant ce feu vert.
3. Après validation du pilote, enchaîner les notions suivantes une par une, chacune vérifiée avant
   de passer à la suivante.

## Rappel des interdits
- ❌ Réécrire/raccourcir/« améliorer » le cours, la méthode, les énoncés, les corrigés ou **un calcul**.
- ❌ Appliquer une doctrine d'exercices — c'est le chantier 2.
- ❌ Garder « Vue d'ensemble » ou « Quiz éclair ».
- ❌ Mettre un bloc `trainer` dans la notion.
- ❌ Faire d'un objectif **didactique** un `SAVOIR_FAIRE`, ou deviner une liste sans la faire valider.
- ❌ Déclarer une notion finie sans script vert + tsc + eslint + rendu L3/M2.
