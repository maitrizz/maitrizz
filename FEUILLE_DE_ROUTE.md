# Feuille de route Maitrizz

Point d'étape au **22 octobre 2026**. Objectif de lancement : **septembre 2027**.

Légende : ✅ fait · 🔄 en cours · ⬜ à faire · ⏸️ en attente d'une décision ou d'une validation

Ce document rassemble ce qui reste à faire, tous chantiers confondus. Les suivis
détaillés par matière restent dans `SUIVI_FICHES_*.md`, qui font foi pour l'avancement
fiche par fiche.

---

## Positionnement retenu (24/10/2026)

**« La préparation de l'écrit du CRPE par la répétition espacée. »**

Périmètre assumé : les trois épreuves écrites, français, mathématiques, sciences,
avec le moteur d'entraînement espacé et les voyants de maîtrise comme argument
central. C'est ce qui n'existe nulle part ailleurs sur ce concours.

**Ce que cela implique, et qu'il faut tenir :**

- **Les oraux sortent du périmètre de lancement** (axe 1 ci-dessous, conservé
  pour mémoire mais repoussé). Les pages verrouillées doivent le dire
  honnêtement plutôt que promettre « bientôt ».
- **Sciences et maths L3 deviennent prioritaires** : ce sont les deux seuls
  trous dans le périmètre annoncé. Tant qu'ils sont ouverts, la promesse est
  fausse.
- **Aucune nouvelle fonctionnalité** tant que le contenu du périmètre n'est pas
  complet. Le travail de finition est gratifiant, l'écriture de fiches est
  ingrate : c'est précisément pour cela qu'il faut l'écrire ici.

## Les trois axes

Issus de l'analyse du 22 octobre 2026. Ils répondent à la question : qu'est-ce qui
manque pour être la meilleure plateforme de révision du CRPE, et non une bonne
bibliothèque de fiches de plus.

### Axe 1 — Couvrir les oraux

Le plus rentable des trois. L'admission se joue à l'oral, et c'est le terrain le moins
bien servi par la concurrence, qui vend surtout du contenu écrit.

| | Tâche | État |
|---|---|---|
| 1.1 | **Épreuve de leçon** : arborescence `orales/lecon/[discipline]`, français et maths. N'existe nulle part dans le code aujourd'hui | ⬜ |
| 1.2 | Sujets de leçon avec dossier fourni et grille des attendus du jury | ⬜ |
| 1.3 | Mode simulation : minuteur de préparation, trame d'exposé, questions de jury probables, auto-évaluation sur la grille | ⬜ |
| 1.4 | **Didactique**, passée à l'oral depuis la réforme, aujourd'hui sans aucun support sur le site | ⬜ |
| 1.5 | Remplacer les pages verrouillées **EPS** et **motivation** (41 lignes de « bientôt disponible ») | ⬜ |
| 1.6 | Connaissance du système éducatif : déjà en ligne avec QCM | ✅ |

### Axe 2 — De bibliothèque de fiches à coach de révision

| | Tâche | État |
|---|---|---|
| 2.1 | **Comptes et synchronisation** (voir le détail plus bas) | 🔄 |
| 2.2 | **Planning adaptatif** jusqu'à la date du concours : « il vous reste 14 semaines, voici les 3 notions de cette semaine », calculé depuis les voyants de maîtrise et `date_concours` | ⬜ |
| 2.3 | **Tableau de bord** : maîtrise par partie d'épreuve, points faibles, historique des sujets blancs, prévision de note | ⬜ |
| 2.4 | **Paiement** : offre fondateur Stripe à 7,90 €/mois verrouillée à vie. Code écrit le 24/10/2026 (migration 0002, trois routes `/api/paiement`, page `/abonnement`, verrou du hub). **Reste à faire côté Stripe et côté légal, voir plus bas** | 🔄 |

### Axe 3 — Fermer la boucle sur les productions ouvertes

Les exercices fermés sont couverts. Ce qui fait la note ne l'est pas : partie 3 de
français, analyse de productions d'élèves, justification en maths.

