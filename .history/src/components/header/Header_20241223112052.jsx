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
      margin
      boxSizing="border-box"
      border = "1px solid red">
      <Stack width="100%" 
             height="auto"
             border={'1px solid blue'}>
             <Box width="100%"
                  height="10vh" 
                  bgcolor="transparent"
                  border={'1px solid black'}/>
             <Navbar />
             <Slider />
     </Stack>
      <Add />
    </Stack>
  );
}

export default Header;
