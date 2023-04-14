import { Box, Grid, Typography } from '@mui/material';
import { STATIC_HOST, THUMNAIL_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';

ProductItem.propTypes = {
  product: PropTypes.object,
};

function ProductItem({ product, styleProductItem }) {
  const thumnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMNAIL_PLACEHOLDER;

  return (
    <Grid item {...styleProductItem}>
      <img src={thumnailUrl} alt="images" width="100%" height="200px" />
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
          {new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ''}
      </Typography>
    </Grid>
  );
}

export default ProductItem;