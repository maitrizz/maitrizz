/**
 * Magasin de progression : la seule porte d'entrée pour tout ce que le site
 * enregistre sur un candidat (boîtes de Leitner, auto-évaluations, sujets
 * blancs, surlignages).
 *
 * Principe retenu : LE LOCAL D'ABORD.
 *  - on lit et on écrit dans `localStorage`, de façon SYNCHRONE, comme avant.
 *    C'est indispensable : certains composants lisent pendant le rendu
 *    (`MaitriseVoyants` via `useSyncExternalStore`), donc une lecture réseau,
 *    forcément asynchrone, les casserait ;
 *  - le serveur n'est qu'une copie, mise à jour en arrière-plan et en différé.
 *    Conséquence voulue : le site reste utilisable hors ligne, et SANS COMPTE,
 *    exactement comme aujourd'hui.
 *
 * Ce fichier ne connaît pas Supabase. Il expose un branchement
 * (`brancherSynchronisation`) que l'adaptateur réseau vient remplir. Ainsi la
 * logique de fusion reste testable sans navigateur ni réseau, et un changement
 * d'hébergeur ne toucherait qu'un seul fichier.
 *
 * Vocabulaire : on appelle « clé » la partie stable, sans préfixe, par exemple
 * `trainer:hub-francais-ecrit` ou `exos:accord-participe-passe`. C'est elle qui
 * est stockée en base (table `progression`).
 */

const PREFIXE = "maitrizz";

/** Identifiant du compte connecté, ou `null` en mode anonyme (local seul). */
export type Compte = string | null;

let compteActif: Compte = null;

/**
 * Clé réelle dans `localStorage`.
 *
 * Anonyme : `maitrizz:exos:<slug>`, soit EXACTEMENT les clés historiques. Les
 * candidats déjà en train de réviser ne perdent donc rien à la mise en ligne.
 *
 * Connecté : `maitrizz:u:<compte>:exos:<slug>`. Ce cloisonnement n'est pas du
 * zèle : deux personnes qui préparent le concours sur le même ordinateur ne
 * doivent pas mélanger leurs révisions, ni l'une effacer celles de l'autre.
 */
export function cleStockage(cle: string, compte: Compte = compteActif): string {
  return compte ? `${PREFIXE}:u:${compte}:${cle}` : `${PREFIXE}:${cle}`;
}

/* ────────────────────────────────────────────────────────────
   Lecture et écriture
──────────────────────────────────────────────────────────── */

/**
 * Lit une valeur JSON. Ne lève jamais : navigation privée, quota plein,
 * contenu illisible ou rendu côté serveur renvoient la valeur par défaut.
 */
export function lireJSON<T>(cle: string, defaut: T): T {
  if (typeof window === "undefined") return defaut;
  try {
    const brut = window.localStorage.getItem(cleStockage(cle));
    return brut ? (JSON.parse(brut) as T) : defaut;
  } catch {
    return defaut;
  }
}

/** Écrit une valeur JSON, puis programme son envoi au serveur si un compte est connecté. */
export function ecrireJSON<T>(cle: string, valeur: T): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(cleStockage(cle), JSON.stringify(valeur));
    marquerEcritureLocale(cle);
  } catch {
    // localStorage indisponible (navigation privée, quota) : on ignore la
    // persistance, la session en cours continue de fonctionner en mémoire.
  }
  programmerEnvoi(cle);
}

/** Supprime une valeur, localement et au serveur. Sert au « repartir de zéro ». */
export function supprimer(cle: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(cleStockage(cle));
  } catch {
    // ignore
  }
  programmerEnvoi(cle);
}

/* ────────────────────────────────────────────────────────────
   Dates d'écriture locales
   Sans elles, impossible de trancher « qui est le plus récent » entre cet
   appareil et le serveur. Elles vivent dans UNE clé à part, jamais
   synchronisée : c'est une information d'appareil, pas une révision.
──────────────────────────────────────────────────────────── */

/** Préfixe des clés internes au magasin, exclues de la synchronisation. */
const INTERNE = "sync:";
const CLE_MAJ_LOCALES = `${INTERNE}maj`;

