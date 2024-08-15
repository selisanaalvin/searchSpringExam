import React, { useContext } from 'react';
import { Box, Pagination } from '@mui/material';
import { SearchContext } from '../context/SearchContext';

const PaginationComponent = () => {
  const { apiResponse, currentPage, totalPages, handlePageChange } = useContext(SearchContext);
  return (
    <Box mt={2} display="flex" justifyContent="center">
      {apiResponse.results?.length > 0 && <Pagination
        count={apiResponse.pagination.totalPages}
        page={currentPage}
        onChange={(evt, val) => handlePageChange(val)}
        sx={{ mb: 2 }}
      />}
      </Box>
  );
};

export default PaginationComponent;
