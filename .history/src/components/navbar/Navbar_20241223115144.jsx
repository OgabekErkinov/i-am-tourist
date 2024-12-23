import { Box, Stack, useMediaQuery } from "@mui/material";
import { navLinks } from "../../Database/db";
import NavbarItem from "./NavbarItem";
import LightDarkButton from "./LightDarkButton";
import LanguageButton from "./LanguageButton";
import SocialNetworks from "./SocialNetworks";
import Logo from "./Logo";
import SectionsLinks from "./SectionsLinks";

const Navbar = () => {
  // Media query for large screen
  const lgScreen = useMediaQuery('(min-width : 767px)');

  return (
    <Box 
      width="100%"
      height="10vh"
      paddingX="5%" 
      boxSizing="border-box"
      bgcolor="rgba(17,24,39, 0.1)"
      position="fixed"
      top={0}
      zIndex={2}
      sx={{
        backdropFilter: 'blur(5px)',
      }}
    >
      <Box width="100%" height="100%" paddingX="8px">
        <Stack
          width="100%"
          height="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <Logo />
          <SectionsLinks />
          <Stack direction="row"
                 justifyContent="space-between"
                 alignItems="center"
                 gap="1rem"
                 height="40px"
                 width={lgScreen ? '450px' : 'auto'} 
                 sx={{
                    flexWrap: 'wrap', 
                    justifyContent: lgScreen ? 'space-between' : 'center', 
                     }}>
                <SocialNetworks />
               <Stack direction="row"
              justifyContent="center"
              gap="10px">
              <LanguageButton />
              <LightDarkButton />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
