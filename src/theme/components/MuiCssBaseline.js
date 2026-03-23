// Override per MuiCssBaseline
import palette from '../palette';

const MuiCssBaseline = {
  styleOverrides: {
    body: {
      backgroundColor: palette.background.default,
      minHeight: '100vh',
      width: '100%',
      // Scrollbar styling
      scrollbarWidth: 'thin',
      scrollbarColor: `${palette.secondary.main} transparent`,
      '&::-webkit-scrollbar': {
        width: '10px',
      },
      '&::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        background: palette.secondary.main,
        borderRadius: '4px',
        '&:hover': {
          background: palette.secondary.dark,
        },
      },
    },
    '#root': {
      minHeight: '100vh',
      width: '100%'
    },
    p: {
      textAlign: 'justify',
    },
  },
};

export default MuiCssBaseline;
