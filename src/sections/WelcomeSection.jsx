import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import welcomeImg from '../assets/lake.png';
import WeddingCard from '../components/WeddingCard';

const WelcomeSection = () => {
  return (
    <Box
      id="welcome"
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 6, md: 10 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
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
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                <WeddingCard imageSrc={welcomeImg} imageAlt="Benvenuti" />
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WelcomeSection;
