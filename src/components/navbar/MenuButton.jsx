import { Box, Button, Portal } from '@mui/material'
import React, { useState } from 'react'
import { IoClose, IoMenuOutline } from 'react-icons/io5'
import MobileMenu from '../modals/MobileMenu'

const MenuButton = () => {
  const [menu, setMenu] = useState(false)
  return (
    <Box height="40px" width="40px" padding="8px" border="0.5px solid orange"  
         borderRadius="5px" overflow="hidden" bgcolor="white">
        <Box height="100%" width="100%"  display="flex" 
             justifyContent="center" alignItems="center">
           <Button disableElevation disableRipple
                  sx={{ width : '24px', height : '24px', '&:active': {backgroundColor: 'transparent'}}}
                  onClick={() => setMenu(prev => !prev)}>
                  { !menu ? <IoMenuOutline color="orange" style={{scale : '1.5'}}/> : 
                            <IoClose color='orange' style={{scale : '1.5'}}/>
                  }    
           </Button>
        </Box>
        {menu &&  <MobileMenu/>}
    </Box>
  )
}

export default MenuButton
