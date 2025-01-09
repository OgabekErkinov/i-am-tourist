import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { tourPlaces } from '../../Database/db'
import OnePlace from './OnePlace'
import Aos from 'aos';
import { useTranslation } from 'react-i18next';
import { useResponsive } from '../sizes/screen';

const TourPlaces = ({rootRef}) => {
  const {mdScreen, lgScreen, xlgScreen} = useResponsive()
  const columnsGrid = mdScreen ? '1fr' : xlgScreen ? 'repeat(2,1fr)' : 'repeat(3,1fr)'
  const {t} = useTranslation()
  useEffect(() => {
    Aos.init({
      duration : '1000'
    })

  },[])
  return (
    <Stack id = 'city' height='auto' width='90%' justifyContent='center' alignItems='center' my='2rem' gap='1rem'>
           <Typography variant='h4' color='black' marginBottom='1rem' fontFamily='Poppins' fontWeight='800'
                       fontSize='40px' data-aos = 'fade-up'
                       sx={{
                         '@media (max-width: 900px)': {
                                  fontSize: '32px',
                                  textAlign: 'center' },
                         '@media (max-width: 600px)': {
                                  fontSize: '24px' } }} >
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


