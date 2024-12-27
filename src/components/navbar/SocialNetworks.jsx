import { Link, List, ListItem, useMediaQuery } from '@mui/material';
import React from 'react';
import { social_medias } from '../../Database/db';

const SocialNetworks = () => {
  const lgScreen = useMediaQuery('(min-width : 767px)');

  return (
    <List
      sx={{
        width:'120px',  
        height: '24px',
        display: lgScreen ? 'flex' : 'none', 
        justifyContent: 'center',   
      }}
    >
      {social_medias?.map((media, idx) => {
        return (
          <ListItem
            key={idx}
            sx={{
              lineHeight: '33px',
              fontWeight: '500',
              height : '100%',
              width : '24px',
              cursor : 'pointer',
             
              '@media (max-width: 600px)': {
                fontSize: '18px', 
              },
            }}
          >
            <Link href = {media?.url}>
                <img src={media?.imgUrl} alt={media?.name}/>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default SocialNetworks;
