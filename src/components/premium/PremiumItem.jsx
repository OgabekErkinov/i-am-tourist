import { Box, Button, Portal, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactModal from '../modals/ContactModal';
import { useResponsive } from '../sizes/screen';

const PremiumItem = ({ tour, idx, rootRef }) => {
    const [openContactModal, setOpenContactModal] = useState(false)
    const {t} = useTranslation()
    const premiumServices = t("premiumToursServices", { returnObjects: true });
    const {smScreen, mdScreen} = useResponsive()
    const sizeFont = smScreen ? '18px' : mdScreen ? '22px' : '30px'
  return (
    <Box height="390px" width='100%' borderRadius="12px" overflow="hidden" position="relative" mx='auto'
         sx={{ transition : '0.3s', backgroundImage: `url(${tour?.image})`, backgroundSize: 'cover',
              '&:hover' : { transform : 'scale(1.02)', transition : '0.3s', } }} >
        <Box height='100%' width='100%'  borderRadius='12px' position='absolute' zIndex={1} bgcolor='rgba(0, 0, 0, 0.5)'>
            <Stack height="100%" width="100%" padding='2rem 0.8rem' alignItems="flex-start" justifyContent='flex-end' gap='1rem'>
                  <Box width='100%' textAlign='start' color='white'>
                     <Typography variant="h3" fontFamily='Poppins' fontSize={sizeFont} fontWeight='600'>
                                 {premiumServices[idx].title}
                      </Typography>
                  </Box>
                  <Box width='100%' color='#D1D5DB' textAlign='start'>
                  <Typography fontWeight='400' fontSize={smScreen ? '18px' : mdScreen ? '20px' :  '16px'}>
                          {premiumServices[idx].paragraph}
                   </Typography>
                  </Box>             
                  <Button variant="contained" sx={{  backgroundColor: '#FF7518', width : '80%',
                                                     height : '2rem', borderRadius : '99px', margin : '0 auto'}}
                          onClick={() => setOpenContactModal(true)}>
                          <Typography color='#FFFFFF' fontFamily='Poppins' fontSize='12px'> 
                             {t("ContactUs")}
                          </Typography>     
                  </Button>
             </Stack>
          </Box>
          { openContactModal && <Portal container={rootRef.current}>
                                   <ContactModal closeFunc={()=>setOpenContactModal(false)}/>
                                 </Portal> }
         
    </Box>
  );
};

export default PremiumItem;
