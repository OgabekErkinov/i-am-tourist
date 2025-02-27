import { Box, Stack } from '@mui/material';
import Navbar from '../navbar/Navbar';
import Slider from './Slider';
import React from 'react';
import Cards from '../cards/Cards';
import useStore from '../../Store/store';
import { useResponsive } from '../sizes/screen';

const Header = ({rootRef}) => {
  const {mdScreen, lgScreen} = useResponsive()
    const light = useStore(state => state.light)
    const bgColor = light ? '#F97316' : '#1F2937'
    const boxHeight = lgScreen ? '12vh' : '10vh'

  return (
    <Box height='auto' width='100%' mb='1rem' bgcolor='transparent'>
        <Stack height="100%" width='100%' gap="2rem" alignItems="center">
             <Stack width="100%" height="100%" alignItems='center'>
                 <Navbar root = {rootRef}  />
                 <Slider />
          </Stack>
          <Cards />
       </Stack>
    </Box>

  );
}

export default Header;
