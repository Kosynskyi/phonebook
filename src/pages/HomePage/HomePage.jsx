import { Box } from '@mui/material';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#6fb7ff69',
        paddingY: 2,
        paddingTop: 3,
        height: '100vh',
      }}
    >
      <Card sx={{ width: '90%', backgroundColor: '#6FB6FF', maxWidth: 500 }}>
        <Typography
          textColor="black"
          fontSize="lg"
          fontWeight="lg"
          textAlign="center"
          marginBottom="10px"
        >
          Create your phonebook
        </Typography>
        <Typography
          textColor="neutral.500"
          fontSize="m"
          fontWeight="lg"
          textAlign="center"
        >
          Using this phonebook you can add, change and delete contacts. I know
          that you have already phonebook in your phone, but this App will be
          good variant of the additional source, if you will have forget or loss
          your phone, because in this App you have personal secured account,
          which you can open in any devices, which connecting to the internet
          from anywhere on the planet
        </Typography>
      </Card>
    </Box>
  );
};

export default HomePage;
