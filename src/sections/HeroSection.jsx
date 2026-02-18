import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Countdown from '../components/Countdown';
import  logo from '../assets/logo.png';

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
    <Box
      id="home"
      sx={(theme) => ({
        height: { xs: 'calc(100vh - 64px)', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        // pastel antique paper: fixed warm beige color
        color: theme.palette.text.primary,
        // remove small-square texture overlay (was creating visible squares)
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'none',
          pointerEvents: 'none',
        },
      })}
    >
      <Container maxWidth="lg">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <Box textAlign="center">
            {/* Top decoration */}
            <motion.div variants={fadeInUp}>
              <Box sx={{ width: 80, height: 1, bgcolor: 'secondary.main', opacity: 0.9, margin: '0 auto 30px' }} />
            </motion.div>

            {/* Logo from public assets */}
            <motion.div variants={fadeInUp}>
              <Box
                component="img"
                src={logo}
                alt="logo"
                sx={{
                  width: { xs: 180, md: 240 },
                  height: 'auto',
                  mb: 2,
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </motion.div>

            {/* Names */}
            <motion.div variants={fadeInUp}>
              <Typography variant="h1" sx={{ mb: 3, color: 'text.primary', fontStyle: 'italic', fontFamily: '"Playfair Display", serif' }}>
                Federico e Daniela
              </Typography>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" sx={{ fontWeight: 300, color: 'text.primary', mb: 1, fontFamily: '"Lato", sans-serif' }}>
                Celebriamo il nostro amore
              </Typography>
            </motion.div>

            {/* Date */}
            <motion.div variants={fadeInUp}>
              <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, color: 'text.primary', fontWeight: 600, mb: 5, fontFamily: '"Lato", sans-serif', letterSpacing: '0.15em' }}>
                14 SETTEMBRE 2026
              </Typography>
            </motion.div>

            {/* Countdown */}
             <Countdown />
            {/* Bottom decoration */}
            <motion.div variants={fadeInUp}>
              <Box sx={{ width: 80, height: 1, bgcolor: 'secondary.main', opacity: 0.9, margin: '0 auto 40px' }} />
            </motion.div>

            {/* CTA removed per request */}
          </Box>
        </motion.div>
      </Container>


    </Box>
  );
};

export default HeroSection;
