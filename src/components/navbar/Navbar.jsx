import { Box, Stack } from "@mui/material";
import LightDarkButton from "./LightDarkButton";
import SocialNetworks from "./SocialNetworks";
import Logo from "./Logo";
import SectionsLinks from "./SectionsLinks";
import Languages from "./languages/Languages";
import MenuButton from "./MenuButton";
import { useResponsive } from "../sizes/screen";
import useStore from "../../Store/store";

const Navbar = () => {
  // Media query for large screen
  const light = useStore(state => state.light)
  const {lgScreen, xlgScreen} = useResponsive()
  const navPadding = lgScreen ? '8px' : xlgScreen ? '10%' : '5%'
  const bgColor = light ? '#F97316' : '#000000'

  return (
    <Box width="100%" maxWidth='1922px' height="10vh" position="fixed" top={0} zIndex={4}>
        <Box width="100%" height="100%" paddingX={navPadding} bgcolor={bgColor} sx={{backdropFilter: 'blur(5px)'}}>
           <Stack width="100%" height="100%" direction="row" justifyContent="space-between" alignItems="center">
                <Logo />
                <Stack direction="row" alignItems="center" gap='1rem'>
                    <SectionsLinks />
                    <SocialNetworks />
                    <Stack direction="row" justifyContent="space-between" gap="0.2rem">
                        <Languages/>
                        <LightDarkButton />
                        { lgScreen && <MenuButton/> }
                    </Stack>
                 </Stack>
            </Stack>
        </Box>
    </Box>
  );
};

export default Navbar;
