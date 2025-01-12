import React, { forwardRef } from 'react';
import { Box, Typography, Input } from '@mui/material';

const TextBox = forwardRef(({ label, type, pholder, value, onChange, error, helperText }, ref) => {
  return (
    <Box height='100%' width='100%'>
      <Typography fontFamily='Poppins' fontSize='14px' fontWeight='600' color='#374151'>
        {label}
      </Typography>
      <Box height='auto' width='100%' borderRadius='8px' border='1px solid #D1D5DB'
        display='flex' alignItems='center' padding='12px' bgcolor='#FFFFFF' >
        <Input placeholder={pholder} type={type} disableUnderline fullWidth 
          inputRef={ref} value={value} onChange={onChange} error = {error} />
      </Box>
    </Box>
  );
});

export default TextBox;