type MajLocales = Record<string, number>;

function marquerEcritureLocale(cle: string): void {
  if (cle.startsWith(INTERNE)) return;
  const toutes = lireJSON<MajLocales>(CLE_MAJ_LOCALES, {});
  toutes[cle] = Date.now();
  try {
    window.localStorage.setItem(cleStockage(CLE_MAJ_LOCALES), JSON.stringify(toutes));
  } catch {
    // ignore : on perdra l'arbitrage de fraîcheur, pas les révisions
  }
}

/**
 * Date de la dernière écriture locale d'une clé, ou 0 si inconnue.
 *
 * Inconnue veut dire « écrite avant la mise en place de la synchronisation »,
 * ou « jamais écrite ici ». Dans ce cas le serveur, dont la date est certaine,
 * l'emporte pour les formats indivisibles. Les formats fusionnables, eux, ne
 * dépendent pas de cet arbitrage : ils s'unissent item par item.
 */
export function majLocale(cle: string): number {
  return lireJSON<MajLocales>(CLE_MAJ_LOCALES, {})[cle] ?? 0;
}

/** Toutes les clés connues pour un compte donné (sans leur préfixe). */
export function clesConnues(compte: Compte = compteActif): string[] {
  if (typeof window === "undefined") return [];
  const prefixe = compte ? `${PREFIXE}:u:${compte}:` : `${PREFIXE}:`;
  const cles: string[] = [];
  try {
    for (let i = 0; i < window.localStorage.length; i++) {
      const brute = window.localStorage.key(i);
      if (!brute || !brute.startsWith(prefixe)) continue;
      // En anonyme, le préfixe court attraperait aussi les clés des comptes :
      // on les écarte explicitement.
      if (!compte && brute.startsWith(`${PREFIXE}:u:`)) continue;
      const cle = brute.slice(prefixe.length);
      if (cle.startsWith(INTERNE)) continue; // tenue de compte interne, jamais synchronisée
      cles.push(cle);
    }
  } catch {
    return [];
  }
  return cles;
}

/* ────────────────────────────────────────────────────────────
   Compte actif et abonnement
──────────────────────────────────────────────────────────── */

const auditeurs = new Set<() => void>();

/**
 * Déclare le compte connecté. À appeler à la connexion, à la déconnexion et au
 * chargement de la page une fois la session Supabase restaurée. Change la clé
 * de tous les magasins, donc prévient les composants pour qu'ils relisent.
 */
export function definirCompte(compte: Compte): void {
  if (compte === compteActif) return;
  compteActif = compte;
  notifier();
}

export function compteCourant(): Compte {
  return compteActif;
}

/**
 * S'abonner aux changements venus d'ailleurs : connexion, déconnexion, ou
 * arrivée de données synchronisées depuis un autre appareil. Renvoie la
 * fonction de désabonnement (signature attendue par `useSyncExternalStore`).
 */
export function abonner(auditeur: () => void): () => void {
  auditeurs.add(auditeur);
  return () => auditeurs.delete(auditeur);
}

function notifier(): void {
  for (const auditeur of auditeurs) auditeur();
}

/* ────────────────────────────────────────────────────────────
   Fusion entre appareils
   Le cas à ne pas rater : réviser dans le métro sur le téléphone, puis le soir
   sur l'ordinateur resté ouvert depuis la veille. Écraser bêtement ferait
   perdre une session de révision, ce qui est impardonnable pour un candidat.
   On fusionne donc ITEM PAR ITEM quand le format s'y prête.
──────────────────────────────────────────────────────────── */

type Dico = Record<string, unknown>;

/** Compteur d'un item, quelle que soit la famille (ils ne font que monter). */
function nombre(valeur: unknown, champ: string): number {
  const o = valeur as Record<string, unknown> | null;
  const v = o && typeof o === "object" ? o[champ] : undefined;
  return typeof v === "number" ? v : -1;
}

