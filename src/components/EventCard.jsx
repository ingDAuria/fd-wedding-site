import React from 'react';
import { Box, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CardContent, Stack } from '@mui/material';

const EventCard = ({
  imageSrc,
  imageAlt = '',
  sx = {},
  position = 'relative',
  overflow = 'hidden',
  bg = 'background.paper',
  icon,
  title,
  time,
  location,
  address,
  color = 'primary.main',
}) => {
  return (
    <Box
      sx={{
        overflow: overflow,
        position: position,
        maxWidth: '400px',
        height: '100%',
        minHeight: 500,
        backgroundColor: bg,
        borderTopLeftRadius: '999px',
        borderTopRightRadius: '999px',
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        boxShadow: '0 12px 30px rgba(0,0,0,0.14)',
        margin: '0 auto', // Centra orizzontalmente
        py: 4,
        ...sx,
      }}
    >
      {imageSrc ? (
        <Box
          component="img"
          src={imageSrc}
          alt={imageAlt}
          sx={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
        />
      ) : (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: -30,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 100,
              height: 100,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)', // Safari support
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}
          >
            {icon}
          </Box>

          <Stack
            direction='column'
            justifyContent='space-between'
            sx={{
              pt: 10,
              textAlign: 'center',
              height: '100%'
            }}>

            <Typography
              variant="h3"
              sx={{
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              {title}
            </Typography>

            {/* Time */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                my: 2,
              }}
            >
              <AccessTimeIcon
                sx={{
                  mr: 1,
                  color: color,
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 600,
                  color: color,
                }}
              >
                {time}
              </Typography>

            </Box>


            <Stack 
              spacing={2}
              alignItems="center"
              justifyContent='center'
            >

              {/* Location */}
              <LocationOnIcon
                sx={{
                  color: 'text.secondary',
                  mb: 1,
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  mb: 1,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  textAlign: 'center',
                }}
              >
                {location}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  textAlign: 'center',
                }}
              >
                {address}
              </Typography>
            </Stack>
          </Stack>
        </>
      )}
    </Box>
  );
};

export default EventCard;
