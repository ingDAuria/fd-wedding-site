import React from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../components/SectionHeader';
import img1 from '../assets/hotel.jpg';
import img2 from '../assets/dress.png';
import img3 from '../assets/church.jpeg';
import { info } from '../content/siteText.jsx';

const InfoSection = () => {
    const [ref] = useInView({ threshold: 0.2, triggerOnce: true });

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
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', order: { xs: 2, md: 'initial' } }}
            >
                <motion.div variants={fadeIn}>
                    <Stack>
                        <Typography variant="h5" sx={{ mb: 1 }}>{info.info1.title}</Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                            {info.info1.description}
                        </Typography>
                    </Stack>
                </motion.div>
            </Grid>

            <Grid item xs={12} md={6} lg={6}
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', order: { xs: 1, md: 'initial' } }}
            >
                <motion.div variants={fadeIn}>
                    <Box sx={{ width: '70%', mx: 'auto', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', position: 'relative' }}>
                        <Box component="img" src={img3} alt="chiesa" sx={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
                        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0))', pointerEvents: 'none' }} />
                    </Box>
                </motion.div>
            </Grid>

            <Grid item xs={12} md={6} lg={6}
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', order: { xs: 3, md: 'initial' } }}
            >
                <motion.div variants={fadeIn}>
                    <Box sx={{ width: '70%', mx: 'auto', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', position: 'relative' }}>
                        <Box component="img" src={img1} alt="Hotel" sx={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
                        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0))', pointerEvents: 'none' }} />
                    </Box>
                </motion.div>
            </Grid>

            <Grid item xs={12} md={6} lg={6}
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', order: { xs: 4, md: 'initial' } }}
            >
                <motion.div variants={fadeIn}>
                    <Stack>
                        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>{info.info2.title}</Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            {info.info2.description}
                        </Typography>
                    </Stack>
                </motion.div>
            </Grid>

            <Grid item xs={12} md={6} lg={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', order: { xs: 6, md: 'initial' } }}>
                <motion.div variants={fadeIn}>
                    <Stack>
                        <Typography variant="h5" sx={{ mb: 1 }}>{info.dressCode.title}</Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            {info.dressCode.description}
                        </Typography>
                    </Stack>
                </motion.div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', order: { xs: 5, md: 'initial' } }}>
                <motion.div variants={fadeIn}>
                    <Box component="img" src={img2} alt="Hotel" sx={{ width: '70%', height: 'auto', objectFit: 'cover', display: 'block', mx: 'auto' }} />
                </motion.div>
            </Grid>
        </Grid>
    );
};

export default InfoSection;
