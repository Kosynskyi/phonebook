import { Navigate, Outlet } from 'react-router-dom';
import useAuth from 'services/hooks/useAuth';

const PrivateRoute = () => {
  const isLoggedIn = useAuth();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
