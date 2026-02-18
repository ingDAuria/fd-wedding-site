import React, { useEffect, useState, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
// framer-motion removed: countdown will update every second without per-card animation

// removed unused addMonths helper

function diffFull(from, to) {
  if (to <= from) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  let ms = to - from;
  const dayMs = 1000 * 60 * 60 * 24;
  const hourMs = 1000 * 60 * 60;
  const minMs = 1000 * 60;

  const days = Math.floor(ms / dayMs);
  ms -= days * dayMs;
  const hours = Math.floor(ms / hourMs);
  ms -= hours * hourMs;
  const minutes = Math.floor(ms / minMs);
  ms -= minutes * minMs;
  const seconds = Math.floor(ms / 1000);

  return { days, hours, minutes, seconds };
}

const pad = (v) => String(v).padStart(2, '0');

const Countdown = ({ target = '2026-09-14' }) => {
  const targetDate = useMemo(() => new Date(target + 'T00:00:00'), [target]);
  const [remaining, setRemaining] = useState(() => diffFull(new Date(), targetDate));

  useEffect(() => {
    const tick = () => setRemaining(diffFull(new Date(), targetDate));
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, [targetDate]);
  const card = (value, label) => (
    <Box sx={{ width: { xs: 72, md: 96 }, bgcolor: 'background.paper', borderRadius: 2, p: { xs: 1, md: 2 }, boxShadow: '0 8px 30px rgba(0,0,0,0.12)', textAlign: 'center', border: '1px solid', borderColor: 'divider' }}>
      <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.6rem' }, fontWeight: 800, fontFamily: 'Playfair Display, serif', color: 'primary.main' }}>
        {value}
      </Typography>
      <Typography sx={{ fontSize: '0.65rem', color: 'text.secondary', mt: 0.5 }}>{label}</Typography>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', mx: 'auto' }}>
      {card(remaining.days, 'Giorni')}
      {card(pad(remaining.hours), 'Ore')}
      {card(pad(remaining.minutes), 'Min')}
      {card(pad(remaining.seconds), 'Sec')}
    </Box>
  );
};

export default Countdown;
