import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import separator from '../assets/separatore.png';

const SectionHeader = ({ title, subtitle, variant = 'h2', fadeVariant }) => {
  return (
    <Box textAlign="center" mb={6}>
      <motion.div variants={fadeVariant}>
        <Typography variant={variant} gutterBottom>
          {title}
        </Typography>
      </motion.div>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Box component="img" src={separator} alt="separator" sx={{ width: 125, height: 'auto', display: 'block' }} />
      </Box>

            {subtitle && (
        <Box sx={{ maxWidth: 700, margin: '12px auto 0' }}>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {subtitle}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default SectionHeader;
