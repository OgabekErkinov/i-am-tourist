import { Box, Button, Portal, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ContactModal from './ContactModal'
import { useResponsive } from '../sizes/screen'
import { useTranslation } from 'react-i18next'

const InfoPlaceModal = ({infoObject, closeFunc, root, idx}) => {
    const {t} = useTranslation()
    const tourPlaces = t("tourPlaces", {returnObjects : true})
    
    const [openContactModal, setOpenContactModal] = useState(false)
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useResponsive()
    const widthContainer =smScreen ? '300px' : mdScreen ? '60%' : lgScreen ? '50%' : xlgScreen ? '50%' : '30%'
  return (
    <Box width='100vw' height='100vh' bgcolor='rgba(0,0,0,0.6)' position='fixed' zIndex={3}>
        <Box width='100%' height='90%' position='fixed' top='10vh'>
            <Box width={widthContainer} height='90%' bgcolor='#FFFFFF' m='auto' borderRadius='0.5rem' py='1.5rem'>
               <Stack width='100%' height='100%' alignItems='center' justifyContent='space-between'>
                <Box component="img" height='25vh' width='90%' borderRadius='0.5rem' src={infoObject?.image}/>
                <Typography variant='h4' fontFamily='Poppins' fontWeight='600' 
                            width='95%' textAlign='center' fontSize={mdScreen ? '12px' : '22px'}>
                    {tourPlaces[idx]?.title}
                </Typography>
                <Typography fontFamily='Poppins' fontWeight='400' 
                            width='95%' textAlign='center' fontSize={mdScreen ? '10px' : '12px'}>
                    {tourPlaces[idx]?.info}
                </Typography>
                <Stack width='100%' alignItems='center'>
                <Box width='95%' textAlign='center'>
                    <Typography fontFamily='Poppins' fontSize={mdScreen ? '12px' : '18px'}>
                        <b>{t("Population")}:</b>{tourPlaces[idx]?.population}
                    </Typography>
                </Box>
                <Box width='95%' textAlign='center'>
                    <Typography fontFamily='Poppins' fontSize={mdScreen ? '12px' : '18px'}>
                        <b>{t("Areas")}:</b> {tourPlaces[idx]?.regions}
                    </Typography>
                </Box>
                <Box width='95%' textAlign='center'>
                    <Typography fontFamily='Poppins' fontSize={mdScreen ? '12px' : '18px'}>
                        <b>{t("Cities")}:</b> {tourPlaces[idx]?.cities}
                    </Typography>
                </Box>
                <Box width='95%' textAlign='center'>
                    <Typography fontFamily='Poppins' fontSize={mdScreen ? '12px' : '18px'}>
                        <b>{t("Currency")}:</b> {tourPlaces[idx]?.currency}
                    </Typography>
                </Box>

                </Stack>
                <Stack width='90%' direction='row' justifyContent='space-between'>
                    <Button sx={{
                        bgcolor : 'gray',
                        color : 'white',
                        width : '45%',
                        height : mdScreen ? '100%' : '110%',
                    }}
                    onClick={()=>closeFunc(false)}>
                        <Typography fontFamily='Poppins' fontWeight='500' fontSize={mdScreen ? '12px' : '14px'}> 
                            {t("Close")}
                        </Typography>
                    </Button>
                    <Button sx={{
                        bgcolor : 'gray',
                        color : 'white',
                        width : '45%',
                        height : mdScreen ? '100%' : '110%'}}
                        onClick={() => setOpenContactModal(true)}>
                        <Typography fontFamily='Poppins' fontWeight='500' fontSize={mdScreen ? '12px' : '14px'}> 
                           {t("Contact")}
                       </Typography>
                    </Button>
                    {
                        openContactModal && <Portal container={root.current}>
                            <ContactModal closeFunc={()=>setOpenContactModal(false)}/>
                        </Portal>
                    }

                </Stack>
                

            </Stack>

            </Box>
            

        </Box>
    </Box>
  )
}

export default InfoPlaceModal
