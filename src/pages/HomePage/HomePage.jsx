import { Box, Typography, Card } from '@mui/material';

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
      <Card
        sx={{
          padding: 2,
          width: '90%',
          backgroundColor: '#6FB6FF',
          maxWidth: 500,
        }}
      >
        <Typography
          sx={{ fontWeight: 600, textAlign: 'center', marginBottom: '10px' }}
          fontSize="lg"
          fontWeight="lg"
        >
          Create your phonebook
        </Typography>
        <Typography fontSize="m" fontWeight="lg" textAlign="center">
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
