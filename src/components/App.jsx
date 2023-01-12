import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SharedLayout from './SharedLayout';
import { fetchCurrentUser } from 'redux/auth/authOperations';

import PrivateRoute from './HOCs/PrivateRoute';
import PublicRoute from './HOCs/PublicRoute';

import { getContacts } from 'redux/contacts/contactsOperations';
import useToken from 'services/hooks/useToken';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

// user1qwe@gmail.com
export const App = () => {
  const dispatch = useDispatch();
  const token = useToken();

  useEffect(() => {
    if (!token) return;
    dispatch(fetchCurrentUser());
    dispatch(getContacts());
  }, [dispatch, token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route element={<PublicRoute />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="registration" element={<RegistrationPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
