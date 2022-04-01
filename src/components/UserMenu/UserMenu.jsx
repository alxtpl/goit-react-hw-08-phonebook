import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { getUserName } from '../../redux/auth/authSelectors';

export default function UserMenu() {
  const dispatch = useDispatch();

  const userName = useSelector(getUserName);
  const onLogout = useCallback(() => dispatch(logOut()), [dispatch]);

  return (
    <div /*style={''}*/>
      <span /*style={''}*/>Welcome, {userName}</span>
      <button type="button" className={''} onClick={onLogout}>
        Out
      </button>
    </div>
  );
}