import { Box, Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import { addBanners } from '../../Database/db'

const Cards = () => {
  return (
    <Box width={'100%'}
         height={'auto'}
         display={'flex'}
         justifyContent={'center'}
         alignItems={'center'}
         boxSizing={'border-box'}>
          <Box  display={'grid'}
                gridTemplateColumns={useMediaQuery('(max-width : 765px)') ? '1fr' : 'repeat(3, 1fr)'}
                gap={'1rem'}
                justifyItems={'center'}
                height={'auto'}
                maxWidth={'765px'}>
                    {
                addBanners.map((item, idx) => {
                    return (
                        <Stack key={idx}
                               height={'10rem'}
                               width={}
                               boxShadow = {'1px 1px 5px 1px rgb(95, 99, 105)'}
                               padding={'25px'}
                               bgcolor={'gray.900'}
                               borderRadius={'12px'}
                               alignItems={'start'}
                               justifyContent={'space-evenly'}
                               color={'black'}
                               >
                                  <h3 style={{
                                    fontSize : '20px',
                                    fontFamily : 'Poppins',
                                    fontWeight : 'medium',
                                    lineHeight : '28px',
                                    
                                  }}>{item.heading}</h3>
                                  <p style={{
                                    color : '#A1A1AA',

                                  }}>{item.paragraph}</p>

                       </Stack>
                    )
                })
            }

          </Box>
    </Box>
    
  )
}

export default Cards
