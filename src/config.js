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
};

export default config;
