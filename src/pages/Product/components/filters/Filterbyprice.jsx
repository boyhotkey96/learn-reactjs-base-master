import { Box, Button, Typography, styled } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { NumberFormatBase } from 'react-number-format';

Filterbyprice.propTypes = {
  onChange: PropTypes.func,
};

const Wrapper = styled(Box)`
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;

// https://api.ezfrontend.com/products?_start=0&_limit=10&salePrice_lte=1000000&&salePrice_gte=100000

function Filterbyprice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: null,
    salePrice_lte: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!onChange) return;

    onChange(values);

    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };

  return (
    <Wrapper>
      <Typography variant="subtitle2" textTransform="uppercase">
        Chọn khoảng giá
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15px' }}>
        <NumberFormatBase
          style={{ padding: '6px 8px', width: '50%' }}
          name="salePrice_gte"
          value={values.salePrice_gte}
          placeholder="0"
          onChange={handleChange}
          className="foo"
          displayType={'number'}
          // thousandSeparator={true}
          prefix={'$'}
          renderText={(value, props) => <div {...props}>{value}</div>}
        />
        <Typography sx={{ marginLeft: '5px', marginRight: '5px' }}>-</Typography>
        <NumberFormatBase
          style={{ padding: '6px 8px', width: '50%' }}
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleChange}
          className="foo"
          placeholder="0"
          displayType={'number'}
          // thousandSeparator={true}
          prefix={'$'}
          renderText={(value, props) => <div {...props}>{value}</div>}
        />
        {/* <TextField type="number" variant="outlined" value={valueFrom} onChange={handleFromChange} /> */}
        {/* <TextField variant="outlined" value={valueTo} onChange={handleToChange} /> */}
      </Box>

      <Button sx={{ marginTop: '10px' }} variant="outlined" color="primary" onClick={handleSubmit}>
        Áp dụng
      </Button>
    </Wrapper>
  );
}

export default Filterbyprice;
