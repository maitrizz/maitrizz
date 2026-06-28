# Suivi des fiches Français écrites (L3 & M2)

État d'avancement. Légende : ✅ fait · 🔄 en cours · ⬜ à faire.

Deux étapes par fiche : **MEF** (mise en forme HTML → format du site) et **Audit** (passe éditoriale charte §9, voir `CHARTE_FRANCAIS.md`).

## Méthodologie (numéro 0, en tête de parcours)

| #  | Notion | MEF | Audit §9 |
|----|--------|-----|----------|
| 00 | Méthodologie de l'épreuve écrite (L3 et M2, contenus distincts) | ✅ | ✅ |

## Partie 1 — Grammaire / Orthographe

| #  | Notion | MEF | Audit §9 |
|----|--------|-----|----------|
| 01 | Classes grammaticales | ✅ | ✅ (2015 → 2020 corrigé, quiz e1 couvert) |
| 02 | Fonctions syntaxiques | ✅ | ✅ |
| 03 | Groupe nominal | ✅ | ✅ |
| 04 | Groupe verbal | ✅ | ✅ |
| 05 | Phrase complexe | ✅ | ✅ (quiz pc7 ajouté) |
| 06 | Types et formes de phrase (nouvelle notion, comble l'angle mort identifié face au Grévisse) | ✅ | ✅ (audit §9 fait, 3 corrections : voir note) |
| 07 | Modes et temps | ✅ | ✅ |
| 08 | Temps du passé | ✅ | ✅ |
| 09 | Présent / futur / conditionnel / subjonctif | ✅ | ✅ |
| 10 | Formes verbales non conjuguées (infinitif, participe, gérondif) — la voix passive/pronominale est en notion 4 (GV) | ✅ | ✅ |
| 11 | Accords dans le GN et le GV | ✅ | ✅ |
| 12 | Accord du participe passé | ✅ | ✅ |
| 13 | Les homophones grammaticaux (ponctuation déplacée en notion 5) | ✅ | ✅ |
| 14 | Cohérence textuelle | ✅ | ✅ |
| 15 | Énonciation et discours rapporté | ✅ | ✅ |
| 16 | Phonologie | ✅ | ✅ |

> **Nouvelle notion 06 « Types et formes de phrase » (27/06/2026).** Issue de la comparaison avec le Grévisse de l'enseignant (compagnon CRPE) : la seule notion réellement absente du périmètre était les **types** (déclaratif, interrogatif, injonctif, exclamatif) et **formes** (négative, emphatique, impersonnelle) de phrase. Fiche au **modèle actuel** (le `GABARIT_NOTION.md` en labo réserve la nouvelle architecture à la notion 1). Périmètre tenu sans doublon : forme **passive** renvoyée à la notion 4 (groupe verbal, où vit la voix passive), **interrogation indirecte** + **ponctuation** à la notion 5, **modalisation** (≠ type) à la notion 15. `slug: types-et-formes-de-phrase`, ajoutée à `FRANCAIS_COMMUN` (commune L3/M2).
>
> **Insérée en notion 06 (juste après Phrase complexe) avec renumérotation complète.** D'abord posée en `numero: 21` pour ne rien toucher, puis (à la demande, pour la cohérence du produit) **insérée à sa vraie place thématique** : toutes les fiches de numéro ≥ 6 décalées de +1 (champs `numero` ET mentions « notion N » en clair, ~60). Lexique = 17/18/19, Partie 3 = 20 (Produire) / 21 (Culture). Contrôle croisé « renvoi `[notion N](fiche:slug)` ↔ numéro réel du slug » : 100 % OK ; `tsc` OK ; hub affiché dans l'ordre 1→21.
>
> **Audit §9 de la notion 06 (27/06/2026).** Passe mécanique propre (0 cadratin, 0 ancienne terminologie, 0 annale non sourcée). 3 corrections de jugement appliquées : (1) **fond/terminologie** : la négation *ne… jamais / plus / guère* était classée « totale », corrigée en **partielle** (porte sur un élément : temps, degré) ; seule *ne… pas / point* est totale (analyse rigoureuse M2) ; cours + méthode + exercice harmonisés, ajout de l'avertissement sur le double emploi de *totale/partielle* (interrogation ≠ négation). (2) **cohérence** : l'objectif **tp7** (regard enseignant) était orphelin (ni enseigné ni testé) → ajout d'un encart `primaireBox` (programme cycles 2-3, ponctuation, erreurs d'élèves typiques, sourcé Éduscol) + 9e question de quiz ; compte annoncé 8 → 9. (3) **renvois** : passés en `[texte](fiche:slug)` (forme cliquable). `tsc` + `eslint` OK, rendu vérifié L3/M2. **Bonus :** corrigé 2 renvois cassés (sans préfixe `fiche:`) dans `fonctions-syntaxiques.ts` ; scan complet du dossier = plus aucun renvoi cassé.

