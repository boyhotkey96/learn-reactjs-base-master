import { yupResolver } from '@hookform/resolvers/yup';
import Proptypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from './form-control/InputField';
import './style.scss';

TodoForm.propTypes = {
  onSubmit: Proptypes.func,
};

function TodoForm({ onSubmit }) {
  // const [value, setValue] = useState('');

  const schema = yup
    .object({
      title: yup.string().required('Please enter your title').min(3, 'Min <= 3').max(15, 'max <= 15'),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    /* e.preventDefault();
    if (!onSubmit) return;
    onSubmit(value);
    setValue('');
    e.focus(); */

    if (onSubmit) {
      onSubmit(values);
      form.reset();
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      {/* <input type="text" value={value} onChange={(e) => setValue(e.target.value)} /> */}
      <InputField name="title" label="Todo" form={form} disabled />
    </form>
  );
}

export default TodoForm;
