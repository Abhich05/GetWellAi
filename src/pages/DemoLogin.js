import React from 'react';
import { Container, Typography, Box, TextField, Button, Stack, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

const DemoLogin = () => (
  <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Container maxWidth="xs" sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', py: 8 }}>
      <Box textAlign="center" width="100%" sx={{ bgcolor: '#fff', p: 4, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Login
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <Stack spacing={2}>
            <TextField label="Email" type="email" fullWidth required />
            <TextField label="Password" type="password" fullWidth required />
            <Button variant="contained" color="primary" size="large" sx={{ mt: 2, alignSelf: 'center', minWidth: 160, px: 4 }}>
              Login
            </Button>
            <Divider sx={{ my: 2 }}>or</Divider>
            <Button variant="outlined" color="inherit" startIcon={<GoogleIcon />} sx={{ alignSelf: 'center', minWidth: 160, px: 4, fontWeight: 'bold' }}>
              Login with Google
            </Button>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Don't have an account?{' '}
              <Link component={RouterLink} to="/signup" underline="hover" color="primary" fontWeight="bold">
                Register
              </Link>
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
              Forgot your password? <Link component={RouterLink} to="/reset-password" underline="hover" color="secondary">Reset</Link>
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default DemoLogin;
