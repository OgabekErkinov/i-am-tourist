import { Link, List, ListItem, Stack } from '@mui/material'
import React from 'react'
import { navLinks } from '../../Database/db'

const MobileMenu = () => {
  return (
    <Stack width={'400px'}
           height={'100vh'}
           position={'fixed'}
           left={0}
           zIndex={2}>
            <List>
                {
                    navLinks?.map((item) => {
                        return (
                            <ListItem key={item?.id}>
                                <Link href = {item?.link}>
                                    {item?.name}
                                </Link>
                            </ListItem>
                        )
                    })
                }

            </List>


    </Stack>
  )
}

export default MobileMenu
