import { makeStyles } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  error: {
    color: 'red',
  },
  outlinedInputFocused: {
    // color: 'red'
    //
  },
}));

function PasswordField(props) {
  const classes = useStyles();

  const { form, name, label, placeholder, disabled } = props;
  const { control, register, formState } = form;
  const { errors, touchedFields } = formState;
  console.log(errors[name]?.message);

  const hasErrors = touchedFields[name] && errors[name];

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <>
      <FormControl sx={{}} margin="normal" fullWidth variant="outlined">
        <InputLabel htmlFor={name} error={!!hasErrors && 'error'}>
          {label}
        </InputLabel>
        <Controller
          id={name}
          name={name}
          control={control}
          disabled={disabled} 
          render={({ field }) => (
            <OutlinedInput
              {...field}
              // classes={{ root: classes.outlinedInput, label: classes.outlinedInputFocused }}
              fullWidth
              label={label}
              placeholder={placeholder}
              variant="outlined"
              margin="dense"
              error={!!hasErrors}
              // helperText={errors[name]?.message}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          )}
        />
        <FormHelperText error={!!hasErrors && 'error'}>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </>
  );
}

export default PasswordField;
