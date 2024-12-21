import { Avatar,Button,Icon,Link, List, ListItem, Stack } from "@mui/material"
import Lists from "./Lists"
import { navLinks, social_medias } from "../../Database/db"
import { Image, WbSunny } from "@mui/icons-material"


const Navbar = () => {
  return (
      <Stack direction={'row'}
             justifyContent={'space-between'}
             alignItems={'center'}
             width={'100%'}
             height={'65px'}
             paddingX={'8%'}
             boxSizing={'border-box'}
             bgcolor={'rgb(17 24 39 )'}
             >
             {/* Logo */}
               <Link href = '/'>
                  <Avatar src="https://www.ifly.com.uz/assets/logo-BPA5zOgc.png"/>
               </Link>

               {/* Main navigation */}
               <Stack direction={'row'}
                       justifyContent={'space-between'}
                       alignItems={'center'}
                       width={'70%'}>
              
               {/* Sections' menu */}
               <Lists array={navLinks}/>

               <Stack direction={'row'}
                      justifyContent={'space-between'}>
                         {/* social medias' icons */}
               <Lists array={social_medias}/>

{/* Changing language and burger */}
<Button sx={{fontSize : '12px', fontFamily : 'Poppins', display : 'flex', alignItems : 'center', gap : '5px', height : '2.5rem'}}><img src="/united-states.png" style={{height : '100%', width : 'auto'}}/> English</Button>

        <WbSunny color="orange"/> 

               </Stack>

               </Stack>
              
       </Stack>
  )
}

export default Navbar
