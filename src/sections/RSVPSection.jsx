import React, { useState } from 'react';
import {
  Box,
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
import rsvp from '../content/siteText.jsx';
import { animationVariants } from '../utils/animations';

const RSVPSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
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
    // Costruisci messaggio WhatsApp a partire dai dati del form
    const lines = [];
    lines.push(`Nome: ${formData.name}`);
    lines.push(`Email: ${formData.email}`);
    if (formData.phone) lines.push(`Telefono: ${formData.phone}`);
    lines.push(`Partecipa: ${formData.attendance === 'yes' ? 'Sì' : 'No'}`);
    lines.push(`Ospiti: ${formData.guests}`);
    if (formData.dietary) lines.push(`Esigenze alimentari: ${formData.dietary}`);
    if (formData.message) lines.push(`Messaggio: ${formData.message}`);

    const text = lines.join('\n');
    // Numero WhatsApp (senza +, prefisso internazionale)
    const waPhone = '393932468718';
    const waUrl = `https://api.whatsapp.com/send?phone=${waPhone}&text=${encodeURIComponent(text)}`;

    // Apri WhatsApp Web / App in nuova finestra per inviare il messaggio
    try {
      window.open(waUrl, '_blank');
      setSnackbar({ open: true, message: 'Aperta WhatsApp per invio del messaggio', severity: 'success' });
    } catch (err) {
      console.error('Impossibile aprire WhatsApp', err);
      setSnackbar({ open: true, message: 'Errore durante l\'apertura di WhatsApp', severity: 'error' });
    }

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

  return (
    <Box
      id="rsvp"
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 0 },
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
          variants={animationVariants.staggerContainer}
        >
          {/* Header */}
          <SectionHeader
            title={rsvp.rsvp.title}
            subtitle={rsvp.rsvp.subtitle}
            fadeVariant={animationVariants.fadeInUp}
          />

          {/* Form */}
          <motion.div variants={animationVariants.fadeInUp}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                bgcolor: 'background.paper',
                borderRadius: 2,
                p: { xs: 3, md: 5 },
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                overflow: 'hidden',
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
                    sx={{ backgroundColor: 'background.default', borderRadius: 2 }}
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
                    sx={{ backgroundColor: 'background.default', borderRadius: 2 }}
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
                    sx={{ backgroundColor: 'background.default', borderRadius: 2 }}
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
                    sx={{ backgroundColor: 'background.default', borderRadius: 2 }}
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
                        control={<Radio sx={{ '&.Mui-checked': { color: 'secondary.main' } }} />}
                        label="Sì, sarò presente"
                        sx={{
                          '& .MuiFormControlLabel-label': { color: 'text.primary' },
                          '& .MuiRadio-root.Mui-checked + .MuiFormControlLabel-label': { color: 'secondary.main' },
                        }}
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio sx={{ '&.Mui-checked': { color: 'secondary.main' } }} />}
                        label="Non posso partecipare"
                        sx={{
                          '& .MuiFormControlLabel-label': { color: 'text.primary' },
                          '& .MuiRadio-root.Mui-checked + .MuiFormControlLabel-label': { color: 'secondary.main' },
                        }}
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
                      sx={{ backgroundColor: 'background.default', borderRadius: 2 }}
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
                    sx={{ backgroundColor: 'background.default', borderRadius: 2 }}
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
                      color: 'common.white',
                      backgroundColor: 'secondary.main',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        backgroundColor: 'secondary.dark',
                        color: 'common.white',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                      },
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
