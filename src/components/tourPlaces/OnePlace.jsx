import { Box, Stack, Typography } from '@mui/material';

const OnePlace = ({ place }) => {
  return (
    <Stack
      height={'auto'}
      width={'100%'}
      maxWidth={'400px'}
      boxSizing={'border-box'}
      alignItems={'start'}
      sx={{
        '@media (max-width: 600px)': {
          width: '100%',  
        },
      }}
    >
      {/* Rasm va gradient qismi */}
      <Box
        height={'192px'}
        width={'100%'}
        sx={{
          backgroundImage: `url(${place?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        {/* Overlay gradient */}
        <Box
          height={'100%'}
          width={'100%'}
          position={'absolute'}
          zIndex={1}
          bgcolor={"rgba(0, 0, 0, 0.4)"}
        />
      </Box>

      {/* Info qismi */}
      <Stack
        height={'164px'}
        width={'100%'}
        alignItems={'start'}
        gap={'8px'}
        padding={'16px'}
        boxSizing={'border-box'}
        sx={{
          background: 'linear-gradient(to bottom right, #F59E0B, #EC4899)',
          '@media (max-width: 600px)': {
            padding: '12px', 
          },
        }}
      >
        <Typography
          variant='h4'
          fontFamily={'Poppins'}
          fontSize={'24px'}
          color='white'
          sx={{
            '@media (max-width: 600px)': {
              fontSize: '20px', 
            },
          }}
        >
          {place?.title}
        </Typography>
        <Typography width={'100%'} fontSize={'16px'} color='#E5E7EB'>
          {place?.paragraph}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default OnePlace;
