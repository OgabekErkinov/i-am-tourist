import { Box, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import { useResponsive } from '../sizes/screen'
import { useTranslation } from 'react-i18next'

const SelectBox = ({label}) => {
  const {t} = useTranslation()
  const Countries = t("countries", {returnObjects : true})
    return (
    <Box height='100%' width='100%' >
        <Typography fontFamily='Poppins' fontSize='14px' fontWeight='600' color='#374151'>
            {label}
        </Typography>
        <Box height='auto' width='100%' borderRadius='8px' border='1px solid #D1D5DB' bgcolor='#FFFFFF'>
            <Select sx={{height : '100%', width : '100%', borderRadius : '8px', 
                         "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#F97316"},
                         "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#F97316" }      }}>
                {Countries.map((country, idx) => {
                        return (
                            <MenuItem value={country} key={idx} >
                              <Typography fontFamily='Poppins' fontWeight='500'>{country}</Typography>
                            </MenuItem>
                               )})}
            </Select>
        </Box>
    </Box>
  )
}

export default SelectBox
