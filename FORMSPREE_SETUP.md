# 📧 Configuration du Formulaire de Contact

Le formulaire de contact est configuré pour envoyer les messages directement à votre email via **Formspree**.

## 🔧 Configuration Actuelle

Le formulaire utilise actuellement un ID Formspree placeholder. Vous devez le remplacer par le vôtre.

## ✅ Étapes de Configuration

### Option 1: Formspree (RECOMMANDÉ - Gratuit jusqu'à 50 emails/mois)

1. **Créer un compte Formspree**
   - Allez sur [formspree.io](https://formspree.io)
   - Créez un compte gratuit avec votre email: **KaneAbdoulPro1@outlook.com**

2. **Créer un nouveau formulaire**
   - Cliquez sur "+ New Form"
   - Nom: "Portfolio Contact"
   - Email de réception: **KaneAbdoulPro1@outlook.com**
   - Créez le formulaire

3. **Copier votre ID Formspree**
   - Vous verrez quelque chose comme: `https://formspree.io/f/xdkozqkz`
   - Copiez l'ID: `xdkozqkz`

4. **Mettre à jour le code**
   
   Ouvrez `src/components/Contact.jsx` et trouvez cette ligne (ligne ~44):
   
   ```javascript
   const response = await fetch('https://formspree.io/f/xdkozqkz', {
   ```
   
   Remplacez `xdkozqkz` par votre ID Formspree.

5. **Tester**
   - Redémarrez le serveur: `npm run dev`
   - Remplissez le formulaire et envoyez un message test
   - Vérifiez votre boîte email!

### Option 2: Web3Forms (Alternative gratuite)

1. **Obtenir une clé API**
   - Allez sur [web3forms.com](https://web3forms.com)
   - Entrez votre email: **KaneAbdoulPro1@outlook.com**
   - Recevez votre Access Key par email

2. **Modifier le code**
   
   Dans `src/components/Contact.jsx`, remplacez la fonction `handleSubmit`:
   
   ```javascript
   const handleSubmit = async (e) => {
     e.preventDefault();
     setStatus('sending');

     try {
       const response = await fetch('https://api.web3forms.com/submit', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           access_key: 'VOTRE_CLE_WEB3FORMS_ICI',
           name: formData.name,
           email: formData.email,
           subject: formData.subject,
           message: formData.message,
         }),
       });

       if (response.ok) {
         setStatus('success');
         setFormData({ name: '', email: '', subject: '', message: '' });
         setTimeout(() => setStatus(''), 5000);
       } else {
         setStatus('error');
       }
     } catch (error) {
       setStatus('error');
     }
   };
   ```

### Option 3: EmailJS

1. Créez un compte sur [emailjs.com](https://www.emailjs.com/)
2. Configurez votre service email (Outlook/Gmail)
3. Installez le package: `npm install @emailjs/browser`
4. Suivez leur documentation pour l'intégration

## 🔒 Sécurité

- ✅ Formspree et Web3Forms gèrent automatiquement le spam
- ✅ Validation côté client déjà implémentée
- ✅ Messages d'erreur en français
- ✅ Confirmation visuelle de l'envoi

## 📧 Test du Formulaire

Après configuration, testez avec:
- **Nom**: Test Portfolio
- **Email**: votre-email-test@example.com
- **Sujet**: Test de formulaire
- **Message**: Ceci est un test d'envoi depuis le portfolio

Vous devriez recevoir l'email à: **KaneAbdoulPro1@outlook.com**

## 🎨 Personnalisation

Le formulaire inclut:
- ✅ Validation des champs obligatoires
- ✅ Messages de succès/erreur
- ✅ Animation d'envoi
- ✅ Design responsive
- ✅ Réinitialisation automatique après envoi

## ⚠️ Important

**Par défaut, un ID Formspree temporaire est utilisé. Vous DEVEZ le remplacer par le vôtre pour recevoir les emails!**

---

**Temps de configuration**: 5 minutes
**Coût**: Gratuit (jusqu'à 50 emails/mois avec Formspree)

