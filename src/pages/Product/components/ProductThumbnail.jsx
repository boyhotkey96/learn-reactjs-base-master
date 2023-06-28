import { Box } from '@mui/material';
import { STATIC_HOST, THUMNAIL_PLACEHOLDER } from 'constants';
import PropTypes from 'prop-types';

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumbnail({ product = {} }) {
  const thumnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMNAIL_PLACEHOLDER;

  return (
    <Box>
      <img src={thumnailUrl} alt="thumbnail" width="100%" />
    </Box>
  );
}

export default ProductThumbnail;
