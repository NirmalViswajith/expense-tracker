import React, { Fragment, useContext } from 'react';
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
      <div className="nav-main-div bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <NavLink
                exact
                to="/"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="bg-gray-900"
              >
                Home
              </NavLink>
              <NavLink
                to="/store"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="bg-gray-900"
              >
                Store
              </NavLink>
              <NavLink
                to="/about"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="bg-gray-900"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="bg-gray-900"
              >
                Contact
              </NavLink>
            </div>
            <div className="flex space-x-4 items-center">
              {!ctx.isLoggedIn && (
                <NavLink
                  to="/login"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-gray-900"
                >
                  <button type="button" className="btn btn-primary login-btn">
                    Login
                  </button>
                </NavLink>
              )}
              {ctx.isLoggedIn && (
                <NavLink
                  to="/login"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                  activeClassName="bg-gray-900"
                >
                  <button
                    type="button"
                    className="btn btn-primary login-btn"
                    onClick={logoutHandler}
                  >
                    Logout
                  </button>
                </NavLink>
              )}
              {ctx.isLoggedIn && <Cart />}
              <p className="cart-item-no">{NoItem}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
