import React from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
  Grid,
  Paper,
  IconButton,
  Divider
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ChatIcon from '@mui/icons-material/Chat';
import ConstantBot from '../components/ConstantBot';

const Contact = () => (
  <Box sx={{ background: '#fafcff', py: 8 }}>
    <Container maxWidth="lg">
      <Grid container spacing={4} alignItems="stretch">
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ p: 4, bgcolor: 'transparent', height: '100%' }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontFamily: 'serif' }}>
              Let's get in touch!
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Got questions about GoGetWell AI? Our team is here to help. Contact us for quick and friendly support.
            </Typography>
            <Stack spacing={2} sx={{ mb: 2 }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box sx={{ bgcolor: '#ede7f6', p: 1.5, borderRadius: 2 }}>
                  <PhoneIcon color="primary" />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">Phone</Typography>
                  <Typography fontWeight="bold">+91 9811396858</Typography>
                </Box>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box sx={{ bgcolor: '#ede7f6', p: 1.5, borderRadius: 2 }}>
                  <EmailIcon color="primary" />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">Email</Typography>
                  <Typography fontWeight="bold">hello@gogetwell.ai</Typography>
                </Box>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box sx={{ bgcolor: '#e8f5e9', p: 1.5, borderRadius: 2 }}>
                  <WhatsAppIcon sx={{ color: '#25D366' }} />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">WhatsApp</Typography>
                  <Typography fontWeight="bold">+91 9811396858</Typography>
                </Box>
                <Button
                  variant="outlined"
                  color="success"
                  size="small"
                  href="https://wa.me/919811396858"
                  target="_blank"
                  sx={{ ml: 2 }}
                >
                  Chat Now
                </Button>
              </Stack>
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Typography fontWeight="bold" sx={{ mb: 1, fontFamily: 'serif' }}>Connect With Us</Typography>
            <Stack direction="row" spacing={2}>
              <IconButton href="https://x.com/" target="_blank" rel="noopener" sx={{ bgcolor: '#ede7f6' }}>
                <XIcon sx={{ color: '#111' }} />
              </IconButton>
              <IconButton href="https://linkedin.com/" target="_blank" rel="noopener" sx={{ bgcolor: '#ede7f6' }}>
                <LinkedInIcon sx={{ color: '#1976d2' }} />
              </IconButton>
              <IconButton href="#" sx={{ bgcolor: '#ede7f6' }}>
                <ChatIcon sx={{ color: '#43a047' }} />
              </IconButton>
            </Stack>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
              Avg. response time: 1 hour
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ p: 4, borderRadius: 4, boxShadow: 4 }}>
            <Stack spacing={2} component="form" noValidate autoComplete="off">
              <TextField label="Full Name" fullWidth required variant="outlined" />
              <TextField label="Email" type="email" fullWidth required variant="outlined" />
              <TextField label="Message" multiline rows={4} fullWidth required variant="outlined" />
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ChatIcon />}
                sx={{ mt: 2, borderRadius: 2, alignSelf: 'center', minWidth: 160, px: 4 }}
              >
                Submit
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                href="https://calendly.com/"
                target="_blank"
                sx={{ mt: 1, borderRadius: 2, alignSelf: 'center', minWidth: 160, px: 4 }}
              >
                Schedule a Call
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    <ConstantBot />
  </Box>
);

export default Contact;
