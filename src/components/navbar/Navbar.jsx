import { Box, Stack, useMediaQuery } from "@mui/material";
import LightDarkButton from "./LightDarkButton";
import LanguageButton from "./languages/LanguageButton";
import SocialNetworks from "./SocialNetworks";
import Logo from "./Logo";
import SectionsLinks from "./SectionsLinks";
import Languages from "./languages/Languages";

const Navbar = () => {
  // Media query for large screen
  const lgScreen = useMediaQuery('(min-width : 767px)');

  return (
    <Box width="100%"
         height="10vh"
         paddingX={{ xs: '1rem', sm: '2rem', md: '5%' }}
         boxSizing="border-box"
         bgcolor="rgba(17,24,39, 0.1)"
         border = "1px solid red"
         position="fixed"
         top={0}
         zIndex={2}
         sx={{
            backdropFilter: 'blur(5px)'}}>
        <Box width="100%" 
             height="100%" 
             paddingX="1rem">
                <Stack width="100%"
                       height="100%"
                       direction="row"
                       justifyContent="space-between"
                       alignItems="center">
                       <Logo />
                       <SectionsLinks />
                       <Stack direction="row"
                              alignItems="center"
                              gap="1.5rem"
                              height="40px"
                              maxWidth='450px' 
                              sx={{ 
                                  justifyContent: lgScreen ? 'space-between' : 'center', 
                                  }}>
                              <SocialNetworks />
                              <Stack direction="row"
                                     justifyContent="center"
                                     gap="10px">
                                     <Languages/>
                                     <LightDarkButton />
                               </Stack>
                         </Stack>
                 </Stack>
        </Box>
    </Box>
  );
};

export default Navbar;
