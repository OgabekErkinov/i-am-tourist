import { Box, Stack, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { customerSaid } from '../../Database/db';
import { useEffect } from 'react';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';
import useStore from '../../Store/store';

const Customers = () => {
  const light = useStore(state => state.light)
  const textColor = light ? '#FFFFFF' : "#F97316"
  const {t} = useTranslation()
  const customers = t("customers", {returnObjects : true})
    useEffect(() => {
        Aos.init({
            duration : 1000,
            delay : 500
        })
    },[])
  return (
    <Box width="90%" height="auto" mx="auto" my="4rem">
      <Stack justifyContent="center" alignItems="center">
        <Typography variant="h4" data-aos = 'fade-up' fontFamily="Poppins" fontWeight={700} mb="2rem" color={textColor}>
          {t("CustomersSaid")}
        </Typography>
        <Box width="100%" height='13rem'>
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
              width: '100%',
              height: '100%',
              padding: '2rem',
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              525: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1025: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {customers?.map((quote, idx) => (
              <SwiperSlide key={idx}>
                <Stack data-aos = 'fade-up' bgcolor="white" height="100%" width="100%" 
                       padding="1rem" borderRadius="0.5rem" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)">
                  <Typography textAlign="start" fontFamily="Poppins" color="gray">
                    {quote.quote}
                  </Typography>
                  <Typography  textAlign="end" fontFamily="Poppins" fontWeight={400} color="gray">
                    - {quote.name}
                  </Typography>
                </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Stack>
    </Box>
  );
};

export default Customers;
