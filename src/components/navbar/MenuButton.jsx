import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { IoClose, IoMenuOutline } from 'react-icons/io5'

const MenuButton = () => {

    const [menu, setMenu] = useState(true)
  return (
    <Box sx={{
        height : '40px',
        width : '40px',
        padding : '8px',
        textAlign : 'center',
        bgcolor : 'white',
        boxSizing : 'border-box',
        borderRadius : '5px',
        border : '0.5 px solid orange',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
       }}>
        <Button
              disableElevation
              disableRipple
              sx={{
          width : '24px',
          height : '24px',
          '&:active': {
             backgroundColor: 'transparent',
                      },  
        }}
        onClick={() => setMenu(prev => !prev)}>
          {
            menu ? <IoMenuOutline color="orange" style={{scale : '1.5'}}/> : 
                    <IoClose color='orange' style={{scale : '1.5'}}/>
          }    
        </Button>
       

       </Box>
  )
}

export default MenuButton
