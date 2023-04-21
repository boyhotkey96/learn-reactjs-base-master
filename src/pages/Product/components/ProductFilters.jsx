import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Filterbycategorie from './filters/Filterbycategorie';
import Filterbyprice from './filters/Filterbyprice';
import Filterbyservice from './filters/Filterbyservice';

ProductFilters.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  // Filterbycategorie
  const handleCategorieChange = (categorie) => {
    if (!onChange) return;

    const newFilters = {
      _page: 1,
      'category.id': categorie.id,
      // 'category.name': categorie.name,
    };

    onChange(newFilters);
  };

  // Filterbyprice
  const handlePriceChange = (values) => {
    // console.log(values)
    if (!onChange) return;

    const newFilters = {
      _page: 1,
      ...values,
    };

    onChange(newFilters);
  };

  // Filterbyservice
  const handleServiceChange = (values) => {
    // console.log(values);
    if (!onChange) return;

    onChange({ ...values, _page: 1 });
  };

  return (
    <Box>
      <Filterbycategorie onChange={handleCategorieChange} />
      <Filterbyprice onChange={handlePriceChange} />
      <Filterbyservice filters={filters} onChange={handleServiceChange} />
    </Box>
  );
}

export default ProductFilters;
