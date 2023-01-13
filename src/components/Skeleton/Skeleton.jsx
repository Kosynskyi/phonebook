import { RotatingLines } from 'react-loader-spinner';
import { Box } from '@mui/material';

const Skeleton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <RotatingLines />
    </Box>
  );
};

export default Skeleton;
