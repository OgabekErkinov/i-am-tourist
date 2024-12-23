import { Avatar, Link } from '@mui/material'
import React from 'react'

const Logo = () => {
  return (
    <Link href = '/'
    sx={{
      height : '56px',
      width : '56px'
    }}>
    <Avatar src="https://www.ifly.com.uz/assets/logo-BPA5zOgc.png"
            sx={{height : '100%',
                 width : '100%'
            }}/>
</Link>
  )
}

export default Logo
