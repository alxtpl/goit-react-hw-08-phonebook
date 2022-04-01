import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthNav = () => (
  <div>
    <Row className="mx-6">
    <NavLink to="/register" exact active>
      <Button variant="info">Sign up</Button>
    </NavLink>
    <NavLink to="/login" exact active>
      <Button variant="info">Login</Button>
    </NavLink>
    </Row>
  </div>
);

export default AuthNav;