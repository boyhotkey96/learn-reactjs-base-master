import { yupResolver } from '@hookform/resolvers/yup';
import { CloseOutlined, LockOutlined, Person2Outlined } from '@mui/icons-material';
import { Avatar, Box, Button, IconButton, LinearProgress, Typography } from '@mui/material';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  closeDialog: PropTypes.func,
  isLoading: PropTypes.bool,
};

function LoginForm({ onSubmit, closeDialog, isLoading }) {
  const signupSchema = Yup.object({
    identifier: Yup.string()
      .matches(/^[0-9a-zA-Z_.-]+$/, { message: 'Make sure you enter your username', excludeEmptyString: true })
      .trim()
      .required('Please enter your username.'),
    password: Yup.string().trim().required('Please enter your password.'),
  }).required();

  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(signupSchema),
  });

  const handleSubmit = async (values) => {
    // delay 2s when submit register
    /* const emulatorInternetDelay = new Promise((resolve) =>
      setTimeout(() => {
        resolve('Complete delay 2 seconds!');
      }, 6000)
    ); */

    // Solution 1:
    /* const result = await emulatorInternetDelay;
    if (result) {
      if (onSubmit) {
        onSubmit(values);
      }
    } */

    // Solution 2:
    /* await emulatorInternetDelay.then((data) => {
      console.log(data);
      if (onSubmit) {
        onSubmit(values);
      }
    }); */

    const newValues = {
      ...values,
      identifier: values.identifier.toLowerCase(),
    };
    if (onSubmit) {
      await onSubmit(newValues);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <>
      <IconButton sx={{ position: 'absolute', top: 8, right: 10 }} onClick={closeDialog}>
        <CloseOutlined />
      </IconButton>
      <Box
        sx={{
          marginTop: 4,
          marginBottom: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Show loading when submiting */}
        {isSubmitting && <LinearProgress sx={{ position: 'absolute', top: 2, left: 0, right: 0 }} />}
        <Avatar sx={{ m: 1, backgroundColor: 'deeppink' }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
      </Box>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField
          name="identifier"
          label="Username"
          placeholder="Enter your username"
          form={form}
          disabled
          iconProps={<Person2Outlined />}
        />
        <PasswordField name="password" label="Password" placeholder="Enter your password" form={form} disabled />
        <Button
          sx={{ marginTop: '2rem' }}
          fullWidth
          size="large"
          variant="contained"
          type="submit"
          disabled={isLoading}
        >
          Login
        </Button>
      </form>
    </>
  );
}

export default LoginForm;
