import { yupResolver } from '@hookform/resolvers/yup';
import { CloseOutlined, LockOutlined, MailOutlineOutlined, Person2Outlined } from '@mui/icons-material';
import { Avatar, Box, Button, IconButton, LinearProgress, Typography } from '@mui/material';
import { styled } from '@mui/system';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import Proptypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

RegisterForm.propTypes = {
  onSubmit: Proptypes.func,
  closeDialog: Proptypes.func,
};

const CustomizeButton = styled(Button)`
  color: white;
  background-color: red;
  display: none;
`;

function RegisterForm({ onSubmit, closeDialog }) {
  const signupSchema = Yup
    .object({
      username: Yup
        .string()
        .trim()
        .required('Please enter your username.')
        // .min(3, 'Min <= 3')
        // .max(25, 'max <= 25')
        .test('length', 'Please enter at least two words.', (value) => {
          return value && value.split(' ').length >= 2;
        }),
      email: Yup.string().trim().required('Please enter your email.').email('Please enter a valid email address.'),
      password: Yup
        .string()
        .trim()
        .required('Please enter your password.')
        .min(6, 'Password must be at least 6 characters.')
        .oneOf([Yup.ref('retypepassword')]),
      retypepassword: Yup
        .string()
        .trim()
        .required('Please enter retype your password.')
        .oneOf([Yup.ref('password')], 'Password does not matches.'),
        
    })
    .required();

  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      retypepassword: '',
    },
    resolver: yupResolver(signupSchema),
  });

  const handleSubmit = async (values) => {
    // console.log('Values: ', values)

    /* if (onSubmit) {
      await onSubmit(values);
    } */

    // delay 2s when submit register
    const emulatorInternetDelay = new Promise((resolve) =>
      setTimeout(() => {
        resolve('complete delay 2 seconds!');
      }, 2000)
    );

    const result = await emulatorInternetDelay;
    if (result) {
      if (onSubmit) {
        onSubmit(values);
      }
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
          Sign up
        </Typography>
      </Box>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField
          name="username"
          label="Username"
          placeholder="Enter your username"
          form={form}
          disabled
          iconProps={<Person2Outlined />}
        />
        <InputField
          name="email"
          label="Email"
          placeholder="Enter your email"
          form={form}
          disabled
          iconProps={<MailOutlineOutlined />}
        />
        <PasswordField name="password" label="Password" placeholder="Enter your password" form={form} disabled />
        <PasswordField
          name="retypepassword"
          label="Retype Password"
          placeholder="Enter your retype password"
          form={form}
          disabled
        />
        <Button sx={{ marginTop: '2rem' }} fullWidth size="large" variant="contained" type="submit">
          Submit
        </Button>
        {/* Using styled component */}
        <CustomizeButton>Cancel</CustomizeButton>
      </form>
    </>
  );
}

export default RegisterForm;
