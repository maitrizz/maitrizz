# Supabase · comptes et synchronisation

Ce dossier décrit la base de données du site. Il ne contient aucun secret : les
clés vivent dans `.env.local` (jamais sur GitHub, `.env*` est ignoré par git).

## À quoi ça sert

Jusqu'ici, la progression d'un candidat vivait uniquement dans son navigateur :
changer d'appareil ou vider son cache, et tout était perdu. Supabase ajoute un
compte et une copie de cette progression côté serveur.

Principe retenu : **le navigateur reste la source immédiate**, le serveur est une
copie de sauvegarde synchronisée en arrière-plan. Conséquence : le site continue
de fonctionner hors ligne, et sans compte, comme aujourd'hui.

## Appliquer le schéma

Une seule fois, à la création du projet :

1. ouvrir le projet sur <https://supabase.com/dashboard> ;
2. aller dans **SQL Editor**, puis **New query** ;
3. coller le contenu de `migrations/0001_comptes_progression.sql` et exécuter.

Il n'y a rien à installer sur l'ordinateur pour cela.

Pour vérifier que tout est en place : **Table Editor** doit montrer les tables
`profils` et `progression`, chacune avec la mention « RLS enabled ».

## Règle à ne jamais enfreindre

Ne pas désactiver la sécurité par ligne (RLS) sur ces tables, même « juste pour
tester ». La clé utilisée par le site est publique par conception ; ce sont les
politiques RLS, et elles seules, qui empêchent un visiteur de lire les
révisions d'un autre candidat.

## Faire évoluer le schéma

Toujours par un nouveau fichier (`0002_...`, `0003_...`), jamais en modifiant un
fichier existant. Le projet de production a déjà exécuté les anciens : les
rejouer modifiés donnerait deux bases différentes.

## Les clés attendues dans `.env.local`

```
NEXT_PUBLIC_SUPABASE_URL=https://<identifiant-du-projet>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<clé publique « anon »>
```

Elles se trouvent dans **Project Settings > API**. Les mêmes doivent être
ajoutées sur Vercel (**Settings > Environment Variables**), sinon le site en
ligne ne verra pas la base.

Ne jamais mettre la clé `service_role` dans un fichier préfixé
`NEXT_PUBLIC_` : tout ce qui porte ce préfixe est envoyé au navigateur, et
cette clé passe outre la sécurité par ligne.
