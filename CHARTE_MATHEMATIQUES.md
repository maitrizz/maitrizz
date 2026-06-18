# Charte Maitrizz — Mathématiques écrites (M2, puis L3)

Référence pour **écrire juste du premier coup** et **relire vite** les fiches de mathématiques écrites du CRPE. Sœur de `CHARTE_FRANCAIS.md` : les règles de **style (§5)**, **pédagogie (§6)**, **structure (§7)** et la **logique d'audit (§8-9)** sont communes aux deux matières ; seuls le **cadre (§0)** et la **terminologie/notation (§2)** sont propres aux maths.

> Convention : `[À VALIDER]` = hypothèse à confirmer. `[À VÉRIFIER SOURCE OFFICIELLE]` = à sourcer avant publication. Priorités d'un défaut : **P1** erreur de fond (calcul, formule, démonstration) · **P2** notation/vocabulaire/périmètre · **P3** style/cohérence.

> Production : on traite **tout le M2 d'abord**, puis on **dérive le L3** (seul le M2 a des sources de contenu). Avancement : `SUIVI_FICHES_MATHEMATIQUES.md`.

---

## 0. Cadre de l'épreuve (ce qui diffère entre M2 et L3)

| | **M2 (bac+5, ancien concours)** | **L3 (bac+3, réforme 2025)** |
|---|---|---|
| Statut des maths | Épreuve **disciplinaire autonome** | **Intégrées** à une épreuve commune français + maths |
| Durée | 3 h | 4 h (français + maths) `[À VÉRIFIER SOURCE OFFICIELLE]` |
| Barème | /20, coeff. 3, ≥ 5 exercices indépendants `[À VÉRIFIER SOURCE OFFICIELLE]` | /20 (**10 pts français + 10 pts maths**) `[À VÉRIFIER SOURCE OFFICIELLE]` |
| Programme | Cycle 4 (BOEN juillet 2020) **+ « Nombres et calculs » de Seconde** (BOEN spécial n°1, 22 janv. 2019) | Cycle 4 **seul** `[À VÉRIFIER SOURCE OFFICIELLE]` |
| Cadre réglementaire | Arrêté du 25 janvier 2021 `[À VÉRIFIER SOURCE OFFICIELLE]` | Arrêté du 17 avril 2025 + sujet zéro 2026 `[À VÉRIFIER SOURCE OFFICIELLE]` |
| Calculatrice | Autorisée, mode examen | `[À VÉRIFIER SOURCE OFFICIELLE]` |

**Le fil rouge officiel du M2 (le vrai discriminant des meilleures copies) :**
> « Les notions traitées doivent pouvoir être abordées avec le recul nécessaire à l'enseignement des mathématiques aux cycles 1, 2 et 3. »

Conséquence pour les fiches : ce n'est pas une épreuve d'expertise mathématique pour elle-même. Le jury valorise un **raisonnement rigoureux, justifié et rédigé**, et le **lien avec ce qu'on enseignera à l'école**. Voir §6.

> Conséquence pour le couple M2/L3 : le **contenu disciplinaire est largement commun**. Pour le L3, on retire la matière hors programme cycle 4 (ce qui est marqué « Seconde » dans les fiches) et on ajuste le cadre. La dérivation L3 se fera plus tard (cf. suivi).

---

## 1. Sources et exactitude
- Sources officielles **uniquement** : Éduscol, BOEN, programmes en vigueur, sujets et rapports de jury.
- **Programme de référence** : cycle 4 (BOEN n°31 du 30 juillet 2020) + « Nombres et calculs » de Seconde (BOEN spécial n°1 du 22 janvier 2019).
- Jamais de blog/forum/annale recopiée comme source de fond.
- Formulation ou résultat officiel incertain → écrire `[À VÉRIFIER SOURCE OFFICIELLE]`, ne pas inventer.
- **Toute formule, tout calcul, toute démonstration est vérifié avant publication** (c'est le P1 propre aux maths : une formule fausse est plus grave et plus visible qu'une maladresse de style).
- **Attendus officiels (périmètre, pas volume)** : chaque fiche couvre les **attendus de fin de cycle** et **connaissances et compétences associées** de sa notion : aucun attendu oublié, rien hors du périmètre du concours. Cette règle fixe **ce qui doit être présent**, pas **la longueur** : la profondeur reste gouvernée par §6 (condenser, ne pas tout dire ; un attendu peut être couvert en quelques lignes). La couverture du périmètre est tracée dans la checklist de `SUIVI_FICHES_MATHEMATIQUES.md`.

## 2. Notation et terminologie mathématiques

> Règle générale : on emploie **la notation et le vocabulaire du programme officiel** (cycle 4 / Éduscol). En cas de doute sur une notation ou un terme attendu, on confirme à la source officielle plutôt que d'inventer (cf. §1).

