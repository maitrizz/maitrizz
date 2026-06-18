import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je sais convertir n'importe quel entier d'une base quelconque vers la base 10 (méthode des puissances)" },
  { id: "e2", label: "Je sais convertir de la base 10 vers une base quelconque (divisions successives)" },
  { id: "e3", label: "Je connais et applique les règles des chiffres hexadécimaux A à F" },
  { id: "e4", label: "Je comprends la différence entre système additif et positionnel, avec exemples" },
  { id: "e5", label: "Je maîtrise les règles d'écriture des nombres en lettres (cent, vingt, mille)" },
  { id: "e6", label: "Je peux analyser une erreur d'élève sur la numération et proposer une remédiation" },
  { id: "e7", label: "Je connais le rôle du zéro occupant et le lien avec l'enseignement primaire" },
];

export const ficheNumerationSystemesDeBases: Fiche = {
  slug: "numeration-systemes-de-bases",
  matiere: "mathematiques",
  numero: 1,
  partie: "Partie 1 : Nombres et calcul",
  title: "Numération · Systèmes de bases",
  subtitle:
    "Comprendre la numération décimale · Convertir entre bases · Lire et écrire tout entier · Notations scientifiques et préfixes",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème A", variant: "info" },
    { label: "Programme Seconde · Nombres et calculs", variant: "info" },
  ],
  metaTitle: "Numération et systèmes de bases (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur la numération : principe positionnel, conversions binaire/octal/hexadécimal, notation scientifique, préfixes du SI et règles d'écriture en lettres. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
  tabGroups: [
    {
      id: "decouvrir",
      label: "Découvrir",
      icon: "",
      tabs: [
    {
      id: "vue-d-ensemble",
      label: "Vue d'ensemble",
      icon: "",
      blocks: [
        {
          type: "sommaireApercu",
          title: "Le programme en 5 étapes",
          items: [
            {
              number: "①",
              title: "Le principe positionnel",
              text: "Pourquoi 12 et 21 ne valent pas la même chose : tout est question de position.",
            },
            {
              number: "②",
              title: "L'indice de base",
              text: "Le réflexe à acquérir avant tout calcul : repérer dans quelle base un nombre est écrit.",
            },
            {
              number: "③",
              title: "Les autres bases",
              text: "Binaire, octal, hexadécimal : le même principe que la base 10, juste un rythme différent.",
            },
            {
              number: "④",
              title: "Notation scientifique et préfixes",
              text: "Lire et écrire les très grands et très petits nombres, et les unités du quotidien.",
            },
            {
              number: "⑤",
              title: "Écriture en lettres",
              text: "Les règles d'accord de cent, vingt et mille, sources d'erreurs fréquentes.",
            },
          ],
        },
      ],
    },
    {
      id: "cours",
      label: "Cours",
      icon: "",
      blocks: [
        {
          type: "callout",
          variant: "info",
          icon: "",
          title: "Avant de commencer",
          text: "Vous utilisez les nombres depuis l'enfance. Ce Cours va rendre visible ce que vous faites déjà sans y penser, puis étendre ce mécanisme à d'autres bases. **Lisez-le en entier avant de passer à la Méthode.**",
        },
        {
          type: "subsection",
          number: "①",
          title: "Le principe positionnel : la valeur dépend de la position",
          blocks: [
            {
              type: "paragraph",
              text: "**12** et **21** utilisent les mêmes chiffres mais ne valent pas la même chose. La différence, c'est la **position**. Dans notre système, chaque rang vaut 10 fois le rang à sa droite, c'est pour ça qu'on appelle ça le système **décimal**.",
            },
            {
              type: "highlightBox",
              variant: "marine",
              title: "Le nombre 345 dans ses boîtes",
              blocks: [
                {
                  type: "cardGrid",
                  columns: 3,
                  variant: "info",
                  cards: [
                    { value: "3", lines: ["position 2", "(centaines)", "**3 × 10² = 300**"] },
                    { value: "4", lines: ["position 1", "(dizaines)", "**4 × 10¹ = 40**"] },
                    { value: "5", lines: ["position 0", "(unités)", "**5 × 10⁰ = 5**"] },
                  ],
                },
                {
                  type: "formulaBlock",
                  lines: ["**345 = 3×10² + 4×10¹ + 5×10⁰ = 300 + 40 + 5**"],
                  note: "Formule clé : valeur d'un chiffre = **chiffre × base^position**. Les positions se numérotent de droite à gauche en partant de 0.",
                },
              ],
            },
            {
              type: "cardGrid",
              columns: 2,
              cards: [
                {
                  title: "⚠️ Le zéro occupant",
                  variant: "warning",
                  lines: [
                    "Dans **4 062**, le zéro n'est pas « rien », il *occupe* la position des centaines et décale le 4 à la position des milliers.",
                    "4 062 = 4×1000 + 0×100 + 6×10 + 2",
                    "Sans lui : 462 ≠ 4062. En binaire : 1001₂ ≠ 11₂.",
                  ],
                },
                {
                  title: "Additif vs positionnel",
                  variant: "neutral",
                  lines: [
                    "Système **romain** (additif) : la valeur d'un symbole est fixe, VIII = 5+1+1+1 = 8.",
                    "Système **décimal** (positionnel) : même chiffre, valeur différente selon la position, le 1 dans 100 vaut 100, dans 10 vaut 10, dans 1 vaut 1.",
                    "En romain : IV = 5−1 = 4 (symbole plus petit avant plus grand → soustraction).",
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "subsection",
          number: "②",
          title: "L'indice de base : lire 1101₂ sans se tromper",
          blocks: [
            {
              type: "paragraph",
              text: "Le petit chiffre en bas à droite s'appelle l'**indice de base**. Il indique dans quelle base est écrit le nombre. **Sans indice → base 10 par défaut.**",
            },
            {
              type: "table",
              headers: ["Écriture", "Signification"],
              rows: [
                ["345", "pas d'indice → **base 10** · = trois cent quarante-cinq"],
                ["1101₂", "indice 2 → **base 2** (binaire) · vaut 13 en décimal"],
                ["1F₁₆", "indice 16 → **base 16** (hexadécimal) · vaut 31 en décimal"],
                ["17₈", "indice 8 → **base 8** (octal) · vaut 15 en décimal"],
              ],
            },
            {
              type: "callout",
              variant: "warning",
              title: "⚠️ Piège classique",
              text: "1101₂ ≠ 1101. Sans l'indice, on lirait « mille cent un ». Avec l'indice ₂, c'est un binaire qui vaut 13. **Repérer l'indice avant tout calcul, c'est le réflexe numéro 1.**",
            },
          ],
        },
        {
          type: "subsection",
          number: "③",
          title: "Les autres bases : même principe, autre rythme",
          blocks: [
            {
              type: "paragraph",
              text: "On a choisi 10 parce qu'on a 10 doigts. Mais le principe positionnel fonctionne avec n'importe quelle base. L'idée clé : **dans une base b, on utilise exactement b chiffres (de 0 à b−1), et on passe au rang suivant dès qu'on a compté b fois.**",
            },
            {
              type: "table",
              title: "Comment on compte de 0 à 7 dans chaque base",
              headers: ["Valeur réelle", "0", "1", "2", "3", "4", "5", "6", "7"],
              rows: [
                ["Base 10", "0", "1", "2", "3", "4", "5", "6", "7"],
                ["Base 2", "0", "1", "10", "11", "100", "101", "110", "111"],
                ["Base 16", "0", "1", "2", "3", "4", "5", "6", "7"],
              ],
            },
            {
              type: "paragraph",
              text: "En base 2, on n'a que 0 et 1, dès qu'on veut écrire 2, on n'a plus de chiffre disponible : on passe au rang suivant et on écrit **10₂**. Même logique qu'en base 10 où après 9 on écrit 10.",
            },
            {
              type: "cardGrid",
              columns: 3,
              cards: [
                {
                  title: "Base 10 : décimal",
                  variant: "info",
                  lines: ["Chiffres : **0 à 9**", "Passage au rang : tous les **10**", "Notation : 345"],
                },
                {
                  title: "Base 2 : binaire",
                  variant: "success",
                  lines: [
                    "Chiffres : **0 et 1**",
                    "Passage au rang : tous les **2**",
                    "Notation : 1101₂",
                    "*La langue des ordinateurs*",
                  ],
                },
                {
                  title: "Base 16 : hexadécimal",
                  variant: "warning",
                  lines: [
                    "Chiffres : **0–9 puis A–F**",
                    "A=10 · B=11 · C=12",
                    "D=13 · E=14 · F=15",
                    "*Codes couleurs, adresses mémoire*",
                  ],
                },
              ],
            },
            {
              type: "highlightBox",
              variant: "neutral",
              title: "La même formule dans chaque base : chiffre × base^position",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "1101₂ = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8+4+0+1 = **13**",
                    "1F₁₆ = 1×16¹ + 15×16⁰ = 16+15 = **31** (F vaut 15)",
                    "17₈ = 1×8¹ + 7×8⁰ = 8+7 = **15**",
                  ],
                  note: "Dans chaque cas : on repère l'indice de base → on numérote les positions → on multiplie → on additionne. Rien de plus.",
                },
              ],
            },
          ],
        },
        {
          type: "subsection",
          number: "④",
          title: "Notation scientifique et préfixes : lire les très grands et très petits nombres",
          blocks: [
            {
              type: "highlightBox",
              variant: "marine",
              icon: "",
              title: "La notation scientifique",
              blocks: [
                {
                  type: "paragraph",
                  text: "Forme : **a × 10ⁿ** avec **1 ≤ a < 10** et n entier.\nOn l'utilise pour éviter d'écrire des dizaines de zéros, et pour comparer des grandeurs très différentes.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  variant: "info",
                  cards: [
                    {
                      title: "Grands nombres → exposant +",
                      lines: ["300 000 = 3 × 10⁵", "47 000 = 4,7 × 10⁴", "*virgule déplacée vers la gauche*"],
                    },
                    {
                      title: "Petits nombres → exposant −",
                      lines: ["0,003 = 3 × 10⁻³", "0,000 047 = 4,7 × 10⁻⁵", "*virgule déplacée vers la droite*"],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "**Méthode :** déplacer la virgule jusqu'à avoir un chiffre entre 1 et 9 devant elle. Compter les rangs déplacés → c'est l'exposant. Gauche → positif · Droite → négatif.",
                },
              ],
            },
            {
              type: "highlightBox",
              variant: "neutral",
              icon: "",
              title: "Les préfixes du Système International (SI) : ils s'appliquent à toutes les unités",
              blocks: [
                {
                  type: "paragraph",
                  text: "Ces préfixes se placent devant n'importe quelle unité : mètre, gramme, litre, seconde… Pour passer d'un préfixe au suivant, on multiplie ou divise par 10 (ou par une puissance de 10).",
                },
                {
                  type: "table",
                  headers: ["Préfixe", "Symbole", "Puissance", "Valeur", "Exemples"],
                  rows: [
                    ["giga", "G", "10⁹", "1 000 000 000", "Go, GHz"],
                    ["méga", "M", "10⁶", "1 000 000", "Mo, MW, MHz"],
                    ["kilo", "k", "10³", "1 000", "km, kg, ko, kW"],
                    ["hecto", "h", "10²", "100", "hm, hg, ha"],
                    ["déca", "da", "10¹", "10", "dam, dag, dal"],
                    ["**unité de base**", "", "**10⁰**", "**1**", "m, g, l, s, octet…"],
                    ["déci", "d", "10⁻¹", "0,1", "dm, dg, dl"],
                    ["centi", "c", "10⁻²", "0,01", "cm, cg, cl"],
                    ["milli", "m", "10⁻³", "0,001", "mm, mg, ms, ml"],
                    ["micro", "μ", "10⁻⁶", "0,000 001", "μm, μg"],
                    ["nano", "n", "10⁻⁹", "0,000 000 001", "nm"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Conversions courantes à ne pas confondre",
                  text: "1 m = 10 dm = 100 cm = 1 000 mm · 1 km = 1 000 m\n1 m² = 100 dm² = 10 000 cm² · 1 km² = 1 000 000 m² · 1 ha = 10 000 m²\n1 m³ = 1 000 dm³ = 1 000 000 cm³ · 1 dm³ = 1 L = 1 000 mL = 1 000 cm³",
                },
              ],
            },
            {
              type: "callout",
              variant: "info",
              icon: "",
              title: "Bit et octet : spécifiques au numérique",
              text: "Un **bit** = le plus petit élément d'information, vaut 0 ou 1. · Un **octet** = 8 bits.\nLes préfixes SI s'appliquent aux octets : 1 Go = 10⁹ octets = 8 × 10⁹ bits\n*Exemple : une clé USB de 8 Go → 8 × 10⁹ × 8 = **6,4 × 10¹⁰ bits***",
            },
          ],
        },
        {
          type: "subsection",
          number: "⑤",
          title: "Écriture en lettres : les 3 règles d'accord",
          blocks: [
            {
              type: "highlightBox",
              variant: "marine",
              icon: "",
              title: "Les 3 règles : tout le reste s'en déduit",
              blocks: [
                {
                  type: "comparisonGrid",
                  rows: [
                    {
                      label: "CENT",
                      good: "✓ Avec -s\n200 → deux **cents**\n*multiplié + rien après*",
                      bad: "✗ Sans -s\n205 → deux **cent** cinq\n*suivi d'un chiffre*",
                    },
                    {
                      label: "VINGT",
                      good: "✓ Avec -s\n80 → quatre-vingt**s**\n*seul cas possible*",
                      bad: "✗ Sans -s\n82 → quatre-vingt-deux\n*suivi d'un chiffre*",
                    },
                    {
                      label: "MILLE",
                      good: "Toujours invariable, jamais de -s\n2 000 → deux **mille** · 5 000 → cinq **mille** · jamais *deux ~~milles~~*",
                    },
                  ],
                },
              ],
            },
            {
              type: "cardGrid",
              columns: 2,
              cards: [
                {
                  title: "Tirets",
                  variant: "info",
                  lines: [
                    "Réforme 1990 + arrêté 2021 : tirets généralisés autorisés.",
                    "**Au CRPE : les deux graphies sont acceptées.**",
                  ],
                },
                {
                  title: "Bizarrerie du français",
                  variant: "warning",
                  lines: [
                    "70 = soixante-dix (60+10)",
                    "80 = quatre-vingts (4×20)",
                    "90 = quatre-vingt-dix (4×20+10)",
                  ],
                },
              ],
            },
            {
              type: "table",
              headers: ["Nombre", "Correct", "Erreur fréquente", "Pourquoi"],
              rows: [
                ["80", "quatre-vingts", "quatre-vingt", "-s car seul"],
                ["81", "quatre-vingt-un", "quatre-vingts-un", "pas de -s : suivi de \"un\""],
                ["200", "deux cents", "deux cent", "-s car 2×100, rien après"],
                ["201", "deux cent un", "deux cents un", "pas de -s : suivi de \"un\""],
                ["2 000", "deux mille", "deux milles", "mille invariable"],
              ],
            },
          ],
        },
        {
          type: "piegeCard",
          variant: "rouge",
          title: "⚠️ Piège n°1 : Ne pas voir l'indice de base",
          badge: "Erreur très fréquente",
          faux: "Lire 1101₂ comme « mille cent un »",
          vrai: "Le ₂ indique la base 2, ce nombre vaut **13** en décimal, pas 1101.",
          methode: "Réflexe : chercher l'indice avant tout calcul. Sans indice → base 10.",
        },
        {
          type: "piegeCard",
          variant: "rouge",
          title: "Piège n°2 : Lire les restes dans le mauvais sens",
          badge: "Erreur n°1 en conversion",
          faux: "Convertir 13 → base 2 : restes 1,0,1,1 → écrire 1011₂",
          vrai: "On lit de BAS en HAUT → **1101₂**. Vérification : 8+4+0+1 = 13 ✓",
          methode: "La vérification prend 10 secondes et évite cette erreur à coup sûr.",
        },
        {
          type: "piegeCard",
          variant: "orange",
          title: "Piège n°3 : Oublier les zéros intercalaires",
          badge: "Très fréquent",
          faux: "45 = 32+8+4+1 → écrire 10111₂ (zéro oublié en position 1)",
          vrai: "Positions occupées : 5,3,2,0 → positions vides : 4 et 1 → **101101₂**",
          methode: "Lister toutes les positions de la plus haute à 0, cocher 1 ou 0 pour chacune.",
        },
        {
          type: "primaireBox",
          title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
          text: "**Maternelle :** construction du nombre comme cardinal (dénombrer) et ordinal (rang). Pas encore de système positionnel.\n\n**CP-CE2 :** le principe positionnel s'installe. L'élève apprend que dans 34, le « 3 » vaut 30. Outil clé : le tableau de numération (centaines/dizaines/unités). Obstacle documenté par Éduscol : le **zéro occupant**, un enfant écrit « 105 » pour « 1050 » parce qu'il n'entend pas le zéro des dizaines.\n\n**Ce que vous devez savoir dire :** « Notre système est positionnel et décimal, la valeur d'un chiffre dépend de sa position, chaque rang vaut 10 fois le précédent. Travailler en base 2 ou 5 au collège permet aux élèves de prendre conscience de ce principe en le voyant dans un autre contexte. »",
        },
        {
          type: "ctaBox",
          text: "Cours bien en tête ? Passez à la méthode →",
          buttonLabel: "Voir la méthode pas-à-pas",
          targetTab: "methode",
        },
      ],
    },
    {
      id: "methode",
      label: "Méthode",
      icon: "",
      blocks: [
        {
          type: "callout",
          variant: "success",
          icon: "",
          title: "Si cette notion vous a toujours semblé abstraite, vous êtes au bon endroit",
          text: "Chaque méthode ci-dessous part de ce que vous faites déjà sans y penser avec les nombres décimaux : on le rend visible, puis on l'applique à d'autres bases. **Trois types de questions** peuvent tomber au concours, on les traite dans l'ordre, et chacune se termine par une vérification rapide pour avancer en confiance.",
        },
        {
          type: "rappelExpress",
          title: "Rappel express : deux notions que vous utiliserez dans les méthodes ci-dessous",
          blocks: [
            {
              type: "paragraph",
              text: "**Une puissance, c'est quoi ?**\nC'est une multiplication répétée. 2³ signifie simplement « 2 multiplié 3 fois par lui-même ».",
            },
            {
              type: "formulaBlock",
              lines: [
                "2⁰ = 1 (tout nombre à la puissance 0 vaut 1, convention à retenir)",
                "2¹ = 2",
                "2² = 2 × 2 = 4",
                "2³ = 2 × 2 × 2 = 8",
                "2⁴ = 2 × 2 × 2 × 2 = 16",
                "2⁵ = 32 · 2⁶ = 64 · 2⁷ = 128",
              ],
            },
            {
              type: "paragraph",
              text: "**La division avec reste, c'est quoi ?**\nQuand on divise 13 par 2, on ne tombe pas juste. On dit : 13 = 2 × 6 + 1. Le 6 c'est le quotient. Le 1 c'est le reste.",
            },
            {
              type: "formulaBlock",
              lines: [
                "13 ÷ 2 → quotient = 6, reste = 1 (car 2×6 = 12, et 13−12 = 1)",
                "6 ÷ 2 → quotient = 3, reste = 0 (car 2×3 = 6, et 6−6 = 0)",
                "3 ÷ 2 → quotient = 1, reste = 1 (car 2×1 = 2, et 3−2 = 1)",
              ],
            },
            {
              type: "callout",
              variant: "warning",
              text: "⚠️ Le reste est toujours strictement inférieur au diviseur. Si vous divisez par 2, le reste ne peut être que 0 ou 1. Si vous divisez par 8, le reste va de 0 à 7.",
            },
          ],
        },
        {
          type: "methodeGroup",
          number: "①",
          title: "Lire un nombre en base b : le convertir en décimal",
          intro:
            "**Question typique :** « Convertir 1101₂ en base 10. »\n**Bonne nouvelle :** vous savez déjà faire ça, vous le faites en base 10 sans y penser. On va d'abord rendre visible ce que vous faites mentalement avec 345, puis appliquer exactement la même logique à 1101₂.",
          preBlocks: [
            {
              type: "highlightBox",
              variant: "neutral",
              title: "Ce que vous faites déjà en base 10 avec 345 : sans le formaliser",
              blocks: [
                {
                  type: "cardGrid",
                  columns: 2,
                  variant: "neutral",
                  cards: [
                    {
                      title: "Dans votre tête",
                      lines: [
                        "3 → \"trois centaines\" = 300",
                        "4 → \"quatre dizaines\" = 40",
                        "5 → \"cinq unités\" = 5",
                        "**total = 345**",
                      ],
                    },
                    {
                      title: "Ce que ça signifie vraiment",
                      lines: [
                        "3 × 10² = 3 × 100 = 300",
                        "4 × 10¹ = 4 × 10 = 40",
                        "5 × 10⁰ = 5 × 1 = 5",
                        "**total = 345**",
                      ],
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "**La règle :** chaque chiffre est multiplié par **10 élevé à sa position** (0 à droite, 1 ensuite, 2 ensuite…). On additionne. C'est tout.\nEn base 2, on fait exactement la même chose, mais on multiplie par **2 élevé à sa position** au lieu de 10.",
                },
              ],
            },
          ],
          steps: [
            {
              number: "1",
              text: "**Numéroter les positions de droite à gauche en commençant par 0.**",
              example: {
                lines: [
                  "  Nombre :    1      1      0      1",
                  "       ↑      ↑      ↑      ↑",
                  "Position : 3      2      1      0    ← toujours 0 à droite",
                ],
              },
            },
            {
              number: "2",
              text: "**Même calcul qu'avec 345, mais la base est 2 au lieu de 10.**",
              example: {
                lines: [
                  "  pos. 3 →  1 × 2³  =  1 × 8   =    8",
                  "  pos. 2 →  1 × 2²  =  1 × 4   =    4",
                  "  pos. 1 →  0 × 2¹  =  0 × 2   =    0",
                  "  pos. 0 →  1 × 2⁰  =  1 × 1   =    1",
                  "            ───────────────────────────",
                ],
              },
              exampleNote: "Comme pour 345 : chaque chiffre × base^position. Ici la base est 2, c'est tout ce qui change.",
            },
            {
              number: "3",
              text: "**Additionner, comme pour 300+40+5, on additionne les valeurs.**",
              example: {
                lines: ["  8 + 4 + 0 + 1  =  **13**", "", "  ✓  1101₂  =  13  en décimal"],
              },
            },
            {
              number: "💡",
              text: "**Mémorisez les puissances de 2, elles remplacent les \"centaines, dizaines, unités\" de la base 10.**",
              example: {
                lines: [
                  "  2⁰ =   1    (comme 10⁰ = 1    → les \"unités\")",
                  "  2¹ =   2    (comme 10¹ = 10   → les \"deuxaines\")",
                  "  2² =   4    (comme 10² = 100  → les \"quatraines\")",
                  "  2³ =   8",
                  "  2⁴ =  16",
                  "  2⁵ =  32",
                  "  2⁶ =  64",
                  "  2⁷ = 128",
                ],
              },
              exampleNote:
                "En base 10 : unités (10⁰=1), dizaines (10¹=10), centaines (10²=100)… En base 2 : 1, 2, 4, 8, 16, 32… C'est le même principe, avec des paliers différents.",
              warn: "⚠️ Un chiffre ne peut jamais être ≥ à la base. En base 2 : seulement 0 et 1. En base 8 : seulement 0 à 7. Si vous voyez un « 2 » dans un nombre écrit en base 2 → il y a une erreur quelque part.",
            },
          ],
        },
        {
          type: "exerciceCard",
          variant: "standard",
          title: "Checkpoint : à vous de jouer",
          badge: "30 secondes",
          question: "Convertir 110₂ en base 10, en détaillant le calcul comme ci-dessus.",
          correction: [
            { type: "line", text: "110₂ = 1×2² + 1×2¹ + 0×2⁰ = 4 + 2 + 0 = **6**" },
            {
              type: "note",
              text: "Trouvé du premier coup ? Vous maîtrisez cette méthode, passez à la suite. Sinon, relisez l'étape 2 ci-dessus avant de continuer.",
            },
          ],
        },
        {
          type: "methodeGroup",
          number: "②",
          title: "Convertir un nombre décimal vers une autre base",
          intro:
            "**Question typique :** « Convertir 13 en base 2. »\n**Idée de base :** on va diviser le nombre par la base, encore et encore. Les restes qu'on collecte en chemin forment le résultat, mais dans le sens inverse de lecture.",
          steps: [
            {
              number: "1",
              text: "**Diviser le nombre par la base. Écrire le quotient et le reste.**\nIci la base est 2. On pose : 13 = 2 × ? + ?",
              example: {
                lines: [
                  "  13 ÷ 2  →  quotient = 6,   reste = 1",
                  "                ↑                    ↑",
                  "         (on reprend ça)     (on garde ça)",
                ],
              },
              exampleNote: "Vérification : 2 × 6 = 12, et 12 + 1 = 13 ✓, ce reste (1) sera l'un des chiffres du résultat.",
            },
            {
              number: "2",
              text: "**Recommencer avec le quotient. S'arrêter quand le quotient = 0.**",
              example: {
                lines: [
                  "  13 ÷ 2  =  6   reste  **1**   ← 1er reste (position 0)",
                  "   6 ÷ 2  =  3   reste  **0**   ← 2e  reste (position 1)",
                  "   3 ÷ 2  =  1   reste  **1**   ← 3e  reste (position 2)",
                  "   1 ÷ 2  =  0   reste  **1**   ← 4e  reste (position 3)",
                  "                   ↑",
                  "              STOP, quotient = 0",
                ],
              },
            },
            {
              number: "3",
              text: "**Lire les restes de BAS en HAUT, le dernier reste est le chiffre le plus à gauche.**",
              example: {
                lines: [
                  "  Restes obtenus (de haut en bas) :   1   0   1   1",
                  "  On lit de BAS en HAUT              ↑               ↑",
                  "                                    dernier         premier",
                  "                                  (va à gauche)  (va à droite)",
                  "",
                  "  Résultat :  **1 1 0 1 ₂**",
                ],
              },
              extra: [
                {
                  type: "callout",
                  variant: "warning",
                  title: "Pourquoi de bas en haut ?",
                  text: "Le 1er reste correspond à la position 0 (les unités), il va donc le plus à droite. Le dernier reste correspond à la position la plus haute, il va le plus à gauche. D'où la lecture inversée.",
                },
              ],
            },
            {
              number: "4",
              text: "**Vérifier systématiquement en repassant dans l'autre sens.**",
              example: {
                lines: [
                  "  1101₂  =  1×8 + 1×4 + 0×2 + 1×1",
                  "        =  8   +  4  +  0  +  1",
                  "        =  **13  ✓**   ← on retrouve bien le nombre de départ",
                ],
              },
              warn: "⚠️ Ne jamais sauter la vérification, 10 secondes max. Si le résultat ne correspond pas, vous avez lu les restes dans le mauvais sens. C'est l'erreur numéro 1.",
            },
          ],
        },
        {
          type: "exerciceCard",
          variant: "standard",
          title: "Checkpoint : à vous de jouer",
          badge: "30 secondes",
          question: "Convertir 9 en base 2 par divisions successives.",
          correction: [
            { type: "line", text: "9÷2 = 4 reste **1** · 4÷2 = 2 reste **0** · 2÷2 = 1 reste **0** · 1÷2 = 0 reste **1**" },
            { type: "line", text: "Restes lus de BAS en HAUT → **1001₂**" },
            { type: "note", text: "Vérification : 1001₂ = 8+0+0+1 = 9 ✓. À l'aise ? Direction l'Application." },
          ],
        },
        {
          type: "methodeGroup",
          number: "③",
          title: "Écrire un nombre en toutes lettres : ou le lire",
          intro:
            "**Question typique :** « Écrire 4 507 en toutes lettres » ou « Quel nombre est quatre-vingt-douze ? »\nLa procédure est simple, c'est l'orthographe qui piège. Les 3 règles ci-dessous suffisent.",
          steps: [
            {
              number: "1",
              text: "**Écrire rang par rang de gauche à droite, ignorer les zéros.**",
              example: {
                lines: ["  4 507  →  quatre mille  cinq cent  sept", "               (0 dizaines → on l'ignore)"],
              },
            },
            {
              number: "2",
              text: "**Les 3 règles d'accord à mémoriser, tout le reste s'en déduit.**",
              extra: [
                {
                  type: "table",
                  headers: ["Règle", "Détail"],
                  rows: [
                    ["CENT", "-s si multiplié ET rien après → *deux **cents*** ✓ · *deux **cent** six* ✓"],
                    ["VINGT", "-s uniquement dans *quatre-**vingts*** seul → *quatre-vingt-deux* ✗ de -s"],
                    ["MILLE", "toujours invariable → *deux **mille*** ✓ · jamais *deux ~~milles~~*"],
                  ],
                },
                {
                  type: "paragraph",
                  text: "*Pour l'inverse : « quatre-vingt-douze » = 4×20+12 = 92. « Soixante-dix » = 60+10 = 70. « Quatre-vingt-dix » = 4×20+10 = 90.*",
                },
              ],
            },
          ],
        },
        {
          type: "exerciceCard",
          variant: "standard",
          title: "Checkpoint : à vous de jouer",
          badge: "30 secondes",
          question: "Écrire 91 en toutes lettres.",
          correction: [
            { type: "line", text: "91 = 4×20 + 11 → **quatre-vingt-onze**" },
            { type: "note", text: "Pas de -s à « vingt » : il est suivi d'un autre nombre (« onze »)." },
          ],
        },
        {
          type: "ctaBox",
          text: "Méthode bien en tête ? Testez-vous →",
          buttonLabel: "Lancer le Quiz éclair",
          targetTab: "quiz",
        },
      ],
    },
      ],
    },
    {
      id: "pratiquer",
      label: "Pratiquer",
      icon: "",
      tabs: [
    {
      id: "quiz",
      label: "Quiz éclair",
      icon: "",
      blocks: [
        {
          type: "callout",
          variant: "info",
          icon: "",
          title: "Avant de passer aux exercices",
          text: "11 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Chaque réponse alimente votre suivi de maîtrise, retrouvez le détail objectif par objectif dans l'onglet **Auto-évaluation**, avec la date de votre prochaine révision.",
        },
        {
          type: "quizBlock",
          questions: [
            {
              objectifId: "e4",
              question: "Que signifie l'écriture **1101₂** ?",
              options: [
                "Le nombre mille cent un",
                "Le nombre 1101 écrit en base 2, qui vaut 13 en décimal",
                "1101 multiplié par 2",
                "Un nombre négatif",
              ],
              correctIndex: 1,
              explanation:
                "L'indice ₂ indique la **base**, pas une opération à effectuer. Sans repérer cet indice, on lirait à tort « mille cent un », c'est le piège n°1 de cette notion.",
            },
            {
              objectifId: "e1",
              question: "Que vaut **1011₂** en base 10 ?",
              options: ["9", "11", "13", "1011"],
              correctIndex: 1,
              explanation: "1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = **11**.",
            },
            {
              objectifId: "e1",
              question: "Que vaut **2A₁₆** en base 10 ?",
              options: ["20", "32", "42", "2A"],
              correctIndex: 2,
              explanation:
                "2A₁₆ = 2×16¹ + A×16⁰ = 2×16 + 10 = 32 + 10 = **42** (A vaut 10 en hexadécimal).",
            },
            {
              objectifId: "e2",
              question:
                "Pour convertir un nombre décimal en base 2 par divisions successives, dans quel ordre faut-il lire les restes obtenus ?",
              options: [
                "De haut en bas, dans l'ordre où on les calcule",
                "De bas en haut, le dernier reste calculé devient le chiffre le plus à gauche",
                "Seul le dernier reste compte, les autres sont ignorés",
                "Dans n'importe quel ordre, le résultat est le même",
              ],
              correctIndex: 1,
              explanation:
                "C'est l'erreur n°1 en conversion. Le 1er reste correspond à la position 0 (les unités, donc le chiffre le plus à droite) ; le dernier reste correspond à la position la plus haute (le chiffre le plus à gauche).",
            },
            {
              objectifId: "e2",
              question:
                "13 ÷ 2 = 6 reste **1** · 6 ÷ 2 = 3 reste **0** · 3 ÷ 2 = 1 reste **1** · 1 ÷ 2 = 0 reste **1**. Quelle est l'écriture binaire de 13 ?",
              options: ["1011₂", "1101₂", "0111₂", "1110₂"],
              correctIndex: 1,
              explanation: "Restes lus de bas en haut : 1, 1, 0, 1 → **1101₂**. Vérification : 8+4+0+1 = 13 ✓",
            },
            {
              objectifId: "e3",
              question: "En hexadécimal, quel chiffre correspond à la valeur **15** ?",
              options: ["E", "F", "15", "G"],
              correctIndex: 1,
              explanation:
                "Les chiffres hexadécimaux vont de 0 à 9 puis A à F : A=10, B=11, C=12, D=13, E=14, **F=15**.",
            },
            {
              objectifId: "e4",
              question:
                "Qu'est-ce qui caractérise un système de numération **positionnel** (comme le système décimal), par opposition à un système **additif** (comme le système romain) ?",
              options: [
                "La valeur d'un symbole est toujours la même, on additionne les symboles",
                "La valeur d'un chiffre dépend de sa position dans l'écriture du nombre",
                "Seuls les nombres pairs peuvent être écrits",
                "Le zéro n'y a aucune utilité",
              ],
              correctIndex: 1,
              explanation:
                "Dans un système positionnel, un même chiffre vaut des quantités différentes selon sa position (le 3 dans 305 vaut 300, dans 53 vaut 3). Dans un système additif comme le romain, VIII = 5+1+1+1 = 8 : chaque symbole garde toujours la même valeur.",
            },
            {
              objectifId: "e5",
              question: "Comment écrit-on **92** en toutes lettres ?",
              options: ["quatre-vingt-douze", "quatre-vingts-douze", "quatre-vingt-deuze", "nonante-deux"],
              correctIndex: 0,
              explanation:
                "92 = 4×20+12 → **quatre-vingt-douze**. Pas de -s à « vingt » : il est suivi d'un autre nombre (« douze »).",
            },
            {
              objectifId: "e5",
              question: "Lequel de ces nombres prend un **-s** à « cent » ou « vingt » ?",
              options: ["205 → deux cent cinq", "81 → quatre-vingt-un", "200 → deux cents", "92 → quatre-vingt-douze"],
              correctIndex: 2,
              explanation:
                "« Cent » et « vingt » prennent un -s uniquement quand ils sont multipliés ET qu'aucun autre nombre ne suit : **200 = deux cents** ✓. Dans les trois autres cas, un chiffre suit → pas de -s.",
            },
            {
              objectifId: "e7",
              question: "Dans le nombre **4 062**, quel est le rôle du chiffre 0 ?",
              options: [
                "Il ne sert à rien, on pourrait l'écrire 462",
                "Il indique l'absence de centaines et permet au 4 de garder sa valeur de milliers",
                "Il signifie que le nombre est négatif",
                "Il indique une virgule décimale",
              ],
              correctIndex: 1,
              explanation:
                "C'est le **zéro occupant** : sans lui, 462 ≠ 4062. Il occupe la position des centaines et décale le 4 à la position des milliers, un point d'appui essentiel pour comprendre les difficultés des élèves de cycle 2.",
            },
            {
              objectifId: "e6",
              question:
                "Un élève de CE2 écrit « 4620 » pour « quatre mille soixante-deux ». Quel obstacle de numération cela révèle-t-il le plus probablement ?",
              options: [
                "Il ne sait pas compter jusqu'à 4000",
                "Il confond addition et soustraction",
                "Il transpose directement « soixante-deux » en 62 à la suite de 4, sans tenir compte du rang des centaines",
                "Il a oublié comment écrire le chiffre 4",
              ],
              correctIndex: 2,
              explanation:
                "Obstacle classique de la numération orale française : l'élève entend « …mille soixante-deux » et écrit « 4 » puis « 62 » à la suite, sans réaliser qu'il manque le rang des centaines. La bonne réponse est **4062**.",
            },
          ],
        },
        {
          type: "ctaBox",
          text: "Quiz terminé ? Direction l'Application pour des exercices plus complets →",
          buttonLabel: "Voir l'Application",
          targetTab: "appli",
        },
      ],
    },
    {
      id: "appli",
      label: "Application",
      icon: "",
      blocks: [
        {
          type: "callout",
          variant: "success",
          text: "Progressez niveau par niveau. Chaque niveau ajoute une difficulté. Corrigez avant de passer au suivant.",
        },
        {
          type: "niveauBanner",
          level: "echauffement",
          stars: "",
          label: "Échauffement : Je vérifie que j'ai compris le Cours",
          sub: "Questions directes, une seule chose à la fois",
        },
        {
          type: "exerciceCard",
          variant: "standard",
          level: "echauffement",
          title: "Question 1 : L'indice de base",
          question:
            "Pour chaque nombre, dire dans quelle base il est écrit et ce que ça signifie :\na) 101₂   b) 1F₁₆   c) 347   d) 25₈",
          correction: [
            { type: "line", label: "a)", text: "**101₂** → indice 2 → base 2 (binaire). Ce nombre est fait uniquement de 0 et de 1." },
            { type: "line", label: "b)", text: "**1F₁₆** → indice 16 → base 16 (hexadécimal). F est le chiffre qui vaut 15." },
            { type: "line", label: "c)", text: "**347** → pas d'indice → base 10 par défaut. C'est trois cent quarante-sept." },
            { type: "line", label: "d)", text: "**25₈** → indice 8 → base 8 (octal). Les chiffres utilisés vont de 0 à 7 seulement." },
          ],
        },
        {
          type: "exerciceCard",
          variant: "standard",
          level: "echauffement",
          title: "Question 2 : Valeur positionnelle en base 10",
          question: "Dans le nombre **4 253**, quelle est la valeur du chiffre…\na) 4   b) 2   c) 5   d) 3",
          correction: [
            { type: "line", label: "a)", text: "Le **4** est en position 3 → 4 × 10³ = 4 × 1000 = **4 000**" },
            { type: "line", label: "b)", text: "Le **2** est en position 2 → 2 × 10² = 2 × 100 = **200**" },
            { type: "line", label: "c)", text: "Le **5** est en position 1 → 5 × 10¹ = 5 × 10 = **50**" },
            { type: "line", label: "d)", text: "Le **3** est en position 0 → 3 × 10⁰ = 3 × 1 = **3**" },
            { type: "note", text: "Vérification : 4000 + 200 + 50 + 3 = 4 253 ✓, c'est exactement ce qu'on va faire en base 2." },
          ],
        },
        {
          type: "exerciceCard",
          variant: "standard",
          level: "echauffement",
          title: "Question 3 : Premiers pas en binaire",
          question: "Convertir en base 10 ces nombres binaires très simples :\na) 1₂   b) 10₂   c) 100₂   d) 11₂   e) 101₂",
          correction: [
            { type: "line", label: "a)", text: "1₂ = 1×2⁰ = 1×1 = **1**" },
            { type: "line", label: "b)", text: "10₂ = 1×2¹ + 0×2⁰ = 2+0 = **2**" },
            { type: "line", label: "c)", text: "100₂ = 1×2² + 0×2¹ + 0×2⁰ = 4+0+0 = **4**" },
            { type: "line", label: "d)", text: "11₂ = 1×2¹ + 1×2⁰ = 2+1 = **3**" },
            { type: "line", label: "e)", text: "101₂ = 1×2² + 0×2¹ + 1×2⁰ = 4+0+1 = **5**" },
            {
              type: "note",
              text: "**Vous voyez le schéma ?** 1₂=1, 10₂=2, 100₂=4, en base 2, chaque fois qu'on ajoute un 0 à droite, on double la valeur. Comme en base 10 ajouter un 0 multiplie par 10.",
            },
          ],
        },
        {
          type: "exerciceCard",
          variant: "standard",
          level: "echauffement",
          title: "Question 4 : Écriture en lettres",
          objectifTag: "Écriture en lettres",
          question: "Écrire en lettres, en faisant attention aux accords :\na) 80   b) 81   c) 200   d) 205   e) 2 000",
          correction: [
            { type: "line", label: "a)", text: "80 → **quatre-vingts** (avec -s : quatre × vingt, rien après)" },
            { type: "line", label: "b)", text: "81 → **quatre-vingt-un** (sans -s : suivi de \"un\")" },
            { type: "line", label: "c)", text: "200 → **deux cents** (avec -s : 2 × cent, rien après)" },
            { type: "line", label: "d)", text: "205 → **deux cent cinq** (sans -s : suivi de \"cinq\")" },
            { type: "line", label: "e)", text: "2 000 → **deux mille** (mille toujours invariable)" },
          ],
        },
        {
          type: "niveauBanner",
          level: "n1",
          stars: "★☆☆",
          label: "Niveau 1 : Calcul direct",
          sub: "Application immédiate du Cours",
        },
        {
          type: "exerciceCard",
          variant: "standard",
          level: "n1",
          title: "Exercice 1 : Conversion base 2 → décimal",
          objectifTag: "Conversion base b → décimal",
          question: "Convertir en base 10, en explicitant les calculs :\na) 1010₂   b) 11111₂   c) 100001₂",
          correction: [
            { type: "line", label: "a)", text: "1010₂ = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = **10**" },
            { type: "line", label: "b)", text: "11111₂ = 16+8+4+2+1 = **31**" },
            { type: "line", label: "c)", text: "100001₂ = 32+1 = **33**" },
            {
              type: "note",
              text: "**⚠️ c)** Les quatre zéros intermédiaires contribuent 0 à la somme, à noter explicitement pour ne pas les oublier.",
            },
          ],
        },
        {
          type: "exerciceCard",
          variant: "standard",
          level: "n1",
          title: "Exercice 2 : Conversion décimal → base 2",
          objectifTag: "Conversion décimal → base b",
          question: "Convertir en binaire par divisions successives :\na) 19   b) 42   c) 100",
          correction: [
            { type: "line", label: "a)", text: "19÷2=9 r1 · 9÷2=4 r1 · 4÷2=2 r0 · 2÷2=1 r0 · 1÷2=0 r1 → lire restes de bas en haut : **10011₂**" },
            { type: "line", label: "b)", text: "42÷2=21 r0 · 21÷2=10 r1 · 10÷2=5 r0 · 5÷2=2 r1 · 2÷2=1 r0 · 1÷2=0 r1 → **101010₂**" },
            { type: "line", label: "c)", text: "100 = 64+32+4 = 2⁶+2⁵+2² → positions 6,5,2 → **1100100₂**" },
          ],
        },
        {
          type: "exerciceCard",
          variant: "standard",
          level: "n1",
          title: "Exercice 3 : Hexadécimal ↔ décimal",
          objectifTag: "Chiffres hexadécimaux A–F",
          question: "a) Convertir 1F₁₆ en décimal.   b) Convertir 255 en hexadécimal.",
          correction: [
            { type: "line", label: "a)", text: "1F₁₆ = 1×16¹ + F×16⁰ = 16 + 15 = **31** (F = 15 en hexa)" },
            { type: "line", label: "b)", text: "255÷16=15 r15 · 15÷16=0 r15 → restes = 15,15 = F,F → **FF₁₆**" },
            {
              type: "note",
              text: "**Remarque :** FF₁₆ = 255₁₀ est la valeur maximale d'un octet (8 bits). Utile pour les questions sur le codage numérique.",
            },
          ],
        },
        {
          type: "niveauBanner",
          level: "n2",
          stars: "★★☆",
          label: "Niveau 2 : Mise en contexte",
          sub: "Problèmes concrets, plusieurs étapes",
        },
        {
          type: "exerciceCard",
          variant: "standard",
          level: "n2",
          title: "Exercice 4 : Numération et valeur positionnelle",
          objectifTag: "Analyser une erreur d'élève",
          enonce:
            "En CE2, une enseignante demande à ses élèves d'écrire « quatre mille soixante-deux » en chiffres. Trois élèves rendent : Léa → 4062 · Paul → 4620 · Sami → 40062.",
          question:
            "a) Quelle réponse est correcte ? Justifier.\nb) Identifier l'obstacle de numération spécifique de chacun des deux élèves qui se trompent.\nc) Que représente le zéro dans la réponse correcte ?",
          correction: [
            { type: "line", label: "a)", text: "**Léa (4062)** est correcte : 4 milliers + 0 centaines + 6 dizaines + 2 unités." },
            {
              type: "line",
              label: "b)",
              text: "**Paul (4620)** confond « soixante-deux » avec 620, obstacle de la numération orale française (60+2 est entendu comme « six-deux »). **Sami (40062)** ajoute un zéro superflu pour les centaines ET les dizaines, obstacle du zéro intercalaire : il écrit 0 à toutes les positions qu'il « n'entend pas ».",
            },
            {
              type: "line",
              label: "c)",
              text: "Le zéro dans 4**0**62 est un **zéro occupant** (ou chiffre significatif de position) : il indique l'absence de centaines et maintient la valeur positionnelle des autres chiffres. Sans lui, 462 ≠ 4062.",
            },
            {
              type: "note",
              text: "**Angle CRPE :** distinguer les deux obstacles (numération orale vs zéro intercalaire) montre une connaissance didactique qui valorise la copie.",
            },
          ],
        },
        {
          type: "exerciceCard",
          variant: "standard",
          level: "n2",
          title: "Exercice 5 : Notation scientifique et préfixes",
          question:
            "a) Écrire 0,000 047 en notation scientifique.\nb) Une clé USB stocke 8 Go. Exprimer cette capacité en octets puis en bits.\nc) La distance Terre-Lune est de 3,84×10⁵ km. L'exprimer en mètres en notation scientifique.",
          correction: [
            { type: "line", label: "a)", text: "0,000047 = 4,7 × 10⁻⁵" },
            {
              type: "line",
              label: "b)",
              text: "8 Go = 8 × 10⁹ octets = 8 × 10⁹ × 8 bits = 6,4 × 10¹⁰ bits. (Attention : 1 Go = 10⁹ octets en SI ; 1 octet = 8 bits)",
            },
            { type: "line", label: "c)", text: "3,84×10⁵ km = 3,84×10⁵ × 10³ m = 3,84×10⁸ m" },
          ],
        },
        {
          type: "niveauBanner",
          level: "n3",
          stars: "★★★",
          label: "Niveau 3 : Raisonnement ouvert",
          sub: "Justification · démonstration · question ouverte",
        },
        {
          type: "exerciceCard",
          variant: "standard",
          level: "n3",
          title: "Exercice 6 : Bases et raisonnement",
          question:
            "a) Montrer que tout nombre entier naturel peut s'écrire sous la forme d'une somme de puissances distinctes de 2 (écriture binaire).\nb) En base b, combien de nombres distincts peut-on écrire avec exactement n chiffres ?\nc) Quel est le plus grand nombre entier qu'on peut écrire avec 8 chiffres en base 2 ? Qu'est-ce que cela représente en informatique ?",
          correction: [
            {
              type: "line",
              label: "a)",
              text: "Par l'algorithme des divisions successives par 2, tout entier naturel N ≥ 0 se décompose en restes 0 ou 1 des divisions par 2, ce qui donne une écriture unique comme somme de puissances de 2 (avec chaque puissance présente 0 ou 1 fois). Unicité : résulte de l'unicité de la division euclidienne.",
            },
            {
              type: "line",
              label: "b)",
              text: "Avec n chiffres en base b, le premier chiffre (à gauche) peut prendre b−1 valeurs (1 à b−1), les n−1 suivants b valeurs chacun → (b−1)×b^(n−1) nombres à exactement n chiffres. (Ou b^n − b^(n-1) en comptant)",
            },
            {
              type: "line",
              label: "c)",
              text: "Max à 8 chiffres binaires = 11111111₂ = 2⁸−1 = **255**. Un groupe de 8 bits s'appelle un **octet** (byte). Il peut coder 256 valeurs (0 à 255). C'est la base du codage des couleurs RVB (255 pour chaque canal rouge, vert, bleu).",
            },
          ],
        },
      ],
    },
    {
      id: "crpe",
      label: "Type CRPE",
      icon: "",
      blocks: [
        {
          type: "callout",
          variant: "success",
          text: "Ces exercices reproduisent exactement le format des sujets officiels. Les sujets issus d'annales réelles sont identifiés par le badge ANNALE.",
        },
        {
          type: "exerciceCard",
          variant: "crpe",
          title: "Type CRPE · Exercice 7",
          enonce:
            "Dans une classe de CM2, un enseignant travaille sur la numération dans différentes bases. Il propose l'activité suivante : « En base 5, on utilise les chiffres 0, 1, 2, 3, 4. Écrire les nombres de 0 à 12 en base 5, puis calculer 23₅ + 14₅. »",
          question:
            "1. Quels sont les nombres de 0 à 12 écrits en base 5 ?\n2. Calculer 23₅ + 14₅ en restant en base 5, puis vérifier en repassant en base 10.\n3. Quel est l'intérêt pédagogique pour des élèves de CM2 de travailler dans une autre base ?",
          correction: [
            {
              type: "table",
              headers: ["Décimal", "Base 5", "Décimal", "Base 5"],
              rows: [
                ["0", "0", "7", "12₅"],
                ["1", "1", "8", "13₅"],
                ["2", "2", "9", "14₅"],
                ["3", "3", "10", "20₅"],
                ["4", "4", "11", "21₅"],
                ["5", "10₅", "12", "22₅"],
                ["6", "11₅", "", ""],
              ],
            },
            {
              type: "paragraph",
              text: "**2.** 23₅ + 14₅ : unités : 3+4=7=1×5+2 → écrire 2, retenir 1 ; dizaines : 2+1+1(retenu)=4 → résultat : **42₅**. Vérification : 23₅=13 ; 14₅=9 ; 13+9=22 ; 42₅=4×5+2=22 ✓",
            },
            {
              type: "paragraph",
              text: "**3.** Travailler en base 5 permet aux élèves de *décontextualiser* la numération décimale, ils prennent conscience que le principe positionnel est une structure, pas une évidence. Ils comprennent que « 10 » signifie simplement « une unité d'ordre supérieur », quelle que soit la base. Cela renforce la compréhension des retenues dans les algorithmes opératoires (Éduscol, guide numération).",
            },
          ],
        },
        {
          type: "exerciceCard",
          variant: "crpe",
          title: "Type CRPE · Exercice 8",
          badge: "Type concours",
          enonce:
            "Parties A et B indépendantes.\n**Partie A :** Un nombre est écrit 1010102 en base 2.\n**Partie B :** Convertir 255 en base 2 et en base 16.",
          question:
            "Partie A : a) Convertir 101010₂ en base 10.   b) Convertir 101010₂ en base 16.\nPartie B : Convertir 255 en base 2 puis en base 16, en explicitant les calculs.",
          correction: [
            { type: "paragraph", text: "**A-a)** 101010₂ = 32+8+2 = **42**" },
            {
              type: "paragraph",
              text: "**A-b)** Regrouper les bits par 4 de droite à gauche : 10 | 1010. Convertir chaque groupe : 10₂=2, 1010₂=10=A₁₆ → **2A₁₆**. Vérification : 2A₁₆ = 2×16+10 = 42 ✓",
            },
            {
              type: "paragraph",
              text: "**B-binaire)** 255 = 128+64+32+16+8+4+2+1 = 2⁷+…+2⁰ → **11111111₂** (8 uns = 1 octet au maximum)",
            },
            {
              type: "paragraph",
              text: "**B-hexa)** 11111111₂ = 1111 | 1111 = F₁₆ | F₁₆ = **FF₁₆**. Ou : 255÷16=15 r15 → restes F,F → FF₁₆",
            },
            {
              type: "note",
              text: "**💡 Astuce :** la conversion binaire→hexa via regroupements de 4 bits est plus rapide que les divisions successives pour les grands nombres.",
            },
          ],
        },
      ],
    },
    {
      id: "cote-prof",
      label: "Côté prof",
      icon: "",
      blocks: [
        {
          type: "callout",
          variant: "warning",
          text: "Ces exercices reproduisent des **erreurs réelles de candidats**, analysées à partir des rapports de jury et des productions types. Identifier une erreur et la corriger rigoureusement est une compétence directement valorisée au CRPE.",
        },
        {
          type: "exerciceCard",
          variant: "err-type",
          title: "Erreur type · Exercice 9",
          enonce: "**Copie d'un candidat :** Convertir 13 en base 2.\n*Réponse produite :*",
          enonceCode: [
            "13 ÷ 2 = 6 reste 1",
            "6 ÷ 2 = 3 reste 0",
            "3 ÷ 2 = 1 reste 1",
            "1 ÷ 2 = 0 reste 1",
            "Résultat : **1011₂**",
          ],
          question:
            "a) Cette réponse est-elle correcte ? Justifier.\nb) Si elle est fausse, identifier précisément l'erreur et donner la réponse attendue.\nc) Quelle vérification simple permettait d'éviter cette erreur ?",
          correction: [
            { type: "paragraph", text: "**Erreur : sens de lecture des restes inversé**" },
            {
              type: "checklist",
              items: [
                {
                  bad: true,
                  text: "Les calculs sont corrects mais les restes sont lus de *haut en bas* (1, 0, 1, 1) au lieu de *bas en haut* (1, 1, 0, 1).",
                },
                { text: "**Réponse correcte :** lire les restes de bas en haut → **1101₂**" },
                { text: "**Vérification :** 1101₂ = 8+4+0+1 = 13 ✓ / 1011₂ = 8+2+1 = 11 ≠ 13" },
                { text: "La vérification par passage inverse (base 2 → décimal) permet de détecter l'erreur immédiatement." },
              ],
            },
            {
              type: "note",
              text: "**⚠️ Erreur systématique :** c'est l'erreur n°1 sur la méthode des divisions successives. La règle « on lit de bas en haut » doit être un automatisme, le mnémo « fusée qui décolle » aide à la mémoriser.",
            },
          ],
        },
        {
          type: "exerciceCard",
          variant: "err-type",
          title: "Erreur type · Exercice 10",
          enonce:
            "**Copie d'un candidat :** Convertir 45 en binaire.\n*Réponse produite :* « 45 = 32+8+5 = 2⁵+2³+5 → **10111₂** »",
          question: "Identifier toutes les erreurs dans ce raisonnement et écrire la correction complète.",
          correction: [
            { type: "paragraph", text: "**Deux erreurs imbriquées**" },
            {
              type: "checklist",
              items: [
                {
                  bad: true,
                  text: "**Erreur 1 :** 32+8+5 ≠ 45 (32+8=40, pas 45). La décomposition est fausse, le candidat n'a pas terminé le travail.",
                },
                {
                  bad: true,
                  text: "**Erreur 2 :** même si la décomposition était correcte, « 5 » n'est pas une puissance de 2, on ne peut pas l'utiliser directement en binaire.",
                },
                { text: "**Bonne décomposition :** 45 = 32+8+4+1 = 2⁵+2³+2²+2⁰" },
                { text: "**Positions occupées :** 5, 3, 2, 0 → 1 aux positions 5,3,2,0 et 0 aux positions 4,1" },
                { text: "**Résultat :** **101101₂**" },
                { text: "**Vérification :** 32+8+4+1 = 45 ✓" },
              ],
            },
            {
              type: "note",
              text: "**💡 Méthode :** toujours décomposer en puissances de 2 EXACTES. Si un reste n'est pas une puissance de 2, continuer à le décomposer.",
            },
          ],
        },
        {
          type: "exerciceCard",
          variant: "err-type",
          title: "Erreur type · Exercice 11 : Analyse didactique",
          enonce:
            "Un élève de CE2 écrit : « quatre-vingt-douze = 4 0 0 9 2 » (il place chaque mot dans une case du tableau de numération). Il obtient ainsi un nombre à 5 chiffres.",
          question:
            "a) Identifier l'obstacle de numération manifesté par cet élève.\nb) Proposer une activité de remédiation adaptée au cycle 2.\nc) Comment ce type d'erreur illustre-t-il la difficulté de l'irrégularité de la numération orale française ?",
          correction: [
            {
              type: "line",
              label: "a)",
              text: "L'élève adopte une **stratégie syllabique** : il traite chaque mot ou segment du nom comme une unité indépendante. Il ne maîtrise pas encore que « quatre-vingt-douze » est la désignation orale d'un nombre à deux chiffres (92), pas la concaténation de quatre entités. C'est un obstacle de passage numération orale → numération écrite positionnelle.",
            },
            {
              type: "line",
              label: "b)",
              text: "Remédiation : travailler la correspondance nombre/désignation avec le matériel de numération (barres de dizaines + cubes unités). Faire manipuler 9 barres + 2 cubes, compter, nommer « quatre-vingt-douze », puis coder 9 et 2 dans le tableau D/U. L'action de groupage rend visible la structure positionnelle (Éduscol, guide numération cycle 2).",
            },
            {
              type: "line",
              label: "c)",
              text: "En français, « quatre-vingt-douze » = 4×20+12, une logique additive vigesimale (base 20), héritée du gaulois. Elle entre en conflit avec la logique décimale de position : un élève qui a compris « cinquante = 5 dizaines » ne peut pas généraliser directement à « quatre-vingt = 4 fois 20 ». C'est un obstacle documenté, absent dans d'autres langues (anglais : ninety-two = logique directe).",
            },
          ],
        },
      ],
    },
      ],
    },
    {
      id: "reviser",
      label: "Réviser",
      icon: "",
      tabs: [
    {
      id: "flash",
      label: "Flashcards",
      icon: "",
      blocks: [
        {
          type: "callout",
          variant: "info",
          text: "Essayez de répondre dans votre tête avant de révéler la réponse, puis évaluez-vous : les cartes « à revoir » repasseront en fin de série.",
        },
        {
          type: "flashcardDeck",
          cards: [
            {
              question: "Quelle est la différence entre un système de numération additif et un système positionnel ?",
              answer:
                "Dans un système **additif**, la valeur de chaque symbole est fixe, on additionne les valeurs (ex. romain : VII = 7). Dans un système **positionnel**, la valeur d'un chiffre dépend de sa position, le même chiffre vaut des quantités différentes selon sa place (ex. le 3 dans 305 vaut 300, dans 53 vaut 3).",
              astuce:
                "**Méthode :** donner un exemple concret de chaque type, et expliquer pourquoi le système positionnel est plus puissant pour le calcul.",
            },
            {
              question: "Pourquoi dit-on que le zéro est « l'invention la plus importante » de la numération ?",
              answer:
                "Le zéro remplit deux rôles fondamentaux dans la numération positionnelle : 1) il **occupe une position vide** (sans lui, 105 et 15 seraient indistinguables) ; 2) il permet les **calculs posés** (l'algorithme de la division euclidienne repose sur l'idée de « poser 0 »). Les systèmes additifs (romain) n'ont pas de zéro, c'est pourquoi le calcul y est difficile.",
            },
            {
              question: "Que représente FF₁₆ en décimal ? Quel lien avec l'informatique ?",
              answer:
                "FF₁₆ = 15×16 + 15 = 255. C'est la valeur maximale d'un **octet** (8 bits : 11111111₂). En informatique, chaque canal de couleur RVB est codé sur un octet (0 à 255). Une couleur = 3 octets = 24 bits → 16 millions de couleurs possibles.",
            },
            {
              question: "Quelle est la forme générale de la notation scientifique, et à quoi sert-elle ?",
              answer:
                "Un nombre **a × 10ⁿ** avec 1 ≤ a < 10 et n entier. Elle permet d'écrire très simplement les très grands ou très petits nombres, et de comparer facilement des grandeurs d'ordres de grandeur différents.\nEx : 47 000 = 4,7 × 10⁴ · 0,000 047 = 4,7 × 10⁻⁵.",
              astuce:
                "**Méthode :** déplacer la virgule jusqu'à obtenir un chiffre entre 1 et 9. Compter les rangs déplacés → c'est l'exposant. Gauche → exposant positif · Droite → exposant négatif.",
            },
            {
              question: "Pourquoi 1 m² ne fait-il pas 100 cm² ? (piège classique des conversions d'unités)",
              answer:
                "1 m = 100 cm, mais une aire est un produit de 2 longueurs : 1 m² = (100 cm)² = **10 000 cm²**. De même, 1 m³ = (100 cm)³ = **1 000 000 cm³**.",
              astuce:
                "**Règle :** pour les aires, on multiplie l'exposant de la conversion par 2 ; pour les volumes, par 3. C'est une erreur très fréquente, chez les candidats comme chez les élèves.",
            },
            {
              question: "Quelles sont les règles d'accord de « cent » et « vingt » ?",
              answer:
                "**Cent** prend un *s* quand il est multiplié et non suivi d'un autre nombre : *deux cents* ✓ / *deux cent six* ✗. **Vingt** prend un *s* seulement dans « quatre-vingts » : *quatre-vingts* ✓ / *quatre-vingt-deux* ✗. **Mille** est toujours invariable.",
              astuce:
                "Réforme 1990 (Académie française) : tirets généralisés autorisés → *quatre-vingt-deux*. Le jury accepte les deux graphies.",
            },
            {
              question: "Quel est l'enjeu pédagogique de travailler la numération en base autre que 10 à l'école primaire ?",
              answer:
                "Travailler en base 5 ou base 2 permet aux élèves de **décontextualiser** la numération : ils prennent conscience que le principe positionnel est une *structure* (la valeur dépend de la position), pas une propriété des nombres eux-mêmes. Cela renforce la compréhension des regroupements (10 unités = 1 dizaine) et la compréhension des algorithmes de calcul posé (Éduscol, guide « Systèmes de numération »).",
            },
          ],
        },
      ],
    },
    {
      id: "memo",
      label: "Mémo",
      icon: "",
      blocks: [
        {
          type: "callout",
          variant: "info",
          icon: "",
          title: "Toute la notion, en un coup d'œil",
          text: "Voici la carte mentale complète de cette fiche, un excellent outil pour réviser rapidement avant le jour J, une fois que vous avez travaillé chaque partie.",
        },
        {
          type: "mindmapLite",
          center: { title: "Numération", subtitle: "Systèmes de bases" },
          branches: [
            {
              title: "Types de systèmes",
              variant: "blue",
              lines: ["Additif (romain)", "Positionnel (décimal, binaire…)"],
            },
            {
              title: "4 bases au CRPE",
              variant: "blue",
              lines: ["Base 10 · Base 2 · Base 8 · Base 16", "A=10 B=11 C=12 D=13 E=14 F=15"],
            },
            {
              title: "Conversions",
              variant: "green",
              lines: [
                "Base b → décimal : Σ chiffre × bⁿ",
                "Décimal → base b : divisions successives",
                "⚠ Lire restes de bas en haut",
              ],
            },
            {
              title: "Écriture en lettres",
              variant: "green",
              lines: ["Deux cents / deux cent six", "Quatre-vingts / quatre-vingt-deux", "Mille (invariable)"],
            },
            {
              title: "Pièges classiques",
              variant: "yellow",
              lines: ["Zéros intercalaires oubliés", "Restes lus à l'envers", "Chiffre ≥ base → erreur !"],
            },
            {
              title: "Recul primaire",
              variant: "purple",
              dashed: true,
              lines: ["Cycle 1 : cardinal / ordinal", "Cycle 2 : valeur positionnelle · zéro"],
            },
          ],
        },
      ],
    },
    {
      id: "autoeval",
      label: "Auto-évaluation",
      icon: "",
      blocks: [
        {
          type: "autoEvalChecklist",
          items: OBJECTIFS,
        },
      ],
    },
      ],
    },
  ],
};
