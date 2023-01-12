import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from 'services/hooks/useAuth';
import Skeleton from 'components/Skeleton';

const PrivateRoute = () => {
  const isLoggedIn = useAuth();

  return isLoggedIn ? (
    <Suspense fallback={<Skeleton />}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
