import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

export const Header = () => {
  return (
    <>
      <section className="" id="header">
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
      </section>
    </>
  );
};
