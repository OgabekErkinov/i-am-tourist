import { Link, List, Stack, Typography } from '@mui/material';

const Lists = ({ heading, array }) => {
  return (
    <Stack height="100%" width="100%" alignItems="start" color="#FFFFFF">
      <Typography
        fontFamily="Poppins"
        fontWeight="600"
        fontSize={{ xs: '16px', sm: '18px' }}
      >
        {heading}
      </Typography>
      {!array || array.length === 0 ? (
        <Typography
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="300"
          color="#FFFFFF"
          mt="0.5rem"
        >
        </Typography>
      ) : (
        <List>
          {array.map((item, idx) => (
            <Link
              key={idx}
              href={item.link ? item.link : '#'}
              sx={{
                textDecoration: 'none',
                ':hover': { textDecoration: 'underline' },
                ':focus': { outline: '2px solid #FFFFFF' },
              }}
            >
              <Typography
                fontFamily="Poppins"
                fontSize={{ xs: '14px', sm: '16px' }}
                fontWeight="400"
                color="#FFFFFF"
                my="0.2rem"
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </List>
      )}
    </Stack>
  );
};

export default Lists;
