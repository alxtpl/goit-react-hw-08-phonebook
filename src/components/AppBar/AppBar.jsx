import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from './AuthNav';
import { getIsAuthenticated } from '../../redux/auth/authSelectors';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <div className={''}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </Container>
    </Navbar>
  );
}