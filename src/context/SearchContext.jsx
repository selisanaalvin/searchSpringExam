import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      axios.get('http://api.searchspring.net/api/search/search.json', {
        params: {
          siteId: 'scmq7n',
          q: searchQuery,
          resultsFormat: 'native',
          page: currentPage,
        },
      })
      .then(response => {
        setProducts(response.data.results || []);
        setTotalPages(response.data.pagination.totalPages || 0);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
        setLoading(false);
      });
    }
  }, [searchQuery, currentPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        products,
        currentPage,
        totalPages,
        loading,
        setSearchQuery,
        setCurrentPage,
        handlePageChange,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
