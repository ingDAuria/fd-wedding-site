import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Countdown from '../components/Countdown';
import logo from '../assets/logo.png';

const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <Stack
      id="home"
      spacing={2}
      sx={(theme) => ({
        pt: '56px',
        minHeight: 'calc(100vh - 56px)', // Adjust for AppBar height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // pastel antique paper: fixed warm beige color
        color: theme.palette.text.primary,
      })}
    >


      {/* Logo from public assets */}
      <motion.div variants={fadeInUp}>
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{
            width: { xs: 220, md: 300 },
            height: 'auto',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </motion.div>

        {/* Names */}
        <motion.div variants={fadeInUp}>
          <Typography variant="h1" sx={{ textAlign: 'center', color: 'text.primary', fontStyle: 'italic', fontFamily: '"Playfair Display", serif' }}>
            Federico e Daniela
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={fadeInUp}>
          <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 300, color: 'text.primary', fontFamily: '"Lato", sans-serif' }}>
            Celebriamo il nostro amore
          </Typography>
        </motion.div>

        {/* Date */}
        <motion.div variants={fadeInUp}>
          <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, color: 'text.primary', fontWeight: 600, fontFamily: '"Lato", sans-serif', letterSpacing: '0.15em', textAlign: 'center' }}>
            14 SETTEMBRE 2026
          </Typography>
        </motion.div>

        {/* Countdown */}
        <Countdown />
        {/* Bottom decoration */}
      </Stack>

  );
};

export default HeroSection;
