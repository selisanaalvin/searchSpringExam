import React, { Suspense, lazy } from 'react';
import SearchBar from './components/SearchBar';
import SearchProvider from './context/SearchContext';
import { Container, CssBaseline, Box, CircularProgress } from '@mui/material';
const ShopingPage = lazy(() => import('./pages/ShopingPage'));

const App = () => {
  return (
    <SearchProvider>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" alignItems="center" my={12}>
          <SearchBar />
          <Suspense fallback={<CircularProgress />}>
            <ShopingPage />
          </Suspense>
        </Box>
      </Container>
    </SearchProvider>
  );
};

export default App;
