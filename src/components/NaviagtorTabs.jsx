import React, { useState, useContext, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { SearchContext } from '../context/SearchContext';
import config from '../config';
import BreadcrumbNavigation from './BreadcrumbNavigation';

const styles = {
  tabsContainer: {
    width: '100vw', // Ensure full width of the viewport
    backgroundColor: '#3a23ad', // Background color of the navbar
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Optional: Add a subtle shadow
    position: 'absolute', // Optional: Fix the navbar at the top of the page
    left: 0,
    zIndex: 1200, // Ensure the navbar is above other content
    padding: '20px',
  },
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
    backgroundColor: '#3a23ad', // Set background color for the tab area
    padding: '0 16px', // Optional: Add padding if needed
  },
  tab: {
    minWidth: '120px', // Default min width for desktop
    flex: 1,
    textAlign: 'center',
    padding: '12px',
    color: '#ffffff', // Text color for tabs
    fontWeight: 'bold', // Make text bold
    fontSize: '16px', // Adjust font size as needed
    '&.Mui-selected': {
      color: '#ffffff', // Color for the selected tab text
    },
  },
  indicator: {
    backgroundColor: '#00cee1', // Color of the indicator line
  },
  content: {
    marginTop: '80px', // Adjust margin to avoid overlap with the fixed navbar
  },
};

const NavigationTabs = () => {
  const NavigationList = config.NavigationList;
  const { setSearchQuery, setCurrentPage } = useContext(SearchContext);
  const [value, setValue] = useState(NavigationList[0].value);

  useEffect(() => {
    setCurrentPage(1);
    setSearchQuery(value);
  }, [value, setSearchQuery, setCurrentPage]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentPage(1);
    setSearchQuery(newValue);
    console.log('Tab changed to:', newValue);
  };

  return (
    <Box>
      <Box sx={styles.tabsContainer}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="navigation tabs"
          sx={styles.tabs}
          TabIndicatorProps={{ sx: styles.indicator }}
        >
          {NavigationList.map((item) => (
            <Tab key={item.value} label={item.label} sx={styles.tab} value={item.value} />
          ))}
        </Tabs>
      </Box>
      <Box sx={styles.content}>
        <BreadcrumbNavigation />
      </Box>
    </Box>
  );
};

export default NavigationTabs;
