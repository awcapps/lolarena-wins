# Changelog - LoL Arena Wins Tracker

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [Unreleased]

### 🧹 Changed
- Removed infrastructure-specific documentation files for open-source publication
- Updated `README.md` to keep only a public live demo link

### 🔧 Fixed
- Fixed Tailwind CSS v4 PostCSS configuration (installed `@tailwindcss/postcss`)
- Updated `postcss.config.mjs` to use correct plugin
- Converted CSS from `@tailwind` directives to `@import "tailwindcss"`

### 🌍 Changed
- Changed all UI text from French to English
- Changed Data Dragon API locale from `fr_FR` to `en_US`
- Updated HTML lang attribute to `en`

### 📝 Added
- Added open-source governance files:
  - `LICENSE` (MIT)
  - `CONTRIBUTING.md`
  - `CODE_OF_CONDUCT.md`
  - `SECURITY.md`
  - `.github` issue and PR templates
## [0.1.0] - 2026-02-09

### 🎉 Version initiale

Premier release du tracker de victoires Arena pour League of Legends.

### ✨ Fonctionnalités

- **Liste des champions** : Affichage de tous les champions LoL avec leurs icônes officielles (Data Dragon API)
- **Système de validation** : Clic sur un champion pour le marquer comme validé (Top 1 Arena)
- **Filtre de recherche** : Recherche en temps réel par nom de champion
- **Statistiques** : Affichage du total, validés, restants et pourcentage de progression
- **Sauvegarde automatique** : Persistance des données dans localStorage
- **Import/Export** : Sauvegarde et restauration des données en JSON
- **Reset** : Bouton pour réinitialiser toutes les validations (avec confirmation)
- **Design LoL** : Interface avec les couleurs officielles (gold #C8AA6E, dark background)
- **Responsive** : Grille adaptative (3 à 10 colonnes selon la largeur d'écran)
- **Performance** : Lazy loading des images de champions

### 🛠️ Technique

- **Framework** : Vite 5 + React 19 + TypeScript 5
- **Styling** : Tailwind CSS 4 avec couleurs LoL custom
- **Icons** : Lucide React
- **API** : Riot Games Data Dragon (dernière version)
- **Build** : Output statique optimisé

### 📁 Fichiers créés

#### Configuration
- `package.json` - Dépendances et scripts npm
- `vite.config.ts` - Configuration Vite avec alias @/
- `tsconfig.json` - Configuration TypeScript strict
- `tsconfig.node.json` - Config TS pour Vite
- `tailwind.config.js` - Couleurs LoL custom
- `postcss.config.mjs` - Config PostCSS
- `eslint.config.js` - Linter avec React hooks
- `.gitignore` - Fichiers ignorés par Git

#### Source
- `index.html` - HTML de base avec meta SEO
- `src/main.tsx` - Entry point React
- `src/App.tsx` - Composant principal (logique + layout)
- `src/index.css` - Styles globaux Tailwind + custom classes
- `src/types/champion.ts` - Types TypeScript pour l'API Data Dragon
- `src/utils/storage.ts` - Utils localStorage + filtres
- `src/components/ChampionCard.tsx` - Carte champion avec validation
- `src/components/SearchBar.tsx` - Barre de recherche avec clear
- `src/components/StatsBar.tsx` - Barre de statistiques + progress bar
- `public/lol-icon.svg` - Favicon (trophée gold)

#### Documentation
- `README.md` - Documentation principale du projet
- `CHANGELOG.md` - Ce fichier

### 🎨 Design

- Palette LoL officielle :
  - Gold : `#C8AA6E` (accents, titres)
  - Blue : `#0AC8B9` (secondaire)
  - Dark : `#010A13` (background)
  - Dark-2 : `#0A1428` (cards, inputs)
- Bordure verte + checkmark pour champions validés
- Hover effects avec scale et bordure gold
- Progress bar avec gradient green
- Grid responsive : 3 cols (mobile) → 10 cols (ultra-wide)

---

## Conventions de versioning

- **MAJOR** (X.0.0) : Changements incompatibles avec les versions précédentes
- **MINOR** (0.X.0) : Ajout de fonctionnalités rétro-compatibles
- **PATCH** (0.0.X) : Corrections de bugs rétro-compatibles

[Unreleased]: https://github.com/Bkh84/lolarena-wins/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/Bkh84/lolarena-wins/releases/tag/v0.1.0
