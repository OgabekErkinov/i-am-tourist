import { Stack } from '@mui/material'
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
                <Stack height='auto'
                       position='absolute'
                       top={60}
                       zIndex={9999} 
                       bgcolor="rgba(65, 55, 55, 0.5)" 
                       boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
                       borderRadius='5px'>
                    {
                        languages?.map((language, idx) => {
                            if(language?.lang != currentLanguage?.lang){
                            return (
                                <LanguageButton key={idx}
                                                language={language}
                                                setOpen={setOpenLanguages}
                                                setCurrentLanguage={setCurrentLanguage}/>
                            )}
                        })
                    }


                </Stack>
        }


    </Stack>
  )
}

export default Languages
