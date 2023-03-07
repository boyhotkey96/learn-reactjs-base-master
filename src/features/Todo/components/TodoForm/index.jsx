import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm({ onSubmit }) {
  const schema = yup
    .object({
      title: yup.string().required('Please enter title').min(3, 'Min >= 3').max(18, 'Max <= 18'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    // console.log(values);
    if (onSubmit) {
      onSubmit(values);
      form.reset();
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} disabled />
    </form>
  );
}

export default TodoForm;
