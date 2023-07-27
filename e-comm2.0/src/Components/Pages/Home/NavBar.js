import React, { Fragment, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from '../../Cart/Cart';
import cartContext from '../../Conrext-store/CartContext';

const NavBar = () => {
  const ctx = useContext(cartContext);

  const logoutHandler = () => {
    ctx.logout();
  };

  let NoItem;
  NoItem = ctx.items.reduce((curr, item) => curr + item.quantity, 0);

  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <NavLink className='navbar-brand' to='/'>
            Your Logo
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' exact to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/store'>
                  Store
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/about'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/contact'>
                  Contact
                </NavLink>
              </li>
            </ul>
            {!ctx.isLoggedIn && (
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/login'>
                    <button type='button' className='btn btn-primary'>
                      Login
                    </button>
                  </NavLink>
                </li>
              </ul>
            )}
            {ctx.isLoggedIn && (
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/login'>
                    <button
                      type='button'
                      className='btn btn-outline-primary'
                      onClick={logoutHandler}
                    >
                      Logout
                    </button>
                  </NavLink>
                </li>
              </ul>
            )}
            <Cart />
            <div className='navbar-nav ms-2'>
              <p className='cart-item-no'>{NoItem}</p>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
