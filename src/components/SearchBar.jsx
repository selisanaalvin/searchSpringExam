import React, { useState, useContext } from 'react';
import { Button, TextField, Box, IconButton, CircularProgress, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { SearchContext } from '../context/SearchContext';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { setSearchQuery, setCurrentPage, loading, cartCount } = useContext(SearchContext);
  
  const handleSearch = () => {
    setCurrentPage(1);
    setSearchQuery(query);
  };

  return (
    <Box display="flex" mb={2} alignItems="center" className="ss-search-box">
      <TextField
        label="Search for Brand, Color, Size..."
        variant="standard"
        value={query}
        className="ss-searchtextfield"
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <IconButton onClick={handleSearch} color="primary" aria-label="search">
        {loading ? <CircularProgress size={24} /> : <SearchIcon />}
      </IconButton>
      <IconButton color="primary" aria-label="shopping cart">
      <Badge badgeContent={cartCount} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
    </Box>
  );
};

export default SearchBar;
