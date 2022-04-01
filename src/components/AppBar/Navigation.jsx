import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/authSelectors';
import Nav from 'react-bootstrap/Nav';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <Nav defaultActiveKey="/">
      <NavLink to="/" exact active>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" exact active>
          Phonebook
        </NavLink>
      )}
    </Nav>
  );
}