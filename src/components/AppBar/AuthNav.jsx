import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className={''}
      activeClassName={''}
    >
      Sign up
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={''}
      activeClassName={''}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;