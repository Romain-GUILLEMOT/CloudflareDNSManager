# Gestionnaire de Zone DNS Cloudflare

Ce projet est un gestionnaire de zone DNS pour Cloudflare, construit avec Svelte, TypeScript, et Vite. Il permet de gérer vos zones DNS sur Cloudflare en modifiant, ajoutant, supprimant et listant toutes vos zones.

## Caractéristiques

- Liste toutes vos zones DNS
- Ajoute de nouvelles zones
- Modifie les zones existantes
- Supprime les zones
- Mode sombre et clair

Il est facile à utiliser et très rapide grâce à l'utilisation de Svelte, TypeScript et Vite.

## Prérequis

- Node.js (v20.0.0 ou supérieure)
- Yarn (v1.22 ou supérieure)

## Dépendances

Les principales dépendances de ce projet comprennent:

- Svelte: un cadre JavaScript pour construire des interfaces utilisateur.
- Vite: un outil de construction qui est plus rapide que webpack.
- TypeScript: un sur-ensemble typé de JavaScript qui compile en JavaScript pur.

## Instructions de mise en place

1. Clonez le dépot git:

```shell
git clone https://github.com/Romain-GUILLEMOT/CloudflareDNSManager.git
```

2. Naviguez jusqu'à le dossier du projet:

```shell
cd cloudflare-dns-manager 
```

3. Installez les dépendances:

```shell
yarn install
```

4. Modifier les variables de la configuration

Vous devez renommer le fichier `src/config.json.exemple` en `config.json` et modifier les données présentes à l'intérieur.

5. Démarrer le serveur de développement:

```shell
yarn dev
```

Allez sur http://localhost:5000 dans votre navigateur pour voir l'application.

## Mode Développement


Il est OBLIGATOIRE d'utiliser le mode développement lorsqu'aucun nom de domaine n'est présent pour éviter d'être bloqué par les CORS de l'API Cloudflare.


## Licence

Ce projet est sous licence libre. Vous êtes libre de l'utiliser, de le modifier et de le redistribuer selon les termes de la licence.

## Statut du projet

Veuillez noter que ce projet est encore en cours de développement (Work In Progress – WIP).
Les fonctionnalités peuvent changer, et il peut y avoir des bugs ! Si vous rencontrez un problème
