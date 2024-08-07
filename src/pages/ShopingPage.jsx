import React, { useContext, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { SearchContext } from '../context/SearchContext';
import ItemList  from '../components/ItemList';
import PaginationComponent from '../components/PaginationComponent';
const ShopingPage = () => {
  const { loading } = useContext(SearchContext);
  return (
    <Box>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <CircularProgress />
        </Box>):<ItemList/>}
        <PaginationComponent/>
      
    </Box>
  );
};

export default ShopingPage;
