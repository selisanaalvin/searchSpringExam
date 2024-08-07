import React, { useState, useContext } from 'react';
import { Button, TextField, Box, IconButton, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchContext } from '../context/SearchContext';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { setSearchQuery, setCurrentPage, loading } = useContext(SearchContext);

  const handleSearch = () => {
    setCurrentPage(1);
    setSearchQuery(query);
  };

  return (
    <Box display="flex" mb={2} alignItems="center">
      <TextField
        label="Search for Brand, Color, Size..."
        variant="standard"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <IconButton onClick={handleSearch} color="primary" aria-label="search">
        {loading ? <CircularProgress size={24} /> : <SearchIcon />}
      </IconButton>
    </Box>
  );
};

export default SearchBar;
