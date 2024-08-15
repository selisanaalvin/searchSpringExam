import React, { useContext } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { SearchContext } from '../context/SearchContext';
import PaginationComponent from './PaginationComponent';
import 'animate.css';

const ItemList = () => {
  const { apiResponse } = useContext(SearchContext);

  return (
    <>
      <PaginationComponent />
      <Grid container spacing={2}>
        {apiResponse?.results.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card 
              sx={{ 
                position: 'relative', 
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  animation: 'pulse 1s',
                }
              }}
            >
              <CardMedia
                component="img"
                alt={product.name}
                height="100%"
                image={product.thumbnailImageUrl}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography 
                  variant="h6" 
                  color="#3a23ad" 
                  sx={{ fontWeight: 'bold', display: 'inline' }}
                >
                  ${product.price}
                </Typography>
                {product.msrp && product.msrp > product.price && (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="span"
                    sx={{ textDecoration: 'line-through', marginLeft: '8px' }}
                  >
                    ${product.msrp}
                  </Typography>
                )}
                <IconButton
                  color="primary"
                  aria-label="add to cart"
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    backgroundColor: '#3a23ad',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#2e1d92',
                    },
                    borderRadius: '50%',
                    padding: '10px',
                  }}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ItemList;
