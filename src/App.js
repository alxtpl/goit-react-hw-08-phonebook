import { useEffect, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/RouteHelper/PrivateRout';
import PublicRoute from './components/RouteHelper/PublicRout';
import { getCurrentUser } from './redux/auth/authOperations';
import Container from 'react-bootstrap/Container';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BallTriangle } from 'react-loader-spinner';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "home-page" */)
);
const ContactsView = lazy(() =>
  import(
    './views/ContactsView/ContactsView' /* webpackChunkName: "contacts-page" */
  )
);
const RegisterView = lazy(() =>
  import(
    './views/RegisterView/RegisterView' /* webpackChunkName: "register-page" */
  )
);
const LoginView = lazy(() =>
  import('./views/LoginView/LoginView' /* webpackChunkName: "login-page" */)
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Container>
        <AppBar />
        export default App;
        <Suspense
          fallback={
            <BallTriangle
              className="Loader"
              type="Hearts"
              color="grey"
              height={100}
              width={100}
            />
          }
        >
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>

            <PublicRoute path="/register" redirectTo="/contacts" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}
