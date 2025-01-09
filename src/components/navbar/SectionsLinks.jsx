import { Link, List, ListItem, useMediaQuery } from '@mui/material'
import React from 'react'
import { navLinks } from '../../Database/db'
import { useResponsive } from '../sizes/screen'
import { useTranslation } from 'react-i18next'


const SectionsLinks = () => {
  const {lgScreen, xlgScreen} = useResponsive()
  const {t, i18n} = useTranslation()
  const fontSize = xlgScreen ? '20px' : '24px'
  return (
    <List sx={{ height : '35px', maxWidth : '800px', display : !lgScreen ? 'flex' : 'none', justifyContent : 'center', }}>
      {
        navLinks?.map(item => 
                  <ListItem key={item?.id} 
                        sx={{ fontWeight : '500', fontSize : {fontSize}, cursor : 'pointer',
                          transition: 'color 0.3s ease, transform 0.3s ease',
                          '&:hover': {
                            color: 'gray',
                            transform: 'scale(1.05)',
                          },
                          '&:focus': {
                            outline: 'none',
                            color: 'darkgray',
                          }}}>
                        <Link href = {item?.link} style={{ textDecoration : 'none', color : '#F4F4F5' }}>
                            {t(item?.name)}
                        </Link>
                  </ListItem>)
     }
    </List>
  )
}

export default SectionsLinks
