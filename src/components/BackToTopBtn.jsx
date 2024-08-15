import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const styles = {
  button: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#3a23ad',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    transition: 'background-color 0.3s ease, opacity 0.3s ease', 
    opacity: 1,
  },
  buttonHidden: {
    opacity: 0,
    pointerEvents: 'none', 
  },
  buttonHover: {
    backgroundColor: '#7e71bc',
  },
};

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      sx={{
        ...styles.button,
        ...(isVisible ? {} : styles.buttonHidden),
      }}
      onClick={scrollToTop}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
    >
      <ArrowUpwardIcon sx={{ color: '#fff' }} />
    </Box>
  );
};

export default BackToTopButton;
