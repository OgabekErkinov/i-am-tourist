import { Box, Stack, Typography } from "@mui/material";
import { useResponsive } from "../sizes/screen";
import { useTranslation } from "react-i18next";
import useStore from "../../Store/store";

const Cards = () => {
  const { smScreen, mdScreen } = useResponsive();
  const { t } = useTranslation();
  const addCards = t("addCards", { returnObjects: true }) || []; 
  const { light , themeColors } = useStore();



  return (
    <Stack maxWidth="1536px" alignItems="center" justifyContent="center" padding={smScreen ? "8px" : "16px"}>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={smScreen ? "12px" : mdScreen ? "16px" : "20px"}
      >
        {addCards?.length > 0 ? (
          addCards.map((item, idx) => (
            <Box
              key={idx}
              borderRadius="12px"
              bgcolor={light ? '#fff' : themeColors.bg}
              padding={smScreen ? "12px" : "20px"}
              width={smScreen ? "90%" : mdScreen ? "45%" : "30%"}
              boxShadow="1px 1px 5px 1px rgba(95, 99, 105, 0.5)"
              sx={{
                transition: "0.4s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                },
              }}
            >
              <Stack alignItems="start" justifyContent="center" height="6rem">
                <Typography
                  fontSize={smScreen ? "14px" : mdScreen ? "20px" : "24px"}
                  fontFamily="Poppins"
                  fontWeight="600"
                  color={themeColors.text}
                  sx={{ transition: "0.4s" }}
                >
                  {item.heading}
                </Typography>
                <Typography
                  color={themeColors.text} 
                  fontSize={smScreen ? "10px" : mdScreen ? "14px" : "16px"}
                >
                  {item.paragraph}
                </Typography>
              </Stack>
            </Box>
          ))
        ) : (
          <Typography fontSize="18px" color="gray" fontStyle="italic">
            {t("NoCardsAvailable")}
          </Typography>
        )}
      </Box>
    </Stack>
  );
};

export default Cards;
