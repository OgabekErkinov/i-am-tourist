import React, { useMemo } from "react";
import { Stack, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { premiumToursServices } from "../../Database/db";
import PremiumItem from "./PremiumItem";
import { useTranslation } from "react-i18next";
import useStore from "../../Store/store";
import { useResponsive } from "../sizes/screen";

const PremiumTours = () => {
  const { themeColors } = useStore();
  const { t } = useTranslation();
  const { smScreen, mdScreen } = useResponsive();

  const sizeFont = useMemo(() => {
    return smScreen ? "20px" : mdScreen ? "28px" : "36px";
  }, [smScreen, mdScreen]);

  return (
    <Stack
      id="excursions"
      width="100%"
      minHeight={smScreen ? "500px" : mdScreen ? "600px" : "720px"}
      bgcolor={themeColors.bg}
      alignItems="center"
      justifyContent="center"
      sx={{ padding: smScreen ? "2rem 0" : "4rem 0" }}
    >
      <Stack
        width="90%"
        maxWidth="1496px"
        justifyContent="center"
        alignItems="center"
        gap={smScreen ? "1.5rem" : "2rem"}
      >
        <Typography
          fontFamily="Poppins"
          fontSize={sizeFont}
          fontWeight="700"
          textAlign="center"
          width="90%"
          color={themeColors.text}
        >
          {t("AboutPremium")}
        </Typography>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          loop
          style={{ width: "100%", padding: smScreen ? "1rem" : "2rem" }}
          breakpoints={{
            300: { slidesPerView: 1, spaceBetween: 40 },
            600: { slidesPerView: 2, spaceBetween: 40 },
            900: { slidesPerView: 3, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {premiumToursServices?.map((tour, idx) => (
            <SwiperSlide key={idx}>
              <PremiumItem tour={tour} idx={idx} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Stack>
  );
};

export default PremiumTours;
