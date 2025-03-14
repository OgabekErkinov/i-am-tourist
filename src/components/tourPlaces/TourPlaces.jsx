import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { tourPlaces } from '../../Database/db';
import OnePlace from './OnePlace';
import Aos from 'aos';
import { useTranslation } from 'react-i18next';

const TourPlaces = () => {
  const { t } = useTranslation();
  const translatedTourPlaces = t('tourPlaces', { returnObjects: true });

  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in-out', delay: 100 });
  }, []);

  return (
    <Stack id="city" width="90%" justifyContent="center" alignItems="center" my="1rem" gap={{ xs: "0.8rem", md: "1rem" }}>
      <Typography
        variant="h4"
        color="black"
        fontFamily="Poppins"
        fontWeight="800"
        fontSize={{ xs: "22px", md: "30px", lg: "38px" }}
        textAlign="center"
        data-aos="fade-up"
      >
        {t("LearnCountry")}
      </Typography>

      {translatedTourPlaces?.length ? (
        <Box
          width="100%"
          display="grid"
          gap="16px"
          sx={{ gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" } }}
          data-aos="fade-up"
        >
          {translatedTourPlaces.map((place, idx) => (
            <OnePlace place={place} key={idx} />
          ))}
        </Box>
      ) : (
        <Typography fontSize="18px" color="gray" fontStyle="italic">
          {t("NoPlacesAvailable")}
        </Typography>
      )}
    </Stack>
  );
};

export default TourPlaces;
