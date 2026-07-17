import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_NUMERATION_SYSTEMES_DE_BASES } from "./exercices-numeration-systemes-de-bases";
import { COPIES_NUMERATION_SYSTEMES_DE_BASES } from "./copies-numeration-systemes-de-bases";

export const SAVOIR_FAIRE = [
  { id: "base-vers-decimal", label: "Convertir vers la base 10" },
  { id: "decimal-vers-base", label: "Convertir depuis la base 10" },
  { id: "hexadecimal", label: "Utiliser l'hexadécimal" },
  { id: "positionnel", label: "Lire les positions et les zéros" },
  { id: "ecriture-lettres", label: "Écrire les nombres en lettres" },
  { id: "notation-prefixes", label: "Utiliser notation scientifique et préfixes" },
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
  metaTitle: "Numération et systèmes de bases · Fiche de révision CRPE",
  metaDescription:
    "Fiche CRPE complète sur la numération : principe positionnel, conversions binaire/octal/hexadécimal, notation scientifique, préfixes du SI et règles d'écriture en lettres. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
  tabGroups: [
    {
      id: "apprendre",
      label: "Apprendre",
      icon: "",
      tabs: [
        {
          id: "comprendre",
          label: "Comprendre",
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
                  text: "**Méthode :** déplacer la virgule jusqu'à avoir un chiffre entre 1 et 9 devant elle. Compter les rangs déplacés → c'est l'exposant. Gauche → positif · Droite → négatif. Les puissances (dont les puissances de 10) sont approfondies dans la [fiche N°4](fiche:puissances-racines-reels).",
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
          buttonLabel: "Voir la méthode",
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
              number: "4",
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
          text: "Méthode bien en tête ? Entraînez-vous →",
          buttonLabel: "Aller à Appliquer",
          targetTab: "appliquer",
        },
      ],
        },
      ],
    },
    {
      id: "entrainer",
      label: "S'entraîner",
      icon: "",
      tabs: [
        {
          id: "appliquer",
          label: "Appliquer",
          icon: "",
          blocks: [
            {
              type: "exerciceBank",
              title: "Numération · Systèmes de bases",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_NUMERATION_SYSTEMES_DE_BASES,
            },
          ],
        },
        {
          id: "corriger",
          label: "Corriger des erreurs",
          icon: "",
          blocks: [
            {
              type: "corrigerCopies",
              title: "Numération · Systèmes de bases",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_NUMERATION_SYSTEMES_DE_BASES,
            },
          ],
        },
      ],
    },
    {
      id: "memo",
      label: "Mémo",
      icon: "",
      tabs: [
        {
          id: "memo",
          label: "Mémo",
          icon: "",
          blocks: [
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
      ],
    },
  ],
};
