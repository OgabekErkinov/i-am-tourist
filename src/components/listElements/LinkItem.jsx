import { Box, Button, Link, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const LinkItem = ({item, fontSize}) => {
    const {t} = useTranslation()
  return (
    <Box  sx={{cursor : 'pointer',  transition: 'color 0.3s ease, transform 0.3s ease',
               '&:hover': { color: 'gray', transform: 'scale(1.05)'},
               '&:focus': { outline: 'none', color: 'darkgray' }}}>
        <Link href = {item?.link} style={{ textDecoration : 'none', color : '#F4F4F5'}}>
            <Button disableTouchRipple sx={{bgcolor : 'transparent', color : '#F4F4F5'}}>
              <Typography fontFamily='Poppins' fontWeight='500' fontSize={fontSize} width='auto'>
                    {t(item?.name)}
              </Typography>
            </Button>
            
        </Link>
    </Box>

  )
}

export default LinkItem
