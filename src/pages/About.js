import React from 'react';
import { Container, Typography, Box, Grid, Paper, Stack } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PublicIcon from '@mui/icons-material/Public';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ConstantBot from '../components/ConstantBot';

const highlights = [
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 40, color: '#1976d2' }} />, title: 'Trusted & Secure', desc: 'HIPAA/GDPR compliant and globally recognized.'
  },
  {
    icon: <PublicIcon sx={{ fontSize: 40, color: '#43a047' }} />, title: 'Global Reach', desc: 'Connecting patients and providers worldwide.'
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#7b1fa2' }} />, title: '24/7 AI Support', desc: 'Always-on support for patients and agents.'
  }
];

const About = () => (
  <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
    <Box textAlign="center" mb={6}>
      <img src="/gogetwell-logo-white.png" alt="GoGetWell AI Logo" style={{ height: 56, width: 'auto', marginBottom: 16 }} />
      <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ fontFamily: 'serif', color: '#1a237e' }}>
        About GoGetWell AI
      </Typography>
      <Typography variant="h6" color="text.secondary" mb={2} sx={{ fontFamily: 'serif' }}>
        Empowering Medical Tourism with AI & Automation
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 2 }}>
        GoGetWell AI is a SaaS platform built to revolutionize medical tourism businesses. We help organizations automate patient coordination, lead generation, and global support using cutting-edge AI agents and a seamless digital storefront.
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 2 }}>
        Our mission is to enable healthcare facilitators and providers to scale internationally, deliver exceptional patient experiences, and respect cultural diversity. With a focus on security and innovation, we are trusted by leading hospitals and agents worldwide.
      </Typography>
    </Box>
    <Grid container spacing={4} justifyContent="center">
      {highlights.map((item, idx) => (
        <Grid item xs={12} sm={4} key={idx}>
          <Paper elevation={0} sx={{ p: 4, borderRadius: 4, bgcolor: '#f3f6fa', textAlign: 'center', height: '100%' }}>
            <Stack alignItems="center" spacing={1}>
              {item.icon}
              <Typography variant="subtitle1" fontWeight="bold" sx={{ fontFamily: 'serif' }}>{item.title}</Typography>
              <Typography color="text.secondary">{item.desc}</Typography>
            </Stack>
          </Paper>
        </Grid>
      ))}
    </Grid>
    <Box display="flex" justifyContent="center" alignItems="center" mt={12} mb={2}>
      <Typography variant="body2" sx={{ px: 3, py: 2, bgcolor: 'rgba(123, 27, 162, 0.04)', borderRadius: 2, color: '#7b1fa2', letterSpacing: 2, fontWeight: 'bold', textAlign: 'center', boxShadow: 1 }}>
        GoGetWell AI &mdash; Bridging Cultures. Connecting Care.
      </Typography>
    </Box>
    <ConstantBot />
  </Container>
);

export default About;
