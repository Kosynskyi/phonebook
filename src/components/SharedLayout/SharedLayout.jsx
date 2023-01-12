import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import UserNav from 'components/UserNav';
import useAuth from 'services/hooks/useAuth';
import Skeleton from 'components/Skeleton';

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
      <Suspense fallback={<Skeleton />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default SharedLayout;
