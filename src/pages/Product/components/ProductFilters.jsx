import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Filterbycategorie from './filters/Filterbycategorie';

ProductFilters.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategorieChange = (categorieId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      _page: 1,
      'category.id': categorieId,
    };

    onChange(newFilters);
  };

  return (
    <Box>
      <Filterbycategorie onChange={handleCategorieChange} />
      {/* <Filterbyprice /> */}
    </Box>
  );
}

export default ProductFilters;