| | Tâche | État |
|---|---|---|
| 3.1 | **Sujets blancs complets et chronométrés** par épreuve, barème officiel, correction guidée critère par critère (s'appuie sur `ExamRunner`, déjà en place) | ⬜ |
| 3.2 | **Retour sur rédaction** pour les productions ouvertes : analyse critère par critère plutôt qu'un corrigé type à comparer soi-même. Les grilles existent déjà dans les chartes | ⬜ |
| 3.3 | **Copies commentées** de niveaux différents sur un même sujet (`CorrigerCopies` l'amorce) | 🔄 |

---

## Axe 2, tranche 1 : comptes et synchronisation

Construite le 22 octobre 2026 sur la branche `feat/comptes-synchronisation`.
**Rien n'est commité, rien n'est en ligne.**

### Fait

| Élément | Où |
|---|---|
| Tables `profils` et `progression`, sécurité par ligne, création auto du profil | `supabase/migrations/0001_comptes_progression.sql`, appliqué sur le projet |
| Magasin local d'abord, règles de fusion entre appareils, file d'envoi | `src/lib/store.ts` |
| Client Supabase, dégradation propre si non configuré | `src/lib/supabase.ts` |
| Synchronisation (montée, descente, fusion) | `src/lib/sync.ts` |
| Session, branchement, rattachement de la progression anonyme | `src/components/compte/CompteProvider.tsx` |
| Écrans inscription, connexion, mot de passe oublié, mon compte | `src/app/{inscription,connexion,mot-de-passe-oublie,compte}` |
| Bascule des 15 appels `localStorage` vers le magasin | `src/components/fiche/*` |
| Modèles d'emails en français, aux couleurs du site | `supabase/emails/` |
| SMTP Brevo branché sur Supabase, expéditeur `bonjour@maitrizz.fr` | dashboard Supabase |

### À faire avant de considérer la tranche terminée

| | Tâche | État |
|---|---|---|
| a | **Test de bout en bout** : réviser sans compte, créer un compte, rattacher, vérifier les lignes dans `progression`, se reconnecter en navigation privée et retrouver ses voyants | ⬜ |
| b | Coller les trois modèles d'emails dans Supabase et vérifier le rendu sur un vrai envoi | 🔄 |
| c | Vérifier que **Confirm email** est bien réactivé après les tests | ⬜ |
| d | Ajouter `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` sur **Vercel** (Settings > Environment Variables) | ⬜ |
| e | Commiter et fusionner la branche | ⬜ |
| f | Décider si l'accès au site reste libre sans compte (parti pris actuel : oui) | ⏸️ |

---

## Abonnement : ce qui reste avant d'encaisser

Décisions du 24/10/2026 : **tarif fondateur 7,90 €/mois verrouillé à vie**, fiches
de cours en **accès libre**, **hub d'entraînement réservé** aux abonnés.

### Côté Stripe et configuration

| | Tâche | État |
|---|---|---|
| p.1 | Créer le compte Stripe, le produit « Abonnement fondateur » et son tarif récurrent à 7,90 €/mois | ⬜ |
| p.2 | Appliquer `supabase/migrations/0002_abonnement.sql` | ⬜ |
| p.3 | Poser les variables dans `.env.local` **et sur Vercel** : `STRIPE_SECRET_KEY`, `STRIPE_PRICE_FONDATEUR`, `STRIPE_WEBHOOK_SECRET`, `SUPABASE_SERVICE_ROLE_KEY` | ⬜ |
| p.4 | Déclarer le webhook `https://www.maitrizz.fr/api/paiement/webhook` sur les événements `checkout.session.completed` et `customer.subscription.*` | ⬜ |
| p.5 | Activer le portail client Stripe (gestion de carte, factures, résiliation) | ⬜ |
| p.6 | Tester un paiement en mode test, carte `4242 4242 4242 4242` | ⬜ |
| p.7 | Poser `NEXT_PUBLIC_ACCES_RESERVE=1` **seulement** quand le reste fonctionne. Sans cette variable, rien n'est verrouillé : c'est volontaire, le site ne doit pas se fermer tout seul | ⬜ |

### Côté légal, obligatoire avant le premier euro

Vendre un abonnement à des particuliers en France impose, sous peine de sanction
et de refus de validation du compte Stripe :

| | Tâche | État |
|---|---|---|
| l.1 | **Mentions légales** : identité de l'éditeur, statut, numéro SIREN, hébergeur | ⬜ |
| l.2 | **Conditions générales de vente** : prix, durée, reconduction, résiliation | ⬜ |
| l.3 | **Droit de rétractation de 14 jours**, avec la renonciation expresse pour un contenu numérique fourni immédiatement. Sans cette case, un abonné peut se faire rembourser 14 jours après avoir tout consulté | ⬜ |
| l.4 | **Politique de confidentialité** : ce que Supabase, Stripe et Brevo conservent | ⬜ |
| l.5 | Vérifier le **statut juridique** : encaisser des abonnements suppose une structure déclarée. Point à traiter avec un comptable, pas avec moi | ⬜ |

## Contenu

| Matière | État | Reste à faire |
|---|---|---|
| **Français écrit** | ✅ 21 notions + méthodologie, auditées charte §9 | Audit §9 des 19 banques du hub d'entraînement (589 items, contenu neuf jamais relu éditorialement) |
| **Maths écrit M2** | ✅ 27 fiches, MEF et audit faits | Dériver la version **L3** à partir du M2, comme décidé |
| **Sciences** | ⬜ 1 fiche sur 18 modules | Méthodologie + 17 modules restants. Le pilote « Unité et diversité du vivant » attend votre validation à l'écran |
| **Oraux** | 🔄 CSE seul | Voir axe 1 |

---

## Infrastructure et délivrabilité

| | Tâche | État |
|---|---|---|
| i.1 | SPF élargi à IONOS : `v=spf1 include:spf.brevo.com include:_spf-eu.ionos.com mx ~all` | ✅ 22/10/2026, propagation vérifiée |
| i.2 | DKIM Brevo (`brevo1`, `brevo2`) | ✅ |
| i.3 | Activer DKIM sur la boîte IONOS, si l'option existe dans leur espace | ⬜ |
| i.4 | **Durcir le DMARC**, aujourd'hui en `p=none`. À faire au lancement, pas avant : deux semaines d'observation n'ont de sens qu'avec du trafic réel. Étapes : ajouter une adresse de rapports lisible (dmarc.postmarkapp.com, gratuit), puis `p=quarantine; pct=25`, puis 100 %, puis `p=reject` | ⏸️ lancement |
| i.5 | **BIMI** (la vignette du logo dans Gmail) : exige un DMARC strict, un logo SVG Tiny PS, et surtout un certificat VMC à 1 000-1 500 €/an avec marque déposée à l'INPI. **Écarté**, aucun rapport qualité-prix à ce stade | ⏸️ |
| i.6 | ⚠️ **La clé SMTP Brevo expire le 22 octobre 2027.** Ce jour-là, sans aucun signe visible, les emails de confirmation cesseront de partir et plus personne ne pourra créer de compte. À renouveler en **septembre 2027** | ⬜ |

---

## Chantiers ouverts par ailleurs

| | Sujet | État |
|---|---|---|
| c.1 | **Design** : branche `feat/design`, identité teal et terracotta, quadrillage Seyès. Accueil refait | 🔄 |
| c.2 | **Protos d'encarts** (`src/app/proto/encarts`, `methodo-cahier`, `methodo-editorial`) : travail en cours non commité sur `main` | 🔄 |
| c.3 | **Trainer maths** : v1 décidée, en attente de votre feu vert pour coder | ⏸️ |
| c.4 | **Mots et rappels de démonstration** dans les fiches (`MOTS_DEMO`, `RAPPELS_DEMO`) : encore des protos, à valider ou retirer | ⏸️ |

---

## Ordre conseillé

1. **Terminer l'axe 2 tranche 1** : test de bout en bout, variables Vercel, commit. Sans comptes, pas de revenus, et tout le reste s'y accroche.
2. **Ligne SPF** (i.1). Dix minutes, un vrai problème réglé.
3. **Paiement Stripe** (2.4), puisque la page d'accueil annonce déjà un tarif.
4. **Axe 1, l'épreuve de leçon** (1.1 à 1.4). La différenciation la plus visible face à la concurrence.
5. **Planning adaptatif et tableau de bord** (2.2, 2.3), qui transforment l'abonnement en service plutôt qu'en accès.
6. **Axe 3** (3.1 à 3.3), le plus coûteux en contenu, et le plus difficile à copier.
