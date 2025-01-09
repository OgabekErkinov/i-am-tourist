import { Box, Link, Stack, Typography } from '@mui/material'
import Logo from '../navbar/Logo'
import SocialNetworks from '../navbar/SocialNetworks'
import Lists from './Lists'
import { useResponsive } from '../sizes/screen'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const {smScreen, mdScreen, lgScreen} = useResponsive()
    const columns = mdScreen ? '1fr' : lgScreen ? 'repeat(2, 1fr)' : '1.5fr 1fr 1fr 1fr'
    const {t} = useTranslation()

  return (

    <Box width='100%' height='auto' padding='32px 32px' bgcolor='#F97316' mt='2rem' boxSizing='border-box'>
        <Box width='90%' height='auto' mx='auto' display='grid' alignItems='center' gridTemplateColumns={columns}  gap='2rem'>
            <Stack width='100%' height='100%' alignItems='start' gap='1rem' color='#FFFFFF'>
                <Logo/>
                <Typography fontFamily='Poppins' fontWeight='400'>
                    {t("OurInviting")}
                    
                </Typography>
                <SocialNetworks/>
            </Stack>
            <Lists heading={t("FastLinks")}
                   array={[{link : '#about', name : t("About")}, {link : '#excursions', name : t("Excursions")}]}/>
            <Lists heading={t("Locations")} array={[{name : t("Europe"), link : ''},
                                               {name : t("Asia"), link : ''},
                                               {name : t("Africa"), link : ''},
                                               {name : t("Avstralia"), link : ''}]}/>
            <Lists heading={t("OurLocation")}/>
        </Box>
    </Box>
  )
}

export default Footer
