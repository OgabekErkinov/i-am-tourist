import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import { languages } from '../../../Database/db';
import LanguageButton from './LanguageButton';
import useStore from '../../../Store/store';

const Languages = () => {
    const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
    const [openLanguages, setOpenLanguages] = useState(false)
    const light = useStore(state => state.light)
    const bgColor = light ? '#F97316' : '#1F2937'
  return (
    <Stack height='auto' mx='0.2rem'>
        <Box bgcolor={bgColor} borderRadius='0.5rem'>
          <LanguageButton language={currentLanguage} setOpen={setOpenLanguages} 
                          setCurrentLanguage={setCurrentLanguage} color='#FFFFFF' border='none'/>
        </Box>
        {
        openLanguages &&   
            <Box height='auto' width='140px' position='absolute' top={60} zIndex={9999} 
                 borderRadius='5px' overflow='hidden'>
                <Stack height='100%' width='100%' bgcolor="#FFFFFF" alignItems = 'start'
                       boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)">
                    {
                     languages?.map((language, idx) => {
                            
                            return (
                                <LanguageButton key={idx} language={language}
                                                setOpen={setOpenLanguages}
                                                setCurrentLanguage={setCurrentLanguage}
                                                color='#1F2937'
                                                border='0.5px solid #ededed'/>)
                           
                        })
                    }
                </Stack>
            </Box>     
                
        }


    </Stack>
  )
}

export default Languages
