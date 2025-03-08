import { List, ListItem, Stack, Portal, keyframes, Box, Typography } from "@mui/material";
import { navLinks } from "../../Database/db";
import useStore from "../../Store/store";
import { useResponsive } from "../sizes/screen";
import LinkItem from "../listElements/LinkItem";
import ButtonItem from "../listElements/ButtonItem";
import { useState } from "react";
import ContactModal from "./ContactModal";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const MobileMenu = ({ root }) => {
  const { mdScreen, xlgScreen } = useResponsive();
  const menuOpen = useStore((state) => state.menuOpen);
  const light = useStore((state) => state.light);
  const widthContainer = mdScreen ? "300px" : "40vw";
  const bgColor = light ? "#F97316" : "#1F2937";
  const contact = "Contact" || "Bog'lanish" || "Контакт";
  const fontSize = xlgScreen ? "20px" : "22px";

  const hoverStyle = {
    transform: "translateX(20px) scale(1.05)",
    transition: "0.4s",
  };

  return (
    <Stack width={widthContainer}
      height="100vh"
      position="fixed"
      left="0"
      top="0"
      zIndex={12} 
      sx={{
        animation: `${menuOpen ? slideIn : slideOut} 0.7s ease-in-out`,
        display: menuOpen ? "flex" : "none", 
        boxShadow: menuOpen ? "4px 0 10px rgba(0, 0, 0, 0.2)" : "none",
        background : `linear-gradient(to right bottom, ${bgColor},rgb(82, 81, 81) )`
      }}
    >
      <Box height='48px' width='100%' p='8px' display='flex' alignItems='center' 
           gap='12px' borderBottom='1px solid grey'>
        <Box component='img' src="/logo.webp" height='100%' borderRadius='50%'/>
        <Typography fontWeight='600' fontSize='24px' color="#ffffff" >I am Tourist</Typography>
      </Box>
      <List>
        {navLinks?.map((item, idx) => (
          <ListItem key={idx} sx={{ "&:hover": hoverStyle, transition: "0.4s" }}>
            {item.name !== contact ? (
              <LinkItem item={item} fontSize={fontSize} />
            ) : (
              <ButtonItem item={item} fontSize={fontSize} />
            )}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default MobileMenu;
