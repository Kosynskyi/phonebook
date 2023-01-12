import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from 'services/hooks/useAuth';
import Skeleton from 'components/Skeleton';

const PublicRoute = () => {
  const isLoggedIn = useAuth();
  return isLoggedIn ? (
    <Navigate to="/contacts" />
  ) : (
    <Suspense fallback={<Skeleton />}>
      <Outlet />
    </Suspense>
  );
};

export default PublicRoute;
