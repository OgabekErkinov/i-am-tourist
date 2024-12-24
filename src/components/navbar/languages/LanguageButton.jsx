import { Button, Stack, Typography } from "@mui/material";
import '../../../I18/i18'
import { useTranslation } from "react-i18next";


const LanguageButton = ({language, setOpen, setCurrentLanguage}) => {
  const {t, i18n} = useTranslation() 
  const handleClick = () => {
    i18n.changeLanguage(language?.translator)
    setCurrentLanguage(language)
    setOpen(prev => !prev)
  }
  return (
    <Stack height='auto'>
          <Button sx={{
               height: '36px',
               width: 'auto',
               display: 'flex',
               alignItems: 'center',
               gap: '5px',
               padding: '8px 16px',
               boxSizing: 'border-box',
               '&:active': {
                  bgcolor: 'transparent' }}}
                  disableRipple
                  onClick={handleClick}>
                 <img src={language?.flag}
                      alt={language?.lang}
                      style={{
                      height: '14px',
                      width: '18px'  }}/>
               <Typography width='auto' 
                           height='20px'
                           color='white'
                           fontSize='14px'
                           sx={{
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                        }}>
                           {language?.lang}
                </Typography>
          </Button>
          

    </Stack>

  );
};

export default LanguageButton;
