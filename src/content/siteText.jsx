import ChurchIcon from '@mui/icons-material/Church';
import RestaurantIcon from '@mui/icons-material/Restaurant';

// Converted from siteText.json
export const hero = {
    names: "Federico & Daniela",
    subtitle: "Celebriamo il nostro amore",
    date: "14 SETTEMBRE 2026",
};

export const welcome = {
    title: "Benvenuti",
    lines: [
        "Il conto alla rovescia è ufficialmente iniziato!",
        "Siamo entusiasti di condividere con voi il giorno più importante della nostra vita. Qui troverete tutte le informazioni sul nostro matrimonio, dalla cerimonia al ricevimento e tanti dettagli utili per festeggiare insieme a noi.",
        "Non vediamo l\u2019ora di vedervi!",
    ],
};

export const story = {
    title: "La Nostra Storia",
    subtitle: '"In ogni grande amore c\'è una grande storia"',
    timeline: [
        {
            year: "2017",
            title: "Il Primo Incontro",
            description: `Ottobre 2017, Università Cattolica di Piacenza.
Ci siamo conosciuti tra lezioni, corridoi e pause caffè… e diciamo la verità: all'inizio non è stato proprio colpo di fulmine.
Non ci sopportavamo molto.
Caratteri forti, opinioni diverse, qualche battuta di troppo.
Poi, quasi senza accorgercene, qualcosa è cambiato.
Uno sguardo in più, una chiacchierata più lunga del solito, una complicità che cresceva giorno dopo giorno.
Da dicembre 2017 non ci siamo più lasciati.
E tutto è iniziato proprio lì.`,
        },
        {
            year: "2020",
            title: "Proposta",
            description: `Parigi, la città tanto amata da Daniela.
Una cena romantica al ristorante Les Ombres, con la Tour Eiffel illuminata davanti a noi.
Tra luci, emozione e qualche battito di cuore accelerato, Federico ha fatto la domanda più importante della sua vita.
E Daniela ha detto sì.
È stato un momento sospeso nel tempo, sotto il cielo di Parigi, che porteremo per sempre nel cuore.`,
        },
        {
            year: "2026",
            title: "Il Nostro Giorno",
            description: `Il 14 settembre 2026 sarà il giorno in cui prometteremo di sceglierci per tutta la vita.
Non vediamo l\u2019ora di condividere con voi sorrisi, emozioni, abbracci e ogni singolo momento di questa giornata così speciale.
La vostra presenza sarà il regalo più bello.`,
        },
    ],
};

export const eventDetails = {
    dateHeading: "14 Settembre 2026",
    title: "Dettagli dell'Evento",
    subtitle: "Sarà un onore condividere con voi questo giorno speciale",
    events: [
        {
            title: "Cerimonia",
            icon: <ChurchIcon sx={{ fontSize: 60, color: "secondary.main" }} />,
            time: "10:30",
            location: "Basilica di San Nicolò Lecco",
            address: "Vicolo Canonica 4, 23900 Lecco LC",
        },
        {
            title: "Ricevimento",
            icon: <RestaurantIcon sx={{ fontSize: 60, color: "secondary.main" }} />,
            time: "13:00",
            location: " Villa Dolceacqua",
            address: "Via per Galbiate 41, 23848 Oggiono LC",
        },
    ],
};

export const info = {

    info1: {
        title: "Basilica di San Nicolò (Lecco)",
        description: `Per chi arriverà in auto, sono disponibili tre parcheggi comunali ai piedi della chiesa, con ampia disponibilità di posti.
Al termine della cerimonia ci sarà il tradizionale lancio del riso.
Successivamente, saremo accompagnati a piedi fino al lago, dove saliremo su una barca per scattare le nostre foto sullo sfondo del meraviglioso panorama lecchese.`,
    },
    info2: {
        title: "Villa Dolceacqua",
        description: `Una splendida villa immersa nel verde, affacciata sul lago, che farà da cornice alla nostra festa.
Per tutti gli invitati sarà possibile parcheggiare direttamente all’interno della villa, dove sono disponibili posti auto sufficienti.`,
    },
    dressCode: {
        title: "Dress Code",
        description: "Il dress code \u00e8 \"Elegante/Formale\". Per gli uomini giacca e cravatta; per le donne abiti lunghi o midi eleganti. Vi chiediamo di evitare abiti bianchi per lasciare il bianco agli sposi."
    }
};

export const gift = {
    title: "Lista Nozze",
    subtitle: "Festeggiare con voi sarà il dono più prezioso, ma se desiderate farci un regalo potete farlo qui contribuendo al viaggio più bello: il prossimo viaggio insieme.",
    account: {
        owner: "Federico Lanza Silveri e Daniela Pizzocheri",
        bank: "Fideuram",
        reason: "Regalo di nozze Federico e Daniela da [Nome Cognome invitato]",
        iban: "IT96V0329601601000065085128",
    },
    thanks: "Grazie di cuore per il vostro affetto e per rendere questo giorno ancora più speciale.",
};

export const rsvp = {
    title: "Conferma la tua Presenza",
    subtitle: "La vostra presenza renderà questo giorno ancora più speciale. Vi preghiamo di confermare entro il 30° Giugno 2026.",
    snackbarMessage: "Grazie! Abbiamo ricevuto la tua conferma.",
    form: {
        nameLabel: "Nome Completo",
        emailLabel: "Email",
        phoneLabel: "Telefono",
        guestsLabel: "Numero di Ospiti",
        attendanceLabel: "Parteciperai?",
        attendanceYes: "Sì, sarò presente",
        attendanceNo: "Non posso partecipare",
        dietaryPlaceholder: "Es: Vegetariano, Celiaco, Allergie...",
        messagePlaceholder: "Lasciaci un messaggio o un augurio speciale...",
        submitButton: "Invia Conferma",
    },
};

export const registry = {
    title: "Lista Nozze",
    description: "Abbiamo creato una lista nozze presso i seguenti negozi",
    note: "La vostra presenza è il regalo più grande che potremmo desiderare. Questi sono solo suggerimenti per chi desidera farci un pensiero.",
};

export const site = {
    title: "F & D",
    tagline: "Non vediamo l'ora di celebrare con voi il nostro giorno speciale",
    contactEmail: "federicosilveri@hotmail.it",
    phone: "+39 393 246 8718",
    copyright: "© 2026 Federico & Daniela",
    madeWith: "Made with",
    social: {
        instagram: "",
        facebook: "",
        email: "",
    },
};

const siteText = {
    hero,
    welcome,
    story,
    eventDetails,
    info,
    gift,
    rsvp,
    registry,
    site,
};

export default siteText;
