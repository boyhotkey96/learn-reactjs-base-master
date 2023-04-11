import { unwrapResult } from '@reduxjs/toolkit';
import RegisterForm from 'Auth/components/RegisterForm';
import { register, selectIsLoading } from 'Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register({ closeDialog }) {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      // auto set username = email
      // values.username = values.email;
      const resultAction = await dispatch(register(values));
      const user = unwrapResult(resultAction);
      // console.log('Register user: ', user);

      closeDialog();
      // show toast register successfully
      // variant could be success, error, warning, info, or default
      enqueueSnackbar('Register successfully!', { variant: 'success' });
    } catch (error) {
      console.log('Failed to register: ', error.message);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <>
      <RegisterForm onSubmit={handleSubmit} closeDialog={closeDialog} isLoading={isLoading} />
    </>
  );
}

export default Register;
