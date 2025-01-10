import { Box, Button, Stack, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import TextBox from '../bookTicket/TextBox'
import { useResponsive } from '../sizes/screen'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const ContactModal = ({closeFunc}) => {
    const {t} = useTranslation()
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useResponsive()
    const widthContainer = mdScreen ? '70%' : lgScreen ? '60%' : xlgScreen ? '50%' : '30%'

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [aboutMessage, setAboutMessage] = useState('')
    const [message, setMessage] = useState('')
    const [alertMessage, setAlertMessage] = useState('')

    const sendMessage = (event) => {
        event.preventDefault()
        const token = "7233756330:AAH_B4OyL4YYOhLmdIH-Ewbjb1loksFJ3h0";
        const myId = "";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const msgContent = `FullName : ${fullName}\n email : ${email} \n message : ${message}`;
        axios({
            url : url,
            method : 'POST',
            data : {
                "chat_id" : myId,
                "text" : msgContent
            }

        }).then(() => setAlertMessage("Xabar yuborildi..!")).catch((mes) => setAlertMessage('Xabar yuborilmadi', mes))
    }

  return (
    <Box id = 'contact' width='100vw' height='100vh' bgcolor='rgba(0,0,0,0.6)' position='fixed' zIndex={6}>
        <Box width={widthContainer} height='95vh' p='1rem' mx='auto' mt='5vh' bgcolor='#FFFFFF' 
             borderRadius='0.5rem'>
            <Box display='grid' gridTemplateRows='1fr 1fr 1fr 1fr 1.5fr 1fr' rowGap='1rem'
                 width='100%' height='100%' alignItems='center'>
                <Stack direction='row' width='95%' justifyContent='space-between'>
                    <Typography fontFamily='Poppins' fontWeight='700' fontSize={mdScreen ? '1rem' : '2rem'} >
                        {t("sendUs")}..!
                    </Typography>
                    <Button sx={{
                        bgcolor : '#F97316',
                        height : '8vh',
                        width : '8vh' }}
                    onClick={() => closeFunc(false)}>
                        <IoClose color='#FFFFFF' size={'xs'}/>
                    </Button>
                </Stack>
                <TextBox label={t("FullName")} type='text' writer = {setFullName} value = {fullName}/>
                <TextBox label={t("Email")} type='email' writer = {setEmail} value = {email}/>
                <TextBox label={t("subject")} type='text' writer = {setAboutMessage} value = {aboutMessage}/>
                <TextField variant='outlined' multiline rows={2} label ={t("message")} fullWidth
                           value={message}
                           onChange={(e) => setMessage(e.target.value)} />
                <Button fullWidth sx={{
                    bgcolor : '#F97316',
                    color : '#FFFFFF',
                    height : '6vh',
                    borderRadius : '0.5rem'
                }}>
                    <Typography fontFamily='Poppins' fontWeight='600' >
                       {t("Submit")}
                    </Typography>
                </Button>

            </Box>

        </Box>

    </Box>
  )
}

export default ContactModal
