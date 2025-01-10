import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { tourPlaces } from '../../Database/db'
import OnePlace from './OnePlace'
import Aos from 'aos';
import { useTranslation } from 'react-i18next';
import { useResponsive } from '../sizes/screen';

const TourPlaces = ({rootRef}) => {
  const {smScreen,mdScreen, lgScreen} = useResponsive()
  const columnsGrid = smScreen ? '1fr' : lgScreen ? 'repeat(2,1fr)' : 'repeat(3,1fr)'
  const sizeFont = smScreen ? '24px' : lgScreen ? '32px' : '40px'
  const {t} = useTranslation()
  useEffect(() => {
    Aos.init({
      duration : '1000'
    })

  },[])
  return (
    <Stack id = 'city' height='auto' width='90%' justifyContent='center' alignItems='center' my='2rem' gap='1rem'>
           <Typography variant='h4' color='black' marginBottom='1rem' fontFamily='Poppins' fontWeight='800'
                       fontSize={sizeFont} textAlign = 'center' data-aos = 'fade-up'>
                         {t("LearnCountry")}
            </Typography>
            <Box height="auto" width= "100%" display="grid" gap="16px" gridTemplateColumns={columnsGrid}>
        {tourPlaces?.map((place, idx) => {
          return <OnePlace place={place} rootRef = {rootRef} idx = {idx} key={idx} />;
        })}
      </Box>
    </Stack>
  );
};

export default TourPlaces;


