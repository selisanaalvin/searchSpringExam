import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const styles = {
  footer: {
    backgroundColor: 'white', 
    color: '#3a23ad',
    padding: '10px 20px', 
    textAlign: 'center',
    borderTop: '4px solid #3a23ad', // Line at the top of the footer
    position: 'relative',
    width: '100%', // Ensure the footer spans the full width
    boxSizing: 'border-box', // Include padding in the width
    marginTop: '100px', // Margin to push the footer down
    left: 0, // Align to the left edge of the viewport
  },
  link: {
    color: '#3a23ad', // Text color for links
    textDecoration: 'none',
    margin: '0 10px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  socialList: {
    listStyle: 'none',
    padding: 0,
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  socialListItem: {
    display: 'inline',
  },
};

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Typography variant="body1">
        <Link href="mailto:selisanaalvin@gmail.com" sx={styles.link}>
          searchSpring@gmail.com
        </Link>
      </Typography>
      <ul style={styles.socialList}>
        <li style={styles.socialListItem}>
          <IconButton
            component={Link}
            href="https://www.linkedin.com/in/alvin-selisana-358b981a2/"
            sx={{ color: '#3a23ad' }}
          >
            <LinkedInIcon />
          </IconButton>
        </li>
        <li style={styles.socialListItem}>
          <IconButton
            component={Link}
            href="https://www.facebook.com/selisanaalvin"
            sx={{ color: '#3a23ad' }}
          >
            <FacebookIcon />
          </IconButton>
        </li>
        <li style={styles.socialListItem}>
          <IconButton
            component={Link}
            href="https://github.com/selisanaalvin"
            sx={{ color: '#3a23ad' }}
          >
            <GitHubIcon />
          </IconButton>
        </li>
      </ul>
    </Box>
  );
};

export default Footer;
