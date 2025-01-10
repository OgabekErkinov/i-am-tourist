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
import { useTranslation } from 'react-i18next';
import useStore from '../../Store/store';
import { useResponsive } from '../sizes/screen';

const PremiumTours = ({rootRef}) => {
  const light = useStore(state => state.light)
  const {t} = useTranslation()
  const {smScreen, mdScreen, lgScreen} = useResponsive()
  const bgColor = light ? "#F97316" : '#1F2937'
  const textColor = light ? '#FFFFFF' : "#F97316"
  const sizeFont = smScreen ? '28px' : mdScreen ? '36px' : '48px'
  
  return (
    <Stack id = 'excursions' height="720px" width="100%" bgcolor={bgColor} 
           alignItems="center" justifyContent="center" sx={{transition : '0.4s'}}>
      <Stack height="85%" width="90%" maxWidth="1496px" justifyContent="center" alignItems="center" gap="2rem">
        <Typography fontFamily="Poppins" fontSize={sizeFont} fontWeight="700" textAlign="center" 
                    width="90%" color={textColor} sx={{transition : '0.4s'}}>
                        {t("AboutPremium")}
        </Typography>
              <Swiper
                  modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  slidesPerView={3}
                  spaceBetween={20}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  loop
                  style={{ width : '100%',
                           padding : '2rem'}}
                   breakpoints={{
                              300: {
                                 slidesPerView: 1,
                                 spaceBetween: 40 },
                              767: {
                                 slidesPerView: 2,
                                 spaceBetween: 40 },
                              1025: {
                                  slidesPerView: 3,
                                  spaceBetween: 40 }  }}>
          {premiumToursServices?.map((tour, idx) => (
            <SwiperSlide key={idx}>
              <PremiumItem tour={tour} idx={idx} rootRef = {rootRef} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Stack>
  );
};

export default PremiumTours;
