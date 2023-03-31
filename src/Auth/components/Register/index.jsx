import RegisterForm from 'Auth/components/RegisterForm';

Register.propTypes = {};

const handleClick = (values) => {
  console.log('values: ', values);
};

function Register({ handleClose }) {
  return (
    <>
      <RegisterForm onSubmit={handleClick} handleClose={handleClose} />
    </>
  );
}

export default Register;
