# Charte Maitrizz — Design & identité visuelle

Référence pour garder une **cohérence visuelle** sur tout le site au fil de la refonte (branche `feat/design`). Les jetons sont centralisés dans `src/app/globals.css` (Tailwind v4, pas de `tailwind.config.js`).

---

## 0. Identité en une phrase

Un cahier d'écolier sérieux et chaleureux : **serif teal** + **surlignage terracotta**, sur un fond **quadrillage Seyès** discret.

## 1. Couleurs

| Rôle | Token Tailwind/daisyui | Valeur | Usage |
|---|---|---|---|
| Fond papier | `bg-surface` / `base-100` | `#fbf9f4` | fond général, crème chaude |
| Fond conteneur | `bg-surface-container` / `base-200` | `#f0eee9` | cartes, barres de progression (fond) |
| Bordures discrètes | `outline-variant` | `#dbc1b9` | `border-outline-variant/30` à `/40`, rarement plein |
| Primary (teal) | `text-primary` / `bg-primary` | `#0c434e` | titres, boutons principaux, texte de marque |
| Primary container | `primary-container` | `#2a5b66` | hover des boutons primary |
| Secondary / Accent (terracotta) | `text-secondary` / `bg-secondary` | `#c36648` | CTA principal, surlignage logo, accents, italique d'emphase |
| Texte courant | `text-on-surface` | `#1b1c19` | corps de texte |
| Texte atténué | `text-on-surface-variant` | `#40484a` | sous-titres, légendes, nav |
| Succès | `success` | `#3a6b50` | rare, états positifs |
| Erreur | `error` | `#c0392b` | rare, états d'erreur |

**Règles d'usage :**
- Le **teal** porte l'autorité (titres, structure, boutons par défaut).
- Le **terracotta** porte l'**emphase** : un seul accent fort par section (CTA principal, mot-clé en italique, surlignage du logo). Ne pas le diluer en l'utilisant partout.
- Pas de couleurs hors palette. Si un nouvel état est nécessaire, ajouter un token dans `globals.css`, pas une couleur en dur dans un composant.

## 2. Typographies

- **Source Serif 4** (`font-serif`, par défaut sur `body`/`h1`-`h6`) : titres et corps de texte. Porte l'identité « cahier ».
- **Work Sans** (`.font-ui`) : navigation, boutons, étiquettes, métadonnées — toujours en **majuscules + tracking large** (`uppercase tracking-widest` ou `tracking-[0.2em]`), souvent en `text-xs` ou `text-[10px]`/`text-[11px]`.
- Règle simple : si c'est **lu** (titre, paragraphe, citation) → serif. Si c'est **cliqué ou scanné** (lien, bouton, badge, légende de stat) → `.font-ui`.
- Emphase dans un titre : `italic text-secondary` sur le mot clé (jamais de gras + couleur + italique cumulés).

## 3. Fond et texture

- `.bg-seyes` : quadrillage Seyès clair (lignes teal à très faible opacité, grille 32px + interligne 8px) — fond par défaut des sections claires.
- `.bg-seyes-dark` : même grille en blanc translucide, pour les sections à fond teal (`bg-neutral`/`bg-primary`).
- `.glass-card` : carte translucide crème + flou, posée sur le quadrillage (`backdrop-filter: blur`).
- Ne pas superposer deux textures différentes dans une même section.

## 4. Boutons

| Type | Classes de référence | Usage |
|---|---|---|
| Primaire (marque) | `bg-primary text-on-primary px-6 py-2.5 rounded-xl font-ui font-bold text-xs uppercase tracking-widest hover:bg-primary-container active:scale-95` | nav, actions secondaires fréquentes |
| CTA fort (accent) | `bg-secondary text-white rounded-xl px-8 py-3.5 font-ui font-bold shadow-md shadow-secondary/20 hover:-translate-y-0.5 hover:shadow-lg active:scale-95` | un seul par section, l'action qu'on veut vraiment |
| Secondaire (outline) | `border border-primary/20 bg-white/60 text-primary rounded-xl px-8 py-3.5 font-ui font-bold hover:bg-white active:scale-95` | action alternative, moins prioritaire |

- Coins toujours arrondis (`rounded-xl`, `rounded-md` pour les petits badges).
- Micro-interaction systématique : `active:scale-95` au clic, `hover:-translate-y-0.5` ou changement de fond au survol.
- États désactivés : `disabled:opacity-50 disabled:cursor-not-allowed`.

## 5. Cartes et blocs

- Carte standard : fond blanc ou `surface`, `rounded-2xl` ou `rounded-xl`, `border border-outline-variant/30` à `/40`, `shadow-lg`/`shadow-xl`/`shadow-2xl` selon l'importance.
- Légère rotation (`rotate-1.5deg`, `-rotate-3`) tolérée pour les mockups/illustrations « posées sur le cahier », jamais sur du contenu fonctionnel (formulaires, listes de fiches).
- Accent latéral : `border-l-2 border-secondary` pour un encadré qui met en valeur une info (citation, exemple clé).
- Badges : `rounded-md bg-secondary/10 px-2.5 py-1 font-ui text-[11px] font-bold uppercase tracking-wider text-secondary`.

## 6. Logo

- Composant partagé : `src/components/Logo.tsx`. Toujours l'utiliser, ne jamais réécrire le mot « Maitrizz » en dur.
- Construction : mot-symbole serif teal + trait manuscrit fin terracotta en soulignage (SVG, pas de bordure CSS classique).
- Favicon assorti : `src/app/icon.svg` (le « M » serif + même surlignage).
- Planche d'exploration des anciens concepts conservée hors ligne : `design/logo-explorations.html` (à rouvrir avec `open` si besoin de revenir sur le choix).

## 7. Mise en page

- Largeur max de section : `max-w-[1440px] mx-auto`.
- Marges horizontales : `px-5` mobile → `md:px-16`.
- Rythme vertical des sections : `py-20` à `py-32` selon l'importance (hero/sections clés en haut de gamme).
- `text-balance` sur les titres multi-lignes pour un retour à la ligne équilibré.

## 8. Ce qui est interdit

- Couleur en dur (`#xxxxxx`) dans un composant : passer par un token Tailwind/daisyui existant, ou en ajouter un dans `globals.css`.
- Emojis dans l'UI (cf. [[feedback_writing_style]]) : aucune icône emoji, seulement des SVG sobres ou `.font-ui` en texte.
- Mélanger `.font-ui` et serif dans le même élément de texte.
- Plus d'un CTA `bg-secondary` visible à l'écran en même temps dans une section.

---

## 9. État d'avancement

- ✅ Page d'accueil (Hero, Features, Status, Pricing, Newsletter), Navbar, Footer, Logo, favicon.
- ⏳ Reste à passer dans cette identité : pages « réviser », blog, fiches individuelles, formulaires (login/inscription).
- Voir mémoire `project_design_chantier` pour le détail du chantier (worktree, ports, organisation git).
