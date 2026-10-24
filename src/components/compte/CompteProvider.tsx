"use client";

/**
 * Fournisseur de compte : fait le lien entre la session Supabase et le magasin
 * de progression.
 *
 * Responsabilités, dans cet ordre :
 *  1. savoir qui est connecté, et le rester après un rechargement de page ;
 *  2. déclarer ce compte au magasin, qui change alors de jeu de clés ;
 *  3. descendre la progression du serveur, la fusionner, renvoyer le résultat ;
 *  4. vider la file d'envoi quand l'onglet se ferme.
 *
 * Tout échec ici est sans conséquence sur la révision en cours : le magasin
 * reste local d'abord. Un candidat hors ligne, ou le jour d'une panne Supabase,
 * continue de réviser normalement.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { User } from "@supabase/supabase-js";
import {
  CHAMPS_PROFIL,
  abonnementActif,
  comptesDisponibles,
  supabase,
  type Profil,
} from "@/lib/supabase";
import {
  appliquerDistant,
  brancherSynchronisation,
  clesConnues,
  definirCompte,
  ecrireJSON,
  lireJSON,
  marquerAEnvoyer,
  signalerArriveeDistante,
  viderLaFile,
} from "@/lib/store";
import { creerAdaptateur, recupererTout } from "@/lib/sync";

/** État de la synchronisation, pour l'indicateur discret de la barre de navigation. */
export type EtatSync = "local" | "en-cours" | "a-jour" | "erreur";

type ContexteCompte = {
  utilisateur: User | null;
  profil: Profil | null;
  chargement: boolean;
  etatSync: EtatSync;
  /** Comptes configurés sur cette installation (sinon tout reste local). */
  disponible: boolean;
  /** Accès payant ouvert. Résiliation honorée jusqu'au terme déjà payé. */
  abonne: boolean;
  /** Nombre de magasins anonymes présents sur cet appareil, à rattacher éventuellement. */
  progressionLocale: number;
  rattacherProgressionLocale: () => void;
  ignorerProgressionLocale: () => void;
  deconnexion: () => Promise<void>;
  rechargerProfil: () => Promise<void>;
};

const Contexte = createContext<ContexteCompte | null>(null);

/** Drapeau d'appareil : on ne repropose pas le rattachement une fois tranché. */
const CLE_RATTACHEMENT = "sync:rattachement";

