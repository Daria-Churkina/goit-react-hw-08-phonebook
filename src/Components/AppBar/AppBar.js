import { useSelector } from 'react-redux';
import s from '../AppBar/AppBar.module.css';

import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import { authSelectors } from '../../Redux/auth';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsVerified);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
