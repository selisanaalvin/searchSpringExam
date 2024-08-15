import React, { useState, useContext, useEffect } from 'react';
import { Box, Typography, Breadcrumbs } from '@mui/material';
import { SearchContext } from '../context/SearchContext';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import config from '../config';

const styles = {
  breadcrumbContainer: {
    padding: '150px 100px 10px 20px',
  },
  breadcrumbHome: {
    fontSize: '17px', // Adjust font size as needed
    color: '#3a23ad', // Optional: Adjust text color
  }, 

};

const BreadcrumbNavigation = () => {
  const { searchQuery } = useContext(SearchContext);

  const [exist, setExist] = useState([]);

  useEffect(() => {
    const filtered = config.NavigationList.filter(item =>
      item.label.toUpperCase().includes(searchQuery.toUpperCase())
    );
    setExist(filtered);
  }, [searchQuery]);

  const breadcrumbs = [
    <Typography key="home" sx={styles.breadcrumbHome}>
      Home
    </Typography>,
    <Typography key="search">
      {exist.length ? searchQuery: `Search Result for ${searchQuery}`}
    </Typography>,
  ];

  return (
    <Box sx={styles.breadcrumbContainer}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbNavigation;
