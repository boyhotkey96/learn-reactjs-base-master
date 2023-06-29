import { Box, Container, Grid, Paper, styled } from '@mui/material';
import { useParams } from 'react-router-dom';
import AddToCartForm from './components/AddToCartForm';
import ProductInfo from './components/ProductInfo';
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

function DetailPage(props) {
  const params = useParams();
  const { productId } = params;

  const { product, loading } = useProductDetail(productId);

  const handleAddFormToCart = (values) => {
    console.log('form submit', values);
  };

  const handleAddToCart = (values) => {
    console.log('cart form submit: ', values);
  };

  if (loading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box>
      <Container>
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
      </Container>
    </Box>
  );
}

export default DetailPage;
