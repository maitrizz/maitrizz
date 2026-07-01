# Gabarit d'une notion interactive

Source de vérité pour construire **n'importe quelle notion** (français écrit d'abord, puis autres matières) selon l'architecture pédagogique validée. Ce document fige les **règles et conventions** ; le **code** des composants partagés est l'implémentation, et la **notion 1 (`classes-grammaticales-v2`)** est l'exemple de référence.

> ✅ **Statut : FIGÉ (28/06/2026).** Les conventions sont stabilisées et la notion 1 (`classes-grammaticales-v2`) sert de modèle de référence. On **industrialise** désormais : les 20 autres notions de français sont migrées sur ce format (voir `SPEC_STRUCTURE_NOTION.md` pour le contrat exact à appliquer). Périmètre du gel = **la structure (3 maisons) + les 3 niveaux de difficulté** ; les couches transversales encore à construire (voyants « Où j'en suis », carnet de pièges, hub d'entraînement espacé) se brancheront **plus tard via les composants partagés, sans rouvrir les fiches** (les données portent déjà les tags `savoirFaire`). Toute évolution de structure passe désormais par une décision tracée (§7) puis propagation centralisée.

---

## 1. Principe pédagogique

- On distingue **construire le geste** (apprendre à faire, avec étayage) et **entretenir le geste** (lutter contre l'oubli, sans étayage, dans le temps). Deux fonctions cognitives différentes : pouvoir « répondre à des questions » à deux endroits n'est pas redondant si l'un construit et l'autre entretient.
- Ce qu'on évalue le jour J aux écrits, c'est **l'application** (analyser de vraies phrases, rédiger une justification), **pas** le savoir théorique. Les entraînements portent donc sur du concret, pas sur du cours déguisé en quiz.
- **Règle anti-redondance** : chaque composant a **une seule fonction**. Si deux éléments font le même travail au même moment, on fusionne.
- Leviers scientifiques mobilisés : effet test (récupération active), espacement, interleaving, exemples résolus + estompage, difficultés désirables, double codage. **Écarté** : l'adaptation aux « styles d'apprentissage » (mythe).

---

## 2. Architecture : 3 onglets dans la notion + 2 couches transversales

**Dans la notion** (3 onglets) :
- **APPRENDRE** : `Comprendre` (le cours, complet mais consultable) + `Le geste` (la méthode résolue). Le « faire long » est dans S'entraîner.
- **S'ENTRAÎNER** = **2 activités**, toutes deux tournées vers le vrai geste de l'épreuve :
  - **Appliquer** : exercices **ouverts** (`exerciceBank`), **PAS un trainer**. On choisit un niveau (Fondamentaux/Concours/Expert) et **tous ses exercices s'affichent à la suite, en cartes** (vue d'ensemble, on scrolle). Chaque carte : encart de réponse, corrigé à dévoiler, auto-éval ; un bandeau « Où j'en suis » + un statut par carte (à faire / réussi / à retravailler, **persistés**) montrent ce qui pèche et sur quoi revenir. **L'objectif (savoir-faire) n'est PAS affiché sur la carte** (il révélerait la réponse) ; la donnée reste en coulisses pour le hub. Exercices **choisis, pertinents, variés** (profondeur, pas accumulation) ; l'automatisme par répétition, c'est le **trainer du hub**, pas ici.
  - **Corriger des erreurs** : on se met dans le **siège du correcteur / jury**. Copies de **candidats** jugées une à une (bloc interactif `corrigerCopies`). On **tranche** d'abord (« c'est juste » / « à corriger »), puis on dévoile si on avait raison + la bonne analyse + une ligne **« côté correcteur »** (l'erreur typique, le test attendu) **seulement si elle apporte**. **Mélange de copies justes ET fausses** (sinon on répond « à corriger » machinalement). Vue d'ensemble + statut persisté, comme « Appliquer ». C'est *évaluer* : se mettre à la place du correcteur, c'est apprendre ce qu'on attend de soi. **Pas de bloc `trainer` dans la notion** : le `trainer` est réservé au hub.
  - ⚠️ **Pas de répétition espacée dans la notion.** La pratique y sert à **construire** le geste à chaud, juste après avoir appris. L'entretien espacé vit dans le hub.
- **MÉMO** : synthèse de référence. Ne teste pas. (Nommé « Mémo », pas « Mémoriser » : on mémorise en se testant, pas en relisant une page.)

**Transversal** (hors notion ; on y sélectionne les **notions**, comme les sujets blancs) :
- **HUB D'ENTRAÎNEMENT** *(à construire)* : le `trainer` en `mode:"spaced"` (Leitner) **entrelacé sur plusieurs notions**. Rôle = **entretenir** sur la durée. C'est lui qui porte le **tableau de maîtrise** (§6 bis) et qui fait *redescendre* un voyant quand on oublie.
- **SUJETS BLANCS** (`examRunner`) : épreuve entière, multi-notions, chronométrée, notée. Rôle = **simuler**.

Trois jobs distincts, jamais redondants : **construire** (notion) · **entretenir** (hub) · **simuler** (sujets blancs).

---

## 3. Les 3 axes orthogonaux (jamais de recouvrement)

Toute la pratique se règle sur trois axes indépendants :

1. **Savoir-faire** (= « Ce que je travaille ») : *quoi* travailler. Liste propre à chaque notion (voir §4).
2. **Modalité** (trainer) : *comment* s'entraîner → `rappel` · `application` · `detection-erreur`. (« type concours » n'est PAS une modalité : c'est un niveau de difficulté.)
3. **Difficulté** (Exercices) : *à quel niveau* → **Fondamentaux** (1) · **Concours** (2, la cible) · **Expert** (3, au-delà de l'épreuve, pour se challenger).

Où va le **mélange (interleaving)** : c'est le défaut du **hub** (entretien, transfert). **Dans la notion**, au contraire, « Appliquer » est une **progression assumée** : trois entrées empilées **Fondamentaux → Concours → Expert** (pas de « tout mélangé » ici). On y construit le geste en montant les marches ; on l'entremêle ensuite dans le hub. Le ciblage par savoir-faire reste un **filtre facultatif** des niveaux (remédiation).

---

## 4. Les savoir-faire (le point le plus important)

- **Une seule liste par notion**, qui sert à la fois de **filtre de pratique** (Exercices + trainer) ET de **buts d'apprentissage / tableau de maîtrise**.
- **Règle de discipline (généralise à toutes les notions)** : *un savoir-faire = un geste concret EXERÇABLE, avec au moins quelques exercices/items derrière.* S'il n'est pas exerçable, ce n'est **pas** un savoir-faire de filtre, c'est un **point de cours** → il va dans `Apprendre`.
  - Exemple : « nature vs fonction » (notion 1) n'est pas exerçable ici (pas de fonction dans cette notion) → point de cours, pas filtre.
- **Multi-tag** : un exercice/item peut porter **plusieurs** savoir-faire (les phrases denses « Concours/Expert » en contiennent plusieurs). Filtrer un savoir-faire doit ramener *tout* ce qui le contient.
- Libellés **parlants et courts** (pour les chips). Le filtre s'appelle « **Ce que je travaille** ».

**Exemple notion 1 (nature des mots)** — 6 savoir-faire : Déterminants · Adverbe ou adjectif · Mots-caméléons · Pronoms · L'infinitif · Les invariables.
Décomposition naturelle pour d'autres notions :
- Notion 2 (fonctions) : sujet · COD/COI · attribut · compléments circonstanciels · épithète/apposition.
- Notion 5 (phrase complexe) : juxtaposition/coordination/subordination · relative · conjonctive · circonstancielle.
- Notion 11 (accord du PP) : avec *être* · avec *avoir* (COD avant) · verbes pronominaux · cas particuliers.

---

## 5. Formats de données et code (centralisé = partagé)

**Règle d'or anti-dérive** : tout ce qui peut changer reste **centralisé/partagé** ; seules les **données propres à la notion** vivent dans son fichier. Ainsi, un changement de comportement ou de libellé = **une seule modification propagée à toutes les notions**.

Composants et types partagés (`src/components/fiche/`) :
- `types.ts` : blocs `trainer` et `exerciceBank` ; types `TrainerItem` (axe `modalite`, formats `qcm`/`vrai-faux`/`intrus`/`classer`/`flashcard`) et `TrainerExercice` (ouvert : `reponseType` = réponse type CRPE affichée en premier, puis `explication: CorrectionItem[]`, plus `attendus?`).
- `Trainer.tsx` : écran de réglage (chips Modalité × Savoir-faire), récupération espacée, ré-injection des ratés, bilan. Libellés centralisés (`MODALITE_LABELS`).
- `ExerciceBank.tsx` : écran de réglage (chips Difficulté × Savoir-faire), série mélangée, champ de réponse, corrigé révélé, checklist d'éléments attendus, auto-éval, couverture. Libellés centralisés (`DIFF_LABELS`).
- `trainerProgress.ts` : moteur Leitner par item (clé `maitrizz:trainer:<slug>`). Exercices : ratings (clé `maitrizz:exos:<slug>`).
- `ExerciceCard.tsx` : `CorrectionLine` exporté, réutilisé par les corrigés.

Données propres à la notion (`.../data/<matiere>/`) : la fiche (`<slug>.ts`), la banque d'items (`trainer-<slug>.ts`), la banque d'exercices (`exercices-<slug>.ts`). Enregistrement dans `data/index.ts`.

Comportements clés (centralisés) : barre de difficulté facile→difficile ; **barrière douce** (corrigé verrouillé tant que rien n'est écrit) ; clavier **Entrée = à la ligne, deux fois = valider** ; persistance **localStorage** (pas d'IP, base du futur compte) ; **pas de génération automatique de contenu** (banque curée uniquement ; l'IA n'aide qu'en coulisses, vérifiée à la main).

---

## 6. Check-list de production d'une notion

Les composants ne bougent pas. Pour chaque notion, produire seulement les **données** :
1. **Savoir-faire** : écrire la liste (4-6), en respectant la règle de discipline (§4).
2. **Apprendre** : `Comprendre` (cours complet, consultable) + `Le geste` (méthode résolue + checkpoints) ; y renvoyer les points de cours non exerçables.
3. **Exercices** : banque d'exercices ouverts, multi-taggés (savoir-faire) + difficulté (1/2/3), avec `corrige` et `attendus` (surtout niveaux 2-3).
4. **Révision express** : banque d'items fermés, multi-taggés (savoir-faire) + modalité, `feedback` = le geste.
5. **Mémo** : carte mentale de synthèse.
6. **Couverture** : vérifier que chaque savoir-faire a de la matière (sinon, compléter).
7. **Câblage** : fiche + enregistrement dans `index.ts` ; `tsc` + `eslint` + rendu OK.

---

## 6 bis. Suivi de maîtrise (évaluation)

- **Pas de note automatique** : l'appli ne corrige pas une analyse rédigée. On ne fabrique pas un faux « /20 » ni un « % ».
- **Un état par savoir-faire**, en voyants simples : `pas encore` · `à consolider` · `acquis`. Plus utile qu'un score : ça dit *quoi réviser*.
- **État actuel, pas historique des fautes.** L'erreur est **gratuite** : elle laisse un voyant gris, pas un rouge. On réessaie, le voyant passe au vert. Voyants **bienveillants** (« pas encore », jamais « raté »), pour préserver le droit à l'erreur.
- **Deux sources honnêtes** : les **questions fermées** (Corriger des erreurs, hub) → l'appli sait ; les **exercices ouverts** → l'élève coche les éléments qu'il avait face à la réponse-modèle (cette case **remplace** le vague Réussi/À retravailler, elle ne s'y ajoute pas).
- **Un seul tableau, nourri de partout** (notion + hub + sujets blancs), parce que chaque item porte `notion` + `savoirFaire`. Détail compétence par compétence **dans la notion** ; résumé une-ligne-par-notion **dans le hub**. Le hub re-teste dans le temps → un voyant vert peut **redescendre** (durabilité).

## 7. Journal de décisions

| Date | Décision | Pourquoi |
|------|----------|----------|
| 2026-06-26 | Architecture en **3 maisons** (Apprendre / S'entraîner / Mémo) + Sujets blancs transversaux hors notion. | Lisibilité, anti-redondance ; chaque maison a une fonction. |
| 2026-06-26 | S'entraîner = **2 pièces** : Exercices (ouverts, profondeur) + Révision express (fermés, espacés). | Profondeur (produire) ≠ durabilité (entretenir) ; complémentaires, pas redondants. |
| 2026-06-26 | Le trainer porte sur **l'application** (vraies phrases), pas le cours. | C'est ce qu'évalue l'épreuve ; éviter le quiz de cours déguisé. |
| 2026-06-26 | Barème difficulté **Fondamentaux / Concours / Expert** (schéma C). Suppression du « standard » mou ; ajout d'Expert (au-delà de l'épreuve). | Chaque palier a un rôle net : démarrer → cible → se challenger. |
| 2026-06-26 | « Type concours » **fondu dans la difficulté** (n'est plus une modalité ni une rubrique). | Évite une rubrique qui chevauchait Exercices et Sujets blancs. |
| 2026-06-26 | Filtre = **savoir-faire exerçables** (une seule liste, multi-tag), « objectif » conceptuel → point de cours. Filtre nommé « Ce que je travaille ». | Le filtre mentait (ex. « nature vs fonction » sans fonction) ; un filtre doit tenir sa promesse. Une liste, deux usages, généralisable. |
| 2026-06-26 | **Champ de réponse** + barrière douce + checklist d'éléments attendus dans Exercices. | Effet de génération ; entraîne la vraie compétence (rédiger la justification) ; auto-éval objective. |
| 2026-06-26 | **Bascule « objectif e1-e7 » → « savoir-faire multi-tag » IMPLÉMENTÉE** sur le prototype. Champ data `savoirFaire: string[]` (items + exercices), filtre « Ce que je travaille ». Cartes purement cours (« les 9 classes », « nature vs fonction ») retirées du trainer → Mémo/Apprendre. | Le filtre tient sa promesse ; généralisable ; une seule liste par notion. |
| 2026-06-26 | **Corrigés restructurés (Exercices ET trainer)** : `reponseType` (réponse type CRPE) affichée **en premier** et mise en avant (encadré « Réponse attendue · type CRPE »), puis l'explication (`explication` pour les exercices, `feedback` pour les items du trainer). Flashcards : pas de `reponseType` (la carte révèle déjà la réponse). | On veut d'abord la réponse modèle telle qu'attendue le jour J, puis le raisonnement. |
| 2026-06-26 | **Fuite de réponse en mode ciblé : assumée comme remédiation.** « Tout mélangé » reste le défaut (zéro fuite). Quand un savoir-faire est sélectionné, on **affiche le thème ouvertement** (bannière « 🎯 Remédiation · X — c'est plus simple, c'est voulu ») au lieu de le cacher. (Option 3 « options en sous-classes » écartée pour l'instant.) | Le ciblé est un outil de consolidation choisi ; connaître le thème est normal. Le mélange reste la voie d'évaluation. |
| 2026-06-26 | **Notion 1 « pleine » (notion de référence).** Banques étoffées : trainer ~44 items, exercices ~14, couverture complète des 6 savoir-faire aux 3 niveaux et 3 modalités ; trous « infinitif » (dont nominalisation) et « invariables / prépositions » comblés. **Cours v1 repris À L'IDENTIQUE** dans Apprendre › Comprendre (mêmes blocs, même texte ; seul l'emballage adapté). | Fixer le standard de contenu d'une notion de référence avant d'industrialiser : profondeur + voix d'expert. |
| 2026-06-26 | **Standard de voix d'expert : un CURSEUR, pas une recette fixe.** Diff 1 / rappel = une phrase (le test). Diff 2 = test + piège **seulement s'il existe** (jamais de piège artificiel). Diff 3 (Expert) = on s'autorise « ce que le correcteur attend ». | Éviter le ton « IA » dans les deux sens : ni corrigés squelettiques, ni sur-explication uniforme. La profondeur s'ajuste à l'enjeu. |
| 2026-06-26 | **UN SEUL texte de corrigé (anti-redondance, corrige la décision « reponseType PUIS explication »).** **Exercices (ouverts)** : `reponseType` = LE corrigé, complet (nature + justification), tel qu'on l'écrit le jour J ; `explication` ne porte qu'un **extra distinct** (piège, « ce que le correcteur attend ») et reste **vide** sinon (jamais de paraphrase). Suppression de la checklist `attendus` à l'écran (redondante avec l'auto-éval Réussi/À retravailler). **Révision express (QCM fermé)** : on **retire l'encadré « Réponse attendue · type CRPE »** (il répète l'option déjà affichée en vert) ; on ne montre que le `feedback` (le pourquoi). | À l'écran, réponse type + explication disaient deux fois la même chose : lourd, décourageant, « cheap ». Un corrigé = un texte. La réponse-modèle sert dans l'ouvert (on rédige) ; dans le fermé, la réponse est déjà visible, seul le « pourquoi » est utile. |

| 2026-06-26 | **S'entraîner (dans la notion) = 2 activités seulement : « Appliquer » (exercices ouverts) + « Corriger des erreurs » (cartes à dévoiler `exerciceCard`).** Suppression de la « Révision express » espacée dans la notion ; rappel rapide et espacement **partent au hub**. Le **bloc `trainer` ne vit plus dans la notion** (réservé au hub) ; « Corriger des erreurs » réutilise les items de détection d'erreur via `exerciceCard` (source unique, pas de duplication). | Dans la notion on **construit** le geste à chaud ; **entretenir** (espacé) est le job du hub. Le trainer = signature du hub, on ne le met pas dans la notion (demande utilisateur). Deux activités = produire / évaluer. |
| 2026-06-26 | **Choix d'architecture « deux niveaux » (notion + hub) + suivi de maîtrise par voyants** (§6 bis) : état par savoir-faire, bienveillant, sans pénalité de l'erreur, nourri par toutes les surfaces. **Hub transversal et tableau de maîtrise = à construire (prochaine tranche).** | L'élève doit savoir où il en est sans être jugé ; l'évaluation montre un chemin, pas une sanction. |

| 2026-06-26 | **« Appliquer » : écran refait en 3 marches progressives** (Fondamentaux → Concours → Expert, chacune lançable d'un clic, voyant à venir). **Plus de « tout mélangé » dans la notion** (le mélange = hub) ; ciblage savoir-faire gardé en filtre facultatif. **Banque enrichie façon Grevisse exercices** : plusieurs TYPES de tâches (identifier · repérer dans un texte · classer · distinguer · **prouver par une manipulation**), gradués, sourçage de vraies citations d'auteurs à curer. | La progression bâtit la confiance et sert de miroir « où j'en suis ». Le Grevisse exercices (compagnon CRPE de l'utilisateur) travaille la notion sous plusieurs angles et fait MANIPULER, pas seulement étiqueter : exactement ce que le jury attend. |
| 2026-06-26 | **« Carnet de mes pièges » adopté (à construire plus tard).** Recueil auto des erreurs (énoncé + règle), re-présentées au bon moment ; = la couche perso que le papier ne peut pas faire. Carnet = *contenu* (points faibles) ; hub = *moteur* qui les fait revenir espacés (pas de doublon). | Personnalisation = sentiment de « compagnon » (à la Grevisse annoté), sans gestion par l'élève. |

| 2026-06-28 | **Gabarit FIGÉ.** 3 niveaux confirmés **Fondamentaux → Concours (la cible, le jour J) → Expert (au-delà)** ; « final » = structure + niveaux (voyants/carnet/hub = tranche transversale ultérieure, branchable sans rouvrir les fiches) ; la v2 devient la notion 1 officielle (slug `classes-grammaticales`, v1 retirée). Deux specs créées : `SPEC_STRUCTURE_NOTION.md` (contrat de migration pour Codex) + `DOCTRINE_EXERCICES.md` (calibrage des exercices, méthode Grévisse). | Socle stable avant industrialisation des 20 autres notions de français. |

| 2026-06-30 | **Tranche transversale (hub) — 2 décisions qui rouvrent des choix figés, tracées ici.** (a) **Format `ouvert` réintroduit dans le `trainer`** : on rédige dans un encart, on révèle la réponse-modèle + le détail, on s'auto-évalue (la note pilote Leitner, comme une flashcard). Le §5 disait « le trainer ne porte que des fermés » : assumé, car l'ouvert ramène le **geste de rédaction du jour J** dans l'entraînement espacé du hub. (b) **Modalité `type-concours` réactivée** comme modalité du trainer (elle avait été « fondue dans la difficulté », décision du 26/06) : au hub, elle redevient utile pour **filtrer/étiqueter** les items façon épreuve. **Portée = le hub uniquement** (banque NEUVE, jamais celle de la fiche) ; la structure des fiches reste figée. (c) **Encart de saisie FACULTATIF ajouté aux flashcards** (rappel actif), bouton « Voir la réponse » toujours actif (le rappel mental pur reste valide). | L'entraînement espacé doit faire **produire**, pas seulement reconnaître : sans l'ouvert, le hub n'entraînerait que la reconnaissance. Le hub est une surface distincte, donc rouvrir ces choix n'affecte pas l'évaluation des fiches. |

> **IMPLÉMENTÉ (tranche transversale, 30/06/2026)** : (4) **hub d'entraînement espacé** branché (`/reviser/<niveau>/epreuves/ecrites/francais/entrainement`, accès depuis un bandeau sur la page français) ; composant `HubEntrainement` + annuaire `hub-entrainement.ts` ; banque NEUVE notion 01 (`trainer-hub-classes-grammaticales.ts`, **35 items**, 6 savoir-faire × ~6, 4 types, 3 niveaux) ; séries de **10**. (3) **voyants « Où j'en suis »** : calculateur pur `maitrise.ts` (dérivé des magasins, sans nouveau store) ; affichage en **jauge de remplissage** (part d'items réussis, sans chiffre ni note : la barre ne fait que monter, l'erreur reste gratuite §6 bis), composant partagé `JaugeBar` (`JaugeRow`) entre la fiche et le hub. Panneau `MaitriseVoyants` (détail par savoir-faire) affiché **sous l'en-tête de la fiche**, repliable, via le champ opt-in `Fiche.maitriseNotionSlug` (notion 01) ; le tableau du hub montre une **jauge globale par notion**. **À FAIRE** : (2) case « cocher ce que j'avais » (réintroduire `attendus`) ; étendre le hub aux notions **02-19** (décision en attente : source des items fermés, copies pas encore taguées `savoirFaire`) ; brancher « Corriger des erreurs » au calcul de maîtrise une fois les copies taguées.

> **IMPLÉMENTÉ (tranche 1)** : notion 1 restructurée en **« Appliquer »** (exercices ouverts, 3 marches en vue d'ensemble + types Grevisse, objectif masqué) + **« Corriger des erreurs »** (bloc interactif `corrigerCopies` : juger juste/à corriger, mélange juste+faux, « côté prof » si pertinent, statut persisté). Composants : `ExerciceBank` (refait), `CorrigerCopies` (nouveau, câblé dans `RenderBlock`), banque `copies-classes-grammaticales.ts`. Pas de bloc `trainer` dans la notion. **À FAIRE (tranches transversales, après migration)** : (2) case « cocher ce que j'avais » comme auto-éval des exercices ouverts (réintroduire `attendus`) ; (3) store de maîtrise par savoir-faire + voyants « Où j'en suis » dans la notion ; (4) hub transversal (sélection de notions, espacement, vue d'ensemble).

---

## 8. Référence

Exemple vivant : `src/app/reviser/[niveau]/epreuves/ecrites/[matiere]/data/francais/classes-grammaticales-v2.ts` et ses banques. La fiche d'origine `classes-grammaticales.ts` reste intacte pour comparer.
