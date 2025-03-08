import { Box, Button, Stack, Typography, CircularProgress } from '@mui/material';
import SelectBox from './SelectBox';
import DateBox from './DateBox';
import TextBox from './TextBox';
import { useResponsive } from '../sizes/screen';
import { useTranslation } from 'react-i18next';
import useStore from '../../Store/store';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';



const BookATicket = () => {
    const light = useStore(state => state.light);
    const textColor = light ? '#F97316' : '#1F2937';
    const bgColor = light ? '#FFFFFF' : '#F97316';
    const buttonBg = light ? '#F97316' : '#1F2937';
    const { smScreen, mdScreen } = useResponsive();
    const { t } = useTranslation();
    const columns = smScreen ? '1fr' : mdScreen ? 'repeat(2, 1fr)' : 'repeat(3,1fr)';

    const setAlert = useStore(state => state.setAlert);
    const toggleAlert = useStore(state => state.toggleAlert);

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            fullName: "",
            firstNumber: "",
            secondNumber: "",
            whereFrom: "",
            whereTo: "",
            leaveDate: "",
            comeDate: "",
            email: "",
            tgName: ""
        }
    });

    const [loading, setLoading] = useState(false);

    const sendMessageToTelegram = async (data) => {
        setLoading(true);
        const token = "7233756330:AAH_B4OyL4YYOhLmdIH-Ewbjb1loksFJ3h0";
        const myId = "8158030030";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const message = `New Booking:\nFull Name: ${data.fullName}\nFirst Number: ${data.firstNumber}\nSecond Number: ${data.secondNumber}\nFrom: ${data.whereFrom}\nTo: ${data.whereTo}\nLeave Date: ${data.leaveDate}\nCome Date: ${data.comeDate}\nEmail: ${data.email}\nTelegram: ${data.tgName}`;

        try {
            await axios.post(url, { chat_id: myId, text: message });
            setAlert(t('success'), "success");
            reset();
            setTimeout(() => toggleAlert(), 1000);
        } catch (error) {
            setAlert(t('failure'), "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box maxWidth="1200px" width="100%" mx="auto" px={{ xs: 2, sm: 3, md: 4 }}>
            <Stack borderRadius="16px" p={{ xs: 2, sm: 3, md: 4 }} gap="1rem" boxShadow="0px 25px 50px -12px #00000040" bgcolor={bgColor} sx={{ transition: '0.4s' }}>
                <Typography fontFamily="Poppins" fontSize={{ xs: '24px', sm: '28px', md: '36px' }} fontWeight="700" color={textColor} textAlign="center">{t('Bron')}</Typography>
                
                <Box width="100%" display="grid" gridTemplateColumns={columns} gap="1rem">
                    <Controller name="fullName" control={control} rules={{ required: "Full Name is required" }} render={({ field }) => (
                        <TextBox label={t('FullName')} pholder={t('PHolderName')} type="text" error={!!errors.fullName} helperText={errors.fullName?.message} {...field} />
                    )} />
                    
                    <Controller name="firstNumber" control={control} rules={{ required: "First number is required" }} render={({ field }) => (
                        <TextBox label={t('FirstNumber')} pholder={t('PHolderFirstNum')} type="text" onlyNumbers error={!!errors.firstNumber} helperText={errors.firstNumber?.message} {...field} />
                    )} />
                    
                    <Controller name="secondNumber" control={control} rules={{ required: "Second number is required" }} render={({ field }) => (
                        <TextBox label={t('SecondNumber')} pholder={t('PHolderSecondNum')} type="text" onlyNumbers error={!!errors.secondNumber} helperText={errors.secondNumber?.message} {...field} />
                    )} />
                    
                    <Controller name="whereFrom" control={control} rules={{ required: "Please select a departure location" }} render={({ field }) => (
                        <SelectBox label={t('WhereFrom')} error={!!errors.whereFrom} helperText={errors.whereFrom?.message} {...field} />
                    )} />
                    
                    <Controller name="whereTo" control={control} rules={{ required: "Please select a destination" }} render={({ field }) => (
                        <SelectBox label={t('WhereTo')} error={!!errors.whereTo} helperText={errors.whereTo?.message} {...field} />
                    )} />
                    
                    <Controller name="leaveDate" control={control} rules={{ required: "Please select a leave date" }} render={({ field }) => (
                        <DateBox label={t('LeaveDate')} error={!!errors.leaveDate} helperText={errors.leaveDate?.message} {...field} />
                    )} />
                    
                    <Controller name="comeDate" control={control} rules={{ required: "Please select a return date" }} render={({ field }) => (
                        <DateBox label={t('ComeDate')} error={!!errors.comeDate} helperText={errors.comeDate?.message} {...field} />
                    )} />
                </Box>

                <Box width="100%" mt="2rem">
                    <Button fullWidth onClick={handleSubmit(sendMessageToTelegram)} sx={{ bgcolor: buttonBg, borderRadius: '8px', transition: '0.4s', py: 1.5 }} disabled={loading}>
                        {loading ? <CircularProgress size={24} sx={{ color: '#FFF' }} /> : <Typography color="#FFFFFF" fontSize={{ xs: '16px', sm: '18px' }}>{t('Submit')}</Typography>}
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
};

export default BookATicket;
