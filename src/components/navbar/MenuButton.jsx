import { Box, Button } from "@mui/material";
import React from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import MobileMenu from "../modals/MobileMenu";
import useStore from "../../Store/store";

const MenuButton = ({ root }) => {
  const menuOpen = useStore((state) => state.menuOpen);
  const toggleMenu = useStore((state) => state.toggleMenu);

  return (
    <Box
      height="40px"
      width="40px"
      bgcolor="white"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
      }}
    >
      <Button
        disableElevation
        disableRipple
        onClick={toggleMenu}
        sx={{
          minWidth: 0,
          padding: 0,
          "&:active": { backgroundColor: "transparent" },
        }}
      >
        {menuOpen ? (
          <IoClose color="orange" fontSize="24px" />
        ) : (
          <IoMenuOutline color="orange" fontSize="24px" />
        )}
      </Button>
    </Box>
  );
};

export default MenuButton;
