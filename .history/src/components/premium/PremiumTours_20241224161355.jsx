import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import 'swiper/css'; 
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { premiumToursServices } from '../../Database/db';
import PremiumItem from './PremiumItem';

const PremiumTours = () => {

  return (
    <Stack height={'auto'}
           width={'100%'}
           padding={'2rem 2rem'}
           bgcolor={'#F97316'}
           boxSizing={'border-box'} >
          <Stack height={'100%'}
                 width={'100%'}
                 justifyContent={'space-between'}
                 alignItems={'center'}
                 gap={'2rem'}>
              {/* Title */}
                <Typography fontFamily={'Poppins'}
                            width={'70%'}
                            fontSize={'48px'}
                            lineHeight={'48px'}
                            fontWeight={'bold'}
                            textAlign={'center'}
                            height={'auto'}
                            sx={{
                              '@media (max-width: 900px)': {
                               fontSize: '36px',
                               lineHeight: '40px',
                                },
                              '@media (max-width: 600px)': {
                                fontSize: '24px',
                                lineHeight: '28px',
                                },
                               }}>
                               Bizning Premium Turlarimizni Kashf Etish
                 </Typography>
            {/* Slider */}
                 <Box display={'flex'} 
                      alignItems={'center'} 
                      justifyContent={'center'} 
                      height={'35rem'} 
                      width={'100%'}>
                      <Swiper
                          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                          autoplay={{ delay: 2500, disableOnInteraction: false }}
                          navigation
                          pagination={{ clickable: false }}
                          scrollbar={{ draggable: true }}
                          loop={true}
                          style={{
                               width: '100%', 
                               height: '100%',
                               padding : '1rem',
                               display : 'flex',
                               justifyContent : 'center',
                               alignItems : 'center' }}
                          breakpoints={{
                               : {
                                  slidesPerView: 1,
                                  spaceBetween: 10 },
                               525: {
                                  slidesPerView: 2,
                                  spaceBetween: 20 },
                              1200: {
                                  slidesPerView: 3,
                                  spaceBetween: 30 } }}>
                          {
                           premiumToursServices?.map((tour, idx) => {
                                  return (
                                         <SwiperSlide key={idx}>
                                                 <PremiumItem tour={tour} />
                                           </SwiperSlide>
                                          );  })
                           }
                       </Swiper>
                  </Box>
            </Stack>
    </Stack>
  );
};

export default PremiumTours;
