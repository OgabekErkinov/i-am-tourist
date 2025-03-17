import { Box, Typography, TextField } from '@mui/material';
import useStore from '../../Store/store';
import { forwardRef } from 'react';

const DateBox = forwardRef(({ label, error, helperText, ...props }, ref) => {

  const { themeColors } = useStore()

  return (
    <Box width="100%">
      <Typography fontFamily="Poppins" fontSize="14px" fontWeight="600" color={themeColors.text} mb={0.5}>
        {label}
      </Typography>
      <TextField sx={{bgcolor : '#fff', borderRadius : '10px'}}
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
});

export default DateBox;
