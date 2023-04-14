import { Box, Container, Grid, Pagination, Paper, Stack, styled } from '@mui/material';
import productApi from 'api/productApi';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import ProductSkeletonList from './components/ProductSkeletonList';

ListPage.propTypes = {};

const GridLeft = styled(Grid)`
  width: 250px;
`;
const GridRight = styled(Grid)`
  flex: 1;
`;

function ListPage() {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({
    // _limit: 9,
    // _page: 1,
    // _total: 10,
  });
  const [filters, setFilters] = useState({
    _limit: 9,
    _page: 1,
  });
  const [isLoading, setIsloading] = useState(false);

  const styleProductItem = {
    xs: 6,
    md: 4,
    sx: {
      marginBottom: '2px',
      padding: '8px',
    },
  };

  useEffect(() => {
    (async () => {
      try {
        setIsloading(true);

        // Test get api with fetch
        /* const params = {
          _start: 0,
          _limit: 10,
        };
        const url = new URL('https://api.ezfrontend.com/products');
        url.search = new URLSearchParams(params).toString();

        // const paramsString = queryString.stringify(params);
        // const requestUrl = `https://api.ezfrontend.com/products?${paramsString}`;

        const result = await fetch(url);
        const data = await result.json();
        console.log(data) */

        const response = await productApi.getAll(filters);
        // console.log(response);
        const { data, pagination } = response;
        setProducts(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch product: ', error);
      } finally {
        setIsloading(false);
      }
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((prev) => ({
      ...prev,
      _page: page,
    }));
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1} p={1}>
          <GridLeft item>
            <Paper elevation={0}>Left column</Paper>
          </GridLeft>
          <GridRight item>
            <Paper elevation={0}>
              {isLoading ? (
                <ProductSkeletonList {...styleProductItem} length={9} />
              ) : (
                <>
                  <ProductList products={products} styleProductItem={styleProductItem} />
                  <Stack spacing={2}>
                    <Pagination
                      color="primary"
                      shape="rounded"
                      count={Math.ceil(pagination._total / pagination._limit) || -1}
                      page={pagination._page}
                      defaultPage={1}
                      onChange={handlePageChange}
                    />
                  </Stack>
                </>
              )}
            </Paper>
          </GridRight>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;