/**
 * Fusionne la version locale et la version du serveur pour une clé.
 *
 * `distantePlusRecente` tranche les cas indécidables : c'est l'horodatage
 * `maj_le` tenu PAR LA BASE (jamais par le navigateur, dont l'horloge peut
 * être déréglée) comparé à la dernière écriture locale connue.
 */
export function fusionner(
  cle: string,
  locale: unknown,
  distante: unknown,
  distantePlusRecente: boolean,
): unknown {
  if (locale === undefined || locale === null) return distante;
  if (distante === undefined || distante === null) return locale;

  // Boîtes de Leitner (`trainer:*`) : un item vu 12 fois a forcément une
  // histoire plus longue qu'un item vu 9 fois, `seen` ne faisant que monter.
  // En cas d'égalité parfaite on garde la boîte la plus haute, donc l'échéance
  // la plus lointaine : on préfère redemander trop tard que ressasser.
  if (cle.startsWith("trainer:")) {
    return fusionnerParCompteur(locale as Dico, distante as Dico, "seen", "box");
  }

  // Maîtrise par objectif (`mastery:*`) : même raisonnement avec `attempts`.
  if (cle.startsWith("mastery:")) {
    return fusionnerParCompteur(locale as Dico, distante as Dico, "attempts", "box");
  }

  // Historique des sujets blancs : union des tentatives, chaque tentative
  // portant sa date ISO, unique en pratique. Plus récente en tête, comme
  // l'affichage « Vos tentatives » l'attend.
  if (cle.startsWith("runner-history:")) {
    const toutes = [
      ...(Array.isArray(locale) ? locale : []),
      ...(Array.isArray(distante) ? distante : []),
    ] as { date?: string }[];
    const parDate = new Map<string, unknown>();
    for (const tentative of toutes) {
      const id = tentative?.date ?? JSON.stringify(tentative);
      if (!parDate.has(id)) parDate.set(id, tentative);
    }
    return [...parDate.values()].sort((a, b) =>
      String((b as { date?: string })?.date ?? "").localeCompare(String((a as { date?: string })?.date ?? "")),
    );
  }

  // Cases cochées, auto-évaluations d'exercices, copies jugées : des réponses
  // à plat, sans historique. On prend l'union, et la version la plus récente
  // tranche les items présents des deux côtés avec des valeurs différentes.
  if (cle.startsWith("exos:") || cle.startsWith("copies:") || cle.startsWith("autoeval:")) {
    return distantePlusRecente
      ? { ...(locale as Dico), ...(distante as Dico) }
      : { ...(distante as Dico), ...(locale as Dico) };
  }

  // Sujet blanc EN COURS (`runner:v2:*`) et surlignages (`annot:v1:*`) : un
  // état d'un seul tenant. Mélanger un chrono, une partie active et des
  // réponses venus de deux appareils donnerait un état incohérent, par exemple
  // un corrigé déjà dévoilé sur des réponses vides. On garde donc un bloc
  // entier, le plus récent. Même règle pour toute clé inconnue, prudence par défaut.
  return distantePlusRecente ? distante : locale;
}

/**
 * Union de deux dictionnaires d'items, en gardant pour chaque identifiant
 * l'entrée dont le compteur est le plus avancé.
 */
function fusionnerParCompteur(locale: Dico, distante: Dico, champ: string, departage: string): Dico {
  const resultat: Dico = { ...locale };
  for (const [id, valeurDistante] of Object.entries(distante)) {
    const valeurLocale = resultat[id];
    if (valeurLocale === undefined) {
      resultat[id] = valeurDistante;
      continue;
    }
    const ecart = nombre(valeurDistante, champ) - nombre(valeurLocale, champ);
    if (ecart > 0 || (ecart === 0 && nombre(valeurDistante, departage) > nombre(valeurLocale, departage))) {
      resultat[id] = valeurDistante;
    }
  }
  return resultat;
}

/**
 * Applique une valeur venue du serveur : fusion puis écriture locale, SANS
 * reprogrammer un envoi (sinon chaque réception relancerait un aller-retour).
 * Renvoie `true` si la valeur locale a changé, pour ne prévenir les composants
 * qu'en cas de vraie nouveauté.
 */
