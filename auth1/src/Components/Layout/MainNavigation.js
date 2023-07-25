import { Link } from 'react-router-dom';
import AuthContext from '../ContextStore/ContextProvider';
import classes from './MainNavigation.module.css';
import React, {useContext} from 'react';

const MainNavigation = () => {
  const ctx = useContext(AuthContext);
  const clearTokenHandler = (event) => {
    ctx.logout();
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!ctx.isLoggedIn && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {ctx.isLoggedIn && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
          {ctx.isLoggedIn && <li>
            <button onClick={clearTokenHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
