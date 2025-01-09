import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const PremiumItem = ({ tour, idx }) => {
    const {t} = useTranslation()
    const premiumServices = t("premiumToursServices", { returnObjects: true });
  return (
    <Box height="384px" width='380px' borderRadius="12px" overflow="hidden" position="relative"
         sx={{
             transition : '0.3s',
             backgroundImage: `url(${tour?.image})`,
             backgroundSize: 'cover',
             '@media(max-width : 524px)' : {
                         width : '100%',
                        marginX : 'auto' },
              '@media(max-width : 764px)' : {
                         width : '100%'
              },
              '@media(max-width : 1900px)' : {
                width : '100%'
              },
              '&:hover' : {
                transform : 'scale(1.05)',
                transition : '0.3s',
              } }} >
          <Box height='100%' width='100%'  borderRadius='12px' position='absolute' zIndex={1} bgcolor='rgba(0, 0, 0, 0.5)'>
          <Stack height="100%" width="100%" padding='2rem 0.5rem' alignItems="flex-start" justifyContent='flex-end' gap='1rem'>
                  <Box width='100%' textAlign='start' color='white'>
                     <Typography variant="h3" fontFamily='Poppins' fontSize='30px' fontWeight='600'
                                sx={{
                                 '@media (max-width: 524px)': {
                                         fontSize: '18px'  },
                                 '@media (max-width : 775px)' : {
                                        fontSize : '22px'  }  }}  >
                                 {premiumServices[idx].title}
                      </Typography>
                  </Box>
                  <Box width='100%' color='#D1D5DB' textAlign='start'>
                  <Typography fontWeight='400'
                              sx={{
                               '@media (min-width: 300px)': {
                                        fontSize: '12px',
                                        height : 'auto',
                                        textAlign : 'center' },
                                '@media (min-width : 524px)' : {
                                        fontSize : '16px',
                                        textAlign : 'start' } }}>
                                        {premiumServices[idx].paragraph}
                   </Typography>
                  </Box>             
                  <Button variant="contained"
                           sx={{
                              color: 'white',
                              backgroundColor: '#FF7518',
                              width : '80%',
                              borderRadius : '99px',
                              margin : '0 auto' }}>
                           {t("ContactUs")}
                  </Button>
      </Stack>
          </Box>
         
    </Box>
  );
};

export default PremiumItem;
