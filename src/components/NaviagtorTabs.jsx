import React, { useState, useContext, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { SearchContext } from '../context/SearchContext';
import config from '../config';
import BreadcrumbNavigation from './BreadcrumbNavigation';

const styles = {
  tabsContainer: {
    width: '100vw', 
    backgroundColor: '#3a23ad',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'absolute',
    left: 0,
    zIndex: 1200,
    padding: '20px',
  },
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
    backgroundColor: '#3a23ad',
    padding: '0 16px',
  },
  tab: {
    minWidth: '120px',
    flex: 1,
    textAlign: 'center',
    padding: '12px',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '16px',
    '&.Mui-selected': {
      color: '#ffffff',
    },
  },
  indicator: {
    backgroundColor: '#00cee1',
  },
  content: {
    marginTop: '80px',
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
    <Box className="ss-nav-bar">
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
