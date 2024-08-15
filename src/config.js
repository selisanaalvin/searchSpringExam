const siteID = 'scmq7n';

const config = {
    siteID: siteID,
    searchSpringApi: `https://${siteID}.a.searchspring.io/api/search/search.json`,
    NavigationList: [
        { label: 'New Arrivals', value: 'New Arrivals' },
        { label: 'Dresses', value: 'Dresses' },
        { label: 'Shoes', value: 'Shoes' },
        { label: 'Tops', value: 'Tops' },
        { label: 'Accessories', value: 'Accessories' },
        { label: 'Sales', value: 'Sales' },
      ],
    SortByList: [
        {field: 'relevance', direction: 'desc', label: 'Best Match'},
        {field: 'sales_rank', direction: 'desc', label: 'Best Sellers'},
        {field: 'price', direction: 'desc', label: 'Price ($$$ - $)'},
        {field: 'title', direction: 'asc', label: 'Name (A - Z)'},
        {field: 'title', direction: 'desc', label: 'Name (Z - A)'},
        {field: 'days_since_published', direction: 'asc', label: 'New'},
        {field: 'days_since_published', direction: 'asc', label: 'Featured'},
        {field: 'sale_price', direction: 'desc', label: 'Highest Rated'},
        {field: 'price', direction: 'asc', label: 'Price ($ - $S$)'},
    ],
}
export default config;
