import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D1D5D2', // Nero elegante
      light: '#ffffff',
      dark: '#000000',
      contrastText: '#000000',
    },
    secondary: {
      main: '#4A5D23', // Oro
      light: '#D1D5D2',
      dark: '#000000',
      contrastText: '#000000',
    },
    accent: {
      main: '#D1D5D2', // Verde scuro elegante
      light: '#4A7C50',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fffaf3',
      paper: '#f5ead0',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#1a1a1a',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Georgia", serif',
    h1: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 700,
      fontSize: '4.5rem',
      letterSpacing: '0.02em',
      color: '#1a1a1a',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 600,
      fontSize: '3.5rem',
      letterSpacing: '0.01em',
      color: '#1a1a1a',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      letterSpacing: '0.01em',
            color: '#1a1a1a',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 500,
      fontSize: '2rem',
            color: '#1a1a1a',
      letterSpacing: '0.01em',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '1.125rem',
      lineHeight: 1.8,
      letterSpacing: '0.02em',
            color: '#1a1a1a',
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '1rem',
      lineHeight: 1.6,
            color: '#1a1a1a',
      letterSpacing: '0.02em',
    },
    button: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      letterSpacing: '0.1em',
            color: '#1a1a1a',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: '12px 40px',
          fontSize: '0.875rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});

// Nota: l'augmentazione dei tipi (declare module) è TypeScript-only.
// Rimosso per evitare errori in file JavaScript.

// Applica override globali: imposta lo sfondo di `body` e il background di `Paper`
// Genera una sfumatura leggera basata su `palette.background.default`
const hexToRgb = (hex) => {
  const sanitized = hex.replace('#', '');
  const bigint = parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

const baseBg = theme.palette.background.default || '#4A5D23';
const rgb = hexToRgb(baseBg);
const subtleGradient = `linear-gradient(180deg, rgba(${rgb}, 0.03) 0%, rgba(${rgb}, 0.08) 100%)`;

theme.components = {
  ...theme.components,
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: baseBg,
        backgroundImage: subtleGradient,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        color: theme.palette.text.primary,
        minHeight: '100vh',
      },
      '#root': {
        minHeight: '100vh',
        backgroundColor: baseBg,
        backgroundImage: subtleGradient,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.background.paper,
      },
    },
  },
};

export default theme;
