import { Box, Button, Portal, Stack, Typography } from "@mui/material";
import React, { useState, useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import ContactModal from "../modals/ContactModal";
import { useResponsive } from "../sizes/screen";
import useStore from "../../Store/store";

const PremiumItem = ({ tour, idx, rootRef }) => {
  const toggleContactModal = useStore(state => state.toggleContactModal)
  const { t } = useTranslation();
  const premiumServices = t("premiumToursServices", { returnObjects: true }) || [];
  const { smScreen, mdScreen } = useResponsive();

  const sizeFont = useMemo(() => (smScreen ? "16px" : mdScreen ? "22px" : "28px"), [smScreen, mdScreen]);
  const paragraphSize = useMemo(() => (smScreen ? "14px" : mdScreen ? "18px" : "20px"), [smScreen, mdScreen]);
  const buttonSize = useMemo(() => (smScreen ? "10px" : "12px"), [smScreen]);

  return (
    <Box
      height={smScreen ? "320px" : mdScreen ? "370px" : "390px"}
      width="100%"
      borderRadius="12px"
      overflow="hidden"
      position="relative"
      mx="auto"
      sx={{
        backgroundImage: `url(${tour?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&:hover": { transform: "scale(1.02)", transition: "0.3s" },
      }}
    >
      <Box
        height="100%"
        width="100%"
        borderRadius="12px"
        position="absolute"
        zIndex={1}
        bgcolor="rgba(0, 0, 0, 0.5)"
        padding={smScreen ? "1rem" : "2rem 1rem"}
      >
        <Stack height="100%" width="100%" alignItems="flex-start" justifyContent="flex-end" gap={smScreen ? "0.8rem" : "1rem"}>
          <Typography variant="h3" fontFamily="Poppins" fontSize={sizeFont} fontWeight="600" color="white">
            {premiumServices?.[idx]?.title || "No title"}
          </Typography>

          <Typography fontWeight="400" fontSize={paragraphSize} color="#D1D5DB">
            {premiumServices?.[idx]?.paragraph || "No description available."}
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF7518",
              width: smScreen ? "100%" : "80%",
              height: "2rem",
              borderRadius: "99px",
              margin: "0 auto",
              fontSize: buttonSize,
            }}
            onClick={toggleContactModal}
          >
            {t("ContactUs")}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default PremiumItem;
