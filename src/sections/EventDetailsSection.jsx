import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Stack } from '@mui/material';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ChurchIcon from '@mui/icons-material/Church';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WeddingCard from '../components/WeddingCard';
import { eventDetails } from '../content/siteText.jsx';

const EventDetailsSection = () => {

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
    
  return (
    <Box
      id="details"
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, md: 12 },
        position: 'relative',
        bgcolor: '#f5ead0',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Header */}
          <Stack mb={8} alignItems="center" textAlign="center">
            <motion.div variants={fadeInUp}>
              <Typography
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 300,
                  color: 'secondary.main',
                  fontStyle: 'italic',
                  mb: 2,
                }}
              >
                {eventDetails.date}
              </Typography>
            </motion.div>
            <SectionHeader title={eventDetails.title} subtitle={eventDetails.subtitle} fadeVariant={fadeInUp} />
          </Stack>

          {/* Event Cards */}
          <Grid container spacing={4} justifyContent="center">
            {eventDetails.events.map((event, index) => (
              <Grid item xs={12} md={5} key={index}>
                <motion.div variants={fadeInUp}>
                  <WeddingCard overflow='visible' bg="background.default">
                    {/* Icon Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -30,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        bgcolor: event.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                      }}
                    >
                      {event.icon}
                    </Box>

                    <CardContent sx={{ pt: 10, pb: 4, textAlign: 'center' }}>
                      <Typography
                        variant="h3"
                        sx={{
                          mb: 3,
                          fontSize: { xs: '2rem', md: '2.5rem' },
                        }}
                      >
                        {event.title}
                      </Typography>

                      {/* Time */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          my: 5,
                        }}
                      >
                        <AccessTimeIcon
                          sx={{
                            mr: 1,
                            color: event.color,
                          }}
                        />
                        <Typography
                          variant="h4"
                          sx={{
                            fontSize: { xs: '1.5rem', md: '2rem' },
                            fontWeight: 600,
                            color: event.color,
                          }}
                        >
                          {event.time}
                        </Typography>
                        
                      </Box>



                      {/* Location */}
                      <Box sx={{ mb: 2 }}>
                        <LocationOnIcon
                          sx={{
                            color: 'text.secondary',
                            mb: 1,
                          }}
                        />
                        <Typography
                          variant="h4"
                          sx={{
                            mb: 1,
                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                          }}
                        >
                          {event.location}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'text.secondary',
                          }}
                        >
                          {event.address}
                        </Typography>
                      </Box>
                    </CardContent>
                  </WeddingCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>


        </motion.div>
      </Container>
    </Box>
  );
};

export default EventDetailsSection;
