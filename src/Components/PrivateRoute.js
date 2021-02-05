import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../Redux/auth';

export default function PrivateRoute({
  isVerified,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsVerified);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