## Partie 2 — Lexique

| #  | Notion | MEF | Audit §9 |
|----|--------|-----|----------|
| 17 | Formation des mots | ✅ | ✅ |
| 18 | Relations sémantiques | ✅ | ✅ |
| 19 | Figures et registres | ✅ | ✅ |

## Partie 3 — Développement rédigé

| #  | Notion | MEF | Audit §9 |
|----|--------|-----|----------|
| 20 | Produire le développement rédigé (fusion ex « plan » + « rédiger ») | ✅ | ✅ (réorientée, validée à l'écran le 28/06/2026) |
| 21 | Références culturelles et littéraires (transformée en recueil) | ✅ | ✅ (nouveau format recueil, validé à l'écran le 28/06/2026) |

> **Réorientation Partie 3 (juin 2026).** Les sujets officiels (CRPE 2025/2026 et sujet 0 bac+3, voir mémoire `reference_crpe_partie3_nature`) montrent que la Partie 3 est une **réflexion argumentée** suscitée par le texte (question d'idées, appui texte + culture + lectures), et **non un commentaire de procédés**. Les anciennes fiches 19/20 étaient bâties sur le modèle « analyse de procédés » : elles ont été **fusionnées et réorientées** en une notion 19 « Produire le développement rédigé » (`francais/produire-le-developpement.ts`). **Les attendus diffèrent entre L3 et M2** : la fiche est donc **différenciée par niveau (deux fabriques distinctes)** dans ce fichier : `ficheProduireDeveloppementM2Builder` (réflexion ample, texte + culture + lectures, exemple Maalouf 2026, 9 pts) et `ficheProduireDeveloppementL3Builder` (développement court « une trentaine de lignes », ancré sur le texte, gestion du temps, exemple sujet 0 Perrault, 10 pts). La culture littéraire passe de 21 à **20**. Renvois internes (méthodologie, culture) et `index.ts` mis à jour ; anciens fichiers `construire-un-plan.ts` et `rediger-le-developpement.ts` supprimés. `tsc` OK, rendu OK (L3 + M2).
>
> **Notion 20 refondue en recueil (22/06/2026).** La notion 20 n'est plus une fiche-notion classique : c'est un **recueil de références culturelles et littéraires mobilisables**, classées par grands thèmes (écriture de soi, art et réel, enfance, autrui, voyage, nature, liberté, bonheur, condition féminine, guerre, pouvoir des mots, progrès...). Présentation **à libellés explicites** (pas d'icônes), via un **bloc dédié `referenceGrid`** (`types.ts` + `RenderBlock.tsx`) pour ne pas impacter les autres fiches. Chaque carte porte un **badge de genre** (essai, roman dystopique, fable, épopée, théâtre…) puis tient en trois temps : **En bref** (un vrai résumé concret de l'œuvre, pour comprendre de quoi elle parle même sans l'avoir lue), **Comment l'utiliser** (liste d'**idées à défendre** : chaque item est une idée directrice prête à servir d'axe, l'œuvre venant à l'appui) et **Formulation type** (encart : une phrase de concours prête à adapter). Champ `genre` du bloc `referenceGrid`. **5 domaines / 16 thèmes** (soi et les autres ; arts, mots, pensée ; l'individu et le monde ; société et histoire ; grandes questions : temps, héros, rire, justice), ~60 œuvres. Onglets « Mode d'emploi » + « Le référentiel » par domaines, **sans quiz ni auto-évaluation**. La **méthode** (comment citer / intégrer / relier une référence) a été **rapatriée dans la notion 19** (développée côté M2, allégée côté L3). Recueil **commun L3/M2** (une fabrique, deux exports). Curation : œuvres établies, attributions/dates sûres, niveau cycle 4 + lycée. `tsc` OK, rendu OK.
>
> Câblage des parcours L3/M2 inchangé : segment d'URL `[niveau]` (`/reviser/l3/...` et `/reviser/m2/...`), une fabrique unique par fiche (contenu disciplinaire commun, seul le cadre diffère : durée, barème, longueur, ouverture lycée pour L3).

---

## CHANTIER TERMINÉ
**Rattrapage d'audit §9 sur les notions 01-10 : FAIT.** Les 10 fiches sont saines (terminologie 2020, conditionnel = temps de l'indicatif, périmètre nature/fonction, renvois corrects, pas de tirets cadratins ni d'annales non sourcées). Corrections appliquées : notion 01 (« 2015 » → « 2020 » partout, « tolérée avec réserve » → « à éviter », question de quiz re-rattachée à l'objectif e1) ; notion 05 (ajout d'une question de quiz couvrant l'objectif pc7, annonce 8 → 9 questions).

**TOUT LE FRANÇAIS ÉCRIT EST PRODUIT, AUDITÉ §9 ET VALIDÉ À L'ÉCRAN (28/06/2026) :** méthodologie (L3/M2) + 21 notions, y compris la Partie 3 refondue (notion 20 « Produire le développement rédigé » et notion 21 « Référentiel culturel »). Plus aucun chantier français en attente.

---

## CHANTIER EN COURS — Refonte de structure (migration nouveau format)

Migration des notions 2 à 19 vers le format figé (voir `BRIEF_CODEX_MIGRATION.md`, `SPEC_STRUCTURE_NOTION.md`, `GABARIT_NOTION.md`). **MIGRATION 2-19 FAITE, VÉRIFIÉE ET VALIDÉE À L'ÉCRAN le 28/06/2026** (18 notions ; rendu contrôlé en L3 et M2). Contrôle groupé : verbatim cours/méthode **18/18 vert**, structure conforme (5 onglets, blocs attendus, Vue d'ensemble + Quiz éclair + trainer absents), `tsc`/`eslint` 0 erreur, 18 fiches enregistrées dans `FRANCAIS_COMMUN`, exercices reconditionnés (tagués `// TODO refonte exo`). **Correctif appliqué :** Codex avait rempli les copies « Corriger des erreurs » des notions 6 et 10 avec du texte bouchon (faute de `piegeCard` source) → **13 copies réécrites à la main** (vraies analyses de candidat, terminologie 2020, 3 justes/5 fausses chacune). **Restent : (1)** basculer la notion 1 v2 → officielle (slug `classes-grammaticales`, retirer la v1) pour l'aligner sur les autres ; **(2)** le travail n'est pas committé (working tree).

### Points de contenu à traiter au chantier 2 / audit §9 (NE PAS corriger pendant la migration)

Repérés en relisant les migrations. Le cours est repris verbatim, donc ces corrections de fond se font **après**, en passe dédiée.

- **Notion 2 (fonctions) — incohérence apposition / épithète détachée.** Le cours classe le même cas (adjectif détaché entre virgules renvoyant au sujet) de deux façons contradictoires : « Seul, il repartit » = **épithète détachée** (carte Épithète) mais « Paul, ravi, sourit » = **apposition** (carte Apposition). En terminologie 2020, un adjectif détaché est plutôt une épithète détachée. À harmoniser (probablement sur « épithète détachée ») + ajuster la copie `fr-02-cop-paul-apposition` (« Corriger des erreurs ») qui a hérité de l'ambiguïté.
