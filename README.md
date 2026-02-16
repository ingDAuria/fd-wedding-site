# Sito Matrimonio - Stile Grande Gatsby

Un elegante sito matrimonio vetrina in React con animazioni fluide, design ispirato al Grande Gatsby e Material-UI personalizzato.

## 🎨 Caratteristiche del Design

- **Palette colori**: Bianco, nero, oro (#C9B037) e verde elegante (#2F5233)
- **Tipografia**: Playfair Display per i titoli, Lato per il corpo
- **Layout**: Sezioni a pagina intera con scroll fluido
- **Animazioni**: Framer Motion per transizioni eleganti
- **Responsive**: Ottimizzato per desktop, tablet e mobile

## 📦 Struttura del Progetto

```
wedding-site/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.jsx         # Barra di navigazione con scroll
│   │   ├── HeroSection.jsx        # Sezione hero iniziale
│   │   ├── StorySection.jsx       # Storia della coppia
│   │   ├── EventDetailsSection.jsx # Dettagli cerimonia e ricevimento
│   │   ├── GallerySection.jsx     # Galleria fotografica
│   │   ├── RSVPSection.jsx        # Form conferma presenza
│   │   └── Footer.jsx             # Footer con contatti
│   ├── App.js                     # Componente principale
│   ├── index.js                   # Entry point
│   └── theme.js                   # Tema MUI personalizzato
└── package.json
```

## 🚀 Installazione e Avvio

1. **Installa le dipendenze**:
```bash
npm install
```

2. **Avvia il server di sviluppo**:
```bash
npm start
```

Il sito sarà disponibile su `http://localhost:3000`

## 🎯 Sezioni del Sito

### 1. Hero Section
- Nomi degli sposi con iniziali stilizzate
- Data del matrimonio
- CTA per conferma presenza
- Indicatore scroll animato

### 2. La Nostra Storia
- Timeline degli eventi principali
- Layout a griglia con card animate
- Elementi decorativi oro e verde

### 3. Dettagli dell'Evento
- Card per cerimonia e ricevimento
- Orari e location
- Dress code elegante

### 4. Galleria
- Griglia fotografica responsive
- Modal per visualizzazione full-screen
- Hashtag social media

### 5. RSVP
- Form completo per conferma presenza
- Validazione campi
- Gestione esigenze alimentari
- Feedback visivo

### 6. Footer
- Link social media
- Informazioni di contatto
- Copyright

## 🎨 Personalizzazione del Tema

Il tema MUI è configurato in `src/theme.js`:

```javascript
// Colori principali
primary: '#1a1a1a'    // Nero elegante
secondary: '#C9B037'  // Oro
accent: '#2F5233'     // Verde scuro

// Tipografia
Titoli: 'Playfair Display'
Corpo: 'Lato'
```

## 🔧 Componenti MUI Personalizzati

- **Button**: Bordi squadrati, animazioni hover
- **Card**: Ombre eleganti, transizioni fluide
- **TextField**: Input con stile minimal

## 📱 Responsive Design

Breakpoints ottimizzati per:
- Mobile: < 600px
- Tablet: 600px - 960px
- Desktop: > 960px

## 🎭 Animazioni

Utilizzo di Framer Motion per:
- Fade in/out
- Slide up/down
- Scale effects
- Stagger animations
- Scroll-triggered animations

## 📝 Personalizzazione Contenuti

### Modificare nomi e date:
Cerca e sostituisci in tutti i file:
- `Marco & Giulia` con i tuoi nomi
- `15 Giugno 2026` con la tua data
- `M & G` con le tue iniziali

### Aggiungere immagini:
Sostituisci gli URL placeholder in `GallerySection.jsx` con le tue foto

### Modificare location:
Aggiorna i dettagli in `EventDetailsSection.jsx`

## 🌐 Deploy

### Build di produzione:
```bash
npm run build
```

Il sito può essere deployato su:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## 📦 Dipendenze Principali

- React 18.2
- Material-UI 5.14
- Framer Motion 10.16
- React Scroll 1.9

## 🎨 Best Practices Implementate

- Componenti modulari e riutilizzabili
- Separazione delle responsabilità
- Responsive design mobile-first
- Accessibilità (ARIA labels)
- Performance ottimizzate
- SEO-friendly

## 📄 Licenza

Questo progetto è un template personalizzabile per matrimoni.

---

**Buon matrimonio! 💒✨**
