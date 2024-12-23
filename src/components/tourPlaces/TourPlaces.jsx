import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { tourPlaces } from '../../Database/db'
import OnePlace from './OnePlace'

const TourPlaces = () => {
  return (
    <Stack
      height={'auto'}
      width={'100%'}
      padding={'120px 20px 20px 80px'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      boxSizing={'border-box'}
    >
      <Typography
        variant='h4'
        color='black'
        marginBottom={'1rem'}
        fontFamily={'Poppins'}
        fontWeight={'bold'}
        sx={{
          '@media (max-width: 900px)': {
            fontSize: '32px',
            textAlign: 'center',
          },
          '@media (max-width: 600px)': {
            fontSize: '24px',
          },
        }}
      >
        Davlatlarni O'rganing
      </Typography>

      <Box
        height={'auto'}
        width={'100%'}
        display={'flex'}
        justifyContent={'start'}
        flexWrap={'wrap'}
        gap={'16px'}
        sx={{
          '@media (max-width: 600px)': {
            justifyContent: 'center',  
            gap: '10px',  
          },
        }}
      >
        {tourPlaces?.map((place, idx) => {
          return <OnePlace place={place} key={idx} />;
        })}
      </Box>
    </Stack>
  );
};

export default TourPlaces;
