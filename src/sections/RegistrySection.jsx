import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FlightIcon from '@mui/icons-material/Flight';
import FavoriteIcon from '@mui/icons-material/Favorite';

/**
 * Sezione opzionale per la lista nozze
 * Può essere aggiunta al sito importandola in App.js
 */
const RegistrySection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
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

  const registryOptions = [
    {
      icon: <CardGiftcardIcon sx={{ fontSize: 60 }} />,
      title: 'Lista Nozze',
      description: 'Abbiamo creato una lista nozze presso i seguenti negozi',
      stores: ['Coin Casa', 'Zara Home', 'Maisons du Monde'],
      color: 'secondary.main',
    },
    {
      icon: <FlightIcon sx={{ fontSize: 60 }} />,
      title: 'Viaggio di Nozze',
      description: 'Il regalo più grande sarebbe contribuire al nostro viaggio di nozze',
      details: 'IBAN: IT00 X000 0000 0000 0000 0000 000',
      color: 'accent.main',
    },
  ];

  return (
    <Box
      id="registry"
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Header */}
          <Box textAlign="center" mb={8}>
            <motion.div variants={fadeInUp}>
              <FavoriteIcon
                sx={{
                  fontSize: 48,
                  color: 'secondary.main',
                  mb: 2,
                }}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography variant="h2" gutterBottom>
                Lista Nozze
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Box
                sx={{
                  width: 60,
                  height: 2,
                  bgcolor: 'secondary.main',
                  margin: '20px auto 30px',
                }}
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: 700,
                  margin: '0 auto',
                  color: 'text.secondary',
                  fontStyle: 'italic',
                }}
              >
                "Il regalo più prezioso è la vostra presenza, ma se desiderate 
                onorarci con un pensiero, ecco alcune opzioni"
              </Typography>
            </motion.div>
          </Box>

          {/* Registry Cards */}
          <Grid container spacing={4} justifyContent="center">
            {registryOptions.map((option, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={fadeInUp}>
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 4,
                      position: 'relative',
                      overflow: 'visible',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        bgcolor: option.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        margin: '-70px auto 30px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                      }}
                    >
                      {option.icon}
                    </Box>

                    <CardContent>
                      <Typography
                        variant="h3"
                        sx={{
                          mb: 2,
                          fontSize: { xs: '1.75rem', md: '2rem' },
                        }}
                      >
                        {option.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          color: 'text.secondary',
                        }}
                      >
                        {option.description}
                      </Typography>

                      {option.stores && (
                        <Box sx={{ mb: 3 }}>
                          {option.stores.map((store, idx) => (
                            <Typography
                              key={idx}
                              variant="body2"
                              sx={{
                                py: 1,
                                color: option.color,
                                fontWeight: 600,
                              }}
                            >
                              • {store}
                            </Typography>
                          ))}
                        </Box>
                      )}

                      {option.details && (
                        <Box
                          sx={{
                            p: 2,
                            bgcolor: 'grey.100',
                            borderRadius: 1,
                            mb: 3,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: 'monospace',
                              fontSize: '0.9rem',
                            }}
                          >
                            {option.details}
                          </Typography>
                        </Box>
                      )}

                      <Button
                        variant="outlined"
                        sx={{
                          borderColor: option.color,
                          color: option.color,
                          '&:hover': {
                            borderColor: option.color,
                            bgcolor: `${option.color}15`,
                          },
                        }}
                      >
                        Maggiori Informazioni
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Note */}
          <motion.div variants={fadeInUp}>
            <Box
              sx={{
                mt: 6,
                p: 3,
                textAlign: 'center',
                bgcolor: 'rgba(201, 176, 55, 0.05)',
                borderLeft: '4px solid',
                borderColor: 'secondary.main',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontStyle: 'italic',
                }}
              >
                La vostra presenza è il regalo più grande che potremmo desiderare. 
                Questi sono solo suggerimenti per chi desidera farci un pensiero.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default RegistrySection;
