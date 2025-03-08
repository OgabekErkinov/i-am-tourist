import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useResponsive } from "../sizes/screen";
import { useTranslation } from "react-i18next";
import useStore from "../../Store/store";

const InfoPlaceModal = () => {
  const { t } = useTranslation();
  const selectedPlace = useStore((state) => state.selectedPlace);
  const toggleInfoModal = useStore((state) => state.toggleInfoModal);
  const toggleContactModal = useStore((state) => state.toggleContactModal);
  const infoModal = useStore((state) => state.infoModal);

  const { smScreen, mdScreen } = useResponsive();
  const widthContainer = smScreen ? "320px" : mdScreen ? "420px" : "560px";

  return (
    <Box
      width="100vw"
      height="100vh"
      bgcolor="rgba(0,0,0,0.6)"
      position="fixed"
      zIndex={3}
      display={infoModal ? "flex" : "none"}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        width={widthContainer}
        maxWidth="600px"
        height="auto"
        bgcolor="#FFFFFF"
        borderRadius="0.5rem"
        py="1.5rem"
        px="1rem"
        boxShadow="0px 4px 10px rgba(0,0,0,0.2)"
      >
        <Stack width="100%" alignItems="center" spacing={2}>
          <Box
            component="img"
            height="180px"
            width="100%"
            borderRadius="0.5rem"
            src={selectedPlace?.image}
            sx={{ objectFit: "cover" }}
          />

          <Typography
            variant="h5"
            fontFamily="Poppins"
            fontWeight="600"
            textAlign="center"
            fontSize={mdScreen ? "18px" : "24px"}
            color="#333"
          >
            {selectedPlace?.title}
          </Typography>

          <Typography
            fontFamily="Poppins"
            fontWeight="400"
            textAlign="center"
            fontSize={mdScreen ? "14px" : "16px"}
            color="#555"
            sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
          >
            {selectedPlace?.info}
          </Typography>

          <Stack width="100%" spacing={1}>
            <Typography fontFamily="Poppins" fontSize="16px" textAlign="center">
              <b>{t("Population")}:</b> {selectedPlace?.population}
            </Typography>
            <Typography fontFamily="Poppins" fontSize="16px" textAlign="center">
              <b>{t("Areas")}:</b> {selectedPlace?.regions}
            </Typography>
            <Typography fontFamily="Poppins" fontSize="16px" textAlign="center">
              <b>{t("Cities")}:</b> {selectedPlace?.cities}
            </Typography>
            <Typography fontFamily="Poppins" fontSize="16px" textAlign="center">
              <b>{t("Currency")}:</b> {selectedPlace?.currency}
            </Typography>
          </Stack>

          <Stack width="100%" direction="row" justifyContent="space-between" mt={2}>
            <Button
              sx={{
                bgcolor: "#888",
                color: "white",
                width: "45%",
                height: "40px",
                "&:hover": { bgcolor: "#666" },
              }}
              onClick={toggleInfoModal}
            >
              {t("Close")}
            </Button>
            <Button
              sx={{
                bgcolor: "#F59E0B",
                color: "white",
                width: "45%",
                height: "40px",
                "&:hover": { bgcolor: "#D97706" },
              }}
              onClick={toggleContactModal}
            >
              {t("Contact")}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default InfoPlaceModal;
