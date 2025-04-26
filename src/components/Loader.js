import React from 'react';
import { Box, CircularProgress, Fade } from '@mui/material';

export default function Loader({ loading }) {
  return (
    <Fade in={loading} timeout={{ enter: 400, exit: 400 }} unmountOnExit>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          bgcolor: 'rgba(255,255,255,0.8)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress size={64} thickness={4} color="primary" />
      </Box>
    </Fade>
  );
}
