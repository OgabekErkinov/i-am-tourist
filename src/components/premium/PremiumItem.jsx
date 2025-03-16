import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useResponsive } from "../sizes/screen";
import useStore from "../../Store/store";
import CompLoading from '../loadings/CompLoading'

const PremiumItem = ({ tour, idx }) => {
  const {toggleContactModal} = useStore();
  const { t } = useTranslation();
  const premiumServices = t("premiumToursServices", { returnObjects: true }) || [];
  const { smScreen, mdScreen } = useResponsive();

  const sizeFont = useMemo(() => (smScreen ? "16px" : mdScreen ? "22px" : "28px"), [smScreen, mdScreen]);
  const paragraphSize = useMemo(() => (smScreen ? "14px" : mdScreen ? "18px" : "20px"), [smScreen, mdScreen]);
  const buttonSize = useMemo(() => (smScreen ? "10px" : "12px"), [smScreen]);

  return (
    <>
    {
      !tour?.image ? <CompLoading/> : (
        <Box
      sx={{
        height: smScreen ? "320px" : mdScreen ? "370px" : "390px",
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        mx: "auto",
        backgroundImage: `url(${tour?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "0.3s",
        "&:hover": { transform: "scale(1.02)" },
      }}>
      
      <Box
        sx={{
          height: "100%",
          width: "100%",
          borderRadius: "12px",
          position: "absolute",
          zIndex: 1,
          bgcolor: "rgba(0, 0, 0, 0.5)",
          p: smScreen ? "1rem" : "2rem 1rem",
        }}
      >
        <Stack height="100%" width="100%" alignItems="flex-start" justifyContent="flex-end" gap={smScreen ? "0.8rem" : "1rem"}>
          <Typography variant="h3" fontSize={sizeFont} fontWeight={600} color="white" fontFamily="Poppins">
            {premiumServices?.[idx]?.title || "No title"}
          </Typography>

          <Typography fontWeight={400} fontSize={paragraphSize} color="#D1D5DB">
            {premiumServices?.[idx]?.paragraph || "No description available."}
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF7518",
              width: smScreen ? "100%" : "80%",
              height: "2rem",
              borderRadius: "99px",
              fontSize: buttonSize,
              mx: "auto",
            }}
            onClick={toggleContactModal}
          >
            {t("ContactUs")}
          </Button>
        </Stack>
      </Box>
    </Box>
      )
    }
    </>
  );
};

export default PremiumItem;