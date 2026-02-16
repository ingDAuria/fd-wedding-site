import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SendIcon from '@mui/icons-material/Send';
import SectionHeader from '../components/SectionHeader';

const RSVPSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    attendance: 'yes',
    dietary: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulazione invio form
    setSnackbar({
      open: true,
      message: 'Grazie! Abbiamo ricevuto la tua conferma.',
      severity: 'success',
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: '1',
      attendance: 'yes',
      dietary: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

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
        staggerChildren: 0.15,
      }
    }
  };

  return (
    <Box
      id="rsvp"
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
      {/* Decorazione di sfondo */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(47,82,51,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Header */}
          <SectionHeader
            title="Conferma la tua Presenza"
            subtitle={'La vostra presenza renderà questo giorno ancora più speciale. Vi preghiamo di confermare entro il 1° Maggio 2026.'}
            fadeVariant={fadeInUp}
          />

          {/* Form */}
          <motion.div variants={fadeInUp}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                bgcolor: 'white',
                p: { xs: 3, md: 5 },
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              }}
            >
              <Grid container spacing={3}>
                {/* Nome */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Nome Completo"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>

                {/* Email e Telefono */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Telefono"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>

                {/* Numero ospiti */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    select
                    label="Numero di Ospiti"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    SelectProps={{
                      native: true,
                    }}
                    variant="outlined"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Persona' : 'Persone'}
                      </option>
                    ))}
                  </TextField>
                </Grid>

                {/* Conferma partecipazione */}
                <Grid item xs={12} md={6}>
                  <FormControl component="fieldset">
                    <FormLabel
                      component="legend"
                      sx={{
                        color: 'text.primary',
                        mb: 1,
                        fontWeight: 600,
                      }}
                    >
                      Parteciperai?
                    </FormLabel>
                    <RadioGroup
                      row
                      name="attendance"
                      value={formData.attendance}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio sx={{ color: 'accent.main' }} />}
                        label="Sì, sarò presente"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="Non posso partecipare"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                {/* Esigenze alimentari */}
                {formData.attendance === 'yes' && (
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Esigenze Alimentari o Allergie"
                      name="dietary"
                      value={formData.dietary}
                      onChange={handleChange}
                      variant="outlined"
                      placeholder="Es: Vegetariano, Celiaco, Allergie..."
                    />
                  </Grid>
                )}

                {/* Messaggio */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Messaggio (Facoltativo)"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="Lasciaci un messaggio o un augurio speciale..."
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                    endIcon={<SendIcon />}
                    sx={{
                      py: 1.5,
                      fontSize: '1.1rem',
                    }}
                  >
                    Invia Conferma
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </motion.div>
      </Container>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RSVPSection;
