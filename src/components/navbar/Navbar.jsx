import { Box, Stack, useMediaQuery } from "@mui/material";
import LightDarkButton from "./LightDarkButton";
import LanguageButton from "./languages/LanguageButton";
import SocialNetworks from "./SocialNetworks";
import Logo from "./Logo";
import SectionsLinks from "./SectionsLinks";
import Languages from "./languages/Languages";
import { MenuOpenOutlined } from "@mui/icons-material";
import MenuButton from "./MenuButton";

const Navbar = () => {
  // Media query for large screen
  const xlgScreen = useMediaQuery('(min-width : 1225px)');

  return (
    <Box width="100%"
         height="10vh"
         display="flex"
         justifyContent="center"
         bgcolor="rgba(17,24,39, 0.1)"
         position="fixed"
         top={0}
         zIndex={2}
         sx={{
            backdropFilter: 'blur(5px)'}}>

                <Stack width="80%"
                       height="100%"
                       direction="row"
                       justifyContent="space-between"
                       alignItems="center">
                       <Logo />
                       <SectionsLinks />
                       <Stack direction="row"
                              alignItems="center"
                              justifyContent={xlgScreen ? 'space-between' : 'flex-end'}
                              gap="1.5rem"
                              height="18px"
                              width='380px'>
                              <SocialNetworks />
                              <Stack direction="row"
                                     justifyContent="space-between"
                                     gap="0.2rem">
                                     <Languages/>
                                    <LightDarkButton />
                                    {
                                      !xlgScreen && <MenuButton/>
                                    }
                                    
                              </Stack>
                              
                               
                         </Stack>
                 </Stack>

    </Box>
  );
};

export default Navbar;
