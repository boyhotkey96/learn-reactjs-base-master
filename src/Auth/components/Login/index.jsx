import { unwrapResult } from '@reduxjs/toolkit';
import { login, selectIsLoading } from 'Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../LoginForm';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login({ closeDialog }) {
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = async (values) => {
    try {
      const resultAction = await dispatch(login(values));
      const user = unwrapResult(resultAction);
      // console.log('Logged user: ', user);
      closeDialog();
    } catch (error) {
      console.log('Failed to login: ', error.message);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit} closeDialog={closeDialog} isLoading={isLoading} />
    </>
  );
}

export default Login;
