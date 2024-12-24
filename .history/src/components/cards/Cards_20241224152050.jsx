import { Box, Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import { addBanners } from '../../Database/db'

const Cards = () => {
  return (
    <Box width={'100%'}
         height={'auto'}
         textAlign={'center'}
         boxSizing={'border-box'}>
          <Box  display={'grid'}
                gridTemplateColumns={useMediaQuery('(max-width : 765px)') ? '1fr' : 'repeat(3, 30%)'}
                gridTemplateRows={useMediaQuery('(max-width : 765px)') ? 'repeat(3, 1fr)' : '1fr'}
                paddingX={'1rem'}
                gap={'1rem'}
                justifyItems={'center'}
                height={'auto'}
                maxWidth={'765px'}
                sx={{
                  '@media (min-width : 900px' : {
                    width : '100%'
                  }
                }}>
                    {
                addBanners.map((item, idx) => {
                    return (
                        <Stack key={idx}
                               height={'10rem'}
                               maxWidth={'765px'}
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
