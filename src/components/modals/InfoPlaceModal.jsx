import { Box, Button, Portal, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import ContactModal from './ContactModal'
import { useResponsive } from '../sizes/screen'

const InfoPlaceModal = ({infoObject, closeFunc, root}) => {
    const [openContactModal, setOpenContactModal] = useState(false)
    const {mdScreen, lgScreen, xlgScreen} = useResponsive()
    const widthContainer = mdScreen ? '90%' : lgScreen ? '70%' : xlgScreen ? '50%' : '30%'
  return (
    <Box width='100vw' height='100vh' bgcolor='rgba(0,0,0,0.6)' position='fixed' zIndex={3}>
        <Box width='100%' height='80%' position='fixed' top='10vh'>
            <Box width={widthContainer} height='95%' bgcolor='#FFFFFF' m='auto' borderRadius='0.5rem' py='1.5rem'>
               <Stack width='100%' height='100%' alignItems='center' justifyContent='space-between'>
                <Box component="img" height='25vh' width='90%' borderRadius='0.5rem' src='./tailandModal.jpg'/>
                <Typography variant='h4' fontFamily='Poppins' fontWeight='600' width='95%' textAlign='center'>
                    {infoObject?.title}
                </Typography>
                <Typography fontFamily='Poppins' fontWeight='400' width='95%' textAlign='center'>
                    {infoObject?.info}
                </Typography>
                <Stack width='100%' alignItems='center'>
                <Box width='95%' textAlign='center'>
                    <Typography fontFamily='Poppins' fontSize='18px'><b>Aholi:</b> {infoObject?.population}</Typography>
                </Box>
                <Box width='95%' textAlign='center'>
                    <Typography fontFamily='Poppins' fontSize='18px'><b>Hududlar:</b> {infoObject?.regions}</Typography>
                </Box>
                <Box width='95%' textAlign='center'>
                    <Typography fontFamily='Poppins' fontSize='18px'><b>Shaharlar:</b> {infoObject?.cities}</Typography>
                </Box>
                <Box width='95%' textAlign='center'>
                    <Typography fontFamily='Poppins' fontSize='18px'><b>Valyuta:</b> {infoObject?.currency}</Typography>
                </Box>

                </Stack>
                <Stack width='90%' direction='row' justifyContent='space-between'>
                    <Button sx={{
                        bgcolor : 'gray',
                        color : 'white',
                        width : '45%',
                        height : '110%',
                    }}
                    onClick={()=>closeFunc(false)}>
                        <Typography fontFamily='Poppins' fontWeight='500'> 
                            Yopish
                        </Typography>
                    </Button>
                    <Button sx={{
                        bgcolor : 'gray',
                        color : 'white',
                        width : '45%',
                        height : '110%'}}
                        onClick={() => setOpenContactModal(true)}>
                        <Typography fontFamily='Poppins' fontWeight='500'> 
                           Aloqa
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
