import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

const DateBox = ({ label, error, helperText, ...props }) => {
  return (
    <Box width="100%">
      <Typography fontFamily="Poppins" fontSize="14px" fontWeight="600" color="#374151" mb={0.5}>
        {label}
      </Typography>
      <TextField sx={{bgcolor : 'white', borderRadius : '10px'}}
        fullWidth
        type="date"
        variant="outlined"
        error={!!error}
        helperText={helperText}
        {...props}
        InputLabelProps={{ shrink: true }}
      />
    </Box>
  );
};

export default DateBox;
