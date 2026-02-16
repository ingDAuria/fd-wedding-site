# 🎩 Sito Matrimonio Stile Grande Gatsby - Guida Rapida

## 📁 Contenuto del Progetto

Hai ricevuto un sito matrimonio completo con:
- ✅ 6 sezioni principali (Hero, Storia, Dettagli, Galleria, RSVP, Footer)
- ✅ 1 sezione bonus (Lista Nozze - opzionale)
- ✅ Tema Material-UI personalizzato
- ✅ Animazioni con Framer Motion
- ✅ Design responsive
- ✅ Palette colori elegante (nero, bianco, oro, verde)

## 🚀 Avvio Veloce

### 1. Installa Node.js
Se non lo hai già, scarica Node.js da: https://nodejs.org/

### 2. Apri il terminale nella cartella del progetto
```bash
cd wedding-site
```

### 3. Installa le dipendenze
```bash
npm install
```

### 4. Avvia il server di sviluppo
```bash
npm start
```

Il sito si aprirà automaticamente su `http://localhost:3000`

## 🎨 Personalizzazione Base

### Cambiare Nomi e Date
Cerca e sostituisci in tutti i file:
- `Marco & Giulia` → I tuoi nomi
- `M & G` → Le tue iniziali
- `15 Giugno 2026` → La tua data
- `15 GIUGNO 2026` → La tua data in maiuscolo

### Modificare Colori
Apri `src/theme.js` e cambia:
```javascript
primary.main: '#1a1a1a'    // Nero
secondary.main: '#C9B037'  // Oro
accent.main: '#2F5233'     // Verde
```

### Aggiungere Foto
In `src/components/GallerySection.jsx`, sostituisci gli URL delle immagini placeholder con i tuoi percorsi:
```javascript
const images = [
  {
    id: 1,
    src: '/images/tua-foto-1.jpg',  // ← Metti qui il percorso
    alt: 'Descrizione',
    span: 2,
  },
  // ... altre immagini
];
```

### Modificare Location Eventi
In `src/components/EventDetailsSection.jsx`:
```javascript
const events = [
  {
    title: 'Cerimonia',
    time: '15:30',
    location: 'Nome tua location',      // ← Cambia qui
    address: 'Indirizzo completo',      // ← Cambia qui
  },
  // ...
];
```

## 📂 Struttura File Principali

```
wedding-site/
├── src/
│   ├── components/           # Tutti i componenti React
│   │   ├── Navigation.jsx    # Menu di navigazione
│   │   ├── HeroSection.jsx   # Prima sezione (nomi + data)
│   │   ├── StorySection.jsx  # Storia della coppia
│   │   ├── EventDetailsSection.jsx  # Cerimonia + Ricevimento
│   │   ├── GallerySection.jsx       # Galleria foto
│   │   ├── RSVPSection.jsx          # Form conferme
│   │   ├── RegistrySection.jsx      # Lista nozze (opzionale)
│   │   └── Footer.jsx               # Footer
│   ├── utils/
│   │   └── animations.js     # Animazioni riutilizzabili
│   ├── App.js               # App principale
│   ├── theme.js             # Tema colori e font
│   └── index.js             # Entry point
├── public/
│   └── index.html           # HTML base
└── package.json             # Dipendenze
```

## 🎯 Sezioni del Sito

### 1. Hero (Prima Schermata)
- Iniziali stilizzate
- Nomi completi
- Data matrimonio
- Pulsante RSVP

### 2. La Nostra Storia
- Timeline con 4 eventi (personalizzabile)
- Card animate con colori alternati

### 3. Dettagli Evento
- Card Cerimonia (verde)
- Card Ricevimento (oro)
- Dress code

### 4. Galleria
- Griglia foto responsive
- Click per ingrandire
- Hashtag social

### 5. RSVP
- Form completo
- Gestione ospiti
- Esigenze alimentari
- Messaggio personale

### 6. Footer
- Social media
- Contatti
- Copyright

### 7. Lista Nozze (BONUS - Opzionale)
Non è inclusa di default. Per aggiungerla:

1. Apri `src/App.js`
2. Importa il componente:
```javascript
import RegistrySection from './components/RegistrySection';
```
3. Aggiungilo prima del Footer:
```javascript
<GallerySection />
<RegistrySection />  {/* ← Aggiungi qui */}
<RSVPSection />
<Footer />
```

## 🎨 Personalizzazioni Avanzate

### Aggiungere più eventi alla timeline
In `StorySection.jsx`, aggiungi oggetti all'array `timelineEvents`:
```javascript
const timelineEvents = [
  // ... eventi esistenti
  {
    year: '2025',
    title: 'Nuovo Evento',
    description: 'Descrizione evento...',
  },
];
```

### Cambiare font
In `public/index.html`, cambia il link Google Fonts e poi aggiorna `src/theme.js`

### Aggiungere più immagini in galleria
In `GallerySection.jsx`, aggiungi più oggetti all'array `images`

## 📱 Build per Produzione

Quando sei pronto a pubblicare:

```bash
npm run build
```

Questo crea una cartella `build/` ottimizzata per il deploy.

## 🌐 Deploy

Puoi pubblicare su:
- **Netlify**: Drag & drop della cartella `build`
- **Vercel**: Connetti repository GitHub
- **GitHub Pages**: Usa `npm install gh-pages` e configura
- **Firebase Hosting**: `firebase deploy`

## 💡 Suggerimenti

1. **Testing**: Prova il sito su desktop, tablet e mobile
2. **Performance**: Comprimi le immagini prima di caricarle
3. **SEO**: Modifica title e meta description in `public/index.html`
4. **Accessibilità**: Aggiungi alt text descrittivi alle immagini

## 🎨 Palette Colori Completa

```
Nero Elegante:    #1a1a1a
Oro:              #C9B037
Oro Chiaro:       #D4C052
Verde Scuro:      #2F5233
Verde Chiaro:     #4A7C50
Bianco:           #ffffff
Grigio Chiaro:    #fafafa
```

## 🔧 Risoluzione Problemi

**Errore "npm not found"**: Installa Node.js
**Errore durante npm install**: Prova `npm install --legacy-peer-deps`
**Porta 3000 occupata**: Il sito si aprirà automaticamente su porta 3001
**Immagini non si vedono**: Controlla che i percorsi siano corretti

## 📞 Supporto

Per problemi tecnici, consulta:
- Documentazione React: https://react.dev/
- Documentazione MUI: https://mui.com/
- Framer Motion: https://www.framer.com/motion/

---

**Buon lavoro e congratulazioni per il matrimonio! 💒✨**
