import { Box, Chip } from '@mui/material';
import PropTypes from 'prop-types';
import styled from 'styled-components';

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

const UlWrapper = styled.ul`
  padding: 0 8px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  gap: 10px;
`;

const CATEGORIE_LIST = ['Thời trang', 'Khẩu trang', 'Làm đẹp', 'Laptop', 'Ổ cứng', 'Điện thoại'];

const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => 'Vận chuyển miễn phí',
    isVisible: () => true,
    isActive: (filters) => filters.isFreeShip,
    isRemovable: false,
    onRemove: (filters) => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };

      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }

      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => 'Có khuyến mãi',
    isVisible: (filters) => filters.isPromotion,
    isActive: () => true,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;

      return newFilters;
    },
    onToggle: () => {},
  },
  {
    id: 3,
    getLabel: (filters) => `Từ ${filters.salePrice_gte} - ${filters.salePrice_lte}`,
    isVisible: (filters) =>
      Object.keys(filters).includes('salePrice_gte') && Object.keys(filters).includes('salePrice_lte'),
    isActive: () => true,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;

      return newFilters;
    },
    onToggle: () => {},
  },
  {
    id: 4,
    getLabel: (filters) => `Danh mục ${CATEGORIE_LIST[filters['category.id'] - 1]}`,
    isVisible: (filters) => Object.keys(filters).includes('category.id'),
    isActive: () => true,
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters['category.id'];

      return newFilters;
    },
    onToggle: () => {},
  },
];

function FilterViewer({ filters = {}, onChange = null }) {
  return (
    <Box component={UlWrapper}>
      {FILTER_LIST.filter((x) => x.isVisible(filters)).map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? 'primary' : 'default'}
            clickable={!x.isRemovable}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return;
                    const newFilters = x.onToggle(filters);
                    onChange(newFilters);
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return;
                    const newFilters = x.onRemove(filters);
                    onChange(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
