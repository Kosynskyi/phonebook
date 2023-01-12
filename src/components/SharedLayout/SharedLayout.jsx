import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import UserNav from 'components/UserNav';
import useAuth from 'services/hooks/useAuth';

const SharedLayout = () => {
  const isLoggedIn = useAuth();

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '15px',
          backgroundColor: '#DDF1FF',
          padding: 2,
        }}
      >
        <UserNav />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
      <Outlet />
    </Box>
  );
};

export default SharedLayout;
