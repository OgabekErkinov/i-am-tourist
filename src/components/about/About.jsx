import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { FaHotel, FaPlane } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
import { IoMdContacts } from 'react-icons/io'
import { aboutServices } from '../../Database/db'

const About = () => {
  return (
    <Stack height={'1032px'}
           width={'100%'}
           alignItems={'center'}
           justifyContent={'center'}
           bgcolor={'#F97316'}
           fontFamily={'Poppins'}>
            <Typography variant='h4'
                        color='white'
                        fontWeight={'bold'} >
                            Kompaniyamiz haqida 
                        </Typography>
            <Typography>20 yildan ortiq vaqt davomida noyob sayohat tajribalarini taqdim etamiz.</Typography>
            <Stack direction={'row'}>
              {
                aboutServices.map((service, idx) => {
                  return (
                    <Stack key={idx}>
                          <span>{service.icon}</span>
                         <Typography variant='h4'>
                          {service.title}
                        </Typography>
                       <Typography>
                         {service.paragraph}  
                      </Typography>

              </Stack>

                  )
                })
              }
              

            </Stack>

    </Stack>
  )
}

export default About
