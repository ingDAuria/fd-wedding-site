import React, { useState } from 'react';
import { Box, Typography, Button, Container, Snackbar, Grid, Stack } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SectionHeader from '../components/SectionHeader';
import separatore from '../assets/separatore.png';
import WeddingCard from '../components/WeddingCard';
import imgGift from '../assets/gift.png';
import { gift } from '../content/siteText.jsx';

const GiftSection = () => {
    const [copied, setCopied] = useState(false);

    const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

    const handleCopy = async (e) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(gift.account.iban.replace(/\s+/g, ''));
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Copy failed', err);
        }
    };

    return (
        <Box sx={{ bgcolor: '#f5ead0', py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12}>
                        <SectionHeader title="Lista Nozze" subtitle={'Festeggiare con voi sarà il dono più prezioso, ma se desiderate farci un regalo potete farlo qui contribuendo al viaggio più bello: il prossimo viaggio insieme.'} fadeVariant={fadeIn} />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <WeddingCard sx={{ bgcolor: 'background.default', width: { xs: '100%', md: '70%' } }}>
                            <Stack sx={{ textAlign: 'center', p: { xs: 3, md: 4 }, my: { xs: 2, md: 4 } }} spacing={2} alignItems="center" justifyContent="center">
                                <Typography variant="body2" sx={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', mb: 1 }}>
                                    <Box component="span" sx={{ fontWeight: 700 }}>Intestatario:</Box>
                                    <br /> {gift.account.owner}
                                </Typography>

                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    <Box component="span" sx={{ fontWeight: 700 }}>Banca:</Box>
                                    <br />{gift.account.bank}
                                </Typography>

                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    <Box component="span" sx={{ fontWeight: 700 }}>Causale:</Box>
                                    <br />{gift.account.reason}
                                </Typography>

                                <Stack spacing={1} alignItems="center" justifyContent={'center'} sx={{ mt: 2, textAlign: 'center' }}>
                                    <Typography variant="body2" sx={{ fontWeight: 700, letterSpacing: '0.04em', fontSize: '0.85rem' }}>
                                        IBAN:
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 700, letterSpacing: '0.04em', fontSize: '0.9rem' }}>
                                        {gift.account.iban}
                                    </Typography>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        startIcon={<ContentCopyIcon sx={{ fontSize: 16 }} />}
                                        onClick={handleCopy}
                                        sx={{ height: 28, fontSize: '0.75rem', px: 1 }}
                                    >
                                        Copia
                                    </Button>
                                </Stack>

                                <Box component="img" src={separatore} alt="separatore" sx={{ width: 160, maxWidth: '60%', mx: 'auto', my: 2 }} />

                                <Typography variant="body2" display="block" sx={{ mt: 2, color: 'text.secondary' }}>
                                    Grazie di cuore per il vostro affetto e per rendere questo giorno ancora più speciale.
                                </Typography>
                            </Stack>
                        </WeddingCard>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box component="img" src={imgGift} alt="Gift" sx={{ width: '100%', maxWidth: 520}} />
                        </Box>
                    </Grid>
                </Grid>

                <Snackbar open={copied} message="IBAN copiato negli appunti" autoHideDuration={2000} />
            </Container>
 
        </Box>
    );
};

export default GiftSection;
