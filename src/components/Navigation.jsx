import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: 'Home', to: 'home' },
    { label: 'La Nostra Storia', to: 'story' },
    { label: 'Benvenuti', to: 'welcome' },
    { label: 'Dettagli', to: 'details' },
    { label: 'Lista Nozze', to: 'registry' },
    { label: 'RSVP', to: 'rsvp' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          backdropFilter: { xs: 'none', md: scrolled ? 'blur(6px)' : 'none' },
          transition: 'all 0.3s ease',
          borderBottom: 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar bgcolor="background.paper" color="text.primary" sx={{ justifyContent: { xs: 'space-between', md: 'center' }, py: { xs: 0.5, md: 2 }, minHeight: { xs: 56, md: 'auto' } }}>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 4,
              }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={800}
                    spy={true}
                    offset={-80}
                  >
                    <Box
                      sx={{
                        fontFamily: '"Lato", sans-serif',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'text.primary',
                        cursor: 'pointer',
                        position: 'relative',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: 'secondary.main',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -5,
                          left: 0,
                          width: 0,
                          height: 2,
                          bgcolor: 'secondary.main',
                          transition: 'width 0.3s ease',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    >
                      {item.label}
                    </Box>
                  </Link>
                </motion.div>
              ))}
            </Box>

            {/* placeholder to keep mobile menu button right-aligned */}
            <Box sx={{ display: { xs: 'block', md: 'none' }, width: 48 }} />

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: 'text.primary',
                width: 40,
                height: 40,
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                '&:hover': { bgcolor: 'transparent' },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
            bgcolor: 'background.paper',
            color: 'text.primary',
          },
        }}
      >
        <Box sx={{ p: 2, textAlign: 'right' }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'secondary.main' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 2 }}>
          {menuItems.map((item) => (
            <ListItem key={item.to} disablePadding>
              <Link
                to={item.to}
                smooth={true}
                duration={800}
                spy={true}
                offset={-80}
                onClick={handleDrawerToggle}
                style={{ width: '100%' }}
              >
                <ListItemButton
                  sx={{
                    py: 2,
                    '&:hover': {
                      bgcolor: 'rgba(201, 176, 55, 0.1)',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontFamily: '"Lato", sans-serif',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontSize: '0.9rem',
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>

        {/* Mobile Logo */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: '"Playfair Display", serif',
            fontSize: '2.5rem',
            fontWeight: 700,
            fontStyle: 'italic',
            color: 'text.primary',
            opacity: 0.3,
          }}
        >
          F & D
        </Box>
      </Drawer>
    </>
  );
};

export default Navigation;
