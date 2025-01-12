import { Box, Button, Stack, TextField, Typography, Snackbar, Alert } from '@mui/material';
import React, { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoClose } from 'react-icons/io5';
import TextBox from '../bookTicket/TextBox';
import { useResponsive } from '../sizes/screen';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';

const ContactModal = ({ closeFunc }) => {
  // Schema is validation for text fields
  const schema = yup.object({
    FullName: yup.string().required('FullName required..!'),
    Email: yup.string().email('Invalid email format..!').required('Email is required..!'),
    Message: yup.string().required('Message is required..!'),
  }).required();

  // Hook form helper methods
  const { reset, handleSubmit, control, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const { t } = useTranslation();
  // Responsive display sizes
  const { smScreen, mdScreen, lgScreen, xlgScreen } = useResponsive();
  const widthContainer = smScreen ? '300px' : mdScreen ? '70%' : lgScreen ? '60%' : xlgScreen ? '50%' : '30%';

  const [alertMessage, setAlertMessage] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');

  const sendMessage = (data) => {
    const token = "7233756330:AAH_B4OyL4YYOhLmdIH-Ewbjb1loksFJ3h0";
    const myId = "8158030030";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const msgContent = `FullName: ${data.FullName}\nEmail: ${data.Email}\nSubject : ${data.Subject}\nMessage: ${data.Message}`;

    axios({
      url: url,
      method: 'POST',
      data: {
        chat_id: myId,
        text: msgContent,
      },
    })
      .then(() => {
        setAlertMessage([{ fieldName: 'success', message: 'Xabar yuborildi!' }]);
        setAlertSeverity('success');
        setOpenAlert(true);
        reset({
          FullName : '',
          Email : '',
          Subject : '',
          Message : ''
        });
        closeFunc(false)
      })
      .catch(() => {
        setAlertMessage([{ fieldName: 'error', message: 'Xabar yuborilmadi!' }]);
        setAlertSeverity('error');
        setOpenAlert(true);
      });
  };

  const onError = (errors) => {
    const errorMessages = Object.entries(errors).map(([fieldName, error]) => ({
      fieldName,
      message: error.message,
    }));
    setAlertMessage(errorMessages); // Har bir xatoni massiv sifatida saqlash
    setAlertSeverity('error');
    setOpenAlert(true);
  };

  const handleCloseAlert = (fieldName) => {
    setAlertMessage((prevMessages) =>
      prevMessages.filter((msg) => msg.fieldName !== fieldName)
    );
  };

  return (
    <Box id="contact" width="100vw" height="100vh" bgcolor="rgba(0,0,0,0.6)" position="fixed" zIndex={6}>
      <Box width={widthContainer} height="95vh" p="1rem" mx="auto" mt="5vh" bgcolor="#FFFFFF" borderRadius="0.5rem">
       
          <Stack direction="row" justifyContent="space-between">
            <Typography fontFamily="Poppins" fontWeight="700" fontSize={mdScreen ? '1rem' : '2rem'}>
              {t('sendUs')}..!
            </Typography>
            <Button
              sx={{ bgcolor: '#F97316', height: '8vh', width: '8vh' }}
              onClick={() => closeFunc(false)}
            >
              <IoClose color="#FFFFFF" size={'xs'} />
            </Button>
          </Stack>
          <form onSubmit={handleSubmit(sendMessage, onError)} style={{ height: '100%' }}>
            <Box display="grid" gridAutoRows="1fr 1fr 1fr 1.5fr 1fr" height="100%">
              <Controller
                name="FullName"
                control={control}
                rules={{ required: 'FullName is required' }}
                render={({ field }) => (
                  <TextBox {...field} label={t('FullName')} type="text" error={!!errors.FullName} />
                )}
              />
              <Controller
                name="Email"
                control={control}
                render={({ field }) => (
                  <TextBox {...field} label={t('Email')} type="email" error={!!errors.Email} />
                )}
              />
              <Controller
                name="Subject"
                control={control}
                render={({ field }) => <TextBox {...field} label={t('subject')} type="text" />}
              />
              <Controller
                name="Message"
                control={control}
                rules={{
                  required: 'Message is required',
                  minLength: {
                    value: 10,
                    message: 'min 10 characters',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="outlined"
                    multiline
                    rows={3}
                    label={t('message')}
                    fullWidth
                    error={!!errors.Message}
                  />
                )}
              />
              <Button
                fullWidth
                sx={{
                  bgcolor: '#F97316',
                  color: '#FFFFFF',
                  height: '6vh',
                  borderRadius: '0.5rem',
                }}
                type="submit"
              >
                <Typography fontFamily="Poppins" fontWeight="600">
                  {t('Submit')}
                </Typography>
              </Button>
            </Box>
          </form>
       
      </Box>

      {/* Snackbar */}
      {Array.isArray(alertMessage) &&
        alertMessage.map((alert, idx) => (
          <Snackbar
            key={idx}
            open={openAlert}
            autoHideDuration={3000}
            onClose={() => handleCloseAlert(alert.fieldName)}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert
              onClose={() => handleCloseAlert(alert.fieldName)}
              severity={alertSeverity}
              sx={{ width: '100%', mb: 1 }}
            >
              {alert.message}
            </Alert>
          </Snackbar>
        ))}
    </Box>
  );
};

export default ContactModal;
