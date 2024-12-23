import { Box, Typography } from '@mui/material'
import React from 'react'

const SliderItem = ({bgUrl, text}) => {
  return (
    <Box height={'100%'}
         width={'100%'}
         position={'relative'}

         display={'flex'}
         alignContent={'center'}
         justifyContent={'center'}
         sx={{backgroundImage : `url(${bgUrl})`,
              backgroundSize : 'cover',
              backgroundPosition : 'center'}}
         >
            <Typography>{text}</Typography>
        
    </Box>
  )
}

export default SliderItem
