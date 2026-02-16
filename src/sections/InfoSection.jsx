import React from 'react';
import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../components/SectionHeader';
import img1 from '../assets/hotel.jpg';
import img2 from '../assets/dress.png';

const InfoSection = () => {
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

    return (
        <Grid container
            colSpacing={4}
            rowSpacing={8}
            alignItems="stretch"
            id="info"
            ref={ref}
            sx={{
                py: { xs: 6, md: 10 },
                px: { xs: 4, md: 12 },
            }}>

            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <motion.div variants={fadeIn}>
                    <Box sx={{ minWidth: { xs: '100%', md: 320 }, width: '100%' }}>
                        <SectionHeader title="Informazioni Utili" fadeVariant={fadeIn} />
                    </Box>
                </motion.div>
            </Grid>

            <Grid item xs={12} md={6} lg={6}
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
            >
                <motion.div variants={fadeIn}>
                    <Stack>
                        <Typography variant="h5" sx={{ mb: 1 }}>Parcheggio & Hotel</Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                            Parcheggi consigliati: Parcheggio Santa Maria (10 min a piedi) e Garage Duomo (15 min). Per gli ospiti provenienti da fuori città abbiamo bloccato alcune camere presso Hotel Firenze Centrale — contattateci per i dettagli e tariffe dedicate.
                        </Typography>

                        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Come raggiungere la chiesa</Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            La Basilica si trova in Piazza del Duomo. Consigliamo di arrivare almeno 30 minuti prima. Se venite in auto, seguite le indicazioni per il centro storico e lasciate le auto nei parcheggi indicati.
                        </Typography>
                    </Stack>
                </motion.div>
            </Grid>

            <Grid item xs={12} md={6} lg={6}
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
            >
                <motion.div variants={fadeIn}>
                    <Box sx={{ width: '70%', mx: 'auto', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', position: 'relative' }}>
                        <Box component="img" src={img1} alt="Parcheggio" sx={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
                        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0))', pointerEvents: 'none' }} />
                    </Box>
                </motion.div>
            </Grid>

            <Grid item xs={12} md={6} lg={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', order: { xs: 5, md: 4 } }}>
                <motion.div variants={fadeIn}>
                    <Box component="img" src={img2} alt="Hotel" sx={{ width: '70%', height: 'auto', objectFit: 'cover', display: 'block', mx: 'auto' }} />
                </motion.div>
            </Grid>

            <Grid item xs={12} md={6} lg={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', order: { xs: 4, md: 5 } }}>
                <motion.div variants={fadeIn}>
                    <Stack>
                        <Typography variant="h5" sx={{ mb: 1 }}>Dress Code</Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            Il dress code è "Elegante/Formale". Per gli uomini giacca e cravatta; per le donne abiti lunghi o midi eleganti. Vi chiediamo di evitare abiti bianchi per lasciare il bianco agli sposi.
                        </Typography>
                    </Stack>
                </motion.div>
            </Grid>
        </Grid>
    );
};

export default InfoSection;
