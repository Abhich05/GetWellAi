import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Tabs, Tab, Chip, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { MedicalServices, SupportAgent, Store, Public, Group, Diversity3, VerifiedUser, Language, QueryStats, Assessment, PersonAdd, Payment, Language as Multilingual, TrendingUp, Chat, Info } from '@mui/icons-material';
import ConstantBot from '../components/ConstantBot';

const allFeatures = [
  {
    icon: <Store fontSize="large" color="primary" />, title: 'Custom AI-Powered Website', desc: 'Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.', tag: 'For Agents', demo: 'Our AI websites adapt to your brand and automate patient onboarding.' },
  {
    icon: <SupportAgent fontSize="large" color="primary" />, title: 'Enhanced Patient Conversion', desc: 'Smart conversion tools to turn visitors into patients with personalized experiences.', tag: 'For Agents', demo: 'Conversion chatbots and personalized landing pages boost engagement.' },
  {
    icon: <Chat fontSize="large" color="primary" />, title: 'Real-Time Query Handling', desc: 'Instant response system for patient inquiries with AI-powered chat support.', tag: 'For Patients', demo: 'Patients get answers instantly, reducing wait times and improving satisfaction.' },
  {
    icon: <Assessment fontSize="large" color="primary" />, title: 'Medical Report Analysis', desc: 'Advanced AI analysis of medical reports for quick and accurate patient assessments.', tag: 'For Providers', demo: 'Upload a report and get AI-powered summaries and recommendations.' },
  {
    icon: <PersonAdd fontSize="large" color="primary" />, title: 'Improved Lead Generation', desc: 'Data-driven lead generation strategies to attract and engage potential patients.', tag: 'For Agents', demo: 'Automated lead scoring and nurturing tools help you grow.' },
  {
    icon: <MedicalServices fontSize="large" color="primary" />, title: 'Comprehensive Healthcare Database', desc: 'Extensive medical information database for accurate patient guidance and support.', tag: 'For Patients', demo: 'Patients and agents access a global database for trusted info.' },
  {
    icon: <Multilingual fontSize="large" color="primary" />, title: 'Multilingual Support', desc: 'AI-powered multilingual support for global patient engagement.', tag: 'For Patients', demo: 'Patients chat in their preferred language for comfort.' },
  {
    icon: <Payment fontSize="large" color="primary" />, title: 'Seamless Payment Handling', desc: 'Secure, easy payment solutions for cross-border healthcare.', tag: 'For Agents', demo: 'Integrated payment gateways for hassle-free transactions.' },
  {
    icon: <TrendingUp fontSize="large" color="primary" />, title: 'Marketing And SEO Support', desc: 'Boost your online presence with built-in marketing and SEO tools.', tag: 'For Agents', demo: 'Automated SEO audits and campaign suggestions.' },
  {
    icon: <Diversity3 fontSize="large" color="primary" />, title: 'Traditional Touch', desc: 'Respect for diverse cultures and traditions in patient care.', tag: 'For Patients', demo: 'Personalized experiences that honor patient backgrounds.' },
  {
    icon: <VerifiedUser fontSize="large" color="primary" />, title: 'Secure & Compliant', desc: 'Data privacy and compliance with international standards.', tag: 'For Providers', demo: 'HIPAA/GDPR compliance built-in for peace of mind.' },
  {
    icon: <Language fontSize="large" color="primary" />, title: 'Global Reach', desc: 'Expand your services to patients from every continent.', tag: 'For Agents', demo: 'Localization and internationalization for global scaling.' },
];

const tags = ['All', 'For Agents', 'For Patients', 'For Providers'];

const Features = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoContent, setDemoContent] = useState({ title: '', demo: '' });

  const filtered = selectedTag === 'All' ? allFeatures : allFeatures.filter(f => f.tag === selectedTag);

  const handleDemoOpen = (feature) => {
    setDemoContent({ title: feature.title, demo: feature.demo });
    setDemoOpen(true);
  };
  const handleDemoClose = () => setDemoOpen(false);

  return (
    <Box sx={{ background: 'linear-gradient(90deg, #fff 60%, #e3f2fd 100%)', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" fontWeight="bold" align="center" gutterBottom sx={{ fontFamily: 'serif', color: '#1a237e' }}>
          Our Comprehensive Solutions
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 4, fontFamily: 'serif' }}>
          Everything you need to run a modern, global, and culturally respectful medical tourism business.
        </Typography>
        <ConstantBot />
        <Tabs
          value={tags.indexOf(selectedTag)}
          onChange={(_, idx) => setSelectedTag(tags[idx])}
          centered
          sx={{ mb: 4 }}
        >
          {tags.map((t) => (
            <Tab key={t} label={t} />
          ))}
        </Tabs>
        <Grid container spacing={4} justifyContent="center">
          {filtered.map((f, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card elevation={4} sx={{ height: '100%', borderRadius: 4, position: 'relative', overflow: 'visible' }}>
                <CardContent sx={{ textAlign: 'center', py: 5 }}>
                  {f.icon}
                  <Typography variant="h6" fontWeight="bold" mt={2} gutterBottom sx={{ fontFamily: 'serif' }}>
                    {f.title}
                  </Typography>
                  <Typography color="text.secondary">{f.desc}</Typography>
                  <Chip
                    label={f.tag}
                    size="small"
                    sx={{ mt: 2, bgcolor: '#ede7f6', color: '#7b1fa2', fontWeight: 'bold' }}
                  />
                  <Button
                    variant="text"
                    color="primary"
                    size="small"
                    sx={{ mt: 2, fontWeight: 'bold' }}
                    onClick={() => handleDemoOpen(f)}
                  >
                    See it in action
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Dialog open={demoOpen} onClose={handleDemoClose} maxWidth="sm" fullWidth>
          <DialogTitle>{demoContent.title}</DialogTitle>
          <DialogContent>
            <Typography>{demoContent.demo}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDemoClose} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Features;
