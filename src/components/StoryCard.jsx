import React from 'react';
import { Box } from '@mui/material';

const StoryCard = ({ children, borderColor }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        p: 4,
        bgcolor: 'white',
        boxShadow: '0 8px 28px rgba(0,0,0,0.10)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        borderLeft: '4px solid',
        borderColor: borderColor || 'secondary.main',
        '&:hover': {
          transform: 'translateX(10px)',
          boxShadow: '0 18px 40px rgba(0,0,0,0.14)',
        },
      }}
    >
      {children}
    </Box>
  );
};

export default StoryCard;
