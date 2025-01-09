import { Box, Link, List, ListItem, Stack, Typography, Button } from '@mui/material'
import React, { useRef } from 'react'
import { navLinks } from '../../Database/db'
import { IoClose } from 'react-icons/io5'
import useStore from '../../Store/store'
import gsap from 'gsap'
import { useResponsive } from '../sizes/screen'

const MobileMenu = () => {
  const {mdScreen, lgScreen} = useResponsive()
  const light = useStore(state => state.light)
  const widthContainer = mdScreen ? '50vw' : '40vw'
  const bgColor = light ? '#F97316' : '#000000'

  return (
    <Stack width={widthContainer} height='90vh' position='fixed' left='0' top='10vh' zIndex='2' bgcolor={bgColor}>
            <List>
                {
                    navLinks?.map((item, idx) => {
                        return (
                            <ListItem key={item?.id}>
                                <Link href = {item?.link} sx={{ml : idx === 3 ? '8vw' : '0', textDecoration : 'none'}}>
                                   <Typography fontFamily='Poppins' fontSize={mdScreen ? '24px' : '32px'} fontWeight='500' color='#FFFFFF'>
                                      {item?.name}
                                  </Typography>    
                                </Link>
                            </ListItem>
                               )
                    })
                }

            </List>


    </Stack>
  )
}

export default MobileMenu
