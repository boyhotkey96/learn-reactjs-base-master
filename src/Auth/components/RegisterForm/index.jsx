import { yupResolver } from '@hookform/resolvers/yup';
import { MailOutlineOutlined, Person2Outlined } from '@mui/icons-material';
import { Button } from '@mui/material';
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
};

function RegisterForm({ onSubmit, handleClose }) {
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

  const handleSubmit = (values) => {
    console.log('log handleSubmit');
    if (onSubmit) {
      onSubmit(values);
      form.reset();
    }
  };

  return (
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
      {/* Test styled component */}
      <CustomizeButton>Cancel</CustomizeButton>
    </form>
  );
}

export default RegisterForm;
