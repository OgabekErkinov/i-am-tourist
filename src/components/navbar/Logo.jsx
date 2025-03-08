import { Avatar, Link } from '@mui/material'
import React from 'react'

const Logo = () => {
  return (
    <Link href = '/' sx={{ height : '52px', width : '52px' }}>
        <Avatar src="/logo.webp" sx={{height : '100%', width : '100%' }}/>
    </Link>
         )
                   }

export default Logo
