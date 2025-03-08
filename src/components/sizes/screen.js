import { useMediaQuery, useTheme } from "@mui/material";

export const useResponsive = () => {
  const smScreen = useMediaQuery("(max-width: 524px)");
  const mdScreen = useMediaQuery("(max-width: 768px)");
  const lgScreen = useMediaQuery("(max-width: 1024px)");
  const xlgScreen = useMediaQuery("(max-width: 1440px)");
  const xxlgScreen = useMediaQuery("(max-width: 1920px)");

  return { smScreen, mdScreen, lgScreen, xlgScreen, xxlgScreen };
};
