import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import { useResponsive} from '../sizes/screen'
import { useTranslation } from 'react-i18next';
import useStore from '../../Store/store';

const Cards = () => {
  const {smScreen, mdScreen} = useResponsive()
  const {t} = useTranslation()
  const addCards = t("addCards", { returnObjects: true });
  const light = useStore(state => state.light)
  const bgColor = light ? '#FFFFFF' : '#1F2937'
  const textColor = light ? '#1F2937' : '#FFFFFF'

  const gridTemplateColumns = smScreen ? 'repeat(1, 1fr)' : mdScreen ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';

  return (
    <Stack maxWidth="1536px" alignItems="center" justifyContent="center" padding="16px">
      <Box width="100%" display="grid" gridTemplateColumns={gridTemplateColumns} gap="16px">
        {addCards.map((item, idx) => (
          <Box key={idx} borderRadius='12px' bgcolor={bgColor} padding='25px' 
               boxShadow ='1px 1px 5px 1px rgb(95, 99, 105)' sx={{transition : '0.4s'}}>
            <Stack alignItems='start' justifyContent='space-evenly'>
               <Typography variant='h3' fontSize='20px' fontFamily='Poppins' fontWeight='600' 
                           color={textColor} sx={{transition : '0.4s'}}>
                  {item.heading}
               </Typography>
               <Typography color='#A1A1AA'>
                  {item.paragraph}
               </Typography>
          </Stack>
          </Box>  
        ))}
      </Box>
    </Stack>
  );
};

export default Cards;
