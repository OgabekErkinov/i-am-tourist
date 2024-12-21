import { List, ListItem } from '@mui/material'
import React from 'react'
import NavbarItem from './NavbarItem'

const Lists = ({array}) => {
  return (
    <List sx={{
        display : 'flex',
        justifyContent : 'space-evenly',
        gap: '12px'
              }}>
              {
                array?.map(item => 
                      <ListItem key={item?.id}
                                sx={{padding : 0}}
                                >
                             <NavbarItem url={item?.link}
                                      pathD={item?.pathD}
                                      name={item?.name}/>
                      </ListItem>)
}
</List>
  )
}

export default Lists
