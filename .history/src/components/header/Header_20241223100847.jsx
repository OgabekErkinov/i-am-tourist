import { Box, Stack } from '@mui/material';
import Navbar from '../navbar/Navbar';
import Slider from './Slider';
import Add from '../adds/Add';
import React from 'react';

const Header = () => {
  return (
    <Stack
      height="auto"  
      width={'100%'} 
      boxSizing="border-box">
      <Stack width="100%" 
        height="auto" 
      >
        <Box
          width="100%"
          height="10vh" 
          bgcolor="transparent"
        />
        <Navbar />
        <Slider />
      </Stack>
      <Add />
    </Stack>
  );
}

export default Header;