export function CompteProvider({ children }: { children: React.ReactNode }) {
  const disponible = comptesDisponibles();

  const [utilisateur, setUtilisateur] = useState<User | null>(null);
  // Comptes non configurés : il n'y a aucune session à attendre.
  const [chargement, setChargement] = useState(disponible);
  const [progressionLocale, setProgressionLocale] = useState(0);

  // Profil et état de synchronisation sont ATTACHÉS à un compte : on les range
  // avec l'identifiant auquel ils se rapportent. Ils se dérivent alors du
  // compte courant, au lieu d'être remis à zéro à la main à chaque changement.
  // C'est ce qui évite d'afficher une seconde le profil du compte précédent.
  const [suivi, setSuivi] = useState<{ pour: string; etat: EtatSync; profil: Profil | null }>({
    pour: "",
    etat: "local",
    profil: null,
  });

  const aJour = Boolean(utilisateur) && suivi.pour === utilisateur?.id;
  const etatSync: EtatSync = !utilisateur ? "local" : aJour ? suivi.etat : "en-cours";
  const profil = aJour ? suivi.profil : null;
  const abonne = abonnementActif(profil);

  /* 1. Session : au chargement, puis à chaque changement. */
  useEffect(() => {
    const client = supabase();
    if (!client) return; // `chargement` vaut déjà false dans ce cas

    let vivant = true;

    client.auth.getSession().then(({ data }) => {
      if (!vivant) return;
      setUtilisateur(data.session?.user ?? null);
      setChargement(false);
    });

    const { data: abonnement } = client.auth.onAuthStateChange((_evenement, session) => {
      setUtilisateur(session?.user ?? null);
    });

    return () => {
      vivant = false;
      abonnement.subscription.unsubscribe();
    };
  }, []);

  /* 2 et 3. Branchement du magasin et première synchronisation. */
  useEffect(() => {
    const client = supabase();
    definirCompte(utilisateur?.id ?? null);

    if (!client || !utilisateur) {
      brancherSynchronisation(null);
      return; // `etatSync` et `profil` se dérivent de l'absence de compte
    }

    brancherSynchronisation(creerAdaptateur(client, utilisateur.id));

    const compteId = utilisateur.id;
    let vivant = true;
    let etat: EtatSync = "en-cours";

    (async () => {
      try {
        const aRenvoyer = await recupererTout(client, compteId);
        if (!vivant) return;
        if (aRenvoyer.length > 0) marquerAEnvoyer(aRenvoyer);
        etat = "a-jour";
      } catch {
        // Hors ligne ou panne : on garde le local, et la file repartira plus tard.
        etat = "erreur";
      }

      const { data } = await client
        .from("profils")
        .select(CHAMPS_PROFIL)
        .eq("id", compteId)
        .maybeSingle();
      if (vivant) setSuivi({ pour: compteId, etat, profil: (data as Profil) ?? null });

      // Reste-t-il de la progression anonyme sur cet appareil ?
      if (vivant && !lireJSON(CLE_RATTACHEMENT, false)) {
        setProgressionLocale(clesConnues(null).length);
      }
    })();

    return () => {
      vivant = false;
    };
  }, [utilisateur]);

  /* 4. Fermeture de l'onglet : on ne perd pas les dernières secondes.
     `pagehide` est le seul signal fiable sur iOS, où l'onglet est souvent
     suspendu sans jamais être « fermé ». */
  useEffect(() => {
    function vider() {
      void viderLaFile();
    }
    window.addEventListener("pagehide", vider);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") vider();
    });
    return () => {
      window.removeEventListener("pagehide", vider);
    };
  }, []);

  /**
   * Rattache au compte la progression faite sans être connecté, sur cet
   * appareil. On FUSIONNE au lieu d'écraser, avec la version du compte
   * prioritaire en cas d'égalité : rattacher ne doit jamais faire reculer ce
   * qui a été révisé ailleurs.
   */
  const rattacherProgressionLocale = useCallback(() => {
    const aRenvoyer: string[] = [];
    for (const cle of clesConnues(null)) {
      const valeurAnonyme = lireJSON<unknown>(cle, null);
      if (valeurAnonyme === null) continue;
      if (appliquerDistant(cle, valeurAnonyme, false)) aRenvoyer.push(cle);
    }
    if (aRenvoyer.length > 0) {
      marquerAEnvoyer(aRenvoyer);
      signalerArriveeDistante();
    }
    ecrireJSON(CLE_RATTACHEMENT, true);
    setProgressionLocale(0);
  }, []);

  const ignorerProgressionLocale = useCallback(() => {
    // On ne supprime rien : la progression anonyme reste intacte si le
    // candidat se ravise ou utilise le site sans compte.
    ecrireJSON(CLE_RATTACHEMENT, true);
    setProgressionLocale(0);
  }, []);

  const deconnexion = useCallback(async () => {
    const client = supabase();
    if (!client) return;
    await viderLaFile(); // ce qui vient d'être révisé part avant de fermer
    await client.auth.signOut();
  }, []);

  const rechargerProfil = useCallback(async () => {
    const client = supabase();
    if (!client || !utilisateur) return;
    const { data } = await client
      .from("profils")
      .select(CHAMPS_PROFIL)
      .eq("id", utilisateur.id)
      .maybeSingle();
    setSuivi((precedent) => ({
      pour: utilisateur.id,
      etat: precedent.pour === utilisateur.id ? precedent.etat : "a-jour",
      profil: (data as Profil) ?? null,
    }));
  }, [utilisateur]);

  const valeur = useMemo<ContexteCompte>(
    () => ({
      utilisateur,
      profil,
      chargement,
      etatSync,
      disponible,
      abonne,
      progressionLocale,
      rattacherProgressionLocale,
      ignorerProgressionLocale,
      deconnexion,
      rechargerProfil,
    }),
    [
      utilisateur,
      profil,
      chargement,
      etatSync,
      disponible,
      abonne,
      progressionLocale,
      rattacherProgressionLocale,
      ignorerProgressionLocale,
      deconnexion,
      rechargerProfil,
    ],
  );

  return <Contexte.Provider value={valeur}>{children}</Contexte.Provider>;
}

/**
 * Accès au compte depuis n'importe quel composant client.
 *
 * Renvoie un état neutre hors du fournisseur plutôt que de lever : une fiche
 * doit pouvoir s'afficher même si le fournisseur n'est pas monté, par exemple
 * dans les pages de prototype.
 */
export function useCompte(): ContexteCompte {
  return (
    useContext(Contexte) ?? {
      utilisateur: null,
      profil: null,
      chargement: false,
      etatSync: "local",
      disponible: false,
      abonne: false,
      progressionLocale: 0,
      rattacherProgressionLocale: () => {},
      ignorerProgressionLocale: () => {},
      deconnexion: async () => {},
      rechargerProfil: async () => {},
    }
  );
}
