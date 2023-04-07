import { unwrapResult } from '@reduxjs/toolkit';
import RegisterForm from 'Auth/components/RegisterForm';
import { register } from 'Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register({ closeDialog }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      // console.log('values: ', values);

      // auto set username = email
      // values.username = values.email;
      const resultAction = await dispatch(register(values));
      const user = unwrapResult(resultAction);

      console.log('New User: ', user);

      // close dialog after register successfully.
      closeDialog();

      // variant could be success, error, warning, info, or default
      enqueueSnackbar('Register successfully!', { variant: 'success' });
    } catch (error) {
      console.log('Failed to register: ', error.message);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <>
      <RegisterForm onSubmit={handleSubmit} closeDialog={closeDialog} />
    </>
  );
}

export default Register;
