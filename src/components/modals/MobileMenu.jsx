import { List, ListItem, Stack, Portal, keyframes } from "@mui/material";
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
  const [openContactModal, setOpenContactModal] = useState(false);
  const menuOpen = useStore((state) => state.menuOpen);
  const light = useStore((state) => state.light);
  const widthContainer = mdScreen ? "50vw" : "40vw";
  const bgColor = light ? "#F97316" : "#1F2937";
  const contact = "Contact" || "Bog'lanish" || "Контакт";
  const fontSize = xlgScreen ? "20px" : "22px";

  const hoverStyle = {
    transform: "translateX(20px) scale(1.05)",
    transition: "0.4s",
  };

  return (
    <Stack
      width={widthContainer}
      height="100vh"
      position="fixed"
      left="0"
      top="0"
      zIndex={5} 
      bgcolor={bgColor}
      pt="10vh"
      sx={{
        animation: `${menuOpen ? slideIn : slideOut} 0.7s ease-in-out`,
        display: menuOpen ? "flex" : "none", 
        boxShadow: menuOpen ? "4px 0 10px rgba(0, 0, 0, 0.2)" : "none",
      }}
    >
      <List>
        {navLinks?.map((item, idx) => (
          <ListItem key={idx} sx={{ "&:hover": hoverStyle, transition: "0.4s" }}>
            {item.name !== contact ? (
              <LinkItem item={item} fontSize={fontSize} />
            ) : (
              <ButtonItem openFunction={setOpenContactModal} item={item} fontSize={fontSize} />
            )}
          </ListItem>
        ))}
      </List>

      {/* Contact modal */}
      {openContactModal && (
        <Portal container={root.current}>
          <ContactModal closeFunc={() => setOpenContactModal(false)} />
        </Portal>
      )}
    </Stack>
  );
};

export default MobileMenu;
