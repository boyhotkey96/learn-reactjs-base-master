import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

ProductList.propTypes = {
  products: PropTypes.array,
};

function ProductList({ products }) {
  return (
    <Grid container>
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </Grid>
  );
}

export default ProductList;
