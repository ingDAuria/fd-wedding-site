import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import StoryCard from '../components/StoryCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SectionHeader from '../components/SectionHeader';
import { story } from '../content/siteText.jsx';

const StorySection = () => {
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
      id="story"
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >


      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div>
            <motion.div variants={fadeInUp}>
              <FavoriteIcon
                sx={{
                  fontSize: 48,
                  color: 'secondary.main',
                  mb: 2,
                  display: 'block',
                  textAlign: 'center',
                  margin: '0 auto',
                }}
              />
            </motion.div>

            <SectionHeader
              title={story.title}
              subtitle={story.subtitle}
              fadeVariant={fadeInUp}
            />
          </motion.div>

          {/* Timeline */}
          <Grid container spacing={4}>
            {story.timeline.map((event, index) => (
              <Grid item xs={12} md={index === 2 ? 12 : 6} key={index}>
                <motion.div variants={fadeInUp}>
                  <StoryCard >
                    <Typography
                      sx={{
                        fontSize: '3rem',
                        fontWeight: 700,
                        color: index % 2 === 0 ? 'secondary.main' : 'accent.main',
                        opacity: 0.2,
                        position: 'absolute',
                        top: 10,
                        right: 20,
                        fontFamily: '"Playfair Display", serif',
                      }}
                    >
                      {event.year}
                    </Typography>

                    <Typography
                      variant="h4"
                      sx={{
                        mb: 2,
                        fontSize: { xs: '1.5rem', md: '2rem' },
                      }}
                    >
                      {event.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.8,
                      }}
                    >
                      {event.description}
                    </Typography>

                    <Box
                      sx={{
                        width: 40,
                        height: 2,
                        bgcolor: index % 2 === 0 ? 'secondary.main' : 'accent.main',
                        mt: 3,
                      }}
                    />
                  </StoryCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default StorySection;
