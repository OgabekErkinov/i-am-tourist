import { List, ListItem, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { navLinks } from "../../../Database/db";
import useStore from "../../../Store/store";
import { useResponsive } from "../../sizes/screen";
import LinkItem from "../../listElements/LinkItem";
import ButtonItem from "../../listElements/ButtonItem";

const MobileMenu = ({ root }) => {
  const { mdScreen, xlgScreen } = useResponsive();
  const { menuOpen, toggleMenu, themeColors } = useStore();

  const widthContainer = mdScreen ? "300px" : "40vw";
  const fontSize = xlgScreen ? "20px" : "22px";


  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: menuOpen ? 0 : "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        width: widthContainer,
        zIndex: 12,
        background: `linear-gradient(to bottom, ${themeColors.bg}, rgb(82, 81, 81))`,
        boxShadow: menuOpen ? "4px 0 15px rgba(0, 0, 0, 0.3)" : "none",
      }}
    >
      {/* LOGO */}
      <Box
        height="60px"
        display="flex"
        alignItems="center"
        gap="12px"
        p="12px"
        borderBottom="2px solid grey"
        bgcolor="rgba(0,0,0,0.1)"
      >
        <Box component="img" src="/logo.webp" maxHeight="50px" borderRadius="50%" />
        <Typography fontWeight="700" fontSize="24px" color="#ffffff">
          I am Tourist
        </Typography>
      </Box>

      {/* MENYU LINKLARI */}
      <List sx={{ mt: 3, px: 3 }}>
        {navLinks?.map((item, idx) => (
          <ListItem
            key={idx}
            sx={{
              py: "8px",
              transition: "transform 0.3s ease-in-out, background 0.3s",
              borderRadius: "8px",
              "&:hover": {
                transform: "translateX(12px) scale(1.07)",
                background: "rgba(255, 255, 255, 0.1)",
              },
            }}
            onClick={toggleMenu} 
          >
            {item.name !== "Contact" ? (
              <LinkItem item={item} fontSize={fontSize} />
            ) : (
              <ButtonItem item={item} fontSize={fontSize} />
            )}
          </ListItem>
        ))}
      </List>
    </motion.div>
  );
};

export default MobileMenu;