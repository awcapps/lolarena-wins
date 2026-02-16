# 🏆 LoL Arena Wins Tracker

Tracker de progression pour le mode **Arena** de League of Legends. Validez tous les champions avec lesquels vous avez fait Top 1 !

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![React](https://img.shields.io/badge/React-19-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)
![Vite](https://img.shields.io/badge/Vite-5-646cff)

## 🎮 Fonctionnalités

✅ **Liste complète des champions LoL** avec leurs icônes officielles (Data Dragon API)  
✅ **Système de validation** - Cliquez sur un champion pour le marquer comme validé  
✅ **Filtre de recherche** - Trouvez rapidement un champion par nom  
✅ **Statistiques en temps réel** - Total, validés, restants, pourcentage  
✅ **Sauvegarde automatique** - LocalStorage pour persister vos données  
✅ **Import/Export** - Sauvegardez et partagez votre progression  
✅ **Design LoL authentique** - Couleurs officielles et interface soignée  
✅ **Responsive** - Fonctionne sur mobile, tablette et desktop  

## 🚀 Installation & Développement

### Prérequis

- Node.js 18+ 
- npm ou pnpm

### Installation

```bash
# Cloner le projet
git clone <repo-url>
cd lolarena-wins

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera disponible sur `http://localhost:5173`

### Build Production

```bash
# Build pour production
npm run build

# Preview du build
npm run preview
```

Les fichiers statiques seront générés dans le dossier `dist/`.

## 📦 Stack Technique

- **Framework** : Vite 5 + React 19
- **Language** : TypeScript 5
- **Styling** : Tailwind CSS 4
- **Icons** : Lucide React
- **API** : Riot Games Data Dragon
- **Storage** : LocalStorage

## 🎯 Utilisation

1. **Valider un champion** : Cliquez sur l'icône d'un champion pour le marquer comme validé (bordure verte + checkmark)
2. **Rechercher** : Tapez le nom d'un champion dans la barre de recherche pour filtrer
3. **Statistiques** : Voyez votre progression en haut de page (total, validés, restants, %)
4. **Exporter** : Sauvegardez vos données en JSON pour backup
5. **Importer** : Restaurez vos données depuis un fichier JSON
6. **Reset** : Réinitialisez toutes les validations (confirmation demandée)

## 📱 Captures d'écran

![Screenshot placeholder - Grid des champions avec filtres et stats]

## 🌐 Live Demo

Accès direct à l'application :

**https://lolarena-wins.awcapps.fr**

## 🛠️ Développement

### Structure du projet

```
lolarena-wins/
├── public/              # Assets statiques
│   └── lol-icon.svg     # Favicon
├── src/
│   ├── components/      # Composants React
│   │   ├── ChampionCard.tsx
│   │   ├── SearchBar.tsx
│   │   └── StatsBar.tsx
│   ├── types/           # Types TypeScript
│   │   └── champion.ts
│   ├── utils/           # Utilitaires
│   │   └── storage.ts   # LocalStorage + filtres
│   ├── App.tsx          # Composant principal
│   ├── main.tsx         # Entry point
│   └── index.css        # Styles globaux
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

### Scripts disponibles

```bash
npm run dev       # Dev server (port 5173)
npm run build     # Build production
npm run preview   # Preview du build
npm run lint      # Linter ESLint
```

## 📄 Changelog

Voir [CHANGELOG.md](./CHANGELOG.md) pour l'historique des modifications.

## 🤝 Contribution

Les contributions sont les bienvenues.

Merci de lire [CONTRIBUTING.md](./CONTRIBUTING.md) avant d'ouvrir une issue ou une pull request.

## 📝 License

Distribué sous licence MIT. Voir [LICENSE](./LICENSE).

**League of Legends** et **Riot Games** sont des marques déposées de Riot Games, Inc.  
Ce projet n'est pas affilié, associé, autorisé, endorsé par, ou de quelque manière que ce soit officiellement connecté avec Riot Games, Inc.

## 👤 Auteur

**BKH** (Remy Baroukh)  
- 🌐 [awcapps.fr](https://awcapps.fr)  
- 📺 YouTube: [@Rems84](https://youtube.com/@Rems84)

---

Made with ❤️ for League of Legends Arena players
