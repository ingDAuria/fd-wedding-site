import React from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../components/SectionHeader';
import img1 from '../assets/hotel.jpg';
import img2 from '../assets/dress.png';
import img3 from '../assets/chiesa.jpg';
import { info } from '../content/siteText.jsx';
import { animationVariants } from '../utils/animations';
const InfoSection = () => {
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants.staggerContainer}
        >
            <Grid container
                p={{ xs: 4, md: 8 }}
                colSpacing={4}
                rowSpacing={{ xs: 4, md: 6 }}
                alignItems="center"
                id="info"
                ref={ref}
                sx={{
                    py: { xs: 6, md: 10 },
                    px: { xs: 4, md: 12 },
                }}>

            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={animationVariants.fadeInUp}
                >
                    <Box sx={{ minWidth: { xs: '100%', md: 320 }, width: '100%' }}>
                        <SectionHeader title="Informazioni Utili" fadeVariant={animationVariants.fadeInUp} />
                    </Box>
                </motion.div>
            </Grid>

            <Grid item xs={12} md={6} lg={6}
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', order: { xs: 2, md: 'initial' } }}
            >
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={animationVariants.fadeInLeft}
                >
                    <Stack>
                        <Typography variant="h5" sx={{ mb: 1 }}>{info.info1.title}</Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, px: { xs: 2, md: 4 } }}>
                            {info.info1.description}
                        </Typography>
                    </Stack>
                </motion.div>
            </Grid>

            <Grid item xs={12} md={6} lg={6}
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', order: { xs: 1, md: 'initial' } }}
            >
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={animationVariants.fadeInRight}
                >
                    <Box sx={{ width: '70%', mx: 'auto', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', position: 'relative' }}>
                        <Box component="img" src={img3} alt="chiesa" sx={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
                        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0))', pointerEvents: 'none' }} />
                    </Box>
                </motion.div>
            </Grid>

            <Grid item xs={12} md={6} lg={6}
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', order: { xs: 3, md: 'initial' } }}
            >
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={animationVariants.fadeInLeft}
                >
                    <Box sx={{ width: '70%', mx: 'auto', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', position: 'relative' }}>
                        <Box component="img" src={img1} alt="Hotel" sx={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
                        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0))', pointerEvents: 'none' }} />
                    </Box>
                </motion.div>
            </Grid>

            <Grid item xs={12} md={6} lg={6}
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', order: { xs: 4, md: 'initial' } }}
            >
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={animationVariants.fadeInRight}
                >
                    <Stack>
                        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>{info.info2.title}</Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', px: { xs: 2, md: 4 } }}>
                            {info.info2.description}
                        </Typography>
                    </Stack>
                </motion.div>
            </Grid>

            <Grid item xs={12} md={6} lg={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', order: { xs: 6, md: 'initial' } }}>
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={animationVariants.fadeInLeft}
                >
                    <Stack>
                        <Typography variant="h5" sx={{ mb: 1 }}>{info.dressCode.title}</Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', px: { xs: 2, md: 4 } }}>
                            {info.dressCode.description}
                        </Typography>
                    </Stack>
                </motion.div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', order: { xs: 5, md: 'initial' } }}>
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={animationVariants.fadeInRight}
                >
                    <Box component="img" src={img2} alt="Hotel" sx={{ width: '70%', height: 'auto', objectFit: 'cover', display: 'block', mx: 'auto' }} />
                </motion.div>
            </Grid>
        </Grid>
        </motion.div>
    );
};

export default InfoSection;
