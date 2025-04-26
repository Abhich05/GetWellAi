import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ConstantBot from '../components/ConstantBot';

const plans = [
  {
    name: 'Starter',
    price: '\u20B999/mo',
    features: [
      'Digital Storefront',
      'Basic AI Agents',
      'Email Support',
      'Up to 100 leads/month',
    ],
  },
  {
    name: 'Pro',
    price: '\u20B9249/mo',
    features: [
      'All Starter features',
      'Advanced AI Agents',
      '24/7 Chat Support',
      'Up to 1000 leads/month',
      'JCI Hospital Coordination',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'All Pro features',
      'Dedicated Account Manager',
      'Custom Integrations',
      'Unlimited leads',
    ],
  },
];

const cardSx = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 3,
  boxShadow: 4,
  transition: 'transform 0.2s cubic-bezier(.4,2,.6,1)',
  '&:hover': { transform: 'translateY(-6px) scale(1.03)', boxShadow: 8, borderColor: '#1976d2' },
};

const Pricing = () => (
  <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
    <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
      Pricing Plans
    </Typography>
    <Grid container spacing={4} mt={2} justifyContent="center">
      {plans.map((plan, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Card elevation={3} sx={cardSx}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom align="center">
                {plan.name}
              </Typography>
              <Typography variant="h4" color="primary" align="center" gutterBottom>
                {plan.price}
              </Typography>
              <List>
                {plan.features.map((feature, i) => (
                  <ListItem key={i} sx={{ py: 0.5 }}>
                    <ListItemIcon>
                      <CheckCircleIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
              <Button variant="contained" color="primary" disabled={plan.name === 'Enterprise'} sx={{ borderRadius: 2, px: 4 }}>
                {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    <ConstantBot />
  </Container>
);

export default Pricing;
