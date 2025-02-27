import { Box, Button, Stack, Typography, Snackbar, Alert, CircularProgress } from '@mui/material';
import SelectBox from './SelectBox';
import DateBox from './DateBox';
import TextBox from './TextBox';
import { useResponsive } from '../sizes/screen';
import { useTranslation } from 'react-i18next';
import useStore from '../../Store/store';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const token = "7233756330:AAH_B4OyL4YYOhLmdIH-Ewbjb1loksFJ3h0";
const myId = "8158030030";

const BookATicket = () => {
    const light = useStore(state => state.light);
    const textColor = light ? '#F97316' : '#1F2937' ;
    const bgColor = light ? '#FFFFFF' : '#F97316';
    const buttonBg = light ? '#F97316' : '#1F2937';
    const { smScreen, mdScreen } = useResponsive();
    const { t } = useTranslation();
    const columns = smScreen ? '1fr' : mdScreen ? 'repeat(2, 1fr)' : 'repeat(3,1fr)';
    const [toast, setToast] = useState({ open: false, message: '', severity: 'success' });

    const { control, handleSubmit, formState: { errors }, reset } = useForm();

    const [loading, setLoading] = useState(false); 

    const sendMessageToTelegram = async (data) => {
        setLoading(true); 

        const message = `New Booking:
                         Full Name: ${data.fullName}
First Number: ${data.firstNumber}
Second Number: ${data.secondNumber}
From: ${data.whereFrom}
To: ${data.whereTo}
Leave Date: ${data.leaveDate}
Come Date: ${data.comeDate}
Email: ${data.email}
                        Telegram: ${data.tgName}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: myId, text: message })
            });

            if (response.ok) {
                setToast({ open: true, message: 'Booking request sent successfully!', severity: 'success' });
                reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setToast({ open: true, message: 'Failed to send booking request. Please try again.', severity: 'error' });
        } finally {
            setLoading(false); 
        }
    };

    return (
        <Box maxWidth="1200px" width="100%" mx="auto" px={{ xs: 2, sm: 3, md: 4 }}>
            <Stack
                borderRadius="16px"
                p={{ xs: 2, sm: 3, md: 4 }}
                gap="1rem"
                boxShadow="0px 25px 50px -12px #00000040"
                bgcolor={bgColor}
                sx={{ transition: '0.4s' }}
            >
                <Typography fontFamily="Poppins" fontSize={{ xs: '24px', sm: '28px', md: '36px' }}
                    fontWeight="700" color={textColor} textAlign="center">
                    {t('Bron')}
                </Typography>

                {/* Form inputs */}
                <Box width="100%" display="grid" gridTemplateColumns={columns} gap="1rem">
                    <Controller name="fullName" control={control} rules={{ required: "Full Name is required" }}
                        render={({ field }) => (
                            <TextBox label={t('FullName')} pholder={t('PHolderName')} type="text"
                                error={!!errors.fullName} helperText={errors.fullName?.message} {...field}
                            />
                        )}
                    />
                    
                    <Controller name="firstNumber" control={control} rules={{ required: "First number is required" }}
                        render={({ field }) => (
                            <TextBox label={t('FirstNumber')} pholder={t('PHolderFirstNum')} type="text" onlyNumbers
                                error={!!errors.firstNumber} helperText={errors.firstNumber?.message} {...field}
                            />
                        )}
                    />

                    <Controller name="secondNumber" control={control} rules={{ required: "Second number is required" }}
                        render={({ field }) => (
                            <TextBox label={t('SecondNumber')} pholder={t('PHolderSecondNum')} type="text" onlyNumbers
                                error={!!errors.secondNumber} helperText={errors.secondNumber?.message} {...field}
                            />
                        )}
                    />

                    <Controller name="whereFrom" control={control} rules={{ required: "Please select a departure location" }}
                        render={({ field }) => (
                            <SelectBox label={t('WhereFrom')} error={!!errors.whereFrom} helperText={errors.whereFrom?.message} {...field} />
                        )}
                    />

                    <Controller name="whereTo" control={control} rules={{ required: "Please select a destination" }}
                        render={({ field }) => (
                            <SelectBox label={t('WhereTo')} error={!!errors.whereTo} helperText={errors.whereTo?.message} {...field} />
                        )}
                    />

                    <Controller name="leaveDate" control={control} rules={{ required: "Please select a leave date" }}
                        render={({ field }) => (
                            <DateBox label={t('LeaveDate')} error={!!errors.leaveDate} helperText={errors.leaveDate?.message} {...field} />
                        )}
                    />

                    <Controller name="comeDate" control={control} rules={{ required: "Please select a return date" }}
                        render={({ field }) => (
                            <DateBox label={t('ComeDate')} error={!!errors.comeDate} helperText={errors.comeDate?.message} {...field} />
                        )}
                    />

                    <Controller name="email" control={control}
                        rules={{
                            required: "Email is required",
                            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email format" }
                        }}
                        render={({ field }) => (
                            <TextBox label={t('Email')} pholder="" type="email"
                                error={!!errors.email} helperText={errors.email?.message} {...field}
                            />
                        )}
                    />

                    <Controller name="tgName" control={control} rules={{ required: "Telegram username is required" }}
                        render={({ field }) => (
                            <TextBox label={t('TgName')} pholder="" type="text"
                                error={!!errors.tgName} helperText={errors.tgName?.message} {...field}
                            />
                        )}
                    />
                </Box>

               
                <Box width="100%" mt="2rem">
                    <Button fullWidth onClick={handleSubmit(sendMessageToTelegram)}
                        sx={{ bgcolor: buttonBg, borderRadius: '8px', transition: '0.4s', py: 1.5 }}
                        disabled={loading} 
                    >
                        {loading ? <CircularProgress size={24} sx={{ color: '#FFF' }} /> : (
                            <Typography color="#FFFFFF" fontSize={{ xs: '16px', sm: '18px' }}>{t('Submit')}</Typography>
                        )}
                    </Button>
                </Box>
            </Stack>

            <Snackbar open={toast.open} autoHideDuration={3000} onClose={() => setToast({ ...toast, open: false })}>
                <Alert onClose={() => setToast({ ...toast, open: false })} severity={toast.severity} sx={{ width: '100%' }}>
                    {toast.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default BookATicket;
