import { Box, Link, List, ListItem, Stack, Typography, Button } from '@mui/material'
import { navLinks } from '../../Database/db'
import useStore from '../../Store/store'
import { useResponsive } from '../sizes/screen'

const MobileMenu = () => {
  const {mdScreen, lgScreen} = useResponsive()
  const light = useStore(state => state.light)
  const widthContainer = mdScreen ? '50vw' : '40vw'
  const bgColor = light ? '#F97316' : '#1F2937'

  const hoverStyle = {
    transform : 'translateX(10px) scale(1.05)',
    transition : '0.4s'
  }

  return (
    <Stack width={widthContainer} height='90vh' position='fixed' left='0' top='10vh' zIndex='3' bgcolor={bgColor}>
            <List>
                {
                    navLinks?.map((item, idx) => {
                        return (
                            <ListItem key={item?.id} sx={{'&:hover' : hoverStyle, transition : '0.4s'}}>
                                <Link href = {item?.link} sx={{ml : idx === 3 ? '8vw' : '0', textDecoration : 'none'}}>
                                   <Typography fontFamily='Poppins' fontSize={mdScreen ? '24px' : '32px'} fontWeight='500' color='#FFFFFF'>
                                      {item?.name}
                                  </Typography>    
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
