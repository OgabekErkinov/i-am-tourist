import { Box, Link, Stack, Typography } from "@mui/material";
import { useResponsive } from "../sizes/screen";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const HistoryCard = () => {
  const { smScreen, mdScreen } = useResponsive();
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 1000, delay: 500 });
  }, []);

  return (
    <Box
      width="90%"
      data-aos="fade-up"
      mt="4rem"
      mx="auto"
      borderRadius="12px"
      bgcolor="#FFFFFF"
      boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
      p={smScreen ? "1rem" : "2rem"}
      display="flex"
      flexDirection={mdScreen ? "column" : "row"}
      alignItems="center"
      justifyContent="space-between"
      gap="1rem"
      height={smScreen ? "20rem" : mdScreen ? "25rem" : "18rem"}
    >
      {/* Rasm qismi */}
      <Box
        height={mdScreen ? "50%" : "100%"}
        width={mdScreen ? "100%" : "35%"}
        overflow="hidden"
        display="flex"
        justifyContent="center"
        alignItems="center"
        
      >
        <Box
          component="img"
          src="/logo.webp"
          alt="Company History Image"
          
          sx={{
            height: '100%',
            width: '100%',
            borderRadius:'12px',
            objectFit: "contain",
            transition: "0.3s",
            "&:hover": { transform: "scale(1.05)" },
           
          }}
        />
      </Box>

      {/* Matn qismi */}
      <Stack
        height={mdScreen ? "50%" : "100%"}
        width={mdScreen ? "100%" : "60%"}
        p="8px"
        justifyContent="center"
        gap="1rem"
        textAlign={smScreen || mdScreen ? "center" : "left"}
      >
        <Typography
          fontFamily="Poppins"
          fontWeight="600"
          fontSize="14px"
          textTransform="uppercase"
        >
          {t("OurHistory")}
        </Typography>
        <Typography fontFamily="Poppins" mt="1rem" color="gray" width="100%" fontSize={smScreen ? "12px" : mdScreen ? "14px" : "16px"}>
          {t("AboutHistory")}
        </Typography>
        <Box width="100%" textAlign={smScreen || mdScreen ? "center" : "start"}>
          <Link
            href="#"
            sx={{ textDecoration: "none", color: "black", "&:hover": { color: "#F97316" } }}
          >
            <Typography fontWeight="600" fontFamily="Poppins" fontSize="14px">
              {t("Info")} →
            </Typography>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default HistoryCard;
