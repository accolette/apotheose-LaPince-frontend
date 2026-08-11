# La Pince — Front-end

> Application web de gestion financière personnelle et collaborative.
> Ce repository contient l'interface utilisateur du projet — React 19, TypeScript 5, Vite 8, Tailwind CSS 4.

---

## 📑 Sommaire

- [La Pince — Front-end](#la-pince--front-end)
  - [📑 Sommaire](#-sommaire)
  - [Présentation](#présentation)
  - [Architecture](#architecture)
  - [Stack technique](#stack-technique)
  - [Prérequis](#prérequis)
  - [Installation](#installation)
    - [1. Cloner le repository](#1-cloner-le-repository)
    - [2. Installer les dépendances](#2-installer-les-dépendances)
    - [3. Configurer les variables d'environnement](#3-configurer-les-variables-denvironnement)
    - [4. Lancer l'application en développement](#4-lancer-lapplication-en-développement)
    - [5. L'application est disponible](#5-lapplication-est-disponible)
  - [Variables d'environnement](#variables-denvironnement)
  - [Scripts disponibles](#scripts-disponibles)
  - [Structure du projet](#structure-du-projet)
  - [Routes](#routes)
  - [Tests](#tests)
  - [Qualité de code](#qualité-de-code)
  - [Workflow Git](#workflow-git)
    - [Convention de nommage des branches](#convention-de-nommage-des-branches)
    - [Convention de commits](#convention-de-commits)
  - [Documentation](#documentation)
  - [RGPD](#rgpd)
- [La Pince — Front-end *(English version)*](#la-pince--front-end-english-version)
  - [Overview](#overview)
  - [Architecture](#architecture-1)
  - [Tech stack](#tech-stack)
  - [Setup](#setup)
  - [Environment variables](#environment-variables)
  - [Scripts](#scripts)
  - [Routes](#routes-1)
  - [Tests](#tests-1)
  - [Docs](#docs)

---

## Présentation

**La Pince** est une application de gestion financière personnelle et collaborative permettant de :

- Suivre ses dépenses par projet et par catégorie
- Répartir les dépenses entre plusieurs participants
- Définir des budgets et recevoir des alertes en cas de dépassement
- Calculer automatiquement les remboursements entre participants

Ce repository contient exclusivement la **couche front-end** : interface utilisateur, navigation, appels API.
Le repository back-end est disponible ici : [`apotheose-LaPince-backend`](https://github.com/accolette/apotheose-LaPince-backend)

---

## Architecture

Le projet adopte une **architecture 3 tiers** séparant clairement :

```
Client (React)          →   Présentation  ← ce repository
API REST (Express)      →   Logique métier
PostgreSQL (Prisma)     →   Données
```

Les deux repositories sont indépendants — pas de monorepo.

Le front-end est une **SPA (Single Page Application)** organisée par domaine fonctionnel :

```
src/
├── components/    → composants React réutilisables
├── pages/         → pages associées aux routes React Router
├── services/      → appels API vers le back-end
├── hooks/         → hooks personnalisés
├── lib/           → utilitaires et helpers
└── types/         → types TypeScript partagés
```

> 📄 Détail complet des choix d'architecture dans le dossier du back : [`docs/architecture.md`](https://github.com/accolette/apotheose-LaPince-backend/tree/main/docs/s0.conception/cahier.des.charges/choix.architecture.md)

---

## Stack technique

| Technologie  | Version | Rôle                                              |
| ------------ | ------- | ------------------------------------------------- |
| React        | 19      | Librairie UI principale — composants, hooks, état |
| TypeScript   | 5       | Typage statique — fiabilité et maintenabilité     |
| Vite         | 8       | Bundler — démarrage rapide, HMR performant        |
| Tailwind CSS | 4       | Styling utilitaire — rendu professionnel rapide   |
| React Router | 7       | Navigation entre les pages (SPA)                  |
| shadcn/ui    | latest  | Composants UI accessibles basés sur Base UI       |
| TanStack Query | latest | Gestion du cache serveur et des requêtes asynchrones (data fetching, invalidation, pagination infinie) |
| Sonner       | latest  | Notifications toast — feedback visuel des actions utilisateur et des erreurs API |
| lucide-react | latest  | Bibliothèque d'icônes open source légère et moderne, compatible React |
| Biome        | 2       | Linter + formatter unifié                         |
| Husky        | -       | Hooks Git pre-commit                              |
| Vitest       | 4       | Tests unitaires et d'intégration                  |

> 📄 Justification complète des choix techniques dans le dossier du back : [`docs/specifications-techniques.md`](https://github.com/accolette/apotheose-LaPince-backend/tree/main/docs/s0.conception/cahier.des.charges/listes.technos.utilisees.md)

---

## Prérequis

Avant de démarrer, assurez-vous d'avoir installé :

- [Node.js 24 LTS](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- Le **back-end** doit être lancé et accessible — voir [`apotheose-LaPince-backend`](https://github.com/accolette/apotheose-LaPince-backend)

> Pas de Docker côté front-end — une SPA React/Vite est bien supportée sans conteneurisation dans le cadre du projet.

---

## Installation

### 1. Cloner le repository

```bash
git clone https://github.com/accolette/apotheose-LaPince-frontend.git
cd apotheose-LaPince-frontend
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les variables d'environnement

```bash
cp .env.example .env
# Vérifiez que VITE_API_URL pointe vers ton back-end local
```

### 4. Lancer l'application en développement

```bash
npm run dev
```

### 5. L'application est disponible

```
http://localhost:5173
```

> Le back-end doit être démarré sur `http://localhost:3000` pour que les appels API fonctionnent.

---

## Variables d'environnement

Copiez `.env.example` en `.env` et renseigne les valeurs.

> ⚠️ Le fichier `.env` ne doit jamais être commité — il est dans le `.gitignore`.

> 📄 Voir `.env.example` pour la liste complète des variables attendues.

| Variable | Description | Exemple |
|---|---|---|
| `VITE_API_URL` | URL de base de l'API back-end | `http://localhost:3000/api` |
| `VITE_NODE_ENV` | Environnement | `development` |

---

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Démarre l'application en mode développement avec HMR |
| `npm run build` | Compile l'application pour la production |
| `npm run preview` | Prévisualise le build de production en local |
| `npm run lint` | Analyse le code avec Biome |
| `npm run lint:fix` | Corrige les erreurs de lint automatiquement |
| `npm run format` | Formate le code avec Biome |
| `npm run check` | Lint + format en une commande |
| `npm run test:unit` | Lance les tests unitaires |
| `npm run test:integration` | Lance les tests d'intégration |

---

## Structure du projet

```
projet-cda-LaPince-frontend/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/                  ← images, fonts, icônes statiques
│   ├── components/
│   │   ├── ui/                  ← composants shadcn/ui générés
│   │   └── shared/              ← composants métier partagés
│   ├── hooks/                   ← hooks personnalisés (useAuth, useProject...)
│   ├── lib/                     ← utilitaires, helpers, constantes
│   ├── pages/                   ← pages React Router
│   │   ├── AuthPage/            ← inscription, connexion
│   │   ├── HomePage/            ← vue d'ensemble et KPIs
│   │   ├── ProjectsPage/        ← gestion des projets
│   ├── services/                ← appels API (fetch)
│   ├── types/                   ← types TypeScript partagés
│   ├── app.tsx                  ← configuration des routes et providers
│   └── main.tsx                 ← point d'entrée de l'application
├── .env
├── .env.example
├── .gitignore
├── biome.json
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

> 📄 Schéma visuel de l'arborescence dans le repo du back : [`docs/arborescence.png`](https://github.com/accolette/apotheose-LaPince-backend/blob/main/docs/s0.conception/conception/arborescence_front_end.PNG)

---

## Routes

L'application est une SPA — la navigation est gérée par **React Router 7**.

| Route | Page | Accès |
|---|---|---|
| `/` | Page d'accueil (landing page) | Public |
| `/login` | Connexion | Public |
| `/register` | Inscription | Public |
| `/projects` | Vue d'ensemble, liste des projets et KPIs | Authentifié |
| `/project/:id` | Détail d'un projet | Authentifié |
| `/privacy-policy` | Politique de confidentialité | Public |
| `/contact` | Contact | Public |
| `/forbidden` | Page 403 — accès refusé | — |
| `/server-error` | Page 500 — erreur serveur | — |
| `*` | Page 404 — route inconnue | — |

> Les routes publiques (`/`, `/login`, `/register`) redirigent automatiquement vers `/projects` si l'utilisateur est déjà authentifié.
> Les routes authentifiées (`/projects`, `/project/:id`) redirigent vers `/login` si aucun utilisateur n'est connecté.

---

## Tests

> ⚠️ **Pas encore mis en place** — aucun test n'a été écrit côté front pour le moment. Les scripts ci-dessous existent dans le `package.json` mais ne trouveront aucun fichier à exécuter.

```bash
# Tests unitaires
npm run test:unit

# Tests d'intégration
npm run test:integration
```

Les tests utiliseront **Vitest 4** une fois mis en place. Couverture prévue :

- Les composants critiques (formulaires, dashboard, alertes)
- Les hooks personnalisés (useAuth, useProject...)
- La logique de calcul des balances côté front

---

## Qualité de code

Le projet utilise **Biome** comme linter et formatter unifié, configuré via `biome.json`.

**Exécution automatique à la sauvegarde** — installer l'extension VSCode `biomejs.biome` et ajouter dans `.vscode/settings.json` :

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biomejs.biome"
}
```

**Exécution automatique au commit** via Husky — le hook `pre-commit` lance `biome check` avant chaque commit. Si des erreurs non corrigeables sont détectées, le commit est bloqué.

---

## Workflow Git

Le projet utilise une organisation Git basée sur :

- `main` → branche de production stable
- `dev` → branche d’intégration et de développement
- branches par feature/fix/docs → créées depuis `dev`

Aucune Pull Request directe vers `main` n’est autorisée.

### Convention de nommage des branches

```txt
feature/nom-feature
fix/nom-fix
docs/nom-doc
refactor/nom-refactor
test/nom-test
```

### Convention de commits

Convention inspirée de Conventional Commits :

```txt
feat: ajout authentification JWT
fix: correction middleware erreur 404
docs: mise à jour README
refactor: simplification service budget
test: ajout tests intégration auth
chore: mise à jour dépendances
```

Chaque Pull Request doit :

* cibler `dev`
* être relue avant merge
* passer les vérifications CI (lint / tests / build)

---

## Documentation
Tous les élements sont dans le repo du back :

| Document | Description | Lien |
|---|---|---|
| Architecture & choix techniques | Justification des technologies et de l'architecture | [`docs/architecture.md`](https://github.com/accolette/apotheose-LaPince-backend/blob/main/docs/s0.conception/cahier.des.charges/choix.architecture.md) |
| Spécifications techniques | Stack complète avec versions et justifications | [`docs/specifications-techniques.md`](https://github.com/accolette/apotheose-LaPince-backend/blob/main/docs/s0.conception/cahier.des.charges/listes.technos.utilisees.md) |
| Charte graphique & maquettes | Éléments visuels du projet | [`docs/design/`](https://github.com/accolette/apotheose-LaPince-backend/blob/main/docs/s0.conception/elements.graphiques) |
| Dictionnaire de données | Description de chaque champ de chaque table | [`docs/dictionnaire-de-donnees.md`](https://github.com/accolette/apotheose-LaPince-backend/blob/main/docs/s0.conception/conception/dictionnaire.donnes.md) |
| Algorithme de répartition | Logique de calcul des balances et remboursements | [`docs/algorithme-repartition.md`](https://github.com/accolette/apotheose-LaPince-backend/blob/main/docs/s0.conception/conception/algorithme.glouton/algorithme.repartition.depenses.md) |

---

## RGPD

Le projet applique des principes de base de conformité RGPD et de sécurité des données :

- Minimisation des données collectées
- Authentification JWT — token stocké de manière sécurisée
- Aucune donnée sensible stockée dans le `localStorage`
- Validation des données côté client avant envoi
- Accès aux ressources limité à l'utilisateur authentifié

> Voir le dossier du back `docs/rgpd/` pour plus de détails :

- [`politique-confidentialite.md`](https://github.com/accolette/apotheose-LaPince-backend/tree/main/docs/s1.mise.en.place/rgpd/politique.confidentialite.md)
- [`gestion-des-donnees.md`](https://github.com/accolette/apotheose-LaPince-backend/tree/main/docs/s1.mise.en.place/rgpd/gestion.des.donnes.md)
- [`securite.md`](https://github.com/accolette/apotheose-LaPince-backend/tree/main/docs/s1.mise.en.place/rgpd/securite.md)
- [`duree-conservation.md`](https://github.com/accolette/apotheose-LaPince-backend/tree/main/docs/s1.mise.en.place/rgpd/duree.conservation.md)

---

# La Pince — Front-end *(English version)*

> UI for a personal and collaborative expense management application.
> Built with React 19, TypeScript 5, Vite 8, Tailwind CSS 4.

---

## Overview

This frontend provides the user interface for:

- Managing projects and expenses
- Splitting costs between participants
- Budget tracking and alerts
- Viewing automatic reimbursement suggestions

[Backend repo](https://github.com/accolette/apotheose-LaPince-backend.git)

---

## Architecture

3-layer architecture:

```
Client → API → Database
```

Frontend structure:

```
src/
├── components   → reusable React components
├── pages        → React Router pages
├── services     → API calls
├── hooks        → custom hooks
├── lib          → utilities and helpers
└── types        → shared TypeScript types
```

---

## Tech stack

- React 19
- TypeScript 5
- Vite 8
- Tailwind CSS 4
- React Router 7
- shadcn/ui (Base UI)
- Biome 2
- Vitest 4

> No Docker on the frontend — not required for this project scope.

---

## Setup

```bash
git clone https://github.com/accolette/apotheose-LaPince-frontend.git
cd apotheose-LaPince-frontend
npm install
cp .env.example .env
npm run dev
```

App available at:

```
http://localhost:5173
```

> The backend must be running on `http://localhost:3000`.

---

## Environment variables

| Variable | Description | Example |
|---|---|---|
| `VITE_API_URL` | Backend API base URL | `http://localhost:3000/api` |
| `VITE_NODE_ENV` | Environment | `development` |

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint / format / check` | Code quality |
| `npm run test:unit / integration` | Tests |

---

## Routes

| Route | Page | Access |
|---|---|---|
| `/` | Landing page | Public |
| `/login` | Login | Public |
| `/register` | Register | Public |
| `/projects` | Overview, project list & KPIs | Auth required |
| `/project/:id` | Project detail | Auth required |
| `/privacy-policy` | Privacy policy | Public |
| `/contact` | Contact | Public |
| `/forbidden` | 403 — access denied | — |
| `/server-error` | 500 — server error | — |
| `*` | 404 — not found | — |

---

## Tests

> ⚠️ **Not implemented yet** — no tests have been written on the front-end so far. The scripts below exist in `package.json` but will find no files to run.

Planned coverage, once in place:
- Critical components (forms, dashboard, alerts)
- Custom hooks (useAuth, useProject...)
- Front-end balance calculation logic

---

## Docs

See `/docs` in the back repository for:

- Architecture
- Technical specifications
- Design & wireframes
- Data dictionary
- Reimbursement algorithm logic

---

*La Pince — Projet CDA — O'clock Helsinki — 2026*