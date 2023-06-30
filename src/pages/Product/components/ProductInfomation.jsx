import React from 'react';
import PropTypes from 'prop-types';

ProductInfomation.propTypes = {
  product: PropTypes.object,
};

function ProductInfomation({product = {}}) {
  return (
    <div>
      Additional
    </div>
  );
}

export default ProductInfomation;