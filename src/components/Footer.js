import React from 'react';
import { Box, Typography, Container, Stack, Link as MuiLink, Divider, IconButton, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import LanguageIcon from '@mui/icons-material/Language';

const infoLinks = [
  { label: 'Team Diary', href: '/team-diary' },
  { label: 'Blog', href: '/blog' },
  { label: 'Our Services', href: '/services' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Sitemap', href: '/sitemap' },
];

const Footer = () => (
  <Box component="footer" sx={{
    py: { xs: 5, md: 6 },
    bgcolor: '#181c32',
    color: '#fff',
    mt: 8,
    borderTop: '2px solid #1976d2',
    boxShadow: '0 -2px 24px 0 #181c32',
    fontFamily: 'serif',
  }}>
    <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
        {/* Logo */}
        <Grid item xs={12} md={4}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <img src="/log.svg" alt="GoGetWell AI Logo" style={{ height: 36, width: 'auto', background: 'transparent', filter: 'drop-shadow(0 2px 8px #1976d2)' }} />
            <Typography variant="h6" fontWeight="bold" sx={{ color: '#fff', letterSpacing: 1 }}>
              GoGetWell AI
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton href="https://www.linkedin.com/" target="_blank" rel="noopener" sx={{ bgcolor: '#fff', color: '#1976d2', '&:hover': { bgcolor: '#ede7f6' }, p: 1 }}>
              <LinkedInIcon fontSize="medium" />
            </IconButton>
            <IconButton href="https://x.com/" target="_blank" rel="noopener" sx={{ bgcolor: '#fff', color: '#111', '&:hover': { bgcolor: '#e3f2fd' }, p: 1 }}>
              <XIcon fontSize="medium" />
            </IconButton>
            <IconButton href="https://gogetwell.ai" target="_blank" rel="noopener" sx={{ bgcolor: '#fff', color: '#1976d2', '&:hover': { bgcolor: '#ede7f6' }, p: 1 }}>
              <LanguageIcon fontSize="medium" />
            </IconButton>
          </Stack>
        </Grid>
        {/* Info links grid */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={1}>
            {infoLinks.map((link) => (
              <Grid item xs={6} sm={4} md={3} key={link.label}>
                <MuiLink href={link.href} underline="hover" color="#bbdefb" sx={{ fontWeight: 500, fontSize: 15, letterSpacing: 0.5 }}>
                  {link.label}
                </MuiLink>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ bgcolor: '#1976d2', my: 3 }} />
      <Typography variant="body2" align="center" color="#bbdefb" sx={{ letterSpacing: 1, fontWeight: 400 }}>
        &copy; {new Date().getFullYear()} GoGetWell AI. All rights reserved.
      </Typography>
      <Typography variant="caption" align="center" color="#bbdefb" sx={{ display: 'block', mt: 1, letterSpacing: 0.5 }}>
        Designed & developed by <strong>Abhishek C H</strong> <span role="img" aria-label="smile">😊</span>
      </Typography>
    </Container>
  </Box>
);

export default Footer;
