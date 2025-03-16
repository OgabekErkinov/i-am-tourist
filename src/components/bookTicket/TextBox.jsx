import React, { forwardRef } from 'react';
import { Box, Typography, Input } from '@mui/material';
import useStore from '../../Store/store';

const TextBox = forwardRef(({ label, type, pholder, value, onChange, error, helperText, onlyNumbers }, ref) => {
  
  const { themeColors } = useStore()

  const handleChange = (e) => {
    let newValue = e.target.value;
    
    if (onlyNumbers) {
      newValue = newValue.replace(/\D/g, '');
    }

    onChange({ target: { value: newValue } });
  };

  return (
    <Box height='100%' width='100%'>
      <Typography fontFamily='Poppins' fontSize='14px' fontWeight='600' color={themeColors.text}>
        {label}
      </Typography>
      <Box height='auto' width='100%' borderRadius='8px' border='1px solid #D1D5DB'
        display='flex' alignItems='center' padding='12px' bgcolor='#FFFFFF'>
        <Input
          placeholder={pholder}
          type={type}
          disableUnderline
          fullWidth
          inputRef={ref}
          value={value}
          onChange={handleChange} 
          error={error}
        />
      </Box>
      {error && <Typography color="error" fontSize="12px">{helperText}</Typography>}
    </Box>
  );
});

export default TextBox;