### 2.1 Écriture des nombres (conventions françaises officielles)
- **Séparateur décimal = la virgule** : `3,5` (jamais `3.5`).
- **Séparateur de milliers = espace** (insécable) : `1 000`, `25 000` (jamais de virgule ni de point).
- **Multiplication = `×`** (jamais `*` ni la lettre `x`). Division posée = `÷` ou la barre de fraction.
- **Unités** : espace entre le nombre et l'unité (`5 cm`, `3 kg`, `12 cm²`). Symboles `≤ ≥ ≠ ≈`. Approché → `≈`, jamais `=`.
- **Valeur exacte vs valeur approchée** : distinguer explicitement (ex. « valeur exacte `√2` », « valeur approchée `≈ 1,41` »). Préciser l'arrondi (« arrondi au dixième »).

### 2.2 Ensembles de nombres
- Notations : `ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ`. Nommer correctement (entiers naturels, entiers relatifs, décimaux, rationnels, réels).
- Un **décimal** est un rationnel dont l'écriture décimale est finie ; ne pas confondre « décimal » et « nombre à virgule ».

### 2.3 Vocabulaire à employer / à proscrire
- **« chiffre » ≠ « nombre »** : un chiffre est un symbole (0 à 9), un nombre est une quantité.
- **« diviseur » / « multiple »** corrects ; ne pas dire « ça tombe juste » dans une définition (réservé à l'intuition).
- **« égalité » ≠ « équation »** ; **« calculer » ≠ « résoudre »** ; **« développer » ≠ « factoriser »**.
- **Théorème / propriété / réciproque / contraposée** : ne pas employer l'un pour l'autre. La **réciproque** de Pythagore sert à prouver qu'un triangle EST rectangle ; la **contraposée** à prouver qu'il NE l'est PAS.
- Intervalles : notation française à crochets `]a ; b[`, `[a ; b]` (jamais les parenthèses à l'anglo-saxonne `(a,b)`).

### 2.4 Géométrie
- Angles en degrés avec le symbole `°` ; notation d'angle avec accent circonflexe.
- Droites parallèles `//`, perpendiculaires `⊥`.
- **Vecteurs** : notation fléchée ; vocabulaire exact (vecteurs égaux, vecteur nul, opposé, somme, relation de Chasles).
- **Transformations** : symétrie axiale (réflexion), symétrie centrale, translation, rotation, homothétie. Une homothétie de rapport `k` conserve les angles, multiplie les longueurs par `k`.
- **Effet d'un agrandissement/réduction de rapport `k`** : longueurs `×k`, aires `×k²`, volumes `×k³` (erreur classique à toujours signaler).

### 2.5 Grandeurs et mesures
- Conversions : aires `×100` par palier, volumes `×1000` par palier ; correspondances `1 dm³ = 1 L`, `1 cm³ = 1 mL`.
- Grandeurs composées / produit / quotient : vitesse, débit, masse volumique (densité). Donner toujours l'unité composée (`km/h`, `€/L`).

### 2.6 Recul primaire (fil rouge M2)
Quand une notion s'y prête, expliciter **comment elle s'enseigne à l'école et pourquoi** (ex. pourquoi l'algorithme de la division posée fonctionne, construction du nombre en CP). C'est la plus-value attendue par le jury, pas un hors-sujet.

## 3. Périmètre des notions
- Chaque fiche reste **dans sa notion** (voir le plan consolidé du suivi). Pas de méthode ni d'exercice qui déborde sur une autre fiche.
- Les renvois explicites entre fiches remplacent la redite (ex. « la règle `×k²/×k³` est détaillée dans la fiche Aires-volumes »).
- Exception unique : un rappel minimal pour poser un prérequis.

## 4. Annales et affirmations factuelles
- Pas de référence d'annale précise (année, sujet, n° d'exercice) **sans source vérifiée**.
- Par défaut, adoucir : « sujet de type CRPE », « format identique au concours », « erreur fréquente », « grand classique de l'épreuve ».

## 5. Ton et style (commun avec le français)
- Professionnel, clair, chaleureux ; sérieux mais pas froid ; pédagogique.
- **Pas** de style IA, de phrases génériques, de ton marketing, de blabla.
- **Jamais de tiret cadratin (—).** Utiliser deux-points, parenthèses, ou couper la phrase.
- **Pas d'emojis**, nulle part : ni texte, ni titres, ni icônes d'onglets ou d'encadrés (ça fait « IA »). **Seules exceptions conservées comme repères : ⚠️ (attention/piège) et 💡 (astuce/idée).** Sinon, libellé clair (« Attention : », « Astuce : »).
  - *Mise en œuvre :* côté contenu, on retire les emojis du texte et des titres, et on **vide les champs `icon:`** des onglets et encadrés (`icon: ""`), en ne gardant que ⚠️ et 💡. C'est l'état des fiches français validées, à reproduire.
