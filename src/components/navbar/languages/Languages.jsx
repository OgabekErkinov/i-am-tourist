import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import { languages } from '../../../Database/db';
import LanguageButton from './LanguageButton';

const Languages = () => {
    const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
    const [openLanguages, setOpenLanguages] = useState(false)
  return (
    <Stack height='auto'>
        <LanguageButton language={currentLanguage} setOpen={setOpenLanguages} setCurrentLanguage={setCurrentLanguage}/>

        {
        openLanguages &&   
            <Box height='auto' position='absolute' top={60} zIndex={9999} borderRadius='5px'>
                <Stack height='auto' bgcolor="rgba(65, 55, 55, 0.5)" boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)">
                    {
                     languages?.map((language, idx) => {
                            if(language?.lang != currentLanguage?.lang){
                            return (
                                <LanguageButton key={idx} language={language}
                                                setOpen={setOpenLanguages}
                                                setCurrentLanguage={setCurrentLanguage}/>
                            )}
                        })
                    }
                </Stack>
            </Box>     
                
        }


    </Stack>
  )
}

export default Languages
