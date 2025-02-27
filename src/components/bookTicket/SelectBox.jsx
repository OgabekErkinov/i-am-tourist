import { Box, MenuItem, Select, Typography, FormHelperText } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const SelectBox = ({ label, error, helperText, ...props }) => {
  const { t } = useTranslation();
  const Countries = t('countries', { returnObjects: true }) || [];

  return (
    <Box width='100%'>
      <Typography fontFamily='Poppins' fontSize='14px' fontWeight='600' color='#374151'>
        {label}
      </Typography>
      <Box width='100%'>
        <Select style={{backgroundColor:'white'}}
          fullWidth
          displayEmpty
          error={!!error}
          {...props}
          sx={{
            borderRadius: '8px',
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#F97316" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#F97316" },
          }}
        >
          <MenuItem value="" disabled>
            {t("SelectOption")}
          </MenuItem>
          {Countries.map((country, idx) => (
            <MenuItem key={idx} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
        {error && <FormHelperText sx={{ color: '#F87171' }}>{helperText}</FormHelperText>}
      </Box>
    </Box>
  );
};

export default SelectBox;
