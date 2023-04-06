import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined, MailOutlineOutlined, Person2Outlined } from '@mui/icons-material';
import { Avatar, Box, Button, DialogActions, DialogContent, LinearProgress, Typography } from '@mui/material';
import { styled } from '@mui/system';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import Proptypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const CustomizeButton = styled(Button)`
  color: white;
  background-color: red;
  display: none;
`;

RegisterForm.propTypes = {
  onSubmit: Proptypes.func,
  onClose: Proptypes.func,
};

function RegisterForm({ onSubmit, onClose }) {
  const signupSchema = yup
    .object({
      username: yup
        .string()
        .trim()
        .required('Please enter your username.')
        // .min(3, 'Min <= 3')
        // .max(25, 'max <= 25')
        .test('Should has at least two words', 'Please enter at least two words.', (value) => {
          return value.split(' ').length >= 2;
        }),
      email: yup.string().trim().required('Please enter your email.').email('Please enter a valid email address.'),
      password: yup
        .string()
        .trim()
        .required('Please enter your password.')
        .min(6, 'Password must be at least 6 characters.'),
      retypepassword: yup
        .string()
        .required('Please enter retype your password.')
        .oneOf([yup.ref('password')], 'Password does not matches.'),
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
    return await new Promise((resolve) =>
      setTimeout(() => {
        if (onSubmit) {
          onSubmit(values);
          form.reset();
        }
      }, 2000)
    );
  };

  const { isSubmitting } = form.formState;

  return (
    <>
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Show loading when submiting */}
        {isSubmitting && <LinearProgress color="success" sx={{ position: 'absolute', top: 1, left: 0, right: 0 }} />}
        <Avatar sx={{ m: 1, backgroundColor: 'deeppink' }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
      </Box>
      <DialogContent>
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

          <Button sx={{ marginTop: '2rem' }} fullWidth size="medium" variant="contained" type="submit">
            Submit
          </Button>
          {/* Using styled component */}
          <CustomizeButton>Cancel</CustomizeButton>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        {/* <Button onClick={handleSubmitForm}>Submit</Button> */}
      </DialogActions>
    </>
  );
}

export default RegisterForm;
