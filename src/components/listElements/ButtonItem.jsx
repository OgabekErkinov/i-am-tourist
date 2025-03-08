import { Box, Button, Link, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import useStore from "../../Store/store"

const ButtonItem = ({item, fontSize}) => {
  const {t} = useTranslation()
  const toggleContactModal = useStore(state => state.toggleContactModal)

  return (
    <Box width='auto' sx={{cursor : 'pointer', transition: 'color 0.3s ease, transform 0.3s ease',
                           '&:hover': { color: 'gray', transform: 'scale(1.05)'},
                           '&:focus': { outline: 'none', color: 'darkgray' }}} >
       <Button onClick={()=>toggleContactModal}>
           <Link href = {item?.link} style={{ textDecoration : 'none', color : '#F4F4F5'}}>
              <Typography fontFamily='Poppins' fontWeight='500' fontSize={fontSize} width='auto'>
                      {t(item?.name)}
              </Typography>
           </Link>
      </Button>
    </Box>
  )
}

export default ButtonItem
