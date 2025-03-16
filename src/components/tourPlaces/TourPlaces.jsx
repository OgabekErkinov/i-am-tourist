import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
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
    <Stack
      id="city"
      width="90%"
      justifyContent="center"
      alignItems="center"
      my={2}
      gap={{ xs: 1, md: 2 }}
    >
      <Typography
        variant="h4"
        color="black"
        fontFamily="Poppins"
        fontWeight={800}
        fontSize={{ xs: 22, md: 30, lg: 38 }}
        textAlign="center"
        data-aos="fade-up"
      >
        {t("LearnCountry")}
      </Typography>

      {translatedTourPlaces?.length ? (
        <Box
          width="100%"
          display="grid"
          gap={2}
          sx={{ gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" } }}
          data-aos="fade-up"
        >
          {translatedTourPlaces.map((place, idx) => (
            <OnePlace place={place} key={idx} />
          ))}
        </Box>
      ) : (
        <Typography fontSize={18} color="gray" fontStyle="italic">
          {t("NoPlacesAvailable")}
        </Typography>
      )}
    </Stack>
  );
};

export default TourPlaces;