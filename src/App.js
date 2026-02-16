import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import StorySection from './sections/StorySection';
import WelcomeSection from './sections/WelcomeSection';
import EventDetailsSection from './sections/EventDetailsSection';
import InfoSection from './sections/InfoSection';
import RSVPSection from './sections/RSVPSection';
import Footer from './components/Footer';
import GiftSection from './sections/GiftSection';
import RegistrySection from './sections/RegistrySection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          overflowX: 'hidden',
          scrollBehavior: 'smooth',
        }}
      >
        <Navigation />
        <HeroSection />
                <WelcomeSection />
        <StorySection />
        <EventDetailsSection />
        <InfoSection />
        <GiftSection />
        <RSVPSection />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
