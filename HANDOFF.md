# HANDOFF — Hub d'entraînement espacé + maîtrise (français écrit)

Branche `feat/refonte-fiches-francais`. **Rien n'est committé.**

## Tâche en cours
Couche transversale : calculateur de maîtrise, hub d'entraînement espacé (Leitner) hors des fiches, voyants. Pilote = notion 01.

## Travail réalisé
- `maitrise.ts` : calculateur 3 états (dérivé du localStorage, pas de nouveau magasin) + `HUB_SLUG`.
- `HubEntrainement.tsx` + page `.../[matiere]/entrainement/page.tsx` (français seul). URL : `/reviser/l3/epreuves/ecrites/francais/entrainement`. **Séries de 10** (`sessionSize: 10`).
- **Accès au hub** : bandeau « Entraînement espacé » en tête de la page français (`.../[matiere]/page.tsx`, français seul).
- `hub-entrainement.ts` : annuaire `HUB_NOTIONS` (notion 01).
- `Trainer.tsx` + `types.ts` : format `ouvert` (rédaction dans encart, auto-éval Leitner) ; modalité `type-concours` réactivée ; **encart de saisie facultatif ajouté aux flashcards** (`FlashcardInput`).
- `trainer-hub-classes-grammaticales.ts` : banque NEUVE notion 01 **étendue à 35 items** (6 savoir-faire × ~6, 4 types, 3 niveaux), distincte de la fiche.
- **Voyants dans la fiche (brique 3)** : bloc `maitriseVoyants` + composant `MaitriseVoyants.tsx`, câblé dans `RenderBlock`, inséré en tête de l'onglet « Appliquer » de la notion 01.
- `tsc` + `eslint` verts ; pages hub + fiche HTTP 200.

## Décision prise (30/06/2026)
Source des items fermés 02-19 = **banques NEUVES complètes** (≈30 items/notion), pas de recyclage des copies. Procédé répétable par notion :
1. créer `trainer-hub-<slug>.ts` (5-6 savoir-faire × ~6 items, 4 types, 3 niveaux, contenu neuf) ;
2. passer la fiche `SAVOIR_FAIRE` en `export const` ;
3. ajouter l'entrée à `HUB_NOTIONS` (`hub-entrainement.ts`) ;
4. ajouter `maitriseNotionSlug` sur la fiche.

## Avancement banques hub
- ✅ Notion 01 `classes-grammaticales` (35)
- ✅ Notion 02 `fonctions-syntaxiques` (30)
- ✅ Notion 03 `groupe-nominal-expansions` (30)
- ✅ Notion 04 `groupe-verbal` (30)
- ✅ Notion 05 `phrase-complexe` (30)
- ✅ Notion 06 `types-et-formes-de-phrase` (30)
- ✅ Notion 07 `modes-et-temps` (30)
- ✅ Notion 08 `temps-du-passe` (30)
- ✅ Notion 09 `present-futur-conditionnel-subjonctif` (30)
- ✅ Notion 10 `formes-non-conjuguees` (30)
- ✅ Notion 11 `accords-gn-gv` (30)
- ✅ Notion 12 `accord-participe-passe` (30)
- ✅ Notion 13 `homophones-grammaticaux` (30)
- ✅ Notion 14 `coherence-textuelle` (30)
- ✅ Notion 15 `enonciation-discours-rapporte` (30)
- ✅ Notion 16 `phonologie` (30)
- ✅ Notion 17 `formation-des-mots` (30)
- ✅ Notion 18 `relations-semantiques` (30)
- ✅ Notion 19 `figures-de-style-registres` (30)

**TERMINÉ : 19/19 notions, 574 items neufs, 19 fiches avec voyants, 19 entrées HUB_NOTIONS.** `tsc` + `tsc` verts, toutes les pages 200. (Lint global : 2 erreurs PRÉEXISTANTES hors périmètre — `qcm-aleatoire` Math.random, `reviser/page.tsx` apostrophe.)

## Prochaine étape exacte
Validation à l'écran de l'ensemble (français écrit complet dans le hub + voyants sur chaque fiche). Option restante : (2) case « cocher ce que j'avais » dans « Appliquer » (réintroduire `attendus`). Penser aussi à un audit §9 des nouvelles banques (relecture éditoriale).

## Consignes à conserver
- Pas de tiret cadratin ; expliquer simplement en français.
- Ne pas committer ni rien lancer sans feu vert.
- Banque du hub = contenu NEUF, jamais celui de la fiche.
- Décisions de la tranche transversale tracées dans `GABARIT_NOTION.md §7` (entrée 2026-06-30).
- Serveur dev déjà sur le port 3000 (ne pas en relancer un autre).
