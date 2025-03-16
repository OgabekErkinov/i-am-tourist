import { Stack, Typography, Box } from "@mui/material";
import { services } from "../../Database/db";
import Icon from "./Icon";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useMemo } from "react";
import { useResponsive } from "../sizes/screen";
import HistoryCard from "./HistoryCard";
import Customers from "./Customers";
import { useTranslation } from "react-i18next";
import useStore from "../../Store/store";

const About = () => {
  const { themeColors } = useStore();
  const { smScreen, mdScreen, lgScreen, xlgScreen } = useResponsive();
  const { t } = useTranslation();
  const allServices = t("services", { returnObjects: true }) || [];

  useEffect(() => {
    Aos.init({ duration: 800, delay: 300 });
  }, []);

  const gridTemplate = useMemo(() => {
    if (smScreen) return "repeat(1, 1fr)";
    if (mdScreen) return "repeat(2, 1fr)";
    if (lgScreen) return "repeat(3, 1fr)";
    return "repeat(4, 1fr)";
  }, [smScreen, mdScreen, lgScreen]);

  return (
    <Box id="about" width="100%" py="5rem" bgcolor={themeColors.bg} sx={{ transition: "0.4s" }}>
      <Stack alignItems="center" justifyContent="center" spacing={4}>
        <Stack alignItems="center" gap="1.5rem" width="90%">
          <Typography
            data-aos="fade-up"
            variant="h4"
            color={themeColors.text}
            fontWeight="800"
            fontSize={xlgScreen ? "2.5rem" : lgScreen ? "2rem" : "1.75rem"}
            textAlign="center"
            sx={{ transition: "0.4s" }}
          >
            {t("AboutCompany")}
          </Typography>
          <Typography
            data-aos="fade-up"
            fontSize={xlgScreen ? "1.5rem" : lgScreen ? "1.25rem" : "1rem"}
            color={themeColors.text}
            textAlign="center"
            width={smScreen ? "90%" : "70%"}
          >
            {t("AboutServices")}
          </Typography>

          <Box width="100%" display="grid" gap="20px" gridTemplateColumns={gridTemplate}>
            {allServices.map((service, idx) => (
              <Box
                key={idx}
                data-aos="fade-up"
                bgcolor="white"
                width="100%"
                maxWidth={smScreen ? "100%" : "280px"}
                mx="auto"
                height={smScreen ? "10rem" : mdScreen ? "12rem" : "14rem"}
                borderRadius="12px"
                boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
                p={2}
                display="flex"
                flexDirection="column"
                justifyContent="space-evenly"
                alignItems="center"
                sx={{
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.04)", transition: "0.3s ease-in-out" },
                }}
              >
                <Icon
                  pathD={services?.[idx]?.icon || ""}
                  color={services?.[idx]?.color || "#000"}
                  size={smScreen ? "30px" : mdScreen ? "40px" : "50px"}
                />
                <Typography variant="h5" fontSize={smScreen ? "14px" : mdScreen ? "16px" : "18px"} fontWeight="600" textAlign="center" color="rgb(17,24,39)">
                  {service.title || "No Title"}
                </Typography>
                <Typography width="100%" fontSize={smScreen ? "12px" : mdScreen ? "14px" : "16px"} textAlign="center" color="rgb(75,85,99)">
                  {service.paragraph || "No Description Available."}
                </Typography>
              </Box>
            ))}
          </Box>
        </Stack>

        <HistoryCard />
        <Customers />
      </Stack>
    </Box>
  );
};

export default About;
