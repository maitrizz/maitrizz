# Doctrine des exercices — refonte (français écrit)

Comment écrire des exercices **difficiles, pertinents et exigeants**, calibrés sur l'esprit du
**Grévisse exercices** (compagnon CRPE), et logés dans les **3 niveaux** du format figé. Cette
doctrine pilote le **second chantier** (refonte des exercices), distinct de la migration de
structure (`SPEC_STRUCTURE_NOTION.md`). Modèle de référence à imiter : la banque
`exercices-classes-grammaticales.ts`.

> Cap éditorial : on ne veut **pas** un quiz de cours déguisé. Le jour J, on évalue
> **l'application** (analyser de vraies phrases, rédiger une justification), pas le savoir
> théorique. Chaque exercice fait **produire** une analyse, et le corrigé montre la **réponse
> telle qu'on l'écrirait au concours**.

---

## 1. Les 3 niveaux : ce que chacun vaut

| Niveau | Nom | Rôle | Forme typique | Exigence du corrigé |
|---|---|---|---|---|
| 1 | **Fondamentaux** | démarrer, ancrer le réflexe | **un mot, un test** : une phrase courte, un seul mot souligné, manipulation simple | une phrase : la nature **+ le test** qui la prouve. Pas de piège artificiel. |
| 2 | **Concours** *(la cible)* | le niveau **réel du jour J** | **phrase complète**, format épreuve, **plusieurs** mots à analyser, parfois un mot-caméléon | nature **+ justification par un indice de la phrase**, pour chaque mot. Le piège n'apparaît **que s'il existe vraiment**. |
| 3 | **Expert** *(au-delà)* | se challenger, dépasser l'épreuve | phrases **denses/ambiguës**, oppositions fines (deux occurrences du même mot, cas limites, lexicalisation…) | on s'autorise « **ce que le correcteur attend** » : la manipulation décisive, la distinction subtile, le contre-exemple. |

**Calibrage clé :** « Concours » = la **cible**, c'est lui qui doit ressembler trait pour trait à
l'épreuve. « Expert » va **plus loin** que le jour J (il n'est pas « le vrai concours » : il le
dépasse). Un élève qui réussit tout le niveau 2 est prêt ; le niveau 3 est un bonus de dépassement.

---

## 2. Les types de tâches (l'apport du Grévisse)

On travaille la notion **sous plusieurs angles**, pas seulement « donnez la nature ». Varier les
**verbes de consigne** est ce qui muscle vraiment. Au moins **4 types différents** par notion :

1. **Identifier** — « Donnez la nature du mot souligné. » (le socle)
2. **Repérer dans un texte** — « Relevez tous les déterminants de cette phrase. » (balayage, vigilance)
3. **Classer** — « Classez ces mots en deux colonnes : variables / invariables. » (catégorisation)
4. **Distinguer** — « Les deux *du* ont-ils la même nature ? Justifiez. » (opposition de cas proches)
5. **★ Prouver par une manipulation** — « Prouvez, **par une manipulation**, que *bon* est ici un
   adverbe. » **C'est le cœur du Grévisse, et le plus exigeant** : on ne nomme pas, on **démontre**
   par un test (accord, remplacement, suppression, déplacement). À privilégier en niveaux 2 et 3.

> Le jury n'attend pas une étiquette, il attend une **preuve**. Plus on monte, plus la consigne doit
> demander de **manipuler** la langue, pas de réciter.

---

## 3. La voix d'expert : un curseur, pas une recette

Calibrer la **profondeur du corrigé** sur l'enjeu (anti-ton « IA » dans les deux sens : ni corrigé
squelettique, ni sur-explication uniforme).

- **Niveau 1** = une phrase (la nature + le test). Rien de plus.
- **Niveau 2** = nature + justification ancrée dans la phrase ; **piège mentionné seulement s'il existe**.
- **Niveau 3** = on développe « ce que le correcteur attend » : la manipulation qui tranche, la
  distinction fine, pourquoi l'erreur classique est une erreur.

