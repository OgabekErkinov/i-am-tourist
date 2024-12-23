import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { BsLightningCharge } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'

const LightDarkButton = () => {

    const [light, setLight] = useState(true)

  return (
    <Box sx={{
        height : '40px',
        width : '40px',
        padding : '8px',
        textAlign : 'center',
        bgcolor : 'white',
        boxSizing : 'border-box',
        borderRadius : '5px',
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
        onClick={() => setLight(prev => !prev)}>
          {
            light ? <BsLightningCharge color="orange" style={{scale : '1.5'}}/> : 
                    <FiSun color='orange' style={{scale : '1.5'}}/>
          }    
        </Button>
       

       </Box>
  )
}

export default LightDarkButton
