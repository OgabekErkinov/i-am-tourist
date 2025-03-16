import { Box, Stack, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useResponsive } from '../sizes/screen';
import useStore from '../../Store/store';
import { memo } from 'react';
import CompLoading from '../loadings/CompLoading';

const OnePlace = ({ place }) => {
  const { smScreen, mdScreen } = useResponsive();
  const { t } = useTranslation();
  const {toggleInfoModal, setSelectedPlace} = useStore();

  const handleClick = () => {
    setSelectedPlace(place);
    toggleInfoModal();
  };

  return (
    <>
    {
      !place?.image ? <CompLoading/> : (
        <Stack 
      height="auto" 
      width="100%" 
      borderRadius="12px" 
      overflow="hidden" 
      alignItems="start"
      sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', transition: '0.3s', '&:hover': { transform: 'scale(1.02)' } }}
    >
      {/* Rasm qismi */}
      <Box
        height="200px"
        width="100%"
        sx={{
          backgroundImage: `url(${place?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
          },
        }}
      />

      {/* Matn va tugma qismi */}
      <Stack
        height="164px"
        width="100%"
        alignItems="start"
        gap="8px"
        sx={{ p: { xs: '12px', md: '16px' }, background: 'linear-gradient(to bottom right, #F59E0B, #EC4899)', color: 'white' }}
      >
        <Typography variant="h4" fontFamily="Poppins" fontSize={mdScreen ? '20px' : '24px'} fontWeight="700">
          {place?.title}
        </Typography>
        <Typography fontSize={smScreen ? '12px' : '14px'} color="#E5E7EB" lineHeight="1.5" letterSpacing="0.5px">
          {place?.paragraph}
        </Typography>

        {/* Info tugmasi */}
        <Button 
          sx={{ 
            bgcolor: "white", 
            padding: '6px 18px',
            fontSize: '14px',
            fontWeight: "500",
            color: "black", 
            borderRadius: "20px",
            transition: "0.3s",
            '&:hover': { bgcolor: '#F3F4F6' } 
          }} 
          onClick={handleClick}
        >
          <Typography textTransform="capitalize" fontFamily="Poppins">
            {t("Info")}
          </Typography>
        </Button>
      </Stack>
    </Stack>
      )
     }
     </>
  );
};

export default memo(OnePlace);
