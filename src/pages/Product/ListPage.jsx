import { Box, Container, Grid, Paper, styled } from '@mui/material';
import productApi from 'api/productApi';
import { useEffect, useState } from 'react';
import SkeletonList from './components/SkeletonList';
import ProductList from './components/ProductList';

ListPage.propTypes = {};

const GridLeft = styled(Grid)`
  width: 250px;
`;
const GridRight = styled(Grid)`
  flex: 1;
`;

function ListPage(props) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsloading(true);
        const response = await productApi.getAll({ _page: 1, _limit: 10 });
        const { data } = response;
        setProducts(data);
      } catch (error) {
        console.log('Failed to fetch product: ', error);
      } finally {
        setIsloading(false);
      }
    })();
  }, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={1} p={1}>
          <GridLeft item>
            <Paper elevation={0}>Left column</Paper>
          </GridLeft>
          <GridRight item>
            <Paper elevation={0}>{isLoading ? <SkeletonList /> : <ProductList products={products} />}</Paper>
          </GridRight>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
