import { Box, Button, Stack, Typography } from "@mui/material";
import '../../../I18/i18'
import { useTranslation } from "react-i18next";

const LanguageButton = ({language, setOpen, setCurrentLanguage, color, border}) => {
  const {t, i18n} = useTranslation() 
  const handleClick = () => {
    i18n.changeLanguage(language?.translator)
    setCurrentLanguage(language)
    setOpen(prev => !prev)
  }
  return (
          <Button sx={{ height : '36px', display: 'flex', alignItems: 'center', justifyContent : 'flex-start',
                        padding: '8px 12px', borderBottom : border,
                        '&:active': { bgcolor: 'transparent' },
                        '&:hover' : {bgcolor : 'gray'}}} disableRipple onClick={handleClick}>
                  <Box height='20px' width='80px' display='flex' alignItems='center' gap='5px'>
                      <Box component='img' src={language?.flag} alt={language?.lang}
                           height='100%' width='20px'/>
                      <Typography width='auto' height='100%' color={color} fontSize='12px' fontFamily='Poppins'
                           sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                           {language?.lang}
                     </Typography>
                  </Box>
                 
          </Button>

  );
};

export default LanguageButton;
