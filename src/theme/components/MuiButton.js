// Override per MuiButton
export default {
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
};
