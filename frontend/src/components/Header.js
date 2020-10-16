import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    // <Container>
    <Row>
      <Col className="text-center py-3">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
              <Navbar.Brand href="/">ProShop</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Home</Nav.Link>
                  <Nav.Link href="/login"><i className="fas fa-user"></i>Sign In</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </Col>
    </Row>
    // </Container>
  );
};

export default Header;
