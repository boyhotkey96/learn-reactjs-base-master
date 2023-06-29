import { yupResolver } from '@hookform/resolvers/yup';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import QuantityField from 'components/form-controls/QuantityField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

// Custom color Button
const theme = createTheme({
  palette: {
    btnbuy: {
      main: 'rgb(255, 57, 69)',
      contrastText: 'rgb(255, 255, 255)',
    },
  },
});

function AddToCartForm({ onSubmit = null }) {
  const signupSchema = Yup.object({
    quantity: Yup.number()
      .required('Please enter quantity')
      .min(1, 'Please enter at least 1')
      .typeError('Please enter number'),
  }).required();

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(signupSchema),
  });

  const handleSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <QuantityField name="quantity" label="Số lượng" form={form} />

        <Button
          sx={{ display: 'block', mt: 1, width: '200px' }}
          size="large"
          color="btnbuy"
          variant="contained"
          type="submit"
        >
          Chọn Mua
        </Button>
      </form>
    </ThemeProvider>
  );
}

export default AddToCartForm;
