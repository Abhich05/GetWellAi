import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => (
  <Container maxWidth="sm" sx={{ mt: 10, textAlign: 'center' }}>
    <Typography variant="h2" gutterBottom>
      404
    </Typography>
    <Typography variant="h5" color="text.secondary" gutterBottom>
      Page Not Found
    </Typography>
    <Button component={RouterLink} to="/" variant="contained" color="primary" sx={{ mt: 2 }}>
      Go Home
    </Button>
  </Container>
);

export default NotFound;
