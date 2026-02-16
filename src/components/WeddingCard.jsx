import React from 'react';
import { Box } from '@mui/material';

const WeddingCard = ({ children, imageSrc, imageAlt = '', sx = {}, position = 'relative', overflow = 'hidden', bg = 'background.paper' }) => {
  return (
    <Box
      sx={{
        overflow: overflow,
        position: position,
        width: '100%',
        height: '100%',
        minHeight: 300,
        maxHeight: 600,
        backgroundColor: bg,
        borderTopLeftRadius: '999px',
        borderTopRightRadius: '999px',
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        boxShadow: '0 12px 30px rgba(0,0,0,0.14)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 22px 50px rgba(0,0,0,0.18)'
        },
        ...sx,
      }}
    >
      {imageSrc ? (
        <Box
          component="img"
          src={imageSrc}
          alt={imageAlt}
          sx={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
        />
      ) : (
        children
      )}
    </Box>
  );
};

export default WeddingCard;
