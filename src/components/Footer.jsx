import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#fff', color: '#000', px: 4, py: 6 }}>
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} sm={4} md={3}>
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              component="img"
              src="https://via.placeholder.com/40" // Replace with your logo
              alt="logo"
              sx={{ width: 40, height: 40 }}
            />
            <Typography variant="h6" fontWeight="bold">
              marketplace
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" mt={1}>
            by <strong>AI Planet</strong>
          </Typography>
          <Typography variant="body2" mt={2}>
            Making Secure & Private AI<br />
            Accessible for All
          </Typography>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Typography fontWeight="bold">Marketplace</Typography>
          <Box mt={1}>
            {['Models', 'Pricing', 'AI in Education', 'Solutions', 'Docs'].map((text) => (
              <Link href="#" underline="none" display="block" color="inherit" key={text}>
                {text}
              </Link>
            ))}
          </Box>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Typography fontWeight="bold">Company</Typography>
          <Box mt={1}>
            {['About Us', 'Contact'].map((text) => (
              <Link href="#" underline="none" display="block" color="inherit" key={text}>
                {text}
              </Link>
            ))}
          </Box>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Typography fontWeight="bold">Legal</Typography>
          <Box mt={1}>
            {['Terms & Conditions', 'Privacy Policy'].map((text) => (
              <Link href="#" underline="none" display="block" color="inherit" key={text}>
                {text}
              </Link>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Typography fontWeight="bold">Follow Us</Typography>
          <Box mt={1} display="flex" gap={1}>
            <IconButton>
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <TwitterIcon fontSize="small" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box textAlign="center" mt={6} fontSize="14px" color="text.secondary">
        © 2025 AI Marketplace
      </Box>
    </Box>
  );
};

export default Footer;
