import { Box, Button, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import { navLinks } from '../../Database/db';
import { useResponsive } from '../sizes/screen';
import { useTranslation } from 'react-i18next';
import LinkItem from '../listElements/LinkItem';
import useStore from '../../Store/store';

const SectionsLinks = () => {
  const lgScreen = useResponsive().lgScreen;
  const xlgScreen = useResponsive().xlgScreen;
  const { t } = useTranslation();
  const toggleContactModal = useStore(state => state.toggleContactModal)

  const fontSize = xlgScreen ? '16px' : '20px';
  const contact = t("Contact"); 

  return (
    <Box height="35px" width="auto" display="flex">
      <List
        sx={{
          display: !lgScreen ? 'flex' : 'none',
          justifyContent: 'center',
        }}
      >
        {navLinks?.map((item, idx) => (
          <ListItem key={idx} sx={{ width: 'auto' }}>
            {item.name !== contact ? (
              <LinkItem item={item} fontSize={fontSize} />
            ) : (
              <Button disableTouchRipple onClick={toggleContactModal}>
                 <Typography color='#ffffff' fontFamily='Poppins' fontWeight='500' fontSize={fontSize}>
                    {contact}
                 </Typography>
              </Button>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SectionsLinks;
