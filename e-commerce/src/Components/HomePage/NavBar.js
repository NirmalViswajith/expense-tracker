import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="d-flex bg-dark p-2 fixed-top">
      <Container className="d-flex justify-content-between" style={{ maxWidth: '700px' }}>
        <Navbar className="bg-light">
          <Nav className="me-auto">
            <Link to="/home" className="mr-2">Home</Link>
            <Link to="/store" className="mr-2">Store</Link>
            <Link to="/about" className="mr-2">About</Link>
          </Nav>
          <Button variant="outline-light" className="text-dark mx-2" border="white" onClick={props.onOpen}>
            <Badge className="bg-dark">{props.cartItemCount}</Badge>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </Button>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavBar;