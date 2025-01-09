import { Box, Input, Typography } from '@mui/material'

const DateBox = ({label}) => {
  return (
    <Box height='100%' width='100%'>
    <Typography fontFamily='Poppins' fontSize='14px' fontWeight='500' color='#374151'>
        {label}
    </Typography>
    <Box height='auto' width='100%' borderRadius='8px' border='1px solid #D1D5DB'
         display='flex' alignItems='center' padding='16px'>
        <Input type='date' disableUnderline fullWidth/>
    </Box>
</Box>
  )
}

export default DateBox
