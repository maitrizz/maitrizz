export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Conseils" | "Témoignages" | "Guides" | "Actualités";
  author: string;
  authorRole: string;
  date: string;
  readTime: number;
  featured?: boolean;
  tags: string[];
};

export const articles: Article[] = [
  {
    slug: "crpe-2026-tout-savoir-concours-professeur-ecoles",
    title: "CRPE 2026 : tout savoir sur le concours de professeur des écoles",
    excerpt:
      "Réforme du CRPE 2026, épreuves, conditions d'inscription, calendrier officiel... Tout ce qu'il faut savoir pour préparer le concours de professeur des écoles et mettre toutes les chances de votre côté.",
    category: "Guides",
    author: "Rédaction Maitrizz",
    authorRole: "Équipe éditoriale Maitrizz",
    date: "2026-02-25",
    readTime: 10,
    featured: true,
    tags: ["CRPE 2026", "réforme", "épreuves", "calendrier", "inscription"],
    content: `
## Qu'est-ce que le CRPE ?

Le **Concours de Recrutement de Professeurs des Écoles (CRPE)** est la porte d'entrée pour enseigner à l'école maternelle et élémentaire, de la petite section au CM2. Organisé par les académies, il mène au métier après deux années de formation en alternance.

Il exige de solides **connaissances disciplinaires** en français, mathématiques, sciences et histoire, mais aussi une vraie maîtrise pédagogique des notions à enseigner.

Préparer le CRPE, c'est avant tout vouloir s'engager dans un métier qui s'incarne au quotidien : transmettre les savoirs, faire vivre les valeurs de la République et accompagner chaque élève dans sa réussite.

## La réforme 2026 : un concours accessible dès la licence

Grande nouveauté : le CRPE 2026 est accessible dès la fin de la **licence 3 (L3)**, là où il était jusqu'ici réservé aux étudiants en fin de master 2.

Pendant deux ans, en 2026 et 2027, les deux concours (L3 et M2) coexistent avant la suppression définitive du concours de M2.

Cette réforme vise à **rendre le concours plus accessible**, à attirer davantage de candidats et à proposer un parcours plus progressif vers le métier.

:::schema-reforme-2026

**Une formation rémunérée dès la réussite du concours**

Une fois admis, les lauréats n'entrent pas directement en classe. Ils intègrent le **master Métiers de l'Enseignement et de l'Éducation (M2E)** en alternance, avec une rémunération dès le premier jour :

- **En M1, statut élève fonctionnaire** : environ **1 400 € nets/mois**. La formation alterne cours à l'INSPE et 12 semaines de stages en école (observation et pratique accompagnée), pour un total d'environ 500 à 550 heures.
- **En M2, statut fonctionnaire stagiaire** : environ **1 800 € nets/mois**. La moitié du temps se passe en responsabilité devant une classe, l'autre moitié en formation à l'INSPE (environ 250 heures).

Un **engagement de service de 4 ans** après la titularisation est requis.

Ce modèle permet de construire progressivement son expérience d'enseignant tout en étant rémunéré, là où l'ancien système obligeait les étudiants à financer eux-mêmes deux années de master avant de pouvoir passer le concours.

Chez **Maitrizz**, nous voyons dans cette réforme une vraie opportunité : elle ouvre le métier plus tôt et valorise l'engagement dès la licence.

## Les différents types de concours (externe, interne, 3e voie)

Le CRPE est ouvert à tous les profils, selon trois voies d'accès :

:::schema-concours-types

Chaque année, de nombreux lauréats sont issus d'une reconversion. Le concours peut se passer à n'importe quel moment de la vie, pas seulement en sortie d'études.

## Les conditions d'inscription

Pour s'inscrire au CRPE 2026, vous devez :

- Être **titulaire d'une licence (bac +3)** ou d'un diplôme équivalent reconnu
- Être **de nationalité française ou européenne**
- Jouir de vos **droits civiques**
- Être **apte physiquement** à enseigner

---

Deux justificatifs supplémentaires ne sont pas exigés à l'inscription mais sont à anticiper : ils vous seront demandés pour la nomination et, dans certaines académies, pour passer les épreuves orales.

- **Attestation de natation 50 mètres**
- **PSC1** (Prévention et Secours Civiques de niveau 1)

## Les principales épreuves du CRPE

Le CRPE évalue à la fois les **connaissances disciplinaires** et les **compétences professionnelles**, à l'écrit comme à l'oral.

:::schema-epreuves-table

Au-delà des connaissances, le jury attend une vraie **posture d'enseignant** : savoir transmettre, argumenter, et faire preuve de recul sur sa pratique.

## Le calendrier officiel du CRPE 2026

| Étape | Période estimée |
|-------|-----------------|
| Ouverture des inscriptions | Octobre 2025 |
| Clôture des inscriptions | Novembre 2025 |
| Épreuves écrites d'admissibilité | Avril 2026 |
| Résultats d'admissibilité | Mai 2026 |
| Épreuves orales d'admission | Juin 2026 |
| Résultats définitifs | Juillet 2026 |

Ces dates peuvent varier selon les académies. Vérifiez toujours sur le site de la vôtre avant de vous organiser.

## Le CRPE est-il difficile ?

Le CRPE est exigeant, mais sa difficulté tient surtout à **l'ampleur du programme** plutôt qu'à la complexité des sujets. Avec une préparation régulière et bien structurée, il est tout à fait accessible.

## Comment bien se préparer au CRPE

Une préparation efficace repose moins sur le volume d'heures que sur la **méthode et la régularité**. Voici les cinq points qui font réellement la différence :

1. **Construisez un planning réaliste.** Répartissez les matières sur la durée et alternez théorie et entraînement. Des révisions courtes et régulières valent mieux que des sessions marathon du week-end.
2. **Commencez par les fondamentaux.** Français et mathématiques sont au cœur du concours. Consolidez ces bases avant de vous disperser sur les autres disciplines.
3. **Préparez l'oral dès le départ.** Beaucoup de candidats s'y mettent trop tard. Entraînez-vous à argumenter et à présenter une leçon dès les premières semaines.
4. **Suivez votre progression.** Maitrizz vous guide module par module et vous indique votre taux de maîtrise, pour savoir exactement où concentrer vos efforts.
5. **Simulez les conditions réelles.** Les mises en situation proposées par Maitrizz reproduisent l'oral pour vous entraîner sans mauvaise surprise le jour J.

## Ressources utiles

- [Programmes officiels du CRPE](https://www.devenirenseignant.gouv.fr/)
- Rapports de jury des sessions précédentes
- Ouvrages spécialisés (Hatier, Nathan, Retz…)
- Plateformes de préparation : **Maitrizz**, Objectif CRPE…

---

## FAQ : tout savoir sur le CRPE 2026

### Quel niveau pour passer le concours de prof des écoles ?

Depuis la réforme 2026, le CRPE est accessible dès la **licence (bac+3)**. Il n'est plus nécessaire d'attendre le master 2 pour se présenter. Une licence dans n'importe quelle discipline suffit, à condition de remplir les autres conditions d'inscription (nationalité, droits civiques, aptitude physique).

### Le concours CRPE est-il difficile ?

Le CRPE est exigeant, mais sa difficulté tient surtout à l'ampleur du programme plutôt qu'à la complexité des sujets. Avec une préparation régulière et bien structurée, il est tout à fait accessible.

### Comment va se passer le CRPE 2025 ?

Le CRPE 2025 s'est déroulé selon l'ancien format, réservé aux candidats en fin de master 2. À partir de 2026, le concours évolue : il est désormais accessible dès la licence, et les deux concours (L3 et M2) coexistent pendant une période transitoire de deux ans avant la suppression du concours M2.

### Quelles sont les dates d'inscription pour le CRPE 2026 ?

Les inscriptions au CRPE 2026 ont ouvert en **octobre 2025** et se sont clôturées en **novembre 2025**. Les épreuves écrites d'admissibilité se déroulent en avril 2026, les résultats tombent en mai, et les oraux ont lieu en juin. Les résultats définitifs sont attendus en juillet 2026. Ces dates peuvent varier selon les académies.
    `,
  },
  {
    slug: "motivation-discipline-crpe-tenir-duree",
    title: "Rester motivé pendant la préparation du CRPE : motivation et discipline",
    excerpt:
      "Découvre les conseils Maîtrizz pour rester motivé et discipliné tout au long de ta préparation au CRPE. Méthodes, organisation et astuces concrètes pour tenir jusqu'au concours.",
    category: "Conseils",
    author: "Rédaction Maitrizz",
    authorRole: "Équipe éditoriale Maitrizz",
    date: "2026-02-25",
    readTime: 7,
    featured: false,
    tags: ["motivation", "discipline", "organisation", "préparation", "conseils"],
    content: `
## Rester motivé pendant la préparation du CRPE

Préparer le **CRPE (Concours de Recrutement des Professeurs des Écoles)** est un **parcours exigeant**, souvent semé de doutes et de fatigue. Entre les cours, les révisions, la vie personnelle, familiale et parfois même un travail à temps plein à côté, il est facile de **perdre sa motivation et de ne pas aller jusqu'au bout de son projet.**

Mais bonne nouvelle : la motivation et la discipline ne sont pas innées, elles se **travaillent et s'entretiennent**.

Chez Maîtrizz, nous croyons en toi : nous savons que tu as tout ce qu'il faut pour tenir sur la durée et réaliser ton rêve de devenir enseignant(e).

Dans cet article, découvre nos **conseils concrets** pour garder le cap et **rester motivé jusqu'au jour du concours**.

---

## 1. Motivation CRPE : comprendre ton "pourquoi"

### Trouver ta source de motivation profonde

Avant de te plonger dans tes manuels ou dans les fiches Maîtrizz, prends le temps de réfléchir à ton **"pourquoi"**.

*Pourquoi veux-tu devenir enseignant(e) ? Pourquoi ce métier plutôt qu'un autre ?*

Cette réflexion n'est pas anecdotique : elle est la **base de ta motivation**, le moteur qui te permettra de **tenir sur la durée**.

La motivation, c'est ce qui oriente ton énergie et ta persévérance. Elle agit comme une **force mentale** : quand tu la comprends, tu peux la canaliser et la renforcer.

On distingue deux formes principales : **la motivation intrinsèque** et **la motivation extrinsèque**.

### Motivation intrinsèque : le moteur intérieur

La **motivation intrinsèque** naît de toi, sans influence extérieure. C'est celle qui te pousse à travailler **par plaisir**, **par intérêt** ou **par conviction personnelle**.

Dans le cadre du CRPE, elle peut se manifester par le **goût de transmettre**, la **passion pour l'éducation**, le **désir de contribuer à la réussite des élèves**, ou encore la **fierté d'exercer un métier porteur de sens**.

Cette forme de motivation est **la plus durable** : elle t'aide à avancer même quand le programme te semble long ou que la fatigue s'installe.

En d'autres termes, tu ne révises pas seulement pour "réussir le concours", tu le fais parce que **tu crois profondément à ton futur rôle d'enseignant**.

### Motivation extrinsèque : le moteur extérieur

La **motivation extrinsèque** vient de l'extérieur : elle repose sur les **récompenses**, les **objectifs concrets** ou la **reconnaissance** que procure la réussite.

Dans ton cas, cela peut être la **réussite du CRPE** et la fierté de prouver que tu en es capable, la **sécurité de l'emploi** dans la fonction publique, la **stabilité professionnelle**, ou encore le **statut d'enseignant**.

Cette motivation agit comme un **accélérateur temporaire** : elle te pousse à te dépasser à court terme, mais elle a tendance à fluctuer selon ton moral ou les résultats obtenus.

C'est pourquoi il est important de **l'équilibrer avec la motivation intrinsèque**, plus stable et nourrissante sur le long terme.

### Trouver l'équilibre entre motivation intrinsèque et extrinsèque

Pour réussir le **concours du CRPE**, ces deux sources de motivation se combinent **intelligemment**.

La motivation intrinsèque t'apporte du **sens** et de la **résilience**, tandis que la motivation extrinsèque te fournit des **repères** et des **objectifs mesurables**.

L'une te nourrit, l'autre te pousse.

> 🧡 Le conseil de Maîtrizz : Prends 10 minutes pour écrire noir sur blanc les **trois raisons essentielles** qui te motivent à préparer le CRPE. Affiche cette liste près de ton bureau, ou enregistre-la dans ton téléphone. Relis-la dès que ton énergie baisse : elle te rappellera ton cap et ravivera ta motivation.

---

## 2. Discipline CRPE : instaurer des habitudes solides

La **discipline**, c'est ce qui te permet de continuer **même quand la motivation s'essouffle**.

Chez Maîtrizz, on recommande d'installer une **routine de préparation claire et progressive**.

### a. Planifie un emploi du temps réaliste

Réserve des **plages de travail fixes** (2h chaque matin ou 3 soirs par semaine, par exemple). Alterne les matières : français, mathématiques, connaissance du système éducatif, EPS. Et n'oublie pas de t'accorder des **jours de pause** pour éviter le surmenage.

### b. Utilise les bons outils d'organisation

**Maîtrizz** suit ta progression notion par notion et t'affiche un **pourcentage de maîtrise** pour chaque thème, ce qui te permet de savoir d'un coup d'œil ce qui est acquis et ce qui mérite encore du travail. Un agenda ou Google Calendar t'aidera à planifier tes sessions sans rien laisser au hasard. Et pour rester concentré sans t'épuiser, la méthode Pomodoro (25 min de travail, 5 min de pause) fait ses preuves.

Ces repères concrets t'aident à **rester constant** et à diriger ton énergie là où elle est vraiment utile.

---

## 3. Gérer les baisses de motivation : les conseils Maîtrizz

Même avec une bonne méthode, il y aura des moments de fatigue. Plutôt que de te juger, **apprends à les gérer intelligemment.**

### a. Accepte les passages à vide

La démotivation fait partie du processus. Accorde-toi un jour de repos, fais une activité plaisir, puis reprends doucement. L'important, c'est de **ne jamais rompre complètement la chaîne**.

### b. Varie les formats de révision

Changer ta manière de travailler redonne souvent un coup de boost. Tu peux relire une fiche sur **Maîtrizz** et enchaîner directement avec le quiz associé, faire un quiz chronométré sur une matière faible, rejoindre un groupe Facebook ou Discord de candidats CRPE, ou encore lire des témoignages de candidats ayant réussi.

### c. Célèbre chaque petite victoire

Chaque chapitre maîtrisé, chaque semaine de révisions complétée est une **étape franchie vers le CRPE**. Offre-toi un petit moment de fierté : ton cerveau associera effort et plaisir.

---

## 4. L'importance de la communauté et de l'entraide

Préparer le CRPE peut être solitaire, mais tu n'as **pas à le faire seul(e)**.

Rejoindre une **communauté d'autres candidats**, c'est pouvoir partager ses doutes et ses réussites, se motiver mutuellement, échanger des fiches et des astuces de préparation.

C'est pourquoi **Maîtrizz** prépare le lancement d'un **serveur Discord** dédié aux candidats au CRPE. Un espace pensé pour rassembler tous les utilisateurs de la plateforme : poser ses questions, partager ses avancées, s'encourager dans les moments difficiles et célébrer les victoires ensemble. Parce que progresser en communauté, c'est progresser plus vite.

---

## 5. Ce qui fait vraiment la différence sur la durée

Il y aura des jours où tu n'auras pas envie. Où tu ouvriras ton cours, tu liras la même phrase trois fois sans rien retenir, et tu te demanderas si tu es vraiment fait(e) pour ça.

Ces jours-là, ce n'est pas la motivation qui te sauvera. C'est l'habitude que tu auras construite. Celle de t'asseoir quand même, de faire un seul quiz, de relire une seule fiche. Juste une. Et souvent, ça suffit à relancer la machine.

La motivation, c'est ce qui t'a poussé(e) à t'inscrire. La discipline, c'est ce qui te fait ouvrir tes fiches même les soirs où tu n'en as aucune envie. Les deux ensemble, c'est ce qui transforme un projet en réussite.

> "La discipline pèse des onces, le regret pèse des tonnes.", Jim Rohn

---

## Prends le bon départ avec Maîtrizz

Tu veux **tenir la distance jusqu'au CRPE** sans perdre ta motivation ?

Rejoins **Maîtrizz**, la plateforme de révision 100 % dédiée au CRPE : des fiches synthétiques interactives, des quiz avec suivi de progression, et bientôt une communauté d'entraide pour ne jamais te retrouver seul(e) face au concours.

**Prépare-toi efficacement, pas seul(e). Maîtrizz t'accompagne jusqu'à la réussite.**
    `,
  },
  {
    slug: "gerer-stress-ecrits-crpe-methode-complete",
    title: "Gérer son stress aux écrits du CRPE : méthode complète pour rester calme et performant le jour J",
    excerpt:
      "Gérer son stress aux écrits du CRPE est possible avec une méthode concrète. Visualisation, respiration, protocole du matin... Toutes les stratégies pour transformer l'anxiété en moteur de performance le jour J.",
    category: "Conseils",
    author: "Rédaction Maitrizz",
    authorRole: "Équipe éditoriale Maitrizz",
    date: "2026-02-25",
    readTime: 8,
    featured: false,
    tags: ["stress", "écrits", "mental", "méthode", "jour J", "performance"],
    content: `
## Pourquoi on stresse autant aux écrits du CRPE ?

Gérer son stress aux écrits du CRPE est l'une des préoccupations majeures des candidats. Chaque année, beaucoup redoutent de perdre leurs moyens face au sujet, de paniquer, ou d'avoir "un trou" au pire moment.

Soyons clairs : le stress au CRPE est normal. Il devient problématique uniquement lorsqu'il prend le dessus. La bonne nouvelle, c'est qu'il existe des stratégies concrètes pour réussir les écrits du CRPE sans se laisser envahir.

Les écrits cumulent plusieurs facteurs anxiogènes :

- Temps limité
- Silence pesant
- Sujet inconnu
- Enjeu professionnel fort

Le cerveau interprète cela comme une menace. Résultat : accélération du rythme cardiaque, respiration courte, pensées confuses.

Pourtant, dans la majorité des cas, l'échec aux écrits du CRPE ne vient pas d'un manque de connaissances, mais d'une mauvaise gestion du stress et du temps.

Le stress n'est pas un adversaire. C'est une énergie. Une montée d'adrénaline destinée à vous rendre plus vigilant, plus concentré, plus réactif. Au lieu de chercher à le supprimer, il faut s'en servir comme d'un moteur. Le tout est de le canaliser, pas de le subir.

---

## 1) Une semaine avant : préparer son mental pour réussir les écrits du CRPE

### Arrêter la surcharge cognitive

À J-3, stop aux nouvelles notions. Consolidez vos plans types, vos automatismes en français et en mathématiques. Plus vous cherchez à accumuler, plus vous créez de la tension inutile.

### La visualisation positive : l'arme stratégique

Voici le levier le plus puissant pour gérer son stress au CRPE. Chaque jour, pendant 5 minutes, fermez les yeux et imaginez précisément :

- Vous entrez calmement dans la salle
- Le sujet est distribué
- Vous le lisez posément
- Il vous paraît clair
- Les idées arrivent naturellement
- Vous construisez un plan structuré
- Vous rédigez avec fluidité

Allez encore plus loin. Imaginez que le sujet vous semble presque simple. Que vous ressentez une clarté mentale. Que vous prenez du plaisir à organiser votre réflexion.

Ce basculement est déterminant. Le cerveau enregistre ce scénario comme une expérience possible. Vous remplacez l'anticipation négative par une projection constructive. Répétez cette visualisation chaque jour jusqu'au concours.

---

## 2) La veille des écrits : réduire l'anxiété logistique

La veille, l'objectif est simple : éviter toute agitation inutile.

Checklist :
- Convocation prête
- Carte d'identité vérifiée
- Itinéraire confirmé
- Tenue confortable préparée
- Stylos fonctionnels

Arrêtez les révisions en fin d'après-midi. Une courte séance de respiration ou de méditation aide à abaisser la tension. Vous pouvez utiliser des exercices guidés via **Petit Bambou** ou certaines méditations proposées par **Christophe André sur Youtube.**

L'objectif n'est pas l'ataraxie parfaite. Juste une décrue progressive de la pression.

---

## 3) Le matin du CRPE : protocole anti-stress en 10 minutes

Si vous vous demandez comment ne pas stresser au CRPE, appliquez ce protocole simple.

### Étape 1 : respiration 4–6

Inspirez 4 secondes. Expirez 6 secondes. Pendant 3 à 5 minutes. L'expiration longue envoie un signal de sécurité au cerveau.

### Étape 2 : ancrage corporel

- Pieds bien ancrés au sol
- Épaules relâchées
- Mâchoire détendue

Le corps stabilise l'esprit.

### Étape 3 : visualisation express

Rejouez votre scénario : lecture calme, sujet accessible, plan clair, rédaction fluide. Ressentez cette simplicité.

---

## 4) Au moment de découvrir le sujet : éviter la panique

Quand le sujet arrive, ne commencez pas immédiatement. Prenez 2 minutes pour :

- Lire lentement
- Surligner les mots-clés
- Reformuler la consigne

La panique vient souvent d'une lecture précipitée. Dites-vous intérieurement :

> "Je prends le temps. J'ai une méthode."

La méthode rassure.

---

## 5) Si le stress monte pendant l'épreuve

Même les candidats bien préparés peuvent ressentir une montée de stress. Voici le protocole :

1. Posez le stylo.
2. Respirez profondément 3 fois.
3. Revenez au plan.

Fractionnez toujours : analyse, plan, développement, relecture. Découper rend la tâche plus maîtrisable.

---

## 6) Transformer le stress en concentration

Un léger stress améliore la vigilance et la performance cognitive. Rappelez-vous :

- Vous avez révisé
- Vous avez fait des sujets
- Vous avez progressé
- Vous êtes prêt(e)

Votre cerveau sait faire. Le jour des écrits du CRPE, il ne s'agit pas d'être parfaitement détendu. Il s'agit d'utiliser cette tension comme un levier de concentration.

---

## FAQ : gérer son stress aux écrits du CRPE

### Comment ne pas paniquer devant le sujet du CRPE ?

Prenez deux minutes de lecture lente, respirez profondément, reformulez la consigne. La panique vient souvent d'une mauvaise interprétation initiale.

### Est-ce normal de stresser pour les écrits du CRPE ?

Oui. Le stress est une réaction physiologique normale face à un enjeu important. Il devient problématique uniquement s'il n'est pas régulé.

### La visualisation fonctionne-t-elle vraiment pour un concours ?

Oui. La visualisation prépare le cerveau à vivre la situation avec plus de familiarité, ce qui diminue l'intensité de la réaction de stress.

### Comment puis-je gérer mon stress avant un concours ?

Arrêtez les nouvelles notions à J-3, pratiquez la visualisation positive chaque jour, et sécurisez toute la logistique la veille. Moins il y a d'inconnues, moins le cerveau perçoit la situation comme une menace.

### Est-il possible de rater ses examens à cause du stress ?

Oui. Dans certains cas, l'échec aux écrits du CRPE ne vient pas d'un manque de connaissances, mais d'une mauvaise gestion du stress et du temps. C'est précisément pourquoi le préparer en amont fait toute la différence.

### Comment gérer son stress en 5 minutes ?

Appliquez le protocole du matin : respirez en 4–6 (inspirez 4 secondes, expirez 6 secondes) pendant 3 minutes, ancrez votre corps (pieds au sol, épaules relâchées), puis rejouez mentalement une épreuve fluide. Ce enchaînement suffit à amorcer une décrue rapide.

---

## En résumé : réussir les écrits du CRPE sans se laisser submerger

Pour gérer efficacement votre stress aux écrits du CRPE :

- Arrêtez la surcharge à J-3
- Visualisez chaque jour une épreuve fluide et accessible
- Sécurisez la logistique la veille
- Respirez lentement le matin
- Fractionnez méthodiquement votre travail

Le stress peut devenir un moteur puissant. À condition de le canaliser, il vous pousse à être plus attentif, plus précis, plus engagé. Et c'est exactement l'état dont vous avez besoin pour réussir les écrits du CRPE.

Chez **Maitrizz**, nous savons à quel point ce concours compte pour vous. Nous croyons sincèrement en votre travail, en votre progression et en vos capacités. Faites-vous confiance, restez stable, et avancez avec méthode. On vous envoie toute notre énergie, et un maximum de réussite pour le jour J ! 🍀
    `,
  },
  {
    slug: "preparer-oral-crpe-guide-complet",
    title: "Comment bien préparer l'oral du CRPE : le guide complet",
    excerpt:
      "L'épreuve orale du CRPE fait peur à beaucoup de candidats. Pourtant, avec une bonne méthode et une préparation structurée, elle devient l'occasion de valoriser ta passion pour l'enseignement.",
    category: "Guides",
    author: "Sophie Martin",
    authorRole: "Professeure des écoles & formatrice CRPE",
    date: "2026-02-18",
    readTime: 8,
    tags: ["oral", "entretien", "méthode", "préparation"],
    content: `
## L'oral du CRPE : de quoi s'agit-il ?

L'épreuve orale d'admission au CRPE se compose de deux parties : l'épreuve de mise en situation professionnelle (leçon) et l'entretien avec le jury. C'est cette deuxième partie qui effraie souvent le plus les candidats, car elle touche à des domaines très vastes.

## Les composantes de l'entretien

L'entretien du jury dure 40 minutes et se décompose en trois volets :
- **EPS** : concevoir et présenter une séquence d'éducation physique et sportive (20 min)
- **Connaissance du système éducatif** : répondre à des questions sur le fonctionnement de l'école en France (10 min)
- **Motivation** : expliquer ton parcours et ta motivation pour devenir professeur des écoles (10 min)

## Préparer la partie "Connaissance du système éducatif"

C'est souvent la partie la plus redoutée. Le jury peut poser des questions sur :
- Les cycles d'enseignement et les programmes officiels
- Les valeurs de l'école républicaine (laïcité, inclusion, mixité...)
- Les dispositifs d'accompagnement des élèves (ULIS, RASED, PAP, PPS...)
- L'organisation institutionnelle (Éducation nationale, DSDEN, Inspecteur académique...)

**Conseil clé** : ne pas mémoriser des définitions, mais comprendre les enjeux et être capable de les relier à des situations concrètes de classe.

## La méthode STAR pour l'entretien de motivation

Pour répondre aux questions sur ta motivation, structure chaque réponse selon la méthode STAR :
- **S**ituation : le contexte
- **T**âche : ce que tu avais à faire
- **A**ction : ce que tu as fait concrètement
- **R**ésultat : ce que tu en as tiré

## Les erreurs à éviter

1. Répondre de manière générale et vague ("j'aime les enfants")
2. Ne pas connaître les textes officiels de référence
3. Ignorer l'actualité éducative récente
4. Manquer de recul sur ses propres expériences avec les enfants

## Conclusion

L'oral du CRPE est avant tout un échange avec des professionnels de l'éducation. Montre ta curiosité, ta rigueur, et ta sincère envie d'apprendre le métier.
    `,
  },
  {
    slug: "5-erreurs-mathematiques-crpe",
    title: "Les 5 erreurs classiques à l'épreuve de mathématiques du CRPE",
    excerpt:
      "Beaucoup de candidats butent sur les mêmes pièges à l'écrit maths. Voici les 5 erreurs les plus fréquentes et comment les éviter pour maximiser ta note.",
    category: "Conseils",
    author: "Julien Perrot",
    authorRole: "Préparateur CRPE en mathématiques",
    date: "2026-02-10",
    readTime: 6,
    featured: false,
    tags: ["maths", "épreuves écrites", "erreurs", "stratégie"],
    content: `
## Pourquoi les maths font peur au CRPE ?

L'épreuve écrite de mathématiques du CRPE est notée sur 20 et dure 4 heures. Elle comporte deux parties : résolution de problèmes et analyse de productions d'élèves. Beaucoup de candidats, même ceux ayant un niveau scientifique correct, sous-estiment la spécificité de cette épreuve.

## Erreur n°1 : oublier la didactique

Le CRPE ne teste pas seulement tes compétences en maths, mais aussi ta capacité à **enseigner** les maths. La deuxième partie de l'épreuve te demande d'analyser le travail d'élèves fictifs. Si tu réponds uniquement "c'est faux" sans expliquer pourquoi l'élève a fait cette erreur et comment y remédier, tu perds des points.

## Erreur n°2 : négliger la rédaction

Une réponse juste mais mal rédigée sera pénalisée. Le jury attend une présentation claire, avec les étapes de raisonnement bien détaillées. Entraîne-toi à rédiger comme si tu expliquais à un élève.

## Erreur n°3 : ne pas relire les consignes

Les énoncés du CRPE sont souvent longs et contiennent des pièges. Prends 5 minutes au début pour lire l'ensemble de l'épreuve et identifier les questions les plus accessibles.

## Erreur n°4 : ignorer les notions fondamentales du cycle 3

Les exercices portent principalement sur les notions du programme de CM1-CM2 : fractions, proportionnalité, géométrie, statistiques... Révise-les à fond, même si tu as un bac scientifique.

## Erreur n°5 : ne pas s'entraîner sur des sujets réels

Les annales des 5 dernières années sont ton meilleur outil. Fais des sujets entiers en conditions réelles (4h, sans internet) pour t'habituer au format.

## En résumé

| Erreur | Solution |
|--------|----------|
| Oublier la didactique | Analyse les erreurs d'élèves avec bienveillance |
| Mauvaise rédaction | Rédige comme pour un élève |
| Consignes mal lues | Lire le sujet entier avant de commencer |
| Notions oubliées | Réviser le programme cycles 2 et 3 |
| Manque d'entraînement | Faire des annales en conditions réelles |
    `,
  },
  {
    slug: "temoignage-reussite-crpe-premiere-tentative",
    title: "Témoignage : j'ai réussi le CRPE du premier coup, voici comment",
    excerpt:
      "Camille, 24 ans, étudiante en M2 MEEF, partage son expérience et ses conseils après avoir décroché son concours à la première tentative avec 14,5 de moyenne.",
    category: "Témoignages",
    author: "Camille Rousseau",
    authorRole: "Étudiante M2 MEEF – Lauréate CRPE 2025",
    date: "2026-01-28",
    readTime: 7,
    featured: false,
    tags: ["témoignage", "réussite", "organisation", "motivation"],
    content: `
## Mon profil avant le concours

J'ai une licence de lettres modernes, donc les maths étaient clairement mon point faible. En M1, j'avais validé l'épreuve de français sans trop de difficultés, mais les maths... c'était une autre histoire. Je me souviens avoir eu 5/20 à mon premier test blanc.

## Mon organisation sur 8 mois

**Septembre - octobre** : j'ai fait un bilan honnête de mes lacunes. J'ai repris les bases de la proportionnalité, des fractions et de la géométrie avec des manuels de CM2. C'est humiliant au début, mais nécessaire.

**Novembre - janvier** : révisions structurées. Je consacrais 2h par jour aux révisions : 1h de maths, 1h de français ou connaissances du système éducatif. J'utilisais un planning que je respectais à 80%.

**Février - mars** : entraînement intensif sur les annales. J'ai fait 6 sujets de maths et 4 sujets de français en conditions réelles.

**Avril** : j'ai ralenti le rythme pour ne pas arriver épuisée. Je me suis concentrée sur les points faibles résiduels.

## Ce qui a vraiment fait la différence

Ce n'est pas le nombre d'heures que j'ai travaillé, mais la **régularité**. Travailler 1h30 par jour 6 jours sur 7 est bien plus efficace que faire des sessions de 5h le week-end.

Pour l'oral, j'ai beaucoup simulé des entretiens avec des camarades. Parler à voix haute et recevoir des retours m'a énormément aidée à structurer mes réponses.

## Mon conseil numéro 1

Croire en toi, même quand les blancs se passent mal. J'ai eu 8/20 à mon dernier blanc de maths trois semaines avant le vrai concours. Et le jour J, j'ai eu 12. L'entraînement finit toujours par payer.
    `,
  },
  {
    slug: "systeme-educatif-francais-essentiel",
    title: "Le système éducatif français en 10 points essentiels pour le CRPE",
    excerpt:
      "La connaissance du système éducatif est un incontournable de l'entretien oral. Voici les 10 notions clés à absolument maîtriser pour impressionner le jury.",
    category: "Guides",
    author: "Marie-Claire Fontaine",
    authorRole: "Inspectrice de l'Éducation nationale – retraitée",
    date: "2026-01-15",
    readTime: 10,
    featured: false,
    tags: ["système éducatif", "oral", "connaissance", "jury"],
    content: `
## Pourquoi cette partie est cruciale

L'épreuve "Connaissance du système éducatif" est souvent celle qui différencie les candidats lors de l'entretien. Le jury attend des réponses précises, contextualisées, et qui montrent que tu as une vision globale et cohérente de l'école française.

## Point 1 : Les cycles d'enseignement

L'école primaire est organisée en trois cycles :
- **Cycle 1** (TPS, PS, MS, GS) : maternelle
- **Cycle 2** (CP, CE1, CE2) : apprentissages fondamentaux
- **Cycle 3** (CM1, CM2, 6e) : cycle de consolidation (partagé avec le collège)

## Point 2 : Les programmes officiels

Les programmes sont définis par le **Conseil Supérieur des Programmes** et publiés au Bulletin Officiel. Ils précisent les compétences et connaissances à acquérir par cycle.

## Point 3 : La laïcité à l'école

La laïcité est l'un des piliers de l'école républicaine. Elle garantit la neutralité religieuse des enseignants et la liberté de conscience des élèves. Connais la loi de 1905 et la Charte de la laïcité de 2013.

## Point 4 : Les dispositifs d'aide aux élèves

- **PPRE** : Programme Personnalisé de Réussite Éducative
- **PAP** : Plan d'Accompagnement Personnalisé (DYS)
- **PPS** : Projet Personnalisé de Scolarisation (handicap)
- **RASED** : Réseau d'Aides Spécialisées aux Élèves en Difficulté

## Point 5 : L'inclusion scolaire

La loi du 11 février 2005 et sa refonte en 2013 posent le principe de l'école inclusive. Les ULIS (Unités Localisées pour l'Inclusion Scolaire) accueillent les élèves en situation de handicap au sein des établissements ordinaires.

## Points 6 à 10

Les autres notions essentielles incluent : le rôle de l'IEN, le Conseil École-Collège, les évaluations nationales CP/CE1, le socle commun de connaissances, et la formation continue des enseignants.
    `,
  },
  {
    slug: "gerer-stress-jour-j-concours",
    title: "Gérer son stress le jour J : stratégies concrètes pour le CRPE",
    excerpt:
      "Le stress peut saboter des mois de préparation en quelques minutes. Des techniques validées par des psychologues du sport pour rester performant quand ça compte vraiment.",
    category: "Conseils",
    author: "Thomas Girard",
    authorRole: "Coach en préparation mentale",
    date: "2025-12-20",
    readTime: 5,
    featured: false,
    tags: ["stress", "mental", "jour J", "performance"],
    content: `
## Le stress : ennemi ou allié ?

Contrairement à ce qu'on croit, un peu de stress est **bénéfique**. Il active les ressources cognitives et améliore la concentration. Le problème, c'est quand il dépasse un certain seuil et qu'il devient paralysant.

## La veille du concours

**Ce qu'il faut faire :**
- Préparer ton sac et tes documents la veille au soir
- Dormir à heure normale (ne pas essayer de dormir plus tôt)
- Faire une activité physique légère (marche, yoga)
- Manger normalement, pas de repas trop lourd

**Ce qu'il faut éviter :**
- Réviser jusqu'à minuit
- Lire des témoignages négatifs sur les forums
- Boire beaucoup d'alcool "pour te détendre"

## Le matin du concours

Réveille-toi avec suffisamment de temps devant toi. Mange un petit-déjeuner complet. Arrive 30 minutes en avance pour t'installer sereinement.

## La technique de la respiration cohérente

En cas de pic de stress, pratique la **respiration cohérente** : inspire pendant 5 secondes, expire pendant 5 secondes. Répète 10 fois. Cette technique active le système parasympathique et réduit le cortisol en moins de 2 minutes.

## Pendant l'épreuve

Si tu bloques sur une question, **passe à la suivante** sans culpabiliser. Le fait de continuer à écrire, même sur une autre question, débloque souvent la réponse cherchée.
    `,
  },
  {
    slug: "ressources-indispensables-preparation-crpe",
    title: "Les ressources indispensables pour préparer le CRPE en 2026",
    excerpt:
      "Sites officiels, livres, chaînes YouTube, groupes d'entraide... Tour d'horizon des meilleures ressources pour une préparation solide au CRPE, toutes gratuites ou peu coûteuses.",
    category: "Guides",
    author: "Léa Bonnet",
    authorRole: "Rédactrice Maitrizz",
    date: "2025-12-05",
    readTime: 6,
    featured: false,
    tags: ["ressources", "outils", "préparation", "gratuit"],
    content: `
## Les ressources officielles incontournables

**eduscol.education.fr** : le site de référence du ministère. Tu y trouveras les programmes officiels, les ressources d'accompagnement pédagogique et les bulletins officiels.

**Devenirenseignant.gouv.fr** : tout sur le déroulement du concours, les sujets des années précédentes, et les épreuves détaillées.

## Les manuels recommandés

- *Réussir le CRPE* (éditions Hachette) : synthèse complète du programme
- *Mathématiques pour le CRPE* (éditions Nathan) : exercices progressifs avec corrigés
- *Le système éducatif* (éditions Berger-Levrault) : référence pour la partie connaissance du système

## Les ressources gratuites en ligne

**YouTube** : cherche "CRPE mathématiques" ou "CRPE entretien jury" — il existe d'excellentes chaînes tenues par des professeurs formateurs.

**Les groupes Facebook et Discord** : rejoindre des groupes de prépa CRPE te permettra de partager des annales, de trouver des partenaires de simulation d'oral, et de te sentir moins seul(e).

## Maitrizz, bien sûr !

Notre plateforme propose des fiches synthétiques, des QCM interactifs et des exercices de mise en situation professionnelle — tout ce qu'il te faut pour une préparation structurée et efficace.

## Organiser ses ressources

Ne collectionne pas les ressources sans les utiliser. Sélectionne 2-3 livres maximum et quelques sites, et exploite-les à fond plutôt que de te disperser.
    `,
  },
  {
    slug: "actualites-crpe-2026-nouveautes",
    title: "CRPE 2026 : les nouveautés à connaître pour cette session",
    excerpt:
      "Le concours CRPE évolue chaque année. Voici les changements importants pour la session 2026 et ce que ça implique concrètement pour ta préparation.",
    category: "Actualités",
    author: "Rédaction Maitrizz",
    authorRole: "Équipe éditoriale Maitrizz",
    date: "2026-01-05",
    readTime: 4,
    featured: false,
    tags: ["actualités", "2026", "concours", "nouveautés"],
    content: `
## Le calendrier 2026

Les inscriptions au CRPE session 2026 ont ouvert en novembre 2025. Les épreuves d'admissibilité (écrits) se dérouleront en mars 2026, et les résultats seront publiés en mai. Les épreuves d'admission (oraux) auront lieu entre mai et juillet 2026.

## Les évolutions des épreuves

Pour cette session, les modalités restent globalement stables. Le jury continue d'insister sur la capacité des candidats à **articuler théorie et pratique pédagogique**. Les questions sur la gestion de l'hétérogénéité et l'inclusion restent au cœur des entretiens.

## Les thèmes d'actualité à maîtriser

Le jury est attentif à l'actualité éducative. En 2026, les thèmes suivants sont particulièrement d'actualité :
- Le choc des savoirs et le renforcement des fondamentaux
- La lutte contre le harcèlement scolaire (programme pHARe)
- L'utilisation de l'intelligence artificielle à l'école
- L'égalité filles-garçons et la lutte contre les stéréotypes

## Notre conseil

Consulte régulièrement les actualités sur eduscol.education.fr et abonne-toi à la newsletter du ministère pour ne rater aucune évolution importante avant les épreuves.
    `,
  },
  {
    slug: "preparation-epreuve-francais-crpe",
    title: "Épreuve de français CRPE : méthodologie et pièges à éviter",
    excerpt:
      "L'épreuve de français est souvent redoutée pour sa partie linguistique. Voici une approche méthodologique claire pour aborder sereinement les 4 heures de l'épreuve écrite.",
    category: "Conseils",
    author: "Nathalie Vidal",
    authorRole: "Professeure de lettres & préparatrice CRPE",
    date: "2025-11-18",
    readTime: 7,
    featured: false,
    tags: ["français", "épreuves écrites", "linguistique", "méthode"],
    content: `
## La structure de l'épreuve

L'épreuve de français dure 4 heures et se compose de :
1. **Une partie réponse à des questions** sur un texte littéraire ou documentaire (analyse, compréhension)
2. **Une partie production écrite** : rédaction d'une réponse argumentée ou d'un texte de type fonctionnel
3. **Une partie connaissance de la langue** : grammaire, orthographe, lexique, phonologie

## La partie linguistique : un entraînement spécifique

C'est souvent la partie qui surprend. Elle teste des notions précises de la langue française : analyse morphosyntaxique, fonctions grammaticales, formation des mots... Ces notions s'oublient vite si on ne les révise pas régulièrement.

**Conseil** : travaille cette partie avec des exercices quotidiens de 15-20 minutes plutôt qu'en sessions ponctuelles intenses.

## La production écrite

Attention à ne pas confondre "écrire beaucoup" et "bien écrire". Le jury valorise :
- Une argumentation structurée (introduction, développement en 2-3 parties, conclusion)
- Un vocabulaire précis et varié
- Une syntaxe correcte et fluide
- Le respect de la consigne

## Les ressources recommandées

- Le *Bescherelle* complet pour les révisions grammaticales
- Les annales commentées publiées par Hatier ou Nathan
- Les ressources linguistiques sur Éduscol pour les notions de grammaire scolaire
    `,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: Article["category"]): Article[] {
  return articles.filter((a) => a.category === category);
}

export const categories: Article["category"][] = [
  "Conseils",
  "Témoignages",
  "Guides",
  "Actualités",
];
