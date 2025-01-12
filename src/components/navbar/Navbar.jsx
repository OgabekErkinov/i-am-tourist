import { Box, Stack } from "@mui/material";
import LightDarkButton from "./LightDarkButton";
import SocialNetworks from "./SocialNetworks";
import Logo from "./Logo";
import SectionsLinks from "./SectionsLinks";
import Languages from "./languages/Languages";
import MenuButton from "./MenuButton";
import { useResponsive } from "../sizes/screen";
import useStore from "../../Store/store";

const Navbar = ({root}) => {
  const light = useStore(state => state.light)
  const {lgScreen, xlgScreen} = useResponsive()
  const navPadding = lgScreen ? '8px' : lgScreen ? '5px' : '5%'
  const bgColor = light ? '#F97316' : '#1F2937'

  return (
    <Box width="100%" maxWidth='1922px' height="10vh" position="fixed" top={0} zIndex={3}>
        <Box width="100%" height="100%" paddingX={navPadding} bgcolor={'transparent'} 
             sx={{backdropFilter: 'blur(5px)'}}>
          <Box width='100%' height='100%' display='flex'  
               justifyContent='space-between' alignItems='center'>
                <Logo />
                <Stack direction="row" alignItems="center" justifyContent='flex-end' gap='1rem'>
                    <SectionsLinks root = {root} />
                    <SocialNetworks />
                    <Stack direction="row" justifyContent="space-between" gap="0.2rem">
                        <Languages/>
                        <LightDarkButton />
                        { lgScreen && <MenuButton root = {root}/> }
                    </Stack>
                </Stack>
          </Box>
        </Box>
    </Box>
  );
};

export default Navbar;
