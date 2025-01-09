import { Box, Stack } from '@mui/material';
import Navbar from '../navbar/Navbar';
import Slider from './Slider';
import React from 'react';
import Cards from '../cards/Cards';
import useStore from '../../Store/store';

const Header = () => {
    const light = useStore(state => state.light)
    const bgColor = light ? '#FFFFFF' : '#000000'
  return (
    <Stack height="auto" width='100%' gap="2rem" marginBottom='1rem' bgcolor="transparent" alignItems="center">
          <Stack width="100%" height="auto" alignItems='center'>
              <Box width="100%" height="10vh" bgcolor='white' sx={{transition : '0.4s'}}></Box>
              <Navbar  />
          <Slider />
          </Stack>
          <Cards />
    </Stack>
  );
}

export default Header;
