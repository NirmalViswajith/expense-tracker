import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import AuthContext from "../../TokenStore/AuthContext";

const NavBar = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <div className="bg-dark p-2 fixed-top flex justify-between items-center">
      <Container
        className="w-full flex justify-between items-center mx-auto"
        style={{ maxWidth: "700px" }}
      >
        <Navbar className="bg-dark">
          <ul className="nav">
            {authCtx.isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link to="/home" className="nav-link text-white">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/store" className="nav-link text-white">
                    Store
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link text-white">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactUs" className="nav-link text-white">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-link text-white" onClick={() => authCtx.clearToken()}>LogOut</li>
              </>
            )}
            {authCtx.isLoggedIn ? (
              <li className="nav-item">
                <Button
                  variant="outline-light"
                  className="text-light ml-4"
                  onClick={props.onOpen}
                >
                  <Badge variant="dark">{props.cartItemCount}</Badge>
                  <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
                </Button>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="nav-link text-white">
                  Login
                </Link>
              </li>               
            )}
            
          </ul>
        </Navbar>

      </Container>
    </div>
  );
};

export default NavBar;
