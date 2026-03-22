// Typography MUI separata
const typography = {
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
};

export default typography;
