import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config'
export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cartCount, setCartCount] = useState(10);
  const [apiResponse, setApiReponse] = useState([]);
  const [sort, setSort] = useState(null)
  const [perPage, setPerPage] = useState(24)
  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      axios.get(config.searchSpringApi, {
        params: {
          siteId: config.siteID,
          q: searchQuery,
          resultsFormat: 'native',
          page: currentPage,
          resultsPerPage: perPage,
          ...(sort ? { [`sort.${sort?.field}`]:`${sort.direction} `}: {}),
          
        },
      })
      .then(response => {
        setApiReponse(response.data);
        console.log('products', response.data)
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
        setLoading(false);
      });
    }
  }, [searchQuery, currentPage, sort, perPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= apiResponse.pagination.totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        currentPage,
        loading,
        setSearchQuery,
        setCurrentPage,
        handlePageChange,
        cartCount,
        searchQuery,
        apiResponse,
        setSort,
        setPerPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
