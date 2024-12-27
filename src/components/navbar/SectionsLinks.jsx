import { Link, List, ListItem, useMediaQuery } from '@mui/material'
import React from 'react'
import { navLinks } from '../../Database/db'

const SectionsLinks = () => {
    const xlgScreen = useMediaQuery('(min-width : 1225px)')
  return (
    <List sx={{
        height : '35px',
        maxWidth : '700px',
        display : xlgScreen ? 'flex' : 'none',
        justifyContent : 'flex-end',
        
        }}>
      {
        navLinks?.map(item => 
                  <ListItem key={item?.id}
                            sx={{ fontWeight : '500',
                                  fontSize : '22px',
                                  cursor : 'pointer'}}>
                             <Link href = {item?.link}
                                   style={{
                                    textDecoration : 'none',
                                    color : '#F4F4F5'
                                   }}>
                                   {item?.name}
                             </Link>
                  </ListItem>)
       }
       </List>
  )
}

export default SectionsLinks
