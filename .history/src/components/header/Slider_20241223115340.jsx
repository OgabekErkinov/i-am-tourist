import React from 'react'
import { SliderItems } from '../../Database/db'
import 'swiper/css'; 
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, EffectFade, Autoplay } from 'swiper/modules';
import { Box, Stack, Typography } from '@mui/material'

const Slider = () => {
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
      style={{
        width: '100%', 
        height: '90vh',
        objectFit : 'cover'
      }}
    >
      {
        SliderItems.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Stack
                height={'100%'}
                width={'100%'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                sx={{
                  backgroundImage: `url(${item.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  objectFit : 'cover' }}
              >
                <Stack height={'90vh'}
                       width={'100%'}
                       paddingTop={'40vh'}
                       justifyContent={'start'}
                       alignItems={'center'}
                       position={'absolute'}
                       zIndex={1}
                       bgcolor={'rgba(0, 0, 0, 0.5)'}>
                             <Typography
                                  fontSize="5rem"
                                  fontFamily="Poppins"
                                  fontWeight={700}
                                  sx={{
                                     opacity: 1,
                                     color: 'white',
                                     textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
                                     '&'
                                      }}>
                                     {item.heading}
                              </Typography>
                              <Typography
                                     fontFamily="Poppins"
                                     fontSize="1.2rem"
                                     sx={{
                                        color: 'white',
                                        textAlign: 'center',
                                         maxWidth: '80%', 
                                         textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9)',
                                         }}>
                                        {item.paragraph}
                               </Typography>

                </Stack>
               
              </Stack>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
}

export default Slider;
