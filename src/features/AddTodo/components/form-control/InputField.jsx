import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label } = props;
  const { control, formState } = form;
  const { errors, touchedFields } = formState;

  const hasError = touchedFields[name] && errors[name];

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <TextField
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            inputRef={ref}
            fullWidth
            variant="filled"
            placeholder="Enter title"
            label={label}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
    </>
  );
}

export default InputField;
