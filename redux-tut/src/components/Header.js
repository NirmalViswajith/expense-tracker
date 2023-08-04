import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authAction } from './store';

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authAction.logout());
  }
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuth && (<ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>)}
      </nav>
    </header>
  );
};

export default Header;
