import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Box, FormControl, FormHelperText, IconButton, OutlinedInput, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';

function QuantityField(props) {
  const { form, name, label, placeholder, disabled } = props;
  const { control, register, formState, setValue } = form;
  const { errors, touchedFields } = formState;

  const hasErrors = !!errors[name];

  return (
    <>
      <FormControl error={hasErrors} sx={{}} margin="normal" variant="outlined" size="small">
        <Typography sx={{ fontWeight: '500' }}>{label}</Typography>
        <Controller
          id={name}
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Box sx={{ mt: 1.5 }}>
              <IconButton
                onClick={() =>
                  setValue(name, Number.parseInt(value) > 1 ? Number.parseInt(value) - 1 : Number.parseInt(value))
                }
              >
                <RemoveCircleOutline />
              </IconButton>

              <OutlinedInput
                sx={{ maxWidth: '100px' }}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                variant="outlined"
                type="number"
              />

              <IconButton onClick={() => setValue(name, Number.parseInt(value) + 1)}>
                <AddCircleOutline />
              </IconButton>
            </Box>
          )}
        />
        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </>
  );
}

export default QuantityField;
