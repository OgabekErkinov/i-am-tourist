import { Box, Stack } from '@mui/material';
import Navbar from '../navbar/Navbar';
import Slider from './Slider';
import React from 'react';
import Cards from '../cards/Cards';

const Header = () => {
  return (
    <Box height='auto' width='100%' mb='1rem' bgcolor='transparent'>
        <Stack height="100%" width='100%' gap="2rem" alignItems="center">
             <Stack width="100%" height="100%" alignItems='center'>
                 <Navbar/>
                 <Slider />
          </Stack>
          <Cards />
       </Stack>
    </Box>

  );
}

export default Header;
