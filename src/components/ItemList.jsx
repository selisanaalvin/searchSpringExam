import React, { useContext } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { SearchContext } from '../context/SearchContext';
import PaginationComponent from './PaginationComponent';

const ItemList = () => {
  const { apiResponse } = useContext(SearchContext);
  return (
    <>
    <PaginationComponent/>
    <Grid container spacing={2}>
    
      {apiResponse?.results.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              alt={product.name}
              height="100%"
              image={product.thumbnailImageUrl}
            />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                ${product.price}
                {product.msrp && product.msrp > product.price && (
                  <span style={{ textDecoration: 'line-through', marginLeft: '8px' }}>
                    ${product.msrp}
                  </span>
                )}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default ItemList;
