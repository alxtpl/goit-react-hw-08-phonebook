import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { getUserName } from '../../redux/auth/authSelectors';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserMenu() {
  const dispatch = useDispatch();

  const userName = useSelector(getUserName);
  const onLogout = useCallback(() => dispatch(logOut()), [dispatch]);

  return (
    <div /*style={''}*/>
      <span /*style={''}*/>Welcome, {userName}</span>
      <Button variant="danger" type="button" onClick={onLogout}>
        Exit
      </Button>
    </div>
  );
}