export function appliquerDistant(cle: string, distante: unknown, distantePlusRecente: boolean): boolean {
  if (typeof window === "undefined") return false;
  const locale = lireJSON<unknown>(cle, null);
  const fusionnee = fusionner(cle, locale, distante, distantePlusRecente);
  const avant = JSON.stringify(locale);
  const apres = JSON.stringify(fusionnee);
  if (avant === apres) return false;
  try {
    window.localStorage.setItem(cleStockage(cle), apres);
    // La valeur fusionnée est NEUVE : ni celle d'ici, ni celle du serveur. On
    // l'horodate donc comme une écriture locale, et c'est à l'appelant de la
    // renvoyer pour que l'autre appareil en profite à son tour.
    marquerEcritureLocale(cle);
  } catch {
    return false;
  }
  return true;
}

/** À appeler après une salve d'`appliquerDistant`, pour un seul réveil des composants. */
export function signalerArriveeDistante(): void {
  notifier();
}

/* ────────────────────────────────────────────────────────────
   File d'envoi
   On n'envoie pas à chaque réponse cochée : une session de trainer produit des
   dizaines d'écritures par minute. On regroupe, et on ne retient que les CLÉS
   modifiées, dont on relira la valeur au moment de l'envoi.
──────────────────────────────────────────────────────────── */

export type AdaptateurSync = {
  /**
   * Envoie les clés indiquées, dont il relit la valeur locale lui-même. Une
   * clé absente localement signifie « supprimée » : la ligne correspondante
   * doit alors être effacée en base. Doit rejeter en cas d'échec réseau, pour
   * que le lot soit remis dans la file.
   */
  envoyer: (cles: string[]) => Promise<void>;
};

const DELAI_ENVOI_MS = 2000;

let adaptateur: AdaptateurSync | null = null;
let enAttente = new Set<string>();
let minuteur: ReturnType<typeof setTimeout> | null = null;
let envoiEnCours = false;

/** Branche l'adaptateur réseau. Appelé une fois, à la connexion. */
export function brancherSynchronisation(nouvel: AdaptateurSync | null): void {
  adaptateur = nouvel;
  if (nouvel && enAttente.size > 0) programmerEnvoi();
}

/**
 * Met des clés dans la file sans les réécrire. Sert après une fusion : le
 * résultat doit remonter au serveur pour que les autres appareils en profitent.
 */
export function marquerAEnvoyer(cles: string[]): void {
  for (const cle of cles) enAttente.add(cle);
  programmerEnvoi();
}

function programmerEnvoi(cle?: string): void {
  // Les clés internes (dates d'écriture, drapeaux d'appareil) ne quittent
  // jamais le navigateur : ce ne sont pas des révisions.
  if (cle && !cle.startsWith(INTERNE)) enAttente.add(cle);
  // Pas de compte ou pas d'adaptateur : on reste en local pur, et les clés
  // accumulées partiront au prochain branchement, donc à la connexion.
  if (!adaptateur || !compteActif) return;
  if (minuteur) clearTimeout(minuteur);
  minuteur = setTimeout(() => void viderLaFile(), DELAI_ENVOI_MS);
}

/**
 * Envoie tout de suite ce qui attend. À appeler quand l'onglet se ferme ou
 * passe en arrière-plan, sinon les deux dernières secondes de travail se
 * perdent, et sur mobile c'est le cas le plus fréquent.
 */
export async function viderLaFile(): Promise<void> {
  if (!adaptateur || !compteActif || envoiEnCours || enAttente.size === 0) return;
  const lot = [...enAttente];
  enAttente = new Set();
  envoiEnCours = true;
  try {
    await adaptateur.envoyer(lot);
  } catch {
    // Échec réseau : on remet le lot dans la file, il repartira au prochain
    // envoi. Rien n'est perdu, le local fait toujours foi.
    for (const cle of lot) enAttente.add(cle);
  } finally {
    envoiEnCours = false;
  }
}

/** Nombre de clés en attente d'envoi. Sert à l'indicateur « enregistré ». */
export function enAttenteDEnvoi(): number {
  return enAttente.size;
}
