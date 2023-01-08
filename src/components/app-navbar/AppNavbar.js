import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import StyledNav from "./AppNavbar.style";

const AppNavbar = () => {
  const [showMenu, setShowMenu] = useState("false");

  //Handle show menu function
  const handleShowMenu = (val) => {
    setShowMenu(val);
  };

  return (
    <Navbar expand="lg" className="mb-lg-4">
      <Container className="py-3 px-3">
        <Navbar.Brand href="#home">
          <img src="images/logo.svg" alt="Logo" aria-hidden />
        </Navbar.Brand>
        <button
          className="d-lg-none ms-auto close-btn"
          type="button"
          onClick={() => {
            handleShowMenu("true");
          }}
        >
          <img src="images/icon-menu.svg" alt="Menu icon" aria-hidden />
        </button>
        <StyledNav className="ms-auto" show={showMenu}>
          <button
            type="button"
            className="close-btn d-lg-none"
            onClick={() => {
              handleShowMenu("false");
            }}
          >
            <img
              src="images/icon-menu-close.svg"
              alt="Close icon"
              aria-hidden
            />
          </button>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">New</Nav.Link>
          <Nav.Link href="#link">Popular</Nav.Link>
          <Nav.Link href="#link">Trending</Nav.Link>
          <Nav.Link href="#link">Categories</Nav.Link>
        </StyledNav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
