import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import PendingView from './Views/PendingView/PendingView';
import Container from './Components/Container/Container';
import AppBar from './Components/AppBar/AppBar';

import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import { authOperations } from './Redux/auth';

const HomeView = lazy(() =>
  import('./Views/HomeView/HomeView' /* webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import(
    './Views/RegisterView/RegisterView' /* webpackChunkName: "register-view" */
  ),
);
const LoginView = lazy(() =>
  import('./Views/LoginView/LoginView' /* webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import(
    './Views/ContactsView/ContactsView' /* webpackChunkName: "contacts-view" */
  ),
);
const NotFoundView = lazy(() =>
  import(
    './Views/NotFoundView/NotFoundView' /* webpackChunkName: "not-found-view" */
  ),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<PendingView />}>
        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3700} position="top-center" />
    </Container>
  );
}

// import ContactsList from './Components/ContactsList';
// import FilterInput from './Components/FilterInput';
// import PhoneBook from './Components/PhoneBook';
// import Section from './Components/Section';
// import './Components/styles.css';

// function App() {
//   return (
//     <div className="main-container">
//       <Section title="Phonebook">
//         <PhoneBook />
//       </Section>
//       <Section title="Contacts">
//         <FilterInput />
//         <ContactsList />
//       </Section>
//     </div>
//   );
// }
