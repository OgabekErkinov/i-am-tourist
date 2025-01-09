import { Box, Button, Stack, Typography } from '@mui/material'
import SelectBox from './SelectBox'
import DateBox from './DateBox'
import TextBox from './TextBox'
import {useResponsive} from '../sizes/screen'
import { useTranslation } from 'react-i18next'
import useStore from '../../Store/store'

const BookATicket = () => {
    const light = useStore(state => state.light)
   const textColor = light ? '#1F2937' : "#F97316"
   const bgColor = light ? '#F97316' : '#000000'
    const { smScreen, mdScreen, lgScreen} = useResponsive()
    const {t} = useTranslation()
    const columns = mdScreen ? '1fr' : lgScreen ? 'repeat(2, 1fr)' : 'repeat(3,1fr)'
  
    
  return (

    <Box  width='90%' height='auto' display='flex' justifyContent='center' alignItems='center'>
        <Box height='100%' width='100%' px='20px'>
            <Stack width='100%' height='100%' borderRadius='16px' p='32px' gap='1rem' boxShadow = '0px 25px 50px -12px #00000040'>
                <Box width='96%' height='100%' textAlign='center'>
                    <Typography fontFamily='Poppins' fontSize='36px' fontWeight='700' color={textColor}>
                        {t("Bron")}
                    </Typography>
                </Box>
                <Box width='100%' height='100%' display='grid' gridTemplateColumns={columns} gap='1rem'>
                    <TextBox label={t("FullName")} 
                             pholder={t("PHolderName")}
                             type={'text'}/>
                    <TextBox label={t("FirstNumber")}
                              pholder={t("PHolderFirstNum")}
                              type={'text'}/>
                    <TextBox label={t("SecondNumber")}
                              pholder={t("PHolderSecondNum")}
                              type={'text'}/>
                    <SelectBox label={t("WhereFrom")}/>
                    <SelectBox label={t("WhereTo")}/>

                    <DateBox label={t("LeaveDate")}/>
                    <DateBox label={t("ComeDate")}/>

                    <TextBox label={t("Email")}
                             pholder={''}
                             type={'email'}/>
                    <TextBox label={t("TgName")}
                             pholder={''}
                             type={'text'}/>
                </Box>
               {/* submit button */}
               <Box width='100%' height='92px' mx='auto' mt='2rem'>
                        <Button fullWidth sx={{bgcolor: '#F97316', borderRadius : '8px'}}>
                            <Typography color='#FFFFFF'>{t("Submit")}</Typography>
                        </Button>
                    </Box>

            </Stack>

        </Box>
        
    </Box>
  )
}

export default BookATicket
