import { Box, Button, Typography } from "@mui/material";
import '../../../I18/i18'
import { useTranslation } from "react-i18next";

const LanguageButton = ({ language, setOpen, setCurrentLanguage, color, border }) => {
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    i18n.changeLanguage(language?.translator);
    setCurrentLanguage(language);
    setOpen(prev => !prev);
  };

  return (
    <Button
      sx={{
        height: "36px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "8px 12px",
        borderBottom: border,
        backgroundColor: "transparent", 
        transition: "0.3s ease-in-out", 
        "&:hover": {
          backgroundColor: "rgba(128, 128, 128, 0.1)", 
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
          transform: "scale(1.02)", 
        },
         
      }}
      disableRipple
      onClick={handleClick}
    >
      <Box height="20px" width="80px" display="flex" alignItems="center" gap="5px">
        <Box
          component="img"
          src={language?.flag}
          alt={language?.lang}
          height="100%"
          width="20px"
        />
        <Typography
          width="auto"
          height="100%"
          color={color}
          fontSize="12px"
          fontFamily="Poppins"
          sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {language?.lang}
        </Typography>
      </Box>
    </Button>
  );
};

export default LanguageButton;
