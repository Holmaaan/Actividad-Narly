import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavbarComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated authentication status

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Implement actual logout logic here
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">OmegaPetShop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          {isLoggedIn ? (
            <>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
              <Nav.Link as={Link} to="/" onClick={handleLogout}>Logout</Nav.Link>
            </>
          ) : (
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
