import React, { Suspense, lazy } from 'react';
import SearchProvider from './context/SearchContext';
import Header from './components/Header';
import NaviagtorTabs from './components/NaviagtorTabs'
import Title from './components/Title'
import { Container, CssBaseline, Box, CircularProgress } from '@mui/material';
const ShopingPage = lazy(() => import('./pages/ShopingPage'));
import './App.css'; 

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(58, 35, 173, 0.9)',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SearchProvider>
        <CssBaseline />
        <Container maxWidth="lg">
            <Header />
            <NaviagtorTabs/>
            <Title/>
            <Box display="flex" flexDirection="column" alignItems="center" my={12}>
            <Suspense fallback={<CircularProgress />}>
              <ShopingPage />
            </Suspense>
          </Box>
        </Container>
      </SearchProvider>
    </ThemeProvider>
  );
};

export default App;
