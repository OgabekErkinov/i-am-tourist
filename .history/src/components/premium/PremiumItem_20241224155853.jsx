import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';

const PremiumItem = ({ tour }) => {
  return (
    <Box height="90%"
         display="flex"
         justifyContent="center"
         alignItems="center"
         borderRadius="12px"
         overflow="hidden"
         position="relative"
         sx={{
             transition : '0.3s',
             backgroundImage: `url(${tour?.image})`,
             backgroundSize: 'cover',
             '@media(min-width : 300px)' : {
                         width : '300px',
                         marginX : 'auto'  },
             '@media(min-width : 524px)' : {
                         width : '300px' },
              '&:hover' : {
                transform : 'scale(1.1)',
                transition : '0.3s',
              } }} >
         <Stack height="100%"
                width="100%"
                padding="2rem 0"
                boxSizing="border-box"
                borderRadius="12px"
                alignItems="center"
                bgcolor="rgba(0, 0, 0, 0.5)"
                position="absolute"
                zIndex={1}
                sx={{
          '@media(min-width : 300px)' : {
            justifyContent : 'center',
            alignItems : 'center',
            paddingX : '1rem',
            gap : '1rem'
          },
          '@media(min-width : 524px)' : {
            justifyContent : 'flex-end',
            alignItems : 'start'
          }
        }}
        >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Poppins',
            color: 'white',
            textAlign: 'start',
            paddingRight: '10px',
            margin: 0,
            width: 'auto',
           
            '@media (min-width: 300px)': {
              fontSize: '18px',
            },

            '@media (min-width : 524px)' : {
              fontSize : '22px'
            }
          }}
        >
          {tour.title}
        </Typography>
        <Typography
          width="auto"
          sx={{
            color: 'white',
            textAlign: 'start',
            
            '@media (min-width: 300px)': {
              fontSize: '12px',
              height : 'auto',
              textAlign : 'center'
            },
            '@media (min-width : 524px)' : {
              fontSize : '16px',
              textAlign : 'start'
            }
          }}>
          {tour.paragraph}
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: 'white',
            backgroundColor: '#FF7518',
            width : '80%',
            margin : '0 auto'
          }}>
          Biz bilan bog'laning
        </Button>
      </Stack>
    </Box>
  );
};

export default PremiumItem;
