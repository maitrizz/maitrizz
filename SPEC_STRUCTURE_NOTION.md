# Spec de migration — structure d'une notion (français écrit)

Contrat **exact** à appliquer pour migrer une notion existante vers le format figé du
`GABARIT_NOTION.md`. Destiné à une exécution par Codex, notion par notion, contre le
**modèle de référence** : `data/francais/classes-grammaticales-v2.ts` et ses banques.

> Règle d'or : **les composants ne changent pas**. On ne produit que des **données**
> (la fiche + ses banques) conformes aux types de `src/components/fiche/types.ts`.
> Tout écart de comportement/libellé se règle dans le composant partagé, jamais dans une notion.

---

## 0. Ce qui est mécanique vs ce qui demande du jugement

La migration a **deux natures**, à ne pas confondre :

- **Mécanique (Codex en autonomie)** : la coquille (3 maisons / 5 onglets), le câblage des
  blocs `exerciceBank` / `corrigerCopies` / `mindmapLite`, l'enregistrement dans `index.ts`,
  le respect des types, `tsc`/`eslint`.
- **Jugement (relecture humaine obligatoire)** : **où ranger le contenu existant** de la
  fiche v1 dans les nouveaux onglets (cours → Comprendre, méthode → Méthode), et surtout
  la **qualité des exercices**, qui relève de `DOCTRINE_EXERCICES.md` et **n'est pas** traitée
  par cette passe de structure.

⚠️ **Cette spec migre la COQUILLE et recâble l'existant. Elle ne refait PAS les exercices.**
La refonte des exercices est un second chantier, séquencé après (doctrine dédiée). Lors de
la migration, on **transporte les exercices existants** dans les nouveaux emplacements (mappés
au niveau de difficulté le plus plausible), en **taguant `// TODO refonte exo`** ce qui devra
être musclé. On ne crée pas de nouveaux exercices ici.

---

## 1. Fichiers à produire par notion

Pour une notion de slug `<slug>` (ex. `fonctions-syntaxiques`) :

| Fichier | Rôle | Modèle |
|---|---|---|
| `data/francais/<slug>.ts` | la fiche (coquille + cours + méthode + câblage des banques) | `classes-grammaticales-v2.ts` |
| `data/francais/exercices-<slug>.ts` | banque d'exercices **ouverts** (`TrainerExercice[]`) | `exercices-classes-grammaticales.ts` |
| `data/francais/copies-<slug>.ts` | banque de **copies de candidats** pour « Corriger des erreurs » | `copies-classes-grammaticales.ts` |
| `data/index.ts` | enregistrement de la fiche dans le bon ensemble de niveau | existant |

> **Hors périmètre de la notion :** le `trainer-<slug>.ts` (items fermés espacés) appartient au
> **hub** transversal, pas à la notion. On ne crée **aucun bloc `trainer` dans la fiche**.
> Si une banque trainer existe déjà, on la laisse en place pour le futur hub, sans la câbler ici.

---

## 2. La fiche `<slug>.ts` — coquille obligatoire

Objet `Fiche` (voir `types.ts`). Champs d'en-tête : `slug`, `matiere: "francais"`, `numero`,
`partie`, `title`, `subtitle`, `metaTitle`, `metaDescription`, `badges?`.

`tabGroups` = **exactement 3 maisons, dans cet ordre** :

```
tabGroups:
  ┌ id "apprendre"  label "Apprendre"
  │    ├ tab id "comprendre" label "Comprendre"  → le COURS (blocs repris de la v1, à l'identique)
  │    └ tab id "methode"    label "Méthode"      → la méthode résolue + checkpoints
  ├ id "entrainer"  label "S'entraîner"
  │    ├ tab id "appliquer"  label "Appliquer"           → 1 bloc `exerciceBank`
  │    └ tab id "corriger"   label "Corriger des erreurs"→ 1 callout d'intro + 1 bloc `corrigerCopies`
  └ id "memo"       label "Mémo"
       └ tab id "memo"       label "Mémo"          → 1 bloc `mindmapLite` (synthèse, ne teste pas)
```

Règles fermes :
- **Pas de bloc `trainer`** dans la fiche (réservé au hub).
- Onglet **Comprendre** = le cours complet, **consultable** ; on y renvoie les points de cours
  **non exerçables** (ex. « nature vs fonction »). Terminer par un `ctaBox` vers `methode`.
- Onglet **Méthode** = `methodeGroup` (étapes résolues) + un `exerciceCard` « Checkpoint » après
  chaque méthode. Terminer par un `ctaBox` vers `appliquer`.

