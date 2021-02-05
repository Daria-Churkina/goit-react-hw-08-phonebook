import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../Redux/auth';
import s from '../Navigation/Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsVerified);

  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Home page
      </NavLink>

      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts"
            exact
            className={s.link}
            activeClassName={s.activeLink}
          >
            Contacts
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
