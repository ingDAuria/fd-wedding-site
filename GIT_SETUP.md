# 📦 Repository Git Creato!

Il repository Git locale è stato inizializzato con successo! ✅

## 📊 Stato Attuale

- ✅ Repository Git inizializzato
- ✅ Tutti i file committati
- ✅ Branch principale: `main`
- ✅ Commit iniziale creato (hash: 4558054)

## 🚀 Come Caricare su GitHub/GitLab/Bitbucket

### Opzione 1: GitHub (Consigliato)

1. **Crea un nuovo repository su GitHub**
   - Vai su https://github.com/new
   - Nome: `wedding-site` (o quello che preferisci)
   - **NON** inizializzare con README, .gitignore o license
   - Clicca "Create repository"

2. **Collega il repository locale a GitHub**
   ```bash
   cd wedding-site
   git remote add origin https://github.com/TUO-USERNAME/wedding-site.git
   git push -u origin main
   ```

3. **Se richiesto, autenticati con**
   - Personal Access Token (consigliato)
   - O SSH key

### Opzione 2: GitLab

1. **Crea un nuovo progetto su GitLab**
   - Vai su https://gitlab.com/projects/new
   - Crea un progetto vuoto

2. **Collega e carica**
   ```bash
   cd wedding-site
   git remote add origin https://gitlab.com/TUO-USERNAME/wedding-site.git
   git push -u origin main
   ```

### Opzione 3: Bitbucket

1. **Crea un nuovo repository su Bitbucket**
   - Vai su https://bitbucket.org/repo/create

2. **Collega e carica**
   ```bash
   cd wedding-site
   git remote add origin https://bitbucket.org/TUO-USERNAME/wedding-site.git
   git push -u origin main
   ```

## 📝 Comandi Git Utili

### Controllare lo stato
```bash
git status
```

### Vedere la cronologia dei commit
```bash
git log --oneline
```

### Aggiungere modifiche
```bash
git add .
git commit -m "Descrizione modifiche"
git push
```

### Creare un nuovo branch
```bash
git checkout -b nome-branch
```

### Tornare al branch main
```bash
git checkout main
```

## 🔐 Autenticazione GitHub (se necessario)

### Metodo 1: Personal Access Token

1. Vai su GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Seleziona scopes: `repo` (tutti)
4. Copia il token
5. Quando fai `git push`, usa il token come password

### Metodo 2: SSH (più sicuro)

1. Genera una chiave SSH:
   ```bash
   ssh-keygen -t ed25519 -C "tua-email@example.com"
   ```

2. Aggiungi la chiave a GitHub:
   - Copia il contenuto di `~/.ssh/id_ed25519.pub`
   - GitHub → Settings → SSH and GPG keys → New SSH key

3. Usa URL SSH invece di HTTPS:
   ```bash
   git remote set-url origin git@github.com:TUO-USERNAME/wedding-site.git
   ```

## 📦 File nel Repository

- ✅ 8 componenti React
- ✅ Tema personalizzato
- ✅ Utilities per animazioni
- ✅ Configurazione completa
- ✅ README e documentazione
- ✅ .gitignore (node_modules escluso)

## 🎯 Prossimi Passi

1. Crea il repository remoto (GitHub/GitLab/Bitbucket)
2. Collega il repository locale
3. Fai il primo push
4. (Opzionale) Configura GitHub Pages per deploy automatico

## 💡 Suggerimento per GitHub Pages

Se usi GitHub, puoi hostare il sito gratuitamente:

1. Installa gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Aggiungi in `package.json`:
   ```json
   "homepage": "https://TUO-USERNAME.github.io/wedding-site",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

Il sito sarà live su: `https://TUO-USERNAME.github.io/wedding-site`

---

**Buon lavoro! 🚀**
