import React from 'react';
import { Stack, Typography } from '@mui/material';
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
    <Stack
      height="auto"
      width="90%"
      padding="2rem"
      bgcolor="#F97316"
      alignItems="center"
    >
      <Stack
        height="auto"
        width="100%"
        maxWidth="1496px"
        justifyContent="space-between"
        alignItems="center"
        gap="2rem"
      >
        {/* Title */}
        <Typography
          fontFamily="Poppins"
          fontSize={{ xs: '24px', sm: '36px', md: '48px' }}
          lineHeight={{ xs: '28px', sm: '40px', md: '48px' }}
          fontWeight="700"
          textAlign="center"
          width="70%"
        >
          Bizning Premium Turlarimizni Kashf Etish
        </Typography>
        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          slidesPerView={3}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop
          style={{
            maxWidth: '1496px',
            height: '465px',
            padding: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxSizing : 'border-box'
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            524: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {premiumToursServices?.map((tour, idx) => (
            <SwiperSlide key={idx}>
              <PremiumItem tour={tour} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Stack>
  );
};

export default PremiumTours;
