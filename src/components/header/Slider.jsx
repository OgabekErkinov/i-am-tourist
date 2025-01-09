import React from 'react'
import { SliderItems } from '../../Database/db'
import 'swiper/css'; 
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, EffectFade, Autoplay } from 'swiper/modules';
import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next';

const Slider = () => {
  const {t, i18n} = useTranslation()
  const translatedSliderItems = t("sliderItems", { returnObjects: true });
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
      style={{ width: '100%', height: '90vh', objectFit : 'cover'}}>
      {
        translatedSliderItems?.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Box height='100%' width='100%'
                   sx={{ backgroundImage: `url(${SliderItems[idx].url})`, backgroundSize: 'cover', backgroundPosition: 'center', objectFit : 'cover' }}>
                    <Box height='100%' width='100%' paddingTop='35vh' position='absolute' zIndex='1' bgcolor='rgba(0, 0, 0, 0.5)'>
                       <Stack height='100%' width='100%' justifyContent='start' alignItems='center' color='white'>
                          <Box width='95%' textAlign='center'>
                            <Typography fontSize="6rem" fontFamily="Poppins" fontWeight={700} textAlign='center'
                                         sx={{
                                            opacity: 1,
                                            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
                                            '@media (max-width : 524px)' : { fontSize : '3rem' } }}>
                                            {item.heading}
                              </Typography>
                          </Box>
                          <Box width='90%' textAlign='center'>
                             <Typography fontFamily="Poppins"
                                          fontSize="1.2rem"
                                          sx={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9)' }}>
                                          {item.paragraph}
                              </Typography>
                          </Box>             
                       </Stack>
                    </Box>       
              </Box>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
}

export default Slider;
