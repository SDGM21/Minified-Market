import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
} from "reactstrap";
import logo from "../../assets/react.svg";
const NavBarStrap = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <div>
      <Navbar expand={"lg"} color="dark" dark={true}>
        <NavbarBrand href="/home">Mini Market</NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <img src={logo} alt="logo" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>
                <RouterNavLink to="/home">Home</RouterNavLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <RouterNavLink to="/#">Where</RouterNavLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <RouterNavLink to="/#">About</RouterNavLink>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export const Header = () => {
  return (
    <>
      <NavBarStrap />
      {/* <section className="" id="header">
        <header>
          <Container>
            <Row>
              <Col xs={12} lg={3} className="text-center">
                <Link className="header-logo" to="">
                  Logo
                </Link>
              </Col>
              <Col xs={12} lg={9}>
                <nav className="header-navbar">
                  <ul className="d-flex justify-content-between">
                    <li className="navbar-item selected">
                      <Link to="">Inspiration</Link>
                    </li>
                    <li className="navbar-item ">
                      <Link to="">Inspiration</Link>
                    </li>
                    <li className="navbar-item ">
                      <Link to="">Inspiration</Link>
                    </li>
                    <li className="navbar-item ">
                      <Link to="">Inspiration</Link>
                    </li>
                    <li className="navbar-item ">
                      <Link to="">Inspiration</Link>
                    </li>
                  </ul>
                </nav>
              </Col>
            </Row>
          </Container>
        </header>
      </section> */}
    </>
  );
};
