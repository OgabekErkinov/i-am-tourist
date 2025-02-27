import { Box, Stack, Typography } from "@mui/material";
import Logo from "../navbar/Logo";
import SocialNetworks from "../navbar/SocialNetworks";
import Lists from "./Lists";
import { useResponsive } from "../sizes/screen";
import { useTranslation } from "react-i18next";
import useStore from "../../Store/store";

const Footer = () => {
  const { smScreen, mdScreen, lgScreen, xlgScreen } = useResponsive();
  const { t } = useTranslation();
  const light = useStore(state => state.light);
  const textColor = light ? '#F97316' : '#1F2937' ;
  const bgColor = light ? '#1F2937' : '#F97316';

  const columns = smScreen
    ? "1fr"
    : mdScreen
    ? "1fr 1fr"
    : lgScreen
    ? "repeat(3, 1fr)"
    : "1.5fr 1fr 1fr 1fr";

  return (
    <Box
      width="100%"
      padding={smScreen ? "16px" : "32px"}
      bgcolor={bgColor}
      mt="2rem"
      boxSizing="border-box"
    >
      <Box
        width="90%"
        mx="auto"
        display="grid"
        alignItems="start"
        gridTemplateColumns={columns}
        gap={smScreen ? "1rem" : "2rem"}
      >
        {/* Logo va ijtimoiy tarmoqlar */}
        <Stack width="100%" gap="1rem" color="#FFFFFF" textAlign={smScreen ? "center" : "left"}>
          <Logo />
          <Typography fontFamily="Poppins" fontWeight="400" color={textColor}>
            {t("OurInviting")}
          </Typography>
          <Box display="flex" justifyContent={smScreen ? "center" : "start"}>
            <SocialNetworks />
          </Box>
        </Stack>

        {/* Tezkor linklar */}
        <Lists
          heading={t("FastLinks")}
          array={[
            { link: "#about", name: t("About") },
            { link: "#excursions", name: t("Excursions") },
          ]}
        />

        {/* Hududlar */}
        <Lists
          heading={t("Locations")}
          array={[
            { name: t("Europe"), link: "" },
            { name: t("Asia"), link: "" },
            { name: t("Africa"), link: "" },
            { name: t("Australia"), link: "" },
          ]}
        />

        {/* Bizning joylashuv */}
        <Lists heading={t("OurLocation")} />
      </Box>
    </Box>
  );
};

export default Footer;
