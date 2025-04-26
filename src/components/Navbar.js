import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleAvatarClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const drawer = (
    <Box sx={{ width: 220 }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={RouterLink} to={item.to} selected={location.pathname === item.to}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ px: 2, py: 1 }}>
        <Button fullWidth variant="contained" color="primary" component={RouterLink} to="/signup" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar position="sticky" color="inherit" elevation={3} sx={{ borderBottom: '2px solid #e3f2fd', bgcolor: '#fff', boxShadow: '0 2px 16px 0 #e3f2fd' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Logo />
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', fontFamily: 'serif', color: '#1976d2', ml: 1 }}>
            GoGetWell AI
          </Typography>
          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {navLinks.map((item) => (
              <Button
                key={item.label}
                component={RouterLink}
                to={item.to}
                color={location.pathname === item.to ? 'primary' : 'inherit'}
                sx={{ fontWeight: 'bold', fontFamily: 'serif', mx: 0.5, borderBottom: location.pathname === item.to ? '2px solid #1976d2' : 'none', borderRadius: 0 }}
              >
                {item.label}
              </Button>
            ))}
            <Button variant="contained" color="primary" component={RouterLink} to="/signup" sx={{ ml: 2, fontWeight: 'bold', borderRadius: 2, boxShadow: 1 }}>
              Get Started
            </Button>
            <IconButton onClick={handleAvatarClick} sx={{ ml: 1 }}>
              <Avatar sx={{ bgcolor: '#ede7f6', color: '#7b1fa2', width: 32, height: 32 }}>
                <PersonIcon />
              </Avatar>
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
              <MenuItem onClick={handleMenuClose} component={RouterLink} to="/login">Login</MenuItem>
              <MenuItem onClick={handleMenuClose} component={RouterLink} to="/signup">Register</MenuItem>
              <MenuItem onClick={handleMenuClose} disabled>Profile (coming soon)</MenuItem>
            </Menu>
          </Box>
          {/* Mobile nav */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }}>
        {drawer}
      </Drawer>
    </AppBar>
  );
}
