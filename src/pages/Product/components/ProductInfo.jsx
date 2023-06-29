import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { formatPrice } from 'utils';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;

  return (
    <Box sx={{ paddingBottom: '20px', borderBottom: '1px solid #e4e1e1' }}>
      <Typography sx={{ textTransform: 'uppercase' }} component="h1" variant="h4">
        {name}
      </Typography>

      <Typography sx={{ mt: 2 }} variant="body2">
        {shortDescription}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'baseline', backgroundColor: '#ded9d9', padding: '16px 8px', mt: 1.5 }}>
        <Typography sx={{ mr: 2.5, fontSize: '24px', fontWeight: '500' }} component="span">
          {formatPrice(salePrice)}
        </Typography>
        {promotionPercent > 0 && (
          <>
            <Typography sx={{ mr: 2.5, textDecoration: 'line-through' }} component="span">
              {formatPrice(originalPrice)}
            </Typography>
            <Typography component="span">{`-${promotionPercent}%`}</Typography>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
