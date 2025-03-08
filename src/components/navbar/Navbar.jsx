import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import LightDarkButton from "./LightDarkButton";
import SocialNetworks from "./SocialNetworks";
import Logo from "./Logo";
import SectionsLinks from "./SectionsLinks";
import Languages from "./languages/Languages";
import MenuButton from "./MenuButton";
import { useResponsive } from "../sizes/screen";
import useStore from "../../Store/store";
import throttle from 'lodash.throttle'


const Navbar = ({ root }) => {
  const light = useStore((state) => state.light);
  const lgScreen = useResponsive().lgScreen;
  const [transparent, setTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setTransparent(window.scrollY > 50);
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = transparent ? "transparent" : light ? "#F97316" : "#1F2937";

  return (
    <Box width="100%" height="10vh" position="fixed"
      top={0}
      zIndex={12}
      sx={{ transition: "background-color 0.6s ease-in-out" }}
    >
      <Box
        width="100%"
        height="100%"
        paddingX='12px'
        bgcolor={bgColor}
        sx={{
          backdropFilter: transparent ? "blur(5px)" : "none",
          transition: "backdrop-filter 0.4s ease-in-out, background-color 0.4s ease-in-out",
        }}
      >
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Logo />
          <Stack direction="row" alignItems="center" justifyContent="flex-end" gap="1rem">
            <SectionsLinks root={root} />
            <SocialNetworks />
            <Stack direction="row" justifyContent="space-between" gap="0.2rem">
              <Languages />
              <LightDarkButton />
              {lgScreen && <MenuButton root={root} />}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
