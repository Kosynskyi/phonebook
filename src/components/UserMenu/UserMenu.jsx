import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Logout } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

import { selectUserName } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import useLoading from 'services/hooks/useLoading';

const UserMenu = () => {
  const isLoading = useLoading();
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  const handleClick = () => {
    dispatch(logOut());
    <Navigate to="/" />;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1" component="p">
        Welcome,{' '}
        <Typography variant="body1" component="span" sx={{ fontWeight: 800 }}>
          {name}
        </Typography>
      </Typography>
      <IconButton
        variant="outlined"
        size="sm"
        aria-label="log out"
        sx={{ color: 'red', marginLeft: '15px' }}
        disabled={isLoading}
        type="button"
        onClick={handleClick}
      >
        <Logout />
      </IconButton>
    </Box>
  );
};

export default UserMenu;
