import React from 'react';
import { Box, Stack, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import welcomeImg from '../assets/welcome.png';
import { animationVariants, useInView } from '../utils/animations';

const WelcomeSection = () => {
  const [ref, inView] = useInView({
        threshold: 0.02,
  });

  return (
    <Box
      id="welcome"
      ref={ref}
      p={{ xs: 4, md: 8 }}
      sx={{
        minHeight: '100vh',
        maxWidth: 'lg',
      }}
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants.staggerContainer}
      >
        <Grid container spacing={6} alignItems="center">

          <Grid item xs={12} md={6} width={'100%'} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <motion.div variants={animationVariants.fadeInUp}>
              <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
                Benvenuti
              </Typography>

              <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.8 }}>
                Il conto alla rovescia è ufficialmente iniziato!
              </Typography>

              <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.8 }}>
                Siamo entusiasti di condividere con voi il giorno più importante della nostra vita. Qui troverete tutte le informazioni sul nostro matrimonio, dalla cerimonia al ricevimento e tanti dettagli utili per festeggiare insieme a noi.
              </Typography>

              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Non vediamo l’ora di vedervi!
              </Typography>
            </Stack>            </motion.div>          </Grid>

          <Grid item xs={12} md={6} width="100%" >
            <motion.div variants={animationVariants.fadeInScale}>
              <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: { xs: 'center', md: 'center' }
              }}>
                <Box
                  component="img"
                  src={welcomeImg}
                  alt="Benvenuti"
                  sx={{ 
                    width: '100%', 
                    display: 'block', 
                    objectFit: 'cover'
                   }}
                />
              </Box>
            </motion.div>
          </Grid>

        </Grid>
      </motion.div>
    </Box>
  );
};

export default WelcomeSection;
