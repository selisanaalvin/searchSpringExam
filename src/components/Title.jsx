// components/Title.js
import React , {useContext, useEffect, useState  } from 'react';
import { Box, Typography } from '@mui/material';
import { SearchContext } from '../context/SearchContext';
const styles = {
  titleContainer: {
    padding: '10px 20px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
};

const Title = () => {
    const { apiResponse} = useContext(SearchContext); 
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
      setPagination(apiResponse.pagination || [])
    }, [apiResponse]);
    return (
        <Box sx={styles.titleContainer}>
        <Typography variant="h6" sx={styles.title}>
            Showing {pagination.begin} - {pagination.end} of {pagination.totalResults} Results
        </Typography>
        </Box>
    );
};

export default Title;
