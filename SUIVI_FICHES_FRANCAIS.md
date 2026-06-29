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

Migration des notions 2 à 19 vers le format figé (voir `BRIEF_CODEX_MIGRATION.md`, `SPEC_STRUCTURE_NOTION.md`, `GABARIT_NOTION.md`). **MIGRATION 2-19 FAITE, VÉRIFIÉE ET VALIDÉE À L'ÉCRAN le 28/06/2026** (18 notions ; rendu contrôlé en L3 et M2). Contrôle groupé : verbatim cours/méthode **18/18 vert**, structure conforme (5 onglets, blocs attendus, Vue d'ensemble + Quiz éclair + trainer absents), `tsc`/`eslint` 0 erreur, 18 fiches enregistrées dans `FRANCAIS_COMMUN`, exercices reconditionnés (tagués `// TODO refonte exo`). **Correctif appliqué :** Codex avait rempli les copies « Corriger des erreurs » des notions 6 et 10 avec du texte bouchon (faute de `piegeCard` source) → **13 copies réécrites à la main** (vraies analyses de candidat, terminologie 2020, 3 justes/5 fausses chacune). **Notion 1 alignée le 28/06/2026** : le prototype v2 est devenu la version officielle (slug `classes-grammaticales`, en-tête d'origine restauré, `classes-grammaticales-v2` supprimé). Verbatim vert, tsc/eslint OK. **Tout committé** (commit `1085379` sur `feat/refonte-fiches-francais`, arbre propre). → **Chantier 1 (structure) TERMINÉ pour les 19 notions de grammaire/lexique.**

## CHANTIER 2 EN COURS — Refonte des exercices façon Grévisse (`DOCTRINE_EXERCICES.md`)

Passe éditoriale notion par notion : on remplace les exercices reconditionnés (tagués `// TODO refonte exo`) par des exercices **difficiles, pertinents, exigeants**, calibrés Grévisse (3 niveaux, 4+ types de tâches dont « prouver par une manipulation », citations sourcées vérifiées en niveaux 2-3).

> **CHANTIER 2 TERMINÉ ET VALIDÉ À L'ÉCRAN — 18 notions de grammaire/lexique (02 → 19), validation le 29/06/2026.** Chaque banque = 6 Fondamentaux / 10 Concours / 5 Expert (≈ 21 exercices, **378 au total**), 0 `TODO refonte` restant, `tsc`/`eslint` verts, 0 tiret cadratin dans les données, rendu HTTP 200 en L3 et M2, **revue à l'écran OK**. Trois commits sur `feat/refonte-fiches-francais` : `3e7bd70` (02-09 + audit), `a71b68e` (10-13), `1da67d5` (14-19). Restent, hors grammaire/lexique : la **méthodologie (00)** et la **Partie 3 (20 Produire, 21 Référentiel)**, à arbitrer (recueil/méthode : format différent des banques d'exercices).

| Notion | État chantier 2 |
|--------|-----------------|
| 02 Fonctions syntaxiques (**pilote**) | ✅ **Refonte faite + validée à l'écran le 28/06/2026** (L3 et M2). Banque 6 Fondamentaux / 11 Concours / 4 Expert ; types variés (identifier · repérer · classer en deux listes · distinguer · prouver par manipulation) ; citations vérifiées Pascal/Verlaine/Beauvoir ; Expert resserré et vraiment au-delà (attribut du COD, terminologie 2020 *peser/coûter* = COD, accord qui tranche le rattachement). `tsc`/`eslint` OK, 0 cadratin, 0 `TODO refonte` restant. |
| 03 Groupe nominal et expansions | ✅ **Refonte faite + validée à l'écran (29/06/2026).** Banque 6 Fondamentaux / 10 Concours / 5 Expert ; 6 savoir-faire couverts (dont les **déterminants**, qui n'avaient aucun exercice) ; types variés (identifier · classer · repérer · distinguer · prouver par manipulation · transformer relative↔épithète) ; relative déterminative/explicative bien dotée ; citations vérifiées Hugo/Baudelaire ; Expert vraiment au-delà (ambiguïté d'antécédent, apposition liée « le roi Louis XIV », « ville de Paris » apposition de relation vs CDN, adjectif de relation). Cours déjà propre sur apposition/épithète détachée (rien à corriger). `tsc`/`eslint` OK, 0 cadratin, 0 `TODO refonte` restant, HTTP 200 L3/M2. |
| 04 Groupe verbal | ✅ **Refonte faite + validée à l'écran (29/06/2026).** Banque 6 Fondamentaux / 10 Concours / 5 Expert ; 6 savoir-faire couverts (dont les **périphrases**, jusque-là quasi absentes) ; pièges signature : passif vs passé composé avec *être*, *il* impersonnel, verbe à double construction, factitif *faire + infinitif*, *se faire + infinitif* (passif/factitif), *se* COD/COI, attribut de circonstance (« partie fâchée »). `tsc`/`eslint` OK, 0 cadratin, 0 `TODO refonte`, HTTP 200 L3/M2. |
| 05 Phrase complexe | ✅ **Refonte faite + validée à l'écran (29/06/2026).** Banque 6 Fondamentaux / 10 Concours / 5 Expert ; 4 savoir-faire couverts (modes de liaison · relative · conjonctive · circonstancielle) + ponctuation syntaxique ; pièges signature : « que » relatif/conjonction, « car » coordination vs « parce que » subordination, infinitive vs groupe infinitif, participiale vs épithète détachée, relative déterminative/explicative ; Expert : trois « que » dans une phrase, participiale absolue, polysémie « si »/« comme », subordination implicite (inversion, corrélation). Citation Rimbaud vérifiée. `tsc`/`eslint` OK, 0 cadratin, 0 `TODO refonte`, HTTP 200 L3/M2. |
| 06 Types et formes de phrase | ✅ **Refonte faite + validée à l'écran (29/06/2026).** 6 Fond. / 10 Conc. / 5 Expert ; 6 savoir-faire couverts ; pièges signature (type ≠ forme, « ne… que » restriction, « ! » ≠ exclamatif, emphase = forme, négation totale/partielle) ; Expert : interrogation oratoire, « ne » explétif, litote/cumul de négations, dislocations, type ≠ acte de langage. `tsc`/`eslint` OK, 0 cadratin, 0 `TODO`, HTTP 200. |
| 07 Modes et temps | ✅ **Refonte faite + validée à l'écran (29/06/2026).** 6 Fond. / 10 Conc. / 5 Expert ; 6 savoir-faire ; terminologie 2020 respectée (conditionnel = temps de l'indicatif) ; pièges imparfait/conditionnel, PC/PQP, passé simple irrégulier ; Expert : conditionnel passé 2e forme, concordance discours indirect, subjonctif imparfait, aspect accompli, futur antérieur vs conditionnel passé. Citation Proust vérifiée. `tsc`/`eslint` OK, 0 cadratin, 0 `TODO`, HTTP 200. |
| 08 Temps du passé | ✅ **Refonte faite + validée à l'écran (29/06/2026).** 6 Fond. / 10 Conc. / 5 Expert ; centré sur les **valeurs** (formule jury) et le système imparfait/passé simple ; Expert : imparfait contrefactuel, passé surcomposé, discours indirect libre, passé antérieur. `tsc`/`eslint` OK, 0 cadratin, 0 `TODO`, HTTP 200. |
| 09 Présent/futur/conditionnel/subjonctif | ✅ **Refonte faite + validée à l'écran (29/06/2026).** 6 Fond. / 10 Conc. / 5 Expert ; valeurs du présent/futur/conditionnel + emplois du subjonctif ; terminologie 2020 (conditionnel = temps de l'indicatif) ; Expert : statut 2020 du conditionnel, subjonctif imparfait, présent gnomique vs énonciation, subjonctif en indépendante. `tsc`/`eslint` OK, 0 cadratin, 0 `TODO`, HTTP 200. |
| 10 Formes verbales non conjuguées | ✅ **Refonte faite + validée à l'écran (29/06/2026).** 6 Fond. / 10 Conc. / 5 Expert ; 5 savoir-faire ; pièges participe présent vs adjectif verbal, sujet propre (infinitive/participiale) ; Expert : sujet du gérondif, négligent/négligents/négligeant, participes prépositionnels invariables. `tsc`/`eslint` OK, 0 cadratin, 0 `TODO`, HTTP 200. |
| 11 Accords GN/GV | ✅ **Refonte faite + validée à l'écran (29/06/2026).** 6 Fond. / 10 Conc. / 5 Expert ; 5 savoir-faire ; pièges attraction, couleurs, « la plupart », numéraux (vingt/cent/mille) ; Expert : « plus d'un », valeur ordinale de vingt, coordination ou/ni, portée de l'adjectif, demi/nu selon la position. `tsc`/`eslint` OK, 0 cadratin, 0 `TODO`, HTTP 200. |
| 12 Accord du participe passé | ✅ **Refonte faite + validée à l'écran (29/06/2026).** 6 Fond. / 10 Conc. / 5 Expert ; 4 savoir-faire (être · avoir COD avant · pronominaux · cas particuliers) ; les cas « hors attendus » du cours deviennent l'étage Expert (perception+infinitif, pronominaux « se » COI, COD de mesure, neutre « l' », COD antéposé d'un pronominal). `tsc`/`eslint` OK, 0 cadratin, 0 `TODO`, HTTP 200. |
| 13 Homophones grammaticaux | ✅ **Refonte faite + validée à l'écran (29/06/2026).** 6 Fond. / 10 Conc. / 5 Expert ; 6 savoir-faire filtres (a/à · et/est · son/sont · ce/se · ces/ses/c'est/s'est · leur/leurs) + paires hors filtre (on/ont, etc.) travaillées dans des exercices « corriger un texte » ; méthode = test de l'imparfait ; Expert : c'est/s'est/sais/sait, leur possessif sing./plur., « on n'a » (négation effacée), ce pronom/déterminant. `tsc`/`eslint` OK, 0 cadratin, 0 `TODO`, HTTP 200. |
| 14 Cohérence textuelle | ✅ **Refonte faite + validée à l'écran (29/06/2026).** 6 Fond. / 10 Conc. / 5 Expert ; 6 savoir-faire (reprises nominales · pronoms · connecteurs · progression thématique · temps verbaux · ponctuation) ; Expert : reprises = point de vue, progressions mêlées, rupture temporelle, connecteurs argumentatifs, cohésion vs cohérence. `tsc`/`eslint` OK, 0 cadratin, 0 `TODO`, HTTP 200. |
| 15 Énonciation et discours rapporté | ✅ **Refonte faite + validée à l'écran (29/06/2026).** 6 Fond. / 10 Conc. / 5 Expert ; 6 savoir-faire (indices d'énonciation · DD · DI · DIL · transpositions · modalisation) ; pièges DI vs DIL, « est-ce que » au DI, transposer plus que les temps ; Expert : démêler les voix au DIL, concordance complexe, types de modalité, double système énonciatif, effet des formes. `tsc`/`eslint` OK, 0 cadratin, 0 `TODO`, HTTP 200. |
| 16 Phonologie | ✅ **Refonte faite + validée à l'écran (29/06/2026).** 6 Fond. / 10 Conc. / 5 Expert ; 6 savoir-faire (phonèmes/graphèmes · syllabes · accents · liaisons · homophones · transcription API) ; pièges lettres≠phonèmes, lettres muettes, h muet/aspiré, s intervocalique ; Expert : « e » caduc (loi des trois consonnes), polygraphie de /o/, transcription savante, statuts de liaison, /e/~/ɛ/. `tsc`/`eslint` OK, 0 cadratin, 0 `TODO`, HTTP 200. |
| 17 Formation des mots | ✅ **Refonte faite + validée à l'écran (29/06/2026).** 6 Fond. / 10 Conc. / 5 Expert ; 6 savoir-faire (radical/famille · préfixation · suffixation · composition · dérivation · étymologie) ; pièges dérivation vs composition, allomorphes de in-, double valeur de -ment ; Expert : faux amis morphologiques, composés hybrides grec/latin, -able actif/passif, radical populaire/savant, néologie. `tsc`/`eslint` OK, 0 cadratin, 0 `TODO`, HTTP 200. |
| 18 Relations sémantiques | ✅ **Refonte faite + validée à l'écran (29/06/2026).** 6 Fond. / 10 Conc. / 5 Expert ; 6 savoir-faire (synonymie · antonymie · hyperonymie · polysémie · champ lexical · sens propre/figuré) ; pièges synonyme hors contexte, ne voir que le sens propre, champ lexical vs sémantique ; Expert : 3 types d'antonymie, réseau polysémique, connotation ambivalente, synonymie partielle, champ lexical/sémantique/famille. `tsc`/`eslint` OK, 0 cadratin, 0 `TODO`, HTTP 200. |
| 19 Figures et registres | ✅ **Refonte faite + validée à l'écran (29/06/2026).** 6 Fond. / 10 Conc. / 5 Expert ; 6 savoir-faire (images · opposition · insistance · atténuation · sonorités · registres) ; cap « nommer ne suffit pas, on interprète l'effet » ; pièges comparaison/métaphore, métaphore filée, litote/euphémisme ; citations canoniques vérifiées (Racine, Corneille, Hugo, Nerval, Labé, Lamartine, de Gaulle). `tsc`/`eslint` OK, 0 cadratin, 0 `TODO`, HTTP 200. |

**Calibrage retenu (pilote)** : Expert = vraiment au-delà du jour J (quitte à en avoir moins) ; volume rééquilibré vers Concours (la cible) ; consigne « classer » **en deux listes/lignes**, jamais en colonnes (impossible à l'écran).

### Point d'audit §9 — RÉSOLU (28/06/2026)

- **Notion 2 (fonctions) — apposition / épithète détachée.** Le cours classait le même cas (adjectif détaché) de deux façons contradictoires. **Résolu : on acte que « épithète détachée » et « apposition de l'adjectif » désignent la *même fonction*** (les deux termes admis) ; on **retient « épithète détachée »** par convention, et « apposition » seul reste réservé au **GN** quand on veut être précis. Propagé au cours (cartes Épithète/Apposition), à la copie `fr-02-cop-paul-apposition` (revenue en *juste*, plus de fausse pénalité ; ajout d'une copie juste GN `fr-02-cop-hugo-apposition`) et aux exercices F6/C9/E4. NB : le Grévisse de l'enseignant range, lui, l'adjectif détaché en apposition, ce qui est cohérent avec l'équivalence actée.
