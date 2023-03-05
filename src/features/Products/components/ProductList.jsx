import PropTypes from 'prop-types';

ProductList.propTypes = {
  products: PropTypes.array,
};

function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

export default ProductList;