### 2 bis. GARANTIE cours/méthode = VERBATIM (règle non négociable)

Le contenu pédagogique **ne se réécrit pas** pendant la migration. Pour Comprendre et Méthode :

- **Comprendre** = **copier-coller verbatim** du tableau de blocs de l'onglet **« Cours »** de la
  fiche v1.
- **Méthode** = **copier-coller verbatim** du tableau de blocs de l'onglet **« Méthode »** de la
  fiche v1.
- **Seules modifications autorisées (navigation uniquement) :**
  1. le `ctaBox` de fin d'onglet (texte, libellé, cible `targetTab`) — il pointe vers le bon onglet
     du nouveau format (`comprendre → methode`, `methode → appliquer`) ;
  2. une éventuelle **phrase d'aiguillage en prose** qui renvoyait vers un onglet supprimé (ex.
     « Direction le Quiz éclair »). Dans ce cas **et ce cas seul**, on réécrit l'aiguillage ET on
     **préfixe son texte par `@nav `** (ex. `text: "@nav Méthode en tête ? Direction S'entraîner."`)
     pour que le vérificateur l'exclue.
- **Interdit :** reformuler, raccourcir, « améliorer », réordonner, fusionner ou ajouter le moindre
  texte de cours/méthode. Zéro retouche de fond.

> **Vérification automatique (pour ne jamais relire à la main) :**
> `node scripts/verifier-cours-methode.mjs <fiche-v1> <fiche-migrée>` compare le Comprendre/Méthode
> migré aux onglets Cours/Méthode v1, en ignorant **uniquement** la navigation (`ctaBox` + lignes
> taguées `@nav`). Il **échoue à la moindre différence de fond**. **Vert = zéro dérive de contenu.**
> Tant qu'il n'est pas vert, la notion n'est pas migrée. La relecture humaine se concentre alors sur
> le rangement et les exercices, **jamais sur le cours/méthode**. (Validé sur la notion 1 : Cours =
> verbatim ✅ ; la seule différence de Méthode est l'aiguillage vers le Quiz éclair supprimé.)

### 2 ter. Onglets v1 SUPPRIMÉS à la migration (décision 28/06/2026)

Le format figé n'a que les 5 onglets du §2. Deux onglets de la v1 **disparaissent** (ils n'ont pas
d'équivalent et le contenu n'est pas reporté ailleurs) :

- **« Vue d'ensemble »** (groupe « Découvrir », bloc `sommaireApercu`) → **SUPPRIMÉ.** C'est un
  mini-sommaire qui annonce le Cours ; redondant avec Comprendre et avec le Mémo.
- **« Quiz éclair »** (groupe « Pratiquer », questions fermées) → **SUPPRIMÉ de la notion.** Le quiz
  fermé/espacé relève du **hub** (chantier transversal ultérieur), qui construira ses propres banques
  selon la doctrine ; l'ancien contenu Quiz éclair **n'est pas réutilisé**.
- Onglet **Appliquer** = **un seul** bloc `exerciceBank` (`savoirFaire` + `exercices`). Rien d'autre.
- Onglet **Corriger des erreurs** = un `callout` d'intro (« vous passez de l'autre côté de la
  copie ») + **un seul** bloc `corrigerCopies` (`copies`).
- Onglet **Mémo** = un `mindmapLite` (centre + branches). Ne teste pas.

---

## 3. Les savoir-faire (`SAVOIR_FAIRE`)

En tête de fichier, une constante `SAVOIR_FAIRE = [{ id, label }, …]` :
- **4 à 6** entrées, libellés **courts et parlants** (chips).
- Règle de discipline (`GABARIT §4`) : un savoir-faire = un **geste concret exerçable**
  (au moins quelques exercices derrière). S'il n'est pas exerçable dans CETTE notion, ce n'est
  pas un filtre → c'est un **point de cours** (il va dans Comprendre).
- Ces `id` sont la clé de jointure : chaque exercice et chaque copie porte un sous-ensemble de ces
  `id` dans son champ `savoirFaire: string[]` (**multi-tag** autorisé et encouragé en niveaux 2-3).

Découpages déjà cadrés (`GABARIT §4`) : notion 2 (fonctions) = sujet · COD/COI · attribut ·
compléments circ. · épithète/apposition ; notion 5 (phrase complexe) = juxtaposition/coordination/
subordination · relative · conjonctive · circonstancielle ; notion 12 (accord du PP) = avec *être* ·
avec *avoir* (COD avant) · pronominaux · cas particuliers. Pour les autres, proposer une liste
**à valider en relecture** avant de remplir.

