import { unwrapResult } from '@reduxjs/toolkit';
import RegisterForm from 'Auth/components/RegisterForm';
import { register } from 'Auth/userSlice';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

Register.propTypes = {
  onClose: PropTypes.func,
};

function Register({ onClose }) {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.user)
  console.log(isLoading)

  const handleSubmit = async (values) => {
    try {
      // console.log('values: ', values);

      // auto set username = email
      values.username = values.email;

      const resultAction = await dispatch(register(values));
      const user = unwrapResult(resultAction);

      console.log('New User: ', user);
    } catch (error) {
      console.log('Failed to register: ', error);
    }
  };

  return (
    <>
      <RegisterForm onSubmit={handleSubmit} onClose={onClose} />
    </>
  );
}

export default Register;
