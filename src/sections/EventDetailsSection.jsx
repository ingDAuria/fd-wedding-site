import { Box, Typography, Grid, Stack } from '@mui/material';
import SectionHeader from '../components/SectionHeader';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EventCard from '../components/EventCard';
import { eventDetails } from '../content/siteText.jsx';
import { animationVariants } from '../utils/animations';

const EventDetailsSection = () => {

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Box
      id="details"
      ref={ref}
      p={{ xs: 4, md: 8 }}
      sx={{
        minHeight: '100vh',
        width: '100%',
        bgcolor: '#f5ead0',
      }}
    >
      <Box sx={{ maxWidth: 'lg', width: '100%', margin: '0 auto' }}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants.staggerContainer}
          width='100%'
        >
          {/* Header */}
          <Stack mb={8} alignItems="center" textAlign="center">
            <motion.div variants={animationVariants.fadeInUp}>
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
            <SectionHeader title={eventDetails.title} subtitle={eventDetails.subtitle} fadeVariant={animationVariants.fadeInUp} />
          </Stack>

          {/* Event Cards */}
          <Grid
            container
            spacing={{ xs: 8, md: 8 }}
            width='100%'
            justifyContent="center"
            alignItems="flex-start"
            sx={{ mb: 4 }}
          >
            {eventDetails.events.map((event, index) => (
              <Grid item xs={12} md={5} key={index} sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <motion.div variants={animationVariants.fadeInUp} style={{ width: '100%' }}>
                  <EventCard 
                  overflow='visible' 
                  bg="background.default"
                  icon= {event.icon}
                  title ={event.title}
                  time={event.time}
                  location={event.location}
                  address={event.address}
                  color='blur(6px)'
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>


        </motion.div>
      </Box>
    </Box>
  );
};

export default EventDetailsSection;
