import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login({ closeDialog }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const resultAction = await dispatch(login(values));
      const user = unwrapResult(resultAction);

      console.log('User login: ', user);

      // close dialog after register successfully.
      closeDialog();
    } catch (error) {
      console.log('Failed to login: ', error.message);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit} closeDialog={closeDialog} />
    </>
  );
}

export default Login;
