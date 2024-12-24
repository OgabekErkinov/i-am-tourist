import { Box, Stack } from '@mui/material';
import Navbar from '../navbar/Navbar';
import Slider from './Slider';
import React from 'react';
import Cards from '../cards/Cards';

const Header = () => {
  return (
    <Stack height="auto"  
           width='100%'
           gap="2rem"
           marginBottom='1rem'
           boxSizing="border-box">
             <Stack width="100%" 
                    height="auto"
                    alignItems='center'>
                         {/* <Box width="100%"
                              height="10vh" 
                              bgcolor="transparent">
                        </Box> */}
                        {/* <Navbar /> */}
                        {/* <Slider /> */}
               </Stack>
               {/* <Cards /> */}
    </Stack>
  );
}

export default Header;
