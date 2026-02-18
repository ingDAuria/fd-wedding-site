import React from 'react';
import { Box, Typography, Container, IconButton, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { site } from '../content/siteText';

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,

          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <Grid container spacing={4} justifyContent="center">
            {/* Main Content */}
            <Grid item xs={12} textAlign="center">
              <motion.div variants={fadeInUp}>
                <Typography
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 300,
                    fontFamily: '"Playfair Display", serif',
                    fontStyle: 'italic',
                    mb: 2,
                    color: 'secondary.main',
                  }}
                >
                  {site.title}
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Box
                  sx={{
                    width: 60,
                    height: 2,
                    bgcolor: 'secondary.main',
                    margin: '0 auto 30px',
                  }}
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    maxWidth: 600,
                    margin: '0 auto 40px',
                    opacity: 0.9,
                  }}
                >
                  {site.tagline}
                </Typography>
              </motion.div>

              {/* Social Icons */}
              <motion.div variants={fadeInUp}>
                <Box sx={{ mb: 4 }}>
                  <IconButton
                    sx={{
                      color: 'secondary.main',
                      mx: 1,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        color: 'secondary.light',
                      },
                    }}
                    aria-label="Instagram"
                  >
                    <InstagramIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    sx={{
                      color: 'secondary.main',
                      mx: 1,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        color: 'secondary.light',
                      },
                    }}
                    aria-label="Facebook"
                  >
                    <FacebookIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    sx={{
                      color: 'secondary.main',
                      mx: 1,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        color: 'secondary.light',
                      },
                    }}
                    aria-label="Email"
                  >
                    <EmailIcon fontSize="large" />
                  </IconButton>
                </Box>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1,
                    opacity: 0.8,
                  }}
                >
                  Per informazioni: {site.contactEmail}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 3,
                    opacity: 0.8,
                  }}
                >
                  Tel: {site.phone}
                </Typography>
              </motion.div>

              {/* Divider */}
              <motion.div variants={fadeInUp}>
                <Box
                  sx={{
                    width: '100%',
                    height: 1,
                    bgcolor: 'rgba(201, 176, 55, 0.3)',
                    my: 4,
                  }}
                />
              </motion.div>

              {/* Copyright */}
              <motion.div variants={fadeInUp}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.7,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    {site.madeWith}
                    <FavoriteIcon
                      sx={{
                        fontSize: '1rem',
                        color: 'secondary.main',
                        animation: 'heartbeat 1.5s infinite',
                        '@keyframes heartbeat': {
                          '0%, 100%': { transform: 'scale(1)' },
                          '50%': { transform: 'scale(1.1)' },
                        },
                      }}
                    />
                    {site.copyright}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;
