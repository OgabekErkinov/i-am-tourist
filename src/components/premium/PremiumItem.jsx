import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';

const PremiumItem = ({ tour }) => {
  return (
    <Box
      height="384px"
      width="300px"
      borderRadius="12px"
      overflow="hidden"
      position="relative"
      sx={{
        backgroundImage: `url(${tour?.image})`,
        backgroundSize: 'cover',
        
        '@media (max-width: 600px)': {
          width: '100%',
          height: 'auto',
        },
      }}
    >
      <Stack
        height="100%"
        width="100%"
        padding="1rem"
        boxSizing="border-box"
        alignItems="center"
        justifyContent="flex-end"
        spacing={2}
        bgcolor="rgba(0, 0, 0, 0.5)"
        position="absolute"
        zIndex={1}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            fontSize: '22px',
            fontFamily: 'Poppins',
            color: 'white',
            textAlign: 'start',
            paddingRight: '10px',
            margin: 0,
            width: '100%',
           
            '@media (max-width: 600px)': {
              fontSize: '18px',
            },
          }}
        >
          {tour.title}
        </Typography>
        <Typography
          fontSize="16px"
          sx={{
            color: 'white',
            textAlign: 'start',
            
            '@media (max-width: 600px)': {
              fontSize: '14px',
            },
          }}
        >
          {tour.paragraph}
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: 'white',
            backgroundColor: '#FF7518',
            
            '@media (max-width: 600px)': {
              width: '100%',
              padding: '10px 0',
            },
          }}
        >
          Biz bilan bog'laning
        </Button>
      </Stack>
    </Box>
  );
};

export default PremiumItem;
