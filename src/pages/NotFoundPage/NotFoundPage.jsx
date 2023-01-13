import { Box, IconButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <Typography variant="h1" component="p">
        404
      </Typography>
      <Typography variant="h2" component="p" sx={{ textAlign: 'center' }}>
        page not found :(
      </Typography>
      <Typography variant="h3" component="p">
        back to
      </Typography>
      <Link to="/">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton>
            {' '}
            <HomeIcon sx={{ width: '100px', height: '100px' }} />
          </IconButton>
        </Box>
      </Link>
    </Box>
  );
};

export default NotFoundPage;
