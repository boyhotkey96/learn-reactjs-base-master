import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

ProductList.propTypes = {
  products: PropTypes.array,
};

function ProductList({ products, styleProductItem }) {
  return (
    <Grid container>
      {products.map((product, index) => (
        <ProductItem key={index} product={product} styleProductItem={styleProductItem} />
      ))}
    </Grid>
  );
}

export default ProductList;
