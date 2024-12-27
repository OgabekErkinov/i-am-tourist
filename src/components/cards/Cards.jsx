import { Box, Stack, useMediaQuery } from '@mui/material';
import React from 'react';
import { addBanners } from '../../Database/db';

const Cards = () => {
  const isLargeScreen = useMediaQuery('(min-width: 900px)');
  const isMediumScreen = useMediaQuery('(min-width: 524px) and (max-width: 899px)');

  const gridTemplateColumns = isLargeScreen
    ? 'repeat(3, 1fr)'
    : isMediumScreen
    ? 'repeat(2, 1fr)'
    : 'repeat(1, 1fr)';

  return (
    <Stack maxWidth="1536px" alignItems="center" justifyContent="center" padding="16px">
      <Stack
        display="grid"
        gridTemplateColumns={gridTemplateColumns}
        gap="16px"
        width="100%"
      >
        {addBanners.map((item, idx) => (
          <Stack
            key={idx}
            sx={{
              boxShadow: '1px 1px 5px 1px rgb(95, 99, 105)',
              padding: '25px',
              borderRadius: '12px',
              backgroundColor: '#fff',
              alignItems: 'start',
              justifyContent: 'space-evenly',
            }}
          >
            <h3
              style={{
                fontSize: '20px',
                fontFamily: 'Poppins',
                fontWeight: '600',
                lineHeight: '28px',
              }}
            >
              {item.heading}
            </h3>
            <p
              style={{
                color: '#A1A1AA',
                height: 'auto',
              }}
            >
              {item.paragraph}
            </p>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Cards;
