import { Box, Button, Stack, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import TextBox from '../bookTicket/TextBox'
import { useResponsive } from '../sizes/screen'
import axios from 'axios'

const ContactModal = ({closeFunc}) => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useResponsive()
    const widthContainer = mdScreen ? '90%' : lgScreen ? '70%' : xlgScreen ? '50%' : '30%'

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
    <Box width='100vw' height='100vh' bgcolor='rgba(0,0,0,0.6)' position='fixed' zIndex={6}>
        <Box width={widthContainer} height='90vh' p='1rem' mx='auto' mt='5vh' bgcolor='#FFFFFF' borderRadius='0.5rem' boxSizing='border-box'>
            <Box display='grid' gridTemplateRows='1fr 1fr 1fr 1fr 2fr 1fr' rowGap='1rem'
                 width='100%' height='100%' alignItems='center'>
                <Stack direction='row' width='95%' justifyContent='space-between'>
                    <Typography fontFamily='Poppins' fontWeight='700' fontSize='2rem' >Xabar yuboring!</Typography>
                    <Button sx={{
                        bgcolor : '#F97316',
                        height : '8vh',
                        width : '8vh' }}
                    onClick={() => closeFunc(false)}>
                        <IoClose color='#FFFFFF' size={'xl'}/>
                    </Button>
                </Stack>
                <TextBox label="To'liq ism" type='text' writer = {setFullName} value = {fullName}/>
                <TextBox label="Email Manzil" type='email' writer = {setEmail} value = {email}/>
                <TextBox label="Mavzu nima haqida" type='text' writer = {setAboutMessage} value = {aboutMessage}/>
                <TextField variant='outlined' multiline rows={5} label = "Sizning xabaringiz" fullWidth
                           value={message}
                           onChange={(e) => setMessage(e.target.value)} />
                <Button fullWidth sx={{
                    bgcolor : '#F97316',
                    color : '#FFFFFF',
                    height : '8vh',
                    borderRadius : '0.5rem'
                }}
                >
                    <Typography fontFamily='Poppins' fontWeight='600' >
                       Submit
                    </Typography>
                </Button>

            </Box>

        </Box>

    </Box>
  )
}

export default ContactModal
