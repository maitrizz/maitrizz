-- ============================================================================
-- Maitrizz · Abonnement Stripe (axe 2.4)
--
-- À coller dans l'éditeur SQL de Supabase, après 0001. Rejouable sans erreur.
--
-- Principe : Stripe reste la source de vérité de la facturation. On ne recopie
-- ici que ce dont le SITE a besoin pour décider quoi afficher, et rien de plus.
-- Pas de montant, pas de moyen de paiement, pas d'historique : ces données ont
-- leur place chez Stripe, qui est fait pour ça et audité pour ça.
-- ============================================================================


-- ----------------------------------------------------------------------------
-- 1. Colonnes d'abonnement sur le profil
-- ----------------------------------------------------------------------------

alter table public.profils
  add column if not exists stripe_client_id      text,
  add column if not exists abonnement_statut     text not null default 'aucun',
  add column if not exists abonnement_fin        timestamptz,
  add column if not exists abonnement_maj_le     timestamptz;

comment on column public.profils.stripe_client_id is
  'Identifiant client Stripe (cus_…), pour retrouver l''abonné et ouvrir son portail de gestion.';
comment on column public.profils.abonnement_statut is
  'aucun · actif · en_retard · annule. Recopié depuis Stripe par le webhook, jamais écrit par le navigateur.';
comment on column public.profils.abonnement_fin is
  'Fin de la période payée. Un abonnement annulé reste actif jusqu''à cette date.';

-- Statuts autorisés, en français pour que le code du site n'ait pas à traduire
-- le vocabulaire de Stripe à chaque lecture.
alter table public.profils drop constraint if exists profils_abonnement_statut_valide;
alter table public.profils add constraint profils_abonnement_statut_valide
  check (abonnement_statut in ('aucun', 'actif', 'en_retard', 'annule'));

-- Retrouver un profil depuis un événement Stripe, qui ne connaît que le client.
create unique index if not exists profils_stripe_client_idx
  on public.profils (stripe_client_id)
  where stripe_client_id is not null;


-- ----------------------------------------------------------------------------
-- 2. Qui peut écrire ces colonnes : personne, côté navigateur
-- ----------------------------------------------------------------------------
-- Point critique. Les politiques de 0001 autorisent un candidat à modifier son
-- propre profil, ce qui lui permettrait de passer `abonnement_statut` à
-- 'actif' depuis la console du navigateur, avec la clé publique.
--
-- On remplace donc la politique de mise à jour par une version qui laisse le
-- candidat maître de SES champs (niveau, date de concours) tout en figeant les
-- champs d'abonnement : ils ne changent que par le webhook, qui utilise la clé
-- de service et passe outre la sécurité par ligne.

drop policy if exists "profils : modifier le sien" on public.profils;
create policy "profils : modifier le sien"
  on public.profils for update
  using (auth.uid() = id)
  with check (
    auth.uid() = id
    -- Les valeurs d'abonnement doivent rester identiques à celles déjà en base.
    and abonnement_statut is not distinct from (
      select p.abonnement_statut from public.profils p where p.id = auth.uid()
    )
    and stripe_client_id is not distinct from (
      select p.stripe_client_id from public.profils p where p.id = auth.uid()
    )
    and abonnement_fin is not distinct from (
      select p.abonnement_fin from public.profils p where p.id = auth.uid()
    )
  );


-- ----------------------------------------------------------------------------
-- 3. Lecture pratique pour le site
-- ----------------------------------------------------------------------------
-- « Cette personne a-t-elle accès ? » en une fonction, pour que la règle vive
-- à UN seul endroit. Un abonnement annulé reste honoré jusqu'au terme payé :
-- c'est la loi, et c'est surtout la moindre des choses.

create or replace function public.abonnement_actif(profil public.profils)
returns boolean
language sql
stable
as $$
  select profil.abonnement_statut = 'actif'
      or (profil.abonnement_statut = 'annule' and profil.abonnement_fin > now());
$$;
