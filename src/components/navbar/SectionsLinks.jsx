import { Box, Button, List, ListItem } from '@mui/material';
import React from 'react';
import { navLinks } from '../../Database/db';
import { useResponsive } from '../sizes/screen';
import { useTranslation } from 'react-i18next';
import LinkItem from '../listElements/LinkItem';
import useStore from '../../Store/store';

const SectionsLinks = () => {
  const { lgScreen, xlgScreen } = useResponsive();
  const { t } = useTranslation();
  const { toggleContactModal } = useStore();

  const fontSize = xlgScreen ? '16px' : '20px';

  return (
    <Box height="35px" display="flex">
      {!lgScreen && navLinks?.length > 0 && (
        <List sx={{ display: 'flex', justifyContent: 'center' }}>
          {navLinks.map((item, idx) => {
            const translatedName = t(item.name);
            return translatedName !== t("Contact") ? (
              <ListItem key={idx}>
                <LinkItem item={item} fontSize={fontSize} />
              </ListItem>
            ) : (
              <ListItem key={idx}>
                <Button
                  disableTouchRipple
                  onClick={toggleContactModal}
                  sx={{ color: '#fff', fontFamily: 'Poppins', fontWeight: 500, fontSize }}
                >
                  {t("Contact")}
                </Button>
              </ListItem>
            );
          })}
        </List>
      )}
    </Box>
  );
};

export default SectionsLinks;
