// Override per MuiCssBaseline
import palette from '../palette';

export default {
  styleOverrides: {
    body: {
      backgroundColor: palette.background.default,
      minHeight: '100vh',
    },
    '#root': {
      minHeight: '100vh',
    },
    p: {
      textAlign: 'justify',
    },
  },
};
