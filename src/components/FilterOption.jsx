import React, { useContext, useEffect, useState } from 'react';
import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material';
import { SearchContext } from '../context/SearchContext';
import config from '../config';

const styles = {
  filterContainer: {
    display: 'flex',
    alignItems: 'left',
    padding: '10px 20px',
    backgroundColor: '#f5f5f5',
    marginTop: '20px',
  },
  formControl: {
    marginLeft: '20px',
    minWidth: 120,
  },
};

const FilterOptions = () => {
  const { apiResponse, setSort, setPerPage } = useContext(SearchContext); 
  const [productsorting, setProductSorting] = useState(config.SortByList);

  useEffect(() => {
    if (apiResponse) {
      setProductSorting(apiResponse?.sorting?.options || productsorting);
    }
  }, [apiResponse]);

  return (
    <Box sx={styles.filterContainer}>
      <FormControl sx={styles.formControl}>
        <InputLabel variant="standard" htmlFor="sort-by">
          Sort by:
        </InputLabel>
        <NativeSelect
          onChange={(e)=> {setSort(JSON.parse(e.target.value))}}
          defaultValue={2}
          inputProps={{
            name: 'Sort',
            id: 'sort-by',
          }}
        >
          {productsorting?.map((item, index) => (
            <option key={index} value={JSON.stringify(item)}>
              {item.label}
            </option>
          ))}
        </NativeSelect>
      </FormControl>

      <FormControl sx={styles.formControl}>
        <InputLabel variant="standard" htmlFor="per-pages">
          Per Pages:
        </InputLabel>
        <NativeSelect
          onChange={(e)=> {setPerPage(e.target.value)}}
          defaultValue={24}
          inputProps={{
            name: 'Pages',
            id: 'per-pages',
          }}
        >
          <option value={24}>24</option>
          <option value={48}>48</option>
          <option value={72}>72</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default FilterOptions;
