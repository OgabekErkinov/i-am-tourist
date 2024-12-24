import { Stack, Typography } from '@mui/material'
import {services } from '../../Database/db'
import Icon from './Icon'

const About = () => {
  return (
    <Stack height={'auto'}
           width={'100%'}
           paddingY='5rem'
           alignItems={'center'}
           justifyContent={'center'}
           gap='3rem'
           bgcolor={'#F97316'}
           fontFamily={'Poppins'}>
            <Typography variant='h4'
                        color='white'
                        fontWeight={'800'}
                        fontSize='2rem'
                        lineHeight='1.5rem' >
                            Kompaniyamiz Haqida 
                        </Typography>
            <Typography  fontSize='1.25rem' color='#e5e7eb' lineHeight='1.7rem'>20 yildan ortiq vaqt davomida noyob sayohat tajribalarini taqdim etamiz.</Typography>
            <Stack direction={'row'}
                    justifyContent='space-evenly'
                    width='100%'>
              {
                services?.map((service, idx) => {
                  return (
                    <Stack key={idx}
                           bgcolor='white'
                           maxWidth='280px'
                           height = '10rem'
                           borderRadius='12px'
                           alignItems='center'
                           justifyContent='space-evenly'>
                          <Icon pathD={service?.icon} color={service?.color}/>
                         <Typography variant='h5' color='rgb(17,24,39)' textAlign='start'>
                          {service.title}
                        </Typography>
                       <Typography width='100%' textAlign='center' color='rgb(75,85,99)'>
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
