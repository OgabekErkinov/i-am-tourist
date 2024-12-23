import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { languages } from "../../Database/db";

const LanguageButton = () => {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  return (
    <Button
      sx={{
        height: '36px',
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        padding: '8px 16px',
        boxSizing: 'border-box',
        '&:active': {
          bgcolor: 'transparent',
        },
        
        '@media (max-width: 600px)': {
          padding: '6px 12px',
          height: '30px',  // 
          width: 'auto',
        },
      }}
      disableRipple
    >
      <img
        src={currentLanguage?.flag}
        alt={currentLanguage?.lang}
        style={{
          height: '14px',
          width: '18px',
         
          '@media (max-width: 600px)': {
            height: '12px',
            width: '16px', 
          },
        }}
      />
      <Typography
        width={'auto'} 
        height={'20px'}
        color={'white'}
        fontSize={'14px'}
        sx={{
          // Font o'lchamini kichik ekranlarda moslashtirish
          '@media (max-width: 600px)': {
            fontSize: '12px',
          },
        }}
      >
        {currentLanguage?.lang}
      </Typography>
    </Button>
  );
};

export default LanguageButton;
