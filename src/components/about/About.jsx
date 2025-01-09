import { Stack, Typography, Box } from '@mui/material'
import {services } from '../../Database/db'
import Icon from './Icon'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useResponsive } from '../sizes/screen'
import HistoryCard from './HistoryCard'
import Customers from './Customers'
import { useTranslation } from 'react-i18next'
import useStore from '../../Store/store'

const About = () => {
  const light = useStore(state => state.light)
  const bgColor = light ? "#F97316" : '#000000'
  const textColor = light ? '#FFFFFF' : "#F97316"

  const {smScreen, mdScreen, xxlgScreen} = useResponsive()
  const {t} = useTranslation()
 const allServices = t("services" , {returnObjects : true})
  useEffect(() => {
    Aos.init({
      duration : 800,
      delay : 300
    })
  },[])
  return (
    <Box id = 'about' height='auto' width='100%' py='5rem' bgcolor={bgColor} >
      <Stack height={'auto'} width={'100%'} alignItems={'center'} justifyContent={'center'}>
           <Stack alignItems='center' gap='1.5rem' fontFamily='Poppins' width='100%'>
            <Typography data-aos = "fade-up"
                        variant='h4'
                        color={textColor}
                        fontWeight={'800'}
                        fontSize='2rem'
                        lineHeight='1.5rem' >
                        {t("AboutCompany")}
            </Typography>
            <Typography data-aos = "fade-up" fontSize='1.25rem' color={textColor} lineHeight='1.7rem' textAlign='center'>
                        {t("AboutServices")}
            </Typography>
            <Box    width='90%' height="auto" display="grid" gap="16px"
                     sx={{
                      gridTemplateColumns: smScreen ? '1fr' : mdScreen ? 'repeat(2, 1fr)' : 'repeat(4,1fr)'}}>
              {
                allServices?.map((service, idx) => {
                  return (
                    <Box key={idx} data-aos = "fade-up" bgcolor='white' maxWidth={smScreen? '100%' : '320px'} mx='auto' height='12rem' borderRadius='12px'>
                      <Stack width="100%" height = '100%' alignItems='center' justifyContent='space-evenly'>
                          <Icon pathD={services[idx]?.icon} color={services[idx]?.color}/>
                          <Typography variant='h5' color='rgb(17,24,39)' textAlign='start'>
                             {service.title}
                          </Typography>
                          <Typography width='98%' textAlign='center' color='rgb(75,85,99)'>
                             {service.paragraph}  
                          </Typography>
                    </Stack>

                    </Box>
                    

                  )
                })
              }
              

            </Box>

           </Stack>
           <HistoryCard/>
           <Customers/>

    </Stack>
    </Box>
    
    
  )
}

export default About
