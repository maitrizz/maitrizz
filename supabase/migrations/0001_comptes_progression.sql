-- ============================================================================
-- Maitrizz · Comptes et synchronisation de la progression (axe 2, tranche 1)
--
-- À coller dans l'éditeur SQL de Supabase (Dashboard > SQL Editor > New query),
-- une seule fois. Ce fichier est la source de vérité du schéma : toute
-- évolution se fait par un nouveau fichier 0002_..., jamais en modifiant
-- celui-ci, pour qu'on puisse rejouer l'historique sur un projet neuf.
--
-- Deux tables seulement :
--   · profils      : qui est le candidat (niveau, date du concours) ;
--   · progression  : ses révisions, sous la forme clé/valeur JSON, en miroir
--                    exact des clés `maitrizz:*` déjà écrites dans le
--                    navigateur (voir src/lib/store.ts).
--
-- Pourquoi recopier les clés du navigateur plutôt que modéliser 8 tables :
-- les formats évoluent encore (`runner:v2`, `annot:v1` portent déjà leur
-- version) et Postgres sait interroger du JSON. Le futur tableau de bord
-- travaillera dessus sans migration de données.
--
-- Sécurité : la clé « anon » utilisée par le site est publique par conception.
-- C'est la sécurité par ligne (RLS) définie ici qui garantit qu'un candidat ne
-- peut lire ni écrire que SES lignes. Sans ces politiques, la table serait
-- ouverte à tous : ne jamais désactiver `enable row level security`.
-- ============================================================================


-- ----------------------------------------------------------------------------
-- 1. Profils
-- ----------------------------------------------------------------------------
-- Une ligne par compte, créée automatiquement à l'inscription (trigger en §3).
-- `date_concours` ne sert à rien dans cette tranche : c'est la donnée dont le
-- planning adaptatif aura besoin ensuite, autant la collecter dès maintenant.

create table if not exists public.profils (
  id            uuid primary key references auth.users (id) on delete cascade,
  email         text not null,
  niveau        text check (niveau in ('l3', 'm2')),
  date_concours date,
  cree_le       timestamptz not null default now(),
  maj_le        timestamptz not null default now()
);

comment on table  public.profils is 'Profil candidat : niveau de concours et date d''épreuve.';
comment on column public.profils.niveau is 'l3 ou m2, en miroir de src/lib/niveau.ts (segment d''URL /reviser/[niveau]).';
comment on column public.profils.date_concours is 'Date de l''écrit, utilisée par le futur planning adaptatif.';

alter table public.profils enable row level security;

-- Chacun ne voit et ne modifie que son propre profil. Pas de politique DELETE :
-- la suppression du profil suit celle du compte (on delete cascade).
--
-- Chaque politique est précédée d'un `drop ... if exists` : Postgres refuse de
-- recréer une politique existante, et ce fichier doit pouvoir être relancé sans
-- erreur (le rejouer en entier est la façon normale de vérifier un projet).
drop policy if exists "profils : lire le sien" on public.profils;
create policy "profils : lire le sien"
  on public.profils for select
  using (auth.uid() = id);

drop policy if exists "profils : créer le sien" on public.profils;
create policy "profils : créer le sien"
  on public.profils for insert
  with check (auth.uid() = id);

drop policy if exists "profils : modifier le sien" on public.profils;
create policy "profils : modifier le sien"
  on public.profils for update
  using (auth.uid() = id)
  with check (auth.uid() = id);


-- ----------------------------------------------------------------------------
-- 2. Progression
-- ----------------------------------------------------------------------------
-- Une ligne par (candidat, clé). `cle` est la clé du navigateur débarrassée de
-- son préfixe de compte, par exemple :
--   trainer:hub-francais-ecrit · mastery:classes-grammaticales
--   exos:accord-participe-passe · runner:v2:sujet-blanc-1
-- `maj_le` arbitre les conflits entre appareils (voir la règle de fusion dans
-- src/lib/store.ts).

create table if not exists public.progression (
  utilisateur_id uuid not null references auth.users (id) on delete cascade,
  cle            text not null,
  valeur         jsonb not null,
  maj_le         timestamptz not null default now(),
  primary key (utilisateur_id, cle)
);

comment on table  public.progression is 'Miroir serveur des magasins localStorage maitrizz:* (une ligne par clé).';
comment on column public.progression.cle is 'Clé sans préfixe de compte, ex. « trainer:hub-francais-ecrit ».';
comment on column public.progression.valeur is 'Valeur JSON telle qu''écrite par le navigateur, format inchangé.';

-- Lecture au démarrage : on récupère toutes ses lignes d'un coup, triées par
-- fraîcheur. L'index couvre ce cas comme la synchronisation incrémentale.
create index if not exists progression_utilisateur_maj_idx
  on public.progression (utilisateur_id, maj_le desc);

alter table public.progression enable row level security;

-- DELETE est autorisé ici (contrairement aux profils) : « repartir de zéro sur
-- une notion » est une action légitime du candidat.
drop policy if exists "progression : lire la sienne" on public.progression;
create policy "progression : lire la sienne"
  on public.progression for select
  using (auth.uid() = utilisateur_id);

drop policy if exists "progression : écrire la sienne" on public.progression;
create policy "progression : écrire la sienne"
  on public.progression for insert
  with check (auth.uid() = utilisateur_id);

drop policy if exists "progression : modifier la sienne" on public.progression;
create policy "progression : modifier la sienne"
  on public.progression for update
  using (auth.uid() = utilisateur_id)
  with check (auth.uid() = utilisateur_id);

drop policy if exists "progression : supprimer la sienne" on public.progression;
create policy "progression : supprimer la sienne"
  on public.progression for delete
  using (auth.uid() = utilisateur_id);


-- ----------------------------------------------------------------------------
-- 3. Création automatique du profil à l'inscription
-- ----------------------------------------------------------------------------
-- Le site n'a ainsi aucun appel « créer mon profil » à faire après inscription,
-- donc aucun cas de compte sans profil si l'utilisateur ferme l'onglet.
-- `security definer` est nécessaire pour écrire dans public.profils depuis un
-- trigger sur auth.users ; `set search_path = ''` évite qu'un schéma détourné
-- change la cible des noms non qualifiés (recommandation Supabase).

create or replace function public.creer_profil_a_inscription()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profils (id, email, niveau, date_concours)
  values (
    new.id,
    new.email,
    -- Niveau et date choisis au formulaire d'inscription, transmis dans les
    -- métadonnées du compte. Absents (ex. inscription depuis le dashboard) :
    -- le profil est créé quand même, à compléter dans « Mon compte ».
    nullif(new.raw_user_meta_data ->> 'niveau', ''),
    (nullif(new.raw_user_meta_data ->> 'date_concours', ''))::date
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists creer_profil_a_inscription on auth.users;
create trigger creer_profil_a_inscription
  after insert on auth.users
  for each row execute function public.creer_profil_a_inscription();


-- ----------------------------------------------------------------------------
-- 4. Horodatage automatique
-- ----------------------------------------------------------------------------
-- `maj_le` est tenu par la base et non par le navigateur : une horloge de
-- téléphone déréglée ne doit pas pouvoir faire gagner une vieille version lors
-- de la fusion entre appareils.

create or replace function public.toucher_maj_le()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.maj_le := now();
  return new;
end;
$$;

drop trigger if exists profils_maj_le on public.profils;
create trigger profils_maj_le
  before update on public.profils
  for each row execute function public.toucher_maj_le();

drop trigger if exists progression_maj_le on public.progression;
create trigger progression_maj_le
  before update on public.progression
  for each row execute function public.toucher_maj_le();
