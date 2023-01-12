import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from 'pages/HomePage';
import SharedLayout from './SharedLayout';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import ContactsPage from 'pages/ContactsPage';
// import { Box } from 'utils/Box';
import { fetchCurrentUser } from 'redux/auth/authOperations';
// import { selectIsFetchingCurrent } from 'redux/auth/authSelectors';

// user1qwe@gmail.com
import PrivateRoute from './HOCs/PrivateRoute';
import PublicRoute from './HOCs/PublicRoute';

import { getContacts } from 'redux/contacts/contactsOperations';
import useAuth from 'services/hooks/useAuth';

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useAuth();

  // const fetchingCurrent = useSelector(selectIsFetchingCurrent);
  // console.log(fetchingCurrent);

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(fetchCurrentUser());
    dispatch(getContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} /> */}
          {/* <Route path="contacts" element={<ContactsPage />} /> */}

          <Route element={<PublicRoute />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="registration" element={<RegistrationPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