---

## 4. La banque d'exercices `exercices-<slug>.ts`

Type `TrainerExercice[]`. Pour la **migration**, on transporte l'existant ; le **calibrage** suit
`DOCTRINE_EXERCICES.md`. Forme d'un item :

```ts
{
  id: "fr-NN-exo-xxx",        // NN = numéro de notion sur 2 chiffres
  notion: "fr-NN",
  savoirFaire: ["…"],         // ids issus de SAVOIR_FAIRE (multi-tag possible)
  difficulte: 1 | 2 | 3,      // 1 Fondamentaux · 2 Concours (cible) · 3 Expert (au-delà)
  enonce: "…",                // la phrase/extrait (souligner le mot via <u>…</u>)
  question: "…",              // la consigne
  reponseType: "…",           // LE corrigé complet (nature + justification), tel qu'au jour J
  explication: [],            // VIDE par défaut ; ne porte qu'un EXTRA distinct (piège, « ce que le correcteur attend »)
  // attendus?: […]           // optionnel, surtout niveaux 2-3 (réactivé en tranche transversale)
}
```

Règles fermes (anti-redondance, `GABARIT §3` et journal) :
- **Un seul texte de corrigé.** `reponseType` = le corrigé complet. `explication` reste **vide**
  sauf vrai extra (jamais une paraphrase du `reponseType`).
- Difficulté **croissante** dans le fichier (bloc 1, puis 2, puis 3), commentaires de section comme
  dans le modèle.
- Les `id` sont **stables et uniques** (servent à la persistance localStorage).

## 5. La banque de copies `copies-<slug>.ts`

Type : le `copies[]` du bloc `corrigerCopies`. Chaque copie :

```ts
{ id, copie /* la phrase + l'analyse affirmée par le candidat */,
  correcte /* true|false */, verdict /* la bonne analyse */, coteProf? /* seulement si ça apporte */ }
```

Règles : **mélange de copies justes ET fausses** (sinon l'élève répond « à corriger » machinalement) ;
`coteProf` **seulement quand elle apporte** (l'erreur typique, le test attendu) ; viser ~6-8 copies.

---

## 6. Câblage `data/index.ts`

- Importer la fiche et l'enregistrer dans le **bon ensemble de niveau** : `FRANCAIS_COMMUN` (commune L3/M2)
  sauf cas différencié L3≠M2 (alors fabrique par niveau, cf. Partie 3). La grande majorité des
  notions 01-16 sont **communes**.
- Conserver le **slug définitif** (ex. `classes-grammaticales`), pas le suffixe `-v2`. Pour la
  notion 1 : la v2 **remplace** la v1 (slug `classes-grammaticales`, ancien fichier v1 retiré).

---

## 7. Checklist de conformité (par notion, avant de passer à la suivante)

1. [ ] 3 maisons / 5 onglets, exactement comme §2 ; aucun bloc `trainer` dans la fiche.
2. [ ] Comprendre = cours v1 repris sans réécriture du fond ; CTA → Méthode.
3. [ ] Méthode = méthodes résolues + checkpoints ; CTA → Appliquer.
4. [ ] `SAVOIR_FAIRE` : 4-6 entrées exerçables ; chaque entrée a de la matière (exercices) derrière.
5. [ ] Appliquer : un seul `exerciceBank`. Corriger : callout + un seul `corrigerCopies`.
6. [ ] Chaque exercice : `reponseType` complet, `explication` vide sauf extra réel, `difficulte` 1/2/3, `savoirFaire` valides.
7. [ ] Copies : mélange juste/faux, ~6-8, `coteProf` seulement si utile.
8. [ ] Renvois cliquables uniquement en `[texte](fiche:slug)` (interne) ou `[texte](https://…)` (source) ; **jamais `[texte](slug)` sans préfixe** (sinon texte mort).
9. [ ] Pas de tiret cadratin, terminologie **2020**, aucune annale non sourcée (charte §9).
10. [ ] Enregistré dans `index.ts` ; `npx tsc` OK ; `eslint` OK ; rendu vérifié **L3 et M2**.

> **Ce que cette passe ne fait pas :** muscler/réécrire les exercices (→ `DOCTRINE_EXERCICES.md`,
> chantier suivant) ; brancher les voyants « Où j'en suis » / le hub (→ tranches transversales).
