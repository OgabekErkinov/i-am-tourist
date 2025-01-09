import { Box, Stack, Typography, Button, Portal } from '@mui/material';
import { useState } from 'react';
import InfoPlaceModal from '../modals/InfoPlaceModal';
import { useTranslation } from 'react-i18next';
import { useResponsive } from '../sizes/screen';

const OnePlace = ({ place, rootRef, idx }) => {
  const [openInfoModal, setOpenInfoModal] = useState(false)
  const {mdScreen, lgScreen, xlgScreen} = useResponsive()
  const {t} = useTranslation()
  const places = t("tourPlaces", { returnObjects: true })

  return (
    <Stack height='auto' width="100%" borderRadius='12px' overflow='hidden' alignItems='start'>
           <Box height='192px' width='100%'
                sx={{
                   backgroundImage: `url(${place?.image})`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   position: 'relative'  }}>
           </Box>

      <Stack height='164px' width='100%' alignItems='start' gap='8px' padding='16px' position="relative"
             sx={{
                background: 'linear-gradient(to bottom right, #F59E0B, #EC4899)',
               '@media (max-width: 600px)': {
                       padding: '12px' } }}>
        <Typography variant='h4'
                    fontFamily={'Poppins'}
                    fontSize={'24px'}
                    color='white'
                    sx={{
                      '@media (max-width: 600px)': {
                               fontSize: '20px' } }} >
          {places[idx]?.title}
        </Typography>
        <Typography width={'100%'} 
                    fontSize={'16px'} 
                    color='#E5E7EB'>
          {places[idx]?.paragraph}
        </Typography>
        <Box display = "flex" justifyContent="flex-start" alignItems="flex-end" 
             width="95%" m="auto" pt="10px" position="absolute" bottom="10px" left="10px">
        <Button sx={{
          height : '28px',
          width : 'auto',
          bgcolor : '#FFFFFF',
          padding : '4px 16px' }}
          onClick={()=>setOpenInfoModal(true)}>
          <Typography textTransform = "lowercase"
                      fontSize="14px"
                      fontWeight="400"
                      color="black"
                      sx={{ "::first-letter": { textTransform: "uppercase" } }}>
            {t("Info")}
          </Typography> 
        </Button>

        </Box>
        {openInfoModal && <Portal container={rootRef.current}>
                             <InfoPlaceModal infoObject = {place} closeFunc = {setOpenInfoModal} root={rootRef}/>
                          </Portal>
        }
       
      </Stack>
    </Stack>
  );
};

export default OnePlace;
