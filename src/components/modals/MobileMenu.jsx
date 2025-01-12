import {List, ListItem, Stack, Portal } from '@mui/material'
import { navLinks } from '../../Database/db'
import useStore from '../../Store/store'
import { useResponsive } from '../sizes/screen'
import LinkItem from '../listElements/LinkItem'
import ButtonItem from '../listElements/ButtonItem'
import { useState } from 'react'
import ContactModal from './ContactModal'

const MobileMenu = ({root}) => {
  const {mdScreen, lgScreen, xlgScreen} = useResponsive()
  const [openContactModal, setOpenContactModal] = useState(false)
  const light = useStore(state => state.light)
  const widthContainer = mdScreen ? '50vw' : '40vw'
  const bgColor = light ? '#F97316' : '#1F2937'
  const contact = ("Contact" || "Bog'lanish" || "Контакт")
   const fontSize = xlgScreen ? '20px' : '22px'

  const hoverStyle = {
    transform : 'translateX(20px) scale(1.05)',
    transition : '0.4s'
  }

  return (
    <Stack width={widthContainer} height='90vh' position='fixed' left='0' top='10vh' zIndex='3' bgcolor={bgColor}>
            <List>
                { navLinks?.map((item, idx) => {
                        return (
                            <ListItem key={idx} sx={{'&:hover' : hoverStyle, transition : '0.4s'}}>
                               {item.name !== contact ? 
                                         <LinkItem item={item} fontSize={fontSize}/> :
                                         <ButtonItem openFunction={setOpenContactModal} item={item} fontSize={fontSize}/>
                               }   
                            </ListItem>
                               )  })}
            </List>
            { openContactModal && <Portal container={root.current}>
                                    <ContactModal closeFunc={()=>setOpenContactModal(false)}/>
                                 </Portal> }
    </Stack>
  )
}

export default MobileMenu
