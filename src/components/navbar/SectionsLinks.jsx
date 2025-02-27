import { Box, List, ListItem, Portal } from '@mui/material';
import React, { useState } from 'react';
import { navLinks } from '../../Database/db';
import { useResponsive } from '../sizes/screen';
import { useTranslation } from 'react-i18next';
import ContactModal from '../modals/ContactModal';
import ButtonItem from '../listElements/ButtonItem';
import LinkItem from '../listElements/LinkItem';

const SectionsLinks = ({ root }) => {
  const [openContactModal, setOpenContactModal] = useState(false);
  const lgScreen = useResponsive().lgScreen;
  const xlgScreen = useResponsive().xlgScreen;
  const { t } = useTranslation();

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
              <ButtonItem openFunction={setOpenContactModal} item={item} fontSize={fontSize} />
            )}
          </ListItem>
        ))}
      </List>

      {openContactModal && (
        <Portal container={root.current}>
          <ContactModal closeFunc={() => setOpenContactModal(false)} />
        </Portal>
      )}
    </Box>
  );
};

export default SectionsLinks;
