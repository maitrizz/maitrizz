# Squelette commun des trois modèles d'emails

Note de référence, pour comprendre pourquoi ces fichiers sont bâtis ainsi avant
de les modifier. Les trois modèles partagent exactement la même structure : seuls
le titre, le texte, le libellé du bouton et la mention d'envoi changent.

## Le mode clair forcé

Les applications Gmail et Apple Mail en mode sombre **réinventent les couleurs**
d'un mail clair. Le crème `#fbf9f4` ressortait bleuté sur mobile.

La parade tient en trois déclarations, dans le `<head>` :

```html
<meta name="color-scheme" content="light only">
<meta name="supported-color-schemes" content="light only">
<style>:root { color-scheme: light only; supported-color-schemes: light only; }</style>
```

« Ce mail est conçu pour le mode clair, ne le retouchez pas. » Les clients qui
comprennent ces déclarations arrêtent d'inverser. C'est le seul moyen fiable :
il n'existe pas de façon de contrôler l'inversion une fois qu'elle a lieu.

### Ce que ça ne règle pas : Gmail sur iPhone

L'application Gmail sur iOS **inverse de force** les mails clairs en mode sombre
et ignore ces déclarations, contrairement à Apple Mail et Outlook qui les
respectent. Le crème devient gris foncé, le bandeau teal un bleu pâle. Ce n'est
pas contournable, par personne.

**Décision du 22/10/2026 : on garde le bandeau teal malgré ça.** L'alternative
examinée était de le supprimer pour ne laisser qu'un logo teal sur fond blanc,
qui se dégrade moins. Arbitrage retenu : privilégier le rendu en mode clair, qui
concerne la majorité des lecteurs. Ne pas rouvrir le sujet sans raison nouvelle.

## Les règles mobiles

Gmail ne lit les `<style>` que si le mail a un `<head>` en bonne et due forme.
D'où la structure complète `<html><head><body>` plutôt qu'un simple fragment.

En dessous de 600 pixels :

- la carte passe en pleine largeur ;
- les marges intérieures tombent de 40 à 22 pixels ;
- **le bouton devient pleine largeur**, au lieu d'être un bloc à largeur fixe
  dont le texte se serrait ou débordait ;
- le titre perd quelques pixels.

## Le bouton

Trois couches superposées, et chaque client n'en voit qu'une :

1. le bloc `VML` pour Outlook, qui ignore les coins arrondis en CSS ;
2. une cellule de tableau avec couleur de fond, pour les clients qui perdent les
   fonds sur les balises `<a>` ;
3. le lien lui-même, avec ses marges intérieures.

Le texte du bouton est écrit **sur la même ligne que la balise**, sans retour ni
indentation : les espaces d'indentation se transforment en espaces réels dans
certains clients, ce qui donnait un libellé bizarrement espacé.

## Le lien de secours

En chasse fixe, dans un cartouche : on distingue le `l` du `1`, et la forme dit
« ceci est à copier ». La pile de polices descend jusqu'à Courier, présente partout.

## Le logo

En texte, jamais en image : Gmail et Outlook bloquent les images par défaut, et
un logo absent dans le premier message reçu fait mauvais effet. Le logo du site
étant un mot-symbole, la reproduction est fidèle, au trait manuscrit près.

Il apparaît deux fois : en blanc sur le bandeau teal en tête, puis en petit gris
en signature, pour fermer le message.

## Avant de débugger un rendu : vérifier qu'on regarde le bon mail

Leçon du 22/10/2026, après trois corrections dans le vide. Le modèle collé dans
Supabase n'avait pas été enregistré, donc les envois de test utilisaient toujours
l'ancienne version, et chaque correction semblait sans effet.

**Réflexe à prendre** : avant de chercher un défaut de rendu, poser un marqueur
visible dans le modèle, par exemple `[v4]` en terracotta dans le pied. S'il
n'apparaît pas dans le mail reçu, le problème n'est pas dans le code. On le
retire une fois le diagnostic fait.

Cela vaut pour tout ce qui ne s'inspecte pas directement depuis le terminal.

## Pour générer la version à coller dans Supabase

Les fichiers de ce dossier contiennent des commentaires de documentation. La
version collable s'obtient en les retirant, **sans toucher aux commentaires
conditionnels d'Outlook**, qui sont du code :

```sh
perl -0777 -pe 's{<!--(.*?)-->\s*}{ my $b = $1; ($b =~ /^\[if/s || $b =~ /endif/s) ? "<!--$b-->\n" : "" }ges' fichier.html
```

Vérifier ensuite que `[if mso]`, `[if !mso]` et les deux `endif` sont toujours
présents, et qu'aucun `<!---->` vide n'est apparu.
