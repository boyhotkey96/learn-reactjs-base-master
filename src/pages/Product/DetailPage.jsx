import { Box, Container, Grid, LinearProgress, Paper, styled } from '@mui/material';
import { Outlet, useParams } from 'react-router-dom';
import AddToCartForm from './components/AddToCartForm';
import ProductInfo from './components/ProductInfo';
import ProductMenu from './components/ProductMenu';
import ProductThumbnail from './components/ProductThumbnail';
import { useProductDetail } from './hooks/useProductDetail';

DetailPage.propTypes = {};

const GridLeft = styled(Grid)`
  width: 400px;
  padding: 10px;
  border-right: 1px solid #d8d5d5;
`;

const GridRight = styled(Grid)`
  flex: 1;
  padding: 10px;
`;

function DetailPage() {
  const params = useParams();
  const { productId } = params;

  const { product, loading } = useProductDetail(productId);

  const handleAddToCart = (values) => {
    console.log('cart form submit: ', values);
  };

  if (loading) {
    return (
      <Box>
        <LinearProgress sx={{ position: 'fixed', top: 0, left: 0, width: '100%' }} color="success" />
      </Box>
    );
  }

  return (
    <Box>
      <Container sx={{ paddingBottom: '20px' }}>
        <Paper elevation={0}>
          <Grid container>
            <GridLeft item>
              <ProductThumbnail product={product} />
            </GridLeft>

            <GridRight item>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCart} />
            </GridRight>
          </Grid>
        </Paper>

        <ProductMenu />
        <Outlet context={product} />
      </Container>
    </Box>
  );
}

export default DetailPage;
