import { Button, Link, List, ListItem, Portal, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { navLinks } from '../../Database/db'
import { useResponsive } from '../sizes/screen'
import { useTranslation } from 'react-i18next'
import ContactModal from '../modals/ContactModal'

const SectionsLinks = ({root}) => {
  const [openContactModal, setOpenContactModal] = useState(false)
  const {lgScreen, xlgScreen} = useResponsive()
  const {t, i18n} = useTranslation()
  const fontSize = xlgScreen ? '20px' : '22px'
  return (
    <List sx={{ height : '35px', maxWidth : '600px', display : !lgScreen ? 'flex' : 'none', justifyContent : 'center', }}>
      {
        navLinks?.map((item, idx) => {
          if(idx !== 3) {
            return (
              <ListItem key={idx} 
                        sx={{ fontWeight : '500', fontSize : {fontSize}, cursor : 'pointer', width : 'auto',
                              transition: 'color 0.3s ease, transform 0.3s ease',
                              '&:hover': { color: 'gray', transform: 'scale(1.05)'},
                              '&:focus': { outline: 'none', color: 'darkgray' }}}>
                        <Link href = {item?.link} style={{ textDecoration : 'none', color : '#F4F4F5'}}>
                              {t(item?.name)}
                        </Link>
                  </ListItem> )
          }else{
            return (
              <ListItem key={idx}  >
                        <Button onClick={() => setOpenContactModal(prev => !prev)}>
                            <Link href = {item?.link} style={{ textDecoration : 'none', color : '#F4F4F5'}}
                                  sx={{ fontWeight : '500', fontSize : {fontSize}, cursor : 'pointer', width : 'auto',
                                  transition: 'color 0.3s ease, transform 0.3s ease',
                                  '&:hover': { color: 'gray', transform: 'scale(1.05)'},
                                  '&:focus': { outline: 'none', color: 'darkgray' }}}>
                                {t(item?.name)}
                           </Link>
                        </Button>
                        
                  </ListItem>

            )
            

          }
        }
                  )
     }
     { openContactModal && <Portal container={root.current}>
                                   <ContactModal closeFunc={()=>setOpenContactModal(false)}/>
                                 </Portal> }
    </List>
  )
}

export default SectionsLinks
