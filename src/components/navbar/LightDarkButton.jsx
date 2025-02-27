import { Box, Button } from "@mui/material";
import React from "react";
import { BsLightningCharge } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import useStore from "../../Store/store"; // useColorsStore emas, useStore ishlatamiz!

const LightDarkButton = () => {
  const light = useStore((state) => state.light);
  const toggleBg = useStore((state) => state.toggleBgColor);

  const Icon = light ? BsLightningCharge : FiSun;

  return (
    <Box
      height="40px"
      width="40px"
      bgcolor="white"
      borderRadius="5px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Button
        disableElevation
        disableRipple
        sx={{
          "&:active": { backgroundColor: "transparent" },
        }}
        onClick={toggleBg} 
      >
        <Box width="24px" height="24px" pt="2px">
          <Icon color="orange" style={{ scale: "1.4" }} />
        </Box>
      </Button>
    </Box>
  );
};

export default LightDarkButton;
