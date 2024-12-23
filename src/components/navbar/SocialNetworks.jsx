import { List, ListItem, useMediaQuery } from '@mui/material';
import React from 'react';
import { social_medias } from '../../Database/db';
import NavbarItem from './NavbarItem';

const SocialNetworks = () => {
  const lgScreen = useMediaQuery('(min-width : 767px)');

  return (
    <List
      sx={{
        width: lgScreen ? '120px' : 'auto',  
        height: '24px',
        marginX: '10px',
        display: lgScreen ? 'flex' : 'none', 
        gap: '5px',
        justifyContent: 'center',   
      }}
    >
      {social_medias?.map((media, idx) => {
        return (
          <ListItem
            key={idx}
            sx={{
              padding: 0,
              lineHeight: '33px',
              fontSize: '22px',
              fontWeight: 'medium',
             
              '@media (max-width: 600px)': {
                fontSize: '18px', 
              },
            }}
          >
            <NavbarItem url={media?.link} pathD={media?.pathD} name={media?.name} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default SocialNetworks;
