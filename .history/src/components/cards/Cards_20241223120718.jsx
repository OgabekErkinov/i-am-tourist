import { Box, Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import { addBanners } from '../../Database/db'

const Add = () => {
  return (
    <Box width={'100%'}
         height={'225px'}
         display={'flex'}
         justifyContent={'center'}
         alignItems={'center'}
         marginY={'2rem'}
         marginBottom={'1rem'}
         boxSizing={'border-box'}>
          <Box  display={'grid'}
                gridTemplateColumns={{useMediaQuery('max-width : 765px') ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)'}}
                gridTemplateRows={useMediaQuery('max-width : 765px') ? 'repeat(3, 1fr)' : 'repeat(1fr)'}
                gap={'1rem'}
                justifyItems={'center'}
                 height={'142px'}
                 width={'95%'}

                  >
                    {
                addBanners.map((item, idx) => {
                    return (
                        <Stack key={idx}
                               boxShadow = {'1px 1px 5px 1px rgb(95, 99, 105)'}
                               padding={'25px'}
                               bgcolor={'gray.900'}
                               borderRadius={'12px'}
                               alignItems={'start'}
                               justifyContent={'center'}
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

export default Add
