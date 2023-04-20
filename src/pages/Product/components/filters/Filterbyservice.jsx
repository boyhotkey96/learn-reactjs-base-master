import { Box, Checkbox, FormControlLabel, FormGroup, Typography, styled } from '@mui/material';
import PropTypes from 'prop-types';

Filterbyservice.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

const Wrapper = styled(Box)`
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;

// https://api.ezfrontend.com/products?_start=0&_limit=10&isPromotion=true

function Filterbyservice({ filters, onChange }) {
  /* const [isChecked, setIsChecked] = useState({
    isPromotion: false,
    isFreeShip: false,
  }); */

  const serviceList = [
    { value: 'isPromotion', label: 'Có khuyến mãi' },
    { value: 'isFreeShip', label: 'Vận chuyển miễn phí' },
  ];

  const handleChange = (e) => {
    const { name, checked } = e.target;

    /* setIsChecked((prev) => ({
      ...prev,
      [name]: checked,
    })); */

    if (!onChange) return;
    onChange({ [name]: checked });
  };

  return (
    <Wrapper>
      <Typography variant="subtitle2" textTransform="uppercase">
        Dịch vụ
      </Typography>

      <FormGroup sx={{ marginTop: '15px' }}>
        {serviceList.map((service, index) => (
          <FormControlLabel
            sx={{ marginLeft: 'unset' }}
            key={index}
            label={service.label}
            control={
              <Checkbox
                sx={{ padding: '3px' }}
                name={service.value}
                checked={Boolean(filters[service.value])}
                onChange={handleChange}
              />
            }
          />
        ))}
      </FormGroup>

      {/* <FormGroup sx={{ marginTop: '15px' }}>
        <FormControlLabel
          sx={{ marginLeft: 'unset' }}
          label="Promotion"
          control={
            <Checkbox
              sx={{ padding: '3px' }}
              name="isPromotion"
              checked={isChecked.isPromotion}
              onChange={handleChange}
            />
          }
        />
        <FormControlLabel
          sx={{ marginLeft: 'unset' }}
          label="Free ship"
          control={
            <Checkbox
              sx={{ padding: '3px' }}
              name="isFreeShip"
              checked={isChecked.isFreeShip}
              onChange={handleChange}
            />
          }
        />
      </FormGroup> */}
    </Wrapper>
  );
}

export default Filterbyservice;