- Exemples concrets et chiffrés, qui aident la mémorisation.

## 6. Pédagogie
- Efficace et mémorisable, **pas** encyclopédique. Ne pas tout dire ; condenser (cf. décision : MEF et condensation dans la même passe).
- Méthode pas-à-pas, réflexes, exemples travaillés, lien explicite avec les attendus du concours.
- **Vraie valeur ajoutée** vs une fiche classique : plus de clarté, de méthode, et le **recul primaire** (§2.6) là où il compte.
- Toujours **justifier et rédiger** un raisonnement (c'est ce que le jury note), pas seulement donner un résultat.

## 7. Structure et cohérence
- Onglets : Découvrir (Vue d'ensemble, Cours, Méthode), Pratiquer (Quiz, Application, Type CRPE, Côté prof), Réviser (Flashcards, Mémo, Auto-évaluation).
- Cohérence interne : numérotation continue, renvois corrects, comptes exacts (« 9 questions » = 9 questions), objectifs ↔ quiz ↔ auto-évaluation alignés.
- CTA de fin d'onglet vers le bon onglet suivant.

---

## 8. Grille d'audit

### 8.1 Mécanique (recherche de texte, coût ~0 token)
| Motif | Révèle | Priorité |
|---|---|---|
| `—` | tiret cadratin interdit | P3 |
| chiffre suivi d'un point puis d'un chiffre (`\d\.\d`) | séparateur décimal anglo-saxon au lieu de la virgule | P2 |
| `*` entre deux nombres, ou ` x ` comme multiplication | symbole de multiplication incorrect (`×`) | P2 |
| `(0,` `,1)` ou intervalle entre parenthèses | notation d'intervalle anglo-saxonne au lieu de `]a ; b[` | P2 |
| `nom verbal`, terminologie hors-champ | (rare en maths) à vérifier | P2 |
| `Annale 20`, `session 20`, `sujet 20`, `depuis 202` | annale/datation à sourcer ou adoucir | P2 |
| `[À VÉRIFIER`, `[À VALIDER` | point en suspens | P1 |
> Dossiers avec espaces → utiliser `grep -r` (gère les espaces), pas une boucle sur une liste de fichiers.

### 8.2 Jugement (une passe par fiche)
1. **Exactitude mathématique** : chaque formule, calcul, énoncé et démonstration est juste. **P1**
2. Notation et vocabulaire conformes (§2). **P2**
3. Périmètre : aucun débordement sur une autre fiche (§3). **P2**
4. Annales/affirmations non sourcées → à adoucir (§4). **P2**
5. Cohérence interne (numérotation, renvois, comptes, objectifs/quiz). **P3**
6. Pédagogie : clarté, mémorisation, raisonnement rédigé, **recul primaire** quand la notion l'exige. **P3**
7. Style (ton Maitrizz, pas de style IA/marketing, pas de cadratin). **P3**
8. Marquage « Seconde » : tout contenu hors programme cycle 4 est repéré (sert à la future dérivation L3). **P2**

---

## 9. Prompt d'audit réutilisable (une fiche → un rapport)

```
Tu es éditeur pédagogique expert CRPE, spécialiste des mathématiques. Audite la fiche ci-dessous
selon la charte Maitrizz Mathématiques (écrits, M2). Ne réécris RIEN : produis seulement un
rapport de défauts, priorisé.

Pour chaque défaut : priorité (P1 fond / P2 notation-vocabulaire ou périmètre / P3 style ou cohérence),
emplacement (onglet + bloc ou citation courte), problème (1 phrase), correction proposée (1 phrase).

Vérifie en particulier :
1. Exactitude mathématique : toute formule, tout calcul, tout énoncé, toute démonstration est juste.
2. Notation et vocabulaire : virgule décimale, espace de milliers, × (pas * ni x), intervalles ]a ; b[,
   ensembles ℕ⊂ℤ⊂𝔻⊂ℚ⊂ℝ, théorème/réciproque/contraposée distincts, vecteurs et transformations corrects,
   effet d'un rapport k (longueurs ×k, aires ×k², volumes ×k³).
3. Périmètre : aucun débordement sur une autre fiche.
4. Annales/affirmations non sourcées → à adoucir.
5. Style : aucun tiret cadratin ; ton pro/chaleureux, pas de style IA ni marketing.
6. Cohérence interne (numérotation, renvois, comptes, objectifs/quiz/auto-éval).
7. Pédagogie : raisonnement justifié et rédigé, recul primaire (lien avec l'enseignement à l'école) quand la notion l'exige.
8. Contenu hors programme cycle 4 (niveau Seconde) bien repéré.

Termine par : verdict global (Publiable / Retouches mineures / Reprise nécessaire)
et les 3 corrections les plus importantes.
```
