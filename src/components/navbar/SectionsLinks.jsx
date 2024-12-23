import { List, ListItem, useMediaQuery } from '@mui/material'
import React from 'react'
import { navLinks } from '../../Database/db'
import NavbarItem from './NavbarItem'

const SectionsLinks = () => {
    const xlgScreen = useMediaQuery('(min-width : 1024px)')
  return (
    <List sx={{
        height : '35px',
        width : '500px',
        display : xlgScreen ? 'flex' : 'none',
        justifyContent : 'center',
        
        }}>
      {
        navLinks?.map(item => 
                  <ListItem key={item?.id}
                            sx={{ margin : '0px',
                                  width : 'auto',
                                 fontWeight : 'medium',
                                 fontSize : '22px'}}>
                       <NavbarItem url={item?.link}
                                   pathD={item?.pathD}
                                   name={item?.name}/>
                  </ListItem>)
       }
       </List>
  )
}

export default SectionsLinks
