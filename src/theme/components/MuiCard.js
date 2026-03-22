// Override per MuiCard
export default {
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
};