**Anti-redondance (règle ferme).** `reponseType` = **LE** corrigé, complet, tel qu'on l'écrit au
concours. `explication` reste **vide** par défaut ; elle ne porte qu'un **extra distinct** (un
piège, une ligne « côté correcteur ») — **jamais** une paraphrase du `reponseType`. Un corrigé =
un texte.

---

## 4. Exigence du contenu

- **De vraies phrases.** Privilégier des énoncés naturels, du français réel. Monter vers des
  **citations d'auteurs sourcées** (auteur + œuvre) pour les niveaux 2-3 : c'est l'exigence
  Grévisse, et ça hausse le niveau de langue. ⚠️ Toute citation doit être **vérifiée** (attribution
  + texte exacts) ; dans le doute, phrase neutre plutôt qu'une fausse citation.
- **Densité croissante.** Niveau 1 : un mot. Niveau 2 : 2-3 mots, dont parfois un caméléon. Niveau 3 :
  plusieurs occurrences ambiguës, cas limites (lexicalisation, partitif vs contracté, relatif vs
  conjonction…).
- **Multi-tag honnête.** Une phrase dense porte **plusieurs** `savoirFaire` : tous les taguer (le
  filtre « Ce que je travaille » doit ramener *tout* ce qui contient le savoir-faire).
- **Pertinence > accumulation.** On vise la **profondeur** (exercices choisis, variés, qui révèlent
  un vrai geste), pas le nombre. L'automatisme par répétition, c'est le **hub**, pas la notion.

---

## 5. Couverture cible (par notion)

Objectif indicatif, à ajuster selon la richesse de la notion :

- **Chaque savoir-faire** présent à **plusieurs niveaux** (au moins Fondamentaux + Concours).
- **Niveau 1 (Fondamentaux)** : ~5-6 exercices, au moins un par savoir-faire + un « classer ».
- **Niveau 2 (Concours)** : ~8-10 exercices, format épreuve, **les 4+ types** représentés, dont au
  moins un « **prouver par une manipulation** » et un « repérer dans un texte ».
- **Niveau 3 (Expert)** : ~5-6 exercices, oppositions fines et cas denses.
- **Contrôle de couverture** : avant de clore une notion, vérifier que chaque savoir-faire a de la
  matière aux niveaux 1 et 2. Un savoir-faire sans matière = soit on complète, soit ce n'était pas
  un savoir-faire exerçable (→ point de cours, cf. `SPEC_STRUCTURE_NOTION.md §3`).

---

## 6. À éviter (anti-patterns)

- ❌ Piège **artificiel** ajouté pour faire « niveau 3 » alors qu'il n'existe pas dans la phrase.
- ❌ `explication` qui **répète** `reponseType`.
- ❌ Consigne unique « donnez la nature » répétée 15 fois (pas de variété de types).
- ❌ Question **de cours** (« combien y a-t-il de classes invariables ? ») : ça, c'est Comprendre/Mémo.
- ❌ Citation d'auteur **non vérifiée** ou approximative.
- ❌ Corrigé squelettique en niveau 3, ou sur-expliqué en niveau 1.
- ❌ Tiret cadratin ; terminologie pré-2020 ; annale non sourcée (charte §9).

---

## 7. Workflow de refonte d'une notion (chantier 2)

1. Relire les `SAVOIR_FAIRE` de la notion (issus de la migration).
2. Pour chaque savoir-faire, écrire/muscler les exercices aux 3 niveaux selon §1-§5, en variant les
   **types** (§2) et en montant l'exigence (§3-§4).
3. Curer les citations sourcées des niveaux 2-3.
4. Passer le **contrôle de couverture** (§5) et la **liste anti-patterns** (§6).
5. `tsc` + `eslint` + rendu **L3 et M2** ; relecture humaine (calibrage Grévisse) avant de clore.

> Ordre des deux chantiers : la **structure** (migration) d'abord sur les 21 notions, **puis** la
> refonte des exercices notion par notion (passe éditoriale, sans risque structurel). On ne lance
> jamais les deux en parallèle sur la même notion (ils touchent les mêmes blocs).
