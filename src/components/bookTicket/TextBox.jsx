import { Box, Input, Typography } from '@mui/material'

const TextBox = ({label, pholder, type, writer, value}) => {
  return (
    <Box height='100%' width='100%'>
        <Typography fontFamily='Poppins' fontSize='14px' fontWeight='600' color='#374151'>
                {label}
        </Typography>
        <Box height = 'auto' width = '100%' borderRadius = '8px' border='1px solid #D1D5DB'
             display='flex' alignItems='center' padding='16px'>
            <Input placeholder={pholder} type={type} disableUnderline fullWidth
                   value={value}
                   onChange={(e) => writer(e.target.value)}/>
        </Box>  
    </Box>
  )
}

export default TextBox
