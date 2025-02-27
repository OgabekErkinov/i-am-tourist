import React from 'react';
import { SliderItems } from '../../Database/db';
import 'swiper/css'; 
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, EffectFade, Autoplay } from 'swiper/modules';
import { Box, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useResponsive } from '../sizes/screen';

const Slider = () => {
  const { t } = useTranslation();
  const translatedSliderItems = t("sliderItems", { returnObjects: true });
  const { smScreen, mdScreen, lgScreen, xlgScreen } = useResponsive();

  const headingSize = smScreen ? '28px' : mdScreen ? '36px' : lgScreen ? '48px' : '64px';
  const paragraphSize = smScreen ? '16px' : mdScreen ? '18px' : lgScreen ? '20px' : '22px';

  const sliderHeight = smScreen ? '400px' : mdScreen ? '500px' : lgScreen ? '600px' : '750px';

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, EffectFade, Autoplay]}
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      navigation
      pagination={{ clickable: false }}
      scrollbar={{ draggable: true }}
      loop={true}
      style={{ width: '100%', height: sliderHeight }} 
    >
      {translatedSliderItems?.map((item, idx) => (
        <SwiperSlide key={idx}>
          <Box
            height="100%"
            width="100%"
            pt='10vh'
            sx={{
              backgroundImage: `url(${SliderItems[idx].url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <Box height="100%" width="100%" paddingTop={smScreen?'20%':'15%'}
              position="absolute" zIndex="1" bgcolor="rgba(0, 0, 0, 0.5)">
              <Stack height="100%" width="100%" justifyContent="start" alignItems="center" color="white">
                <Box width="95%" textAlign="center">
                  <Typography
                    fontSize={headingSize}
                    fontFamily="Poppins"
                    fontWeight={700}
                    textAlign="center"
                    sx={{ opacity: 1, textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
                  >
                    {item.heading}
                  </Typography>
                </Box>
                <Box width="90%" textAlign="center">
                  <Typography
                    fontFamily="Poppins"
                    fontSize={paragraphSize}
                    sx={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9)' }}
                  >
                    {item.paragraph}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
