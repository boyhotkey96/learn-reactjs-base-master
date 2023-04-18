import { Box, Tab, Tabs, styled } from '@mui/material';
import PropTypes from 'prop-types';

ProductSortPrice.propTypes = {
  currentValue: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

const CustomTab = styled(Tab)`
  text-transform: unset;
`;

function ProductSortPrice({ currentValue, onChange }) {
  const handleSortChange = (e, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={currentValue} onChange={handleSortChange} aria-label="basic tabs example">
        <CustomTab label="Phổ biến" value="default" />
        <CustomTab label="Giá thấp" value="salePrice:ASC" />
        <CustomTab label="Giá cao" value="salePrice:DESC" />
      </Tabs>
    </Box>
  );
}

export default ProductSortPrice;
