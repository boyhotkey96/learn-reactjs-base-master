import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

ProductItem.propTypes = {
  product: PropTypes.object,
};

function ProductItem({ product }) {
  return (
    <Grid item md={4} sx={{ textAlign: 'center', marginBottom: '30px', padding: '8px' }}>
      <img
        src="https://salt.tikicdn.com/cache/280x280/ts/product/a9/a3/87/41910b2e14d1551785b2068c95d9ef26.jpg.webp"
        alt="images"
        height="200x"
      />
      <p>{product.name}</p>
      <p>
        Price: {product.salePrice} - Sale: {product.promotionPercent}%
      </p>
    </Grid>
  );
}

export default ProductItem;
