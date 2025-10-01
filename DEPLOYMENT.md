# 🚀 Guide de Déploiement

Ce guide explique comment déployer votre portfolio sur GitHub Pages et d'autres plateformes.

## 📝 Avant de commencer

### 1. Ajouter votre photo de profil

Placez votre photo de profil dans le dossier `public/images/` avec le nom `profile.jpg`

```bash
cp /chemin/vers/votre/photo.jpg public/images/profile.jpg
```

### 2. Mettre à jour les liens

Dans `PROFILE_README.md`, remplacez:
- `votre-username` par votre nom d'utilisateur GitHub
- Les URLs de LinkedIn et portfolio par vos liens personnels

## 🌐 Déploiement sur GitHub Pages

### Méthode 1: Avec GitHub Actions (Recommandé)

1. **Installer gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Ajouter les scripts dans package.json**:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. **Configurer vite.config.js**:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Remplacez par le nom de votre repo
})
```

4. **Déployer**:
```bash
npm run deploy
```

### Méthode 2: Configuration manuelle

1. **Créer un repository sur GitHub**:
   - Allez sur github.com
   - Créez un nouveau repository nommé "Portfolio"
   - Ne pas initialiser avec README (déjà fait)

2. **Ajouter le remote et pousser**:
```bash
git remote add origin https://github.com/votre-username/Portfolio.git
git branch -M main
git push -u origin main
```

3. **Activer GitHub Pages**:
   - Allez dans Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Save

## 🚀 Déploiement sur Vercel (Alternative recommandée)

1. **Installer Vercel CLI**:
```bash
npm i -g vercel
```

2. **Se connecter et déployer**:
```bash
vercel login
vercel
```

3. **Configuration automatique**: Vercel détectera automatiquement Vite

## 🌟 Déploiement sur Netlify

1. **Créer un fichier netlify.toml**:
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

2. **Déployer via CLI**:
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## 📱 README pour votre profil GitHub

Le fichier `PROFILE_README.md` contient le markdown pour votre profil GitHub.

### Pour l'utiliser:

1. Créez un repository avec le même nom que votre username GitHub
2. Créez un fichier `README.md` dans ce repository
3. Copiez le contenu de `PROFILE_README.md`
4. Remplacez `votre-username` par votre nom d'utilisateur
5. Commitez et poussez

```bash
# Exemple:
git clone https://github.com/votre-username/votre-username.git
cd votre-username
cp ../Portfolio/PROFILE_README.md README.md
# Éditez le fichier pour remplacer les placeholders
git add README.md
git commit -m "Add profile README"
git push
```

## ⚙️ Variables d'environnement

Si vous avez besoin d'ajouter des variables d'environnement:

1. Créez un fichier `.env.local`:
```
VITE_EMAIL=votre@email.com
VITE_PHONE=0123456789
```

2. Utilisez-les dans votre code:
```javascript
const email = import.meta.env.VITE_EMAIL
```

3. Configurez-les sur votre plateforme de déploiement

## 🔧 Optimisations avant déploiement

```bash
# Vérifier le build
npm run build
npm run preview

# Optimiser les images
# Utilisez des images optimisées (WebP, compression)

# Minification automatique avec Vite
# Déjà configuré par défaut
```

## 📊 Analytics (Optionnel)

Pour ajouter Google Analytics:

1. Installez le package:
```bash
npm install react-ga4
```

2. Configurez dans `main.jsx`

## 🆘 Résolution de problèmes

### Le site ne s'affiche pas correctement
- Vérifiez le `base` dans `vite.config.js`
- Assurez-vous que les chemins sont corrects

### Les images ne s'affichent pas
- Vérifiez que `profile.jpg` est dans `public/images/`
- Les fichiers dans `public/` doivent être référencés avec `/images/profile.jpg`

### Erreurs de build
```bash
npm run lint
npm run build
```

## ✅ Checklist de déploiement

- [ ] Photo de profil ajoutée dans `public/images/profile.jpg`
- [ ] URLs personnelles mises à jour
- [ ] Repository GitHub créé
- [ ] Code poussé sur GitHub
- [ ] Plateforme de déploiement configurée
- [ ] Site testé et fonctionnel
- [ ] README de profil GitHub créé
- [ ] Domaine personnalisé configuré (optionnel)

---

🎉 Votre portfolio est maintenant en ligne !

