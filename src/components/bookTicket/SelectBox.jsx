import { Box, MenuItem, Select, Typography, FormHelperText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useStore from '../../Store/store';

const SelectBox = ({ label, error, helperText, ...props }) => {
  const { t } = useTranslation();

  const Countries = t('countries', { returnObjects: true }) || [];
  const { themeColors } = useStore()
  return (
    <Box width='100%'>
      <Typography fontFamily='Poppins' fontSize='14px' fontWeight='600' color={themeColors.text}>
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
      </Box>
      {error && <FormHelperText sx={{ color: '#F87171' }}>{helperText}</FormHelperText>}
    </Box>
  );
};

export default SelectBox;
