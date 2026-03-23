import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Countdown from '../components/Countdown';
import logo from '../assets/logo.png';
import { animationVariants, useInView } from '../utils/animations';

const HeroSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Stack
      id="home"
      ref={ref}
      spacing={2}
      sx={(theme) => ({
        pt: '56px',
        pb: '56px',
        minHeight: '100vh', // Adjust for AppBar height
        maxWidth: 'lg',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // pastel antique paper: fixed warm beige color
        color: theme.palette.text.primary,
      })}
    >


      {/* Logo from public assets */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants.fadeInUp}
      >
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
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants.fadeInUp}
      >
        <Typography variant="h1" sx={{ textAlign: 'center', color: 'text.primary', fontStyle: 'italic', fontFamily: '"Playfair Display", serif' }}>
          Daniela & Federico
        </Typography>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants.fadeInUp}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 300, color: 'text.primary', fontFamily: '"Lato", sans-serif' }}>
          Celebriamo il nostro amore
        </Typography>
      </motion.div>

      {/* Date */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants.fadeInUp}
      >
        <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, color: 'text.primary', fontWeight: 600, fontFamily: '"Lato", sans-serif', letterSpacing: '0.15em', textAlign: 'center' }}>
          14 SETTEMBRE 2026
        </Typography>
      </motion.div>

      {/* Countdown */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants.fadeInScale}
      >
        <Countdown />
      </motion.div>
      {/* Bottom decoration */}
    </Stack>

  );
};

export default HeroSection;
