import React from 'react';
import { Container, Typography, Button, Box, Stack, Grid, Paper, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PublicIcon from '@mui/icons-material/Public';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ConstantBot from '../components/ConstantBot';

const highlights = [
  {
    icon: <LocalHospitalIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
    title: '2100+ Qualified Doctors',
    desc: 'Expert medical professionals across specialties.'
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
    title: '1000+ Hospitals',
    desc: 'JCI-accredited partners worldwide.'
  },
  {
    icon: <PublicIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
    title: '800+ Treatment Plans',
    desc: 'Comprehensive solutions for global patients.'
  }
];

const partnerLogos = [
  { name: 'Apollo', url: '/partner-apollo.png' },
  { name: 'Fortis', url: '/partner-fortis.png' },
  { name: 'Max Healthcare', url: '/partner-max.png' },
  { name: 'Medanta', url: '/partner-medanta.png' },
  { name: 'BLK', url: '/partner-blk.png' },
  { name: 'Manipal', url: '/partner-manipal.png' },
];

const Home = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      background: 'radial-gradient(ellipse at top left, #e3f2fd 40%, #fff 100%)',
      minHeight: '100vh',
      pb: 8,
      pt: { xs: 6, md: 10 }
    }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        {/* Logo */}
        <Box sx={{ mb: 3 }}>
          <img src="/gogetwell-logo-white.png" alt="GoGetWell AI Logo" style={{ height: 64, width: 'auto', margin: '0 auto' }} />
        </Box>
        {/* Headline */}
        <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ fontFamily: 'serif', color: '#1a237e', letterSpacing: 1 }}>
          AI Front Office for Healthcare Agents
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom sx={{ fontFamily: 'serif', mb: 4 }}>
          Create <b>AI Store</b> in 2 min &mdash; Scale with <b>Digital Marketing</b>
        </Typography>
        {/* CTA Buttons */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" mb={5}>
          <Button
            component={RouterLink}
            to="/signup"
            variant="contained"
            size="large"
            color="primary"
            sx={{ px: 4, fontWeight: 'bold', borderRadius: 8, bgcolor: '#7b1fa2' }}
          >
            Get Started
          </Button>
          <Button
            component={RouterLink}
            to="/login"
            variant="outlined"
            size="large"
            color="primary"
            sx={{ px: 4, borderRadius: 8 }}
          >
            Login
          </Button>
          <Button
            variant="text"
            size="large"
            color="primary"
            startIcon={<PlayCircleOutlineIcon />}
            sx={{ color: '#1976d2' }}
          >
            Watch how it works
          </Button>
        </Stack>
        {/* Stats */}
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 5 }}>
          {highlights.map((item, idx) => (
            <Grid item xs={12} sm={4} key={idx}>
              <Paper elevation={0} sx={{ p: 3, borderRadius: 4, bgcolor: '#f3f6fa', color: '#181c32', textAlign: 'center', minHeight: 130 }}>
                {item.icon}
                <Typography variant="subtitle1" fontWeight="bold" mt={1} gutterBottom sx={{ fontFamily: 'serif' }}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        {/* Partnered logos: animated horizontal scroll */}
        <Box sx={{ bgcolor: '#fff', borderRadius: 3, p: 3, boxShadow: 4, textAlign: 'center', overflow: 'hidden', position: 'relative', width: '100%', mb: 2 }}>
          <Typography variant="subtitle2" fontWeight="bold" color="#7b1fa2" sx={{ mb: 1 }}>
            Trusted by
          </Typography>
          <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative', height: 48 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                animation: 'scroll-logos 18s linear infinite',
                '@keyframes scroll-logos': {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-50%)' }
                }
              }}
            >
              {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
                <Box key={idx} sx={{ px: 2, minWidth: 80 }}>
                  <img
                    src={logo.url}
                    alt={logo.name}
                    style={{ height: 36, width: 'auto', filter: 'grayscale(1)', opacity: 0.8 }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <ConstantBot />
        {/* Tagline or branding footer */}
        <Typography variant="body2" sx={{ mt: 6, color: '#7b1fa2', letterSpacing: 2, fontWeight: 'bold' }}>
          Empowering Global Healthcare Connections
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;
