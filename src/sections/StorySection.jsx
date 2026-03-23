import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import StoryCard from '../components/StoryCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SectionHeader from '../components/SectionHeader';
import { story } from '../content/siteText.jsx';
import { animationVariants } from '../utils/animations';

const StorySection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Box
      id="story"
      p={{ xs: 4, md: 8 }}
      ref={ref}
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
        {/* Header */}
        <motion.div>
          <motion.div variants={animationVariants.fadeInUp}>
            <FavoriteIcon
              sx={{
                fontSize: 48,
                color: 'secondary.main',
                display: 'block',
                textAlign: 'center',
                margin: '0 auto',
              }}
            />
          </motion.div>

          <SectionHeader
            title={story.title}
            subtitle={story.subtitle}
            fadeVariant={animationVariants.fadeInUp}
          />
        </motion.div>

        {/* Timeline */}
        <Grid container spacing={4}>
          {story.timeline.map((event, index) => (
            <Grid item xs={12} md={index === 2 ? 12 : 6} key={index}>
              <motion.div variants={animationVariants.fadeInUp}>
                <StoryCard >
                  <Typography
                    sx={{
                      fontSize: '3rem',
                      fontWeight: 700,
                      color: 'secondary.main',
                      opacity: 0.3,
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
                      bgcolor: 'secondary.main',
                      mt: 3,
                    }}
                  />
                </StoryCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default StorySection;
