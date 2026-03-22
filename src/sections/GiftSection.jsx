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

    // split owner into left/right around ' e ' so we can force a line-break on mobile
    const ownerFull = gift.account.owner || '';
    const splitIndex = ownerFull.indexOf(' e ');
    const ownerLeft = splitIndex !== -1 ? ownerFull.slice(0, splitIndex + 2) : ownerFull; // include ' e'
    const ownerRight = splitIndex !== -1 ? ownerFull.slice(splitIndex + 3) : '';

    // split reason so the bracketed name goes on a new line on mobile
    const reasonFull = gift.account.reason || '';
    const bracketIndex = reasonFull.indexOf('[');
    const reasonLeft = bracketIndex !== -1 ? reasonFull.slice(0, bracketIndex) : reasonFull;
    const reasonRight = bracketIndex !== -1 ? reasonFull.slice(bracketIndex) : '';

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
        <Box sx={{ bgcolor: '#f5ead0', py: { xs: 6, md: 10 }, px: { xs: 2, md: 0 }  }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12}>
                        <SectionHeader title="Lista Nozze" subtitle={gift.subtitle} fadeVariant={fadeIn} />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <WeddingCard sx={{ bgcolor: 'background.default', width: { xs: '100%', md: '70%' } }}>
                            <Stack sx={{ textAlign: 'center', p: { xs: 3, md: 4 }, my: { xs: 2, md: 4 } }} spacing={2} alignItems="center" justifyContent="center">
                                <Typography variant="body2" sx={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', mb: 1, textAlign: 'center', whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                                    <Box component="span" sx={{ fontWeight: 700, display: 'block' }}>Intestatario:</Box>
                                    <Box component="span">{ownerLeft}</Box>
                                    {ownerRight && (
                                        <Box component="span" sx={{ display: 'block' }}>{' '}{ownerRight}</Box>
                                    )}
                                </Typography>

                                <Typography variant="body2" sx={{ mb: 2, textAlign: 'center', whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                                    <Box component="span" sx={{ fontWeight: 700, display: 'block' }}>Banca:</Box>
                                    {gift.account.bank}
                                </Typography>

                                <Typography variant="body2" sx={{ mb: 2, textAlign: 'center', whiteSpace: 'normal', overflowWrap: 'break-word' }}>
                                    <Box component="span" sx={{ fontWeight: 700, display: 'block' }}>Causale:</Box>
                                    <Box component="span">{reasonLeft}</Box>
                                    {reasonRight && (
                                        <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }}>{reasonRight}</Box>
                                    )}
                                </Typography>

                                <Stack spacing={1} alignItems="center" justifyContent={'center'} sx={{ mt: 2, textAlign: 'center' }}>
                                    <Typography variant="body2" sx={{ fontWeight: 700, letterSpacing: '0.04em', fontSize: '0.85rem' }}>
                                        IBAN:
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 700, letterSpacing: '0.04em', fontSize: '0.9rem', textAlign: 'center', whiteSpace: 'normal', overflowWrap: 'anywhere' }}>
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

                                <Typography variant="body2" display="block" sx={{ mt: 2, color: 'text.secondary', textAlign: 'center', whiteSpace: 'normal', overflowWrap: 'break-word' }}>
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
