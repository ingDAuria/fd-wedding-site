// Override per MuiOutlinedInput
export default {
  styleOverrides: {
    root: {
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      boxShadow: 'none',
    },
  },
};
