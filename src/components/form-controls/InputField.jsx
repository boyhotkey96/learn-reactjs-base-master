import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

function InputField(props) {
  const { form, name, label, disabled } = props;
  const { control, register, formState } = form;
  const { errors, touchedFields } = formState;

  console.log(errors[name]);
  console.log(touchedFields[name]);

  const hasErrors = touchedFields[name] && errors[name];

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            // {...register(name, {
            //   required: 'Please enter your title',
            //   minLength: { value: 3, message: 'Min >= 3' },
            //   maxLength: { value: 18, message: 'Max <= 18' },
            // })}
            label={label}
            placeholder="Enter title"
            fullWidth
            // error={errors[name] && touchedFields[name]}
            error={!!hasErrors}
            helperText={errors[name]?.message}
          />
        )}
        disabled={disabled}
      />
    </>
  );
}

export default InputField;
