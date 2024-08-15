import React, { useContext } from 'react';
import { Box, Pagination } from '@mui/material';
import { SearchContext } from '../context/SearchContext';

const PaginationComponent = () => {
  const { apiResponse, currentPage, handlePageChange } = useContext(SearchContext);

  return (
    <Box mt={2} display="flex" justifyContent="center">
      {apiResponse.results?.length > 0 && (
        <Pagination
          count={apiResponse.pagination.totalPages}
          page={currentPage}
          onChange={(evt, val) => handlePageChange(val)}
          sx={{
            mb: 2,
            '& .MuiPaginationItem-root': {
              color: '#3a23ad',
            },
            '& .Mui-selected': {
              backgroundColor: '#3a23ad', 
              color: 'white',
            },
            '& .MuiPaginationItem-ellipsis': {
              color: '#3a23ad',
            },
          }}
        />
      )}
    </Box>
  );
};

export default PaginationComponent;
