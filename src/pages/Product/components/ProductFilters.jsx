import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Filterbycategorie from './filters/Filterbycategorie';
import Filterbyprice from './filters/Filterbyprice';

ProductFilters.propTypes = {
  onChange: PropTypes.func,
};

function ProductFilters({ onChange }) {
  const handleCategorieChange = (categorieId) => {
    if (!onChange) return;

    const newFilters = {
      _page: 1,
      'category.id': categorieId,
    };

    onChange(newFilters);
  };

  const handlePriceChange = (values) => {
    // console.log(values)
    if (!onChange) return;

    const newFilters = {
      _page: 1,
      ...values,
    };

    onChange(newFilters);
  };

  return (
    <Box>
      <Filterbycategorie onChange={handleCategorieChange} />
      <Filterbyprice onChange={handlePriceChange} />
    </Box>
  );
}

export default ProductFilters;
