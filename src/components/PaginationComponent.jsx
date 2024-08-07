import React, { useContext } from 'react';
import { Box, Pagination } from '@mui/material';
import { SearchContext } from '../context/SearchContext';

const PaginationComponent = () => {
  const { products, currentPage, totalPages, handlePageChange } = useContext(SearchContext);
  return (
    <Box mt={2} display="flex" justifyContent="center">
      {products.length > 0 && <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(evt, val) => handlePageChange(val)}
        sx={{ mb: 2 }}
      />}
      </Box>
  );
};

export default PaginationComponent;
