# Feuille de route Maitrizz

Point d'étape au **22 octobre 2026**. Objectif de lancement : **septembre 2027**.

Légende : ✅ fait · 🔄 en cours · ⬜ à faire · ⏸️ en attente d'une décision ou d'une validation

Ce document rassemble ce qui reste à faire, tous chantiers confondus. Les suivis
détaillés par matière restent dans `SUIVI_FICHES_*.md`, qui font foi pour l'avancement
fiche par fiche.

---

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
| 2.4 | **Paiement** : abonnement Stripe à 12,90 €/mois, annoncé sur la page d'accueil et aujourd'hui impossible à encaisser | ⬜ |

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
